document.addEventListener('DOMContentLoaded', function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    function menuAnimation() {
        var menu = document.querySelector("nav h3")
        var full = document.querySelector("#full-scr")
        var navimg = document.querySelector("nav img")
        var flag = 0
        menu.addEventListener("click", function () {
            if (flag == 0) {
                full.style.top = 0
                navimg.style.opacity = 0
                flag = 1
            } else {
                full.style.top = "-100%"
                navimg.style.opacity = 1
                flag = 0
            }
        })
    }

    function loaderAnimation() {
        var loader = document.querySelector("#loader")
        setTimeout(function () {
            loader.style.top = "-100%"
        }, 4200)
    }
    menuAnimation()
    loaderAnimation()
});
