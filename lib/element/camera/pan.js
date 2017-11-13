'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../../constants'),
    arrayUtilities = require('../../utilities/array'),
    vectorUtilities = require('../../utilities/vector');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    add3 = vectorUtilities.add3,
    subtract2 = vectorUtilities.subtract2,
    scale2 = vectorUtilities.scale2,
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
          firstRelativeOffset = first(relativeOffset),
          secondRelativeOffset = second(relativeOffset);

      var offset = this.previousOffset.slice(); ///

      (function () {
        var x = -Math.cos(yAngle) * firstRelativeOffset,
            y = 0,
            z = -Math.sin(yAngle) * firstRelativeOffset;

        offset = add3(offset, [x, y, z]);
      })();

      (function () {
        var x = -Math.sin(xAngle) * Math.sin(yAngle) * secondRelativeOffset,
            y = -Math.cos(xAngle) * secondRelativeOffset,
            z = +Math.sin(xAngle) * Math.cos(yAngle) * secondRelativeOffset;

        offset = add3(offset, [x, y, z]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9wYW4uanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwidmVjdG9yVXRpbGl0aWVzIiwiZmlyc3QiLCJzZWNvbmQiLCJhZGQzIiwic3VidHJhY3QyIiwic2NhbGUyIiwiT0ZGU0VUX1NDQUxBUiIsIklOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMiLCJQYW4iLCJtb3VzZURvd24iLCJzaGlmdEtleURvd24iLCJvZmZzZXQiLCJwcmV2aW91c09mZnNldCIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJhbmdsZXMiLCJ1cGRhdGVPZmZzZXQiLCJ4QW5nbGUiLCJnZXRYQW5nbGUiLCJ5QW5nbGUiLCJnZXRZQW5nbGUiLCJzY2FsYXIiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJyZWxhdGl2ZU9mZnNldCIsImZpcnN0UmVsYXRpdmVPZmZzZXQiLCJzZWNvbmRSZWxhdGl2ZU9mZnNldCIsInNsaWNlIiwieCIsIk1hdGgiLCJjb3MiLCJ5IiwieiIsInNpbiIsImluaXRpYWxPZmZzZXQiLCJwYW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxpQkFBUixDQUFsQjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSx1QkFBUixDQUR2QjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSx3QkFBUixDQUZ4Qjs7SUFJUUcsSyxHQUFrQkYsYyxDQUFsQkUsSztJQUFPQyxNLEdBQVdILGMsQ0FBWEcsTTtJQUNQQyxJLEdBQTRCSCxlLENBQTVCRyxJO0lBQU1DLFMsR0FBc0JKLGUsQ0FBdEJJLFM7SUFBV0MsTSxHQUFXTCxlLENBQVhLLE07SUFDakJDLGEsR0FBNkNULFMsQ0FBN0NTLGE7SUFBZUMseUIsR0FBOEJWLFMsQ0FBOUJVLHlCOztJQUVqQkMsRztBQUNKLGVBQVlDLFNB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QUFiLENBQVQ7QUFDRCxPQU5EOztBQVFBLFdBQUtwQixNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7O3NDQUV3QnNCLGEsRUFBZTtBQUN0QyxVQUFNdEIsU0FBU3NCLGFBQWY7QUFBQSxVQUNNeEIsWUFBWSxLQURsQjtBQUFBLFVBRU1DLGVBQWUsS0FGckI7QUFBQSxVQUdNRSxpQkFBaUJELE1BSHZCO0FBQUEsVUFHZ0M7QUFDMUJFLHlCQUFtQk4seUJBSnpCO0FBQUEsVUFLTU8sMkJBQTJCRCxnQkFMakM7QUFBQSxVQU1NcUIsTUFBTSxJQUFJMUIsR0FBSixDQUFRQyxTQUFSLEVBQW1CQyxZQUFuQixFQUFpQ0MsTUFBakMsRUFBeUNDLGNBQXpDLEVBQXlEQyxnQkFBekQsRUFBMkVDLHdCQUEzRSxDQU5aOztBQVFBLGFBQU9vQixHQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCNUIsR0FBakIiLCJmaWxlIjoicGFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB2ZWN0b3JVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvdmVjdG9yJyk7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGFkZDMsIHN1YnRyYWN0Miwgc2NhbGUyIH0gPSB2ZWN0b3JVdGlsaXRpZXMsXG4gICAgICB7IE9GRlNFVF9TQ0FMQVIsIElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgUGFuIHtcbiAgY29uc3RydWN0b3IobW91c2VEb3duLCBzaGlmdEtleURvd24sIG9mZnNldCwgcHJldmlvdXNPZmZzZXQsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgIHRoaXMucHJldmlvdXNPZmZzZXQgPSBwcmV2aW91c09mZnNldDtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldDtcbiAgfVxuXG4gIG1vdXNlVXBIYW5kbGVyKCkge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKCkge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgICB0aGlzLnByZXZpb3VzT2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG5cbiAgICBpZiAodGhpcy5zaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICAgICAgdGhpcy5wcmV2aW91c09mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgYW5nbGVzKSB7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcblxuICAgIGlmICh0aGlzLm1vdXNlRG93biAmJiB0aGlzLnNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy51cGRhdGVPZmZzZXQoYW5nbGVzKTtcbiAgICB9XG4gIH1cblxuICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKSB7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG5cbiAgICBpZiAodGhpcy5zaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICAgICAgdGhpcy5wcmV2aW91c09mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZU9mZnNldChhbmdsZXMpIHtcbiAgICBjb25zdCB4QW5nbGUgPSBhbmdsZXMuZ2V0WEFuZ2xlKCksXG4gICAgICAgICAgeUFuZ2xlID0gYW5nbGVzLmdldFlBbmdsZSgpLFxuICAgICAgICAgIHNjYWxhciA9IE9GRlNFVF9TQ0FMQVIsXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0ID0gc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGFyKSxcbiAgICAgICAgICBmaXJzdFJlbGF0aXZlT2Zmc2V0ID0gZmlyc3QocmVsYXRpdmVPZmZzZXQpLFxuICAgICAgICAgIHNlY29uZFJlbGF0aXZlT2Zmc2V0ID0gc2Vjb25kKHJlbGF0aXZlT2Zmc2V0KTtcblxuICAgIGxldCBvZmZzZXQgPSB0aGlzLnByZXZpb3VzT2Zmc2V0LnNsaWNlKCk7IC8vL1xuXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgeCA9IC1NYXRoLmNvcyh5QW5nbGUpICogZmlyc3RSZWxhdGl2ZU9mZnNldCxcbiAgICAgICAgICAgIHkgPSAwLFxuICAgICAgICAgICAgeiA9IC1NYXRoLnNpbih5QW5nbGUpICogZmlyc3RSZWxhdGl2ZU9mZnNldDtcblxuICAgICAgb2Zmc2V0ID0gYWRkMyhvZmZzZXQsIFt4LCB5LCB6XSk7XG4gICAgfSkoKTtcblxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IHggPSAtTWF0aC5zaW4oeEFuZ2xlKSAqIE1hdGguc2luKHlBbmdsZSkgKiBzZWNvbmRSZWxhdGl2ZU9mZnNldCxcbiAgICAgICAgICAgIHkgPSAtTWF0aC5jb3MoeEFuZ2xlKSAqIHNlY29uZFJlbGF0aXZlT2Zmc2V0LFxuICAgICAgICAgICAgeiA9ICtNYXRoLnNpbih4QW5nbGUpICogTWF0aC5jb3MoeUFuZ2xlKSAqIHNlY29uZFJlbGF0aXZlT2Zmc2V0O1xuXG4gICAgICBvZmZzZXQgPSBhZGQzKG9mZnNldCwgW3gsIHksIHpdKTtcbiAgICB9KSgpO1xuXG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxPZmZzZXQoaW5pdGlhbE9mZnNldCkge1xuICAgIGNvbnN0IG9mZnNldCA9IGluaXRpYWxPZmZzZXQsXG4gICAgICAgICAgbW91c2VEb3duID0gZmFsc2UsXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2UsXG4gICAgICAgICAgcHJldmlvdXNPZmZzZXQgPSBvZmZzZXQsICAvLy9cbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzLFxuICAgICAgICAgIHBhbiA9IG5ldyBQYW4obW91c2VEb3duLCBzaGlmdEtleURvd24sIG9mZnNldCwgcHJldmlvdXNPZmZzZXQsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG4gICAgXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhbjtcbiJdfQ==