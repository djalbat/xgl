'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shader = require('../shader');

var calculateLightingSource = Shader.calculateLightingSource,
    calculatePositionSource = Shader.calculatePositionSource;


var vertexShaderSource = '\n        \n        ' + calculateLightingSource + '\n      \n        ' + calculatePositionSource + '\n\n        varying highp vec3 vLighting;\n        \n        attribute vec2 aTextureCoordinate;\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n                    \n          vTextureCoordinate = aTextureCoordinate;\n        }\n        \n      ',
    fragmentShaderSource = '\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        varying highp vec3 vLighting;\n                   \n        uniform sampler2D uSampler;\n\n        void main() {\n          highp vec4 texelColour = texture2D(uSampler, vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  \n        }\n        \n      ';

var TextureShader = function (_Shader) {
  _inherits(TextureShader, _Shader);

  function TextureShader() {
    _classCallCheck(this, TextureShader);

    return _possibleConstructorReturn(this, (TextureShader.__proto__ || Object.getPrototypeOf(TextureShader)).apply(this, arguments));
  }

  _createClass(TextureShader, [{
    key: 'createAndBindTextureCoordinateBuffer',
    value: function createAndBindTextureCoordinateBuffer(data, canvas) {
      var program = this.getProgram(),
          textureCoordinateBuffer = canvas.createBuffer(data),
          textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, 'aTextureCoordinate'),
          textureCoordinateComponents = 2;

      canvas.bindBuffer(textureCoordinateBuffer, textureCoordinateAttributeLocation, textureCoordinateComponents);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      return Shader.fromVertexShaderSourceAndFragmentShaderSource(TextureShader, vertexShaderSource, fragmentShaderSource, canvas);
    }
  }]);

  return TextureShader;
}(Shader);

module.exports = TextureShader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvdGV4dHVyZS5qcyJdLCJuYW1lcyI6WyJTaGFkZXIiLCJyZXF1aXJlIiwiY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2UiLCJjYWxjdWxhdGVQb3NpdGlvblNvdXJjZSIsInZlcnRleFNoYWRlclNvdXJjZSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiVGV4dHVyZVNoYWRlciIsImRhdGEiLCJjYW52YXMiLCJwcm9ncmFtIiwiZ2V0UHJvZ3JhbSIsInRleHR1cmVDb29yZGluYXRlQnVmZmVyIiwiY3JlYXRlQnVmZmVyIiwidGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiIsImdldEF0dHJpYnV0ZUxvY2F0aW9uIiwidGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzIiwiYmluZEJ1ZmZlciIsImZyb21WZXJ0ZXhTaGFkZXJTb3VyY2VBbmRGcmFnbWVudFNoYWRlclNvdXJjZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxXQUFSLENBQWY7O0lBRVFDLHVCLEdBQXFERixNLENBQXJERSx1QjtJQUF5QkMsdUIsR0FBNEJILE0sQ0FBNUJHLHVCOzs7QUFFakMsSUFBTUMsOENBRUlGLHVCQUZKLDBCQUlJQyx1QkFKSixrWUFBTjtBQUFBLElBcUJNRSwyWkFyQk47O0lBcUNNQyxhOzs7Ozs7Ozs7Ozt5REFHaUNDLEksRUFBTUMsTSxFQUFRO0FBQ2pELFVBQU1DLFVBQVUsS0FBS0MsVUFBTCxFQUFoQjtBQUFBLFVBQ01DLDBCQUEwQkgsT0FBT0ksWUFBUCxDQUFvQkwsSUFBcEIsQ0FEaEM7QUFBQSxVQUVNTSxxQ0FBcUNMLE9BQU9NLG9CQUFQLENBQTRCTCxPQUE1QixFQUFxQyxvQkFBckMsQ0FGM0M7QUFBQSxVQUdNTSw4QkFBOEIsQ0FIcEM7O0FBS0FQLGFBQU9RLFVBQVAsQ0FBa0JMLHVCQUFsQixFQUEyQ0Usa0NBQTNDLEVBQStFRSwyQkFBL0U7QUFDRDs7O2dDQVRrQlAsTSxFQUFRO0FBQUUsYUFBT1IsT0FBT2lCLDZDQUFQLENBQXFEWCxhQUFyRCxFQUFvRUYsa0JBQXBFLEVBQXdGQyxvQkFBeEYsRUFBOEdHLE1BQTlHLENBQVA7QUFBK0g7Ozs7RUFEbElSLE07O0FBYTVCa0IsT0FBT0MsT0FBUCxHQUFpQmIsYUFBakIiLCJmaWxlIjoidGV4dHVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2hhZGVyID0gcmVxdWlyZSgnLi4vc2hhZGVyJyk7XG5cbmNvbnN0IHsgY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2UsIGNhbGN1bGF0ZVBvc2l0aW9uU291cmNlIH0gPSBTaGFkZXI7XG5cbmNvbnN0IHZlcnRleFNoYWRlclNvdXJjZSA9IGBcbiAgICAgICAgXG4gICAgICAgICR7Y2FsY3VsYXRlTGlnaHRpbmdTb3VyY2V9XG4gICAgICBcbiAgICAgICAgJHtjYWxjdWxhdGVQb3NpdGlvblNvdXJjZX1cblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzIgYVRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB2VGV4dHVyZUNvb3JkaW5hdGUgPSBhVGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBgXG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgdVNhbXBsZXI7XG5cbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGhpZ2hwIHZlYzQgdGV4ZWxDb2xvdXIgPSB0ZXh0dXJlMkQodVNhbXBsZXIsIHZUZXh0dXJlQ29vcmRpbmF0ZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh0ZXhlbENvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHRleGVsQ29sb3VyLmEpOyAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgO1xuXG5jbGFzcyBUZXh0dXJlU2hhZGVyIGV4dGVuZHMgU2hhZGVyIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykgeyByZXR1cm4gU2hhZGVyLmZyb21WZXJ0ZXhTaGFkZXJTb3VyY2VBbmRGcmFnbWVudFNoYWRlclNvdXJjZShUZXh0dXJlU2hhZGVyLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpOyB9XG5cbiAgY3JlYXRlQW5kQmluZFRleHR1cmVDb29yZGluYXRlQnVmZmVyKGRhdGEsIGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIoZGF0YSksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCAnYVRleHR1cmVDb29yZGluYXRlJyksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzID0gMjtcblxuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRleHR1cmVDb29yZGluYXRlQnVmZmVyLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVNoYWRlcjtcbiJdfQ==