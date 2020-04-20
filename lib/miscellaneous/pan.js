"use strict";

var _vector = require("../maths/vector");

var _offsets = require("../utilities/offsets");

var _constants = require("../constants");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
          scaledMouseWheelDelta = mouseWheelDelta * _constants.DELTA_SCALAR,
          scaledReflectedRelativeMouseCoordinates = (0, _vector.reflect2)((0, _vector.scale2)(relativeMouseCoordinates, _constants.OFFSET_SCALAR)),
          directions = [].concat(_toConsumableArray(scaledReflectedRelativeMouseCoordinates), [scaledMouseWheelDelta, 0]),
          relativeOffsets = (0, _offsets.relativeOffsetsFromAnglesAndDirections)(angles, directions);
      this.offsets = (0, _vector.add3)(this.offsets, relativeOffsets);
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
      var offsets = (0, _vector.scale3)(initialPosition, _constants.INVERT_SCALAR),
          pan = new Pan(offsets);
      return pan;
    }
  }]);

  return Pan;
}();

module.exports = Pan;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbi5qcyJdLCJuYW1lcyI6WyJQYW4iLCJvZmZzZXRzIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwibW91c2VXaGVlbERlbHRhIiwidGlsdCIsImFuZ2xlcyIsImdldEFuZ2xlcyIsInNjYWxlZE1vdXNlV2hlZWxEZWx0YSIsIkRFTFRBX1NDQUxBUiIsInNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsIk9GRlNFVF9TQ0FMQVIiLCJkaXJlY3Rpb25zIiwicmVsYXRpdmVPZmZzZXRzIiwiaW5pdGlhbE9mZnNldHMiLCJwYW4iLCJpbml0aWFsUG9zaXRpb24iLCJJTlZFUlRfU0NBTEFSIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsRztBQUNKLGVBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtBLE9BQVo7QUFDRDs7O2tDQUVhQyx3QixFQUEwQkMsZSxFQUFpQkMsSSxFQUFNO0FBQzdELFVBQU1DLE1BQU0sR0FBR0QsSUFBSSxDQUFDRSxTQUFMLEVBQWY7QUFBQSxVQUNNQyxxQkFBcUIsR0FBR0osZUFBZSxHQUFHSyx1QkFEaEQ7QUFBQSxVQUVNQyx1Q0FBdUMsR0FBRyxzQkFBUyxvQkFBT1Asd0JBQVAsRUFBaUNRLHdCQUFqQyxDQUFULENBRmhEO0FBQUEsVUFHTUMsVUFBVSxnQ0FBUUYsdUNBQVIsSUFBaURGLHFCQUFqRCxFQUF3RSxDQUF4RSxFQUhoQjtBQUFBLFVBSU1LLGVBQWUsR0FBRyxxREFBdUNQLE1BQXZDLEVBQStDTSxVQUEvQyxDQUp4QjtBQU1BLFdBQUtWLE9BQUwsR0FBZSxrQkFBSyxLQUFLQSxPQUFWLEVBQW1CVyxlQUFuQixDQUFmO0FBQ0Q7Ozt1Q0FFeUJDLGMsRUFBZ0I7QUFDeEMsVUFBTVosT0FBTyxHQUFHWSxjQUFoQjtBQUFBLFVBQWdDO0FBQzFCQyxNQUFBQSxHQUFHLEdBQUcsSUFBSWQsR0FBSixDQUFRQyxPQUFSLENBRFo7QUFHQSxhQUFPYSxHQUFQO0FBQ0Q7Ozt3Q0FFMEJDLGUsRUFBaUI7QUFDMUMsVUFBTWQsT0FBTyxHQUFHLG9CQUFPYyxlQUFQLEVBQXdCQyx3QkFBeEIsQ0FBaEI7QUFBQSxVQUNNRixHQUFHLEdBQUcsSUFBSWQsR0FBSixDQUFRQyxPQUFSLENBRFo7QUFHQSxhQUFPYSxHQUFQO0FBQ0Q7Ozs7OztBQUdIRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJsQixHQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhZGQzLCBzY2FsZTIsIHJlZmxlY3QyLCBzY2FsZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvb2Zmc2V0c1wiO1xuaW1wb3J0IHsgREVMVEFfU0NBTEFSLCBJTlZFUlRfU0NBTEFSLCBPRkZTRVRfU0NBTEFSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBQYW4ge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcbiAgfVxuXG4gIGdldE9mZnNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0cztcbiAgfVxuXG4gIHVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHRpbHQpIHtcbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIHNjYWxlZE1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YSAqIERFTFRBX1NDQUxBUixcbiAgICAgICAgICBzY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSByZWZsZWN0MihzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBPRkZTRVRfU0NBTEFSKSksXG4gICAgICAgICAgZGlyZWN0aW9ucyA9IFsgLi4uc2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBzY2FsZWRNb3VzZVdoZWVsRGVsdGEsIDAgXSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldHMgPSByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyhhbmdsZXMsIGRpcmVjdGlvbnMpO1xuXG4gICAgdGhpcy5vZmZzZXRzID0gYWRkMyh0aGlzLm9mZnNldHMsIHJlbGF0aXZlT2Zmc2V0cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxPZmZzZXRzKGluaXRpYWxPZmZzZXRzKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IGluaXRpYWxPZmZzZXRzLCAvLy9cbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG9mZnNldHMpO1xuXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbFBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbikge1xuICAgIGNvbnN0IG9mZnNldHMgPSBzY2FsZTMoaW5pdGlhbFBvc2l0aW9uLCBJTlZFUlRfU0NBTEFSKSxcbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG9mZnNldHMpO1xuICAgIFxuICAgIHJldHVybiBwYW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYW47XG4iXX0=