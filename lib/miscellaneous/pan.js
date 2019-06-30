'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Pan = function () {
  function Pan(offsets) {
    _classCallCheck(this, Pan);

    this.offsets = offsets;
  }

  _createClass(Pan, [{
    key: 'getOffsets',
    value: function getOffsets() {
      return this.offsets;
    }
  }, {
    key: 'updateOffsets',
    value: function updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt) {
      var angles = tilt.getAngles(),
          scaledMouseWheelDelta = mouseWheelDelta * DELTA_SCALAR,
          scaledReflectedRelativeMouseCoordinates = reflect2(scale2(relativeMouseCoordinates, OFFSET_SCALAR)),
          directions = [].concat(_toConsumableArray(scaledReflectedRelativeMouseCoordinates), [scaledMouseWheelDelta, 0]),
          relativeOffsets = relativeOffsetsFromAnglesAndDirections(angles, directions);

      this.offsets = add3(this.offsets, relativeOffsets);
    }
  }], [{
    key: 'fromInitialOffsets',
    value: function fromInitialOffsets(initialOffsets) {
      var offsets = initialOffsets,
          ///
      pan = new Pan(offsets);

      return pan;
    }
  }, {
    key: 'fromInitialPosition',
    value: function fromInitialPosition(initialPosition) {
      var offsets = scale3(initialPosition, INVERT_SCALAR),
          pan = new Pan(offsets);

      return pan;
    }
  }]);

  return Pan;
}();

module.exports = Pan;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3Bhbi5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJyZXF1aXJlIiwidmVjdG9yTWF0aHMiLCJvZmZzZXRzVXRpbGl0aWVzIiwiYWRkMyIsInNjYWxlMiIsInJlZmxlY3QyIiwic2NhbGUzIiwicmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMiLCJERUxUQV9TQ0FMQVIiLCJJTlZFUlRfU0NBTEFSIiwiT0ZGU0VUX1NDQUxBUiIsIlBhbiIsIm9mZnNldHMiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZVdoZWVsRGVsdGEiLCJ0aWx0IiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwic2NhbGVkTW91c2VXaGVlbERlbHRhIiwic2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwiZGlyZWN0aW9ucyIsInJlbGF0aXZlT2Zmc2V0cyIsImluaXRpYWxPZmZzZXRzIiwicGFuIiwiaW5pdGlhbFBvc2l0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxpQkFBUixDQURwQjtBQUFBLElBRU1FLG1CQUFtQkYsUUFBUSxzQkFBUixDQUZ6Qjs7SUFJUUcsSSxHQUFtQ0YsVyxDQUFuQ0UsSTtJQUFNQyxNLEdBQTZCSCxXLENBQTdCRyxNO0lBQVFDLFEsR0FBcUJKLFcsQ0FBckJJLFE7SUFBVUMsTSxHQUFXTCxXLENBQVhLLE07SUFDeEJDLHNDLEdBQTJDTCxnQixDQUEzQ0ssc0M7SUFDQUMsWSxHQUErQ1QsUyxDQUEvQ1MsWTtJQUFjQyxhLEdBQWlDVixTLENBQWpDVSxhO0lBQWVDLGEsR0FBa0JYLFMsQ0FBbEJXLGE7O0lBRS9CQyxHO0FBQ0osZUFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNuQixTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0EsT0FBWjtBQUNEOzs7a0NBRWFDLHdCLEVBQTBCQyxlLEVBQWlCQyxJLEVBQU07QUFDN0QsVUFBTUMsU0FBU0QsS0FBS0UsU0FBTCxFQUFmO0FBQUEsVUFDTUMsd0JBQXdCSixrQkFBa0JOLFlBRGhEO0FBQUEsVUFFTVcsMENBQTBDZCxTQUFTRCxPQUFPUyx3QkFBUCxFQUFpQ0gsYUFBakMsQ0FBVCxDQUZoRDtBQUFBLFVBR01VLDBDQUFrQkQsdUNBQWxCLElBQTJERCxxQkFBM0QsRUFBa0YsQ0FBbEYsRUFITjtBQUFBLFVBSU1HLGtCQUFrQmQsdUNBQXVDUyxNQUF2QyxFQUErQ0ksVUFBL0MsQ0FKeEI7O0FBTUEsV0FBS1IsT0FBTCxHQUFlVCxLQUFLLEtBQUtTLE9BQVYsRUFBbUJTLGVBQW5CLENBQWY7QUFDRDs7O3VDQUV5QkMsYyxFQUFnQjtBQUN4QyxVQUFNVixVQUFVVSxjQUFoQjtBQUFBLFVBQWdDO0FBQzFCQyxZQUFNLElBQUlaLEdBQUosQ0FBUUMsT0FBUixDQURaOztBQUdBLGFBQU9XLEdBQVA7QUFDRDs7O3dDQUUwQkMsZSxFQUFpQjtBQUMxQyxVQUFNWixVQUFVTixPQUFPa0IsZUFBUCxFQUF3QmYsYUFBeEIsQ0FBaEI7QUFBQSxVQUNNYyxNQUFNLElBQUlaLEdBQUosQ0FBUUMsT0FBUixDQURaOztBQUdBLGFBQU9XLEdBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJmLEdBQWpCIiwiZmlsZSI6InBhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgb2Zmc2V0c1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9vZmZzZXRzJyk7XG5cbmNvbnN0IHsgYWRkMywgc2NhbGUyLCByZWZsZWN0Miwgc2NhbGUzIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMgfSA9IG9mZnNldHNVdGlsaXRpZXMsXG4gICAgICB7IERFTFRBX1NDQUxBUiwgSU5WRVJUX1NDQUxBUiwgT0ZGU0VUX1NDQUxBUiB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBQYW4ge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcbiAgfVxuXG4gIGdldE9mZnNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0cztcbiAgfVxuXG4gIHVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHRpbHQpIHtcbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIHNjYWxlZE1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YSAqIERFTFRBX1NDQUxBUixcbiAgICAgICAgICBzY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSByZWZsZWN0MihzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBPRkZTRVRfU0NBTEFSKSksXG4gICAgICAgICAgZGlyZWN0aW9ucyA9IFsgLi4uc2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBzY2FsZWRNb3VzZVdoZWVsRGVsdGEsIDAgXSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldHMgPSByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyhhbmdsZXMsIGRpcmVjdGlvbnMpO1xuXG4gICAgdGhpcy5vZmZzZXRzID0gYWRkMyh0aGlzLm9mZnNldHMsIHJlbGF0aXZlT2Zmc2V0cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxPZmZzZXRzKGluaXRpYWxPZmZzZXRzKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IGluaXRpYWxPZmZzZXRzLCAvLy9cbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG9mZnNldHMpO1xuXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbFBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbikge1xuICAgIGNvbnN0IG9mZnNldHMgPSBzY2FsZTMoaW5pdGlhbFBvc2l0aW9uLCBJTlZFUlRfU0NBTEFSKSxcbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG9mZnNldHMpO1xuICAgIFxuICAgIHJldHVybiBwYW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYW47XG4iXX0=