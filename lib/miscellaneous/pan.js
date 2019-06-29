'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    offsetsUtilities = require('../utilities/offsets');

var OFFSET_SCALAR = constants.OFFSET_SCALAR,
    relativeOffsetsFromAnglesAndDirections = offsetsUtilities.relativeOffsetsFromAnglesAndDirections,
    zero2 = vectorMaths.zero2,
    add3 = vectorMaths.add3,
    scale2 = vectorMaths.scale2,
    reflect2 = vectorMaths.reflect2,
    subtract2 = vectorMaths.subtract2;

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
      relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          scaledReflectedRelativeMouseCoordinates = reflect2(scale2(relativeMouseCoordinates, scalar)),
          directions = [].concat(_toConsumableArray(scaledReflectedRelativeMouseCoordinates), [0, 0]),
          relativeOffsets = relativeOffsetsFromAnglesAndDirections(angles, directions);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3Bhbi5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJyZXF1aXJlIiwidmVjdG9yTWF0aHMiLCJvZmZzZXRzVXRpbGl0aWVzIiwiT0ZGU0VUX1NDQUxBUiIsInJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zIiwiemVybzIiLCJhZGQzIiwic2NhbGUyIiwicmVmbGVjdDIiLCJzdWJ0cmFjdDIiLCJQYW4iLCJvZmZzZXRzIiwicHJldmlvdXNPZmZzZXRzIiwibW91c2VDb29yZGluYXRlcyIsInByZXZpb3VzTW91c2VDb29yZGluYXRlcyIsInRpbHQiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJzY2FsYXIiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJzY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJkaXJlY3Rpb25zIiwicmVsYXRpdmVPZmZzZXRzIiwiaW5pdGlhbE9mZnNldHMiLCJwYW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFTUUsbUJBQW1CRixRQUFRLHNCQUFSLENBRnpCOztBQUlNLElBQUVHLGFBQUYsR0FBb0JKLFNBQXBCLENBQUVJLGFBQUY7QUFBQSxJQUNFQyxzQ0FERixHQUM2Q0YsZ0JBRDdDLENBQ0VFLHNDQURGO0FBQUEsSUFFRUMsS0FGRixHQUUrQ0osV0FGL0MsQ0FFRUksS0FGRjtBQUFBLElBRVNDLElBRlQsR0FFK0NMLFdBRi9DLENBRVNLLElBRlQ7QUFBQSxJQUVlQyxNQUZmLEdBRStDTixXQUYvQyxDQUVlTSxNQUZmO0FBQUEsSUFFdUJDLFFBRnZCLEdBRStDUCxXQUYvQyxDQUV1Qk8sUUFGdkI7QUFBQSxJQUVpQ0MsU0FGakMsR0FFK0NSLFdBRi9DLENBRWlDUSxTQUZqQzs7SUFJQUMsRztBQUNKLGVBQVlDLE9BQVosRUFBcUJDLGVBQXJCLEVBQXNDQyxnQkFBdEMsRUFBd0RDLHdCQUF4RCxFQUFrRjtBQUFBOztBQUNoRixTQUFLSCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxTQUFLQyx3QkFBTCxHQUFnQ0Esd0JBQWhDO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtILE9BQVo7QUFDRDs7O3dDQUVtQkUsZ0IsRUFBa0I7QUFDcEMsV0FBS0EsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNEOzs7b0RBRStCO0FBQzlCLFdBQUtDLHdCQUFMLEdBQWdDLEtBQUtELGdCQUFyQztBQUNEOzs7MkNBRXNCO0FBQ3JCLFdBQUtELGVBQUwsR0FBdUIsS0FBS0QsT0FBNUI7QUFDRDs7O2lDQUVZSSxJLEVBQU07QUFDakIsVUFBTUMsU0FBU0QsS0FBS0UsU0FBTCxFQUFmO0FBQUEsVUFDTUMsU0FBU2YsYUFEZjtBQUFBLFVBQzhCO0FBQ3hCZ0IsaUNBQTJCVixVQUFVLEtBQUtJLGdCQUFmLEVBQWlDLEtBQUtDLHdCQUF0QyxDQUZqQztBQUFBLFVBR01NLDBDQUEwQ1osU0FBU0QsT0FBT1ksd0JBQVAsRUFBaUNELE1BQWpDLENBQVQsQ0FIaEQ7QUFBQSxVQUlNRywwQ0FBa0JELHVDQUFsQixJQUEyRCxDQUEzRCxFQUE4RCxDQUE5RCxFQUpOO0FBQUEsVUFLTUUsa0JBQWtCbEIsdUNBQXVDWSxNQUF2QyxFQUErQ0ssVUFBL0MsQ0FMeEI7O0FBT0EsV0FBS1YsT0FBTCxHQUFlTCxLQUFLLEtBQUtNLGVBQVYsRUFBMkJVLGVBQTNCLENBQWY7QUFDRDs7O3VDQUV5QkMsYyxFQUFnQjtBQUN4QyxVQUFNWixVQUFVWSxjQUFoQjtBQUFBLFVBQWdDO0FBQzFCWCx3QkFBa0JELE9BRHhCO0FBQUEsVUFDa0M7QUFDNUJFLHlCQUFtQlIsT0FGekI7QUFBQSxVQUdNUywyQkFBMkJELGdCQUhqQztBQUFBLFVBR29EO0FBQzlDVyxZQUFNLElBQUlkLEdBQUosQ0FBUUMsT0FBUixFQUFpQkMsZUFBakIsRUFBa0NDLGdCQUFsQyxFQUFvREMsd0JBQXBELENBSlo7O0FBTUEsYUFBT1UsR0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmhCLEdBQWpCIiwiZmlsZSI6InBhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgb2Zmc2V0c1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9vZmZzZXRzJyk7XG5cbmNvbnN0IHsgT0ZGU0VUX1NDQUxBUiB9ID0gY29uc3RhbnRzLFxuICAgICAgeyByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyB9ID0gb2Zmc2V0c1V0aWxpdGllcyxcbiAgICAgIHsgemVybzIsIGFkZDMsIHNjYWxlMiwgcmVmbGVjdDIsIHN1YnRyYWN0MiB9ID0gdmVjdG9yTWF0aHM7XG5cbmNsYXNzIFBhbiB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHMsIHByZXZpb3VzT2Zmc2V0cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcbiAgICB0aGlzLnByZXZpb3VzT2Zmc2V0cyA9IHByZXZpb3VzT2Zmc2V0cztcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0T2Zmc2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRzO1xuICB9XG5cbiAgc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCkge1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgcmVzZXRQcmV2aW91c09mZnNldHMoKSB7XG4gICAgdGhpcy5wcmV2aW91c09mZnNldHMgPSB0aGlzLm9mZnNldHM7XG4gIH1cblxuICB1cGRhdGVPZmZzZXQodGlsdCkge1xuICAgIGNvbnN0IGFuZ2xlcyA9IHRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgc2NhbGFyID0gT0ZGU0VUX1NDQUxBUiwgLy8vXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHJlZmxlY3QyKHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHNjYWxhcikpLFxuICAgICAgICAgIGRpcmVjdGlvbnMgPSBbIC4uLnNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgMCwgMCBdLFxuICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0cyA9IHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zKGFuZ2xlcywgZGlyZWN0aW9ucyk7XG5cbiAgICB0aGlzLm9mZnNldHMgPSBhZGQzKHRoaXMucHJldmlvdXNPZmZzZXRzLCByZWxhdGl2ZU9mZnNldHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsT2Zmc2V0cyhpbml0aWFsT2Zmc2V0cykge1xuICAgIGNvbnN0IG9mZnNldHMgPSBpbml0aWFsT2Zmc2V0cywgLy8vXG4gICAgICAgICAgcHJldmlvdXNPZmZzZXRzID0gb2Zmc2V0cywgIC8vL1xuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpLFxuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXMsICAvLy9cbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG9mZnNldHMsIHByZXZpb3VzT2Zmc2V0cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICBcbiAgICByZXR1cm4gcGFuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFuO1xuIl19