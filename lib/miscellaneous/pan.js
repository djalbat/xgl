'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    matrixUtilities = require('../utilities/matrix');

var OFFSET_SCALAR = constants.OFFSET_SCALAR,
    rotationsMatrixFromAngles = matrixUtilities.rotationsMatrixFromAngles,
    zero2 = vectorMaths.zero2,
    add3 = vectorMaths.add3,
    scale2 = vectorMaths.scale2,
    reflect2 = vectorMaths.reflect2,
    reflect3 = vectorMaths.reflect3,
    subtract2 = vectorMaths.subtract2,
    transform4 = vectorMaths.transform4;

var Pan = function () {
  function Pan(offsets, previousOffsets, mouseCoordinates, previousMouseCoordinates) {
    _classCallCheck(this, Pan);

    this.offsets = offsets;
    this.previousOffsets = previousOffsets;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  _createClass(Pan, [{
    key: 'getOffsets',
    value: function getOffsets() {
      return this.offsets;
    }
  }, {
    key: 'setMouseCoordinates',
    value: function setMouseCoordinates(mouseCoordinates) {
      this.mouseCoordinates = mouseCoordinates;
    }
  }, {
    key: 'resetPreviousMouseCoordinates',
    value: function resetPreviousMouseCoordinates() {
      this.previousMouseCoordinates = this.mouseCoordinates;
    }
  }, {
    key: 'resetPreviousOffsets',
    value: function resetPreviousOffsets() {
      this.previousOffsets = this.offsets;
    }
  }, {
    key: 'updateOffset',
    value: function updateOffset(tilt) {
      var angles = tilt.getAngles(),
          scalar = OFFSET_SCALAR,
          ///
      reverseOrder = true,
          relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          scaledReflectedRelativeMouseCoordinates = reflect2(scale2(relativeMouseCoordinates, scalar)),
          reflectedAngles = reflect3(angles),
          rotationsMatrix = rotationsMatrixFromAngles(reflectedAngles, reverseOrder),
          relativeOffsets = transform4([].concat(_toConsumableArray(scaledReflectedRelativeMouseCoordinates), [0, 0]), rotationsMatrix).slice(0, 3); ///

      this.offsets = add3(this.previousOffsets, relativeOffsets);
    }
  }], [{
    key: 'fromInitialOffsets',
    value: function fromInitialOffsets(initialOffsets) {
      var offsets = initialOffsets,
          ///
      previousOffsets = offsets,
          ///
      mouseCoordinates = zero2(),
          previousMouseCoordinates = mouseCoordinates,
          ///
      pan = new Pan(offsets, previousOffsets, mouseCoordinates, previousMouseCoordinates);

      return pan;
    }
  }]);

  return Pan;
}();

module.exports = Pan;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3Bhbi5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJyZXF1aXJlIiwidmVjdG9yTWF0aHMiLCJtYXRyaXhVdGlsaXRpZXMiLCJPRkZTRVRfU0NBTEFSIiwicm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyIsInplcm8yIiwiYWRkMyIsInNjYWxlMiIsInJlZmxlY3QyIiwicmVmbGVjdDMiLCJzdWJ0cmFjdDIiLCJ0cmFuc2Zvcm00IiwiUGFuIiwib2Zmc2V0cyIsInByZXZpb3VzT2Zmc2V0cyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJ0aWx0IiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwic2NhbGFyIiwicmV2ZXJzZU9yZGVyIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwic2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwicmVmbGVjdGVkQW5nbGVzIiwicm90YXRpb25zTWF0cml4IiwicmVsYXRpdmVPZmZzZXRzIiwic2xpY2UiLCJpbml0aWFsT2Zmc2V0cyIsInBhbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsaUJBQVIsQ0FEcEI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEscUJBQVIsQ0FGeEI7O0FBSU0sSUFBRUcsYUFBRixHQUFvQkosU0FBcEIsQ0FBRUksYUFBRjtBQUFBLElBQ0VDLHlCQURGLEdBQ2dDRixlQURoQyxDQUNFRSx5QkFERjtBQUFBLElBRUVDLEtBRkYsR0FFcUVKLFdBRnJFLENBRUVJLEtBRkY7QUFBQSxJQUVTQyxJQUZULEdBRXFFTCxXQUZyRSxDQUVTSyxJQUZUO0FBQUEsSUFFZUMsTUFGZixHQUVxRU4sV0FGckUsQ0FFZU0sTUFGZjtBQUFBLElBRXVCQyxRQUZ2QixHQUVxRVAsV0FGckUsQ0FFdUJPLFFBRnZCO0FBQUEsSUFFaUNDLFFBRmpDLEdBRXFFUixXQUZyRSxDQUVpQ1EsUUFGakM7QUFBQSxJQUUyQ0MsU0FGM0MsR0FFcUVULFdBRnJFLENBRTJDUyxTQUYzQztBQUFBLElBRXNEQyxVQUZ0RCxHQUVxRVYsV0FGckUsQ0FFc0RVLFVBRnREOztJQUlBQyxHO0FBQ0osZUFBWUMsT0FBWixFQUFxQkMsZUFBckIsRUFBc0NDLGdCQUF0QyxFQUF3REMsd0JBQXhELEVBQWtGO0FBQUE7O0FBQ2hGLFNBQUtILE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLHdCQUFMLEdBQWdDQSx3QkFBaEM7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0gsT0FBWjtBQUNEOzs7d0NBRW1CRSxnQixFQUFrQjtBQUNwQyxXQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7OztvREFFK0I7QUFDOUIsV0FBS0Msd0JBQUwsR0FBZ0MsS0FBS0QsZ0JBQXJDO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsV0FBS0QsZUFBTCxHQUF1QixLQUFLRCxPQUE1QjtBQUNEOzs7aUNBRVlJLEksRUFBTTtBQUNqQixVQUFNQyxTQUFTRCxLQUFLRSxTQUFMLEVBQWY7QUFBQSxVQUNNQyxTQUFTakIsYUFEZjtBQUFBLFVBQzhCO0FBQ3hCa0IscUJBQWUsSUFGckI7QUFBQSxVQUdNQywyQkFBMkJaLFVBQVUsS0FBS0ssZ0JBQWYsRUFBaUMsS0FBS0Msd0JBQXRDLENBSGpDO0FBQUEsVUFJTU8sMENBQTBDZixTQUFTRCxPQUFPZSx3QkFBUCxFQUFpQ0YsTUFBakMsQ0FBVCxDQUpoRDtBQUFBLFVBS01JLGtCQUFrQmYsU0FBU1MsTUFBVCxDQUx4QjtBQUFBLFVBTU1PLGtCQUFrQnJCLDBCQUEwQm9CLGVBQTFCLEVBQTJDSCxZQUEzQyxDQU54QjtBQUFBLFVBT01LLGtCQUFrQmYsd0NBQWdCWSx1Q0FBaEIsSUFBeUQsQ0FBekQsRUFBNEQsQ0FBNUQsSUFBaUVFLGVBQWpFLEVBQWtGRSxLQUFsRixDQUF3RixDQUF4RixFQUEyRixDQUEzRixDQVB4QixDQURpQixDQVFzRzs7QUFFdkgsV0FBS2QsT0FBTCxHQUFlUCxLQUFLLEtBQUtRLGVBQVYsRUFBMkJZLGVBQTNCLENBQWY7QUFDRDs7O3VDQUV5QkUsYyxFQUFnQjtBQUN4QyxVQUFNZixVQUFVZSxjQUFoQjtBQUFBLFVBQWdDO0FBQzFCZCx3QkFBa0JELE9BRHhCO0FBQUEsVUFDa0M7QUFDNUJFLHlCQUFtQlYsT0FGekI7QUFBQSxVQUdNVywyQkFBMkJELGdCQUhqQztBQUFBLFVBR29EO0FBQzlDYyxZQUFNLElBQUlqQixHQUFKLENBQVFDLE9BQVIsRUFBaUJDLGVBQWpCLEVBQWtDQyxnQkFBbEMsRUFBb0RDLHdCQUFwRCxDQUpaOztBQU1BLGFBQU9hLEdBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJuQixHQUFqQiIsImZpbGUiOiJwYW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIG1hdHJpeFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9tYXRyaXgnKTtcblxuY29uc3QgeyBPRkZTRVRfU0NBTEFSIH0gPSBjb25zdGFudHMsXG4gICAgICB7IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMgfSA9IG1hdHJpeFV0aWxpdGllcyxcbiAgICAgIHsgemVybzIsIGFkZDMsIHNjYWxlMiwgcmVmbGVjdDIsIHJlZmxlY3QzLCBzdWJ0cmFjdDIsIHRyYW5zZm9ybTQgfSA9IHZlY3Rvck1hdGhzO1xuXG5jbGFzcyBQYW4ge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzLCBwcmV2aW91c09mZnNldHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG4gICAgdGhpcy5wcmV2aW91c09mZnNldHMgPSBwcmV2aW91c09mZnNldHM7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldE9mZnNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0cztcbiAgfVxuXG4gIHNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICByZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpIHtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHJlc2V0UHJldmlvdXNPZmZzZXRzKCkge1xuICAgIHRoaXMucHJldmlvdXNPZmZzZXRzID0gdGhpcy5vZmZzZXRzO1xuICB9XG5cbiAgdXBkYXRlT2Zmc2V0KHRpbHQpIHtcbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIHNjYWxhciA9IE9GRlNFVF9TQ0FMQVIsIC8vL1xuICAgICAgICAgIHJldmVyc2VPcmRlciA9IHRydWUsXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHJlZmxlY3QyKHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHNjYWxhcikpLFxuICAgICAgICAgIHJlZmxlY3RlZEFuZ2xlcyA9IHJlZmxlY3QzKGFuZ2xlcyksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhyZWZsZWN0ZWRBbmdsZXMsIHJldmVyc2VPcmRlciksXG4gICAgICAgICAgcmVsYXRpdmVPZmZzZXRzID0gdHJhbnNmb3JtNChbIC4uLnNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgMCwgMCBdLCByb3RhdGlvbnNNYXRyaXgpLnNsaWNlKDAsIDMpOyAvLy9cblxuICAgIHRoaXMub2Zmc2V0cyA9IGFkZDModGhpcy5wcmV2aW91c09mZnNldHMsIHJlbGF0aXZlT2Zmc2V0cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxPZmZzZXRzKGluaXRpYWxPZmZzZXRzKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IGluaXRpYWxPZmZzZXRzLCAvLy9cbiAgICAgICAgICBwcmV2aW91c09mZnNldHMgPSBvZmZzZXRzLCAgLy8vXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IHplcm8yKCksXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcywgIC8vL1xuICAgICAgICAgIHBhbiA9IG5ldyBQYW4ob2Zmc2V0cywgcHJldmlvdXNPZmZzZXRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIFxuICAgIHJldHVybiBwYW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYW47XG4iXX0=