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
      reverseOrder = true,
          relativeMouseCoordinates = subtract2(mouseCoordinates, this.previousMouseCoordinates),
          reflectedScaledRelativeMouseCoordinates = reflect2(scale2(relativeMouseCoordinates, scalar)),
          reflectedAngles = reflect3(angles),
          rotationsMatrix = rotationsMatrixFromAngles(reflectedAngles, reverseOrder),
          relativeOffsets = transform4([].concat(_toConsumableArray(reflectedScaledRelativeMouseCoordinates), [0, 0]), rotationsMatrix).slice(0, 3); ///

      this.offsets = add3(this.offsets, relativeOffsets);
    }
  }, {
    key: 'updateZOffset',
    value: function updateZOffset(delta, tilt) {
      var angles = tilt.getAngles(),
          scalar = DELTA_SCALAR,
          ///
      reverseOrder = true,
          scaledDelta = delta * scalar,
          reflectedAngles = reflect3(angles),
          rotationsMatrix = rotationsMatrixFromAngles(reflectedAngles, reverseOrder),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL2xvY2F0aW9uLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJ2ZWN0b3JNYXRocyIsIm1hdHJpeFV0aWxpdGllcyIsInJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMiLCJERUxUQV9TQ0FMQVIiLCJJTlZFUlRfU0NBTEFSIiwiT0ZGU0VUX1NDQUxBUiIsImFkZDMiLCJzY2FsZTIiLCJyZWZsZWN0MiIsInNjYWxlMyIsInJlZmxlY3QzIiwic3VidHJhY3QyIiwidHJhbnNmb3JtNCIsIkxvY2F0aW9uIiwib2Zmc2V0cyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMiLCJ0aWx0IiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwic2NhbGFyIiwicmV2ZXJzZU9yZGVyIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwicmVmbGVjdGVkU2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwicmVmbGVjdGVkQW5nbGVzIiwicm90YXRpb25zTWF0cml4IiwicmVsYXRpdmVPZmZzZXRzIiwic2xpY2UiLCJkZWx0YSIsInNjYWxlZERlbHRhIiwiaW5pdGlhbFBvc2l0aW9uIiwibG9jYXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLHFCQUFSLENBRnhCOztBQUlNLElBQUVHLHlCQUFGLEdBQWdDRCxlQUFoQyxDQUFFQyx5QkFBRjtBQUFBLElBQ0VDLFlBREYsR0FDaURMLFNBRGpELENBQ0VLLFlBREY7QUFBQSxJQUNnQkMsYUFEaEIsR0FDaUROLFNBRGpELENBQ2dCTSxhQURoQjtBQUFBLElBQytCQyxhQUQvQixHQUNpRFAsU0FEakQsQ0FDK0JPLGFBRC9CO0FBQUEsSUFF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QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnBCLFFBQWpCIiwiZmlsZSI6ImxvY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBtYXRyaXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvbWF0cml4Jyk7XG5cbmNvbnN0IHsgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyB9ID0gbWF0cml4VXRpbGl0aWVzLFxuICAgICAgeyBERUxUQV9TQ0FMQVIsIElOVkVSVF9TQ0FMQVIsIE9GRlNFVF9TQ0FMQVIgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgYWRkMywgc2NhbGUyLCByZWZsZWN0Miwgc2NhbGUzLCByZWZsZWN0Mywgc3VidHJhY3QyLCB0cmFuc2Zvcm00IH0gPSB2ZWN0b3JNYXRocztcblxuY2xhc3MgTG9jYXRpb24ge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBnZXRPZmZzZXRzKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHM7XG4gIH1cblxuICBzZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgcmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKSB7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICB1cGRhdGVYWU9mZnNldChtb3VzZUNvb3JkaW5hdGVzLCB0aWx0KSB7XG4gICAgY29uc3QgYW5nbGVzID0gdGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBzY2FsYXIgPSBPRkZTRVRfU0NBTEFSLCAvLy9cbiAgICAgICAgICByZXZlcnNlT3JkZXIgPSB0cnVlLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mihtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgcmVmbGVjdGVkU2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gcmVmbGVjdDIoc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGFyKSksXG4gICAgICAgICAgcmVmbGVjdGVkQW5nbGVzID0gcmVmbGVjdDMoYW5nbGVzKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKHJlZmxlY3RlZEFuZ2xlcywgcmV2ZXJzZU9yZGVyKSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldHMgPSB0cmFuc2Zvcm00KFsgLi4ucmVmbGVjdGVkU2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCAwLCAwXSwgcm90YXRpb25zTWF0cml4KS5zbGljZSgwLCAzKTsgLy8vXG5cbiAgICB0aGlzLm9mZnNldHMgPSBhZGQzKHRoaXMub2Zmc2V0cywgcmVsYXRpdmVPZmZzZXRzKTtcbiAgfVxuXG4gIHVwZGF0ZVpPZmZzZXQoZGVsdGEsIHRpbHQpIHtcbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIHNjYWxhciA9IERFTFRBX1NDQUxBUiwgLy8vXG4gICAgICAgICAgcmV2ZXJzZU9yZGVyID0gdHJ1ZSxcbiAgICAgICAgICBzY2FsZWREZWx0YSA9IGRlbHRhICogc2NhbGFyLFxuICAgICAgICAgIHJlZmxlY3RlZEFuZ2xlcyA9IHJlZmxlY3QzKGFuZ2xlcyksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhyZWZsZWN0ZWRBbmdsZXMsIHJldmVyc2VPcmRlciksXG4gICAgICAgICAgcmVsYXRpdmVPZmZzZXRzID0gdHJhbnNmb3JtNChbIDAsIDAsIHNjYWxlZERlbHRhLCAwIF0sIHJvdGF0aW9uc01hdHJpeCkuc2xpY2UoMCwgMyk7IC8vL1xuXG4gICAgdGhpcy5vZmZzZXRzID0gYWRkMyh0aGlzLm9mZnNldHMsIHJlbGF0aXZlT2Zmc2V0cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxQb3NpdGlvbihpbml0aWFsUG9zaXRpb24pIHtcbiAgICBjb25zdCBzY2FsYXIgPSBJTlZFUlRfU0NBTEFSLCAvLy9cbiAgICAgICAgICBvZmZzZXRzID0gc2NhbGUzKGluaXRpYWxQb3NpdGlvbiwgc2NhbGFyKSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICBsb2NhdGlvbiA9IG5ldyBMb2NhdGlvbihvZmZzZXRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIFxuICAgIHJldHVybiBsb2NhdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExvY2F0aW9uO1xuIl19