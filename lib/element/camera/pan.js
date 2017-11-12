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

      var offset = this.previousOffset.slice();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9wYW4uanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwidmVjdG9yVXRpbGl0aWVzIiwiZmlyc3QiLCJzZWNvbmQiLCJhZGQzIiwic3VidHJhY3QyIiwic2NhbGUyIiwiT0ZGU0VUX1NDQUxBUiIsIklOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMiLCJQYW4iLCJtb3VzZURvd24iLCJzaGlmdEtleURvd24iLCJvZmZzZXQiLCJwcmV2aW91c09mZnNldCIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJhbmdsZXMiLCJ1cGRhdGVPZmZzZXQiLCJ4QW5nbGUiLCJnZXRYQW5nbGUiLCJ5QW5nbGUiLCJnZXRZQW5nbGUiLCJzY2FsYXIiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJyZWxhdGl2ZU9mZnNldCIsImZpcnN0UmVsYXRpdmVPZmZzZXQiLCJzZWNvbmRSZWxhdGl2ZU9mZnNldCIsInNsaWNlIiwieCIsIk1hdGgiLCJjb3MiLCJ5IiwieiIsInNpbiIsImluaXRpYWxPZmZzZXQiLCJwYW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxpQkFBUixDQUFsQjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSx1QkFBUixDQUR2QjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSx3QkFBUixDQUZ4Qjs7SUFJUUcsSyxHQUFrQkYsYyxDQUFsQkUsSztJQUFPQyxNLEdBQVdILGMsQ0FBWEcsTTtJQUNQQyxJLEdBQTRCSCxlLENBQTVCRyxJO0lBQU1DLFMsR0FBc0JKLGUsQ0FBdEJJLFM7SUFBV0MsTSxHQUFXTCxlLENBQVhLLE07SUFDakJDLGEsR0FBNkNULFMsQ0FBN0NTLGE7SUFBZUMseUIsR0FBOEJWLFMsQ0FBOUJVLHlCOztJQUVqQkMsRztBQUNKLGVBQVlDLFNBQVosRUFBdUJDLFlBQXZCLEVBQXFDQyxNQUFyQyxFQUE2Q0MsY0FBN0MsRUFBNkRDLGdCQUE3RCxFQUErRUMsd0JBQS9FLEVBQXlHO0FBQUE7O0FBQ3ZHLFNBQUtMLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxTQUFLQyx3QkFBTCxHQUFnQ0Esd0JBQWhDO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtILE1BQVo7QUFDRDs7O3FDQUVnQjtBQUNmLFdBQUtGLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxXQUFLSyx3QkFBTCxHQUFnQyxLQUFLRCxnQkFBckM7QUFDRDs7O3VDQUVrQjtBQUNqQixXQUFLSixTQUFMLEdBQWlCLElBQWpCO0FBQ0EsV0FBS0csY0FBTCxHQUFzQixLQUFLRCxNQUEzQjs7QUFFQSxVQUFJLEtBQUtELFlBQVQsRUFBdUI7QUFDckIsYUFBS0ksd0JBQUwsR0FBZ0MsS0FBS0QsZ0JBQXJDO0FBQ0EsYUFBS0QsY0FBTCxHQUFzQixLQUFLRCxNQUEzQjtBQUNEO0FBQ0Y7OztxQ0FFZ0JFLGdCLEVBQWtCRSxNLEVBQVE7QUFDekMsV0FBS0YsZ0JBQUwsR0FBd0JBLGdCQUF4Qjs7QUFFQSxVQUFJLEtBQUtKLFNBQUwsSUFBa0IsS0FBS0MsWUFBM0IsRUFBeUM7QUFDdkMsYUFBS00sWUFBTCxDQUFrQkQsTUFBbEI7QUFDRDtBQUNGOzs7b0NBRWVMLFksRUFBYztBQUM1QixXQUFLQSxZQUFMLEdBQW9CQSxZQUFwQjs7QUFFQSxVQUFJLEtBQUtBLFlBQVQsRUFBdUI7QUFDckIsYUFBS0ksd0JBQUwsR0FBZ0MsS0FBS0QsZ0JBQXJDO0FBQ0EsYUFBS0QsY0FBTCxHQUFzQixLQUFLRCxNQUEzQjtBQUNEO0FBQ0Y7OztpQ0FFWUksTSxFQUFRO0FBQ25CLFVBQU1FLFNBQVNGLE9BQU9HLFNBQVAsRUFBZjtBQUFBLFVBQ01DLFNBQVNKLE9BQU9LLFNBQVAsRUFEZjtBQUFBLFVBRU1DLFNBQVNmLGFBRmY7QUFBQSxVQUdNZ0IsMkJBQTJCbEIsVUFBVSxLQUFLUyxnQkFBZixFQUFpQyxLQUFLQyx3QkFBdEMsQ0FIakM7QUFBQSxVQUlNUyxpQkFBaUJsQixPQUFPaUIsd0JBQVAsRUFBaUNELE1BQWpDLENBSnZCO0FBQUEsVUFLTUcsc0JBQXNCdkIsTUFBTXNCLGNBQU4sQ0FMNUI7QUFBQSxVQU1NRSx1QkFBdUJ2QixPQUFPcUIsY0FBUCxDQU43Qjs7QUFRQSxVQUFJWixTQUFTLEtBQUtDLGNBQUwsQ0FBb0JjLEtBQXBCLEVBQWI7O0FBRUEsT0FBQyxZQUFXO0FBQ1YsWUFBTUMsSUFBSSxDQUFDQyxLQUFLQyxHQUFMLENBQVNWLE1BQVQsQ0FBRCxHQUFvQkssbUJBQTlCO0FBQUEsWUFDTU0sSUFBSSxDQURWO0FBQUEsWUFFTUMsSUFBSSxDQUFDSCxLQUFLSSxHQUFMLENBQVNiLE1BQVQsQ0FBRCxHQUFvQkssbUJBRjlCOztBQUlBYixpQkFBU1IsS0FBS1EsTUFBTCxFQUFhLENBQUNnQixDQUFELEVBQUlHLENBQUosRUFBT0MsQ0FBUCxDQUFiLENBQVQ7QUFDRCxPQU5EOztBQVFBLE9BQUMsWUFBVztBQUNWLFlBQU1KLElBQUksQ0FBQ0MsS0FBS0ksR0FBTCxDQUFTZixNQUFULENBQUQsR0FBb0JXLEtBQUtJLEdBQUwsQ0FBU2IsTUFBVCxDQUFwQixHQUF1Q00sb0JBQWpEO0FBQUEsWUFDTUssSUFBSSxDQUFDRixLQUFLQyxHQUFMLENBQVNaLE1BQVQsQ0FBRCxHQUFvQlEsb0JBRDlCO0FBQUEsWUFFTU0sSUFBSSxDQUFDSCxLQUFLSSxHQUFMLENBQVNmLE1BQVQsQ0FBRCxHQUFvQlcsS0FBS0MsR0FBTCxDQUFTVixNQUFULENBQXBCLEdBQXVDTSxvQkFGakQ7O0FBSUFkLGlCQUFTUixLQUFLUSxNQUFMLEVBQWEsQ0FBQ2dCLENBQUQsRUFBSUcsQ0FBSixFQUFPQyxDQUFQLENBQWIsQ0FBVDtBQUNELE9BTkQ7O0FBUUEsV0FBS3BCLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7c0NBRXdCc0IsYSxFQUFlO0FBQ3RDLFVBQU10QixTQUFTc0IsYUFBZjtBQUFBLFVBQ014QixZQUFZLEtBRGxCO0FBQUEsVUFFTUMsZUFBZSxLQUZyQjtBQUFBLFVBR01FLGlCQUFpQkQsTUFIdkI7QUFBQSxVQUdnQztBQUMxQkUseUJBQW1CTix5QkFKekI7QUFBQSxVQUtNTywyQkFBMkJELGdCQUxqQztBQUFBLFVBTU1xQixNQUFNLElBQUkxQixHQUFKLENBQVFDLFNBQVIsRUFBbUJDLFlBQW5CLEVBQWlDQyxNQUFqQyxFQUF5Q0MsY0FBekMsRUFBeURDLGdCQUF6RCxFQUEyRUMsd0JBQTNFLENBTlo7O0FBUUEsYUFBT29CLEdBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUI1QixHQUFqQiIsImZpbGUiOiJwYW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy92ZWN0b3InKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYWRkMywgc3VidHJhY3QyLCBzY2FsZTIgfSA9IHZlY3RvclV0aWxpdGllcyxcbiAgICAgIHsgT0ZGU0VUX1NDQUxBUiwgSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBQYW4ge1xuICBjb25zdHJ1Y3Rvcihtb3VzZURvd24sIHNoaWZ0S2V5RG93biwgb2Zmc2V0LCBwcmV2aW91c09mZnNldCwgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgdGhpcy5wcmV2aW91c09mZnNldCA9IHByZXZpb3VzT2Zmc2V0O1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0O1xuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIoKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIoKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgIHRoaXMucHJldmlvdXNPZmZzZXQgPSB0aGlzLm9mZnNldDtcblxuICAgIGlmICh0aGlzLnNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgICB0aGlzLnByZXZpb3VzT2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBhbmdsZXMpIHtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuXG4gICAgaWYgKHRoaXMubW91c2VEb3duICYmIHRoaXMuc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnVwZGF0ZU9mZnNldChhbmdsZXMpO1xuICAgIH1cbiAgfVxuXG4gIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcblxuICAgIGlmICh0aGlzLnNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgICB0aGlzLnByZXZpb3VzT2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlT2Zmc2V0KGFuZ2xlcykge1xuICAgIGNvbnN0IHhBbmdsZSA9IGFuZ2xlcy5nZXRYQW5nbGUoKSxcbiAgICAgICAgICB5QW5nbGUgPSBhbmdsZXMuZ2V0WUFuZ2xlKCksXG4gICAgICAgICAgc2NhbGFyID0gT0ZGU0VUX1NDQUxBUixcbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzdWJ0cmFjdDIodGhpcy5tb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgcmVsYXRpdmVPZmZzZXQgPSBzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBzY2FsYXIpLFxuICAgICAgICAgIGZpcnN0UmVsYXRpdmVPZmZzZXQgPSBmaXJzdChyZWxhdGl2ZU9mZnNldCksXG4gICAgICAgICAgc2Vjb25kUmVsYXRpdmVPZmZzZXQgPSBzZWNvbmQocmVsYXRpdmVPZmZzZXQpO1xuXG4gICAgbGV0IG9mZnNldCA9IHRoaXMucHJldmlvdXNPZmZzZXQuc2xpY2UoKTtcblxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IHggPSAtTWF0aC5jb3MoeUFuZ2xlKSAqIGZpcnN0UmVsYXRpdmVPZmZzZXQsXG4gICAgICAgICAgICB5ID0gMCxcbiAgICAgICAgICAgIHogPSAtTWF0aC5zaW4oeUFuZ2xlKSAqIGZpcnN0UmVsYXRpdmVPZmZzZXQ7XG5cbiAgICAgIG9mZnNldCA9IGFkZDMob2Zmc2V0LCBbeCwgeSwgel0pO1xuICAgIH0pKCk7XG5cbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCB4ID0gLU1hdGguc2luKHhBbmdsZSkgKiBNYXRoLnNpbih5QW5nbGUpICogc2Vjb25kUmVsYXRpdmVPZmZzZXQsXG4gICAgICAgICAgICB5ID0gLU1hdGguY29zKHhBbmdsZSkgKiBzZWNvbmRSZWxhdGl2ZU9mZnNldCxcbiAgICAgICAgICAgIHogPSArTWF0aC5zaW4oeEFuZ2xlKSAqIE1hdGguY29zKHlBbmdsZSkgKiBzZWNvbmRSZWxhdGl2ZU9mZnNldDtcblxuICAgICAgb2Zmc2V0ID0gYWRkMyhvZmZzZXQsIFt4LCB5LCB6XSk7XG4gICAgfSkoKTtcblxuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsT2Zmc2V0KGluaXRpYWxPZmZzZXQpIHtcbiAgICBjb25zdCBvZmZzZXQgPSBpbml0aWFsT2Zmc2V0LFxuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLFxuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlLFxuICAgICAgICAgIHByZXZpb3VzT2Zmc2V0ID0gb2Zmc2V0LCAgLy8vXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMsXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcyxcbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG1vdXNlRG93biwgc2hpZnRLZXlEb3duLCBvZmZzZXQsIHByZXZpb3VzT2Zmc2V0LCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIFxuICAgIHJldHVybiBwYW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYW47XG4iXX0=