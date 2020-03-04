'use strict';

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    offsetsUtilities = require('../utilities/offsets');

var add3 = vectorMaths.add3,
    scale2 = vectorMaths.scale2,
    reflect2 = vectorMaths.reflect2,
    scale3 = vectorMaths.scale3,
    relativeOffsetsFromAnglesAndDirections = offsetsUtilities.relativeOffsetsFromAnglesAndDirections,
    DELTA_SCALAR = constants.DELTA_SCALAR,
    INVERT_SCALAR = constants.INVERT_SCALAR,
    OFFSET_SCALAR = constants.OFFSET_SCALAR;

var Pan = /*#__PURE__*/function () {
  function Pan(offsets) {
    _classCallCheck(this, Pan);

    this.offsets = offsets;
  }

  _createClass(Pan, [{
    key: "getOffsets",
    value: function getOffsets() {
      return this.offsets;
    }
  }, {
    key: "updateOffsets",
    value: function updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt) {
      var angles = tilt.getAngles(),
          scaledMouseWheelDelta = mouseWheelDelta * DELTA_SCALAR,
          scaledReflectedRelativeMouseCoordinates = reflect2(scale2(relativeMouseCoordinates, OFFSET_SCALAR)),
          directions = [].concat(_toConsumableArray(scaledReflectedRelativeMouseCoordinates), [scaledMouseWheelDelta, 0]),
          relativeOffsets = relativeOffsetsFromAnglesAndDirections(angles, directions);
      this.offsets = add3(this.offsets, relativeOffsets);
    }
  }], [{
    key: "fromInitialOffsets",
    value: function fromInitialOffsets(initialOffsets) {
      var offsets = initialOffsets,
          ///
      pan = new Pan(offsets);
      return pan;
    }
  }, {
    key: "fromInitialPosition",
    value: function fromInitialPosition(initialPosition) {
      var offsets = scale3(initialPosition, INVERT_SCALAR),
          pan = new Pan(offsets);
      return pan;
    }
  }]);

  return Pan;
}();

module.exports = Pan;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbi5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJyZXF1aXJlIiwidmVjdG9yTWF0aHMiLCJvZmZzZXRzVXRpbGl0aWVzIiwiYWRkMyIsInNjYWxlMiIsInJlZmxlY3QyIiwic2NhbGUzIiwicmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMiLCJERUxUQV9TQ0FMQVIiLCJJTlZFUlRfU0NBTEFSIiwiT0ZGU0VUX1NDQUxBUiIsIlBhbiIsIm9mZnNldHMiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZVdoZWVsRGVsdGEiLCJ0aWx0IiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwic2NhbGVkTW91c2VXaGVlbERlbHRhIiwic2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwiZGlyZWN0aW9ucyIsInJlbGF0aXZlT2Zmc2V0cyIsImluaXRpYWxPZmZzZXRzIiwicGFuIiwiaW5pdGlhbFBvc2l0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXpCO0FBQUEsSUFDTUMsV0FBVyxHQUFHRCxPQUFPLENBQUMsaUJBQUQsQ0FEM0I7QUFBQSxJQUVNRSxnQkFBZ0IsR0FBR0YsT0FBTyxDQUFDLHNCQUFELENBRmhDOztJQUlRRyxJLEdBQW1DRixXLENBQW5DRSxJO0lBQU1DLE0sR0FBNkJILFcsQ0FBN0JHLE07SUFBUUMsUSxHQUFxQkosVyxDQUFyQkksUTtJQUFVQyxNLEdBQVdMLFcsQ0FBWEssTTtJQUN4QkMsc0MsR0FBMkNMLGdCLENBQTNDSyxzQztJQUNBQyxZLEdBQStDVCxTLENBQS9DUyxZO0lBQWNDLGEsR0FBaUNWLFMsQ0FBakNVLGE7SUFBZUMsYSxHQUFrQlgsUyxDQUFsQlcsYTs7SUFFL0JDLEc7QUFDSixlQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLQSxPQUFaO0FBQ0Q7OztrQ0FFYUMsd0IsRUFBMEJDLGUsRUFBaUJDLEksRUFBTTtBQUM3RCxVQUFNQyxNQUFNLEdBQUdELElBQUksQ0FBQ0UsU0FBTCxFQUFmO0FBQUEsVUFDTUMscUJBQXFCLEdBQUdKLGVBQWUsR0FBR04sWUFEaEQ7QUFBQSxVQUVNVyx1Q0FBdUMsR0FBR2QsUUFBUSxDQUFDRCxNQUFNLENBQUNTLHdCQUFELEVBQTJCSCxhQUEzQixDQUFQLENBRnhEO0FBQUEsVUFHTVUsVUFBVSxnQ0FBUUQsdUNBQVIsSUFBaURELHFCQUFqRCxFQUF3RSxDQUF4RSxFQUhoQjtBQUFBLFVBSU1HLGVBQWUsR0FBR2Qsc0NBQXNDLENBQUNTLE1BQUQsRUFBU0ksVUFBVCxDQUo5RDtBQU1BLFdBQUtSLE9BQUwsR0FBZVQsSUFBSSxDQUFDLEtBQUtTLE9BQU4sRUFBZVMsZUFBZixDQUFuQjtBQUNEOzs7dUNBRXlCQyxjLEVBQWdCO0FBQ3hDLFVBQU1WLE9BQU8sR0FBR1UsY0FBaEI7QUFBQSxVQUFnQztBQUMxQkMsTUFBQUEsR0FBRyxHQUFHLElBQUlaLEdBQUosQ0FBUUMsT0FBUixDQURaO0FBR0EsYUFBT1csR0FBUDtBQUNEOzs7d0NBRTBCQyxlLEVBQWlCO0FBQzFDLFVBQU1aLE9BQU8sR0FBR04sTUFBTSxDQUFDa0IsZUFBRCxFQUFrQmYsYUFBbEIsQ0FBdEI7QUFBQSxVQUNNYyxHQUFHLEdBQUcsSUFBSVosR0FBSixDQUFRQyxPQUFSLENBRFo7QUFHQSxhQUFPVyxHQUFQO0FBQ0Q7Ozs7OztBQUdIRSxNQUFNLENBQUNDLE9BQVAsR0FBaUJmLEdBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBvZmZzZXRzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL29mZnNldHMnKTtcblxuY29uc3QgeyBhZGQzLCBzY2FsZTIsIHJlZmxlY3QyLCBzY2FsZTMgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyB9ID0gb2Zmc2V0c1V0aWxpdGllcyxcbiAgICAgIHsgREVMVEFfU0NBTEFSLCBJTlZFUlRfU0NBTEFSLCBPRkZTRVRfU0NBTEFSIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIFBhbiB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHMpIHtcbiAgICB0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuICB9XG5cbiAgZ2V0T2Zmc2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRzO1xuICB9XG5cbiAgdXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgdGlsdCkge1xuICAgIGNvbnN0IGFuZ2xlcyA9IHRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgc2NhbGVkTW91c2VXaGVlbERlbHRhID0gbW91c2VXaGVlbERlbHRhICogREVMVEFfU0NBTEFSLFxuICAgICAgICAgIHNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHJlZmxlY3QyKHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIE9GRlNFVF9TQ0FMQVIpKSxcbiAgICAgICAgICBkaXJlY3Rpb25zID0gWyAuLi5zY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHNjYWxlZE1vdXNlV2hlZWxEZWx0YSwgMCBdLFxuICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0cyA9IHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zKGFuZ2xlcywgZGlyZWN0aW9ucyk7XG5cbiAgICB0aGlzLm9mZnNldHMgPSBhZGQzKHRoaXMub2Zmc2V0cywgcmVsYXRpdmVPZmZzZXRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbE9mZnNldHMoaW5pdGlhbE9mZnNldHMpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gaW5pdGlhbE9mZnNldHMsIC8vL1xuICAgICAgICAgIHBhbiA9IG5ldyBQYW4ob2Zmc2V0cyk7XG5cbiAgICByZXR1cm4gcGFuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IHNjYWxlMyhpbml0aWFsUG9zaXRpb24sIElOVkVSVF9TQ0FMQVIpLFxuICAgICAgICAgIHBhbiA9IG5ldyBQYW4ob2Zmc2V0cyk7XG4gICAgXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhbjtcbiJdfQ==