'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('../utilities/array');

var flatten = arrayUtilities.flatten,
    merge = arrayUtilities.merge,
    add = merge; ///

var RendererData = function () {
  function RendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex) {
    _classCallCheck(this, RendererData);

    this.vertexPositionsData = vertexPositionsData;
    this.vertexNormalsData = vertexNormalsData;
    this.vertexIndexesData = vertexIndexesData;
    this.maximumVertexIndex = maximumVertexIndex;
  }

  _createClass(RendererData, [{
    key: 'getCount',
    value: function getCount() {
      var vertexIndexesDataLength = this.vertexIndexesData.length,
          count = vertexIndexesDataLength; ///

      return count;
    }
  }, {
    key: 'getVertexPositionsData',
    value: function getVertexPositionsData() {
      return this.vertexPositionsData;
    }
  }, {
    key: 'getVertexNormalsData',
    value: function getVertexNormalsData() {
      return this.vertexNormalsData;
    }
  }, {
    key: 'getVertexIndexesData',
    value: function getVertexIndexesData() {
      return this.vertexIndexesData;
    }
  }, {
    key: 'addVertexPositions',
    value: function addVertexPositions(vertexPositions) {
      var vertexPositionsData = flatten(vertexPositions);

      add(this.vertexPositionsData, vertexPositionsData);
    }
  }, {
    key: 'addVertexNormals',
    value: function addVertexNormals(vertexNormals) {
      var vertexNormalsData = flatten(vertexNormals);

      add(this.vertexNormalsData, vertexNormalsData);
    }
  }, {
    key: 'addVertexIndexes',
    value: function addVertexIndexes(vertexIndexes) {
      var offset = this.maximumVertexIndex + 1;

      vertexIndexes = vertexIndexes.map(function (vertexIndex) {
        return vertexIndex + offset;
      });

      this.maximumVertexIndex = Math.max.apply(Math, [this.maximumVertexIndex].concat(_toConsumableArray(vertexIndexes)));

      var vertexIndexesData = vertexIndexes;

      add(this.vertexIndexesData, vertexIndexesData);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var vertexPositionsData = [],
          vertexNormalsData = [],
          vertexIndexesData = [],
          maximumVertexIndex = -1,
          ///
      rendererData = new RendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex);

      return rendererData;
    }
  }]);

  return RendererData;
}();

module.exports = RendererData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9yZW5kZXJlci9kYXRhLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsImZsYXR0ZW4iLCJtZXJnZSIsImFkZCIsIlJlbmRlcmVyRGF0YSIsInZlcnRleFBvc2l0aW9uc0RhdGEiLCJ2ZXJ0ZXhOb3JtYWxzRGF0YSIsInZlcnRleEluZGV4ZXNEYXRhIiwibWF4aW11bVZlcnRleEluZGV4IiwidmVydGV4SW5kZXhlc0RhdGFMZW5ndGgiLCJsZW5ndGgiLCJjb3VudCIsInZlcnRleFBvc2l0aW9ucyIsInZlcnRleE5vcm1hbHMiLCJ2ZXJ0ZXhJbmRleGVzIiwib2Zmc2V0IiwibWFwIiwidmVydGV4SW5kZXgiLCJNYXRoIiwibWF4IiwicmVuZGVyZXJEYXRhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCQyxRQUFRLG9CQUFSLENBQXZCOztJQUVRQyxPLEdBQW1CRixjLENBQW5CRSxPO0lBQVNDLEssR0FBVUgsYyxDQUFWRyxLO0lBQ1hDLEcsR0FBTUQsSyxFQUFROztJQUVkRSxZO0FBQ0osd0JBQVlDLG1CQUFaLEVBQWlDQyxpQkFBakMsRUFBb0RDLGlCQUFwRCxFQUF1RUMsa0JBQXZFLEVBQTJGO0FBQUE7O0FBQ3pGLFNBQUtILG1CQUFMLEdBQTJCQSxtQkFBM0I7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QkEsaUJBQXpCO0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUJBLGlCQUF6QjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCQSxrQkFBMUI7QUFDRDs7OzsrQkFFVTtBQUNULFVBQU1DLDBCQUEwQixLQUFLRixpQkFBTCxDQUF1QkcsTUFBdkQ7QUFBQSxVQUNNQyxRQUFRRix1QkFEZCxDQURTLENBRStCOztBQUV4QyxhQUFPRSxLQUFQO0FBQ0Q7Ozs2Q0FFd0I7QUFDdkIsYUFBTyxLQUFLTixtQkFBWjtBQUNEOzs7MkNBRXNCO0FBQ3JCLGFBQU8sS0FBS0MsaUJBQVo7QUFDRDs7OzJDQUVzQjtBQUNyQixhQUFPLEtBQUtDLGlCQUFaO0FBQ0Q7Ozt1Q0FFa0JLLGUsRUFBaUI7QUFDbEMsVUFBTVAsc0JBQXNCSixRQUFRVyxlQUFSLENBQTVCOztBQUVBVCxVQUFJLEtBQUtFLG1CQUFULEVBQThCQSxtQkFBOUI7QUFDRDs7O3FDQUVnQlEsYSxFQUFlO0FBQzlCLFVBQU1QLG9CQUFvQkwsUUFBUVksYUFBUixDQUExQjs7QUFFQVYsVUFBSSxLQUFLRyxpQkFBVCxFQUE0QkEsaUJBQTVCO0FBQ0Q7OztxQ0FFZ0JRLGEsRUFBZTtBQUM5QixVQUFNQyxTQUFTLEtBQUtQLGtCQUFMLEdBQTBCLENBQXpDOztBQUVBTSxzQkFBZ0JBLGNBQWNFLEdBQWQsQ0FBa0IsVUFBU0MsV0FBVCxFQUFzQjtBQUN0RCxlQUFPQSxjQUFjRixNQUFyQjtBQUNELE9BRmUsQ0FBaEI7O0FBSUEsV0FBS1Asa0JBQUwsR0FBMEJVLEtBQUtDLEdBQUwsY0FBUyxLQUFLWCxrQkFBZCw0QkFBcUNNLGFBQXJDLEdBQTFCOztBQUVBLFVBQU1QLG9CQUFvQk8sYUFBMUI7O0FBRUFYLFVBQUksS0FBS0ksaUJBQVQsRUFBNEJBLGlCQUE1QjtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1GLHNCQUFzQixFQUE1QjtBQUFBLFVBQ01DLG9CQUFvQixFQUQxQjtBQUFBLFVBRU1DLG9CQUFvQixFQUYxQjtBQUFBLFVBR01DLHFCQUFxQixDQUFDLENBSDVCO0FBQUEsVUFHZ0M7QUFDMUJZLHFCQUFlLElBQUloQixZQUFKLENBQWlCQyxtQkFBakIsRUFBc0NDLGlCQUF0QyxFQUF5REMsaUJBQXpELEVBQTRFQyxrQkFBNUUsQ0FKckI7O0FBTUEsYUFBT1ksWUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmxCLFlBQWpCIiwiZmlsZSI6ImRhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmxhdHRlbiwgbWVyZ2UgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBtYXhpbXVtVmVydGV4SW5kZXgpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0RhdGEgPSB2ZXJ0ZXhQb3NpdGlvbnNEYXRhO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsc0RhdGEgPSB2ZXJ0ZXhOb3JtYWxzRGF0YTtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNEYXRhID0gdmVydGV4SW5kZXhlc0RhdGE7XG4gICAgdGhpcy5tYXhpbXVtVmVydGV4SW5kZXggPSBtYXhpbXVtVmVydGV4SW5kZXg7XG4gIH1cblxuICBnZXRDb3VudCgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzRGF0YUxlbmd0aCA9IHRoaXMudmVydGV4SW5kZXhlc0RhdGEubGVuZ3RoLFxuICAgICAgICAgIGNvdW50ID0gdmVydGV4SW5kZXhlc0RhdGFMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4SW5kZXhlc0RhdGE7XG4gIH1cblxuICBhZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zRGF0YSA9IGZsYXR0ZW4odmVydGV4UG9zaXRpb25zKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleFBvc2l0aW9uc0RhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFsc0RhdGEgPSBmbGF0dGVuKHZlcnRleE5vcm1hbHMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcykge1xuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMubWF4aW11bVZlcnRleEluZGV4ICsgMTtcblxuICAgIHZlcnRleEluZGV4ZXMgPSB2ZXJ0ZXhJbmRleGVzLm1hcChmdW5jdGlvbih2ZXJ0ZXhJbmRleCkge1xuICAgICAgcmV0dXJuIHZlcnRleEluZGV4ICsgb2Zmc2V0O1xuICAgIH0pO1xuXG4gICAgdGhpcy5tYXhpbXVtVmVydGV4SW5kZXggPSBNYXRoLm1heCh0aGlzLm1heGltdW1WZXJ0ZXhJbmRleCwgLi4udmVydGV4SW5kZXhlcyk7XG5cbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHZlcnRleEluZGV4ZXM7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zRGF0YSA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gW10sXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSBbXSxcbiAgICAgICAgICBtYXhpbXVtVmVydGV4SW5kZXggPSAtMSwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IG5ldyBSZW5kZXJlckRhdGEodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBtYXhpbXVtVmVydGV4SW5kZXgpO1xuICAgIFxuICAgIHJldHVybiByZW5kZXJlckRhdGE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZW5kZXJlckRhdGE7XG4iXX0=