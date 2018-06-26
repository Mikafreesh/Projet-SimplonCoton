function haveAnimation() {
  var animation = false,
    domPrefixes = ['Webkit', 'Moz', 'O', 'ms', 'Khtml'],
    elm = document.createElement("span");
  if (typeof (elm.style["animationName"]) != 'undefined') {
    return true;
  }
  for (var i = 0; i < 5; i++) {
    if (typeof (elm.style[domPrefixes[i] + 'AnimationName']) != 'undefined') {
      return true;
    }
  }
  return false;
}
