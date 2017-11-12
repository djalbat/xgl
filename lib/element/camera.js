'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    Pan = require('./camera/pan'),
    Zoom = require('./camera/zoom'),
    tilt = require('./camera/tilt'),
    keyEvents = require('./camera/keyEvents'),
    MouseEvents = require('./camera/mouseEvents'),
    cameraUtilities = require('../utilities/camera');

var offsetMatrixFromOffset = cameraUtilities.offsetMatrixFromOffset,
    rotationMatrixFromAngles = cameraUtilities.rotationMatrixFromAngles,
    positionMatrixFromDistance = cameraUtilities.positionMatrixFromDistance,
    projectionMatrixFromWidthAndHeight = cameraUtilities.projectionMatrixFromWidthAndHeight,
    normalMatrixFromRotationMatrix = cameraUtilities.normalMatrixFromRotationMatrix;

var Camera = function (_Element) {
  _inherits(Camera, _Element);

  function Camera(tilt, pan, zoom, handler, mouseDown, canvas) {
    _classCallCheck(this, Camera);

    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));

    _this.tilt = tilt;
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

      this.tilt.mouseUpHandler();

      this.pan.mouseUpHandler();
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates) {
      this.mouseDown = true;

      this.tilt.mouseDownHandler();

      this.pan.mouseDownHandler();
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates) {
      this.tilt.mouseMoveHandler(mouseCoordinates);

      this.pan.mouseMoveHandler(mouseCoordinates, this.tilt);

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
      this.tilt.shiftKeyHandler(shiftKeyDown);

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
          angles = this.tilt.getAngles(),
          distance = this.zoom.getDistance(),
          offsetMatrix = offsetMatrixFromOffset(offset),
          rotationMatrix = rotationMatrixFromAngles(angles),
          positionMatrix = positionMatrixFromDistance(distance),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalMatrix = normalMatrixFromRotationMatrix(rotationMatrix);

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
          camera = new Camera(tilt, pan, zoom, handler, mouseDown, canvas);


      camera.initialise();

      return camera;
    }
  }]);

  return Camera;
}(Element);

module.exports = Camera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIlBhbiIsIlpvb20iLCJ0aWx0Iiwia2V5RXZlbnRzIiwiTW91c2VFdmVudHMiLCJjYW1lcmFVdGlsaXRpZXMiLCJvZmZzZXRNYXRyaXhGcm9tT2Zmc2V0Iiwicm90YXRpb25NYXRyaXhGcm9tQW5nbGVzIiwicG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UiLCJwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0Iiwibm9ybWFsTWF0cml4RnJvbVJvdGF0aW9uTWF0cml4IiwiQ2FtZXJhIiwicGFuIiwiem9vbSIsImhhbmRsZXIiLCJtb3VzZURvd24iLCJjYW52YXMiLCJtb3VzZUNvb3JkaW5hdGVzIiwibW91c2VVcEhhbmRsZXIiLCJtb3VzZURvd25IYW5kbGVyIiwibW91c2VNb3ZlSGFuZGxlciIsInVwZGF0ZSIsImRlbHRhIiwibW91c2VXaGVlbEV2ZW50SGFuZGxlciIsInNoaWZ0S2V5RG93biIsInNoaWZ0S2V5SGFuZGxlciIsImJpbmQiLCJhZGRTaGlmdEtleUhhbmRsZXIiLCJtb3VzZUV2ZW50cyIsImZyb21Ob3RoaW5nIiwibW91c2VXaGVlbEhhbmRsZXIiLCJhZGRNb3VzZVVwSGFuZGxlciIsImFkZE1vdXNlRG93bkhhbmRsZXIiLCJhZGRNb3VzZU1vdmVIYW5kbGVyIiwiYWRkTW91c2VXaGVlbEhhbmRsZXIiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwib2Zmc2V0IiwiZ2V0T2Zmc2V0IiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsIm9mZnNldE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsTWF0cml4Iiwib25VcGRhdGUiLCJmb3JjZVVwZGF0ZSIsImFkZEtleUV2ZW50SGFuZGxlcnMiLCJhZGRNb3VzZUV2ZW50SGFuZGxlcnMiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbERpc3RhbmNlIiwiaW5pdGlhbE9mZnNldCIsImZyb21Jbml0aWFsT2Zmc2V0IiwiZnJvbUluaXRpYWxEaXN0YW5jZSIsImNhbWVyYSIsImluaXRpYWxpc2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01DLE1BQU1ELFFBQVEsY0FBUixDQURaO0FBQUEsSUFFTUUsT0FBT0YsUUFBUSxlQUFSLENBRmI7QUFBQSxJQUdNRyxPQUFPSCxRQUFRLGVBQVIsQ0FIYjtBQUFBLElBSU1JLFlBQVlKLFFBQVEsb0JBQVIsQ0FKbEI7QUFBQSxJQUtNSyxjQUFjTCxRQUFRLHNCQUFSLENBTHBCO0FBQUEsSUFNTU0sa0JBQWtCTixRQUFRLHFCQUFSLENBTnhCOztJQVFRTyxzQixHQUFxSkQsZSxDQUFySkMsc0I7SUFBd0JDLHdCLEdBQTZIRixlLENBQTdIRSx3QjtJQUEwQkMsMEIsR0FBbUdILGUsQ0FBbkdHLDBCO0lBQTRCQyxrQyxHQUF1RUosZSxDQUF2RUksa0M7SUFBb0NDLDhCLEdBQW1DTCxlLENBQW5DSyw4Qjs7SUFFcEhDLE07OztBQUNKLGtCQUFZVCxJQUFaLEVBQWtCVSxHQUFsQixFQUF1QkMsSUFBdkIsRUFBNkJDLE9BQTdCLEVBQXNDQyxTQUF0QyxFQUFpREMsTUFBakQsRUFBeUQ7QUFBQTs7QUFBQTs7QUFHdkQsVUFBS2QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS1UsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFSdUQ7QUFTeEQ7Ozs7bUNBRWNDLGdCLEVBQWtCO0FBQy9CLFdBQUtGLFNBQUwsR0FBaUIsS0FBakI7O0FB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QixJQUFuQixDQURKO0FBRU55QixxQkFBYSxLQUFLQSxXQUFMLENBQWlCekIsSUFBakIsQ0FBc0IsSUFBdEI7QUFGUCxPQUFSO0FBSUQ7OztpQ0FFWTtBQUNYLFdBQUswQixtQkFBTDtBQUNBLFdBQUtDLHFCQUFMO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUFBLFVBQ3hCQyxlQUR3QixHQUNtQkQsVUFEbkIsQ0FDeEJDLGVBRHdCO0FBQUEsVUFDUEMsYUFETyxHQUNtQkYsVUFEbkIsQ0FDUEUsYUFETztBQUFBLFVBQ1F4QyxNQURSLEdBQ21Cc0MsVUFEbkIsQ0FDUXRDLE1BRFI7QUFBQSxVQUUxQkosR0FGMEIsR0FFcEJaLElBQUl5RCxpQkFBSixDQUFzQkQsYUFBdEIsQ0FGb0I7QUFBQSxVQUcxQjNDLElBSDBCLEdBR25CWixLQUFLeUQsbUJBQUwsQ0FBeUJILGVBQXpCLENBSG1CO0FBQUEsVUFJMUJ6QyxPQUowQixHQUloQixJQUpnQjtBQUFBLFVBSzFCQyxTQUwwQixHQUtkLEtBTGM7QUFBQSxVQU0xQjRDLE1BTjBCLEdBTWpCLElBQUloRCxNQUFKLENBQVdULElBQVgsRUFBaUJVLEdBQWpCLEVBQXNCQyxJQUF0QixFQUE0QkMsT0FBNUIsRUFBcUNDLFNBQXJDLEVBQWdEQyxNQUFoRCxDQU5pQjs7O0FBUWhDMkMsYUFBT0MsVUFBUDs7QUFFQSxhQUFPRCxNQUFQO0FBQ0Q7Ozs7RUFySGtCN0QsTzs7QUF3SHJCK0QsT0FBT0MsT0FBUCxHQUFpQm5ELE1BQWpCIiwiZmlsZSI6ImNhbWVyYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIFBhbiA9IHJlcXVpcmUoJy4vY2FtZXJhL3BhbicpLFxuICAgICAgWm9vbSA9IHJlcXVpcmUoJy4vY2FtZXJhL3pvb20nKSxcbiAgICAgIHRpbHQgPSByZXF1aXJlKCcuL2NhbWVyYS90aWx0JyksXG4gICAgICBrZXlFdmVudHMgPSByZXF1aXJlKCcuL2NhbWVyYS9rZXlFdmVudHMnKSxcbiAgICAgIE1vdXNlRXZlbnRzID0gcmVxdWlyZSgnLi9jYW1lcmEvbW91c2VFdmVudHMnKSxcbiAgICAgIGNhbWVyYVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9jYW1lcmEnKTtcblxuY29uc3QgeyBvZmZzZXRNYXRyaXhGcm9tT2Zmc2V0LCByb3RhdGlvbk1hdHJpeEZyb21BbmdsZXMsIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlLCBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0LCBub3JtYWxNYXRyaXhGcm9tUm90YXRpb25NYXRyaXggfSA9IGNhbWVyYVV0aWxpdGllcztcblxuY2xhc3MgQ2FtZXJhIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRpbHQsIHBhbiwgem9vbSwgaGFuZGxlciwgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgICB0aGlzLnBhbiA9IHBhbjtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICBtb3VzZVVwSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICBcbiAgICB0aGlzLnRpbHQubW91c2VVcEhhbmRsZXIoKTtcblxuICAgIHRoaXMucGFuLm1vdXNlVXBIYW5kbGVyKCk7XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgXG4gICAgdGhpcy50aWx0Lm1vdXNlRG93bkhhbmRsZXIoKTtcblxuICAgIHRoaXMucGFuLm1vdXNlRG93bkhhbmRsZXIoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMudGlsdC5tb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy5wYW4ubW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnRpbHQpO1xuXG4gICAgaWYgKHRoaXMubW91c2VEb3duKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKGRlbHRhKSB7XG4gICAgdGhpcy56b29tLm1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLnRpbHQuc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bik7XG5cbiAgICB0aGlzLnBhbi5zaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKTtcbiAgfVxuXG4gIGFkZEtleUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlIYW5kbGVyID0gdGhpcy5zaGlmdEtleUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIGtleUV2ZW50cy5hZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKTtcbiAgfVxuICBcbiAgYWRkTW91c2VFdmVudEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcodGhpcy5jYW52YXMpLFxuICAgICAgICAgIG1vdXNlVXBIYW5kbGVyID0gdGhpcy5tb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlRG93bkhhbmRsZXIgPSB0aGlzLm1vdXNlRG93bkhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZU1vdmVIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VXaGVlbEhhbmRsZXIgPSB0aGlzLm1vdXNlV2hlZWxIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVVwSGFuZGxlcihtb3VzZVVwSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VEb3duSGFuZGxlcihtb3VzZURvd25IYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIG9uVXBkYXRlKGhhbmRsZXIpIHtcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICB9XG4gIFxuICBmb3JjZVVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5jYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBvZmZzZXQgPSB0aGlzLnBhbi5nZXRPZmZzZXQoKSxcbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICBvZmZzZXRNYXRyaXggPSBvZmZzZXRNYXRyaXhGcm9tT2Zmc2V0KG9mZnNldCksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXggPSByb3RhdGlvbk1hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxNYXRyaXggPSBub3JtYWxNYXRyaXhGcm9tUm90YXRpb25NYXRyaXgocm90YXRpb25NYXRyaXgpO1xuICAgIFxuICAgIGlmICh0aGlzLmhhbmRsZXIpIHsgIC8vL1xuICAgICAgdGhpcy5oYW5kbGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICAgIH1cbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgcmV0dXJuICh7XG4gICAgICBvblVwZGF0ZTogdGhpcy5vblVwZGF0ZS5iaW5kKHRoaXMpLFxuICAgICAgZm9yY2VVcGRhdGU6IHRoaXMuZm9yY2VVcGRhdGUuYmluZCh0aGlzKVxuICAgIH0pO1xuICB9XG4gIFxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYWRkS2V5RXZlbnRIYW5kbGVycygpO1xuICAgIHRoaXMuYWRkTW91c2VFdmVudEhhbmRsZXJzKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbERpc3RhbmNlLCBpbml0aWFsT2Zmc2V0LCBjYW52YXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0KGluaXRpYWxPZmZzZXQpLFxuICAgICAgICAgIHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSxcbiAgICAgICAgICBoYW5kbGVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLFxuICAgICAgICAgIGNhbWVyYSA9IG5ldyBDYW1lcmEodGlsdCwgcGFuLCB6b29tLCBoYW5kbGVyLCBtb3VzZURvd24sIGNhbnZhcyk7XG4gICAgXG4gICAgY2FtZXJhLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW1lcmE7XG4iXX0=