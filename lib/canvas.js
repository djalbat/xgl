'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var domUtilities = require('./utilities/dom'),
    bufferMixin = require('./mixin/buffer'),
    shaderMixin = require('./mixin/shader'),
    colourMixin = require('./mixin/colour'),
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
    key: 'useProgram',
    value: function useProgram(program) {
      this.context.useProgram(program);
    }
  }, {
    key: 'render',
    value: function render(shaderProgram, projection, modelView) {
      this.useProgram(shaderProgram);

      var projectionMatrix = projection.getMatrix(),
          modelViewMatrix = modelView.getMatrix(),
          projectionMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
          modelViewMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uModelViewMatrix');

      this.enableDepthTesting();
      this.enableDepthFunction();

      this.clearColour();
      this.clearDepth();
      this.clearColourBuffer();
      this.clearDepthBuffer();

      this.applyMatrix(projectionMatrixUniformLocation, projectionMatrix);
      this.applyMatrix(modelViewMatrixUniformLocation, modelViewMatrix);
    }
  }, {
    key: 'applyMatrix',
    value: function applyMatrix(uniformLocation, matrix) {
      this.context.uniformMatrix4fv(uniformLocation, false, matrix);
    }
  }, {
    key: 'draw',
    value: function draw(vertexCount) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;

      this.context.drawArrays(this.context.TRIANGLE_STRIP, offset, vertexCount);
    }
  }]);

  return Canvas;
}();

Object.assign(Canvas.prototype, bufferMixin);
Object.assign(Canvas.prototype, shaderMixin);
Object.assign(Canvas.prototype, colourMixin);
Object.assign(Canvas.prototype, depthMixin);

module.exports = Canvas;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW52YXMuanMiXSwibmFtZXMiOlsiZG9tVXRpbGl0aWVzIiwicmVxdWlyZSIsImJ1ZmZlck1peGluIiwic2hhZGVyTWl4aW4iLCJjb2xvdXJNaXhpbiIsImRlcHRoTWl4aW4iLCJkb21FbGVtZW50RnJvbVNlbGVjdG9yIiwiZGVmYXVsdE9mZnNldCIsIkNhbnZhcyIsInNlbGVjdG9yIiwiZG9tRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiRXJyb3IiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInByb2dyYW0iLCJuYW1lIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJ1c2VQcm9ncmFtIiwic2hhZGVyUHJvZ3JhbSIsInByb2plY3Rpb24iLCJtb2RlbFZpZXciLCJwcm9qZWN0aW9uTWF0cml4IiwiZ2V0TWF0cml4IiwibW9kZWxWaWV3TWF0cml4IiwicHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsIm1vZGVsVmlld01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImVuYWJsZURlcHRoVGVzdGluZyIsImVuYWJsZURlcHRoRnVuY3Rpb24iLCJjbGVhckNvbG91ciIsImNsZWFyRGVwdGgiLCJjbGVhckNvbG91ckJ1ZmZlciIsImNsZWFyRGVwdGhCdWZmZXIiLCJhcHBseU1hdHJpeCIsInVuaWZvcm1Mb2NhdGlvbiIsIm1hdHJpeCIsInVuaWZvcm1NYXRyaXg0ZnYiLCJ2ZXJ0ZXhDb3VudCIsIm9mZnNldCIsImRyYXdBcnJheXMiLCJUUklBTkdMRV9TVFJJUCIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLGlCQUFSLENBQXJCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxnQkFBUixDQURwQjtBQUFBLElBRU1FLGNBQWNGLFFBQVEsZ0JBQVIsQ0FGcEI7QUFBQSxJQUdNRyxjQUFjSCxRQUFRLGdCQUFSLENBSHBCO0FBQUEsSUFJTUksYUFBYUosUUFBUSxlQUFSLENBSm5COztJQU1RSyxzQixHQUEyQk4sWSxDQUEzQk0sc0I7OztBQUVSLElBQU1DLGdCQUFnQixDQUF0Qjs7SUFFTUMsTTtBQUNKLG9CQUFpQztBQUFBLFFBQXJCQyxRQUFxQix1RUFBVixRQUFVOztBQUFBOztBQUMvQixRQUFNQyxhQUFhSix1QkFBdUJHLFFBQXZCLENBQW5CO0FBQUEsUUFDTUUsVUFBVUQsV0FBV0UsVUFBWCxDQUFzQixPQUF0QixDQURoQjs7QUFHQSxRQUFJLENBQUNELE9BQUwsRUFBYztBQUNaLFlBQU0sSUFBSUUsS0FBSixxQ0FBTjtBQUNEOztBQUVELFNBQUtGLE9BQUwsR0FBZUEsT0FBZjs7QUFFQSxTQUFLRCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLQyxPQUFaO0FBQ0Q7OztxQ0FFZ0I7QUFBRSxhQUFPLEtBQUtELFVBQUwsQ0FBZ0JJLFdBQXZCO0FBQXFDOzs7c0NBRXRDO0FBQUUsYUFBTyxLQUFLSixVQUFMLENBQWdCSyxZQUF2QjtBQUFzQzs7O3VDQUV2Q0MsTyxFQUFTQyxJLEVBQU07QUFBRSxhQUFPLEtBQUtOLE9BQUwsQ0FBYU8sa0JBQWIsQ0FBZ0NGLE9BQWhDLEVBQXlDQyxJQUF6QyxDQUFQO0FBQXdEOzs7eUNBRXZFRCxPLEVBQVNDLEksRUFBTTtBQUFFLGFBQU8sS0FBS04sT0FBTCxDQUFhUSxpQkFBYixDQUErQkgsT0FBL0IsRUFBd0NDLElBQXhDLENBQVA7QUFBdUQ7OzsrQkFFbEZELE8sRUFBUztBQUFFLFdBQUtMLE9BQUwsQ0FBYVMsVUFBYixDQUF3QkosT0FBeEI7QUFBbUM7OzsyQkFFbERLLGEsRUFBZUMsVSxFQUFZQyxTLEVBQVc7QUFDM0MsV0FBS0gsVUFBTCxDQUFnQkMsYUFBaEI7O0FBRUEsVUFBTUcsbUJBQW1CRixXQUFXRyxTQUFYLEVBQXpCO0FBQUEsVUFDTUMsa0JBQWtCSCxVQUFVRSxTQUFWLEVBRHhCO0FBQUEsVUFFTUUsa0NBQWtDLEtBQUtULGtCQUFMLENBQXdCRyxhQUF4QixFQUF1QyxtQkFBdkMsQ0FGeEM7QUFBQSxVQUdNTyxpQ0FBaUMsS0FBS1Ysa0JBQUwsQ0FBd0JHLGFBQXhCLEVBQXVDLGtCQUF2QyxDQUh2Qzs7QUFLQSxXQUFLUSxrQkFBTDtBQUNBLFdBQUtDLG1CQUFMOztBQUVBLFdBQUtDLFdBQUw7QUFDQSxXQUFLQyxVQUFMO0FBQ0EsV0FBS0MsaUJBQUw7QUFDQSxXQUFLQyxnQkFBTDs7QUFFQSxXQUFLQyxXQUFMLENBQWlCUiwrQkFBakIsRUFBa0RILGdCQUFsRDtBQUNBLFdBQUtXLFdBQUwsQ0FBaUJQLDhCQUFqQixFQUFpREYsZUFBakQ7QUFDRDs7O2dDQUVXVSxlLEVBQWlCQyxNLEVBQVE7QUFDbkMsV0FBSzFCLE9BQUwsQ0FBYTJCLGdCQUFiLENBQThCRixlQUE5QixFQUErQyxLQUEvQyxFQUFzREMsTUFBdEQ7QUFDRDs7O3lCQUVJRSxXLEVBQXFDO0FBQUEsVUFBeEJDLE1BQXdCLHVFQUFmakMsYUFBZTs7QUFDeEMsV0FBS0ksT0FBTCxDQUFhOEIsVUFBYixDQUF3QixLQUFLOUIsT0FBTCxDQUFhK0IsY0FBckMsRUFBcURGLE1BQXJELEVBQTZERCxXQUE3RDtBQUNEOzs7Ozs7QUFHSEksT0FBT0MsTUFBUCxDQUFjcEMsT0FBT3FDLFNBQXJCLEVBQWdDM0MsV0FBaEM7QUFDQXlDLE9BQU9DLE1BQVAsQ0FBY3BDLE9BQU9xQyxTQUFyQixFQUFnQzFDLFdBQWhDO0FBQ0F3QyxPQUFPQyxNQUFQLENBQWNwQyxPQUFPcUMsU0FBckIsRUFBZ0N6QyxXQUFoQztBQUNBdUMsT0FBT0MsTUFBUCxDQUFjcEMsT0FBT3FDLFNBQXJCLEVBQWdDeEMsVUFBaEM7O0FBRUF5QyxPQUFPQyxPQUFQLEdBQWlCdkMsTUFBakIiLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkb21VdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9kb20nKSxcbiAgICAgIGJ1ZmZlck1peGluID0gcmVxdWlyZSgnLi9taXhpbi9idWZmZXInKSxcbiAgICAgIHNoYWRlck1peGluID0gcmVxdWlyZSgnLi9taXhpbi9zaGFkZXInKSxcbiAgICAgIGNvbG91ck1peGluID0gcmVxdWlyZSgnLi9taXhpbi9jb2xvdXInKSxcbiAgICAgIGRlcHRoTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2RlcHRoJyk7XG5cbmNvbnN0IHsgZG9tRWxlbWVudEZyb21TZWxlY3RvciB9ID0gZG9tVXRpbGl0aWVzO1xuXG5jb25zdCBkZWZhdWx0T2Zmc2V0ID0gMDtcblxuY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSAnY2FudmFzJykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSxcbiAgICAgICAgICBjb250ZXh0ID0gZG9tRWxlbWVudC5nZXRDb250ZXh0KCd3ZWJnbCcpO1xuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBpbml0aWFsaXNlIHRoZSBjb250ZXh0LmApO1xuICAgIH1cblxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0Q2xpZW50V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7IH1cblxuICBnZXRDbGllbnRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0OyB9XG5cbiAgZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7IH1cblxuICBnZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7IH1cblxuICB1c2VQcm9ncmFtKHByb2dyYW0pIHsgdGhpcy5jb250ZXh0LnVzZVByb2dyYW0ocHJvZ3JhbSk7IH1cblxuICByZW5kZXIoc2hhZGVyUHJvZ3JhbSwgcHJvamVjdGlvbiwgbW9kZWxWaWV3KSB7XG4gICAgdGhpcy51c2VQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuXG4gICAgY29uc3QgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb24uZ2V0TWF0cml4KCksXG4gICAgICAgICAgbW9kZWxWaWV3TWF0cml4ID0gbW9kZWxWaWV3LmdldE1hdHJpeCgpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndVByb2plY3Rpb25NYXRyaXgnKSxcbiAgICAgICAgICBtb2RlbFZpZXdNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndU1vZGVsVmlld01hdHJpeCcpO1xuXG4gICAgdGhpcy5lbmFibGVEZXB0aFRlc3RpbmcoKTtcbiAgICB0aGlzLmVuYWJsZURlcHRoRnVuY3Rpb24oKTtcblxuICAgIHRoaXMuY2xlYXJDb2xvdXIoKTtcbiAgICB0aGlzLmNsZWFyRGVwdGgoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyQnVmZmVyKCk7XG4gICAgdGhpcy5jbGVhckRlcHRoQnVmZmVyKCk7XG5cbiAgICB0aGlzLmFwcGx5TWF0cml4KHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgobW9kZWxWaWV3TWF0cml4VW5pZm9ybUxvY2F0aW9uLCBtb2RlbFZpZXdNYXRyaXgpO1xuICB9XG5cbiAgYXBwbHlNYXRyaXgodW5pZm9ybUxvY2F0aW9uLCBtYXRyaXgpIHtcbiAgICB0aGlzLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih1bmlmb3JtTG9jYXRpb24sIGZhbHNlLCBtYXRyaXgpO1xuICB9XG4gIFxuICBkcmF3KHZlcnRleENvdW50LCBvZmZzZXQgPSBkZWZhdWx0T2Zmc2V0KSB7XG4gICAgdGhpcy5jb250ZXh0LmRyYXdBcnJheXModGhpcy5jb250ZXh0LlRSSUFOR0xFX1NUUklQLCBvZmZzZXQsIHZlcnRleENvdW50KTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJ1ZmZlck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgc2hhZGVyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBjb2xvdXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGRlcHRoTWl4aW4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhcztcbiJdfQ==