var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");

function isIE() {
    ua = navigator.userAgent;
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

    return is_ie;
}


if (isIE()) {
    document.querySelector('body').classList.add('ie');
    function ibg() {
        let ibg = document.querySelectorAll("._ibg");
        for (var i = 0; i < ibg.length; i++) {
            if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('data-src') != null) {
                ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('data-src') + ')';
            }
        }
    }
    ibg();
    function loadScript() {
        let corejsIE = document.createElement('script');
        let appjsIE = document.createElement('script');
        corejsIE.src = 'jsIE/corejs.js';
        appjsIE.src = 'jsIE/app.min.js';
        document.body.appendChild(corejsIE);
        document.body.appendChild(appjsIE);
    }
    function initialize() {
        console.log('initialize');
    }
    window.onload = loadScript;
}
else {
    function loadScript() {
        let appjs = document.createElement('script');
        appjs.src = 'js/app.min.js';
        document.body.appendChild(appjs);
    }
    function initialize() {
        console.log('initialize');
    }
    window.onload = loadScript;
}
