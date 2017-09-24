'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var domUtilities = require('./utilities/dom'),
    textureMixin = require('./mixin/texture'),
    bufferMixin = require('./mixin/buffer'),
    colourMixin = require('./mixin/colour'),
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
    key: 'createProgram',
    value: function createProgram() {
      return this.context.createProgram();
    }
  }, {
    key: 'useShader',
    value: function useShader(shader) {
      var shaderProgram = shader.getProgram();

      this.context.useProgram(shaderProgram);
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
    key: 'render',
    value: function render(shader, normal, rotation, position, perspective) {
      var normalMatrix = normal.getMatrix(),
          rotationMatrix = rotation.getMatrix(),
          positionMatrix = position.getMatrix(),
          perspectiveMatrix = perspective.getMatrix(),
          normalMatrixUniformLocation = shader.getNormalMatrixUniformLocation(),
          rotationMatrixUniformLocation = shader.getRotationMatrixUniformLocation(),
          positionMatrixUniformLocation = shader.getPositionMatrixUniformLocation(),
          perspectiveMatrixUniformLocation = shader.getPerspectiveMatrixUniformLocation();

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
Object.assign(Canvas.prototype, mouseMixin);

module.exports = Canvas;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW52YXMuanMiXSwibmFtZXMiOlsiZG9tVXRpbGl0aWVzIiwicmVxdWlyZSIsInRleHR1cmVNaXhpbiIsImJ1ZmZlck1peGluIiwiY29sb3VyTWl4aW4iLCJtYXRyaXhNaXhpbiIsImRlcHRoTWl4aW4iLCJtb3VzZU1peGluIiwiZG9tRWxlbWVudEZyb21TZWxlY3RvciIsImRlZmF1bHRPZmZzZXQiLCJDYW52YXMiLCJzZWxlY3RvciIsImRvbUVsZW1lbnQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIkVycm9yIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJwcm9ncmFtIiwibmFtZSIsImdldFVuaWZvcm1Mb2NhdGlvbiIsImdldEF0dHJpYkxvY2F0aW9uIiwidW5pZm9ybUxvY2F0aW9uIiwiaW50ZWdlclZhbHVlIiwidW5pZm9ybTFpIiwiY3JlYXRlUHJvZ3JhbSIsInNoYWRlciIsInNoYWRlclByb2dyYW0iLCJnZXRQcm9ncmFtIiwidXNlUHJvZ3JhbSIsImNsZWFyRGVwdGgiLCJjbGVhckNvbG91ciIsImNsZWFyRGVwdGhCdWZmZXIiLCJjbGVhckNvbG91ckJ1ZmZlciIsIm5vcm1hbCIsInJvdGF0aW9uIiwicG9zaXRpb24iLCJwZXJzcGVjdGl2ZSIsIm5vcm1hbE1hdHJpeCIsImdldE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJwZXJzcGVjdGl2ZU1hdHJpeCIsIm5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRQZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImFwcGx5TWF0cml4IiwiY291bnQiLCJvZmZzZXQiLCJUUklBTkdMRVMiLCJVTlNJR05FRF9TSE9SVCIsIm1vZGUiLCJ0eXBlIiwiZHJhd0VsZW1lbnRzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsaUJBQVIsQ0FBckI7QUFBQSxJQUNNQyxlQUFlRCxRQUFRLGlCQUFSLENBRHJCO0FBQUEsSUFFTUUsY0FBY0YsUUFBUSxnQkFBUixDQUZwQjtBQUFBLElBR01HLGNBQWNILFFBQVEsZ0JBQVIsQ0FIcEI7QUFBQSxJQUlNSSxjQUFjSixRQUFRLGdCQUFSLENBSnBCO0FBQUEsSUFLTUssYUFBYUwsUUFBUSxlQUFSLENBTG5CO0FBQUEsSUFNTU0sYUFBYU4sUUFBUSxlQUFSLENBTm5COztJQVFRTyxzQixHQUEyQlIsWSxDQUEzQlEsc0I7OztBQUVSLElBQU1DLGdCQUFnQixDQUF0Qjs7SUFFTUMsTTtBQUNKLG9CQUFpQztBQUFBLFFBQXJCQyxRQUFxQix1RUFBVixRQUFVOztBQUFBOztBQUMvQixRQUFNQyxhQUFhSix1QkFBdUJHLFFBQXZCLENBQW5CO0FBQUEsUUFDTUUsVUFBVUQsV0FBV0UsVUFBWCxDQUFzQixPQUF0QixDQURoQjs7QUFHQSxRQUFJLENBQUNELE9BQUwsRUFBYztBQUNaLFlBQU0sSUFBSUUsS0FBSixxQ0FBTjtBQUNEOztBQUVELFNBQUtGLE9BQUwsR0FBZUEsT0FBZjs7QUFFQSxTQUFLRCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLQyxPQUFaO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0QsVUFBWjtBQUNEOzs7cUNBRWdCO0FBQUUsYUFBTyxLQUFLQSxVQUFMLENBQWdCSSxXQUF2QjtBQUFxQzs7O3NDQUV0QztBQUFFLGFBQU8sS0FBS0osVUFBTCxDQUFnQkssWUFBdkI7QUFBc0M7Ozt1Q0FFdkNDLE8sRUFBU0MsSSxFQUFNO0FBQUUsYUFBTyxLQUFLTixPQUFMLENBQWFPLGtCQUFiLENBQWdDRixPQUFoQyxFQUF5Q0MsSUFBekMsQ0FBUDtBQUF3RDs7O3lDQUV2RUQsTyxFQUFTQyxJLEVBQU07QUFBRSxhQUFPLEtBQUtOLE9BQUwsQ0FBYVEsaUJBQWIsQ0FBK0JILE9BQS9CLEVBQXdDQyxJQUF4QyxDQUFQO0FBQXVEOzs7bURBRTlERyxlLEVBQWlCQyxZLEVBQWM7QUFBRSxXQUFLVixPQUFMLENBQWFXLFNBQWIsQ0FBdUJGLGVBQXZCLEVBQXdDQyxZQUF4QztBQUF3RDs7O29DQUV4RztBQUFFLGFBQU8sS0FBS1YsT0FBTCxDQUFhWSxhQUFiLEVBQVA7QUFBc0M7Ozs4QkFFOUNDLE0sRUFBUTtBQUNoQixVQUFNQyxnQkFBZ0JELE9BQU9FLFVBQVAsRUFBdEI7O0FBRUEsV0FBS2YsT0FBTCxDQUFhZ0IsVUFBYixDQUF3QkYsYUFBeEI7QUFDRDs7OzRCQUVPO0FBQ04sV0FBS0csVUFBTDtBQUNBLFdBQUtDLFdBQUw7QUFDQSxXQUFLQyxnQkFBTDtBQUNBLFdBQUtDLGlCQUFMO0FBQ0Q7OzsyQkFFTVAsTSxFQUFRUSxNLEVBQVFDLFEsRUFBVUMsUSxFQUFVQyxXLEVBQWE7QUFDdEQsVUFBTUMsZUFBZUosT0FBT0ssU0FBUCxFQUFyQjtBQUFBLFVBQ01DLGlCQUFpQkwsU0FBU0ksU0FBVCxFQUR2QjtBQUFBLFVBRU1FLGlCQUFpQkwsU0FBU0csU0FBVCxFQUZ2QjtBQUFBLFVBR01HLG9CQUFvQkwsWUFBWUUsU0FBWixFQUgxQjtBQUFBLFVBSU1JLDhCQUE4QmpCLE9BQU9rQiw4QkFBUCxFQUpwQztBQUFBLFVBS01DLGdDQUFnQ25CLE9BQU9vQixnQ0FBUCxFQUx0QztBQUFBLFVBTU1DLGdDQUFnQ3JCLE9BQU9zQixnQ0FBUCxFQU50QztBQUFBLFVBT01DLG1DQUFtQ3ZCLE9BQU93QixtQ0FBUCxFQVB6Qzs7QUFTQSxXQUFLQyxXQUFMLENBQWlCUiwyQkFBakIsRUFBOENMLFlBQTlDO0FBQ0EsV0FBS2EsV0FBTCxDQUFpQk4sNkJBQWpCLEVBQWdETCxjQUFoRDtBQUNBLFdBQUtXLFdBQUwsQ0FBaUJKLDZCQUFqQixFQUFnRE4sY0FBaEQ7QUFDQSxXQUFLVSxXQUFMLENBQWlCRixnQ0FBakIsRUFBbURQLGlCQUFuRDtBQUNEOzs7aUNBRVlVLEssRUFBK0I7QUFBQSxVQUF4QkMsTUFBd0IsdUVBQWY1QyxhQUFlO0FBQUEscUJBQ0osS0FBS0ksT0FERDtBQUFBLFVBQ2xDeUMsU0FEa0MsWUFDbENBLFNBRGtDO0FBQUEsVUFDdkJDLGNBRHVCLFlBQ3ZCQSxjQUR1QjtBQUFBLFVBRXBDQyxJQUZvQyxHQUU3QkYsU0FGNkI7QUFBQSxVQUdwQ0csSUFIb0MsR0FHN0JGLGNBSDZCOzs7QUFLMUMsV0FBSzFDLE9BQUwsQ0FBYTZDLFlBQWIsQ0FBMEJGLElBQTFCLEVBQWdDSixLQUFoQyxFQUF1Q0ssSUFBdkMsRUFBNkNKLE1BQTdDO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxNQUFQLENBQWNsRCxPQUFPbUQsU0FBckIsRUFBZ0MzRCxZQUFoQztBQUNBeUQsT0FBT0MsTUFBUCxDQUFjbEQsT0FBT21ELFNBQXJCLEVBQWdDMUQsV0FBaEM7QUFDQXdELE9BQU9DLE1BQVAsQ0FBY2xELE9BQU9tRCxTQUFyQixFQUFnQ3pELFdBQWhDO0FBQ0F1RCxPQUFPQyxNQUFQLENBQWNsRCxPQUFPbUQsU0FBckIsRUFBZ0N4RCxXQUFoQztBQUNBc0QsT0FBT0MsTUFBUCxDQUFjbEQsT0FBT21ELFNBQXJCLEVBQWdDdkQsVUFBaEM7QUFDQXFELE9BQU9DLE1BQVAsQ0FBY2xELE9BQU9tRCxTQUFyQixFQUFnQ3RELFVBQWhDOztBQUVBdUQsT0FBT0MsT0FBUCxHQUFpQnJELE1BQWpCIiwiZmlsZSI6ImNhbnZhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZG9tVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvZG9tJyksXG4gICAgICB0ZXh0dXJlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL3RleHR1cmUnKSxcbiAgICAgIGJ1ZmZlck1peGluID0gcmVxdWlyZSgnLi9taXhpbi9idWZmZXInKSxcbiAgICAgIGNvbG91ck1peGluID0gcmVxdWlyZSgnLi9taXhpbi9jb2xvdXInKSxcbiAgICAgIG1hdHJpeE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9tYXRyaXgnKSxcbiAgICAgIGRlcHRoTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2RlcHRoJyksXG4gICAgICBtb3VzZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9tb3VzZScpO1xuXG5jb25zdCB7IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3IgfSA9IGRvbVV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdE9mZnNldCA9IDA7XG5cbmNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJ2NhbnZhcycpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgY29udGV4dC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldENsaWVudFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9XG5cbiAgZ2V0Q2xpZW50SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG4gIFxuICBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpIHsgdGhpcy5jb250ZXh0LnVuaWZvcm0xaSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSk7IH1cblxuICBjcmVhdGVQcm9ncmFtKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmNyZWF0ZVByb2dyYW0oKTsgfVxuXG4gIHVzZVNoYWRlcihzaGFkZXIpIHtcbiAgICBjb25zdCBzaGFkZXJQcm9ncmFtID0gc2hhZGVyLmdldFByb2dyYW0oKTtcblxuICAgIHRoaXMuY29udGV4dC51c2VQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jbGVhckRlcHRoKCk7XG4gICAgdGhpcy5jbGVhckNvbG91cigpO1xuICAgIHRoaXMuY2xlYXJEZXB0aEJ1ZmZlcigpO1xuICAgIHRoaXMuY2xlYXJDb2xvdXJCdWZmZXIoKTtcbiAgfVxuICBcbiAgcmVuZGVyKHNoYWRlciwgbm9ybWFsLCByb3RhdGlvbiwgcG9zaXRpb24sIHBlcnNwZWN0aXZlKSB7XG4gICAgY29uc3Qgbm9ybWFsTWF0cml4ID0gbm9ybWFsLmdldE1hdHJpeCgpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gcm90YXRpb24uZ2V0TWF0cml4KCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbi5nZXRNYXRyaXgoKSxcbiAgICAgICAgICBwZXJzcGVjdGl2ZU1hdHJpeCA9IHBlcnNwZWN0aXZlLmdldE1hdHJpeCgpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHNoYWRlci5nZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHNoYWRlci5nZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0UGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTtcblxuICAgIHRoaXMuYXBwbHlNYXRyaXgobm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcGVyc3BlY3RpdmVNYXRyaXgpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKGNvdW50LCBvZmZzZXQgPSBkZWZhdWx0T2Zmc2V0KSB7XG4gICAgY29uc3QgeyBUUklBTkdMRVMsIFVOU0lHTkVEX1NIT1JUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgbW9kZSA9IFRSSUFOR0xFUyxcbiAgICAgICAgICB0eXBlID0gVU5TSUdORURfU0hPUlQ7XG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd0VsZW1lbnRzKG1vZGUsIGNvdW50LCB0eXBlLCBvZmZzZXQpXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCB0ZXh0dXJlTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBidWZmZXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGNvbG91ck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgbWF0cml4TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBkZXB0aE1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgbW91c2VNaXhpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzO1xuIl19