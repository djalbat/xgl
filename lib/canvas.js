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
    key: 'useShader',
    value: function useShader(shader) {
      var shaderProgram = shader.getProgram();

      this.context.useProgram(shaderProgram);
    }
  }, {
    key: 'render',
    value: function render(normal, rotation, position, perspective, shader) {
      var normalMatrix = normal.getMatrix(),
          rotationMatrix = rotation.getMatrix(),
          positionMatrix = position.getMatrix(),
          perspectiveMatrix = perspective.getMatrix(),
          normalMatrixUniformLocation = shader.getNormalMatrixUniformLocation(this),
          rotationMatrixUniformLocation = shader.getRotationMatrixUniformLocation(this),
          positionMatrixUniformLocation = shader.getPositionMatrixUniformLocation(this),
          perspectiveMatrixUniformLocation = shader.getPerspectiveMatrixUniformLocation(this);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW52YXMuanMiXSwibmFtZXMiOlsiZG9tVXRpbGl0aWVzIiwicmVxdWlyZSIsInRleHR1cmVNaXhpbiIsImJ1ZmZlck1peGluIiwiY29sb3VyTWl4aW4iLCJtYXRyaXhNaXhpbiIsImRlcHRoTWl4aW4iLCJkb21FbGVtZW50RnJvbVNlbGVjdG9yIiwiZGVmYXVsdE9mZnNldCIsIkNhbnZhcyIsInNlbGVjdG9yIiwiZG9tRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiRXJyb3IiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInByb2dyYW0iLCJuYW1lIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJ1bmlmb3JtTG9jYXRpb24iLCJpbnRlZ2VyVmFsdWUiLCJ1bmlmb3JtMWkiLCJzaGFkZXIiLCJzaGFkZXJQcm9ncmFtIiwiZ2V0UHJvZ3JhbSIsInVzZVByb2dyYW0iLCJub3JtYWwiLCJyb3RhdGlvbiIsInBvc2l0aW9uIiwicGVyc3BlY3RpdmUiLCJub3JtYWxNYXRyaXgiLCJnZXRNYXRyaXgiLCJyb3RhdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4IiwicGVyc3BlY3RpdmVNYXRyaXgiLCJub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJyb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0UGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJjbGVhckRlcHRoIiwiY2xlYXJDb2xvdXIiLCJjbGVhckRlcHRoQnVmZmVyIiwiY2xlYXJDb2xvdXJCdWZmZXIiLCJhcHBseU1hdHJpeCIsImNvdW50Iiwib2Zmc2V0IiwiVFJJQU5HTEVTIiwiVU5TSUdORURfU0hPUlQiLCJtb2RlIiwidHlwZSIsImRyYXdFbGVtZW50cyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLGlCQUFSLENBQXJCO0FBQUEsSUFDTUMsZUFBZUQsUUFBUSxpQkFBUixDQURyQjtBQUFBLElBRU1FLGNBQWNGLFFBQVEsZ0JBQVIsQ0FGcEI7QUFBQSxJQUdNRyxjQUFjSCxRQUFRLGdCQUFSLENBSHBCO0FBQUEsSUFJTUksY0FBY0osUUFBUSxnQkFBUixDQUpwQjtBQUFBLElBS01LLGFBQWFMLFFBQVEsZUFBUixDQUxuQjs7SUFPUU0sc0IsR0FBMkJQLFksQ0FBM0JPLHNCOzs7QUFFUixJQUFNQyxnQkFBZ0IsQ0FBdEI7O0lBRU1DLE07QUFDSixvQkFBaUM7QUFBQSxRQUFyQkMsUUFBcUIsdUVBQVYsUUFBVTs7QUFBQTs7QUFDL0IsUUFBTUMsYUFBYUosdUJBQXVCRyxRQUF2QixDQUFuQjtBQUFBLFFBQ01FLFVBQVVELFdBQVdFLFVBQVgsQ0FBc0IsT0FBdEIsQ0FEaEI7O0FBR0EsUUFBSSxDQUFDRCxPQUFMLEVBQWM7QUFDWixZQUFNLElBQUlFLEtBQUoscUNBQU47QUFDRDs7QUFFRCxTQUFLRixPQUFMLEdBQWVBLE9BQWY7O0FBRUEsU0FBS0QsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0MsT0FBWjtBQUNEOzs7cUNBRWdCO0FBQUUsYUFBTyxLQUFLRCxVQUFMLENBQWdCSSxXQUF2QjtBQUFxQzs7O3NDQUV0QztBQUFFLGFBQU8sS0FBS0osVUFBTCxDQUFnQkssWUFBdkI7QUFBc0M7Ozt1Q0FFdkNDLE8sRUFBU0MsSSxFQUFNO0FBQUUsYUFBTyxLQUFLTixPQUFMLENBQWFPLGtCQUFiLENBQWdDRixPQUFoQyxFQUF5Q0MsSUFBekMsQ0FBUDtBQUF3RDs7O3lDQUV2RUQsTyxFQUFTQyxJLEVBQU07QUFBRSxhQUFPLEtBQUtOLE9BQUwsQ0FBYVEsaUJBQWIsQ0FBK0JILE9BQS9CLEVBQXdDQyxJQUF4QyxDQUFQO0FBQXVEOzs7bURBRTlERyxlLEVBQWlCQyxZLEVBQWM7QUFBRSxXQUFLVixPQUFMLENBQWFXLFNBQWIsQ0FBdUJGLGVBQXZCLEVBQXdDQyxZQUF4QztBQUF3RDs7OzhCQUU5R0UsTSxFQUFRO0FBQ2hCLFVBQU1DLGdCQUFnQkQsT0FBT0UsVUFBUCxFQUF0Qjs7QUFFQSxXQUFLZCxPQUFMLENBQWFlLFVBQWIsQ0FBd0JGLGFBQXhCO0FBQ0Q7OzsyQkFFTUcsTSxFQUFRQyxRLEVBQVVDLFEsRUFBVUMsVyxFQUFhUCxNLEVBQVE7QUFDdEQsVUFBTVEsZUFBZUosT0FBT0ssU0FBUCxFQUFyQjtBQUFBLFVBQ01DLGlCQUFpQkwsU0FBU0ksU0FBVCxFQUR2QjtBQUFBLFVBRU1FLGlCQUFpQkwsU0FBU0csU0FBVCxFQUZ2QjtBQUFBLFVBR01HLG9CQUFvQkwsWUFBWUUsU0FBWixFQUgxQjtBQUFBLFVBSU1JLDhCQUE4QmIsT0FBT2MsOEJBQVAsQ0FBc0MsSUFBdEMsQ0FKcEM7QUFBQSxVQUtNQyxnQ0FBZ0NmLE9BQU9nQixnQ0FBUCxDQUF3QyxJQUF4QyxDQUx0QztBQUFBLFVBTU1DLGdDQUFnQ2pCLE9BQU9rQixnQ0FBUCxDQUF3QyxJQUF4QyxDQU50QztBQUFBLFVBT01DLG1DQUFtQ25CLE9BQU9vQixtQ0FBUCxDQUEyQyxJQUEzQyxDQVB6Qzs7QUFTQSxXQUFLQyxVQUFMO0FBQ0EsV0FBS0MsV0FBTDtBQUNBLFdBQUtDLGdCQUFMO0FBQ0EsV0FBS0MsaUJBQUw7O0FBRUEsV0FBS0MsV0FBTCxDQUFpQlosMkJBQWpCLEVBQThDTCxZQUE5QztBQUNBLFdBQUtpQixXQUFMLENBQWlCViw2QkFBakIsRUFBZ0RMLGNBQWhEO0FBQ0EsV0FBS2UsV0FBTCxDQUFpQlIsNkJBQWpCLEVBQWdETixjQUFoRDtBQUNBLFdBQUtjLFdBQUwsQ0FBaUJOLGdDQUFqQixFQUFtRFAsaUJBQW5EO0FBQ0Q7OztpQ0FFWWMsSyxFQUErQjtBQUFBLFVBQXhCQyxNQUF3Qix1RUFBZjNDLGFBQWU7QUFBQSxxQkFDSixLQUFLSSxPQUREO0FBQUEsVUFDbEN3QyxTQURrQyxZQUNsQ0EsU0FEa0M7QUFBQSxVQUN2QkMsY0FEdUIsWUFDdkJBLGNBRHVCO0FBQUEsVUFFcENDLElBRm9DLEdBRTdCRixTQUY2QjtBQUFBLFVBR3BDRyxJQUhvQyxHQUc3QkYsY0FINkI7OztBQUsxQyxXQUFLekMsT0FBTCxDQUFhNEMsWUFBYixDQUEwQkYsSUFBMUIsRUFBZ0NKLEtBQWhDLEVBQXVDSyxJQUF2QyxFQUE2Q0osTUFBN0M7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE1BQVAsQ0FBY2pELE9BQU9rRCxTQUFyQixFQUFnQ3pELFlBQWhDO0FBQ0F1RCxPQUFPQyxNQUFQLENBQWNqRCxPQUFPa0QsU0FBckIsRUFBZ0N4RCxXQUFoQztBQUNBc0QsT0FBT0MsTUFBUCxDQUFjakQsT0FBT2tELFNBQXJCLEVBQWdDdkQsV0FBaEM7QUFDQXFELE9BQU9DLE1BQVAsQ0FBY2pELE9BQU9rRCxTQUFyQixFQUFnQ3RELFdBQWhDO0FBQ0FvRCxPQUFPQyxNQUFQLENBQWNqRCxPQUFPa0QsU0FBckIsRUFBZ0NyRCxVQUFoQzs7QUFFQXNELE9BQU9DLE9BQVAsR0FBaUJwRCxNQUFqQiIsImZpbGUiOiJjYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRvbVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2RvbScpLFxuICAgICAgdGV4dHVyZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi90ZXh0dXJlJyksXG4gICAgICBidWZmZXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vYnVmZmVyJyksXG4gICAgICBjb2xvdXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY29sb3VyJyksXG4gICAgICBtYXRyaXhNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vbWF0cml4JyksXG4gICAgICBkZXB0aE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9kZXB0aCcpO1xuXG5jb25zdCB7IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3IgfSA9IGRvbVV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdE9mZnNldCA9IDA7XG5cbmNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJ2NhbnZhcycpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgY29udGV4dC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldENsaWVudFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9XG5cbiAgZ2V0Q2xpZW50SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG4gIFxuICBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpIHsgdGhpcy5jb250ZXh0LnVuaWZvcm0xaSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSk7IH1cblxuICB1c2VTaGFkZXIoc2hhZGVyKSB7XG4gICAgY29uc3Qgc2hhZGVyUHJvZ3JhbSA9IHNoYWRlci5nZXRQcm9ncmFtKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcbiAgfVxuICBcbiAgcmVuZGVyKG5vcm1hbCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSwgc2hhZGVyKSB7XG4gICAgY29uc3Qgbm9ybWFsTWF0cml4ID0gbm9ybWFsLmdldE1hdHJpeCgpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gcm90YXRpb24uZ2V0TWF0cml4KCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbi5nZXRNYXRyaXgoKSxcbiAgICAgICAgICBwZXJzcGVjdGl2ZU1hdHJpeCA9IHBlcnNwZWN0aXZlLmdldE1hdHJpeCgpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHNoYWRlci5nZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24odGhpcyksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24odGhpcyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24odGhpcyksXG4gICAgICAgICAgcGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0UGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24odGhpcyk7XG5cbiAgICB0aGlzLmNsZWFyRGVwdGgoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyKCk7XG4gICAgdGhpcy5jbGVhckRlcHRoQnVmZmVyKCk7XG4gICAgdGhpcy5jbGVhckNvbG91ckJ1ZmZlcigpO1xuXG4gICAgdGhpcy5hcHBseU1hdHJpeChub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbE1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChyb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25NYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwZXJzcGVjdGl2ZU1hdHJpeCk7XG4gIH1cblxuICBkcmF3RWxlbWVudHMoY291bnQsIG9mZnNldCA9IGRlZmF1bHRPZmZzZXQpIHtcbiAgICBjb25zdCB7IFRSSUFOR0xFUywgVU5TSUdORURfU0hPUlQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBtb2RlID0gVFJJQU5HTEVTLFxuICAgICAgICAgIHR5cGUgPSBVTlNJR05FRF9TSE9SVDtcblxuICAgIHRoaXMuY29udGV4dC5kcmF3RWxlbWVudHMobW9kZSwgY291bnQsIHR5cGUsIG9mZnNldClcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHRleHR1cmVNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJ1ZmZlck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgY29sb3VyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBtYXRyaXhNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGRlcHRoTWl4aW4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhcztcbiJdfQ==