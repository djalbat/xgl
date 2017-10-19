'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var vec2 = require('../../maths/vec2'),
    constants = require('../../constants');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS90aWx0LmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJ2ZWMyIiwiY29uc3RhbnRzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsImFkZCIsInN1YnRyYWN0Iiwic2NhbGUiLCJBTkdMRV9DT09SRElOQVRFU19TQ0FMQVIiLCJJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTIiwiSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyIsIlRpbHQiLCJtb3VzZURvd24iLCJzaGlmdEtleURvd24iLCJtb3VzZUNvb3JkaW5hdGVzIiwiYW5nbGVDb29yZGluYXRlcyIsInByZXZpb3VzTW91c2VDb29yZGluYXRlcyIsInByZXZpb3VzQW5nbGVDb29yZGluYXRlcyIsInNlY29uZEFuZ2xlQ29vcmRpbmF0ZSIsInhBbmdsZSIsImZpcnN0QW5nbGVDb29yZGluYXRlIiwieUFuZ2xlIiwiekFuZ2xlIiwidXBkYXRlQW5nbGVDb29yZGluYXRlcyIsInNjYWxhciIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInJlbGF0aXZlQW5nbGVDb29yZGluYXRlcyIsInRpbHQiLCJmcm9tTm90aGluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxrQkFBUixDQUFiO0FBQUEsSUFDTUUsWUFBWUYsUUFBUSxpQkFBUixDQURsQjs7QUFHTSxJQUFFRyxjQUFGLEdBQXFCSixTQUFyQixDQUFFSSxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNvQkQsY0FEcEIsQ0FDRUMsS0FERjtBQUFBLElBQ1NDLE1BRFQsR0FDb0JGLGNBRHBCLENBQ1NFLE1BRFQ7QUFBQSxJQUVFQyxHQUZGLEdBRTJCTCxJQUYzQixDQUVFSyxHQUZGO0FBQUEsSUFFT0MsUUFGUCxHQUUyQk4sSUFGM0IsQ0FF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InRpbHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB2ZWMyID0gcmVxdWlyZSgnLi4vLi4vbWF0aHMvdmVjMicpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGFkZCwgc3VidHJhY3QsIHNjYWxlIH0gPSB2ZWMyLFxuICAgICAgeyBBTkdMRV9DT09SRElOQVRFU19TQ0FMQVIsIElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMsIElOSVRJQUxfQU5HTEVfQ09PUkRJTkFURVMgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgVGlsdCB7XG4gIGNvbnN0cnVjdG9yKG1vdXNlRG93biwgc2hpZnRLZXlEb3duLCBtb3VzZUNvb3JkaW5hdGVzLCBhbmdsZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzQW5nbGVDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5hbmdsZUNvb3JkaW5hdGVzID0gYW5nbGVDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzQW5nbGVDb29yZGluYXRlcyA9IHByZXZpb3VzQW5nbGVDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldFhBbmdsZSgpIHtcbiAgICBjb25zdCBzZWNvbmRBbmdsZUNvb3JkaW5hdGUgPSBzZWNvbmQodGhpcy5hbmdsZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICB4QW5nbGUgPSBzZWNvbmRBbmdsZUNvb3JkaW5hdGU7IC8vL1xuXG4gICAgcmV0dXJuIHhBbmdsZTtcbiAgfVxuICBcbiAgZ2V0WUFuZ2xlKCkge1xuICAgIGNvbnN0IGZpcnN0QW5nbGVDb29yZGluYXRlID0gZmlyc3QodGhpcy5hbmdsZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICB5QW5nbGUgPSAtZmlyc3RBbmdsZUNvb3JkaW5hdGU7IC8vL1xuXG4gICAgcmV0dXJuIHlBbmdsZTtcbiAgfVxuXG4gIGdldFpBbmdsZSgpIHtcbiAgICBjb25zdCB6QW5nbGUgPSAwO1xuXG4gICAgcmV0dXJuIHpBbmdsZTtcbiAgfVxuICBcbiAgbW91c2VVcEhhbmRsZXIoKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICB0aGlzLnByZXZpb3VzQW5nbGVDb29yZGluYXRlcyA9IHRoaXMuYW5nbGVDb29yZGluYXRlcztcbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIoKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcblxuICAgIGlmICh0aGlzLm1vdXNlRG93biAmJiAhdGhpcy5zaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMudXBkYXRlQW5nbGVDb29yZGluYXRlcygpO1xuICAgIH1cbiAgfVxuXG4gIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcblxuICAgIGlmICghc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgICAgIHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gdGhpcy5hbmdsZUNvb3JkaW5hdGVzO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlQ29vcmRpbmF0ZXMoKSB7XG4gICAgY29uc3Qgc2NhbGFyID0gQU5HTEVfQ09PUkRJTkFURVNfU0NBTEFSLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0KHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVDb29yZGluYXRlcyA9IHNjYWxlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGFyKTtcblxuICAgIHRoaXMuYW5nbGVDb29yZGluYXRlcyA9IGFkZCh0aGlzLnByZXZpb3VzQW5nbGVDb29yZGluYXRlcywgcmVsYXRpdmVBbmdsZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBtb3VzZURvd24gPSBmYWxzZSxcbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBhbmdsZUNvb3JkaW5hdGVzID0gSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMgPSBhbmdsZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcywgIC8vL1xuICAgICAgICAgIHRpbHQgPSBuZXcgVGlsdChtb3VzZURvd24sIHNoaWZ0S2V5RG93biwgbW91c2VDb29yZGluYXRlcywgYW5nbGVDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRpbHQ7XG4gIH1cbn1cblxuY29uc3QgdGlsdCA9IFRpbHQuZnJvbU5vdGhpbmcoKTtcblxubW9kdWxlLmV4cG9ydHMgPSB0aWx0O1xuIl19