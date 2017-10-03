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
      xCoordinate = -18,
          yCoordinate = -16,
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
        scene.render(colourShader, textureShader);
      };

      scene.resize();
      scene.render(colourShader, textureShader);

      scene.addMouseEventHandlers();

      return scene;
    }
  }]);

  return Scene;
}(Element);

module.exports = Scene;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zY2VuZS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkNhbnZhcyIsInpvb20iLCJhbmdsZXMiLCJPZmZzZXQiLCJOb3JtYWwiLCJSb3RhdGlvbiIsIlBvc2l0aW9uIiwiUGVyc3BlY3RpdmUiLCJDb2xvdXJTaGFkZXIiLCJUZXh0dXJlU2hhZGVyIiwiTW91c2VFdmVudHMiLCJTY2VuZSIsImNhbnZhcyIsImNvbG91clNoYWRlciIsInRleHR1cmVTaGFkZXIiLCJtb3VzZUV2ZW50cyIsImZyb21Ob3RoaW5nIiwiYWRkTW91c2VVcEV2ZW50SGFuZGxlciIsIm1vdXNlVXBFdmVudEhhbmRsZXIiLCJiaW5kIiwiYWRkTW91c2VEb3duRXZlbnRIYW5kbGVyIiwibW91c2VEb3duRXZlbnRIYW5kbGVyIiwiYWRkTW91c2VNb3ZlRXZlbnRIYW5kbGVyIiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlTW92ZUV2ZW50SGFuZGxlciIsInJlbmRlciIsImFkZE1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJkZWx0YSIsIm1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJjbGllbnRXaWR0aCIsImdldENsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Q2xpZW50SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXNpemUiLCJ4QXhpc0FuZ2xlIiwiZ2V0WEF4aXNBbmdsZSIsInlBeGlzQW5nbGUiLCJnZXRZQXhpc0FuZ2xlIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwieEFuZ2xlIiwiekFuZ2xlIiwieENvb3JkaW5hdGUiLCJ5Q29vcmRpbmF0ZSIsInpDb29yZGluYXRlIiwiTWF0aCIsIm1heCIsIm9mZnNldCIsImZyb21YQ29vcmRpbmF0ZUFuZFlDb29yZGluYXRlIiwicm90YXRpb24iLCJmcm9tWEFuZ2xlQW5kWkFuZ2xlIiwicG9zaXRpb24iLCJmcm9tWkNvb3JkaW5hdGUiLCJwZXJzcGVjdGl2ZSIsImZyb21XaWR0aEFuZEhlaWdodCIsIm5vcm1hbCIsImZyb21Sb3RhdGlvbiIsImRyYXdFbGVtZW50cyIsImNsZWFyIiwidXNlU2hhZGVyIiwiYmluZEJ1ZmZlcnMiLCJhY3RpdmF0ZVRleHR1cmUiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsImltYWdlTWFwIiwic2NlbmUiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiY3JlYXRlIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZUJ1ZmZlcnMiLCJlbmFibGVEZXB0aFRlc3RpbmciLCJlbmFibGVEZXB0aEZ1bmN0aW9uIiwid2luZG93Iiwib25yZXNpemUiLCJhZGRNb3VzZUV2ZW50SGFuZGxlcnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLFNBQVNELFFBQVEsVUFBUixDQURmO0FBQUEsSUFFTUUsT0FBT0YsUUFBUSxjQUFSLENBRmI7QUFBQSxJQUdNRyxTQUFTSCxRQUFRLGdCQUFSLENBSGY7QUFBQSxJQUlNSSxTQUFTSixRQUFRLGdCQUFSLENBSmY7QUFBQSxJQUtNSyxTQUFTTCxRQUFRLGdCQUFSLENBTGY7QUFBQSxJQU1NTSxXQUFXTixRQUFRLGtCQUFSLENBTmpCO0FBQUEsSUFPTU8sV0FBV1AsUUFBUSxrQkFBUixDQVBqQjtBQUFBLElBUU1RLGNBQWNSLFFBQVEscUJBQVIsQ0FScEI7QUFBQSxJQVNNUyxlQUFlVCxRQUFRLGlCQUFSLENBVHJCO0FBQUEsSUFVTVUsZ0JBQWdCVixRQUFRLGtCQUFSLENBVnRCO0FBQUEsSUFXTVcsY0FBY1gsUUFBUSxxQkFBUixDQVhwQjs7SUFhTVksSzs7O0FBQ0osaUJBQVlDLE1BQVosRUFBb0JDLFlBQXBCLEVBQWtDQyxhQUFsQyxFQUFpRDtBQUFBOztBQUFBOztBQUcvQyxVQUFLRixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFVB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LENBQTRCTCxRQUE1QixFQUFzQ3hELE1BQXRDO0FBQ0Q7O0FBRURFLG9CQUFjNEQsYUFBZCxDQUE0QjlELE1BQTVCO0FBQ0FDLG1CQUFhNkQsYUFBYixDQUEyQjlELE1BQTNCOztBQUVBQSxhQUFPK0Qsa0JBQVA7QUFDQS9ELGFBQU9nRSxtQkFBUDs7QUFFQUMsYUFBT0MsUUFBUCxHQUFrQixZQUFXO0FBQzNCVCxjQUFNbEMsTUFBTjtBQUNBa0MsY0FBTTVDLE1BQU4sQ0FBYVosWUFBYixFQUEyQkMsYUFBM0I7QUFDRCxPQUhEOztBQUtBdUQsWUFBTWxDLE1BQU47QUFDQWtDLFlBQU01QyxNQUFOLENBQWFaLFlBQWIsRUFBMkJDLGFBQTNCOztBQUVBdUQsWUFBTVUscUJBQU47O0FBRUEsYUFBT1YsS0FBUDtBQUNEOzs7O0VBMUhpQnZFLE87O0FBNkhwQmtGLE9BQU9DLE9BQVAsR0FBaUJ0RSxLQUFqQiIsImZpbGUiOiJzY2VuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgICAgQ2FudmFzID0gcmVxdWlyZSgnLi9jYW52YXMnKSxcbiAgICAgIHpvb20gPSByZXF1aXJlKCcuL3NjZW5lL3pvb20nKSxcbiAgICAgIGFuZ2xlcyA9IHJlcXVpcmUoJy4vc2NlbmUvYW5nbGVzJyksXG4gICAgICBPZmZzZXQgPSByZXF1aXJlKCcuL3NjZW5lL29mZnNldCcpLFxuICAgICAgTm9ybWFsID0gcmVxdWlyZSgnLi9zY2VuZS9ub3JtYWwnKSxcbiAgICAgIFJvdGF0aW9uID0gcmVxdWlyZSgnLi9zY2VuZS9yb3RhdGlvbicpLFxuICAgICAgUG9zaXRpb24gPSByZXF1aXJlKCcuL3NjZW5lL3Bvc2l0aW9uJyksXG4gICAgICBQZXJzcGVjdGl2ZSA9IHJlcXVpcmUoJy4vc2NlbmUvcGVyc3BlY3RpdmUnKSxcbiAgICAgIENvbG91clNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVyL2NvbG91cicpLFxuICAgICAgVGV4dHVyZVNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVyL3RleHR1cmUnKSxcbiAgICAgIE1vdXNlRXZlbnRzID0gcmVxdWlyZSgnLi9zY2VuZS9tb3VzZUV2ZW50cycpO1xuXG5jbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcikge1xuICAgIHN1cGVyKCk7XG4gICAgXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jb2xvdXJTaGFkZXIgPSBjb2xvdXJTaGFkZXI7XG4gICAgdGhpcy50ZXh0dXJlU2hhZGVyID0gdGV4dHVyZVNoYWRlcjtcbiAgfVxuICBcbiAgZ2V0Q2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgfVxuICBcbiAgZ2V0Q29sb3VyU2hhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG91clNoYWRlcjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZVNoYWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlU2hhZGVyO1xuICB9XG5cbiAgYWRkTW91c2VFdmVudEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcodGhpcy5jYW52YXMpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VVcEV2ZW50SGFuZGxlcihhbmdsZXMubW91c2VVcEV2ZW50SGFuZGxlci5iaW5kKGFuZ2xlcykpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VEb3duRXZlbnRIYW5kbGVyKGFuZ2xlcy5tb3VzZURvd25FdmVudEhhbmRsZXIuYmluZChhbmdsZXMpKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUV2ZW50SGFuZGxlcihmdW5jdGlvbihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgICBhbmdsZXMubW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgICB0aGlzLnJlbmRlcigpOyAgLy8vXG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZnVuY3Rpb24oZGVsdGEpIHtcbiAgICAgIHpvb20ubW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSk7XG5cbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDsgIC8vL1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHhBeGlzQW5nbGUgPSBhbmdsZXMuZ2V0WEF4aXNBbmdsZSgpLFxuICAgICAgICAgIHlBeGlzQW5nbGUgPSBhbmdsZXMuZ2V0WUF4aXNBbmdsZSgpLFxuICAgICAgICAgIGRpc3RhbmNlID0gem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIHdpZHRoID0gdGhpcy5jYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICB4QW5nbGUgPSB4QXhpc0FuZ2xlLCAgLy8vXG4gICAgICAgICAgekFuZ2xlID0geUF4aXNBbmdsZSwgLy8vXG4gICAgICAgICAgeENvb3JkaW5hdGUgPSAtMTgsXG4gICAgICAgICAgeUNvb3JkaW5hdGUgPSAtMTYsXG4gICAgICAgICAgekNvb3JkaW5hdGUgPSAtTWF0aC5tYXgoMTAsIGRpc3RhbmNlKSwgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gT2Zmc2V0LmZyb21YQ29vcmRpbmF0ZUFuZFlDb29yZGluYXRlKHhDb29yZGluYXRlLCB5Q29vcmRpbmF0ZSksXG4gICAgICAgICAgcm90YXRpb24gPSBSb3RhdGlvbi5mcm9tWEFuZ2xlQW5kWkFuZ2xlKHhBbmdsZSwgekFuZ2xlKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IFBvc2l0aW9uLmZyb21aQ29vcmRpbmF0ZSh6Q29vcmRpbmF0ZSksXG4gICAgICAgICAgcGVyc3BlY3RpdmUgPSBQZXJzcGVjdGl2ZS5mcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsID0gTm9ybWFsLmZyb21Sb3RhdGlvbihyb3RhdGlvbik7XG5cbiAgICB0aGlzLmRyYXdFbGVtZW50cyhvZmZzZXQsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcGVyc3BlY3RpdmUsIG5vcm1hbCk7XG4gIH1cblxuICBkcmF3RWxlbWVudHMob2Zmc2V0LCByb3RhdGlvbiwgcG9zaXRpb24sIHBlcnNwZWN0aXZlLCBub3JtYWwpIHtcbiAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlU2hhZGVyKHRoaXMuY29sb3VyU2hhZGVyKTtcblxuICAgIHRoaXMuY29sb3VyU2hhZGVyLmJpbmRCdWZmZXJzKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY29sb3VyU2hhZGVyLmFjdGl2YXRlVGV4dHVyZSh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNhbnZhcy5yZW5kZXIodGhpcy5jb2xvdXJTaGFkZXIsIG9mZnNldCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSwgbm9ybWFsKTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVNoYWRlcih0aGlzLnRleHR1cmVTaGFkZXIpO1xuXG4gICAgdGhpcy50ZXh0dXJlU2hhZGVyLmJpbmRCdWZmZXJzKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMudGV4dHVyZVNoYWRlci5hY3RpdmF0ZVRleHR1cmUodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMudGV4dHVyZVNoYWRlciwgb2Zmc2V0LCByb3RhdGlvbiwgcG9zaXRpb24sIHBlcnNwZWN0aXZlLCBub3JtYWwpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIGltYWdlTWFwIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNhbnZhcyA9IG5ldyBDYW52YXMoKSxcbiAgICAgICAgICBjb2xvdXJTaGFkZXIgPSBDb2xvdXJTaGFkZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICB0ZXh0dXJlU2hhZGVyID0gVGV4dHVyZVNoYWRlci5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIHNjZW5lID0gbmV3IFNjZW5lKGNhbnZhcywgY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGUoY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyKTtcbiAgICB9KTtcblxuICAgIGlmIChpbWFnZU1hcCkge1xuICAgICAgdGV4dHVyZVNoYWRlci5jcmVhdGVUZXh0dXJlKGltYWdlTWFwLCBjYW52YXMpO1xuICAgIH1cblxuICAgIHRleHR1cmVTaGFkZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICAgIGNvbG91clNoYWRlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjYW52YXMuZW5hYmxlRGVwdGhUZXN0aW5nKCk7XG4gICAgY2FudmFzLmVuYWJsZURlcHRoRnVuY3Rpb24oKTtcblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2NlbmUucmVzaXplKCk7XG4gICAgICBzY2VuZS5yZW5kZXIoY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyKTtcbiAgICB9O1xuXG4gICAgc2NlbmUucmVzaXplKCk7XG4gICAgc2NlbmUucmVuZGVyKGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcik7XG5cbiAgICBzY2VuZS5hZGRNb3VzZUV2ZW50SGFuZGxlcnMoKTtcblxuICAgIHJldHVybiBzY2VuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjZW5lO1xuIl19