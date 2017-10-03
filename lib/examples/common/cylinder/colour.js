'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cylinder = require('../cylinder');

var ColourCylinder = function (_Cylinder) {
  _inherits(ColourCylinder, _Cylinder);

  function ColourCylinder(vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData) {
    _classCallCheck(this, ColourCylinder);

    var _this = _possibleConstructorReturn(this, (ColourCylinder.__proto__ || Object.getPrototypeOf(ColourCylinder)).call(this, vertexPositionData, vertexNormalData, vertexIndexData));

    _this.vertexColourData = vertexColourData;
    return _this;
  }

  _createClass(ColourCylinder, [{
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
          colourCylinder = Cylinder.fromProperties(ColourCylinder, properties, vertexColourData);


      return colourCylinder;
    }
  }]);

  return ColourCylinder;
}(Cylinder);

module.exports = ColourCylinder;

function vertexColourDataFromColour(colour) {
  var vertexColourData = [];

  for (var index = 0; index < 24; index++) {
    vertexColourData = vertexColourData.concat(colour);
  }

  return vertexColourData;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3lsaW5kZXIvY29sb3VyLmpzIl0sIm5hbWVzIjpbIkN5bGluZGVyIiwicmVxdWlyZSIsIkNvbG91ckN5bGluZGVyIiwidmVydGV4UG9zaXRpb25EYXRhIiwidmVydGV4Tm9ybWFsRGF0YSIsInZlcnRleEluZGV4RGF0YSIsInZlcnRleENvbG91ckRhdGEiLCJjb2xvdXJTaGFkZXIiLCJ0ZXh0dXJlU2hhZGVyIiwiZ2V0VmVydGV4UG9zaXRpb25EYXRhIiwiZ2V0VmVydGV4Tm9ybWFsRGF0YSIsImdldFZlcnRleEluZGV4RGF0YSIsImFkZFZlcnRleFBvc2l0aW9uRGF0YSIsImFkZFZlcnRleE5vcm1hbERhdGEiLCJhZGRWZXJ0ZXhJbmRleERhdGEiLCJhZGRWZXJ0ZXhDb2xvdXJEYXRhIiwicHJvcGVydGllcyIsImNvbG91ciIsInZlcnRleENvbG91ckRhdGFGcm9tQ29sb3VyIiwiY29sb3VyQ3lsaW5kZXIiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJpbmRleCIsImNvbmNhdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXQyxRQUFRLGFBQVIsQ0FBakI7O0lBRU1DLGM7OztBQUNKLDBCQUFZQyxrQkFBWixFQUFnQ0MsZ0JBQWhDLEVBQWtEQyxlQUFsRCxFQUFtRUMsZ0JBQW5FLEVBQXFGO0FBQUE7O0FBQUEsZ0lBQzdFSCxrQkFENkUsRUFDekRDLGdCQUR5RCxFQUN2Q0MsZUFEdUM7O0FBR25GLFVBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFIbUY7QUFJcEY7Ozs7MENBRXFCO0FBQ3BCLGFBQU8sS0FBS0EsZ0JBQVo7QUFDRDs7OzJCQUVNQyxZLEVBQWNDLGEsRUFBZTtBQUNsQyxVQUFNTCxxQkFBcUIsS0FBS00scUJBQUwsRUFBM0I7QUFBQSxVQUNNTCxtQkFBbUIsS0FBS00sbUJBQUwsRUFEekI7QUFBQSxVQUVNTCxrQkFBa0IsS0FBS00sa0JBQUwsRUFGeEI7O0FBSUFKLG1CQUFhSyxxQkFBYixDQUFtQ1Qsa0JBQW5DO0FBQ0FJLG1CQUFhTSxtQkFBYixDQUFpQ1QsZ0JBQWpDO0FBQ0FHLG1CQUFhTyxrQkFBYixDQUFnQ1QsZUFBaEM7QUFDQUUsbUJBQWFRLG1CQUFiLENBQWlDLEtBQUtULGdCQUF0QztBQUNEOzs7bUNBRXFCVSxVLEVBQVk7QUFDMUIsVUFBRUMsTUFBRixHQUFhRCxVQUFiLENBQUVDLE1BQUY7QUFBQSxVQUNBWCxnQkFEQSxHQUNtQlksMkJBQTJCRCxNQUEzQixDQURuQjtBQUFBLFVBRUFFLGNBRkEsR0FFaUJuQixTQUFTb0IsY0FBVCxDQUF3QmxCLGNBQXhCLEVBQXdDYyxVQUF4QyxFQUFvRFYsZ0JBQXBELENBRmpCOzs7QUFJTixhQUFPYSxjQUFQO0FBQ0Q7Ozs7RUE1QjBCbkIsUTs7QUErQjdCcUIsT0FBT0MsT0FBUCxHQUFpQnBCLGNBQWpCOztBQUVBLFNBQVNnQiwwQkFBVCxDQUFvQ0QsTUFBcEMsRUFBNEM7QUFDMUMsTUFBSVgsbUJBQW1CLEVBQXZCOztBQUVBLE9BQUssSUFBSWlCLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVEsRUFBNUIsRUFBZ0NBLE9BQWhDLEVBQXlDO0FBQ3ZDakIsdUJBQW1CQSxpQkFBaUJrQixNQUFqQixDQUF3QlAsTUFBeEIsQ0FBbkI7QUFDRDs7QUFFRCxTQUFPWCxnQkFBUDtBQUNEIiwiZmlsZSI6ImNvbG91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ3lsaW5kZXIgPSByZXF1aXJlKCcuLi9jeWxpbmRlcicpO1xuXG5jbGFzcyBDb2xvdXJDeWxpbmRlciBleHRlbmRzIEN5bGluZGVyIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHZlcnRleENvbG91ckRhdGEpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSk7XG4gICAgXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJEYXRhID0gdmVydGV4Q29sb3VyRGF0YTsgICAgXG4gIH1cbiAgXG4gIGdldFZlcnRleENvbG91ckRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3VyRGF0YTtcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbERhdGEgPSB0aGlzLmdldFZlcnRleE5vcm1hbERhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleERhdGEgPSB0aGlzLmdldFZlcnRleEluZGV4RGF0YSgpO1xuICAgIFxuICAgIGNvbG91clNoYWRlci5hZGRWZXJ0ZXhQb3NpdGlvbkRhdGEodmVydGV4UG9zaXRpb25EYXRhKTtcbiAgICBjb2xvdXJTaGFkZXIuYWRkVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhOb3JtYWxEYXRhKTtcbiAgICBjb2xvdXJTaGFkZXIuYWRkVmVydGV4SW5kZXhEYXRhKHZlcnRleEluZGV4RGF0YSk7XG4gICAgY29sb3VyU2hhZGVyLmFkZFZlcnRleENvbG91ckRhdGEodGhpcy52ZXJ0ZXhDb2xvdXJEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjb2xvdXIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdmVydGV4Q29sb3VyRGF0YSA9IHZlcnRleENvbG91ckRhdGFGcm9tQ29sb3VyKGNvbG91ciksXG4gICAgICAgICAgY29sb3VyQ3lsaW5kZXIgPSBDeWxpbmRlci5mcm9tUHJvcGVydGllcyhDb2xvdXJDeWxpbmRlciwgcHJvcGVydGllcywgdmVydGV4Q29sb3VyRGF0YSk7XG5cbiAgICByZXR1cm4gY29sb3VyQ3lsaW5kZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJDeWxpbmRlcjtcblxuZnVuY3Rpb24gdmVydGV4Q29sb3VyRGF0YUZyb21Db2xvdXIoY29sb3VyKSB7XG4gIGxldCB2ZXJ0ZXhDb2xvdXJEYXRhID0gW107XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDI0OyBpbmRleCsrKSB7XG4gICAgdmVydGV4Q29sb3VyRGF0YSA9IHZlcnRleENvbG91ckRhdGEuY29uY2F0KGNvbG91cik7XG4gIH1cblxuICByZXR1cm4gdmVydGV4Q29sb3VyRGF0YTtcbn1cbiJdfQ==