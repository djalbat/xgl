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

    _this.vertexColourData = [];
    return _this;
  }

  _createClass(ColourShader, [{
    key: 'addVertexColourData',
    value: function addVertexColourData(vertexColourData) {
      add(this.vertexColourData, vertexColourData);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      this.createVertexColourBuffer(this.vertexColourData, canvas);

      _get(ColourShader.prototype.__proto__ || Object.getPrototypeOf(ColourShader.prototype), 'createBuffers', this).call(this, canvas);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvY29sb3VyLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJTaGFkZXIiLCJjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSIsImNhbGN1bGF0ZVBvc2l0aW9uU291cmNlIiwiYXJyYXlVdGlsaXRpZXMiLCJtZXJnZSIsImFkZCIsInZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUiLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsIkNvbG91clNoYWRlciIsInByb2dyYW0iLCJjYW52YXMiLCJ2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiIsImdldEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4Q29sb3VyRGF0YSIsImNyZWF0ZVZlcnRleENvbG91ckJ1ZmZlciIsInZlcnRleENvbG91ckJ1ZmZlciIsImNyZWF0ZUJ1ZmZlciIsImJpbmRWZXJ0ZXhDb2xvdXJCdWZmZXIiLCJ2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzIiwiYmluZEJ1ZmZlciIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiY3JlYXRlUHJvZ3JhbSIsInZlcnRleFNoYWRlciIsImNyZWF0ZVZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwiY3JlYXRlRnJhZ21lbnRTaGFkZXIiLCJhdHRhY2hTaGFkZXIiLCJsaW5rUHJvZ3JhbSIsImNvbG91clNoYWRlciIsImZyb21Qcm9ncmFtIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxTQUFTRCxRQUFRLFdBQVIsQ0FBZjs7SUFFUUUsdUIsR0FBcURELE0sQ0FBckRDLHVCO0lBQXlCQyx1QixHQUE0QkYsTSxDQUE1QkUsdUI7SUFDekJDLGMsR0FBbUJMLFMsQ0FBbkJLLGM7SUFDQUMsSyxHQUFVRCxjLENBQVZDLEs7SUFDRkMsRyxHQUFNRCxLLEVBQVE7O0FBRXBCLElBQU1FLDRCQUE0QixlQUFsQztBQUFBLElBQ01DLHlEQUVtQkQseUJBRm5CLHFCQUlJTCx1QkFKSiwwQkFNSUMsdUJBTkosd1BBaUJnQkkseUJBakJoQix1REFETjtBQUFBLElBc0JNRSx3UEF0Qk47O0lBa0NNQyxZOzs7QUFDSix3QkFBWUMsT0FBWixFQUFxQkMsTUFBckIsRUFBNkI7QUFBQTs7QUFBQSw0SEFDckJELE9BRHFCLEVBQ1pDLE1BRFk7O0FBRzNCLFVBQUtDLDZCQUFMLEdBQXFDRCxPQUFPRSxvQkFBUCxDQUE0QkgsT0FBNUIsRUFBcUNKLHlCQUFyQyxDQUFyQzs7QUFFQSxVQUFLUSxnQkFBTCxHQUF3QixFQUF4QjtBQUwyQjtBQU01Qjs7Ozt3Q0FFbUJBLGdCLEVBQWtCO0FBQ3BDVCxVQUFJLEtBQUtTLGdCQUFULEVBQTJCQSxnQkFBM0I7QUFDRDs7O2tDQUVhSCxNLEVBQVE7QUFDcEIsV0FBS0ksd0JBQUwsQ0FBOEIsS0FBS0QsZ0JBQW5DLEVBQXFESCxNQUFyRDs7QUFFQSxnSUFBb0JBLE1BQXBCO0FBQ0Q7Ozs2Q0FFd0JHLGdCLEVBQWtCSCxNLEVBQVE7QUFDakQsV0FBS0ssa0JBQUwsR0FBMEJMLE9BQU9NLFlBQVAsQ0FBb0JILGdCQUFwQixDQUExQjtBQUNEOzs7eUJBRUlILE0sRUFBUTtBQUNYLFdBQUtPLHNCQUFMLENBQTRCUCxNQUE1Qjs7QUFFQSx1SEFBV0EsTUFBWDtBQUNEOzs7MkNBRXNCQSxNLEVBQVE7QUFDN0IsVUFBTVEseUJBQXlCLENBQS9COztBQUVBUixhQUFPUyxVQUFQLENBQWtCLEtBQUtKLGtCQUF2QixFQUEyQyxLQUFLSiw2QkFBaEQsRUFBK0VPLHNCQUEvRTtBQUNEOzs7b0NBRWVSLE0sRUFBUSxDQUFFLEMsQ0FBRTs7OztnQ0FFVEEsTSxFQUFRO0FBQ3pCLFVBQU1VLFVBQVVWLE9BQU9XLFVBQVAsRUFBaEI7QUFBQSxVQUNNWixVQUFVQyxPQUFPWSxhQUFQLEVBRGhCO0FBQUEsVUFFTUMsZUFBZXhCLE9BQU95QixrQkFBUCxDQUEwQmxCLGtCQUExQixFQUE4Q0ksTUFBOUMsQ0FGckI7QUFBQSxVQUdNZSxpQkFBaUIxQixPQUFPMkIsb0JBQVAsQ0FBNEJuQixvQkFBNUIsRUFBa0RHLE1BQWxELENBSHZCOztBQUtBVSxjQUFRTyxZQUFSLENBQXFCbEIsT0FBckIsRUFBOEJjLFlBQTlCO0FBQ0FILGNBQVFPLFlBQVIsQ0FBcUJsQixPQUFyQixFQUE4QmdCLGNBQTlCO0FBQ0FMLGNBQVFRLFdBQVIsQ0FBb0JuQixPQUFwQjs7QUFFQSxVQUFNb0IsZUFBZTlCLE9BQU8rQixXQUFQLENBQW1CdEIsWUFBbkIsRUFBaUNDLE9BQWpDLEVBQTBDQyxNQUExQyxDQUFyQjs7QUFFQSxhQUFPbUIsWUFBUDtBQUNEOzs7O0VBbER3QjlCLE07O0FBcUQzQmdDLE9BQU9DLE9BQVAsR0FBaUJ4QixZQUFqQiIsImZpbGUiOiJjb2xvdXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBTaGFkZXIgPSByZXF1aXJlKCcuLi9zaGFkZXInKTtcblxuY29uc3QgeyBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSwgY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2UgfSA9IFNoYWRlcixcbiAgICAgIHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgbWVyZ2UgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSA9ICdhVmVydGV4Q29sb3VyJyxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IGBcbiAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICAke2NhbGN1bGF0ZUxpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7Y2FsY3VsYXRlUG9zaXRpb25Tb3VyY2V9XG4gICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG5cbiAgICAgICAgICB2Q29sb3VyID0gJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gYFxuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG5cbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodkNvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHZDb2xvdXIuYSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgO1xuICBcbmNsYXNzIENvbG91clNoYWRlciBleHRlbmRzIFNoYWRlciB7XG4gIGNvbnN0cnVjdG9yKHByb2dyYW0sIGNhbnZhcykge1xuICAgIHN1cGVyKHByb2dyYW0sIGNhbnZhcyk7XG5cbiAgICB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUpO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJEYXRhID0gW107XG4gIH1cblxuICBhZGRWZXJ0ZXhDb2xvdXJEYXRhKHZlcnRleENvbG91ckRhdGEpIHtcbiAgICBhZGQodGhpcy52ZXJ0ZXhDb2xvdXJEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhDb2xvdXJCdWZmZXIodGhpcy52ZXJ0ZXhDb2xvdXJEYXRhLCBjYW52YXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Q29sb3VyQnVmZmVyKHZlcnRleENvbG91ckRhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Q29sb3VyQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhDb2xvdXJEYXRhKTtcbiAgfVxuXG4gIGJpbmQoY2FudmFzKSB7XG4gICAgdGhpcy5iaW5kVmVydGV4Q29sb3VyQnVmZmVyKGNhbnZhcyk7XG5cbiAgICBzdXBlci5iaW5kKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kVmVydGV4Q29sb3VyQnVmZmVyKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleENvbG91ckNvbXBvbmVudHMgPSA0O1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhDb2xvdXJCdWZmZXIsIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckNvbXBvbmVudHMpO1xuICB9XG5cbiAgYWN0aXZhdGVUZXh0dXJlKGNhbnZhcykge30gIC8vL1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9ncmFtID0gY2FudmFzLmNyZWF0ZVByb2dyYW0oKSxcbiAgICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBTaGFkZXIuY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICBmcmFnbWVudFNoYWRlciA9IFNoYWRlci5jcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKTtcblxuICAgIGNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleFNoYWRlcik7XG4gICAgY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICAgIGNvbnRleHQubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICBjb25zdCBjb2xvdXJTaGFkZXIgPSBTaGFkZXIuZnJvbVByb2dyYW0oQ29sb3VyU2hhZGVyLCBwcm9ncmFtLCBjYW52YXMpO1xuXG4gICAgcmV0dXJuIGNvbG91clNoYWRlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clNoYWRlcjtcbiJdfQ==