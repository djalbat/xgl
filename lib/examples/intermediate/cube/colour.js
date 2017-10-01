'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cube = require('../cube');

var vertexColourData = [1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0];

var ColourCube = function (_Cube) {
  _inherits(ColourCube, _Cube);

  function ColourCube(vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData) {
    _classCallCheck(this, ColourCube);

    var _this = _possibleConstructorReturn(this, (ColourCube.__proto__ || Object.getPrototypeOf(ColourCube)).call(this, vertexPositionData, vertexNormalData, vertexIndexData));

    _this.vertexColourData = vertexColourData;
    return _this;
  }

  _createClass(ColourCube, [{
    key: 'getVertexColourData',
    value: function getVertexColourData() {
      return this.vertexColourData;
    }
  }, {
    key: 'createElement',
    value: function createElement(colourShader, textureShader) {
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
      return Cube.fromProperties(ColourCube, properties, vertexColourData);
    }
  }]);

  return ColourCube;
}(Cube);

module.exports = ColourCube;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbnRlcm1lZGlhdGUvY3ViZS9jb2xvdXIuanMiXSwibmFtZXMiOlsiQ3ViZSIsInJlcXVpcmUiLCJ2ZXJ0ZXhDb2xvdXJEYXRhIiwiQ29sb3VyQ3ViZSIsInZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJ2ZXJ0ZXhJbmRleERhdGEiLCJjb2xvdXJTaGFkZXIiLCJ0ZXh0dXJlU2hhZGVyIiwiZ2V0VmVydGV4UG9zaXRpb25EYXRhIiwiZ2V0VmVydGV4Tm9ybWFsRGF0YSIsImdldFZlcnRleEluZGV4RGF0YSIsImFkZFZlcnRleFBvc2l0aW9uRGF0YSIsImFkZFZlcnRleE5vcm1hbERhdGEiLCJhZGRWZXJ0ZXhJbmRleERhdGEiLCJhZGRWZXJ0ZXhDb2xvdXJEYXRhIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjs7QUFFQSxJQUFNQyxtQkFBbUIsQ0FDakIsR0FEaUIsRUFDWCxHQURXLEVBQ0wsR0FESyxFQUNDLEdBREQsRUFFakIsR0FGaUIsRUFFWCxHQUZXLEVBRUwsR0FGSyxFQUVDLEdBRkQsRUFHakIsR0FIaUIsRUFHWCxHQUhXLEVBR0wsR0FISyxFQUdDLEdBSEQsRUFJakIsR0FKaUIsRUFJWCxHQUpXLEVBSUwsR0FKSyxFQUlDLEdBSkQsRUFNakIsR0FOaUIsRUFNWCxHQU5XLEVBTUwsR0FOSyxFQU1DLEdBTkQsRUFPakIsR0FQaUIsRUFPWCxHQVBXLEVBT0wsR0FQSyxFQU9DLEdBUEQsRUFRakIsR0FSaUIsRUFRWCxHQVJXLEVBUUwsR0FSSyxFQVFDLEdBUkQsRUFTakIsR0FUaUIsRUFTWCxHQVRXLEVBU0wsR0FUSyxFQVNDLEdBVEQsRUFXakIsR0FYaUIsRUFXWCxHQVhXLEVBV0wsR0FYSyxFQVdDLEdBWEQsRUFZakIsR0FaaUIsRUFZWCxHQVpXLEVBWUwsR0FaSyxFQVlDLEdBWkQsRUFhakIsR0FiaUIsRUFhWCxHQWJXLEVBYUwsR0FiSyxFQWFDLEdBYkQsRUFjakIsR0FkaUIsRUFjWCxHQWRXLEVBY0wsR0FkSyxFQWNDLEdBZEQsRUFnQmpCLEdBaEJpQixFQWdCWCxHQWhCVyxFQWdCTCxHQWhCSyxFQWdCQyxHQWhCRCxFQWlCakIsR0FqQmlCLEVBaUJYLEdBakJXLEVBaUJMLEdBakJLLEVBaUJDLEdBakJELEVBa0JqQixHQWxCaUIsRUFrQlgsR0FsQlcsRUFrQkwsR0FsQkssRUFrQkMsR0FsQkQsRUFtQmpCLEdBbkJpQixFQW1CWCxHQW5CVyxFQW1CTCxHQW5CSyxFQW1CQyxHQW5CRCxFQXFCakIsR0FyQmlCLEVBcUJYLEdBckJXLEVBcUJMLEdBckJLLEVBcUJDLEdBckJELEVBc0JqQixHQXRCaUIsRUFzQlgsR0F0QlcsRUFzQkwsR0F0QkssRUFzQkMsR0F0QkQsRUF1QmpCLEdBdkJpQixFQXVCWCxHQXZCVyxFQXVCTCxHQXZCSyxFQXVCQyxHQXZCRCxFQXdCakIsR0F4QmlCLEVBd0JYLEdBeEJXLEVBd0JMLEdBeEJLLEVBd0JDLEdBeEJELEVBMEJqQixHQTFCaUIsRUEwQlgsR0ExQlcsRUEwQkwsR0ExQkssRUEwQkMsR0ExQkQsRUEyQmpCLEdBM0JpQixFQTJCWCxHQTNCVyxFQTJCTCxHQTNCSyxFQTJCQyxHQTNCRCxFQTRCakIsR0E1QmlCLEVBNEJYLEdBNUJXLEVBNEJMLEdBNUJLLEVBNEJDLEdBNUJELEVBNkJqQixHQTdCaUIsRUE2QlgsR0E3QlcsRUE2QkwsR0E3QkssRUE2QkMsR0E3QkQsQ0FBekI7O0lBZ0NNQyxVOzs7QUFDSixzQkFBWUMsa0JBQVosRUFBZ0NDLGdCQUFoQyxFQUFrREMsZUFBbEQsRUFBbUVKLGdCQUFuRSxFQUFxRjtBQUFBOztBQUFBLHdIQUM3RUUsa0JBRDZFLEVBQ3pEQyxnQkFEeUQsRUFDdkNDLGVBRHVDOztBQUduRixVQUFLSixnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBSG1GO0FBSXBGOzs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUtBLGdCQUFaO0FBQ0Q7OztrQ0FFYUssWSxFQUFjQyxhLEVBQWU7QUFDekMsVUFBTUoscUJBQXFCLEtBQUtLLHFCQUFMLEVBQTNCO0FBQUEsVUFDTUosbUJBQW1CLEtBQUtLLG1CQUFMLEVBRHpCO0FBQUEsVUFFTUosa0JBQWtCLEtBQUtLLGtCQUFMLEVBRnhCOztBQUlBSixtQkFBYUsscUJBQWIsQ0FBbUNSLGtCQUFuQztBQUNBRyxtQkFBYU0sbUJBQWIsQ0FBaUNSLGdCQUFqQztBQUNBRSxtQkFBYU8sa0JBQWIsQ0FBZ0NSLGVBQWhDO0FBQ0FDLG1CQUFhUSxtQkFBYixDQUFpQyxLQUFLYixnQkFBdEM7QUFDRDs7O21DQUVxQmMsVSxFQUFZO0FBQUUsYUFBT2hCLEtBQUtpQixjQUFMLENBQW9CZCxVQUFwQixFQUFnQ2EsVUFBaEMsRUFBNENkLGdCQUE1QyxDQUFQO0FBQXVFOzs7O0VBdEJwRkYsSTs7QUF5QnpCa0IsT0FBT0MsT0FBUCxHQUFpQmhCLFVBQWpCIiwiZmlsZSI6ImNvbG91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ3ViZSA9IHJlcXVpcmUoJy4uL2N1YmUnKTtcblxuY29uc3QgdmVydGV4Q29sb3VyRGF0YSA9IFtcbiAgICAgICAgMS4wLCAgMC4wLCAgMC4wLCAgMS4wLFxuICAgICAgICAxLjAsICAwLjAsICAwLjAsICAxLjAsXG4gICAgICAgIDEuMCwgIDAuMCwgIDAuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMC4wLCAgMC4wLCAgMS4wLFxuXG4gICAgICAgIDAuMCwgIDEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMC4wLCAgMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAwLjAsICAxLjAsICAxLjAsICAxLjAsXG4gICAgICAgIDAuMCwgIDEuMCwgIDEuMCwgIDEuMCxcblxuICAgICAgICAwLjAsICAxLjAsICAwLjAsICAxLjAsXG4gICAgICAgIDAuMCwgIDEuMCwgIDAuMCwgIDEuMCxcbiAgICAgICAgMC4wLCAgMS4wLCAgMC4wLCAgMS4wLFxuICAgICAgICAwLjAsICAxLjAsICAwLjAsICAxLjAsXG5cbiAgICAgICAgMS4wLCAgMC4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAxLjAsICAwLjAsICAxLjAsICAxLjAsXG4gICAgICAgIDEuMCwgIDAuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMC4wLCAgMS4wLCAgMS4wLFxuXG4gICAgICAgIDAuMCwgIDAuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMC4wLCAgMC4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAwLjAsICAwLjAsICAxLjAsICAxLjAsXG4gICAgICAgIDAuMCwgIDAuMCwgIDEuMCwgIDEuMCxcblxuICAgICAgICAxLjAsICAxLjAsICAwLjAsICAxLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgIDAuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAgMC4wLCAgMS4wLFxuICAgICAgICAxLjAsICAxLjAsICAwLjAsICAxLjBcbiAgICAgIF07XG5cbmNsYXNzIENvbG91ckN1YmUgZXh0ZW5kcyBDdWJlIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHZlcnRleENvbG91ckRhdGEpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSk7XG4gICAgXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJEYXRhID0gdmVydGV4Q29sb3VyRGF0YTsgICAgXG4gIH1cbiAgXG4gIGdldFZlcnRleENvbG91ckRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3VyRGF0YTtcbiAgfVxuXG4gIGNyZWF0ZUVsZW1lbnQoY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25EYXRhID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkRhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxEYXRhID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhEYXRhID0gdGhpcy5nZXRWZXJ0ZXhJbmRleERhdGEoKTtcbiAgICBcbiAgICBjb2xvdXJTaGFkZXIuYWRkVmVydGV4UG9zaXRpb25EYXRhKHZlcnRleFBvc2l0aW9uRGF0YSk7XG4gICAgY29sb3VyU2hhZGVyLmFkZFZlcnRleE5vcm1hbERhdGEodmVydGV4Tm9ybWFsRGF0YSk7XG4gICAgY29sb3VyU2hhZGVyLmFkZFZlcnRleEluZGV4RGF0YSh2ZXJ0ZXhJbmRleERhdGEpO1xuICAgIGNvbG91clNoYWRlci5hZGRWZXJ0ZXhDb2xvdXJEYXRhKHRoaXMudmVydGV4Q29sb3VyRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ3ViZS5mcm9tUHJvcGVydGllcyhDb2xvdXJDdWJlLCBwcm9wZXJ0aWVzLCB2ZXJ0ZXhDb2xvdXJEYXRhKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91ckN1YmU7XG4iXX0=