"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.samplerName = void 0;
var samplerName = "uSampler";
exports.samplerName = samplerName;
var fragmentShaderSource = new String("\n        \n        uniform sampler2D ".concat(samplerName, ";\n\n        varying highp vec3 vLighting;\n                   \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          highp vec4 texelColour = texture2D(").concat(samplerName, ", vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  \n        }\n        \n      "));
var _default = fragmentShaderSource;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYWdtZW50U2hhZGVyLmpzIl0sIm5hbWVzIjpbInNhbXBsZXJOYW1lIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFTyxJQUFNQSxXQUFXLEdBQUcsVUFBcEI7O0FBRVAsSUFBTUMsb0JBQW9CLEdBQUcsSUFBSUMsTUFBSixpREFFREYsV0FGQyw0TUFTa0JBLFdBVGxCLG1KQUE3QjtlQWdCZUMsb0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IHNhbXBsZXJOYW1lID0gXCJ1U2FtcGxlclwiO1xuXG5jb25zdCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgJHtzYW1wbGVyTmFtZX07XG5cbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBoaWdocCB2ZWM0IHRleGVsQ29sb3VyID0gdGV4dHVyZTJEKCR7c2FtcGxlck5hbWV9LCB2VGV4dHVyZUNvb3JkaW5hdGUpO1xuICAgICAgICAgIFxuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodGV4ZWxDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB0ZXhlbENvbG91ci5hKTsgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZyYWdtZW50U2hhZGVyU291cmNlO1xuIl19