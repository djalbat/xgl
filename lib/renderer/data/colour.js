"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RendererData = require("../../renderer/data"),
    arrayUtilities = require("../../utilities/array");

var merge = arrayUtilities.merge,
    flatten = arrayUtilities.flatten;
var add = merge; ///

var ColourRendererData = /*#__PURE__*/function (_RendererData) {
  _inherits(ColourRendererData, _RendererData);

  function ColourRendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData) {
    var _this;

    _classCallCheck(this, ColourRendererData);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColourRendererData).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData));
    _this.vertexColoursData = vertexColoursData;
    return _this;
  }

  _createClass(ColourRendererData, [{
    key: "getVertexColoursData",
    value: function getVertexColoursData() {
      return this.vertexColoursData;
    }
  }, {
    key: "addVertexColours",
    value: function addVertexColours(vertexColours) {
      var vertexColoursData = flatten(vertexColours);
      add(this.vertexColoursData, vertexColoursData);
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var vertexColoursData = [],
          colourRendererData = RendererData.fromNothing(ColourRendererData, vertexColoursData);
      return colourRendererData;
    }
  }]);

  return ColourRendererData;
}(RendererData);

module.exports = ColourRendererData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG91ci5qcyJdLCJuYW1lcyI6WyJSZW5kZXJlckRhdGEiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJtZXJnZSIsImZsYXR0ZW4iLCJhZGQiLCJDb2xvdXJSZW5kZXJlckRhdGEiLCJ2ZXJ0ZXhQb3NpdGlvbnNEYXRhIiwidmVydGV4Tm9ybWFsc0RhdGEiLCJ2ZXJ0ZXhJbmRleGVzRGF0YSIsInZlcnRleENvbG91cnNEYXRhIiwidmVydGV4Q29sb3VycyIsImNvbG91clJlbmRlcmVyRGF0YSIsImZyb21Ob3RoaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxPQUFPLENBQUMscUJBQUQsQ0FBNUI7QUFBQSxJQUNNQyxjQUFjLEdBQUdELE9BQU8sQ0FBQyx1QkFBRCxDQUQ5Qjs7SUFHUUUsSyxHQUFtQkQsYyxDQUFuQkMsSztJQUFPQyxPLEdBQVlGLGMsQ0FBWkUsTztBQUVmLElBQU1DLEdBQUcsR0FBR0YsS0FBWixDLENBQW9COztJQUVkRyxrQjs7O0FBQ0osOEJBQVlDLG1CQUFaLEVBQWlDQyxpQkFBakMsRUFBb0RDLGlCQUFwRCxFQUF1RUMsaUJBQXZFLEVBQTBGO0FBQUE7O0FBQUE7O0FBQ3hGLDRGQUFNSCxtQkFBTixFQUEyQkMsaUJBQTNCLEVBQThDQyxpQkFBOUM7QUFFQSxVQUFLQyxpQkFBTCxHQUF5QkEsaUJBQXpCO0FBSHdGO0FBSXpGOzs7OzJDQUVzQjtBQUNyQixhQUFPLEtBQUtBLGlCQUFaO0FBQ0Q7OztxQ0FFZ0JDLGEsRUFBZTtBQUM5QixVQUFNRCxpQkFBaUIsR0FBR04sT0FBTyxDQUFDTyxhQUFELENBQWpDO0FBRUFOLE1BQUFBLEdBQUcsQ0FBQyxLQUFLSyxpQkFBTixFQUF5QkEsaUJBQXpCLENBQUg7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNQSxpQkFBaUIsR0FBRyxFQUExQjtBQUFBLFVBQ01FLGtCQUFrQixHQUFHWixZQUFZLENBQUNhLFdBQWIsQ0FBeUJQLGtCQUF6QixFQUE2Q0ksaUJBQTdDLENBRDNCO0FBR0EsYUFBT0Usa0JBQVA7QUFDRDs7OztFQXRCOEJaLFk7O0FBeUJqQ2MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVCxrQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgUmVuZGVyZXJEYXRhID0gcmVxdWlyZShcIi4uLy4uL3JlbmRlcmVyL2RhdGFcIiksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIik7XG5cbmNvbnN0IHsgbWVyZ2UsIGZsYXR0ZW4gfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBhZGQgPSBtZXJnZTsgIC8vL1xuXG5jbGFzcyBDb2xvdXJSZW5kZXJlckRhdGEgZXh0ZW5kcyBSZW5kZXJlckRhdGEge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3Vyc0RhdGEgPSB2ZXJ0ZXhDb2xvdXJzRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Q29sb3Vyc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3Vyc0RhdGE7XG4gIH1cblxuICBhZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IGZsYXR0ZW4odmVydGV4Q29sb3Vycyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyBcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IFtdLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyRGF0YSA9IFJlbmRlcmVyRGF0YS5mcm9tTm90aGluZyhDb2xvdXJSZW5kZXJlckRhdGEsIHZlcnRleENvbG91cnNEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXJEYXRhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyUmVuZGVyZXJEYXRhO1xuIl19