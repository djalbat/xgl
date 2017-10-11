'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var Shader = require('../shader'),
    vertexShaderSource = require('./source/texture/vertex'),
    fragmentShaderSource = require('./source/texture/fragment');

var createVertexShader = Shader.createVertexShader,
    createFragmentShader = Shader.createFragmentShader,
    textureCoordinateAttributeName = vertexShaderSource.textureCoordinateAttributeName,
    samplerName = fragmentShaderSource.samplerName,
    arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

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
    key: 'bindBuffers',
    value: function bindBuffers(canvas) {
      this.bindTextureCoordinateBuffer(canvas);

      _get(TextureShader.prototype.__proto__ || Object.getPrototypeOf(TextureShader.prototype), 'bindBuffers', this).call(this, canvas);
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
      var vertexShader = createVertexShader(vertexShaderSource, canvas),
          fragmentShader = createFragmentShader(fragmentShaderSource, canvas),
          program = canvas.createProgram(vertexShader, fragmentShader),
          textureShader = new TextureShader(program, canvas);

      return textureShader;
    }
  }]);

  return TextureShader;
}(Shader);

module.exports = TextureShader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvdGV4dHVyZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiU2hhZGVyIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJjcmVhdGVWZXJ0ZXhTaGFkZXIiLCJjcmVhdGVGcmFnbWVudFNoYWRlciIsInRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSIsInNhbXBsZXJOYW1lIiwiYXJyYXlVdGlsaXRpZXMiLCJtZXJnZSIsImFkZCIsIlRleHR1cmVTaGFkZXIiLCJwcm9ncmFtIiwiY2FudmFzIiwic2FtcGxlclVuaWZvcm1Mb2NhdGlvbiIsImdldFVuaWZvcm1Mb2NhdGlvbiIsInRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24iLCJnZXRBdHRyaWJ1dGVMb2NhdGlvbiIsInRleHR1cmVDb29yZGluYXRlRGF0YSIsImNyZWF0ZVRleHR1cmVDb29yZGluYXRlQnVmZmVyIiwidGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIiLCJjcmVhdGVCdWZmZXIiLCJiaW5kVGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIiLCJ0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMiLCJiaW5kQnVmZmVyIiwiaW1hZ2UiLCJjcmVhdGVUZXh0dXJlIiwiZ2V0Q29udGV4dCIsIlRFWFRVUkUwIiwiY29udGV4dCIsInRhcmdldCIsInVTYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwiYWN0aXZhdGVUZXh0dXJlIiwic2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJjcmVhdGVQcm9ncmFtIiwidGV4dHVyZVNoYWRlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsU0FBU0QsUUFBUSxXQUFSLENBQWY7QUFBQSxJQUNNRSxxQkFBcUJGLFFBQVEseUJBQVIsQ0FEM0I7QUFBQSxJQUVNRyx1QkFBdUJILFFBQVEsMkJBQVIsQ0FGN0I7O0lBSVFJLGtCLEdBQTZDSCxNLENBQTdDRyxrQjtJQUFvQkMsb0IsR0FBeUJKLE0sQ0FBekJJLG9CO0lBQ3BCQyw4QixHQUFtQ0osa0IsQ0FBbkNJLDhCO0lBQ0FDLFcsR0FBZ0JKLG9CLENBQWhCSSxXO0lBQ0FDLGMsR0FBbUJULFMsQ0FBbkJTLGM7SUFDQUMsSyxHQUFVRCxjLENBQVZDLEs7SUFDRkMsRyxHQUFNRCxLLEVBQVE7O0lBRWRFLGE7OztBQUNKLHlCQUFZQyxPQUFaLEVBQXFCQyxNQUFyQixFQUE2QjtBQUFBOztBQUFBLDhIQUNyQkQsT0FEcUIsRUFDWkMsTUFEWTs7QUFHM0IsVUFBS0Msc0JBQUwsR0FBOEJELE9BQU9FLGtCQUFQLENBQTBCSCxPQUExQixFQUFtQ0wsV0FBbkMsQ0FBOUI7O0FBRUEsVUFBS1Msa0NBQUwsR0FBMENILE9BQU9JLG9CQUFQLENBQTRCTCxPQUE1QixFQUFxQ04sOEJBQXJDLENBQTFDOztBQUVBLFVBQUtZLHFCQUFMLEdBQTZCLEVBQTdCO0FBUDJCO0FBUTVCOzs7OzZDQUV3QkEscUIsRUFBdUI7QUFDOUNSLFVBQUksS0FBS1EscUJBQVQsRUFBZ0NBLHFCQUFoQztBQUNEOzs7a0NBRWFMLE0sRUFBUTtBQUNwQixXQUFLTSw2QkFBTCxDQUFtQ04sTUFBbkM7O0FBRUEsa0lBQW9CQSxNQUFwQjtBQUNEOzs7a0RBRTZCQSxNLEVBQVE7QUFDcEMsV0FBS08sdUJBQUwsR0FBK0JQLE9BQU9RLFlBQVAsQ0FBb0IsS0FBS0gscUJBQXpCLENBQS9CO0FBQ0Q7OztnQ0FFV0wsTSxFQUFRO0FBQ2xCLFdBQUtTLDJCQUFMLENBQWlDVCxNQUFqQzs7QUFFQSxnSUFBa0JBLE1BQWxCO0FBQ0Q7OztnREFFMkJBLE0sRUFBUTtBQUNsQyxVQUFNVSw4QkFBOEIsQ0FBcEM7O0FBRUFWLGFBQU9XLFVBQVAsQ0FBa0IsS0FBS0osdUJBQXZCLEVBQWdELEtBQUtKLGtDQUFyRCxFQUF5Rk8sMkJBQXpGO0FBQ0Q7OztrQ0FFYUUsSyxFQUFPWixNLEVBQVE7QUFDM0JBLGFBQU9hLGFBQVAsQ0FBcUJELEtBQXJCO0FBQ0Q7OztvQ0FFZVosTSxFQUFRO0FBQ2hCLG9CQUFVQSxPQUFPYyxVQUFQLEVBQVY7QUFBQSxVQUNFQyxRQURGLEdBQ2VDLE9BRGYsQ0FDRUQsUUFERjtBQUFBLFVBRUFFLE1BRkEsR0FFU0YsUUFGVDtBQUFBLFVBR0FHLG1DQUhBLEdBR3NDLENBSHRDOzs7QUFLTmxCLGFBQU9tQixlQUFQLENBQXVCRixNQUF2Qjs7QUFFQWpCLGFBQU9vQiw4QkFBUCxDQUFzQyxLQUFLbkIsc0JBQTNDLEVBQW1FaUIsbUNBQW5FO0FBQ0Q7OztnQ0FFa0JsQixNLEVBQVE7QUFDekIsVUFBTXFCLGVBQWU5QixtQkFBbUJGLGtCQUFuQixFQUF1Q1csTUFBdkMsQ0FBckI7QUFBQSxVQUNNc0IsaUJBQWlCOUIscUJBQXFCRixvQkFBckIsRUFBMkNVLE1BQTNDLENBRHZCO0FBQUEsVUFFTUQsVUFBVUMsT0FBT3VCLGFBQVAsQ0FBcUJGLFlBQXJCLEVBQW1DQyxjQUFuQyxDQUZoQjtBQUFBLFVBR01FLGdCQUFnQixJQUFJMUIsYUFBSixDQUFrQkMsT0FBbEIsRUFBMkJDLE1BQTNCLENBSHRCOztBQUtBLGFBQU93QixhQUFQO0FBQ0Q7Ozs7RUEzRHlCcEMsTTs7QUE4RDVCcUMsT0FBT0MsT0FBUCxHQUFpQjVCLGFBQWpCIiwiZmlsZSI6InRleHR1cmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBTaGFkZXIgPSByZXF1aXJlKCcuLi9zaGFkZXInKSxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL3RleHR1cmUvdmVydGV4JyksXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL3RleHR1cmUvZnJhZ21lbnQnKTtcblxuY29uc3QgeyBjcmVhdGVWZXJ0ZXhTaGFkZXIsIGNyZWF0ZUZyYWdtZW50U2hhZGVyIH0gPSBTaGFkZXIsXG4gICAgICB7IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSB9ID0gdmVydGV4U2hhZGVyU291cmNlLFxuICAgICAgeyBzYW1wbGVyTmFtZSB9ID0gZnJhZ21lbnRTaGFkZXJTb3VyY2UsXG4gICAgICB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IG1lcmdlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNsYXNzIFRleHR1cmVTaGFkZXIgZXh0ZW5kcyBTaGFkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBzdXBlcihwcm9ncmFtLCBjYW52YXMpO1xuXG4gICAgdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBzYW1wbGVyTmFtZSk7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lKTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gW107XG4gIH1cblxuICBhZGRUZXh0dXJlQ29vcmRpbmF0ZURhdGEodGV4dHVyZUNvb3JkaW5hdGVEYXRhKSB7XG4gICAgYWRkKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmNyZWF0ZVRleHR1cmVDb29yZGluYXRlQnVmZmVyKGNhbnZhcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpIHtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlRGF0YSk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpO1xuXG4gICAgc3VwZXIuYmluZEJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMgPSAyO1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciwgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMpO1xuICB9XG5cbiAgY3JlYXRlVGV4dHVyZShpbWFnZSwgY2FudmFzKSB7XG4gICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UpO1xuICB9XG5cbiAgYWN0aXZhdGVUZXh0dXJlKGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHsgVEVYVFVSRTAgfSA9IGNvbnRleHQsXG4gICAgICAgICAgdGFyZ2V0ID0gVEVYVFVSRTAsICAvLy9cbiAgICAgICAgICB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IDA7XG5cbiAgICBjYW52YXMuYWN0aXZhdGVUZXh0dXJlKHRhcmdldCk7XG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgdVNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleFNoYWRlciA9IGNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICBwcm9ncmFtID0gY2FudmFzLmNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlciksXG4gICAgICAgICAgdGV4dHVyZVNoYWRlciA9IG5ldyBUZXh0dXJlU2hhZGVyKHByb2dyYW0sIGNhbnZhcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZVNoYWRlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVTaGFkZXI7XG4iXX0=