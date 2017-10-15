'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vec2 = require('../maths/vec2'),
    constants = require('../constants'),
    RotationMatrix = require('../matrix/rotation');

var add = vec2.add,
    subtract = vec2.subtract,
    scale = vec2.scale,
    INITIAL_MOUSE_COORDINATES = constants.INITIAL_MOUSE_COORDINATES,
    OFFSET_SCALAR = constants.OFFSET_SCALAR;

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

      if (shiftKeyDown) {
        this.previousMouseCoordinates = this.mouseCoordinates;
        this.previousOffset = this.offset;
      }
    }
  }, {
    key: 'updateOffset',
    value: function updateOffset(angles) {
      var scalar = OFFSET_SCALAR,
          relativeMouseCoordinates = subtract(this.mouseCoordinates, this.previousMouseCoordinates),
          rotationMatrix = RotationMatrix.fromAngles(angles);

      this.offset = add(this.previousOffset, rotationMatrix);

      debugger;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvcGFuLmpzIl0sIm5hbWVzIjpbInZlYzIiLCJyZXF1aXJlIiwiY29uc3RhbnRzIiwiUm90YXRpb25NYXRyaXgiLCJhZGQiLCJzdWJ0cmFjdCIsInNjYWxlIiwiSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyIsIk9GRlNFVF9TQ0FMQVIiLCJQYW4iLCJtb3VzZURvd24iLCJzaGlmdEtleURvd24iLCJvZmZzZXQiLCJwcmV2aW91c09mZnNldCIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJhbmdsZXMiLCJ1cGRhdGVPZmZzZXQiLCJzY2FsYXIiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJyb3RhdGlvbk1hdHJpeCIsImZyb21BbmdsZXMiLCJpbml0aWFsT2Zmc2V0IiwicGFuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsZUFBUixDQUFiO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxjQUFSLENBRGxCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLG9CQUFSLENBRnZCOztJQUlRRyxHLEdBQXlCSixJLENBQXpCSSxHO0lBQUtDLFEsR0FBb0JMLEksQ0FBcEJLLFE7SUFBVUMsSyxHQUFVTixJLENBQVZNLEs7SUFDZkMseUIsR0FBNkNMLFMsQ0FBN0NLLHlCO0lBQTJCQyxhLEdBQWtCTixTLENBQWxCTSxhOztJQUU3QkMsRztBQUNKLGVBQVlDLFNBQVosRUFBdUJDLFlBQXZCLEVBQXFDQyxNQUFyQyxFQUE2Q0MsY0FBN0MsRUFBNkRDLGdCQUE3RCxFQUErRUMsd0JBQS9FLEVBQXlHO0FBQUE7O0FBQ3ZHLFNBQUtMLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxTQUFLQyx3QkFBTCxHQUFnQ0Esd0JBQWhDO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtILE1BQVo7QUFDRDs7O3FDQUVnQjtBQUNmLFdBQUtGLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxXQUFLSyx3QkFBTCxHQUFnQyxLQUFLRCxnQkFBckM7QUFDRDs7O3VDQUVrQjtBQUNqQixXQUFLSixTQUFMLEdBQWlCLElBQWpCO0FBQ0EsV0FBS0csY0FBTCxHQUFzQixLQUFLRCxNQUEzQjtBQUNEOzs7cUNBRWdCRSxnQixFQUFrQkUsTSxFQUFRO0FBQ3pDLFdBQUtGLGdCQUFMLEdBQXdCQSxnQkFBeEI7O0FBRUEsVUFBSSxLQUFLSixTQUFMLElBQWtCLEtBQUtDLFlBQTNCLEVBQXlDO0FBQ3ZDLGFBQUtNLFlBQUwsQ0FBa0JELE1BQWxCO0FBQ0Q7QUFDRjs7O29DQUVlTCxZLEVBQWM7QUFDNUIsV0FBS0EsWUFBTCxHQUFvQkEsWUFBcEI7O0FBRUEsVUFBSUEsWUFBSixFQUFrQjtBQUNoQixhQUFLSSx3QkFBTCxHQUFnQyxLQUFLRCxnQkFBckM7QUFDQSxhQUFLRCxjQUFMLEdBQXNCLEtBQUtELE1BQTNCO0FBQ0Q7QUFDRjs7O2lDQUVZSSxNLEVBQVE7QUFDbkIsVUFBTUUsU0FBU1YsYUFBZjtBQUFBLFVBQ01XLDJCQUEyQmQsU0FBUyxLQUFLUyxnQkFBZCxFQUFnQyxLQUFLQyx3QkFBckMsQ0FEakM7QUFBQSxVQUVNSyxpQkFBaUJqQixlQUFla0IsVUFBZixDQUEwQkwsTUFBMUIsQ0FGdkI7O0FBSUEsV0FBS0osTUFBTCxHQUFjUixJQUFJLEtBQUtTLGNBQVQsRUFBeUJPLGNBQXpCLENBQWQ7O0FBRUE7QUFDRDs7O3NDQUV3QkUsYSxFQUFlO0FBQ3RDLFVBQU1WLFNBQVNVLGFBQWY7QUFBQSxVQUNNWixZQUFZLEtBRGxCO0FBQUEsVUFFTUMsZUFBZSxLQUZyQjtBQUFBLFVBR01FLGlCQUFpQkQsTUFIdkI7QUFBQSxVQUdnQztBQUMxQkUseUJBQW1CUCx5QkFKekI7QUFBQSxVQUtNUSwyQkFBMkJELGdCQUxqQztBQUFBLFVBTU1TLE1BQU0sSUFBSWQsR0FBSixDQUFRQyxTQUFSLEVBQW1CQyxZQUFuQixFQUFpQ0MsTUFBakMsRUFBeUNDLGNBQXpDLEVBQXlEQyxnQkFBekQsRUFBMkVDLHdCQUEzRSxDQU5aOztBQVFBLGFBQU9RLEdBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJoQixHQUFqQiIsImZpbGUiOiJwYW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlYzIgPSByZXF1aXJlKCcuLi9tYXRocy92ZWMyJyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIFJvdGF0aW9uTWF0cml4ID0gcmVxdWlyZSgnLi4vbWF0cml4L3JvdGF0aW9uJyk7XG5cbmNvbnN0IHsgYWRkLCBzdWJ0cmFjdCwgc2NhbGUgfSA9IHZlYzIsXG4gICAgICB7IElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMsIE9GRlNFVF9TQ0FMQVIgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgUGFuIHtcbiAgY29uc3RydWN0b3IobW91c2VEb3duLCBzaGlmdEtleURvd24sIG9mZnNldCwgcHJldmlvdXNPZmZzZXQsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgIHRoaXMucHJldmlvdXNPZmZzZXQgPSBwcmV2aW91c09mZnNldDtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldDtcbiAgfVxuXG4gIG1vdXNlVXBIYW5kbGVyKCkge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKCkge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgICB0aGlzLnByZXZpb3VzT2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIGFuZ2xlcykge1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG5cbiAgICBpZiAodGhpcy5tb3VzZURvd24gJiYgdGhpcy5zaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMudXBkYXRlT2Zmc2V0KGFuZ2xlcyk7XG4gICAgfVxuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuXG4gICAgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgICB0aGlzLnByZXZpb3VzT2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlT2Zmc2V0KGFuZ2xlcykge1xuICAgIGNvbnN0IHNjYWxhciA9IE9GRlNFVF9TQ0FMQVIsXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QodGhpcy5tb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXggPSBSb3RhdGlvbk1hdHJpeC5mcm9tQW5nbGVzKGFuZ2xlcyk7XG5cbiAgICB0aGlzLm9mZnNldCA9IGFkZCh0aGlzLnByZXZpb3VzT2Zmc2V0LCByb3RhdGlvbk1hdHJpeCk7XG5cbiAgICBkZWJ1Z2dlclxuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsT2Zmc2V0KGluaXRpYWxPZmZzZXQpIHtcbiAgICBjb25zdCBvZmZzZXQgPSBpbml0aWFsT2Zmc2V0LFxuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLFxuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlLFxuICAgICAgICAgIHByZXZpb3VzT2Zmc2V0ID0gb2Zmc2V0LCAgLy8vXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMsXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcyxcbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG1vdXNlRG93biwgc2hpZnRLZXlEb3duLCBvZmZzZXQsIHByZXZpb3VzT2Zmc2V0LCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIFxuICAgIHJldHVybiBwYW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYW47XG4iXX0=