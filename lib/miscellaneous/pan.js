"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var constants = require("../constants"),
    vectorMaths = require("../maths/vector"),
    offsetsUtilities = require("../utilities/offsets");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbi5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJyZXF1aXJlIiwidmVjdG9yTWF0aHMiLCJvZmZzZXRzVXRpbGl0aWVzIiwiYWRkMyIsInNjYWxlMiIsInJlZmxlY3QyIiwic2NhbGUzIiwicmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMiLCJERUxUQV9TQ0FMQVIiLCJJTlZFUlRfU0NBTEFSIiwiT0ZGU0VUX1NDQUxBUiIsIlBhbiIsIm9mZnNldHMiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZVdoZWVsRGVsdGEiLCJ0aWx0IiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwic2NhbGVkTW91c2VXaGVlbERlbHRhIiwic2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwiZGlyZWN0aW9ucyIsInJlbGF0aXZlT2Zmc2V0cyIsImluaXRpYWxPZmZzZXRzIiwicGFuIiwiaW5pdGlhbFBvc2l0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXpCO0FBQUEsSUFDTUMsV0FBVyxHQUFHRCxPQUFPLENBQUMsaUJBQUQsQ0FEM0I7QUFBQSxJQUVNRSxnQkFBZ0IsR0FBR0YsT0FBTyxDQUFDLHNCQUFELENBRmhDOztJQUlRRyxJLEdBQW1DRixXLENBQW5DRSxJO0lBQU1DLE0sR0FBNkJILFcsQ0FBN0JHLE07SUFBUUMsUSxHQUFxQkosVyxDQUFyQkksUTtJQUFVQyxNLEdBQVdMLFcsQ0FBWEssTTtJQUN4QkMsc0MsR0FBMkNMLGdCLENBQTNDSyxzQztJQUNBQyxZLEdBQStDVCxTLENBQS9DUyxZO0lBQWNDLGEsR0FBaUNWLFMsQ0FBakNVLGE7SUFBZUMsYSxHQUFrQlgsUyxDQUFsQlcsYTs7SUFFL0JDLEc7QUFDSixlQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLQSxPQUFaO0FBQ0Q7OztrQ0FFYUMsd0IsRUFBMEJDLGUsRUFBaUJDLEksRUFBTTtBQUM3RCxVQUFNQyxNQUFNLEdBQUdELElBQUksQ0FBQ0UsU0FBTCxFQUFmO0FBQUEsVUFDTUMscUJBQXFCLEdBQUdKLGVBQWUsR0FBR04sWUFEaEQ7QUFBQSxVQUVNVyx1Q0FBdUMsR0FBR2QsUUFBUSxDQUFDRCxNQUFNLENBQUNTLHdCQUFELEVBQTJCSCxhQUEzQixDQUFQLENBRnhEO0FBQUEsVUFHTVUsVUFBVSxnQ0FBUUQsdUNBQVIsSUFBaURELHFCQUFqRCxFQUF3RSxDQUF4RSxFQUhoQjtBQUFBLFVBSU1HLGVBQWUsR0FBR2Qsc0NBQXNDLENBQUNTLE1BQUQsRUFBU0ksVUFBVCxDQUo5RDtBQU1BLFdBQUtSLE9BQUwsR0FBZVQsSUFBSSxDQUFDLEtBQUtTLE9BQU4sRUFBZVMsZUFBZixDQUFuQjtBQUNEOzs7dUNBRXlCQyxjLEVBQWdCO0FBQ3hDLFVBQU1WLE9BQU8sR0FBR1UsY0FBaEI7QUFBQSxVQUFnQztBQUMxQkMsTUFBQUEsR0FBRyxHQUFHLElBQUlaLEdBQUosQ0FBUUMsT0FBUixDQURaO0FBR0EsYUFBT1csR0FBUDtBQUNEOzs7d0NBRTBCQyxlLEVBQWlCO0FBQzFDLFVBQU1aLE9BQU8sR0FBR04sTUFBTSxDQUFDa0IsZUFBRCxFQUFrQmYsYUFBbEIsQ0FBdEI7QUFBQSxVQUNNYyxHQUFHLEdBQUcsSUFBSVosR0FBSixDQUFRQyxPQUFSLENBRFo7QUFHQSxhQUFPVyxHQUFQO0FBQ0Q7Ozs7OztBQUdIRSxNQUFNLENBQUNDLE9BQVAsR0FBaUJmLEdBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIiksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoXCIuLi9tYXRocy92ZWN0b3JcIiksXG4gICAgICBvZmZzZXRzVXRpbGl0aWVzID0gcmVxdWlyZShcIi4uL3V0aWxpdGllcy9vZmZzZXRzXCIpO1xuXG5jb25zdCB7IGFkZDMsIHNjYWxlMiwgcmVmbGVjdDIsIHNjYWxlMyB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zIH0gPSBvZmZzZXRzVXRpbGl0aWVzLFxuICAgICAgeyBERUxUQV9TQ0FMQVIsIElOVkVSVF9TQ0FMQVIsIE9GRlNFVF9TQ0FMQVIgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgUGFuIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0cykge1xuICAgIHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG4gIH1cblxuICBnZXRPZmZzZXRzKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHM7XG4gIH1cblxuICB1cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCB0aWx0KSB7XG4gICAgY29uc3QgYW5nbGVzID0gdGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBzY2FsZWRNb3VzZVdoZWVsRGVsdGEgPSBtb3VzZVdoZWVsRGVsdGEgKiBERUxUQV9TQ0FMQVIsXG4gICAgICAgICAgc2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gcmVmbGVjdDIoc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgT0ZGU0VUX1NDQUxBUikpLFxuICAgICAgICAgIGRpcmVjdGlvbnMgPSBbIC4uLnNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGVkTW91c2VXaGVlbERlbHRhLCAwIF0sXG4gICAgICAgICAgcmVsYXRpdmVPZmZzZXRzID0gcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMoYW5nbGVzLCBkaXJlY3Rpb25zKTtcblxuICAgIHRoaXMub2Zmc2V0cyA9IGFkZDModGhpcy5vZmZzZXRzLCByZWxhdGl2ZU9mZnNldHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsT2Zmc2V0cyhpbml0aWFsT2Zmc2V0cykge1xuICAgIGNvbnN0IG9mZnNldHMgPSBpbml0aWFsT2Zmc2V0cywgLy8vXG4gICAgICAgICAgcGFuID0gbmV3IFBhbihvZmZzZXRzKTtcblxuICAgIHJldHVybiBwYW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxQb3NpdGlvbihpbml0aWFsUG9zaXRpb24pIHtcbiAgICBjb25zdCBvZmZzZXRzID0gc2NhbGUzKGluaXRpYWxQb3NpdGlvbiwgSU5WRVJUX1NDQUxBUiksXG4gICAgICAgICAgcGFuID0gbmV3IFBhbihvZmZzZXRzKTtcbiAgICBcbiAgICByZXR1cm4gcGFuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFuO1xuIl19