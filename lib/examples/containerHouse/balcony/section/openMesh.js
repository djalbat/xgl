'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../../element/canvas'),
    ColouredCuboid = require('../../../common/coloured/cuboid'),
    ColouredCylinder = require('../../../common/coloured/cylinder');

var overallHeight = 0.25,
    overallThickness = 0.025,
    widthwiseCount = 10,
    depthwiseCount = 5,
    colour = [0.6, 0.6, 0.6, 10];

var OpenMesh = function (_CanvasElement) {
  _inherits(OpenMesh, _CanvasElement);

  function OpenMesh() {
    _classCallCheck(this, OpenMesh);

    return _possibleConstructorReturn(this, (OpenMesh.__proto__ || Object.getPrototypeOf(OpenMesh)).apply(this, arguments));
  }

  _createClass(OpenMesh, [{
    key: 'childElements',
    value: function childElements(properties) {
      var overallWidth = properties.overallWidth,
          overallDepth = properties.overallDepth,
          elements = [];


      for (var index = 1; index < widthwiseCount; index++) {
        var step = overallWidth / widthwiseCount,
            width = overallThickness,
            ///
        height = overallHeight,
            depth = overallDepth;

        elements.push(React.createElement(ColouredCuboid, { colour: colour, position: [step * index, -height, 0], width: width, height: height, depth: depth }));
      }

      for (var _index = 1; _index < depthwiseCount; _index++) {
        var _step = overallDepth / depthwiseCount,
            diameter = overallHeight / 2,
            ///
        _width = diameter,
            ///
        _height = diameter,
            ///
        _depth = overallWidth; ///

        elements.push(React.createElement(ColouredCylinder, { colour: colour, position: [0, -3 * diameter / 2, _step * _index], width: _width, height: _height, depth: _depth, rotations: [0, 90, 0] }));
      }

      return elements;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(OpenMesh, properties);
    }
  }]);

  return OpenMesh;
}(CanvasElement);

module.exports = OpenMesh;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3NlY3Rpb24vb3Blbk1lc2guanMiXSwibmFtZXMiOlsiQ2FudmFzRWxlbWVudCIsInJlcXVpcmUiLCJDb2xvdXJlZEN1Ym9pZCIsIkNvbG91cmVkQ3lsaW5kZXIiLCJvdmVyYWxsSGVpZ2h0Iiwib3ZlcmFsbFRoaWNrbmVzcyIsIndpZHRod2lzZUNvdW50IiwiZGVwdGh3aXNlQ291bnQiLCJjb2xvdXIiLCJPcGVuTWVzaCIsInByb3BlcnRpZXMiLCJvdmVyYWxsV2lkdGgiLCJvdmVyYWxsRGVwdGgiLCJlbGVtZW50cyIsImluZGV4Iiwic3RlcCIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJwdXNoIiwiZGlhbWV0ZXIiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLDRCQUFSLENBQXRCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLGlDQUFSLENBRHZCO0FBQUEsSUFFTUUsbUJBQW1CRixRQUFRLG1DQUFSLENBRnpCOztBQUlBLElBQU1HLGdCQUFnQixJQUF0QjtBQUFBLElBQ01DLG1CQUFtQixLQUR6QjtBQUFBLElBRU1DLGlCQUFpQixFQUZ2QjtBQUFBLElBR01DLGlCQUFpQixDQUh2QjtBQUFBLElBSU1DLFNBQVMsQ0FBRSxHQUFGLEVBQU8sR0FBUCxFQUFZLEdBQVosRUFBaUIsRUFBakIsQ0FKZjs7SUFNTUMsUTs7Ozs7Ozs7Ozs7a0NBQ1VDLFUsRUFBWTtBQUFBLFVBQ2hCQyxZQURnQixHQUNlRCxVQURmLENBQ2hCQyxZQURnQjtBQUFBLFVBQ0ZDLFlBREUsR0FDZUYsVUFEZixDQUNGRSxZQURFO0FBQUEsVUFFbEJDLFFBRmtCLEdBRVAsRUFGTzs7O0FBSXhCLFdBQUssSUFBSUMsUUFBUSxDQUFqQixFQUFvQkEsUUFBUVIsY0FBNUIsRUFBNENRLE9BQTVDLEVBQXFEO0FBQ25ELFlBQU1DLE9BQU9KLGVBQWVMLGNBQTVCO0FBQUEsWUFDTVUsUUFBUVgsZ0JBRGQ7QUFBQSxZQUNpQztBQUMzQlksaUJBQVNiLGFBRmY7QUFBQSxZQUdNYyxRQUFRTixZQUhkOztBQUtBQyxpQkFBU00sSUFBVCxDQUVFLG9CQUFDLGNBQUQsSUFBZ0IsUUFBUVgsTUFBeEIsRUFBZ0MsVUFBVSxDQUFDTyxPQUFPRCxLQUFSLEVBQWUsQ0FBQ0csTUFBaEIsRUFBd0IsQ0FBeEIsQ0FBMUMsRUFBc0UsT0FBT0QsS0FBN0UsRUFBb0YsUUFBUUMsTUFBNUYsRUFBb0csT0FBT0MsS0FBM0csR0FGRjtBQUtEOztBQUVELFdBQUssSUFBSUosU0FBUSxDQUFqQixFQUFvQkEsU0FBUVAsY0FBNUIsRUFBNENPLFFBQTVDLEVBQXFEO0FBQ25ELFlBQU1DLFFBQU9ILGVBQWVMLGNBQTVCO0FBQUEsWUFDTWEsV0FBV2hCLGdCQUFnQixDQURqQztBQUFBLFlBQ29DO0FBQzlCWSxpQkFBUUksUUFGZDtBQUFBLFlBRXdCO0FBQ2xCSCxrQkFBU0csUUFIZjtBQUFBLFlBR3lCO0FBQ25CRixpQkFBUVAsWUFKZCxDQURtRCxDQUt0Qjs7QUFFN0JFLGlCQUFTTSxJQUFULENBRUUsb0JBQUMsZ0JBQUQsSUFBa0IsUUFBUVgsTUFBMUIsRUFBa0MsVUFBVSxDQUFFLENBQUYsRUFBSyxDQUFDLENBQUQsR0FBS1ksUUFBTCxHQUFnQixDQUFyQixFQUF3QkwsUUFBT0QsTUFBL0IsQ0FBNUMsRUFBb0YsT0FBT0UsTUFBM0YsRUFBa0csUUFBUUMsT0FBMUcsRUFBa0gsT0FBT0MsTUFBekgsRUFBZ0ksV0FBVyxDQUFFLENBQUYsRUFBSyxFQUFMLEVBQVMsQ0FBVCxDQUEzSSxHQUZGO0FBS0Q7O0FBRUQsYUFBT0wsUUFBUDtBQUNEOzs7bUNBRXFCSCxVLEVBQVk7QUFBRSxhQUFPVixjQUFjcUIsY0FBZCxDQUE2QlosUUFBN0IsRUFBdUNDLFVBQXZDLENBQVA7QUFBNEQ7Ozs7RUFuQzNFVixhOztBQXNDdkJzQixPQUFPQyxPQUFQLEdBQWlCZCxRQUFqQiIsImZpbGUiOiJvcGVuTWVzaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBDb2xvdXJlZEN1Ym9pZCA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbW1vbi9jb2xvdXJlZC9jdWJvaWQnKSxcbiAgICAgIENvbG91cmVkQ3lsaW5kZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21tb24vY29sb3VyZWQvY3lsaW5kZXInKTtcblxuY29uc3Qgb3ZlcmFsbEhlaWdodCA9IDAuMjUsXG4gICAgICBvdmVyYWxsVGhpY2tuZXNzID0gMC4wMjUsXG4gICAgICB3aWR0aHdpc2VDb3VudCA9IDEwLFxuICAgICAgZGVwdGh3aXNlQ291bnQgPSA1LFxuICAgICAgY29sb3VyID0gWyAwLjYsIDAuNiwgMC42LCAxMCBdO1xuXG5jbGFzcyBPcGVuTWVzaCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG92ZXJhbGxXaWR0aCwgb3ZlcmFsbERlcHRoIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGVsZW1lbnRzID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgd2lkdGh3aXNlQ291bnQ7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHN0ZXAgPSBvdmVyYWxsV2lkdGggLyB3aWR0aHdpc2VDb3VudCxcbiAgICAgICAgICAgIHdpZHRoID0gb3ZlcmFsbFRoaWNrbmVzcywgIC8vL1xuICAgICAgICAgICAgaGVpZ2h0ID0gb3ZlcmFsbEhlaWdodCxcbiAgICAgICAgICAgIGRlcHRoID0gb3ZlcmFsbERlcHRoO1xuXG4gICAgICBlbGVtZW50cy5wdXNoKFxuXG4gICAgICAgIDxDb2xvdXJlZEN1Ym9pZCBjb2xvdXI9e2NvbG91cn0gcG9zaXRpb249e1tzdGVwICogaW5kZXgsIC1oZWlnaHQsIDBdfSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9Lz5cblxuICAgICAgKVxuICAgIH1cblxuICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCBkZXB0aHdpc2VDb3VudDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgc3RlcCA9IG92ZXJhbGxEZXB0aCAvIGRlcHRod2lzZUNvdW50LFxuICAgICAgICAgICAgZGlhbWV0ZXIgPSBvdmVyYWxsSGVpZ2h0IC8gMiwgLy8vXG4gICAgICAgICAgICB3aWR0aCA9IGRpYW1ldGVyLCAvLy9cbiAgICAgICAgICAgIGhlaWdodCA9IGRpYW1ldGVyLCAvLy9cbiAgICAgICAgICAgIGRlcHRoID0gb3ZlcmFsbFdpZHRoOyAgLy8vXG5cbiAgICAgIGVsZW1lbnRzLnB1c2goXG5cbiAgICAgICAgPENvbG91cmVkQ3lsaW5kZXIgY29sb3VyPXtjb2xvdXJ9IHBvc2l0aW9uPXtbIDAsIC0zICogZGlhbWV0ZXIgLyAyLCBzdGVwICogaW5kZXggXX0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRofSByb3RhdGlvbnM9e1sgMCwgOTAsIDAgXX0vPlxuXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoT3Blbk1lc2gsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT3Blbk1lc2g7XG4iXX0=