'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
      this.vertexColourBuffer = canvas.createBuffer(vertexColourData);
    }
  }, {
    key: 'bind',
    value: function bind(canvas) {
      this.bindVertexColourBuffer(canvas);

      _get(ColourShader.prototype.__proto__ || Object.getPrototypeOf(ColourShader.prototype), 'bind', this).call(this, canvas);
    }
  }, {
    key: 'bindVertexColourBuffer',
    value: function bindVertexColourBuffer(canvas) {
      var vertexColourComponents = 4;

      canvas.bindBuffer(this.vertexColourBuffer, this.vertexColourAttributeLocation, vertexColourComponents);
    }
  }, {
    key: 'activateTexture',
    value: function activateTexture(canvas) {} ///

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

      var vertexColourAttributeLocation = canvas.getAttributeLocation(program, vertexColourAttributeName),
          colourShader = Shader.fromProgram(ColourShader, program, canvas, vertexColourAttributeLocation);

      return colourShader;
    }
  }]);

  return ColourShader;
}(Shader);

module.exports = ColourShader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvY29sb3VyLmpzIl0sIm5hbWVzIjpbIlNoYWRlciIsInJlcXVpcmUiLCJjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSIsImNhbGN1bGF0ZVBvc2l0aW9uU291cmNlIiwidmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSIsInZlcnRleFNoYWRlclNvdXJjZSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiQ29sb3VyU2hhZGVyIiwicHJvZ3JhbSIsIm5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJ2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4Q29sb3VyRGF0YSIsImNhbnZhcyIsInZlcnRleENvbG91ckJ1ZmZlciIsImNyZWF0ZUJ1ZmZlciIsImJpbmRWZXJ0ZXhDb2xvdXJCdWZmZXIiLCJ2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzIiwiYmluZEJ1ZmZlciIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiY3JlYXRlUHJvZ3JhbSIsInZlcnRleFNoYWRlciIsImNyZWF0ZVZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwiY3JlYXRlRnJhZ21lbnRTaGFkZXIiLCJhdHRhY2hTaGFkZXIiLCJsaW5rUHJvZ3JhbSIsImdldEF0dHJpYnV0ZUxvY2F0aW9uIiwiY29sb3VyU2hhZGVyIiwiZnJvbVByb2dyYW0iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxXQUFSLENBQWY7O0lBRVFDLHVCLEdBQXFERixNLENBQXJERSx1QjtJQUF5QkMsdUIsR0FBNEJILE0sQ0FBNUJHLHVCOzs7QUFFakMsSUFBTUMsNEJBQTRCLGVBQWxDOztBQUVBLElBQU1DLHlEQUVtQkQseUJBRm5CLHFCQUlJRix1QkFKSiwwQkFNSUMsdUJBTkosd1BBaUJnQkMseUJBakJoQix1REFBTjtBQUFBLElBcUJNRSx3UEFyQk47O0lBaUNNQyxZOzs7QUFDSix3QkFBWUMsT0FBWixFQUFxQkMsMkJBQXJCLEVBQWtEQyw2QkFBbEQsRUFBaUZDLDZCQUFqRixFQUFnSEMsZ0NBQWhILEVBQWtKQywrQkFBbEosRUFBbUxDLDZCQUFuTCxFQUFrTkMsNkJBQWxOLEVBQWlQO0FBQUE7O0FBQUEsNEhBQ3pPUCxPQUR5TyxFQUNoT0MsMkJBRGdPLEVBQ25NQyw2QkFEbU0sRUFDcEtDLDZCQURvSyxFQUNySUMsZ0NBRHFJLEVBQ25HQywrQkFEbUcsRUFDbEVDLDZCQURrRTs7QUFHL08sVUFBS0MsNkJBQUwsR0FBcUNBLDZCQUFyQztBQUgrTztBQUloUDs7Ozt1REFFa0M7QUFDakMsYUFBTyxLQUFLQSw2QkFBWjtBQUNEOzs7NkNBa0J3QkMsZ0IsRUFBa0JDLE0sRUFBUTtBQUNqRCxXQUFLQyxrQkFBTCxHQUEwQkQsT0FBT0UsWUFBUCxDQUFvQkgsZ0JBQXBCLENBQTFCO0FBQ0Q7Ozt5QkFFSUMsTSxFQUFRO0FBQ1gsV0FBS0csc0JBQUwsQ0FBNEJILE1BQTVCOztBQUVBLHVIQUFXQSxNQUFYO0FBQ0Q7OzsyQ0FFc0JBLE0sRUFBUTtBQUM3QixVQUFNSSx5QkFBeUIsQ0FBL0I7O0FBRUFKLGFBQU9LLFVBQVAsQ0FBa0IsS0FBS0osa0JBQXZCLEVBQTJDLEtBQUtILDZCQUFoRCxFQUErRU0sc0JBQS9FO0FBQ0Q7OztvQ0FFZUosTSxFQUFRLENBQUUsQyxDQUFFOzs7O2dDQWhDVEEsTSxFQUFRO0FBQ3pCLFVBQU1NLFVBQVVOLE9BQU9PLFVBQVAsRUFBaEI7QUFBQSxVQUNNaEIsVUFBVVMsT0FBT1EsYUFBUCxFQURoQjtBQUFBLFVBRU1DLGVBQWUxQixPQUFPMkIsa0JBQVAsQ0FBMEJ0QixrQkFBMUIsRUFBOENZLE1BQTlDLENBRnJCO0FBQUEsVUFHTVcsaUJBQWlCNUIsT0FBTzZCLG9CQUFQLENBQTRCdkIsb0JBQTVCLEVBQWtEVyxNQUFsRCxDQUh2Qjs7QUFLQU0sY0FBUU8sWUFBUixDQUFxQnRCLE9BQXJCLEVBQThCa0IsWUFBOUI7QUFDQUgsY0FBUU8sWUFBUixDQUFxQnRCLE9BQXJCLEVBQThCb0IsY0FBOUI7QUFDQUwsY0FBUVEsV0FBUixDQUFvQnZCLE9BQXBCOztBQUVBLFVBQU1PLGdDQUFnQ0UsT0FBT2Usb0JBQVAsQ0FBNEJ4QixPQUE1QixFQUFxQ0oseUJBQXJDLENBQXRDO0FBQUEsVUFDTTZCLGVBQWVqQyxPQUFPa0MsV0FBUCxDQUFtQjNCLFlBQW5CLEVBQWlDQyxPQUFqQyxFQUEwQ1MsTUFBMUMsRUFBa0RGLDZCQUFsRCxDQURyQjs7QUFHQSxhQUFPa0IsWUFBUDtBQUNEOzs7O0VBekJ3QmpDLE07O0FBOEMzQm1DLE9BQU9DLE9BQVAsR0FBaUI3QixZQUFqQiIsImZpbGUiOiJjb2xvdXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNoYWRlciA9IHJlcXVpcmUoJy4uL3NoYWRlcicpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlLCBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZSB9ID0gU2hhZGVyO1xuXG5jb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lID0gJ2FWZXJ0ZXhDb2xvdXInO1xuXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBgXG4gICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgJHtjYWxjdWxhdGVMaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke2NhbGN1bGF0ZVBvc2l0aW9uU291cmNlfVxuICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuXG4gICAgICAgICAgdkNvbG91ciA9ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGAsXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IGBcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHZDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB2Q29sb3VyLmEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYDtcbiAgXG5jbGFzcyBDb2xvdXJTaGFkZXIgZXh0ZW5kcyBTaGFkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtLCBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHN1cGVyKHByb2dyYW0sIG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcHJvZ3JhbSA9IGNhbnZhcy5jcmVhdGVQcm9ncmFtKCksXG4gICAgICAgICAgdmVydGV4U2hhZGVyID0gU2hhZGVyLmNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBTaGFkZXIuY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyk7XG5cbiAgICBjb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICAgIGNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgICBjb250ZXh0LmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgY29sb3VyU2hhZGVyID0gU2hhZGVyLmZyb21Qcm9ncmFtKENvbG91clNoYWRlciwgcHJvZ3JhbSwgY2FudmFzLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbik7XG5cbiAgICByZXR1cm4gY29sb3VyU2hhZGVyO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Q29sb3VyQnVmZmVyKHZlcnRleENvbG91ckRhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Q29sb3VyQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhDb2xvdXJEYXRhKTtcbiAgfVxuXG4gIGJpbmQoY2FudmFzKSB7XG4gICAgdGhpcy5iaW5kVmVydGV4Q29sb3VyQnVmZmVyKGNhbnZhcyk7XG5cbiAgICBzdXBlci5iaW5kKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kVmVydGV4Q29sb3VyQnVmZmVyKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleENvbG91ckNvbXBvbmVudHMgPSA0O1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhDb2xvdXJCdWZmZXIsIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckNvbXBvbmVudHMpO1xuICB9XG5cbiAgYWN0aXZhdGVUZXh0dXJlKGNhbnZhcykge30gIC8vL1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clNoYWRlcjtcbiJdfQ==