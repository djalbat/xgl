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
    value: function createAndBindTextureCoordinateBuffer(vertexCoordinateData, canvas) {
      var program = this.getProgram(),
          textureCoordinateBuffer = canvas.createBuffer(vertexCoordinateData),
          textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, 'aTextureCoordinate'),
          textureCoordinateComponents = 2;

      canvas.bindBuffer(textureCoordinateBuffer, textureCoordinateAttributeLocation, textureCoordinateComponents);
    }
  }, {
    key: 'createAndActivateTexture',
    value: function createAndActivateTexture(imageURL, canvas, done) {
      var image = new Image();

      image.onload = function () {
        var context = canvas.getContext(),
            program = this.getProgram(),
            TEXTURE0 = context.TEXTURE0,
            target = TEXTURE0,
            uSamplerUniformLocationIntegerValue = 0,
            uSamplerUniformLocation = canvas.getUniformLocation(program, 'uSampler');


        canvas.createTexture(image);

        canvas.activateTexture(target);

        canvas.setUniformLocationIntegerValue(uSamplerUniformLocation, uSamplerUniformLocationIntegerValue);

        done();
      }.bind(this);

      image.src = imageURL; ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvdGV4dHVyZS5qcyJdLCJuYW1lcyI6WyJTaGFkZXIiLCJyZXF1aXJlIiwiY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2UiLCJjYWxjdWxhdGVQb3NpdGlvblNvdXJjZSIsInZlcnRleFNoYWRlclNvdXJjZSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiVGV4dHVyZVNoYWRlciIsInZlcnRleENvb3JkaW5hdGVEYXRhIiwiY2FudmFzIiwicHJvZ3JhbSIsImdldFByb2dyYW0iLCJ0ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciIsImNyZWF0ZUJ1ZmZlciIsInRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24iLCJnZXRBdHRyaWJ1dGVMb2NhdGlvbiIsInRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyIsImJpbmRCdWZmZXIiLCJpbWFnZVVSTCIsImRvbmUiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwiZ2V0Q29udGV4dCIsIlRFWFRVUkUwIiwiY29udGV4dCIsInRhcmdldCIsInVTYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwidVNhbXBsZXJVbmlmb3JtTG9jYXRpb24iLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJjcmVhdGVUZXh0dXJlIiwiYWN0aXZhdGVUZXh0dXJlIiwic2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwiYmluZCIsInNyYyIsImZyb21WZXJ0ZXhTaGFkZXJTb3VyY2VBbmRGcmFnbWVudFNoYWRlclNvdXJjZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxXQUFSLENBQWY7O0lBRVFDLHVCLEdBQXFERixNLENBQXJERSx1QjtJQUF5QkMsdUIsR0FBNEJILE0sQ0FBNUJHLHVCOzs7QUFFakMsSUFBTUMsOENBRUlGLHVCQUZKLDBCQUlJQyx1QkFKSixrWUFBTjtBQUFBLElBcUJNRSwyWkFyQk47O0lBcUNNQyxhOzs7Ozs7Ozs7Ozt5REFHaUNDLG9CLEVBQXNCQyxNLEVBQVE7QUFDakUsVUFBTUMsVUFBVSxLQUFLQyxVQUFMLEVBQWhCO0FBQUEsVUFDTUMsMEJBQTBCSCxPQUFPSSxZQUFQLENBQW9CTCxvQkFBcEIsQ0FEaEM7QUFBQSxVQUVNTSxxQ0FBcUNMLE9BQU9NLG9CQUFQLENBQTRCTCxPQUE1QixFQUFxQyxvQkFBckMsQ0FGM0M7QUFBQSxVQUdNTSw4QkFBOEIsQ0FIcEM7O0FBS0FQLGFBQU9RLFVBQVAsQ0FBa0JMLHVCQUFsQixFQUEyQ0Usa0NBQTNDLEVBQStFRSwyQkFBL0U7QUFDRDs7OzZDQUV3QkUsUSxFQUFVVCxNLEVBQVFVLEksRUFBTTtBQUMvQyxVQUFNQyxRQUFRLElBQUlDLEtBQUosRUFBZDs7QUFFQUQsWUFBTUUsTUFBTixHQUFlLFlBQVc7QUFDbEIsc0JBQVViLE9BQU9jLFVBQVAsRUFBVjtBQUFBLFlBQ0FiLE9BREEsR0FDVSxLQUFLQyxVQUFMLEVBRFY7QUFBQSxZQUVFYSxRQUZGLEdBRWVDLE9BRmYsQ0FFRUQsUUFGRjtBQUFBLFlBR0FFLE1BSEEsR0FHU0YsUUFIVDtBQUFBLFlBSUFHLG1DQUpBLEdBSXNDLENBSnRDO0FBQUEsWUFLQUMsdUJBTEEsR0FLMEJuQixPQUFPb0Isa0JBQVAsQ0FBMEJuQixPQUExQixFQUFtQyxVQUFuQyxDQUwxQjs7O0FBT05ELGVBQU9xQixhQUFQLENBQXFCVixLQUFyQjs7QUFFQVgsZUFBT3NCLGVBQVAsQ0FBdUJMLE1BQXZCOztBQUVBakIsZUFBT3VCLDhCQUFQLENBQXNDSix1QkFBdEMsRUFBK0RELG1DQUEvRDs7QUFFQVI7QUFDRCxPQWZjLENBZWJjLElBZmEsQ0FlUixJQWZRLENBQWY7O0FBaUJBYixZQUFNYyxHQUFOLEdBQVloQixRQUFaLENBcEIrQyxDQW9CekI7QUFDdkI7OztnQ0FoQ2tCVCxNLEVBQVE7QUFBRSxhQUFPUixPQUFPa0MsNkNBQVAsQ0FBcUQ1QixhQUFyRCxFQUFvRUYsa0JBQXBFLEVBQXdGQyxvQkFBeEYsRUFBOEdHLE1BQTlHLENBQVA7QUFBK0g7Ozs7RUFEbElSLE07O0FBb0M1Qm1DLE9BQU9DLE9BQVAsR0FBaUI5QixhQUFqQiIsImZpbGUiOiJ0ZXh0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTaGFkZXIgPSByZXF1aXJlKCcuLi9zaGFkZXInKTtcblxuY29uc3QgeyBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSwgY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2UgfSA9IFNoYWRlcjtcblxuY29uc3QgdmVydGV4U2hhZGVyU291cmNlID0gYFxuICAgICAgICBcbiAgICAgICAgJHtjYWxjdWxhdGVMaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke2NhbGN1bGF0ZVBvc2l0aW9uU291cmNlfVxuXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjMiBhVGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIHZUZXh0dXJlQ29vcmRpbmF0ZSA9IGFUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGAsXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IGBcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjtcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgaGlnaHAgdmVjNCB0ZXhlbENvbG91ciA9IHRleHR1cmUyRCh1U2FtcGxlciwgdlRleHR1cmVDb29yZGluYXRlKTtcbiAgICAgICAgICBcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHRleGVsQ29sb3VyLnJnYiAqIHZMaWdodGluZywgdGV4ZWxDb2xvdXIuYSk7ICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGA7XG5cbmNsYXNzIFRleHR1cmVTaGFkZXIgZXh0ZW5kcyBTaGFkZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7IHJldHVybiBTaGFkZXIuZnJvbVZlcnRleFNoYWRlclNvdXJjZUFuZEZyYWdtZW50U2hhZGVyU291cmNlKFRleHR1cmVTaGFkZXIsIHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyk7IH1cblxuICBjcmVhdGVBbmRCaW5kVGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIodmVydGV4Q29vcmRpbmF0ZURhdGEsIGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Q29vcmRpbmF0ZURhdGEpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgJ2FUZXh0dXJlQ29vcmRpbmF0ZScpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyA9IDI7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUFuZEFjdGl2YXRlVGV4dHVyZShpbWFnZVVSTCwgY2FudmFzLCBkb25lKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgICBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCksXG4gICAgICAgICAgICB7IFRFWFRVUkUwIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgdGFyZ2V0ID0gVEVYVFVSRTAsXG4gICAgICAgICAgICB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IDAsXG4gICAgICAgICAgICB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3VTYW1wbGVyJyk7XG5cbiAgICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlKTtcblxuICAgICAgY2FudmFzLmFjdGl2YXRlVGV4dHVyZSh0YXJnZXQpO1xuXG4gICAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHVTYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9LmJpbmQodGhpcyk7XG5cbiAgICBpbWFnZS5zcmMgPSBpbWFnZVVSTDsgLy8vXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlU2hhZGVyO1xuIl19