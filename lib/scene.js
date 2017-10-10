'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element'),
    Canvas = require('./canvas'),
    zoom = require('./scene/zoom'),
    angles = require('./scene/angles'),
    Offset = require('./scene/offset'),
    Normal = require('./scene/normal'),
    Rotation = require('./scene/rotation'),
    Position = require('./scene/position'),
    Perspective = require('./scene/perspective'),
    ColourShader = require('./shader/colour'),
    TextureShader = require('./shader/texture'),
    MouseEvents = require('./scene/mouseEvents');

var Scene = function (_Element) {
  _inherits(Scene, _Element);

  function Scene(canvas, colourShader, textureShader) {
    _classCallCheck(this, Scene);

    var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));

    _this.canvas = canvas;
    _this.colourShader = colourShader;
    _this.textureShader = textureShader;
    return _this;
  }

  _createClass(Scene, [{
    key: 'getCanvas',
    value: function getCanvas() {
      return this.canvas;
    }
  }, {
    key: 'getColourShader',
    value: function getColourShader() {
      return this.colourShader;
    }
  }, {
    key: 'getTextureShader',
    value: function getTextureShader() {
      return this.textureShader;
    }
  }, {
    key: 'addMouseEventHandlers',
    value: function addMouseEventHandlers() {
      var mouseEvents = MouseEvents.fromNothing(this.canvas);

      mouseEvents.addMouseUpEventHandler(angles.mouseUpEventHandler.bind(angles));

      mouseEvents.addMouseDownEventHandler(angles.mouseDownEventHandler.bind(angles));

      mouseEvents.addMouseMoveEventHandler(function (mouseCoordinates) {
        angles.mouseMoveEventHandler(mouseCoordinates);

        this.render(); ///
      }.bind(this));

      mouseEvents.addMouseWheelEventHandler(function (delta) {
        zoom.mouseWheelEventHandler(delta);

        this.render();
      }.bind(this));
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
      xCoordinate = 0,
          ///-18,
      yCoordinate = -0,
          ///-16,
      zCoordinate = -Math.max(10, distance),
          ///
      offset = Offset.fromXCoordinateAndYCoordinate(xCoordinate, yCoordinate),
          rotation = Rotation.fromXAngleAndZAngle(xAngle, zAngle),
          position = Position.fromZCoordinate(zCoordinate),
          perspective = Perspective.fromWidthAndHeight(width, height),
          normal = Normal.fromRotation(rotation);

      this.drawElements(offset, rotation, position, perspective, normal);
    }
  }, {
    key: 'drawElements',
    value: function drawElements(offset, rotation, position, perspective, normal) {
      this.canvas.clear();

      this.canvas.useShader(this.colourShader);

      this.colourShader.bindBuffers(this.canvas);

      this.colourShader.activateTexture(this.canvas);

      this.canvas.render(this.colourShader, offset, rotation, position, perspective, normal);

      this.canvas.useShader(this.textureShader);

      this.textureShader.bindBuffers(this.canvas);

      this.textureShader.activateTexture(this.canvas);

      this.canvas.render(this.textureShader, offset, rotation, position, perspective, normal);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var childElements = properties.childElements,
          imageMap = properties.imageMap,
          canvas = new Canvas(),
          colourShader = ColourShader.fromNothing(canvas),
          textureShader = TextureShader.fromNothing(canvas),
          scene = new Scene(canvas, colourShader, textureShader);


      childElements.forEach(function (childElement) {
        childElement.create(colourShader, textureShader);
      });

      if (imageMap) {
        textureShader.createTexture(imageMap, canvas);
      }

      textureShader.createBuffers(canvas);
      colourShader.createBuffers(canvas);

      canvas.enableDepthTesting();
      canvas.enableDepthFunction();

      window.onresize = function () {
        scene.resize();
        scene.render();
      };

      scene.resize();
      scene.render();

      scene.addMouseEventHandlers();

      return scene;
    }
  }]);

  return Scene;
}(Element);

module.exports = Scene;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zY2VuZS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkNhbnZhcyIsInpvb20iLCJhbmdsZXMiLCJPZmZzZXQiLCJOb3JtYWwiLCJSb3RhdGlvbiIsIlBvc2l0aW9uIiwiUGVyc3BlY3RpdmUiLCJDb2xvdXJTaGFkZXIiLCJUZXh0dXJlU2hhZGVyIiwiTW91c2VFdmVudHMiLCJTY2VuZSIsImNhbnZhcyIsImNvbG91clNoYWRlciIsInRleHR1cmVTaGFkZXIiLCJtb3VzZUV2ZW50cyIsImZyb21Ob3RoaW5nIiwiYWRkTW91c2VVcEV2ZW50SGFuZGxlciIsIm1vdXNlVXBFdmVudEhhbmRsZXIiLCJiaW5kIiwiYWRkTW91c2VEb3duRXZlbnRIYW5kbGVyIiwibW91c2VEb3duRXZlbnRIYW5kbGVyIiwiYWRkTW91c2VNb3ZlRXZlbnRIYW5kbGVyIiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlTW92ZUV2ZW50SGFuZGxlciIsInJlbmRlciIsImFkZE1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJkZWx0YSIsIm1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJjbGllbnRXaWR0aCIsImdldENsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Q2xpZW50SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXNpemUiLCJ4QXhpc0FuZ2xlIiwiZ2V0WEF4aXNBbmdsZSIsInlBeGlzQW5nbGUiLCJnZXRZQXhpc0FuZ2xlIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwieEFuZ2xlIiwiekFuZ2xlIiwieENvb3JkaW5hdGUiLCJ5Q29vcmRpbmF0ZSIsInpDb29yZGluYXRlIiwiTWF0aCIsIm1heCIsIm9mZnNldCIsImZyb21YQ29vcmRpbmF0ZUFuZFlDb29yZGluYXRlIiwicm90YXRpb24iLCJmcm9tWEFuZ2xlQW5kWkFuZ2xlIiwicG9zaXRpb24iLCJmcm9tWkNvb3JkaW5hdGUiLCJwZXJzcGVjdGl2ZSIsImZyb21XaWR0aEFuZEhlaWdodCIsIm5vcm1hbCIsImZyb21Sb3RhdGlvbiIsImRyYXdFbGVtZW50cyIsImNsZWFyIiwidXNlU2hhZGVyIiwiYmluZEJ1ZmZlcnMiLCJhY3RpdmF0ZVRleHR1cmUiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsImltYWdlTWFwIiwic2NlbmUiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiY3JlYXRlIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZUJ1ZmZlcnMiLCJlbmFibGVEZXB0aFRlc3RpbmciLCJlbmFibGVEZXB0aEZ1bmN0aW9uIiwid2luZG93Iiwib25yZXNpemUiLCJhZGRNb3VzZUV2ZW50SGFuZGxlcnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLFNBQVNELFFBQVEsVUFBUixDQURmO0FBQUEsSUFFTUUsT0FBT0YsUUFBUSxjQUFSLENBRmI7QUFBQSxJQUdNRyxTQUFTSCxRQUFRLGdCQUFSLENBSGY7QUFBQSxJQUlNSSxTQUFTSixRQUFRLGdCQUFSLENBSmY7QUFBQSxJQUtNSyxTQUFTTCxRQUFRLGdCQUFSLENBTGY7QUFBQSxJQU1NTSxXQUFXTixRQUFRLGtCQUFSLENBTmpCO0FBQUEsSUFPTU8sV0FBV1AsUUFBUSxrQkFBUixDQVBqQjtBQUFBLElBUU1RLGNBQWNSLFFBQVEscUJBQVIsQ0FScEI7QUFBQSxJQVNNUyxlQUFlVCxRQUFRLGlCQUFSLENBVHJCO0FBQUEsSUFVTVUsZ0JBQWdCVixRQUFRLGtCQUFSLENBVnRCO0FBQUEsSUFXTVcsY0FBY1gsUUFBUSxxQkFBUixDQVhwQjs7SUFhTVksSzs7O0FBQ0osaUJBQVlDLE1BQVosRUFBb0JDLFlBQXBCLEVBQWtDQyxhQUFsQyxFQUFpRDtBQUFBOztBQUFBOztBQUcvQyxVQUFLRixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFVB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QkFBYzJELGFBQWQsQ0FBNEJMLFFBQTVCLEVBQXNDeEQsTUFBdEM7QUFDRDs7QUFFREUsb0JBQWM0RCxhQUFkLENBQTRCOUQsTUFBNUI7QUFDQUMsbUJBQWE2RCxhQUFiLENBQTJCOUQsTUFBM0I7O0FBRUFBLGFBQU8rRCxrQkFBUDtBQUNBL0QsYUFBT2dFLG1CQUFQOztBQUVBQyxhQUFPQyxRQUFQLEdBQWtCLFlBQVc7QUFDM0JULGNBQU1sQyxNQUFOO0FBQ0FrQyxjQUFNNUMsTUFBTjtBQUNELE9BSEQ7O0FBS0E0QyxZQUFNbEMsTUFBTjtBQUNBa0MsWUFBTTVDLE1BQU47O0FBRUE0QyxZQUFNVSxxQkFBTjs7QUFFQSxhQUFPVixLQUFQO0FBQ0Q7Ozs7RUExSGlCdkUsTzs7QUE2SHBCa0YsT0FBT0MsT0FBUCxHQUFpQnRFLEtBQWpCIiwiZmlsZSI6InNjZW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBDYW52YXMgPSByZXF1aXJlKCcuL2NhbnZhcycpLFxuICAgICAgem9vbSA9IHJlcXVpcmUoJy4vc2NlbmUvem9vbScpLFxuICAgICAgYW5nbGVzID0gcmVxdWlyZSgnLi9zY2VuZS9hbmdsZXMnKSxcbiAgICAgIE9mZnNldCA9IHJlcXVpcmUoJy4vc2NlbmUvb2Zmc2V0JyksXG4gICAgICBOb3JtYWwgPSByZXF1aXJlKCcuL3NjZW5lL25vcm1hbCcpLFxuICAgICAgUm90YXRpb24gPSByZXF1aXJlKCcuL3NjZW5lL3JvdGF0aW9uJyksXG4gICAgICBQb3NpdGlvbiA9IHJlcXVpcmUoJy4vc2NlbmUvcG9zaXRpb24nKSxcbiAgICAgIFBlcnNwZWN0aXZlID0gcmVxdWlyZSgnLi9zY2VuZS9wZXJzcGVjdGl2ZScpLFxuICAgICAgQ29sb3VyU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXIvY29sb3VyJyksXG4gICAgICBUZXh0dXJlU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXIvdGV4dHVyZScpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuL3NjZW5lL21vdXNlRXZlbnRzJyk7XG5cbmNsYXNzIFNjZW5lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyKSB7XG4gICAgc3VwZXIoKTtcbiAgICBcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmNvbG91clNoYWRlciA9IGNvbG91clNoYWRlcjtcbiAgICB0aGlzLnRleHR1cmVTaGFkZXIgPSB0ZXh0dXJlU2hhZGVyO1xuICB9XG4gIFxuICBnZXRDYW52YXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzO1xuICB9XG4gIFxuICBnZXRDb2xvdXJTaGFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3VyU2hhZGVyO1xuICB9XG4gIFxuICBnZXRUZXh0dXJlU2hhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVTaGFkZXI7XG4gIH1cblxuICBhZGRNb3VzZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgY29uc3QgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZyh0aGlzLmNhbnZhcyk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVVwRXZlbnRIYW5kbGVyKGFuZ2xlcy5tb3VzZVVwRXZlbnRIYW5kbGVyLmJpbmQoYW5nbGVzKSk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZURvd25FdmVudEhhbmRsZXIoYW5nbGVzLm1vdXNlRG93bkV2ZW50SGFuZGxlci5iaW5kKGFuZ2xlcykpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VNb3ZlRXZlbnRIYW5kbGVyKGZ1bmN0aW9uKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICAgIGFuZ2xlcy5tb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICAgIHRoaXMucmVuZGVyKCk7ICAvLy9cbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VXaGVlbEV2ZW50SGFuZGxlcihmdW5jdGlvbihkZWx0YSkge1xuICAgICAgem9vbS5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKTtcblxuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0OyAgLy8vXG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeEF4aXNBbmdsZSA9IGFuZ2xlcy5nZXRYQXhpc0FuZ2xlKCksXG4gICAgICAgICAgeUF4aXNBbmdsZSA9IGFuZ2xlcy5nZXRZQXhpc0FuZ2xlKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB6b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgd2lkdGggPSB0aGlzLmNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIHhBbmdsZSA9IHhBeGlzQW5nbGUsICAvLy9cbiAgICAgICAgICB6QW5nbGUgPSB5QXhpc0FuZ2xlLCAvLy9cbiAgICAgICAgICB4Q29vcmRpbmF0ZSA9IDAsICAvLy8tMTgsXG4gICAgICAgICAgeUNvb3JkaW5hdGUgPSAtMCwgLy8vLTE2LFxuICAgICAgICAgIHpDb29yZGluYXRlID0gLU1hdGgubWF4KDEwLCBkaXN0YW5jZSksIC8vL1xuICAgICAgICAgIG9mZnNldCA9IE9mZnNldC5mcm9tWENvb3JkaW5hdGVBbmRZQ29vcmRpbmF0ZSh4Q29vcmRpbmF0ZSwgeUNvb3JkaW5hdGUpLFxuICAgICAgICAgIHJvdGF0aW9uID0gUm90YXRpb24uZnJvbVhBbmdsZUFuZFpBbmdsZSh4QW5nbGUsIHpBbmdsZSksXG4gICAgICAgICAgcG9zaXRpb24gPSBQb3NpdGlvbi5mcm9tWkNvb3JkaW5hdGUoekNvb3JkaW5hdGUpLFxuICAgICAgICAgIHBlcnNwZWN0aXZlID0gUGVyc3BlY3RpdmUuZnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbCA9IE5vcm1hbC5mcm9tUm90YXRpb24ocm90YXRpb24pO1xuXG4gICAgdGhpcy5kcmF3RWxlbWVudHMob2Zmc2V0LCByb3RhdGlvbiwgcG9zaXRpb24sIHBlcnNwZWN0aXZlLCBub3JtYWwpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKG9mZnNldCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSwgbm9ybWFsKSB7XG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVNoYWRlcih0aGlzLmNvbG91clNoYWRlcik7XG5cbiAgICB0aGlzLmNvbG91clNoYWRlci5iaW5kQnVmZmVycyh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNvbG91clNoYWRlci5hY3RpdmF0ZVRleHR1cmUodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMuY29sb3VyU2hhZGVyLCBvZmZzZXQsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcGVyc3BlY3RpdmUsIG5vcm1hbCk7XG5cbiAgICB0aGlzLmNhbnZhcy51c2VTaGFkZXIodGhpcy50ZXh0dXJlU2hhZGVyKTtcbiAgICBcbiAgICB0aGlzLnRleHR1cmVTaGFkZXIuYmluZEJ1ZmZlcnModGhpcy5jYW52YXMpO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZVNoYWRlci5hY3RpdmF0ZVRleHR1cmUodGhpcy5jYW52YXMpO1xuICAgIFxuICAgIHRoaXMuY2FudmFzLnJlbmRlcih0aGlzLnRleHR1cmVTaGFkZXIsIG9mZnNldCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSwgbm9ybWFsKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBpbWFnZU1hcCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjYW52YXMgPSBuZXcgQ2FudmFzKCksXG4gICAgICAgICAgY29sb3VyU2hhZGVyID0gQ29sb3VyU2hhZGVyLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZVNoYWRlciA9IFRleHR1cmVTaGFkZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICBzY2VuZSA9IG5ldyBTY2VuZShjYW52YXMsIGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcik7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgICBjaGlsZEVsZW1lbnQuY3JlYXRlKGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcik7XG4gICAgfSk7XG5cbiAgICBpZiAoaW1hZ2VNYXApIHtcbiAgICAgIHRleHR1cmVTaGFkZXIuY3JlYXRlVGV4dHVyZShpbWFnZU1hcCwgY2FudmFzKTtcbiAgICB9XG5cbiAgICB0ZXh0dXJlU2hhZGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgICBjb2xvdXJTaGFkZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY2FudmFzLmVuYWJsZURlcHRoVGVzdGluZygpO1xuICAgIGNhbnZhcy5lbmFibGVEZXB0aEZ1bmN0aW9uKCk7XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNjZW5lLnJlc2l6ZSgpO1xuICAgICAgc2NlbmUucmVuZGVyKCk7XG4gICAgfTtcblxuICAgIHNjZW5lLnJlc2l6ZSgpO1xuICAgIHNjZW5lLnJlbmRlcigpO1xuXG4gICAgc2NlbmUuYWRkTW91c2VFdmVudEhhbmRsZXJzKCk7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTY2VuZTtcbiJdfQ==