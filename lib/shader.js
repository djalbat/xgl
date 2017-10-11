'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var UniformLocations = require('./shader/locations/uniform'),
    AttributeLocations = require('./shader/locations/attribute');

var arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

var offsetMatrixName = UniformLocations.offsetMatrixName,
    rotationMatrixName = UniformLocations.rotationMatrixName,
    positionMatrixName = UniformLocations.positionMatrixName,
    projectionMatrixName = UniformLocations.projectionMatrixName,
    normalMatrixName = UniformLocations.normalMatrixName,
    vertexPositionAttributeName = AttributeLocations.vertexPositionAttributeName,
    vertexNormalAttributeName = AttributeLocations.vertexNormalAttributeName,
    calculateLightingSource = '\n\n        uniform mat4 ' + normalMatrixName + ';\n\n        attribute vec3 ' + vertexNormalAttributeName + ';\n\n        vec3 ambientLight = vec3(0.3, 0.3, 0.3),\n             directionalLightColour = vec3(1, 1, 1),\n             directionalVector = normalize(vec3(0.85, 0.8, 0.75));\n          \n        vec3 calculateLighting() {\n          vec4 transformedNormal = ' + normalMatrixName + ' * vec4(' + vertexNormalAttributeName + ', 1.0);            \n\n          float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);\n          \n          vec3 lighting = ambientLight + (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      ',
    calculatePositionSource = '\n\n        uniform mat4 ' + offsetMatrixName + ',\n                     ' + rotationMatrixName + ',\n                     ' + positionMatrixName + ',\n                     ' + projectionMatrixName + ';\n        \n        attribute vec4 ' + vertexPositionAttributeName + ';\n\n        vec4 calculatePosition() {\n          vec4 position = ' + projectionMatrixName + ' * ' + positionMatrixName + ' * ' + rotationMatrixName + ' * ' + offsetMatrixName + ' * ' + vertexPositionAttributeName + ';\n          \n          return position;\n        }\n        \n      ',
    vertexPositionComponents = 3,
    vertexNormalComponents = 3;

var Shader = function () {
  function Shader(program, canvas) {
    _classCallCheck(this, Shader);

    this.program = program;
    this.uniformLocations = UniformLocations.fromProgram(program, canvas);
    this.attributeLocations = AttributeLocations.fromProgram(program, canvas);

    this.vertexPositionData = [];
    this.vertexNormalData = [];
    this.vertexIndexData = [];
    this.maximumVertexIndex = -1; ///
  }

  _createClass(Shader, [{
    key: 'getCount',
    value: function getCount() {
      var vertexIndexDataLength = this.vertexIndexData.length,
          count = vertexIndexDataLength; ///

      return count;
    }
  }, {
    key: 'getProgram',
    value: function getProgram() {
      return this.program;
    }
  }, {
    key: 'getOffsetMatrixUniformLocation',
    value: function getOffsetMatrixUniformLocation() {
      return this.uniformLocations.getOffsetMatrixUniformLocation();
    }
  }, {
    key: 'getRotationMatrixUniformLocation',
    value: function getRotationMatrixUniformLocation() {
      return this.uniformLocations.getRotationMatrixUniformLocation();
    }
  }, {
    key: 'getPositionMatrixUniformLocation',
    value: function getPositionMatrixUniformLocation() {
      return this.uniformLocations.getPositionMatrixUniformLocation();
    }
  }, {
    key: 'getProjectionMatrixUniformLocation',
    value: function getProjectionMatrixUniformLocation() {
      return this.uniformLocations.getProjectionMatrixUniformLocation();
    }
  }, {
    key: 'getNormalMatrixUniformLocation',
    value: function getNormalMatrixUniformLocation() {
      return this.uniformLocations.getNormalMatrixUniformLocation();
    }
  }, {
    key: 'getVertexPositionAttributeLocation',
    value: function getVertexPositionAttributeLocation() {
      return this.attributeLocations.getVertexPositionAttributeLocation();
    }
  }, {
    key: 'getVertexNormalAttributeLocation',
    value: function getVertexNormalAttributeLocation() {
      return this.attributeLocations.getVertexNormalAttributeLocation();
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
      var offset = this.maximumVertexIndex + 1;

      vertexIndexData = vertexIndexData.map(function (vertexIndex) {
        return vertexIndex + offset;
      });

      add(this.vertexIndexData, vertexIndexData);

      this.maximumVertexIndex = Math.max.apply(Math, [this.maximumVertexIndex].concat(_toConsumableArray(vertexIndexData)));
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      this.createVertexPositionBuffer(canvas);
      this.createVertexNormalBuffer(canvas);
      this.createVertexIndexElementBuffer(canvas);
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers(canvas) {
      this.bindVertexNormalBuffer(canvas);
      this.bindVertexPositionBuffer(canvas);
      this.bindVertexIndexElementBuffer(canvas);
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
    key: 'bindVertexPositionBuffer',
    value: function bindVertexPositionBuffer(canvas) {
      var vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation();

      canvas.bindBuffer(this.vertexPositionBuffer, vertexPositionAttributeLocation, vertexPositionComponents);
    }
  }, {
    key: 'bindVertexNormalBuffer',
    value: function bindVertexNormalBuffer(canvas) {
      var vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation();

      canvas.bindBuffer(this.vertexNormalBuffer, vertexNormalAttributeLocation, vertexNormalComponents);
    }
  }, {
    key: 'bindVertexIndexElementBuffer',
    value: function bindVertexIndexElementBuffer(canvas) {
      canvas.bindElementBuffer(this.vertexIndexElementBuffer);
    }
  }]);

  return Shader;
}();

function createVertexShader(vertexShaderSource, canvas) {
  var context = canvas.getContext(),
      VERTEX_SHADER = context.VERTEX_SHADER,
      type = VERTEX_SHADER,
      vertexShader = createShader(type, vertexShaderSource, canvas);


  return vertexShader;
}

function createFragmentShader(fragmentShaderSource, canvas) {
  var context = canvas.getContext(),
      FRAGMENT_SHADER = context.FRAGMENT_SHADER,
      type = FRAGMENT_SHADER,
      vertexShader = createShader(type, fragmentShaderSource, canvas);


  return vertexShader;
}

Object.assign(Shader, {
  createVertexShader: createVertexShader,
  createFragmentShader: createFragmentShader,
  calculateLightingSource: calculateLightingSource,
  calculatePositionSource: calculatePositionSource
});

module.exports = Shader;

function createShader(type, shaderSource, canvas) {
  var context = canvas.getContext(),
      COMPILE_STATUS = context.COMPILE_STATUS,
      pname = COMPILE_STATUS,
      shader = context.createShader(type);


  context.shaderSource(shader, shaderSource);

  context.compileShader(shader);

  var compileStatus = context.getShaderParameter(shader, pname);

  if (!compileStatus) {
    throw new Error('Unable to create the shader.');
  }

  return shader;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaGFkZXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlVuaWZvcm1Mb2NhdGlvbnMiLCJBdHRyaWJ1dGVMb2NhdGlvbnMiLCJhcnJheVV0aWxpdGllcyIsIm1lcmdlIiwiYWRkIiwib2Zmc2V0TWF0cml4TmFtZSIsInJvdGF0aW9uTWF0cml4TmFtZSIsInBvc2l0aW9uTWF0cml4TmFtZSIsInByb2plY3Rpb25NYXRyaXhOYW1lIiwibm9ybWFsTWF0cml4TmFtZSIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUiLCJjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSIsImNhbGN1bGF0ZVBvc2l0aW9uU291cmNlIiwidmVydGV4UG9zaXRpb25Db21wb25lbnRzIiwidmVydGV4Tm9ybWFsQ29tcG9uZW50cyIsIlNoYWRlciIsInByb2dyYW0iLCJjYW52YXMiLCJ1bmlmb3JtTG9jYXRpb25zIiwiZnJvbVByb2dyYW0iLCJhdHRyaWJ1dGVMb2NhdGlvbnMiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidmVydGV4SW5kZXhEYXRhIiwibWF4aW11bVZlcnRleEluZGV4IiwidmVydGV4SW5kZXhEYXRhTGVuZ3RoIiwibGVuZ3RoIiwiY291bnQiLCJnZXRPZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsIm9mZnNldCIsIm1hcCIsInZlcnRleEluZGV4IiwiTWF0aCIsIm1heCIsImNyZWF0ZVZlcnRleFBvc2l0aW9uQnVmZmVyIiwiY3JlYXRlVmVydGV4Tm9ybWFsQnVmZmVyIiwiY3JlYXRlVmVydGV4SW5kZXhFbGVtZW50QnVmZmVyIiwiYmluZFZlcnRleE5vcm1hbEJ1ZmZlciIsImJpbmRWZXJ0ZXhQb3NpdGlvbkJ1ZmZlciIsImJpbmRWZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIiLCJ2ZXJ0ZXhQb3NpdGlvbkJ1ZmZlciIsImNyZWF0ZUJ1ZmZlciIsInZlcnRleE5vcm1hbEJ1ZmZlciIsInZlcnRleEluZGV4RWxlbWVudEJ1ZmZlciIsImNyZWF0ZUVsZW1lbnRCdWZmZXIiLCJ2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwiYmluZEJ1ZmZlciIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwiYmluZEVsZW1lbnRCdWZmZXIiLCJjcmVhdGVWZXJ0ZXhTaGFkZXIiLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJnZXRDb250ZXh0IiwiVkVSVEVYX1NIQURFUiIsImNvbnRleHQiLCJ0eXBlIiwidmVydGV4U2hhZGVyIiwiY3JlYXRlU2hhZGVyIiwiY3JlYXRlRnJhZ21lbnRTaGFkZXIiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsIkZSQUdNRU5UX1NIQURFUiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJzaGFkZXJTb3VyY2UiLCJDT01QSUxFX1NUQVRVUyIsInBuYW1lIiwic2hhZGVyIiwiY29tcGlsZVNoYWRlciIsImNvbXBpbGVTdGF0dXMiLCJnZXRTaGFkZXJQYXJhbWV0ZXIiLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLG1CQUFtQkQsUUFBUSw0QkFBUixDQUF6QjtBQUFBLElBQ01FLHFCQUFxQkYsUUFBUSw4QkFBUixDQUQzQjs7QUFHTSxJQUFFRyxjQUFGLEdBQXFCSixTQUFyQixDQUFFSSxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZ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QUFNLElBQUlFLEtBQUosZ0NBQU47QUFDRDs7QUFFRCxTQUFPSixNQUFQO0FBQ0QiLCJmaWxlIjoic2hhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vc2hhZGVyL2xvY2F0aW9ucy91bmlmb3JtJyksXG4gICAgICBBdHRyaWJ1dGVMb2NhdGlvbnMgPSByZXF1aXJlKCcuL3NoYWRlci9sb2NhdGlvbnMvYXR0cmlidXRlJyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgbWVyZ2UgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY29uc3QgeyBvZmZzZXRNYXRyaXhOYW1lLCByb3RhdGlvbk1hdHJpeE5hbWUsIHBvc2l0aW9uTWF0cml4TmFtZSwgcHJvamVjdGlvbk1hdHJpeE5hbWUsIG5vcm1hbE1hdHJpeE5hbWUgfSA9IFVuaWZvcm1Mb2NhdGlvbnMsXG4gICAgICB7IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSB9ID0gQXR0cmlidXRlTG9jYXRpb25zLFxuICAgICAgY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2UgPSBgXG5cbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7bm9ybWFsTWF0cml4TmFtZX07XG5cbiAgICAgICAgYXR0cmlidXRlIHZlYzMgJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWMzIGFtYmllbnRMaWdodCA9IHZlYzMoMC4zLCAwLjMsIDAuMyksXG4gICAgICAgICAgICAgZGlyZWN0aW9uYWxMaWdodENvbG91ciA9IHZlYzMoMSwgMSwgMSksXG4gICAgICAgICAgICAgZGlyZWN0aW9uYWxWZWN0b3IgPSBub3JtYWxpemUodmVjMygwLjg1LCAwLjgsIDAuNzUpKTtcbiAgICAgICAgICBcbiAgICAgICAgdmVjMyBjYWxjdWxhdGVMaWdodGluZygpIHtcbiAgICAgICAgICB2ZWM0IHRyYW5zZm9ybWVkTm9ybWFsID0gJHtub3JtYWxNYXRyaXhOYW1lfSAqIHZlYzQoJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfSwgMS4wKTsgICAgICAgICAgICBcblxuICAgICAgICAgIGZsb2F0IGRpcmVjdGlvbmFsID0gbWF4KGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSwgMC4wKTtcbiAgICAgICAgICBcbiAgICAgICAgICB2ZWMzIGxpZ2h0aW5nID0gYW1iaWVudExpZ2h0ICsgKGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgKiBkaXJlY3Rpb25hbCk7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIGxpZ2h0aW5nO1xuICAgICAgICB9XG5cbiAgICAgIGAsXG4gICAgICBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZSA9IGBcblxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtvZmZzZXRNYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cm90YXRpb25NYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cG9zaXRpb25NYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cHJvamVjdGlvbk1hdHJpeE5hbWV9O1xuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzQgY2FsY3VsYXRlUG9zaXRpb24oKSB7XG4gICAgICAgICAgdmVjNCBwb3NpdGlvbiA9ICR7cHJvamVjdGlvbk1hdHJpeE5hbWV9ICogJHtwb3NpdGlvbk1hdHJpeE5hbWV9ICogJHtyb3RhdGlvbk1hdHJpeE5hbWV9ICogJHtvZmZzZXRNYXRyaXhOYW1lfSAqICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgLFxuICAgICAgdmVydGV4UG9zaXRpb25Db21wb25lbnRzID0gMyxcbiAgICAgIHZlcnRleE5vcm1hbENvbXBvbmVudHMgPSAzO1xuXG5jbGFzcyBTaGFkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtLCBjYW52YXMpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgIHRoaXMudW5pZm9ybUxvY2F0aW9ucyA9IFVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKTtcbiAgICB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucyA9IEF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpO1xuXG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBbXTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbERhdGEgPSBbXTtcbiAgICB0aGlzLnZlcnRleEluZGV4RGF0YSA9IFtdO1xuICAgIHRoaXMubWF4aW11bVZlcnRleEluZGV4ID0gLTE7IC8vL1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhEYXRhTGVuZ3RoID0gdGhpcy52ZXJ0ZXhJbmRleERhdGEubGVuZ3RoLFxuICAgICAgICAgIGNvdW50ID0gdmVydGV4SW5kZXhEYXRhTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cblxuICBnZXRQcm9ncmFtKCkge1xuICAgIHJldHVybiB0aGlzLnByb2dyYW07XG4gIH1cblxuICBnZXRPZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0T2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0Tm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGFkZFZlcnRleFBvc2l0aW9uRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpIHtcbiAgICBhZGQodGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleFBvc2l0aW9uRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhOb3JtYWxEYXRhKHZlcnRleE5vcm1hbERhdGEpIHtcbiAgICBhZGQodGhpcy52ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleEluZGV4RGF0YSh2ZXJ0ZXhJbmRleERhdGEpIHtcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLm1heGltdW1WZXJ0ZXhJbmRleCArIDE7XG5cbiAgICB2ZXJ0ZXhJbmRleERhdGEgPSB2ZXJ0ZXhJbmRleERhdGEubWFwKGZ1bmN0aW9uKHZlcnRleEluZGV4KSB7XG4gICAgICByZXR1cm4gdmVydGV4SW5kZXggKyBvZmZzZXQ7XG4gICAgfSk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhJbmRleERhdGEsIHZlcnRleEluZGV4RGF0YSk7XG5cbiAgICB0aGlzLm1heGltdW1WZXJ0ZXhJbmRleCA9IE1hdGgubWF4KHRoaXMubWF4aW11bVZlcnRleEluZGV4LCAuLi52ZXJ0ZXhJbmRleERhdGEpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleFBvc2l0aW9uQnVmZmVyKGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhOb3JtYWxCdWZmZXIoY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleEluZGV4RWxlbWVudEJ1ZmZlcihjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgdGhpcy5iaW5kVmVydGV4Tm9ybWFsQnVmZmVyKGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4UG9zaXRpb25CdWZmZXIoY2FudmFzKTtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIoY2FudmFzKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleFBvc2l0aW9uQnVmZmVyKGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25CdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRoaXMudmVydGV4UG9zaXRpb25EYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleE5vcm1hbEJ1ZmZlcihjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleE5vcm1hbEJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodGhpcy52ZXJ0ZXhOb3JtYWxEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleEluZGV4RWxlbWVudEJ1ZmZlcihjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleEluZGV4RWxlbWVudEJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVFbGVtZW50QnVmZmVyKHRoaXMudmVydGV4SW5kZXhEYXRhKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCk7XG4gICAgXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhQb3NpdGlvbkJ1ZmZlciwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25Db21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhOb3JtYWxCdWZmZXIoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleE5vcm1hbEJ1ZmZlciwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbENvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleEluZGV4RWxlbWVudEJ1ZmZlcihjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEVsZW1lbnRCdWZmZXIodGhpcy52ZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoKSxcbiAgICAgICAgeyBWRVJURVhfU0hBREVSIH0gPSBjb250ZXh0LFxuICAgICAgICB0eXBlID0gVkVSVEVYX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKHR5cGUsIHZlcnRleFNoYWRlclNvdXJjZSwgY2FudmFzKTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICB7IEZSQUdNRU5UX1NIQURFUiB9ID0gY29udGV4dCxcbiAgICAgICAgdHlwZSA9IEZSQUdNRU5UX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKHR5cGUsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpO1xuXG4gIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG59XG5cbk9iamVjdC5hc3NpZ24oU2hhZGVyLCB7XG4gIGNyZWF0ZVZlcnRleFNoYWRlcjogY3JlYXRlVmVydGV4U2hhZGVyLFxuICBjcmVhdGVGcmFnbWVudFNoYWRlcjogY3JlYXRlRnJhZ21lbnRTaGFkZXIsXG4gIGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlOiBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSxcbiAgY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2U6IGNhbGN1bGF0ZVBvc2l0aW9uU291cmNlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaGFkZXI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRlcih0eXBlLCBzaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoKSxcbiAgICAgICAgeyBDT01QSUxFX1NUQVRVUyB9ID0gY29udGV4dCxcbiAgICAgICAgcG5hbWUgPSBDT01QSUxFX1NUQVRVUyxcbiAgICAgICAgc2hhZGVyID0gY29udGV4dC5jcmVhdGVTaGFkZXIodHlwZSk7XG5cbiAgY29udGV4dC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTb3VyY2UpO1xuXG4gIGNvbnRleHQuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gIGNvbnN0IGNvbXBpbGVTdGF0dXMgPSBjb250ZXh0LmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIHBuYW1lKTtcblxuICBpZiAoIWNvbXBpbGVTdGF0dXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBjcmVhdGUgdGhlIHNoYWRlci5gKTtcbiAgfVxuXG4gIHJldHVybiBzaGFkZXI7XG59XG4iXX0=