var Swipe = function (element, callback, options) {
  options = options || {};
  var time,
    startX,
    startY,
    timeThreshold = options.timeThreshold || 300,
    distanceThreshold = options.distanceThreshold || 100;

  element.addEventListener('touchstart', function (event) {
    var touch = event.changedTouches[0];
    startX = touch.pageX;
    startY = touch.pageY;
    time = new Date().getTime();
  });

  element.addEventListener('touchend', function (event) {
    var touch = event.changedTouches[0],
      endTime = new Date().getTime(),
      endX = touch.pageX,
      endY = touch.pageY,
      isHorizontallySwiped = Math.abs(endX - startX) > distanceThreshold,
      isVerticallySwiped = Math.abs(endY - startY) > distanceThreshold;
    if ((endTime - time <= timeThreshold)
        && (isHorizontallySwiped || isVerticallySwiped)) {
      callback({
        left: isHorizontallySwiped && (endX > startX),
        right: isHorizontallySwiped && (startX > endX),
        top: isVerticallySwiped && (endY > startY),
        bottom: isVerticallySwiped && (startY > endY)
      })
    }
  });
};

module.exports = Swipe;