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
  function Pan(offset, previousOffset, mouseCoordinates, previousMouseCoordinates) {
    _classCallCheck(this, Pan);

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
    key: 'setMouseCoordinates',
    value: function setMouseCoordinates(mouseCoordinates) {
      this.mouseCoordinates = mouseCoordinates;
    }
  }, {
    key: 'updatePreviousMouseCoordinates',
    value: function updatePreviousMouseCoordinates() {
      this.previousMouseCoordinates = this.mouseCoordinates;
    }
  }, {
    key: 'updatePreviousOffset',
    value: function updatePreviousOffset() {
      this.previousOffset = this.offset;
    }
  }, {
    key: 'updateOffset',
    value: function updateOffset(tilt) {
      var xAngle = tilt.getXAngle(),
          yAngle = tilt.getYAngle(),
          scalar = OFFSET_SCALAR,
          ///
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
      previousOffset = offset,
          ///
      mouseCoordinates = INITIAL_MOUSE_COORDINATES,
          ///
      previousMouseCoordinates = mouseCoordinates,
          ///
      pan = new Pan(offset, previousOffset, mouseCoordinates, previousMouseCoordinates);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3Bhbi5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJyZXF1aXJlIiwidmVjdG9yTWF0aHMiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0Iiwic2Vjb25kIiwiYWRkMyIsInN1YnRyYWN0MiIsInNjYWxlMiIsIk9GRlNFVF9TQ0FMQVIiLCJJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTIiwiUGFuIiwib2Zmc2V0IiwicHJldmlvdXNPZmZzZXQiLCJtb3VzZUNvb3JkaW5hdGVzIiwicHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzIiwidGlsdCIsInhBbmdsZSIsImdldFhBbmdsZSIsInlBbmdsZSIsImdldFlBbmdsZSIsInNjYWxhciIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInJlbGF0aXZlT2Zmc2V0IiwieUFuZ2xlT2Zmc2V0IiwiY2FsY3VsYXRlWUFuZ2xlT2Zmc2V0IiwieEFuZ2xlT2Zmc2V0IiwiY2FsY3VsYXRlWEFuZ2xlT2Zmc2V0IiwiaW5pdGlhbE9mZnNldCIsInBhbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWxhdGl2ZU9mZnNldENvbXBvbmVudHMiLCJmaXJzdFJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50IiwiTWF0aCIsImNvcyIsInNpbiIsInNlY29uZFJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxpQkFBUixDQURwQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxvQkFBUixDQUZ2Qjs7SUFJUUcsSyxHQUFrQkQsYyxDQUFsQkMsSztJQUFPQyxNLEdBQVdGLGMsQ0FBWEUsTTtJQUNQQyxJLEdBQTRCSixXLENBQTVCSSxJO0lBQU1DLFMsR0FBc0JMLFcsQ0FBdEJLLFM7SUFBV0MsTSxHQUFXTixXLENBQVhNLE07SUFDakJDLGEsR0FBNkNULFMsQ0FBN0NTLGE7SUFB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R0FBdUNrQiw2QkFIMUIsQ0FGckI7O0FBUUEsU0FBT1gsWUFBUDtBQUNEIiwiZmlsZSI6InBhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYWRkMywgc3VidHJhY3QyLCBzY2FsZTIgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBPRkZTRVRfU0NBTEFSLCBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIFBhbiB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldCwgcHJldmlvdXNPZmZzZXQsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgIHRoaXMucHJldmlvdXNPZmZzZXQgPSBwcmV2aW91c09mZnNldDtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldDtcbiAgfVxuXG4gIHNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICB1cGRhdGVQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKSB7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICB1cGRhdGVQcmV2aW91c09mZnNldCgpIHtcbiAgICB0aGlzLnByZXZpb3VzT2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gIH1cblxuICB1cGRhdGVPZmZzZXQodGlsdCkge1xuICAgIGNvbnN0IHhBbmdsZSA9IHRpbHQuZ2V0WEFuZ2xlKCksXG4gICAgICAgICAgeUFuZ2xlID0gdGlsdC5nZXRZQW5nbGUoKSxcbiAgICAgICAgICBzY2FsYXIgPSBPRkZTRVRfU0NBTEFSLCAvLy9cbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzdWJ0cmFjdDIodGhpcy5tb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgcmVsYXRpdmVPZmZzZXQgPSBzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBzY2FsYXIpLFxuICAgICAgICAgIHlBbmdsZU9mZnNldCA9IGNhbGN1bGF0ZVlBbmdsZU9mZnNldCh5QW5nbGUsIHJlbGF0aXZlT2Zmc2V0KSxcbiAgICAgICAgICB4QW5nbGVPZmZzZXQgPSBjYWxjdWxhdGVYQW5nbGVPZmZzZXQoeEFuZ2xlLCB5QW5nbGUsIHJlbGF0aXZlT2Zmc2V0KTtcblxuICAgIHRoaXMub2Zmc2V0ID0gYWRkMyhhZGQzKHRoaXMucHJldmlvdXNPZmZzZXQsIHlBbmdsZU9mZnNldCksIHhBbmdsZU9mZnNldCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbE9mZnNldChpbml0aWFsT2Zmc2V0KSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gaW5pdGlhbE9mZnNldCwgLy8vXG4gICAgICAgICAgcHJldmlvdXNPZmZzZXQgPSBvZmZzZXQsICAvLy9cbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUywgLy8vXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcywgIC8vL1xuICAgICAgICAgIHBhbiA9IG5ldyBQYW4ob2Zmc2V0LCBwcmV2aW91c09mZnNldCwgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICBcbiAgICByZXR1cm4gcGFuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFuO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVZQW5nbGVPZmZzZXQoeUFuZ2xlLCByZWxhdGl2ZU9mZnNldCkge1xuICBjb25zdCByZWxhdGl2ZU9mZnNldENvbXBvbmVudHMgPSByZWxhdGl2ZU9mZnNldCwgIC8vL1xuICAgICAgICBmaXJzdFJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50ID0gZmlyc3QocmVsYXRpdmVPZmZzZXRDb21wb25lbnRzKSxcbiAgICAgICAgeUFuZ2xlT2Zmc2V0ID0gW1xuICAgICAgICAgIC1NYXRoLmNvcyh5QW5nbGUpICogZmlyc3RSZWxhdGl2ZU9mZnNldENvbXBvbmVudCxcbiAgICAgICAgICArMCxcbiAgICAgICAgICAtTWF0aC5zaW4oeUFuZ2xlKSAqIGZpcnN0UmVsYXRpdmVPZmZzZXRDb21wb25lbnRcbiAgICAgICAgXTtcblxuICByZXR1cm4geUFuZ2xlT2Zmc2V0O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVYQW5nbGVPZmZzZXQoeEFuZ2xlLCB5QW5nbGUsIHJlbGF0aXZlT2Zmc2V0KSB7XG4gIGNvbnN0IHJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50cyA9IHJlbGF0aXZlT2Zmc2V0LCAgLy8vXG4gICAgICAgIHNlY29uZFJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50ID0gc2Vjb25kKHJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50cyksXG4gICAgICAgIHhBbmdsZU9mZnNldCA9IFtcbiAgICAgICAgICAtTWF0aC5zaW4oeEFuZ2xlKSAqIE1hdGguc2luKHlBbmdsZSkgKiBzZWNvbmRSZWxhdGl2ZU9mZnNldENvbXBvbmVudCxcbiAgICAgICAgICAtTWF0aC5jb3MoeEFuZ2xlKSAqIHNlY29uZFJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50LFxuICAgICAgICAgICtNYXRoLnNpbih4QW5nbGUpICogTWF0aC5jb3MoeUFuZ2xlKSAqIHNlY29uZFJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50XG4gICAgICAgIF07XG5cbiAgcmV0dXJuIHhBbmdsZU9mZnNldDtcbn1cbiJdfQ==