'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
    key: 'getCount',
    value: function getCount() {
      var vertexIndexDataLength = this.vertexIndexData.length,
          count = vertexIndexDataLength; ///

      return count;
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
      var offset = Math.max.apply(Math, [-1].concat(_toConsumableArray(this.vertexIndexData))) + 1; ///

      vertexIndexData = vertexIndexData.map(function (vertexIndex) {
        return vertexIndex + offset;
      });

      add(this.vertexIndexData, vertexIndexData);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      this.createVertexPositionBuffer(canvas);
      this.createVertexNormalBuffer(canvas);
      this.createVertexIndexElementBuffer(canvas);
    }
  }, {
    key: 'createVertexPositionBuffer',
    value: function createVertexPositionBuffer(canvas) {
      this.vertexPositionBuffer = canvas.createBuffer(this.vertexPositionData);
    }
  }, {
    key: 'createVertexNormalBuffer',
    value: function createVertexNormalBuffer(canvas) {
      this.vertexNormalBuffer = canvas.createBuffer(this.vertexNormalData);
    }
  }, {
    key: 'createVertexIndexElementBuffer',
    value: function createVertexIndexElementBuffer(canvas) {
      this.vertexIndexElementBuffer = canvas.createElementBuffer(this.vertexIndexData);
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers(canvas) {
      this.bindVertexNormalBuffer(canvas);
      this.bindVertexPositionBuffer(canvas);
      this.bindVertexIndexElementBuffer(canvas);
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
    key: 'bindVertexIndexElementBuffer',
    value: function bindVertexIndexElementBuffer(canvas) {
      canvas.bindElementBuffer(this.vertexIndexElementBuffer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaGFkZXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwibWVyZ2UiLCJhZGQiLCJub3JtYWxNYXRyaXhOYW1lIiwicm90YXRpb25NYXRyaXhOYW1lIiwicG9zaXRpb25NYXRyaXhOYW1lIiwicGVyc3BlY3RpdmVNYXRyaXhOYW1lIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lIiwidmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSIsImNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlIiwiY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2UiLCJTaGFkZXIiLCJwcm9ncmFtIiwiY2FudmFzIiwibm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwicm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsImdldEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24iLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidmVydGV4SW5kZXhEYXRhIiwidmVydGV4SW5kZXhEYXRhTGVuZ3RoIiwibGVuZ3RoIiwiY291bnQiLCJvZmZzZXQiLCJNYXRoIiwibWF4IiwibWFwIiwidmVydGV4SW5kZXgiLCJjcmVhdGVWZXJ0ZXhQb3NpdGlvbkJ1ZmZlciIsImNyZWF0ZVZlcnRleE5vcm1hbEJ1ZmZlciIsImNyZWF0ZVZlcnRleEluZGV4RWxlbWVudEJ1ZmZlciIsInZlcnRleFBvc2l0aW9uQnVmZmVyIiwiY3JlYXRlQnVmZmVyIiwidmVydGV4Tm9ybWFsQnVmZmVyIiwidmVydGV4SW5kZXhFbGVtZW50QnVmZmVyIiwiY3JlYXRlRWxlbWVudEJ1ZmZlciIsImJpbmRWZXJ0ZXhOb3JtYWxCdWZmZXIiLCJiaW5kVmVydGV4UG9zaXRpb25CdWZmZXIiLCJiaW5kVmVydGV4SW5kZXhFbGVtZW50QnVmZmVyIiwidmVydGV4Tm9ybWFsQ29tcG9uZW50cyIsImJpbmRCdWZmZXIiLCJ2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMiLCJiaW5kRWxlbWVudEJ1ZmZlciIsInZlcnRleFNoYWRlclNvdXJjZSIsImdldENvbnRleHQiLCJWRVJURVhfU0hBREVSIiwiY29udGV4dCIsInR5cGUiLCJ2ZXJ0ZXhTaGFkZXIiLCJjcmVhdGVTaGFkZXIiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsIkZSQUdNRU5UX1NIQURFUiIsIkNsYXNzIiwic2hhZGVyIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyIsInNoYWRlclNvdXJjZSIsIkNPTVBJTEVfU1RBVFVTIiwicG5hbWUiLCJjb21waWxlU2hhZGVyIiwiY29tcGlsZVN0YXR1cyIsImdldFNoYWRlclBhcmFtZXRlciIsInNoYWRlckluZm9Mb2ciLCJnZXRTaGFkZXJJbmZvTG9nIiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFTSxJQUFFQyxjQUFGLEdBQXFCRixTQUFyQixDQUFFRSxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZRCxjQURaLENBQ0VDLEtBREY7QUFBQSxJQUVBQyxHQUZBLEdBRU1ELEtBRk4sQyxDQUVjOztBQUVwQixJQUFNRSxtQkFBbUIsZUFBekI7QUFBQSxJQUNNQyxxQkFBcUIsaUJBRDNCO0FBQUEsSUFFTUMscUJBQXFCLGlCQUYzQjtBQUFBLElBR01DLHdCQUF3QixvQkFIOUI7QUFBQSxJQUlNQyw4QkFBOEIsaUJBSnBDO0FBQUEsSUFLTUMsNEJBQTRCLGVBTGxDO0FBQUEsSUFNTUMsd0RBRWlCTixnQkFGakIsb0NBSW1CSyx5QkFKbkIsNFFBVytCTCxnQkFYL0IsZ0JBVzBESyx5QkFYMUQsNlFBTk47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QWY7O0FBRUEsYUFBTzZDLE1BQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE1BQVAsQ0FBY2pELE1BQWQsRUFBc0I7QUFDcEJGLDJCQUF5QkEsdUJBREw7QUFFcEJDLDJCQUF5QkE7QUFGTCxDQUF0Qjs7QUFLQW1ELE9BQU9DLE9BQVAsR0FBaUJuRCxNQUFqQjs7QUFFQSxTQUFTMkMsWUFBVCxDQUFzQkYsSUFBdEIsRUFBNEJXLFlBQTVCLEVBQTBDWixPQUExQyxFQUFtRDtBQUMzQyxNQUFFYSxjQUFGLEdBQXFCYixPQUFyQixDQUFFYSxjQUFGO0FBQUEsTUFDQUMsS0FEQSxHQUNRRCxjQURSO0FBQUEsTUFFQU4sTUFGQSxHQUVTUCxRQUFRRyxZQUFSLENBQXFCRixJQUFyQixDQUZUOzs7QUFJTkQsVUFBUVksWUFBUixDQUFxQkwsTUFBckIsRUFBNkJLLFlBQTdCOztBQUVBWixVQUFRZSxhQUFSLENBQXNCUixNQUF0Qjs7QUFFQSxNQUFNUyxnQkFBZ0JoQixRQUFRaUIsa0JBQVIsQ0FBMkJWLE1BQTNCLEVBQW1DTyxLQUFuQyxDQUF0Qjs7QUFFQSxNQUFJLENBQUNFLGFBQUwsRUFBb0I7QUFDbEIsUUFBTUUsZ0JBQWdCbEIsUUFBUW1CLGdCQUFSLENBQXlCWixNQUF6QixDQUF0Qjs7QUFFQSxVQUFNLElBQUlhLEtBQUosZ0NBQU47QUFDRDs7QUFFRCxTQUFPYixNQUFQO0FBQ0QiLCJmaWxlIjoic2hhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBtZXJnZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICBhZGQgPSBtZXJnZTsgIC8vL1xuXG5jb25zdCBub3JtYWxNYXRyaXhOYW1lID0gJ3VOb3JtYWxNYXRyaXgnLFxuICAgICAgcm90YXRpb25NYXRyaXhOYW1lID0gJ3VSb3RhdGlvbk1hdHJpeCcsXG4gICAgICBwb3NpdGlvbk1hdHJpeE5hbWUgPSAndVBvc2l0aW9uTWF0cml4JyxcbiAgICAgIHBlcnNwZWN0aXZlTWF0cml4TmFtZSA9ICd1UGVyc3BlY3RpdmVNYXRyaXgnLFxuICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lID0gJ2FWZXJ0ZXhQb3NpdGlvbicsXG4gICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lID0gJ2FWZXJ0ZXhOb3JtYWwnLFxuICAgICAgY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2UgPSBgXG5cbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7bm9ybWFsTWF0cml4TmFtZX07XG5cbiAgICAgICAgYXR0cmlidXRlIHZlYzMgJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWMzIGFtYmllbnRMaWdodCA9IHZlYzMoMC4zLCAwLjMsIDAuMyksXG4gICAgICAgICAgICAgZGlyZWN0aW9uYWxMaWdodENvbG91ciA9IHZlYzMoMSwgMSwgMSksXG4gICAgICAgICAgICAgZGlyZWN0aW9uYWxWZWN0b3IgPSBub3JtYWxpemUodmVjMygwLjg1LCAwLjgsIDAuNzUpKTtcbiAgICAgICAgICBcbiAgICAgICAgdmVjMyBjYWxjdWxhdGVMaWdodGluZygpIHtcbiAgICAgICAgICB2ZWM0IHRyYW5zZm9ybWVkTm9ybWFsID0gJHtub3JtYWxNYXRyaXhOYW1lfSAqIHZlYzQoJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfSwgMS4wKTsgICAgICAgICAgICBcblxuICAgICAgICAgIGZsb2F0IGRpcmVjdGlvbmFsID0gbWF4KGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSwgMC4wKTtcbiAgICAgICAgICBcbiAgICAgICAgICB2ZWMzIGxpZ2h0aW5nID0gYW1iaWVudExpZ2h0ICsgKGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgKiBkaXJlY3Rpb25hbCk7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIGxpZ2h0aW5nO1xuICAgICAgICB9XG5cbiAgICAgIGAsXG4gICAgICBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZSA9IGBcblxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtyb3RhdGlvbk1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwb3NpdGlvbk1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwZXJzcGVjdGl2ZU1hdHJpeE5hbWV9O1xuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzQgY2FsY3VsYXRlUG9zaXRpb24oKSB7XG4gICAgICAgICAgdmVjNCBwb3NpdGlvbiA9ICR7cGVyc3BlY3RpdmVNYXRyaXhOYW1lfSAqICR7cG9zaXRpb25NYXRyaXhOYW1lfSAqICR7cm90YXRpb25NYXRyaXhOYW1lfSAqICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgO1xuXG5jbGFzcyBTaGFkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtLCBjYW52YXMpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgIHRoaXMubm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBub3JtYWxNYXRyaXhOYW1lKTtcbiAgICB0aGlzLnJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCByb3RhdGlvbk1hdHJpeE5hbWUpO1xuICAgIHRoaXMucG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHBvc2l0aW9uTWF0cml4TmFtZSk7XG4gICAgdGhpcy5wZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcGVyc3BlY3RpdmVNYXRyaXhOYW1lKTtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lKTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUpO1xuXG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBbXTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbERhdGEgPSBbXTtcbiAgICB0aGlzLnZlcnRleEluZGV4RGF0YSA9IFtdO1xuICB9XG5cbiAgZ2V0UHJvZ3JhbSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9ncmFtO1xuICB9XG5cbiAgZ2V0Tm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4RGF0YUxlbmd0aCA9IHRoaXMudmVydGV4SW5kZXhEYXRhLmxlbmd0aCxcbiAgICAgICAgICBjb3VudCA9IHZlcnRleEluZGV4RGF0YUxlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgYWRkVmVydGV4UG9zaXRpb25EYXRhKHZlcnRleFBvc2l0aW9uRGF0YSkge1xuICAgIGFkZCh0aGlzLnZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4UG9zaXRpb25EYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleE5vcm1hbERhdGEodmVydGV4Tm9ybWFsRGF0YSkge1xuICAgIGFkZCh0aGlzLnZlcnRleE5vcm1hbERhdGEsIHZlcnRleE5vcm1hbERhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4SW5kZXhEYXRhKHZlcnRleEluZGV4RGF0YSkge1xuICAgIGNvbnN0IG9mZnNldCA9IE1hdGgubWF4KC0xLCAuLi50aGlzLnZlcnRleEluZGV4RGF0YSkgKyAxOyAvLy9cblxuICAgIHZlcnRleEluZGV4RGF0YSA9IHZlcnRleEluZGV4RGF0YS5tYXAoZnVuY3Rpb24odmVydGV4SW5kZXgpIHtcbiAgICAgIHJldHVybiB2ZXJ0ZXhJbmRleCArIG9mZnNldDtcbiAgICB9KTtcblxuICAgIGFkZCh0aGlzLnZlcnRleEluZGV4RGF0YSwgdmVydGV4SW5kZXhEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4Tm9ybWFsQnVmZmVyKGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIoY2FudmFzKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleFBvc2l0aW9uQnVmZmVyKGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25CdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRoaXMudmVydGV4UG9zaXRpb25EYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleE5vcm1hbEJ1ZmZlcihjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleE5vcm1hbEJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodGhpcy52ZXJ0ZXhOb3JtYWxEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleEluZGV4RWxlbWVudEJ1ZmZlcihjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleEluZGV4RWxlbWVudEJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVFbGVtZW50QnVmZmVyKHRoaXMudmVydGV4SW5kZXhEYXRhKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIHRoaXMuYmluZFZlcnRleE5vcm1hbEJ1ZmZlcihjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleFBvc2l0aW9uQnVmZmVyKGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4SW5kZXhFbGVtZW50QnVmZmVyKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kVmVydGV4Tm9ybWFsQnVmZmVyKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbENvbXBvbmVudHMgPSAzO1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhOb3JtYWxCdWZmZXIsIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbENvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleFBvc2l0aW9uQnVmZmVyKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyA9IDM7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleFBvc2l0aW9uQnVmZmVyLCB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4SW5kZXhFbGVtZW50QnVmZmVyKGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kRWxlbWVudEJ1ZmZlcih0aGlzLnZlcnRleEluZGV4RWxlbWVudEJ1ZmZlcik7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgeyBWRVJURVhfU0hBREVSIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHR5cGUgPSBWRVJURVhfU0hBREVSLFxuICAgICAgICAgIHZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcih0eXBlLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgeyBGUkFHTUVOVF9TSEFERVIgfSA9IGNvbnRleHQsXG4gICAgICAgICAgdHlwZSA9IEZSQUdNRU5UX1NIQURFUixcbiAgICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIodHlwZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2hhZGVyID0gbmV3IENsYXNzKHByb2dyYW0sIGNhbnZhcyk7XG5cbiAgICByZXR1cm4gc2hhZGVyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU2hhZGVyLCB7XG4gIGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlOiBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSxcbiAgY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2U6IGNhbGN1bGF0ZVBvc2l0aW9uU291cmNlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaGFkZXI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRlcih0eXBlLCBzaGFkZXJTb3VyY2UsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDT01QSUxFX1NUQVRVUyB9ID0gY29udGV4dCxcbiAgICAgICAgcG5hbWUgPSBDT01QSUxFX1NUQVRVUyxcbiAgICAgICAgc2hhZGVyID0gY29udGV4dC5jcmVhdGVTaGFkZXIodHlwZSk7XG5cbiAgY29udGV4dC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTb3VyY2UpO1xuXG4gIGNvbnRleHQuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gIGNvbnN0IGNvbXBpbGVTdGF0dXMgPSBjb250ZXh0LmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIHBuYW1lKTtcblxuICBpZiAoIWNvbXBpbGVTdGF0dXMpIHtcbiAgICBjb25zdCBzaGFkZXJJbmZvTG9nID0gY29udGV4dC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBjcmVhdGUgdGhlIHNoYWRlci5gKTtcbiAgfVxuXG4gIHJldHVybiBzaGFkZXI7XG59XG4iXX0=