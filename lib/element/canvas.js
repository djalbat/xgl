'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    vec3 = require('../maths/vec3'),
    arrayUtilities = require('../utilities/array'),
    transformUtilities = require('../utilities/transform');

var composeTransforms = transformUtilities.composeTransforms,
    chop = arrayUtilities.chop,
    flatten = arrayUtilities.flatten,
    subtract = vec3.subtract,
    cross = vec3.cross,
    normalise = vec3.normalise;

var CanvasElement = function (_Element) {
  _inherits(CanvasElement, _Element);

  function CanvasElement(width, height, depth, dimensions, position, rotations, transformations) {
    _classCallCheck(this, CanvasElement);

    var _this = _possibleConstructorReturn(this, (CanvasElement.__proto__ || Object.getPrototypeOf(CanvasElement)).call(this));

    _this.width = width;
    _this.height = height;
    _this.depth = depth;
    _this.dimensions = dimensions;
    _this.position = position;
    _this.rotations = rotations;
    _this.transformations = transformations;
    return _this;
  }

  _createClass(CanvasElement, [{
    key: 'getWidth',
    value: function getWidth() {
      return this.width;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this.height;
    }
  }, {
    key: 'getDepth',
    value: function getDepth() {
      return this.depth;
    }
  }, {
    key: 'getDimensions',
    value: function getDimensions() {
      return this.dimensions;
    }
  }, {
    key: 'getPosition',
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: 'getRotations',
    value: function getRotations() {
      return this.rotations;
    }
  }, {
    key: 'getTransformations',
    value: function getTransformations() {
      return this.transformations;
    }
  }, {
    key: 'calculateVertexPositionData',
    value: function calculateVertexPositionData() {
      var initialVertexPositionData = this.getInitialVertexPositionData(),
          initialVertexPositions = chop(initialVertexPositionData, 3),
          ///
      transforms = composeTransforms(this.width, this.height, this.depth, this.dimensions, this.position, this.rotations, this.transformations),
          vertexPositions = initialVertexPositions.map(function (initialVertexPosition) {
        var vertexPosition = initialVertexPosition;

        transforms.forEach(function (transform) {
          vertexPosition = transform(vertexPosition);
        });

        return vertexPosition;
      }),
          vertexPositionData = flatten(vertexPositions);

      return vertexPositionData;
    }
  }, {
    key: 'calculateVertexNormalData',
    value: function calculateVertexNormalData(vertexPositionData) {
      var faces = chop(vertexPositionData, 12),
          ///
      vertexNormals = faces.reduce(function (vertexNormals, face) {
        var vertexPositions = chop(face, 3);

        for (var index = 0; index < 4; index++) {
          var firstVertexIndex = index,
              secondVertexIndex = (index + 1) % 4,
              thirdVertexIndex = (index + 3) % 4,
              firstVertexPosition = vertexPositions[firstVertexIndex],
              secondVertexPosition = vertexPositions[secondVertexIndex],
              thirdVertexPosition = vertexPositions[thirdVertexIndex],
              firstVector = subtract(secondVertexPosition, firstVertexPosition),
              secondVector = subtract(thirdVertexPosition, firstVertexPosition),
              vertexNormal = normalise(cross(firstVector, secondVector));

          vertexNormals.push(vertexNormal);
        }

        return vertexNormals;
      }, []),
          vertexNormalData = flatten(vertexNormals); ///

      return vertexNormalData;
    }
  }, {
    key: 'calculateVertexIndexData',
    value: function calculateVertexIndexData(vertexPositionData) {
      var vertexIndexData = [],
          vertexPositionDataLength = vertexPositionData.length,
          facesLength = vertexPositionDataLength / 12; ///

      for (var index = 0; index < facesLength; index++) {
        var offset = index * 4;

        vertexIndexData.push(offset + 0);
        vertexIndexData.push(offset + 1);
        vertexIndexData.push(offset + 2);
        vertexIndexData.push(offset + 0);
        vertexIndexData.push(offset + 2);
        vertexIndexData.push(offset + 3);
      }

      return vertexIndexData;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var width = properties.width,
          height = properties.height,
          depth = properties.depth,
          dimensions = properties.dimensions,
          position = properties.position,
          rotations = properties.rotations,
          transformations = properties.transformations,
          canvasElement = new (Function.prototype.bind.apply(Class, [null].concat([width, height, depth, dimensions, position, rotations, transformations], remainingArguments)))();


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsInZlYzMiLCJhcnJheVV0aWxpdGllcyIsInRyYW5zZm9ybVV0aWxpdGllcyIsImNvbXBvc2VUcmFuc2Zvcm1zIiwiY2hvcCIsImZsYXR0ZW4iLCJzdWJ0cmFjdCIsImNyb3NzIiwibm9ybWFsaXNlIiwiQ2FudmFzRWxlbWVudCIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJkaW1lbnNpb25zIiwicG9zaXRpb24iLCJyb3RhdGlvbnMiLCJ0cmFuc2Zvcm1hdGlvbnMiLCJpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwiZ2V0SW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsImluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMiLCJ0cmFuc2Zvcm1zIiwidmVydGV4UG9zaXRpb25zIiwibWFwIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uIiwidmVydGV4UG9zaXRpb24iLCJmb3JFYWNoIiwidHJhbnNmb3JtIiwidmVydGV4UG9zaXRpb25EYXRhIiwiZmFjZXMiLCJ2ZXJ0ZXhOb3JtYWxzIiwicmVkdWNlIiwiZmFjZSIsImluZGV4IiwiZmlyc3RWZXJ0ZXhJbmRleCIsInNlY29uZFZlcnRleEluZGV4IiwidGhpcmRWZXJ0ZXhJbmRleCIsImZpcnN0VmVydGV4UG9zaXRpb24iLCJzZWNvbmRWZXJ0ZXhQb3NpdGlvbiIsInRoaXJkVmVydGV4UG9zaXRpb24iLCJmaXJzdFZlY3RvciIsInNlY29uZFZlY3RvciIsInZlcnRleE5vcm1hbCIsInB1c2giLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidmVydGV4SW5kZXhEYXRhIiwidmVydGV4UG9zaXRpb25EYXRhTGVuZ3RoIiwibGVuZ3RoIiwiZmFjZXNMZW5ndGgiLCJvZmZzZXQiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJjYW52YXNFbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBw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QWhCLENBQXFCTSxTQUFTLENBQTlCO0FBQ0FKLHdCQUFnQkYsSUFBaEIsQ0FBcUJNLFNBQVMsQ0FBOUI7QUFDRDs7QUFFRCxhQUFPSixlQUFQO0FBQ0Q7OzttQ0FFcUJLLEssRUFBT0MsVSxFQUFtQztBQUFBLHdDQUFwQkMsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFBQSxVQUN0RHpDLEtBRHNELEdBQ3FCd0MsVUFEckIsQ0FDdER4QyxLQURzRDtBQUFBLFVBQy9DQyxNQUQrQyxHQUNxQnVDLFVBRHJCLENBQy9DdkMsTUFEK0M7QUFBQSxVQUN2Q0MsS0FEdUMsR0FDcUJzQyxVQURyQixDQUN2Q3RDLEtBRHVDO0FBQUEsVUFDaENDLFVBRGdDLEdBQ3FCcUMsVUFEckIsQ0FDaENyQyxVQURnQztBQUFBLFVBQ3BCQyxRQURvQixHQUNxQm9DLFVBRHJCLENBQ3BCcEMsUUFEb0I7QUFBQSxVQUNWQyxTQURVLEdBQ3FCbUMsVUFEckIsQ0FDVm5DLFNBRFU7QUFBQSxVQUNDQyxlQURELEdBQ3FCa0MsVUFEckIsQ0FDQ2xDLGVBREQ7QUFBQSxVQUV4RG9DLGFBRndELHNDQUVwQ0gsS0FGb0MsaUJBRTlCdkMsS0FGOEIsRUFFdkJDLE1BRnVCLEVBRWZDLEtBRmUsRUFFUkMsVUFGUSxFQUVJQyxRQUZKLEVBRWNDLFNBRmQsRUFFeUJDLGVBRnpCLEdBRTZDbUMsa0JBRjdDOzs7QUFJOUQsYUFBT0MsYUFBUDtBQUNEOzs7O0VBN0d5QnRELE87O0FBZ0g1QnVELE9BQU9DLE9BQVAsR0FBaUI3QyxhQUFqQiIsImZpbGUiOiJjYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICB2ZWMzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjMycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHRyYW5zZm9ybVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy90cmFuc2Zvcm0nKTtcblxuY29uc3QgeyBjb21wb3NlVHJhbnNmb3JtcyB9ID0gdHJhbnNmb3JtVXRpbGl0aWVzLFxuICAgICAgeyBjaG9wLCBmbGF0dGVuIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgc3VidHJhY3QsIGNyb3NzLCBub3JtYWxpc2UgfSA9IHZlYzM7XG5cbmNsYXNzIENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgZGVwdGgsIGRpbWVuc2lvbnMsIHBvc2l0aW9uLCByb3RhdGlvbnMsIHRyYW5zZm9ybWF0aW9ucykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5kZXB0aCA9IGRlcHRoO1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMucm90YXRpb25zID0gcm90YXRpb25zO1xuICAgIHRoaXMudHJhbnNmb3JtYXRpb25zID0gdHJhbnNmb3JtYXRpb25zO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwdGg7XG4gIH1cblxuICBnZXREaW1lbnNpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRpbWVuc2lvbnM7XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGdldFJvdGF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbnM7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm1hdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtYXRpb25zO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhKCkge1xuICAgIGNvbnN0IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEgPSB0aGlzLmdldEluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEoKSxcbiAgICAgICAgICBpbml0aWFsVmVydGV4UG9zaXRpb25zID0gY2hvcChpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLCAzKSwgIC8vL1xuICAgICAgICAgIHRyYW5zZm9ybXMgPSBjb21wb3NlVHJhbnNmb3Jtcyh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5kZXB0aCwgdGhpcy5kaW1lbnNpb25zLCB0aGlzLnBvc2l0aW9uLCB0aGlzLnJvdGF0aW9ucywgdGhpcy50cmFuc2Zvcm1hdGlvbnMpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMubWFwKGZ1bmN0aW9uKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbikge1xuICAgICAgICAgICAgbGV0IHZlcnRleFBvc2l0aW9uID0gaW5pdGlhbFZlcnRleFBvc2l0aW9uO1xuXG4gICAgICAgICAgICB0cmFuc2Zvcm1zLmZvckVhY2goZnVuY3Rpb24odHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgIHZlcnRleFBvc2l0aW9uID0gdHJhbnNmb3JtKHZlcnRleFBvc2l0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVydGV4UG9zaXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25EYXRhID0gZmxhdHRlbih2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgcmV0dXJuIHZlcnRleFBvc2l0aW9uRGF0YTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEodmVydGV4UG9zaXRpb25EYXRhKSB7XG4gICAgY29uc3QgZmFjZXMgPSBjaG9wKHZlcnRleFBvc2l0aW9uRGF0YSwgMTIpLCAgLy8vXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IGZhY2VzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhOb3JtYWxzLCBmYWNlKSB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSBjaG9wKGZhY2UsIDMpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICBjb25zdCBmaXJzdFZlcnRleEluZGV4ID0gaW5kZXgsXG4gICAgICAgICAgICAgICAgICBzZWNvbmRWZXJ0ZXhJbmRleCA9IChpbmRleCArIDEpICUgNCxcbiAgICAgICAgICAgICAgICAgIHRoaXJkVmVydGV4SW5kZXggPSAoaW5kZXggKyAzKSAlIDQsXG4gICAgICAgICAgICAgICAgICBmaXJzdFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW2ZpcnN0VmVydGV4SW5kZXhdLFxuICAgICAgICAgICAgICAgICAgc2Vjb25kVmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbc2Vjb25kVmVydGV4SW5kZXhdLFxuICAgICAgICAgICAgICAgICAgdGhpcmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1t0aGlyZFZlcnRleEluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGZpcnN0VmVjdG9yID0gc3VidHJhY3Qoc2Vjb25kVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICAgICAgICAgICAgc2Vjb25kVmVjdG9yID0gc3VidHJhY3QodGhpcmRWZXJ0ZXhQb3NpdGlvbiwgZmlyc3RWZXJ0ZXhQb3NpdGlvbiksXG4gICAgICAgICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwgPSBub3JtYWxpc2UoY3Jvc3MoZmlyc3RWZWN0b3IsIHNlY29uZFZlY3RvcikpO1xuXG4gICAgICAgICAgICAgIHZlcnRleE5vcm1hbHMucHVzaCh2ZXJ0ZXhOb3JtYWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgICAgICAgICB9LCBbXSksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsRGF0YSA9IGZsYXR0ZW4odmVydGV4Tm9ybWFscyk7IC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleE5vcm1hbERhdGE7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhJbmRleERhdGEodmVydGV4UG9zaXRpb25EYXRhKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhEYXRhID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25EYXRhTGVuZ3RoID0gdmVydGV4UG9zaXRpb25EYXRhLmxlbmd0aCxcbiAgICAgICAgICBmYWNlc0xlbmd0aCA9IHZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCAvIDEyOyAvLy9cblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmYWNlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gaW5kZXggKiA0O1xuXG4gICAgICB2ZXJ0ZXhJbmRleERhdGEucHVzaChvZmZzZXQgKyAwKTtcbiAgICAgIHZlcnRleEluZGV4RGF0YS5wdXNoKG9mZnNldCArIDEpO1xuICAgICAgdmVydGV4SW5kZXhEYXRhLnB1c2gob2Zmc2V0ICsgMik7XG4gICAgICB2ZXJ0ZXhJbmRleERhdGEucHVzaChvZmZzZXQgKyAwKTtcbiAgICAgIHZlcnRleEluZGV4RGF0YS5wdXNoKG9mZnNldCArIDIpO1xuICAgICAgdmVydGV4SW5kZXhEYXRhLnB1c2gob2Zmc2V0ICsgMyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcnRleEluZGV4RGF0YTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgZGltZW5zaW9ucywgcG9zaXRpb24sIHJvdGF0aW9ucywgdHJhbnNmb3JtYXRpb25zIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQgPSBuZXcgQ2xhc3Mod2lkdGgsIGhlaWdodCwgZGVwdGgsIGRpbWVuc2lvbnMsIHBvc2l0aW9uLCByb3RhdGlvbnMsIHRyYW5zZm9ybWF0aW9ucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzRWxlbWVudDtcbiJdfQ==