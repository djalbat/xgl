'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var Shader = require('../shader');

var calculateLightingSource = Shader.calculateLightingSource,
    calculatePositionSource = Shader.calculatePositionSource,
    arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

var samplerName = 'uSampler',
    textureCoordinateAttributeName = 'aTextureCoordinate',
    vertexShaderSource = '\n        \n        attribute vec2 ' + textureCoordinateAttributeName + ';\n        \n        ' + calculateLightingSource + '\n      \n        ' + calculatePositionSource + '\n\n        varying highp vec3 vLighting;\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n                    \n          vTextureCoordinate = ' + textureCoordinateAttributeName + ';\n        }\n        \n      ',
    fragmentShaderSource = '\n        \n        uniform sampler2D ' + samplerName + ';\n\n        varying highp vec3 vLighting;\n                   \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          highp vec4 texelColour = texture2D(' + samplerName + ', vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  \n        }\n        \n      ';

var TextureShader = function (_Shader) {
  _inherits(TextureShader, _Shader);

  function TextureShader(program, canvas) {
    _classCallCheck(this, TextureShader);

    var _this = _possibleConstructorReturn(this, (TextureShader.__proto__ || Object.getPrototypeOf(TextureShader)).call(this, program, canvas));

    _this.samplerUniformLocation = canvas.getUniformLocation(program, samplerName);
    _this.textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, textureCoordinateAttributeName);

    _this.textureCoordinateData = [];
    return _this;
  }

  _createClass(TextureShader, [{
    key: 'addTextureCoordinateData',
    value: function addTextureCoordinateData(textureCoordinateData) {
      add(this.textureCoordinateData, textureCoordinateData);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      this.createTextureCoordinateBuffer(canvas);

      _get(TextureShader.prototype.__proto__ || Object.getPrototypeOf(TextureShader.prototype), 'createBuffers', this).call(this, canvas);
    }
  }, {
    key: 'createTextureCoordinateBuffer',
    value: function createTextureCoordinateBuffer(canvas) {
      this.textureCoordinateBuffer = canvas.createBuffer(this.textureCoordinateData);
    }
  }, {
    key: 'bind',
    value: function bind(canvas) {
      this.bindTextureCoordinateBuffer(canvas);

      _get(TextureShader.prototype.__proto__ || Object.getPrototypeOf(TextureShader.prototype), 'bind', this).call(this, canvas);
    }
  }, {
    key: 'bindTextureCoordinateBuffer',
    value: function bindTextureCoordinateBuffer(canvas) {
      var textureCoordinateComponents = 2;

      canvas.bindBuffer(this.textureCoordinateBuffer, this.textureCoordinateAttributeLocation, textureCoordinateComponents);
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

      var textureShader = Shader.fromProgram(TextureShader, program, canvas);

      return textureShader;
    }
  }]);

  return TextureShader;
}(Shader);

module.exports = TextureShader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvdGV4dHVyZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiU2hhZGVyIiwiY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2UiLCJjYWxjdWxhdGVQb3NpdGlvblNvdXJjZSIsImFycmF5VXRpbGl0aWVzIiwibWVyZ2UiLCJhZGQiLCJzYW1wbGVyTmFtZSIsInRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSIsInZlcnRleFNoYWRlclNvdXJjZSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiVGV4dHVyZVNoYWRlciIsInByb2dyYW0iLCJjYW52YXMiLCJzYW1wbGVyVW5pZm9ybUxvY2F0aW9uIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwidGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiIsImdldEF0dHJpYnV0ZUxvY2F0aW9uIiwidGV4dHVyZUNvb3JkaW5hdGVEYXRhIiwiY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIiLCJ0ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciIsImNyZWF0ZUJ1ZmZlciIsImJpbmRUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciIsInRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyIsImJpbmRCdWZmZXIiLCJpbWFnZSIsImNyZWF0ZVRleHR1cmUiLCJnZXRDb250ZXh0IiwiVEVYVFVSRTAiLCJjb250ZXh0IiwidGFyZ2V0IiwidVNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUiLCJhY3RpdmF0ZVRleHR1cmUiLCJzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUiLCJjcmVhdGVQcm9ncmFtIiwidmVydGV4U2hhZGVyIiwiY3JlYXRlVmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJjcmVhdGVGcmFnbWVudFNoYWRlciIsImF0dGFjaFNoYWRlciIsImxpbmtQcm9ncmFtIiwidGV4dHVyZVNoYWRlciIsImZyb21Qcm9ncmFtIiwibW9kdWxlIiwiZXhw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TzRCLGFBQVA7QUFDRDs7OztFQWhFeUJ4QyxNOztBQW1FNUIwQyxPQUFPQyxPQUFQLEdBQWlCakMsYUFBakIiLCJmaWxlIjoidGV4dHVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFNoYWRlciA9IHJlcXVpcmUoJy4uL3NoYWRlcicpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlLCBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZSB9ID0gU2hhZGVyLFxuICAgICAgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBtZXJnZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICBhZGQgPSBtZXJnZTsgIC8vL1xuXG5jb25zdCBzYW1wbGVyTmFtZSA9ICd1U2FtcGxlcicsXG4gICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUgPSAnYVRleHR1cmVDb29yZGluYXRlJyxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IGBcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMyICR7dGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgXG4gICAgICAgICR7Y2FsY3VsYXRlTGlnaHRpbmdTb3VyY2V9XG4gICAgICBcbiAgICAgICAgJHtjYWxjdWxhdGVQb3NpdGlvblNvdXJjZX1cblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB2VGV4dHVyZUNvb3JkaW5hdGUgPSAke3RleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZX07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBgXG4gICAgICAgIFxuICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCAke3NhbXBsZXJOYW1lfTtcblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGhpZ2hwIHZlYzQgdGV4ZWxDb2xvdXIgPSB0ZXh0dXJlMkQoJHtzYW1wbGVyTmFtZX0sIHZUZXh0dXJlQ29vcmRpbmF0ZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh0ZXhlbENvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHRleGVsQ29sb3VyLmEpOyAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgO1xuXG5jbGFzcyBUZXh0dXJlU2hhZGVyIGV4dGVuZHMgU2hhZGVyIHtcbiAgY29uc3RydWN0b3IocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgc3VwZXIocHJvZ3JhbSwgY2FudmFzKTtcblxuICAgIHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgc2FtcGxlck5hbWUpO1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSBbXTtcbiAgfVxuXG4gIGFkZFRleHR1cmVDb29yZGluYXRlRGF0YSh0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpIHtcbiAgICBhZGQodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZURhdGEsIHRleHR1cmVDb29yZGluYXRlRGF0YSk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIHRoaXMuY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIoY2FudmFzKTtcblxuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIGNyZWF0ZVRleHR1cmVDb29yZGluYXRlQnVmZmVyKGNhbnZhcykge1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhKTtcbiAgfVxuXG4gIGJpbmQoY2FudmFzKSB7XG4gICAgdGhpcy5iaW5kVGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIoY2FudmFzKTtcblxuICAgIHN1cGVyLmJpbmQoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMgPSAyO1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciwgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMpO1xuICB9XG5cbiAgY3JlYXRlVGV4dHVyZShpbWFnZSwgY2FudmFzKSB7XG4gICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UpO1xuICB9XG5cbiAgYWN0aXZhdGVUZXh0dXJlKGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHsgVEVYVFVSRTAgfSA9IGNvbnRleHQsXG4gICAgICAgICAgdGFyZ2V0ID0gVEVYVFVSRTAsICAvLy9cbiAgICAgICAgICB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IDA7XG5cbiAgICBjYW52YXMuYWN0aXZhdGVUZXh0dXJlKHRhcmdldCk7XG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgdVNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb2dyYW0gPSBjYW52YXMuY3JlYXRlUHJvZ3JhbSgpLFxuICAgICAgICAgIHZlcnRleFNoYWRlciA9IFNoYWRlci5jcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIGZyYWdtZW50U2hhZGVyID0gU2hhZGVyLmNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpO1xuXG4gICAgY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcbiAgICBjb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gICAgY29udGV4dC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIGNvbnN0IHRleHR1cmVTaGFkZXIgPSBTaGFkZXIuZnJvbVByb2dyYW0oVGV4dHVyZVNoYWRlciwgcHJvZ3JhbSwgY2FudmFzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlU2hhZGVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVNoYWRlcjtcbiJdfQ==