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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaGFkZXIuanMiXSwibmFtZXMiOlsibm9ybWFsTWF0cml4TmFtZSIsInJvdGF0aW9uTWF0cml4TmFtZSIsInBvc2l0aW9uTWF0cml4TmFtZSIsInBlcnNwZWN0aXZlTWF0cml4TmFtZSIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUiLCJjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSIsImNhbGN1bGF0ZVBvc2l0aW9uU291cmNlIiwiU2hhZGVyIiwicHJvZ3JhbSIsIm5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJ2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleFBvc2l0aW9uRGF0YSIsImNhbnZhcyIsInZlcnRleFBvc2l0aW9uQnVmZmVyIiwiY3JlYXRlQnVmZmVyIiwidmVydGV4Tm9ybWFsRGF0YSIsInZlcnRleE5vcm1hbEJ1ZmZlciIsImJpbmRWZXJ0ZXhOb3JtYWxCdWZmZXIiLCJiaW5kVmVydGV4UG9zaXRpb25CdWZmZXIiLCJ2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzIiwiYmluZEJ1ZmZlciIsInZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyIsInZlcnRleFNoYWRlclNvdXJjZSIsImdldENvbnRleHQiLCJWRVJURVhfU0hBREVSIiwiY29udGV4dCIsInR5cGUiLCJ2ZXJ0ZXhTaGFkZXIiLCJjcmVhdGVTaGFkZXIiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsIkZSQUdNRU5UX1NIQURFUiIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwiZ2V0QXR0cmlidXRlTG9jYXRpb24iLCJzaGFkZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIiwic2hhZGVyU291cmNlIiwiQ09NUElMRV9TVEFUVVMiLCJwbmFtZSIsImNvbXBpbGVTaGFkZXIiLCJjb21waWxlU3RhdHVzIiwiZ2V0U2hhZGVyUGFyYW1ldGVyIiwic2hhZGVySW5mb0xvZyIsImdldFNoYWRlckluZm9Mb2ciLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLG1CQUFtQixlQUF6QjtBQUFBLElBQ01DLHFCQUFxQixpQkFEM0I7QUFBQSxJQUVNQyxxQkFBcUIsaUJBRjNCO0FBQUEsSUFHTUMsd0JBQXdCLG9CQUg5QjtBQUFBLElBSU1DLDhCQUE4QixpQkFKcEM7QUFBQSxJQUtNQyw0QkFBNEIsZUFMbEM7QUFBQSxJQU1NQyx3REFFaUJOLGdCQUZqQixvQ0FJbUJLLHlCQUpuQiw0UUFXK0JMLGdCQVgvQixnQkFXMERLLHlCQVgxRCw2UUFOTjtBQUFBLElBMkJNRSx3REFFaUJOLGtCQUZqQixnQ0FHaUJDLGtCQUhqQixnQ0FJaUJDLHFCQUpqQiw0Q0FNbUJDLDJCQU5uQiwyRUFTc0JELHFCQVR0QixXQVNpREQsa0JBVGpELFdBU3lFRCxrQkFUekUsV0FTaUdHLDJCQVRqRywyRUEzQk47O0lBMkNNSSxNO0FBQ0osa0JBQVlDLE9BQVosRUFBcUJDLDJCQUFyQixFQUFrREMsNkJBQWxELEVBQWlGQyw2QkFBakYsRUFBZ0hDLGdDQUFoSCxFQUFrSkMsK0JBQWxKLEVBQW1MQyw2QkFBbkwsRUFBa047QUFBQTs7QUFDaE4sU0FBS04sT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsMkJBQUwsR0FBbUNBLDJCQUFuQztBQUNBLFNBQUtDLDZCQUFMLEdBQXFDQSw2QkFBckM7QUFDQSxTQUFLQyw2QkFBTCxHQUFxQ0EsNkJBQXJDO0FBQ0EsU0FBS0MsZ0NBQUwsR0FBd0NBLGdDQUF4QztBQUNBLFNBQUtDLCtCQUFMLEdBQXVDQSwrQkFBdkM7QUFDQSxTQUFLQyw2QkFBTCxHQUFxQ0EsNkJBQXJD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YUFBT0csTUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsTUFBUCxDQUFjbEMsTUFBZCxFQUFzQjtBQUNwQkYsMkJBQXlCQSx1QkFETDtBQUVwQkMsMkJBQXlCQTtBQUZMLENBQXRCOztBQUtBb0MsT0FBT0MsT0FBUCxHQUFpQnBDLE1BQWpCOztBQUVBLFNBQVN5QixZQUFULENBQXNCRixJQUF0QixFQUE0QmMsWUFBNUIsRUFBMENmLE9BQTFDLEVBQW1EO0FBQzNDLE1BQUVnQixjQUFGLEdBQXFCaEIsT0FBckIsQ0FBRWdCLGNBQUY7QUFBQSxNQUNBQyxLQURBLEdBQ1FELGNBRFI7QUFBQSxNQUVBTixNQUZBLEdBRVNWLFFBQVFHLFlBQVIsQ0FBcUJGLElBQXJCLENBRlQ7OztBQUlORCxVQUFRZSxZQUFSLENBQXFCTCxNQUFyQixFQUE2QkssWUFBN0I7O0FBRUFmLFVBQVFrQixhQUFSLENBQXNCUixNQUF0Qjs7QUFFQSxNQUFNUyxnQkFBZ0JuQixRQUFRb0Isa0JBQVIsQ0FBMkJWLE1BQTNCLEVBQW1DTyxLQUFuQyxDQUF0Qjs7QUFFQSxNQUFJLENBQUNFLGFBQUwsRUFBb0I7QUFDbEIsUUFBTUUsZ0JBQWdCckIsUUFBUXNCLGdCQUFSLENBQXlCWixNQUF6QixDQUF0Qjs7QUFFQSxVQUFNLElBQUlhLEtBQUosZ0NBQU47QUFDRDs7QUFFRCxTQUFPYixNQUFQO0FBQ0QiLCJmaWxlIjoic2hhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBub3JtYWxNYXRyaXhOYW1lID0gJ3VOb3JtYWxNYXRyaXgnLFxuICAgICAgcm90YXRpb25NYXRyaXhOYW1lID0gJ3VSb3RhdGlvbk1hdHJpeCcsXG4gICAgICBwb3NpdGlvbk1hdHJpeE5hbWUgPSAndVBvc2l0aW9uTWF0cml4JyxcbiAgICAgIHBlcnNwZWN0aXZlTWF0cml4TmFtZSA9ICd1UGVyc3BlY3RpdmVNYXRyaXgnLFxuICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lID0gJ2FWZXJ0ZXhQb3NpdGlvbicsXG4gICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lID0gJ2FWZXJ0ZXhOb3JtYWwnLFxuICAgICAgY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2UgPSBgXG5cbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7bm9ybWFsTWF0cml4TmFtZX07XG5cbiAgICAgICAgYXR0cmlidXRlIHZlYzMgJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWMzIGFtYmllbnRMaWdodCA9IHZlYzMoMC4zLCAwLjMsIDAuMyksXG4gICAgICAgICAgICAgZGlyZWN0aW9uYWxMaWdodENvbG91ciA9IHZlYzMoMSwgMSwgMSksXG4gICAgICAgICAgICAgZGlyZWN0aW9uYWxWZWN0b3IgPSBub3JtYWxpemUodmVjMygwLjg1LCAwLjgsIDAuNzUpKTtcbiAgICAgICAgICBcbiAgICAgICAgdmVjMyBjYWxjdWxhdGVMaWdodGluZygpIHtcbiAgICAgICAgICB2ZWM0IHRyYW5zZm9ybWVkTm9ybWFsID0gJHtub3JtYWxNYXRyaXhOYW1lfSAqIHZlYzQoJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfSwgMS4wKTsgICAgICAgICAgICBcblxuICAgICAgICAgIGZsb2F0IGRpcmVjdGlvbmFsID0gbWF4KGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSwgMC4wKTtcbiAgICAgICAgICBcbiAgICAgICAgICB2ZWMzIGxpZ2h0aW5nID0gYW1iaWVudExpZ2h0ICsgKGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgKiBkaXJlY3Rpb25hbCk7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIGxpZ2h0aW5nO1xuICAgICAgICB9XG5cbiAgICAgIGAsXG4gICAgICBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZSA9IGBcblxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtyb3RhdGlvbk1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwb3NpdGlvbk1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwZXJzcGVjdGl2ZU1hdHJpeE5hbWV9O1xuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzQgY2FsY3VsYXRlUG9zaXRpb24oKSB7XG4gICAgICAgICAgdmVjNCBwb3NpdGlvbiA9ICR7cGVyc3BlY3RpdmVNYXRyaXhOYW1lfSAqICR7cG9zaXRpb25NYXRyaXhOYW1lfSAqICR7cm90YXRpb25NYXRyaXhOYW1lfSAqICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgO1xuXG5jbGFzcyBTaGFkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtLCBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICB0aGlzLm5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBwZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGdldFByb2dyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZ3JhbTtcbiAgfVxuXG4gIGdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleFBvc2l0aW9uQnVmZmVyKHZlcnRleFBvc2l0aW9uRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4UG9zaXRpb25EYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleE5vcm1hbEJ1ZmZlcih2ZXJ0ZXhOb3JtYWxEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleE5vcm1hbEJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Tm9ybWFsRGF0YSk7XG4gIH1cblxuICBiaW5kKGNhbnZhcykge1xuICAgIHRoaXMuYmluZFZlcnRleE5vcm1hbEJ1ZmZlcihjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleFBvc2l0aW9uQnVmZmVyKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kVmVydGV4Tm9ybWFsQnVmZmVyKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbENvbXBvbmVudHMgPSAzO1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhOb3JtYWxCdWZmZXIsIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbENvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleFBvc2l0aW9uQnVmZmVyKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyA9IDM7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleFBvc2l0aW9uQnVmZmVyLCB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgeyBWRVJURVhfU0hBREVSIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHR5cGUgPSBWRVJURVhfU0hBREVSLFxuICAgICAgICAgIHZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcih0eXBlLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgeyBGUkFHTUVOVF9TSEFERVIgfSA9IGNvbnRleHQsXG4gICAgICAgICAgdHlwZSA9IEZSQUdNRU5UX1NIQURFUixcbiAgICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIodHlwZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5vcm1hbE1hdHJpeE5hbWUpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCByb3RhdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwb3NpdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwZXJzcGVjdGl2ZU1hdHJpeE5hbWUpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICBzaGFkZXIgPSBuZXcgQ2xhc3MocHJvZ3JhbSwgbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBzaGFkZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTaGFkZXIsIHtcbiAgY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2U6IGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlLFxuICBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZTogY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2Vcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNoYWRlcjtcblxuZnVuY3Rpb24gY3JlYXRlU2hhZGVyKHR5cGUsIHNoYWRlclNvdXJjZSwgY29udGV4dCkge1xuICBjb25zdCB7IENPTVBJTEVfU1RBVFVTIH0gPSBjb250ZXh0LFxuICAgICAgICBwbmFtZSA9IENPTVBJTEVfU1RBVFVTLFxuICAgICAgICBzaGFkZXIgPSBjb250ZXh0LmNyZWF0ZVNoYWRlcih0eXBlKTtcblxuICBjb250ZXh0LnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclNvdXJjZSk7XG5cbiAgY29udGV4dC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgY29uc3QgY29tcGlsZVN0YXR1cyA9IGNvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgcG5hbWUpO1xuXG4gIGlmICghY29tcGlsZVN0YXR1cykge1xuICAgIGNvbnN0IHNoYWRlckluZm9Mb2cgPSBjb250ZXh0LmdldFNoYWRlckluZm9Mb2coc2hhZGVyKTtcblxuICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGNyZWF0ZSB0aGUgc2hhZGVyLmApO1xuICB9XG5cbiAgcmV0dXJuIHNoYWRlcjtcbn1cbiJdfQ==