'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    offsetsUtilities = require('../utilities/offsets');

var relativeOffsetsFromAnglesAndDirections = offsetsUtilities.relativeOffsetsFromAnglesAndDirections,
    DELTA_SCALAR = constants.DELTA_SCALAR,
    INVERT_SCALAR = constants.INVERT_SCALAR,
    OFFSET_SCALAR = constants.OFFSET_SCALAR,
    zero2 = vectorMaths.zero2,
    add3 = vectorMaths.add3,
    scale2 = vectorMaths.scale2,
    reflect2 = vectorMaths.reflect2,
    scale3 = vectorMaths.scale3,
    subtract2 = vectorMaths.subtract2;

var Pan = function () {
  function Pan(offsets, mouseCoordinates, previousMouseCoordinates) {
    _classCallCheck(this, Pan);

    this.offsets = offsets;
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
    key: 'updateXYOffset',
    value: function updateXYOffset(tilt) {
      var angles = tilt.getAngles(),
          scalar = OFFSET_SCALAR,
          ///
      relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          scaledReflectedRelativeMouseCoordinates = reflect2(scale2(relativeMouseCoordinates, scalar)),
          directions = [].concat(_toConsumableArray(scaledReflectedRelativeMouseCoordinates), [0, 0]),
          relativeOffsets = relativeOffsetsFromAnglesAndDirections(angles, directions);

      this.offsets = add3(this.offsets, relativeOffsets);
    }
  }, {
    key: 'updateZOffset',
    value: function updateZOffset(delta, tilt) {
      var angles = tilt.getAngles(),
          scalar = DELTA_SCALAR,
          ///
      scaledDelta = delta * scalar,
          directions = [0, 0, scaledDelta, 0],
          relativeOffsets = relativeOffsetsFromAnglesAndDirections(angles, directions);

      this.offsets = add3(this.offsets, relativeOffsets);
    }
  }], [{
    key: 'fromInitialOffsets',
    value: function fromInitialOffsets(initialOffsets) {
      var offsets = initialOffsets,
          ///
      mouseCoordinates = zero2(),
          previousMouseCoordinates = mouseCoordinates,
          ///
      pan = new Pan(offsets, mouseCoordinates, previousMouseCoordinates);

      return pan;
    }
  }, {
    key: 'fromInitialPosition',
    value: function fromInitialPosition(initialPosition) {
      var scalar = INVERT_SCALAR,
          ///
      offsets = scale3(initialPosition, scalar),
          mouseCoordinates = null,
          ///
      previousMouseCoordinates = null,
          ///
      pan = new Pan(offsets, mouseCoordinates, previousMouseCoordinates);

      return pan;
    }
  }]);

  return Pan;
}();

module.exports = Pan;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3Bhbi5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJyZXF1aXJlIiwidmVjdG9yTWF0aHMiLCJvZmZzZXRzVXRpbGl0aWVzIiwicmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMiLCJERUxUQV9TQ0FMQVIiLCJJTlZFUlRfU0NBTEFSIiwiT0ZGU0VUX1NDQUxBUiIsInplcm8yIiwiYWRkMyIsInNjYWxlMiIsInJlZmxlY3QyIiwic2NhbGUzIiwic3VidHJhY3QyIiwiUGFuIiwib2Zmc2V0cyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJ0aWx0IiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwic2NhbGFyIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwic2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwiZGlyZWN0aW9ucyIsInJlbGF0aXZlT2Zmc2V0cyIsImRlbHRhIiwic2NhbGVkRGVsdGEiLCJpbml0aWFsT2Zmc2V0cyIsInBhbiIsImluaXRpYWxQb3NpdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsaUJBQVIsQ0FEcEI7QUFBQSxJQUVNRSxtQkFBbUJGLFFBQVEsc0JBQVIsQ0FGekI7O0FBSU0sSUFBRUcsc0NBQUYsR0FBNkNELGdCQUE3QyxDQUFFQyxzQ0FBRjtBQUFBLElBQ0VDLFlBREYsR0FDaURMLFNBRGpELENBQ0VLLFlBREY7QUFBQSxJQUNnQkMsYUFEaEIsR0FDaUROLFNBRGpELENBQ2dCTSxhQURoQjtBQUFBLElBQytCQyxhQUQvQixHQUNpRFAsU0FEakQsQ0FDK0JPLGFBRC9CO0FBQUEsSUFFRUMsS0FGRixHQUV1RE4sV0FGdkQsQ0FFRU0sS0FGRjtBQUFBLElBRVNDLElBRlQsR0FFdURQLFdBRnZELENBRVNPLElBRlQ7QUFBQSxJQUVlQyxNQUZmLEdBRXVEUixXQUZ2RCxDQUVlUSxNQUZmO0FBQUEsSUFFdUJDLFFBRnZCLEdBRXVEVCxXQUZ2RCxDQUV1QlMsUUFGdkI7QUFBQSxJQUVpQ0MsTUFGakMsR0FFdURWLFdBRnZELENBRWlDVSxNQUZqQztBQUFBLElBRXlDQyxTQUZ6QyxHQUV1RFgsV0FGdkQsQ0FFeUNXLFNBRnpDOztJQUlBQyxHO0FBQ0osZUFBWUMsT0FBWixFQUFxQkMsZ0JBQXJCLEVBQXVDQyx3QkFBdkMsRUFBaUU7QUFBQTs7QUFDL0QsU0FBS0YsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLHdCQUFMLEdBQWdDQSx3QkFBaEM7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0YsT0FBWjtBQUNEOzs7d0NBRW1CQyxnQixFQUFrQjtBQUNwQyxXQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7OztvREFFK0I7QUFDOUIsV0FBS0Msd0JBQUwsR0FBZ0MsS0FBS0QsZ0JBQXJDO0FBQ0Q7OzttQ0FFY0UsSSxFQUFNO0FBQ25CLFVBQU1DLFNBQVNELEtBQUtFLFNBQUwsRUFBZjtBQUFBLFVBQ01DLFNBQVNkLGFBRGY7QUFBQSxVQUM4QjtBQUN4QmUsaUNBQTJCVCxVQUFVLEtBQUtHLGdCQUFmLEVBQWlDLEtBQUtDLHdCQUF0QyxDQUZqQztBQUFBLFVBR01NLDBDQUEwQ1osU0FBU0QsT0FBT1ksd0JBQVAsRUFBaUNELE1BQWpDLENBQVQsQ0FIaEQ7QUFBQSxVQUlNRywwQ0FBa0JELHVDQUFsQixJQUEyRCxDQUEzRCxFQUE4RCxDQUE5RCxFQUpOO0FBQUEsVUFLTUUsa0JBQWtCckIsdUNBQXVDZSxNQUF2QyxFQUErQ0ssVUFBL0MsQ0FMeEI7O0FBT0EsV0FBS1QsT0FBTCxHQUFlTixLQUFLLEtBQUtNLE9BQVYsRUFBbUJVLGVBQW5CLENBQWY7QUFDRDs7O2tDQUVhQyxLLEVBQU9SLEksRUFBTTtBQUN6QixVQUFNQyxTQUFTRCxLQUFLRSxTQUFMLEVBQWY7QUFBQSxVQUNNQyxTQUFTaEIsWUFEZjtBQUFBLFVBQzZCO0FBQ3ZCc0Isb0JBQWNELFFBQVFMLE1BRjVCO0FBQUEsVUFHTUcsYUFBYSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVFHLFdBQVIsRUFBcUIsQ0FBckIsQ0FIbkI7QUFBQSxVQUlNRixrQkFBa0JyQix1Q0FBdUNlLE1BQXZDLEVBQStDSyxVQUEvQyxDQUp4Qjs7QUFNQSxXQUFLVCxPQUFMLEdBQWVOLEtBQUssS0FBS00sT0FBVixFQUFtQlUsZUFBbkIsQ0FBZjtBQUNEOzs7dUNBRXlCRyxjLEVBQWdCO0FBQ3hDLFVBQU1iLFVBQVVhLGNBQWhCO0FBQUEsVUFBZ0M7QUFDMUJaLHlCQUFtQlIsT0FEekI7QUFBQSxVQUVNUywyQkFBMkJELGdCQUZqQztBQUFBLFVBRW9EO0FBQzlDYSxZQUFNLElBQUlmLEdBQUosQ0FBUUMsT0FBUixFQUFpQkMsZ0JBQWpCLEVBQW1DQyx3QkFBbkMsQ0FIWjs7QUFLQSxhQUFPWSxHQUFQO0FBQ0Q7Ozt3Q0FFMEJDLGUsRUFBaUI7QUFDMUMsVUFBTVQsU0FBU2YsYUFBZjtBQUFBLFVBQThCO0FBQ3hCUyxnQkFBVUgsT0FBT2tCLGVBQVAsRUFBd0JULE1BQXhCLENBRGhCO0FBQUEsVUFFTUwsbUJBQW1CLElBRnpCO0FBQUEsVUFFZ0M7QUFDMUJDLGlDQUEyQixJQUhqQztBQUFBLFVBR3dDO0FBQ2xDWSxZQUFNLElBQUlmLEdBQUosQ0FBUUMsT0FBUixFQUFpQkMsZ0JBQWpCLEVBQW1DQyx3QkFBbkMsQ0FKWjs7QUFNQSxhQUFPWSxHQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCbEIsR0FBakIiLCJmaWxlIjoicGFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBvZmZzZXRzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL29mZnNldHMnKTtcblxuY29uc3QgeyByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyB9ID0gb2Zmc2V0c1V0aWxpdGllcyxcbiAgICAgIHsgREVMVEFfU0NBTEFSLCBJTlZFUlRfU0NBTEFSLCBPRkZTRVRfU0NBTEFSIH0gPSBjb25zdGFudHMsXG4gICAgICB7IHplcm8yLCBhZGQzLCBzY2FsZTIsIHJlZmxlY3QyLCBzY2FsZTMsIHN1YnRyYWN0MiB9ID0gdmVjdG9yTWF0aHM7XG5cbmNsYXNzIFBhbiB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldE9mZnNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0cztcbiAgfVxuXG4gIHNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICByZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpIHtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHVwZGF0ZVhZT2Zmc2V0KHRpbHQpIHtcbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIHNjYWxhciA9IE9GRlNFVF9TQ0FMQVIsIC8vL1xuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICBzY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSByZWZsZWN0MihzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBzY2FsYXIpKSxcbiAgICAgICAgICBkaXJlY3Rpb25zID0gWyAuLi5zY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIDAsIDAgXSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldHMgPSByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyhhbmdsZXMsIGRpcmVjdGlvbnMpO1xuXG4gICAgdGhpcy5vZmZzZXRzID0gYWRkMyh0aGlzLm9mZnNldHMsIHJlbGF0aXZlT2Zmc2V0cyk7XG4gIH1cblxuICB1cGRhdGVaT2Zmc2V0KGRlbHRhLCB0aWx0KSB7XG4gICAgY29uc3QgYW5nbGVzID0gdGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBzY2FsYXIgPSBERUxUQV9TQ0FMQVIsIC8vL1xuICAgICAgICAgIHNjYWxlZERlbHRhID0gZGVsdGEgKiBzY2FsYXIsXG4gICAgICAgICAgZGlyZWN0aW9ucyA9IFsgMCwgMCwgc2NhbGVkRGVsdGEsIDAgXSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldHMgPSByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyhhbmdsZXMsIGRpcmVjdGlvbnMpO1xuXG4gICAgdGhpcy5vZmZzZXRzID0gYWRkMyh0aGlzLm9mZnNldHMsIHJlbGF0aXZlT2Zmc2V0cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxPZmZzZXRzKGluaXRpYWxPZmZzZXRzKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IGluaXRpYWxPZmZzZXRzLCAvLy9cbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKSxcbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgcGFuID0gbmV3IFBhbihvZmZzZXRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbFBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbikge1xuICAgIGNvbnN0IHNjYWxhciA9IElOVkVSVF9TQ0FMQVIsIC8vL1xuICAgICAgICAgIG9mZnNldHMgPSBzY2FsZTMoaW5pdGlhbFBvc2l0aW9uLCBzY2FsYXIpLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBudWxsLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHBhbiA9IG5ldyBQYW4ob2Zmc2V0cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICBcbiAgICByZXR1cm4gcGFuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFuO1xuIl19