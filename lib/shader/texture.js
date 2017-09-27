'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

  function TextureShader(program, canvas) {
    _classCallCheck(this, TextureShader);

    var _this = _possibleConstructorReturn(this, (TextureShader.__proto__ || Object.getPrototypeOf(TextureShader)).call(this, program, canvas));

    _this.samplerUniformLocation = canvas.getUniformLocation(program, samplerName);
    _this.textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, textureCoordinateAttributeName);
    return _this;
  }

  _createClass(TextureShader, [{
    key: 'createBuffers',
    value: function createBuffers(offsetVertexPositionData, vertexNormalData, textureCoordinateData, vertexIndexData, canvas) {
      this.createVertexPositionBuffer(offsetVertexPositionData, canvas);
      this.createVertexNormalBuffer(vertexNormalData, canvas);
      this.createTextureCoordinateBuffer(textureCoordinateData, canvas);

      var count = canvas.createAndBindElementBuffer(vertexIndexData);

      this.setCount(count);
    }
  }, {
    key: 'createTextureCoordinateBuffer',
    value: function createTextureCoordinateBuffer(vertexCoordinateData, canvas) {
      this.textureCoordinateBuffer = canvas.createBuffer(vertexCoordinateData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvdGV4dHVyZS5qcyJdLCJuYW1lcyI6WyJTaGFkZXIiLCJyZXF1aXJlIiwiY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2UiLCJjYWxjdWxhdGVQb3NpdGlvblNvdXJjZSIsInNhbXBsZXJOYW1lIiwidGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJUZXh0dXJlU2hhZGVyIiwicHJvZ3JhbSIsImNhbnZhcyIsInNhbXBsZXJVbmlmb3JtTG9jYXRpb24iLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJ0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0QXR0cmlidXRlTG9jYXRpb24iLCJvZmZzZXRWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidGV4dHVyZUNvb3JkaW5hdGVEYXRhIiwidmVydGV4SW5kZXhEYXRhIiwiY3JlYXRlVmVydGV4UG9zaXRpb25CdWZmZXIiLCJjcmVhdGVWZXJ0ZXhOb3JtYWxCdWZmZXIiLCJjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciIsImNvdW50IiwiY3JlYXRlQW5kQmluZEVsZW1lbnRCdWZmZXIiLCJzZXRDb3VudCIsInZlcnRleENvb3JkaW5hdGVEYXRhIiwidGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIiLCJjcmVhdGVCdWZmZXIiLCJiaW5kVGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIiLCJ0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMiLCJiaW5kQnVmZmVyIiwiaW1hZ2UiLCJjcmVhdGVUZXh0dXJlIiwiZ2V0Q29udGV4dCIsIlRFWFRVUkUwIiwiY29udGV4dCIsInRhcmdldCIsInVTYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwiYWN0aXZhdGVUZXh0dXJlIiwic2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwiY3JlYXRlUHJvZ3JhbSIsInZlcnRleFNoYWRlciIsImNyZWF0ZVZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwiY3JlYXRlRnJhZ21lbnRTaGFkZXIiLCJhdHRhY2hTaGFkZXIiLCJsaW5rUHJvZ3JhbSIsInRleHR1cmVTaGFkZXIiLCJmcm9tUHJvZ3JhbSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFdBQVIsQ0FBZjs7SUFFUUMsdUIsR0FBcURGLE0sQ0FBckRFLHVCO0lBQXlCQyx1QixHQUE0QkgsTSxDQUE1QkcsdUI7OztBQUVqQyxJQUFNQyxjQUFjLFVBQXBCO0FBQUEsSUFDTUMsaUNBQWlDLG9CQUR2Qzs7QUFHQSxJQUFNQyw2REFFbUJELDhCQUZuQiw2QkFJSUgsdUJBSkosMEJBTUlDLHVCQU5KLCtSQWlCMkJFLDhCQWpCM0IsbUNBQU47QUFBQSxJQXFCTUUsa0VBRXNCSCxXQUZ0Qix1TUFTeUNBLFdBVHpDLGtKQXJCTjs7SUFxQ01JLGE7OztBQUNKLHlCQUFZQyxPQUFaLEVBQXFCQyxNQUFyQixFQUE2QjtBQUFBOztBQUFBLDhIQUNyQkQsT0FEcUIsRUFDWkMsTUFEWTs7QUFHM0IsVUFBS0Msc0JBQUwsR0FBOEJELE9BQU9FLGtCQUFQLENBQTBCSCxPQUExQixFQUFtQ0wsV0FBbkMsQ0FBOUI7QUFDQSxVQUFLUyxrQ0FBTCxHQUEwQ0gsT0FBT0ksb0JBQVAsQ0FBNEJMLE9BQTVCLEVBQXFDSiw4QkFBckMsQ0FBMUM7QUFKMkI7QUFLNUI7Ozs7a0NBRWFVLHdCLEVBQTBCQyxnQixFQUFrQkMscUIsRUFBdUJDLGUsRUFBaUJSLE0sRUFBUTtBQUN4RyxXQUFLUywwQkFBTCxDQUFnQ0osd0JBQWhDLEVBQTBETCxNQUExRDtBQUNBLFdBQUtVLHdCQUFMLENBQThCSixnQkFBOUIsRUFBZ0ROLE1BQWhEO0FBQ0EsV0FBS1csNkJBQUwsQ0FBbUNKLHFCQUFuQyxFQUEwRFAsTUFBMUQ7O0FBRUEsVUFBTVksUUFBUVosT0FBT2EsMEJBQVAsQ0FBa0NMLGVBQWxDLENBQWQ7O0FBRUEsV0FBS00sUUFBTCxDQUFjRixLQUFkO0FBQ0Q7OztrREFFNkJHLG9CLEVBQXNCZixNLEVBQVE7QUFDMUQsV0FBS2dCLHVCQUFMLEdBQStCaEIsT0FBT2lCLFlBQVAsQ0FBb0JGLG9CQUFwQixDQUEvQjtBQUNEOzs7eUJBRUlmLE0sRUFBUTtBQUNYLFdBQUtrQiwyQkFBTCxDQUFpQ2xCLE1BQWpDOztBQUVBLHlIQUFXQSxNQUFYO0FBQ0Q7OztnREFFMkJBLE0sRUFBUTtBQUNsQyxVQUFNbUIsOEJBQThCLENBQXBDOztBQUVBbkIsYUFBT29CLFVBQVAsQ0FBa0IsS0FBS0osdUJBQXZCLEVBQWdELEtBQUtiLGtDQUFyRCxFQUF5RmdCLDJCQUF6RjtBQUNEOzs7a0NBRWFFLEssRUFBT3JCLE0sRUFBUTtBQUMzQkEsYUFBT3NCLGFBQVAsQ0FBcUJELEtBQXJCO0FBQ0Q7OztvQ0FFZXJCLE0sRUFBUTtBQUNoQixvQkFBVUEsT0FBT3VCLFVBQVAsRUFBVjtBQUFBLFVBQ0VDLFFBREYsR0FDZUMsT0FEZixDQUNFRCxRQURGO0FBQUEsVUFFQUUsTUFGQSxHQUVTRixRQUZUO0FBQUEsVUFHQUcsbUNBSEEsR0FHc0MsQ0FIdEM7OztBQUtOM0IsYUFBTzRCLGVBQVAsQ0FBdUJGLE1BQXZCOztBQUVBMUIsYUFBTzZCLDhCQUFQLENBQXNDLEtBQUs1QixzQkFBM0MsRUFBbUUwQixtQ0FBbkU7QUFDRDs7O2dDQUVrQjNCLE0sRUFBUTtBQUN6QixVQUFNeUIsVUFBVXpCLE9BQU91QixVQUFQLEVBQWhCO0FBQUEsVUFDTXhCLFVBQVVDLE9BQU84QixhQUFQLEVBRGhCO0FBQUEsVUFFTUMsZUFBZXpDLE9BQU8wQyxrQkFBUCxDQUEwQnBDLGtCQUExQixFQUE4Q0ksTUFBOUMsQ0FGckI7QUFBQSxVQUdNaUMsaUJBQWlCM0MsT0FBTzRDLG9CQUFQLENBQTRCckMsb0JBQTVCLEVBQWtERyxNQUFsRCxDQUh2Qjs7QUFLQXlCLGNBQVFVLFlBQVIsQ0FBcUJwQyxPQUFyQixFQUE4QmdDLFlBQTlCO0FBQ0FOLGNBQVFVLFlBQVIsQ0FBcUJwQyxPQUFyQixFQUE4QmtDLGNBQTlCO0FBQ0FSLGNBQVFXLFdBQVIsQ0FBb0JyQyxPQUFwQjs7QUFFQSxVQUFNc0MsZ0JBQWdCL0MsT0FBT2dELFdBQVAsQ0FBbUJ4QyxhQUFuQixFQUFrQ0MsT0FBbEMsRUFBMkNDLE1BQTNDLENBQXRCOztBQUVBLGFBQU9xQyxhQUFQO0FBQ0Q7Ozs7RUE5RHlCL0MsTTs7QUFpRTVCaUQsT0FBT0MsT0FBUCxHQUFpQjFDLGFBQWpCIiwiZmlsZSI6InRleHR1cmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNoYWRlciA9IHJlcXVpcmUoJy4uL3NoYWRlcicpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlLCBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZSB9ID0gU2hhZGVyO1xuXG5jb25zdCBzYW1wbGVyTmFtZSA9ICd1U2FtcGxlcicsXG4gICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUgPSAnYVRleHR1cmVDb29yZGluYXRlJztcblxuY29uc3QgdmVydGV4U2hhZGVyU291cmNlID0gYFxuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzIgJHt0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICBcbiAgICAgICAgJHtjYWxjdWxhdGVMaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke2NhbGN1bGF0ZVBvc2l0aW9uU291cmNlfVxuXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIHZUZXh0dXJlQ29vcmRpbmF0ZSA9ICR7dGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGAsXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IGBcbiAgICAgICAgXG4gICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEICR7c2FtcGxlck5hbWV9O1xuXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgaGlnaHAgdmVjNCB0ZXhlbENvbG91ciA9IHRleHR1cmUyRCgke3NhbXBsZXJOYW1lfSwgdlRleHR1cmVDb29yZGluYXRlKTtcbiAgICAgICAgICBcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHRleGVsQ29sb3VyLnJnYiAqIHZMaWdodGluZywgdGV4ZWxDb2xvdXIuYSk7ICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGA7XG5cbmNsYXNzIFRleHR1cmVTaGFkZXIgZXh0ZW5kcyBTaGFkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBzdXBlcihwcm9ncmFtLCBjYW52YXMpO1xuXG4gICAgdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBzYW1wbGVyTmFtZSk7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKG9mZnNldFZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIGNhbnZhcykge1xuICAgIHRoaXMuY3JlYXRlVmVydGV4UG9zaXRpb25CdWZmZXIob2Zmc2V0VmVydGV4UG9zaXRpb25EYXRhLCBjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4Tm9ybWFsQnVmZmVyKHZlcnRleE5vcm1hbERhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZURhdGEsIGNhbnZhcyk7XG5cbiAgICBjb25zdCBjb3VudCA9IGNhbnZhcy5jcmVhdGVBbmRCaW5kRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleERhdGEpO1xuXG4gICAgdGhpcy5zZXRDb3VudChjb3VudCk7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcih2ZXJ0ZXhDb29yZGluYXRlRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Q29vcmRpbmF0ZURhdGEpO1xuICB9XG5cbiAgYmluZChjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpO1xuXG4gICAgc3VwZXIuYmluZChjYW52YXMpO1xuICB9XG5cbiAgYmluZFRleHR1cmVDb29yZGluYXRlQnVmZmVyKGNhbnZhcykge1xuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyA9IDI7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlQnVmZmVyLCB0aGlzLnRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyk7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlKGltYWdlLCBjYW52YXMpIHtcbiAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSk7XG4gIH1cblxuICBhY3RpdmF0ZVRleHR1cmUoY2FudmFzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgeyBURVhUVVJFMCB9ID0gY29udGV4dCxcbiAgICAgICAgICB0YXJnZXQgPSBURVhUVVJFMCwgIC8vL1xuICAgICAgICAgIHVTYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gMDtcblxuICAgIGNhbnZhcy5hY3RpdmF0ZVRleHR1cmUodGFyZ2V0KTtcblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUodGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcHJvZ3JhbSA9IGNhbnZhcy5jcmVhdGVQcm9ncmFtKCksXG4gICAgICAgICAgdmVydGV4U2hhZGVyID0gU2hhZGVyLmNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBTaGFkZXIuY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyk7XG5cbiAgICBjb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICAgIGNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgICBjb250ZXh0LmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgY29uc3QgdGV4dHVyZVNoYWRlciA9IFNoYWRlci5mcm9tUHJvZ3JhbShUZXh0dXJlU2hhZGVyLCBwcm9ncmFtLCBjYW52YXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVTaGFkZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlU2hhZGVyO1xuIl19