'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shader = require('../shader');

var calculateLightingSource = Shader.calculateLightingSource,
    calculatePositionSource = Shader.calculatePositionSource;


var samplerName = 'uSampler',
    textureCoordinateAttributeName = 'aTextureCoordinate';

var vertexShaderSource = '\n        \n        attribute vec2 ' + textureCoordinateAttributeName + ';\n        \n        ' + calculateLightingSource + '\n      \n        ' + calculatePositionSource + '\n\n        varying highp vec3 vLighting;\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n                    \n          vTextureCoordinate = ' + textureCoordinateAttributeName + ';\n        }\n        \n      ',
    fragmentShaderSource = '\n        \n        uniform sampler2D ' + samplerName + ';\n\n        varying highp vec3 vLighting;\n                   \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          highp vec4 texelColour = texture2D(' + samplerName + ', vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  \n        }\n        \n      ';

var TextureShader = function (_Shader) {
  _inherits(TextureShader, _Shader);

  function TextureShader(program, normalMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, perspectiveMatrixUniformLocation, vertexPositionAttributeLocation, vertexNormalAttributeLocation, textureCoordinateAttributeLocation, samplerUniformLocation) {
    _classCallCheck(this, TextureShader);

    var _this = _possibleConstructorReturn(this, (TextureShader.__proto__ || Object.getPrototypeOf(TextureShader)).call(this, program, normalMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, perspectiveMatrixUniformLocation, vertexPositionAttributeLocation, vertexNormalAttributeLocation));

    _this.textureCoordinateAttributeLocation = textureCoordinateAttributeLocation;
    _this.samplerUniformLocation = samplerUniformLocation;
    return _this;
  }

  _createClass(TextureShader, [{
    key: 'getTextureCoordinateAttributeLocation',
    value: function getTextureCoordinateAttributeLocation() {
      return this.textureCoordinateAttributeLocation;
    }
  }, {
    key: 'getSamplerUniformLocation',
    value: function getSamplerUniformLocation() {
      return this.samplerUniformLocation;
    }
  }, {
    key: 'createTextureCoordinateBuffer',
    value: function createTextureCoordinateBuffer(vertexCoordinateData, canvas) {
      var textureCoordinateBuffer = canvas.createBuffer(vertexCoordinateData);

      return textureCoordinateBuffer;
    }
  }, {
    key: 'bindTextureCoordinateBuffer',
    value: function bindTextureCoordinateBuffer(textureCoordinateBuffer, canvas) {
      var textureCoordinateComponents = 2;

      canvas.bindBuffer(textureCoordinateBuffer, this.textureCoordinateAttributeLocation, textureCoordinateComponents);
    }
  }, {
    key: 'createTexture',
    value: function createTexture(image, canvas) {
      canvas.createTexture(image);
    }
  }, {
    key: 'activateTexture',
    value: function activateTexture(canvas) {
      var context = canvas.getContext(),
          TEXTURE0 = context.TEXTURE0,
          target = TEXTURE0,
          uSamplerUniformLocationIntegerValue = 0;


      canvas.activateTexture(target);

      canvas.setUniformLocationIntegerValue(this.samplerUniformLocation, uSamplerUniformLocationIntegerValue);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var context = canvas.getContext(),
          program = canvas.createProgram(),
          vertexShader = Shader.createVertexShader(vertexShaderSource, canvas),
          fragmentShader = Shader.createFragmentShader(fragmentShaderSource, canvas);

      context.attachShader(program, vertexShader);
      context.attachShader(program, fragmentShader);
      context.linkProgram(program);

      var textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, textureCoordinateAttributeName),
          samplerUniformLocation = canvas.getUniformLocation(program, samplerName),
          textureShader = Shader.fromProgram(TextureShader, program, canvas, textureCoordinateAttributeLocation, samplerUniformLocation);

      return textureShader;
    }
  }]);

  return TextureShader;
}(Shader);

module.exports = TextureShader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvdGV4dHVyZS5qcyJdLCJuYW1lcyI6WyJTaGFkZXIiLCJyZXF1aXJlIiwiY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2UiLCJjYWxjdWxhdGVQb3NpdGlvblNvdXJjZSIsInNhbXBsZXJOYW1lIiwidGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJUZXh0dXJlU2hhZGVyIiwicHJvZ3JhbSIsIm5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJ2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsInRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24iLCJzYW1wbGVyVW5pZm9ybUxvY2F0aW9uIiwidmVydGV4Q29vcmRpbmF0ZURhdGEiLCJjYW52YXMiLCJ0ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciIsImNyZWF0ZUJ1ZmZlciIsInRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyIsImJpbmRCdWZmZXIiLCJpbWFnZSIsImNyZWF0ZVRleHR1cmUiLCJnZXRDb250ZXh0IiwiVEVYVFVSRTAiLCJjb250ZXh0IiwidGFyZ2V0IiwidVNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUiLCJhY3RpdmF0ZVRleHR1cmUiLCJzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUiLCJjcmVhdGVQcm9ncmFtIiwidmVydGV4U2hhZGVyIiwiY3JlYXRlVmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJjcmVhdGVGcmFnbWVudFNoYWRlciIsImF0dGFjaFNoYWRlciIsImxpbmtQcm9ncmFtIiwiZ2V0QXR0cmlidXRlTG9jYXRpb24iLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJ0ZXh0dXJlU2hhZGVyIiwiZnJvbVByb2dyYW0iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsV0FBUixDQUFmOztJQUVRQyx1QixHQUFxREYsTSxDQUFyREUsdUI7SUFBeUJDLHVCLEdBQTRCSCxNLENBQTVCRyx1Qjs7O0FBRWpDLElBQU1DLGNBQWMsVUFBcEI7QUFBQSxJQUNNQyxpQ0FBaUMsb0JBRHZDOztBQUdBLElBQU1DLDZEQUVtQkQsOEJBRm5CLDZCQUlJSCx1QkFKSiwwQkFNSUMsdUJBTkosK1JBaUIyQkUsOEJBakIzQixtQ0FBTjtBQUFBLElBcUJNRSxrRUFFc0JILFdBRnRCLHVNQVN5Q0EsV0FUekMsa0pBckJOOztJQXFDTUksYTs7O0FBQ0oseUJBQVlDLE9BQVosRUFBcUJDLDJCQUFyQixFQUFrREMsNkJBQWxELEVBQWlGQyw2QkFBakYsRUFBZ0hDLGdDQUFoSCxFQUFrSkMsK0JBQWxKLEVBQW1MQyw2QkFBbkwsRUFBa05DLGtDQUFsTixFQUFzUEMsc0JBQXRQLEVBQThRO0FBQUE7O0FBQUEsOEhBQ3RRUixPQURzUSxFQUM3UEMsMkJBRDZQLEVBQ2hPQyw2QkFEZ08sRUFDak1DLDZCQURpTSxFQUNsS0MsZ0NBRGtLLEVBQ2hJQywrQkFEZ0ksRUFDL0ZDLDZCQUQrRjs7QUFHNVEsVUFBS0Msa0NBQUwsR0FBMENBLGtDQUExQztBQUNBLFVBQUtDLHNCQUFMLEdBQThCQSxzQkFBOUI7QUFKNFE7QUFLN1E7Ozs7NERBRXVDO0FBQ3RDLGFBQU8sS0FBS0Qsa0NBQVo7QUFDRDs7O2dEQUUyQjtBQUMxQixhQUFPLEtBQUtDLHNCQUFaO0FBQ0Q7OztrREFtQjZCQyxvQixFQUFzQkMsTSxFQUFRO0FBQzFELFVBQU1DLDBCQUEwQkQsT0FBT0UsWUFBUCxDQUFvQkgsb0JBQXBCLENBQWhDOztBQUVBLGFBQU9FLHVCQUFQO0FBQ0Q7OztnREFFMkJBLHVCLEVBQXlCRCxNLEVBQVE7QUFDM0QsVUFBTUcsOEJBQThCLENBQXBDOztBQUVBSCxhQUFPSSxVQUFQLENBQWtCSCx1QkFBbEIsRUFBMkMsS0FBS0osa0NBQWhELEVBQW9GTSwyQkFBcEY7QUFDRDs7O2tDQUVhRSxLLEVBQU9MLE0sRUFBUTtBQUMzQkEsYUFBT00sYUFBUCxDQUFxQkQsS0FBckI7QUFDRDs7O29DQUVlTCxNLEVBQVE7QUFDaEIsb0JBQVVBLE9BQU9PLFVBQVAsRUFBVjtBQUFBLFVBQ0VDLFFBREYsR0FDZUMsT0FEZixDQUNFRCxRQURGO0FBQUEsVUFFQUUsTUFGQSxHQUVTRixRQUZUO0FBQUEsVUFHQUcsbUNBSEEsR0FHc0MsQ0FIdEM7OztBQUtOWCxhQUFPWSxlQUFQLENBQXVCRixNQUF2Qjs7QUFFQVYsYUFBT2EsOEJBQVAsQ0FBc0MsS0FBS2Ysc0JBQTNDLEVBQW1FYSxtQ0FBbkU7QUFDRDs7O2dDQTFDa0JYLE0sRUFBUTtBQUN6QixVQUFNUyxVQUFVVCxPQUFPTyxVQUFQLEVBQWhCO0FBQUEsVUFDTWpCLFVBQVVVLE9BQU9jLGFBQVAsRUFEaEI7QUFBQSxVQUVNQyxlQUFlbEMsT0FBT21DLGtCQUFQLENBQTBCN0Isa0JBQTFCLEVBQThDYSxNQUE5QyxDQUZyQjtBQUFBLFVBR01pQixpQkFBaUJwQyxPQUFPcUMsb0JBQVAsQ0FBNEI5QixvQkFBNUIsRUFBa0RZLE1BQWxELENBSHZCOztBQUtBUyxjQUFRVSxZQUFSLENBQXFCN0IsT0FBckIsRUFBOEJ5QixZQUE5QjtBQUNBTixjQUFRVSxZQUFSLENBQXFCN0IsT0FBckIsRUFBOEIyQixjQUE5QjtBQUNBUixjQUFRVyxXQUFSLENBQW9COUIsT0FBcEI7O0FBRUEsVUFBTU8scUNBQXFDRyxPQUFPcUIsb0JBQVAsQ0FBNEIvQixPQUE1QixFQUFxQ0osOEJBQXJDLENBQTNDO0FBQUEsVUFDTVkseUJBQXlCRSxPQUFPc0Isa0JBQVAsQ0FBMEJoQyxPQUExQixFQUFtQ0wsV0FBbkMsQ0FEL0I7QUFBQSxVQUVNc0MsZ0JBQWdCMUMsT0FBTzJDLFdBQVAsQ0FBbUJuQyxhQUFuQixFQUFrQ0MsT0FBbEMsRUFBMkNVLE1BQTNDLEVBQW1ESCxrQ0FBbkQsRUFBdUZDLHNCQUF2RixDQUZ0Qjs7QUFJQSxhQUFPeUIsYUFBUDtBQUNEOzs7O0VBL0J5QjFDLE07O0FBNkQ1QjRDLE9BQU9DLE9BQVAsR0FBaUJyQyxhQUFqQiIsImZpbGUiOiJ0ZXh0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTaGFkZXIgPSByZXF1aXJlKCcuLi9zaGFkZXInKTtcblxuY29uc3QgeyBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSwgY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2UgfSA9IFNoYWRlcjtcblxuY29uc3Qgc2FtcGxlck5hbWUgPSAndVNhbXBsZXInLFxuICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lID0gJ2FUZXh0dXJlQ29vcmRpbmF0ZSc7XG5cbmNvbnN0IHZlcnRleFNoYWRlclNvdXJjZSA9IGBcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMyICR7dGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgXG4gICAgICAgICR7Y2FsY3VsYXRlTGlnaHRpbmdTb3VyY2V9XG4gICAgICBcbiAgICAgICAgJHtjYWxjdWxhdGVQb3NpdGlvblNvdXJjZX1cblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB2VGV4dHVyZUNvb3JkaW5hdGUgPSAke3RleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZX07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBgXG4gICAgICAgIFxuICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCAke3NhbXBsZXJOYW1lfTtcblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGhpZ2hwIHZlYzQgdGV4ZWxDb2xvdXIgPSB0ZXh0dXJlMkQoJHtzYW1wbGVyTmFtZX0sIHZUZXh0dXJlQ29vcmRpbmF0ZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh0ZXhlbENvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHRleGVsQ29sb3VyLmEpOyAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgO1xuXG5jbGFzcyBUZXh0dXJlU2hhZGVyIGV4dGVuZHMgU2hhZGVyIHtcbiAgY29uc3RydWN0b3IocHJvZ3JhbSwgbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbikge1xuICAgIHN1cGVyKHByb2dyYW0sIG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgICB0aGlzLnNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb2dyYW0gPSBjYW52YXMuY3JlYXRlUHJvZ3JhbSgpLFxuICAgICAgICAgIHZlcnRleFNoYWRlciA9IFNoYWRlci5jcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIGZyYWdtZW50U2hhZGVyID0gU2hhZGVyLmNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpO1xuXG4gICAgY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcbiAgICBjb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gICAgY29udGV4dC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBzYW1wbGVyTmFtZSksXG4gICAgICAgICAgdGV4dHVyZVNoYWRlciA9IFNoYWRlci5mcm9tUHJvZ3JhbShUZXh0dXJlU2hhZGVyLCBwcm9ncmFtLCBjYW52YXMsIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24pO1xuXG4gICAgcmV0dXJuIHRleHR1cmVTaGFkZXI7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcih2ZXJ0ZXhDb29yZGluYXRlRGF0YSwgY2FudmFzKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleENvb3JkaW5hdGVEYXRhKTtcblxuICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcjtcbiAgfVxuXG4gIGJpbmRUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciwgY2FudmFzKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzID0gMjtcblxuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRleHR1cmVDb29yZGluYXRlQnVmZmVyLCB0aGlzLnRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyk7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlKGltYWdlLCBjYW52YXMpIHtcbiAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSk7XG4gIH1cblxuICBhY3RpdmF0ZVRleHR1cmUoY2FudmFzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgeyBURVhUVVJFMCB9ID0gY29udGV4dCxcbiAgICAgICAgICB0YXJnZXQgPSBURVhUVVJFMCwgIC8vL1xuICAgICAgICAgIHVTYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gMDtcblxuICAgIGNhbnZhcy5hY3RpdmF0ZVRleHR1cmUodGFyZ2V0KTtcblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUodGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlU2hhZGVyO1xuIl19