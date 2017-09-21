'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

  function ColourShader() {
    _classCallCheck(this, ColourShader);

    return _possibleConstructorReturn(this, (ColourShader.__proto__ || Object.getPrototypeOf(ColourShader)).apply(this, arguments));
  }

  _createClass(ColourShader, [{
    key: 'createAndBindVertexColourBuffer',
    value: function createAndBindVertexColourBuffer(vertexColourData, canvas) {
      var program = this.getProgram(),
          vertexColourBuffer = canvas.createBuffer(vertexColourData),
          vertexColourAttributeLocation = canvas.getAttributeLocation(program, vertexColourAttributeName),
          vertexColourComponents = 4;

      canvas.bindBuffer(vertexColourBuffer, vertexColourAttributeLocation, vertexColourComponents);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      return Shader.fromVertexShaderSourceAndFragmentShaderSource(ColourShader, vertexShaderSource, fragmentShaderSource, canvas);
    }
  }]);

  return ColourShader;
}(Shader);

module.exports = ColourShader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvY29sb3VyLmpzIl0sIm5hbWVzIjpbIlNoYWRlciIsInJlcXVpcmUiLCJjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSIsImNhbGN1bGF0ZVBvc2l0aW9uU291cmNlIiwidmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSIsInZlcnRleFNoYWRlclNvdXJjZSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiQ29sb3VyU2hhZGVyIiwidmVydGV4Q29sb3VyRGF0YSIsImNhbnZhcyIsInByb2dyYW0iLCJnZXRQcm9ncmFtIiwidmVydGV4Q29sb3VyQnVmZmVyIiwiY3JlYXRlQnVmZmVyIiwidmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24iLCJnZXRBdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleENvbG91ckNvbXBvbmVudHMiLCJiaW5kQnVmZmVyIiwiZnJvbVZlcnRleFNoYWRlclNvdXJjZUFuZEZyYWdtZW50U2hhZGVyU291cmNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFdBQVIsQ0FBZjs7SUFFUUMsdUIsR0FBcURGLE0sQ0FBckRFLHVCO0lBQXlCQyx1QixHQUE0QkgsTSxDQUE1QkcsdUI7OztBQUVqQyxJQUFNQyw0QkFBNEIsZUFBbEM7O0FBRUEsSUFBTUMseURBRW1CRCx5QkFGbkIscUJBSUlGLHVCQUpKLDBCQU1JQyx1QkFOSix3UEFpQmdCQyx5QkFqQmhCLHVEQUFOO0FBQUEsSUFxQk1FLHdQQXJCTjs7SUFpQ01DLFk7Ozs7Ozs7Ozs7O29EQUc0QkMsZ0IsRUFBa0JDLE0sRUFBUTtBQUN4RCxVQUFNQyxVQUFVLEtBQUtDLFVBQUwsRUFBaEI7QUFBQSxVQUNNQyxxQkFBcUJILE9BQU9JLFlBQVAsQ0FBb0JMLGdCQUFwQixDQUQzQjtBQUFBLFVBRU1NLGdDQUFnQ0wsT0FBT00sb0JBQVAsQ0FBNEJMLE9BQTVCLEVBQXFDTix5QkFBckMsQ0FGdEM7QUFBQSxVQUdNWSx5QkFBeUIsQ0FIL0I7O0FBS0FQLGFBQU9RLFVBQVAsQ0FBa0JMLGtCQUFsQixFQUFzQ0UsNkJBQXRDLEVBQXFFRSxzQkFBckU7QUFDRDs7O2dDQVRrQlAsTSxFQUFRO0FBQUUsYUFBT1QsT0FBT2tCLDZDQUFQLENBQXFEWCxZQUFyRCxFQUFtRUYsa0JBQW5FLEVBQXVGQyxvQkFBdkYsRUFBNkdHLE1BQTdHLENBQVA7QUFBOEg7Ozs7RUFEbElULE07O0FBYTNCbUIsT0FBT0MsT0FBUCxHQUFpQmIsWUFBakIiLCJmaWxlIjoiY29sb3VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTaGFkZXIgPSByZXF1aXJlKCcuLi9zaGFkZXInKTtcblxuY29uc3QgeyBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSwgY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2UgfSA9IFNoYWRlcjtcblxuY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSA9ICdhVmVydGV4Q29sb3VyJztcblxuY29uc3QgdmVydGV4U2hhZGVyU291cmNlID0gYFxuICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCAke3ZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgICR7Y2FsY3VsYXRlTGlnaHRpbmdTb3VyY2V9XG4gICAgICBcbiAgICAgICAgJHtjYWxjdWxhdGVQb3NpdGlvblNvdXJjZX1cbiAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdkxpZ2h0aW5nID0gY2FsY3VsYXRlTGlnaHRpbmcoKTtcblxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcblxuICAgICAgICAgIHZDb2xvdXIgPSAke3ZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWV9OyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBgXG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh2Q29sb3VyLnJnYiAqIHZMaWdodGluZywgdkNvbG91ci5hKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGA7XG4gIFxuY2xhc3MgQ29sb3VyU2hhZGVyIGV4dGVuZHMgU2hhZGVyIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykgeyByZXR1cm4gU2hhZGVyLmZyb21WZXJ0ZXhTaGFkZXJTb3VyY2VBbmRGcmFnbWVudFNoYWRlclNvdXJjZShDb2xvdXJTaGFkZXIsIHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyk7IH1cblxuICBjcmVhdGVBbmRCaW5kVmVydGV4Q29sb3VyQnVmZmVyKHZlcnRleENvbG91ckRhdGEsIGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleENvbG91ckRhdGEpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHZlcnRleENvbG91ckNvbXBvbmVudHMgPSA0O1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodmVydGV4Q29sb3VyQnVmZmVyLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQ29tcG9uZW50cyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJTaGFkZXI7XG4iXX0=