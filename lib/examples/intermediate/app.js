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
      var firstCube = first(this.cubes),
          secondCube = second(this.cubes),
          colourCube = firstCube,
          ///
      textureCube = secondCube,
          ///
      colourCubeCount = colourCube.getCount(),
          textureCubeCount = textureCube.getCount();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbnRlcm1lZGlhdGUvYXBwLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJhbmdsZXMiLCJ6b29tIiwiTm9ybWFsIiwiUm90YXRpb24iLCJQb3NpdGlvbiIsIlBlcnNwZWN0aXZlIiwiTW91c2VFdmVudHMiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0Iiwic2Vjb25kIiwiQXBwIiwiY3ViZXMiLCJjb2xvdXJTaGFkZXIiLCJ0ZXh0dXJlU2hhZGVyIiwiY2FudmFzIiwibW91c2VFdmVudHMiLCJmcm9tTm90aGluZyIsIm1vdXNlVXBFdmVudEhhbmRsZXIiLCJiaW5kIiwibW91c2VEb3duRXZlbnRIYW5kbGVyIiwibW91c2VNb3ZlRXZlbnRIYW5kbGVyIiwibW91c2VXaGVlbEV2ZW50SGFuZGxlciIsImFkZE1vdXNlVXBFdmVudEhhbmRsZXIiLCJhZGRNb3VzZURvd25FdmVudEhhbmRsZXIiLCJhZGRNb3VzZU1vdmVFdmVudEhhbmRsZXIiLCJhZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwibW91c2VDb29yZGluYXRlcyIsInJlbmRlciIsImRlbHRhIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVzaXplIiwiY29uc29sZSIsImxvZyIsInhBeGlzQW5nbGUiLCJnZXRYQXhpc0FuZ2xlIiwieUF4aXNBbmdsZSIsImdldFlBeGlzQW5nbGUiLCJkaXN0YW5jZSIsImdldERpc3RhbmNlIiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJ4QW5nbGUiLCJ6QW5nbGUiLCJ6Q29vcmRpbmF0ZSIsIk1hdGgiLCJtYXgiLCJwZXJzcGVjdGl2ZSIsImZyb21XaWR0aEFuZEhlaWdodCIsInJvdGF0aW9uIiwiZnJvbVhBbmdsZUFuZFpBbmdsZSIsInBvc2l0aW9uIiwiZnJvbVpDb29yZGluYXRlIiwibm9ybWFsIiwiZnJvbVJvdGF0aW9uIiwiZHJhd0VsZW1lbnRzIiwiZmlyc3RDdWJlIiwic2Vjb25kQ3ViZSIsImNvbG91ckN1YmUiLCJ0ZXh0dXJlQ3ViZSIsImNvbG91ckN1YmVDb3VudCIsImdldENvdW50IiwidGV4dHVyZUN1YmVDb3VudCIsImNsZWFyIiwidXNlU2hhZGVyIiwiYWN0aXZhdGVUZXh0dXJlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxTQUFTRCxRQUFRLGNBQVIsQ0FBZjtBQUFBLElBQ01FLE9BQU9GLFFBQVEsWUFBUixDQURiO0FBQUEsSUFFTUcsU0FBU0gsUUFBUSxjQUFSLENBRmY7QUFBQSxJQUdNSSxXQUFXSixRQUFRLGdCQUFSLENBSGpCO0FBQUEsSUFJTUssV0FBV0wsUUFBUSxnQkFBUixDQUpqQjtBQUFBLElBS01NLGNBQWNOLFFBQVEsbUJBQVIsQ0FMcEI7QUFBQSxJQU1NTyxjQUFjUCxRQUFRLG1CQUFSLENBTnBCOztBQVFNLElBQUVRLGNBQUYsR0FBcUJULFNBQXJCLENBQUVTLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ29CRCxjQURwQixDQUNFQyxLQURGO0FBQUEsSUFDU0MsTUFEVCxHQUNvQkYsY0FEcEIsQ0FDU0UsTUFEVDs7SUFHQUMsRztBQUNKLGVBQVlDLEtBQVosRUFBbUJDLFlBQW5CLEVBQWlDQyxhQUFqQyxFQUFnREMsTUFBaEQsRUFBd0Q7QUFBQTs7QUFDdEQsU0FBS0gsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7OzRDQUV1QjtBQUN0QixVQUFNQyxjQUFjVCxZQUFZVSxXQUFaLENBQXdCLEtBQUtGLE1BQTdCLENBQXBCO0FBQUEsVUFDTUcsc0JBQXNCLEtBQUtBLG1CQUFMLENBQXlCQyxJQUF6QixDQUE4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QUtOLFlBQXJCLEVBQW1DLEtBQUtFLE1BQXhDOztBQUVBLFdBQUtBLE1BQUwsQ0FBWXNELFNBQVosQ0FBc0IsS0FBS3hELFlBQTNCOztBQUVBLFdBQUtBLFlBQUwsQ0FBa0J5RCxlQUFsQixDQUFrQyxLQUFLdkQsTUFBdkM7O0FBRUEsV0FBS0EsTUFBTCxDQUFZYSxNQUFaLENBQW1CLEtBQUtmLFlBQXhCLEVBQXNDNkMsTUFBdEMsRUFBOENKLFFBQTlDLEVBQXdERSxRQUF4RCxFQUFrRUosV0FBbEU7O0FBRUEsV0FBS3JDLE1BQUwsQ0FBWTZDLFlBQVosQ0FBeUJLLGVBQXpCOztBQUVBRCxrQkFBWTdDLElBQVosQ0FBaUIsS0FBS0wsYUFBdEIsRUFBcUMsS0FBS0MsTUFBMUM7O0FBRUEsV0FBS0EsTUFBTCxDQUFZc0QsU0FBWixDQUFzQixLQUFLdkQsYUFBM0I7O0FBRUEsV0FBS0EsYUFBTCxDQUFtQndELGVBQW5CLENBQW1DLEtBQUt2RCxNQUF4Qzs7QUFFQSxXQUFLQSxNQUFMLENBQVlhLE1BQVosQ0FBbUIsS0FBS2QsYUFBeEIsRUFBdUM0QyxNQUF2QyxFQUErQ0osUUFBL0MsRUFBeURFLFFBQXpELEVBQW1FSixXQUFuRTs7QUFFQSxXQUFLckMsTUFBTCxDQUFZNkMsWUFBWixDQUF5Qk8sZ0JBQXpCO0FBQ0Q7Ozs7OztBQUdISSxPQUFPQyxPQUFQLEdBQWlCN0QsR0FBakIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgYW5nbGVzID0gcmVxdWlyZSgnLi4vLi4vYW5nbGVzJyksXG4gICAgICB6b29tID0gcmVxdWlyZSgnLi4vLi4vem9vbScpLFxuICAgICAgTm9ybWFsID0gcmVxdWlyZSgnLi4vLi4vbm9ybWFsJyksXG4gICAgICBSb3RhdGlvbiA9IHJlcXVpcmUoJy4uLy4uL3JvdGF0aW9uJyksXG4gICAgICBQb3NpdGlvbiA9IHJlcXVpcmUoJy4uLy4uL3Bvc2l0aW9uJyksXG4gICAgICBQZXJzcGVjdGl2ZSA9IHJlcXVpcmUoJy4uLy4uL3BlcnNwZWN0aXZlJyksXG4gICAgICBNb3VzZUV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL21vdXNlRXZlbnRzJyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKGN1YmVzLCBjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIsIGNhbnZhcykge1xuICAgIHRoaXMuY3ViZXMgPSBjdWJlcztcbiAgICB0aGlzLmNvbG91clNoYWRlciA9IGNvbG91clNoYWRlcjtcbiAgICB0aGlzLnRleHR1cmVTaGFkZXIgPSB0ZXh0dXJlU2hhZGVyO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgYWRkTW91c2VFdmVudEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcodGhpcy5jYW52YXMpLFxuICAgICAgICAgIG1vdXNlVXBFdmVudEhhbmRsZXIgPSB0aGlzLm1vdXNlVXBFdmVudEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZURvd25FdmVudEhhbmRsZXIgPSB0aGlzLm1vdXNlRG93bkV2ZW50SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlTW92ZUV2ZW50SGFuZGxlciA9IHRoaXMubW91c2VNb3ZlRXZlbnRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VXaGVlbEV2ZW50SGFuZGxlciA9IHRoaXMubW91c2VXaGVlbEV2ZW50SGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VVcEV2ZW50SGFuZGxlcihtb3VzZVVwRXZlbnRIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZURvd25FdmVudEhhbmRsZXIobW91c2VEb3duRXZlbnRIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VNb3ZlRXZlbnRIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyKG1vdXNlV2hlZWxFdmVudEhhbmRsZXIpO1xuXG4gIH1cblxuICBtb3VzZVVwRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICBhbmdsZXMubW91c2VVcEV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIG1vdXNlRG93bkV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgYW5nbGVzLm1vdXNlRG93bkV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgYW5nbGVzLm1vdXNlTW92ZUV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKSB7XG4gICAgem9vbS5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7ICAvLy9cblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgIGNvbnNvbGUubG9nKGhlaWdodClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB4QXhpc0FuZ2xlID0gYW5nbGVzLmdldFhBeGlzQW5nbGUoKSxcbiAgICAgICAgICB5QXhpc0FuZ2xlID0gYW5nbGVzLmdldFlBeGlzQW5nbGUoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICB3aWR0aCA9IHRoaXMuY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgeEFuZ2xlID0geEF4aXNBbmdsZSwgIC8vL1xuICAgICAgICAgIHpBbmdsZSA9IHlBeGlzQW5nbGUsIC8vL1xuICAgICAgICAgIHpDb29yZGluYXRlID0gLU1hdGgubWF4KDEwLCBkaXN0YW5jZSksIC8vL1xuICAgICAgICAgIHBlcnNwZWN0aXZlID0gUGVyc3BlY3RpdmUuZnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIHJvdGF0aW9uID0gUm90YXRpb24uZnJvbVhBbmdsZUFuZFpBbmdsZSh4QW5nbGUsIHpBbmdsZSksXG4gICAgICAgICAgcG9zaXRpb24gPSBQb3NpdGlvbi5mcm9tWkNvb3JkaW5hdGUoekNvb3JkaW5hdGUpLFxuICAgICAgICAgIG5vcm1hbCA9IE5vcm1hbC5mcm9tUm90YXRpb24ocm90YXRpb24pO1xuXG4gICAgdGhpcy5kcmF3RWxlbWVudHMobm9ybWFsLCByb3RhdGlvbiwgcG9zaXRpb24sIHBlcnNwZWN0aXZlKTtcbiAgfVxuXG4gIGRyYXdFbGVtZW50cyhub3JtYWwsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcGVyc3BlY3RpdmUpIHtcbiAgICBjb25zdCBmaXJzdEN1YmUgPSBmaXJzdCh0aGlzLmN1YmVzKSxcbiAgICAgICAgICBzZWNvbmRDdWJlID0gc2Vjb25kKHRoaXMuY3ViZXMpLFxuICAgICAgICAgIGNvbG91ckN1YmUgPSBmaXJzdEN1YmUsIC8vL1xuICAgICAgICAgIHRleHR1cmVDdWJlID0gc2Vjb25kQ3ViZSwgLy8vXG4gICAgICAgICAgY29sb3VyQ3ViZUNvdW50ID0gY29sb3VyQ3ViZS5nZXRDb3VudCgpLFxuICAgICAgICAgIHRleHR1cmVDdWJlQ291bnQgPSB0ZXh0dXJlQ3ViZS5nZXRDb3VudCgpO1xuXG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIGNvbG91ckN1YmUuYmluZCh0aGlzLmNvbG91clNoYWRlciwgdGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlU2hhZGVyKHRoaXMuY29sb3VyU2hhZGVyKTtcblxuICAgIHRoaXMuY29sb3VyU2hhZGVyLmFjdGl2YXRlVGV4dHVyZSh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNhbnZhcy5yZW5kZXIodGhpcy5jb2xvdXJTaGFkZXIsIG5vcm1hbCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSk7XG5cbiAgICB0aGlzLmNhbnZhcy5kcmF3RWxlbWVudHMoY29sb3VyQ3ViZUNvdW50KTtcblxuICAgIHRleHR1cmVDdWJlLmJpbmQodGhpcy50ZXh0dXJlU2hhZGVyLCB0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNhbnZhcy51c2VTaGFkZXIodGhpcy50ZXh0dXJlU2hhZGVyKTtcblxuICAgIHRoaXMudGV4dHVyZVNoYWRlci5hY3RpdmF0ZVRleHR1cmUodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMudGV4dHVyZVNoYWRlciwgbm9ybWFsLCByb3RhdGlvbiwgcG9zaXRpb24sIHBlcnNwZWN0aXZlKTtcblxuICAgIHRoaXMuY2FudmFzLmRyYXdFbGVtZW50cyh0ZXh0dXJlQ3ViZUNvdW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcbiJdfQ==