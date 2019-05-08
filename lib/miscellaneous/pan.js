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
  function Pan(mouseDown, shiftKeyDown, offset, previousOffset, mouseCoordinates, previousMouseCoordinates) {
    _classCallCheck(this, Pan);

    this.mouseDown = mouseDown;
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
      this.mouseDown = false;
      this.previousMouseCoordinates = this.mouseCoordinates;
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler() {
      this.mouseDown = true;
      this.previousOffset = this.offset;

      if (this.shiftKeyDown) {
        this.previousMouseCoordinates = this.mouseCoordinates;
        this.previousOffset = this.offset;
      }
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates, angles) {
      this.mouseCoordinates = mouseCoordinates;

      if (this.mouseDown && this.shiftKeyDown) {
        this.updateOffset(angles);
      }
    }
  }, {
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {
      this.shiftKeyDown = shiftKeyDown;

      if (this.shiftKeyDown) {
        this.previousMouseCoordinates = this.mouseCoordinates;
        this.previousOffset = this.offset;
      }
    }
  }, {
    key: 'updateOffset',
    value: function updateOffset(angles) {
      var xAngle = angles.getXAngle(),
          yAngle = angles.getYAngle(),
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
          mouseDown = false,
          shiftKeyDown = false,
          previousOffset = offset,
          ///
      mouseCoordinates = INITIAL_MOUSE_COORDINATES,
          previousMouseCoordinates = mouseCoordinates,
          pan = new Pan(mouseDown, shiftKeyDown, offset, previousOffset, mouseCoordinates, previousMouseCoordinates);

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
      x = -Math.cos(yAngle) * firstRelativeOffsetComponent,
      y = 0,
      z = -Math.sin(yAngle) * firstRelativeOffsetComponent,
      yAngleOffset = [x, y, z];

  return yAngleOffset;
}

function calculateXAngleOffset(xAngle, yAngle, relativeOffset) {
  var relativeOffsetComponents = relativeOffset,
      ///
  secondRelativeOffsetComponent = second(relativeOffsetComponents),
      x = -Math.sin(xAngle) * Math.sin(yAngle) * secondRelativeOffsetComponent,
      y = -Math.cos(xAngle) * secondRelativeOffsetComponent,
      z = +Math.sin(xAngle) * Math.cos(yAngle) * secondRelativeOffsetComponent,
      xAngleOffset = [x, y, z];

  return xAngleOffset;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3Bhbi5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJyZXF1aXJlIiwidmVjdG9yTWF0aHMiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0Iiwic2Vjb25kIiwiYWRkMyIsInN1YnRyYWN0MiIsInNjYWxlMiIsIk9GRlNFVF9TQ0FMQVIiLCJJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTIiwiUGFuIiwibW91c2VEb3duIiwic2hpZnRLZXlEb3duIiwib2Zmc2V0IiwicHJldmlvdXNPZmZzZXQiLCJtb3VzZUNvb3JkaW5hdGVzIiwicHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzIiwiYW5nbGVzIiwidXBkYXRlT2Zmc2V0IiwieEFuZ2xlIiwiZ2V0WEFuZ2xlIiwieUFuZ2xlIiwiZ2V0WUFuZ2xlIiwic2NhbGFyIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwicmVsYXRpdmVPZmZzZXQiLCJ5QW5nbGVPZmZzZXQiLCJjYWxjdWxhdGVZQW5nbGVPZmZzZXQiLCJ4QW5nbGVPZmZzZXQiLCJjYWxjdWxhdGVYQW5nbGVPZmZzZXQiLCJpbml0aWFsT2Zmc2V0IiwicGFuIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50cyIsImZpcnN0UmVsYXRpdmVPZmZzZXRDb21wb25lbnQiLCJ4IiwiTWF0aCIsImNvcyIsInkiLCJ6Iiwic2luIiwic2Vjb25kUmVsYXRpdmVPZmZzZXRDb21wb25lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLG9CQUFSLENBRnZCOztJQUlRRyxLLEdBQWtCRCxjLENBQWxCQyxLO0lBQU9DLE0sR0FBV0YsYyxDQUFYRSxNO0lBQ1BDLEksR0FBNEJKLFcsQ0FBNUJJLEk7SUFBTUMsUyxHQUFzQkwsVyxDQUF0Qkss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QUEyQlQsY0FBakM7QUFBQSxNQUFrRDtBQUM1Q1UsaUNBQStCaEMsTUFBTStCLHdCQUFOLENBRHJDO0FBQUEsTUFFTUUsSUFBSSxDQUFDQyxLQUFLQyxHQUFMLENBQVNqQixNQUFULENBQUQsR0FBb0JjLDRCQUY5QjtBQUFBLE1BR01JLElBQUksQ0FIVjtBQUFBLE1BSU1DLElBQUksQ0FBQ0gsS0FBS0ksR0FBTCxDQUFTcEIsTUFBVCxDQUFELEdBQW9CYyw0QkFKOUI7QUFBQSxNQUtNVCxlQUFlLENBQUNVLENBQUQsRUFBSUcsQ0FBSixFQUFPQyxDQUFQLENBTHJCOztBQU9BLFNBQU9kLFlBQVA7QUFDRDs7QUFFRCxTQUFTRyxxQkFBVCxDQUErQlYsTUFBL0IsRUFBdUNFLE1BQXZDLEVBQStDSSxjQUEvQyxFQUErRDtBQUM3RCxNQUFNUywyQkFBMkJULGNBQWpDO0FBQUEsTUFBa0Q7QUFDNUNpQixrQ0FBZ0N0QyxPQUFPOEIsd0JBQVAsQ0FEdEM7QUFBQSxNQUVNRSxJQUFJLENBQUNDLEtBQUtJLEdBQUwsQ0FBU3RCLE1BQVQsQ0FBRCxHQUFvQmtCLEtBQUtJLEdBQUwsQ0FBU3BCLE1BQVQsQ0FBcEIsR0FBdUNxQiw2QkFGakQ7QUFBQSxNQUdNSCxJQUFJLENBQUNGLEtBQUtDLEdBQUwsQ0FBU25CLE1BQVQsQ0FBRCxHQUFvQnVCLDZCQUg5QjtBQUFBLE1BSU1GLElBQUksQ0FBQ0gsS0FBS0ksR0FBTCxDQUFTdEIsTUFBVCxDQUFELEdBQW9Ca0IsS0FBS0MsR0FBTCxDQUFTakIsTUFBVCxDQUFwQixHQUF1Q3FCLDZCQUpqRDtBQUFBLE1BS01kLGVBQWUsQ0FBQ1EsQ0FBRCxFQUFJRyxDQUFKLEVBQU9DLENBQVAsQ0FMckI7O0FBT0EsU0FBT1osWUFBUDtBQUNEIiwiZmlsZSI6InBhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYWRkMywgc3VidHJhY3QyLCBzY2FsZTIgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBPRkZTRVRfU0NBTEFSLCBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIFBhbiB7XG4gIGNvbnN0cnVjdG9yKG1vdXNlRG93biwgc2hpZnRLZXlEb3duLCBvZmZzZXQsIHByZXZpb3VzT2Zmc2V0LCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICB0aGlzLnByZXZpb3VzT2Zmc2V0ID0gcHJldmlvdXNPZmZzZXQ7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXQ7XG4gIH1cblxuICBtb3VzZVVwSGFuZGxlcigpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcigpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgdGhpcy5wcmV2aW91c09mZnNldCA9IHRoaXMub2Zmc2V0O1xuXG4gICAgaWYgKHRoaXMuc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgICAgIHRoaXMucHJldmlvdXNPZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICB9XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIGFuZ2xlcykge1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG5cbiAgICBpZiAodGhpcy5tb3VzZURvd24gJiYgdGhpcy5zaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMudXBkYXRlT2Zmc2V0KGFuZ2xlcyk7XG4gICAgfVxuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuXG4gICAgaWYgKHRoaXMuc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgICAgIHRoaXMucHJldmlvdXNPZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVPZmZzZXQoYW5nbGVzKSB7XG4gICAgY29uc3QgeEFuZ2xlID0gYW5nbGVzLmdldFhBbmdsZSgpLFxuICAgICAgICAgIHlBbmdsZSA9IGFuZ2xlcy5nZXRZQW5nbGUoKSxcbiAgICAgICAgICBzY2FsYXIgPSBPRkZTRVRfU0NBTEFSLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldCA9IHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHNjYWxhciksXG4gICAgICAgICAgeUFuZ2xlT2Zmc2V0ID0gY2FsY3VsYXRlWUFuZ2xlT2Zmc2V0KHlBbmdsZSwgcmVsYXRpdmVPZmZzZXQpLFxuICAgICAgICAgIHhBbmdsZU9mZnNldCA9IGNhbGN1bGF0ZVhBbmdsZU9mZnNldCh4QW5nbGUsIHlBbmdsZSwgcmVsYXRpdmVPZmZzZXQpO1xuXG4gICAgdGhpcy5vZmZzZXQgPSBhZGQzKGFkZDModGhpcy5wcmV2aW91c09mZnNldCwgeUFuZ2xlT2Zmc2V0KSwgeEFuZ2xlT2Zmc2V0KTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsT2Zmc2V0KGluaXRpYWxPZmZzZXQpIHtcbiAgICBjb25zdCBvZmZzZXQgPSBpbml0aWFsT2Zmc2V0LFxuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLFxuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlLFxuICAgICAgICAgIHByZXZpb3VzT2Zmc2V0ID0gb2Zmc2V0LCAgLy8vXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMsXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcyxcbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG1vdXNlRG93biwgc2hpZnRLZXlEb3duLCBvZmZzZXQsIHByZXZpb3VzT2Zmc2V0LCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIFxuICAgIHJldHVybiBwYW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYW47XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVlBbmdsZU9mZnNldCh5QW5nbGUsIHJlbGF0aXZlT2Zmc2V0KSB7XG4gIGNvbnN0IHJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50cyA9IHJlbGF0aXZlT2Zmc2V0LCAgLy8vXG4gICAgICAgIGZpcnN0UmVsYXRpdmVPZmZzZXRDb21wb25lbnQgPSBmaXJzdChyZWxhdGl2ZU9mZnNldENvbXBvbmVudHMpLFxuICAgICAgICB4ID0gLU1hdGguY29zKHlBbmdsZSkgKiBmaXJzdFJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50LFxuICAgICAgICB5ID0gMCxcbiAgICAgICAgeiA9IC1NYXRoLnNpbih5QW5nbGUpICogZmlyc3RSZWxhdGl2ZU9mZnNldENvbXBvbmVudCxcbiAgICAgICAgeUFuZ2xlT2Zmc2V0ID0gW3gsIHksIHpdO1xuXG4gIHJldHVybiB5QW5nbGVPZmZzZXQ7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVhBbmdsZU9mZnNldCh4QW5nbGUsIHlBbmdsZSwgcmVsYXRpdmVPZmZzZXQpIHtcbiAgY29uc3QgcmVsYXRpdmVPZmZzZXRDb21wb25lbnRzID0gcmVsYXRpdmVPZmZzZXQsICAvLy9cbiAgICAgICAgc2Vjb25kUmVsYXRpdmVPZmZzZXRDb21wb25lbnQgPSBzZWNvbmQocmVsYXRpdmVPZmZzZXRDb21wb25lbnRzKSxcbiAgICAgICAgeCA9IC1NYXRoLnNpbih4QW5nbGUpICogTWF0aC5zaW4oeUFuZ2xlKSAqIHNlY29uZFJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50LFxuICAgICAgICB5ID0gLU1hdGguY29zKHhBbmdsZSkgKiBzZWNvbmRSZWxhdGl2ZU9mZnNldENvbXBvbmVudCxcbiAgICAgICAgeiA9ICtNYXRoLnNpbih4QW5nbGUpICogTWF0aC5jb3MoeUFuZ2xlKSAqIHNlY29uZFJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50LFxuICAgICAgICB4QW5nbGVPZmZzZXQgPSBbeCwgeSwgel07XG5cbiAgcmV0dXJuIHhBbmdsZU9mZnNldDtcbn1cbiJdfQ==