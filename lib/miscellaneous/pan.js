'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    arrayUtilities = require('../utilities/array');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    add3 = vectorMaths.add3,
    subtract2 = vectorMaths.subtract2,
    scale2 = vectorMaths.scale2,
    OFFSET_SCALAR = constants.OFFSET_SCALAR,
    INITIAL_MOUSE_COORDINATES = constants.INITIAL_MOUSE_COORDINATES;

var Pan = function () {
  function Pan(shiftKeyDown, offset, previousOffset, mouseCoordinates, previousMouseCoordinates) {
    _classCallCheck(this, Pan);

    this.shiftKeyDown = shiftKeyDown;
    this.offset = offset;
    this.previousOffset = previousOffset;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  _createClass(Pan, [{
    key: 'getOffset',
    value: function getOffset() {
      return this.offset;
    }
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler() {
      this.previousMouseCoordinates = this.mouseCoordinates;
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler() {
      this.previousOffset = this.offset;

      if (this.shiftKeyDown) {
        this.previousOffset = this.offset;

        this.previousMouseCoordinates = this.mouseCoordinates;
      }
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates, mouseDown, tilt) {
      this.mouseCoordinates = mouseCoordinates;

      if (mouseDown && this.shiftKeyDown) {
        this.updateOffset(tilt);
      }
    }
  }, {
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {
      this.shiftKeyDown = shiftKeyDown;

      if (shiftKeyDown) {
        this.previousOffset = this.offset;

        this.previousMouseCoordinates = this.mouseCoordinates;
      }
    }
  }, {
    key: 'updateOffset',
    value: function updateOffset(tilt) {
      var xAngle = tilt.getXAngle(),
          yAngle = tilt.getYAngle(),
          scalar = OFFSET_SCALAR,
          relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeOffset = scale2(relativeMouseCoordinates, scalar),
          yAngleOffset = calculateYAngleOffset(yAngle, relativeOffset),
          xAngleOffset = calculateXAngleOffset(xAngle, yAngle, relativeOffset);

      this.offset = add3(add3(this.previousOffset, yAngleOffset), xAngleOffset); ///
    }
  }], [{
    key: 'fromInitialOffset',
    value: function fromInitialOffset(initialOffset) {
      var offset = initialOffset,
          ///
      shiftKeyDown = false,
          previousOffset = offset,
          ///
      mouseCoordinates = INITIAL_MOUSE_COORDINATES,
          previousMouseCoordinates = mouseCoordinates,
          pan = new Pan(shiftKeyDown, offset, previousOffset, mouseCoordinates, previousMouseCoordinates);

      return pan;
    }
  }]);

  return Pan;
}();

module.exports = Pan;

function calculateYAngleOffset(yAngle, relativeOffset) {
  var relativeOffsetComponents = relativeOffset,
      ///
  firstRelativeOffsetComponent = first(relativeOffsetComponents),
      yAngleOffset = [-Math.cos(yAngle) * firstRelativeOffsetComponent, +0, -Math.sin(yAngle) * firstRelativeOffsetComponent];

  return yAngleOffset;
}

function calculateXAngleOffset(xAngle, yAngle, relativeOffset) {
  var relativeOffsetComponents = relativeOffset,
      ///
  secondRelativeOffsetComponent = second(relativeOffsetComponents),
      xAngleOffset = [-Math.sin(xAngle) * Math.sin(yAngle) * secondRelativeOffsetComponent, -Math.cos(xAngle) * secondRelativeOffsetComponent, +Math.sin(xAngle) * Math.cos(yAngle) * secondRelativeOffsetComponent];

  return xAngleOffset;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3Bhbi5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJyZXF1aXJlIiwidmVjdG9yTWF0aHMiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0Iiwic2Vjb25kIiwiYWRkMyIsInN1YnRyYWN0MiIsInNjYWxlMiIsIk9GRlNFVF9TQ0FMQVIiLCJJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTIiwiUGFuIiwic2hpZnRLZXlEb3duIiwib2Zmc2V0IiwicHJldmlvdXNPZmZzZXQiLCJtb3VzZUNvb3JkaW5hdGVzIiwicHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzIiwibW91c2VEb3duIiwidGlsdCIsInVwZGF0ZU9mZnNldCIsInhBbmdsZSIsImdldFhBbmdsZSIsInlBbmdsZSIsImdldFlBbmdsZSIsInNjYWxhciIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInJlbGF0aXZlT2Zmc2V0IiwieUFuZ2xlT2Zmc2V0IiwiY2FsY3VsYXRlWUFuZ2xlT2Zmc2V0IiwieEFuZ2xlT2Zmc2V0IiwiY2FsY3VsYXRlWEFuZ2xlT2Zmc2V0IiwiaW5pdGlhbE9mZnNldCIsInBhbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWxhdGl2ZU9mZnNldENvbXBvbmVudHMiLCJmaXJzdFJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50IiwiTWF0aCIsImNvcyIsInNpbiIsInNlY29uZFJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxpQkFBUixDQURwQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxvQkFBUixDQUZ2Qjs7SUFJUUcsSyxHQUFrQkQsYyxDQUFsQkMsSztJQUFPQyxNLEdBQVdGLGMsQ0FBWEUsTTtJQUNQQyxJLEdBQTRCSixXLENBQTVCSSxJO0lBQU1DLFMsR0FBc0JMLFcsQ0FBdEJLLFM7SUFBV0MsTSxHQUFX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YixDQUFDQyxLQUFLRSxHQUFMLENBQVNqQixNQUFULENBQUQsR0FBb0JjLDRCQUhQLENBRnJCOztBQVFBLFNBQU9ULFlBQVA7QUFDRDs7QUFFRCxTQUFTRyxxQkFBVCxDQUErQlYsTUFBL0IsRUFBdUNFLE1BQXZDLEVBQStDSSxjQUEvQyxFQUErRDtBQUM3RCxNQUFNUywyQkFBMkJULGNBQWpDO0FBQUEsTUFBa0Q7QUFDNUNjLGtDQUFnQ25DLE9BQU84Qix3QkFBUCxDQUR0QztBQUFBLE1BRU1OLGVBQWUsQ0FDYixDQUFDUSxLQUFLRSxHQUFMLENBQVNuQixNQUFULENBQUQsR0FBb0JpQixLQUFLRSxHQUFMLENBQVNqQixNQUFULENBQXBCLEdBQXVDa0IsNkJBRDFCLEVBRWIsQ0FBQ0gsS0FBS0MsR0FBTCxDQUFTbEIsTUFBVCxDQUFELEdBQW9Cb0IsNkJBRlAsRUFHYixDQUFDSCxLQUFLRSxHQUFMLENBQVNuQixNQUFULENBQUQsR0FBb0JpQixLQUFLQyxHQUFMLENBQVNoQixNQUFULENBQXBCLEdBQXVDa0IsNkJBSDFCLENBRnJCOztBQVFBLFNBQU9YLFlBQVA7QUFDRCIsImZpbGUiOiJwYW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGFkZDMsIHN1YnRyYWN0Miwgc2NhbGUyIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgT0ZGU0VUX1NDQUxBUiwgSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBQYW4ge1xuICBjb25zdHJ1Y3RvcihzaGlmdEtleURvd24sIG9mZnNldCwgcHJldmlvdXNPZmZzZXQsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgIHRoaXMucHJldmlvdXNPZmZzZXQgPSBwcmV2aW91c09mZnNldDtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldDtcbiAgfVxuXG4gIG1vdXNlVXBIYW5kbGVyKCkge1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcigpIHtcbiAgICB0aGlzLnByZXZpb3VzT2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG5cbiAgICBpZiAodGhpcy5zaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucHJldmlvdXNPZmZzZXQgPSB0aGlzLm9mZnNldDtcblxuICAgICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIHRpbHQpIHtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuXG4gICAgaWYgKG1vdXNlRG93biAmJiB0aGlzLnNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy51cGRhdGVPZmZzZXQodGlsdCk7XG4gICAgfVxuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuXG4gICAgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5wcmV2aW91c09mZnNldCA9IHRoaXMub2Zmc2V0O1xuXG4gICAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgICB9XG4gIH1cblxuICB1cGRhdGVPZmZzZXQodGlsdCkge1xuICAgIGNvbnN0IHhBbmdsZSA9IHRpbHQuZ2V0WEFuZ2xlKCksXG4gICAgICAgICAgeUFuZ2xlID0gdGlsdC5nZXRZQW5nbGUoKSxcbiAgICAgICAgICBzY2FsYXIgPSBPRkZTRVRfU0NBTEFSLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldCA9IHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHNjYWxhciksXG4gICAgICAgICAgeUFuZ2xlT2Zmc2V0ID0gY2FsY3VsYXRlWUFuZ2xlT2Zmc2V0KHlBbmdsZSwgcmVsYXRpdmVPZmZzZXQpLFxuICAgICAgICAgIHhBbmdsZU9mZnNldCA9IGNhbGN1bGF0ZVhBbmdsZU9mZnNldCh4QW5nbGUsIHlBbmdsZSwgcmVsYXRpdmVPZmZzZXQpO1xuXG4gICAgdGhpcy5vZmZzZXQgPSBhZGQzKGFkZDModGhpcy5wcmV2aW91c09mZnNldCwgeUFuZ2xlT2Zmc2V0KSwgeEFuZ2xlT2Zmc2V0KTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsT2Zmc2V0KGluaXRpYWxPZmZzZXQpIHtcbiAgICBjb25zdCBvZmZzZXQgPSBpbml0aWFsT2Zmc2V0LCAvLy9cbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZSxcbiAgICAgICAgICBwcmV2aW91c09mZnNldCA9IG9mZnNldCwgIC8vL1xuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTLFxuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXMsXG4gICAgICAgICAgcGFuID0gbmV3IFBhbihzaGlmdEtleURvd24sIG9mZnNldCwgcHJldmlvdXNPZmZzZXQsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG4gICAgXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhbjtcblxuZnVuY3Rpb24gY2FsY3VsYXRlWUFuZ2xlT2Zmc2V0KHlBbmdsZSwgcmVsYXRpdmVPZmZzZXQpIHtcbiAgY29uc3QgcmVsYXRpdmVPZmZzZXRDb21wb25lbnRzID0gcmVsYXRpdmVPZmZzZXQsICAvLy9cbiAgICAgICAgZmlyc3RSZWxhdGl2ZU9mZnNldENvbXBvbmVudCA9IGZpcnN0KHJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50cyksXG4gICAgICAgIHlBbmdsZU9mZnNldCA9IFtcbiAgICAgICAgICAtTWF0aC5jb3MoeUFuZ2xlKSAqIGZpcnN0UmVsYXRpdmVPZmZzZXRDb21wb25lbnQsXG4gICAgICAgICAgKzAsXG4gICAgICAgICAgLU1hdGguc2luKHlBbmdsZSkgKiBmaXJzdFJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50XG4gICAgICAgIF07XG5cbiAgcmV0dXJuIHlBbmdsZU9mZnNldDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlWEFuZ2xlT2Zmc2V0KHhBbmdsZSwgeUFuZ2xlLCByZWxhdGl2ZU9mZnNldCkge1xuICBjb25zdCByZWxhdGl2ZU9mZnNldENvbXBvbmVudHMgPSByZWxhdGl2ZU9mZnNldCwgIC8vL1xuICAgICAgICBzZWNvbmRSZWxhdGl2ZU9mZnNldENvbXBvbmVudCA9IHNlY29uZChyZWxhdGl2ZU9mZnNldENvbXBvbmVudHMpLFxuICAgICAgICB4QW5nbGVPZmZzZXQgPSBbXG4gICAgICAgICAgLU1hdGguc2luKHhBbmdsZSkgKiBNYXRoLnNpbih5QW5nbGUpICogc2Vjb25kUmVsYXRpdmVPZmZzZXRDb21wb25lbnQsXG4gICAgICAgICAgLU1hdGguY29zKHhBbmdsZSkgKiBzZWNvbmRSZWxhdGl2ZU9mZnNldENvbXBvbmVudCxcbiAgICAgICAgICArTWF0aC5zaW4oeEFuZ2xlKSAqIE1hdGguY29zKHlBbmdsZSkgKiBzZWNvbmRSZWxhdGl2ZU9mZnNldENvbXBvbmVudFxuICAgICAgICBdO1xuXG4gIHJldHVybiB4QW5nbGVPZmZzZXQ7XG59XG4iXX0=