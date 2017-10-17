'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element'),
    Pan = require('./camera/pan'),
    Zoom = require('./camera/zoom'),
    tilt = require('./camera/tilt'),
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

      tilt.mouseUpHandler();

      this.pan.mouseUpHandler();
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates) {
      this.mouseDown = true;

      tilt.mouseDownHandler();

      this.pan.mouseDownHandler();
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates) {
      tilt.mouseMoveHandler(mouseCoordinates);

      this.pan.mouseMoveHandler(mouseCoordinates, tilt);

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
      tilt.shiftKeyHandler(shiftKeyDown);

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
          rotationMatrix = RotationMatrix.fromAngles(tilt),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW1lcmEuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJQYW4iLCJab29tIiwidGlsdCIsImtleUV2ZW50cyIsIk1vdXNlRXZlbnRzIiwiT2Zmc2V0TWF0cml4IiwiTm9ybWFsTWF0cml4IiwiUm90YXRpb25NYXRyaXgiLCJQb3NpdGlvbk1hdHJpeCIsIlByb2plY3Rpb25NYXRyaXgiLCJDYW1lcmEiLCJwYW4iLCJ6b29tIiwiaGFuZGxlciIsIm1vdXNlRG93biIsImNhbnZhcyIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZVVwSGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVyIiwidXBkYXRlIiwiZGVsdGEiLCJtb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwic2hpZnRLZXlEb3duIiwic2hpZnRLZXlIYW5kbGVyIiwiYmluZCIsImFkZFNoaWZ0S2V5SGFuZGxlciIsIm1vdXNlRXZlbnRzIiwiZnJvbU5vdGhpbmciLCJtb3VzZVdoZWVsSGFuZGxlciIsImFkZE1vdXNlVXBIYW5kbGVyIiwiYWRkTW91c2VEb3duSGFuZGxlciIsImFkZE1vdXNlTW92ZUhhbmRsZXIiLCJhZGRNb3VzZVdoZWVsSGFuZGxlciIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsIm9mZnNldCIsImdldE9mZnNldCIsImRpc3RhbmNlIiwiZ2V0RGlzdGFuY2UiLCJvZmZzZXRNYXRyaXgiLCJmcm9tT2Zmc2V0Iiwicm90YXRpb25NYXRyaXgiLCJmcm9tQW5nbGVzIiwicG9zaXRpb25NYXRyaXgiLCJmcm9tRGlzdGFuY2UiLCJwcm9qZWN0aW9uTWF0cml4IiwiZnJvbVdpZHRoQW5kSGVpZ2h0Iiwibm9ybWFsTWF0cml4IiwiZnJvbVJvdGF0aW9uTWF0cml4Iiwib25VcGRhdGUiLCJmb3JjZVVwZGF0ZSIsImFkZEtleUV2ZW50SGFuZGxlcnMiLCJhZGRNb3VzZUV2ZW50SGFuZGxlcnMiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbERpc3RhbmNlIiwiaW5pdGlhbE9mZnNldCIsImZyb21Jbml0aWFsT2Zmc2V0IiwiZnJvbUluaXRpYWxEaXN0YW5jZSIsImNhbWVyYSIsImluaXRpYWxpc2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLE1BQU1ELFFBQVEsY0FBUixDQURaO0FBQUEsSUFFTUUsT0FBT0YsUUFBUSxlQUFSLENBRmI7QUFBQSxJQUdNRyxPQUFPSCxRQUFRLGVBQVIsQ0FIYjtBQUFBLElBSU1JLFlBQVlKLFFBQVEsb0JBQVIsQ0FKbEI7QUFBQSxJQUtNSyxjQUFjTCxRQUFRLHNCQUFSLENBTHBCO0FBQUEsSUFNTU0sZUFBZU4sUUFBUSxpQkFBUixDQU5yQjtBQUFBLElBT01PLGVBQWVQLFFBQVEsaUJBQVIsQ0FQckI7QUFBQSxJQVFNUSxpQkFBaUJSLFFBQVEsbUJBQVIsQ0FSdkI7QUFBQSxJQVNNUyxpQkFBaUJULFFBQVEsbUJBQVIsQ0FUdkI7QUFBQSxJQVVNVSxtQkFBbUJWLFFBQVEscUJBQVIsQ0FWekI7O0lBWU1XLE07OztBQUNKLGtCQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixFQUF1QkMsT0FBdkIsRUFBZ0NDLFNBQWhDLEVBQTJDQyxNQUEzQyxFQUFtRDtBQUFBOztBQUFBOztBQUdqRCxVQUFLSixHQUFMLEdBQVdBLEdBQVg7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxVQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQVBpRDtBQVFsRDs7OzttQ0FFY0MsZ0IsRUFBa0I7QUFDL0IsV0FBS0YsU0FBTCxHQUFpQixLQUFqQjs7QUFFQVosV0FBS2UsY0FBTDs7QUFFQSxXQUFLTixHQUFMLENBQVNNLGNBQVQ7QUFD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OUIsSUFBakIsQ0FBc0IsSUFBdEI7QUFGUCxPQUFSO0FBSUQ7OztpQ0FFWTtBQUNYLFdBQUsrQixtQkFBTDtBQUNBLFdBQUtDLHFCQUFMO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUFBLFVBQ3hCQyxlQUR3QixHQUNtQkQsVUFEbkIsQ0FDeEJDLGVBRHdCO0FBQUEsVUFDUEMsYUFETyxHQUNtQkYsVUFEbkIsQ0FDUEUsYUFETztBQUFBLFVBQ1E3QyxNQURSLEdBQ21CMkMsVUFEbkIsQ0FDUTNDLE1BRFI7QUFBQSxVQUUxQkosR0FGMEIsR0FFcEJYLElBQUk2RCxpQkFBSixDQUFzQkQsYUFBdEIsQ0FGb0I7QUFBQSxVQUcxQmhELElBSDBCLEdBR25CWCxLQUFLNkQsbUJBQUwsQ0FBeUJILGVBQXpCLENBSG1CO0FBQUEsVUFJMUI5QyxPQUowQixHQUloQixJQUpnQjtBQUFBLFVBSzFCQyxTQUwwQixHQUtkLEtBTGM7QUFBQSxVQU0xQmlELE1BTjBCLEdBTWpCLElBQUlyRCxNQUFKLENBQVdDLEdBQVgsRUFBZ0JDLElBQWhCLEVBQXNCQyxPQUF0QixFQUErQkMsU0FBL0IsRUFBMENDLE1BQTFDLENBTmlCOzs7QUFRaENnRCxhQUFPQyxVQUFQOztBQUVBLGFBQU9ELE1BQVA7QUFDRDs7OztFQXZIa0JqRSxPOztBQTBIckJtRSxPQUFPQyxPQUFQLEdBQWlCeEQsTUFBakIiLCJmaWxlIjoiY2FtZXJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBQYW4gPSByZXF1aXJlKCcuL2NhbWVyYS9wYW4nKSxcbiAgICAgIFpvb20gPSByZXF1aXJlKCcuL2NhbWVyYS96b29tJyksXG4gICAgICB0aWx0ID0gcmVxdWlyZSgnLi9jYW1lcmEvdGlsdCcpLFxuICAgICAga2V5RXZlbnRzID0gcmVxdWlyZSgnLi9jYW1lcmEva2V5RXZlbnRzJyksXG4gICAgICBNb3VzZUV2ZW50cyA9IHJlcXVpcmUoJy4vY2FtZXJhL21vdXNlRXZlbnRzJyksXG4gICAgICBPZmZzZXRNYXRyaXggPSByZXF1aXJlKCcuL21hdHJpeC9vZmZzZXQnKSxcbiAgICAgIE5vcm1hbE1hdHJpeCA9IHJlcXVpcmUoJy4vbWF0cml4L25vcm1hbCcpLFxuICAgICAgUm90YXRpb25NYXRyaXggPSByZXF1aXJlKCcuL21hdHJpeC9yb3RhdGlvbicpLFxuICAgICAgUG9zaXRpb25NYXRyaXggPSByZXF1aXJlKCcuL21hdHJpeC9wb3NpdGlvbicpLFxuICAgICAgUHJvamVjdGlvbk1hdHJpeCA9IHJlcXVpcmUoJy4vbWF0cml4L3Byb2plY3Rpb24nKTtcblxuY2xhc3MgQ2FtZXJhIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHBhbiwgem9vbSwgaGFuZGxlciwgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuICAgIFxuICAgIHRoaXMucGFuID0gcGFuO1xuICAgIHRoaXMuem9vbSA9IHpvb207XG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuICBcbiAgbW91c2VVcEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgXG4gICAgdGlsdC5tb3VzZVVwSGFuZGxlcigpO1xuXG4gICAgdGhpcy5wYW4ubW91c2VVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgICBcbiAgICB0aWx0Lm1vdXNlRG93bkhhbmRsZXIoKTtcblxuICAgIHRoaXMucGFuLm1vdXNlRG93bkhhbmRsZXIoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIHRpbHQubW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMucGFuLm1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgdGlsdCk7XG5cbiAgICBpZiAodGhpcy5tb3VzZURvd24pIHtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VXaGVlbEhhbmRsZXIoZGVsdGEpIHtcbiAgICB0aGlzLnpvb20ubW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIHRpbHQuc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bik7XG5cbiAgICB0aGlzLnBhbi5zaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKTtcbiAgfVxuXG4gIGFkZEtleUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlIYW5kbGVyID0gdGhpcy5zaGlmdEtleUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIGtleUV2ZW50cy5hZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKTtcbiAgfVxuICBcbiAgYWRkTW91c2VFdmVudEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcodGhpcy5jYW52YXMpLFxuICAgICAgICAgIG1vdXNlVXBIYW5kbGVyID0gdGhpcy5tb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlRG93bkhhbmRsZXIgPSB0aGlzLm1vdXNlRG93bkhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZU1vdmVIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VXaGVlbEhhbmRsZXIgPSB0aGlzLm1vdXNlV2hlZWxIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVVwSGFuZGxlcihtb3VzZVVwSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VEb3duSGFuZGxlcihtb3VzZURvd25IYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgLy8vXG4gIH1cblxuICBvblVwZGF0ZShoYW5kbGVyKSB7XG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgfVxuICBcbiAgZm9yY2VVcGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgb2Zmc2V0ID0gdGhpcy5wYW4uZ2V0T2Zmc2V0KCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICBvZmZzZXRNYXRyaXggPSBPZmZzZXRNYXRyaXguZnJvbU9mZnNldChvZmZzZXQpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gUm90YXRpb25NYXRyaXguZnJvbUFuZ2xlcyh0aWx0KSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IFBvc2l0aW9uTWF0cml4LmZyb21EaXN0YW5jZShkaXN0YW5jZSksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IFByb2plY3Rpb25NYXRyaXguZnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeCA9IE5vcm1hbE1hdHJpeC5mcm9tUm90YXRpb25NYXRyaXgocm90YXRpb25NYXRyaXgpO1xuICAgIFxuICAgIGlmICh0aGlzLmhhbmRsZXIpIHsgIC8vL1xuICAgICAgdGhpcy5oYW5kbGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICAgIH1cbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgcmV0dXJuICh7XG4gICAgICBvblVwZGF0ZTogdGhpcy5vblVwZGF0ZS5iaW5kKHRoaXMpLFxuICAgICAgZm9yY2VVcGRhdGU6IHRoaXMuZm9yY2VVcGRhdGUuYmluZCh0aGlzKVxuICAgIH0pO1xuICB9XG4gIFxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYWRkS2V5RXZlbnRIYW5kbGVycygpO1xuICAgIHRoaXMuYWRkTW91c2VFdmVudEhhbmRsZXJzKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbERpc3RhbmNlLCBpbml0aWFsT2Zmc2V0LCBjYW52YXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0KGluaXRpYWxPZmZzZXQpLFxuICAgICAgICAgIHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSxcbiAgICAgICAgICBoYW5kbGVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLFxuICAgICAgICAgIGNhbWVyYSA9IG5ldyBDYW1lcmEocGFuLCB6b29tLCBoYW5kbGVyLCBtb3VzZURvd24sIGNhbnZhcyk7XG4gICAgXG4gICAgY2FtZXJhLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW1lcmE7XG4iXX0=