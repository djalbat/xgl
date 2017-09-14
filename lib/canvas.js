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
    value: function render(normal, rotation, position, perspective, shader) {
      var normalMatrix = normal.getMatrix(),
          rotationMatrix = rotation.getMatrix(),
          positionMatrix = position.getMatrix(),
          perspectiveMatrix = perspective.getMatrix(),
          shaderProgram = shader.getProgram(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW52YXMuanMiXSwibmFtZXMiOlsiZG9tVXRpbGl0aWVzIiwicmVxdWlyZSIsInRleHR1cmVNaXhpbiIsImJ1ZmZlck1peGluIiwiY29sb3VyTWl4aW4iLCJtYXRyaXhNaXhpbiIsImRlcHRoTWl4aW4iLCJkb21FbGVtZW50RnJvbVNlbGVjdG9yIiwiZGVmYXVsdE9mZnNldCIsIkNhbnZhcyIsInNlbGVjdG9yIiwiZG9tRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiRXJyb3IiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInByb2dyYW0iLCJuYW1lIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJ1bmlmb3JtTG9jYXRpb24iLCJpbnRlZ2VyVmFsdWUiLCJ1bmlmb3JtMWkiLCJ1c2VQcm9ncmFtIiwibm9ybWFsIiwicm90YXRpb24iLCJwb3NpdGlvbiIsInBlcnNwZWN0aXZlIiwic2hhZGVyIiwibm9ybWFsTWF0cml4IiwiZ2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInBlcnNwZWN0aXZlTWF0cml4Iiwic2hhZGVyUHJvZ3JhbSIsImdldFByb2dyYW0iLCJub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJyb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJjbGVhckRlcHRoIiwiY2xlYXJDb2xvdXIiLCJjbGVhckRlcHRoQnVmZmVyIiwiY2xlYXJDb2xvdXJCdWZmZXIiLCJhcHBseU1hdHJpeCIsImNvdW50Iiwib2Zmc2V0IiwiVFJJQU5HTEVTIiwiVU5TSUdORURfU0hPUlQiLCJtb2RlIiwidHlwZSIsImRyYXdFbGVtZW50cyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFw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QUtJLE9BREQ7QUFBQSxVQUNsQ29DLFNBRGtDLFlBQ2xDQSxTQURrQztBQUFBLFVBQ3ZCQyxjQUR1QixZQUN2QkEsY0FEdUI7QUFBQSxVQUVwQ0MsSUFGb0MsR0FFN0JGLFNBRjZCO0FBQUEsVUFHcENHLElBSG9DLEdBRzdCRixjQUg2Qjs7O0FBSzFDLFdBQUtyQyxPQUFMLENBQWF3QyxZQUFiLENBQTBCRixJQUExQixFQUFnQ0osS0FBaEMsRUFBdUNLLElBQXZDLEVBQTZDSixNQUE3QztBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsTUFBUCxDQUFjN0MsT0FBTzhDLFNBQXJCLEVBQWdDckQsWUFBaEM7QUFDQW1ELE9BQU9DLE1BQVAsQ0FBYzdDLE9BQU84QyxTQUFyQixFQUFnQ3BELFdBQWhDO0FBQ0FrRCxPQUFPQyxNQUFQLENBQWM3QyxPQUFPOEMsU0FBckIsRUFBZ0NuRCxXQUFoQztBQUNBaUQsT0FBT0MsTUFBUCxDQUFjN0MsT0FBTzhDLFNBQXJCLEVBQWdDbEQsV0FBaEM7QUFDQWdELE9BQU9DLE1BQVAsQ0FBYzdDLE9BQU84QyxTQUFyQixFQUFnQ2pELFVBQWhDOztBQUVBa0QsT0FBT0MsT0FBUCxHQUFpQmhELE1BQWpCIiwiZmlsZSI6ImNhbnZhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZG9tVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvZG9tJyksXG4gICAgICB0ZXh0dXJlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL3RleHR1cmUnKSxcbiAgICAgIGJ1ZmZlck1peGluID0gcmVxdWlyZSgnLi9taXhpbi9idWZmZXInKSxcbiAgICAgIGNvbG91ck1peGluID0gcmVxdWlyZSgnLi9taXhpbi9jb2xvdXInKSxcbiAgICAgIG1hdHJpeE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9tYXRyaXgnKSxcbiAgICAgIGRlcHRoTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2RlcHRoJyk7XG5cbmNvbnN0IHsgZG9tRWxlbWVudEZyb21TZWxlY3RvciB9ID0gZG9tVXRpbGl0aWVzO1xuXG5jb25zdCBkZWZhdWx0T2Zmc2V0ID0gMDtcblxuY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSAnY2FudmFzJykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSxcbiAgICAgICAgICBjb250ZXh0ID0gZG9tRWxlbWVudC5nZXRDb250ZXh0KCd3ZWJnbCcpO1xuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBpbml0aWFsaXNlIHRoZSBjb250ZXh0LmApO1xuICAgIH1cblxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0Q2xpZW50V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7IH1cblxuICBnZXRDbGllbnRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0OyB9XG5cbiAgZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7IH1cblxuICBnZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7IH1cbiAgXG4gIHNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSkgeyB0aGlzLmNvbnRleHQudW5pZm9ybTFpKHVuaWZvcm1Mb2NhdGlvbiwgaW50ZWdlclZhbHVlKTsgfVxuXG4gIHVzZVByb2dyYW0ocHJvZ3JhbSkgeyB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbShwcm9ncmFtKTsgfVxuICBcbiAgcmVuZGVyKG5vcm1hbCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSwgc2hhZGVyKSB7XG4gICAgY29uc3Qgbm9ybWFsTWF0cml4ID0gbm9ybWFsLmdldE1hdHJpeCgpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gcm90YXRpb24uZ2V0TWF0cml4KCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbi5nZXRNYXRyaXgoKSxcbiAgICAgICAgICBwZXJzcGVjdGl2ZU1hdHJpeCA9IHBlcnNwZWN0aXZlLmdldE1hdHJpeCgpLFxuICAgICAgICAgIHNoYWRlclByb2dyYW0gPSBzaGFkZXIuZ2V0UHJvZ3JhbSgpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd1Tm9ybWFsTWF0cml4JyksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndVJvdGF0aW9uTWF0cml4JyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndVBvc2l0aW9uTWF0cml4JyksXG4gICAgICAgICAgcGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndVBlcnNwZWN0aXZlTWF0cml4Jyk7XG5cbiAgICB0aGlzLmNsZWFyRGVwdGgoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyKCk7XG4gICAgdGhpcy5jbGVhckRlcHRoQnVmZmVyKCk7XG4gICAgdGhpcy5jbGVhckNvbG91ckJ1ZmZlcigpO1xuXG4gICAgdGhpcy5hcHBseU1hdHJpeChub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbE1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChyb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25NYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwZXJzcGVjdGl2ZU1hdHJpeCk7XG4gIH1cblxuICBkcmF3RWxlbWVudHMoY291bnQsIG9mZnNldCA9IGRlZmF1bHRPZmZzZXQpIHtcbiAgICBjb25zdCB7IFRSSUFOR0xFUywgVU5TSUdORURfU0hPUlQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBtb2RlID0gVFJJQU5HTEVTLFxuICAgICAgICAgIHR5cGUgPSBVTlNJR05FRF9TSE9SVDtcblxuICAgIHRoaXMuY29udGV4dC5kcmF3RWxlbWVudHMobW9kZSwgY291bnQsIHR5cGUsIG9mZnNldClcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHRleHR1cmVNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJ1ZmZlck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgY29sb3VyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBtYXRyaXhNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGRlcHRoTWl4aW4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhcztcbiJdfQ==