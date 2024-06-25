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
            var id = this.generateId(30);
            if (safe-- < 0) {
                error("無法建立元素");
                break createIdLoop;
            }
        } while (!this.validateId(id));

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
        document.addEventListener("mousedown", (e) => {
            if (e.which != 1) return;
            this.mouseDown = true;
        });
        this.element.addEventListener("mousedown", (e) => {
            if (e.which != 1) return;
            this.leftClickDown = true;
        });
        this.element.addEventListener("mousemove", (e) => {
            this.isHovering = true;
        });
        this.element.addEventListener("mouseleave", (e) => {
            this.isHovering = false;
        });
        document.addEventListener("mousemove", (e) => {
            var cursor = this.getCursorObBorder(e);
            document.body.style.cursor = cursor;
            if (!this.isMoving && this.isResizing !== "pointer" && this.isResizing !== "default") {
                this.sizeElement(e, this.isResizing);
            } else if (!this.isMoving && this.mouseDown && cursor !== "pointer" && cursor !== "default") {
                this.isResizing = cursor;
                this.sizeElement(e, cursor);
            } else if (this.isMoving) {
                this.moveElement(e);
            } else if (this.isHovering && this.leftClickDown) {
                this.isMoving = true;
                this.moveElement(e);
            }
        });
        document.addEventListener("mouseup", (e) => {
            this.isMoving = false;
            this.leftClickDown = false;
            this.mouseDown = false;
            this.isResizing = "default";
            this.fromX = undefined;
            this.fromY = undefined;
        });
    }

    sizeElement(e, cursor) {
        var element = this.getElement();
        var p = element.getBoundingClientRect();
        switch (cursor) {
            case "nw-resize":
                break;
            case "ne-resize":
                break;
            case "sw-resize":
                break;
            case "se-resize":
                element.style.height = `${e.pageY - p.top}px`;
                element.style.width = `${e.pageX - p.left}px`;
                break;
            case "n-resize":
                break;
            case "s-resize":
                element.style.height = `${e.pageY - p.top}px`;
                break;
            case "w-resize":
                break;
            case "e-resize":
                element.style.width = `${e.pageX - p.left}px`;
                break;
        }
    }

    getCursorObBorder(e) {
        var p = this.element.getBoundingClientRect();
        var isNearTop = this.isNearTop(e, p);
        var isNearBottom = this.isNearBottom(e, p);
        var isNearLeft = this.isNearLeft(e, p);
        var isNearRight = this.isNearRight(e, p);

        if (isNearTop && isNearLeft) {
            return "nw-resize";
        } else if (isNearTop && isNearRight) {
            return "ne-resize";
        } else if (isNearBottom && isNearLeft) {
            return "sw-resize";
        } else if (isNearBottom && isNearRight) {
            return "se-resize";
        } else if (isNearTop) {
            return "n-resize";
        } else if (isNearBottom) {
            return "s-resize";
        } else if (isNearLeft) {
            return "w-resize";
        } else if (isNearRight) {
            return "e-resize";
        } else if (this.isHovering) {
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
                document.body.style.cursor = "s-resize";
                return true;
            }
        }
        document.body.style.cursor = "pointer";
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

    moveElement(e, fromX, fromY) {
        var p = this.element.getBoundingClientRect();

        if (this.fromX == undefined && this.fromY == undefined) {
            this.fromX = e.pageX - p.left; // how far away the cursor is to the element
            this.fromY = e.pageY - p.top;
        }
        var moveToX = e.pageX - this.fromX;
        var moveToY = e.pageY - this.fromY;
        

        this.element.style.left = `${moveToX}px`;
        this.element.style.top = `${moveToY}px`;
    }

    getElement() {
        if (this.id == undefined) {
            error('查無元素');
            return undefined;
        }
        return document.getElementById(this.id);
    }

    validateId(id) {
        if (document.getElementById(id)) {
            return false;
        }
        return true;
    }

    generateId(length) {
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