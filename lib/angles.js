'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AngleCoordinates = require('./coordinates2D'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9hbmdsZXMuanMiXSwibmFtZXMiOlsiQW5nbGVDb29yZGluYXRlcyIsInJlcXVpcmUiLCJNb3VzZUNvb3JkaW5hdGVzIiwiSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyIsIklOSVRJQUxfQU5HTEVfQ09PUkRJTkFURVMiLCJNYXRoIiwiUEkiLCJBbmdsZXMiLCJtb3VzZURvd24iLCJvZmZzZXRNb3VzZUNvb3JkaW5hdGVzIiwiYW5nbGVDb29yZGluYXRlcyIsInByZXZpb3VzQW5nbGVDb29yZGluYXRlcyIsInhBeGlzQW5nbGUiLCJnZXRZIiwieUF4aXNBbmdsZSIsImdldFgiLCJtb3VzZUNvb3JkaW5hdGVzIiwidXBkYXRlQW5nbGVDb29yZGluYXRlcyIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsIm1pbnVzIiwicmVsYXRpdmVBbmdsZUNvb3JkaW5hdGVzIiwibXVsdGlwbGllZEJ5IiwicGx1cyIsImFuZ2xlcyIsImZyb21Ob3RoaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLG1CQUFtQkMsUUFBUSxpQkFBUixDQUF6QjtBQUFBLElBQ01DLG1CQUFtQkQsUUFBUSxvQkFBUixDQUR6Qjs7QUFHQSxJQUFNRSw0QkFBNEIsSUFBSUQsZ0JBQUosQ0FBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsQ0FBbEM7QUFBQSxJQUNNRSw0QkFBNEIsSUFBSUosZ0JBQUosQ0FBcUIsQ0FBckIsRUFBd0JLLEtBQUtDLEVBQUwsR0FBVSxDQUFsQyxDQURsQzs7SUFHTUMsTTtBQUNKLGtCQUFZQyxTQUFaLEVBQXVCQyxzQkFBdkIsRUFBK0NDLGdCQUEvQyxFQUFpRUMsd0JBQWpFLEVBQTJGO0FBQUE7O0FBQ3pGLFNBQUtILFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0Msc0JBQUwsR0FBOEJBLHNCQUE5QjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxTQUFLQyx3QkFBTCxHQUFnQ0Esd0JBQWhDO0FBQ0Q7Ozs7b0NBRWU7QUFDZCxVQUFNQyxhQUFhLENBQUMsS0FBS0YsZ0JBQUwsQ0FBc0JHLElBQXRCLEVBQXBCLENBRGMsQ0FDb0M7O0FBRWxELGFBQU9ELFVBQVA7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUUsYUFBYSxDQUFDLEtBQUtKLGdCQUFMLENBQXNCSyxJQUF0QixFQUFwQixDQURjLENBQ29DOztBQUVsRCxhQUFPRCxVQUFQO0FBQ0Q7Ozt3Q0FFbUJFLGdCLEVBQWtCO0FBQ3BDLFdBQUtSLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxXQUFLRyx3QkFBTCxHQUFnQyxLQUFLRCxnQkFBckM7QUFDRDs7OzBDQUVxQk0sZ0IsRUFBa0I7QUFDdEMsV0FBS1IsU0FBTCxHQUFpQixJQUFqQjtBQUNBLFdBQUtDLHNCQUFMLEdBQThCTyxnQkFBOUI7QUFDRDs7OzBDQUVxQkEsZ0IsRUFBa0I7QUFDdEMsVUFBSSxLQUFLUixTQUFULEVBQW9CO0FBQ2xCLGFBQUtTLHNCQUFMLENBQTRCRCxnQkFBNUI7QUFDRDtBQUNGOzs7MkNBRXNCQSxnQixFQUFrQjtBQUN2QyxVQUFNRSwyQkFBMkJGLGlCQUFpQkcsS0FBakIsQ0FBdUIsS0FBS1Ysc0JBQTVCLENBQWpDO0FBQUEsVUFDTVcsMkJBQTJCRix5QkFBeUJHLFlBQXpCLENBQXNDaEIsS0FBS0MsRUFBTCxHQUFVLEdBQWhELENBRGpDLENBRHVDLENBRWlEOztBQUV4RixXQUFLSSxnQkFBTCxHQUF3QixLQUFLQyx3QkFBTCxDQUE4QlcsSUFBOUIsQ0FBbUNGLHdCQUFuQyxDQUF4QjtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1aLFlBQVksS0FBbEI7QUFBQSxVQUNNQyx5QkFBeUJOLHlCQUQvQjtBQUFBLFVBRU1PLG1CQUFtQk4seUJBRnpCO0FBQUEsVUFHTU8sMkJBQTJCRCxnQkFIakM7QUFBQSxVQUlNYSxTQUFTLElBQUloQixNQUFKLENBQVdDLFNBQVgsRUFBc0JDLHNCQUF0QixFQUE4Q0MsZ0JBQTlDLEVBQWdFQyx3QkFBaEUsQ0FKZjs7QUFNQSxhQUFPWSxNQUFQO0FBQ0Q7Ozs7OztBQUdILElBQU1BLFNBQVNoQixPQUFPaUIsV0FBUCxFQUFmOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCSCxNQUFqQiIsImZpbGUiOiJhbmdsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEFuZ2xlQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuL2Nvb3JkaW5hdGVzMkQnKSxcbiAgICAgIE1vdXNlQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuL21vdXNlQ29vcmRpbmF0ZXMnKTtcblxuY29uc3QgSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyA9IG5ldyBNb3VzZUNvb3JkaW5hdGVzKDAsIDApLFxuICAgICAgSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyA9IG5ldyBBbmdsZUNvb3JkaW5hdGVzKDAsIE1hdGguUEkgLyAyKTtcblxuY2xhc3MgQW5nbGVzIHtcbiAgY29uc3RydWN0b3IobW91c2VEb3duLCBvZmZzZXRNb3VzZUNvb3JkaW5hdGVzLCBhbmdsZUNvb3JkaW5hdGVzLCBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgICB0aGlzLm9mZnNldE1vdXNlQ29vcmRpbmF0ZXMgPSBvZmZzZXRNb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMuYW5nbGVDb29yZGluYXRlcyA9IGFuZ2xlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBnZXRYQXhpc0FuZ2xlKCkge1xuICAgIGNvbnN0IHhBeGlzQW5nbGUgPSAtdGhpcy5hbmdsZUNvb3JkaW5hdGVzLmdldFkoKTsgLy8vXG5cbiAgICByZXR1cm4geEF4aXNBbmdsZTtcbiAgfVxuXG4gIGdldFlBeGlzQW5nbGUoKSB7XG4gICAgY29uc3QgeUF4aXNBbmdsZSA9ICt0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMuZ2V0WCgpOyAvLy9cblxuICAgIHJldHVybiB5QXhpc0FuZ2xlO1xuICB9XG4gIFxuICBtb3VzZVVwRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgIHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gdGhpcy5hbmdsZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VEb3duRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgdGhpcy5vZmZzZXRNb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIG1vdXNlTW92ZUV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgaWYgKHRoaXMubW91c2VEb3duKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFuZ2xlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQW5nbGVDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcy5taW51cyh0aGlzLm9mZnNldE1vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVDb29yZGluYXRlcyA9IHJlbGF0aXZlTW91c2VDb29yZGluYXRlcy5tdWx0aXBsaWVkQnkoTWF0aC5QSSAvIDE4MCk7ICAvLy9cblxuICAgIHRoaXMuYW5nbGVDb29yZGluYXRlcyA9IHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzLnBsdXMocmVsYXRpdmVBbmdsZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBtb3VzZURvd24gPSBmYWxzZSxcbiAgICAgICAgICBvZmZzZXRNb3VzZUNvb3JkaW5hdGVzID0gSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBhbmdsZUNvb3JkaW5hdGVzID0gSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMgPSBhbmdsZUNvb3JkaW5hdGVzLFxuICAgICAgICAgIGFuZ2xlcyA9IG5ldyBBbmdsZXMobW91c2VEb3duLCBvZmZzZXRNb3VzZUNvb3JkaW5hdGVzLCBhbmdsZUNvb3JkaW5hdGVzLCBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIGFuZ2xlcztcbiAgfVxufVxuXG5jb25zdCBhbmdsZXMgPSBBbmdsZXMuZnJvbU5vdGhpbmcoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmdsZXM7XG4iXX0=