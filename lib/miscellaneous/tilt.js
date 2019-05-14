'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    arrayUtilities = require('../utilities/array');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    add3 = vectorMaths.add3,
    subtract3 = vectorMaths.subtract3,
    scale3 = vectorMaths.scale3,
    ANGLE_COORDINATES_SCALAR = constants.ANGLE_COORDINATES_SCALAR,
    INITIAL_MOUSE_COORDINATES = constants.INITIAL_MOUSE_COORDINATES,
    INITIAL_ANGLE_COORDINATES = constants.INITIAL_ANGLE_COORDINATES;

var Tilt = function () {
  function Tilt(mouseCoordinates, angleCoordinates, previousMouseCoordinates, previousAngleCoordinates) {
    _classCallCheck(this, Tilt);

    this.mouseCoordinates = mouseCoordinates;
    this.angleCoordinates = angleCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
    this.previousAngleCoordinates = previousAngleCoordinates;
  }

  _createClass(Tilt, [{
    key: 'getXAngle',
    value: function getXAngle() {
      var secondAngleCoordinate = second(this.angleCoordinates),
          xAngle = secondAngleCoordinate; ///

      return xAngle;
    }
  }, {
    key: 'getYAngle',
    value: function getYAngle() {
      var firstAngleCoordinate = first(this.angleCoordinates),
          yAngle = -firstAngleCoordinate; ///

      return yAngle;
    }
  }, {
    key: 'getZAngle',
    value: function getZAngle() {
      var zAngle = 0;

      return zAngle;
    }
  }, {
    key: 'getAngles',
    value: function getAngles() {
      var xAngle = this.getXAngle(),
          yAngle = this.getYAngle(),
          zAngle = this.getZAngle(),
          angles = [xAngle, yAngle, zAngle];

      return angles;
    }
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler() {
      this.previousAngleCoordinates = this.angleCoordinates;
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler() {
      this.previousMouseCoordinates = this.mouseCoordinates;
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates, mouseDown, shiftKeyDown) {
      this.mouseCoordinates = mouseCoordinates;

      if (mouseDown && !shiftKeyDown) {
        this.updateAngleCoordinates();
      }
    }
  }, {
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {
      if (!shiftKeyDown) {
        this.previousMouseCoordinates = this.mouseCoordinates;

        this.previousAngleCoordinates = this.angleCoordinates;
      }
    }
  }, {
    key: 'updateAngleCoordinates',
    value: function updateAngleCoordinates() {
      var scalar = ANGLE_COORDINATES_SCALAR,
          relativeMouseCoordinates = subtract3(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeAngleCoordinates = scale3(relativeMouseCoordinates, scalar);

      this.angleCoordinates = add3(this.previousAngleCoordinates, relativeAngleCoordinates);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var mouseCoordinates = INITIAL_MOUSE_COORDINATES,
          angleCoordinates = INITIAL_ANGLE_COORDINATES,
          previousAngleCoordinates = angleCoordinates,
          ///
      previousMouseCoordinates = mouseCoordinates,
          ///
      tilt = new Tilt(mouseCoordinates, angleCoordinates, previousMouseCoordinates, previousAngleCoordinates);

      return tilt;
    }
  }]);

  return Tilt;
}();

module.exports = Tilt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3RpbHQuanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwicmVxdWlyZSIsInZlY3Rvck1hdGhzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsImFkZDMiLCJzdWJ0cmFjdDMiLCJzY2FsZTMiLCJBTkdMRV9DT09SRElOQVRFU19TQ0FMQVIiLCJJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTIiwiSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyIsIlRpbHQiLCJtb3VzZUNvb3JkaW5hdGVzIiwiYW5nbGVDb29yZGluYXRlcyIsInByZXZpb3VzTW91c2VDb29yZGluYXRlcyIsInByZXZpb3VzQW5nbGVDb29yZGluYXRlcyIsInNlY29uZEFuZ2xlQ29vcmRpbmF0ZSIsInhBbmdsZSIsImZpcnN0QW5nbGVDb29yZGluYXRlIiwieUFuZ2xlIiwiekFuZ2xlIiwiZ2V0WEFuZ2xlIiwiZ2V0WUFuZ2xlIiwiZ2V0WkFuZ2xlIiwiYW5nbGVzIiwibW91c2VEb3duIiwic2hpZnRLZXlEb3duIiwidXBkYXRlQW5nbGVDb29yZGluYXRlcyIsInNjYWxhciIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInJlbGF0aXZlQW5nbGVDb29yZGluYXRlcyIsInRpbHQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxpQkFBUixDQURwQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxvQkFBUixDQUZ2Qjs7SUFJUUcsSyxHQUFrQkQsYyxDQUFsQkMsSztJQUFPQyxNLEdBQVdGLGMsQ0FBWEUsTTtJQUNQQyxJLEdBQTRCSixXLENBQTVCSSxJO0lBQU1DLFMsR0FBc0JMLFcsQ0FBdEJLLFM7SUFBV0MsTSxHQUFXTixXLENBQVhNLE07SUFDakJDLHdCLEdBQW1GVCxTLENBQW5GUyx3QjtJQUEwQkMseUIsR0FBeURWLFMsQ0FBekRVLHlCO0lBQTJCQyx5QixHQUE4QlgsUyxDQUE5QlcseUI7O0lBRXZEQyxJO0FBQ0osZ0JBQVlDLGdCQUFaLEVBQThCQyxnQkFBOUIsRUFBZ0RDLHdCQUFoRCxFQUEwRUMsd0JBQTFFLEVBQW9HO0FBQUE7O0FBQ2xHLFNBQUtILGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0Msd0JBQUwsR0FBZ0NBLHdCQUFoQztBQUNBLFNBQUtDLHdCQUFMLEdBQWdDQSx3QkFBaEM7QUFDRDs7OztnQ0FFVztBQUNWLFVBQU1DLHdCQUF3QlosT0FBTyxLQUFLUyxnQkFBWixDQUE5QjtBQUFBLFVBQ01JLFNBQVNELHFCQURmLENBRFUsQ0FFNEI7O0FBRXRDLGFBQU9DLE1BQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUMsdUJBQXVCZixNQUFNLEtBQUtVLGdCQUFYLENBQTdCO0FBQUEsVUFDTU0sU0FBUyxDQUFDRCxvQkFEaEIsQ0FEVSxDQUU0Qjs7QUFFdEMsYUFBT0MsTUFBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNQyxTQUFTLENBQWY7O0FBRUEsYUFBT0EsTUFBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNSCxTQUFTLEtBQUtJLFNBQUwsRUFBZjtBQUFBLFVBQ01GLFNBQVMsS0FBS0csU0FBTCxFQURmO0FBQUEsVUFFTUYsU0FBUyxLQUFLRyxTQUFMLEVBRmY7QUFBQSxVQUdNQyxTQUFTLENBQ1BQLE1BRE8sRUFFUEUsTUFGTyxFQUdQQyxNQUhPLENBSGY7O0FBU0EsYUFBT0ksTUFBUDtBQUNEOzs7cUNBRWdCO0FBQ2YsV0FBS1Qsd0JBQUwsR0FBZ0MsS0FBS0YsZ0JBQXJDO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsV0FBS0Msd0JBQUwsR0FBZ0MsS0FBS0YsZ0JBQXJDO0FBQ0Q7OztxQ0FFZ0JBLGdCLEVBQWtCYSxTLEVBQVdDLFksRUFBYztBQUMxRCxXQUFLZCxnQkFBTCxHQUF3QkEsZ0JBQXhCOztBQUVBLFVBQUlhLGFBQWEsQ0FBQ0MsWUFBbEIsRUFBZ0M7QUFDOUIsYUFBS0Msc0JBQUw7QUFDRDtBQUNGOzs7b0NBRWVELFksRUFBYztBQUM1QixVQUFJLENBQUNBLFlBQUwsRUFBbUI7QUFDakIsYUFBS1osd0JBQUwsR0FBZ0MsS0FBS0YsZ0JBQXJDOztBQUVBLGFBQUtHLHdCQUFMLEdBQWdDLEtBQUtGLGdCQUFyQztBQUNEO0FBQ0Y7Ozs2Q0FFd0I7QUFDdkIsVUFBTWUsU0FBU3BCLHdCQUFmO0FBQUEsVUFDTXFCLDJCQUEyQnZCLFVBQVUsS0FBS00sZ0JBQWYsRUFBaUMsS0FBS0Usd0JBQXRDLENBRGpDO0FBQUEsVUFFTWdCLDJCQUEyQnZCLE9BQU9zQix3QkFBUCxFQUFpQ0QsTUFBakMsQ0FGakM7O0FBSUEsV0FBS2YsZ0JBQUwsR0FBd0JSLEtBQUssS0FBS1Usd0JBQVYsRUFBb0NlLHdCQUFwQyxDQUF4QjtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1sQixtQkFBbUJILHlCQUF6QjtBQUFBLFVBQ01JLG1CQUFtQkgseUJBRHpCO0FBQUEsVUFFTUssMkJBQTJCRixnQkFGakM7QUFBQSxVQUVvRDtBQUM5Q0MsaUNBQTJCRixnQkFIakM7QUFBQSxVQUdvRDtBQUM5Q21CLGFBQU8sSUFBSXBCLElBQUosQ0FBU0MsZ0JBQVQsRUFBMkJDLGdCQUEzQixFQUE2Q0Msd0JBQTdDLEVBQXVFQyx3QkFBdkUsQ0FKYjs7QUFNQSxhQUFPZ0IsSUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnRCLElBQWpCIiwiZmlsZSI6InRpbHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGFkZDMsIHN1YnRyYWN0Mywgc2NhbGUzIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgQU5HTEVfQ09PUkRJTkFURVNfU0NBTEFSLCBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTLCBJTklUSUFMX0FOR0xFX0NPT1JESU5BVEVTIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIFRpbHQge1xuICBjb25zdHJ1Y3Rvcihtb3VzZUNvb3JkaW5hdGVzLCBhbmdsZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzQW5nbGVDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5hbmdsZUNvb3JkaW5hdGVzID0gYW5nbGVDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzQW5nbGVDb29yZGluYXRlcyA9IHByZXZpb3VzQW5nbGVDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldFhBbmdsZSgpIHtcbiAgICBjb25zdCBzZWNvbmRBbmdsZUNvb3JkaW5hdGUgPSBzZWNvbmQodGhpcy5hbmdsZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICB4QW5nbGUgPSBzZWNvbmRBbmdsZUNvb3JkaW5hdGU7IC8vL1xuXG4gICAgcmV0dXJuIHhBbmdsZTtcbiAgfVxuICBcbiAgZ2V0WUFuZ2xlKCkge1xuICAgIGNvbnN0IGZpcnN0QW5nbGVDb29yZGluYXRlID0gZmlyc3QodGhpcy5hbmdsZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICB5QW5nbGUgPSAtZmlyc3RBbmdsZUNvb3JkaW5hdGU7IC8vL1xuXG4gICAgcmV0dXJuIHlBbmdsZTtcbiAgfVxuXG4gIGdldFpBbmdsZSgpIHtcbiAgICBjb25zdCB6QW5nbGUgPSAwO1xuXG4gICAgcmV0dXJuIHpBbmdsZTtcbiAgfVxuICBcbiAgZ2V0QW5nbGVzKCkge1xuICAgIGNvbnN0IHhBbmdsZSA9IHRoaXMuZ2V0WEFuZ2xlKCksXG4gICAgICAgICAgeUFuZ2xlID0gdGhpcy5nZXRZQW5nbGUoKSxcbiAgICAgICAgICB6QW5nbGUgPSB0aGlzLmdldFpBbmdsZSgpLFxuICAgICAgICAgIGFuZ2xlcyA9IFtcbiAgICAgICAgICAgIHhBbmdsZSxcbiAgICAgICAgICAgIHlBbmdsZSxcbiAgICAgICAgICAgIHpBbmdsZVxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIGFuZ2xlcztcbiAgfVxuICBcbiAgbW91c2VVcEhhbmRsZXIoKSB7XG4gICAgdGhpcy5wcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMgPSB0aGlzLmFuZ2xlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKCkge1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG5cbiAgICBpZiAobW91c2VEb3duICYmICFzaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMudXBkYXRlQW5nbGVDb29yZGluYXRlcygpO1xuICAgIH1cbiAgfVxuXG4gIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pIHtcbiAgICBpZiAoIXNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG5cbiAgICAgIHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gdGhpcy5hbmdsZUNvb3JkaW5hdGVzO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlQ29vcmRpbmF0ZXMoKSB7XG4gICAgY29uc3Qgc2NhbGFyID0gQU5HTEVfQ09PUkRJTkFURVNfU0NBTEFSLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Myh0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICByZWxhdGl2ZUFuZ2xlQ29vcmRpbmF0ZXMgPSBzY2FsZTMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBzY2FsYXIpO1xuXG4gICAgdGhpcy5hbmdsZUNvb3JkaW5hdGVzID0gYWRkMyh0aGlzLnByZXZpb3VzQW5nbGVDb29yZGluYXRlcywgcmVsYXRpdmVBbmdsZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBtb3VzZUNvb3JkaW5hdGVzID0gSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBhbmdsZUNvb3JkaW5hdGVzID0gSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMgPSBhbmdsZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcywgIC8vL1xuICAgICAgICAgIHRpbHQgPSBuZXcgVGlsdChtb3VzZUNvb3JkaW5hdGVzLCBhbmdsZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzQW5nbGVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRpbHQ7XG4iXX0=