'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var normalMatrixName = 'uNormalMatrix',
    rotationMatrixName = 'uRotationMatrix',
    positionMatrixName = 'uPositionMatrix',
    perspectiveMatrixName = 'uPerspectiveMatrix',
    vertexPositionAttributeName = 'aVertexPosition',
    vertexNormalAttributeName = 'aVertexNormal',
    calculateLightingSource = '\n\n        uniform mat4 ' + normalMatrixName + ';\n\n        attribute vec3 ' + vertexNormalAttributeName + ';\n\n        vec3 ambientLight = vec3(0.3, 0.3, 0.3),\n             directionalLightColour = vec3(1, 1, 1),\n             directionalVector = normalize(vec3(0.85, 0.8, 0.75));\n          \n        vec3 calculateLighting() {\n          vec4 transformedNormal = ' + normalMatrixName + ' * vec4(' + vertexNormalAttributeName + ', 1.0);            \n\n          float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);\n          \n          vec3 lighting = ambientLight + (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      ',
    calculatePositionSource = '\n\n        uniform mat4 ' + rotationMatrixName + ',\n                     ' + positionMatrixName + ',\n                     ' + perspectiveMatrixName + ';\n        \n        attribute vec4 ' + vertexPositionAttributeName + ';\n\n        vec4 calculatePosition() {\n          vec4 position = ' + perspectiveMatrixName + ' * ' + positionMatrixName + ' * ' + rotationMatrixName + ' * ' + vertexPositionAttributeName + ';\n          \n          return position;\n        }\n        \n      ';

var Shader = function () {
  function Shader(program, normalMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, perspectiveMatrixUniformLocation, vertexPositionAttributeLocation, vertexNormalAttributeLocation) {
    _classCallCheck(this, Shader);

    this.program = program;
    this.normalMatrixUniformLocation = normalMatrixUniformLocation;
    this.rotationMatrixUniformLocation = rotationMatrixUniformLocation;
    this.positionMatrixUniformLocation = positionMatrixUniformLocation;
    this.perspectiveMatrixUniformLocation = perspectiveMatrixUniformLocation;
    this.vertexPositionAttributeLocation = vertexPositionAttributeLocation;
    this.vertexNormalAttributeLocation = vertexNormalAttributeLocation;
  }

  _createClass(Shader, [{
    key: 'getProgram',
    value: function getProgram() {
      return this.program;
    }
  }, {
    key: 'getNormalMatrixUniformLocation',
    value: function getNormalMatrixUniformLocation() {
      return this.normalMatrixUniformLocation;
    }
  }, {
    key: 'getRotationMatrixUniformLocation',
    value: function getRotationMatrixUniformLocation() {
      return this.rotationMatrixUniformLocation;
    }
  }, {
    key: 'getPositionMatrixUniformLocation',
    value: function getPositionMatrixUniformLocation() {
      return this.positionMatrixUniformLocation;
    }
  }, {
    key: 'getPerspectiveMatrixUniformLocation',
    value: function getPerspectiveMatrixUniformLocation() {
      return this.perspectiveMatrixUniformLocation;
    }
  }, {
    key: 'getVertexPositionAttributeLocation',
    value: function getVertexPositionAttributeLocation() {
      return this.vertexPositionAttributeLocation;
    }
  }, {
    key: 'getVertexNormalAttributeLocation',
    value: function getVertexNormalAttributeLocation() {
      return this.vertexNormalAttributeLocation;
    }
  }, {
    key: 'createVertexPositionBuffer',
    value: function createVertexPositionBuffer(vertexPositionData, canvas) {
      var vertexPositionBuffer = canvas.createBuffer(vertexPositionData);

      return vertexPositionBuffer;
    }
  }, {
    key: 'createVertexNormalBuffer',
    value: function createVertexNormalBuffer(vertexNormalData, canvas) {
      var vertexNormalBuffer = canvas.createBuffer(vertexNormalData);

      return vertexNormalBuffer;
    }
  }, {
    key: 'bindVertexNormalBuffer',
    value: function bindVertexNormalBuffer(vertexNormalBuffer, canvas) {
      var vertexNormalComponents = 3;

      canvas.bindBuffer(vertexNormalBuffer, this.vertexNormalAttributeLocation, vertexNormalComponents);
    }
  }, {
    key: 'bindVertexPositionBuffer',
    value: function bindVertexPositionBuffer(vertexPositionBuffer, canvas) {
      var vertexPositionComponents = 3;

      canvas.bindBuffer(vertexPositionBuffer, this.vertexPositionAttributeLocation, vertexPositionComponents);
    }
  }], [{
    key: 'createVertexShader',
    value: function createVertexShader(vertexShaderSource, context) {
      var VERTEX_SHADER = context.VERTEX_SHADER,
          type = VERTEX_SHADER,
          vertexShader = createShader(type, vertexShaderSource, context);


      return vertexShader;
    }
  }, {
    key: 'createFragmentShader',
    value: function createFragmentShader(fragmentShaderSource, context) {
      var FRAGMENT_SHADER = context.FRAGMENT_SHADER,
          type = FRAGMENT_SHADER,
          vertexShader = createShader(type, fragmentShaderSource, context);


      return vertexShader;
    }
  }, {
    key: 'fromProgram',
    value: function fromProgram(Class, program, canvas) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        remainingArguments[_key - 3] = arguments[_key];
      }

      var normalMatrixUniformLocation = canvas.getUniformLocation(program, normalMatrixName),
          rotationMatrixUniformLocation = canvas.getUniformLocation(program, rotationMatrixName),
          positionMatrixUniformLocation = canvas.getUniformLocation(program, positionMatrixName),
          perspectiveMatrixUniformLocation = canvas.getUniformLocation(program, perspectiveMatrixName),
          vertexPositionAttributeLocation = canvas.getAttributeLocation(program, vertexPositionAttributeName),
          vertexNormalAttributeLocation = canvas.getAttributeLocation(program, vertexNormalAttributeName),
          shader = new (Function.prototype.bind.apply(Class, [null].concat([program, normalMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, perspectiveMatrixUniformLocation, vertexPositionAttributeLocation, vertexNormalAttributeLocation], remainingArguments)))();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaGFkZXIuanMiXSwibmFtZXMiOlsibm9ybWFsTWF0cml4TmFtZSIsInJvdGF0aW9uTWF0cml4TmFtZSIsInBvc2l0aW9uTWF0cml4TmFtZSIsInBlcnNwZWN0aXZlTWF0cml4TmFtZSIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUiLCJjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSIsImNhbGN1bGF0ZVBvc2l0aW9uU291cmNlIiwiU2hhZGVyIiwicHJvZ3JhbSIsIm5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJ2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleFBvc2l0aW9uRGF0YSIsImNhbnZhcyIsInZlcnRleFBvc2l0aW9uQnVmZmVyIiwiY3JlYXRlQnVmZmVyIiwidmVydGV4Tm9ybWFsRGF0YSIsInZlcnRleE5vcm1hbEJ1ZmZlciIsInZlcnRleE5vcm1hbENvbXBvbmVudHMiLCJiaW5kQnVmZmVyIiwidmVydGV4UG9zaXRpb25Db21wb25lbnRzIiwidmVydGV4U2hhZGVyU291cmNlIiwiY29udGV4dCIsIlZFUlRFWF9TSEFERVIiLCJ0eXBlIiwidmVydGV4U2hhZGVyIiwiY3JlYXRlU2hhZGVyIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJGUkFHTUVOVF9TSEFERVIiLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImdldFVuaWZvcm1Mb2NhdGlvbiIsImdldEF0dHJpYnV0ZUxvY2F0aW9uIiwic2hhZGVyIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyIsInNoYWRlclNvdXJjZSIsIkNPTVBJTEVfU1RBVFVTIiwicG5hbWUiLCJjb21waWxlU2hhZGVyIiwiY29tcGlsZVN0YXR1cyIsImdldFNoYWRlclBhcmFtZXRlciIsInNoYWRlckluZm9Mb2ciLCJnZXRTaGFkZXJJbmZvTG9nIiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxtQkFBbUIsZUFBekI7QUFBQSxJQUNNQyxxQkFBcUIsaUJBRDNCO0FBQUEsSUFFTUMscUJBQXFCLGlCQUYzQjtBQUFBLElBR01DLHdCQUF3QixvQkFIOUI7QUFBQSxJQUlNQyw4QkFBOEIsaUJBSnBDO0FBQUEsSUFLTUMsNEJBQTRCLGVBTGxDO0FBQUEsSUFNTUMsd0RBRWlCTixnQkFGakIsb0NBSW1CSyx5QkFKbkIsNFFBVytCTCxnQkFYL0IsZ0JBVzBESyx5QkFYMUQsNlFBTk47QUFBQSxJQTJCTUUsd0RBRWlCTixrQkFGakIsZ0NBR2lCQyxrQkFIakIsZ0NBSWlCQyxxQkFKakIsNENBTW1CQywyQkFObkIsMkVBU3NCRCxxQkFUdEIsV0FTaURELGtCQVRqRCxXQVN5RUQsa0JBVHpFLFdBU2lHRywyQkFUakcsMkVBM0JOOztJQTJDTUksTTtBQUNKLGtCQUFZQyxPQUFaLEVBQXFCQywyQkFBckIsRUFBa0RDLDZCQUFsRCxFQUFpRkMsNkJBQWpGLEVBQWdIQyxnQ0FBaEgsRUFBa0pDLCtCQUFsSixFQUFtTEMsNkJBQW5MLEVBQWtOO0FBQUE7O0FBQ2hOLFNBQUtOLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLDJCQUFMLEdBQW1DQSwyQkFBbkM7QUFDQSxTQUFLQyw2QkFBTCxHQUFxQ0EsNkJBQXJDO0FBQ0EsU0FBS0MsNkJBQUwsR0FBcUNBLDZCQUFyQztBQUNBLFNBQUtDLGdDQUFMLEdBQXdDQSxnQ0FBeEM7QUFDQSxTQUFLQywrQkFBTCxHQUF1Q0EsK0JBQXZDO0FBQ0EsU0FBS0MsNkJBQUwsR0FBcUNBLDZCQUFyQztBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLTixPQUFaO0FBQ0Q7OztxREFFZ0M7QUFDL0IsYUFBTyxLQUFL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RUFBNEJjLFlBQTVCLEVBQTBDaEIsT0FBMUMsRUFBbUQ7QUFDM0MsTUFBRWlCLGNBQUYsR0FBcUJqQixPQUFyQixDQUFFaUIsY0FBRjtBQUFBLE1BQ0FDLEtBREEsR0FDUUQsY0FEUjtBQUFBLE1BRUFOLE1BRkEsR0FFU1gsUUFBUUksWUFBUixDQUFxQkYsSUFBckIsQ0FGVDs7O0FBSU5GLFVBQVFnQixZQUFSLENBQXFCTCxNQUFyQixFQUE2QkssWUFBN0I7O0FBRUFoQixVQUFRbUIsYUFBUixDQUFzQlIsTUFBdEI7O0FBRUEsTUFBTVMsZ0JBQWdCcEIsUUFBUXFCLGtCQUFSLENBQTJCVixNQUEzQixFQUFtQ08sS0FBbkMsQ0FBdEI7O0FBRUEsTUFBSSxDQUFDRSxhQUFMLEVBQW9CO0FBQ2xCLFFBQU1FLGdCQUFnQnRCLFFBQVF1QixnQkFBUixDQUF5QlosTUFBekIsQ0FBdEI7O0FBRUEsVUFBTSxJQUFJYSxLQUFKLGdDQUFOO0FBQ0Q7O0FBRUQsU0FBT2IsTUFBUDtBQUNEIiwiZmlsZSI6InNoYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgbm9ybWFsTWF0cml4TmFtZSA9ICd1Tm9ybWFsTWF0cml4JyxcbiAgICAgIHJvdGF0aW9uTWF0cml4TmFtZSA9ICd1Um90YXRpb25NYXRyaXgnLFxuICAgICAgcG9zaXRpb25NYXRyaXhOYW1lID0gJ3VQb3NpdGlvbk1hdHJpeCcsXG4gICAgICBwZXJzcGVjdGl2ZU1hdHJpeE5hbWUgPSAndVBlcnNwZWN0aXZlTWF0cml4JyxcbiAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSA9ICdhVmVydGV4UG9zaXRpb24nLFxuICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSA9ICdhVmVydGV4Tm9ybWFsJyxcbiAgICAgIGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlID0gYFxuXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke25vcm1hbE1hdHJpeE5hbWV9O1xuXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMzICR7dmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgdmVjMyBhbWJpZW50TGlnaHQgPSB2ZWMzKDAuMywgMC4zLCAwLjMpLFxuICAgICAgICAgICAgIGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgPSB2ZWMzKDEsIDEsIDEpLFxuICAgICAgICAgICAgIGRpcmVjdGlvbmFsVmVjdG9yID0gbm9ybWFsaXplKHZlYzMoMC44NSwgMC44LCAwLjc1KSk7XG4gICAgICAgICAgXG4gICAgICAgIHZlYzMgY2FsY3VsYXRlTGlnaHRpbmcoKSB7XG4gICAgICAgICAgdmVjNCB0cmFuc2Zvcm1lZE5vcm1hbCA9ICR7bm9ybWFsTWF0cml4TmFtZX0gKiB2ZWM0KCR7dmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZX0sIDEuMCk7ICAgICAgICAgICAgXG5cbiAgICAgICAgICBmbG9hdCBkaXJlY3Rpb25hbCA9IG1heChkb3QodHJhbnNmb3JtZWROb3JtYWwueHl6LCBkaXJlY3Rpb25hbFZlY3RvciksIDAuMCk7XG4gICAgICAgICAgXG4gICAgICAgICAgdmVjMyBsaWdodGluZyA9IGFtYmllbnRMaWdodCArIChkaXJlY3Rpb25hbExpZ2h0Q29sb3VyICogZGlyZWN0aW9uYWwpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBsaWdodGluZztcbiAgICAgICAgfVxuXG4gICAgICBgLFxuICAgICAgY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2UgPSBgXG5cbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7cm90YXRpb25NYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cG9zaXRpb25NYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cGVyc3BlY3RpdmVNYXRyaXhOYW1lfTtcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWM0IGNhbGN1bGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICAgIHZlYzQgcG9zaXRpb24gPSAke3BlcnNwZWN0aXZlTWF0cml4TmFtZX0gKiAke3Bvc2l0aW9uTWF0cml4TmFtZX0gKiAke3JvdGF0aW9uTWF0cml4TmFtZX0gKiAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYDtcblxuY2xhc3MgU2hhZGVyIHtcbiAgY29uc3RydWN0b3IocHJvZ3JhbSwgbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgdGhpcy5ub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5yb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBnZXRQcm9ncmFtKCkge1xuICAgIHJldHVybiB0aGlzLnByb2dyYW07XG4gIH1cblxuICBnZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuXG4gICAgcmV0dXJuIHZlcnRleFBvc2l0aW9uQnVmZmVyO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Tm9ybWFsQnVmZmVyKHZlcnRleE5vcm1hbERhdGEsIGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbEJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Tm9ybWFsRGF0YSk7XG5cbiAgICByZXR1cm4gdmVydGV4Tm9ybWFsQnVmZmVyO1xuICB9XG5cbiAgYmluZFZlcnRleE5vcm1hbEJ1ZmZlcih2ZXJ0ZXhOb3JtYWxCdWZmZXIsIGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbENvbXBvbmVudHMgPSAzO1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodmVydGV4Tm9ybWFsQnVmZmVyLCB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkJ1ZmZlciwgY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25Db21wb25lbnRzID0gMztcblxuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHZlcnRleFBvc2l0aW9uQnVmZmVyLCB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVkVSVEVYX1NIQURFUiB9ID0gY29udGV4dCxcbiAgICAgICAgdHlwZSA9IFZFUlRFWF9TSEFERVIsXG4gICAgICAgIHZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcih0eXBlLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgRlJBR01FTlRfU0hBREVSIH0gPSBjb250ZXh0LFxuICAgICAgICB0eXBlID0gRlJBR01FTlRfU0hBREVSLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIodHlwZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5vcm1hbE1hdHJpeE5hbWUpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCByb3RhdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwb3NpdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwZXJzcGVjdGl2ZU1hdHJpeE5hbWUpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICBzaGFkZXIgPSBuZXcgQ2xhc3MocHJvZ3JhbSwgbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBzaGFkZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTaGFkZXIsIHtcbiAgY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2U6IGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlLFxuICBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZTogY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2Vcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNoYWRlcjtcblxuZnVuY3Rpb24gY3JlYXRlU2hhZGVyKHR5cGUsIHNoYWRlclNvdXJjZSwgY29udGV4dCkge1xuICBjb25zdCB7IENPTVBJTEVfU1RBVFVTIH0gPSBjb250ZXh0LFxuICAgICAgICBwbmFtZSA9IENPTVBJTEVfU1RBVFVTLFxuICAgICAgICBzaGFkZXIgPSBjb250ZXh0LmNyZWF0ZVNoYWRlcih0eXBlKTtcblxuICBjb250ZXh0LnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclNvdXJjZSk7XG5cbiAgY29udGV4dC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgY29uc3QgY29tcGlsZVN0YXR1cyA9IGNvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgcG5hbWUpO1xuXG4gIGlmICghY29tcGlsZVN0YXR1cykge1xuICAgIGNvbnN0IHNoYWRlckluZm9Mb2cgPSBjb250ZXh0LmdldFNoYWRlckluZm9Mb2coc2hhZGVyKTtcblxuICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGNyZWF0ZSB0aGUgc2hhZGVyLmApO1xuICB9XG5cbiAgcmV0dXJuIHNoYWRlcjtcbn1cbiJdfQ==