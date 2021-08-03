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
            if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
                ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
            }
        }
    }
    ibg();
//     function loadScript() {
//         let corejsIE = document.createElement( 'script' );
//         // let jqueryIE = document.createElement( 'script' );
//         let vendorsjsIE = document.createElement( 'script' );
//         let appjsIE = document.createElement( 'script' );
//         corejsIE.type = 'text/javascript';
//         // jqueryIE.type = 'text/javascript';
//         vendorsjsIE.type = 'text/javascript';
//         appjsIE.type = 'text/javascript';
//         corejsIE.src = 'js/corejs.min.js';
//         // jqueryIE.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
//         vendorsjsIE.src = 'js/vendors.min.js';
//         appjsIE.src = 'js/app.min.js';
//         document.body.appendChild(corejsIE);
//         // document.body.appendChild(jqueryIE);
//         document.body.appendChild(vendorsjsIE);
//         document.body.appendChild(appjsIE);
//     }
//     function initialize() {
//         console.log('initialize');
//     }
//     window.onload = loadScript;
// }
// else{
//     function loadScript() {
//         let corejsIE = document.createElement( 'script' );
//         // let jqueryIE = document.createElement( 'script' );
//         let vendorsjs = document.createElement( 'script' );
//         let appjs = document.createElement( 'script' );
//         // jqueryIE.type = 'text/javascript';
//         // vendorsjs.type = 'text/javascript';
//         // appjs.type = 'text/javascript';
//         corejsIE.src = 'js/corejs.js';
//         // jqueryIE.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
//         vendorsjs.src = 'js/vendors.min.js';
//         appjs.src = 'js/app.min.js';
//         document.body.appendChild(corejsIE);
//         // document.body.appendChild(jqueryIE);
//         document.body.appendChild(vendorsjs);
//         document.body.appendChild(appjs);
//     }
//     function initialize() {
//         console.log('initialize');
//     }
//     window.onload = loadScript;
}
