class FlagComponent {
    constructor(params) {
        // 預設參數
        this.params = {
            width: "10em",
            height: "10em",
            backgroundColor: "#bc002e",
            placement: undefined
        }
        if (params != undefined) {
            for (const [key, value] of Object.entries(params)) {
                this.params[key] = value;
            }
        }
        this.create();
    }

    create() {
        var safe = 30;

        createIdLoop:
        do {
            var id = FlagComponent.generateId(30);
            if (safe-- < 0) {
                error("無法建立元素");
                break createIdLoop;
            }
        } while (!FlagComponent.validateId(id));

        this.id = id;

        var element = document.createElement("div");
        element.id = id;
        element.className = "flag-component";
        element.style.width = this.params.width;
        element.style.height = this.params.height;
        element.style.backgroundColor = this.params.backgroundColor;

        var placement = document.querySelector(this.params.placement);
        if (placement != undefined) {
            placement.appendChild(element);
        }
        this.setEvents();
    }

    setEvents() {
        this.element = this.getElement();
        if (this.element == undefined) {
            return;
        }
        this.element.addEventListener("mousedown", (e) => {
            if (e.which != 1) return;
            this.focusOn();
        });
        this.element.addEventListener("mousemove", (e) => {
            this.isHovering = true;
        });
        this.element.addEventListener("mouseleave", (e) => {
            // maintain status if already doing functions
            this.isHovering = false;
        });
        document.addEventListener("mousedown", (e) => {
            // only react if mouse is left click
            if (e.which != 1) return;

            var cursor = this.getCursorStyle(e);
            if (cursor === "default") {
                this.focusOff();
                return;
            }
            // remember where mouse downed
            var p = this.element.getBoundingClientRect();
            this.moveOffsetX = e.pageX - p.left;
            this.moveOffsetY = e.pageY - p.top;

            this.isMouseDown = true;
        });
        document.addEventListener("mousemove", (e) => {
            if (this.isFocus !== true) return;
            this.processCursorEvent(e);
        });
        document.addEventListener("mouseup", (e) => {
            if (this.isFocus !== true) return;
            this.isMouseDown = false;
            this.isMoving = false;
            this.isSizing = false;
            
            var p = this.element.getBoundingClientRect();
            if (Math.abs(p.left - p.right) <= 10) {
                this.info("物件寬度不得為 0");
                this.element.style.width = `10px`;
            }
            if (Math.abs(p.top - p.bottom) <= 10) {
                this.info("物件長度不得為 0");
                this.element.style.height = `10px`;
            }
        });
    }

    processCursorEvent(e) {
        var cursor;
        // if cursor is already doing moving or sizing, remain style
        if (this.isMoving === true || this.isSizing === true) {
            cursor = document.body.style.cursor;
        // if cursor is hovering on element, element's border, or neither, update style
        } else {
            cursor = this.getCursorStyle(e);
            document.body.style.cursor = cursor;
        }
        // event only happens when mouse is downed
        if (this.isMouseDown !== true) return;
        switch (cursor) {
            case "pointer": // dragging if pointing at element
                this.isMoving = true;
                this.moveElement(e);
                break;
            case "default": // do nothing at default
                this.moveOffsetX = undefined;
                this.moveOffsetY = undefined;
                break;
            default:        // resize element if pointing at corners (neither point nor default)
                this.isSizing = true;
                this.sizeElement(e, cursor);
                break;
        }
    }

    sizeElement(e, cursor) {
        var element = this.getElement();
        var p = element.getBoundingClientRect();

        switch (cursor) {
            case "nw-resize":
                this.sizeNorth(element, e, p);
                this.sizeWest(element, e, p);
                break;
            case "ne-resize":
                this.sizeNorth(element, e, p);
                this.sizeEast(element, e, p);
                break;
            case "sw-resize":
                this.sizeSouth(element, e, p);
                this.sizeWest(element, e, p);
                break;
            case "se-resize":
                this.sizeEast(element, e, p);
                this.sizeSouth(element, e, p);
                break;
            case "n-resize":
                this.sizeNorth(element, e, p);
                break;
            case "s-resize":
                this.sizeSouth(element, e, p);
                break;
            case "w-resize":
                this.sizeWest(element, e, p);
                break;
            case "e-resize":
                this.sizeEast(element, e, p);
                break;
        }
    }

    sizeNorth(element, e, p) {
        if ((p.bottom - e.pageY) > 10) {
            element.style.top = `${e.pageY}px`;
            element.style.height = `${p.bottom - e.pageY}px`;
        }
    }

    sizeSouth(element, e, p) {
        element.style.height = `${e.pageY - p.top}px`;
    }

    sizeEast(element, e, p) {
        if ((e.pageX - p.left) > 10) {
            element.style.width = `${e.pageX - p.left}px`;
        }
    }

    sizeWest(element, e, p) {
        if ((p.right - e.pageX) > 10) {
            element.style.left = `${e.pageX}px`;
            element.style.width = `${p.right - e.pageX}px`;
        }
    }

    moveElement(e) {
        var moveToX = e.pageX - this.moveOffsetX;
        var moveToY = e.pageY - this.moveOffsetY;
        
        this.element.style.left = `${moveToX}px`;
        this.element.style.top = `${moveToY}px`;
    }

    getCursorStyle(e) {
        var p = this.element.getBoundingClientRect();
        var isNearTop = this.isNearTop(e, p);
        var isNearBottom = this.isNearBottom(e, p);
        var isNearLeft = this.isNearLeft(e, p);
        var isNearRight = this.isNearRight(e, p);

        if (isNearTop && isNearLeft) {
            return "nw-resize";
        } else if (isNearTop === true && isNearRight === true) {
            return "ne-resize";
        } else if (isNearBottom === true && isNearLeft === true) {
            return "sw-resize";
        } else if (isNearBottom === true && isNearRight === true) {
            return "se-resize";
        } else if (isNearTop === true) {
            return "n-resize";
        } else if (isNearBottom === true) {
            return "s-resize";
        } else if (isNearLeft === true) {
            return "w-resize";
        } else if (isNearRight === true) {
            return "e-resize";
        } else if (this.isHovering === true) {
            return "pointer";
        }
        return "default";
    }

    isNearTop(e, p) {
        if (e.pageX >= p.left -10 && e.pageX <= p.right +10) {
            if (Math.abs(e.pageY - p.top) <= 10) {
                return true;
            }
        }
        return false;
    }

    isNearBottom(e, p) {
        if (e.pageX >= p.left -10 && e.pageX <= p.right +10) {
            if (Math.abs(e.pageY - p.bottom) <= 10) {
                return true;
            }
        }
        return false;
    }

    isNearLeft(e, p) {
        if (e.pageY >= p.top -10 && e.pageY <= p.bottom +10) {
            if (Math.abs(e.pageX - p.left) <= 10) {
                return true;
            }
        }
        return false;
    }

    isNearRight(e, p) {
        if (e.pageY >= p.top -10 && e.pageY <= p.bottom +10) {
            if (Math.abs(e.pageX - p.right) <= 10) {
                return true;
            }
        }
        return false;
    }

    getElement() {
        if (this.id == undefined) {
            error('查無元素');
            return undefined;
        }
        return document.getElementById(this.id);
    }

    focusOn() {
        this.info("focus on");
        this.getElement().style.boxShadow = "10px 10px 20px 0px #000000";
        this.isFocus = true;
    }

    focusOff() {
        this.info("focus off");
        this.getElement().style.boxShadow = null;
        this.isFocus = false;
    }

    static validateId(id) {
        if (document.getElementById(id)) {
            return false;
        }
        return true;
    }

    static generateId(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    info(message) {
        toastr.success(message);
    }

    error(message) {
        toastr.error(message);
        console.error(message);
    }
}