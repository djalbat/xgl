'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var Shader = require('../shader');

var createVertexShader = Shader.createVertexShader,
    createFragmentShader = Shader.createFragmentShader,
    calculateLightingSource = Shader.calculateLightingSource,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvdGV4dHVyZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiU2hhZGVyIiwiY3JlYXRlVmVydGV4U2hhZGVyIiwiY3JlYXRlRnJhZ21lbnRTaGFkZXIiLCJjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSIsImNhbGN1bGF0ZVBvc2l0aW9uU291cmNlIiwiYXJyYXlVdGlsaXRpZXMiLCJtZXJnZSIsImFkZCIsInNhbXBsZXJOYW1lIiwidGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJUZXh0dXJlU2hhZGVyIiwicHJvZ3JhbSIsImNhbnZhcyIsInNhbXBsZXJVbmlmb3JtTG9jYXRpb24iLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJ0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0QXR0cmlidXRlTG9jYXRpb24iLCJ0ZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciIsInRleHR1cmVDb29yZGluYXRlQnVmZmVyIiwiY3JlYXRlQnVmZmVyIiwiYmluZFRleHR1cmVDb29yZGluYXRlQnVmZmVyIiwidGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzIiwiYmluZEJ1ZmZlciIsImltYWdlIiwiY3JlYXRlVGV4dHVyZSIsImdldENvbnRleHQiLCJURVhUVVJFMCIsImNvbnRleHQiLCJ0YXJnZXQiLCJ1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSIsImFjdGl2YXRlVGV4dHVyZSIsInNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSIsInZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwiY29sb3VyU2hhZGVyIiwiY3JlYXRlU2hhZGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxTQUFTRCxRQUFRLFdBQVIsQ0FBZjs7SUFFUUUsa0IsR0FBK0ZELE0sQ0FBL0ZDLGtCO0lBQW9CQyxvQixHQUEyRUYsTSxDQUEzRUUsb0I7SUFBc0JDLHVCLEdBQXFESCxNLENBQXJERyx1QjtJQUF5QkMsdUIsR0FBNEJKLE0sQ0FBNUJJLHVCO0lBQ25FQyxjLEdBQW1CUCxTLENBQW5CTyxjO0lBQ0FDLEssR0FBVUQsYyxDQUFWQyxLO0lBQ0ZDLEcsR0FBTUQsSyxFQUFROztBQUVwQixJQUFNRSxjQUFjLFVBQXBCO0FBQUEsSUFDTUMsaUNBQWlDLG9CQUR2QztBQUFBLElBRU1DLDZEQUVtQkQsOEJBRm5CLDZCQUlJTix1QkFKSiwwQkFNSUMsdUJBTkosK1JBaUIyQkssOEJBakIzQixtQ0FGTjtBQUFBLElBdUJNRSxrRUFFc0JILFdBRnRCLHVNQVN5Q0EsV0FUekMsa0pBdkJOOztJQXVDTUksYTs7O0FBQ0oseUJBQVlDLE9BQVosRUFBcUJDLE1BQXJCLEVBQTZCO0FBQUE7O0FBQUEsOEhBQ3JCRCxPQURxQixFQUNaQyxNQURZOztBQUczQixVQUFLQyxzQkFBTCxHQUE4QkQsT0FBT0Usa0JBQVAsQ0FBMEJILE9BQTFCLEVBQW1DTCxXQUFuQyxDQUE5QjtBQUNBLFVBQUtTLGtDQUFMLEdBQTBDSCxPQUFPSSxvQkFBUCxDQUE0QkwsT0FBNUIsRUFBcUNKLDhCQUFyQyxDQUExQzs7QUFFQSxVQUFLVSxxQkFBTCxHQUE2QixFQUE3QjtBQU4yQjtBQU81Qjs7Ozs2Q0FFd0JBLHFCLEVBQXVCO0FBQzlDWixVQUFJLEtBQUtZLHFCQUFULEVBQWdDQSxxQkFBaEM7QUFDRDs7O2tDQUVhTCxNLEVBQVE7QUFDcEIsV0FBS00sNkJBQUwsQ0FBbUNOLE1BQW5DOztBQUVBLGtJQUFvQkEsTUFBcEI7QUFDRDs7O2tEQUU2QkEsTSxFQUFRO0FBQ3BDLFdBQUtPLHVCQUFMLEdBQStCUCxPQUFPUSxZQUFQLENBQW9CLEtBQUtILHFCQUF6QixDQUEvQjtBQUNEOzs7Z0NBRVdMLE0sRUFBUTtBQUNsQixXQUFLUywyQkFBTCxDQUFpQ1QsTUFBakM7O0FBRUEsZ0lBQWtCQSxNQUFsQjtBQUNEOzs7Z0RBRTJCQSxNLEVBQVE7QUFDbEMsVUFBTVUsOEJBQThCLENBQXBDOztBQUVBVixhQUFPVyxVQUFQLENBQWtCLEtBQUtKLHVCQUF2QixFQUFnRCxLQUFLSixrQ0FBckQsRUFBeUZPLDJCQUF6RjtBQUNEOzs7a0NBRWFFLEssRUFBT1osTSxFQUFRO0FBQzNCQSxhQUFPYSxhQUFQLENBQXFCRCxLQUFyQjtBQUNEOzs7b0NBRWVaLE0sRUFBUTtBQUNoQixvQkFBVUEsT0FBT2MsVUFBUCxFQUFWO0FBQUEsVUFDRUMsUUFERixHQUNlQyxPQURmLENBQ0VELFFBREY7QUFBQSxVQUVBRSxNQUZBLEdBRVNGLFFBRlQ7QUFBQSxVQUdBRyxtQ0FIQSxHQUdzQyxDQUh0Qzs7O0FBS05sQixhQUFPbUIsZUFBUCxDQUF1QkYsTUFBdkI7O0FBRUFqQixhQUFPb0IsOEJBQVAsQ0FBc0MsS0FBS25CLHNCQUEzQyxFQUFtRWlCLG1DQUFuRTtBQUNEOzs7Z0NBRWtCbEIsTSxFQUFRO0FBQ3pCLFVBQU1xQixlQUFlbEMsbUJBQW1CUyxrQkFBbkIsRUFBdUNJLE1BQXZDLENBQXJCO0FBQUEsVUFDTXNCLGlCQUFpQmxDLHFCQUFxQlMsb0JBQXJCLEVBQTJDRyxNQUEzQyxDQUR2QjtBQUFBLFVBRU11QixlQUFldkIsT0FBT3dCLFlBQVAsQ0FBb0IxQixhQUFwQixFQUFtQ3VCLFlBQW5DLEVBQWlEQyxjQUFqRCxDQUZyQjs7QUFJQSxhQUFPQyxZQUFQO0FBQ0Q7Ozs7RUF6RHlCckMsTTs7QUE0RDVCdUMsT0FBT0MsT0FBUCxHQUFpQjVCLGFBQWpCIiwiZmlsZSI6InRleHR1cmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBTaGFkZXIgPSByZXF1aXJlKCcuLi9zaGFkZXInKTtcblxuY29uc3QgeyBjcmVhdGVWZXJ0ZXhTaGFkZXIsIGNyZWF0ZUZyYWdtZW50U2hhZGVyLCBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSwgY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2UgfSA9IFNoYWRlcixcbiAgICAgIHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgbWVyZ2UgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY29uc3Qgc2FtcGxlck5hbWUgPSAndVNhbXBsZXInLFxuICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lID0gJ2FUZXh0dXJlQ29vcmRpbmF0ZScsXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBgXG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjMiAke3RleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZX07XG4gICAgICAgIFxuICAgICAgICAke2NhbGN1bGF0ZUxpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7Y2FsY3VsYXRlUG9zaXRpb25Tb3VyY2V9XG5cbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdkxpZ2h0aW5nID0gY2FsY3VsYXRlTGlnaHRpbmcoKTtcblxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdlRleHR1cmVDb29yZGluYXRlID0gJHt0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gYFxuICAgICAgICBcbiAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgJHtzYW1wbGVyTmFtZX07XG5cbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBoaWdocCB2ZWM0IHRleGVsQ29sb3VyID0gdGV4dHVyZTJEKCR7c2FtcGxlck5hbWV9LCB2VGV4dHVyZUNvb3JkaW5hdGUpO1xuICAgICAgICAgIFxuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodGV4ZWxDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB0ZXhlbENvbG91ci5hKTsgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYDtcblxuY2xhc3MgVGV4dHVyZVNoYWRlciBleHRlbmRzIFNoYWRlciB7XG4gIGNvbnN0cnVjdG9yKHByb2dyYW0sIGNhbnZhcykge1xuICAgIHN1cGVyKHByb2dyYW0sIGNhbnZhcyk7XG5cbiAgICB0aGlzLnNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHNhbXBsZXJOYW1lKTtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lKTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gW107XG4gIH1cblxuICBhZGRUZXh0dXJlQ29vcmRpbmF0ZURhdGEodGV4dHVyZUNvb3JkaW5hdGVEYXRhKSB7XG4gICAgYWRkKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmNyZWF0ZVRleHR1cmVDb29yZGluYXRlQnVmZmVyKGNhbnZhcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpIHtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlRGF0YSk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpO1xuXG4gICAgc3VwZXIuYmluZEJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMgPSAyO1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciwgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMpO1xuICB9XG5cbiAgY3JlYXRlVGV4dHVyZShpbWFnZSwgY2FudmFzKSB7XG4gICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UpO1xuICB9XG5cbiAgYWN0aXZhdGVUZXh0dXJlKGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHsgVEVYVFVSRTAgfSA9IGNvbnRleHQsXG4gICAgICAgICAgdGFyZ2V0ID0gVEVYVFVSRTAsICAvLy9cbiAgICAgICAgICB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IDA7XG5cbiAgICBjYW52YXMuYWN0aXZhdGVUZXh0dXJlKHRhcmdldCk7XG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgdVNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleFNoYWRlciA9IGNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJTaGFkZXIgPSBjYW52YXMuY3JlYXRlU2hhZGVyKFRleHR1cmVTaGFkZXIsIHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xuXG4gICAgcmV0dXJuIGNvbG91clNoYWRlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVTaGFkZXI7XG4iXX0=