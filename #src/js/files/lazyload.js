var lazyLoadInstance = new LazyLoad({
  use_native: true,
  callback_error: function (element) {
    var previous = element.parentElement;
    previous.innerHTML = '<img alt="Изображение отсутстствует" src="img/icons/no-image.png">';
}
});
  lazyLoadInstance.update();
  
// (function () {
//   function logElementEvent(eventName, element) {
//     console.log(Date.now(), eventName, element.getAttribute("data-src"));
//   }

//   var callback_enter = function (element) {
//     logElementEvent("🔑 ENTERED", element);
//   };
//   var callback_exit = function (element) {
//     logElementEvent("🚪 EXITED", element);
//   };
//   var callback_loading = function (element) {
//     logElementEvent("⌚ LOADING", element);
//   };
//   var callback_loaded = function (element) {
//     logElementEvent("👍 LOADED", element);
//   };
//   var callback_error = function (element) {
//     logElementEvent("💀 ERROR", element);
//     element.src =
//       "img/1.jpg";
//   };
//   var callback_cancel = function (element) {
//     logElementEvent("🔥 CANCEL", element);
//   };
//   var callback_finish = function () {
//     logElementEvent("✔️ FINISHED", document.documentElement);
//   };

//   ll = new LazyLoad({
//     // Assign the callbacks defined above
//     callback_enter: callback_enter,
//     callback_exit: callback_exit,
//     callback_cancel: callback_cancel,
//     callback_loading: callback_loading,
//     callback_loaded: callback_loaded,
//     callback_error: callback_error,
//     callback_finish: callback_finish
//   });
// })();