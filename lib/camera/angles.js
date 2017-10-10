'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AngleCoordinates = require('./coordinates2D'),
    ///
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
    key: 'getXAxisAngle',
    value: function getXAxisAngle() {
      var xAxisAngle = -this.angleCoordinates.getY(); ///

      return xAxisAngle;
    }
  }, {
    key: 'getYAxisAngle',
    value: function getYAxisAngle() {
      var yAxisAngle = +this.angleCoordinates.getX(); ///

      return yAxisAngle;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvYW5nbGVzLmpzIl0sIm5hbWVzIjpbIkFuZ2xlQ29vcmRpbmF0ZXMiLCJyZXF1aXJlIiwiTW91c2VDb29yZGluYXRlcyIsIklOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMiLCJJTklUSUFMX0FOR0xFX0NPT1JESU5BVEVTIiwiTWF0aCIsIlBJIiwiQW5nbGVzIiwibW91c2VEb3duIiwib2Zmc2V0TW91c2VDb29yZGluYXRlcyIsImFuZ2xlQ29vcmRpbmF0ZXMiLCJwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMiLCJ4QXhpc0FuZ2xlIiwiZ2V0WSIsInlBeGlzQW5nbGUiLCJnZXRYIiwibW91c2VDb29yZGluYXRlcyIsInVwZGF0ZUFuZ2xlQ29vcmRpbmF0ZXMiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJtaW51cyIsInJlbGF0aXZlQW5nbGVDb29yZGluYXRlcyIsIm11bHRpcGxpZWRCeSIsInBsdXMiLCJhbmdsZXMiLCJmcm9tTm90aGluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxtQkFBbUJDLFFBQVEsaUJBQVIsQ0FBekI7QUFBQSxJQUFzRDtBQUNoREMsbUJBQW1CRCxRQUFRLG9CQUFSLENBRHpCOztBQUdBLElBQU1FLDRCQUE0QixJQUFJRCxnQkFBSixDQUFxQixDQUFyQixFQUF3QixDQUF4QixDQUFsQztBQUFBLElBQ01FLDRCQUE0QixJQUFJSixnQkFBSixDQUFxQixDQUFyQixFQUF3QkssS0FBS0MsRUFBTCxHQUFVLENBQWxDLENBRGxDOztJQUdNQyxNO0FBQ0osa0JBQVlDLFNBQVosRUFBdUJDLHNCQUF2QixFQUErQ0MsZ0JBQS9DLEVBQWlFQyx3QkFBakUsRUFBMkY7QUFBQTs7QUFDekYsU0FBS0gsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxzQkFBTCxHQUE4QkEsc0JBQTlCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLHdCQUFMLEdBQWdDQSx3QkFBaEM7QUFDRDs7OztvQ0FFZTtBQUNkLFVBQU1DLGFBQWEsQ0FBQyxLQUFLRixnQkFBTCxDQUFzQkcsSUFBdEIsRUFBcEIsQ0FEYyxDQUNvQzs7QUFFbEQsYUFBT0QsVUFBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNRSxhQUFhLENBQUMsS0FBS0osZ0JBQUwsQ0FBc0JLLElBQXRCLEVBQXBCLENBRGMsQ0FDb0M7O0FBRWxELGFBQU9ELFVBQVA7QUFDRDs7O3dDQUVtQkUsZ0IsRUFBa0I7QUFDcEMsV0FBS1IsU0FBTCxHQUFpQixLQUFqQjtBQUNBLFdBQUtHLHdCQUFMLEdBQWdDLEtBQUtELGdCQUFyQztBQUNEOzs7MENBRXFCTSxnQixFQUFrQjtBQUN0QyxXQUFLUixTQUFMLEdBQWlCLElBQWpCO0FBQ0EsV0FBS0Msc0JBQUwsR0FBOEJPLGdCQUE5QjtBQUNEOzs7MENBRXFCQSxnQixFQUFrQjtBQUN0QyxVQUFJLEtBQUtSLFNBQVQsRUFBb0I7QUFDbEIsYUFBS1Msc0JBQUwsQ0FBNEJELGdCQUE1QjtBQUNEO0FBQ0Y7OzsyQ0FFc0JBLGdCLEVBQWtCO0FBQ3ZDLFVBQU1FLDJCQUEyQkYsaUJBQWlCRyxLQUFqQixDQUF1QixLQUFLVixzQkFBNUIsQ0FBakM7QUFBQSxVQUNNVywyQkFBMkJGLHlCQUF5QkcsWUFBekIsQ0FBc0NoQixLQUFLQyxFQUFMLEdBQVUsR0FBaEQsQ0FEakMsQ0FEdUMsQ0FFaUQ7O0FBRXhGLFdBQUtJLGdCQUFMLEdBQXdCLEtBQUtDLHdCQUFMLENBQThCVyxJQUE5QixDQUFtQ0Ysd0JBQW5DLENBQXhCO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTVosWUFBWSxLQUFsQjtBQUFBLFVBQ01DLHlCQUF5Qk4seUJBRC9CO0FBQUEsVUFFTU8sbUJBQW1CTix5QkFGekI7QUFBQSxVQUdNTywyQkFBMkJELGdCQUhqQztBQUFBLFVBSU1hLFNBQVMsSUFBSWhCLE1BQUosQ0FBV0MsU0FBWCxFQUFzQkMsc0JBQXRCLEVBQThDQyxnQkFBOUMsRUFBZ0VDLHdCQUFoRSxDQUpmOztBQU1BLGFBQU9ZLE1BQVA7QUFDRDs7Ozs7O0FBR0gsSUFBTUEsU0FBU2hCLE9BQU9pQixXQUFQLEVBQWY7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUJILE1BQWpCIiwiZmlsZSI6ImFuZ2xlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQW5nbGVDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4vY29vcmRpbmF0ZXMyRCcpLCAgLy8vXG4gICAgICBNb3VzZUNvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi9tb3VzZUNvb3JkaW5hdGVzJyk7XG5cbmNvbnN0IElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMgPSBuZXcgTW91c2VDb29yZGluYXRlcygwLCAwKSxcbiAgICAgIElOSVRJQUxfQU5HTEVfQ09PUkRJTkFURVMgPSBuZXcgQW5nbGVDb29yZGluYXRlcygwLCBNYXRoLlBJIC8gMik7XG5cbmNsYXNzIEFuZ2xlcyB7XG4gIGNvbnN0cnVjdG9yKG1vdXNlRG93biwgb2Zmc2V0TW91c2VDb29yZGluYXRlcywgYW5nbGVDb29yZGluYXRlcywgcHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG4gICAgdGhpcy5vZmZzZXRNb3VzZUNvb3JkaW5hdGVzID0gb2Zmc2V0TW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMgPSBhbmdsZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gcHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0WEF4aXNBbmdsZSgpIHtcbiAgICBjb25zdCB4QXhpc0FuZ2xlID0gLXRoaXMuYW5nbGVDb29yZGluYXRlcy5nZXRZKCk7IC8vL1xuXG4gICAgcmV0dXJuIHhBeGlzQW5nbGU7XG4gIH1cblxuICBnZXRZQXhpc0FuZ2xlKCkge1xuICAgIGNvbnN0IHlBeGlzQW5nbGUgPSArdGhpcy5hbmdsZUNvb3JkaW5hdGVzLmdldFgoKTsgLy8vXG5cbiAgICByZXR1cm4geUF4aXNBbmdsZTtcbiAgfVxuICBcbiAgbW91c2VVcEV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICB0aGlzLnByZXZpb3VzQW5nbGVDb29yZGluYXRlcyA9IHRoaXMuYW5nbGVDb29yZGluYXRlcztcbiAgfVxuXG4gIG1vdXNlRG93bkV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgIHRoaXMub2Zmc2V0TW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIGlmICh0aGlzLm1vdXNlRG93bikge1xuICAgICAgdGhpcy51cGRhdGVBbmdsZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcykge1xuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXMubWludXModGhpcy5vZmZzZXRNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICByZWxhdGl2ZUFuZ2xlQ29vcmRpbmF0ZXMgPSByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMubXVsdGlwbGllZEJ5KE1hdGguUEkgLyAxODApOyAgLy8vXG5cbiAgICB0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMgPSB0aGlzLnByZXZpb3VzQW5nbGVDb29yZGluYXRlcy5wbHVzKHJlbGF0aXZlQW5nbGVDb29yZGluYXRlcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbW91c2VEb3duID0gZmFsc2UsXG4gICAgICAgICAgb2Zmc2V0TW91c2VDb29yZGluYXRlcyA9IElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMsXG4gICAgICAgICAgYW5nbGVDb29yZGluYXRlcyA9IElOSVRJQUxfQU5HTEVfQ09PUkRJTkFURVMsXG4gICAgICAgICAgcHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gYW5nbGVDb29yZGluYXRlcyxcbiAgICAgICAgICBhbmdsZXMgPSBuZXcgQW5nbGVzKG1vdXNlRG93biwgb2Zmc2V0TW91c2VDb29yZGluYXRlcywgYW5nbGVDb29yZGluYXRlcywgcHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiBhbmdsZXM7XG4gIH1cbn1cblxuY29uc3QgYW5nbGVzID0gQW5nbGVzLmZyb21Ob3RoaW5nKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5nbGVzO1xuIl19