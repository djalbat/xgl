'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    vec3 = require('../maths/vec3'),
    arrayUtilities = require('../utilities/array'),
    transformUtilities = require('../utilities/transform');

var chop = arrayUtilities.chop,
    flatten = arrayUtilities.flatten,
    composeTransform = transformUtilities.composeTransform,
    subtract = vec3.subtract,
    cross = vec3.cross,
    normalise = vec3.normalise;

var CanvasElement = function (_Element) {
  _inherits(CanvasElement, _Element);

  function CanvasElement(transform) {
    _classCallCheck(this, CanvasElement);

    var _this = _possibleConstructorReturn(this, (CanvasElement.__proto__ || Object.getPrototypeOf(CanvasElement)).call(this));

    _this.transform = transform;
    return _this;
  }

  _createClass(CanvasElement, [{
    key: 'getTransform',
    value: function getTransform() {
      return this.transform;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {
      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        childElement.create(colourRenderer, textureRenderer, transforms);
      });
    }
  }, {
    key: 'calculateVertexPositionData',
    value: function calculateVertexPositionData(transforms) {
      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      var initialVertexPositionData = this.getInitialVertexPositionData(),
          initialVertexPositions = chop(initialVertexPositionData, 3),
          ///
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
          position = properties.position,
          rotations = properties.rotations,
          transform = composeTransform(width, height, depth, position, rotations),
          canvasElement = Element.fromProperties.apply(Element, [Class, properties, transform].concat(remainingArguments));


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsInZlYzMiLCJhcnJheVV0aWxpdGllcyIsInRyYW5zZm9ybVV0aWxpdGllcyIsImNob3AiLCJmbGF0dGVuIiwiY29tcG9zZVRyYW5zZm9ybSIsInN1YnRyYWN0IiwiY3Jvc3MiLCJub3JtYWxpc2UiLCJDYW52YXNFbGVtZW50IiwidHJhbnNmb3JtIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJ0cmFuc2Zvcm1zIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiY3JlYXRlIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsImdldEluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJpbml0aWFsVmVydGV4UG9zaXRpb25zIiwidmVydGV4UG9zaXRpb25zIiwibWFwIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uIiwidmVydGV4UG9zaXRpb24iLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJmYWNlcyIsInZlcnRleE5vcm1hbHMiLCJyZWR1Y2UiLCJmYWNlIiwiaW5kZXgiLCJmaXJzdFZlcnRleEluZGV4Iiwic2Vjb25kVmVydGV4SW5kZXgiLCJ0aGlyZFZlcnRleEluZGV4IiwiZmlyc3RWZXJ0ZXhQb3NpdGlvbiIsInNlY29uZFZlcnRleFBvc2l0aW9uIiwidGhpcmRWZXJ0ZXhQb3NpdGlvbiIsImZpcnN0VmVjdG9yIiwic2Vjb25kVmVjdG9yIiwidmVydGV4Tm9ybWFsIiwicHVzaCIsInZlcnRleE5vcm1hbERhdGEiLCJ2ZXJ0ZXhJbmRleERhdGEiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGFMZW5ndGgiLCJsZW5ndGgiLCJmYWNlc0xlbmd0aCIsIm9mZnNldCIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsImNhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxPQUFPRCxRQUFRLGVBQVIsQ0FEYjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxvQkFBUixDQUZ2QjtBQUFBLElBR01HLHFCQUFxQkgsUUFBUSx3QkFBUixDQUgzQjs7SUFLUUksSSxHQUFrQkYsYyxDQUFsQkUsSTtJQUFNQyxPLEdBQVlILGMsQ0FBWkcsTztJQUNOQyxnQixHQUFxQkgsa0IsQ0FBckJHLGdCO0lBQ0FDLFEsR0FBK0JOLEksQ0FBL0JNLFE7SUFBVUMsSyxHQUFxQlAsSSxDQUFyQk8sSztJQUFPQyxTLEdBQWNSLEksQ0FBZFEsUzs7SUFFbkJDLGE7OztBQUNKLHlCQUFZQyxTQUFaLEVBQXVCO0FBQUE7O0FBQUE7O0FBR3JCLFVBQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0FBSHFCO0FBSXRCOzs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLQSxTQUFaO0FBQ0Q7OzsyQkFFTUMsYyxFQUFnQkMsZSxFQUFpQkMsVSxFQUFZO0FBQ2xEQSxvQkFBYyxLQUFLSCxTQUFuQiw0QkFBaUNHLFVBQWpDLEdBRGtELENBQ0o7O0FBRTlDLFVBQU1DLGdCQUFnQixLQUFLQyxnQkFBTCxFQUF0Qjs7QUFFQUQsb0JBQWNFLE9BQWQsQ0FBc0IsVUFBU0MsWUFBVCxFQUF1QjtBQUMzQ0EscUJBQWFDLE1BQWIsQ0FBb0JQLGNBQXBCLEVBQW9DQyxlQUFwQyxFQUFxREMsVUFBckQ7QUFDRCxPQUZEO0FBR0Q7OztnREFFMkJBLFUsRUFBWTtBQUN0Q0Esb0JBQWMsS0FBS0gsU0FBbkIsNEJBQWlDRyxVQUFqQyxHQURzQyxDQUNROztBQUU5QyxVQUFNTSw0QkFBNEIsS0FBS0MsNEJBQUwsRUFBbEM7QUFBQSxVQUNNQyx5QkFBeUJsQixLQUFLZ0IseUJBQUwsRUFBZ0Ms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Z0M7QUFBQSxVQUN0QkMsU0FEc0IsR0FDUk4sVUFEUSxDQUN0Qk0sU0FEc0I7QUFBQSxVQUV4RDdDLFNBRndELEdBRTVDTCxpQkFBaUI4QyxLQUFqQixFQUF3QkMsTUFBeEIsRUFBZ0NDLEtBQWhDLEVBQXVDQyxRQUF2QyxFQUFpREMsU0FBakQsQ0FGNEM7QUFBQSxVQUd4REMsYUFId0QsR0FHeEMxRCxRQUFRMkQsY0FBUixpQkFBdUJULEtBQXZCLEVBQThCQyxVQUE5QixFQUEwQ3ZDLFNBQTFDLFNBQXdEd0Msa0JBQXhELEVBSHdDOzs7QUFLOUQsYUFBT00sYUFBUDtBQUNEOzs7O0VBM0Z5QjFELE87O0FBOEY1QjRELE9BQU9DLE9BQVAsR0FBaUJsRCxhQUFqQiIsImZpbGUiOiJjYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICB2ZWMzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjMycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHRyYW5zZm9ybVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy90cmFuc2Zvcm0nKTtcblxuY29uc3QgeyBjaG9wLCBmbGF0dGVuIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY29tcG9zZVRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtVXRpbGl0aWVzLFxuICAgICAgeyBzdWJ0cmFjdCwgY3Jvc3MsIG5vcm1hbGlzZSB9ID0gdmVjMztcblxuY2xhc3MgQ2FudmFzRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpIHtcbiAgICB0cmFuc2Zvcm1zID0gW3RoaXMudHJhbnNmb3JtLCAuLi50cmFuc2Zvcm1zXTsgLy8vXG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgICBjaGlsZEVsZW1lbnQuY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpO1xuICAgIH0pO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhKHRyYW5zZm9ybXMpIHtcbiAgICB0cmFuc2Zvcm1zID0gW3RoaXMudHJhbnNmb3JtLCAuLi50cmFuc2Zvcm1zXTsgLy8vXG5cbiAgICBjb25zdCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhID0gdGhpcy5nZXRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKCksXG4gICAgICAgICAgaW5pdGlhbFZlcnRleFBvc2l0aW9ucyA9IGNob3AoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgMyksICAvLy9cbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBpbml0aWFsVmVydGV4UG9zaXRpb25zLm1hcChmdW5jdGlvbihpbml0aWFsVmVydGV4UG9zaXRpb24pIHtcbiAgICAgICAgICAgIGxldCB2ZXJ0ZXhQb3NpdGlvbiA9IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbjtcblxuICAgICAgICAgICAgdHJhbnNmb3Jtcy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zZm9ybSkge1xuICAgICAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbiA9IHRyYW5zZm9ybSh2ZXJ0ZXhQb3NpdGlvbik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHZlcnRleFBvc2l0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uRGF0YSA9IGZsYXR0ZW4odmVydGV4UG9zaXRpb25zKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbkRhdGE7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhKHZlcnRleFBvc2l0aW9uRGF0YSkge1xuICAgIGNvbnN0IGZhY2VzID0gY2hvcCh2ZXJ0ZXhQb3NpdGlvbkRhdGEsIDEyKSwgIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBmYWNlcy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4Tm9ybWFscywgZmFjZSkge1xuICAgICAgICAgICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gY2hvcChmYWNlLCAzKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDQ7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgY29uc3QgZmlyc3RWZXJ0ZXhJbmRleCA9IGluZGV4LFxuICAgICAgICAgICAgICAgICAgc2Vjb25kVmVydGV4SW5kZXggPSAoaW5kZXggKyAxKSAlIDQsXG4gICAgICAgICAgICAgICAgICB0aGlyZFZlcnRleEluZGV4ID0gKGluZGV4ICsgMykgJSA0LFxuICAgICAgICAgICAgICAgICAgZmlyc3RWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tmaXJzdFZlcnRleEluZGV4XSxcbiAgICAgICAgICAgICAgICAgIHNlY29uZFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW3NlY29uZFZlcnRleEluZGV4XSxcbiAgICAgICAgICAgICAgICAgIHRoaXJkVmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbdGhpcmRWZXJ0ZXhJbmRleF0sXG4gICAgICAgICAgICAgICAgICBmaXJzdFZlY3RvciA9IHN1YnRyYWN0KHNlY29uZFZlcnRleFBvc2l0aW9uLCBmaXJzdFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgICAgICAgICAgIHNlY29uZFZlY3RvciA9IHN1YnRyYWN0KHRoaXJkVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICAgICAgICAgICAgdmVydGV4Tm9ybWFsID0gbm9ybWFsaXNlKGNyb3NzKGZpcnN0VmVjdG9yLCBzZWNvbmRWZWN0b3IpKTtcblxuICAgICAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzLnB1c2godmVydGV4Tm9ybWFsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIHZlcnRleE5vcm1hbERhdGEgPSBmbGF0dGVuKHZlcnRleE5vcm1hbHMpOyAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxEYXRhO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4SW5kZXhEYXRhKHZlcnRleFBvc2l0aW9uRGF0YSkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4RGF0YSA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCA9IHZlcnRleFBvc2l0aW9uRGF0YS5sZW5ndGgsXG4gICAgICAgICAgZmFjZXNMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbkRhdGFMZW5ndGggLyAxMjsgLy8vXG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmFjZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogNDtcblxuICAgICAgdmVydGV4SW5kZXhEYXRhLnB1c2gob2Zmc2V0ICsgMCk7XG4gICAgICB2ZXJ0ZXhJbmRleERhdGEucHVzaChvZmZzZXQgKyAxKTtcbiAgICAgIHZlcnRleEluZGV4RGF0YS5wdXNoKG9mZnNldCArIDIpO1xuICAgICAgdmVydGV4SW5kZXhEYXRhLnB1c2gob2Zmc2V0ICsgMCk7XG4gICAgICB2ZXJ0ZXhJbmRleERhdGEucHVzaChvZmZzZXQgKyAyKTtcbiAgICAgIHZlcnRleEluZGV4RGF0YS5wdXNoKG9mZnNldCArIDMpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJ0ZXhJbmRleERhdGE7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZGVwdGgsIHBvc2l0aW9uLCByb3RhdGlvbnMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgY2FudmFzRWxlbWVudCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHRyYW5zZm9ybSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzRWxlbWVudDsiXX0=