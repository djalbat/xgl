'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

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

    this.vertexPositionData = [];
    this.vertexNormalData = [];
    this.vertexIndexData = [];
  }

  _createClass(Shader, [{
    key: 'getCount',
    value: function getCount() {
      return this.count;
    }
  }, {
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
    key: 'getVertexPositionData',
    value: function getVertexPositionData() {
      return this.vertexPositionData;
    }
  }, {
    key: 'getVertexNormalData',
    value: function getVertexNormalData() {
      return this.vertexNormalData;
    }
  }, {
    key: 'getVertexIndexData',
    value: function getVertexIndexData() {
      return this.vertexIndexData;
    }
  }, {
    key: 'addVertexPositionData',
    value: function addVertexPositionData(vertexPositionData) {
      add(this.vertexPositionData, vertexPositionData);
    }
  }, {
    key: 'addVertexNormalData',
    value: function addVertexNormalData(vertexNormalData) {
      add(this.vertexNormalData, vertexNormalData);
    }
  }, {
    key: 'addVertexIndexData',
    value: function addVertexIndexData(vertexIndexData) {
      add(this.vertexIndexData, vertexIndexData);
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
  }, {
    key: 'setCount',
    value: function setCount(count) {
      this.count = count;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaGFkZXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwibWVyZ2UiLCJhZGQiLCJub3JtYWxNYXRyaXhOYW1lIiwicm90YXRpb25NYXRyaXhOYW1lIiwicG9zaXRpb25NYXRyaXhOYW1lIiwicGVyc3BlY3RpdmVNYXRyaXhOYW1lIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lIiwidmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSIsImNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlIiwiY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2UiLCJTaGFkZXIiLCJwcm9ncmFtIiwiY2FudmFzIiwibm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwicm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsImdldEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24iLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidmVydGV4SW5kZXhEYXRhIiwiY291bnQiLCJ2ZXJ0ZXhQb3NpdGlvbkJ1ZmZlciIsImNyZWF0ZUJ1ZmZlciIsInZlcnRleE5vcm1hbEJ1ZmZlciIsImJpbmRWZXJ0ZXhOb3JtYWxCdWZmZXIiLCJiaW5kVmVydGV4UG9zaXRpb25CdWZmZXIiLCJ2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzIiwiYmluZEJ1ZmZlciIsInZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyIsInZlcnRleFNoYWRlclNvdXJjZSIsImdldENvbnRleHQiLCJWRVJURVhfU0hBREVSIiwiY29udGV4dCIsInR5cGUiLCJ2ZXJ0ZXhTaGFkZXIiLCJjcmVhdGVTaGFkZXIiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsIkZSQUdNRU5UX1NIQURFUiIsIkNsYXNzIiwic2hhZGVyIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyIsInNoYWRlclNvdXJjZSIsIkNPTVBJTEVfU1RBVFVTIiwicG5hbWUiLCJjb21waWxlU2hhZGVyIiwiY29tcGlsZVN0YXR1cyIsImdldFNoYWRlclBhcmFtZXRlciIsInNoYWRlckluZm9Mb2ciLCJnZXRTaGFkZXJJbmZvTG9nIiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRU0sSUFBRUMsY0FBRixHQUFxQkYsU0FBckIsQ0FBRUUsY0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDWUQsY0FEWixDQUNFQyxLQURGO0FBQUEsSUFFQUMsR0FGQSxHQUVNRCxLQUZOLEMsQ0FFYzs7QUFFcEIsSUFBTUUsbUJBQW1CLGVBQXpCO0FBQUEsSUFDTUMscUJBQXFCLGlCQUQzQjtBQUFBLElBRU1DLHFCQUFxQixpQkFGM0I7QUFBQSxJQUdNQyx3QkFBd0Isb0JBSDlCO0FBQUEsSUFJTUMsOEJBQThCLGlCQUpwQztBQUFBLElBS01DLDRCQUE0QixlQUxsQztBQUFBLElBTU1DLHdEQUVpQk4sZ0JBRmpCLG9DQUltQksseUJBSm5CLDRRQVcrQkwsZ0JBWC9CLGdCQVcwREsseUJBWDFELDZRQU5OO0FBQUEsSUEyQk1FLHdEQUVpQk4sa0JBRmpCLGdDQUdpQkMsa0JBSGpCLGdDQUlpQkMscUJBSmpCLDRDQU1tQkMsMkJBTm5CLDJFQVNzQkQscUJBVHRCLFdBU2lERCxrQkFUakQsV0FTeUVELGtCQVR6RSxXQVNpR0csMkJBVGpHLDJFQTNCTjs7SUEyQ01JLE07QUFDSixrQkFBWUMsT0FBWixFQUFxQkMsTUFBckIsRUFBNkI7QUFBQTs7QUFDM0IsU0FBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0UsMkJBQUwsR0FBbUNELE9BQU9FLGtCQUFQLENBQTBCSCxPQUExQixF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Y29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgbWVyZ2UgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY29uc3Qgbm9ybWFsTWF0cml4TmFtZSA9ICd1Tm9ybWFsTWF0cml4JyxcbiAgICAgIHJvdGF0aW9uTWF0cml4TmFtZSA9ICd1Um90YXRpb25NYXRyaXgnLFxuICAgICAgcG9zaXRpb25NYXRyaXhOYW1lID0gJ3VQb3NpdGlvbk1hdHJpeCcsXG4gICAgICBwZXJzcGVjdGl2ZU1hdHJpeE5hbWUgPSAndVBlcnNwZWN0aXZlTWF0cml4JyxcbiAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSA9ICdhVmVydGV4UG9zaXRpb24nLFxuICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSA9ICdhVmVydGV4Tm9ybWFsJyxcbiAgICAgIGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlID0gYFxuXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke25vcm1hbE1hdHJpeE5hbWV9O1xuXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMzICR7dmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgdmVjMyBhbWJpZW50TGlnaHQgPSB2ZWMzKDAuMywgMC4zLCAwLjMpLFxuICAgICAgICAgICAgIGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgPSB2ZWMzKDEsIDEsIDEpLFxuICAgICAgICAgICAgIGRpcmVjdGlvbmFsVmVjdG9yID0gbm9ybWFsaXplKHZlYzMoMC44NSwgMC44LCAwLjc1KSk7XG4gICAgICAgICAgXG4gICAgICAgIHZlYzMgY2FsY3VsYXRlTGlnaHRpbmcoKSB7XG4gICAgICAgICAgdmVjNCB0cmFuc2Zvcm1lZE5vcm1hbCA9ICR7bm9ybWFsTWF0cml4TmFtZX0gKiB2ZWM0KCR7dmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZX0sIDEuMCk7ICAgICAgICAgICAgXG5cbiAgICAgICAgICBmbG9hdCBkaXJlY3Rpb25hbCA9IG1heChkb3QodHJhbnNmb3JtZWROb3JtYWwueHl6LCBkaXJlY3Rpb25hbFZlY3RvciksIDAuMCk7XG4gICAgICAgICAgXG4gICAgICAgICAgdmVjMyBsaWdodGluZyA9IGFtYmllbnRMaWdodCArIChkaXJlY3Rpb25hbExpZ2h0Q29sb3VyICogZGlyZWN0aW9uYWwpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBsaWdodGluZztcbiAgICAgICAgfVxuXG4gICAgICBgLFxuICAgICAgY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2UgPSBgXG5cbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7cm90YXRpb25NYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cG9zaXRpb25NYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cGVyc3BlY3RpdmVNYXRyaXhOYW1lfTtcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWM0IGNhbGN1bGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICAgIHZlYzQgcG9zaXRpb24gPSAke3BlcnNwZWN0aXZlTWF0cml4TmFtZX0gKiAke3Bvc2l0aW9uTWF0cml4TmFtZX0gKiAke3JvdGF0aW9uTWF0cml4TmFtZX0gKiAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYDtcblxuY2xhc3MgU2hhZGVyIHtcbiAgY29uc3RydWN0b3IocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICB0aGlzLm5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbm9ybWFsTWF0cml4TmFtZSk7XG4gICAgdGhpcy5yb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcm90YXRpb25NYXRyaXhOYW1lKTtcbiAgICB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwb3NpdGlvbk1hdHJpeE5hbWUpO1xuICAgIHRoaXMucGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHBlcnNwZWN0aXZlTWF0cml4TmFtZSk7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSk7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lKTtcblxuICAgIHRoaXMudmVydGV4UG9zaXRpb25EYXRhID0gW107XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxEYXRhID0gW107XG4gICAgdGhpcy52ZXJ0ZXhJbmRleERhdGEgPSBbXTtcbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvdW50O1xuICB9XG5cbiAgZ2V0UHJvZ3JhbSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9ncmFtO1xuICB9XG5cbiAgZ2V0Tm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFZlcnRleFBvc2l0aW9uRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhOb3JtYWxEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbERhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhJbmRleERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4SW5kZXhEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4UG9zaXRpb25EYXRhKHZlcnRleFBvc2l0aW9uRGF0YSkge1xuICAgIGFkZCh0aGlzLnZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4UG9zaXRpb25EYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleE5vcm1hbERhdGEodmVydGV4Tm9ybWFsRGF0YSkge1xuICAgIGFkZCh0aGlzLnZlcnRleE5vcm1hbERhdGEsIHZlcnRleE5vcm1hbERhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4SW5kZXhEYXRhKHZlcnRleEluZGV4RGF0YSkge1xuICAgIGFkZCh0aGlzLnZlcnRleEluZGV4RGF0YSwgdmVydGV4SW5kZXhEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleFBvc2l0aW9uQnVmZmVyKHZlcnRleFBvc2l0aW9uRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4UG9zaXRpb25EYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleE5vcm1hbEJ1ZmZlcih2ZXJ0ZXhOb3JtYWxEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleE5vcm1hbEJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Tm9ybWFsRGF0YSk7XG4gIH1cblxuICBiaW5kKGNhbnZhcykge1xuICAgIHRoaXMuYmluZFZlcnRleE5vcm1hbEJ1ZmZlcihjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleFBvc2l0aW9uQnVmZmVyKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kVmVydGV4Tm9ybWFsQnVmZmVyKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbENvbXBvbmVudHMgPSAzO1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhOb3JtYWxCdWZmZXIsIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbENvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleFBvc2l0aW9uQnVmZmVyKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyA9IDM7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleFBvc2l0aW9uQnVmZmVyLCB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyk7XG4gIH1cblxuICBzZXRDb3VudChjb3VudCkge1xuICAgIHRoaXMuY291bnQgPSBjb3VudDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB7IFZFUlRFWF9TSEFERVIgfSA9IGNvbnRleHQsXG4gICAgICAgICAgdHlwZSA9IFZFUlRFWF9TSEFERVIsXG4gICAgICAgICAgdmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKHR5cGUsIHZlcnRleFNoYWRlclNvdXJjZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmVydGV4U2hhZGVyO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB7IEZSQUdNRU5UX1NIQURFUiB9ID0gY29udGV4dCxcbiAgICAgICAgICB0eXBlID0gRlJBR01FTlRfU0hBREVSLFxuICAgICAgICAgIHZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcih0eXBlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmVydGV4U2hhZGVyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9ncmFtKENsYXNzLCBwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCBzaGFkZXIgPSBuZXcgQ2xhc3MocHJvZ3JhbSwgY2FudmFzKTtcblxuICAgIHJldHVybiBzaGFkZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTaGFkZXIsIHtcbiAgY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2U6IGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlLFxuICBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZTogY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2Vcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNoYWRlcjtcblxuZnVuY3Rpb24gY3JlYXRlU2hhZGVyKHR5cGUsIHNoYWRlclNvdXJjZSwgY29udGV4dCkge1xuICBjb25zdCB7IENPTVBJTEVfU1RBVFVTIH0gPSBjb250ZXh0LFxuICAgICAgICBwbmFtZSA9IENPTVBJTEVfU1RBVFVTLFxuICAgICAgICBzaGFkZXIgPSBjb250ZXh0LmNyZWF0ZVNoYWRlcih0eXBlKTtcblxuICBjb250ZXh0LnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclNvdXJjZSk7XG5cbiAgY29udGV4dC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgY29uc3QgY29tcGlsZVN0YXR1cyA9IGNvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgcG5hbWUpO1xuXG4gIGlmICghY29tcGlsZVN0YXR1cykge1xuICAgIGNvbnN0IHNoYWRlckluZm9Mb2cgPSBjb250ZXh0LmdldFNoYWRlckluZm9Mb2coc2hhZGVyKTtcblxuICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGNyZWF0ZSB0aGUgc2hhZGVyLmApO1xuICB9XG5cbiAgcmV0dXJuIHNoYWRlcjtcbn1cbiJdfQ==