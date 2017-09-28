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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaGFkZXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwibWVyZ2UiLCJhZGQiLCJub3JtYWxNYXRyaXhOYW1lIiwicm90YXRpb25NYXRyaXhOYW1lIiwicG9zaXRpb25NYXRyaXhOYW1lIiwicGVyc3BlY3RpdmVNYXRyaXhOYW1lIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lIiwidmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSIsImNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlIiwiY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2UiLCJTaGFkZXIiLCJwcm9ncmFtIiwiY2FudmFzIiwibm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwicm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsImdldEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24iLCJjb3VudCIsInZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleFBvc2l0aW9uQnVmZmVyIiwiY3JlYXRlQnVmZmVyIiwidmVydGV4Tm9ybWFsRGF0YSIsInZlcnRleE5vcm1hbEJ1ZmZlciIsImJpbmRWZXJ0ZXhOb3JtYWxCdWZmZXIiLCJiaW5kVmVydGV4UG9zaXRpb25CdWZmZXIiLCJ2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzIiwiYmluZEJ1ZmZlciIsInZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyIsInZlcnRleFNoYWRlclNvdXJjZSIsImdldENvbnRleHQiLCJWRVJURVhfU0hBREVSIiwiY29udGV4dCIsInR5cGUiLCJ2ZXJ0ZXhTaGFkZXIiLCJjcmVhdGVTaGFkZXIiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsIkZSQUdNRU5UX1NIQURFUiIsIkNsYXNzIiwic2hhZGVyIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyIsInNoYWRlclNvdXJjZSIsIkNPTVBJTEVfU1RBVFVTIiwicG5hbWUiLCJjb21waWxlU2hhZGVyIiwiY29tcGlsZVN0YXR1cyIsImdldFNoYWRlclBhcmFtZXRlciIsInNoYWRlckluZm9Mb2ciLCJnZXRTaGFkZXJJbmZvTG9nIiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRU0sSUFBRUMsY0FBRixHQUFxQkYsU0FBckIsQ0FBRUUsY0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDWUQsY0FEWixDQUNFQyxLQURGO0FBQUEsSUFFQUMsR0FGQSxHQUVNRCxLQUZOLEMsQ0FFYzs7QUFFcEIsSUFBTUUsbUJBQW1CLGVBQXpCO0FBQUEsSUFDTUMscUJBQXFCLGlCQUQzQjtBQUFBLElBRU1DLHFCQUFxQixpQkFGM0I7QUFBQSxJQUdNQyx3QkFBd0Isb0JBSDlCO0FBQUEsSUFJTUMsOEJBQThCLGlCQUpwQztBQUFBLElBS01DLDRCQUE0QixlQUxsQztBQUFBLElBTU1DLHdEQUVpQk4sZ0JBRmpCLG9DQUltQksseUJBSm5CLDRRQVcrQkwsZ0JBWC9CLGdCQVcwREsseUJBWDFELDZRQU5OO0FBQUEsSUEyQk1FLHdEQUVpQk4sa0JBRmpCLGdDQUdpQkMsa0JBSGpCLGdDQUlpQkMscUJBSmpCLDRDQU1tQkMsMkJBTm5CLDJFQVNzQkQscUJBVHRCLFdBU2lERCxrQkFUakQsV0FTeUVELGtCQVR6RSxXQVNpR0csMkJBVGpHLDJFQTNCTjs7SUEyQ01JLE07QUFDSixrQkFBWUMsT0FBWixFQUFxQkMsTUFBckIsRUFBNkI7QUFBQTs7QUFDM0IsU0FBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0UsMkJBQUwsR0FBbUNELE9BQU9FLGtCQUFQLENBQTBCSCxPQUExQixFQUFtQ1QsZ0JBQW5DLENBQW5D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QkYsSUFBdEIsRUFBNEJXLFlBQTVCLEVBQTBDWixPQUExQyxFQUFtRDtBQUMzQyxNQUFFYSxjQUFGLEdBQXFCYixPQUFyQixDQUFFYSxjQUFGO0FBQUEsTUFDQUMsS0FEQSxHQUNRRCxjQURSO0FBQUEsTUFFQU4sTUFGQSxHQUVTUCxRQUFRRyxZQUFSLENBQXFCRixJQUFyQixDQUZUOzs7QUFJTkQsVUFBUVksWUFBUixDQUFxQkwsTUFBckIsRUFBNkJLLFlBQTdCOztBQUVBWixVQUFRZSxhQUFSLENBQXNCUixNQUF0Qjs7QUFFQSxNQUFNUyxnQkFBZ0JoQixRQUFRaUIsa0JBQVIsQ0FBMkJWLE1BQTNCLEVBQW1DTyxLQUFuQyxDQUF0Qjs7QUFFQSxNQUFJLENBQUNFLGFBQUwsRUFBb0I7QUFDbEIsUUFBTUUsZ0JBQWdCbEIsUUFBUW1CLGdCQUFSLENBQXlCWixNQUF6QixDQUF0Qjs7QUFFQSxVQUFNLElBQUlhLEtBQUosZ0NBQU47QUFDRDs7QUFFRCxTQUFPYixNQUFQO0FBQ0QiLCJmaWxlIjoic2hhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBtZXJnZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICBhZGQgPSBtZXJnZTsgIC8vL1xuXG5jb25zdCBub3JtYWxNYXRyaXhOYW1lID0gJ3VOb3JtYWxNYXRyaXgnLFxuICAgICAgcm90YXRpb25NYXRyaXhOYW1lID0gJ3VSb3RhdGlvbk1hdHJpeCcsXG4gICAgICBwb3NpdGlvbk1hdHJpeE5hbWUgPSAndVBvc2l0aW9uTWF0cml4JyxcbiAgICAgIHBlcnNwZWN0aXZlTWF0cml4TmFtZSA9ICd1UGVyc3BlY3RpdmVNYXRyaXgnLFxuICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lID0gJ2FWZXJ0ZXhQb3NpdGlvbicsXG4gICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lID0gJ2FWZXJ0ZXhOb3JtYWwnLFxuICAgICAgY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2UgPSBgXG5cbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7bm9ybWFsTWF0cml4TmFtZX07XG5cbiAgICAgICAgYXR0cmlidXRlIHZlYzMgJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWMzIGFtYmllbnRMaWdodCA9IHZlYzMoMC4zLCAwLjMsIDAuMyksXG4gICAgICAgICAgICAgZGlyZWN0aW9uYWxMaWdodENvbG91ciA9IHZlYzMoMSwgMSwgMSksXG4gICAgICAgICAgICAgZGlyZWN0aW9uYWxWZWN0b3IgPSBub3JtYWxpemUodmVjMygwLjg1LCAwLjgsIDAuNzUpKTtcbiAgICAgICAgICBcbiAgICAgICAgdmVjMyBjYWxjdWxhdGVMaWdodGluZygpIHtcbiAgICAgICAgICB2ZWM0IHRyYW5zZm9ybWVkTm9ybWFsID0gJHtub3JtYWxNYXRyaXhOYW1lfSAqIHZlYzQoJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfSwgMS4wKTsgICAgICAgICAgICBcblxuICAgICAgICAgIGZsb2F0IGRpcmVjdGlvbmFsID0gbWF4KGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSwgMC4wKTtcbiAgICAgICAgICBcbiAgICAgICAgICB2ZWMzIGxpZ2h0aW5nID0gYW1iaWVudExpZ2h0ICsgKGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgKiBkaXJlY3Rpb25hbCk7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIGxpZ2h0aW5nO1xuICAgICAgICB9XG5cbiAgICAgIGAsXG4gICAgICBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZSA9IGBcblxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtyb3RhdGlvbk1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwb3NpdGlvbk1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwZXJzcGVjdGl2ZU1hdHJpeE5hbWV9O1xuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzQgY2FsY3VsYXRlUG9zaXRpb24oKSB7XG4gICAgICAgICAgdmVjNCBwb3NpdGlvbiA9ICR7cGVyc3BlY3RpdmVNYXRyaXhOYW1lfSAqICR7cG9zaXRpb25NYXRyaXhOYW1lfSAqICR7cm90YXRpb25NYXRyaXhOYW1lfSAqICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgO1xuXG5jbGFzcyBTaGFkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtLCBjYW52YXMpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgIHRoaXMubm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBub3JtYWxNYXRyaXhOYW1lKTtcbiAgICB0aGlzLnJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCByb3RhdGlvbk1hdHJpeE5hbWUpO1xuICAgIHRoaXMucG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHBvc2l0aW9uTWF0cml4TmFtZSk7XG4gICAgdGhpcy5wZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcGVyc3BlY3RpdmVNYXRyaXhOYW1lKTtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lKTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUpO1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY291bnQ7XG4gIH1cblxuICBnZXRQcm9ncmFtKCkge1xuICAgIHJldHVybiB0aGlzLnByb2dyYW07XG4gIH1cblxuICBnZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4UG9zaXRpb25CdWZmZXIodmVydGV4UG9zaXRpb25EYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Tm9ybWFsQnVmZmVyKHZlcnRleE5vcm1hbERhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Tm9ybWFsQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhOb3JtYWxEYXRhKTtcbiAgfVxuXG4gIGJpbmQoY2FudmFzKSB7XG4gICAgdGhpcy5iaW5kVmVydGV4Tm9ybWFsQnVmZmVyKGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4UG9zaXRpb25CdWZmZXIoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhOb3JtYWxCdWZmZXIoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyA9IDM7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleE5vcm1hbEJ1ZmZlciwgdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4UG9zaXRpb25CdWZmZXIoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25Db21wb25lbnRzID0gMztcblxuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4UG9zaXRpb25CdWZmZXIsIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25Db21wb25lbnRzKTtcbiAgfVxuXG4gIHNldENvdW50KGNvdW50KSB7XG4gICAgdGhpcy5jb3VudCA9IGNvdW50O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHsgVkVSVEVYX1NIQURFUiB9ID0gY29udGV4dCxcbiAgICAgICAgICB0eXBlID0gVkVSVEVYX1NIQURFUixcbiAgICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIodHlwZSwgdmVydGV4U2hhZGVyU291cmNlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHsgRlJBR01FTlRfU0hBREVSIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHR5cGUgPSBGUkFHTUVOVF9TSEFERVIsXG4gICAgICAgICAgdmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKHR5cGUsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2dyYW0oQ2xhc3MsIHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHNoYWRlciA9IG5ldyBDbGFzcyhwcm9ncmFtLCBjYW52YXMpO1xuXG4gICAgcmV0dXJuIHNoYWRlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNoYWRlciwge1xuICBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZTogY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2UsXG4gIGNhbGN1bGF0ZVBvc2l0aW9uU291cmNlOiBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2hhZGVyO1xuXG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIodHlwZSwgc2hhZGVyU291cmNlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ09NUElMRV9TVEFUVVMgfSA9IGNvbnRleHQsXG4gICAgICAgIHBuYW1lID0gQ09NUElMRV9TVEFUVVMsXG4gICAgICAgIHNoYWRlciA9IGNvbnRleHQuY3JlYXRlU2hhZGVyKHR5cGUpO1xuXG4gIGNvbnRleHQuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTtcblxuICBjb250ZXh0LmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICBjb25zdCBjb21waWxlU3RhdHVzID0gY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBwbmFtZSk7XG5cbiAgaWYgKCFjb21waWxlU3RhdHVzKSB7XG4gICAgY29uc3Qgc2hhZGVySW5mb0xvZyA9IGNvbnRleHQuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xuXG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIHRoZSBzaGFkZXIuYCk7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuIl19