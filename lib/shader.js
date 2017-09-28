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
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      this.createVertexPositionBuffer(this.vertexPositionData, canvas);
      this.createVertexNormalBuffer(this.vertexNormalData, canvas);

      this.count = canvas.createAndBindElementBuffer(this.vertexIndexData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaGFkZXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwibWVyZ2UiLCJhZGQiLCJub3JtYWxNYXRyaXhOYW1lIiwicm90YXRpb25NYXRyaXhOYW1lIiwicG9zaXRpb25NYXRyaXhOYW1lIiwicGVyc3BlY3RpdmVNYXRyaXhOYW1lIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lIiwidmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSIsImNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlIiwiY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2UiLCJTaGFkZXIiLCJwcm9ncmFtIiwiY2FudmFzIiwibm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwicm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsImdldEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24iLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidmVydGV4SW5kZXhEYXRhIiwiY291bnQiLCJjcmVhdGVWZXJ0ZXhQb3NpdGlvbkJ1ZmZlciIsImNyZWF0ZVZlcnRleE5vcm1hbEJ1ZmZlciIsImNyZWF0ZUFuZEJpbmRFbGVtZW50QnVmZmVyIiwidmVydGV4UG9zaXRpb25CdWZmZXIiLCJjcmVhdGVCdWZmZXIiLCJ2ZXJ0ZXhOb3JtYWxCdWZmZXIiLCJiaW5kVmVydGV4Tm9ybWFsQnVmZmVyIiwiYmluZFZlcnRleFBvc2l0aW9uQnVmZmVyIiwidmVydGV4Tm9ybWFsQ29tcG9uZW50cyIsImJpbmRCdWZmZXIiLCJ2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMiLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJnZXRDb250ZXh0IiwiVkVSVEVYX1NIQURFUiIsImNvbnRleHQiLCJ0eXBlIiwidmVydGV4U2hhZGVyIiwiY3JlYXRlU2hhZGVyIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJGUkFHTUVOVF9TSEFERVIiLCJDbGFzcyIsInNoYWRlciIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJzaGFkZXJTb3VyY2UiLCJDT01QSUxFX1NUQVRVUyIsInBuYW1lIiwiY29tcGlsZVNoYWRlciIsImNvbXBpbGVTdGF0dXMiLCJnZXRTaGFkZXJQYXJhbWV0ZXIiLCJzaGFkZXJJbmZvTG9nIiwiZ2V0U2hhZGVySW5mb0xvZyIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVNLElBQUVDLGNBQUYsR0FBcUJGLFNBQXJCLENBQUVFLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lELGNBRFosQ0FDRUMsS0FERjtBQUFBLElBRUFDLEdBRkEsR0FFTUQsS0FGTixDLENBRWM7O0FBRXBCLElBQU1FLG1CQUFtQixlQUF6QjtBQUFBLElBQ01DLHFCQUFxQixpQkFEM0I7QUFBQSxJQUVNQyxxQkFBcUIsaUJBRjNCO0FBQUEsSUFHTUMsd0JBQXdCLG9CQUg5QjtBQUFBLElBSU1DLDhCQUE4QixpQkFKcEM7QUFBQSxJQUtNQyw0QkFBNEIsZUFMbEM7QUFBQSxJQU1NQyx3REFFaUJOLGdCQUZqQixvQ0FJbUJLLHlCQUpuQiw0UUFXK0JMLGdCQVgvQixnQkFXMERLLHlCQVgxRCw2UUFOTjtBQUFBLElBMkJNRSx3REFFaUJOLGtCQUZqQixnQ0FHaUJDLGtCQUhqQixnQ0FJaUJDLHFCQUpqQiw0Q0FNbUJDLDJCQU5uQiwyRUFTc0JELHFCQVR0QixXQVNpREQsa0JBVGpELFdBU3lFRCxrQkFUekUsV0FTaUdHLDJCQVRqRywyRUEzQk47O0lBMkNNSSxNO0FBQ0osa0JBQVlDLE9BQVosRUFBcUJDLE1BQXJCLEVBQTZCO0FBQUE7O0FBQzNCLFNBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtFLDJCQUFMLEdBQW1DRCxPQUFPRSxrQkFBUCxDQUEwQkgsT0FBMUIsRUFBbUNULGdCQUFuQyxDQUFuQztBQUNBLFNBQUthLDZCQUFMLEdBQXFDSCxPQUFPRSxrQkFBUCxDQUEwQkgsT0FBMUIsRUFBbUNSLGtCQUFuQyxDQUFyQztBQUNBLFNBQUthLDZCQUFMLEdBQXFDSixPQUFPRSxrQkFBUCxDQUEwQkgsT0FBMUIsRUFBbUNQLGtCQUFuQyxDQUFyQztBQUNBLFNBQUthLGdDQUFMLEdBQXdDTCxPQUFPRSxrQkFBUCxDQUEwQkgsT0FBMUIsRUFBbUNOLHFCQUFuQyxDQUF4QztBQUNBLFNBQUthLCtCQUFMLEdBQXVDTixPQUFPTyxvQkFBUCxDQUE0QlIsT0FBNUIsRUFBcUNMLDJCQUFyQyxDQUF2QztBQUNBLFNBQUtjLDZCQUFMLEdBQXFDUixPQUFPTyxvQkFBUCxDQUE0QlIsT0FBNUIsRUFBcUNKLHlCQUFyQyxDQUFyQzs7QUFFQSxTQUFLYyxrQkFBTCxHQUEwQixFQUExQjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCLEVBQXhCO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QixFQUF2QjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS2IsT0FBWjtBQUNEOzs7cURBRWdDO0FBQy9CLGFBQU8sS0FBS0UsMkJBQVo7QUFDRDs7O3VEQUVrQztBQUNqQyxhQUFPLEtBQUtFLDZCQUFaO0FBQ0Q7Ozt1REFFa0M7QUFDakMsYUFBTyxLQUFLQyw2QkFBWjtBQUNEOzs7MERBRXFDO0FBQ3BDLGFBQU8sS0FBS0MsZ0NBQVo7QUFDRDs7OzBDQUVxQkksa0IsRUFBb0I7QUFDeENwQixVQUFJLEtBQUtvQixrQkFBVCxFQUE2QkEsa0JBQTdCO0FBQ0Q7Ozt3Q0FFbUJDLGdCLEVBQWtCO0FBQ3BDckIsVUFBSSxLQUFLcUIsZ0JBQVQsRUFBMkJBLGdCQUEzQjtBQUNEOzs7dUNBRWtCQyxlLEVBQWlCO0FBQ2xDdEIsVUFBSSxLQUFLc0IsZUFBVCxFQUEwQkEsZUFBMUI7QUFDRDs7O2tDQUVhWCxNLEVBQVE7QUFDcEIsV0FBS2EsMEJBQUwsQ0FBZ0MsS0FBS0osa0JBQXJDLEVBQXlEVCxNQUF6RDtBQUNBLFdBQUtjLHdCQUFMLENBQThCLEtBQUtKLGdCQUFuQyxFQUFxRFYsTUFBckQ7O0FBRUEsV0FBS1ksS0FBTCxHQUFhWixPQUFPZSwwQkFBUCxDQUFrQyxLQUFLSixlQUF2QyxDQUFiO0FBQ0Q7OzsrQ0FFMEJGLGtCLEVBQW9CVCxNLEVBQVE7QUFDckQsV0FBS2dCLG9CQUFMLEdBQTRCaEIsT0FBT2lCLFlBQVAsQ0FBb0JSLGtCQUFwQixDQUE1QjtBQUNEOzs7NkNBRXdCQyxnQixFQUFrQlYsTSxFQUFRO0FBQ2pELFdBQUtrQixrQkFBTCxHQUEwQmxCLE9BQU9pQixZQUFQLENBQW9CUCxnQkFBcEIsQ0FBMUI7QUFDRDs7O3lCQUVJVixNLEVBQVE7QUFDWCxXQUFLbUIsc0JBQUwsQ0FBNEJuQixNQUE1QjtBQUNBLFdBQUtvQix3QkFBTCxDQUE4QnBCLE1BQTlCO0FBQ0Q7OzsyQ0FFc0JBLE0sRUFBUTtBQUM3QixVQUFNcUIseUJBQXlCLENBQS9COztBQUVBckIsYUFBT3NCLFVBQVAsQ0FBa0IsS0FBS0osa0JBQXZCLEVBQTJDLEtBQUtWLDZCQUFoRCxFQUErRWEsc0JBQS9FO0FBQ0Q7Ozs2Q0FFd0JyQixNLEVBQVE7QUFDL0IsVUFBTXVCLDJCQUEyQixDQUFqQzs7QUFFQXZCLGFBQU9zQixVQUFQLENBQWtCLEtBQUtOLG9CQUF2QixFQUE2QyxLQUFLViwrQkFBbEQsRUFBbUZpQix3QkFBbkY7QUFDRDs7OzZCQUVRWCxLLEVBQU87QUFDZCxXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7O3VDQUV5Qlksa0IsRUFBb0J4QixNLEVBQVE7QUFDOUMsb0JBQVVBLE9BQU95QixVQUFQLEVBQVY7QUFBQSxVQUNFQyxhQURGLEdBQ29CQyxPQURwQixDQUNFRCxhQURGO0FBQUEsVUFFQUUsSUFGQSxHQUVPRixhQUZQO0FBQUEsVUFHQUcsWUFIQSxHQUdlQyxhQUFhRixJQUFiLEVBQW1CSixrQkFBbkIsRUFBdUNHLE9BQXZDLENBSGY7OztBQUtOLGFBQU9FLFlBQVA7QUFDRDs7O3lDQUUyQkUsb0IsRUFBc0IvQixNLEVBQVE7QUFDbEQsb0JBQVVBLE9BQU95QixVQUFQLEVBQVY7QUFBQSxVQUNFTyxlQURGLEdBQ3NCTCxPQUR0QixDQUNFSyxlQURGO0FBQUEsVUFFQUosSUFGQSxHQUVPSSxlQUZQO0FBQUEsVUFHQUgsWUFIQSxHQUdlQyxhQUFhRixJQUFiLEVBQW1CRyxvQkFBbkIsRUFBeUNKLE9BQXpDLENBSGY7OztBQUtOLGFBQU9FLFlBQVA7QUFDRDs7O2dDQUVrQkksSyxFQUFPbEMsTyxFQUFTQyxNLEVBQVE7QUFDekMsVUFBTWtDLFNBQVMsSUFBSUQsS0FBSixDQUFVbEMsT0FBVixFQUFtQkMsTUFBbkIsQ0FBZjs7QUFFQSxhQUFPa0MsTUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsTUFBUCxDQUFjdEMsTUFBZCxFQUFzQjtBQUNwQkYsMkJBQXlCQSx1QkFETDtBQUVwQkMsMkJBQXlCQTtBQUZMLENBQXRCOztBQUtBd0MsT0FBT0MsT0FBUCxHQUFpQnhDLE1BQWpCOztBQUVBLFNBQVNnQyxZQUFULENBQXNCRixJQUF0QixFQUE0QlcsWUFBNUIsRUFBMENaLE9BQTFDLEVBQW1EO0FBQzNDLE1BQUVhLGNBQUYsR0FBcUJiLE9BQXJCLENBQUVhLGNBQUY7QUFBQSxNQUNBQyxLQURBLEdBQ1FELGNBRFI7QUFBQSxNQUVBTixNQUZBLEdBRVNQLFFBQVFHLFlBQVIsQ0FBcUJGLElBQXJCLENBRlQ7OztBQUlORCxVQUFRWSxZQUFSLENBQXFCTCxNQUFyQixFQUE2QkssWUFBN0I7O0FBRUFaLFVBQVFlLGFBQVIsQ0FBc0JSLE1BQXRCOztBQUVBLE1BQU1TLGdCQUFnQmhCLFFBQVFpQixrQkFBUixDQUEyQlYsTUFBM0IsRUFBbUNPLEtBQW5DLENBQXRCOztBQUVBLE1BQUksQ0FBQ0UsYUFBTCxFQUFvQjtBQUNsQixRQUFNRSxnQkFBZ0JsQixRQUFRbUIsZ0JBQVIsQ0FBeUJaLE1BQXpCLENBQXRCOztBQUVBLFVBQU0sSUFBSWEsS0FBSixnQ0FBTjtBQUNEOztBQUVELFNBQU9iLE1BQVA7QUFDRCIsImZpbGUiOiJzaGFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IG1lcmdlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNvbnN0IG5vcm1hbE1hdHJpeE5hbWUgPSAndU5vcm1hbE1hdHJpeCcsXG4gICAgICByb3RhdGlvbk1hdHJpeE5hbWUgPSAndVJvdGF0aW9uTWF0cml4JyxcbiAgICAgIHBvc2l0aW9uTWF0cml4TmFtZSA9ICd1UG9zaXRpb25NYXRyaXgnLFxuICAgICAgcGVyc3BlY3RpdmVNYXRyaXhOYW1lID0gJ3VQZXJzcGVjdGl2ZU1hdHJpeCcsXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUgPSAnYVZlcnRleFBvc2l0aW9uJyxcbiAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUgPSAnYVZlcnRleE5vcm1hbCcsXG4gICAgICBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSA9IGBcblxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtub3JtYWxNYXRyaXhOYW1lfTtcblxuICAgICAgICBhdHRyaWJ1dGUgdmVjMyAke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzMgYW1iaWVudExpZ2h0ID0gdmVjMygwLjMsIDAuMywgMC4zKSxcbiAgICAgICAgICAgICBkaXJlY3Rpb25hbExpZ2h0Q29sb3VyID0gdmVjMygxLCAxLCAxKSxcbiAgICAgICAgICAgICBkaXJlY3Rpb25hbFZlY3RvciA9IG5vcm1hbGl6ZSh2ZWMzKDAuODUsIDAuOCwgMC43NSkpO1xuICAgICAgICAgIFxuICAgICAgICB2ZWMzIGNhbGN1bGF0ZUxpZ2h0aW5nKCkge1xuICAgICAgICAgIHZlYzQgdHJhbnNmb3JtZWROb3JtYWwgPSAke25vcm1hbE1hdHJpeE5hbWV9ICogdmVjNCgke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9LCAxLjApOyAgICAgICAgICAgIFxuXG4gICAgICAgICAgZmxvYXQgZGlyZWN0aW9uYWwgPSBtYXgoZG90KHRyYW5zZm9ybWVkTm9ybWFsLnh5eiwgZGlyZWN0aW9uYWxWZWN0b3IpLCAwLjApO1xuICAgICAgICAgIFxuICAgICAgICAgIHZlYzMgbGlnaHRpbmcgPSBhbWJpZW50TGlnaHQgKyAoZGlyZWN0aW9uYWxMaWdodENvbG91ciAqIGRpcmVjdGlvbmFsKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gbGlnaHRpbmc7XG4gICAgICAgIH1cblxuICAgICAgYCxcbiAgICAgIGNhbGN1bGF0ZVBvc2l0aW9uU291cmNlID0gYFxuXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke3JvdGF0aW9uTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Bvc2l0aW9uTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3BlcnNwZWN0aXZlTWF0cml4TmFtZX07XG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgdmVjNCBjYWxjdWxhdGVQb3NpdGlvbigpIHtcbiAgICAgICAgICB2ZWM0IHBvc2l0aW9uID0gJHtwZXJzcGVjdGl2ZU1hdHJpeE5hbWV9ICogJHtwb3NpdGlvbk1hdHJpeE5hbWV9ICogJHtyb3RhdGlvbk1hdHJpeE5hbWV9ICogJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGA7XG5cbmNsYXNzIFNoYWRlciB7XG4gIGNvbnN0cnVjdG9yKHByb2dyYW0sIGNhbnZhcykge1xuICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgdGhpcy5ub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5vcm1hbE1hdHJpeE5hbWUpO1xuICAgIHRoaXMucm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHJvdGF0aW9uTWF0cml4TmFtZSk7XG4gICAgdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcG9zaXRpb25NYXRyaXhOYW1lKTtcbiAgICB0aGlzLnBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwZXJzcGVjdGl2ZU1hdHJpeE5hbWUpO1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUpO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSk7XG5cbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uRGF0YSA9IFtdO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsRGF0YSA9IFtdO1xuICAgIHRoaXMudmVydGV4SW5kZXhEYXRhID0gW107XG4gIH1cblxuICBnZXRDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb3VudDtcbiAgfVxuXG4gIGdldFByb2dyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZ3JhbTtcbiAgfVxuXG4gIGdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBhZGRWZXJ0ZXhQb3NpdGlvbkRhdGEodmVydGV4UG9zaXRpb25EYXRhKSB7XG4gICAgYWRkKHRoaXMudmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhOb3JtYWxEYXRhKSB7XG4gICAgYWRkKHRoaXMudmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhJbmRleERhdGEodmVydGV4SW5kZXhEYXRhKSB7XG4gICAgYWRkKHRoaXMudmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhJbmRleERhdGEpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleFBvc2l0aW9uQnVmZmVyKHRoaXMudmVydGV4UG9zaXRpb25EYXRhLCBjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4Tm9ybWFsQnVmZmVyKHRoaXMudmVydGV4Tm9ybWFsRGF0YSwgY2FudmFzKTtcblxuICAgIHRoaXMuY291bnQgPSBjYW52YXMuY3JlYXRlQW5kQmluZEVsZW1lbnRCdWZmZXIodGhpcy52ZXJ0ZXhJbmRleERhdGEpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4UG9zaXRpb25CdWZmZXIodmVydGV4UG9zaXRpb25EYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Tm9ybWFsQnVmZmVyKHZlcnRleE5vcm1hbERhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Tm9ybWFsQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhOb3JtYWxEYXRhKTtcbiAgfVxuXG4gIGJpbmQoY2FudmFzKSB7XG4gICAgdGhpcy5iaW5kVmVydGV4Tm9ybWFsQnVmZmVyKGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4UG9zaXRpb25CdWZmZXIoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhOb3JtYWxCdWZmZXIoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyA9IDM7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleE5vcm1hbEJ1ZmZlciwgdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4UG9zaXRpb25CdWZmZXIoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25Db21wb25lbnRzID0gMztcblxuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4UG9zaXRpb25CdWZmZXIsIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25Db21wb25lbnRzKTtcbiAgfVxuXG4gIHNldENvdW50KGNvdW50KSB7XG4gICAgdGhpcy5jb3VudCA9IGNvdW50O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHsgVkVSVEVYX1NIQURFUiB9ID0gY29udGV4dCxcbiAgICAgICAgICB0eXBlID0gVkVSVEVYX1NIQURFUixcbiAgICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIodHlwZSwgdmVydGV4U2hhZGVyU291cmNlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHsgRlJBR01FTlRfU0hBREVSIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHR5cGUgPSBGUkFHTUVOVF9TSEFERVIsXG4gICAgICAgICAgdmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKHR5cGUsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2dyYW0oQ2xhc3MsIHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHNoYWRlciA9IG5ldyBDbGFzcyhwcm9ncmFtLCBjYW52YXMpO1xuXG4gICAgcmV0dXJuIHNoYWRlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNoYWRlciwge1xuICBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZTogY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2UsXG4gIGNhbGN1bGF0ZVBvc2l0aW9uU291cmNlOiBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2hhZGVyO1xuXG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIodHlwZSwgc2hhZGVyU291cmNlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ09NUElMRV9TVEFUVVMgfSA9IGNvbnRleHQsXG4gICAgICAgIHBuYW1lID0gQ09NUElMRV9TVEFUVVMsXG4gICAgICAgIHNoYWRlciA9IGNvbnRleHQuY3JlYXRlU2hhZGVyKHR5cGUpO1xuXG4gIGNvbnRleHQuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTtcblxuICBjb250ZXh0LmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICBjb25zdCBjb21waWxlU3RhdHVzID0gY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBwbmFtZSk7XG5cbiAgaWYgKCFjb21waWxlU3RhdHVzKSB7XG4gICAgY29uc3Qgc2hhZGVySW5mb0xvZyA9IGNvbnRleHQuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xuXG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIHRoZSBzaGFkZXIuYCk7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuIl19