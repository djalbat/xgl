'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var vec2 = require('../maths/vec2'),
    constants = require('../constants');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    add = vec2.add,
    subtract = vec2.subtract,
    scale = vec2.scale,
    ANGLE_COORDINATES_SCALAR = constants.ANGLE_COORDINATES_SCALAR,
    INITIAL_MOUSE_COORDINATES = constants.INITIAL_MOUSE_COORDINATES,
    INITIAL_ANGLE_COORDINATES = constants.INITIAL_ANGLE_COORDINATES;

var Angles = function () {
  function Angles(mouseDown, shiftKeyDown, mouseCoordinates, angleCoordinates, previousMouseCoordinates, previousAngleCoordinates) {
    _classCallCheck(this, Angles);

    this.mouseDown = mouseDown;
    this.shiftKeyDown = shiftKeyDown;
    this.mouseCoordinates = mouseCoordinates;
    this.angleCoordinates = angleCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
    this.previousAngleCoordinates = previousAngleCoordinates;
  }

  _createClass(Angles, [{
    key: 'getXAngle',
    value: function getXAngle() {
      var secondAngleCoordinate = second(this.angleCoordinates),
          xAngle = -secondAngleCoordinate; ///

      return xAngle;
    }
  }, {
    key: 'getYAngle',
    value: function getYAngle() {
      var yAngle = 0; ///

      return yAngle;
    }
  }, {
    key: 'getZAngle',
    value: function getZAngle() {
      var firstAngleCoordinate = first(this.angleCoordinates),
          zAngle = +firstAngleCoordinate; ///

      return zAngle;
    }
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler(mouseCoordinates) {
      this.mouseDown = false;
      this.previousAngleCoordinates = this.angleCoordinates;
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates) {
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
      angles = new Angles(mouseDown, shiftKeyDown, mouseCoordinates, angleCoordinates, previousMouseCoordinates, previousAngleCoordinates);

      return angles;
    }
  }]);

  return Angles;
}();

var angles = Angles.fromNothing();

module.exports = angles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvYW5nbGVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJ2ZWMyIiwiY29uc3RhbnRzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsImFkZCIsInN1YnRyYWN0Iiwic2NhbGUiLCJBTkdMRV9DT09SRElOQVRFU19TQ0FMQVIiLCJJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTIiwiSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyIsIkFuZ2xlcyIsIm1vdXNlRG93biIsInNoaWZ0S2V5RG93biIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJhbmdsZUNvb3JkaW5hdGVzIiwicHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzIiwicHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzIiwic2Vjb25kQW5nbGVDb29yZGluYXRlIiwieEFuZ2xlIiwieUFuZ2xlIiwiZmlyc3RBbmdsZUNvb3JkaW5hdGUiLCJ6QW5nbGUiLCJ1cGRhdGVBbmdsZUNvb3JkaW5hdGVzIiwic2NhbGFyIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwicmVsYXRpdmVBbmdsZUNvb3JkaW5hdGVzIiwiYW5nbGVzIiwiZnJvbU5vdGhpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsZUFBUixDQUFiO0FBQUEsSUFDTUUsWUFBWUYsUUFBUSxjQUFSLENBRGxCOztBQUdNLElBQUVHLGNBQUYsR0FBcUJKLFNBQXJCLENBQUVJLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ29CRCxjQURwQixDQUNFQyxLQURGO0FBQUEsSUFDU0MsTUFEVCxHQUNvQkYsY0FEcEIsQ0FDU0UsTUFEVDtBQUFBLElBRUVDLEdBRkYsR0FFMkJMLElBRjNCLENBRUVLLEdBRkY7QUFBQSxJQUVPQyxRQUZQLEdBRTJCTixJQUYzQixDQUVPTSxRQUZQ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QU9DLE9BQVAsR0FBaUJILE1BQWpCIiwiZmlsZSI6ImFuZ2xlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHZlYzIgPSByZXF1aXJlKCcuLi9tYXRocy92ZWMyJyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYWRkLCBzdWJ0cmFjdCwgc2NhbGUgfSA9IHZlYzIsXG4gICAgICB7IEFOR0xFX0NPT1JESU5BVEVTX1NDQUxBUiwgSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUywgSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBBbmdsZXMge1xuICBjb25zdHJ1Y3Rvcihtb3VzZURvd24sIHNoaWZ0S2V5RG93biwgbW91c2VDb29yZGluYXRlcywgYW5nbGVDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMuYW5nbGVDb29yZGluYXRlcyA9IGFuZ2xlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBnZXRYQW5nbGUoKSB7XG4gICAgY29uc3Qgc2Vjb25kQW5nbGVDb29yZGluYXRlID0gc2Vjb25kKHRoaXMuYW5nbGVDb29yZGluYXRlcyksXG4gICAgICAgICAgeEFuZ2xlID0gLXNlY29uZEFuZ2xlQ29vcmRpbmF0ZTsgLy8vXG5cbiAgICByZXR1cm4geEFuZ2xlO1xuICB9XG4gIFxuICBnZXRZQW5nbGUoKSB7XG4gICAgY29uc3QgeUFuZ2xlID0gMDsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHlBbmdsZTtcbiAgfVxuXG4gIGdldFpBbmdsZSgpIHtcbiAgICBjb25zdCBmaXJzdEFuZ2xlQ29vcmRpbmF0ZSA9IGZpcnN0KHRoaXMuYW5nbGVDb29yZGluYXRlcyksXG4gICAgICAgICAgekFuZ2xlID0gK2ZpcnN0QW5nbGVDb29yZGluYXRlOyAvLy9cblxuICAgIHJldHVybiB6QW5nbGU7XG4gIH1cbiAgXG4gIG1vdXNlVXBIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgIHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gdGhpcy5hbmdsZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcblxuICAgIGlmICh0aGlzLm1vdXNlRG93biAmJiAhdGhpcy5zaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMudXBkYXRlQW5nbGVDb29yZGluYXRlcygpO1xuICAgIH1cbiAgfVxuXG4gIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcblxuICAgIGlmICghc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgICAgIHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gdGhpcy5hbmdsZUNvb3JkaW5hdGVzO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlQ29vcmRpbmF0ZXMoKSB7XG4gICAgY29uc3Qgc2NhbGFyID0gQU5HTEVfQ09PUkRJTkFURVNfU0NBTEFSLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0KHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVDb29yZGluYXRlcyA9IHNjYWxlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGFyKTtcblxuICAgIHRoaXMuYW5nbGVDb29yZGluYXRlcyA9IGFkZCh0aGlzLnByZXZpb3VzQW5nbGVDb29yZGluYXRlcywgcmVsYXRpdmVBbmdsZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBtb3VzZURvd24gPSBmYWxzZSxcbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBhbmdsZUNvb3JkaW5hdGVzID0gSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMgPSBhbmdsZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcywgIC8vL1xuICAgICAgICAgIGFuZ2xlcyA9IG5ldyBBbmdsZXMobW91c2VEb3duLCBzaGlmdEtleURvd24sIG1vdXNlQ29vcmRpbmF0ZXMsIGFuZ2xlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcywgcHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiBhbmdsZXM7XG4gIH1cbn1cblxuY29uc3QgYW5nbGVzID0gQW5nbGVzLmZyb21Ob3RoaW5nKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5nbGVzO1xuIl19