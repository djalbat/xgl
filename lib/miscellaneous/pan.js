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
      var angles = tilt.getAngles().slice(),
          scalar = OFFSET_SCALAR,
          ///
      relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          reflectedScaledRelativeMouseCoordinates = reflect2(scale2(relativeMouseCoordinates, scalar)),
          reflectedAngles = reflect3(angles),
          rotationsMatrix = rotationsMatrixFromAngles(reflectedAngles),
          relativeOffsets = transform4([].concat(_toConsumableArray(reflectedScaledRelativeMouseCoordinates), [0, 0]), rotationsMatrix).slice(0, 3); ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3Bhbi5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJyZXF1aXJlIiwidmVjdG9yTWF0aHMiLCJtYXRyaXhVdGlsaXRpZXMiLCJPRkZTRVRfU0NBTEFSIiwicm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyIsInplcm8yIiwiYWRkMyIsInNjYWxlMiIsInJlZmxlY3QyIiwicmVmbGVjdDMiLCJzdWJ0cmFjdDIiLCJ0cmFuc2Zvcm00IiwiUGFuIiwib2Zmc2V0cyIsInByZXZpb3VzT2Zmc2V0cyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJ0aWx0IiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwic2xpY2UiLCJzY2FsYXIiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJyZWZsZWN0ZWRTY2FsZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJyZWZsZWN0ZWRBbmdsZXMiLCJyb3RhdGlvbnNNYXRyaXgiLCJyZWxhdGl2ZU9mZnNldHMiLCJpbml0aWFsT2Zmc2V0cyIsInBhbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsaUJBQVIsQ0FEcEI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEscUJBQVIsQ0FGeEI7O0FBSU0sSUFBRUcsYUFBRixHQUFvQkosU0FBcEIsQ0FBRUksYUFBRjtBQUFBLElBQ0VDLHlCQURGLEdBQ2dDRixlQURoQyxDQUNFRSx5QkFERjtBQUFBLElBRUVDLEtBRkYsR0FFcUVKLFdBRnJFLENBRUVJLEtBRkY7QUFBQSxJQUVTQyxJQUZULEdBRXFFTCxXQUZyRSxDQUVTSyxJQUZUO0FBQUEsSUFFZUMsTUFGZixHQUVxRU4sV0FGckUsQ0FFZU0sTUFGZjtBQUFBLElBRXVCQyxRQUZ2QixHQUVxRVAsV0FGckUsQ0FFdUJPLFFBRnZCO0FBQUEsSUFFaUNDLFFBRmpDLEdBRXFFUixXQUZyRSxDQUVpQ1EsUUFGakM7QUFBQSxJQUUyQ0MsU0FGM0MsR0FFcUVULFdBRnJFLENBRTJDUyxTQUYzQztBQUFBLElBRXNEQyxVQUZ0RCxHQUVxRVYsV0FGckUsQ0FFc0RVLFVBRnREOztJQUlBQyxHO0FBQ0osZUFBWUMsT0FBWixFQUFxQkMsZUFBckIsRUFBc0NDLGdCQUF0QyxFQUF3REMsd0JBQXhELEVBQWtGO0FBQUE7O0FBQ2hGLFNBQUtILE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLHdCQUFMLEdBQWdDQSx3QkFBaEM7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0gsT0FBWjtBQUNEOzs7d0NBRW1CRSxnQixFQUFrQjtBQUNwQyxXQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7OztvREFFK0I7QUFDOUIsV0FBS0Msd0JBQUwsR0FBZ0MsS0FBS0QsZ0JBQXJDO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsV0FBS0QsZUFBTCxHQUF1QixLQUFLRCxPQUE1QjtBQUNEOzs7aUNBRVlJLEksRUFBTTtBQUNqQixVQUFNQyxTQUFTRCxLQUFLRSxTQUFMLEdBQWlCQyxLQUFqQixFQUFmO0FBQUEsVUFDTUMsU0FBU2xCLGFBRGY7QUFBQSxVQUM4QjtBQUN4Qm1CLGlDQUEyQlosVUFBVSxLQUFLSyxnQkFBZixFQUFpQyxLQUFLQyx3QkFBdEMsQ0FGakM7QUFBQSxVQUdNTywwQ0FBMENmLFNBQVNELE9BQU9lLHdCQUFQLEVBQWlDRCxNQUFqQyxDQUFULENBSGhEO0FBQUEsVUFJTUcsa0JBQWtCZixTQUFTUyxNQUFULENBSnhCO0FBQUEsVUFLTU8sa0JBQWtCckIsMEJBQTBCb0IsZUFBMUIsQ0FMeEI7QUFBQSxVQU1NRSxrQkFBa0JmLHdDQUFnQlksdUNBQWhCLElBQXlELENBQXpELEVBQTRELENBQTVELElBQWdFRSxlQUFoRSxFQUFpRkwsS0FBakYsQ0FBdUYsQ0FBdkYsRUFBMEYsQ0FBMUYsQ0FOeEIsQ0FEaUIsQ0FPcUc7O0FBRXRILFdBQUtQLE9BQUwsR0FBZVAsS0FBSyxLQUFLUSxlQUFWLEVBQTJCWSxlQUEzQixDQUFmO0FBQ0Q7Ozt1Q0FFeUJDLGMsRUFBZ0I7QUFDeEMsVUFBTWQsVUFBVWMsY0FBaEI7QUFBQSxVQUFnQztBQUMxQmIsd0JBQWtCRCxPQUR4QjtBQUFBLFVBQ2tDO0FBQzVCRSx5QkFBbUJWLE9BRnpCO0FBQUEsVUFHTVcsMkJBQTJCRCxnQkFIakM7QUFBQSxVQUdvRDtBQUM5Q2EsWUFBTSxJQUFJaEIsR0FBSixDQUFRQyxPQUFSLEVBQWlCQyxlQUFqQixFQUFrQ0MsZ0JBQWxDLEVBQW9EQyx3QkFBcEQsQ0FKWjs7QUFNQSxhQUFPWSxHQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbEIsR0FBakIiLCJmaWxlIjoicGFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBtYXRyaXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvbWF0cml4Jyk7XG5cbmNvbnN0IHsgT0ZGU0VUX1NDQUxBUiB9ID0gY29uc3RhbnRzLFxuICAgICAgeyByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzIH0gPSBtYXRyaXhVdGlsaXRpZXMsXG4gICAgICB7IHplcm8yLCBhZGQzLCBzY2FsZTIsIHJlZmxlY3QyLCByZWZsZWN0Mywgc3VidHJhY3QyLCB0cmFuc2Zvcm00IH0gPSB2ZWN0b3JNYXRocztcblxuY2xhc3MgUGFuIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0cywgcHJldmlvdXNPZmZzZXRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuICAgIHRoaXMucHJldmlvdXNPZmZzZXRzID0gcHJldmlvdXNPZmZzZXRzO1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBnZXRPZmZzZXRzKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHM7XG4gIH1cblxuICBzZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgcmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKSB7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICByZXNldFByZXZpb3VzT2Zmc2V0cygpIHtcbiAgICB0aGlzLnByZXZpb3VzT2Zmc2V0cyA9IHRoaXMub2Zmc2V0cztcbiAgfVxuXG4gIHVwZGF0ZU9mZnNldCh0aWx0KSB7XG4gICAgY29uc3QgYW5nbGVzID0gdGlsdC5nZXRBbmdsZXMoKS5zbGljZSgpLFxuICAgICAgICAgIHNjYWxhciA9IE9GRlNFVF9TQ0FMQVIsIC8vL1xuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICByZWZsZWN0ZWRTY2FsZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSByZWZsZWN0MihzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBzY2FsYXIpKSxcbiAgICAgICAgICByZWZsZWN0ZWRBbmdsZXMgPSByZWZsZWN0MyhhbmdsZXMpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMocmVmbGVjdGVkQW5nbGVzKSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldHMgPSB0cmFuc2Zvcm00KFsgLi4ucmVmbGVjdGVkU2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCAwLCAwXSwgcm90YXRpb25zTWF0cml4KS5zbGljZSgwLCAzKTsgLy8vXG5cbiAgICB0aGlzLm9mZnNldHMgPSBhZGQzKHRoaXMucHJldmlvdXNPZmZzZXRzLCByZWxhdGl2ZU9mZnNldHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsT2Zmc2V0cyhpbml0aWFsT2Zmc2V0cykge1xuICAgIGNvbnN0IG9mZnNldHMgPSBpbml0aWFsT2Zmc2V0cywgLy8vXG4gICAgICAgICAgcHJldmlvdXNPZmZzZXRzID0gb2Zmc2V0cywgIC8vL1xuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpLFxuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXMsICAvLy9cbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG9mZnNldHMsIHByZXZpb3VzT2Zmc2V0cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICBcbiAgICByZXR1cm4gcGFuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFuO1xuIl19