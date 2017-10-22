'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = function () {
  function Renderer(program, uniformLocations, attributeLocations, rendererData, rendererBuffers) {
    _classCallCheck(this, Renderer);

    this.program = program;
    this.uniformLocations = uniformLocations;
    this.attributeLocations = attributeLocations;
    this.rendererData = rendererData;
    this.rendererBuffers = rendererBuffers;
  }

  _createClass(Renderer, [{
    key: 'getProgram',
    value: function getProgram() {
      return this.program;
    }
  }, {
    key: 'getUniformLocations',
    value: function getUniformLocations() {
      return this.uniformLocations;
    }
  }, {
    key: 'getAttributeLocations',
    value: function getAttributeLocations() {
      return this.attributeLocations;
    }
  }, {
    key: 'getRendererData',
    value: function getRendererData() {
      return this.rendererData;
    }
  }, {
    key: 'getRendererBuffers',
    value: function getRendererBuffers() {
      return this.rendererBuffers;
    }
  }, {
    key: 'getCount',
    value: function getCount() {
      return this.rendererData.getCount();
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
    key: 'addVertexPositions',
    value: function addVertexPositions(vertexPositions) {
      this.rendererData.addVertexPositions(vertexPositions);
    }
  }, {
    key: 'addVertexNormals',
    value: function addVertexNormals(vertexNormals) {
      this.rendererData.addVertexNormals(vertexNormals);
    }
  }, {
    key: 'addVertexIndexes',
    value: function addVertexIndexes(vertexIndexes) {
      this.rendererData.addVertexIndexes(vertexIndexes);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      var vertexPositionsData = this.rendererData.getVertexPositionsData(),
          vertexNormalsData = this.rendererData.getVertexNormalsData(),
          vertexIndexesData = this.rendererData.getVertexIndexesData();

      this.rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas);
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers(canvas) {
      var vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
          vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation();

      this.rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas);
    }
  }]);

  return Renderer;
}();

function createProgram(vertexShaderSource, fragmentShaderSource, canvas) {
  var vertexShader = canvas.createVertexShader(vertexShaderSource),
      fragmentShader = canvas.createFragmentShader(fragmentShaderSource),
      program = canvas.createProgram(vertexShader, fragmentShader);

  return program;
}

Object.assign(Renderer, {
  createProgram: createProgram
});

module.exports = Renderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZW5kZXJlci5qcyJdLCJuYW1lcyI6WyJSZW5kZXJlciIsInByb2dyYW0iLCJ1bmlmb3JtTG9jYXRpb25zIiwiYXR0cmlidXRlTG9jYXRpb25zIiwicmVuZGVyZXJEYXRhIiwicmVuZGVyZXJCdWZmZXJzIiwiZ2V0Q291bnQiLCJnZXRPZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleFBvc2l0aW9ucyIsImFkZFZlcnRleFBvc2l0aW9ucyIsInZlcnRleE5vcm1hbHMiLCJhZGRWZXJ0ZXhOb3JtYWxzIiwidmVydGV4SW5kZXhlcyIsImFkZFZlcnRleEluZGV4ZXMiLCJjYW52YXMiLCJ2ZXJ0ZXhQb3NpdGlvbnNEYXRhIiwiZ2V0VmVydGV4UG9zaXRpb25zRGF0YSIsInZlcnRleE5vcm1hbHNEYXRhIiwiZ2V0VmVydGV4Tm9ybWFsc0RhdGEiLCJ2ZXJ0ZXhJbmRleGVzRGF0YSIsImdldFZlcnRleEluZGV4ZXNEYXRhIiwiY3JlYXRlQnVmZmVycyIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsImJpbmRCdWZmZXJzIiwiY3JlYXRlUHJvZ3JhbSIsInZlcnRleFNoYWRlclNvdXJjZSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwidmVydGV4U2hhZGVyIiwiY3JlYXRlVmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJjcmVhdGVGcmFnbWVudFNoYWRlciIsIk9iamVjdCIsImFz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QUNEOztBQUVEcUMsT0FBT0MsTUFBUCxDQUFjdkMsUUFBZCxFQUF3QjtBQUN0QitCLGlCQUFlQTtBQURPLENBQXhCOztBQUlBUyxPQUFPQyxPQUFQLEdBQWlCekMsUUFBakIiLCJmaWxlIjoicmVuZGVyZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IocHJvZ3JhbSwgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycykge1xuICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgdGhpcy51bmlmb3JtTG9jYXRpb25zID0gdW5pZm9ybUxvY2F0aW9ucztcbiAgICB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucyA9IGF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgICB0aGlzLnJlbmRlcmVyRGF0YSA9IHJlbmRlcmVyRGF0YTtcbiAgICB0aGlzLnJlbmRlcmVyQnVmZmVycyA9IHJlbmRlcmVyQnVmZmVycztcbiAgfVxuXG4gIGdldFByb2dyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZ3JhbTtcbiAgfVxuICBcbiAgZ2V0VW5pZm9ybUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zO1xuICB9XG4gIFxuICBnZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG4gIFxuICBnZXRSZW5kZXJlckRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZXJEYXRhO1xuICB9XG4gIFxuICBnZXRSZW5kZXJlckJ1ZmZlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZXJCdWZmZXJzO1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7IHJldHVybiB0aGlzLnJlbmRlcmVyRGF0YS5nZXRDb3VudCgpOyB9XG5cbiAgZ2V0T2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCk7IH1cblxuICBnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCk7IH1cblxuICBhZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKSB7IHRoaXMucmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpOyB9XG5cbiAgYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKSB7IHRoaXMucmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7IH1cblxuICBhZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpIHsgdGhpcy5yZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTsgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7IFxuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0RhdGEgPSB0aGlzLnJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSB0aGlzLnJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhOb3JtYWxzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gdGhpcy5yZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKTtcbiAgICBcbiAgICB0aGlzLnJlbmRlcmVyQnVmZmVycy5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTsgXG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHsgXG4gICAgY29uc3QgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksIFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKTtcbiAgICBcbiAgICB0aGlzLnJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTsgXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgdmVydGV4U2hhZGVyID0gY2FudmFzLmNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UpLFxuICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNhbnZhcy5jcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSksXG4gICAgICAgIHByb2dyYW0gPSBjYW52YXMuY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcbiAgXG4gIHJldHVybiBwcm9ncmFtO1xufVxuXG5PYmplY3QuYXNzaWduKFJlbmRlcmVyLCB7XG4gIGNyZWF0ZVByb2dyYW06IGNyZWF0ZVByb2dyYW1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlcmVyO1xuIl19