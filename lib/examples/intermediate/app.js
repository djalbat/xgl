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
  function App(counts, colourShader, textureShader, canvas) {
    _classCallCheck(this, App);

    this.counts = counts;
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
      var firstCount = first(this.counts),
          secondCount = second(this.counts),
          colourCount = firstCount,
          ///
      textureCount = secondCount; ///

      this.canvas.clear();

      this.colourShader.bind(this.canvas);

      this.canvas.useShader(this.colourShader);

      this.colourShader.activateTexture(this.canvas);

      this.canvas.render(this.colourShader, normal, rotation, position, perspective);

      this.canvas.drawElements(colourCount);

      this.textureShader.bind(this.canvas);

      this.canvas.useShader(this.textureShader);

      this.textureShader.activateTexture(this.canvas);

      this.canvas.render(this.textureShader, normal, rotation, position, perspective);

      this.canvas.drawElements(textureCount);
    }
  }]);

  return App;
}();

module.exports = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbnRlcm1lZGlhdGUvYXBwLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJhbmdsZXMiLCJ6b29tIiwiTm9ybWFsIiwiUm90YXRpb24iLCJQb3NpdGlvbiIsIlBlcnNwZWN0aXZlIiwiTW91c2VFdmVudHMiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0Iiwic2Vjb25kIiwiQXBwIiwiY291bnRzIiwiY29sb3VyU2hhZGVyIiwidGV4dHVyZVNoYWRlciIsImNhbnZhcyIsIm1vdXNlRXZlbnRzIiwiZnJvbU5vdGhpbmciLCJtb3VzZVVwRXZlbnRIYW5kbGVyIiwiYmluZCIsIm1vdXNlRG93bkV2ZW50SGFuZGxlciIsIm1vdXNlTW92ZUV2ZW50SGFuZGxlciIsIm1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJhZGRNb3VzZVVwRXZlbnRIYW5kbGVyIiwiYWRkTW91c2VEb3duRXZlbnRIYW5kbGVyIiwiYWRkTW91c2VNb3ZlRXZlbnRIYW5kbGVyIiwiYWRkTW91c2VXaGVlbEV2ZW50SGFuZGxlciIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJyZW5kZXIiLCJkZWx0YSIsImNsaWVudFdpZHRoIiwiZ2V0Q2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJnZXRDbGllbnRIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsInJlc2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJ4QXhpc0FuZ2xlIiwiZ2V0WEF4aXNBbmdsZSIsInlBeGlzQW5nbGUiLCJnZXRZQXhpc0FuZ2xlIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwieEFuZ2xlIiwiekFuZ2xlIiwiekNvb3JkaW5hdGUiLCJNYXRoIiwibWF4IiwicGVyc3BlY3RpdmUiLCJmcm9tV2lkdGhBbmRIZWlnaHQiLCJyb3RhdGlvbiIsImZyb21YQW5nbGVBbmRaQW5nbGUiLCJwb3NpdGlvbiIsImZyb21aQ29vcmRpbmF0ZSIsIm5vcm1hbCIsImZyb21Sb3RhdGlvbiIsImRyYXdFbGVtZW50cyIsImZpcnN0Q291bnQiLCJzZWNvbmRDb3VudCIsImNvbG91ckNvdW50IiwidGV4dHVyZUNvdW50IiwiY2xlYXIiLCJ1c2VTaGFkZXIiLCJhY3RpdmF0ZVRleHR1cmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLFNBQVNELFFBQVEsY0FBUixDQUFmO0FBQUEsSUFDTUUsT0FBT0YsUUFBUSxZQUFSLENBRGI7QUFBQSxJQUVNRyxTQUFTSCxRQUFRLGNBQVIsQ0FGZjtBQUFBLElBR01JLFdBQVdKLFFBQVEsZ0JBQVIsQ0FIakI7QUFBQSxJQUlNSyxXQUFXTCxRQUFRLGdCQUFSLENBSmpCO0FBQUEsSUFLTU0sY0FBY04sUUFBUSxtQkFBUixDQUxwQjtBQUFBLElBTU1PLGNBQWNQLFFBQVEsbUJBQVIsQ0FOcEI7O0FBUU0sSUFBRVEsY0FBRixHQUFxQlQsU0FBckIsQ0FBRVMsY0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDb0JELGNBRHBCLENBQ0VDLEtBREY7QUFBQSxJQUNTQyxNQURULEdBQ29CRixjQURwQixDQUNTRSxNQURUOztJQUdBQyxHO0FBQ0osZUFBWUMsTUFBWixFQUFvQkMsWUFBcEIsRUFBa0NDLGFBQWxDLEVBQWlEQyxNQUFqRCxFQUF5RDtBQUFBOztBQUN2RCxTQUFLSCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7NENBRXVCO0FBQ3RCLFVBQU1DLGNBQWNULFlBQVlVLFdBQVosQ0FBd0IsS0FBS0YsTUFBN0IsQ0FBcEI7QUFBQSxVQUNNRyxzQkFBc0IsS0FBS0EsbUJBQUwsQ0FBeUJDLElBQXpCLENBQThCLElBQTlCLENBRDVCO0FBQUEsVUFFTUMsd0JBQXdCLEtBQUtBLHFCQUFM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S3BELE1BQXZDOztBQUVBLFdBQUtBLE1BQUwsQ0FBWWEsTUFBWixDQUFtQixLQUFLZixZQUF4QixFQUFzQzZDLE1BQXRDLEVBQThDSixRQUE5QyxFQUF3REUsUUFBeEQsRUFBa0VKLFdBQWxFOztBQUVBLFdBQUtyQyxNQUFMLENBQVk2QyxZQUFaLENBQXlCRyxXQUF6Qjs7QUFFQSxXQUFLakQsYUFBTCxDQUFtQkssSUFBbkIsQ0FBd0IsS0FBS0osTUFBN0I7O0FBRUEsV0FBS0EsTUFBTCxDQUFZbUQsU0FBWixDQUFzQixLQUFLcEQsYUFBM0I7O0FBRUEsV0FBS0EsYUFBTCxDQUFtQnFELGVBQW5CLENBQW1DLEtBQUtwRCxNQUF4Qzs7QUFFQSxXQUFLQSxNQUFMLENBQVlhLE1BQVosQ0FBbUIsS0FBS2QsYUFBeEIsRUFBdUM0QyxNQUF2QyxFQUErQ0osUUFBL0MsRUFBeURFLFFBQXpELEVBQW1FSixXQUFuRTs7QUFFQSxXQUFLckMsTUFBTCxDQUFZNkMsWUFBWixDQUF5QkksWUFBekI7QUFDRDs7Ozs7O0FBR0hJLE9BQU9DLE9BQVAsR0FBaUIxRCxHQUFqQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBhbmdsZXMgPSByZXF1aXJlKCcuLi8uLi9hbmdsZXMnKSxcbiAgICAgIHpvb20gPSByZXF1aXJlKCcuLi8uLi96b29tJyksXG4gICAgICBOb3JtYWwgPSByZXF1aXJlKCcuLi8uLi9ub3JtYWwnKSxcbiAgICAgIFJvdGF0aW9uID0gcmVxdWlyZSgnLi4vLi4vcm90YXRpb24nKSxcbiAgICAgIFBvc2l0aW9uID0gcmVxdWlyZSgnLi4vLi4vcG9zaXRpb24nKSxcbiAgICAgIFBlcnNwZWN0aXZlID0gcmVxdWlyZSgnLi4vLi4vcGVyc3BlY3RpdmUnKSxcbiAgICAgIE1vdXNlRXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vbW91c2VFdmVudHMnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoY291bnRzLCBjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIsIGNhbnZhcykge1xuICAgIHRoaXMuY291bnRzID0gY291bnRzO1xuICAgIHRoaXMuY29sb3VyU2hhZGVyID0gY29sb3VyU2hhZGVyO1xuICAgIHRoaXMudGV4dHVyZVNoYWRlciA9IHRleHR1cmVTaGFkZXI7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICBhZGRNb3VzZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgY29uc3QgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZyh0aGlzLmNhbnZhcyksXG4gICAgICAgICAgbW91c2VVcEV2ZW50SGFuZGxlciA9IHRoaXMubW91c2VVcEV2ZW50SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlRG93bkV2ZW50SGFuZGxlciA9IHRoaXMubW91c2VEb3duRXZlbnRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VNb3ZlRXZlbnRIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVFdmVudEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVyID0gdGhpcy5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVVwRXZlbnRIYW5kbGVyKG1vdXNlVXBFdmVudEhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlRG93bkV2ZW50SGFuZGxlcihtb3VzZURvd25FdmVudEhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUV2ZW50SGFuZGxlcihtb3VzZU1vdmVFdmVudEhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxFdmVudEhhbmRsZXIobW91c2VXaGVlbEV2ZW50SGFuZGxlcik7XG5cbiAgfVxuXG4gIG1vdXNlVXBFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIGFuZ2xlcy5tb3VzZVVwRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgbW91c2VEb3duRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICBhbmdsZXMubW91c2VEb3duRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgbW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICBhbmdsZXMubW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpIHtcbiAgICB6b29tLm1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDsgIC8vL1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgY29uc29sZS5sb2coaGVpZ2h0KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHhBeGlzQW5nbGUgPSBhbmdsZXMuZ2V0WEF4aXNBbmdsZSgpLFxuICAgICAgICAgIHlBeGlzQW5nbGUgPSBhbmdsZXMuZ2V0WUF4aXNBbmdsZSgpLFxuICAgICAgICAgIGRpc3RhbmNlID0gem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIHdpZHRoID0gdGhpcy5jYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICB4QW5nbGUgPSB4QXhpc0FuZ2xlLCAgLy8vXG4gICAgICAgICAgekFuZ2xlID0geUF4aXNBbmdsZSwgLy8vXG4gICAgICAgICAgekNvb3JkaW5hdGUgPSAtTWF0aC5tYXgoMTAsIGRpc3RhbmNlKSwgLy8vXG4gICAgICAgICAgcGVyc3BlY3RpdmUgPSBQZXJzcGVjdGl2ZS5mcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgcm90YXRpb24gPSBSb3RhdGlvbi5mcm9tWEFuZ2xlQW5kWkFuZ2xlKHhBbmdsZSwgekFuZ2xlKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IFBvc2l0aW9uLmZyb21aQ29vcmRpbmF0ZSh6Q29vcmRpbmF0ZSksXG4gICAgICAgICAgbm9ybWFsID0gTm9ybWFsLmZyb21Sb3RhdGlvbihyb3RhdGlvbik7XG5cbiAgICB0aGlzLmRyYXdFbGVtZW50cyhub3JtYWwsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcGVyc3BlY3RpdmUpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKG5vcm1hbCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSkge1xuICAgIGNvbnN0IGZpcnN0Q291bnQgPSBmaXJzdCh0aGlzLmNvdW50cyksXG4gICAgICAgICAgc2Vjb25kQ291bnQgPSBzZWNvbmQodGhpcy5jb3VudHMpLFxuICAgICAgICAgIGNvbG91ckNvdW50ID0gZmlyc3RDb3VudCwgLy8vXG4gICAgICAgICAgdGV4dHVyZUNvdW50ID0gc2Vjb25kQ291bnQ7IC8vL1xuXG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMuY29sb3VyU2hhZGVyLmJpbmQodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlU2hhZGVyKHRoaXMuY29sb3VyU2hhZGVyKTtcblxuICAgIHRoaXMuY29sb3VyU2hhZGVyLmFjdGl2YXRlVGV4dHVyZSh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNhbnZhcy5yZW5kZXIodGhpcy5jb2xvdXJTaGFkZXIsIG5vcm1hbCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSk7XG5cbiAgICB0aGlzLmNhbnZhcy5kcmF3RWxlbWVudHMoY29sb3VyQ291bnQpO1xuXG4gICAgdGhpcy50ZXh0dXJlU2hhZGVyLmJpbmQodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlU2hhZGVyKHRoaXMudGV4dHVyZVNoYWRlcik7XG5cbiAgICB0aGlzLnRleHR1cmVTaGFkZXIuYWN0aXZhdGVUZXh0dXJlKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY2FudmFzLnJlbmRlcih0aGlzLnRleHR1cmVTaGFkZXIsIG5vcm1hbCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSk7XG5cbiAgICB0aGlzLmNhbnZhcy5kcmF3RWxlbWVudHModGV4dHVyZUNvdW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcbiJdfQ==