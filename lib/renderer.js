'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = function () {
  function Renderer(program, uniformLocations, attributeLocations, rendererData) {
    _classCallCheck(this, Renderer);

    this.program = program;
    this.uniformLocations = uniformLocations;
    this.attributeLocations = attributeLocations;

    this.rendererData = rendererData;

    this.vertexPositionsBuffer = null; ///
    this.vertexNormalsBuffer = null; ///
    this.vertexIndexesElementBuffer = null; ///
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
      var vertexPositionsData = this.rendererData.getVertexPositionsData();

      this.vertexPositionsBuffer = canvas.createBuffer(vertexPositionsData);
    }
  }, {
    key: 'createVertexNormalBuffer',
    value: function createVertexNormalBuffer(canvas) {
      var vertexNormalsData = this.rendererData.getVertexNormalsData();

      this.vertexNormalsBuffer = canvas.createBuffer(vertexNormalsData);
    }
  }, {
    key: 'createVertexIndexElementBuffer',
    value: function createVertexIndexElementBuffer(canvas) {
      var vertexIndexesData = this.rendererData.getVertexIndexesData();

      this.vertexIndexesElementBuffer = canvas.createElementBuffer(vertexIndexesData);
    }
  }, {
    key: 'bindVertexPositionBuffer',
    value: function bindVertexPositionBuffer(canvas) {
      var vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
          vertexPositionComponents = 3;

      canvas.bindBuffer(this.vertexPositionsBuffer, vertexPositionAttributeLocation, vertexPositionComponents);
    }
  }, {
    key: 'bindVertexNormalBuffer',
    value: function bindVertexNormalBuffer(canvas) {
      var vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
          vertexNormalComponents = 3;

      canvas.bindBuffer(this.vertexNormalsBuffer, vertexNormalAttributeLocation, vertexNormalComponents);
    }
  }, {
    key: 'bindVertexIndexElementBuffer',
    value: function bindVertexIndexElementBuffer(canvas) {
      canvas.bindElementBuffer(this.vertexIndexesElementBuffer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZW5kZXJlci5qcyJdLCJuYW1lcyI6WyJSZW5kZXJlciIsInByb2dyYW0iLCJ1bmlmb3JtTG9jYXRpb25zIiwiYXR0cmlidXRlTG9jYXRpb25zIiwicmVuZGVyZXJEYXRhIiwidmVydGV4UG9zaXRpb25zQnVmZmVyIiwidmVydGV4Tm9ybWFsc0J1ZmZlciIsInZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyIiwiZ2V0Q291bnQiLCJnZXRPZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleFBvc2l0aW9ucyIsImFkZFZlcnRleFBvc2l0aW9ucyIsInZlcnRleE5vcm1hbHMiLCJhZGRWZXJ0ZXhOb3JtYWxzIiwidmVydGV4SW5kZXhlcyIsImFkZFZlcnRleEluZGV4ZXMiLCJjYW52YXMiLCJjcmVhdGVWZXJ0ZXhQb3NpdGlvbkJ1ZmZlciIsImNyZWF0ZVZlcnRleE5vcm1hbEJ1ZmZlciIsImNyZWF0ZVZlcnRleEluZGV4RWxlbWVudEJ1ZmZlciIsImJpbmRWZXJ0ZXhOb3JtYWxCdWZmZXIiLCJiaW5kVmVydGV4UG9zaXRpb25CdWZmZXIiLCJiaW5kVmVydGV4SW5kZXhFbGVtZW50QnVmZmVyIiwidmVydGV4UG9zaXRpb25zRGF0YSIsImdldFZlcnRleFBvc2l0aW9uc0RhdGEiLCJjcmVhdGVCdWZmZXIiLCJ2ZXJ0ZXhOb3JtYWxzRGF0YSIsImdldFZlcnRleE5vcm1hbHNEYXRhIiwidmVydGV4SW5kZXhlc0RhdGEiLCJnZXRWZXJ0ZXhJbmRleGVzRGF0YSIsImNyZWF0ZUVsZW1lbnRCdWZmZXIiLCJ2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4UG9zaXRpb25Db21wb25lbnRzIiwiYmluZEJ1ZmZlciIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4Tm9ybWFsQ29tcG9uZW50cyIsImJpbmRFbGVtZW50QnVmZmVyIiwiY3JlYXRlUHJvZ3JhbSIsInZlcnRleFNoYWRlclNvdXJjZSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwidmVydGV4U2hhZGVyIiwiY3JlYXRlVmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJjcmVhdGVGcmFnbWVudFNoYWRlciIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsUTtBQUNKLG9CQUFZQyxPQUFaLEVBQXFCQyxnQkFBckIsRUFBdUNDLGtCQUF2QyxFQUEyREMsWUFBM0QsRUFBeUU7QUFBQTs7QUFDdkUsU0FBS0gsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCQSxrQkFBMUI7O0FBRUEsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7O0FBRUEsU0FBS0MscUJBQUwsR0FBNkIsSUFBN0IsQ0FQdUUsQ0FPcEM7QUFDbkMsU0FBS0MsbUJBQUwsR0FBMkIsSUFBM0IsQ0FSdUUsQ0FRdEM7QUFDakMsU0FBS0MsMEJBQUwsR0FBa0MsSUFBbEMsQ0FUdUUsQ0FTL0I7QUFDekM7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtOLE9BQVo7QUFDRDs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUtDLGdCQUFaO0FBQ0Q7Ozs0Q0FFdUI7QUFDdEIsYUFBTyxLQUFLQyxrQkFBWjtBQUNEOzs7K0JBRVU7QUFBRSxhQUFPLEtBQUtDLFlBQUwsQ0FBa0JJLFFBQWxCLEVBQVA7QUFBc0M7OztxREFFbEI7QUFBRSxhQUFPLEtBQUtOLGdCQUFMLENBQXNCTyw4QkFBdEIsRUFBUDtBQUFnRTs7O3VEQUVoRTtBQUFFLGFBQU8sS0FBS1AsZ0JBQUwsQ0FBc0JRLGdDQUF0QixFQUFQO0FBQWtFOzs7dURBRXBFO0FBQUUsYUFBTyxLQUFLUixnQkFBTCxDQUFzQlMsZ0NBQXRCLEVBQVA7QUFBa0U7Ozt5REFFbEU7QUFBRSxhQUFPLEtBQUtULGdCQUFMLENBQXNCVSxrQ0FBdEIsRUFBUDtBQUFvRTs7O3FEQUUxRTtBQUFFLGFBQU8sS0FBS1YsZ0JBQUwsQ0FBc0JXLDhCQUF0QixFQUFQO0FBQWdFOzs7eURBRTlEO0FBQUUsYUFBTyxLQUFLVixrQkFBTCxDQUF3Qlcsa0NBQXhCLEVBQVA7QUFBc0U7Ozt1REFFMUU7QUFBRSxhQUFPLEtBQUtYLGtCQUFMLENBQXdCWSxnQ0FBeEIsRUFBUDtBQUFvRTs7O3VDQUV0RkMsZSxFQUFpQjtBQUFFLFdBQUtaLFlBQUwsQ0FBa0JhLGtCQUFsQixDQUFxQ0QsZUFBckM7QUFBd0Q7OztxQ0FFN0VFLGEsRUFBZTtBQUFFLFdBQUtkLFlBQUwsQ0FBa0JlLGdCQUFsQixDQUFtQ0QsYUFBbkM7QUFBb0Q7OztxQ0FFckVFLGEsRUFBZTtBQUFFLFdBQUtoQixZQUFMLENBQWtCaUIsZ0JBQWxCLENBQW1DRCxhQUFuQztBQUFvRDs7O2tDQUV4RUUsTSxFQUFRO0FBQ3BCLFdBQUtDLDBCQUFMLENBQWdDRCxNQUFoQztBQUNBLFdBQUtFLHdCQUFMLENBQThCRixNQUE5QjtBQUNBLFdBQUtHLDhCQUFMLENBQW9DSCxNQUFwQztBQUNEOzs7Z0NBRVdBLE0sRUFBUTtBQUNsQixXQUFLSSxzQkFBTCxDQUE0QkosTUFBNUI7QUFDQSxXQUFLSyx3QkFBTCxDQUE4QkwsTUFBOUI7QUFDQSxXQUFLTSw0QkFBTCxDQUFrQ04sTUFBbEM7QUFDRDs7OytDQUUwQkEsTSxFQUFRO0FBQ2pDLFVBQU1PLHNCQUFzQixLQUFLekIsWUFBTCxDQUFrQjBCLHNCQUFsQixFQUE1Qjs7QUFFQSxXQUFLekIscUJBQUwsR0FBNkJpQixPQUFPUyxZQUFQLENBQW9CRixtQkFBcEIsQ0FBN0I7QUFDRDs7OzZDQUV3QlAsTSxFQUFRO0FBQy9CLFVBQU1VLG9CQUFvQixLQUFLNUIsWUFBTCxDQUFrQjZCLG9CQUFsQixFQUExQjs7QUFFQSxXQUFLM0IsbUJBQUwsR0FBMkJnQixPQUFPUyxZQUFQLENBQW9CQyxpQkFBcEIsQ0FBM0I7QUFDRDs7O21EQUU4QlYsTSxFQUFRO0FBQ3JDLFVBQU1ZLG9CQUFvQixLQUFLOUIsWUFBTCxDQUFrQitCLG9CQUFsQixFQUExQjs7QUFFQSxXQUFLNUIsMEJBQUwsR0FBa0NlLE9BQU9jLG1CQUFQLENBQTJCRixpQkFBM0IsQ0FBbEM7QUFDRDs7OzZDQUV3QlosTSxFQUFRO0FBQy9CLFVBQU1lLGtDQUFrQyxLQUFLdkIsa0NBQUwsRUFBeEM7QUFBQSxVQUNNd0IsMkJBQTJCLENBRGpDOztBQUdBaEIsYUFBT2lCLFVBQVAsQ0FBa0IsS0FBS2xDLHFCQUF2QixFQUE4Q2dDLCtCQUE5QyxFQUErRUMsd0JBQS9FO0FBQ0Q7OzsyQ0FFc0JoQixNLEVBQVE7QUFDN0IsVUFBTWtCLGdDQUFnQyxLQUFLekIsZ0NBQUwsRUFBdEM7QUFBQSxVQUNNMEIseUJBQXlCLENBRC9COztBQUdBbkIsYUFBT2lCLFVBQVAsQ0FBa0IsS0FBS2pDLG1CQUF2QixFQUE0Q2tDLDZCQUE1QyxFQUEyRUMsc0JBQTNFO0FBQ0Q7OztpREFFNEJuQixNLEVBQVE7QUFDbkNBLGFBQU9vQixpQkFBUCxDQUF5QixLQUFLbkMsMEJBQTlCO0FBQ0Q7Ozs7OztBQUdILFNBQVNvQyxhQUFULENBQXVCQyxrQkFBdkIsRUFBMkNDLG9CQUEzQyxFQUFpRXZCLE1BQWpFLEVBQXlFO0FBQ3ZFLE1BQU13QixlQUFleEIsT0FBT3lCLGtCQUFQLENBQTBCSCxrQkFBMUIsQ0FBckI7QUFBQSxNQUNNSSxpQkFBaUIxQixPQUFPMkIsb0JBQVAsQ0FBNEJKLG9CQUE1QixDQUR2QjtBQUFBLE1BRU01QyxVQUFVcUIsT0FBT3FCLGFBQVAsQ0FBcUJHLFlBQXJCLEVBQW1DRSxjQUFuQyxDQUZoQjs7QUFJQSxTQUFPL0MsT0FBUDtBQUNEOztBQUVEaUQsT0FBT0MsTUFBUCxDQUFjbkQsUUFBZCxFQUF3QjtBQUN0QjJDLGlCQUFlQTtBQURPLENBQXhCOztBQUlBUyxPQUFPQyxPQUFQLEdBQWlCckQsUUFBakIiLCJmaWxlIjoicmVuZGVyZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IocHJvZ3JhbSwgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCByZW5kZXJlckRhdGEpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgIHRoaXMudW5pZm9ybUxvY2F0aW9ucyA9IHVuaWZvcm1Mb2NhdGlvbnM7XG4gICAgdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMgPSBhdHRyaWJ1dGVMb2NhdGlvbnM7XG4gICAgXG4gICAgdGhpcy5yZW5kZXJlckRhdGEgPSByZW5kZXJlckRhdGE7XG5cbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IG51bGw7IC8vL1xuICAgIHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciA9IG51bGw7IC8vL1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSBudWxsOyAvLy9cbiAgfVxuXG4gIGdldFByb2dyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZ3JhbTtcbiAgfVxuICBcbiAgZ2V0VW5pZm9ybUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zO1xuICB9XG4gIFxuICBnZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7IHJldHVybiB0aGlzLnJlbmRlcmVyRGF0YS5nZXRDb3VudCgpOyB9XG5cbiAgZ2V0T2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCk7IH1cblxuICBnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCk7IH1cblxuICBhZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKSB7IHRoaXMucmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpOyB9XG5cbiAgYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKSB7IHRoaXMucmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7IH1cblxuICBhZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpIHsgdGhpcy5yZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTsgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4Tm9ybWFsQnVmZmVyKGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIHRoaXMuYmluZFZlcnRleE5vcm1hbEJ1ZmZlcihjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleFBvc2l0aW9uQnVmZmVyKGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4SW5kZXhFbGVtZW50QnVmZmVyKGNhbnZhcyk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gdGhpcy5yZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpO1xuICAgIFxuICAgIHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleE5vcm1hbEJ1ZmZlcihjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IHRoaXMucmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCk7XG4gICAgXG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGEgPSB0aGlzLnJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhJbmRleGVzRGF0YSgpO1xuICAgIFxuICAgIHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSBjYW52YXMuY3JlYXRlRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSk7XG4gIH1cblxuICBiaW5kVmVydGV4UG9zaXRpb25CdWZmZXIoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyA9IDM7XG4gICAgXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4Tm9ybWFsQnVmZmVyKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbENvbXBvbmVudHMgPSAzO1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4SW5kZXhFbGVtZW50QnVmZmVyKGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kRWxlbWVudEJ1ZmZlcih0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB2ZXJ0ZXhTaGFkZXIgPSBjYW52YXMuY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSksXG4gICAgICAgIGZyYWdtZW50U2hhZGVyID0gY2FudmFzLmNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlKSxcbiAgICAgICAgcHJvZ3JhbSA9IGNhbnZhcy5jcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xuICBcbiAgcmV0dXJuIHByb2dyYW07XG59XG5cbk9iamVjdC5hc3NpZ24oUmVuZGVyZXIsIHtcbiAgY3JlYXRlUHJvZ3JhbTogY3JlYXRlUHJvZ3JhbVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyZXI7XG4iXX0=