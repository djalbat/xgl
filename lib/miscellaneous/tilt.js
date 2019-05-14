'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    arrayUtilities = require('../utilities/array');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    add2 = vectorMaths.add2,
    scale2 = vectorMaths.scale2,
    subtract2 = vectorMaths.subtract2,
    ANGLES_SCALAR = constants.ANGLES_SCALAR,
    INITIAL_ANGLES = constants.INITIAL_ANGLES,
    INITIAL_MOUSE_COORDINATES = constants.INITIAL_MOUSE_COORDINATES;

var Tilt = function () {
  function Tilt(angles, previousAngles, mouseCoordinates, previousMouseCoordinates) {
    _classCallCheck(this, Tilt);

    this.angles = angles;
    this.previousAngles = previousAngles;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  _createClass(Tilt, [{
    key: 'getXAngle',
    value: function getXAngle() {
      var secondAngle = second(this.angles),
          xAngle = secondAngle; ///

      return xAngle;
    }
  }, {
    key: 'getYAngle',
    value: function getYAngle() {
      var firstAngle = first(this.angles),
          yAngle = -firstAngle; ///

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
      ///
      var xAngle = this.getXAngle(),
          yAngle = this.getYAngle(),
          zAngle = this.getZAngle(),
          angles = [xAngle, yAngle, zAngle];

      return angles;
    }
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler() {
      this.previousAngles = this.angles;
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
        this.updateAngles();
      }
    }
  }, {
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {
      if (!shiftKeyDown) {
        this.previousAngles = this.angles;

        this.previousMouseCoordinates = this.mouseCoordinates;
      }
    }
  }, {
    key: 'updateAngles',
    value: function updateAngles() {
      var scalar = ANGLES_SCALAR,
          relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeAngles = scale2(relativeMouseCoordinates, scalar);

      this.angles = add2(this.previousAngles, relativeAngles);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var angles = INITIAL_ANGLES,
          previousAngles = angles,
          ///
      mouseCoordinates = INITIAL_MOUSE_COORDINATES,
          previousMouseCoordinates = mouseCoordinates,
          ///
      tilt = new Tilt(angles, previousAngles, mouseCoordinates, previousMouseCoordinates);

      return tilt;
    }
  }]);

  return Tilt;
}();

module.exports = Tilt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3RpbHQuanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwicmVxdWlyZSIsInZlY3Rvck1hdGhzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsImFkZDIiLCJzY2FsZTIiLCJzdWJ0cmFjdDIiLCJBTkdMRVNfU0NBTEFSIiwiSU5JVElBTF9BTkdMRVMiLCJJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTIiwiVGlsdCIsImFuZ2xlcyIsInByZXZpb3VzQW5nbGVzIiwibW91c2VDb29yZGluYXRlcyIsInByZXZpb3VzTW91c2VDb29yZGluYXRlcyIsInNlY29uZEFuZ2xlIiwieEFuZ2xlIiwiZmlyc3RBbmdsZSIsInlBbmdsZSIsInpBbmdsZSIsImdldFhBbmdsZSIsImdldFlBbmdsZSIsImdldFpBbmdsZSIsIm1vdXNlRG93biIsInNoaWZ0S2V5RG93biIsInVwZGF0ZUFuZ2xlcyIsInNjYWxhciIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInJlbGF0aXZlQW5nbGVzIiwidGlsdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLG9CQUFSLENBRnZCOztJQUlRRyxLLEdBQWtCRCxjLENBQWxCQyxLO0lBQU9DLE0sR0FBV0YsYyxDQUFYRSxNO0lBQ1BDLEksR0FBNEJKLFcsQ0FBNUJJLEk7SUFBTUMsTSxHQUFzQkwsVyxDQUF0QkssTTtJQUFRQyxTLEdBQWNOLFcsQ0FBZE0sUztJQUNkQyxhLEdBQTZEVCxTLENBQTdEUyxhO0lBQWVDLGMsR0FBOENWLFMsQ0FBOUNVLGM7SUFBZ0JDLHlCLEdBQThCWCxTLENBQTlCVyx5Qjs7SUFFakNDLEk7QUFDSixnQkFBWUMsTUFBWixFQUFvQkMsY0FBcEIsRUFBb0NDLGdCQUFwQyxFQUFzREMsd0JBQXRELEVBQWdGO0FBQUE7O0FBQzlFLFNBQUtILE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLHdCQUFMLEdBQWdDQSx3QkFBaEM7QUFDRDs7OztnQ0FFVztBQUNWLFVBQU1DLGNBQWNaLE9BQU8sS0FBS1EsTUFBWixDQUFwQjtBQUFBLFVBQ01LLFNBQVNELFdBRGYsQ0FEVSxDQUVrQjs7QUFFNUIsYUFBT0MsTUFBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNQyxhQUFhZixNQUFNLEtBQUtTLE1BQVgsQ0FBbkI7QUFBQSxVQUNNTyxTQUFTLENBQUNELFVBRGhCLENBRFUsQ0FFa0I7O0FBRTVCLGFBQU9DLE1BQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUMsU0FBUyxDQUFmOztBQUVBLGFBQU9BLE1BQVA7QUFDRDs7O2dDQUVXO0FBQUU7QUFDWixVQUFNSCxTQUFTLEtBQUtJLFNBQUwsRUFBZjtBQUFBLFVBQ01GLFNBQVMsS0FBS0csU0FBTCxFQURmO0FBQUEsVUFFTUYsU0FBUyxLQUFLRyxTQUFMLEVBRmY7QUFBQSxVQUdNWCxTQUFTLENBQ1BLLE1BRE8sRUFFUEUsTUFGTyxFQUdQQyxNQUhPLENBSGY7O0FBU0EsYUFBT1IsTUFBUDtBQUNEOzs7cUNBRWdCO0FBQ2YsV0FBS0MsY0FBTCxHQUFzQixLQUFLRCxNQUEzQjtBQUNEOzs7dUNBRWtCO0FBQ2pCLFdBQUtHLHdCQUFMLEdBQWdDLEtBQUtELGdCQUFyQztBQUNEOzs7cUNBRWdCQSxnQixFQUFrQlUsUyxFQUFXQyxZLEVBQWM7QUFDMUQsV0FBS1gsZ0JBQUwsR0FBd0JBLGdCQUF4Qjs7QUFFQSxVQUFJVSxhQUFhLENBQUNDLFlBQWxCLEVBQWdDO0FBQzlCLGFBQUtDLFlBQUw7QUFDRDtBQUNGOzs7b0NBRWVELFksRUFBYztBQUM1QixVQUFJLENBQUNBLFlBQUwsRUFBbUI7QUFDakIsYUFBS1osY0FBTCxHQUFzQixLQUFLRCxNQUEzQjs7QUFFQSxhQUFLRyx3QkFBTCxHQUFnQyxLQUFLRCxnQkFBckM7QUFDRDtBQUNGOzs7bUNBRWM7QUFDYixVQUFNYSxTQUFTbkIsYUFBZjtBQUFBLFVBQ01vQiwyQkFBMkJyQixVQUFVLEtBQUtPLGdCQUFmLEVBQWlDLEtBQUtDLHdCQUF0QyxDQURqQztBQUFBLFVBRU1jLGlCQUFpQnZCLE9BQU9zQix3QkFBUCxFQUFpQ0QsTUFBakMsQ0FGdkI7O0FBSUEsV0FBS2YsTUFBTCxHQUFjUCxLQUFLLEtBQUtRLGNBQVYsRUFBMEJnQixjQUExQixDQUFkO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTWpCLFNBQVNILGNBQWY7QUFBQSxVQUNNSSxpQkFBaUJELE1BRHZCO0FBQUEsVUFDZ0M7QUFDMUJFLHlCQUFtQkoseUJBRnpCO0FBQUEsVUFHTUssMkJBQTJCRCxnQkFIakM7QUFBQSxVQUdvRDtBQUM5Q2dCLGFBQU8sSUFBSW5CLElBQUosQ0FBU0MsTUFBVCxFQUFpQkMsY0FBakIsRUFBaUNDLGdCQUFqQyxFQUFtREMsd0JBQW5ELENBSmI7O0FBTUEsYUFBT2UsSUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnJCLElBQWpCIiwiZmlsZSI6InRpbHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGFkZDIsIHNjYWxlMiwgc3VidHJhY3QyIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgQU5HTEVTX1NDQUxBUiwgSU5JVElBTF9BTkdMRVMsIElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgVGlsdCB7XG4gIGNvbnN0cnVjdG9yKGFuZ2xlcywgcHJldmlvdXNBbmdsZXMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMuYW5nbGVzID0gYW5nbGVzO1xuICAgIHRoaXMucHJldmlvdXNBbmdsZXMgPSBwcmV2aW91c0FuZ2xlcztcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0WEFuZ2xlKCkge1xuICAgIGNvbnN0IHNlY29uZEFuZ2xlID0gc2Vjb25kKHRoaXMuYW5nbGVzKSxcbiAgICAgICAgICB4QW5nbGUgPSBzZWNvbmRBbmdsZTsgLy8vXG5cbiAgICByZXR1cm4geEFuZ2xlO1xuICB9XG4gIFxuICBnZXRZQW5nbGUoKSB7XG4gICAgY29uc3QgZmlyc3RBbmdsZSA9IGZpcnN0KHRoaXMuYW5nbGVzKSxcbiAgICAgICAgICB5QW5nbGUgPSAtZmlyc3RBbmdsZTsgLy8vXG5cbiAgICByZXR1cm4geUFuZ2xlO1xuICB9XG5cbiAgZ2V0WkFuZ2xlKCkge1xuICAgIGNvbnN0IHpBbmdsZSA9IDA7XG5cbiAgICByZXR1cm4gekFuZ2xlO1xuICB9XG4gIFxuICBnZXRBbmdsZXMoKSB7IC8vL1xuICAgIGNvbnN0IHhBbmdsZSA9IHRoaXMuZ2V0WEFuZ2xlKCksXG4gICAgICAgICAgeUFuZ2xlID0gdGhpcy5nZXRZQW5nbGUoKSxcbiAgICAgICAgICB6QW5nbGUgPSB0aGlzLmdldFpBbmdsZSgpLFxuICAgICAgICAgIGFuZ2xlcyA9IFtcbiAgICAgICAgICAgIHhBbmdsZSxcbiAgICAgICAgICAgIHlBbmdsZSxcbiAgICAgICAgICAgIHpBbmdsZVxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIGFuZ2xlcztcbiAgfVxuICBcbiAgbW91c2VVcEhhbmRsZXIoKSB7XG4gICAgdGhpcy5wcmV2aW91c0FuZ2xlcyA9IHRoaXMuYW5nbGVzO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcigpIHtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuXG4gICAgaWYgKG1vdXNlRG93biAmJiAhc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFuZ2xlcygpO1xuICAgIH1cbiAgfVxuXG4gIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pIHtcbiAgICBpZiAoIXNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5wcmV2aW91c0FuZ2xlcyA9IHRoaXMuYW5nbGVzO1xuXG4gICAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgICB9XG4gIH1cblxuICB1cGRhdGVBbmdsZXMoKSB7XG4gICAgY29uc3Qgc2NhbGFyID0gQU5HTEVTX1NDQUxBUixcbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzdWJ0cmFjdDIodGhpcy5tb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgcmVsYXRpdmVBbmdsZXMgPSBzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBzY2FsYXIpO1xuXG4gICAgdGhpcy5hbmdsZXMgPSBhZGQyKHRoaXMucHJldmlvdXNBbmdsZXMsIHJlbGF0aXZlQW5nbGVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhbmdsZXMgPSBJTklUSUFMX0FOR0xFUyxcbiAgICAgICAgICBwcmV2aW91c0FuZ2xlcyA9IGFuZ2xlcywgIC8vL1xuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTLFxuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXMsICAvLy9cbiAgICAgICAgICB0aWx0ID0gbmV3IFRpbHQoYW5nbGVzLCBwcmV2aW91c0FuZ2xlcywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0aWx0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGlsdDtcbiJdfQ==