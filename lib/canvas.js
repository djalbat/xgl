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
    key: 'resize',
    value: function resize(width, height) {
      this.setWidth(width);
      this.setHeight(height);
      this.setViewport(0, 0, width, height);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW52YXMuanMiXSwibmFtZXMiOlsiZG9tVXRpbGl0aWVzIiwicmVxdWlyZSIsInRleHR1cmVNaXhpbiIsImJ1ZmZlck1peGluIiwiY29sb3VyTWl4aW4iLCJtYXRyaXhNaXhpbiIsImRlcHRoTWl4aW4iLCJtb3VzZU1peGluIiwiZG9tRWxlbWVudEZyb21TZWxlY3RvciIsImRlZmF1bHRPZmZzZXQiLCJDYW52YXMiLCJzZWxlY3RvciIsImRvbUVsZW1lbnQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIkVycm9yIiwid2lkdGgiLCJoZWlnaHQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInByb2dyYW0iLCJuYW1lIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJzZXRBdHRyaWJ1dGUiLCJ4IiwieSIsInZpZXdwb3J0Iiwic2V0V2lkdGgiLCJzZXRIZWlnaHQiLCJzZXRWaWV3cG9ydCIsInVuaWZvcm1Mb2NhdGlvbiIsImludGVnZXJWYWx1ZSIsInVuaWZvcm0xaSIsImNyZWF0ZVByb2dyYW0iLCJzaGFkZXIiLCJzaGFkZXJQcm9ncmFtIiwiZ2V0UHJvZ3JhbSIsInVzZVByb2dyYW0iLCJjbGVhckRlcHRoIiwiY2xlYXJDb2xvdXIiLCJjbGVhckRlcHRoQnVmZmVyIiwiY2xlYXJDb2xvdXJCdWZmZXIiLCJub3JtYWwiLCJyb3RhdGlvbiIsInBvc2l0aW9uIiwicGVyc3BlY3RpdmUiLCJub3JtYWxNYXRyaXgiLCJnZXRNYXRyaXgiLCJyb3RhdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4IiwicGVyc3BlY3RpdmVNYXRyaXgiLCJub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJyb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0UGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJhcHBseU1hdHJpeCIsImNvdW50Iiwib2Zmc2V0IiwiVFJJQU5HTEVTIiwiVU5TSUdORURfU0hPUlQiLCJtb2RlIiwidHlwZSIsImRyYXdFbGVtZW50cyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLGlCQUFSLENBQXJCO0FBQUEsSUFDTUMsZUFBZUQsUUFBUSxpQkFBUixDQURyQjtBQUFBLElBRU1FLGNBQWNGLFFBQVEsZ0JBQVIsQ0FGcEI7QUFBQSxJQUdNRyxjQUFjSCxRQUFRLGdCQUFSLENBSHBCO0FBQUEsSUFJTUksY0FBY0osUUFBUSxnQkFBUixDQUpwQjtBQUFBLElBS01LLGFBQWFMLFFBQVEsZUFBUixDQUxuQjtBQUFBLElBTU1NLGFBQWFOLFFBQVEsZUFBUixDQU5uQjs7SUFRUU8sc0IsR0FBMkJSLFksQ0FBM0JRLHNCOzs7QUFFUixJQUFNQyxnQkFBZ0IsQ0FBdEI7O0lBRU1DLE07QUFDSixvQkFBaUM7QUFBQSxRQUFyQkMsUUFBcUIsdUVBQVYsUUFBVTs7QUFBQTs7QUFDL0IsUUFBTUMsYUFBYUosdUJBQXVCRyxRQUF2QixDQUFuQjtBQUFBLFFBQ01FLFVBQVVELFdBQVdFLFVBQVgsQ0FBc0IsT0FBdEIsQ0FEaEI7O0FBR0EsUUFBSSxDQUFDRCxPQUFMLEVBQWM7QUFDWixZQUFNLElBQUlFLEtBQUoscUNBQU47QUFDRDs7QUFFRCxTQUFLRixPQUFMLEdBQWVBLE9BQWY7O0FBRUEsU0FBS0QsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0MsT0FBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtELFVBQVo7QUFDRDs7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LFVBRXBDQyxJQUZvQyxHQUU3QkYsU0FGNkI7QUFBQSxVQUdwQ0csSUFIb0MsR0FHN0JGLGNBSDZCOzs7QUFLMUMsV0FBS25ELE9BQUwsQ0FBYXNELFlBQWIsQ0FBMEJGLElBQTFCLEVBQWdDSixLQUFoQyxFQUF1Q0ssSUFBdkMsRUFBNkNKLE1BQTdDO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxNQUFQLENBQWMzRCxPQUFPNEQsU0FBckIsRUFBZ0NwRSxZQUFoQztBQUNBa0UsT0FBT0MsTUFBUCxDQUFjM0QsT0FBTzRELFNBQXJCLEVBQWdDbkUsV0FBaEM7QUFDQWlFLE9BQU9DLE1BQVAsQ0FBYzNELE9BQU80RCxTQUFyQixFQUFnQ2xFLFdBQWhDO0FBQ0FnRSxPQUFPQyxNQUFQLENBQWMzRCxPQUFPNEQsU0FBckIsRUFBZ0NqRSxXQUFoQztBQUNBK0QsT0FBT0MsTUFBUCxDQUFjM0QsT0FBTzRELFNBQXJCLEVBQWdDaEUsVUFBaEM7QUFDQThELE9BQU9DLE1BQVAsQ0FBYzNELE9BQU80RCxTQUFyQixFQUFnQy9ELFVBQWhDOztBQUVBZ0UsT0FBT0MsT0FBUCxHQUFpQjlELE1BQWpCIiwiZmlsZSI6ImNhbnZhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZG9tVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvZG9tJyksXG4gICAgICB0ZXh0dXJlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL3RleHR1cmUnKSxcbiAgICAgIGJ1ZmZlck1peGluID0gcmVxdWlyZSgnLi9taXhpbi9idWZmZXInKSxcbiAgICAgIGNvbG91ck1peGluID0gcmVxdWlyZSgnLi9taXhpbi9jb2xvdXInKSxcbiAgICAgIG1hdHJpeE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9tYXRyaXgnKSxcbiAgICAgIGRlcHRoTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2RlcHRoJyksXG4gICAgICBtb3VzZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9tb3VzZScpO1xuXG5jb25zdCB7IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3IgfSA9IGRvbVV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdE9mZnNldCA9IDA7XG5cbmNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJ2NhbnZhcycpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgY29udGV4dC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LndpZHRoOyB9XG5cbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmhlaWdodDsgfVxuXG4gIGdldENsaWVudFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9XG5cbiAgZ2V0Q2xpZW50SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aWR0aCk7IH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCk7IH1cblxuICBzZXRWaWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7IHRoaXMuY29udGV4dC52aWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTsgfVxuXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5zZXRXaWR0aCh3aWR0aCk7XG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgICB0aGlzLnNldFZpZXdwb3J0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHVuaWZvcm1Mb2NhdGlvbiwgaW50ZWdlclZhbHVlKSB7IHRoaXMuY29udGV4dC51bmlmb3JtMWkodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpOyB9XG5cbiAgY3JlYXRlUHJvZ3JhbSgpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5jcmVhdGVQcm9ncmFtKCk7IH1cblxuICB1c2VTaGFkZXIoc2hhZGVyKSB7XG4gICAgY29uc3Qgc2hhZGVyUHJvZ3JhbSA9IHNoYWRlci5nZXRQcm9ncmFtKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY2xlYXJEZXB0aCgpO1xuICAgIHRoaXMuY2xlYXJDb2xvdXIoKTtcbiAgICB0aGlzLmNsZWFyRGVwdGhCdWZmZXIoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyQnVmZmVyKCk7XG4gIH1cbiAgXG4gIHJlbmRlcihzaGFkZXIsIG5vcm1hbCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSkge1xuICAgIGNvbnN0IG5vcm1hbE1hdHJpeCA9IG5vcm1hbC5nZXRNYXRyaXgoKSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeCA9IHJvdGF0aW9uLmdldE1hdHJpeCgpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb24uZ2V0TWF0cml4KCksXG4gICAgICAgICAgcGVyc3BlY3RpdmVNYXRyaXggPSBwZXJzcGVjdGl2ZS5nZXRNYXRyaXgoKSxcbiAgICAgICAgICBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0Tm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHNoYWRlci5nZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldFBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7XG5cbiAgICB0aGlzLmFwcGx5TWF0cml4KG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBlcnNwZWN0aXZlTWF0cml4KTtcbiAgfVxuXG4gIGRyYXdFbGVtZW50cyhjb3VudCwgb2Zmc2V0ID0gZGVmYXVsdE9mZnNldCkge1xuICAgIGNvbnN0IHsgVFJJQU5HTEVTLCBVTlNJR05FRF9TSE9SVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIG1vZGUgPSBUUklBTkdMRVMsXG4gICAgICAgICAgdHlwZSA9IFVOU0lHTkVEX1NIT1JUO1xuXG4gICAgdGhpcy5jb250ZXh0LmRyYXdFbGVtZW50cyhtb2RlLCBjb3VudCwgdHlwZSwgb2Zmc2V0KVxuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgdGV4dHVyZU1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYnVmZmVyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBjb2xvdXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1hdHJpeE1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgZGVwdGhNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1vdXNlTWl4aW4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhcztcbiJdfQ==