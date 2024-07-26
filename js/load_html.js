async function loadHtml() {
    var loadScreen = await (await fetch("/html/load_screen")).text();
    document.body.insertAdjacentHTML('afterend', loadScreen);


    var loaders = document.querySelectorAll("[data-load]");
    for (var loader of loaders) {
        var loadTarget = loader.getAttribute("data-load");
        for (var html of loadTarget.split(",")) {
            try {
                loader.innerHTML = await (await fetch(html)).text() + loader.innerHTML;
            } catch (e) {
                console.log(e);
            }
        }
    }
    var loadScreenEle = document.querySelector(".load-screen");
    loadScreenEle.remove();
}
loadHtml();