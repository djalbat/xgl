'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var domUtilities = require('./utilities/dom'),
    programMixin = require('./mixin/program'),
    textureMixin = require('./mixin/texture'),
    colourMixin = require('./mixin/colour'),
    shaderMixin = require('./mixin/shader'),
    bufferMixin = require('./mixin/buffer'),
    matrixMixin = require('./mixin/matrix'),
    depthMixin = require('./mixin/depth'),
    mouseMixin = require('./mixin/mouse');

var domElementFromSelector = domUtilities.domElementFromSelector;


var defaultOffset = 0;

var Canvas = function () {
  function Canvas() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'canvas';

    _classCallCheck(this, Canvas);

    var domElement = domElementFromSelector(selector),
        context = domElement.getContext('webgl');

    if (!context) {
      throw new Error('Unable to initialise the context.');
    }

    this.context = context;

    this.domElement = domElement;
  }

  _createClass(Canvas, [{
    key: 'getContext',
    value: function getContext() {
      return this.context;
    }
  }, {
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this.domElement.width;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this.domElement.height;
    }
  }, {
    key: 'getClientWidth',
    value: function getClientWidth() {
      return this.domElement.clientWidth;
    }
  }, {
    key: 'getClientHeight',
    value: function getClientHeight() {
      return this.domElement.clientHeight;
    }
  }, {
    key: 'getUniformLocation',
    value: function getUniformLocation(program, name) {
      return this.context.getUniformLocation(program, name);
    }
  }, {
    key: 'getAttributeLocation',
    value: function getAttributeLocation(program, name) {
      return this.context.getAttribLocation(program, name);
    }
  }, {
    key: 'setWidth',
    value: function setWidth(width) {
      this.domElement.setAttribute('width', width);
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      this.domElement.setAttribute('height', height);
    }
  }, {
    key: 'setViewport',
    value: function setViewport(x, y, width, height) {
      this.context.viewport(x, y, width, height);
    }
  }, {
    key: 'setUniformLocationIntegerValue',
    value: function setUniformLocationIntegerValue(uniformLocation, integerValue) {
      this.context.uniform1i(uniformLocation, integerValue);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.clearDepth();
      this.clearColour();
      this.clearDepthBuffer();
      this.clearColourBuffer();
    }
  }, {
    key: 'resize',
    value: function resize(width, height) {
      this.setWidth(width);
      this.setHeight(height);
      this.setViewport(0, 0, width, height);
    }
  }, {
    key: 'render',
    value: function render(shader, offset, rotation, position, projection, normal) {
      var offsetMatrix = offset.getMatrix(),
          rotationMatrix = rotation.getMatrix(),
          positionMatrix = position.getMatrix(),
          projectionMatrix = projection.getMatrix(),
          normalMatrix = normal.getMatrix(),
          offsetMatrixUniformLocation = shader.getOffsetMatrixUniformLocation(),
          rotationMatrixUniformLocation = shader.getRotationMatrixUniformLocation(),
          positionMatrixUniformLocation = shader.getPositionMatrixUniformLocation(),
          projectionMatrixUniformLocation = shader.getProjectionMatrixUniformLocation(),
          normalMatrixUniformLocation = shader.getNormalMatrixUniformLocation();

      this.applyMatrix(offsetMatrixUniformLocation, offsetMatrix);
      this.applyMatrix(rotationMatrixUniformLocation, rotationMatrix);
      this.applyMatrix(positionMatrixUniformLocation, positionMatrix);
      this.applyMatrix(projectionMatrixUniformLocation, projectionMatrix);
      this.applyMatrix(normalMatrixUniformLocation, normalMatrix);

      var count = shader.getCount();

      this.drawElements(count);
    }
  }, {
    key: 'drawElements',
    value: function drawElements(count) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;
      var _context = this.context,
          TRIANGLES = _context.TRIANGLES,
          UNSIGNED_SHORT = _context.UNSIGNED_SHORT,
          mode = TRIANGLES,
          type = UNSIGNED_SHORT;


      this.context.drawElements(mode, count, type, offset);
    }
  }]);

  return Canvas;
}();

Object.assign(Canvas.prototype, programMixin);
Object.assign(Canvas.prototype, textureMixin);
Object.assign(Canvas.prototype, colourMixin);
Object.assign(Canvas.prototype, shaderMixin);
Object.assign(Canvas.prototype, bufferMixin);
Object.assign(Canvas.prototype, matrixMixin);
Object.assign(Canvas.prototype, depthMixin);
Object.assign(Canvas.prototype, mouseMixin);

module.exports = Canvas;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW52YXMuanMiXSwibmFtZXMiOlsiZG9tVXRpbGl0aWVzIiwicmVxdWlyZSIsInByb2dyYW1NaXhpbiIsInRleHR1cmVNaXhpbiIsImNvbG91ck1peGluIiwic2hhZGVyTWl4aW4iLCJidWZmZXJNaXhpbiIsIm1hdHJpeE1peGluIiwiZGVwdGhNaXhpbiIsIm1vdXNlTWl4aW4iLCJkb21FbGVtZW50RnJvbVNlbGVjdG9yIiwiZGVmYXVsdE9mZnNldCIsIkNhbnZhcyIsInNlbGVjdG9yIiwiZG9tRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiRXJyb3IiLCJ3aWR0aCIsImhlaWdodCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwicHJvZ3JhbSIsIm5hbWUiLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJnZXRBdHRyaWJMb2NhdGlvbiIsInNldEF0dHJpYnV0ZSIsIngiLCJ5Iiwidmlld3BvcnQiLCJ1bmlmb3JtTG9jYXRpb24iLCJpbnRlZ2VyVmFsdWUiLCJ1bmlmb3JtMWkiLCJjbGVhckRlcHRoIiwiY2xlYXJDb2xvdXIiLCJjbGVhckRlcHRoQnVmZmVyIiwiY2xlYXJDb2xvdXJCdWZmZXIiLCJzZXRXaWR0aCIsInNldEhlaWdodCIsInNldFZpZXdwb3J0Iiwic2hhZGVyIiwib2Zmc2V0Iiwicm90YXRpb24iLCJwb3NpdGlvbiIsInByb2plY3Rpb24iLCJub3JtYWwiLCJvZmZzZXRNYXRyaXgiLCJnZXRNYXRyaXgiLCJyb3RhdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbE1hdHJpeCIsIm9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldE9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJhcHBseU1hdHJpeCIsImNvdW50IiwiZ2V0Q291bnQiLCJkcmF3RWxlbWVudHMiLCJUUklBTkdMRVMiLCJVTlNJR05FRF9TSE9SVCIsIm1vZGUiLCJ0eXBlIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsaUJBQVIsQ0FBckI7QUFBQSxJQUNNQyxlQUFlRCxRQUFRLGlCQUFSLENBRHJCO0FBQUEsSUFFTUUsZUFBZUYsUUFBUSxpQkFBUixDQUZyQjtBQUFBLElBR01HLGNBQWNILFFBQVEsZ0JBQVIsQ0FIcEI7QUFBQSxJQUlNSSxjQUFjSixRQUFRLGdCQUFSLENBSnBCO0FBQUEsSUFLTUssY0FBY0wsUUFBUSxnQkFBUixDQUxwQjtBQUFBLElBTU1NLGNBQWNOLFFBQVEsZ0JBQVIsQ0FOcEI7QUFBQSxJQU9NTyxhQUFhUCxRQUFRLGVBQVIsQ0FQbkI7QUFBQSxJQVFNUSxhQUFhUixRQUFRLGVBQVIsQ0FSbkI7O0lBVVFTLHNCLEdBQTJCVixZLENBQTNCVSxzQjs7O0FBRVIsSUFBTUMsZ0JBQWdCLENBQXRCOztJQUVNQyxNO0FBQ0osb0JBQWlDO0FBQUEsUUFBckJDLFFBQXFCLHVFQUFWLFFBQVU7O0FBQUE7O0FBQy9CLFFBQU1DLGFBQWFKLHVCQUF1QkcsUUFBdkIsQ0FBbkI7QUFBQSxRQUNNRSxVQUFVRCxXQUFXRSxVQUFYLENBQXNCLE9BQXRCLENBRGhCOztBQUdBLFFBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1osWUFBTSxJQUFJRSxLQUFKLHFDQUFOO0FBQ0Q7O0FBRUQsU0FB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S0MsWUFBTCxDQUFrQkYsS0FBbEI7QUFDRDs7O2lDQUVZQSxLLEVBQStCO0FBQUEsVUFBeEJ0QixNQUF3Qix1RUFBZjlCLGFBQWU7QUFBQSxxQkFDSixLQUFLSSxPQUREO0FBQUEsVUFDbENtRCxTQURrQyxZQUNsQ0EsU0FEa0M7QUFBQSxVQUN2QkMsY0FEdUIsWUFDdkJBLGNBRHVCO0FBQUEsVUFFcENDLElBRm9DLEdBRTdCRixTQUY2QjtBQUFBLFVBR3BDRyxJQUhvQyxHQUc3QkYsY0FINkI7OztBQUsxQyxXQUFLcEQsT0FBTCxDQUFha0QsWUFBYixDQUEwQkcsSUFBMUIsRUFBZ0NMLEtBQWhDLEVBQXVDTSxJQUF2QyxFQUE2QzVCLE1BQTdDO0FBQ0Q7Ozs7OztBQUdINkIsT0FBT0MsTUFBUCxDQUFjM0QsT0FBTzRELFNBQXJCLEVBQWdDdEUsWUFBaEM7QUFDQW9FLE9BQU9DLE1BQVAsQ0FBYzNELE9BQU80RCxTQUFyQixFQUFnQ3JFLFlBQWhDO0FBQ0FtRSxPQUFPQyxNQUFQLENBQWMzRCxPQUFPNEQsU0FBckIsRUFBZ0NwRSxXQUFoQztBQUNBa0UsT0FBT0MsTUFBUCxDQUFjM0QsT0FBTzRELFNBQXJCLEVBQWdDbkUsV0FBaEM7QUFDQWlFLE9BQU9DLE1BQVAsQ0FBYzNELE9BQU80RCxTQUFyQixFQUFnQ2xFLFdBQWhDO0FBQ0FnRSxPQUFPQyxNQUFQLENBQWMzRCxPQUFPNEQsU0FBckIsRUFBZ0NqRSxXQUFoQztBQUNBK0QsT0FBT0MsTUFBUCxDQUFjM0QsT0FBTzRELFNBQXJCLEVBQWdDaEUsVUFBaEM7QUFDQThELE9BQU9DLE1BQVAsQ0FBYzNELE9BQU80RCxTQUFyQixFQUFnQy9ELFVBQWhDOztBQUVBZ0UsT0FBT0MsT0FBUCxHQUFpQjlELE1BQWpCIiwiZmlsZSI6ImNhbnZhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZG9tVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvZG9tJyksXG4gICAgICBwcm9ncmFtTWl4aW4gPSByZXF1aXJlKCcuL21peGluL3Byb2dyYW0nKSxcbiAgICAgIHRleHR1cmVNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vdGV4dHVyZScpLFxuICAgICAgY29sb3VyTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2NvbG91cicpLFxuICAgICAgc2hhZGVyTWl4aW4gPSByZXF1aXJlKCcuL21peGluL3NoYWRlcicpLFxuICAgICAgYnVmZmVyTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2J1ZmZlcicpLFxuICAgICAgbWF0cml4TWl4aW4gPSByZXF1aXJlKCcuL21peGluL21hdHJpeCcpLFxuICAgICAgZGVwdGhNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vZGVwdGgnKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyk7XG5cbmNvbnN0IHsgZG9tRWxlbWVudEZyb21TZWxlY3RvciB9ID0gZG9tVXRpbGl0aWVzO1xuXG5jb25zdCBkZWZhdWx0T2Zmc2V0ID0gMDtcblxuY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSAnY2FudmFzJykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSxcbiAgICAgICAgICBjb250ZXh0ID0gZG9tRWxlbWVudC5nZXRDb250ZXh0KCd3ZWJnbCcpO1xuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBpbml0aWFsaXNlIHRoZSBjb250ZXh0LmApO1xuICAgIH1cblxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LndpZHRoOyB9XG5cbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmhlaWdodDsgfVxuXG4gIGdldENsaWVudFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9XG5cbiAgZ2V0Q2xpZW50SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aWR0aCk7IH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCk7IH1cblxuICBzZXRWaWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7IHRoaXMuY29udGV4dC52aWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTsgfVxuXG4gIHNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSkgeyB0aGlzLmNvbnRleHQudW5pZm9ybTFpKHVuaWZvcm1Mb2NhdGlvbiwgaW50ZWdlclZhbHVlKTsgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY2xlYXJEZXB0aCgpO1xuICAgIHRoaXMuY2xlYXJDb2xvdXIoKTtcbiAgICB0aGlzLmNsZWFyRGVwdGhCdWZmZXIoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyQnVmZmVyKCk7XG4gIH1cblxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuc2V0V2lkdGgod2lkdGgpO1xuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG4gICAgdGhpcy5zZXRWaWV3cG9ydCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHJlbmRlcihzaGFkZXIsIG9mZnNldCwgcm90YXRpb24sIHBvc2l0aW9uLCBwcm9qZWN0aW9uLCBub3JtYWwpIHtcbiAgICBjb25zdCBvZmZzZXRNYXRyaXggPSBvZmZzZXQuZ2V0TWF0cml4KCksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXggPSByb3RhdGlvbi5nZXRNYXRyaXgoKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uLmdldE1hdHJpeCgpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uLmdldE1hdHJpeCgpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeCA9IG5vcm1hbC5nZXRNYXRyaXgoKSxcbiAgICAgICAgICBvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0T2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHNoYWRlci5nZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHNoYWRlci5nZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTtcblxuICAgIHRoaXMuYXBwbHlNYXRyaXgob2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uLCBvZmZzZXRNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsTWF0cml4KTtcblxuICAgIGNvbnN0IGNvdW50ID0gc2hhZGVyLmdldENvdW50KCk7XG5cbiAgICB0aGlzLmRyYXdFbGVtZW50cyhjb3VudCk7XG4gIH1cblxuICBkcmF3RWxlbWVudHMoY291bnQsIG9mZnNldCA9IGRlZmF1bHRPZmZzZXQpIHtcbiAgICBjb25zdCB7IFRSSUFOR0xFUywgVU5TSUdORURfU0hPUlQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBtb2RlID0gVFJJQU5HTEVTLFxuICAgICAgICAgIHR5cGUgPSBVTlNJR05FRF9TSE9SVDtcblxuICAgIHRoaXMuY29udGV4dC5kcmF3RWxlbWVudHMobW9kZSwgY291bnQsIHR5cGUsIG9mZnNldClcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHByb2dyYW1NaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHRleHR1cmVNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGNvbG91ck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgc2hhZGVyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBidWZmZXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1hdHJpeE1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgZGVwdGhNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1vdXNlTWl4aW4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhcztcbiJdfQ==