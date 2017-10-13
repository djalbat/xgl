'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element'),
    Pan = require('./camera/pan'),
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

  function Camera(pan, zoom, handler, mouseDown, canvas) {
    _classCallCheck(this, Camera);

    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));

    _this.pan = pan;
    _this.zoom = zoom;
    _this.handler = handler;
    _this.mouseDown = mouseDown;
    _this.canvas = canvas;
    return _this;
  }

  _createClass(Camera, [{
    key: 'getPan',
    value: function getPan() {
      return this.pan;
    }
  }, {
    key: 'getZoom',
    value: function getZoom() {
      return this.zoom;
    }
  }, {
    key: 'getHandler',
    value: function getHandler() {
      return this.handler;
    }
  }, {
    key: 'getCanvas',
    value: function getCanvas() {
      return this.canvas;
    }
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler(mouseCoordinates) {
      this.mouseDown = false;

      angles.mouseUpHandler(mouseCoordinates);
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates) {
      this.mouseDown = true;

      angles.mouseDownHandler(mouseCoordinates);
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates) {
      angles.mouseMoveHandler(mouseCoordinates);

      if (this.mouseDown) {
        this.update();
      }
    }
  }, {
    key: 'mouseWheelHandler',
    value: function mouseWheelHandler(delta) {
      this.zoom.mouseWheelEventHandler(delta);

      this.update();
    }
  }, {
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {
      angles.shiftKeyHandler(shiftKeyDown);
    }
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
    value: function onUpdate(handler) {
      this.handler = handler;
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
          width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          offset = this.pan.getOffset(),
          distance = this.zoom.getDistance(),
          offsetMatrix = OffsetMatrix.fromOffset(offset),
          rotationMatrix = RotationMatrix.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle),
          positionMatrix = PositionMatrix.fromDistance(distance),
          projectionMatrix = ProjectionMatrix.fromWidthAndHeight(width, height),
          normalMatrix = NormalMatrix.fromRotationMatrix(rotationMatrix);

      if (this.handler) {
        ///
        this.handler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
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
      var initialDistance = properties.initialDistance,
          initialOffset = properties.initialOffset,
          canvas = properties.canvas,
          pan = Pan.fromInitialOffset(initialOffset),
          zoom = Zoom.fromInitialDistance(initialDistance),
          handler = null,
          mouseDown = false,
          camera = new Camera(pan, zoom, handler, mouseDown, canvas);


      camera.initialise();

      return camera;
    }
  }]);

  return Camera;
}(Element);

module.exports = Camera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW1lcmEuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJQYW4iLCJab29tIiwiYW5nbGVzIiwia2V5RXZlbnRzIiwiTW91c2VFdmVudHMiLCJPZmZzZXRNYXRyaXgiLCJOb3JtYWxNYXRyaXgiLCJSb3RhdGlvbk1hdHJpeCIsIlBvc2l0aW9uTWF0cml4IiwiUHJvamVjdGlvbk1hdHJpeCIsIkNhbWVyYSIsInBhbiIsInpvb20iLCJoYW5kbGVyIiwibW91c2VEb3duIiwiY2FudmFzIiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlVXBIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlTW92ZUhhbmRsZXIiLCJ1cGRhdGUiLCJkZWx0YSIsIm1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJzaGlmdEtleURvd24iLCJzaGlmdEtleUhhbmRsZXIiLCJiaW5kIiwiYWRkU2hpZnRLZXlIYW5kbGVyIiwibW91c2VFdmVudHMiLCJmcm9tTm90aGluZyIsIm1vdXNlV2hlZWxIYW5kbGVyIiwiYWRkTW91c2VVcEhhbmRsZXIiLCJhZGRNb3VzZURvd25IYW5kbGVyIiwiYWRkTW91c2VNb3ZlSGFuZGxlciIsImFkZE1vdXNlV2hlZWxIYW5kbGVyIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJ4QW5nbGUiLCJnZXRYQW5nbGUiLCJ5QW5nbGUiLCJnZXRZQW5nbGUiLCJ6QW5nbGUiLCJnZXRaQW5nbGUiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwib2Zmc2V0IiwiZ2V0T2Zmc2V0IiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsIm9mZnNldE1hdHJpeCIsImZyb21PZmZzZXQiLCJyb3RhdGlvbk1hdHJpeCIsImZyb21YQW5nbGVZQW5nbGVBbmRaQW5nbGUiLCJwb3NpdGlvbk1hdHJpeCIsImZyb21EaXN0YW5jZSIsInByb2plY3Rpb25NYXRyaXgiLCJmcm9tV2lkdGhBbmRIZWlnaHQiLCJub3JtYWxNYXRyaXgiLCJmcm9tUm90YXRpb25NYXRyaXgiLCJvblVwZGF0ZSIsImZvcmNlVXBkYXRlIiwiYWRkS2V5RXZlbnRIYW5kbGVycyIsImFkZE1vdXNlRXZlbnRIYW5kbGVycyIsInByb3BlcnRpZXMiLCJpbml0aWFsRGlzdGFuY2UiLCJpbml0aWFsT2Zmc2V0IiwiZnJvbUluaXRpYWxPZmZzZXQiLCJmcm9tSW5pdGlhbERpc3RhbmNlIiwiY2FtZXJhIiwiaW5pdGlhbGlzZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsTUFBTUQsUUFBUSxjQUFSLENBRFo7QUFBQSxJQUVNRSxPQUFPRixRQUFRLGVBQVIsQ0FGYjtBQUFBLElBR01HLFNBQVNILFFBQVEsaUJBQVIsQ0FIZjtBQUFBLElBSU1JLFlBQVlKLFFBQVEsb0JBQVIsQ0FKbEI7QUFBQSxJQUtNSyxjQUFjTCxRQUFRLHNCQUFSLENBTHBCO0FBQUEsSUFNTU0sZUFBZU4sUUFBUSxpQkFBUixDQU5yQjtBQUFBLElBT01PLGVBQWVQLFFBQVEsaUJBQVIsQ0FQckI7QUFBQSxJQVFNUSxpQkFBaUJSLFFBQVEsbUJBQVIsQ0FSdkI7QUFBQSxJQVNNUyxpQkFBaUJULFFBQVEsbUJBQVIsQ0FUdkI7QUFBQSxJQVVNVSxtQkFBbUJWLFFBQVEscUJBQVIsQ0FWekI7O0lBWU1XLE07OztBQUNKLGtCQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixFQUF1QkMsT0FBdkIsRUFBZ0NDLFNBQWhDLEVBQTJDQyxNQUEzQyxFQUFtRDtBQUFBOztBQUFBOztBQUdqRCxVQUFLSixHQUFMLEdBQVdBLEdBQVg7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxVQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQVBpRDtBQVFsRDs7Ozs2QkFFUTtBQUNQLGFB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YUEsVUFBSSxLQUFLdkMsT0FBVCxFQUFrQjtBQUFHO0FBQ25CLGFBQUtBLE9BQUwsQ0FBYXFDLFlBQWIsRUFBMkJFLGNBQTNCLEVBQTJDRSxjQUEzQyxFQUEyREUsZ0JBQTNELEVBQTZFRSxZQUE3RTtBQUNEO0FBQ0Y7OztvQ0FFZTtBQUNkLGFBQVE7QUFDTkUsa0JBQVUsS0FBS0EsUUFBTCxDQUFjbkMsSUFBZCxDQUFtQixJQUFuQixDQURKO0FBRU5vQyxxQkFBYSxLQUFLQSxXQUFMLENBQWlCcEMsSUFBakIsQ0FBc0IsSUFBdEI7QUFGUCxPQUFSO0FBSUQ7OztpQ0FFWTtBQUNYLFdBQUtxQyxtQkFBTDtBQUNBLFdBQUtDLHFCQUFMO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUFBLFVBQ3hCQyxlQUR3QixHQUNtQkQsVUFEbkIsQ0FDeEJDLGVBRHdCO0FBQUEsVUFDUEMsYUFETyxHQUNtQkYsVUFEbkIsQ0FDUEUsYUFETztBQUFBLFVBQ1FuRCxNQURSLEdBQ21CaUQsVUFEbkIsQ0FDUWpELE1BRFI7QUFBQSxVQUUxQkosR0FGMEIsR0FFcEJYLElBQUltRSxpQkFBSixDQUFzQkQsYUFBdEIsQ0FGb0I7QUFBQSxVQUcxQnRELElBSDBCLEdBR25CWCxLQUFLbUUsbUJBQUwsQ0FBeUJILGVBQXpCLENBSG1CO0FBQUEsVUFJMUJwRCxPQUowQixHQUloQixJQUpnQjtBQUFBLFVBSzFCQyxTQUwwQixHQUtkLEtBTGM7QUFBQSxVQU0xQnVELE1BTjBCLEdBTWpCLElBQUkzRCxNQUFKLENBQVdDLEdBQVgsRUFBZ0JDLElBQWhCLEVBQXNCQyxPQUF0QixFQUErQkMsU0FBL0IsRUFBMENDLE1BQTFDLENBTmlCOzs7QUFRaENzRCxhQUFPQyxVQUFQOztBQUVBLGFBQU9ELE1BQVA7QUFDRDs7OztFQWxJa0J2RSxPOztBQXFJckJ5RSxPQUFPQyxPQUFQLEdBQWlCOUQsTUFBakIiLCJmaWxlIjoiY2FtZXJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBQYW4gPSByZXF1aXJlKCcuL2NhbWVyYS9wYW4nKSxcbiAgICAgIFpvb20gPSByZXF1aXJlKCcuL2NhbWVyYS96b29tJyksXG4gICAgICBhbmdsZXMgPSByZXF1aXJlKCcuL2NhbWVyYS9hbmdsZXMnKSxcbiAgICAgIGtleUV2ZW50cyA9IHJlcXVpcmUoJy4vY2FtZXJhL2tleUV2ZW50cycpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuL2NhbWVyYS9tb3VzZUV2ZW50cycpLFxuICAgICAgT2Zmc2V0TWF0cml4ID0gcmVxdWlyZSgnLi9tYXRyaXgvb2Zmc2V0JyksXG4gICAgICBOb3JtYWxNYXRyaXggPSByZXF1aXJlKCcuL21hdHJpeC9ub3JtYWwnKSxcbiAgICAgIFJvdGF0aW9uTWF0cml4ID0gcmVxdWlyZSgnLi9tYXRyaXgvcm90YXRpb24nKSxcbiAgICAgIFBvc2l0aW9uTWF0cml4ID0gcmVxdWlyZSgnLi9tYXRyaXgvcG9zaXRpb24nKSxcbiAgICAgIFByb2plY3Rpb25NYXRyaXggPSByZXF1aXJlKCcuL21hdHJpeC9wcm9qZWN0aW9uJyk7XG5cbmNsYXNzIENhbWVyYSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihwYW4sIHpvb20sIGhhbmRsZXIsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgc3VwZXIoKTtcbiAgICBcbiAgICB0aGlzLnBhbiA9IHBhbjtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cbiAgXG4gIGdldFBhbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYW47XG4gIH1cblxuICBnZXRab29tKCkge1xuICAgIHJldHVybiB0aGlzLnpvb207XG4gIH1cblxuICBnZXRIYW5kbGVyKCkge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXI7XG4gIH1cblxuICBnZXRDYW52YXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzO1xuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG5cbiAgICBhbmdsZXMubW91c2VVcEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG5cbiAgICBhbmdsZXMubW91c2VEb3duSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIGFuZ2xlcy5tb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgaWYgKHRoaXMubW91c2VEb3duKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKGRlbHRhKSB7XG4gICAgdGhpcy56b29tLm1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pIHtcbiAgICBhbmdsZXMuc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bik7XG4gIH1cblxuICBhZGRLZXlFdmVudEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IHNoaWZ0S2V5SGFuZGxlciA9IHRoaXMuc2hpZnRLZXlIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICBrZXlFdmVudHMuYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcik7XG4gIH1cbiAgXG4gIGFkZE1vdXNlRXZlbnRIYW5kbGVycygpIHtcbiAgICBjb25zdCBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKHRoaXMuY2FudmFzKSxcbiAgICAgICAgICBtb3VzZVVwSGFuZGxlciA9IHRoaXMubW91c2VVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZURvd25IYW5kbGVyID0gdGhpcy5tb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VNb3ZlSGFuZGxlciA9IHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlV2hlZWxIYW5kbGVyID0gdGhpcy5tb3VzZVdoZWVsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VVcEhhbmRsZXIobW91c2VVcEhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlRG93bkhhbmRsZXIobW91c2VEb3duSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIC8vL1xuICB9XG5cbiAgb25VcGRhdGUoaGFuZGxlcikge1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gIH1cbiAgXG4gIGZvcmNlVXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgeEFuZ2xlID0gYW5nbGVzLmdldFhBbmdsZSgpLFxuICAgICAgICAgIHlBbmdsZSA9IGFuZ2xlcy5nZXRZQW5nbGUoKSxcbiAgICAgICAgICB6QW5nbGUgPSBhbmdsZXMuZ2V0WkFuZ2xlKCksXG4gICAgICAgICAgd2lkdGggPSB0aGlzLmNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIG9mZnNldCA9IHRoaXMucGFuLmdldE9mZnNldCgpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgb2Zmc2V0TWF0cml4ID0gT2Zmc2V0TWF0cml4LmZyb21PZmZzZXQob2Zmc2V0KSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeCA9IFJvdGF0aW9uTWF0cml4LmZyb21YQW5nbGVZQW5nbGVBbmRaQW5nbGUoeEFuZ2xlLCB5QW5nbGUsIHpBbmdsZSksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBQb3NpdGlvbk1hdHJpeC5mcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBQcm9qZWN0aW9uTWF0cml4LmZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxNYXRyaXggPSBOb3JtYWxNYXRyaXguZnJvbVJvdGF0aW9uTWF0cml4KHJvdGF0aW9uTWF0cml4KTtcbiAgICBcbiAgICBpZiAodGhpcy5oYW5kbGVyKSB7ICAvLy9cbiAgICAgIHRoaXMuaGFuZGxlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgICB9XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIHJldHVybiAoe1xuICAgICAgb25VcGRhdGU6IHRoaXMub25VcGRhdGUuYmluZCh0aGlzKSxcbiAgICAgIGZvcmNlVXBkYXRlOiB0aGlzLmZvcmNlVXBkYXRlLmJpbmQodGhpcylcbiAgICB9KTtcbiAgfVxuICBcbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFkZEtleUV2ZW50SGFuZGxlcnMoKTtcbiAgICB0aGlzLmFkZE1vdXNlRXZlbnRIYW5kbGVycygpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxEaXN0YW5jZSwgaW5pdGlhbE9mZnNldCwgY2FudmFzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBhbiA9IFBhbi5mcm9tSW5pdGlhbE9mZnNldChpbml0aWFsT2Zmc2V0KSxcbiAgICAgICAgICB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSksXG4gICAgICAgICAgaGFuZGxlciA9IG51bGwsICAvLy9cbiAgICAgICAgICBtb3VzZURvd24gPSBmYWxzZSxcbiAgICAgICAgICBjYW1lcmEgPSBuZXcgQ2FtZXJhKHBhbiwgem9vbSwgaGFuZGxlciwgbW91c2VEb3duLCBjYW52YXMpO1xuICAgIFxuICAgIGNhbWVyYS5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FtZXJhO1xuIl19