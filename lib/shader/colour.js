'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shader = require('../shader');

var calculateLightingSource = Shader.calculateLightingSource,
    calculatePositionSource = Shader.calculatePositionSource;


var vertexShaderSource = '\n    \n        ' + calculateLightingSource + '\n      \n        ' + calculatePositionSource + '\n    \n        varying highp vec3 vLighting;\n        \n        varying lowp vec4 vColour;\n        \n        attribute vec4 aVertexColour;\n\n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n\n          vColour = aVertexColour;                    \n        }\n        \n      ',
    fragmentShaderSource = '\n        \n        varying lowp vec4 vColour;\n              \n        varying highp vec3 vLighting;\n\n        void main() {\n          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);\n        }\n        \n      ';

var ColourShader = function (_Shader) {
  _inherits(ColourShader, _Shader);

  function ColourShader() {
    _classCallCheck(this, ColourShader);

    return _possibleConstructorReturn(this, (ColourShader.__proto__ || Object.getPrototypeOf(ColourShader)).apply(this, arguments));
  }

  _createClass(ColourShader, null, [{
    key: 'fromNothing',
    value: function fromNothing(context) {
      return Shader.fromVertexShaderSourceAndFragmentShaderSource(ColourShader, vertexShaderSource, fragmentShaderSource, context);
    }
  }]);

  return ColourShader;
}(Shader);

module.exports = ColourShader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvY29sb3VyLmpzIl0sIm5hbWVzIjpbIlNoYWRlciIsInJlcXVpcmUiLCJjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSIsImNhbGN1bGF0ZVBvc2l0aW9uU291cmNlIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJDb2xvdXJTaGFkZXIiLCJjb250ZXh0IiwiZnJvbVZlcnRleFNoYWRlclNvdXJjZUFuZEZyYWdtZW50U2hhZGVyU291cmNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFdBQVIsQ0FBZjs7SUFFUUMsdUIsR0FBcURGLE0sQ0FBckRFLHVCO0lBQXlCQyx1QixHQUE0QkgsTSxDQUE1QkcsdUI7OztBQUVqQyxJQUFNQywwQ0FFSUYsdUJBRkosMEJBSUlDLHVCQUpKLDZWQUFOO0FBQUEsSUFxQk1FLHdQQXJCTjs7SUFpQ01DLFk7Ozs7Ozs7Ozs7O2dDQUNlQyxPLEVBQVM7QUFBRSxhQUFPUCxPQUFPUSw2Q0FBUCxDQUFxREYsWUFBckQsRUFBbUVGLGtCQUFuRSxFQUF1RkMsb0JBQXZGLEVBQTZHRSxPQUE3RyxDQUFQO0FBQStIOzs7O0VBRHBJUCxNOztBQUkzQlMsT0FBT0MsT0FBUCxHQUFpQkosWUFBakIiLCJmaWxlIjoiY29sb3VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTaGFkZXIgPSByZXF1aXJlKCcuLi9zaGFkZXInKTtcblxuY29uc3QgeyBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSwgY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2UgfSA9IFNoYWRlcjtcblxuY29uc3QgdmVydGV4U2hhZGVyU291cmNlID0gYFxuICAgIFxuICAgICAgICAke2NhbGN1bGF0ZUxpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7Y2FsY3VsYXRlUG9zaXRpb25Tb3VyY2V9XG4gICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgYVZlcnRleENvbG91cjtcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdkxpZ2h0aW5nID0gY2FsY3VsYXRlTGlnaHRpbmcoKTtcblxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcblxuICAgICAgICAgIHZDb2xvdXIgPSBhVmVydGV4Q29sb3VyOyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBgXG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh2Q29sb3VyLnJnYiAqIHZMaWdodGluZywgdkNvbG91ci5hKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGA7XG4gIFxuY2xhc3MgQ29sb3VyU2hhZGVyIGV4dGVuZHMgU2hhZGVyIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHsgcmV0dXJuIFNoYWRlci5mcm9tVmVydGV4U2hhZGVyU291cmNlQW5kRnJhZ21lbnRTaGFkZXJTb3VyY2UoQ29sb3VyU2hhZGVyLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjb250ZXh0KTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clNoYWRlcjtcbiJdfQ==