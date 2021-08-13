var lazyLoadInstance = new LazyLoad({
  use_native: true,
  callback_error: function (element) {
    var previous = element.parentElement;
    previous.innerHTML = '<img alt="Изображение отсутстствует" src="img/icons/no-image.png">';
}
});
  lazyLoadInstance.update();
  
