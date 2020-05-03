"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var fragmentShaderSource = new String("\n        \n        varying lowp vec4 vColour;\n              \n        varying highp vec3 vLighting;\n\n        void main() {\n          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);\n        }\n        \n      ");
var _default = fragmentShaderSource;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYWdtZW50U2hhZGVyLmpzIl0sIm5hbWVzIjpbImZyYWdtZW50U2hhZGVyU291cmNlIiwiU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsb0JBQW9CLEdBQUcsSUFBSUMsTUFBSixtT0FBN0I7ZUFZZUQsb0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHZDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB2Q29sb3VyLmEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZyYWdtZW50U2hhZGVyU291cmNlO1xuIl19