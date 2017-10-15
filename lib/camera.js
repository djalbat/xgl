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
    key: 'mouseUpHandler',
    value: function mouseUpHandler(mouseCoordinates) {
      this.mouseDown = false;

      angles.mouseUpHandler();

      this.pan.mouseUpHandler();
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates) {
      this.mouseDown = true;

      angles.mouseDownHandler();

      this.pan.mouseDownHandler();
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates) {
      angles.mouseMoveHandler(mouseCoordinates);

      this.pan.mouseMoveHandler(mouseCoordinates, angles);

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

      this.pan.shiftKeyHandler(shiftKeyDown);
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
      var width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          offset = this.pan.getOffset(),
          distance = this.zoom.getDistance(),
          offsetMatrix = OffsetMatrix.fromOffset(offset),
          rotationMatrix = RotationMatrix.fromAngles(angles),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW1lcmEuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJQYW4iLCJab29tIiwiYW5nbGVzIiwia2V5RXZlbnRzIiwiTW91c2VFdmVudHMiLCJPZmZzZXRNYXRyaXgiLCJOb3JtYWxNYXRyaXgiLCJSb3RhdGlvbk1hdHJpeCIsIlBvc2l0aW9uTWF0cml4IiwiUHJvamVjdGlvbk1hdHJpeCIsIkNhbWVyYSIsInBhbiIsInpvb20iLCJoYW5kbGVyIiwibW91c2VEb3duIiwiY2FudmFzIiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlVXBIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlTW92ZUhhbmRsZXIiLCJ1cGRhdGUiLCJkZWx0YSIsIm1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJzaGlmdEtleURvd24iLCJzaGlmdEtleUhhbmRsZXIiLCJiaW5kIiwiYWRkU2hpZnRLZXlIYW5kbGVyIiwibW91c2VFdmVudHMiLCJmcm9tTm90aGluZyIsIm1vdXNlV2hlZWxIYW5kbGVyIiwiYWRkTW91c2VVcEhhbmRsZXIiLCJhZGRNb3VzZURvd25IYW5kbGVyIiwiYWRkTW91c2VNb3ZlSGFuZGxlciIsImFkZE1vdXNlV2hlZWxIYW5kbGVyIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwib2Zmc2V0IiwiZ2V0T2Zmc2V0IiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsIm9mZnNldE1hdHJpeCIsImZyb21PZmZzZXQiLCJyb3RhdGlvbk1hdHJpeCIsImZyb21BbmdsZXMiLCJwb3NpdGlvbk1hdHJpeCIsImZyb21EaXN0YW5jZSIsInByb2plY3Rpb25NYXRyaXgiLCJmcm9tV2lkdGhBbmRIZWlnaHQiLCJub3JtYWxNYXRyaXgiLCJmcm9tUm90YXRpb25NYXRyaXgiLCJvblVwZGF0ZSIsImZvcmNlVXBkYXRlIiwiYWRkS2V5RXZlbnRIYW5kbGVycyIsImFkZE1vdXNlRXZlbnRIYW5kbGVycyIsInByb3BlcnRpZXMiLCJpbml0aWFsRGlzdGFuY2UiLCJpbml0aWFsT2Zmc2V0IiwiZnJvbUluaXRpYWxPZmZzZXQiLCJmcm9tSW5pdGlhbERpc3RhbmNlIiwiY2FtZXJhIiwiaW5pdGlhbGlzZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsTUFBTUQsUUFBUSxjQUFSLENBRFo7QUFBQSxJQUVNRSxPQUFPRixRQUFRLGVBQVIsQ0FGYjtBQUFBLElBR01HLFNBQVNILFFBQVEsaUJBQVIsQ0FIZjtBQUFBLElBSU1JLFlBQVlKLFFBQVEsb0JBQVIsQ0FKbEI7QUFBQSxJQUtNSyxjQUFjTCxRQUFRLHNCQUFSLENBTHBCO0FBQUEsSUFNTU0sZUFBZU4sUUFBUSxpQkFBUixDQU5yQjtBQUFBLElBT01PLGVBQWVQLFFBQVEsaUJBQVIsQ0FQckI7QUFBQSxJQVFNUSxpQkFBaUJSLFFBQVEsbUJBQVIsQ0FSdkI7QUFBQSxJQVNNUyxpQkFBaUJULFFBQVEsbUJBQVIsQ0FUdkI7QUFBQSxJQVVNVSxtQkFBbUJWLFFBQVEscUJBQVIsQ0FWekI7O0lBWU1XLE07OztBQUNKLGtCQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixFQUF1QkMsT0FBdkIsRUFBZ0NDLFNBQWhDLEVBQTJDQyxNQUEzQyxFQUFtRDtBQUFBOztBQUFBOztBQUdqRCxVQUFLSixHQUFMLEdBQVdBLEdBQVg7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxVQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQVBpRDtBQVFsRDs7OzttQ0FFY0MsZ0IsRUFBa0I7QUFDL0IsV0FBS0YsU0FBTCxHQUFpQixLQUFqQjs7QUFFQVosYUFBT2UsY0FBUDs7QUFFQSxXQUFLTixHQUFMLENBQVNNLGNBQVQ7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QWlCOUIsSUFBakIsQ0FBc0IsSUFBdEI7QUFGUCxPQUFSO0FBSUQ7OztpQ0FFWTtBQUNYLFdBQUsrQixtQkFBTDtBQUNBLFdBQUtDLHFCQUFMO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUFBLFVBQ3hCQyxlQUR3QixHQUNtQkQsVUFEbkIsQ0FDeEJDLGVBRHdCO0FBQUEsVUFDUEMsYUFETyxHQUNtQkYsVUFEbkIsQ0FDUEUsYUFETztBQUFBLFVBQ1E3QyxNQURSLEdBQ21CMkMsVUFEbkIsQ0FDUTNDLE1BRFI7QUFBQSxVQUUxQkosR0FGMEIsR0FFcEJYLElBQUk2RCxpQkFBSixDQUFzQkQsYUFBdEIsQ0FGb0I7QUFBQSxVQUcxQmhELElBSDBCLEdBR25CWCxLQUFLNkQsbUJBQUwsQ0FBeUJILGVBQXpCLENBSG1CO0FBQUEsVUFJMUI5QyxPQUowQixHQUloQixJQUpnQjtBQUFBLFVBSzFCQyxTQUwwQixHQUtkLEtBTGM7QUFBQSxVQU0xQmlELE1BTjBCLEdBTWpCLElBQUlyRCxNQUFKLENBQVdDLEdBQVgsRUFBZ0JDLElBQWhCLEVBQXNCQyxPQUF0QixFQUErQkMsU0FBL0IsRUFBMENDLE1BQTFDLENBTmlCOzs7QUFRaENnRCxhQUFPQyxVQUFQOztBQUVBLGFBQU9ELE1BQVA7QUFDRDs7OztFQXZIa0JqRSxPOztBQTBIckJtRSxPQUFPQyxPQUFQLEdBQWlCeEQsTUFBakIiLCJmaWxlIjoiY2FtZXJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBQYW4gPSByZXF1aXJlKCcuL2NhbWVyYS9wYW4nKSxcbiAgICAgIFpvb20gPSByZXF1aXJlKCcuL2NhbWVyYS96b29tJyksXG4gICAgICBhbmdsZXMgPSByZXF1aXJlKCcuL2NhbWVyYS9hbmdsZXMnKSxcbiAgICAgIGtleUV2ZW50cyA9IHJlcXVpcmUoJy4vY2FtZXJhL2tleUV2ZW50cycpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuL2NhbWVyYS9tb3VzZUV2ZW50cycpLFxuICAgICAgT2Zmc2V0TWF0cml4ID0gcmVxdWlyZSgnLi9tYXRyaXgvb2Zmc2V0JyksXG4gICAgICBOb3JtYWxNYXRyaXggPSByZXF1aXJlKCcuL21hdHJpeC9ub3JtYWwnKSxcbiAgICAgIFJvdGF0aW9uTWF0cml4ID0gcmVxdWlyZSgnLi9tYXRyaXgvcm90YXRpb24nKSxcbiAgICAgIFBvc2l0aW9uTWF0cml4ID0gcmVxdWlyZSgnLi9tYXRyaXgvcG9zaXRpb24nKSxcbiAgICAgIFByb2plY3Rpb25NYXRyaXggPSByZXF1aXJlKCcuL21hdHJpeC9wcm9qZWN0aW9uJyk7XG5cbmNsYXNzIENhbWVyYSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihwYW4sIHpvb20sIGhhbmRsZXIsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgc3VwZXIoKTtcbiAgICBcbiAgICB0aGlzLnBhbiA9IHBhbjtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cbiAgXG4gIG1vdXNlVXBIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgIFxuICAgIGFuZ2xlcy5tb3VzZVVwSGFuZGxlcigpO1xuXG4gICAgdGhpcy5wYW4ubW91c2VVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgICBcbiAgICBhbmdsZXMubW91c2VEb3duSGFuZGxlcigpO1xuXG4gICAgdGhpcy5wYW4ubW91c2VEb3duSGFuZGxlcigpO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgYW5nbGVzLm1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICB0aGlzLnBhbi5tb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIGFuZ2xlcyk7XG5cbiAgICBpZiAodGhpcy5tb3VzZURvd24pIHtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VXaGVlbEhhbmRsZXIoZGVsdGEpIHtcbiAgICB0aGlzLnpvb20ubW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIGFuZ2xlcy5zaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKTtcblxuICAgIHRoaXMucGFuLnNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pO1xuICB9XG5cbiAgYWRkS2V5RXZlbnRIYW5kbGVycygpIHtcbiAgICBjb25zdCBzaGlmdEtleUhhbmRsZXIgPSB0aGlzLnNoaWZ0S2V5SGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAga2V5RXZlbnRzLmFkZFNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleUhhbmRsZXIpO1xuICB9XG4gIFxuICBhZGRNb3VzZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgY29uc3QgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZyh0aGlzLmNhbnZhcyksXG4gICAgICAgICAgbW91c2VVcEhhbmRsZXIgPSB0aGlzLm1vdXNlVXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VEb3duSGFuZGxlciA9IHRoaXMubW91c2VEb3duSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlTW92ZUhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsSGFuZGxlciA9IHRoaXMubW91c2VXaGVlbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICAvLy9cbiAgfVxuXG4gIG9uVXBkYXRlKGhhbmRsZXIpIHtcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICB9XG4gIFxuICBmb3JjZVVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5jYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBvZmZzZXQgPSB0aGlzLnBhbi5nZXRPZmZzZXQoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIG9mZnNldE1hdHJpeCA9IE9mZnNldE1hdHJpeC5mcm9tT2Zmc2V0KG9mZnNldCksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXggPSBSb3RhdGlvbk1hdHJpeC5mcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBQb3NpdGlvbk1hdHJpeC5mcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBQcm9qZWN0aW9uTWF0cml4LmZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxNYXRyaXggPSBOb3JtYWxNYXRyaXguZnJvbVJvdGF0aW9uTWF0cml4KHJvdGF0aW9uTWF0cml4KTtcbiAgICBcbiAgICBpZiAodGhpcy5oYW5kbGVyKSB7ICAvLy9cbiAgICAgIHRoaXMuaGFuZGxlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgICB9XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIHJldHVybiAoe1xuICAgICAgb25VcGRhdGU6IHRoaXMub25VcGRhdGUuYmluZCh0aGlzKSxcbiAgICAgIGZvcmNlVXBkYXRlOiB0aGlzLmZvcmNlVXBkYXRlLmJpbmQodGhpcylcbiAgICB9KTtcbiAgfVxuICBcbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFkZEtleUV2ZW50SGFuZGxlcnMoKTtcbiAgICB0aGlzLmFkZE1vdXNlRXZlbnRIYW5kbGVycygpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxEaXN0YW5jZSwgaW5pdGlhbE9mZnNldCwgY2FudmFzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBhbiA9IFBhbi5mcm9tSW5pdGlhbE9mZnNldChpbml0aWFsT2Zmc2V0KSxcbiAgICAgICAgICB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSksXG4gICAgICAgICAgaGFuZGxlciA9IG51bGwsICAvLy9cbiAgICAgICAgICBtb3VzZURvd24gPSBmYWxzZSxcbiAgICAgICAgICBjYW1lcmEgPSBuZXcgQ2FtZXJhKHBhbiwgem9vbSwgaGFuZGxlciwgbW91c2VEb3duLCBjYW52YXMpO1xuICAgIFxuICAgIGNhbWVyYS5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FtZXJhO1xuIl19