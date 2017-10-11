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
    arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

var samplerName = 'uSampler',
    textureCoordinateAttributeName = 'aTextureCoordinate';

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
          colourShader = canvas.createShader(TextureShader, vertexShader, fragmentShader);

      return colourShader;
    }
  }]);

  return TextureShader;
}(Shader);

module.exports = TextureShader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvdGV4dHVyZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiU2hhZGVyIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJjcmVhdGVWZXJ0ZXhTaGFkZXIiLCJjcmVhdGVGcmFnbWVudFNoYWRlciIsImFycmF5VXRpbGl0aWVzIiwibWVyZ2UiLCJhZGQiLCJzYW1wbGVyTmFtZSIsInRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSIsIlRleHR1cmVTaGFkZXIiLCJwcm9ncmFtIiwiY2FudmFzIiwic2FtcGxlclVuaWZvcm1Mb2NhdGlvbiIsImdldFVuaWZvcm1Mb2NhdGlvbiIsInRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24iLCJnZXRBdHRyaWJ1dGVMb2NhdGlvbiIsInRleHR1cmVDb29yZGluYXRlRGF0YSIsImNyZWF0ZVRleHR1cmVDb29yZGluYXRlQnVmZmVyIiwidGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIiLCJjcmVhdGVCdWZmZXIiLCJiaW5kVGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIiLCJ0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMiLCJiaW5kQnVmZmVyIiwiaW1hZ2UiLCJjcmVhdGVUZXh0dXJlIiwiZ2V0Q29udGV4dCIsIlRFWFRVUkUwIiwiY29udGV4dCIsInRhcmdldCIsInVTYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwiYWN0aXZhdGVUZXh0dXJlIiwic2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJjb2xvdXJTaGFkZXIiLCJjcmVhdGVTaGFkZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLFNBQVNELFFBQVEsV0FBUixDQUFmO0FBQUEsSUFDTUUscUJBQXFCRixRQUFRLHlCQUFSLENBRDNCO0FBQUEsSUFFTUcsdUJBQXVCSCxRQUFRLDJCQUFSLENBRjdCOztJQUlRSSxrQixHQUE2Q0gsTSxDQUE3Q0csa0I7SUFBb0JDLG9CLEdBQXlCSixNLENBQXpCSSxvQjtJQUNwQkMsYyxHQUFtQlAsUyxDQUFuQk8sYztJQUNBQyxLLEdBQVVELGMsQ0FBVkMsSztJQUNGQyxHLEdBQU1ELEssRUFBUTs7QUFFcEIsSUFBTUUsY0FBYyxVQUFwQjtBQUFBLElBQ01DLGlDQUFpQyxvQkFEdkM7O0lBR01DLGE7OztBQUNKLHlCQUFZQyxPQUFaLEVBQXFCQyxNQUFyQixFQUE2QjtBQUFBOztBQUFBLDhIQUNyQkQsT0FEcUIsRUFDWkMsTUFEWTs7QUFHM0IsVUFBS0Msc0JBQUwsR0FBOEJELE9BQU9FLGtCQUFQLENBQTBCSCxPQUExQixFQUFtQ0gsV0FBbkMsQ0FBOUI7QUFDQSxVQUFLTyxrQ0FBTCxHQUEwQ0gsT0FBT0ksb0JBQVAsQ0FBNEJMLE9BQTVCLEVBQXFDRiw4QkFBckMsQ0FBMUM7O0FBRUEsVUFBS1EscUJBQUwsR0FBNkIsRUFBN0I7QUFOMkI7QUFPNUI7Ozs7NkNBRXdCQSxxQixFQUF1QjtBQUM5Q1YsVUFBSSxLQUFLVSxxQkFBVCxFQUFnQ0EscUJBQWhDO0FBQ0Q7OztrQ0FFYUwsTSxFQUFRO0FBQ3BCLFdBQUtNLDZCQUFMLENBQW1DTixNQUFuQzs7QUFFQSxrSUFBb0JBLE1BQXBCO0FBQ0Q7OztrREFFNkJBLE0sRUFBUTtBQUNwQyxXQUFLTyx1QkFBTCxHQUErQlAsT0FBT1EsWUFBUCxDQUFvQixLQUFLSCxxQkFBekIsQ0FBL0I7QUFDRDs7O2dDQUVXTCxNLEVBQVE7QUFDbEIsV0FBS1MsMkJBQUwsQ0FBaUNULE1BQWpDOztBQUVBLGdJQUFrQkEsTUFBbEI7QUFDRDs7O2dEQUUyQkEsTSxFQUFRO0FBQ2xDLFVBQU1VLDhCQUE4QixDQUFwQzs7QUFFQVYsYUFBT1csVUFBUCxDQUFrQixLQUFLSix1QkFBdkIsRUFBZ0QsS0FBS0osa0NBQXJELEVBQXlGTywyQkFBekY7QUFDRDs7O2tDQUVhRSxLLEVBQU9aLE0sRUFBUTtBQUMzQkEsYUFBT2EsYUFBUCxDQUFxQkQsS0FBckI7QUFDRDs7O29DQUVlWixNLEVBQVE7QUFDaEIsb0JBQVVBLE9BQU9jLFVBQVAsRUFBVjtBQUFBLFVBQ0VDLFFBREYsR0FDZUMsT0FEZixDQUNFRCxRQURGO0FBQUEsVUFFQUUsTUFGQSxHQUVTRixRQUZUO0FBQUEsVUFHQUcsbUNBSEEsR0FHc0MsQ0FIdEM7OztBQUtObEIsYUFBT21CLGVBQVAsQ0FBdUJGLE1BQXZCOztBQUVBakIsYUFBT29CLDhCQUFQLENBQXNDLEtBQUtuQixzQkFBM0MsRUFBbUVpQixtQ0FBbkU7QUFDRDs7O2dDQUVrQmxCLE0sRUFBUTtBQUN6QixVQUFNcUIsZUFBZTlCLG1CQUFtQkYsa0JBQW5CLEVBQXVDVyxNQUF2QyxDQUFyQjtBQUFBLFVBQ01zQixpQkFBaUI5QixxQkFBcUJGLG9CQUFyQixFQUEyQ1UsTUFBM0MsQ0FEdkI7QUFBQSxVQUVNdUIsZUFBZXZCLE9BQU93QixZQUFQLENBQW9CMUIsYUFBcEIsRUFBbUN1QixZQUFuQyxFQUFpREMsY0FBakQsQ0FGckI7O0FBSUEsYUFBT0MsWUFBUDtBQUNEOzs7O0VBekR5Qm5DLE07O0FBNEQ1QnFDLE9BQU9DLE9BQVAsR0FBaUI1QixhQUFqQiIsImZpbGUiOiJ0ZXh0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgU2hhZGVyID0gcmVxdWlyZSgnLi4vc2hhZGVyJyksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS90ZXh0dXJlL3ZlcnRleCcpLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS90ZXh0dXJlL2ZyYWdtZW50Jyk7XG5cbmNvbnN0IHsgY3JlYXRlVmVydGV4U2hhZGVyLCBjcmVhdGVGcmFnbWVudFNoYWRlciB9ID0gU2hhZGVyLFxuICAgICAgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBtZXJnZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICBhZGQgPSBtZXJnZTsgIC8vL1xuXG5jb25zdCBzYW1wbGVyTmFtZSA9ICd1U2FtcGxlcicsXG4gICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUgPSAnYVRleHR1cmVDb29yZGluYXRlJztcblxuY2xhc3MgVGV4dHVyZVNoYWRlciBleHRlbmRzIFNoYWRlciB7XG4gIGNvbnN0cnVjdG9yKHByb2dyYW0sIGNhbnZhcykge1xuICAgIHN1cGVyKHByb2dyYW0sIGNhbnZhcyk7XG5cbiAgICB0aGlzLnNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHNhbXBsZXJOYW1lKTtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lKTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gW107XG4gIH1cblxuICBhZGRUZXh0dXJlQ29vcmRpbmF0ZURhdGEodGV4dHVyZUNvb3JkaW5hdGVEYXRhKSB7XG4gICAgYWRkKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmNyZWF0ZVRleHR1cmVDb29yZGluYXRlQnVmZmVyKGNhbnZhcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpIHtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlRGF0YSk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpO1xuXG4gICAgc3VwZXIuYmluZEJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMgPSAyO1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciwgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMpO1xuICB9XG5cbiAgY3JlYXRlVGV4dHVyZShpbWFnZSwgY2FudmFzKSB7XG4gICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UpO1xuICB9XG5cbiAgYWN0aXZhdGVUZXh0dXJlKGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHsgVEVYVFVSRTAgfSA9IGNvbnRleHQsXG4gICAgICAgICAgdGFyZ2V0ID0gVEVYVFVSRTAsICAvLy9cbiAgICAgICAgICB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IDA7XG5cbiAgICBjYW52YXMuYWN0aXZhdGVUZXh0dXJlKHRhcmdldCk7XG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgdVNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleFNoYWRlciA9IGNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJTaGFkZXIgPSBjYW52YXMuY3JlYXRlU2hhZGVyKFRleHR1cmVTaGFkZXIsIHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xuXG4gICAgcmV0dXJuIGNvbG91clNoYWRlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVTaGFkZXI7XG4iXX0=