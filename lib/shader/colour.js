'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shader = require('../shader');

var calculateLightingSource = Shader.calculateLightingSource,
    calculatePositionSource = Shader.calculatePositionSource;


var vertexColourAttributeName = 'aVertexColour';

var vertexShaderSource = '\n    \n        attribute vec4 ' + vertexColourAttributeName + ';\n\n        ' + calculateLightingSource + '\n      \n        ' + calculatePositionSource + '\n    \n        varying highp vec3 vLighting;\n        \n        varying lowp vec4 vColour;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n\n          vColour = ' + vertexColourAttributeName + ';                    \n        }\n        \n      ',
    fragmentShaderSource = '\n        \n        varying lowp vec4 vColour;\n              \n        varying highp vec3 vLighting;\n\n        void main() {\n          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);\n        }\n        \n      ';

var ColourShader = function (_Shader) {
  _inherits(ColourShader, _Shader);

  function ColourShader(program, normalMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, perspectiveMatrixUniformLocation, vertexPositionAttributeLocation, vertexNormalAttributeLocation, vertexColourAttributeLocation) {
    _classCallCheck(this, ColourShader);

    var _this = _possibleConstructorReturn(this, (ColourShader.__proto__ || Object.getPrototypeOf(ColourShader)).call(this, program, normalMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, perspectiveMatrixUniformLocation, vertexPositionAttributeLocation, vertexNormalAttributeLocation));

    _this.vertexColourAttributeLocation = vertexColourAttributeLocation;
    return _this;
  }

  _createClass(ColourShader, [{
    key: 'getVertexColourAttributeLocation',
    value: function getVertexColourAttributeLocation() {
      return this.vertexColourAttributeLocation;
    }
  }, {
    key: 'createVertexColourBuffer',
    value: function createVertexColourBuffer(vertexColourData, canvas) {
      var vertexColourBuffer = canvas.createBuffer(vertexColourData);

      return vertexColourBuffer;
    }
  }, {
    key: 'bindVertexColourBuffer',
    value: function bindVertexColourBuffer(vertexColourBuffer, canvas) {
      var vertexColourComponents = 4;

      canvas.bindBuffer(vertexColourBuffer, this.vertexColourAttributeLocation, vertexColourComponents);
    }
  }, {
    key: 'activateTexture',
    value: function activateTexture(canvas) {} ///

  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var context = canvas.getContext(),
          program = context.createProgram(),
          vertexShader = Shader.createVertexShader(vertexShaderSource, context),
          fragmentShader = Shader.createFragmentShader(fragmentShaderSource, context);

      context.attachShader(program, vertexShader);
      context.attachShader(program, fragmentShader);
      context.linkProgram(program);

      var vertexColourAttributeLocation = canvas.getAttributeLocation(program, vertexColourAttributeName),
          colourShader = Shader.fromProgram(ColourShader, program, canvas, vertexColourAttributeLocation);

      return colourShader;
    }
  }]);

  return ColourShader;
}(Shader);

module.exports = ColourShader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvY29sb3VyLmpzIl0sIm5hbWVzIjpbIlNoYWRlciIsInJlcXVpcmUiLCJjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSIsImNhbGN1bGF0ZVBvc2l0aW9uU291cmNlIiwidmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSIsInZlcnRleFNoYWRlclNvdXJjZSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiQ29sb3VyU2hhZGVyIiwicHJvZ3JhbSIsIm5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJ2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4Q29sb3VyRGF0YSIsImNhbnZhcyIsInZlcnRleENvbG91ckJ1ZmZlciIsImNyZWF0ZUJ1ZmZlciIsInZlcnRleENvbG91ckNvbXBvbmVudHMiLCJiaW5kQnVmZmVyIiwiY29udGV4dCIsImdldENvbnRleHQiLCJjcmVhdGVQcm9ncmFtIiwidmVydGV4U2hhZGVyIiwiY3JlYXRlVmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJjcmVhdGVGcmFnbWVudFNoYWRlciIsImF0dGFjaFNoYWRlciIsImxpbmtQcm9ncmFtIiwiZ2V0QXR0cmlidXRlTG9jYXRpb24iLCJjb2xvdXJTaGFkZXIiLCJmcm9tUHJvZ3JhbSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxXQUFSLENBQWY7O0lBRVFDLHVCLEdBQXFERixNLENBQXJERSx1QjtJQUF5QkMsdUIsR0FBNEJILE0sQ0FBNUJHLHVCOzs7QUFFakMsSUFBTUMsNEJBQTRCLGVBQWxDOztBQUVBLElBQU1DLHlEQUVtQkQseUJBRm5CLHFCQUlJRix1QkFKSiwwQkFNSUMsdUJBTkosd1BBaUJnQkMseUJBakJoQix1REFBTjtBQUFBLElBcUJNRSx3UEFyQk47O0lBaUNNQyxZOzs7QUFDSix3QkFBWUMsT0FBWixFQUFxQkMsMkJBQXJCLEVBQWtEQyw2QkFBbEQsRUFBaUZDLDZCQUFqRixFQUFnSEMsZ0NBQWhILEVBQWtKQywrQkFBbEosRUFBbUxDLDZCQUFuTCxFQUFrTkMsNkJBQWxOLEVBQWlQO0FBQUE7O0FBQUEsNEhBQ3pPUCxPQUR5TyxFQUNoT0MsMkJBRGdPLEVBQ25NQyw2QkFEbU0sRUFDcEtDLDZCQURvSyxFQUNySUMsZ0NBRHFJLEVBQ25HQywrQkFEbUcsRUFDbEVDLDZCQURrRTs7QUFHL08sVUFBS0MsNkJBQUwsR0FBcUNBLDZCQUFyQztBQUgrTztBQUloUDs7Ozt1REFFa0M7QUFDakMsYUFBTyxLQUFLQSw2QkFBWjtBQUNEOzs7NkNBa0J3QkMsZ0IsRUFBa0JDLE0sRUFBUTtBQUNqRCxVQUFNQyxxQkFBcUJELE9BQU9FLFlBQVAsQ0FBb0JILGdCQUFwQixDQUEzQjs7QUFFQSxhQUFPRSxrQkFBUDtBQUNEOzs7MkNBRXNCQSxrQixFQUFvQkQsTSxFQUFRO0FBQ2pELFVBQU1HLHlCQUF5QixDQUEvQjs7QUFFQUgsYUFBT0ksVUFBUCxDQUFrQkgsa0JBQWxCLEVBQXNDLEtBQUtILDZCQUEzQyxFQUEwRUssc0JBQTFFO0FBQ0Q7OztvQ0FFZUgsTSxFQUFRLENBQUUsQyxDQUFFOzs7O2dDQTVCVEEsTSxFQUFRO0FBQ3pCLFVBQU1LLFVBQVVMLE9BQU9NLFVBQVAsRUFBaEI7QUFBQSxVQUNNZixVQUFVYyxRQUFRRSxhQUFSLEVBRGhCO0FBQUEsVUFFTUMsZUFBZXpCLE9BQU8wQixrQkFBUCxDQUEwQnJCLGtCQUExQixFQUE4Q2lCLE9BQTlDLENBRnJCO0FBQUEsVUFHTUssaUJBQWlCM0IsT0FBTzRCLG9CQUFQLENBQTRCdEIsb0JBQTVCLEVBQWtEZ0IsT0FBbEQsQ0FIdkI7O0FBS0FBLGNBQVFPLFlBQVIsQ0FBcUJyQixPQUFyQixFQUE4QmlCLFlBQTlCO0FBQ0FILGNBQVFPLFlBQVIsQ0FBcUJyQixPQUFyQixFQUE4Qm1CLGNBQTlCO0FBQ0FMLGNBQVFRLFdBQVIsQ0FBb0J0QixPQUFwQjs7QUFFQSxVQUFNTyxnQ0FBZ0NFLE9BQU9jLG9CQUFQLENBQTRCdkIsT0FBNUIsRUFBcUNKLHlCQUFyQyxDQUF0QztBQUFBLFVBQ000QixlQUFlaEMsT0FBT2lDLFdBQVAsQ0FBbUIxQixZQUFuQixFQUFpQ0MsT0FBakMsRUFBMENTLE1BQTFDLEVBQWtERiw2QkFBbEQsQ0FEckI7O0FBR0EsYUFBT2lCLFlBQVA7QUFDRDs7OztFQXpCd0JoQyxNOztBQTBDM0JrQyxPQUFPQyxPQUFQLEdBQWlCNUIsWUFBakIiLCJmaWxlIjoiY29sb3VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTaGFkZXIgPSByZXF1aXJlKCcuLi9zaGFkZXInKTtcblxuY29uc3QgeyBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSwgY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2UgfSA9IFNoYWRlcjtcblxuY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSA9ICdhVmVydGV4Q29sb3VyJztcblxuY29uc3QgdmVydGV4U2hhZGVyU291cmNlID0gYFxuICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCAke3ZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgICR7Y2FsY3VsYXRlTGlnaHRpbmdTb3VyY2V9XG4gICAgICBcbiAgICAgICAgJHtjYWxjdWxhdGVQb3NpdGlvblNvdXJjZX1cbiAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdkxpZ2h0aW5nID0gY2FsY3VsYXRlTGlnaHRpbmcoKTtcblxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcblxuICAgICAgICAgIHZDb2xvdXIgPSAke3ZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWV9OyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBgXG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh2Q29sb3VyLnJnYiAqIHZMaWdodGluZywgdkNvbG91ci5hKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGA7XG4gIFxuY2xhc3MgQ29sb3VyU2hhZGVyIGV4dGVuZHMgU2hhZGVyIHtcbiAgY29uc3RydWN0b3IocHJvZ3JhbSwgbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICBzdXBlcihwcm9ncmFtLCBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb2dyYW0gPSBjb250ZXh0LmNyZWF0ZVByb2dyYW0oKSxcbiAgICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBTaGFkZXIuY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY29udGV4dCksXG4gICAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBTaGFkZXIuY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcbiAgICBjb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gICAgY29udGV4dC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIGNvbnN0IHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIGNvbG91clNoYWRlciA9IFNoYWRlci5mcm9tUHJvZ3JhbShDb2xvdXJTaGFkZXIsIHByb2dyYW0sIGNhbnZhcywgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24pO1xuXG4gICAgcmV0dXJuIGNvbG91clNoYWRlcjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleENvbG91ckJ1ZmZlcih2ZXJ0ZXhDb2xvdXJEYXRhLCBjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleENvbG91ckRhdGEpO1xuXG4gICAgcmV0dXJuIHZlcnRleENvbG91ckJ1ZmZlcjtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhDb2xvdXJCdWZmZXIodmVydGV4Q29sb3VyQnVmZmVyLCBjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzID0gNDtcblxuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHZlcnRleENvbG91ckJ1ZmZlciwgdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQ29tcG9uZW50cyk7XG4gIH1cblxuICBhY3RpdmF0ZVRleHR1cmUoY2FudmFzKSB7fSAgLy8vXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyU2hhZGVyO1xuIl19