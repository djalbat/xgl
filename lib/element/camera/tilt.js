'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vec2 = require('../../maths/vec2'),
    constants = require('../../constants'),
    arrayUtilities = require('../../utilities/array');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    add = vec2.add,
    subtract = vec2.subtract,
    scale = vec2.scale,
    ANGLE_COORDINATES_SCALAR = constants.ANGLE_COORDINATES_SCALAR,
    INITIAL_MOUSE_COORDINATES = constants.INITIAL_MOUSE_COORDINATES,
    INITIAL_ANGLE_COORDINATES = constants.INITIAL_ANGLE_COORDINATES;

var Tilt = function () {
  function Tilt(mouseDown, shiftKeyDown, mouseCoordinates, angleCoordinates, previousMouseCoordinates, previousAngleCoordinates) {
    _classCallCheck(this, Tilt);

    this.mouseDown = mouseDown;
    this.shiftKeyDown = shiftKeyDown;
    this.mouseCoordinates = mouseCoordinates;
    this.angleCoordinates = angleCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
    this.previousAngleCoordinates = previousAngleCoordinates;
  }

  _createClass(Tilt, [{
    key: 'getXAngle',
    value: function getXAngle() {
      var secondAngleCoordinate = second(this.angleCoordinates),
          xAngle = secondAngleCoordinate; ///

      return xAngle;
    }
  }, {
    key: 'getYAngle',
    value: function getYAngle() {
      var firstAngleCoordinate = first(this.angleCoordinates),
          yAngle = -firstAngleCoordinate; ///

      return yAngle;
    }
  }, {
    key: 'getZAngle',
    value: function getZAngle() {
      var zAngle = 0;

      return zAngle;
    }
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler() {
      this.mouseDown = false;
      this.previousAngleCoordinates = this.angleCoordinates;
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler() {
      this.mouseDown = true;
      this.previousMouseCoordinates = this.mouseCoordinates;
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates) {
      this.mouseCoordinates = mouseCoordinates;

      if (this.mouseDown && !this.shiftKeyDown) {
        this.updateAngleCoordinates();
      }
    }
  }, {
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {
      this.shiftKeyDown = shiftKeyDown;

      if (!shiftKeyDown) {
        this.previousMouseCoordinates = this.mouseCoordinates;
        this.previousAngleCoordinates = this.angleCoordinates;
      }
    }
  }, {
    key: 'updateAngleCoordinates',
    value: function updateAngleCoordinates() {
      var scalar = ANGLE_COORDINATES_SCALAR,
          relativeMouseCoordinates = subtract(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeAngleCoordinates = scale(relativeMouseCoordinates, scalar);

      this.angleCoordinates = add(this.previousAngleCoordinates, relativeAngleCoordinates);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var mouseDown = false,
          shiftKeyDown = false,
          mouseCoordinates = INITIAL_MOUSE_COORDINATES,
          angleCoordinates = INITIAL_ANGLE_COORDINATES,
          previousAngleCoordinates = angleCoordinates,
          ///
      previousMouseCoordinates = mouseCoordinates,
          ///
      tilt = new Tilt(mouseDown, shiftKeyDown, mouseCoordinates, angleCoordinates, previousMouseCoordinates, previousAngleCoordinates);

      return tilt;
    }
  }]);

  return Tilt;
}();

var tilt = Tilt.fromNothing();

module.exports = tilt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS90aWx0LmpzIl0sIm5hbWVzIjpbInZlYzIiLCJyZXF1aXJlIiwiY29uc3RhbnRzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsImFkZCIsInN1YnRyYWN0Iiwic2NhbGUiLCJBTkdMRV9DT09SRElOQVRFU19TQ0FMQVIiLCJJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTIiwiSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyIsIlRpbHQiLCJtb3VzZURvd24iLCJzaGlmdEtleURvd24iLCJtb3VzZUNvb3JkaW5hdGVzIiwiYW5nbGVDb29yZGluYXRlcyIsInByZXZpb3VzTW91c2VDb29yZGluYXRlcyIsInByZXZpb3VzQW5nbGVDb29yZGluYXRlcyIsInNlY29uZEFuZ2xlQ29vcmRpbmF0ZSIsInhBbmdsZSIsImZpcnN0QW5nbGVDb29yZGluYXRlIiwieUFuZ2xlIiwiekFuZ2xlIiwidXBkYXRlQW5nbGVDb29yZGluYXRlcyIsInNjYWxhciIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInJlbGF0aXZlQW5nbGVDb29yZGluYXRlcyIsInRpbHQiLCJmcm9tTm90aGluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLGtCQUFSLENBQWI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGlCQUFSLENBRGxCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLHVCQUFSLENBRnZCOztJQUlRRyxLLEdBQWtCRCxjLENBQWxCQyxLO0lBQU9DLE0sR0FBV0YsYyxDQUFYRSxNO0lBQ1BDLEcsR0FBeUJOLEksQ0FBekJNLEc7SUFBS0MsUSxHQUFvQlAsSSxDQUFwQk8sUTtJQUFVQyxLLEdBQVVSLEksQ0FBVlEsSztJQUNmQyx3QixHQUFtRlAsUyxDQUFuRk8sd0I7SUFBMEJDLHlCLEdBQXlEUixTLENBQXpEUSx5QjtJQUEyQkMseUIsR0FBOEJULFMsQ0FBOUJTLHlCOztJQUV2REMsSTtBQUNKLGdCQUFZQyxTQUFaLEVBQXVCQyxZQUF2QixFQUFxQ0MsZ0JBQXJDLEVBQXVEQyxnQkFBdkQsRUFBeUVDLHdCQUF6RSxFQUFtR0Msd0JBQW5HLEVBQTZIO0FBQUE7O0FBQzNILFNBQUtMLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLHdCQUFMLEdBQWdDQSx3QkFBaEM7QUFDQSxTQUFLQyx3QkFBTCxHQUFnQ0Esd0JBQWhDO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixVQUFNQyx3QkFBd0JkLE9BQU8sS0FBS1csZ0JBQVosQ0FBOUI7QUFBQSxVQUNNSSxTQUFTRCxxQkFEZixDQURVLENBRTRCOztBQUV0QyxhQUFPQyxNQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQU1DLHVCQUF1QmpCLE1BQU0sS0FBS1ksZ0JBQVgsQ0FBN0I7QUFBQSxVQUNNTSxTQUFTLENBQUNELG9CQURoQixDQURVLENBRTRCOztBQUV0QyxhQUFPQyxNQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQU1DLFNBQVMsQ0FBZjs7QUFFQSxhQUFPQSxNQUFQO0FBQ0Q7OztxQ0FFZ0I7QUFDZixXQUFLVixTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsV0FBS0ssd0JBQUwsR0FBZ0MsS0FBS0YsZ0JBQXJDO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsV0FBS0gsU0FBTCxHQUFpQixJQUFqQjtBQUNBLFdBQUtJLHdCQUFMLEdBQWdDLEtBQUtGLGdCQUFyQztBQUNEOzs7cUNBRWdCQSxnQixFQUFrQjtBQUNqQyxXQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCOztBQUVBLFVBQUksS0FBS0YsU0FBTCxJQUFrQixDQUFDLEtBQUtDLFlBQTVCLEVBQTBDO0FBQ3hDLGFBQUtVLHNCQUFMO0FBQ0Q7QUFDRjs7O29DQUVlVixZLEVBQWM7QUFDNUIsV0FBS0EsWUFBTCxHQUFvQkEsWUFBcEI7O0FBRUEsVUFBSSxDQUFDQSxZQUFMLEVBQW1CO0FBQ2pCLGFBQUtHLHdCQUFMLEdBQWdDLEtBQUtGLGdCQUFyQztBQUNBLGFBQUtHLHdCQUFMLEdBQWdDLEtBQUtGLGdCQUFyQztBQUNEO0FBQ0Y7Ozs2Q0FFd0I7QUFDdkIsVUFBTVMsU0FBU2hCLHdCQUFmO0FBQUEsVUFDTWlCLDJCQUEyQm5CLFNBQVMsS0FBS1EsZ0JBQWQsRUFBZ0MsS0FBS0Usd0JBQXJDLENBRGpDO0FBQUEsVUFFTVUsMkJBQTJCbkIsTUFBTWtCLHdCQUFOLEVBQWdDRCxNQUFoQyxDQUZqQzs7QUFJQSxXQUFLVCxnQkFBTCxHQUF3QlYsSUFBSSxLQUFLWSx3QkFBVCxFQUFtQ1Msd0JBQW5DLENBQXhCO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTWQsWUFBWSxLQUFsQjtBQUFBLFVBQ01DLGVBQWUsS0FEckI7QUFBQSxVQUVNQyxtQkFBbUJMLHlCQUZ6QjtBQUFBLFVBR01NLG1CQUFtQkwseUJBSHpCO0FBQUEsVUFJTU8sMkJBQTJCRixnQkFKakM7QUFBQSxVQUlvRDtBQUM5Q0MsaUNBQTJCRixnQkFMakM7QUFBQSxVQUtvRDtBQUM5Q2EsYUFBTyxJQUFJaEIsSUFBSixDQUFTQyxTQUFULEVBQW9CQyxZQUFwQixFQUFrQ0MsZ0JBQWxDLEVBQW9EQyxnQkFBcEQsRUFBc0VDLHdCQUF0RSxFQUFnR0Msd0JBQWhHLENBTmI7O0FBUUEsYUFBT1UsSUFBUDtBQUNEOzs7Ozs7QUFHSCxJQUFNQSxPQUFPaEIsS0FBS2lCLFdBQUwsRUFBYjs7QUFFQUMsT0FBT0MsT0FBUCxHQUFpQkgsSUFBakIiLCJmaWxlIjoidGlsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjMiA9IHJlcXVpcmUoJy4uLy4uL21hdGhzL3ZlYzInKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYWRkLCBzdWJ0cmFjdCwgc2NhbGUgfSA9IHZlYzIsXG4gICAgICB7IEFOR0xFX0NPT1JESU5BVEVTX1NDQUxBUiwgSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUywgSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IobW91c2VEb3duLCBzaGlmdEtleURvd24sIG1vdXNlQ29vcmRpbmF0ZXMsIGFuZ2xlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcywgcHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMgPSBhbmdsZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gcHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0WEFuZ2xlKCkge1xuICAgIGNvbnN0IHNlY29uZEFuZ2xlQ29vcmRpbmF0ZSA9IHNlY29uZCh0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHhBbmdsZSA9IHNlY29uZEFuZ2xlQ29vcmRpbmF0ZTsgLy8vXG5cbiAgICByZXR1cm4geEFuZ2xlO1xuICB9XG4gIFxuICBnZXRZQW5nbGUoKSB7XG4gICAgY29uc3QgZmlyc3RBbmdsZUNvb3JkaW5hdGUgPSBmaXJzdCh0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHlBbmdsZSA9IC1maXJzdEFuZ2xlQ29vcmRpbmF0ZTsgLy8vXG5cbiAgICByZXR1cm4geUFuZ2xlO1xuICB9XG5cbiAgZ2V0WkFuZ2xlKCkge1xuICAgIGNvbnN0IHpBbmdsZSA9IDA7XG5cbiAgICByZXR1cm4gekFuZ2xlO1xuICB9XG4gIFxuICBtb3VzZVVwSGFuZGxlcigpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgIHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gdGhpcy5hbmdsZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcigpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuXG4gICAgaWYgKHRoaXMubW91c2VEb3duICYmICF0aGlzLnNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy51cGRhdGVBbmdsZUNvb3JkaW5hdGVzKCk7XG4gICAgfVxuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuXG4gICAgaWYgKCFzaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICAgICAgdGhpcy5wcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMgPSB0aGlzLmFuZ2xlQ29vcmRpbmF0ZXM7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQW5nbGVDb29yZGluYXRlcygpIHtcbiAgICBjb25zdCBzY2FsYXIgPSBBTkdMRV9DT09SRElOQVRFU19TQ0FMQVIsXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QodGhpcy5tb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgcmVsYXRpdmVBbmdsZUNvb3JkaW5hdGVzID0gc2NhbGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBzY2FsYXIpO1xuXG4gICAgdGhpcy5hbmdsZUNvb3JkaW5hdGVzID0gYWRkKHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzLCByZWxhdGl2ZUFuZ2xlQ29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG1vdXNlRG93biA9IGZhbHNlLFxuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTLFxuICAgICAgICAgIGFuZ2xlQ29vcmRpbmF0ZXMgPSBJTklUSUFMX0FOR0xFX0NPT1JESU5BVEVTLFxuICAgICAgICAgIHByZXZpb3VzQW5nbGVDb29yZGluYXRlcyA9IGFuZ2xlQ29vcmRpbmF0ZXMsICAvLy9cbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgdGlsdCA9IG5ldyBUaWx0KG1vdXNlRG93biwgc2hpZnRLZXlEb3duLCBtb3VzZUNvb3JkaW5hdGVzLCBhbmdsZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzQW5nbGVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxufVxuXG5jb25zdCB0aWx0ID0gVGlsdC5mcm9tTm90aGluZygpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRpbHQ7XG4iXX0=