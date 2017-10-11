'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AngleCoordinates = require('./angleCoordinates'),
    MouseCoordinates = require('./mouseCoordinates');

var INITIAL_MOUSE_COORDINATES = new MouseCoordinates(0, 0),
    INITIAL_ANGLE_COORDINATES = new AngleCoordinates(0, Math.PI / 2);

var Angles = function () {
  function Angles(mouseDown, offsetMouseCoordinates, angleCoordinates, previousAngleCoordinates) {
    _classCallCheck(this, Angles);

    this.mouseDown = mouseDown;
    this.offsetMouseCoordinates = offsetMouseCoordinates;
    this.angleCoordinates = angleCoordinates;
    this.previousAngleCoordinates = previousAngleCoordinates;
  }

  _createClass(Angles, [{
    key: 'getXAngle',
    value: function getXAngle() {
      var xAngle = -this.angleCoordinates.getY(); ///

      return xAngle;
    }
  }, {
    key: 'getYAngle',
    value: function getYAngle() {
      var yAngle = 0;

      return yAngle;
    }
  }, {
    key: 'getZAngle',
    value: function getZAngle() {
      var zAngle = +this.angleCoordinates.getX(); ///

      return zAngle;
    }
  }, {
    key: 'mouseUpEventHandler',
    value: function mouseUpEventHandler(mouseCoordinates) {
      this.mouseDown = false;
      this.previousAngleCoordinates = this.angleCoordinates;
    }
  }, {
    key: 'mouseDownEventHandler',
    value: function mouseDownEventHandler(mouseCoordinates) {
      this.mouseDown = true;
      this.offsetMouseCoordinates = mouseCoordinates;
    }
  }, {
    key: 'mouseMoveEventHandler',
    value: function mouseMoveEventHandler(mouseCoordinates) {
      if (this.mouseDown) {
        this.updateAngleCoordinates(mouseCoordinates);
      }
    }
  }, {
    key: 'updateAngleCoordinates',
    value: function updateAngleCoordinates(mouseCoordinates) {
      var relativeMouseCoordinates = mouseCoordinates.minus(this.offsetMouseCoordinates),
          relativeAngleCoordinates = relativeMouseCoordinates.multipliedBy(Math.PI / 180); ///

      this.angleCoordinates = this.previousAngleCoordinates.plus(relativeAngleCoordinates);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var mouseDown = false,
          offsetMouseCoordinates = INITIAL_MOUSE_COORDINATES,
          angleCoordinates = INITIAL_ANGLE_COORDINATES,
          previousAngleCoordinates = angleCoordinates,
          angles = new Angles(mouseDown, offsetMouseCoordinates, angleCoordinates, previousAngleCoordinates);

      return angles;
    }
  }]);

  return Angles;
}();

var angles = Angles.fromNothing();

module.exports = angles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvYW5nbGVzLmpzIl0sIm5hbWVzIjpbIkFuZ2xlQ29vcmRpbmF0ZXMiLCJyZXF1aXJlIiwiTW91c2VDb29yZGluYXRlcyIsIklOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMiLCJJTklUSUFMX0FOR0xFX0NPT1JESU5BVEVTIiwiTWF0aCIsIlBJIiwiQW5nbGVzIiwibW91c2VEb3duIiwib2Zmc2V0TW91c2VDb29yZGluYXRlcyIsImFuZ2xlQ29vcmRpbmF0ZXMiLCJwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMiLCJ4QW5nbGUiLCJnZXRZIiwieUFuZ2xlIiwiekFuZ2xlIiwiZ2V0WCIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJ1cGRhdGVBbmdsZUNvb3JkaW5hdGVzIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwibWludXMiLCJyZWxhdGl2ZUFuZ2xlQ29vcmRpbmF0ZXMiLCJtdWx0aXBsaWVkQnkiLCJwbHVzIiwiYW5nbGVzIiwiZnJvbU5vdGhpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsbUJBQW1CQyxRQUFRLG9CQUFSLENBQXpCO0FBQUEsSUFDTUMsbUJBQW1CRCxRQUFRLG9CQUFSLENBRHpCOztBQUdBLElBQU1FLDRCQUE0QixJQUFJRCxnQkFBSixDQUFxQixDQUFyQixFQUF3QixDQUF4QixDQUFsQztBQUFBLElBQ01FLDRCQUE0QixJQUFJSixnQkFBSixDQUFxQixDQUFyQixFQUF3QkssS0FBS0MsRUFBTCxHQUFVLENBQWxDLENBRGxDOztJQUdNQyxNO0FBQ0osa0JBQVlDLFNBQVosRUFBdUJDLHNCQUF2QixFQUErQ0MsZ0JBQS9DLEVBQWlFQyx3QkFBakUsRUFBMkY7QUFBQTs7QUFDekYsU0FBS0gsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxzQkFBTCxHQUE4QkEsc0JBQTlCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLHdCQUFMLEdBQWdDQSx3QkFBaEM7QUFDRDs7OztnQ0FFVztBQUNWLFVBQU1DLFNBQVMsQ0FBQyxLQUFLRixnQkFBTCxDQUFzQkcsSUFBdEIsRUFBaEIsQ0FEVSxDQUNvQzs7QUFFOUMsYUFBT0QsTUFBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNRSxTQUFTLENBQWY7O0FBRUEsYUFBT0EsTUFBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNQyxTQUFTLENBQUMsS0FBS0wsZ0JBQUwsQ0FBc0JNLElBQXRCLEVBQWhCLENBRFUsQ0FDb0M7O0FBRTlDLGFBQU9ELE1BQVA7QUFDRDs7O3dDQUVtQkUsZ0IsRUFBa0I7QUFDcEMsV0FBS1QsU0FBTCxHQUFpQixLQUFqQjtBQUNBLFdBQUtHLHdCQUFMLEdBQWdDLEtBQUtELGdCQUFyQztBQUNEOzs7MENBRXFCTyxnQixFQUFrQjtBQUN0QyxXQUFLVCxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsV0FBS0Msc0JBQUwsR0FBOEJRLGdCQUE5QjtBQUNEOzs7MENBRXFCQSxnQixFQUFrQjtBQUN0QyxVQUFJLEtBQUtULFNBQVQsRUFBb0I7QUFDbEIsYUFBS1Usc0JBQUwsQ0FBNEJELGdCQUE1QjtBQUNEO0FBQ0Y7OzsyQ0FFc0JBLGdCLEVBQWtCO0FBQ3ZDLFVBQU1FLDJCQUEyQkYsaUJBQWlCRyxLQUFqQixDQUF1QixLQUFLWCxzQkFBNUIsQ0FBakM7QUFBQSxVQUNNWSwyQkFBMkJGLHlCQUF5QkcsWUFBekIsQ0FBc0NqQixLQUFLQyxFQUFMLEdBQVUsR0FBaEQsQ0FEakMsQ0FEdUMsQ0FFaUQ7O0FBRXhGLFdBQUtJLGdCQUFMLEdBQXdCLEtBQUtDLHdCQUFMLENBQThCWSxJQUE5QixDQUFtQ0Ysd0JBQW5DLENBQXhCO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTWIsWUFBWSxLQUFsQjtBQUFBLFVBQ01DLHlCQUF5Qk4seUJBRC9CO0FBQUEsVUFFTU8sbUJBQW1CTix5QkFGekI7QUFBQSxVQUdNTywyQkFBMkJELGdCQUhqQztBQUFBLFVBSU1jLFNBQVMsSUFBSWpCLE1BQUosQ0FBV0MsU0FBWCxFQUFzQkMsc0JBQXRCLEVBQThDQyxnQkFBOUMsRUFBZ0VDLHdCQUFoRSxDQUpmOztBQU1BLGFBQU9hLE1BQVA7QUFDRDs7Ozs7O0FBR0gsSUFBTUEsU0FBU2pCLE9BQU9rQixXQUFQLEVBQWY7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUJILE1BQWpCIiwiZmlsZSI6ImFuZ2xlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQW5nbGVDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4vYW5nbGVDb29yZGluYXRlcycpLFxuICAgICAgTW91c2VDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4vbW91c2VDb29yZGluYXRlcycpO1xuXG5jb25zdCBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTID0gbmV3IE1vdXNlQ29vcmRpbmF0ZXMoMCwgMCksXG4gICAgICBJTklUSUFMX0FOR0xFX0NPT1JESU5BVEVTID0gbmV3IEFuZ2xlQ29vcmRpbmF0ZXMoMCwgTWF0aC5QSSAvIDIpO1xuXG5jbGFzcyBBbmdsZXMge1xuICBjb25zdHJ1Y3Rvcihtb3VzZURvd24sIG9mZnNldE1vdXNlQ29vcmRpbmF0ZXMsIGFuZ2xlQ29vcmRpbmF0ZXMsIHByZXZpb3VzQW5nbGVDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICAgIHRoaXMub2Zmc2V0TW91c2VDb29yZGluYXRlcyA9IG9mZnNldE1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5hbmdsZUNvb3JkaW5hdGVzID0gYW5nbGVDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzQW5nbGVDb29yZGluYXRlcyA9IHByZXZpb3VzQW5nbGVDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldFhBbmdsZSgpIHtcbiAgICBjb25zdCB4QW5nbGUgPSAtdGhpcy5hbmdsZUNvb3JkaW5hdGVzLmdldFkoKTsgLy8vXG5cbiAgICByZXR1cm4geEFuZ2xlO1xuICB9XG4gIFxuICBnZXRZQW5nbGUoKSB7XG4gICAgY29uc3QgeUFuZ2xlID0gMDtcbiAgICBcbiAgICByZXR1cm4geUFuZ2xlO1xuICB9XG5cbiAgZ2V0WkFuZ2xlKCkge1xuICAgIGNvbnN0IHpBbmdsZSA9ICt0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMuZ2V0WCgpOyAvLy9cblxuICAgIHJldHVybiB6QW5nbGU7XG4gIH1cbiAgXG4gIG1vdXNlVXBFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgdGhpcy5wcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMgPSB0aGlzLmFuZ2xlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZURvd25FdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgICB0aGlzLm9mZnNldE1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICBpZiAodGhpcy5tb3VzZURvd24pIHtcbiAgICAgIHRoaXMudXBkYXRlQW5nbGVDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVBbmdsZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzLm1pbnVzKHRoaXMub2Zmc2V0TW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgcmVsYXRpdmVBbmdsZUNvb3JkaW5hdGVzID0gcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLm11bHRpcGxpZWRCeShNYXRoLlBJIC8gMTgwKTsgIC8vL1xuXG4gICAgdGhpcy5hbmdsZUNvb3JkaW5hdGVzID0gdGhpcy5wcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMucGx1cyhyZWxhdGl2ZUFuZ2xlQ29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG1vdXNlRG93biA9IGZhbHNlLFxuICAgICAgICAgIG9mZnNldE1vdXNlQ29vcmRpbmF0ZXMgPSBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTLFxuICAgICAgICAgIGFuZ2xlQ29vcmRpbmF0ZXMgPSBJTklUSUFMX0FOR0xFX0NPT1JESU5BVEVTLFxuICAgICAgICAgIHByZXZpb3VzQW5nbGVDb29yZGluYXRlcyA9IGFuZ2xlQ29vcmRpbmF0ZXMsXG4gICAgICAgICAgYW5nbGVzID0gbmV3IEFuZ2xlcyhtb3VzZURvd24sIG9mZnNldE1vdXNlQ29vcmRpbmF0ZXMsIGFuZ2xlQ29vcmRpbmF0ZXMsIHByZXZpb3VzQW5nbGVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gYW5nbGVzO1xuICB9XG59XG5cbmNvbnN0IGFuZ2xlcyA9IEFuZ2xlcy5mcm9tTm90aGluZygpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ2xlcztcbiJdfQ==