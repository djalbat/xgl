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
    key: 'createAndBindVertexPositionBuffer',
    value: function createAndBindVertexPositionBuffer(vertexPositionData, canvas) {
      var vertexPositionBuffer = canvas.createBuffer(vertexPositionData),
          vertexPositionComponents = 3;

      canvas.bindBuffer(vertexPositionBuffer, this.vertexPositionAttributeLocation, vertexPositionComponents);

      var vertexPositionDataLength = vertexPositionData.length,
          count = vertexPositionDataLength / vertexPositionComponents;

      return count;
    }
  }, {
    key: 'createAndBindVertexNormalBuffer',
    value: function createAndBindVertexNormalBuffer(vertexNormalData, canvas) {
      var vertexNormalBuffer = canvas.createBuffer(vertexNormalData),
          vertexNormalComponents = 3;

      canvas.bindBuffer(vertexNormalBuffer, this.vertexNormalAttributeLocation, vertexNormalComponents);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaGFkZXIuanMiXSwibmFtZXMiOlsibm9ybWFsTWF0cml4TmFtZSIsInJvdGF0aW9uTWF0cml4TmFtZSIsInBvc2l0aW9uTWF0cml4TmFtZSIsInBlcnNwZWN0aXZlTWF0cml4TmFtZSIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUiLCJjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSIsImNhbGN1bGF0ZVBvc2l0aW9uU291cmNlIiwiU2hhZGVyIiwicHJvZ3JhbSIsIm5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJ2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleFBvc2l0aW9uRGF0YSIsImNhbnZhcyIsInZlcnRleFBvc2l0aW9uQnVmZmVyIiwiY3JlYXRlQnVmZmVyIiwidmVydGV4UG9zaXRpb25Db21wb25lbnRzIiwiYmluZEJ1ZmZlciIsInZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCIsImxlbmd0aCIsImNvdW50IiwidmVydGV4Tm9ybWFsRGF0YSIsInZlcnRleE5vcm1hbEJ1ZmZlciIsInZlcnRleE5vcm1hbENvbXBvbmVudHMiLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJjb250ZXh0IiwiVkVSVEVYX1NIQURFUiIsInR5cGUiLCJ2ZXJ0ZXhTaGFkZXIiLCJjcmVhdGVTaGFkZXIiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsIkZSQUdNRU5UX1NIQURFUiIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwiZ2V0QXR0cmlidXRlTG9jYXRpb24iLCJzaGFkZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIiwic2hhZGVyU291cmNlIiwiQ09NUElMRV9TVEFUVVMiLCJwbmFtZSIsImNvbXBpbGVTaGFkZXIiLCJjb21waWxlU3RhdHVzIiwiZ2V0U2hhZGVyUGFyYW1ldGVyIiwic2hhZGVySW5mb0xvZyIsImdldFNoYWRlckluZm9Mb2ciLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLG1CQUFtQixlQUF6QjtBQUFBLElBQ01DLHFCQUFxQixpQkFEM0I7QUFBQSxJQUVNQyxxQkFBcUIsaUJBRjNCO0FBQUEsSUFHTUMsd0JBQXdCLG9CQUg5QjtBQUFBLElBSU1DLDhCQUE4QixpQkFKcEM7QUFBQSxJQUtNQyw0QkFBNEIsZUFMbEM7QUFBQSxJQU1NQyx3REFFaUJOLGdCQUZqQixvQ0FJbUJLLHlCQUpuQiw0UUFXK0JMLGdCQVgvQixnQkFXMERLLHlCQVgxRCw2UUFOTjtBQUFBLElBMkJNRSx3REFFaUJOLGtCQUZqQixnQ0FHaUJDLGtCQUhqQixnQ0FJaUJDLHFCQUpqQiw0Q0FNbUJDLDJCQU5uQiwyRUFTc0JELHFCQVR0QixXQVNpREQsa0JBVGpELFdBU3lFRCxrQkFUekUsV0FTaUdHLDJCQVRqRywyRUEzQk47O0lBMkNNSSxNO0FBQ0osa0JBQVlDLE9BQVosRUFBcUJDLDJCQUFyQixFQUFrREMsNkJBQWxELEVBQWlGQyw2QkFBakYsRUFBZ0hDLGdDQUFoSCxFQUFrSkMsK0JBQWxKLEVBQW1MQyw2QkFBbkwsRUFBa047QUFBQTs7QUFDaE4sU0FBS04sT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsMkJBQUwsR0FBbUNBLDJCQUFuQztBQUNBLFNBQUtDLDZCQUFMLEdBQXFDQSw2QkFBckM7QUFDQSxTQUFLQyw2QkFBTCxHQUFxQ0EsNkJBQXJDO0FBQ0EsU0FBS0MsZ0NBQUwsR0FBd0NBLGdDQUF4QztBQUNBLFNBQUtDLCtCQUFMLEdBQXVDQSwrQkFBdkM7QUFDQSxTQUFLQyw2QkFBTCxHQUFxQ0EsNkJBQXJDO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxh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U0FBU3lCLFlBQVQsQ0FBc0JGLElBQXRCLEVBQTRCYyxZQUE1QixFQUEwQ2hCLE9BQTFDLEVBQW1EO0FBQzNDLE1BQUVpQixjQUFGLEdBQXFCakIsT0FBckIsQ0FBRWlCLGNBQUY7QUFBQSxNQUNBQyxLQURBLEdBQ1FELGNBRFI7QUFBQSxNQUVBTixNQUZBLEdBRVNYLFFBQVFJLFlBQVIsQ0FBcUJGLElBQXJCLENBRlQ7OztBQUlORixVQUFRZ0IsWUFBUixDQUFxQkwsTUFBckIsRUFBNkJLLFlBQTdCOztBQUVBaEIsVUFBUW1CLGFBQVIsQ0FBc0JSLE1BQXRCOztBQUVBLE1BQU1TLGdCQUFnQnBCLFFBQVFxQixrQkFBUixDQUEyQlYsTUFBM0IsRUFBbUNPLEtBQW5DLENBQXRCOztBQUVBLE1BQUksQ0FBQ0UsYUFBTCxFQUFvQjtBQUNsQixRQUFNRSxnQkFBZ0J0QixRQUFRdUIsZ0JBQVIsQ0FBeUJaLE1BQXpCLENBQXRCOztBQUVBLFVBQU0sSUFBSWEsS0FBSixnQ0FBTjtBQUNEOztBQUVELFNBQU9iLE1BQVA7QUFDRCIsImZpbGUiOiJzaGFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5vcm1hbE1hdHJpeE5hbWUgPSAndU5vcm1hbE1hdHJpeCcsXG4gICAgICByb3RhdGlvbk1hdHJpeE5hbWUgPSAndVJvdGF0aW9uTWF0cml4JyxcbiAgICAgIHBvc2l0aW9uTWF0cml4TmFtZSA9ICd1UG9zaXRpb25NYXRyaXgnLFxuICAgICAgcGVyc3BlY3RpdmVNYXRyaXhOYW1lID0gJ3VQZXJzcGVjdGl2ZU1hdHJpeCcsXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUgPSAnYVZlcnRleFBvc2l0aW9uJyxcbiAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUgPSAnYVZlcnRleE5vcm1hbCcsXG4gICAgICBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSA9IGBcblxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtub3JtYWxNYXRyaXhOYW1lfTtcblxuICAgICAgICBhdHRyaWJ1dGUgdmVjMyAke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzMgYW1iaWVudExpZ2h0ID0gdmVjMygwLjMsIDAuMywgMC4zKSxcbiAgICAgICAgICAgICBkaXJlY3Rpb25hbExpZ2h0Q29sb3VyID0gdmVjMygxLCAxLCAxKSxcbiAgICAgICAgICAgICBkaXJlY3Rpb25hbFZlY3RvciA9IG5vcm1hbGl6ZSh2ZWMzKDAuODUsIDAuOCwgMC43NSkpO1xuICAgICAgICAgIFxuICAgICAgICB2ZWMzIGNhbGN1bGF0ZUxpZ2h0aW5nKCkge1xuICAgICAgICAgIHZlYzQgdHJhbnNmb3JtZWROb3JtYWwgPSAke25vcm1hbE1hdHJpeE5hbWV9ICogdmVjNCgke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9LCAxLjApOyAgICAgICAgICAgIFxuXG4gICAgICAgICAgZmxvYXQgZGlyZWN0aW9uYWwgPSBtYXgoZG90KHRyYW5zZm9ybWVkTm9ybWFsLnh5eiwgZGlyZWN0aW9uYWxWZWN0b3IpLCAwLjApO1xuICAgICAgICAgIFxuICAgICAgICAgIHZlYzMgbGlnaHRpbmcgPSBhbWJpZW50TGlnaHQgKyAoZGlyZWN0aW9uYWxMaWdodENvbG91ciAqIGRpcmVjdGlvbmFsKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gbGlnaHRpbmc7XG4gICAgICAgIH1cblxuICAgICAgYCxcbiAgICAgIGNhbGN1bGF0ZVBvc2l0aW9uU291cmNlID0gYFxuXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke3JvdGF0aW9uTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Bvc2l0aW9uTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3BlcnNwZWN0aXZlTWF0cml4TmFtZX07XG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgdmVjNCBjYWxjdWxhdGVQb3NpdGlvbigpIHtcbiAgICAgICAgICB2ZWM0IHBvc2l0aW9uID0gJHtwZXJzcGVjdGl2ZU1hdHJpeE5hbWV9ICogJHtwb3NpdGlvbk1hdHJpeE5hbWV9ICogJHtyb3RhdGlvbk1hdHJpeE5hbWV9ICogJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGA7XG5cbmNsYXNzIFNoYWRlciB7XG4gIGNvbnN0cnVjdG9yKHByb2dyYW0sIG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgIHRoaXMubm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5wZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb247XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UHJvZ3JhbSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9ncmFtO1xuICB9XG5cbiAgZ2V0Tm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlQW5kQmluZFZlcnRleFBvc2l0aW9uQnVmZmVyKHZlcnRleFBvc2l0aW9uRGF0YSwgY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25CdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleFBvc2l0aW9uRGF0YSksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25Db21wb25lbnRzID0gMztcblxuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHZlcnRleFBvc2l0aW9uQnVmZmVyLCB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyk7XG5cbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkRhdGFMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbkRhdGEubGVuZ3RoLFxuICAgICAgICAgIGNvdW50ID0gdmVydGV4UG9zaXRpb25EYXRhTGVuZ3RoIC8gdmVydGV4UG9zaXRpb25Db21wb25lbnRzO1xuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgY3JlYXRlQW5kQmluZFZlcnRleE5vcm1hbEJ1ZmZlcih2ZXJ0ZXhOb3JtYWxEYXRhLCBjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleE5vcm1hbERhdGEpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbENvbXBvbmVudHMgPSAzO1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodmVydGV4Tm9ybWFsQnVmZmVyLCB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBWRVJURVhfU0hBREVSIH0gPSBjb250ZXh0LFxuICAgICAgICB0eXBlID0gVkVSVEVYX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKHR5cGUsIHZlcnRleFNoYWRlclNvdXJjZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmVydGV4U2hhZGVyO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBGUkFHTUVOVF9TSEFERVIgfSA9IGNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBGUkFHTUVOVF9TSEFERVIsXG4gICAgICAgIHZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcih0eXBlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmVydGV4U2hhZGVyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9ncmFtKENsYXNzLCBwcm9ncmFtLCBjYW52YXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbm9ybWFsTWF0cml4TmFtZSksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHJvdGF0aW9uTWF0cml4TmFtZSksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHBvc2l0aW9uTWF0cml4TmFtZSksXG4gICAgICAgICAgcGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHBlcnNwZWN0aXZlTWF0cml4TmFtZSksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHNoYWRlciA9IG5ldyBDbGFzcyhwcm9ncmFtLCBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHNoYWRlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNoYWRlciwge1xuICBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZTogY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2UsXG4gIGNhbGN1bGF0ZVBvc2l0aW9uU291cmNlOiBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2hhZGVyO1xuXG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIodHlwZSwgc2hhZGVyU291cmNlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ09NUElMRV9TVEFUVVMgfSA9IGNvbnRleHQsXG4gICAgICAgIHBuYW1lID0gQ09NUElMRV9TVEFUVVMsXG4gICAgICAgIHNoYWRlciA9IGNvbnRleHQuY3JlYXRlU2hhZGVyKHR5cGUpO1xuXG4gIGNvbnRleHQuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTtcblxuICBjb250ZXh0LmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICBjb25zdCBjb21waWxlU3RhdHVzID0gY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBwbmFtZSk7XG5cbiAgaWYgKCFjb21waWxlU3RhdHVzKSB7XG4gICAgY29uc3Qgc2hhZGVySW5mb0xvZyA9IGNvbnRleHQuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xuXG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIHRoZSBzaGFkZXIuYCk7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuIl19