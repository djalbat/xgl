'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element'),
    Zoom = require('./camera/zoom'),
    angles = require('./camera/angles'),
    keyEvents = require('./camera/keyEvents'),
    MouseEvents = require('./camera/mouseEvents'),
    OffsetMatrix = require('./matrix/offset'),
    NormalMatrix = require('./matrix/normal'),
    RotationMatrix = require('./matrix/rotation'),
    PositionMatrix = require('./matrix/position'),
    ProjectionMatrix = require('./matrix/projection');

var Camera = function (_Element) {
  _inherits(Camera, _Element);

  function Camera(zoom, offset, updateHandler, canvas) {
    _classCallCheck(this, Camera);

    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));

    _this.zoom = zoom;
    _this.offset = offset;
    _this.updateHandler = updateHandler;
    _this.canvas = canvas;
    return _this;
  }

  _createClass(Camera, [{
    key: 'getZoom',
    value: function getZoom() {
      return this.zoom;
    }
  }, {
    key: 'getOffset',
    value: function getOffset() {
      return this.offset;
    }
  }, {
    key: 'getUpdateHandler',
    value: function getUpdateHandler() {
      return this.updateHandler;
    }
  }, {
    key: 'getCanvas',
    value: function getCanvas() {
      return this.canvas;
    }
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler(mouseCoordinates) {
      angles.mouseUpHandler(mouseCoordinates);
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates) {
      angles.mouseDownHandler(mouseCoordinates);
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates) {
      angles.mouseMoveHandler(mouseCoordinates);

      this.update();
    }
  }, {
    key: 'mouseWheelHandler',
    value: function mouseWheelHandler(delta) {
      this.zoom.mouseWheelEventHandler(delta);

      this.update();
    }
  }, {
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(keyDown) {}
  }, {
    key: 'addKeyEventHandlers',
    value: function addKeyEventHandlers() {
      var shiftKeyHandler = this.shiftKeyHandler.bind(this);

      keyEvents.addShiftKeyHandler(shiftKeyHandler);
    }
  }, {
    key: 'addMouseEventHandlers',
    value: function addMouseEventHandlers() {
      var mouseEvents = MouseEvents.fromNothing(this.canvas),
          mouseUpHandler = this.mouseUpHandler.bind(this),
          mouseDownHandler = this.mouseDownHandler.bind(this),
          mouseMoveHandler = this.mouseMoveHandler.bind(this),
          mouseWheelHandler = this.mouseWheelHandler.bind(this);

      mouseEvents.addMouseUpHandler(mouseUpHandler);
      mouseEvents.addMouseDownHandler(mouseDownHandler);
      mouseEvents.addMouseMoveHandler(mouseMoveHandler);
      mouseEvents.addMouseWheelHandler(mouseWheelHandler);
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer) {
      ///
    }
  }, {
    key: 'onUpdate',
    value: function onUpdate(updateHandler) {
      this.updateHandler = updateHandler;
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      this.update();
    }
  }, {
    key: 'update',
    value: function update() {
      var xAngle = angles.getXAngle(),
          yAngle = angles.getYAngle(),
          zAngle = angles.getZAngle(),
          distance = this.zoom.getDistance(),
          width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          offsetMatrix = OffsetMatrix.fromOffset(this.offset),
          rotationMatrix = RotationMatrix.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle),
          positionMatrix = PositionMatrix.fromDistance(distance),
          projectionMatrix = ProjectionMatrix.fromWidthAndHeight(width, height),
          normalMatrix = NormalMatrix.fromRotationMatrix(rotationMatrix);

      if (this.updateHandler) {
        ///
        this.updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
      }
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      return {
        onUpdate: this.onUpdate.bind(this),
        forceUpdate: this.forceUpdate.bind(this)
      };
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      this.addKeyEventHandlers();
      this.addMouseEventHandlers();
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var initialPosition = properties.initialPosition,
          initialOffset = properties.initialOffset,
          canvas = properties.canvas,
          zoom = Zoom.fromInitialPosition(initialPosition),
          offset = initialOffset,
          updateHandler = null,
          camera = new Camera(zoom, offset, updateHandler, canvas);


      camera.initialise();

      return camera;
    }
  }]);

  return Camera;
}(Element);

module.exports = Camera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW1lcmEuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJab29tIiwiYW5nbGVzIiwia2V5RXZlbnRzIiwiTW91c2VFdmVudHMiLCJPZmZzZXRNYXRyaXgiLCJOb3JtYWxNYXRyaXgiLCJSb3RhdGlvbk1hdHJpeCIsIlBvc2l0aW9uTWF0cml4IiwiUHJvamVjdGlvbk1hdHJpeCIsIkNhbWVyYSIsInpvb20iLCJvZmZzZXQiLCJ1cGRhdGVIYW5kbGVyIiwiY2FudmFzIiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlVXBIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlTW92ZUhhbmRsZXIiLCJ1cGRhdGUiLCJkZWx0YSIsIm1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJrZXlEb3duIiwic2hpZnRLZXlIYW5kbGVyIiwiYmluZCIsImFkZFNoaWZ0S2V5SGFuZGxlciIsIm1vdXNlRXZlbnRzIiwiZnJvbU5vdGhpbmciLCJtb3VzZVdoZWVsSGFuZGxlciIsImFkZE1vdXNlVXBIYW5kbGVyIiwiYWRkTW91c2VEb3duSGFuZGxlciIsImFkZE1vdXNlTW92ZUhhbmRsZXIiLCJhZGRNb3VzZVdoZWVsSGFuZGxlciIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwieEFuZ2xlIiwiZ2V0WEFuZ2xlIiwieUFuZ2xlIiwiZ2V0WUFuZ2xlIiwiekFuZ2xlIiwiZ2V0WkFuZ2xlIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJvZmZzZXRNYXRyaXgiLCJmcm9tT2Zmc2V0Iiwicm90YXRpb25NYXRyaXgiLCJmcm9tWEFuZ2xlWUFuZ2xlQW5kWkFuZ2xlIiwicG9zaXRpb25NYXRyaXgiLCJmcm9tRGlzdGFuY2UiLCJwcm9qZWN0aW9uTWF0cml4IiwiZnJvbVdpZHRoQW5kSGVpZ2h0Iiwibm9ybWFsTWF0cml4IiwiZnJvbVJvdGF0aW9uTWF0cml4Iiwib25VcGRhdGUiLCJmb3JjZVVwZGF0ZSIsImFkZEtleUV2ZW50SGFuZGxlcnMiLCJhZGRNb3VzZUV2ZW50SGFuZGxlcnMiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbFBvc2l0aW9uIiwiaW5pdGlhbE9mZnNldCIsImZyb21Jbml0aWFsUG9zaXRpb24iLCJjYW1lcmEiLCJpbml0aWFsaXNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxPQUFPRCxRQUFRLGVBQVIsQ0FEYjtBQUFBLElBRU1FLFNBQVNGLFFBQVEsaUJBQVIsQ0FGZjtBQUFBLElBR01HLFlBQVlILFFBQVEsb0JBQVIsQ0FIbEI7QUFBQSxJQUlNSSxjQUFjSixRQUFRLHNCQUFSLENBSnBCO0FBQUEsSUFLTUssZUFBZUwsUUFBUSxpQkFBUixDQUxyQjtBQUFBLElBTU1NLGVBQWVOLFFBQVEsaUJBQVIsQ0FOckI7QUFBQSxJQU9NTyxpQkFBaUJQLFFBQVEsbUJBQVIsQ0FQdkI7QUFBQSxJQVFNUSxpQkFBaUJSLFFBQVEsbUJBQVIsQ0FSdkI7QUFBQSxJQVNNUyxtQkFBbUJULFFBQVEscUJBQVIsQ0FUekI7O0lBV01VLE07OztBQUNKLGtCQUFZQyxJQUFaLEVBQWtCQyxNQUFsQixFQUEwQkMsYUFBMUIsRUFBeUNDLE1BQXpDLEVBQWlEO0FBQUE7O0FBQUE7O0FBRy9DLFVBQUtILElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFVBQUtDLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBTitDO0FBT2hEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLSCxJQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0MsTUFBWjtBQUNEOzs7dUNBRWtCO0FBQ2pCLGFBQU8sS0FBS0MsYUFBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7O21D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QUFDQSxXQUFLQyxxQkFBTDtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFBQSxVQUN4QkMsZUFEd0IsR0FDbUJELFVBRG5CLENBQ3hCQyxlQUR3QjtBQUFBLFVBQ1BDLGFBRE8sR0FDbUJGLFVBRG5CLENBQ1BFLGFBRE87QUFBQSxVQUNRakQsTUFEUixHQUNtQitDLFVBRG5CLENBQ1EvQyxNQURSO0FBQUEsVUFFMUJILElBRjBCLEdBRW5CVixLQUFLK0QsbUJBQUwsQ0FBeUJGLGVBQXpCLENBRm1CO0FBQUEsVUFHMUJsRCxNQUgwQixHQUdqQm1ELGFBSGlCO0FBQUEsVUFJMUJsRCxhQUowQixHQUlWLElBSlU7QUFBQSxVQUsxQm9ELE1BTDBCLEdBS2pCLElBQUl2RCxNQUFKLENBQVdDLElBQVgsRUFBaUJDLE1BQWpCLEVBQXlCQyxhQUF6QixFQUF3Q0MsTUFBeEMsQ0FMaUI7OztBQU9oQ21ELGFBQU9DLFVBQVA7O0FBRUEsYUFBT0QsTUFBUDtBQUNEOzs7O0VBekhrQmxFLE87O0FBNEhyQm9FLE9BQU9DLE9BQVAsR0FBaUIxRCxNQUFqQiIsImZpbGUiOiJjYW1lcmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKSxcbiAgICAgIFpvb20gPSByZXF1aXJlKCcuL2NhbWVyYS96b29tJyksXG4gICAgICBhbmdsZXMgPSByZXF1aXJlKCcuL2NhbWVyYS9hbmdsZXMnKSxcbiAgICAgIGtleUV2ZW50cyA9IHJlcXVpcmUoJy4vY2FtZXJhL2tleUV2ZW50cycpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuL2NhbWVyYS9tb3VzZUV2ZW50cycpLFxuICAgICAgT2Zmc2V0TWF0cml4ID0gcmVxdWlyZSgnLi9tYXRyaXgvb2Zmc2V0JyksXG4gICAgICBOb3JtYWxNYXRyaXggPSByZXF1aXJlKCcuL21hdHJpeC9ub3JtYWwnKSxcbiAgICAgIFJvdGF0aW9uTWF0cml4ID0gcmVxdWlyZSgnLi9tYXRyaXgvcm90YXRpb24nKSxcbiAgICAgIFBvc2l0aW9uTWF0cml4ID0gcmVxdWlyZSgnLi9tYXRyaXgvcG9zaXRpb24nKSxcbiAgICAgIFByb2plY3Rpb25NYXRyaXggPSByZXF1aXJlKCcuL21hdHJpeC9wcm9qZWN0aW9uJyk7XG5cbmNsYXNzIENhbWVyYSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih6b29tLCBvZmZzZXQsIHVwZGF0ZUhhbmRsZXIsIGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG4gICAgXG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXIgPSB1cGRhdGVIYW5kbGVyO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgZ2V0Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy56b29tO1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldDtcbiAgfVxuXG4gIGdldFVwZGF0ZUhhbmRsZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlSGFuZGxlcjtcbiAgfVxuXG4gIGdldENhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gIH1cblxuICBtb3VzZVVwSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgYW5nbGVzLm1vdXNlVXBIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgYW5nbGVzLm1vdXNlRG93bkhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICBhbmdsZXMubW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihkZWx0YSkge1xuICAgIHRoaXMuem9vbS5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBzaGlmdEtleUhhbmRsZXIoa2V5RG93bikge1xuXG4gIH1cblxuICBhZGRLZXlFdmVudEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IHNoaWZ0S2V5SGFuZGxlciA9IHRoaXMuc2hpZnRLZXlIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICBrZXlFdmVudHMuYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcik7XG4gIH1cbiAgXG4gIGFkZE1vdXNlRXZlbnRIYW5kbGVycygpIHtcbiAgICBjb25zdCBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKHRoaXMuY2FudmFzKSxcbiAgICAgICAgICBtb3VzZVVwSGFuZGxlciA9IHRoaXMubW91c2VVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZURvd25IYW5kbGVyID0gdGhpcy5tb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VNb3ZlSGFuZGxlciA9IHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlV2hlZWxIYW5kbGVyID0gdGhpcy5tb3VzZVdoZWVsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VVcEhhbmRsZXIobW91c2VVcEhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlRG93bkhhbmRsZXIobW91c2VEb3duSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIC8vL1xuICB9XG5cbiAgb25VcGRhdGUodXBkYXRlSGFuZGxlcikge1xuICAgIHRoaXMudXBkYXRlSGFuZGxlciA9IHVwZGF0ZUhhbmRsZXI7XG4gIH1cbiAgXG4gIGZvcmNlVXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgeEFuZ2xlID0gYW5nbGVzLmdldFhBbmdsZSgpLFxuICAgICAgICAgIHlBbmdsZSA9IGFuZ2xlcy5nZXRZQW5nbGUoKSxcbiAgICAgICAgICB6QW5nbGUgPSBhbmdsZXMuZ2V0WkFuZ2xlKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICB3aWR0aCA9IHRoaXMuY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgb2Zmc2V0TWF0cml4ID0gT2Zmc2V0TWF0cml4LmZyb21PZmZzZXQodGhpcy5vZmZzZXQpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gUm90YXRpb25NYXRyaXguZnJvbVhBbmdsZVlBbmdsZUFuZFpBbmdsZSh4QW5nbGUsIHlBbmdsZSwgekFuZ2xlKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IFBvc2l0aW9uTWF0cml4LmZyb21EaXN0YW5jZShkaXN0YW5jZSksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IFByb2plY3Rpb25NYXRyaXguZnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeCA9IE5vcm1hbE1hdHJpeC5mcm9tUm90YXRpb25NYXRyaXgocm90YXRpb25NYXRyaXgpO1xuICAgIFxuICAgIGlmICh0aGlzLnVwZGF0ZUhhbmRsZXIpIHsgIC8vL1xuICAgICAgdGhpcy51cGRhdGVIYW5kbGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICAgIH1cbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgcmV0dXJuICh7XG4gICAgICBvblVwZGF0ZTogdGhpcy5vblVwZGF0ZS5iaW5kKHRoaXMpLFxuICAgICAgZm9yY2VVcGRhdGU6IHRoaXMuZm9yY2VVcGRhdGUuYmluZCh0aGlzKVxuICAgIH0pO1xuICB9XG4gIFxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYWRkS2V5RXZlbnRIYW5kbGVycygpO1xuICAgIHRoaXMuYWRkTW91c2VFdmVudEhhbmRsZXJzKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbFBvc2l0aW9uLCBpbml0aWFsT2Zmc2V0LCBjYW52YXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgem9vbSA9IFpvb20uZnJvbUluaXRpYWxQb3NpdGlvbihpbml0aWFsUG9zaXRpb24pLFxuICAgICAgICAgIG9mZnNldCA9IGluaXRpYWxPZmZzZXQsIC8vL1xuICAgICAgICAgIHVwZGF0ZUhhbmRsZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgY2FtZXJhID0gbmV3IENhbWVyYSh6b29tLCBvZmZzZXQsIHVwZGF0ZUhhbmRsZXIsIGNhbnZhcyk7XG4gICAgXG4gICAgY2FtZXJhLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW1lcmE7XG4iXX0=