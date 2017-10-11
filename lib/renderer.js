'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

var Renderer = function () {
  function Renderer(program, uniformLocations, attributeLocations) {
    _classCallCheck(this, Renderer);

    this.program = program;
    this.uniformLocations = uniformLocations;
    this.attributeLocations = attributeLocations;

    this.vertexPositionData = [];
    this.vertexNormalData = [];
    this.vertexIndexData = [];
    this.maximumVertexIndex = -1; ///
  }

  _createClass(Renderer, [{
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
      var vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
          vertexPositionComponents = 3;

      canvas.bindBuffer(this.vertexPositionBuffer, vertexPositionAttributeLocation, vertexPositionComponents);
    }
  }, {
    key: 'bindVertexNormalBuffer',
    value: function bindVertexNormalBuffer(canvas) {
      var vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
          vertexNormalComponents = 3;

      canvas.bindBuffer(this.vertexNormalBuffer, vertexNormalAttributeLocation, vertexNormalComponents);
    }
  }, {
    key: 'bindVertexIndexElementBuffer',
    value: function bindVertexIndexElementBuffer(canvas) {
      canvas.bindElementBuffer(this.vertexIndexElementBuffer);
    }
  }]);

  return Renderer;
}();

module.exports = Renderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZW5kZXJlci5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJtZXJnZSIsImFkZCIsIlJlbmRlcmVyIiwicHJvZ3JhbSIsInVuaWZvcm1Mb2NhdGlvbnMiLCJhdHRyaWJ1dGVMb2NhdGlvbnMiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidmVydGV4SW5kZXhEYXRhIiwibWF4aW11bVZlcnRleEluZGV4IiwidmVydGV4SW5kZXhEYXRhTGVuZ3RoIiwibGVuZ3RoIiwiY291bnQiLCJnZXRPZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsIm9mZnNldCIsIm1hcCIsInZlcnRleEluZGV4IiwiTWF0aCIsIm1heCIsImNhbnZhcyIsImNyZWF0ZVZlcnRleFBvc2l0aW9uQnVmZmVyIiwiY3JlYXRlVmVydGV4Tm9ybWFsQnVmZmVyIiwiY3JlYXRlVmVydGV4SW5kZXhFbGVtZW50QnVmZmVyIiwiYmluZFZlcnRleE5vcm1hbEJ1ZmZlciIsImJpbmRWZXJ0ZXhQb3NpdGlvbkJ1ZmZlciIsImJpbmRWZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIiLCJ2ZXJ0ZXhQb3NpdGlvbkJ1ZmZlciIsImNyZWF0ZUJ1ZmZlciIsInZlcnRleE5vcm1hbEJ1ZmZlciIsInZlcnRleEluZGV4RWxlbWVudEJ1ZmZlciIsImNyZWF0ZUVsZW1lbnRCdWZmZXIiLCJ2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4UG9zaXRpb25Db21wb25lbnRzIiwiYmluZEJ1ZmZlciIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4Tm9ybWFsQ29tcG9uZW50cyIsImJpbmRFbGVtZW50QnVmZmVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVNLElBQUVDLGNBQUYsR0FBcUJGLFNBQXJCLENBQUVFLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lELGNBRFosQ0FDRUMsS0FERjtBQUFBLElBRUFDLEdBRkEsR0FFTUQsS0FGTixDLENBRWM7O0lBRWRFLFE7QUFDSixvQkFBWUMsT0FBWixFQUFxQkMsZ0JBQXJCLEVBQXVDQyxrQkFBdkMsRUFBMkQ7QUFBQTs7QUFDekQsU0FBS0YsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCQSxrQkFBMUI7O0FBRUEsU0FBS0Msa0JBQUwsR0FBMEIsRUFBMUI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QixFQUF4QjtBQUNBLFNBQUtDLGVBQUwsR0FBdUIsRUFBdkI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQixDQUFDLENBQTNCLENBUnlELENBUTNCO0FBQy9COzs7OytCQUVVO0FBQ1QsVUFBTUMsd0JBQXdCLEtBQUtGLGVBQUwsQ0FBcUJHLE1BQW5EO0FBQUEsVUFDTUMsUUFBUUYscUJBRGQsQ0FEUyxDQUU2Qjs7QUFFdEMsYUFBT0UsS0FBUDtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtULE9BQVo7QUFDRDs7O3FEQUVnQztBQUFFLGFBQU8sS0FBS0MsZ0JBQUwsQ0FBc0JTLDhCQUF0QixFQUFQO0FBQWdFOzs7dURBRWhFO0FBQUUsYUFBTyxLQUFLVCxnQkFBTCxDQUFzQlUsZ0NBQXRCLEVBQVA7QUFBa0U7Ozt1REFFcEU7QUFBRSxhQUFPLEtBQUtWLGdCQUFMLENBQXNCVyxnQ0FBdEIsRUFBUDtBQUFrRTs7O3lEQUVsRTtBQUFFLGFBQU8sS0FBS1gsZ0JBQUwsQ0FBc0JZLGtDQUF0QixFQUFQO0FBQW9FOzs7cURBRTFFO0FBQUUsYUFBTyxLQUFLWixnQkFBTCxDQUFzQmEsOEJBQXRCLEVBQVA7QUFBZ0U7Ozt5REFFOUQ7QUFBRSxhQUFPLEtBQUtaLGtCQUFMLENBQXdCYSxrQ0FBeEIsRUFBUDtBQUFzRTs7O3VEQUUxRTtBQUFFLGFBQU8sS0FBS2Isa0JBQUwsQ0FBd0JjLGdDQUF4QixFQUFQO0FBQW9FOzs7MENBRW5GYixrQixFQUFvQjtBQUN4Q0wsVUFBSSxLQUFLSyxrQkFBVCxFQUE2QkEsa0JBQTdCO0FBQ0Q7Ozt3Q0FFbUJDLGdCLEVBQWtCO0FBQ3BDTixVQUFJLEtBQUtNLGdCQUFULEVBQTJCQSxnQkFBM0I7QUFDRDs7O3VDQUVrQkMsZSxFQUFpQjtBQUNsQyxVQUFNWSxTQUFTLEtBQUtYLGtCQUFMLEdBQTBCLENBQXpDOztBQUVBRCx3QkFBa0JBLGdCQUFnQmEsR0FBaEIsQ0FBb0IsVUFBU0MsV0FBVCxFQUFzQjtBQUMxRCxlQUFPQSxjQUFjRixNQUFyQjtBQUNELE9BRmlCLENBQWxCOztBQUlBbkIsVUFBSSxLQUFLTyxlQUFULEVBQTBCQSxlQUExQjs7QUFFQSxXQUFLQyxrQkFBTCxHQUEwQmMsS0FBS0MsR0FBTCxjQUFTLEtBQUtmLGtCQUFkLDRCQUFxQ0QsZUFBckMsR0FBMUI7QUFDRDs7O2tDQUVhaUIsTSxFQUFRO0FBQ3BCLFdBQUtDLDBCQUFMLENBQWdDRCxNQUFoQztBQUNBLFdBQUtFLHdCQUFMLENBQThCRixNQUE5QjtBQUNBLFdBQUtHLDhCQUFMLENBQW9DSCxNQUFwQztBQUNEOzs7Z0NBRVdBLE0sRUFBUTtBQUNsQixXQUFLSSxzQkFBTCxDQUE0QkosTUFBNUI7QUFDQSxXQUFLSyx3QkFBTCxDQUE4QkwsTUFBOUI7QUFDQSxXQUFLTSw0QkFBTCxDQUFrQ04sTUFBbEM7QUFDRDs7OytDQUUwQkEsTSxFQUFRO0FBQ2pDLFdBQUtPLG9CQUFMLEdBQTRCUCxPQUFPUSxZQUFQLENBQW9CLEtBQUszQixrQkFBekIsQ0FBNUI7QUFDRDs7OzZDQUV3Qm1CLE0sRUFBUTtBQUMvQixXQUFLUyxrQkFBTCxHQUEwQlQsT0FBT1EsWUFBUCxDQUFvQixLQUFLMUIsZ0JBQXpCLENBQTFCO0FBQ0Q7OzttREFFOEJrQixNLEVBQVE7QUFDckMsV0FBS1Usd0JBQUwsR0FBZ0NWLE9BQU9XLG1CQUFQLENBQTJCLEtBQUs1QixlQUFoQyxDQUFoQztBQUNEOzs7NkNBRXdCaUIsTSxFQUFRO0FBQy9CLFVBQU1ZLGtDQUFrQyxLQUFLbkIsa0NBQUwsRUFBeEM7QUFBQSxVQUNNb0IsMkJBQTJCLENBRGpDOztBQUdBYixhQUFPYyxVQUFQLENBQWtCLEtBQUtQLG9CQUF2QixFQUE2Q0ssK0JBQTdDLEVBQThFQyx3QkFBOUU7QUFDRDs7OzJDQUVzQmIsTSxFQUFRO0FBQzdCLFVBQU1lLGdDQUFnQyxLQUFLckIsZ0NBQUwsRUFBdEM7QUFBQSxVQUNNc0IseUJBQXlCLENBRC9COztBQUdBaEIsYUFBT2MsVUFBUCxDQUFrQixLQUFLTCxrQkFBdkIsRUFBMkNNLDZCQUEzQyxFQUEwRUMsc0JBQTFFO0FBQ0Q7OztpREFFNEJoQixNLEVBQVE7QUFDbkNBLGFBQU9pQixpQkFBUCxDQUF5QixLQUFLUCx3QkFBOUI7QUFDRDs7Ozs7O0FBR0hRLE9BQU9DLE9BQVAsR0FBaUIxQyxRQUFqQiIsImZpbGUiOiJyZW5kZXJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgbWVyZ2UgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgIHRoaXMudW5pZm9ybUxvY2F0aW9ucyA9IHVuaWZvcm1Mb2NhdGlvbnM7XG4gICAgdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMgPSBhdHRyaWJ1dGVMb2NhdGlvbnM7XG5cbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uRGF0YSA9IFtdO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsRGF0YSA9IFtdO1xuICAgIHRoaXMudmVydGV4SW5kZXhEYXRhID0gW107XG4gICAgdGhpcy5tYXhpbXVtVmVydGV4SW5kZXggPSAtMTsgLy8vXG4gIH1cblxuICBnZXRDb3VudCgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleERhdGFMZW5ndGggPSB0aGlzLnZlcnRleEluZGV4RGF0YS5sZW5ndGgsXG4gICAgICAgICAgY291bnQgPSB2ZXJ0ZXhJbmRleERhdGFMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIGdldFByb2dyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZ3JhbTtcbiAgfVxuXG4gIGdldE9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRPZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Tm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpOyB9XG5cbiAgZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpOyB9XG5cbiAgYWRkVmVydGV4UG9zaXRpb25EYXRhKHZlcnRleFBvc2l0aW9uRGF0YSkge1xuICAgIGFkZCh0aGlzLnZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4UG9zaXRpb25EYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleE5vcm1hbERhdGEodmVydGV4Tm9ybWFsRGF0YSkge1xuICAgIGFkZCh0aGlzLnZlcnRleE5vcm1hbERhdGEsIHZlcnRleE5vcm1hbERhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4SW5kZXhEYXRhKHZlcnRleEluZGV4RGF0YSkge1xuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMubWF4aW11bVZlcnRleEluZGV4ICsgMTtcblxuICAgIHZlcnRleEluZGV4RGF0YSA9IHZlcnRleEluZGV4RGF0YS5tYXAoZnVuY3Rpb24odmVydGV4SW5kZXgpIHtcbiAgICAgIHJldHVybiB2ZXJ0ZXhJbmRleCArIG9mZnNldDtcbiAgICB9KTtcblxuICAgIGFkZCh0aGlzLnZlcnRleEluZGV4RGF0YSwgdmVydGV4SW5kZXhEYXRhKTtcblxuICAgIHRoaXMubWF4aW11bVZlcnRleEluZGV4ID0gTWF0aC5tYXgodGhpcy5tYXhpbXVtVmVydGV4SW5kZXgsIC4uLnZlcnRleEluZGV4RGF0YSk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIHRoaXMuY3JlYXRlVmVydGV4UG9zaXRpb25CdWZmZXIoY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleE5vcm1hbEJ1ZmZlcihjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4SW5kZXhFbGVtZW50QnVmZmVyKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhOb3JtYWxCdWZmZXIoY2FudmFzKTtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleEluZGV4RWxlbWVudEJ1ZmZlcihjYW52YXMpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4UG9zaXRpb25CdWZmZXIoY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Tm9ybWFsQnVmZmVyKGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Tm9ybWFsQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0aGlzLnZlcnRleE5vcm1hbERhdGEpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4SW5kZXhFbGVtZW50QnVmZmVyKGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4SW5kZXhFbGVtZW50QnVmZmVyID0gY2FudmFzLmNyZWF0ZUVsZW1lbnRCdWZmZXIodGhpcy52ZXJ0ZXhJbmRleERhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleFBvc2l0aW9uQnVmZmVyKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMgPSAzO1xuICAgIFxuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4UG9zaXRpb25CdWZmZXIsIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4Tm9ybWFsQnVmZmVyKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbENvbXBvbmVudHMgPSAzO1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhOb3JtYWxCdWZmZXIsIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIoY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRFbGVtZW50QnVmZmVyKHRoaXMudmVydGV4SW5kZXhFbGVtZW50QnVmZmVyKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlcmVyO1xuIl19