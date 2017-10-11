'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

var vertexPositionComponents = 3,
    vertexNormalComponents = 3;

var Shader = function () {
  function Shader(program, uniformLocations, attributeLocations) {
    _classCallCheck(this, Shader);

    this.program = program;
    this.uniformLocations = uniformLocations;
    this.attributeLocations = attributeLocations;

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
      vertexShader = canvas.createShader(type, vertexShaderSource);


  return vertexShader;
}

function createFragmentShader(fragmentShaderSource, canvas) {
  var context = canvas.getContext(),
      FRAGMENT_SHADER = context.FRAGMENT_SHADER,
      type = FRAGMENT_SHADER,
      vertexShader = canvas.createShader(type, fragmentShaderSource);


  return vertexShader;
}

Object.assign(Shader, {
  createVertexShader: createVertexShader,
  createFragmentShader: createFragmentShader
});

module.exports = Shader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaGFkZXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwibWVyZ2UiLCJhZGQiLCJ2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMiLCJ2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzIiwiU2hhZGVyIiwicHJvZ3JhbSIsInVuaWZvcm1Mb2NhdGlvbnMiLCJhdHRyaWJ1dGVMb2NhdGlvbnMiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidmVydGV4SW5kZXhEYXRhIiwibWF4aW11bVZlcnRleEluZGV4IiwidmVydGV4SW5kZXhEYXRhTGVuZ3RoIiwibGVuZ3RoIiwiY291bnQiLCJnZXRPZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsIm9mZnNldCIsIm1hcCIsInZlcnRleEluZGV4IiwiTWF0aCIsIm1heCIsImNhbnZhcyIsImNyZWF0ZVZlcnRleFBvc2l0aW9uQnVmZmVyIiwiY3JlYXRlVmVydGV4Tm9ybWFsQnVmZmVyIiwiY3JlYXRlVmVydGV4SW5kZXhFbGVtZW50QnVmZmVyIiwiYmluZFZlcnRleE5vcm1hbEJ1ZmZlciIsImJpbmRWZXJ0ZXhQb3NpdGlvbkJ1ZmZlciIsImJpbmRWZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIiLCJ2ZXJ0ZXhQb3NpdGlvbkJ1ZmZlciIsImNyZWF0ZUJ1ZmZlciIsInZlcnRleE5vcm1hbEJ1ZmZlciIsInZlcnRleEluZGV4RWxlbWVudEJ1ZmZlciIsImNyZWF0ZUVsZW1lbnRCdWZmZXIiLCJ2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwiYmluZEJ1ZmZlciIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwiYmluZEVsZW1lbnRCdWZmZXIiLCJjcmVhdGVWZXJ0ZXhTaGFkZXIiLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJnZXRDb250ZXh0IiwiVkVSVEVYX1NIQURFUiIsImNvbnRleHQiLCJ0eXBlIiwidmVydGV4U2hhZGVyIiwiY3JlYXRlU2hhZGVyIiwiY3JlYXRlRnJhZ21lbnRTaGFkZXIiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsIkZSQUdNRU5UX1NIQURFUiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFTSxJQUFFQyxjQUFGLEdBQXFCRixTQUFyQixDQUFFRSxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZRCxjQURaLENBQ0VDLEtBREY7QUFBQSxJQUVBQyxHQUZBLEdBRU1ELEtBRk4sQyxDQUVjOztBQUVwQixJQUFNRSwyQkFBMkIsQ0FBakM7QUFBQSxJQUNNQyx5QkFBeUIsQ0FEL0I7O0lBR01DLE07QUFDSixrQkFBWUMsT0FBWixFQUFxQkMsZ0JBQXJCLEVBQXVDQyxrQkFBdkMsRUFBMkQ7QUFBQTs7QUFDekQsU0FBS0YsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCQSxrQkFBMUI7O0FBRUEsU0FBS0Msa0JBQUwsR0FBMEIsRUFBMUI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QixFQUF4QjtBQUNBLFNBQUtDLGVBQUwsR0FBdUIsRUFBdkI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQixDQUFDLENBQTNCLENBUnlELENBUTNCO0FBQy9COzs7OytCQUVVO0FBQ1QsVUFBTUMsd0JBQXdCLEtBQUtGLGVBQUwsQ0FBcUJHLE1BQW5EO0FB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QUUsSUFGQSxHQUVPRixhQUZQO0FBQUEsTUFHQUcsWUFIQSxHQUdldEIsT0FBT3VCLFlBQVAsQ0FBb0JGLElBQXBCLEVBQTBCSixrQkFBMUIsQ0FIZjs7O0FBS04sU0FBT0ssWUFBUDtBQUNEOztBQUVELFNBQVNFLG9CQUFULENBQThCQyxvQkFBOUIsRUFBb0R6QixNQUFwRCxFQUE0RDtBQUNwRCxnQkFBVUEsT0FBT2tCLFVBQVAsRUFBVjtBQUFBLE1BQ0VRLGVBREYsR0FDc0JOLE9BRHRCLENBQ0VNLGVBREY7QUFBQSxNQUVBTCxJQUZBLEdBRU9LLGVBRlA7QUFBQSxNQUdBSixZQUhBLEdBR2V0QixPQUFPdUIsWUFBUCxDQUFvQkYsSUFBcEIsRUFBMEJJLG9CQUExQixDQUhmOzs7QUFLTixTQUFPSCxZQUFQO0FBQ0Q7O0FBRURLLE9BQU9DLE1BQVAsQ0FBY25ELE1BQWQsRUFBc0I7QUFDcEJ1QyxzQkFBb0JBLGtCQURBO0FBRXBCUSx3QkFBc0JBO0FBRkYsQ0FBdEI7O0FBS0FLLE9BQU9DLE9BQVAsR0FBaUJyRCxNQUFqQiIsImZpbGUiOiJzaGFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IG1lcmdlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNvbnN0IHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyA9IDMsXG4gICAgICB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzID0gMztcblxuY2xhc3MgU2hhZGVyIHtcbiAgY29uc3RydWN0b3IocHJvZ3JhbSwgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMgPSB1bmlmb3JtTG9jYXRpb25zO1xuICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zID0gYXR0cmlidXRlTG9jYXRpb25zO1xuXG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBbXTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbERhdGEgPSBbXTtcbiAgICB0aGlzLnZlcnRleEluZGV4RGF0YSA9IFtdO1xuICAgIHRoaXMubWF4aW11bVZlcnRleEluZGV4ID0gLTE7IC8vL1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhEYXRhTGVuZ3RoID0gdGhpcy52ZXJ0ZXhJbmRleERhdGEubGVuZ3RoLFxuICAgICAgICAgIGNvdW50ID0gdmVydGV4SW5kZXhEYXRhTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cblxuICBnZXRQcm9ncmFtKCkge1xuICAgIHJldHVybiB0aGlzLnByb2dyYW07XG4gIH1cblxuICBnZXRPZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0T2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0Tm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGFkZFZlcnRleFBvc2l0aW9uRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpIHtcbiAgICBhZGQodGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleFBvc2l0aW9uRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhOb3JtYWxEYXRhKHZlcnRleE5vcm1hbERhdGEpIHtcbiAgICBhZGQodGhpcy52ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleEluZGV4RGF0YSh2ZXJ0ZXhJbmRleERhdGEpIHtcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLm1heGltdW1WZXJ0ZXhJbmRleCArIDE7XG5cbiAgICB2ZXJ0ZXhJbmRleERhdGEgPSB2ZXJ0ZXhJbmRleERhdGEubWFwKGZ1bmN0aW9uKHZlcnRleEluZGV4KSB7XG4gICAgICByZXR1cm4gdmVydGV4SW5kZXggKyBvZmZzZXQ7XG4gICAgfSk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhJbmRleERhdGEsIHZlcnRleEluZGV4RGF0YSk7XG5cbiAgICB0aGlzLm1heGltdW1WZXJ0ZXhJbmRleCA9IE1hdGgubWF4KHRoaXMubWF4aW11bVZlcnRleEluZGV4LCAuLi52ZXJ0ZXhJbmRleERhdGEpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleFBvc2l0aW9uQnVmZmVyKGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhOb3JtYWxCdWZmZXIoY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleEluZGV4RWxlbWVudEJ1ZmZlcihjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgdGhpcy5iaW5kVmVydGV4Tm9ybWFsQnVmZmVyKGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4UG9zaXRpb25CdWZmZXIoY2FudmFzKTtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIoY2FudmFzKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleFBvc2l0aW9uQnVmZmVyKGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25CdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRoaXMudmVydGV4UG9zaXRpb25EYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleE5vcm1hbEJ1ZmZlcihjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleE5vcm1hbEJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodGhpcy52ZXJ0ZXhOb3JtYWxEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleEluZGV4RWxlbWVudEJ1ZmZlcihjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleEluZGV4RWxlbWVudEJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVFbGVtZW50QnVmZmVyKHRoaXMudmVydGV4SW5kZXhEYXRhKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCk7XG4gICAgXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhQb3NpdGlvbkJ1ZmZlciwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25Db21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhOb3JtYWxCdWZmZXIoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleE5vcm1hbEJ1ZmZlciwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbENvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleEluZGV4RWxlbWVudEJ1ZmZlcihjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEVsZW1lbnRCdWZmZXIodGhpcy52ZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoKSxcbiAgICAgICAgeyBWRVJURVhfU0hBREVSIH0gPSBjb250ZXh0LFxuICAgICAgICB0eXBlID0gVkVSVEVYX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gY2FudmFzLmNyZWF0ZVNoYWRlcih0eXBlLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UpO1xuXG4gIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgIHsgRlJBR01FTlRfU0hBREVSIH0gPSBjb250ZXh0LFxuICAgICAgICB0eXBlID0gRlJBR01FTlRfU0hBREVSLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBjYW52YXMuY3JlYXRlU2hhZGVyKHR5cGUsIGZyYWdtZW50U2hhZGVyU291cmNlKTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5PYmplY3QuYXNzaWduKFNoYWRlciwge1xuICBjcmVhdGVWZXJ0ZXhTaGFkZXI6IGNyZWF0ZVZlcnRleFNoYWRlcixcbiAgY3JlYXRlRnJhZ21lbnRTaGFkZXI6IGNyZWF0ZUZyYWdtZW50U2hhZGVyXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaGFkZXI7XG5cbiJdfQ==