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
      angles = new Angles(mouseDown, shiftKeyDown, mouseCoordinates, angleCoordinates, previousMouseCoordinates, previousAngleCoordinates);

      return angles;
    }
  }]);

  return Angles;
}();

var angles = Angles.fromNothing();

module.exports = angles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvYW5nbGVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJ2ZWMyIiwiY29uc3RhbnRzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsImFkZCIsInN1YnRyYWN0Iiwic2NhbGUiLCJBTkdMRV9DT09SRElOQVRFU19TQ0FMQVIiLCJJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTIiwiSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyIsIkFuZ2xlcyIsIm1vdXNlRG93biIsInNoaWZ0S2V5RG93biIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJhbmdsZUNvb3JkaW5hdGVzIiwicHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzIiwicHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzIiwic2Vjb25kQW5nbGVDb29yZGluYXRlIiwieEFuZ2xlIiwiZmlyc3RBbmdsZUNvb3JkaW5hdGUiLCJ5QW5nbGUiLCJ6QW5nbGUiLCJ1cGRhdGVBbmdsZUNvb3JkaW5hdGVzIiwic2NhbGFyIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwicmVsYXRpdmVBbmdsZUNvb3JkaW5hdGVzIiwiYW5nbGVzIiwiZnJvbU5vdGhpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsZUFBUixDQUFiO0FBQUEsSUFDTUUsWUFBWUYsUUFBUSxjQUFSLENBRGxCOztBQUdNLElBQUVHLGNBQUYsR0FBcUJKLFNBQXJCLENBQUVJLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ29CRCxjQURwQixDQUNFQyxLQURGO0FBQUEsSUFDU0MsTUFEVCxHQUNvQkYsY0FEcEIsQ0FDU0UsTUFEVDtBQUFBLElBRUVDLEdBRkYsR0FFMkJMLElBRjNCLENBRUVLLEdBRkY7QUFBQSxJQUVPQyxRQUZQLEdBRTJCTixJQUYzQixDQUVPTSxRQUZQ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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgdmVjMiA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlYzInKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhZGQsIHN1YnRyYWN0LCBzY2FsZSB9ID0gdmVjMixcbiAgICAgIHsgQU5HTEVfQ09PUkRJTkFURVNfU0NBTEFSLCBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTLCBJTklUSUFMX0FOR0xFX0NPT1JESU5BVEVTIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIEFuZ2xlcyB7XG4gIGNvbnN0cnVjdG9yKG1vdXNlRG93biwgc2hpZnRLZXlEb3duLCBtb3VzZUNvb3JkaW5hdGVzLCBhbmdsZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzQW5nbGVDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5hbmdsZUNvb3JkaW5hdGVzID0gYW5nbGVDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzQW5nbGVDb29yZGluYXRlcyA9IHByZXZpb3VzQW5nbGVDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldFhBbmdsZSgpIHtcbiAgICBjb25zdCBzZWNvbmRBbmdsZUNvb3JkaW5hdGUgPSBzZWNvbmQodGhpcy5hbmdsZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICB4QW5nbGUgPSBzZWNvbmRBbmdsZUNvb3JkaW5hdGU7IC8vL1xuXG4gICAgcmV0dXJuIHhBbmdsZTtcbiAgfVxuICBcbiAgZ2V0WUFuZ2xlKCkge1xuICAgIGNvbnN0IGZpcnN0QW5nbGVDb29yZGluYXRlID0gZmlyc3QodGhpcy5hbmdsZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICB5QW5nbGUgPSAtZmlyc3RBbmdsZUNvb3JkaW5hdGU7IC8vL1xuXG4gICAgcmV0dXJuIHlBbmdsZTtcbiAgfVxuXG4gIGdldFpBbmdsZSgpIHtcbiAgICBjb25zdCB6QW5nbGUgPSAwO1xuXG4gICAgcmV0dXJuIHpBbmdsZTtcbiAgfVxuICBcbiAgbW91c2VVcEhhbmRsZXIoKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICB0aGlzLnByZXZpb3VzQW5nbGVDb29yZGluYXRlcyA9IHRoaXMuYW5nbGVDb29yZGluYXRlcztcbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIoKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcblxuICAgIGlmICh0aGlzLm1vdXNlRG93biAmJiAhdGhpcy5zaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMudXBkYXRlQW5nbGVDb29yZGluYXRlcygpO1xuICAgIH1cbiAgfVxuXG4gIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcblxuICAgIGlmICghc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgICAgIHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gdGhpcy5hbmdsZUNvb3JkaW5hdGVzO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlQ29vcmRpbmF0ZXMoKSB7XG4gICAgY29uc3Qgc2NhbGFyID0gQU5HTEVfQ09PUkRJTkFURVNfU0NBTEFSLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0KHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVDb29yZGluYXRlcyA9IHNjYWxlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGFyKTtcblxuICAgIHRoaXMuYW5nbGVDb29yZGluYXRlcyA9IGFkZCh0aGlzLnByZXZpb3VzQW5nbGVDb29yZGluYXRlcywgcmVsYXRpdmVBbmdsZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBtb3VzZURvd24gPSBmYWxzZSxcbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBhbmdsZUNvb3JkaW5hdGVzID0gSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMgPSBhbmdsZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcywgIC8vL1xuICAgICAgICAgIGFuZ2xlcyA9IG5ldyBBbmdsZXMobW91c2VEb3duLCBzaGlmdEtleURvd24sIG1vdXNlQ29vcmRpbmF0ZXMsIGFuZ2xlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcywgcHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiBhbmdsZXM7XG4gIH1cbn1cblxuY29uc3QgYW5nbGVzID0gQW5nbGVzLmZyb21Ob3RoaW5nKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5nbGVzO1xuIl19