"use strict";

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var arrayUtilities = require("../utilities/array");

var flatten = arrayUtilities.flatten,
    merge = arrayUtilities.merge,
    add = merge; ///

var RendererData = /*#__PURE__*/function () {
  function RendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData) {
    _classCallCheck(this, RendererData);

    this.vertexPositionsData = vertexPositionsData;
    this.vertexNormalsData = vertexNormalsData;
    this.vertexIndexesData = vertexIndexesData;
  }

  _createClass(RendererData, [{
    key: "getCount",
    value: function getCount() {
      var vertexIndexesDataLength = this.vertexIndexesData.length,
          count = vertexIndexesDataLength; ///

      return count;
    }
  }, {
    key: "getVertexPositionsData",
    value: function getVertexPositionsData() {
      return this.vertexPositionsData;
    }
  }, {
    key: "getVertexNormalsData",
    value: function getVertexNormalsData() {
      return this.vertexNormalsData;
    }
  }, {
    key: "getVertexIndexesData",
    value: function getVertexIndexesData() {
      return this.vertexIndexesData;
    }
  }, {
    key: "addVertexPositions",
    value: function addVertexPositions(vertexPositions) {
      var vertexPositionsData = flatten(vertexPositions);
      add(this.vertexPositionsData, vertexPositionsData);
    }
  }, {
    key: "addVertexNormals",
    value: function addVertexNormals(vertexNormals) {
      var vertexNormalsData = flatten(vertexNormals);
      add(this.vertexNormalsData, vertexNormalsData);
    }
  }, {
    key: "addVertexIndexes",
    value: function addVertexIndexes(vertexIndexes) {
      var vertexIndexesData = vertexIndexes; ///

      add(this.vertexIndexesData, vertexIndexesData);
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing(Class) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        remainingArguments[_key - 1] = arguments[_key];
      }

      var vertexPositionsData = [],
          vertexNormalsData = [],
          vertexIndexesData = [],
          rendererData = _construct(Class, [vertexPositionsData, vertexNormalsData, vertexIndexesData].concat(remainingArguments));

      return rendererData;
    }
  }]);

  return RendererData;
}();

module.exports = RendererData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsaXRpZXMiLCJyZXF1aXJlIiwiZmxhdHRlbiIsIm1lcmdlIiwiYWRkIiwiUmVuZGVyZXJEYXRhIiwidmVydGV4UG9zaXRpb25zRGF0YSIsInZlcnRleE5vcm1hbHNEYXRhIiwidmVydGV4SW5kZXhlc0RhdGEiLCJ2ZXJ0ZXhJbmRleGVzRGF0YUxlbmd0aCIsImxlbmd0aCIsImNvdW50IiwidmVydGV4UG9zaXRpb25zIiwidmVydGV4Tm9ybWFscyIsInZlcnRleEluZGV4ZXMiLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInJlbmRlcmVyRGF0YSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsR0FBR0MsT0FBTyxDQUFDLG9CQUFELENBQTlCOztJQUVRQyxPLEdBQW1CRixjLENBQW5CRSxPO0lBQVNDLEssR0FBVUgsYyxDQUFWRyxLO0lBQ1hDLEcsR0FBTUQsSyxFQUFROztJQUVkRSxZO0FBQ0osd0JBQVlDLG1CQUFaLEVBQWlDQyxpQkFBakMsRUFBb0RDLGlCQUFwRCxFQUF1RTtBQUFBOztBQUNyRSxTQUFLRixtQkFBTCxHQUEyQkEsbUJBQTNCO0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUJBLGlCQUF6QjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCQSxpQkFBekI7QUFDRDs7OzsrQkFFVTtBQUNULFVBQU1DLHVCQUF1QixHQUFHLEtBQUtELGlCQUFMLENBQXVCRSxNQUF2RDtBQUFBLFVBQ01DLEtBQUssR0FBR0YsdUJBRGQsQ0FEUyxDQUUrQjs7QUFFeEMsYUFBT0UsS0FBUDtBQUNEOzs7NkNBRXdCO0FBQ3ZCLGFBQU8sS0FBS0wsbUJBQVo7QUFDRDs7OzJDQUVzQjtBQUNyQixhQUFPLEtBQUtDLGlCQUFaO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsYUFBTyxLQUFLQyxpQkFBWjtBQUNEOzs7dUNBRWtCSSxlLEVBQWlCO0FBQ2xDLFVBQU1OLG1CQUFtQixHQUFHSixPQUFPLENBQUNVLGVBQUQsQ0FBbkM7QUFFQVIsTUFBQUEsR0FBRyxDQUFDLEtBQUtFLG1CQUFOLEVBQTJCQSxtQkFBM0IsQ0FBSDtBQUNEOzs7cUNBRWdCTyxhLEVBQWU7QUFDOUIsVUFBTU4saUJBQWlCLEdBQUdMLE9BQU8sQ0FBQ1csYUFBRCxDQUFqQztBQUVBVCxNQUFBQSxHQUFHLENBQUMsS0FBS0csaUJBQU4sRUFBeUJBLGlCQUF6QixDQUFIO0FBQ0Q7OztxQ0FFZ0JPLGEsRUFBZTtBQUM5QixVQUFNTixpQkFBaUIsR0FBR00sYUFBMUIsQ0FEOEIsQ0FDWTs7QUFFMUNWLE1BQUFBLEdBQUcsQ0FBQyxLQUFLSSxpQkFBTixFQUF5QkEsaUJBQXpCLENBQUg7QUFDRDs7O2dDQUVrQk8sSyxFQUE4QjtBQUFBLHdDQUFwQkMsa0JBQW9CO0FBQXBCQSxRQUFBQSxrQkFBb0I7QUFBQTs7QUFDL0MsVUFBTVYsbUJBQW1CLEdBQUcsRUFBNUI7QUFBQSxVQUNNQyxpQkFBaUIsR0FBRyxFQUQxQjtBQUFBLFVBRU1DLGlCQUFpQixHQUFHLEVBRjFCO0FBQUEsVUFHTVMsWUFBWSxjQUFPRixLQUFQLEdBQWFULG1CQUFiLEVBQWtDQyxpQkFBbEMsRUFBcURDLGlCQUFyRCxTQUEyRVEsa0JBQTNFLEVBSGxCOztBQUtBLGFBQU9DLFlBQVA7QUFDRDs7Ozs7O0FBR0hDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmQsWUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vdXRpbGl0aWVzL2FycmF5XCIpO1xuXG5jb25zdCB7IGZsYXR0ZW4sIG1lcmdlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNsYXNzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSkge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zRGF0YSA9IHZlcnRleFBvc2l0aW9uc0RhdGE7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YSA9IHZlcnRleE5vcm1hbHNEYXRhO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0RhdGEgPSB2ZXJ0ZXhJbmRleGVzRGF0YTtcbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXNEYXRhTGVuZ3RoID0gdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YS5sZW5ndGgsXG4gICAgICAgICAgY291bnQgPSB2ZXJ0ZXhJbmRleGVzRGF0YUxlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbHNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbHNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhJbmRleGVzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IGZsYXR0ZW4odmVydGV4Tm9ybWFscyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGEgPSB2ZXJ0ZXhJbmRleGVzOyAgLy8vXG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IFtdLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHJlbmRlcmVyRGF0YTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlcmVyRGF0YTtcbiJdfQ==