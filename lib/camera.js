'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element'),
    Canvas = require('./canvas'),
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
    key: 'addKeyEventHandlers',
    value: function addKeyEventHandlers() {
      keyEvents.addCtrlKeyHandler(function (keyDown) {
        debugger;
      });

      keyEvents.addShiftKeyHandler(function (keyDown) {
        debugger;
      });
    }
  }, {
    key: 'addMouseEventHandlers',
    value: function addMouseEventHandlers() {
      var mouseEvents = MouseEvents.fromNothing(this.canvas);

      mouseEvents.addMouseUpEventHandler(angles.mouseUpEventHandler.bind(angles));

      mouseEvents.addMouseDownEventHandler(angles.mouseDownEventHandler.bind(angles));

      mouseEvents.addMouseMoveEventHandler(function (mouseCoordinates) {
        angles.mouseMoveEventHandler(mouseCoordinates);

        this.update();
      }.bind(this));

      mouseEvents.addMouseWheelEventHandler(function (delta) {
        this.zoom.mouseWheelEventHandler(delta);

        this.update();
      }.bind(this));
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
          zoom = Zoom.fromInitialPosition(initialPosition),
          offset = initialOffset,
          canvas = new Canvas(),
          updateHandler = null,
          camera = new Camera(zoom, offset, updateHandler, canvas);


      camera.initialise();

      return camera;
    }
  }]);

  return Camera;
}(Element);

module.exports = Camera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW1lcmEuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJDYW52YXMiLCJab29tIiwiYW5nbGVzIiwia2V5RXZlbnRzIiwiTW91c2VFdmVudHMiLCJPZmZzZXRNYXRyaXgiLCJOb3JtYWxNYXRyaXgiLCJSb3RhdGlvbk1hdHJpeCIsIlBvc2l0aW9uTWF0cml4IiwiUHJvamVjdGlvbk1hdHJpeCIsIkNhbWVyYSIsInpvb20iLCJvZmZzZXQiLCJ1cGRhdGVIYW5kbGVyIiwiY2FudmFzIiwiYWRkQ3RybEtleUhhbmRsZXIiLCJrZXlEb3duIiwiYWRkU2hpZnRLZXlIYW5kbGVyIiwibW91c2VFdmVudHMiLCJmcm9tTm90aGluZyIsImFkZE1vdXNlVXBFdmVudEhhbmRsZXIiLCJtb3VzZVVwRXZlbnRIYW5kbGVyIiwiYmluZCIsImFkZE1vdXNlRG93bkV2ZW50SGFuZGxlciIsIm1vdXNlRG93bkV2ZW50SGFuZGxlciIsImFkZE1vdXNlTW92ZUV2ZW50SGFuZGxlciIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZU1vdmVFdmVudEhhbmRsZXIiLCJ1cGRhdGUiLCJhZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwiZGVsdGEiLCJtb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJ4QW5nbGUiLCJnZXRYQW5nbGUiLCJ5QW5nbGUiLCJnZXRZQW5nbGUiLCJ6QW5nbGUiLCJnZXRaQW5nbGUiLCJkaXN0YW5jZSIsImdldERpc3RhbmNlIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsIm9mZnNldE1hdHJpeCIsImZyb21PZmZzZXQiLCJyb3RhdGlvbk1hdHJpeCIsImZyb21YQW5nbGVZQW5nbGVBbmRaQW5nbGUiLCJwb3NpdGlvbk1hdHJpeCIsImZyb21EaXN0YW5jZSIsInByb2plY3Rpb25NYXRyaXgiLCJmcm9tV2lkdGhBbmRIZWlnaHQiLCJub3JtYWxNYXRyaXgiLCJmcm9tUm90YXRpb25NYXRyaXgiLCJvblVwZGF0ZSIsImZvcmNlVXBkYXRlIiwiYWRkS2V5RXZlbnRIYW5kbGVycyIsImFkZE1vdXNlRXZlbnRIYW5kbGVycyIsInByb3BlcnRpZXMiLCJpbml0aWFsUG9zaXRpb24iLCJpbml0aWFsT2Zmc2V0IiwiZnJvbUluaXRpYWxQb3NpdGlvbiIsImNhbWVyYSIsImluaXRpYWxpc2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLFNBQVNELFFBQVEsVUFBUixDQURmO0FBQUEsSUFFTUUsT0FBT0YsUUFBUSxlQUFSLENBRmI7QUFBQSxJQUdNRyxTQUFTSCxRQUFRLGlCQUFSLENBSGY7QUFBQSxJQUlNSSxZQUFZSixRQUFRLG9CQUFSLENBSmxCO0FBQUEsSUFLTUssY0FBY0wsUUFBUSxzQkFBUixDQUxwQjtBQUFBLElBTU1NLGVBQWVOLFFBQVEsaUJBQVIsQ0FOckI7QUFBQSxJQU9NTyxlQUFlUCxRQUFRLGlCQUFSLENBUHJCO0FBQUEsSUFRTVEsaUJBQWlCUixRQUFRLG1CQUFSLENBUnZCO0FBQUEsSUFTTVMsaUJBQWlCVCxRQUFRLG1CQUFSLENBVHZCO0FBQUEsSUFVTVUsbUJBQW1CVixRQUFRLHFCQUFSLENBVnpCOztJQVlNVyxNOzs7QUFDSixrQkFBWUMsSUFBWixFQUFrQkMsTUFBbEIsRUFBMEJDLGFBQTFCLEVBQXlDQyxNQUF6QyxFQUFpRDtBQUFBOztBQUFBOztBQUcvQyxVQUFLSCxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQU4rQztBQU9oRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0gsSUFBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7O3VDQUVrQjtBQUNqQixh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QUFMLENBQXlCRixlQUF6QixDQUZtQjtBQUFBLFVBRzFCakQsTUFIMEIsR0FHakJrRCxhQUhpQjtBQUFBLFVBSTFCaEQsTUFKMEIsR0FJakIsSUFBSWQsTUFBSixFQUppQjtBQUFBLFVBSzFCYSxhQUwwQixHQUtWLElBTFU7QUFBQSxVQU0xQm1ELE1BTjBCLEdBTWpCLElBQUl0RCxNQUFKLENBQVdDLElBQVgsRUFBaUJDLE1BQWpCLEVBQXlCQyxhQUF6QixFQUF3Q0MsTUFBeEMsQ0FOaUI7OztBQVFoQ2tELGFBQU9DLFVBQVA7O0FBRUEsYUFBT0QsTUFBUDtBQUNEOzs7O0VBN0drQmxFLE87O0FBZ0hyQm9FLE9BQU9DLE9BQVAsR0FBaUJ6RCxNQUFqQiIsImZpbGUiOiJjYW1lcmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKSxcbiAgICAgIENhbnZhcyA9IHJlcXVpcmUoJy4vY2FudmFzJyksXG4gICAgICBab29tID0gcmVxdWlyZSgnLi9jYW1lcmEvem9vbScpLFxuICAgICAgYW5nbGVzID0gcmVxdWlyZSgnLi9jYW1lcmEvYW5nbGVzJyksXG4gICAgICBrZXlFdmVudHMgPSByZXF1aXJlKCcuL2NhbWVyYS9rZXlFdmVudHMnKSxcbiAgICAgIE1vdXNlRXZlbnRzID0gcmVxdWlyZSgnLi9jYW1lcmEvbW91c2VFdmVudHMnKSxcbiAgICAgIE9mZnNldE1hdHJpeCA9IHJlcXVpcmUoJy4vbWF0cml4L29mZnNldCcpLFxuICAgICAgTm9ybWFsTWF0cml4ID0gcmVxdWlyZSgnLi9tYXRyaXgvbm9ybWFsJyksXG4gICAgICBSb3RhdGlvbk1hdHJpeCA9IHJlcXVpcmUoJy4vbWF0cml4L3JvdGF0aW9uJyksXG4gICAgICBQb3NpdGlvbk1hdHJpeCA9IHJlcXVpcmUoJy4vbWF0cml4L3Bvc2l0aW9uJyksXG4gICAgICBQcm9qZWN0aW9uTWF0cml4ID0gcmVxdWlyZSgnLi9tYXRyaXgvcHJvamVjdGlvbicpO1xuXG5jbGFzcyBDYW1lcmEgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioem9vbSwgb2Zmc2V0LCB1cGRhdGVIYW5kbGVyLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuICAgIFxuICAgIHRoaXMuem9vbSA9IHpvb207XG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgdGhpcy51cGRhdGVIYW5kbGVyID0gdXBkYXRlSGFuZGxlcjtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuXG4gIGdldFpvb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuem9vbTtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXQ7XG4gIH1cblxuICBnZXRVcGRhdGVIYW5kbGVyKCkge1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZUhhbmRsZXI7XG4gIH1cblxuICBnZXRDYW52YXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzO1xuICB9XG5cbiAgYWRkS2V5RXZlbnRIYW5kbGVycygpIHtcbiAgICBrZXlFdmVudHMuYWRkQ3RybEtleUhhbmRsZXIoZnVuY3Rpb24oa2V5RG93bikge1xuICAgICAgZGVidWdnZXJcbiAgICB9KTtcblxuICAgIGtleUV2ZW50cy5hZGRTaGlmdEtleUhhbmRsZXIoZnVuY3Rpb24oa2V5RG93bikge1xuICAgICAgZGVidWdnZXJcbiAgICB9KTtcbiAgfVxuICBcbiAgYWRkTW91c2VFdmVudEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcodGhpcy5jYW52YXMpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VVcEV2ZW50SGFuZGxlcihhbmdsZXMubW91c2VVcEV2ZW50SGFuZGxlci5iaW5kKGFuZ2xlcykpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VEb3duRXZlbnRIYW5kbGVyKGFuZ2xlcy5tb3VzZURvd25FdmVudEhhbmRsZXIuYmluZChhbmdsZXMpKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUV2ZW50SGFuZGxlcihmdW5jdGlvbihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgICBhbmdsZXMubW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGZ1bmN0aW9uKGRlbHRhKSB7XG4gICAgICB0aGlzLnpvb20ubW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSk7XG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgLy8vXG4gIH1cblxuICBvblVwZGF0ZSh1cGRhdGVIYW5kbGVyKSB7XG4gICAgdGhpcy51cGRhdGVIYW5kbGVyID0gdXBkYXRlSGFuZGxlcjtcbiAgfVxuICBcbiAgZm9yY2VVcGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB4QW5nbGUgPSBhbmdsZXMuZ2V0WEFuZ2xlKCksXG4gICAgICAgICAgeUFuZ2xlID0gYW5nbGVzLmdldFlBbmdsZSgpLFxuICAgICAgICAgIHpBbmdsZSA9IGFuZ2xlcy5nZXRaQW5nbGUoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIHdpZHRoID0gdGhpcy5jYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBvZmZzZXRNYXRyaXggPSBPZmZzZXRNYXRyaXguZnJvbU9mZnNldCh0aGlzLm9mZnNldCksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXggPSBSb3RhdGlvbk1hdHJpeC5mcm9tWEFuZ2xlWUFuZ2xlQW5kWkFuZ2xlKHhBbmdsZSwgeUFuZ2xlLCB6QW5nbGUpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gUG9zaXRpb25NYXRyaXguZnJvbURpc3RhbmNlKGRpc3RhbmNlKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gUHJvamVjdGlvbk1hdHJpeC5mcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsTWF0cml4ID0gTm9ybWFsTWF0cml4LmZyb21Sb3RhdGlvbk1hdHJpeChyb3RhdGlvbk1hdHJpeCk7XG4gICAgXG4gICAgaWYgKHRoaXMudXBkYXRlSGFuZGxlcikgeyAgLy8vXG4gICAgICB0aGlzLnVwZGF0ZUhhbmRsZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG4gICAgfVxuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICByZXR1cm4gKHtcbiAgICAgIG9uVXBkYXRlOiB0aGlzLm9uVXBkYXRlLmJpbmQodGhpcyksXG4gICAgICBmb3JjZVVwZGF0ZTogdGhpcy5mb3JjZVVwZGF0ZS5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH1cbiAgXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hZGRLZXlFdmVudEhhbmRsZXJzKCk7XG4gICAgdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcnMoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsUG9zaXRpb24sIGluaXRpYWxPZmZzZXQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgem9vbSA9IFpvb20uZnJvbUluaXRpYWxQb3NpdGlvbihpbml0aWFsUG9zaXRpb24pLFxuICAgICAgICAgIG9mZnNldCA9IGluaXRpYWxPZmZzZXQsIC8vL1xuICAgICAgICAgIGNhbnZhcyA9IG5ldyBDYW52YXMoKSwgIC8vL1xuICAgICAgICAgIHVwZGF0ZUhhbmRsZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgY2FtZXJhID0gbmV3IENhbWVyYSh6b29tLCBvZmZzZXQsIHVwZGF0ZUhhbmRsZXIsIGNhbnZhcyk7XG4gICAgXG4gICAgY2FtZXJhLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW1lcmE7XG4iXX0=