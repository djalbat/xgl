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

  function ColourShader(program, canvas) {
    _classCallCheck(this, ColourShader);

    var _this = _possibleConstructorReturn(this, (ColourShader.__proto__ || Object.getPrototypeOf(ColourShader)).call(this, program, canvas));

    _this.vertexColourAttributeLocation = canvas.getAttributeLocation(program, vertexColourAttributeName);
    return _this;
  }

  _createClass(ColourShader, [{
    key: 'createBuffers',
    value: function createBuffers(offsetVertexPositionData, vertexNormalData, vertexColourData, vertexIndexData, canvas) {
      this.createVertexPositionBuffer(offsetVertexPositionData, canvas);
      this.createVertexNormalBuffer(vertexNormalData, canvas);
      this.createVertexColourBuffer(vertexColourData, canvas);

      var count = canvas.createAndBindElementBuffer(vertexIndexData);

      this.setCount(count);
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

      var colourShader = Shader.fromProgram(ColourShader, program, canvas);

      return colourShader;
    }
  }]);

  return ColourShader;
}(Shader);

module.exports = ColourShader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvY29sb3VyLmpzIl0sIm5hbWVzIjpbIlNoYWRlciIsInJlcXVpcmUiLCJjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSIsImNhbGN1bGF0ZVBvc2l0aW9uU291cmNlIiwidmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSIsInZlcnRleFNoYWRlclNvdXJjZSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiQ29sb3VyU2hhZGVyIiwicHJvZ3JhbSIsImNhbnZhcyIsInZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0QXR0cmlidXRlTG9jYXRpb24iLCJvZmZzZXRWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidmVydGV4Q29sb3VyRGF0YSIsInZlcnRleEluZGV4RGF0YSIsImNyZWF0ZVZlcnRleFBvc2l0aW9uQnVmZmVyIiwiY3JlYXRlVmVydGV4Tm9ybWFsQnVmZmVyIiwiY3JlYXRlVmVydGV4Q29sb3VyQnVmZmVyIiwiY291bnQiLCJjcmVhdGVBbmRCaW5kRWxlbWVudEJ1ZmZlciIsInNldENvdW50IiwidmVydGV4Q29sb3VyQnVmZmVyIiwiY3JlYXRlQnVmZmVyIiwiYmluZFZlcnRleENvbG91ckJ1ZmZlciIsInZlcnRleENvbG91ckNvbXBvbmVudHMiLCJiaW5kQnVmZmVyIiwiY29udGV4dCIsImdldENvbnRleHQiLCJjcmVhdGVQcm9ncmFtIiwidmVydGV4U2hhZGVyIiwiY3JlYXRlVmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJjcmVhdGVGcmFnbWVudFNoYWRlciIsImF0dGFjaFNoYWRlciIsImxpbmtQcm9ncmFtIiwiY29sb3VyU2hhZGVyIiwiZnJvbVByb2dyYW0iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxXQUFSLENBQWY7O0lBRVFDLHVCLEdBQXFERixNLENBQXJERSx1QjtJQUF5QkMsdUIsR0FBNEJILE0sQ0FBNUJHLHVCOzs7QUFFakMsSUFBTUMsNEJBQTRCLGVBQWxDOztBQUVBLElBQU1DLHlEQUVtQkQseUJBRm5CLHFCQUlJRix1QkFKSiwwQkFNSUMsdUJBTkosd1BBaUJnQkMseUJBakJoQix1REFBTjtBQUFBLElBcUJNRSx3UEFyQk47O0lBaUNNQyxZOzs7QUFDSix3QkFBWUMsT0FBWixFQUFxQkMsTUFBckIsRUFBNkI7QUFBQTs7QUFBQSw0SEFDckJELE9BRHFCLEVBQ1pDLE1BRFk7O0FBRzNCLFVBQUtDLDZCQUFMLEdBQXFDRCxPQUFPRSxvQkFBUCxDQUE0QkgsT0FBNUIsRUFBcUNKLHlCQUFyQyxDQUFyQztBQUgyQjtBQUk1Qjs7OztrQ0FFYVEsd0IsRUFBMEJDLGdCLEVBQWtCQyxnQixFQUFrQkMsZSxFQUFpQk4sTSxFQUFRO0FBQ25HLFdBQUtPLDBCQUFMLENBQWdDSix3QkFBaEMsRUFBMERILE1BQTFEO0FBQ0EsV0FBS1Esd0JBQUwsQ0FBOEJKLGdCQUE5QixFQUFnREosTUFBaEQ7QUFDQSxXQUFLUyx3QkFBTCxDQUE4QkosZ0JBQTlCLEVBQWdETCxNQUFoRDs7QUFFQSxVQUFNVSxRQUFRVixPQUFPVywwQkFBUCxDQUFrQ0wsZUFBbEMsQ0FBZDs7QUFFQSxXQUFLTSxRQUFMLENBQWNGLEtBQWQ7QUFDRDs7OzZDQUV3QkwsZ0IsRUFBa0JMLE0sRUFBUTtBQUNqRCxXQUFLYSxrQkFBTCxHQUEwQmIsT0FBT2MsWUFBUCxDQUFvQlQsZ0JBQXBCLENBQTFCO0FBQ0Q7Ozt5QkFFSUwsTSxFQUFRO0FBQ1gsV0FBS2Usc0JBQUwsQ0FBNEJmLE1BQTVCOztBQUVBLHVIQUFXQSxNQUFYO0FBQ0Q7OzsyQ0FFc0JBLE0sRUFBUTtBQUM3QixVQUFNZ0IseUJBQXlCLENBQS9COztBQUVBaEIsYUFBT2lCLFVBQVAsQ0FBa0IsS0FBS0osa0JBQXZCLEVBQTJDLEtBQUtaLDZCQUFoRCxFQUErRWUsc0JBQS9FO0FBQ0Q7OztvQ0FFZWhCLE0sRUFBUSxDQUFFLEMsQ0FBRTs7OztnQ0FFVEEsTSxFQUFRO0FBQ3pCLFVBQU1rQixVQUFVbEIsT0FBT21CLFVBQVAsRUFBaEI7QUFBQSxVQUNNcEIsVUFBVUMsT0FBT29CLGFBQVAsRUFEaEI7QUFBQSxVQUVNQyxlQUFlOUIsT0FBTytCLGtCQUFQLENBQTBCMUIsa0JBQTFCLEVBQThDSSxNQUE5QyxDQUZyQjtBQUFBLFVBR011QixpQkFBaUJoQyxPQUFPaUMsb0JBQVAsQ0FBNEIzQixvQkFBNUIsRUFBa0RHLE1BQWxELENBSHZCOztBQUtBa0IsY0FBUU8sWUFBUixDQUFxQjFCLE9BQXJCLEVBQThCc0IsWUFBOUI7QUFDQUgsY0FBUU8sWUFBUixDQUFxQjFCLE9BQXJCLEVBQThCd0IsY0FBOUI7QUFDQUwsY0FBUVEsV0FBUixDQUFvQjNCLE9BQXBCOztBQUVBLFVBQU00QixlQUFlcEMsT0FBT3FDLFdBQVAsQ0FBbUI5QixZQUFuQixFQUFpQ0MsT0FBakMsRUFBMENDLE1BQTFDLENBQXJCOztBQUVBLGFBQU8yQixZQUFQO0FBQ0Q7Ozs7RUFoRHdCcEMsTTs7QUFtRDNCc0MsT0FBT0MsT0FBUCxHQUFpQmhDLFlBQWpCIiwiZmlsZSI6ImNvbG91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2hhZGVyID0gcmVxdWlyZSgnLi4vc2hhZGVyJyk7XG5cbmNvbnN0IHsgY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2UsIGNhbGN1bGF0ZVBvc2l0aW9uU291cmNlIH0gPSBTaGFkZXI7XG5cbmNvbnN0IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgPSAnYVZlcnRleENvbG91cic7XG5cbmNvbnN0IHZlcnRleFNoYWRlclNvdXJjZSA9IGBcbiAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICAke2NhbGN1bGF0ZUxpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7Y2FsY3VsYXRlUG9zaXRpb25Tb3VyY2V9XG4gICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG5cbiAgICAgICAgICB2Q29sb3VyID0gJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gYFxuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG5cbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodkNvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHZDb2xvdXIuYSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgO1xuICBcbmNsYXNzIENvbG91clNoYWRlciBleHRlbmRzIFNoYWRlciB7XG4gIGNvbnN0cnVjdG9yKHByb2dyYW0sIGNhbnZhcykge1xuICAgIHN1cGVyKHByb2dyYW0sIGNhbnZhcyk7XG5cbiAgICB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhvZmZzZXRWZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleENvbG91ckRhdGEsIHZlcnRleEluZGV4RGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihvZmZzZXRWZXJ0ZXhQb3NpdGlvbkRhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhOb3JtYWxCdWZmZXIodmVydGV4Tm9ybWFsRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleENvbG91ckJ1ZmZlcih2ZXJ0ZXhDb2xvdXJEYXRhLCBjYW52YXMpO1xuXG4gICAgY29uc3QgY291bnQgPSBjYW52YXMuY3JlYXRlQW5kQmluZEVsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhEYXRhKTtcblxuICAgIHRoaXMuc2V0Q291bnQoY291bnQpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Q29sb3VyQnVmZmVyKHZlcnRleENvbG91ckRhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Q29sb3VyQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhDb2xvdXJEYXRhKTtcbiAgfVxuXG4gIGJpbmQoY2FudmFzKSB7XG4gICAgdGhpcy5iaW5kVmVydGV4Q29sb3VyQnVmZmVyKGNhbnZhcyk7XG5cbiAgICBzdXBlci5iaW5kKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kVmVydGV4Q29sb3VyQnVmZmVyKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleENvbG91ckNvbXBvbmVudHMgPSA0O1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhDb2xvdXJCdWZmZXIsIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckNvbXBvbmVudHMpO1xuICB9XG5cbiAgYWN0aXZhdGVUZXh0dXJlKGNhbnZhcykge30gIC8vL1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9ncmFtID0gY2FudmFzLmNyZWF0ZVByb2dyYW0oKSxcbiAgICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBTaGFkZXIuY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICBmcmFnbWVudFNoYWRlciA9IFNoYWRlci5jcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKTtcblxuICAgIGNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleFNoYWRlcik7XG4gICAgY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICAgIGNvbnRleHQubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICBjb25zdCBjb2xvdXJTaGFkZXIgPSBTaGFkZXIuZnJvbVByb2dyYW0oQ29sb3VyU2hhZGVyLCBwcm9ncmFtLCBjYW52YXMpO1xuXG4gICAgcmV0dXJuIGNvbG91clNoYWRlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clNoYWRlcjtcbiJdfQ==