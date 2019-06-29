'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    offsetsUtilities = require('../utilities/offsets');

var relativeOffsetsFromAnglesAndDirections = offsetsUtilities.relativeOffsetsFromAnglesAndDirections,
    add3 = vectorMaths.add3,
    scale2 = vectorMaths.scale2,
    reflect2 = vectorMaths.reflect2,
    scale3 = vectorMaths.scale3,
    subtract2 = vectorMaths.subtract2,
    DELTA_SCALAR = constants.DELTA_SCALAR,
    INVERT_SCALAR = constants.INVERT_SCALAR,
    OFFSET_SCALAR = constants.OFFSET_SCALAR;

var Location = function () {
  function Location(offsets, mouseCoordinates, previousMouseCoordinates) {
    _classCallCheck(this, Location);

    this.offsets = offsets;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  _createClass(Location, [{
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
    value: function updateXYOffset(mouseCoordinates, tilt) {
      var angles = tilt.getAngles(),
          scalar = OFFSET_SCALAR,
          ///
      relativeMouseCoordinates = subtract2(mouseCoordinates, this.previousMouseCoordinates),
          reflectedScaledRelativeMouseCoordinates = reflect2(scale2(relativeMouseCoordinates, scalar)),
          directions = [].concat(_toConsumableArray(reflectedScaledRelativeMouseCoordinates), [0, 0]),
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
    key: 'fromInitialPosition',
    value: function fromInitialPosition(initialPosition) {
      var scalar = INVERT_SCALAR,
          ///
      offsets = scale3(initialPosition, scalar),
          mouseCoordinates = null,
          ///
      previousMouseCoordinates = null,
          ///
      location = new Location(offsets, mouseCoordinates, previousMouseCoordinates);

      return location;
    }
  }]);

  return Location;
}();

module.exports = Location;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL2xvY2F0aW9uLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJ2ZWN0b3JNYXRocyIsIm9mZnNldHNVdGlsaXRpZXMiLCJyZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyIsImFkZDMiLCJzY2FsZTIiLCJyZWZsZWN0MiIsInNjYWxlMyIsInN1YnRyYWN0MiIsIkRFTFRBX1NDQUxBUiIsIklOVkVSVF9TQ0FMQVIiLCJPRkZTRVRfU0NBTEFSIiwiTG9jYXRpb24iLCJvZmZzZXRzIiwibW91c2VDb29yZGluYXRlcyIsInByZXZpb3VzTW91c2VDb29yZGluYXRlcyIsInRpbHQiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJzY2FsYXIiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJyZWZsZWN0ZWRTY2FsZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJkaXJlY3Rpb25zIiwicmVsYXRpdmVPZmZzZXRzIiwiZGVsdGEiLCJzY2FsZWREZWx0YSIsImluaXRpYWxQb3NpdGlvbiIsImxvY2F0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxpQkFBUixDQURwQjtBQUFBLElBRU1FLG1CQUFtQkYsUUFBUSxzQkFBUixDQUZ6Qjs7QUFJTSxJQUFFRyxzQ0FBRixHQUE2Q0QsZ0JBQTdDLENBQUVDLHNDQUFGO0FBQUEsSUFDRUMsSUFERixHQUNnREgsV0FEaEQsQ0FDRUcsSUFERjtBQUFBLElBQ1FDLE1BRFIsR0FDZ0RKLFdBRGhELENBQ1FJLE1BRFI7QUFBQSxJQUNnQkMsUUFEaEIsR0FDZ0RMLFdBRGhELENBQ2dCSyxRQURoQjtBQUFBLElBQzBCQyxNQUQxQixHQUNnRE4sV0FEaEQsQ0FDMEJNLE1BRDFCO0FBQUEsSUFDa0NDLFNBRGxDLEdBQ2dEUCxXQURoRCxDQUNrQ08sU0FEbEM7QUFBQSxJQUVFQyxZQUZGLEdBRWlEVixTQUZqRCxDQUVFVSxZQUZGO0FBQUEsSUFFZ0JDLGFBRmhCLEdBRWlEWCxTQUZqRCxDQUVnQlcsYUFGaEI7QUFBQSxJQUUrQkMsYUFGL0IsR0FFaURaLFNBRmpELENBRStCWSxhQUYvQjs7SUFJQUMsUTtBQUNKLG9CQUFZQyxPQUFaLEVBQXFCQyxnQkFBckIsRUFBdUNDLHdCQUF2QyxFQUFpRTtBQUFBOztBQUMvRCxTQUFLRixPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0Msd0JBQUwsR0FBZ0NBLHdCQUFoQztBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLRixPQUFaO0FBQ0Q7Ozt3Q0FFbUJDLGdCLEVBQWtCO0FBQ3BDLFdBQUtBLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDRDs7O29EQUUrQjtBQUM5QixXQUFLQyx3QkFBTCxHQUFnQyxLQUFLRCxnQkFBckM7QUFDRDs7O21DQUVjQSxnQixFQUFrQkUsSSxFQUFNO0FBQ3JDLFVBQU1DLFNBQVNELEtBQUtFLFNBQUwsRUFBZjtBQUFBLFVBQ01DLFNBQVNSLGFBRGY7QUFBQSxVQUM4QjtBQUN4QlMsaUNBQTJCWixVQUFVTSxnQkFBVixFQUE0QixLQUFLQyx3QkFBakMsQ0FGakM7QUFBQSxVQUdNTSwwQ0FBMENmLFNBQVNELE9BQU9lLHdCQUFQLEVBQWlDRCxNQUFqQyxDQUFULENBSGhEO0FBQUEsVUFJTUcsMENBQWtCRCx1Q0FBbEIsSUFBMkQsQ0FBM0QsRUFBOEQsQ0FBOUQsRUFKTjtBQUFBLFVBS01FLGtCQUFrQnBCLHVDQUF1Q2MsTUFBdkMsRUFBK0NLLFVBQS9DLENBTHhCOztBQU9BLFdBQUtULE9BQUwsR0FBZVQsS0FBSyxLQUFLUyxPQUFWLEVBQW1CVSxlQUFuQixDQUFmO0FBQ0Q7OztrQ0FFYUMsSyxFQUFPUixJLEVBQU07QUFDekIsVUFBTUMsU0FBU0QsS0FBS0UsU0FBTCxFQUFmO0FBQUEsVUFDTUMsU0FBU1YsWUFEZjtBQUFBLFVBQzZCO0FBQ3ZCZ0Isb0JBQWNELFFBQVFMLE1BRjVCO0FBQUEsVUFHTUcsYUFBYSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVFHLFdBQVIsRUFBcUIsQ0FBckIsQ0FIbkI7QUFBQSxVQUlNRixrQkFBa0JwQix1Q0FBdUNjLE1BQXZDLEVBQStDSyxVQUEvQyxDQUp4Qjs7QUFNQSxXQUFLVCxPQUFMLEdBQWVULEtBQUssS0FBS1MsT0FBVixFQUFtQlUsZUFBbkIsQ0FBZjtBQUNEOzs7d0NBRTBCRyxlLEVBQWlCO0FBQzFDLFVBQU1QLFNBQVNULGFBQWY7QUFBQSxVQUE4QjtBQUN4QkcsZ0JBQVVOLE9BQU9tQixlQUFQLEVBQXdCUCxNQUF4QixDQURoQjtBQUFBLFVBRU1MLG1CQUFtQixJQUZ6QjtBQUFBLFVBRWdDO0FBQzFCQyxpQ0FBMkIsSUFIakM7QUFBQSxVQUd3QztBQUNsQ1ksaUJBQVcsSUFBSWYsUUFBSixDQUFhQyxPQUFiLEVBQXNCQyxnQkFBdEIsRUFBd0NDLHdCQUF4QyxDQUpqQjs7QUFNQSxhQUFPWSxRQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCakIsUUFBakIiLCJmaWxlIjoibG9jYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIG9mZnNldHNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvb2Zmc2V0cycpO1xuXG5jb25zdCB7IHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zIH0gPSBvZmZzZXRzVXRpbGl0aWVzLFxuICAgICAgeyBhZGQzLCBzY2FsZTIsIHJlZmxlY3QyLCBzY2FsZTMsIHN1YnRyYWN0MiB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IERFTFRBX1NDQUxBUiwgSU5WRVJUX1NDQUxBUiwgT0ZGU0VUX1NDQUxBUiB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBMb2NhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldE9mZnNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0cztcbiAgfVxuXG4gIHNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICByZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpIHtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHVwZGF0ZVhZT2Zmc2V0KG1vdXNlQ29vcmRpbmF0ZXMsIHRpbHQpIHtcbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIHNjYWxhciA9IE9GRlNFVF9TQ0FMQVIsIC8vL1xuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mihtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgcmVmbGVjdGVkU2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gcmVmbGVjdDIoc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGFyKSksXG4gICAgICAgICAgZGlyZWN0aW9ucyA9IFsgLi4ucmVmbGVjdGVkU2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCAwLCAwXSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldHMgPSByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyhhbmdsZXMsIGRpcmVjdGlvbnMpO1xuXG4gICAgdGhpcy5vZmZzZXRzID0gYWRkMyh0aGlzLm9mZnNldHMsIHJlbGF0aXZlT2Zmc2V0cyk7XG4gIH1cblxuICB1cGRhdGVaT2Zmc2V0KGRlbHRhLCB0aWx0KSB7XG4gICAgY29uc3QgYW5nbGVzID0gdGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBzY2FsYXIgPSBERUxUQV9TQ0FMQVIsIC8vL1xuICAgICAgICAgIHNjYWxlZERlbHRhID0gZGVsdGEgKiBzY2FsYXIsXG4gICAgICAgICAgZGlyZWN0aW9ucyA9IFsgMCwgMCwgc2NhbGVkRGVsdGEsIDAgXSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldHMgPSByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyhhbmdsZXMsIGRpcmVjdGlvbnMpO1xuXG4gICAgdGhpcy5vZmZzZXRzID0gYWRkMyh0aGlzLm9mZnNldHMsIHJlbGF0aXZlT2Zmc2V0cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxQb3NpdGlvbihpbml0aWFsUG9zaXRpb24pIHtcbiAgICBjb25zdCBzY2FsYXIgPSBJTlZFUlRfU0NBTEFSLCAvLy9cbiAgICAgICAgICBvZmZzZXRzID0gc2NhbGUzKGluaXRpYWxQb3NpdGlvbiwgc2NhbGFyKSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICBsb2NhdGlvbiA9IG5ldyBMb2NhdGlvbihvZmZzZXRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIFxuICAgIHJldHVybiBsb2NhdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExvY2F0aW9uO1xuIl19