'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var normalMatrixName = 'uNormalMatrix',
    rotationMatrixName = 'uRotationMatrix',
    positionMatrixName = 'uPositionMatrix',
    perspectiveMatrixName = 'uPerspectiveMatrix',
    calculateLightingSource = '\n\n        attribute vec3 aVertexNormal;\n\n        uniform mat4 ' + normalMatrixName + ';\n\n        vec3 calculateLighting() {\n          vec3 lighting,\n               ambientLight = vec3(0.3, 0.3, 0.3),\n               directionalLightColour = vec3(1, 1, 1),\n               directionalVector = normalize(vec3(0.85, 0.8, 0.75));\n          \n          vec4 transformedNormal = ' + normalMatrixName + ' * vec4(aVertexNormal, 1.0);            \n\n          float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);\n          \n          lighting = ambientLight + (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      ',
    calculatePositionSource = '\n\n        attribute vec4 aVertexPosition;\n\n        uniform mat4 ' + rotationMatrixName + ';\n        uniform mat4 ' + positionMatrixName + ';\n        uniform mat4 ' + perspectiveMatrixName + ';\n        \n        vec4 calculatePosition() {\n          vec4 position;\n          \n          position = ' + perspectiveMatrixName + ' * ' + positionMatrixName + ' * ' + rotationMatrixName + ' * aVertexPosition;\n          \n          return position;\n        }\n        \n      ';

var Shader = function () {
  function Shader(program) {
    _classCallCheck(this, Shader);

    this.program = program;
  }

  _createClass(Shader, [{
    key: 'getProgram',
    value: function getProgram() {
      return this.program;
    }
  }, {
    key: 'createAndBindVertexPositionBuffer',
    value: function createAndBindVertexPositionBuffer(vertexPositionData, canvas) {
      var vertexPositionBuffer = canvas.createBuffer(vertexPositionData),
          vertexPositionAttributeLocation = canvas.getAttributeLocation(this.program, 'aVertexPosition'),
          vertexPositionComponents = 3;

      canvas.bindBuffer(vertexPositionBuffer, vertexPositionAttributeLocation, vertexPositionComponents);

      var vertexPositionDataLength = vertexPositionData.length,
          count = vertexPositionDataLength / vertexPositionComponents;

      return count;
    }
  }, {
    key: 'createAndBindVertexNormalBuffer',
    value: function createAndBindVertexNormalBuffer(vertexNormalData, canvas) {
      var vertexNormalBuffer = canvas.createBuffer(vertexNormalData),
          vertexNormalAttributeLocation = canvas.getAttributeLocation(this.program, 'aVertexNormal'),
          vertexNormalComponents = 3;

      canvas.bindBuffer(vertexNormalBuffer, vertexNormalAttributeLocation, vertexNormalComponents);
    }
  }], [{
    key: 'fromVertexShaderSourceAndFragmentShaderSource',
    value: function fromVertexShaderSourceAndFragmentShaderSource(Class, vertexShaderSource, fragmentShaderSource, canvas) {
      var context = canvas.getContext(),
          LINK_STATUS = context.LINK_STATUS,
          pname = LINK_STATUS,
          program = context.createProgram(),
          vertexShader = createVertexShader(vertexShaderSource, context),
          fragmentShader = createFragmentShader(fragmentShaderSource, context);


      context.attachShader(program, vertexShader);
      context.attachShader(program, fragmentShader);

      context.linkProgram(program);

      var linkStatus = context.getProgramParameter(program, pname);

      if (!linkStatus) {
        var message = context.getProgramInfoLog(program); ///

        throw new Error('Unable to create the colour shader program, \'' + message + '\'.');
      }

      var shader = new Class(program);

      return shader;
    }
  }]);

  return Shader;
}();

Object.assign(Shader, {
  calculateLightingSource: calculateLightingSource,
  calculatePositionSource: calculatePositionSource
});

module.exports = Shader;

function createVertexShader(vertexShaderSource, context) {
  var VERTEX_SHADER = context.VERTEX_SHADER,
      type = VERTEX_SHADER,
      vertexShader = createShader(type, vertexShaderSource, context);


  return vertexShader;
}

function createFragmentShader(fragmentShaderSource, context) {
  var FRAGMENT_SHADER = context.FRAGMENT_SHADER,
      type = FRAGMENT_SHADER,
      vertexShader = createShader(type, fragmentShaderSource, context);


  return vertexShader;
}

function createShader(type, shaderSource, context) {
  var COMPILE_STATUS = context.COMPILE_STATUS,
      pname = COMPILE_STATUS,
      shader = context.createShader(type);


  context.shaderSource(shader, shaderSource);

  context.compileShader(shader);

  var compileStatus = context.getShaderParameter(shader, pname);

  if (!compileStatus) {
    var shaderInfoLog = context.getShaderInfoLog(shader);

    throw new Error('Unable to create the shader.');
  }

  return shader;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaGFkZXIuanMiXSwibmFtZXMiOlsibm9ybWFsTWF0cml4TmFtZSIsInJvdGF0aW9uTWF0cml4TmFtZSIsInBvc2l0aW9uTWF0cml4TmFtZSIsInBlcnNwZWN0aXZlTWF0cml4TmFtZSIsImNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlIiwiY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2UiLCJTaGFkZXIiLCJwcm9ncmFtIiwidmVydGV4UG9zaXRpb25EYXRhIiwiY2FudmFzIiwidmVydGV4UG9zaXRpb25CdWZmZXIiLCJjcmVhdGVCdWZmZXIiLCJ2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0QXR0cmlidXRlTG9jYXRpb24iLCJ2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMiLCJiaW5kQnVmZmVyIiwidmVydGV4UG9zaXRpb25EYXRhTGVuZ3RoIiwibGVuZ3RoIiwiY291bnQiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidmVydGV4Tm9ybWFsQnVmZmVyIiwidmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24iLCJ2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzIiwiQ2xhc3MiLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsImdldENvbnRleHQiLCJMSU5LX1NUQVRVUyIsImNvbnRleHQiLCJwbmFtZSIsImNyZWF0ZVByb2dyYW0iLCJ2ZXJ0ZXhTaGFkZXIiLCJjcmVhdGVWZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsImNyZWF0ZUZyYWdtZW50U2hhZGVyIiwiYXR0YWNoU2hhZGVyIiwibGlua1Byb2dyYW0iLCJsaW5rU3RhdHVzIiwiZ2V0UHJvZ3JhbVBhcmFtZXRlciIsIm1lc3NhZ2UiLCJnZXRQcm9ncmFtSW5mb0xvZyIsIkVycm9yIiwic2hhZGVyIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyIsIlZFUlRFWF9TSEFERVIiLCJ0eXBlIiwiY3JlYXRlU2hhZGVyIiwiRlJBR01FTlRfU0hBREVSIiwic2hhZGVyU291cmNlIiwiQ09NUElMRV9TVEFUVVMiLCJjb21waWxlU2hhZGVyIiwiY29tcGlsZVN0YXR1cyIsImdldFNoYWRlclBhcmFtZXRlciIsInNoYWRlckluZm9Mb2ciLCJnZXRTaGFkZXJJbmZvTG9nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsbUJBQW1CLGVBQXpCO0FBQUEsSUFDTUMscUJBQXFCLGlCQUQzQjtBQUFBLElBRU1DLHFCQUFxQixpQkFGM0I7QUFBQSxJQUdNQyx3QkFBd0Isb0JBSDlCO0FBQUEsSUFJTUMsaUdBSWlCSixnQkFKakIsNFNBWStCQSxnQkFaL0IsNlJBSk47QUFBQSxJQTBCTUssbUdBSWlCSixrQkFKakIsZ0NBS2lCQyxrQkFMakIsZ0NBTWlCQyxxQkFOakIsb0hBV2lCQSxxQkFYakIsV0FXNENELGtCQVg1QyxXQVdvRUQsa0JBWHBFLDZGQTFCTjs7SUE0Q01LLE07QUFDSixrQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNuQixTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0EsT0FBWjtBQUNEOzs7c0RBRWlDQyxrQixFQUFvQkMsTSxFQUFRO0FBQzVELFVBQU1DLHVCQUF1QkQsT0FBT0UsWUFBUCxDQUFvQkgsa0JBQXBCLENBQTdCO0FBQUEsVUFDTUksa0NBQWtDSCxPQUFPSSxvQkFBUCxDQUE0QixLQUFLTixPQUFqQyxFQUEwQyxpQkFBMUMsQ0FEeEM7QUFBQSxVQUVNTywyQkFBMkIsQ0FGakM7O0FBSUFMLGFBQU9NLFVBQVAsQ0FBa0JMLG9CQUFsQixFQUF3Q0UsK0JBQXhDLEVBQXlFRSx3QkFBekU7O0FBRUEsVUFBTUUsMkJBQTJCUixtQkFBbUJTLE1BQXBEO0FBQUEsVUFDTUMsUUFBUUYsMkJBQTJCRix3QkFEekM7O0FBR0EsYUFBT0ksS0FBUDtBQUNEOzs7b0RBRStCQyxnQixFQUFrQlYsTSxFQUFRO0FBQ3hELFVBQU1XLHFCQUFxQlgsT0FBT0UsWUFBUCxDQUFvQlEsZ0JBQXBC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eUJmLE1BQXpCLENBQXRCOztBQUVBLFVBQU0sSUFBSUQsS0FBSixnQ0FBTjtBQUNEOztBQUVELFNBQU9DLE1BQVA7QUFDRCIsImZpbGUiOiJzaGFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5vcm1hbE1hdHJpeE5hbWUgPSAndU5vcm1hbE1hdHJpeCcsXG4gICAgICByb3RhdGlvbk1hdHJpeE5hbWUgPSAndVJvdGF0aW9uTWF0cml4JyxcbiAgICAgIHBvc2l0aW9uTWF0cml4TmFtZSA9ICd1UG9zaXRpb25NYXRyaXgnLFxuICAgICAgcGVyc3BlY3RpdmVNYXRyaXhOYW1lID0gJ3VQZXJzcGVjdGl2ZU1hdHJpeCcsXG4gICAgICBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSA9IGBcblxuICAgICAgICBhdHRyaWJ1dGUgdmVjMyBhVmVydGV4Tm9ybWFsO1xuXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke25vcm1hbE1hdHJpeE5hbWV9O1xuXG4gICAgICAgIHZlYzMgY2FsY3VsYXRlTGlnaHRpbmcoKSB7XG4gICAgICAgICAgdmVjMyBsaWdodGluZyxcbiAgICAgICAgICAgICAgIGFtYmllbnRMaWdodCA9IHZlYzMoMC4zLCAwLjMsIDAuMyksXG4gICAgICAgICAgICAgICBkaXJlY3Rpb25hbExpZ2h0Q29sb3VyID0gdmVjMygxLCAxLCAxKSxcbiAgICAgICAgICAgICAgIGRpcmVjdGlvbmFsVmVjdG9yID0gbm9ybWFsaXplKHZlYzMoMC44NSwgMC44LCAwLjc1KSk7XG4gICAgICAgICAgXG4gICAgICAgICAgdmVjNCB0cmFuc2Zvcm1lZE5vcm1hbCA9ICR7bm9ybWFsTWF0cml4TmFtZX0gKiB2ZWM0KGFWZXJ0ZXhOb3JtYWwsIDEuMCk7ICAgICAgICAgICAgXG5cbiAgICAgICAgICBmbG9hdCBkaXJlY3Rpb25hbCA9IG1heChkb3QodHJhbnNmb3JtZWROb3JtYWwueHl6LCBkaXJlY3Rpb25hbFZlY3RvciksIDAuMCk7XG4gICAgICAgICAgXG4gICAgICAgICAgbGlnaHRpbmcgPSBhbWJpZW50TGlnaHQgKyAoZGlyZWN0aW9uYWxMaWdodENvbG91ciAqIGRpcmVjdGlvbmFsKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gbGlnaHRpbmc7XG4gICAgICAgIH1cblxuICAgICAgYCxcbiAgICAgIGNhbGN1bGF0ZVBvc2l0aW9uU291cmNlID0gYFxuXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0IGFWZXJ0ZXhQb3NpdGlvbjtcblxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtyb3RhdGlvbk1hdHJpeE5hbWV9O1xuICAgICAgICB1bmlmb3JtIG1hdDQgJHtwb3NpdGlvbk1hdHJpeE5hbWV9O1xuICAgICAgICB1bmlmb3JtIG1hdDQgJHtwZXJzcGVjdGl2ZU1hdHJpeE5hbWV9O1xuICAgICAgICBcbiAgICAgICAgdmVjNCBjYWxjdWxhdGVQb3NpdGlvbigpIHtcbiAgICAgICAgICB2ZWM0IHBvc2l0aW9uO1xuICAgICAgICAgIFxuICAgICAgICAgIHBvc2l0aW9uID0gJHtwZXJzcGVjdGl2ZU1hdHJpeE5hbWV9ICogJHtwb3NpdGlvbk1hdHJpeE5hbWV9ICogJHtyb3RhdGlvbk1hdHJpeE5hbWV9ICogYVZlcnRleFBvc2l0aW9uO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGA7XG5cbmNsYXNzIFNoYWRlciB7XG4gIGNvbnN0cnVjdG9yKHByb2dyYW0pIHtcbiAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICB9XG5cbiAgZ2V0UHJvZ3JhbSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9ncmFtO1xuICB9XG5cbiAgY3JlYXRlQW5kQmluZFZlcnRleFBvc2l0aW9uQnVmZmVyKHZlcnRleFBvc2l0aW9uRGF0YSwgY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25CdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleFBvc2l0aW9uRGF0YSksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbih0aGlzLnByb2dyYW0sICdhVmVydGV4UG9zaXRpb24nKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMgPSAzO1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodmVydGV4UG9zaXRpb25CdWZmZXIsIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyk7XG5cbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkRhdGFMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbkRhdGEubGVuZ3RoLFxuICAgICAgICAgIGNvdW50ID0gdmVydGV4UG9zaXRpb25EYXRhTGVuZ3RoIC8gdmVydGV4UG9zaXRpb25Db21wb25lbnRzO1xuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgY3JlYXRlQW5kQmluZFZlcnRleE5vcm1hbEJ1ZmZlcih2ZXJ0ZXhOb3JtYWxEYXRhLCBjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleE5vcm1hbERhdGEpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ2FWZXJ0ZXhOb3JtYWwnKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzID0gMztcblxuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHZlcnRleE5vcm1hbEJ1ZmZlciwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbENvbXBvbmVudHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhTaGFkZXJTb3VyY2VBbmRGcmFnbWVudFNoYWRlclNvdXJjZShDbGFzcywgdmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgeyBMSU5LX1NUQVRVUyB9ID0gY29udGV4dCxcbiAgICAgICAgICBwbmFtZSA9IExJTktfU1RBVFVTLFxuICAgICAgICAgIHByb2dyYW0gPSBjb250ZXh0LmNyZWF0ZVByb2dyYW0oKSxcbiAgICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlLCBjb250ZXh0KSxcbiAgICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlLCBjb250ZXh0KTtcbiAgXG4gICAgY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcbiAgICBjb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gIFxuICAgIGNvbnRleHQubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG4gIFxuICAgIGNvbnN0IGxpbmtTdGF0dXMgPSBjb250ZXh0LmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgcG5hbWUpO1xuICBcbiAgICBpZiAoIWxpbmtTdGF0dXMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBjb250ZXh0LmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pOyAgLy8vXG4gIFxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIHRoZSBjb2xvdXIgc2hhZGVyIHByb2dyYW0sICcke21lc3NhZ2V9Jy5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaGFkZXIgPSBuZXcgQ2xhc3MocHJvZ3JhbSk7XG4gIFxuICAgIHJldHVybiBzaGFkZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTaGFkZXIsIHtcbiAgY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2U6IGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlLFxuICBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZTogY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2Vcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNoYWRlcjtcblxuZnVuY3Rpb24gY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZFUlRFWF9TSEFERVIgfSA9IGNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBWRVJURVhfU0hBREVSLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIodHlwZSwgdmVydGV4U2hhZGVyU291cmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY29udGV4dCkge1xuICBjb25zdCB7IEZSQUdNRU5UX1NIQURFUiB9ID0gY29udGV4dCxcbiAgICAgICAgdHlwZSA9IEZSQUdNRU5UX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKHR5cGUsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIodHlwZSwgc2hhZGVyU291cmNlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ09NUElMRV9TVEFUVVMgfSA9IGNvbnRleHQsXG4gICAgICAgIHBuYW1lID0gQ09NUElMRV9TVEFUVVMsXG4gICAgICAgIHNoYWRlciA9IGNvbnRleHQuY3JlYXRlU2hhZGVyKHR5cGUpO1xuXG4gIGNvbnRleHQuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTtcblxuICBjb250ZXh0LmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICBjb25zdCBjb21waWxlU3RhdHVzID0gY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBwbmFtZSk7XG5cbiAgaWYgKCFjb21waWxlU3RhdHVzKSB7XG4gICAgY29uc3Qgc2hhZGVySW5mb0xvZyA9IGNvbnRleHQuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xuXG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIHRoZSBzaGFkZXIuYCk7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuIl19