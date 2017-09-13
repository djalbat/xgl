'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var domUtilities = require('./utilities/dom'),
    textureMixin = require('./mixin/texture'),
    bufferMixin = require('./mixin/buffer'),
    colourMixin = require('./mixin/colour'),
    matrixMixin = require('./mixin/matrix'),
    depthMixin = require('./mixin/depth');

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
    key: 'setUniformLocationIntegerValue',
    value: function setUniformLocationIntegerValue(uniformLocation, integerValue) {
      this.context.uniform1i(uniformLocation, integerValue);
    }
  }, {
    key: 'useProgram',
    value: function useProgram(program) {
      this.context.useProgram(program);
    }
  }, {
    key: 'render',
    value: function render(normal, rotation, position, perspective, shaderProgram) {
      var normalMatrix = normal.getMatrix(),
          rotationMatrix = rotation.getMatrix(),
          positionMatrix = position.getMatrix(),
          perspectiveMatrix = perspective.getMatrix(),
          normalMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uNormalMatrix'),
          rotationMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uRotationMatrix'),
          positionMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uPositionMatrix'),
          perspectiveMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uPerspectiveMatrix');

      this.clearDepth();
      this.clearColour();
      this.clearDepthBuffer();
      this.clearColourBuffer();

      this.applyMatrix(normalMatrixUniformLocation, normalMatrix);
      this.applyMatrix(rotationMatrixUniformLocation, rotationMatrix);
      this.applyMatrix(positionMatrixUniformLocation, positionMatrix);
      this.applyMatrix(perspectiveMatrixUniformLocation, perspectiveMatrix);
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

Object.assign(Canvas.prototype, textureMixin);
Object.assign(Canvas.prototype, bufferMixin);
Object.assign(Canvas.prototype, colourMixin);
Object.assign(Canvas.prototype, matrixMixin);
Object.assign(Canvas.prototype, depthMixin);

module.exports = Canvas;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW52YXMuanMiXSwibmFtZXMiOlsiZG9tVXRpbGl0aWVzIiwicmVxdWlyZSIsInRleHR1cmVNaXhpbiIsImJ1ZmZlck1peGluIiwiY29sb3VyTWl4aW4iLCJtYXRyaXhNaXhpbiIsImRlcHRoTWl4aW4iLCJkb21FbGVtZW50RnJvbVNlbGVjdG9yIiwiZGVmYXVsdE9mZnNldCIsIkNhbnZhcyIsInNlbGVjdG9yIiwiZG9tRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiRXJyb3IiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInByb2dyYW0iLCJuYW1lIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJ1bmlmb3JtTG9jYXRpb24iLCJpbnRlZ2VyVmFsdWUiLCJ1bmlmb3JtMWkiLCJ1c2VQcm9ncmFtIiwibm9ybWFsIiwicm90YXRpb24iLCJwb3NpdGlvbiIsInBlcnNwZWN0aXZlIiwic2hhZGVyUHJvZ3JhbSIsIm5vcm1hbE1hdHJpeCIsImdldE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJwZXJzcGVjdGl2ZU1hdHJpeCIsIm5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImNsZWFyRGVwdGgiLCJjbGVhckNvbG91ciIsImNsZWFyRGVwdGhCdWZmZXIiLCJjbGVhckNvbG91ckJ1ZmZlciIsImFwcGx5TWF0cml4IiwiY291bnQiLCJvZmZzZXQiLCJUUklBTkdMRVMiLCJVTlNJR05FRF9TSE9SVCIsIm1vZGUiLCJ0eXBlIiwiZHJhd0VsZW1lbnRzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVB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dkJBLGNBRHVCO0FBQUEsVUFFcENDLElBRm9DLEdBRTdCRixTQUY2QjtBQUFBLFVBR3BDRyxJQUhvQyxHQUc3QkYsY0FINkI7OztBQUsxQyxXQUFLbkMsT0FBTCxDQUFhc0MsWUFBYixDQUEwQkYsSUFBMUIsRUFBZ0NKLEtBQWhDLEVBQXVDSyxJQUF2QyxFQUE2Q0osTUFBN0M7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE1BQVAsQ0FBYzNDLE9BQU80QyxTQUFyQixFQUFnQ25ELFlBQWhDO0FBQ0FpRCxPQUFPQyxNQUFQLENBQWMzQyxPQUFPNEMsU0FBckIsRUFBZ0NsRCxXQUFoQztBQUNBZ0QsT0FBT0MsTUFBUCxDQUFjM0MsT0FBTzRDLFNBQXJCLEVBQWdDakQsV0FBaEM7QUFDQStDLE9BQU9DLE1BQVAsQ0FBYzNDLE9BQU80QyxTQUFyQixFQUFnQ2hELFdBQWhDO0FBQ0E4QyxPQUFPQyxNQUFQLENBQWMzQyxPQUFPNEMsU0FBckIsRUFBZ0MvQyxVQUFoQzs7QUFFQWdELE9BQU9DLE9BQVAsR0FBaUI5QyxNQUFqQiIsImZpbGUiOiJjYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRvbVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2RvbScpLFxuICAgICAgdGV4dHVyZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi90ZXh0dXJlJyksXG4gICAgICBidWZmZXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vYnVmZmVyJyksXG4gICAgICBjb2xvdXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY29sb3VyJyksXG4gICAgICBtYXRyaXhNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vbWF0cml4JyksXG4gICAgICBkZXB0aE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9kZXB0aCcpO1xuXG5jb25zdCB7IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3IgfSA9IGRvbVV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdE9mZnNldCA9IDA7XG5cbmNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJ2NhbnZhcycpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgY29udGV4dC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldENsaWVudFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9XG5cbiAgZ2V0Q2xpZW50SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG4gIFxuICBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpIHsgdGhpcy5jb250ZXh0LnVuaWZvcm0xaSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSk7IH1cblxuICB1c2VQcm9ncmFtKHByb2dyYW0pIHsgdGhpcy5jb250ZXh0LnVzZVByb2dyYW0ocHJvZ3JhbSk7IH1cbiAgXG4gIHJlbmRlcihub3JtYWwsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcGVyc3BlY3RpdmUsIHNoYWRlclByb2dyYW0pIHtcbiAgICBjb25zdCBub3JtYWxNYXRyaXggPSBub3JtYWwuZ2V0TWF0cml4KCksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXggPSByb3RhdGlvbi5nZXRNYXRyaXgoKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uLmdldE1hdHJpeCgpLFxuICAgICAgICAgIHBlcnNwZWN0aXZlTWF0cml4ID0gcGVyc3BlY3RpdmUuZ2V0TWF0cml4KCksXG4gICAgICAgICAgbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3VOb3JtYWxNYXRyaXgnKSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd1Um90YXRpb25NYXRyaXgnKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd1UG9zaXRpb25NYXRyaXgnKSxcbiAgICAgICAgICBwZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd1UGVyc3BlY3RpdmVNYXRyaXgnKTtcblxuICAgIHRoaXMuY2xlYXJEZXB0aCgpO1xuICAgIHRoaXMuY2xlYXJDb2xvdXIoKTtcbiAgICB0aGlzLmNsZWFyRGVwdGhCdWZmZXIoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyQnVmZmVyKCk7XG5cbiAgICB0aGlzLmFwcGx5TWF0cml4KG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBlcnNwZWN0aXZlTWF0cml4KTtcbiAgfVxuXG4gIGRyYXdFbGVtZW50cyhjb3VudCwgb2Zmc2V0ID0gZGVmYXVsdE9mZnNldCkge1xuICAgIGNvbnN0IHsgVFJJQU5HTEVTLCBVTlNJR05FRF9TSE9SVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIG1vZGUgPSBUUklBTkdMRVMsXG4gICAgICAgICAgdHlwZSA9IFVOU0lHTkVEX1NIT1JUO1xuXG4gICAgdGhpcy5jb250ZXh0LmRyYXdFbGVtZW50cyhtb2RlLCBjb3VudCwgdHlwZSwgb2Zmc2V0KVxuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgdGV4dHVyZU1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYnVmZmVyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBjb2xvdXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1hdHJpeE1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgZGVwdGhNaXhpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzO1xuIl19