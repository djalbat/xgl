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
    calculatePositionSource = '\n\n        uniform mat4 ' + rotationMatrixName + ',\n                     ' + positionMatrixName + ',\n                     ' + perspectiveMatrixName + ';\n        \n        attribute vec4 ' + vertexPositionAttributeName + ';\n\n        vec4 calculatePosition() {\n          vec4 position = ' + perspectiveMatrixName + ' * ' + positionMatrixName + ' * ' + rotationMatrixName + ' * ' + vertexPositionAttributeName + ';\n          \n          return position;\n        }\n        \n      ',
    vertexPositionComponents = 3,
    vertexNormalComponents = 3;

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
    key: 'bindVertexNormalBuffer',
    value: function bindVertexNormalBuffer(canvas) {
      canvas.bindBuffer(this.vertexNormalBuffer, this.vertexNormalAttributeLocation, vertexNormalComponents);
    }
  }, {
    key: 'bindVertexPositionBuffer',
    value: function bindVertexPositionBuffer(canvas) {
      canvas.bindBuffer(this.vertexPositionBuffer, this.vertexPositionAttributeLocation, vertexPositionComponents);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaGFkZXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwibWVyZ2UiLCJhZGQiLCJub3JtYWxNYXRyaXhOYW1lIiwicm90YXRpb25NYXRyaXhOYW1lIiwicG9zaXRpb25NYXRyaXhOYW1lIiwicGVyc3BlY3RpdmVNYXRyaXhOYW1lIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lIiwidmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSIsImNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlIiwiY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2UiLCJ2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMiLCJ2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzIiwiU2hhZGVyIiwicHJvZ3JhbSIsImNhbnZhcyIsIm5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFVuaWZvcm1Mb2NhdGlvbiIsInJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJnZXRBdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4UG9zaXRpb25EYXRhIiwidmVydGV4Tm9ybWFsRGF0YSIsInZlcnRleEluZGV4RGF0YSIsIm1heGltdW1WZXJ0ZXhJbmRleCIsInZlcnRleEluZGV4RGF0YUxlbmd0aCIsImxlbmd0aCIsImNvdW50Iiwib2Zmc2V0IiwibWFwIiwidmVydGV4SW5kZXgiLCJNYXRoIiwibWF4IiwiY3JlYXRlVmVydGV4UG9zaXRpb25CdWZmZXIiLCJjcmVhdGVWZXJ0ZXhOb3JtYWxCdWZmZXIiLCJjcmVhdGVWZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIiLCJiaW5kVmVydGV4Tm9ybWFsQnVmZmVyIiwiYmluZFZlcnRleFBvc2l0aW9uQnVmZmVyIiwiYmluZFZlcnRleEluZGV4RWxlbWVudEJ1ZmZlciIsInZlcnRleFBvc2l0aW9uQnVmZmVyIiwiY3JlYXRlQnVmZmVyIiwidmVydGV4Tm9ybWFsQnVmZmVyIiwidmVydGV4SW5kZXhFbGVtZW50QnVmZmVyIiwiY3JlYXRlRWxlbWVudEJ1ZmZlciIsImJpbmRCdWZmZXIiLCJiaW5kRWxlbWVudEJ1ZmZlciIsImNyZWF0ZVZlcnRleFNoYWRlciIsInZlcnRleFNoYWRlclNvdXJjZSIsImdldENvbnRleHQiLCJWRVJURVhfU0hBREVSIiwiY29udGV4dCIsInR5cGUiLCJ2ZXJ0ZXhTaGFkZXIiLCJjcmVhdGVTaGFkZXIiLCJjcmVhdGVGcmFnbWVudFNoYWRlciIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiRlJBR01FTlRfU0hBREVSIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyIsInNoYWRlclNvdXJjZSIsIkNPTVBJTEVfU1RBVFVTIiwicG5hbWUiLCJzaGFkZXIiLCJjb21waWxlU2hhZGVyIiwiY29tcGlsZVN0YXR1cyIsImdldFNoYWRlclBhcmFtZXRlciIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRU0sSUFBRUMsY0FBRixHQUFxQkYsU0FBckIsQ0FBRUUsY0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDWUQsY0FEWixDQUNFQyxLQURGO0FBQUEsSUFFQUMsR0FGQSxHQUVNRCxLQUZOLEMsQ0FFYzs7QUFFcEIsSUFBTUUsbUJBQW1CLGVBQXpCO0FBQUEsSUFDTUMscUJBQXFCLGlCQUQzQjtBQUFBLElBRU1DLHFCQUFxQixpQkFGM0I7QUFBQSxJQUdNQyx3QkFBd0Isb0JBSDlCO0FBQUEsSUFJTUMsOEJBQThCLGlCQUpwQztBQUFBLElBS01DLDRCQUE0QixlQUxsQztBQUFBLElBTU1DLHdEQUVpQk4sZ0JBRmpCLG9DQUltQksseUJBSm5CLDRRQVcrQkwsZ0JBWC9CLGdCQVcwREsseUJBWDFELDZRQU5OO0FBQUEsSUEyQk1FLHdEQUVpQk4sa0JBRmpCLGdDQUdpQkMsa0JBSGpCLGdDQUlpQkMscUJBSmpCLDRDQU1tQkMsMkJBTm5CLDJFQVNzQkQscUJBVHRCLFdBU2lERCxrQkFUakQsV0FTeUVELGtCQVR6RSxXQVNpR0csMkJBVGpHLDJFQTNCTjtBQUFBLElBMENNSSwyQkFBMkIsQ0ExQ2pDO0FBQUEsSUEyQ01DLHlCQUF5QixDQTNDL0I7O0lBNkNNQyxNO0FBQ0osa0JBQVlDLE9BQVosRUFBcUJDLE1BQXJCLEVBQTZCO0FBQUE7O0FBQzNCLFNBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtFLDJCQUFMLEdBQW1DRCxPQUFPRSxrQkFBUCxDQUEwQkgsT0FBMUIsRUFBbUNYLGdCQUFuQyxDQUFuQztBQUNBLFNBQUtlLDZCQUFMLEdBQXFDSCxPQUFPRSxrQkFBUCxDQUEwQkgsT0FBMUIsRUFBbUNWLGtCQUFuQyxDQUFyQztBQUNBLFNBQUtlLDZCQUFMLEdBQXFDSixPQUFPRSxrQkFBUCxDQUEwQkgsT0FBMUIsRUFBbUNULGtCQUFuQyxDQUFyQztBQUNBLFNBQUtlLGdDQUFMLEdBQXdDTCxPQUFPRSxrQkFBUCxDQUEwQkgsT0FBMUIsRUFBbUNSLHFCQUFuQyxDQUF4QztBQUNBLFNBQUtlLCtCQUFMLEdBQXVDTixPQUFPTyxvQkFBUCxDQUE0QlIsT0FBNUIsRUFBcUNQLDJCQUFyQyxDQUF2QztBQUNBLFNBQUtnQiw2QkFBTCxHQUFxQ1IsT0FBT08sb0JBQVAsQ0FBNEJSLE9BQTVCLEVBQXFDTix5QkFBckMsQ0FBckM7O0FBRUEsU0FBS2dCLGtCQUFMLEdBQTBCLEVBQTFCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0IsRUFBeEI7QUFDQSxTQUFLQyxlQUFMLEdBQXVCLEVBQXZCO0FBQ0EsU0FBS0Msa0JBQUwsR0FBMEIsQ0FBQyxDQUEzQixDQVoyQixDQVlHO0FBQy9COzs7OytCQUVVO0FBQ1QsVUFBTUMsd0JBQXdCLEtBQUtGLGVBQUwsQ0FBcUJHLE1BQW5EO0FBQUEsVUFDTUMsUUFBUUYscUJBRGQsQ0FEUyxDQUU2Qjs7QUFFdEMsYUFBT0UsS0FBUDtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtoQixPQUFaO0FBQ0Q7OztxREFFZ0M7QUFDL0IsYUFBTyxLQUFLRSwyQkFBWjtBQUNEOzs7dURBRWtDO0FBQ2pDLGFBQU8sS0FBS0UsNkJBQVo7QUFDRDs7O3VEQUVrQztBQUNqQyxhQUFPLEtBQUtDLDZCQUFaO0FBQ0Q7OzswREFFcUM7QUFDcEMsYUFBTyxLQUFLQyxnQ0FBWjtBQUNEOzs7MENBRXFCSSxrQixFQUFvQjtBQUN4Q3RCLFVBQUksS0FBS3NCLGtCQUFULEVBQTZCQSxrQkFBN0I7QUFDRDs7O3dDQUVtQkMsZ0IsRUFBa0I7QUFDcEN2QixVQUFJLEtBQUt1QixnQkFBVCxFQUEyQkEsZ0JBQTNCO0FBQ0Q7Ozt1Q0FFa0JDLGUsRUFBaUI7QUFDbEMsVUFBTUssU0FBUyxLQUFLSixrQkFBTCxHQUEwQixDQUF6Qzs7QUFFQUQsd0JBQWtCQSxnQkFBZ0JNLEdBQWhCLENBQW9CLFVBQVNDLFdBQVQsRUFBc0I7QUFDMUQsZUFBT0EsY0FBY0YsTUFBckI7QUFDRCxPQUZpQixDQUFsQjs7QUFJQTdCLFVBQUksS0FBS3dCLGVBQVQsRUFBMEJBLGVBQTFCOztBQUVBLFdBQUtDLGtCQUFMLEdBQTBCTyxLQUFLQyxHQUFMLGNBQVMsS0FBS1Isa0JBQWQsNEJBQXFDRCxlQUFyQyxHQUExQjtBQUNEOzs7a0NBRWFYLE0sRUFBUTtBQUNwQixXQUFLcUIsMEJBQUwsQ0FBZ0NyQixNQUFoQztBQUNBLFdBQUtzQix3QkFBTCxDQUE4QnRCLE1BQTlCO0FBQ0EsV0FBS3VCLDhCQUFMLENBQW9DdkIsTUFBcEM7QUFDRDs7O2dDQUVXQSxNLEVBQVE7QUFDbEIsV0FBS3dCLHNCQUFMLENBQTRCeEIsTUFBNUI7QUFDQSxXQUFLeUIsd0JBQUwsQ0FBOEJ6QixNQUE5QjtBQUNBLFdBQUswQiw0QkFBTCxDQUFrQzFCLE1BQWxDO0FBQ0Q7OzsrQ0FFMEJBLE0sRUFBUTtBQUNqQyxXQUFLMkIsb0JBQUwsR0FBNEIzQixPQUFPNEIsWUFBUCxDQUFvQixLQUFLbkIsa0JBQXpCLENBQTVCO0FBQ0Q7Ozs2Q0FFd0JULE0sRUFBUTtBQUMvQixXQUFLNkIsa0JBQUwsR0FBMEI3QixPQUFPNEIsWUFBUCxDQUFvQixLQUFLbEIsZ0JBQXpCLENBQTFCO0FBQ0Q7OzttREFFOEJWLE0sRUFBUTtBQUNyQyxXQUFLOEIsd0JBQUwsR0FBZ0M5QixPQUFPK0IsbUJBQVAsQ0FBMkIsS0FBS3BCLGVBQWhDLENBQWhDO0FBQ0Q7OzsyQ0FFc0JYLE0sRUFBUTtBQUM3QkEsYUFBT2dDLFVBQVAsQ0FBa0IsS0FBS0gsa0JBQXZCLEVBQTJDLEtBQUtyQiw2QkFBaEQsRUFBK0VYLHNCQUEvRTtBQUNEOzs7NkNBRXdCRyxNLEVBQVE7QUFDL0JBLGFBQU9nQyxVQUFQLENBQWtCLEtBQUtMLG9CQUF2QixFQUE2QyxLQUFLckIsK0JBQWxELEVBQW1GVix3QkFBbkY7QUFDRDs7O2lEQUU0QkksTSxFQUFRO0FBQ25DQSxhQUFPaUMsaUJBQVAsQ0FBeUIsS0FBS0gsd0JBQTlCO0FBQ0Q7Ozs7OztBQUdILFNBQVNJLGtCQUFULENBQTRCQyxrQkFBNUIsRUFBZ0RuQyxNQUFoRCxFQUF3RDtBQUNoRCxnQkFBVUEsT0FBT29DLFVBQVAsRUFBVjtBQUFBLE1BQ0FDLGFBREEsR0FDa0JDLE9BRGxCLENBQ0FELGFBREE7QUFBQSxNQUVGRSxJQUZFLEdBRUtGLGFBRkw7QUFBQSxNQUdGRyxZQUhFLEdBR2FDLGFBQWFGLElBQWIsRUFBbUJKLGtCQUFuQixFQUF1Q25DLE1BQXZDLENBSGI7OztBQUtOLFNBQU93QyxZQUFQO0FBQ0Q7O0FBRUQsU0FBU0Usb0JBQVQsQ0FBOEJDLG9CQUE5QixFQUFvRDNDLE1BQXBELEVBQTREO0FBQ3BELGdCQUFVQSxPQUFPb0MsVUFBUCxFQUFWO0FBQUEsTUFDQVEsZUFEQSxHQUNvQk4sT0FEcEIsQ0FDQU0sZUFEQTtBQUFBLE1BRUZMLElBRkUsR0FFS0ssZUFGTDtBQUFBLE1BR0ZKLFlBSEUsR0FHYUMsYUFBYUYsSUFBYixFQUFtQkksb0JBQW5CLEVBQXlDM0MsTUFBekMsQ0FIYjs7O0FBS04sU0FBT3dDLFlBQVA7QUFDRDs7QUFFREssT0FBT0MsTUFBUCxDQUFjaEQsTUFBZCxFQUFzQjtBQUNwQm9DLHNCQUFvQkEsa0JBREE7QUFFcEJRLHdCQUFzQkEsb0JBRkY7QUFHcEJoRCwyQkFBeUJBLHVCQUhMO0FBSXBCQywyQkFBeUJBO0FBSkwsQ0FBdEI7O0FBT0FvRCxPQUFPQyxPQUFQLEdBQWlCbEQsTUFBakI7O0FBRUEsU0FBUzJDLFlBQVQsQ0FBc0JGLElBQXRCLEVBQTRCVSxZQUE1QixFQUEwQ2pELE1BQTFDLEVBQWtEO0FBQzFDLGdCQUFVQSxPQUFPb0MsVUFBUCxFQUFWO0FBQUEsTUFDRWMsY0FERixHQUNxQlosT0FEckIsQ0FDRVksY0FERjtBQUFBLE1BRUFDLEtBRkEsR0FFUUQsY0FGUjtBQUFBLE1BR0FFLE1BSEEsR0FHU2QsUUFBUUcsWUFBUixDQUFxQkYsSUFBckIsQ0FIVDs7O0FBS05ELFVBQVFXLFlBQVIsQ0FBcUJHLE1BQXJCLEVBQTZCSCxZQUE3Qjs7QUFFQVgsVUFBUWUsYUFBUixDQUFzQkQsTUFBdEI7O0FBRUEsTUFBTUUsZ0JBQWdCaEIsUUFBUWlCLGtCQUFSLENBQTJCSCxNQUEzQixFQUFtQ0QsS0FBbkMsQ0FBdEI7O0FBRUEsTUFBSSxDQUFDRyxhQUFMLEVBQW9CO0FBQ2xCLFVBQU0sSUFBSUUsS0FBSixnQ0FBTjtBQUNEOztBQUVELFNBQU9KLE1BQVA7QUFDRCIsImZpbGUiOiJzaGFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IG1lcmdlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNvbnN0IG5vcm1hbE1hdHJpeE5hbWUgPSAndU5vcm1hbE1hdHJpeCcsXG4gICAgICByb3RhdGlvbk1hdHJpeE5hbWUgPSAndVJvdGF0aW9uTWF0cml4JyxcbiAgICAgIHBvc2l0aW9uTWF0cml4TmFtZSA9ICd1UG9zaXRpb25NYXRyaXgnLFxuICAgICAgcGVyc3BlY3RpdmVNYXRyaXhOYW1lID0gJ3VQZXJzcGVjdGl2ZU1hdHJpeCcsXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUgPSAnYVZlcnRleFBvc2l0aW9uJyxcbiAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUgPSAnYVZlcnRleE5vcm1hbCcsXG4gICAgICBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSA9IGBcblxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtub3JtYWxNYXRyaXhOYW1lfTtcblxuICAgICAgICBhdHRyaWJ1dGUgdmVjMyAke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzMgYW1iaWVudExpZ2h0ID0gdmVjMygwLjMsIDAuMywgMC4zKSxcbiAgICAgICAgICAgICBkaXJlY3Rpb25hbExpZ2h0Q29sb3VyID0gdmVjMygxLCAxLCAxKSxcbiAgICAgICAgICAgICBkaXJlY3Rpb25hbFZlY3RvciA9IG5vcm1hbGl6ZSh2ZWMzKDAuODUsIDAuOCwgMC43NSkpO1xuICAgICAgICAgIFxuICAgICAgICB2ZWMzIGNhbGN1bGF0ZUxpZ2h0aW5nKCkge1xuICAgICAgICAgIHZlYzQgdHJhbnNmb3JtZWROb3JtYWwgPSAke25vcm1hbE1hdHJpeE5hbWV9ICogdmVjNCgke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9LCAxLjApOyAgICAgICAgICAgIFxuXG4gICAgICAgICAgZmxvYXQgZGlyZWN0aW9uYWwgPSBtYXgoZG90KHRyYW5zZm9ybWVkTm9ybWFsLnh5eiwgZGlyZWN0aW9uYWxWZWN0b3IpLCAwLjApO1xuICAgICAgICAgIFxuICAgICAgICAgIHZlYzMgbGlnaHRpbmcgPSBhbWJpZW50TGlnaHQgKyAoZGlyZWN0aW9uYWxMaWdodENvbG91ciAqIGRpcmVjdGlvbmFsKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gbGlnaHRpbmc7XG4gICAgICAgIH1cblxuICAgICAgYCxcbiAgICAgIGNhbGN1bGF0ZVBvc2l0aW9uU291cmNlID0gYFxuXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke3JvdGF0aW9uTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Bvc2l0aW9uTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3BlcnNwZWN0aXZlTWF0cml4TmFtZX07XG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgdmVjNCBjYWxjdWxhdGVQb3NpdGlvbigpIHtcbiAgICAgICAgICB2ZWM0IHBvc2l0aW9uID0gJHtwZXJzcGVjdGl2ZU1hdHJpeE5hbWV9ICogJHtwb3NpdGlvbk1hdHJpeE5hbWV9ICogJHtyb3RhdGlvbk1hdHJpeE5hbWV9ICogJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGAsXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMgPSAzLFxuICAgICAgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyA9IDM7XG5cbmNsYXNzIFNoYWRlciB7XG4gIGNvbnN0cnVjdG9yKHByb2dyYW0sIGNhbnZhcykge1xuICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgdGhpcy5ub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5vcm1hbE1hdHJpeE5hbWUpO1xuICAgIHRoaXMucm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHJvdGF0aW9uTWF0cml4TmFtZSk7XG4gICAgdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcG9zaXRpb25NYXRyaXhOYW1lKTtcbiAgICB0aGlzLnBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwZXJzcGVjdGl2ZU1hdHJpeE5hbWUpO1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUpO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSk7XG5cbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uRGF0YSA9IFtdO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsRGF0YSA9IFtdO1xuICAgIHRoaXMudmVydGV4SW5kZXhEYXRhID0gW107XG4gICAgdGhpcy5tYXhpbXVtVmVydGV4SW5kZXggPSAtMTsgLy8vXG4gIH1cblxuICBnZXRDb3VudCgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleERhdGFMZW5ndGggPSB0aGlzLnZlcnRleEluZGV4RGF0YS5sZW5ndGgsXG4gICAgICAgICAgY291bnQgPSB2ZXJ0ZXhJbmRleERhdGFMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIGdldFByb2dyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZ3JhbTtcbiAgfVxuXG4gIGdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBhZGRWZXJ0ZXhQb3NpdGlvbkRhdGEodmVydGV4UG9zaXRpb25EYXRhKSB7XG4gICAgYWRkKHRoaXMudmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhOb3JtYWxEYXRhKSB7XG4gICAgYWRkKHRoaXMudmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhJbmRleERhdGEodmVydGV4SW5kZXhEYXRhKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5tYXhpbXVtVmVydGV4SW5kZXggKyAxO1xuXG4gICAgdmVydGV4SW5kZXhEYXRhID0gdmVydGV4SW5kZXhEYXRhLm1hcChmdW5jdGlvbih2ZXJ0ZXhJbmRleCkge1xuICAgICAgcmV0dXJuIHZlcnRleEluZGV4ICsgb2Zmc2V0O1xuICAgIH0pO1xuXG4gICAgYWRkKHRoaXMudmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhJbmRleERhdGEpO1xuXG4gICAgdGhpcy5tYXhpbXVtVmVydGV4SW5kZXggPSBNYXRoLm1heCh0aGlzLm1heGltdW1WZXJ0ZXhJbmRleCwgLi4udmVydGV4SW5kZXhEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4Tm9ybWFsQnVmZmVyKGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIHRoaXMuYmluZFZlcnRleE5vcm1hbEJ1ZmZlcihjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleFBvc2l0aW9uQnVmZmVyKGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4SW5kZXhFbGVtZW50QnVmZmVyKGNhbnZhcyk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0aGlzLnZlcnRleFBvc2l0aW9uRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhOb3JtYWxCdWZmZXIoY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRoaXMudmVydGV4Tm9ybWFsRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIoY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIgPSBjYW52YXMuY3JlYXRlRWxlbWVudEJ1ZmZlcih0aGlzLnZlcnRleEluZGV4RGF0YSk7XG4gIH1cblxuICBiaW5kVmVydGV4Tm9ybWFsQnVmZmVyKGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Tm9ybWFsQnVmZmVyLCB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleFBvc2l0aW9uQnVmZmVyLCB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4SW5kZXhFbGVtZW50QnVmZmVyKGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kRWxlbWVudEJ1ZmZlcih0aGlzLnZlcnRleEluZGV4RWxlbWVudEJ1ZmZlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgeyBWRVJURVhfU0hBREVSIH0gPSBjb250ZXh0LFxuICAgICAgdHlwZSA9IFZFUlRFWF9TSEFERVIsXG4gICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIodHlwZSwgdmVydGV4U2hhZGVyU291cmNlLCBjYW52YXMpO1xuXG4gIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICB7IEZSQUdNRU5UX1NIQURFUiB9ID0gY29udGV4dCxcbiAgICAgIHR5cGUgPSBGUkFHTUVOVF9TSEFERVIsXG4gICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIodHlwZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyk7XG5cbiAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbn1cblxuT2JqZWN0LmFzc2lnbihTaGFkZXIsIHtcbiAgY3JlYXRlVmVydGV4U2hhZGVyOiBjcmVhdGVWZXJ0ZXhTaGFkZXIsXG4gIGNyZWF0ZUZyYWdtZW50U2hhZGVyOiBjcmVhdGVGcmFnbWVudFNoYWRlcixcbiAgY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2U6IGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlLFxuICBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZTogY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2Vcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNoYWRlcjtcblxuZnVuY3Rpb24gY3JlYXRlU2hhZGVyKHR5cGUsIHNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICB7IENPTVBJTEVfU1RBVFVTIH0gPSBjb250ZXh0LFxuICAgICAgICBwbmFtZSA9IENPTVBJTEVfU1RBVFVTLFxuICAgICAgICBzaGFkZXIgPSBjb250ZXh0LmNyZWF0ZVNoYWRlcih0eXBlKTtcblxuICBjb250ZXh0LnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclNvdXJjZSk7XG5cbiAgY29udGV4dC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgY29uc3QgY29tcGlsZVN0YXR1cyA9IGNvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgcG5hbWUpO1xuXG4gIGlmICghY29tcGlsZVN0YXR1cykge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGNyZWF0ZSB0aGUgc2hhZGVyLmApO1xuICB9XG5cbiAgcmV0dXJuIHNoYWRlcjtcbn1cbiJdfQ==