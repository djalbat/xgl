'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var vec2 = require('../maths/vec2'),
    vec3 = require('../maths/vec3'),
    constants = require('../constants');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    add = vec3.add,
    subtract = vec2.subtract,
    scale = vec2.scale,
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
          relativeMouseCoordinates = subtract(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeOffset = scale(relativeMouseCoordinates, scalar),
          firstRelativeOffset = first(relativeOffset),
          secondRelativeOffset = second(relativeOffset);

      var offset = this.previousOffset.slice();

      (function () {
        var x = -Math.cos(yAngle) * firstRelativeOffset,
            y = 0,
            z = -Math.sin(yAngle) * firstRelativeOffset;

        offset = add(offset, [x, y, z]);
      })();

      (function () {
        var x = -Math.sin(xAngle) * Math.sin(yAngle) * secondRelativeOffset,
            y = -Math.cos(xAngle) * secondRelativeOffset,
            z = +Math.sin(xAngle) * Math.cos(yAngle) * secondRelativeOffset;

        offset = add(offset, [x, y, z]);
      })();

      this.offset = offset;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvcGFuLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJ2ZWMyIiwidmVjMyIsImNvbnN0YW50cyIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJzZWNvbmQiLCJhZGQiLCJzdWJ0cmFjdCIsInNjYWxlIiwiT0ZGU0VUX1NDQUxBUiIsIklOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMiLCJQYW4iLCJtb3VzZURvd24iLCJzaGlmdEtleURvd24iLCJvZmZzZXQiLCJwcmV2aW91c09mZnNldCIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJhbmdsZXMiLCJ1cGRhdGVPZmZzZXQiLCJ4QW5nbGUiLCJnZXRYQW5nbGUiLCJ5QW5nbGUiLCJnZXRZQW5nbGUiLCJzY2FsYXIiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJyZWxhdGl2ZU9mZnNldCIsImZpcnN0UmVsYXRpdmVPZmZzZXQiLCJzZWNvbmRSZWxhdGl2ZU9mZnNldCIsInNsaWNlIiwieCIsIk1hdGgiLCJjb3MiLCJ5IiwieiIsInNpbiIsImluaXRpYWxPZmZzZXQiLCJwYW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsZUFBUixDQUFiO0FBQUEsSUFDTUUsT0FBT0YsUUFBUSxlQUFSLENBRGI7QUFBQSxJQUVNRyxZQUFZSCxRQUFRLGNBQVIsQ0FGbEI7O0FBSU0sSUFBRUksY0FBRixHQUFxQkwsU0FBckIsQ0FBRUssY0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDb0JELGNBRHBCLENBQ0VDLEtBREY7QUFBQSxJQUNTQyxNQURULEdBQ29CRixjQURwQixDQUNTRSxNQURUO0FBQUEsSUFFRUMsR0FGRixHQUVVTCxJQUZWLENBRUVLLEdBRkY7QUFBQSxJQUdFQyxRQUhGLEdBR3NCUCxJQUh0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LENBQUNILEtBQUtJLEdBQUwsQ0FBU2YsTUFBVCxDQUFELEdBQW9CVyxLQUFLQyxHQUFMLENBQVNWLE1BQVQsQ0FBcEIsR0FBdUNNLG9CQUZqRDs7QUFJQWQsaUJBQVNSLElBQUlRLE1BQUosRUFBWSxDQUFDZ0IsQ0FBRCxFQUFJRyxDQUFKLEVBQU9DLENBQVAsQ0FBWixDQUFUO0FBQ0QsT0FORDs7QUFRQSxXQUFLcEIsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7OztzQ0FFd0JzQixhLEVBQWU7QUFDdEMsVUFBTXRCLFNBQVNzQixhQUFmO0FBQUEsVUFDTXhCLFlBQVksS0FEbEI7QUFBQSxVQUVNQyxlQUFlLEtBRnJCO0FBQUEsVUFHTUUsaUJBQWlCRCxNQUh2QjtBQUFBLFVBR2dDO0FBQzFCRSx5QkFBbUJOLHlCQUp6QjtBQUFBLFVBS01PLDJCQUEyQkQsZ0JBTGpDO0FBQUEsVUFNTXFCLE1BQU0sSUFBSTFCLEdBQUosQ0FBUUMsU0FBUixFQUFtQkMsWUFBbkIsRUFBaUNDLE1BQWpDLEVBQXlDQyxjQUF6QyxFQUF5REMsZ0JBQXpELEVBQTJFQyx3QkFBM0UsQ0FOWjs7QUFRQSxhQUFPb0IsR0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQjVCLEdBQWpCIiwiZmlsZSI6InBhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHZlYzIgPSByZXF1aXJlKCcuLi9tYXRocy92ZWMyJyksXG4gICAgICB2ZWMzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjMycpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGFkZCB9ID0gdmVjMyxcbiAgICAgIHsgc3VidHJhY3QsIHNjYWxlIH0gPSB2ZWMyLFxuICAgICAgeyBPRkZTRVRfU0NBTEFSLCBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIFBhbiB7XG4gIGNvbnN0cnVjdG9yKG1vdXNlRG93biwgc2hpZnRLZXlEb3duLCBvZmZzZXQsIHByZXZpb3VzT2Zmc2V0LCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICB0aGlzLnByZXZpb3VzT2Zmc2V0ID0gcHJldmlvdXNPZmZzZXQ7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXQ7XG4gIH1cblxuICBtb3VzZVVwSGFuZGxlcigpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcigpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgdGhpcy5wcmV2aW91c09mZnNldCA9IHRoaXMub2Zmc2V0O1xuXG4gICAgaWYgKHRoaXMuc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgICAgIHRoaXMucHJldmlvdXNPZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICB9XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIGFuZ2xlcykge1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG5cbiAgICBpZiAodGhpcy5tb3VzZURvd24gJiYgdGhpcy5zaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMudXBkYXRlT2Zmc2V0KGFuZ2xlcyk7XG4gICAgfVxuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuXG4gICAgaWYgKHRoaXMuc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgICAgIHRoaXMucHJldmlvdXNPZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVPZmZzZXQoYW5nbGVzKSB7XG4gICAgY29uc3QgeEFuZ2xlID0gYW5nbGVzLmdldFhBbmdsZSgpLFxuICAgICAgICAgIHlBbmdsZSA9IGFuZ2xlcy5nZXRZQW5nbGUoKSxcbiAgICAgICAgICBzY2FsYXIgPSBPRkZTRVRfU0NBTEFSLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0KHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0ID0gc2NhbGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBzY2FsYXIpLFxuICAgICAgICAgIGZpcnN0UmVsYXRpdmVPZmZzZXQgPSBmaXJzdChyZWxhdGl2ZU9mZnNldCksXG4gICAgICAgICAgc2Vjb25kUmVsYXRpdmVPZmZzZXQgPSBzZWNvbmQocmVsYXRpdmVPZmZzZXQpO1xuXG4gICAgbGV0IG9mZnNldCA9IHRoaXMucHJldmlvdXNPZmZzZXQuc2xpY2UoKTtcblxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IHggPSAtTWF0aC5jb3MoeUFuZ2xlKSAqIGZpcnN0UmVsYXRpdmVPZmZzZXQsXG4gICAgICAgICAgICB5ID0gMCxcbiAgICAgICAgICAgIHogPSAtTWF0aC5zaW4oeUFuZ2xlKSAqIGZpcnN0UmVsYXRpdmVPZmZzZXQ7XG5cbiAgICAgIG9mZnNldCA9IGFkZChvZmZzZXQsIFt4LCB5LCB6XSk7XG4gICAgfSkoKTtcblxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IHggPSAtTWF0aC5zaW4oeEFuZ2xlKSAqIE1hdGguc2luKHlBbmdsZSkgKiBzZWNvbmRSZWxhdGl2ZU9mZnNldCxcbiAgICAgICAgICAgIHkgPSAtTWF0aC5jb3MoeEFuZ2xlKSAqIHNlY29uZFJlbGF0aXZlT2Zmc2V0LFxuICAgICAgICAgICAgeiA9ICtNYXRoLnNpbih4QW5nbGUpICogTWF0aC5jb3MoeUFuZ2xlKSAqIHNlY29uZFJlbGF0aXZlT2Zmc2V0O1xuXG4gICAgICBvZmZzZXQgPSBhZGQob2Zmc2V0LCBbeCwgeSwgel0pO1xuICAgIH0pKCk7XG5cbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbE9mZnNldChpbml0aWFsT2Zmc2V0KSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gaW5pdGlhbE9mZnNldCxcbiAgICAgICAgICBtb3VzZURvd24gPSBmYWxzZSxcbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZSxcbiAgICAgICAgICBwcmV2aW91c09mZnNldCA9IG9mZnNldCwgIC8vL1xuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTLFxuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXMsXG4gICAgICAgICAgcGFuID0gbmV3IFBhbihtb3VzZURvd24sIHNoaWZ0S2V5RG93biwgb2Zmc2V0LCBwcmV2aW91c09mZnNldCwgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICBcbiAgICByZXR1cm4gcGFuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFuO1xuIl19