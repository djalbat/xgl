'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var constants = require('../constants');

var create = mat4.create,
    perspective = mat4.perspective,
    FIELD_OF_VIEW = constants.FIELD_OF_VIEW,
    Z_NEAR = constants.Z_NEAR,
    Z_FAR = constants.Z_FAR;

var Projection = function () {
  function Projection(mat4) {
    _classCallCheck(this, Projection);

    this.mat4 = mat4;
  }

  _createClass(Projection, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.mat4;
    }
  }], [{
    key: 'fromWidthAndHeight',
    value: function fromWidthAndHeight(width, height) {
      var mat4 = create(),
          fieldOfView = FIELD_OF_VIEW,
          aspectRatio = width / height,
          zNear = Z_NEAR,
          zFar = Z_FAR,
          projection = new Projection(mat4);

      perspective(mat4, fieldOfView, aspectRatio, zNear, zFar);

      return projection;
    }
  }]);

  return Projection;
}();

module.exports = Projection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zY2VuZS9wcm9qZWN0aW9uLmpzIl0sIm5hbWVzIjpbIm1hdDQiLCJyZXF1aXJlIiwiY29uc3RhbnRzIiwiY3JlYXRlIiwicGVyc3BlY3RpdmUiLCJGSUVMRF9PRl9WSUVXIiwiWl9ORUFSIiwiWl9GQVIiLCJQcm9qZWN0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJmaWVsZE9mVmlldyIsImFzcGVjdFJhdGlvIiwiek5lYXIiLCJ6RmFyIiwicHJvamVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYixDLENBQWtDOztBQUVsQyxJQUFNQyxZQUFZRCxRQUFRLGNBQVIsQ0FBbEI7O0lBRVFFLE0sR0FBd0JILEksQ0FBeEJHLE07SUFBUUMsVyxHQUFnQkosSSxDQUFoQkksVztJQUNSQyxhLEdBQWlDSCxTLENBQWpDRyxhO0lBQWVDLE0sR0FBa0JKLFMsQ0FBbEJJLE07SUFBUUMsSyxHQUFVTCxTLENBQVZLLEs7O0lBRXpCQyxVO0FBQ0osc0JBQVlSLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLElBQVo7QUFDRDs7O3VDQUV5QlMsSyxFQUFPQyxNLEVBQVE7QUFDdkMsVUFBTVYsT0FBT0csUUFBYjtBQUFBLFVBQ01RLGNBQWNOLGFBRHBCO0FBQUEsVUFFTU8sY0FBY0gsUUFBUUMsTUFGNUI7QUFBQSxVQUdNRyxRQUFRUCxNQUhkO0FBQUEsVUFJTVEsT0FBT1AsS0FKYjtBQUFBLFVBS01RLGFBQWEsSUFBSVAsVUFBSixDQUFlUixJQUFmLENBTG5COztBQU9BSSxrQkFBWUosSUFBWixFQUFrQlcsV0FBbEIsRUFBK0JDLFdBQS9CLEVBQTRDQyxLQUE1QyxFQUFtREMsSUFBbkQ7O0FBRUEsYUFBT0MsVUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQlQsVUFBakIiLCJmaWxlIjoicHJvamVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTsgIC8vL1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBjcmVhdGUsIHBlcnNwZWN0aXZlIH0gPSBtYXQ0LFxuICAgICAgeyBGSUVMRF9PRl9WSUVXLCBaX05FQVIsIFpfRkFSIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIFByb2plY3Rpb24ge1xuICBjb25zdHJ1Y3RvcihtYXQ0KSB7XG4gICAgdGhpcy5tYXQ0ID0gbWF0NDtcbiAgfVxuICBcbiAgZ2V0TWF0cml4KCkge1xuICAgIHJldHVybiB0aGlzLm1hdDQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBtYXQ0ID0gY3JlYXRlKCksXG4gICAgICAgICAgZmllbGRPZlZpZXcgPSBGSUVMRF9PRl9WSUVXLFxuICAgICAgICAgIGFzcGVjdFJhdGlvID0gd2lkdGggLyBoZWlnaHQsXG4gICAgICAgICAgek5lYXIgPSBaX05FQVIsXG4gICAgICAgICAgekZhciA9IFpfRkFSLFxuICAgICAgICAgIHByb2plY3Rpb24gPSBuZXcgUHJvamVjdGlvbihtYXQ0KTtcblxuICAgIHBlcnNwZWN0aXZlKG1hdDQsIGZpZWxkT2ZWaWV3LCBhc3BlY3RSYXRpbywgek5lYXIsIHpGYXIpO1xuXG4gICAgcmV0dXJuIHByb2plY3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9qZWN0aW9uO1xuIl19