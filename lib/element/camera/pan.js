'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../../constants'),
    vectorMaths = require('../../maths/vector'),
    arrayUtilities = require('../../utilities/array');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9wYW4uanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwicmVxdWlyZSIsInZlY3Rvck1hdGhzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsImFkZDMiLCJzdWJ0cmFjdDIiLCJzY2FsZTIiLCJPRkZTRVRfU0NBTEFSIiwiSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyIsIlBhbiIsIm1vdXNlRG93biIsInNoaWZ0S2V5RG93biIsIm9mZnNldCIsInByZXZpb3VzT2Zmc2V0IiwibW91c2VDb29yZGluYXRlcyIsInByZXZpb3VzTW91c2VDb29yZGluYXRlcyIsImFuZ2xlcyIsInVwZGF0ZU9mZnNldCIsInhBbmdsZSIsImdldFhBbmdsZSIsInlBbmdsZSIsImdldFlBbmdsZSIsInNjYWxhciIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInJlbGF0aXZlT2Zmc2V0IiwieUFuZ2xlT2Zmc2V0IiwiY2FsY3VsYXRlWUFuZ2xlT2Zmc2V0IiwieEFuZ2xlT2Zmc2V0IiwiY2FsY3VsYXRlWEFuZ2xlT2Zmc2V0IiwiaW5pdGlhbE9mZnNldCIsInBhbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWxhdGl2ZU9mZnNldENvbXBvbmVudHMiLCJmaXJzdFJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50IiwieCIsIk1hdGgiLCJjb3MiLCJ5IiwieiIsInNpbiIsInNlY29uZFJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxpQkFBUixDQUFsQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsb0JBQVIsQ0FEcEI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsdUJBQVIsQ0FGdkI7O0lBSVFHLEssR0FBa0JELGMsQ0FBbEJDLEs7SUFBT0MsTSxHQUFXRixjLENBQVhFLE07SUFDUEMsSSxHQUE0QkosVyxDQUE1QkksSTtJQUFNQyxTLEdBQXNCTCxXLENB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TVMsMkJBQTJCVCxjQUFqQztBQUFBLE1BQWtEO0FBQzVDVSxpQ0FBK0JoQyxNQUFNK0Isd0JBQU4sQ0FEckM7QUFBQSxNQUVNRSxJQUFJLENBQUNDLEtBQUtDLEdBQUwsQ0FBU2pCLE1BQVQsQ0FBRCxHQUFvQmMsNEJBRjlCO0FBQUEsTUFHTUksSUFBSSxDQUhWO0FBQUEsTUFJTUMsSUFBSSxDQUFDSCxLQUFLSSxHQUFMLENBQVNwQixNQUFULENBQUQsR0FBb0JjLDRCQUo5QjtBQUFBLE1BS01ULGVBQWUsQ0FBQ1UsQ0FBRCxFQUFJRyxDQUFKLEVBQU9DLENBQVAsQ0FMckI7O0FBT0EsU0FBT2QsWUFBUDtBQUNEOztBQUVELFNBQVNHLHFCQUFULENBQStCVixNQUEvQixFQUF1Q0UsTUFBdkMsRUFBK0NJLGNBQS9DLEVBQStEO0FBQzdELE1BQU1TLDJCQUEyQlQsY0FBakM7QUFBQSxNQUFrRDtBQUM1Q2lCLGtDQUFnQ3RDLE9BQU84Qix3QkFBUCxDQUR0QztBQUFBLE1BRU1FLElBQUksQ0FBQ0MsS0FBS0ksR0FBTCxDQUFTdEIsTUFBVCxDQUFELEdBQW9Ca0IsS0FBS0ksR0FBTCxDQUFTcEIsTUFBVCxDQUFwQixHQUF1Q3FCLDZCQUZqRDtBQUFBLE1BR01ILElBQUksQ0FBQ0YsS0FBS0MsR0FBTCxDQUFTbkIsTUFBVCxDQUFELEdBQW9CdUIsNkJBSDlCO0FBQUEsTUFJTUYsSUFBSSxDQUFDSCxLQUFLSSxHQUFMLENBQVN0QixNQUFULENBQUQsR0FBb0JrQixLQUFLQyxHQUFMLENBQVNqQixNQUFULENBQXBCLEdBQXVDcUIsNkJBSmpEO0FBQUEsTUFLTWQsZUFBZSxDQUFDUSxDQUFELEVBQUlHLENBQUosRUFBT0MsQ0FBUCxDQUxyQjs7QUFPQSxTQUFPWixZQUFQO0FBQ0QiLCJmaWxlIjoicGFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhZGQzLCBzdWJ0cmFjdDIsIHNjYWxlMiB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IE9GRlNFVF9TQ0FMQVIsIElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgUGFuIHtcbiAgY29uc3RydWN0b3IobW91c2VEb3duLCBzaGlmdEtleURvd24sIG9mZnNldCwgcHJldmlvdXNPZmZzZXQsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgIHRoaXMucHJldmlvdXNPZmZzZXQgPSBwcmV2aW91c09mZnNldDtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldDtcbiAgfVxuXG4gIG1vdXNlVXBIYW5kbGVyKCkge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKCkge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgICB0aGlzLnByZXZpb3VzT2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG5cbiAgICBpZiAodGhpcy5zaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICAgICAgdGhpcy5wcmV2aW91c09mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgYW5nbGVzKSB7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcblxuICAgIGlmICh0aGlzLm1vdXNlRG93biAmJiB0aGlzLnNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy51cGRhdGVPZmZzZXQoYW5nbGVzKTtcbiAgICB9XG4gIH1cblxuICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKSB7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG5cbiAgICBpZiAodGhpcy5zaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICAgICAgdGhpcy5wcmV2aW91c09mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZU9mZnNldChhbmdsZXMpIHtcbiAgICBjb25zdCB4QW5nbGUgPSBhbmdsZXMuZ2V0WEFuZ2xlKCksXG4gICAgICAgICAgeUFuZ2xlID0gYW5nbGVzLmdldFlBbmdsZSgpLFxuICAgICAgICAgIHNjYWxhciA9IE9GRlNFVF9TQ0FMQVIsXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0ID0gc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGFyKSxcbiAgICAgICAgICB5QW5nbGVPZmZzZXQgPSBjYWxjdWxhdGVZQW5nbGVPZmZzZXQoeUFuZ2xlLCByZWxhdGl2ZU9mZnNldCksXG4gICAgICAgICAgeEFuZ2xlT2Zmc2V0ID0gY2FsY3VsYXRlWEFuZ2xlT2Zmc2V0KHhBbmdsZSwgeUFuZ2xlLCByZWxhdGl2ZU9mZnNldCk7XG5cbiAgICB0aGlzLm9mZnNldCA9IGFkZDMoYWRkMyh0aGlzLnByZXZpb3VzT2Zmc2V0LCB5QW5nbGVPZmZzZXQpLCB4QW5nbGVPZmZzZXQpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxPZmZzZXQoaW5pdGlhbE9mZnNldCkge1xuICAgIGNvbnN0IG9mZnNldCA9IGluaXRpYWxPZmZzZXQsXG4gICAgICAgICAgbW91c2VEb3duID0gZmFsc2UsXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2UsXG4gICAgICAgICAgcHJldmlvdXNPZmZzZXQgPSBvZmZzZXQsICAvLy9cbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzLFxuICAgICAgICAgIHBhbiA9IG5ldyBQYW4obW91c2VEb3duLCBzaGlmdEtleURvd24sIG9mZnNldCwgcHJldmlvdXNPZmZzZXQsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG4gICAgXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhbjtcblxuZnVuY3Rpb24gY2FsY3VsYXRlWUFuZ2xlT2Zmc2V0KHlBbmdsZSwgcmVsYXRpdmVPZmZzZXQpIHtcbiAgY29uc3QgcmVsYXRpdmVPZmZzZXRDb21wb25lbnRzID0gcmVsYXRpdmVPZmZzZXQsICAvLy9cbiAgICAgICAgZmlyc3RSZWxhdGl2ZU9mZnNldENvbXBvbmVudCA9IGZpcnN0KHJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50cyksXG4gICAgICAgIHggPSAtTWF0aC5jb3MoeUFuZ2xlKSAqIGZpcnN0UmVsYXRpdmVPZmZzZXRDb21wb25lbnQsXG4gICAgICAgIHkgPSAwLFxuICAgICAgICB6ID0gLU1hdGguc2luKHlBbmdsZSkgKiBmaXJzdFJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50LFxuICAgICAgICB5QW5nbGVPZmZzZXQgPSBbeCwgeSwgel07XG5cbiAgcmV0dXJuIHlBbmdsZU9mZnNldDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlWEFuZ2xlT2Zmc2V0KHhBbmdsZSwgeUFuZ2xlLCByZWxhdGl2ZU9mZnNldCkge1xuICBjb25zdCByZWxhdGl2ZU9mZnNldENvbXBvbmVudHMgPSByZWxhdGl2ZU9mZnNldCwgIC8vL1xuICAgICAgICBzZWNvbmRSZWxhdGl2ZU9mZnNldENvbXBvbmVudCA9IHNlY29uZChyZWxhdGl2ZU9mZnNldENvbXBvbmVudHMpLFxuICAgICAgICB4ID0gLU1hdGguc2luKHhBbmdsZSkgKiBNYXRoLnNpbih5QW5nbGUpICogc2Vjb25kUmVsYXRpdmVPZmZzZXRDb21wb25lbnQsXG4gICAgICAgIHkgPSAtTWF0aC5jb3MoeEFuZ2xlKSAqIHNlY29uZFJlbGF0aXZlT2Zmc2V0Q29tcG9uZW50LFxuICAgICAgICB6ID0gK01hdGguc2luKHhBbmdsZSkgKiBNYXRoLmNvcyh5QW5nbGUpICogc2Vjb25kUmVsYXRpdmVPZmZzZXRDb21wb25lbnQsXG4gICAgICAgIHhBbmdsZU9mZnNldCA9IFt4LCB5LCB6XTtcblxuICByZXR1cm4geEFuZ2xlT2Zmc2V0O1xufVxuIl19