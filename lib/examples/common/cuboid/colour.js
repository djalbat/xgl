'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cuboid = require('../cuboid');

var ColourCuboid = function (_Cuboid) {
  _inherits(ColourCuboid, _Cuboid);

  function ColourCuboid(vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData) {
    _classCallCheck(this, ColourCuboid);

    var _this = _possibleConstructorReturn(this, (ColourCuboid.__proto__ || Object.getPrototypeOf(ColourCuboid)).call(this, vertexPositionData, vertexNormalData, vertexIndexData));

    _this.vertexColourData = vertexColourData;
    return _this;
  }

  _createClass(ColourCuboid, [{
    key: 'getVertexColourData',
    value: function getVertexColourData() {
      return this.vertexColourData;
    }
  }, {
    key: 'create',
    value: function create(colourShader, textureShader) {
      var vertexPositionData = this.getVertexPositionData(),
          vertexNormalData = this.getVertexNormalData(),
          vertexIndexData = this.getVertexIndexData();

      colourShader.addVertexPositionData(vertexPositionData);
      colourShader.addVertexNormalData(vertexNormalData);
      colourShader.addVertexIndexData(vertexIndexData);
      colourShader.addVertexColourData(this.vertexColourData);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var colour = properties.colour,
          vertexColourData = vertexColourDataFromColour(colour),
          colourCuboid = Cuboid.fromProperties(ColourCuboid, properties, vertexColourData);


      return colourCuboid;
    }
  }]);

  return ColourCuboid;
}(Cuboid);

module.exports = ColourCuboid;

function vertexColourDataFromColour(colour) {
  var vertexColourData = [];

  for (var index = 0; index < 24; index++) {
    vertexColourData = vertexColourData.concat(colour);
  }

  return vertexColourData;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3Vib2lkL2NvbG91ci5qcyJdLCJuYW1lcyI6WyJDdWJvaWQiLCJyZXF1aXJlIiwiQ29sb3VyQ3Vib2lkIiwidmVydGV4UG9zaXRpb25EYXRhIiwidmVydGV4Tm9ybWFsRGF0YSIsInZlcnRleEluZGV4RGF0YSIsInZlcnRleENvbG91ckRhdGEiLCJjb2xvdXJTaGFkZXIiLCJ0ZXh0dXJlU2hhZGVyIiwiZ2V0VmVydGV4UG9zaXRpb25EYXRhIiwiZ2V0VmVydGV4Tm9ybWFsRGF0YSIsImdldFZlcnRleEluZGV4RGF0YSIsImFkZFZlcnRleFBvc2l0aW9uRGF0YSIsImFkZFZlcnRleE5vcm1hbERhdGEiLCJhZGRWZXJ0ZXhJbmRleERhdGEiLCJhZGRWZXJ0ZXhDb2xvdXJEYXRhIiwicHJvcGVydGllcyIsImNvbG91ciIsInZlcnRleENvbG91ckRhdGFGcm9tQ29sb3VyIiwiY29sb3VyQ3Vib2lkIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW5kZXgiLCJjb25jYXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxXQUFSLENBQWY7O0lBRU1DLFk7OztBQUNKLHdCQUFZQyxrQkFBWixFQUFnQ0MsZ0JBQWhDLEVBQWtEQyxlQUFsRCxFQUFtRUMsZ0JBQW5FLEVBQXFGO0FBQUE7O0FBQUEsNEhBQzdFSCxrQkFENkUsRUFDekRDLGdCQUR5RCxFQUN2Q0MsZUFEdUM7O0FBR25GLFVBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFIbUY7QUFJcEY7Ozs7MENBRXFCO0FBQ3BCLGFBQU8sS0FBS0EsZ0JBQVo7QUFDRDs7OzJCQUVNQyxZLEVBQWNDLGEsRUFBZTtBQUNsQyxVQUFNTCxxQkFBcUIsS0FBS00scUJBQUwsRUFBM0I7QUFBQSxVQUNNTCxtQkFBbUIsS0FBS00sbUJBQUwsRUFEekI7QUFBQSxVQUVNTCxrQkFBa0IsS0FBS00sa0JBQUwsRUFGeEI7O0FBSUFKLG1CQUFhSyxxQkFBYixDQUFtQ1Qsa0JBQW5DO0FBQ0FJLG1CQUFhTSxtQkFBYixDQUFpQ1QsZ0JBQWpDO0FBQ0FHLG1CQUFhTyxrQkFBYixDQUFnQ1QsZUFBaEM7QUFDQUUsbUJBQWFRLG1CQUFiLENBQWlDLEtBQUtULGdCQUF0QztBQUNEOzs7bUNBRXFCVSxVLEVBQVk7QUFDMUIsVUFBRUMsTUFBRixHQUFhRCxVQUFiLENBQUVDLE1BQUY7QUFBQSxVQUNBWCxnQkFEQSxHQUNtQlksMkJBQTJCRCxNQUEzQixDQURuQjtBQUFBLFVBRUFFLFlBRkEsR0FFZW5CLE9BQU9vQixjQUFQLENBQXNCbEIsWUFBdEIsRUFBb0NjLFVBQXBDLEVBQWdEVixnQkFBaEQsQ0FGZjs7O0FBSU4sYUFBT2EsWUFBUDtBQUNEOzs7O0VBNUJ3Qm5CLE07O0FBK0IzQnFCLE9BQU9DLE9BQVAsR0FBaUJwQixZQUFqQjs7QUFFQSxTQUFTZ0IsMEJBQVQsQ0FBb0NELE1BQXBDLEVBQTRDO0FBQzFDLE1BQUlYLG1CQUFtQixFQUF2Qjs7QUFFQSxPQUFLLElBQUlpQixRQUFRLENBQWpCLEVBQW9CQSxRQUFRLEVBQTVCLEVBQWdDQSxPQUFoQyxFQUF5QztBQUN2Q2pCLHVCQUFtQkEsaUJBQWlCa0IsTUFBakIsQ0FBd0JQLE1BQXhCLENBQW5CO0FBQ0Q7O0FBRUQsU0FBT1gsZ0JBQVA7QUFDRCIsImZpbGUiOiJjb2xvdXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEN1Ym9pZCA9IHJlcXVpcmUoJy4uL2N1Ym9pZCcpO1xuXG5jbGFzcyBDb2xvdXJDdWJvaWQgZXh0ZW5kcyBDdWJvaWQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSwgdmVydGV4Q29sb3VyRGF0YSkge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhKTtcbiAgICBcbiAgICB0aGlzLnZlcnRleENvbG91ckRhdGEgPSB2ZXJ0ZXhDb2xvdXJEYXRhOyAgICBcbiAgfVxuICBcbiAgZ2V0VmVydGV4Q29sb3VyRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhDb2xvdXJEYXRhO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcikge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uRGF0YSA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25EYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsRGF0YSA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4RGF0YSA9IHRoaXMuZ2V0VmVydGV4SW5kZXhEYXRhKCk7XG4gICAgXG4gICAgY29sb3VyU2hhZGVyLmFkZFZlcnRleFBvc2l0aW9uRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICAgIGNvbG91clNoYWRlci5hZGRWZXJ0ZXhOb3JtYWxEYXRhKHZlcnRleE5vcm1hbERhdGEpO1xuICAgIGNvbG91clNoYWRlci5hZGRWZXJ0ZXhJbmRleERhdGEodmVydGV4SW5kZXhEYXRhKTtcbiAgICBjb2xvdXJTaGFkZXIuYWRkVmVydGV4Q29sb3VyRGF0YSh0aGlzLnZlcnRleENvbG91ckRhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNvbG91ciB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJEYXRhID0gdmVydGV4Q29sb3VyRGF0YUZyb21Db2xvdXIoY29sb3VyKSxcbiAgICAgICAgICBjb2xvdXJDdWJvaWQgPSBDdWJvaWQuZnJvbVByb3BlcnRpZXMoQ29sb3VyQ3Vib2lkLCBwcm9wZXJ0aWVzLCB2ZXJ0ZXhDb2xvdXJEYXRhKTtcblxuICAgIHJldHVybiBjb2xvdXJDdWJvaWQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJDdWJvaWQ7XG5cbmZ1bmN0aW9uIHZlcnRleENvbG91ckRhdGFGcm9tQ29sb3VyKGNvbG91cikge1xuICBsZXQgdmVydGV4Q29sb3VyRGF0YSA9IFtdO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyNDsgaW5kZXgrKykge1xuICAgIHZlcnRleENvbG91ckRhdGEgPSB2ZXJ0ZXhDb2xvdXJEYXRhLmNvbmNhdChjb2xvdXIpO1xuICB9XG5cbiAgcmV0dXJuIHZlcnRleENvbG91ckRhdGE7XG59XG4iXX0=