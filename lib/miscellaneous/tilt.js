'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    arrayUtilities = require('../utilities/array');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    add3 = vectorMaths.add3,
    subtract3 = vectorMaths.subtract3,
    scale3 = vectorMaths.scale3,
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
    key: 'getAngles',
    value: function getAngles() {
      var xAngle = this.getXAngle(),
          yAngle = this.getYAngle(),
          zAngle = this.getZAngle(),
          angles = [xAngle, yAngle, zAngle];

      return angles;
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
          relativeMouseCoordinates = subtract3(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeAngleCoordinates = scale3(relativeMouseCoordinates, scalar);

      this.angleCoordinates = add3(this.previousAngleCoordinates, relativeAngleCoordinates);
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

module.exports = Tilt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3RpbHQuanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwicmVxdWlyZSIsInZlY3Rvck1hdGhzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsImFkZDMiLCJzdWJ0cmFjdDMiLCJzY2FsZTMiLCJBTkdMRV9DT09SRElOQVRFU19TQ0FMQVIiLCJJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTIiwiSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyIsIlRpbHQiLCJtb3VzZURvd24iLCJzaGlmdEtleURvd24iLCJtb3VzZUNvb3JkaW5hdGVzIiwiYW5nbGVDb29yZGluYXRlcyIsInByZXZpb3VzTW91c2VDb29yZGluYXRlcyIsInByZXZpb3VzQW5nbGVDb29yZGluYXRlcyIsInNlY29uZEFuZ2xlQ29vcmRpbmF0ZSIsInhBbmdsZSIsImZpcnN0QW5nbGVDb29yZGluYXRlIiwieUFuZ2xlIiwiekFuZ2xlIiwiZ2V0WEFuZ2xlIiwiZ2V0WUFuZ2xlIiwiZ2V0WkFuZ2xlIiwiYW5nbGVzIiwidXBkYXRlQW5nbGVDb29yZGluYXRlcyIsInNjYWxhciIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInJlbGF0aXZlQW5nbGVDb29yZGluYXRlcyIsInRpbHQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxpQkFBUixDQURwQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxvQkFBUixDQUZ2Qjs7SUFJUUcsSyxHQUFrQkQsYyxDQUFsQkMsSztJQUFPQyxNLEdBQVdGLGMsQ0FBWEUsTTtJQUNQQyxJLEdBQTRCSixXLENBQTVCSSxJO0lBQU1DLFMsR0FBc0JMLFcsQ0FBdEJLLFM7SUFBV0MsTSxHQUFXTixXLENBQVhNLE07SUFDakJDLHdCLEdBQW1GVCxTLENBQW5GUyx3QjtJQUEwQkMseUIs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QiIsImZpbGUiOiJ0aWx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhZGQzLCBzdWJ0cmFjdDMsIHNjYWxlMyB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IEFOR0xFX0NPT1JESU5BVEVTX1NDQUxBUiwgSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUywgSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IobW91c2VEb3duLCBzaGlmdEtleURvd24sIG1vdXNlQ29vcmRpbmF0ZXMsIGFuZ2xlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcywgcHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMgPSBhbmdsZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gcHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0WEFuZ2xlKCkge1xuICAgIGNvbnN0IHNlY29uZEFuZ2xlQ29vcmRpbmF0ZSA9IHNlY29uZCh0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHhBbmdsZSA9IHNlY29uZEFuZ2xlQ29vcmRpbmF0ZTsgLy8vXG5cbiAgICByZXR1cm4geEFuZ2xlO1xuICB9XG4gIFxuICBnZXRZQW5nbGUoKSB7XG4gICAgY29uc3QgZmlyc3RBbmdsZUNvb3JkaW5hdGUgPSBmaXJzdCh0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHlBbmdsZSA9IC1maXJzdEFuZ2xlQ29vcmRpbmF0ZTsgLy8vXG5cbiAgICByZXR1cm4geUFuZ2xlO1xuICB9XG5cbiAgZ2V0WkFuZ2xlKCkge1xuICAgIGNvbnN0IHpBbmdsZSA9IDA7XG5cbiAgICByZXR1cm4gekFuZ2xlO1xuICB9XG4gIFxuICBnZXRBbmdsZXMoKSB7XG4gICAgY29uc3QgeEFuZ2xlID0gdGhpcy5nZXRYQW5nbGUoKSxcbiAgICAgICAgICB5QW5nbGUgPSB0aGlzLmdldFlBbmdsZSgpLFxuICAgICAgICAgIHpBbmdsZSA9IHRoaXMuZ2V0WkFuZ2xlKCksXG4gICAgICAgICAgYW5nbGVzID0gW1xuICAgICAgICAgICAgeEFuZ2xlLFxuICAgICAgICAgICAgeUFuZ2xlLFxuICAgICAgICAgICAgekFuZ2xlXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gYW5nbGVzO1xuICB9XG4gIFxuICBtb3VzZVVwSGFuZGxlcigpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgIHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gdGhpcy5hbmdsZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcigpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuXG4gICAgaWYgKHRoaXMubW91c2VEb3duICYmICF0aGlzLnNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy51cGRhdGVBbmdsZUNvb3JkaW5hdGVzKCk7XG4gICAgfVxuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuXG4gICAgaWYgKCFzaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICAgICAgdGhpcy5wcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMgPSB0aGlzLmFuZ2xlQ29vcmRpbmF0ZXM7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQW5nbGVDb29yZGluYXRlcygpIHtcbiAgICBjb25zdCBzY2FsYXIgPSBBTkdMRV9DT09SRElOQVRFU19TQ0FMQVIsXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QzKHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVDb29yZGluYXRlcyA9IHNjYWxlMyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHNjYWxhcik7XG5cbiAgICB0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMgPSBhZGQzKHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzLCByZWxhdGl2ZUFuZ2xlQ29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG1vdXNlRG93biA9IGZhbHNlLFxuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTLFxuICAgICAgICAgIGFuZ2xlQ29vcmRpbmF0ZXMgPSBJTklUSUFMX0FOR0xFX0NPT1JESU5BVEVTLFxuICAgICAgICAgIHByZXZpb3VzQW5nbGVDb29yZGluYXRlcyA9IGFuZ2xlQ29vcmRpbmF0ZXMsICAvLy9cbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgdGlsdCA9IG5ldyBUaWx0KG1vdXNlRG93biwgc2hpZnRLZXlEb3duLCBtb3VzZUNvb3JkaW5hdGVzLCBhbmdsZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzQW5nbGVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRpbHQ7XG4iXX0=