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

var vertexColourAttributeName = 'aVertexColour',
    vertexShaderSource = '\n    \n        attribute vec4 ' + vertexColourAttributeName + ';\n\n        ' + calculateLightingSource + '\n      \n        ' + calculatePositionSource + '\n    \n        varying highp vec3 vLighting;\n        \n        varying lowp vec4 vColour;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n\n          vColour = ' + vertexColourAttributeName + ';                    \n        }\n        \n      ',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvY29sb3VyLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJTaGFkZXIiLCJjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSIsImNhbGN1bGF0ZVBvc2l0aW9uU291cmNlIiwiYXJyYXlVdGlsaXRpZXMiLCJtZXJnZSIsImFkZCIsInZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUiLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsIkNvbG91clNoYWRlciIsInByb2dyYW0iLCJjYW52YXMiLCJ2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiIsImdldEF0dHJpYnV0ZUxvY2F0aW9uIiwib2Zmc2V0VmVydGV4UG9zaXRpb25EYXRhIiwidmVydGV4Tm9ybWFsRGF0YSIsInZlcnRleENvbG91ckRhdGEiLCJ2ZXJ0ZXhJbmRleERhdGEiLCJjcmVhdGVWZXJ0ZXhQb3NpdGlvbkJ1ZmZlciIsImNyZWF0ZVZlcnRleE5vcm1hbEJ1ZmZlciIsImNyZWF0ZVZlcnRleENvbG91ckJ1ZmZlciIsImNvdW50IiwiY3JlYXRlQW5kQmluZEVsZW1lbnRCdWZmZXIiLCJzZXRDb3VudCIsInZlcnRleENvbG91ckJ1ZmZlciIsImNyZWF0ZUJ1ZmZlciIsImJpbmRWZXJ0ZXhDb2xvdXJCdWZmZXIiLCJ2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzIiwiYmluZEJ1ZmZlciIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiY3JlYXRlUHJvZ3JhbSIsInZlcnRleFNoYWRlciIsImNyZWF0ZVZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwiY3JlYXRlRnJhZ21lbnRTaGFkZXIiLCJhdHRhY2hTaGFkZXIiLCJsaW5rUHJvZ3JhbSIsImNvbG91clNoYWRlciIsImZyb21Qcm9ncmFtIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxTQUFTRCxRQUFRLFdBQVIsQ0FBZjs7SUFFUUUsdUIsR0FBcURELE0sQ0FBckRDLHVCO0lBQXlCQyx1QixHQUE0QkYsTSxDQUE1QkUsdUI7SUFDekJDLGMsR0FBbUJMLFMsQ0FBbkJLLGM7SUFDQUMsSyxHQUFVRCxjLENBQVZDLEs7SUFDRkMsRyxHQUFNRCxLLEVBQVE7O0FBRXBCLElBQU1FLDRCQUE0QixlQUFsQztBQUFBLElBQ01DLHlEQUVtQkQseUJBRm5CLHFCQUlJTCx1QkFKSiwwQkFNSUMsdUJBTkosd1BBaUJnQkkseUJBakJoQix1REFETjtBQUFBLElBc0JNRSx3UEF0Qk47O0lBa0NNQyxZOzs7QUFDSix3QkFBWUMsT0FBWixFQUFxQkMsTUFBckIsRUFBNkI7QUFBQTs7QUFBQSw0SEFDckJELE9BRHFCLEVBQ1pDLE1BRFk7O0FBRzNCLFVBQUtDLDZCQUFMLEdBQXFDRCxPQUFPRSxvQkFBUCxDQUE0QkgsT0FBNUIsRUFBcUNKLHlCQUFyQyxDQUFyQztBQUgyQjtBQUk1Qjs7OztrQ0FFYVEsd0IsRUFBMEJDLGdCLEVBQWtCQyxnQixFQUFrQkMsZSxFQUFpQk4sTSxFQUFRO0FBQ25HLFdBQUtPLDBCQUFMLENBQWdDSix3QkFBaEMsRUFBMERILE1BQTFEO0FBQ0EsV0FBS1Esd0JBQUwsQ0FBOEJKLGdCQUE5QixFQUFnREosTUFBaEQ7QUFDQSxXQUFLUyx3QkFBTCxDQUE4QkosZ0JBQTlCLEVBQWdETCxNQUFoRDs7QUFFQSxVQUFNVSxRQUFRVixPQUFPVywwQkFBUCxDQUFrQ0wsZUFBbEMsQ0FBZDs7QUFFQSxXQUFLTSxRQUFMLENBQWNGLEtBQWQ7QUFDRDs7OzZDQUV3QkwsZ0IsRUFBa0JMLE0sRUFBUTtBQUNqRCxXQUFLYSxrQkFBTCxHQUEwQmIsT0FBT2MsWUFBUCxDQUFvQlQsZ0JBQXBCLENBQTFCO0FBQ0Q7Ozt5QkFFSUwsTSxFQUFRO0FBQ1gsV0FBS2Usc0JBQUwsQ0FBNEJmLE1BQTVCOztBQUVBLHVIQUFXQSxNQUFYO0FBQ0Q7OzsyQ0FFc0JBLE0sRUFBUTtBQUM3QixVQUFNZ0IseUJBQXlCLENBQS9COztBQUVBaEIsYUFBT2lCLFVBQVAsQ0FBa0IsS0FBS0osa0JBQXZCLEVBQTJDLEtBQUtaLDZCQUFoRCxFQUErRWUsc0JBQS9FO0FBQ0Q7OztvQ0FFZWhCLE0sRUFBUSxDQUFFLEMsQ0FBRTs7OztnQ0FFVEEsTSxFQUFRO0FBQ3pCLFVBQU1rQixVQUFVbEIsT0FBT21CLFVBQVAsRUFBaEI7QUFBQSxVQUNNcEIsVUFBVUMsT0FBT29CLGFBQVAsRUFEaEI7QUFBQSxVQUVNQyxlQUFlaEMsT0FBT2lDLGtCQUFQLENBQTBCMUIsa0JBQTFCLEVBQThDSSxNQUE5QyxDQUZyQjtBQUFBLFVBR011QixpQkFBaUJsQyxPQUFPbUMsb0JBQVAsQ0FBNEIzQixvQkFBNUIsRUFBa0RHLE1BQWxELENBSHZCOztBQUtBa0IsY0FBUU8sWUFBUixDQUFxQjFCLE9BQXJCLEVBQThCc0IsWUFBOUI7QUFDQUgsY0FBUU8sWUFBUixDQUFxQjFCLE9BQXJCLEVBQThCd0IsY0FBOUI7QUFDQUwsY0FBUVEsV0FBUixDQUFvQjNCLE9BQXBCOztBQUVBLFVBQU00QixlQUFldEMsT0FBT3VDLFdBQVAsQ0FBbUI5QixZQUFuQixFQUFpQ0MsT0FBakMsRUFBMENDLE1BQTFDLENBQXJCOztBQUVBLGFBQU8yQixZQUFQO0FBQ0Q7Ozs7RUFoRHdCdEMsTTs7QUFtRDNCd0MsT0FBT0MsT0FBUCxHQUFpQmhDLFlBQWpCIiwiZmlsZSI6ImNvbG91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFNoYWRlciA9IHJlcXVpcmUoJy4uL3NoYWRlcicpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlLCBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZSB9ID0gU2hhZGVyLFxuICAgICAgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBtZXJnZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICBhZGQgPSBtZXJnZTsgIC8vL1xuXG5jb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lID0gJ2FWZXJ0ZXhDb2xvdXInLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gYFxuICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCAke3ZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgICR7Y2FsY3VsYXRlTGlnaHRpbmdTb3VyY2V9XG4gICAgICBcbiAgICAgICAgJHtjYWxjdWxhdGVQb3NpdGlvblNvdXJjZX1cbiAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdkxpZ2h0aW5nID0gY2FsY3VsYXRlTGlnaHRpbmcoKTtcblxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcblxuICAgICAgICAgIHZDb2xvdXIgPSAke3ZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWV9OyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBgXG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh2Q29sb3VyLnJnYiAqIHZMaWdodGluZywgdkNvbG91ci5hKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGA7XG4gIFxuY2xhc3MgQ29sb3VyU2hhZGVyIGV4dGVuZHMgU2hhZGVyIHtcbiAgY29uc3RydWN0b3IocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgc3VwZXIocHJvZ3JhbSwgY2FudmFzKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKG9mZnNldFZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4Q29sb3VyRGF0YSwgdmVydGV4SW5kZXhEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleFBvc2l0aW9uQnVmZmVyKG9mZnNldFZlcnRleFBvc2l0aW9uRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleE5vcm1hbEJ1ZmZlcih2ZXJ0ZXhOb3JtYWxEYXRhLCBjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4Q29sb3VyQnVmZmVyKHZlcnRleENvbG91ckRhdGEsIGNhbnZhcyk7XG5cbiAgICBjb25zdCBjb3VudCA9IGNhbnZhcy5jcmVhdGVBbmRCaW5kRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleERhdGEpO1xuXG4gICAgdGhpcy5zZXRDb3VudChjb3VudCk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhDb2xvdXJCdWZmZXIodmVydGV4Q29sb3VyRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleENvbG91ckRhdGEpO1xuICB9XG5cbiAgYmluZChjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhDb2xvdXJCdWZmZXIoY2FudmFzKTtcblxuICAgIHN1cGVyLmJpbmQoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhDb2xvdXJCdWZmZXIoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyQ29tcG9uZW50cyA9IDQ7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleENvbG91ckJ1ZmZlciwgdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQ29tcG9uZW50cyk7XG4gIH1cblxuICBhY3RpdmF0ZVRleHR1cmUoY2FudmFzKSB7fSAgLy8vXG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb2dyYW0gPSBjYW52YXMuY3JlYXRlUHJvZ3JhbSgpLFxuICAgICAgICAgIHZlcnRleFNoYWRlciA9IFNoYWRlci5jcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIGZyYWdtZW50U2hhZGVyID0gU2hhZGVyLmNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpO1xuXG4gICAgY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcbiAgICBjb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gICAgY29udGV4dC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIGNvbnN0IGNvbG91clNoYWRlciA9IFNoYWRlci5mcm9tUHJvZ3JhbShDb2xvdXJTaGFkZXIsIHByb2dyYW0sIGNhbnZhcyk7XG5cbiAgICByZXR1cm4gY29sb3VyU2hhZGVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyU2hhZGVyO1xuIl19