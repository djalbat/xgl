'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var vec2 = require('../maths/vec2'),
    constants = require('../constants');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    add = vec2.add,
    subtract = vec2.subtract,
    scale = vec2.scale,
    ANGLE_COORDINATES_SCALAR = constants.ANGLE_COORDINATES_SCALAR,
    INITIAL_MOUSE_COORDINATES = constants.INITIAL_MOUSE_COORDINATES,
    INITIAL_ANGLE_COORDINATES = constants.INITIAL_ANGLE_COORDINATES;

var Angles = function () {
  function Angles(mouseDown, mouseCoordinates, angleCoordinates, previousAngleCoordinates) {
    _classCallCheck(this, Angles);

    this.mouseDown = mouseDown;
    this.mouseCoordinates = mouseCoordinates;
    this.angleCoordinates = angleCoordinates;
    this.previousAngleCoordinates = previousAngleCoordinates;
  }

  _createClass(Angles, [{
    key: 'getXAngle',
    value: function getXAngle() {
      var secondAngleCoordinate = second(this.angleCoordinates),
          xAngle = -secondAngleCoordinate; ///

      return xAngle;
    }
  }, {
    key: 'getYAngle',
    value: function getYAngle() {
      var yAngle = 0; ///

      return yAngle;
    }
  }, {
    key: 'getZAngle',
    value: function getZAngle() {
      var firstAngleCoordinate = first(this.angleCoordinates),
          zAngle = +firstAngleCoordinate; ///

      return zAngle;
    }
  }, {
    key: 'mouseUpEventHandler',
    value: function mouseUpEventHandler(mouseCoordinates) {
      this.mouseDown = false;
      this.previousAngleCoordinates = this.angleCoordinates;
    }
  }, {
    key: 'mouseDownEventHandler',
    value: function mouseDownEventHandler(mouseCoordinates) {
      this.mouseDown = true;
      this.mouseCoordinates = mouseCoordinates;
    }
  }, {
    key: 'mouseMoveEventHandler',
    value: function mouseMoveEventHandler(mouseCoordinates) {
      if (this.mouseDown) {
        this.updateAngleCoordinates(mouseCoordinates);
      }
    }
  }, {
    key: 'updateAngleCoordinates',
    value: function updateAngleCoordinates(mouseCoordinates) {
      var scalar = ANGLE_COORDINATES_SCALAR,
          relativeMouseCoordinates = subtract(mouseCoordinates, this.mouseCoordinates),
          relativeAngleCoordinates = scale(relativeMouseCoordinates, scalar);

      this.angleCoordinates = add(this.previousAngleCoordinates, relativeAngleCoordinates);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var mouseDown = false,
          mouseCoordinates = INITIAL_MOUSE_COORDINATES,
          angleCoordinates = INITIAL_ANGLE_COORDINATES,
          previousAngleCoordinates = angleCoordinates,
          angles = new Angles(mouseDown, mouseCoordinates, angleCoordinates, previousAngleCoordinates);

      return angles;
    }
  }]);

  return Angles;
}();

var angles = Angles.fromNothing();

module.exports = angles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvYW5nbGVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJ2ZWMyIiwiY29uc3RhbnRzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsImFkZCIsInN1YnRyYWN0Iiwic2NhbGUiLCJBTkdMRV9DT09SRElOQVRFU19TQ0FMQVIiLCJJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTIiwiSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyIsIkFuZ2xlcyIsIm1vdXNlRG93biIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJhbmdsZUNvb3JkaW5hdGVzIiwicHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzIiwic2Vjb25kQW5nbGVDb29yZGluYXRlIiwieEFuZ2xlIiwieUFuZ2xlIiwiZmlyc3RBbmdsZUNvb3JkaW5hdGUiLCJ6QW5nbGUiLCJ1cGRhdGVBbmdsZUNvb3JkaW5hdGVzIiwic2NhbGFyIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwicmVsYXRpdmVBbmdsZUNvb3JkaW5hdGVzIiwiYW5nbGVzIiwiZnJvbU5vdGhpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsZUFBUixDQUFiO0FBQUEsSUFDTUUsWUFBWUYsUUFBUSxjQUFSLENBRGxCOztBQUdNLElBQUVHLGNBQUYsR0FBcUJKLFNBQXJCLENBQUVJLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ29CRCxjQURwQixDQUNFQyxLQURGO0FBQUEsSUFDU0MsTUFEVCxHQUNvQkYsY0FEcEIsQ0FDU0UsTUFEVDtBQUFBLElBRUVDLEdBRkYsR0FFMkJMLElBRjNCLENBRUVLLEdBRkY7QUFBQSxJQUVPQyxRQUZQLEdBRTJCTixJQUYzQixDQUVPTSxRQUZQO0FBQUEsSUFFaUJDLEtBRmpCLEdBRTJCUCxJQUYzQixDQUVpQk8sS0FGakI7QUFBQSxJQUdFQyx3QkFIRixHQUdxRlAsU0FIckYsQ0FHRU8sd0JBSEY7QUFBQSxJQUc0QkMseUJBSDVCLEdBR3FGUixTQUhyRixDQUc0QlEseUJBSDVCO0FBQUEsSUFHdURDLHlCQUh2RCxHQUdxRlQsU0FIckYsQ0FHdURTLHlCQUh2RDs7SUFLQUMsTTtBQUNKLGtCQUFZQyxTQUFaLEVBQXVCQyxnQkFBdkIsRUFBeUNDLGdCQUF6QyxFQUEyREMsd0JBQTNELEVBQXFGO0FBQUE7O0FBQ25GLFNBQUtILFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxTQUFLQyx3QkFBTCxHQUFnQ0Esd0JBQWhDO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixVQUFNQyx3QkFBd0JaLE9BQU8sS0FBS1UsZ0JBQVosQ0FBOUI7QUFBQSxVQUNNRyxTQUFTLENBQUNELHFCQURoQixDQURVLENBRTZCOztBQUV2QyxhQUFPQyxNQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQU1DLFNBQVMsQ0FBZixDQURVLENBQ1E7O0FBRWxCLGFBQU9BLE1BQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUMsdUJBQXVCaEIsTUFBTSxLQUFLVyxnQkFBWCxDQUE3QjtBQUFBLFVBQ01NLFNBQVMsQ0FBQ0Qsb0JBRGhCLENBRFUsQ0FFNEI7O0FBRXRDLGFBQU9DLE1BQVA7QUFDRDs7O3dDQUVtQlAsZ0IsRUFBa0I7QUFDcEMsV0FBS0QsU0FBTCxHQUFpQixLQUFqQjtBQUNBLFdBQUtHLHdCQUFMLEdBQWdDLEtBQUtELGdCQUFyQztBQUNEOzs7MENBRXFCRCxnQixFQUFrQjtBQUN0QyxXQUFLRCxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsV0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNEOzs7MENBRXFCQSxnQixFQUFrQjtBQUN0QyxVQUFJLEtBQUtELFNBQVQsRUFBb0I7QUFDbEIsYUFBS1Msc0JBQUwsQ0FBNEJSLGdCQUE1QjtBQUNEO0FBQ0Y7OzsyQ0FFc0JBLGdCLEVBQWtCO0FBQ3ZDLFVBQU1TLFNBQVNkLHdCQUFmO0FBQUEsVUFDTWUsMkJBQTJCakIsU0FBU08sZ0JBQVQsRUFBMkIsS0FBS0EsZ0JBQWhDLENBRGpDO0FBQUEsVUFFTVcsMkJBQTJCakIsTUFBTWdCLHdCQUFOLEVBQWdDRCxNQUFoQyxDQUZqQzs7QUFJQSxXQUFLUixnQkFBTCxHQUF3QlQsSUFBSSxLQUFLVSx3QkFBVCxFQUFtQ1Msd0JBQW5DLENBQXhCO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTVosWUFBWSxLQUFsQjtBQUFBLFVBQ01DLG1CQUFtQkoseUJBRHpCO0FBQUEsVUFFTUssbUJBQW1CSix5QkFGekI7QUFBQSxVQUdNSywyQkFBMkJELGdCQUhqQztBQUFBLFVBSU1XLFNBQVMsSUFBSWQsTUFBSixDQUFXQyxTQUFYLEVBQXNCQyxnQkFBdEIsRUFBd0NDLGdCQUF4QyxFQUEwREMsd0JBQTFELENBSmY7O0FBTUEsYUFBT1UsTUFBUDtBQUNEOzs7Ozs7QUFHSCxJQUFNQSxTQUFTZCxPQUFPZSxXQUFQLEVBQWY7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUJILE1BQWpCIiwiZmlsZSI6ImFuZ2xlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHZlYzIgPSByZXF1aXJlKCcuLi9tYXRocy92ZWMyJyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYWRkLCBzdWJ0cmFjdCwgc2NhbGUgfSA9IHZlYzIsXG4gICAgICB7IEFOR0xFX0NPT1JESU5BVEVTX1NDQUxBUiwgSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUywgSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBBbmdsZXMge1xuICBjb25zdHJ1Y3Rvcihtb3VzZURvd24sIG1vdXNlQ29vcmRpbmF0ZXMsIGFuZ2xlQ29vcmRpbmF0ZXMsIHByZXZpb3VzQW5nbGVDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5hbmdsZUNvb3JkaW5hdGVzID0gYW5nbGVDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzQW5nbGVDb29yZGluYXRlcyA9IHByZXZpb3VzQW5nbGVDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldFhBbmdsZSgpIHtcbiAgICBjb25zdCBzZWNvbmRBbmdsZUNvb3JkaW5hdGUgPSBzZWNvbmQodGhpcy5hbmdsZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICB4QW5nbGUgPSAtc2Vjb25kQW5nbGVDb29yZGluYXRlOyAvLy9cblxuICAgIHJldHVybiB4QW5nbGU7XG4gIH1cbiAgXG4gIGdldFlBbmdsZSgpIHtcbiAgICBjb25zdCB5QW5nbGUgPSAwOyAvLy9cbiAgICBcbiAgICByZXR1cm4geUFuZ2xlO1xuICB9XG5cbiAgZ2V0WkFuZ2xlKCkge1xuICAgIGNvbnN0IGZpcnN0QW5nbGVDb29yZGluYXRlID0gZmlyc3QodGhpcy5hbmdsZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICB6QW5nbGUgPSArZmlyc3RBbmdsZUNvb3JkaW5hdGU7IC8vL1xuXG4gICAgcmV0dXJuIHpBbmdsZTtcbiAgfVxuICBcbiAgbW91c2VVcEV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICB0aGlzLnByZXZpb3VzQW5nbGVDb29yZGluYXRlcyA9IHRoaXMuYW5nbGVDb29yZGluYXRlcztcbiAgfVxuXG4gIG1vdXNlRG93bkV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIGlmICh0aGlzLm1vdXNlRG93bikge1xuICAgICAgdGhpcy51cGRhdGVBbmdsZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcykge1xuICAgIGNvbnN0IHNjYWxhciA9IEFOR0xFX0NPT1JESU5BVEVTX1NDQUxBUixcbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzdWJ0cmFjdChtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVDb29yZGluYXRlcyA9IHNjYWxlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGFyKTtcblxuICAgIHRoaXMuYW5nbGVDb29yZGluYXRlcyA9IGFkZCh0aGlzLnByZXZpb3VzQW5nbGVDb29yZGluYXRlcywgcmVsYXRpdmVBbmdsZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBtb3VzZURvd24gPSBmYWxzZSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBhbmdsZUNvb3JkaW5hdGVzID0gSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMgPSBhbmdsZUNvb3JkaW5hdGVzLFxuICAgICAgICAgIGFuZ2xlcyA9IG5ldyBBbmdsZXMobW91c2VEb3duLCBtb3VzZUNvb3JkaW5hdGVzLCBhbmdsZUNvb3JkaW5hdGVzLCBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIGFuZ2xlcztcbiAgfVxufVxuXG5jb25zdCBhbmdsZXMgPSBBbmdsZXMuZnJvbU5vdGhpbmcoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmdsZXM7XG4iXX0=