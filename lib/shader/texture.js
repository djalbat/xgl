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
    return _this;
  }

  _createClass(TextureShader, [{
    key: 'createBuffers',
    value: function createBuffers(textureCoordinateData, canvas) {
      var vertexPositionData = this.getVertexPositionData(),
          vertexNormalData = this.getVertexNormalData();

      this.createVertexPositionBuffer(vertexPositionData, canvas);
      this.createVertexNormalBuffer(vertexNormalData, canvas);
      this.createTextureCoordinateBuffer(textureCoordinateData, canvas);

      var vertexIndexData = this.getVertexIndexData(),
          count = canvas.createAndBindElementBuffer(vertexIndexData);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvdGV4dHVyZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiU2hhZGVyIiwiY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2UiLCJjYWxjdWxhdGVQb3NpdGlvblNvdXJjZSIsImFycmF5VXRpbGl0aWVzIiwibWVyZ2UiLCJhZGQiLCJzYW1wbGVyTmFtZSIsInRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSIsInZlcnRleFNoYWRlclNvdXJjZSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiVGV4dHVyZVNoYWRlciIsInByb2dyYW0iLCJjYW52YXMiLCJzYW1wbGVyVW5pZm9ybUxvY2F0aW9uIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwidGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiIsImdldEF0dHJpYnV0ZUxvY2F0aW9uIiwidGV4dHVyZUNvb3JkaW5hdGVEYXRhIiwidmVydGV4UG9zaXRpb25EYXRhIiwiZ2V0VmVydGV4UG9zaXRpb25EYXRhIiwidmVydGV4Tm9ybWFsRGF0YSIsImdldFZlcnRleE5vcm1hbERhdGEiLCJjcmVhdGVWZXJ0ZXhQb3NpdGlvbkJ1ZmZlciIsImNyZWF0ZVZlcnRleE5vcm1hbEJ1ZmZlciIsImNyZWF0ZVRleHR1cmVDb29yZGluYXRlQnVmZmVyIiwidmVydGV4SW5kZXhEYXRhIiwiZ2V0VmVydGV4SW5kZXhEYXRhIiwiY291bnQiLCJjcmVhdGVBbmRCaW5kRWxlbWVudEJ1ZmZlciIsInNldENvdW50IiwidmVydGV4Q29vcmRpbmF0ZURhdGEiLCJ0ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciIsImNyZWF0ZUJ1ZmZlciIsImJpbmRUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciIsInRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyIsImJpbmRCdWZmZXIiLCJpbWFnZSIsImNyZWF0ZVRleHR1cmUiLCJnZXRDb250ZXh0IiwiVEVYVFVSRTAiLCJjb250ZXh0IiwidGFyZ2V0IiwidVNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUiLCJhY3RpdmF0ZVRleHR1cmUiLCJzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUiLCJjcmVhdGVQcm9ncmFtIiwidmVydGV4U2hhZGVyIiwiY3JlYXRlVmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJjcmVhdGVGcmFnbWVudFNoYWRlciIsImF0dGFjaFNoYWRlciIsImxpbmtQcm9ncmFtIiwidGV4dHVyZVNoYWRlciIsImZyb21Qcm9ncmFtIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxTQUFTRCxRQUFRLFdBQVIsQ0FBZjs7SUFFUUUsdUIsR0FBcURELE0sQ0FBckRDLHVCO0lBQXlCQyx1QixHQUE0QkYsTSxDQUE1QkUsdUI7SUFDekJDLGMsR0FBbUJMLFMsQ0FBbkJLLGM7SUFDQUMsSyxHQUFVRCxjLENBQVZDLEs7SUFDRkMsRyxHQUFNRCxLLEVBQVE7O0FBRXBCLElBQU1FLGNBQWMsVUFBcEI7QUFBQSxJQUNNQyxpQ0FBaUMsb0JBRHZDO0FBQUEsSUFFTUMsNkRBRW1CRCw4QkFGbkIsNkJBSUlOLHVCQUpKLDBCQU1JQyx1QkFOSiwrUkFpQjJCSyw4QkFqQjNCLG1DQUZOO0FBQUEsSUF1Qk1FLGtFQUVzQkgsV0FGdEIsdU1BU3lDQSxXQVR6QyxrSkF2Qk47O0lBdUNNSSxhOzs7QUFDSix5QkFBWUMsT0FBWixFQUFxQkMsTUFBckIsRUFBNkI7QUFBQTs7QUFBQSw4SEFDckJELE9BRHFCLEVBQ1pDLE1BRFk7O0FBRzNCLFVBQUtDLHNCQUFMLEdBQThCRCxPQUFPRSxrQkFBUCxDQUEwQkgsT0FBMUIsRUFBbUNMLFdBQW5DLENBQTlCO0FBQ0EsVUFBS1Msa0NBQUwsR0FBMENILE9BQU9JLG9CQUFQLENBQTRCTCxPQUE1QixFQUFxQ0osOEJBQXJDLENBQTFDO0FBSjJCO0FBSzVCOzs7O2tDQUVhVSxxQixFQUF1QkwsTSxFQUFRO0FBQzNDLFVBQU1NLHFCQUFxQixLQUFLQyxxQkFBTCxFQUEzQjtBQUFBLFVBQ01DLG1CQUFtQixLQUFLQyxtQkFBTCxFQUR6Qjs7QUFHQSxXQUFLQywwQkFBTCxDQUFnQ0osa0JBQWhDLEVBQW9ETixNQUFwRDtBQUNBLFdBQUtXLHdCQUFMLENBQThCSCxnQkFBOUIsRUFBZ0RSLE1BQWhEO0FBQ0EsV0FBS1ksNkJBQUwsQ0FBbUNQLHFCQUFuQyxFQUEwREwsTUFBMUQ7O0FBRUEsVUFBTWEsa0JBQWtCLEtBQUtDLGtCQUFMLEVBQXhCO0FBQUEsVUFDTUMsUUFBUWYsT0FBT2dCLDBCQUFQLENBQWtDSCxlQUFsQyxDQURkOztBQUdBLFdBQUtJLFFBQUwsQ0FBY0YsS0FBZDtBQUNEOzs7a0RBRTZCRyxvQixFQUFzQmxCLE0sRUFBUTtBQUMxRCxXQUFLbUIsdUJBQUwsR0FBK0JuQixPQUFPb0IsWUFBUCxDQUFvQkYsb0JBQXBCLENBQS9CO0FBQ0Q7Ozt5QkFFSWxCLE0sRUFBUTtBQUNYLFdBQUtxQiwyQkFBTCxDQUFpQ3JCLE1BQWpDOztBQUVBLHlIQUFXQSxNQUFYO0FBQ0Q7OztnREFFMkJBLE0sRUFBUTtBQUNsQyxVQUFNc0IsOEJBQThCLENBQXBDOztBQUVBdEIsYUFBT3VCLFVBQVAsQ0FBa0IsS0FBS0osdUJBQXZCLEVBQWdELEtBQUtoQixrQ0FBckQsRUFBeUZtQiwyQkFBekY7QUFDRDs7O2tDQUVhRSxLLEVBQU94QixNLEVBQVE7QUFDM0JBLGFBQU95QixhQUFQLENBQXFCRCxLQUFyQjtBQUNEOzs7b0NBRWV4QixNLEVBQVE7QUFDaEIsb0JBQVVBLE9BQU8wQixVQUFQLEVBQVY7QUFBQSxVQUNFQyxRQURGLEdBQ2VDLE9BRGYsQ0FDRUQsUUFERjtBQUFBLFVBRUFFLE1BRkEsR0FFU0YsUUFGVDtBQUFBLFVBR0FHLG1DQUhBLEdBR3NDLENBSHRDOzs7QUFLTjlCLGFBQU8rQixlQUFQLENBQXVCRixNQUF2Qjs7QUFFQTdCLGFBQU9nQyw4QkFBUCxDQUFzQyxLQUFLL0Isc0JBQTNDLEVBQW1FNkIsbUNBQW5FO0FBQ0Q7OztnQ0FFa0I5QixNLEVBQVE7QUFDekIsVUFBTTRCLFVBQVU1QixPQUFPMEIsVUFBUCxFQUFoQjtBQUFBLFVBQ00zQixVQUFVQyxPQUFPaUMsYUFBUCxFQURoQjtBQUFBLFVBRU1DLGVBQWU5QyxPQUFPK0Msa0JBQVAsQ0FBMEJ2QyxrQkFBMUIsRUFBOENJLE1BQTlDLENBRnJCO0FBQUEsVUFHTW9DLGlCQUFpQmhELE9BQU9pRCxvQkFBUCxDQUE0QnhDLG9CQUE1QixFQUFrREcsTUFBbEQsQ0FIdkI7O0FBS0E0QixjQUFRVSxZQUFSLENBQXFCdkMsT0FBckIsRUFBOEJtQyxZQUE5QjtBQUNBTixjQUFRVSxZQUFSLENBQXFCdkMsT0FBckIsRUFBOEJxQyxjQUE5QjtBQUNBUixjQUFRVyxXQUFSLENBQW9CeEMsT0FBcEI7O0FBRUEsVUFBTXlDLGdCQUFnQnBELE9BQU9xRCxXQUFQLENBQW1CM0MsYUFBbkIsRUFBa0NDLE9BQWxDLEVBQTJDQyxNQUEzQyxDQUF0Qjs7QUFFQSxhQUFPd0MsYUFBUDtBQUNEOzs7O0VBbEV5QnBELE07O0FBcUU1QnNELE9BQU9DLE9BQVAsR0FBaUI3QyxhQUFqQiIsImZpbGUiOiJ0ZXh0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgU2hhZGVyID0gcmVxdWlyZSgnLi4vc2hhZGVyJyk7XG5cbmNvbnN0IHsgY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2UsIGNhbGN1bGF0ZVBvc2l0aW9uU291cmNlIH0gPSBTaGFkZXIsXG4gICAgICB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IG1lcmdlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNvbnN0IHNhbXBsZXJOYW1lID0gJ3VTYW1wbGVyJyxcbiAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSA9ICdhVGV4dHVyZUNvb3JkaW5hdGUnLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gYFxuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzIgJHt0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICBcbiAgICAgICAgJHtjYWxjdWxhdGVMaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke2NhbGN1bGF0ZVBvc2l0aW9uU291cmNlfVxuXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIHZUZXh0dXJlQ29vcmRpbmF0ZSA9ICR7dGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGAsXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IGBcbiAgICAgICAgXG4gICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEICR7c2FtcGxlck5hbWV9O1xuXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgaGlnaHAgdmVjNCB0ZXhlbENvbG91ciA9IHRleHR1cmUyRCgke3NhbXBsZXJOYW1lfSwgdlRleHR1cmVDb29yZGluYXRlKTtcbiAgICAgICAgICBcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHRleGVsQ29sb3VyLnJnYiAqIHZMaWdodGluZywgdGV4ZWxDb2xvdXIuYSk7ICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGA7XG5cbmNsYXNzIFRleHR1cmVTaGFkZXIgZXh0ZW5kcyBTaGFkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBzdXBlcihwcm9ncmFtLCBjYW52YXMpO1xuXG4gICAgdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBzYW1wbGVyTmFtZSk7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHRleHR1cmVDb29yZGluYXRlRGF0YSwgY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25EYXRhID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkRhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxEYXRhID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxEYXRhKCk7XG5cbiAgICB0aGlzLmNyZWF0ZVZlcnRleFBvc2l0aW9uQnVmZmVyKHZlcnRleFBvc2l0aW9uRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleE5vcm1hbEJ1ZmZlcih2ZXJ0ZXhOb3JtYWxEYXRhLCBjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVEYXRhLCBjYW52YXMpO1xuXG4gICAgY29uc3QgdmVydGV4SW5kZXhEYXRhID0gdGhpcy5nZXRWZXJ0ZXhJbmRleERhdGEoKSxcbiAgICAgICAgICBjb3VudCA9IGNhbnZhcy5jcmVhdGVBbmRCaW5kRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleERhdGEpO1xuXG4gICAgdGhpcy5zZXRDb3VudChjb3VudCk7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcih2ZXJ0ZXhDb29yZGluYXRlRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Q29vcmRpbmF0ZURhdGEpO1xuICB9XG5cbiAgYmluZChjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpO1xuXG4gICAgc3VwZXIuYmluZChjYW52YXMpO1xuICB9XG5cbiAgYmluZFRleHR1cmVDb29yZGluYXRlQnVmZmVyKGNhbnZhcykge1xuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyA9IDI7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlQnVmZmVyLCB0aGlzLnRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyk7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlKGltYWdlLCBjYW52YXMpIHtcbiAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSk7XG4gIH1cblxuICBhY3RpdmF0ZVRleHR1cmUoY2FudmFzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgeyBURVhUVVJFMCB9ID0gY29udGV4dCxcbiAgICAgICAgICB0YXJnZXQgPSBURVhUVVJFMCwgIC8vL1xuICAgICAgICAgIHVTYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gMDtcblxuICAgIGNhbnZhcy5hY3RpdmF0ZVRleHR1cmUodGFyZ2V0KTtcblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUodGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcHJvZ3JhbSA9IGNhbnZhcy5jcmVhdGVQcm9ncmFtKCksXG4gICAgICAgICAgdmVydGV4U2hhZGVyID0gU2hhZGVyLmNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBTaGFkZXIuY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyk7XG5cbiAgICBjb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICAgIGNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgICBjb250ZXh0LmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgY29uc3QgdGV4dHVyZVNoYWRlciA9IFNoYWRlci5mcm9tUHJvZ3JhbShUZXh0dXJlU2hhZGVyLCBwcm9ncmFtLCBjYW52YXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVTaGFkZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlU2hhZGVyO1xuIl19