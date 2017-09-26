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
  function App(cubes, colourShader, textureShader, canvas) {
    _classCallCheck(this, App);

    this.cubes = cubes;
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
      var firstCube = first(this.cubes),
          secondCube = second(this.cubes),
          colourCube = firstCube,
          ///
      textureCube = secondCube,
          ///
      colourCubeCount = colourCube.getCount(),
          textureCubeCount = textureCube.getCount(),
          xAxisAngle = angles.getXAxisAngle(),
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

      this.canvas.clear();

      colourCube.bind(this.colourShader, this.canvas);

      this.canvas.useShader(this.colourShader);

      this.colourShader.activateTexture(this.canvas);

      this.canvas.render(this.colourShader, normal, rotation, position, perspective);

      this.canvas.drawElements(colourCubeCount);

      textureCube.bind(this.textureShader, this.canvas);

      this.canvas.useShader(this.textureShader);

      this.textureShader.activateTexture(this.canvas);

      this.canvas.render(this.textureShader, normal, rotation, position, perspective);

      this.canvas.drawElements(textureCubeCount);
    }
  }]);

  return App;
}();

module.exports = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbnRlcm1lZGlhdGUvYXBwLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJhbmdsZXMiLCJ6b29tIiwiTm9ybWFsIiwiUm90YXRpb24iLCJQb3NpdGlvbiIsIlBlcnNwZWN0aXZlIiwiTW91c2VFdmVudHMiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0Iiwic2Vjb25kIiwiQXBwIiwiY3ViZXMiLCJjb2xvdXJTaGFkZXIiLCJ0ZXh0dXJlU2hhZGVyIiwiY2FudmFzIiwibW91c2VFdmVudHMiLCJmcm9tTm90aGluZyIsIm1vdXNlVXBFdmVudEhhbmRsZXIiLCJiaW5kIiwibW91c2VEb3duRXZlbnRIYW5kbGVyIiwibW91c2VNb3ZlRXZlbnRIYW5kbGVyIiwibW91c2VXaGVlbEV2ZW50SGFuZGxlciIsImFkZE1vdXNlVXBFdmVudEhhbmRsZXIiLCJhZGRNb3VzZURvd25FdmVudEhhbmRsZXIiLCJhZGRNb3VzZU1vdmVFdmVudEhhbmRsZXIiLCJhZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwibW91c2VDb29yZGluYXRlcyIsInJlbmRlciIsImRlbHRhIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVzaXplIiwiY29uc29sZSIsImxvZyIsImZpcnN0Q3ViZSIsInNlY29uZEN1YmUiLCJjb2xvdXJDdWJlIiwidGV4dHVyZUN1YmUiLCJjb2xvdXJDdWJlQ291bnQiLCJnZXRDb3VudCIsInRleHR1cmVDdWJlQ291bnQiLCJ4QXhpc0FuZ2xlIiwiZ2V0WEF4aXNBbmdsZSIsInlBeGlzQW5nbGUiLCJnZXRZQXhpc0FuZ2xlIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwieEFuZ2xlIiwiekFuZ2xlIiwiekNvb3JkaW5hdGUiLCJNYXRoIiwibWF4IiwicGVyc3BlY3RpdmUiLCJmcm9tV2lkdGhBbmRIZWlnaHQiLCJyb3RhdGlvbiIsImZyb21YQW5nbGVBbmRaQW5nbGUiLCJwb3NpdGlvbiIsImZyb21aQ29vcmRpbmF0ZSIsIm5vcm1hbCIsImZyb21Sb3RhdGlvbiIsImNsZWFyIiwidXNlU2hhZGVyIiwiYWN0aXZhdGVUZXh0dXJlIiwiZHJhd0VsZW1lbnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxTQUFTRCxRQUFRLGNBQVIsQ0FBZjtBQUFBLElBQ01FLE9BQU9GLFFBQVEsWUFBUixDQURiO0FBQUEsSUFFTUcsU0FBU0gsUUFBUSxjQUFSLENBRmY7QUFBQSxJQUdNSSxXQUFXSixRQUFRLGdCQUFSLENBSGpCO0FBQUEsSUFJTUssV0FBV0wsUUFBUSxnQkFBUixDQUpqQjtBQUFBLElBS01NLGNBQWNOLFFBQVEsbUJBQVIsQ0FMcEI7QUFBQSxJQU1NTyxjQUFjUCxRQUFRLG1CQUFSLENBTnBCOztBQVFNLElBQUVRLGNBQUYsR0FBcUJULFNBQXJCLENBQUVTLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ29CRCxjQURwQixDQUNFQyxLQURGO0FBQUEsSUFDU0MsTUFEVCxHQUNvQkYsY0FEcEIsQ0FDU0UsTUFEVDs7SUFHQUMsRztBQUNKLGVBQVlDLEtBQVosRUFBbUJDLFlBQW5CLEVBQWlDQyxhQUFqQyxFQUFnREMsTUFBaEQsRUFBd0Q7QUFBQTs7QUFDdEQsU0FBS0gsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7OzRDQUV1QjtBQUN0QixVQUFNQyxjQUFjVCxZQUFZVSxXQUFaLENBQXdCLEtBQUtGLE1BQTdCLENBQXBCO0FBQUEsVUFDTUcsc0JBQXNCLEtBQUtBLG1CQUFMLENBQXlCQyxJQUF6QixDQUE4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Q0FBa0MsS0FBS3RELE1BQXZDOztBQUVBLFdBQUtBLE1BQUwsQ0FBWWEsTUFBWixDQUFtQixLQUFLZixZQUF4QixFQUFzQ29ELE1BQXRDLEVBQThDSixRQUE5QyxFQUF3REUsUUFBeEQsRUFBa0VKLFdBQWxFOztBQUVBLFdBQUs1QyxNQUFMLENBQVl1RCxZQUFaLENBQXlCM0IsZUFBekI7O0FBRUFELGtCQUFZdkIsSUFBWixDQUFpQixLQUFLTCxhQUF0QixFQUFxQyxLQUFLQyxNQUExQzs7QUFFQSxXQUFLQSxNQUFMLENBQVlxRCxTQUFaLENBQXNCLEtBQUt0RCxhQUEzQjs7QUFFQSxXQUFLQSxhQUFMLENBQW1CdUQsZUFBbkIsQ0FBbUMsS0FBS3RELE1BQXhDOztBQUVBLFdBQUtBLE1BQUwsQ0FBWWEsTUFBWixDQUFtQixLQUFLZCxhQUF4QixFQUF1Q21ELE1BQXZDLEVBQStDSixRQUEvQyxFQUF5REUsUUFBekQsRUFBbUVKLFdBQW5FOztBQUVBLFdBQUs1QyxNQUFMLENBQVl1RCxZQUFaLENBQXlCekIsZ0JBQXpCO0FBQ0Q7Ozs7OztBQUdIMEIsT0FBT0MsT0FBUCxHQUFpQjdELEdBQWpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IGFuZ2xlcyA9IHJlcXVpcmUoJy4uLy4uL2FuZ2xlcycpLFxuICAgICAgem9vbSA9IHJlcXVpcmUoJy4uLy4uL3pvb20nKSxcbiAgICAgIE5vcm1hbCA9IHJlcXVpcmUoJy4uLy4uL25vcm1hbCcpLFxuICAgICAgUm90YXRpb24gPSByZXF1aXJlKCcuLi8uLi9yb3RhdGlvbicpLFxuICAgICAgUG9zaXRpb24gPSByZXF1aXJlKCcuLi8uLi9wb3NpdGlvbicpLFxuICAgICAgUGVyc3BlY3RpdmUgPSByZXF1aXJlKCcuLi8uLi9wZXJzcGVjdGl2ZScpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuLi8uLi9tb3VzZUV2ZW50cycpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcihjdWJlcywgY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyLCBjYW52YXMpIHtcbiAgICB0aGlzLmN1YmVzID0gY3ViZXM7XG4gICAgdGhpcy5jb2xvdXJTaGFkZXIgPSBjb2xvdXJTaGFkZXI7XG4gICAgdGhpcy50ZXh0dXJlU2hhZGVyID0gdGV4dHVyZVNoYWRlcjtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuXG4gIGFkZE1vdXNlRXZlbnRIYW5kbGVycygpIHtcbiAgICBjb25zdCBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKHRoaXMuY2FudmFzKSxcbiAgICAgICAgICBtb3VzZVVwRXZlbnRIYW5kbGVyID0gdGhpcy5tb3VzZVVwRXZlbnRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VEb3duRXZlbnRIYW5kbGVyID0gdGhpcy5tb3VzZURvd25FdmVudEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZU1vdmVFdmVudEhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUV2ZW50SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlV2hlZWxFdmVudEhhbmRsZXIgPSB0aGlzLm1vdXNlV2hlZWxFdmVudEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlVXBFdmVudEhhbmRsZXIobW91c2VVcEV2ZW50SGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VEb3duRXZlbnRIYW5kbGVyKG1vdXNlRG93bkV2ZW50SGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlTW92ZUV2ZW50SGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VXaGVlbEV2ZW50SGFuZGxlcihtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKTtcblxuICB9XG5cbiAgbW91c2VVcEV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgYW5nbGVzLm1vdXNlVXBFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG4gIH1cblxuICBtb3VzZURvd25FdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIGFuZ2xlcy5tb3VzZURvd25FdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG4gIH1cblxuICBtb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIGFuZ2xlcy5tb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgbW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSkge1xuICAgIHpvb20ubW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0OyAgLy8vXG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICBjb25zb2xlLmxvZyhoZWlnaHQpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZmlyc3RDdWJlID0gZmlyc3QodGhpcy5jdWJlcyksXG4gICAgICAgICAgc2Vjb25kQ3ViZSA9IHNlY29uZCh0aGlzLmN1YmVzKSxcbiAgICAgICAgICBjb2xvdXJDdWJlID0gZmlyc3RDdWJlLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlQ3ViZSA9IHNlY29uZEN1YmUsIC8vL1xuICAgICAgICAgIGNvbG91ckN1YmVDb3VudCA9IGNvbG91ckN1YmUuZ2V0Q291bnQoKSxcbiAgICAgICAgICB0ZXh0dXJlQ3ViZUNvdW50ID0gdGV4dHVyZUN1YmUuZ2V0Q291bnQoKSxcbiAgICAgICAgICB4QXhpc0FuZ2xlID0gYW5nbGVzLmdldFhBeGlzQW5nbGUoKSxcbiAgICAgICAgICB5QXhpc0FuZ2xlID0gYW5nbGVzLmdldFlBeGlzQW5nbGUoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICB3aWR0aCA9IHRoaXMuY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgeEFuZ2xlID0geEF4aXNBbmdsZSwgIC8vL1xuICAgICAgICAgIHpBbmdsZSA9IHlBeGlzQW5nbGUsIC8vL1xuICAgICAgICAgIHpDb29yZGluYXRlID0gLU1hdGgubWF4KDEwLCBkaXN0YW5jZSksIC8vL1xuICAgICAgICAgIHBlcnNwZWN0aXZlID0gUGVyc3BlY3RpdmUuZnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIHJvdGF0aW9uID0gUm90YXRpb24uZnJvbVhBbmdsZUFuZFpBbmdsZSh4QW5nbGUsIHpBbmdsZSksXG4gICAgICAgICAgcG9zaXRpb24gPSBQb3NpdGlvbi5mcm9tWkNvb3JkaW5hdGUoekNvb3JkaW5hdGUpLFxuICAgICAgICAgIG5vcm1hbCA9IE5vcm1hbC5mcm9tUm90YXRpb24ocm90YXRpb24pO1xuXG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIGNvbG91ckN1YmUuYmluZCh0aGlzLmNvbG91clNoYWRlciwgdGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlU2hhZGVyKHRoaXMuY29sb3VyU2hhZGVyKTtcblxuICAgIHRoaXMuY29sb3VyU2hhZGVyLmFjdGl2YXRlVGV4dHVyZSh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNhbnZhcy5yZW5kZXIodGhpcy5jb2xvdXJTaGFkZXIsIG5vcm1hbCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSk7XG5cbiAgICB0aGlzLmNhbnZhcy5kcmF3RWxlbWVudHMoY29sb3VyQ3ViZUNvdW50KTtcblxuICAgIHRleHR1cmVDdWJlLmJpbmQodGhpcy50ZXh0dXJlU2hhZGVyLCB0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNhbnZhcy51c2VTaGFkZXIodGhpcy50ZXh0dXJlU2hhZGVyKTtcblxuICAgIHRoaXMudGV4dHVyZVNoYWRlci5hY3RpdmF0ZVRleHR1cmUodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMudGV4dHVyZVNoYWRlciwgbm9ybWFsLCByb3RhdGlvbiwgcG9zaXRpb24sIHBlcnNwZWN0aXZlKTtcblxuICAgIHRoaXMuY2FudmFzLmRyYXdFbGVtZW50cyh0ZXh0dXJlQ3ViZUNvdW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcblxuIl19