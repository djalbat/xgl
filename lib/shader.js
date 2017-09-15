'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var normalMatrixName = 'uNormalMatrix',
    rotationMatrixName = 'uRotationMatrix',
    positionMatrixName = 'uPositionMatrix',
    perspectiveMatrixName = 'uPerspectiveMatrix',
    calculateLightingSource = '\n\n        attribute vec3 aVertexNormal;\n\n        uniform mat4 ' + normalMatrixName + ';\n\n        vec3 calculateLighting() {\n          vec3 lighting,\n               ambientLight = vec3(0.3, 0.3, 0.3),\n               directionalLightColour = vec3(1, 1, 1),\n               directionalVector = normalize(vec3(0.85, 0.8, 0.75));\n          \n          vec4 transformedNormal = ' + normalMatrixName + ' * vec4(aVertexNormal, 1.0);            \n\n          float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);\n          \n          lighting = ambientLight + (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      ',
    calculatePositionSource = '\n\n        attribute vec4 aVertexPosition;\n\n        uniform mat4 ' + rotationMatrixName + ';\n        uniform mat4 ' + positionMatrixName + ';\n        uniform mat4 ' + perspectiveMatrixName + ';\n        \n        vec4 calculatePosition() {\n          vec4 position;\n          \n          position = ' + perspectiveMatrixName + ' * ' + positionMatrixName + ' * ' + rotationMatrixName + ' * aVertexPosition;\n          \n          return position;\n        }\n        \n      ';

var Shader = function () {
  function Shader(program) {
    _classCallCheck(this, Shader);

    this.program = program;
  }

  _createClass(Shader, [{
    key: 'getProgram',
    value: function getProgram() {
      return this.program;
    }
  }, {
    key: 'createAndBindVertexPositionBuffer',
    value: function createAndBindVertexPositionBuffer(data, canvas) {
      var vertexPositionBuffer = canvas.createBuffer(data),
          vertexPositionAttributeLocation = canvas.getAttributeLocation(this.program, 'aVertexPosition'),
          vertexPositionComponents = 3;

      canvas.bindBuffer(vertexPositionBuffer, vertexPositionAttributeLocation, vertexPositionComponents);

      var dataLength = data.length,
          count = dataLength / vertexPositionComponents;

      return count;
    }
  }, {
    key: 'createAndBindVertexNormalBuffer',
    value: function createAndBindVertexNormalBuffer(data, canvas) {
      var vertexNormalBuffer = canvas.createBuffer(data),
          vertexNormalAttributeLocation = canvas.getAttributeLocation(this.program, 'aVertexNormal'),
          vertexNormalComponents = 3;

      canvas.bindBuffer(vertexNormalBuffer, vertexNormalAttributeLocation, vertexNormalComponents);
    }
  }], [{
    key: 'fromVertexShaderSourceAndFragmentShaderSource',
    value: function fromVertexShaderSourceAndFragmentShaderSource(Class, vertexShaderSource, fragmentShaderSource, canvas) {
      var context = canvas.getContext(),
          LINK_STATUS = context.LINK_STATUS,
          pname = LINK_STATUS,
          program = context.createProgram(),
          vertexShader = createVertexShader(vertexShaderSource, context),
          fragmentShader = createFragmentShader(fragmentShaderSource, context);


      context.attachShader(program, vertexShader);
      context.attachShader(program, fragmentShader);

      context.linkProgram(program);

      var linkStatus = context.getProgramParameter(program, pname);

      if (!linkStatus) {
        var message = context.getProgramInfoLog(program); ///

        throw new Error('Unable to create the colour shader program, \'' + message + '\'.');
      }

      var shader = new Class(program);

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

function createVertexShader(vertexShaderSource, context) {
  var VERTEX_SHADER = context.VERTEX_SHADER,
      type = VERTEX_SHADER,
      vertexShader = createShader(type, vertexShaderSource, context);


  return vertexShader;
}

function createFragmentShader(fragmentShaderSource, context) {
  var FRAGMENT_SHADER = context.FRAGMENT_SHADER,
      type = FRAGMENT_SHADER,
      vertexShader = createShader(type, fragmentShaderSource, context);


  return vertexShader;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaGFkZXIuanMiXSwibmFtZXMiOlsibm9ybWFsTWF0cml4TmFtZSIsInJvdGF0aW9uTWF0cml4TmFtZSIsInBvc2l0aW9uTWF0cml4TmFtZSIsInBlcnNwZWN0aXZlTWF0cml4TmFtZSIsImNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlIiwiY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2UiLCJTaGFkZXIiLCJwcm9ncmFtIiwiZGF0YSIsImNhbnZhcyIsInZlcnRleFBvc2l0aW9uQnVmZmVyIiwiY3JlYXRlQnVmZmVyIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsImdldEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4UG9zaXRpb25Db21wb25lbnRzIiwiYmluZEJ1ZmZlciIsImRhdGFMZW5ndGgiLCJsZW5ndGgiLCJjb3VudCIsInZlcnRleE5vcm1hbEJ1ZmZlciIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4Tm9ybWFsQ29tcG9uZW50cyIsIkNsYXNzIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJnZXRDb250ZXh0IiwiTElOS19TVEFUVVMiLCJjb250ZXh0IiwicG5hbWUiLCJjcmVhdGVQcm9ncmFtIiwidmVydGV4U2hhZGVyIiwiY3JlYXRlVmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJjcmVhdGVGcmFnbWVudFNoYWRlciIsImF0dGFjaFNoYWRlciIsImxpbmtQcm9ncmFtIiwibGlua1N0YXR1cyIsImdldFByb2dyYW1QYXJhbWV0ZXIiLCJtZXNzYWdlIiwiZ2V0UHJvZ3JhbUluZm9Mb2ciLCJFcnJvciIsInNoYWRlciIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJWRVJURVhfU0hBREVSIiwidHlwZSIsImNyZWF0ZVNoYWRlciIsIkZSQUdNRU5UX1NIQURFUiIsInNoYWRlclNvdXJjZSIsIkNPTVBJTEVfU1RBVFVTIiwiY29tcGlsZVNoYWRlciIsImNvbXBpbGVTdGF0dXMiLCJnZXRTaGFkZXJQYXJhbWV0ZXIiLCJzaGFkZXJJbmZvTG9nIiwiZ2V0U2hhZGVySW5mb0xvZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLG1CQUFtQixlQUF6QjtBQUFBLElBQ01DLHFCQUFxQixpQkFEM0I7QUFBQSxJQUVNQyxxQkFBcUIsaUJBRjNCO0FBQUEsSUFHTUMsd0JBQXdCLG9CQUg5QjtBQUFBLElBSU1DLGlHQUlpQkosZ0JBSmpCLDRTQVkrQkEsZ0JBWi9CLDZSQUpOO0FBQUEsSUEwQk1LLG1HQUlpQkosa0JBSmpCLGdDQUtpQkMsa0JBTGpCLGdDQU1pQkMscUJBTmpCLG9IQVdpQkEscUJBWGpCLFdBVzRDRCxrQkFYNUMsV0FXb0VELGtCQVhwRSw2RkExQk47O0lBNENNSyxNO0FBQ0osa0JBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtBLE9BQVo7QUFDRDs7O3NEQUVpQ0MsSSxFQUFNQyxNLEVBQVE7QUFDOUMsVUFBTUMsdUJBQXVCRCxPQUFPRSxZQUFQLENBQW9CSCxJQUFwQixDQUE3QjtBQUFBLFVBQ01JLGtDQUFrQ0gsT0FBT0ksb0JBQVAsQ0FBNEIsS0FBS04sT0FBakMsRUFBMEMsaUJBQTFDLENBRHhDO0FBQUEsVUFFTU8sMkJBQTJCLENBRmpDOztBQUlBTCxhQUFPTSxVQUFQLENBQWtCTCxvQkFBbEIsRUFBd0NFLCtCQUF4QyxFQUF5RUUsd0JBQXpFOztBQUVBLFVBQU1FLGFBQWFSLEtBQUtTLE1BQXhCO0FBQUEsVUFDTUMsUUFBUUYsYUFBYUYsd0JBRDNCOztBQUdBLGFBQU9JLEtBQVA7QUFDRDs7O29EQUUrQlYsSSxFQUFNQyxNLEVBQVE7QUFDNUMsVUFBTVUscUJBQXFCVixPQUFPRSxZQUFQLENBQW9CSCxJQUFwQixDQUEzQjtBQUFBLFVBQ01ZLGdDQUFnQ1gsT0FBT0ksb0JBQVAsQ0FBNEIsS0FBS04sT0FBakMsRUFB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TUFBUDtBQUNEIiwiZmlsZSI6InNoYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgbm9ybWFsTWF0cml4TmFtZSA9ICd1Tm9ybWFsTWF0cml4JyxcbiAgICAgIHJvdGF0aW9uTWF0cml4TmFtZSA9ICd1Um90YXRpb25NYXRyaXgnLFxuICAgICAgcG9zaXRpb25NYXRyaXhOYW1lID0gJ3VQb3NpdGlvbk1hdHJpeCcsXG4gICAgICBwZXJzcGVjdGl2ZU1hdHJpeE5hbWUgPSAndVBlcnNwZWN0aXZlTWF0cml4JyxcbiAgICAgIGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlID0gYFxuXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMzIGFWZXJ0ZXhOb3JtYWw7XG5cbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7bm9ybWFsTWF0cml4TmFtZX07XG5cbiAgICAgICAgdmVjMyBjYWxjdWxhdGVMaWdodGluZygpIHtcbiAgICAgICAgICB2ZWMzIGxpZ2h0aW5nLFxuICAgICAgICAgICAgICAgYW1iaWVudExpZ2h0ID0gdmVjMygwLjMsIDAuMywgMC4zKSxcbiAgICAgICAgICAgICAgIGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgPSB2ZWMzKDEsIDEsIDEpLFxuICAgICAgICAgICAgICAgZGlyZWN0aW9uYWxWZWN0b3IgPSBub3JtYWxpemUodmVjMygwLjg1LCAwLjgsIDAuNzUpKTtcbiAgICAgICAgICBcbiAgICAgICAgICB2ZWM0IHRyYW5zZm9ybWVkTm9ybWFsID0gJHtub3JtYWxNYXRyaXhOYW1lfSAqIHZlYzQoYVZlcnRleE5vcm1hbCwgMS4wKTsgICAgICAgICAgICBcblxuICAgICAgICAgIGZsb2F0IGRpcmVjdGlvbmFsID0gbWF4KGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSwgMC4wKTtcbiAgICAgICAgICBcbiAgICAgICAgICBsaWdodGluZyA9IGFtYmllbnRMaWdodCArIChkaXJlY3Rpb25hbExpZ2h0Q29sb3VyICogZGlyZWN0aW9uYWwpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBsaWdodGluZztcbiAgICAgICAgfVxuXG4gICAgICBgLFxuICAgICAgY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2UgPSBgXG5cbiAgICAgICAgYXR0cmlidXRlIHZlYzQgYVZlcnRleFBvc2l0aW9uO1xuXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke3JvdGF0aW9uTWF0cml4TmFtZX07XG4gICAgICAgIHVuaWZvcm0gbWF0NCAke3Bvc2l0aW9uTWF0cml4TmFtZX07XG4gICAgICAgIHVuaWZvcm0gbWF0NCAke3BlcnNwZWN0aXZlTWF0cml4TmFtZX07XG4gICAgICAgIFxuICAgICAgICB2ZWM0IGNhbGN1bGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICAgIHZlYzQgcG9zaXRpb247XG4gICAgICAgICAgXG4gICAgICAgICAgcG9zaXRpb24gPSAke3BlcnNwZWN0aXZlTWF0cml4TmFtZX0gKiAke3Bvc2l0aW9uTWF0cml4TmFtZX0gKiAke3JvdGF0aW9uTWF0cml4TmFtZX0gKiBhVmVydGV4UG9zaXRpb247XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYDtcblxuY2xhc3MgU2hhZGVyIHtcbiAgY29uc3RydWN0b3IocHJvZ3JhbSkge1xuICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gIH1cblxuICBnZXRQcm9ncmFtKCkge1xuICAgIHJldHVybiB0aGlzLnByb2dyYW07XG4gIH1cblxuICBjcmVhdGVBbmRCaW5kVmVydGV4UG9zaXRpb25CdWZmZXIoZGF0YSwgY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25CdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKGRhdGEpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24odGhpcy5wcm9ncmFtLCAnYVZlcnRleFBvc2l0aW9uJyksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25Db21wb25lbnRzID0gMztcblxuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHZlcnRleFBvc2l0aW9uQnVmZmVyLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMpO1xuXG4gICAgY29uc3QgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoLFxuICAgICAgICAgIGNvdW50ID0gZGF0YUxlbmd0aCAvIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cztcblxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIGNyZWF0ZUFuZEJpbmRWZXJ0ZXhOb3JtYWxCdWZmZXIoZGF0YSwgY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFsQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcihkYXRhKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbih0aGlzLnByb2dyYW0sICdhVmVydGV4Tm9ybWFsJyksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyA9IDM7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih2ZXJ0ZXhOb3JtYWxCdWZmZXIsIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4U2hhZGVyU291cmNlQW5kRnJhZ21lbnRTaGFkZXJTb3VyY2UoQ2xhc3MsIHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHsgTElOS19TVEFUVVMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcG5hbWUgPSBMSU5LX1NUQVRVUyxcbiAgICAgICAgICBwcm9ncmFtID0gY29udGV4dC5jcmVhdGVQcm9ncmFtKCksXG4gICAgICAgICAgdmVydGV4U2hhZGVyID0gY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY29udGV4dCksXG4gICAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY29udGV4dCk7XG4gIFxuICAgIGNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleFNoYWRlcik7XG4gICAgY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICBcbiAgICBjb250ZXh0LmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuICBcbiAgICBjb25zdCBsaW5rU3RhdHVzID0gY29udGV4dC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIHBuYW1lKTtcbiAgXG4gICAgaWYgKCFsaW5rU3RhdHVzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gY29udGV4dC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKTsgIC8vL1xuICBcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGNyZWF0ZSB0aGUgY29sb3VyIHNoYWRlciBwcm9ncmFtLCAnJHttZXNzYWdlfScuYCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hhZGVyID0gbmV3IENsYXNzKHByb2dyYW0pO1xuICBcbiAgICByZXR1cm4gc2hhZGVyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU2hhZGVyLCB7XG4gIGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlOiBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSxcbiAgY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2U6IGNhbGN1bGF0ZVBvc2l0aW9uU291cmNlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaGFkZXI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWRVJURVhfU0hBREVSIH0gPSBjb250ZXh0LFxuICAgICAgICB0eXBlID0gVkVSVEVYX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKHR5cGUsIHZlcnRleFNoYWRlclNvdXJjZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBGUkFHTUVOVF9TSEFERVIgfSA9IGNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBGUkFHTUVOVF9TSEFERVIsXG4gICAgICAgIHZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcih0eXBlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2hhZGVyKHR5cGUsIHNoYWRlclNvdXJjZSwgY29udGV4dCkge1xuICBjb25zdCB7IENPTVBJTEVfU1RBVFVTIH0gPSBjb250ZXh0LFxuICAgICAgICBwbmFtZSA9IENPTVBJTEVfU1RBVFVTLFxuICAgICAgICBzaGFkZXIgPSBjb250ZXh0LmNyZWF0ZVNoYWRlcih0eXBlKTtcblxuICBjb250ZXh0LnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclNvdXJjZSk7XG5cbiAgY29udGV4dC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgY29uc3QgY29tcGlsZVN0YXR1cyA9IGNvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgcG5hbWUpO1xuXG4gIGlmICghY29tcGlsZVN0YXR1cykge1xuICAgIGNvbnN0IHNoYWRlckluZm9Mb2cgPSBjb250ZXh0LmdldFNoYWRlckluZm9Mb2coc2hhZGVyKTtcblxuICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGNyZWF0ZSB0aGUgc2hhZGVyLmApO1xuICB9XG5cbiAgcmV0dXJuIHNoYWRlcjtcbn1cbiJdfQ==