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

      textureShader.createTexture(imageMap, canvas);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zY2VuZS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkNhbnZhcyIsInpvb20iLCJhbmdsZXMiLCJPZmZzZXQiLCJOb3JtYWwiLCJSb3RhdGlvbiIsIlBvc2l0aW9uIiwiUGVyc3BlY3RpdmUiLCJDb2xvdXJTaGFkZXIiLCJUZXh0dXJlU2hhZGVyIiwiTW91c2VFdmVudHMiLCJTY2VuZSIsImNhbnZhcyIsImNvbG91clNoYWRlciIsInRleHR1cmVTaGFkZXIiLCJtb3VzZUV2ZW50cyIsImZyb21Ob3RoaW5nIiwibW91c2VVcEV2ZW50SGFuZGxlciIsImJpbmQiLCJtb3VzZURvd25FdmVudEhhbmRsZXIiLCJtb3VzZU1vdmVFdmVudEhhbmRsZXIiLCJtb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwiYWRkTW91c2VVcEV2ZW50SGFuZGxlciIsImFkZE1vdXNlRG93bkV2ZW50SGFuZGxlciIsImFkZE1vdXNlTW92ZUV2ZW50SGFuZGxlciIsImFkZE1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJtb3VzZUNvb3JkaW5hdGVzIiwicmVuZGVyIiwiZGVsdGEiLCJjbGllbnRXaWR0aCIsImdldENsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Q2xpZW50SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXNpemUiLCJ4QXhpc0FuZ2xlIiwiZ2V0WEF4aXNBbmdsZSIsInlBeGlzQW5nbGUiLCJnZXRZQXhpc0FuZ2xlIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwieEFuZ2xlIiwiekFuZ2xlIiwieENvb3JkaW5hdGUiLCJ5Q29vcmRpbmF0ZSIsInpDb29yZGluYXRlIiwiTWF0aCIsIm1heCIsIm9mZnNldCIsImZyb21YQ29vcmRpbmF0ZUFuZFlDb29yZGluYXRlIiwicm90YXRpb24iLCJmcm9tWEFuZ2xlQW5kWkFuZ2xlIiwicG9zaXRpb24iLCJmcm9tWkNvb3JkaW5hdGUiLCJwZXJzcGVjdGl2ZSIsImZyb21XaWR0aEFuZEhlaWdodCIsIm5vcm1hbCIsImZyb21Sb3RhdGlvbiIsImRyYXdFbGVtZW50cyIsImNsZWFyIiwidXNlU2hhZGVyIiwiYmluZEJ1ZmZlcnMiLCJhY3RpdmF0ZVRleHR1cmUiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsImltYWdlTWFwIiwic2NlbmUiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiY3JlYXRlIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZUJ1ZmZlcnMiLCJlbmFibGVEZXB0aFRlc3RpbmciLCJlbmFibGVEZXB0aEZ1bmN0aW9uIiwid2luZG93Iiwib25yZXNpemUiLCJhZGRNb3VzZUV2ZW50SGFuZGxlcnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLFNBQVNELFFBQVEsVUFBUixDQURmO0FBQUEsSUFFTUUsT0FBT0YsUUFBUSxjQUFSLENBRmI7QUFBQSxJQUdNRyxTQUFTSCxRQUFRLGdCQUFSLENBSGY7QUFBQSxJQUlNSSxTQUFTSixRQUFRLGdCQUFSLENBSmY7QUFBQSxJQUtNSyxTQUFTTCxRQUFRLGdCQUFSLENBTGY7QUFBQSxJQU1NTSxXQUFXTixRQUFRLGtCQUFSLENBTmpCO0FBQUEsSUFPTU8sV0FBV1AsUUFBUSxrQkFBUixDQVBqQjtBQUFBLElBUU1RLGNBQWNSLFFBQVEscUJBQVIsQ0FScEI7QUFBQSxJQVNNUyxlQUFlVCxRQUFRLGlCQUFSLENBVHJCO0FBQUEsSUFVTVUsZ0JBQWdCVixRQUFRLGtCQUFSLENBVnRCO0FBQUEsSUFXTVcsY0FBY1gsUUFBUSxxQkFBUixDQVhwQjs7SUFhTVksSzs7O0FBQ0osaUJBQVlDLE1BQVosRUFBb0JDLFlBQXBCLEVBQWtDQyxhQUFsQyxFQUFpRDtBQUFBOztBQUFBOztBQUcvQyxVQUFLRixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFVB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QUwwQixHQUtsQixJQUFJMUQsS0FBSixDQUFVQyxNQUFWLEVBQWtCQyxZQUFsQixFQUFnQ0MsYUFBaEMsQ0FMa0I7OztBQU9oQ3FELG9CQUFjRyxPQUFkLENBQXNCLFVBQVNDLFlBQVQsRUFBdUI7QUFDM0NBLHFCQUFhQyxNQUFiLENBQW9CM0QsWUFBcEIsRUFBa0NDLGFBQWxDO0FBQ0QsT0FGRDs7QUFJQUEsb0JBQWMyRCxhQUFkLENBQTRCTCxRQUE1QixFQUFzQ3hELE1BQXRDO0FBQ0FFLG9CQUFjNEQsYUFBZCxDQUE0QjlELE1BQTVCO0FBQ0FDLG1CQUFhNkQsYUFBYixDQUEyQjlELE1BQTNCOztBQUVBQSxhQUFPK0Qsa0JBQVA7QUFDQS9ELGFBQU9nRSxtQkFBUDs7QUFFQUMsYUFBT0MsUUFBUCxHQUFrQixZQUFXO0FBQzNCVCxjQUFNbEMsTUFBTjtBQUNBa0MsY0FBTTFDLE1BQU4sQ0FBYWQsWUFBYixFQUEyQkMsYUFBM0I7QUFDRCxPQUhEOztBQUtBdUQsWUFBTWxDLE1BQU47QUFDQWtDLFlBQU0xQyxNQUFOLENBQWFkLFlBQWIsRUFBMkJDLGFBQTNCOztBQUVBdUQsWUFBTVUscUJBQU47O0FBRUEsYUFBT1YsS0FBUDtBQUNEOzs7O0VBcklpQnZFLE87O0FBd0lwQmtGLE9BQU9DLE9BQVAsR0FBaUJ0RSxLQUFqQiIsImZpbGUiOiJzY2VuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgICAgQ2FudmFzID0gcmVxdWlyZSgnLi9jYW52YXMnKSxcbiAgICAgIHpvb20gPSByZXF1aXJlKCcuL3NjZW5lL3pvb20nKSxcbiAgICAgIGFuZ2xlcyA9IHJlcXVpcmUoJy4vc2NlbmUvYW5nbGVzJyksXG4gICAgICBPZmZzZXQgPSByZXF1aXJlKCcuL3NjZW5lL29mZnNldCcpLFxuICAgICAgTm9ybWFsID0gcmVxdWlyZSgnLi9zY2VuZS9ub3JtYWwnKSxcbiAgICAgIFJvdGF0aW9uID0gcmVxdWlyZSgnLi9zY2VuZS9yb3RhdGlvbicpLFxuICAgICAgUG9zaXRpb24gPSByZXF1aXJlKCcuL3NjZW5lL3Bvc2l0aW9uJyksXG4gICAgICBQZXJzcGVjdGl2ZSA9IHJlcXVpcmUoJy4vc2NlbmUvcGVyc3BlY3RpdmUnKSxcbiAgICAgIENvbG91clNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVyL2NvbG91cicpLFxuICAgICAgVGV4dHVyZVNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVyL3RleHR1cmUnKSxcbiAgICAgIE1vdXNlRXZlbnRzID0gcmVxdWlyZSgnLi9zY2VuZS9tb3VzZUV2ZW50cycpO1xuXG5jbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcikge1xuICAgIHN1cGVyKCk7XG4gICAgXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jb2xvdXJTaGFkZXIgPSBjb2xvdXJTaGFkZXI7XG4gICAgdGhpcy50ZXh0dXJlU2hhZGVyID0gdGV4dHVyZVNoYWRlcjtcbiAgfVxuICBcbiAgZ2V0Q2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgfVxuICBcbiAgZ2V0Q29sb3VyU2hhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG91clNoYWRlcjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZVNoYWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlU2hhZGVyO1xuICB9XG5cbiAgYWRkTW91c2VFdmVudEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcodGhpcy5jYW52YXMpLFxuICAgICAgICAgIG1vdXNlVXBFdmVudEhhbmRsZXIgPSB0aGlzLm1vdXNlVXBFdmVudEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZURvd25FdmVudEhhbmRsZXIgPSB0aGlzLm1vdXNlRG93bkV2ZW50SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlTW92ZUV2ZW50SGFuZGxlciA9IHRoaXMubW91c2VNb3ZlRXZlbnRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VXaGVlbEV2ZW50SGFuZGxlciA9IHRoaXMubW91c2VXaGVlbEV2ZW50SGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VVcEV2ZW50SGFuZGxlcihtb3VzZVVwRXZlbnRIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZURvd25FdmVudEhhbmRsZXIobW91c2VEb3duRXZlbnRIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VNb3ZlRXZlbnRIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyKG1vdXNlV2hlZWxFdmVudEhhbmRsZXIpO1xuXG4gIH1cblxuICBtb3VzZVVwRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICBhbmdsZXMubW91c2VVcEV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIG1vdXNlRG93bkV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgYW5nbGVzLm1vdXNlRG93bkV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgYW5nbGVzLm1vdXNlTW92ZUV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKSB7XG4gICAgem9vbS5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7ICAvLy9cblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB4QXhpc0FuZ2xlID0gYW5nbGVzLmdldFhBeGlzQW5nbGUoKSxcbiAgICAgICAgICB5QXhpc0FuZ2xlID0gYW5nbGVzLmdldFlBeGlzQW5nbGUoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICB3aWR0aCA9IHRoaXMuY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgeEFuZ2xlID0geEF4aXNBbmdsZSwgIC8vL1xuICAgICAgICAgIHpBbmdsZSA9IHlBeGlzQW5nbGUsIC8vL1xuICAgICAgICAgIHhDb29yZGluYXRlID0gLTE4LFxuICAgICAgICAgIHlDb29yZGluYXRlID0gLTE2LFxuICAgICAgICAgIHpDb29yZGluYXRlID0gLU1hdGgubWF4KDEwLCBkaXN0YW5jZSksIC8vL1xuICAgICAgICAgIG9mZnNldCA9IE9mZnNldC5mcm9tWENvb3JkaW5hdGVBbmRZQ29vcmRpbmF0ZSh4Q29vcmRpbmF0ZSwgeUNvb3JkaW5hdGUpLFxuICAgICAgICAgIHJvdGF0aW9uID0gUm90YXRpb24uZnJvbVhBbmdsZUFuZFpBbmdsZSh4QW5nbGUsIHpBbmdsZSksXG4gICAgICAgICAgcG9zaXRpb24gPSBQb3NpdGlvbi5mcm9tWkNvb3JkaW5hdGUoekNvb3JkaW5hdGUpLFxuICAgICAgICAgIHBlcnNwZWN0aXZlID0gUGVyc3BlY3RpdmUuZnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbCA9IE5vcm1hbC5mcm9tUm90YXRpb24ocm90YXRpb24pO1xuXG4gICAgdGhpcy5kcmF3RWxlbWVudHMob2Zmc2V0LCByb3RhdGlvbiwgcG9zaXRpb24sIHBlcnNwZWN0aXZlLCBub3JtYWwpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKG9mZnNldCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSwgbm9ybWFsKSB7XG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVNoYWRlcih0aGlzLmNvbG91clNoYWRlcik7XG5cbiAgICB0aGlzLmNvbG91clNoYWRlci5iaW5kQnVmZmVycyh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNvbG91clNoYWRlci5hY3RpdmF0ZVRleHR1cmUodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMuY29sb3VyU2hhZGVyLCBvZmZzZXQsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcGVyc3BlY3RpdmUsIG5vcm1hbCk7XG5cbiAgICB0aGlzLmNhbnZhcy51c2VTaGFkZXIodGhpcy50ZXh0dXJlU2hhZGVyKTtcblxuICAgIHRoaXMudGV4dHVyZVNoYWRlci5iaW5kQnVmZmVycyh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLnRleHR1cmVTaGFkZXIuYWN0aXZhdGVUZXh0dXJlKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY2FudmFzLnJlbmRlcih0aGlzLnRleHR1cmVTaGFkZXIsIG9mZnNldCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSwgbm9ybWFsKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBpbWFnZU1hcCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjYW52YXMgPSBuZXcgQ2FudmFzKCksXG4gICAgICAgICAgY29sb3VyU2hhZGVyID0gQ29sb3VyU2hhZGVyLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZVNoYWRlciA9IFRleHR1cmVTaGFkZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICBzY2VuZSA9IG5ldyBTY2VuZShjYW52YXMsIGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcik7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgICBjaGlsZEVsZW1lbnQuY3JlYXRlKGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcik7XG4gICAgfSk7XG5cbiAgICB0ZXh0dXJlU2hhZGVyLmNyZWF0ZVRleHR1cmUoaW1hZ2VNYXAsIGNhbnZhcyk7XG4gICAgdGV4dHVyZVNoYWRlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gICAgY29sb3VyU2hhZGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNhbnZhcy5lbmFibGVEZXB0aFRlc3RpbmcoKTtcbiAgICBjYW52YXMuZW5hYmxlRGVwdGhGdW5jdGlvbigpO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICBzY2VuZS5yZXNpemUoKTtcbiAgICAgIHNjZW5lLnJlbmRlcihjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpO1xuICAgIH07XG5cbiAgICBzY2VuZS5yZXNpemUoKTtcbiAgICBzY2VuZS5yZW5kZXIoY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyKTtcblxuICAgIHNjZW5lLmFkZE1vdXNlRXZlbnRIYW5kbGVycygpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2NlbmU7XG4iXX0=