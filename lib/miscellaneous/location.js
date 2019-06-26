'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    matrixUtilities = require('../utilities/matrix');

var rotationsMatrixFromAngles = matrixUtilities.rotationsMatrixFromAngles,
    DELTA_SCALAR = constants.DELTA_SCALAR,
    INVERT_SCALAR = constants.INVERT_SCALAR,
    OFFSET_SCALAR = constants.OFFSET_SCALAR,
    add3 = vectorMaths.add3,
    scale2 = vectorMaths.scale2,
    reflect2 = vectorMaths.reflect2,
    scale3 = vectorMaths.scale3,
    reflect3 = vectorMaths.reflect3,
    subtract2 = vectorMaths.subtract2,
    transform4 = vectorMaths.transform4;

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
          reflectedAngles = reflect3(angles),
          rotationsMatrix = rotationsMatrixFromAngles(reflectedAngles),
          relativeOffsets = transform4([].concat(_toConsumableArray(reflectedScaledRelativeMouseCoordinates), [0, 0]), rotationsMatrix).slice(0, 3); ///

      this.offsets = add3(this.offsets, relativeOffsets);
    }
  }, {
    key: 'updateZOffset',
    value: function updateZOffset(delta, tilt) {
      var angles = tilt.getAngles(),
          scalar = DELTA_SCALAR,
          ///
      scaledDelta = delta * scalar,
          reflectedAngles = reflect3(angles),
          rotationsMatrix = rotationsMatrixFromAngles(reflectedAngles),
          relativeOffsets = transform4([0, 0, scaledDelta, 0], rotationsMatrix).slice(0, 3); ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL2xvY2F0aW9uLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJ2ZWN0b3JNYXRocyIsIm1hdHJpeFV0aWxpdGllcyIsInJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMiLCJERUxUQV9TQ0FMQVIiLCJJTlZFUlRfU0NBTEFSIiwiT0ZGU0VUX1NDQUxBUiIsImFkZDMiLCJzY2FsZTIiLCJyZWZsZWN0MiIsInNjYWxlMyIsInJlZmxlY3QzIiwic3VidHJhY3QyIiwidHJhbnNmb3JtNCIsIkxvY2F0aW9uIiwib2Zmc2V0cyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJ0aWx0IiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwic2NhbGFyIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwicmVmbGVjdGVkU2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwicmVmbGVjdGVkQW5nbGVzIiwicm90YXRpb25zTWF0cml4IiwicmVsYXRpdmVPZmZzZXRzIiwic2xpY2UiLCJkZWx0YSIsInNjYWxlZERlbHRhIiwiaW5pdGlhbFBvc2l0aW9uIiwibG9jYXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLHFCQUFSLENBRnhCOztBQUlNLElBQUVHLHlCQUFGLEdBQWdDRCxlQUFoQyxDQUFFQyx5QkFBRjtBQUFBLElBQ0VDLFlBREYsR0FDaURMLFNBRGpELENBQ0VLLFlBREY7QUFBQSxJQUNnQkMsYUFEaEIsR0FDaUROLFNBRGpELENBQ2dCTSxhQURoQjtBQUFBLElBQytCQyxhQUQvQixHQUNpRFAsU0FEakQsQ0FDK0JPLGFBRC9CO0FBQUEsSUFFRUMsSUFGRixHQUVzRU4s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blxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgbWF0cml4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL21hdHJpeCcpO1xuXG5jb25zdCB7IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMgfSA9IG1hdHJpeFV0aWxpdGllcyxcbiAgICAgIHsgREVMVEFfU0NBTEFSLCBJTlZFUlRfU0NBTEFSLCBPRkZTRVRfU0NBTEFSIH0gPSBjb25zdGFudHMsXG4gICAgICB7IGFkZDMsIHNjYWxlMiwgcmVmbGVjdDIsIHNjYWxlMywgcmVmbGVjdDMsIHN1YnRyYWN0MiwgdHJhbnNmb3JtNCB9ID0gdmVjdG9yTWF0aHM7XG5cbmNsYXNzIExvY2F0aW9uIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0T2Zmc2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRzO1xuICB9XG5cbiAgc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCkge1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgdXBkYXRlWFlPZmZzZXQobW91c2VDb29yZGluYXRlcywgdGlsdCkge1xuICAgIGNvbnN0IGFuZ2xlcyA9IHRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgc2NhbGFyID0gT0ZGU0VUX1NDQUxBUiwgLy8vXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKG1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICByZWZsZWN0ZWRTY2FsZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSByZWZsZWN0MihzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBzY2FsYXIpKSxcbiAgICAgICAgICByZWZsZWN0ZWRBbmdsZXMgPSByZWZsZWN0MyhhbmdsZXMpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMocmVmbGVjdGVkQW5nbGVzKSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldHMgPSB0cmFuc2Zvcm00KFsgLi4ucmVmbGVjdGVkU2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCAwLCAwXSwgcm90YXRpb25zTWF0cml4KS5zbGljZSgwLCAzKTsgLy8vXG5cbiAgICB0aGlzLm9mZnNldHMgPSBhZGQzKHRoaXMub2Zmc2V0cywgcmVsYXRpdmVPZmZzZXRzKTtcbiAgfVxuXG4gIHVwZGF0ZVpPZmZzZXQoZGVsdGEsIHRpbHQpIHtcbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIHNjYWxhciA9IERFTFRBX1NDQUxBUiwgLy8vXG4gICAgICAgICAgc2NhbGVkRGVsdGEgPSBkZWx0YSAqIHNjYWxhcixcbiAgICAgICAgICByZWZsZWN0ZWRBbmdsZXMgPSByZWZsZWN0MyhhbmdsZXMpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMocmVmbGVjdGVkQW5nbGVzKSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldHMgPSB0cmFuc2Zvcm00KFsgMCwgMCwgc2NhbGVkRGVsdGEsIDAgXSwgcm90YXRpb25zTWF0cml4KS5zbGljZSgwLCAzKTsgLy8vXG5cbiAgICB0aGlzLm9mZnNldHMgPSBhZGQzKHRoaXMub2Zmc2V0cywgcmVsYXRpdmVPZmZzZXRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbFBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbikge1xuICAgIGNvbnN0IHNjYWxhciA9IElOVkVSVF9TQ0FMQVIsIC8vL1xuICAgICAgICAgIG9mZnNldHMgPSBzY2FsZTMoaW5pdGlhbFBvc2l0aW9uLCBzY2FsYXIpLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBudWxsLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIGxvY2F0aW9uID0gbmV3IExvY2F0aW9uKG9mZnNldHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG4gICAgXG4gICAgcmV0dXJuIGxvY2F0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTG9jYXRpb247XG4iXX0=