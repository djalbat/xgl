'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var angles = require('../../angles'),
    zoom = require('../../zoom'),
    Normal = require('../../normal'),
    Rotation = require('../../rotation'),
    Position = require('../../position'),
    Perspective = require('../../perspective'),
    MouseEvents = require('../../mouseEvents');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
    second = arrayUtilities.second;

var App = function () {
  function App(colourShader, textureShader, canvas) {
    _classCallCheck(this, App);

    this.colourShader = colourShader;
    this.textureShader = textureShader;
    this.canvas = canvas;
  }

  _createClass(App, [{
    key: 'addMouseEventHandlers',
    value: function addMouseEventHandlers() {
      var mouseEvents = MouseEvents.fromNothing(this.canvas),
          mouseUpEventHandler = this.mouseUpEventHandler.bind(this),
          mouseDownEventHandler = this.mouseDownEventHandler.bind(this),
          mouseMoveEventHandler = this.mouseMoveEventHandler.bind(this),
          mouseWheelEventHandler = this.mouseWheelEventHandler.bind(this);

      mouseEvents.addMouseUpEventHandler(mouseUpEventHandler);
      mouseEvents.addMouseDownEventHandler(mouseDownEventHandler);
      mouseEvents.addMouseMoveEventHandler(mouseMoveEventHandler);
      mouseEvents.addMouseWheelEventHandler(mouseWheelEventHandler);
    }
  }, {
    key: 'mouseUpEventHandler',
    value: function mouseUpEventHandler(mouseCoordinates) {
      angles.mouseUpEventHandler(mouseCoordinates);
    }
  }, {
    key: 'mouseDownEventHandler',
    value: function mouseDownEventHandler(mouseCoordinates) {
      angles.mouseDownEventHandler(mouseCoordinates);
    }
  }, {
    key: 'mouseMoveEventHandler',
    value: function mouseMoveEventHandler(mouseCoordinates) {
      angles.mouseMoveEventHandler(mouseCoordinates);

      this.render();
    }
  }, {
    key: 'mouseWheelEventHandler',
    value: function mouseWheelEventHandler(delta) {
      zoom.mouseWheelEventHandler(delta);

      this.render();
    }
  }, {
    key: 'resize',
    value: function resize() {
      var clientWidth = this.canvas.getClientWidth(),
          clientHeight = this.canvas.getClientHeight(),
          width = clientWidth,
          ///
      height = clientHeight; ///

      this.canvas.resize(width, height);

      console.log(height);
    }
  }, {
    key: 'render',
    value: function render() {
      var xAxisAngle = angles.getXAxisAngle(),
          yAxisAngle = angles.getYAxisAngle(),
          distance = zoom.getDistance(),
          width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          xAngle = xAxisAngle,
          ///
      zAngle = yAxisAngle,
          ///
      zCoordinate = -Math.max(10, distance),
          ///
      perspective = Perspective.fromWidthAndHeight(width, height),
          rotation = Rotation.fromXAngleAndZAngle(xAngle, zAngle),
          position = Position.fromZCoordinate(zCoordinate),
          normal = Normal.fromRotation(rotation);

      this.drawElements(normal, rotation, position, perspective);
    }
  }, {
    key: 'drawElements',
    value: function drawElements(normal, rotation, position, perspective) {
      var colourCount = this.colourShader.getCount(),
          ///
      textureCount = this.textureShader.getCount(); ///

      this.canvas.clear();

      this.canvas.useShader(this.colourShader);

      this.colourShader.bind(this.canvas);

      this.colourShader.activateTexture(this.canvas);

      this.canvas.render(this.colourShader, normal, rotation, position, perspective);

      this.canvas.useShader(this.textureShader);

      this.textureShader.bind(this.canvas);

      this.textureShader.activateTexture(this.canvas);

      this.canvas.render(this.textureShader, normal, rotation, position, perspective);
    }
  }]);

  return App;
}();

module.exports = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbnRlcm1lZGlhdGUvYXBwLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJhbmdsZXMiLCJ6b29tIiwiTm9ybWFsIiwiUm90YXRpb24iLCJQb3NpdGlvbiIsIlBlcnNwZWN0aXZlIiwiTW91c2VFdmVudHMiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0Iiwic2Vjb25kIiwiQXBwIiwiY29sb3VyU2hhZGVyIiwidGV4dHVyZVNoYWRlciIsImNhbnZhcyIsIm1vdXNlRXZlbnRzIiwiZnJvbU5vdGhpbmciLCJtb3VzZVVwRXZlbnRIYW5kbGVyIiwiYmluZCIsIm1vdXNlRG93bkV2ZW50SGFuZGxlciIsIm1vdXNlTW92ZUV2ZW50SGFuZGxlciIsIm1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJhZGRNb3VzZVVwRXZlbnRIYW5kbGVyIiwiYWRkTW91c2VEb3duRXZlbnRIYW5kbGVyIiwiYWRkTW91c2VNb3ZlRXZlbnRIYW5kbGVyIiwiYWRkTW91c2VXaGVlbEV2ZW50SGFuZGxlciIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJyZW5kZXIiLCJkZWx0YSIsImNsaWVudFdpZHRoIiwiZ2V0Q2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJnZXRDbGllbnRIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsInJlc2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJ4QXhpc0FuZ2xlIiwiZ2V0WEF4aXNBbmdsZSIsInlBeGlzQW5nbGUiLCJnZXRZQXhpc0FuZ2xlIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwieEFuZ2xlIiwiekFuZ2xlIiwiekNvb3JkaW5hdGUiLCJNYXRoIiwibWF4IiwicGVyc3BlY3RpdmUiLCJmcm9tV2lkdGhBbmRIZWlnaHQiLCJyb3RhdGlvbiIsImZyb21YQW5nbGVBbmRaQW5nbGUiLCJwb3NpdGlvbiIsImZyb21aQ29vcmRpbmF0ZSIsIm5vcm1hbCIsImZyb21Sb3RhdGlvbiIsImRyYXdFbGVtZW50cyIsImNvbG91ckNvdW50IiwiZ2V0Q291bnQiLCJ0ZXh0dXJlQ291bnQiLCJjbGVhciIsInVzZVNoYWRlciIsImFjdGl2YXRlVGV4dHVyZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsU0FBU0QsUUFBUSxjQUFSLENBQWY7QUFBQSxJQUNNRSxPQUFPRixRQUFRLFlBQVIsQ0FEYjtBQUFBLElBRU1HLFNBQVNILFFBQVEsY0FBUixDQUZmO0FBQUEsSUFHTUksV0FBV0osUUFBUSxnQkFBUixDQUhqQjtBQUFBLElBSU1LLFdBQVdMLFFBQVEsZ0JBQVIsQ0FKakI7QUFBQSxJQUtNTSxjQUFjTixRQUFRLG1CQUFSLENBTHBCO0FBQUEsSUFNTU8sY0FBY1AsUUFBUSxtQkFBUixDQU5wQjs7QUFRTSxJQUFFUSxjQUFGLEdBQXFCVCxTQUFyQixDQUFFUyxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNvQkQsY0FEcEIsQ0FDRUMsS0FERjtBQUFBLElBQ1NDLE1BRFQsR0FDb0JGLGNBRHBCLENBQ1NFLE1BRFQ7O0lBR0FDLEc7QUFDSixlQUFZQyxZQUFaLEVBQTBCQyxhQUExQixFQUF5Q0MsTUFBekMsRUFBaUQ7QUFBQTs7QUFDL0MsU0FBS0YsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7OzRDQUV1QjtBQUN0QixVQUFNQyxjQUFjUixZQUFZUyxXQUFaLENBQXdCLEtBQUtGLE1BQTdCLENBQXBCO0FBQUEsVUFDTUcsc0JBQXNCLEtBQUtBLG1CQUFMLENBQXlCQyxJQUF6QixDQUE4QixJQUE5QixDQUQ1QjtBQUFBLFVBRU1DLHdCQUF3QixLQUFLQSxxQkFBTCxDQUEyQkQsSUFBM0IsQ0FBZ0MsSUFBaEMsQ0FGOUI7QUFBQSxVQUdNRSx3QkFBd0IsS0FBS0EscUJBQUwsQ0FB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QWtFSixXQUFsRTs7QUFFQSxXQUFLckMsTUFBTCxDQUFZa0QsU0FBWixDQUFzQixLQUFLbkQsYUFBM0I7O0FBRUEsV0FBS0EsYUFBTCxDQUFtQkssSUFBbkIsQ0FBd0IsS0FBS0osTUFBN0I7O0FBRUEsV0FBS0QsYUFBTCxDQUFtQm9ELGVBQW5CLENBQW1DLEtBQUtuRCxNQUF4Qzs7QUFFQSxXQUFLQSxNQUFMLENBQVlhLE1BQVosQ0FBbUIsS0FBS2QsYUFBeEIsRUFBdUM0QyxNQUF2QyxFQUErQ0osUUFBL0MsRUFBeURFLFFBQXpELEVBQW1FSixXQUFuRTtBQUNEOzs7Ozs7QUFHSGUsT0FBT0MsT0FBUCxHQUFpQnhELEdBQWpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IGFuZ2xlcyA9IHJlcXVpcmUoJy4uLy4uL2FuZ2xlcycpLFxuICAgICAgem9vbSA9IHJlcXVpcmUoJy4uLy4uL3pvb20nKSxcbiAgICAgIE5vcm1hbCA9IHJlcXVpcmUoJy4uLy4uL25vcm1hbCcpLFxuICAgICAgUm90YXRpb24gPSByZXF1aXJlKCcuLi8uLi9yb3RhdGlvbicpLFxuICAgICAgUG9zaXRpb24gPSByZXF1aXJlKCcuLi8uLi9wb3NpdGlvbicpLFxuICAgICAgUGVyc3BlY3RpdmUgPSByZXF1aXJlKCcuLi8uLi9wZXJzcGVjdGl2ZScpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuLi8uLi9tb3VzZUV2ZW50cycpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3Rvcihjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIsIGNhbnZhcykge1xuICAgIHRoaXMuY29sb3VyU2hhZGVyID0gY29sb3VyU2hhZGVyO1xuICAgIHRoaXMudGV4dHVyZVNoYWRlciA9IHRleHR1cmVTaGFkZXI7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICBhZGRNb3VzZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgY29uc3QgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZyh0aGlzLmNhbnZhcyksXG4gICAgICAgICAgbW91c2VVcEV2ZW50SGFuZGxlciA9IHRoaXMubW91c2VVcEV2ZW50SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlRG93bkV2ZW50SGFuZGxlciA9IHRoaXMubW91c2VEb3duRXZlbnRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VNb3ZlRXZlbnRIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVFdmVudEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVyID0gdGhpcy5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVVwRXZlbnRIYW5kbGVyKG1vdXNlVXBFdmVudEhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlRG93bkV2ZW50SGFuZGxlcihtb3VzZURvd25FdmVudEhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUV2ZW50SGFuZGxlcihtb3VzZU1vdmVFdmVudEhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxFdmVudEhhbmRsZXIobW91c2VXaGVlbEV2ZW50SGFuZGxlcik7XG5cbiAgfVxuXG4gIG1vdXNlVXBFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIGFuZ2xlcy5tb3VzZVVwRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgbW91c2VEb3duRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICBhbmdsZXMubW91c2VEb3duRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgbW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICBhbmdsZXMubW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpIHtcbiAgICB6b29tLm1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDsgIC8vL1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgY29uc29sZS5sb2coaGVpZ2h0KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHhBeGlzQW5nbGUgPSBhbmdsZXMuZ2V0WEF4aXNBbmdsZSgpLFxuICAgICAgICAgIHlBeGlzQW5nbGUgPSBhbmdsZXMuZ2V0WUF4aXNBbmdsZSgpLFxuICAgICAgICAgIGRpc3RhbmNlID0gem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIHdpZHRoID0gdGhpcy5jYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICB4QW5nbGUgPSB4QXhpc0FuZ2xlLCAgLy8vXG4gICAgICAgICAgekFuZ2xlID0geUF4aXNBbmdsZSwgLy8vXG4gICAgICAgICAgekNvb3JkaW5hdGUgPSAtTWF0aC5tYXgoMTAsIGRpc3RhbmNlKSwgLy8vXG4gICAgICAgICAgcGVyc3BlY3RpdmUgPSBQZXJzcGVjdGl2ZS5mcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgcm90YXRpb24gPSBSb3RhdGlvbi5mcm9tWEFuZ2xlQW5kWkFuZ2xlKHhBbmdsZSwgekFuZ2xlKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IFBvc2l0aW9uLmZyb21aQ29vcmRpbmF0ZSh6Q29vcmRpbmF0ZSksXG4gICAgICAgICAgbm9ybWFsID0gTm9ybWFsLmZyb21Sb3RhdGlvbihyb3RhdGlvbik7XG5cbiAgICB0aGlzLmRyYXdFbGVtZW50cyhub3JtYWwsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcGVyc3BlY3RpdmUpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKG5vcm1hbCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSkge1xuICAgIGNvbnN0IGNvbG91ckNvdW50ID0gdGhpcy5jb2xvdXJTaGFkZXIuZ2V0Q291bnQoKSwgLy8vXG4gICAgICAgICAgdGV4dHVyZUNvdW50ID0gdGhpcy50ZXh0dXJlU2hhZGVyLmdldENvdW50KCk7IC8vL1xuXG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVNoYWRlcih0aGlzLmNvbG91clNoYWRlcik7XG5cbiAgICB0aGlzLmNvbG91clNoYWRlci5iaW5kKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY29sb3VyU2hhZGVyLmFjdGl2YXRlVGV4dHVyZSh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNhbnZhcy5yZW5kZXIodGhpcy5jb2xvdXJTaGFkZXIsIG5vcm1hbCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSk7XG5cbiAgICB0aGlzLmNhbnZhcy51c2VTaGFkZXIodGhpcy50ZXh0dXJlU2hhZGVyKTtcblxuICAgIHRoaXMudGV4dHVyZVNoYWRlci5iaW5kKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMudGV4dHVyZVNoYWRlci5hY3RpdmF0ZVRleHR1cmUodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMudGV4dHVyZVNoYWRlciwgbm9ybWFsLCByb3RhdGlvbiwgcG9zaXRpb24sIHBlcnNwZWN0aXZlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcbiJdfQ==