'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var vec2 = require('../../maths/vec2'),
    vec3 = require('../../maths/vec3'),
    constants = require('../../constants');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9wYW4uanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInZlYzIiLCJ2ZWMzIiwiY29uc3RhbnRzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsImFkZCIsInN1YnRyYWN0Iiwic2NhbGUiLCJPRkZTRVRfU0NBTEFSIiwiSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyIsIlBhbiIsIm1vdXNlRG93biIsInNoaWZ0S2V5RG93biIsIm9mZnNldCIsInByZXZpb3VzT2Zmc2V0IiwibW91c2VDb29yZGluYXRlcyIsInByZXZpb3VzTW91c2VDb29yZGluYXRlcyIsImFuZ2xlcyIsInVwZGF0ZU9mZnNldCIsInhBbmdsZSIsImdldFhBbmdsZSIsInlBbmdsZSIsImdldFlBbmdsZSIsInNjYWxhciIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInJlbGF0aXZlT2Zmc2V0IiwiZmlyc3RSZWxhdGl2ZU9mZnNldCIsInNlY29uZFJlbGF0aXZlT2Zmc2V0Iiwic2xpY2UiLCJ4IiwiTWF0aCIsImNvcyIsInkiLCJ6Iiwic2luIiwiaW5pdGlhbE9mZnNldCIsInBhbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxrQkFBUixDQUFiO0FBQUEsSUFDTUUsT0FBT0YsUUFBUSxrQkFBUixDQURiO0FBQUEsSUFFTUcsWUFBWUgsUUFBUSxpQkFBUixDQUZsQjs7QUFJTSxJQUFFSSxjQUFGLEdBQXFCTCxTQUFyQixDQUFFSyxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNvQkQsY0FEcEIsQ0FDRUMsS0FERjtBQUFBLElBQ1NDLE1BRFQsR0FDb0JGLGNBRHBCLENBQ1NFLE1BRFQ7QUFBQSxJQUVFQyxHQUZGLEdBRVVMLElBRlYsQ0FFRUssR0FGRjtBQUFBLElBR0VDLFFB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QUFBLFlBRU1NLElBQUksQ0FBQ0gsS0FBS0ksR0FBTCxDQUFTZixNQUFULENBQUQsR0FBb0JXLEtBQUtDLEdBQUwsQ0FBU1YsTUFBVCxDQUFwQixHQUF1Q00sb0JBRmpEOztBQUlBZCxpQkFBU1IsSUFBSVEsTUFBSixFQUFZLENBQUNnQixDQUFELEVBQUlHLENBQUosRUFBT0MsQ0FBUCxDQUFaLENBQVQ7QUFDRCxPQU5EOztBQVFBLFdBQUtwQixNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7O3NDQUV3QnNCLGEsRUFBZTtBQUN0QyxVQUFNdEIsU0FBU3NCLGFBQWY7QUFBQSxVQUNNeEIsWUFBWSxLQURsQjtBQUFBLFVBRU1DLGVBQWUsS0FGckI7QUFBQSxVQUdNRSxpQkFBaUJELE1BSHZCO0FBQUEsVUFHZ0M7QUFDMUJFLHlCQUFtQk4seUJBSnpCO0FBQUEsVUFLTU8sMkJBQTJCRCxnQkFMakM7QUFBQSxVQU1NcUIsTUFBTSxJQUFJMUIsR0FBSixDQUFRQyxTQUFSLEVBQW1CQyxZQUFuQixFQUFpQ0MsTUFBakMsRUFBeUNDLGNBQXpDLEVBQXlEQyxnQkFBekQsRUFBMkVDLHdCQUEzRSxDQU5aOztBQVFBLGFBQU9vQixHQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCNUIsR0FBakIiLCJmaWxlIjoicGFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgdmVjMiA9IHJlcXVpcmUoJy4uLy4uL21hdGhzL3ZlYzInKSxcbiAgICAgIHZlYzMgPSByZXF1aXJlKCcuLi8uLi9tYXRocy92ZWMzJyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYWRkIH0gPSB2ZWMzLFxuICAgICAgeyBzdWJ0cmFjdCwgc2NhbGUgfSA9IHZlYzIsXG4gICAgICB7IE9GRlNFVF9TQ0FMQVIsIElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgUGFuIHtcbiAgY29uc3RydWN0b3IobW91c2VEb3duLCBzaGlmdEtleURvd24sIG9mZnNldCwgcHJldmlvdXNPZmZzZXQsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgIHRoaXMucHJldmlvdXNPZmZzZXQgPSBwcmV2aW91c09mZnNldDtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldDtcbiAgfVxuXG4gIG1vdXNlVXBIYW5kbGVyKCkge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKCkge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgICB0aGlzLnByZXZpb3VzT2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG5cbiAgICBpZiAodGhpcy5zaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICAgICAgdGhpcy5wcmV2aW91c09mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgYW5nbGVzKSB7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcblxuICAgIGlmICh0aGlzLm1vdXNlRG93biAmJiB0aGlzLnNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy51cGRhdGVPZmZzZXQoYW5nbGVzKTtcbiAgICB9XG4gIH1cblxuICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKSB7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG5cbiAgICBpZiAodGhpcy5zaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICAgICAgdGhpcy5wcmV2aW91c09mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZU9mZnNldChhbmdsZXMpIHtcbiAgICBjb25zdCB4QW5nbGUgPSBhbmdsZXMuZ2V0WEFuZ2xlKCksXG4gICAgICAgICAgeUFuZ2xlID0gYW5nbGVzLmdldFlBbmdsZSgpLFxuICAgICAgICAgIHNjYWxhciA9IE9GRlNFVF9TQ0FMQVIsXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QodGhpcy5tb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgcmVsYXRpdmVPZmZzZXQgPSBzY2FsZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHNjYWxhciksXG4gICAgICAgICAgZmlyc3RSZWxhdGl2ZU9mZnNldCA9IGZpcnN0KHJlbGF0aXZlT2Zmc2V0KSxcbiAgICAgICAgICBzZWNvbmRSZWxhdGl2ZU9mZnNldCA9IHNlY29uZChyZWxhdGl2ZU9mZnNldCk7XG5cbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5wcmV2aW91c09mZnNldC5zbGljZSgpO1xuXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgeCA9IC1NYXRoLmNvcyh5QW5nbGUpICogZmlyc3RSZWxhdGl2ZU9mZnNldCxcbiAgICAgICAgICAgIHkgPSAwLFxuICAgICAgICAgICAgeiA9IC1NYXRoLnNpbih5QW5nbGUpICogZmlyc3RSZWxhdGl2ZU9mZnNldDtcblxuICAgICAgb2Zmc2V0ID0gYWRkKG9mZnNldCwgW3gsIHksIHpdKTtcbiAgICB9KSgpO1xuXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgeCA9IC1NYXRoLnNpbih4QW5nbGUpICogTWF0aC5zaW4oeUFuZ2xlKSAqIHNlY29uZFJlbGF0aXZlT2Zmc2V0LFxuICAgICAgICAgICAgeSA9IC1NYXRoLmNvcyh4QW5nbGUpICogc2Vjb25kUmVsYXRpdmVPZmZzZXQsXG4gICAgICAgICAgICB6ID0gK01hdGguc2luKHhBbmdsZSkgKiBNYXRoLmNvcyh5QW5nbGUpICogc2Vjb25kUmVsYXRpdmVPZmZzZXQ7XG5cbiAgICAgIG9mZnNldCA9IGFkZChvZmZzZXQsIFt4LCB5LCB6XSk7XG4gICAgfSkoKTtcblxuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsT2Zmc2V0KGluaXRpYWxPZmZzZXQpIHtcbiAgICBjb25zdCBvZmZzZXQgPSBpbml0aWFsT2Zmc2V0LFxuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLFxuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlLFxuICAgICAgICAgIHByZXZpb3VzT2Zmc2V0ID0gb2Zmc2V0LCAgLy8vXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMsXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcyxcbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG1vdXNlRG93biwgc2hpZnRLZXlEb3duLCBvZmZzZXQsIHByZXZpb3VzT2Zmc2V0LCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIFxuICAgIHJldHVybiBwYW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYW47XG4iXX0=