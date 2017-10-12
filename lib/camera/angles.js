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
    key: 'mouseUpHandler',
    value: function mouseUpHandler(mouseCoordinates) {
      this.mouseDown = false;
      this.previousAngleCoordinates = this.angleCoordinates;
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates) {
      this.mouseDown = true;
      this.mouseCoordinates = mouseCoordinates;
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvYW5nbGVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJ2ZWMyIiwiY29uc3RhbnRzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsImFkZCIsInN1YnRyYWN0Iiwic2NhbGUiLCJBTkdMRV9DT09SRElOQVRFU19TQ0FMQVIiLCJJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTIiwiSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyIsIkFuZ2xlcyIsIm1vdXNlRG93biIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJhbmdsZUNvb3JkaW5hdGVzIiwicHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzIiwic2Vjb25kQW5nbGVDb29yZGluYXRlIiwieEFuZ2xlIiwieUFuZ2xlIiwiZmlyc3RBbmdsZUNvb3JkaW5hdGUiLCJ6QW5nbGUiLCJ1cGRhdGVBbmdsZUNvb3JkaW5hdGVzIiwic2NhbGFyIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwicmVsYXRpdmVBbmdsZUNvb3JkaW5hdGVzIiwiYW5nbGVzIiwiZnJvbU5vdGhpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsZUFBUixDQUFiO0FBQUEsSUFDTUUsWUFBWUYsUUFBUSxjQUFSLENBRGxCOztBQUdNLElBQUVHLGNBQUYsR0FBcUJKLFNBQXJCLENBQUVJLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ29CRCxjQURwQixDQUNFQyxLQURGO0FBQUEsSUFDU0MsTUFEVCxHQUNvQkYsY0FEcEIsQ0FDU0UsTUFEVDtBQUFBLElBRUVDLEdBRkYsR0FFMkJMLElBRjNCLENBRUVLLEdBRkY7QUFBQSxJQUVPQyxRQUZQLEdBRTJCTixJQUYzQixDQUVPTSxRQUZQO0FBQUEsSUFFaUJDLEtBRmpCLEdBRTJCUCxJQUYzQixDQUVpQk8sS0FGakI7QUFBQSxJQUdFQyx3QkFIRixHQUdxRlAsU0FIckYsQ0FHRU8sd0JBSEY7QUFBQSxJQUc0QkMseUJBSDVCLEdBR3FGUixTQUhyRixDQUc0QlEseUJBSDVCO0FBQUEsSUFHdURDLHlCQUh2RCxHQUdxRlQsU0FIckYsQ0FHdURTLHlCQUh2RDs7SUFLQUMsTTtBQUNKLGtCQUFZQyxTQUFaLEVBQXVCQyxnQkFBdkIsRUFBeUNDLGdCQUF6QyxFQUEyREMsd0JBQTNELEVBQXFGO0FBQUE7O0FBQ25GLFNBQUtILFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxTQUFLQyx3QkFBTCxHQUFnQ0Esd0JBQWhDO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixVQUFNQyx3QkFBd0JaLE9BQU8sS0FBS1UsZ0JBQVosQ0FBOUI7QUFBQSxVQUNNRyxTQUFTLENBQUNELHFCQURoQixDQURVLENBRTZCOztBQUV2QyxhQUFPQyxNQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQU1DLFNBQVMsQ0FBZixDQURVLENBQ1E7O0FBRWxCLGFBQU9BLE1BQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUMsdUJBQXVCaEIsTUFBTSxLQUFLVyxnQkFBWCxDQUE3QjtBQUFBLFVBQ01NLFNBQVMsQ0FBQ0Qsb0JBRGhCLENBRFUsQ0FFNEI7O0FBRXRDLGFBQU9DLE1BQVA7QUFDRDs7O21DQUVjUCxnQixFQUFrQjtBQUMvQixXQUFLRCxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsV0FBS0csd0JBQUwsR0FBZ0MsS0FBS0QsZ0JBQXJDO0FBQ0Q7OztxQ0FFZ0JELGdCLEVBQWtCO0FBQ2pDLFdBQUtELFNBQUwsR0FBaUIsSUFBakI7QUFDQSxXQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7OztxQ0FFZ0JBLGdCLEVBQWtCO0FBQ2pDLFVBQUksS0FBS0QsU0FBVCxFQUFvQjtBQUNsQixhQUFLUyxzQkFBTCxDQUE0QlIsZ0JBQTVCO0FBQ0Q7QUFDRjs7OzJDQUVzQkEsZ0IsRUFBa0I7QUFDdkMsVUFBTVMsU0FBU2Qsd0JBQWY7QUFBQSxVQUNNZSwyQkFBMkJqQixTQUFTTyxnQkFBVCxFQUEyQixLQUFLQSxnQkFBaEMsQ0FEakM7QUFBQSxVQUVNVywyQkFBMkJqQixNQUFNZ0Isd0JBQU4sRUFBZ0NELE1BQWhDLENBRmpDOztBQUlBLFdBQUtSLGdCQUFMLEdBQXdCVCxJQUFJLEtBQUtVLHdCQUFULEVBQW1DUyx3QkFBbkMsQ0FBeEI7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNWixZQUFZLEtBQWxCO0FBQUEsVUFDTUMsbUJBQW1CSix5QkFEekI7QUFBQSxVQUVNSyxtQkFBbUJKLHlCQUZ6QjtBQUFBLFVBR01LLDJCQUEyQkQsZ0JBSGpDO0FBQUEsVUFJTVcsU0FBUyxJQUFJZCxNQUFKLENBQVdDLFNBQVgsRUFBc0JDLGdCQUF0QixFQUF3Q0MsZ0JBQXhDLEVBQTBEQyx3QkFBMUQsQ0FKZjs7QUFNQSxhQUFPVSxNQUFQO0FBQ0Q7Ozs7OztBQUdILElBQU1BLFNBQVNkLE9BQU9lLFdBQVAsRUFBZjs7QUFFQUMsT0FBT0MsT0FBUCxHQUFpQkgsTUFBakIiLCJmaWxlIjoiYW5nbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgdmVjMiA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlYzInKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhZGQsIHN1YnRyYWN0LCBzY2FsZSB9ID0gdmVjMixcbiAgICAgIHsgQU5HTEVfQ09PUkRJTkFURVNfU0NBTEFSLCBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTLCBJTklUSUFMX0FOR0xFX0NPT1JESU5BVEVTIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIEFuZ2xlcyB7XG4gIGNvbnN0cnVjdG9yKG1vdXNlRG93biwgbW91c2VDb29yZGluYXRlcywgYW5nbGVDb29yZGluYXRlcywgcHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMgPSBhbmdsZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gcHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0WEFuZ2xlKCkge1xuICAgIGNvbnN0IHNlY29uZEFuZ2xlQ29vcmRpbmF0ZSA9IHNlY29uZCh0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHhBbmdsZSA9IC1zZWNvbmRBbmdsZUNvb3JkaW5hdGU7IC8vL1xuXG4gICAgcmV0dXJuIHhBbmdsZTtcbiAgfVxuICBcbiAgZ2V0WUFuZ2xlKCkge1xuICAgIGNvbnN0IHlBbmdsZSA9IDA7IC8vL1xuICAgIFxuICAgIHJldHVybiB5QW5nbGU7XG4gIH1cblxuICBnZXRaQW5nbGUoKSB7XG4gICAgY29uc3QgZmlyc3RBbmdsZUNvb3JkaW5hdGUgPSBmaXJzdCh0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHpBbmdsZSA9ICtmaXJzdEFuZ2xlQ29vcmRpbmF0ZTsgLy8vXG5cbiAgICByZXR1cm4gekFuZ2xlO1xuICB9XG4gIFxuICBtb3VzZVVwSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICB0aGlzLnByZXZpb3VzQW5nbGVDb29yZGluYXRlcyA9IHRoaXMuYW5nbGVDb29yZGluYXRlcztcbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgaWYgKHRoaXMubW91c2VEb3duKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFuZ2xlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQW5nbGVDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3Qgc2NhbGFyID0gQU5HTEVfQ09PUkRJTkFURVNfU0NBTEFSLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0KG1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMubW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgcmVsYXRpdmVBbmdsZUNvb3JkaW5hdGVzID0gc2NhbGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBzY2FsYXIpO1xuXG4gICAgdGhpcy5hbmdsZUNvb3JkaW5hdGVzID0gYWRkKHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzLCByZWxhdGl2ZUFuZ2xlQ29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG1vdXNlRG93biA9IGZhbHNlLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTLFxuICAgICAgICAgIGFuZ2xlQ29vcmRpbmF0ZXMgPSBJTklUSUFMX0FOR0xFX0NPT1JESU5BVEVTLFxuICAgICAgICAgIHByZXZpb3VzQW5nbGVDb29yZGluYXRlcyA9IGFuZ2xlQ29vcmRpbmF0ZXMsXG4gICAgICAgICAgYW5nbGVzID0gbmV3IEFuZ2xlcyhtb3VzZURvd24sIG1vdXNlQ29vcmRpbmF0ZXMsIGFuZ2xlQ29vcmRpbmF0ZXMsIHByZXZpb3VzQW5nbGVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gYW5nbGVzO1xuICB9XG59XG5cbmNvbnN0IGFuZ2xlcyA9IEFuZ2xlcy5mcm9tTm90aGluZygpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ2xlcztcbiJdfQ==