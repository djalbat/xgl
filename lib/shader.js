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
  function Shader(program, canvas) {
    _classCallCheck(this, Shader);

    this.program = program;
    this.normalMatrixUniformLocation = canvas.getUniformLocation(program, normalMatrixName);
    this.rotationMatrixUniformLocation = canvas.getUniformLocation(program, rotationMatrixName);
    this.positionMatrixUniformLocation = canvas.getUniformLocation(program, positionMatrixName);
    this.perspectiveMatrixUniformLocation = canvas.getUniformLocation(program, perspectiveMatrixName);
    this.vertexPositionAttributeLocation = canvas.getAttributeLocation(program, vertexPositionAttributeName);
    this.vertexNormalAttributeLocation = canvas.getAttributeLocation(program, vertexNormalAttributeName);
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
    key: 'createVertexPositionBuffer',
    value: function createVertexPositionBuffer(vertexPositionData, canvas) {
      this.vertexPositionBuffer = canvas.createBuffer(vertexPositionData);
    }
  }, {
    key: 'createVertexNormalBuffer',
    value: function createVertexNormalBuffer(vertexNormalData, canvas) {
      this.vertexNormalBuffer = canvas.createBuffer(vertexNormalData);
    }
  }, {
    key: 'bind',
    value: function bind(canvas) {
      this.bindVertexNormalBuffer(canvas);
      this.bindVertexPositionBuffer(canvas);
    }
  }, {
    key: 'bindVertexNormalBuffer',
    value: function bindVertexNormalBuffer(canvas) {
      var vertexNormalComponents = 3;

      canvas.bindBuffer(this.vertexNormalBuffer, this.vertexNormalAttributeLocation, vertexNormalComponents);
    }
  }, {
    key: 'bindVertexPositionBuffer',
    value: function bindVertexPositionBuffer(canvas) {
      var vertexPositionComponents = 3;

      canvas.bindBuffer(this.vertexPositionBuffer, this.vertexPositionAttributeLocation, vertexPositionComponents);
    }
  }], [{
    key: 'createVertexShader',
    value: function createVertexShader(vertexShaderSource, canvas) {
      var context = canvas.getContext(),
          VERTEX_SHADER = context.VERTEX_SHADER,
          type = VERTEX_SHADER,
          vertexShader = createShader(type, vertexShaderSource, context);


      return vertexShader;
    }
  }, {
    key: 'createFragmentShader',
    value: function createFragmentShader(fragmentShaderSource, canvas) {
      var context = canvas.getContext(),
          FRAGMENT_SHADER = context.FRAGMENT_SHADER,
          type = FRAGMENT_SHADER,
          vertexShader = createShader(type, fragmentShaderSource, context);


      return vertexShader;
    }
  }, {
    key: 'fromProgram',
    value: function fromProgram(Class, program, canvas) {
      var shader = new Class(program, canvas);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaGFkZXIuanMiXSwibmFtZXMiOlsibm9ybWFsTWF0cml4TmFtZSIsInJvdGF0aW9uTWF0cml4TmFtZSIsInBvc2l0aW9uTWF0cml4TmFtZSIsInBlcnNwZWN0aXZlTWF0cml4TmFtZSIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUiLCJjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSIsImNhbGN1bGF0ZVBvc2l0aW9uU291cmNlIiwiU2hhZGVyIiwicHJvZ3JhbSIsImNhbnZhcyIsIm5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFVuaWZvcm1Mb2NhdGlvbiIsInJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJnZXRBdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4UG9zaXRpb25EYXRhIiwidmVydGV4UG9zaXRpb25CdWZmZXIiLCJjcmVhdGVCdWZmZXIiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidmVydGV4Tm9ybWFsQnVmZmVyIiwiYmluZFZlcnRleE5vcm1hbEJ1ZmZlciIsImJpbmRWZXJ0ZXhQb3NpdGlvbkJ1ZmZlciIsInZlcnRleE5vcm1hbENvbXBvbmVudHMiLCJiaW5kQnVmZmVyIiwidmVydGV4UG9zaXRpb25Db21wb25lbnRzIiwidmVydGV4U2hhZGVyU291cmNlIiwiZ2V0Q29udGV4dCIsIlZFUlRFWF9TSEFERVIiLCJjb250ZXh0IiwidHlwZSIsInZlcnRleFNoYWRlciIsImNyZWF0ZVNoYWRlciIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiRlJBR01FTlRfU0hBREVSIiwiQ2xhc3MiLCJzaGFkZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIiwic2hhZGVyU291cmNlIiwiQ09NUElMRV9TVEFUVVMiLCJwbmFtZSIsImNvbXBpbGVTaGFkZXIiLCJjb21waWxlU3RhdHVzIiwiZ2V0U2hhZGVyUGFyYW1ldGVyIiwic2hhZGVySW5mb0xvZyIsImdldFNoYWRlckluZm9Mb2ciLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLG1CQUFtQixlQUF6QjtBQUFBLElBQ01DLHFCQUFxQixpQkFEM0I7QUFBQSxJQUVNQyxxQkFBcUIsaUJBRjNCO0FBQUEsSUFHTUMsd0JBQXdCLG9CQUg5QjtBQUFBLElBSU1DLDhCQUE4QixpQkFKcEM7QUFBQSxJQUtNQyw0QkFBNEIsZUFMbEM7QUFBQSxJQU1NQyx3REFFaUJOLGdCQUZqQixvQ0FJbUJLLHlCQUpuQiw0UUFXK0JMLGdCQVgvQixnQkFXMERLLHlCQVgxRCw2UUFOTjtBQUFBLElBMkJNRSx3REFFaUJOLGtCQUZqQixnQ0FHaUJDLGtCQUhqQixnQ0FJaUJDLHFCQUpqQiw0Q0FNbUJDLDJCQU5uQiwyRUFTc0JELHFCQVR0QixXQVNpREQsa0JBVGpELFdBU3lFRCxrQkFUekUsV0FTaUdHLDJCQVRqRywyRUEzQk47O0lBMkNNSSxNO0FBQ0osa0JBQVlDLE9BQVosRUFBcUJDLE1BQXJCLEVBQTZCO0FBQUE7O0FBQzNCLFNBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtFLDJCQUFMLEdBQW1DRCxPQUFPRSxrQkFBUCxDQUEwQkgsT0FBMUIsRUFBbUNULGdCQUFuQyxDQUFuQztBQUNBLFNBQUthLDZCQUFMLEdBQXFDSCxPQUFPRSxrQkFBUCxDQUEwQkgsT0FBMUIsRUFBbUNSLGtCQUFuQyxDQUFyQztBQUNBLFNBQUthLDZCQUFMLEdBQXFDSixPQUFPRSxrQkFBUCxDQUEwQkgsT0FBMUIsRUFBbUNQLGtCQUFuQyxDQUFyQztBQUNBLFNBQUthLGdDQUFMLEdBQXdDTCxPQUFPRSxrQkFBUCxDQUEwQkgsT0FBMUIsRUFBbUNOLHFCQUFuQyxDQUF4QztB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bkMsQ0FBdEI7O0FBRUEsTUFBSSxDQUFDRSxhQUFMLEVBQW9CO0FBQ2xCLFFBQU1FLGdCQUFnQmxCLFFBQVFtQixnQkFBUixDQUF5QlosTUFBekIsQ0FBdEI7O0FBRUEsVUFBTSxJQUFJYSxLQUFKLGdDQUFOO0FBQ0Q7O0FBRUQsU0FBT2IsTUFBUDtBQUNEIiwiZmlsZSI6InNoYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgbm9ybWFsTWF0cml4TmFtZSA9ICd1Tm9ybWFsTWF0cml4JyxcbiAgICAgIHJvdGF0aW9uTWF0cml4TmFtZSA9ICd1Um90YXRpb25NYXRyaXgnLFxuICAgICAgcG9zaXRpb25NYXRyaXhOYW1lID0gJ3VQb3NpdGlvbk1hdHJpeCcsXG4gICAgICBwZXJzcGVjdGl2ZU1hdHJpeE5hbWUgPSAndVBlcnNwZWN0aXZlTWF0cml4JyxcbiAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSA9ICdhVmVydGV4UG9zaXRpb24nLFxuICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSA9ICdhVmVydGV4Tm9ybWFsJyxcbiAgICAgIGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlID0gYFxuXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke25vcm1hbE1hdHJpeE5hbWV9O1xuXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMzICR7dmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgdmVjMyBhbWJpZW50TGlnaHQgPSB2ZWMzKDAuMywgMC4zLCAwLjMpLFxuICAgICAgICAgICAgIGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgPSB2ZWMzKDEsIDEsIDEpLFxuICAgICAgICAgICAgIGRpcmVjdGlvbmFsVmVjdG9yID0gbm9ybWFsaXplKHZlYzMoMC44NSwgMC44LCAwLjc1KSk7XG4gICAgICAgICAgXG4gICAgICAgIHZlYzMgY2FsY3VsYXRlTGlnaHRpbmcoKSB7XG4gICAgICAgICAgdmVjNCB0cmFuc2Zvcm1lZE5vcm1hbCA9ICR7bm9ybWFsTWF0cml4TmFtZX0gKiB2ZWM0KCR7dmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZX0sIDEuMCk7ICAgICAgICAgICAgXG5cbiAgICAgICAgICBmbG9hdCBkaXJlY3Rpb25hbCA9IG1heChkb3QodHJhbnNmb3JtZWROb3JtYWwueHl6LCBkaXJlY3Rpb25hbFZlY3RvciksIDAuMCk7XG4gICAgICAgICAgXG4gICAgICAgICAgdmVjMyBsaWdodGluZyA9IGFtYmllbnRMaWdodCArIChkaXJlY3Rpb25hbExpZ2h0Q29sb3VyICogZGlyZWN0aW9uYWwpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBsaWdodGluZztcbiAgICAgICAgfVxuXG4gICAgICBgLFxuICAgICAgY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2UgPSBgXG5cbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7cm90YXRpb25NYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cG9zaXRpb25NYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cGVyc3BlY3RpdmVNYXRyaXhOYW1lfTtcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWM0IGNhbGN1bGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICAgIHZlYzQgcG9zaXRpb24gPSAke3BlcnNwZWN0aXZlTWF0cml4TmFtZX0gKiAke3Bvc2l0aW9uTWF0cml4TmFtZX0gKiAke3JvdGF0aW9uTWF0cml4TmFtZX0gKiAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYDtcblxuY2xhc3MgU2hhZGVyIHtcbiAgY29uc3RydWN0b3IocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICB0aGlzLm5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbm9ybWFsTWF0cml4TmFtZSk7XG4gICAgdGhpcy5yb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcm90YXRpb25NYXRyaXhOYW1lKTtcbiAgICB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwb3NpdGlvbk1hdHJpeE5hbWUpO1xuICAgIHRoaXMucGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHBlcnNwZWN0aXZlTWF0cml4TmFtZSk7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSk7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lKTtcbiAgfVxuXG4gIGdldFByb2dyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZ3JhbTtcbiAgfVxuXG4gIGdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25CdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleFBvc2l0aW9uRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhOb3JtYWxCdWZmZXIodmVydGV4Tm9ybWFsRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleE5vcm1hbERhdGEpO1xuICB9XG5cbiAgYmluZChjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhOb3JtYWxCdWZmZXIoY2FudmFzKTtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihjYW52YXMpO1xuICB9XG5cbiAgYmluZFZlcnRleE5vcm1hbEJ1ZmZlcihjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzID0gMztcblxuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Tm9ybWFsQnVmZmVyLCB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMgPSAzO1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhQb3NpdGlvbkJ1ZmZlciwgdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHsgVkVSVEVYX1NIQURFUiB9ID0gY29udGV4dCxcbiAgICAgICAgICB0eXBlID0gVkVSVEVYX1NIQURFUixcbiAgICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIodHlwZSwgdmVydGV4U2hhZGVyU291cmNlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHsgRlJBR01FTlRfU0hBREVSIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHR5cGUgPSBGUkFHTUVOVF9TSEFERVIsXG4gICAgICAgICAgdmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKHR5cGUsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2dyYW0oQ2xhc3MsIHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHNoYWRlciA9IG5ldyBDbGFzcyhwcm9ncmFtLCBjYW52YXMpO1xuXG4gICAgcmV0dXJuIHNoYWRlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNoYWRlciwge1xuICBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZTogY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2UsXG4gIGNhbGN1bGF0ZVBvc2l0aW9uU291cmNlOiBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2hhZGVyO1xuXG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIodHlwZSwgc2hhZGVyU291cmNlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ09NUElMRV9TVEFUVVMgfSA9IGNvbnRleHQsXG4gICAgICAgIHBuYW1lID0gQ09NUElMRV9TVEFUVVMsXG4gICAgICAgIHNoYWRlciA9IGNvbnRleHQuY3JlYXRlU2hhZGVyKHR5cGUpO1xuXG4gIGNvbnRleHQuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTtcblxuICBjb250ZXh0LmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICBjb25zdCBjb21waWxlU3RhdHVzID0gY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBwbmFtZSk7XG5cbiAgaWYgKCFjb21waWxlU3RhdHVzKSB7XG4gICAgY29uc3Qgc2hhZGVySW5mb0xvZyA9IGNvbnRleHQuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xuXG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIHRoZSBzaGFkZXIuYCk7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuIl19