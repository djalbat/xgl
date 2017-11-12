'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    arrayUtilities = require('../utilities/array'),
    vectorUtilities = require('../utilities/vector'),
    transformUtilities = require('../utilities/transform');

var chop = arrayUtilities.chop,
    composeTransform = transformUtilities.composeTransform,
    subtract3 = vectorUtilities.subtract3,
    cross3 = vectorUtilities.cross3,
    normalise3 = vectorUtilities.normalise3;

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
    key: 'calculateVertexPositions',
    value: function calculateVertexPositions(transforms) {
      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      var initialVertexPositions = this.getInitialVertexPositions(),
          vertexPositions = initialVertexPositions.map(function (initialVertexPosition) {
        var vertexPosition = initialVertexPosition;

        transforms.forEach(function (transform) {
          vertexPosition = transform(vertexPosition);
        });

        return vertexPosition;
      });

      return vertexPositions;
    }
  }, {
    key: 'calculateVertexNormals',
    value: function calculateVertexNormals(vertexPositions) {
      var faces = chop(vertexPositions, 4),
          ///
      vertexNormals = faces.reduce(function (vertexNormals, face) {
        var vertexPositions = face; ///

        for (var index = 0; index < 4; index++) {
          var firstVertexIndex = index,
              secondVertexIndex = (index + 1) % 4,
              thirdVertexIndex = (index + 3) % 4,
              firstVertexPosition = vertexPositions[firstVertexIndex],
              secondVertexPosition = vertexPositions[secondVertexIndex],
              thirdVertexPosition = vertexPositions[thirdVertexIndex],
              firstVector = subtract3(secondVertexPosition, firstVertexPosition),
              secondVector = subtract3(thirdVertexPosition, firstVertexPosition),
              vertexNormal = normalise3(cross3(firstVector, secondVector));

          vertexNormals.push(vertexNormal);
        }

        return vertexNormals;
      }, []);

      return vertexNormals;
    }
  }, {
    key: 'calculateVertexIndexes',
    value: function calculateVertexIndexes(vertexPositions) {
      var vertexIndexes = [],
          vertexPositionsLength = vertexPositions.length,
          facesLength = vertexPositionsLength / 4; ///

      for (var index = 0; index < facesLength; index++) {
        var offset = index * 4;

        vertexIndexes.push(offset + 0);
        vertexIndexes.push(offset + 1);
        vertexIndexes.push(offset + 2);
        vertexIndexes.push(offset + 0);
        vertexIndexes.push(offset + 2);
        vertexIndexes.push(offset + 3);
      }

      return vertexIndexes;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwidmVjdG9yVXRpbGl0aWVzIiwidHJhbnNmb3JtVXRpbGl0aWVzIiwiY2hvcCIsImNvbXBvc2VUcmFuc2Zvcm0iLCJzdWJ0cmFjdDMiLCJjcm9zczMiLCJub3JtYWxpc2UzIiwiQ2FudmFzRWxlbWVudCIsInRyYW5zZm9ybSIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidHJhbnNmb3JtcyIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsImNyZWF0ZSIsImluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMiLCJnZXRJbml0aWFsVmVydGV4UG9zaXRpb25zIiwidmVydGV4UG9zaXRpb25zIiwibWFwIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uIiwidmVydGV4UG9zaXRpb24iLCJmYWNlcyIsInZlcnRleE5vcm1hbHMiLCJyZWR1Y2UiLCJmYWNlIiwiaW5kZXgiLCJmaXJzdFZlcnRleEluZGV4Iiwic2Vjb25kVmVydGV4SW5kZXgiLCJ0aGlyZFZlcnRleEluZGV4IiwiZmlyc3RWZXJ0ZXhQb3NpdGlvbiIsInNlY29uZFZlcnRleFBvc2l0aW9uIiwidGhpcmRWZXJ0ZXhQb3NpdGlvbiIsImZpcnN0VmVjdG9yIiwic2Vjb25kVmVjdG9yIiwidmVydGV4Tm9ybWFsIiwicHVzaCIsInZlcnRleEluZGV4ZXMiLCJ2ZXJ0ZXhQb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJmYWNlc0xlbmd0aCIsIm9mZnNldCIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsImNhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMi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QUE4QkMsVUFBOUIsRUFBMENwQyxTQUExQyxTQUF3RHFDLGtCQUF4RCxFQUh3Qzs7O0FBSzlELGFBQU9NLGFBQVA7QUFDRDs7OztFQXhGeUJ0RCxPOztBQTJGNUJ3RCxPQUFPQyxPQUFQLEdBQWlCL0MsYUFBakIiLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy92ZWN0b3InKSxcbiAgICAgIHRyYW5zZm9ybVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy90cmFuc2Zvcm0nKTtcblxuY29uc3QgeyBjaG9wIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY29tcG9zZVRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtVXRpbGl0aWVzLFxuICAgICAgeyBzdWJ0cmFjdDMsIGNyb3NzMywgbm9ybWFsaXNlMyB9ID0gdmVjdG9yVXRpbGl0aWVzO1xuXG5jbGFzcyBDYW52YXNFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldFRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm07XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcykge1xuICAgIHRyYW5zZm9ybXMgPSBbdGhpcy50cmFuc2Zvcm0sIC4uLnRyYW5zZm9ybXNdOyAvLy9cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcyk7XG4gICAgfSk7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbnModHJhbnNmb3Jtcykge1xuICAgIHRyYW5zZm9ybXMgPSBbdGhpcy50cmFuc2Zvcm0sIC4uLnRyYW5zZm9ybXNdOyAvLy9cblxuICAgIGNvbnN0IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmdldEluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBpbml0aWFsVmVydGV4UG9zaXRpb25zLm1hcChmdW5jdGlvbihpbml0aWFsVmVydGV4UG9zaXRpb24pIHtcbiAgICAgICAgICAgIGxldCB2ZXJ0ZXhQb3NpdGlvbiA9IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbjtcblxuICAgICAgICAgICAgdHJhbnNmb3Jtcy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zZm9ybSkge1xuICAgICAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbiA9IHRyYW5zZm9ybSh2ZXJ0ZXhQb3NpdGlvbik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHZlcnRleFBvc2l0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHZlcnRleFBvc2l0aW9ucztcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleE5vcm1hbHModmVydGV4UG9zaXRpb25zKSB7XG4gICAgY29uc3QgZmFjZXMgPSBjaG9wKHZlcnRleFBvc2l0aW9ucywgNCksICAvLy9cbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gZmFjZXMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleE5vcm1hbHMsIGZhY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IGZhY2U7IC8vL1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICBjb25zdCBmaXJzdFZlcnRleEluZGV4ID0gaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZFZlcnRleEluZGV4ID0gKGluZGV4ICsgMSkgJSA0LFxuICAgICAgICAgICAgICAgICAgICB0aGlyZFZlcnRleEluZGV4ID0gKGluZGV4ICsgMykgJSA0LFxuICAgICAgICAgICAgICAgICAgICBmaXJzdFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW2ZpcnN0VmVydGV4SW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tzZWNvbmRWZXJ0ZXhJbmRleF0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXJkVmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbdGhpcmRWZXJ0ZXhJbmRleF0sXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0VmVjdG9yID0gc3VidHJhY3QzKHNlY29uZFZlcnRleFBvc2l0aW9uLCBmaXJzdFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kVmVjdG9yID0gc3VidHJhY3QzKHRoaXJkVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwgPSBub3JtYWxpc2UzKGNyb3NzMyhmaXJzdFZlY3Rvciwgc2Vjb25kVmVjdG9yKSk7XG5cbiAgICAgICAgICAgICAgdmVydGV4Tm9ybWFscy5wdXNoKHZlcnRleE5vcm1hbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4SW5kZXhlcyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zTGVuZ3RoID0gdmVydGV4UG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBmYWNlc0xlbmd0aCA9IHZlcnRleFBvc2l0aW9uc0xlbmd0aCAvIDQ7IC8vL1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZhY2VzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBpbmRleCAqIDQ7XG5cbiAgICAgIHZlcnRleEluZGV4ZXMucHVzaChvZmZzZXQgKyAwKTtcbiAgICAgIHZlcnRleEluZGV4ZXMucHVzaChvZmZzZXQgKyAxKTtcbiAgICAgIHZlcnRleEluZGV4ZXMucHVzaChvZmZzZXQgKyAyKTtcbiAgICAgIHZlcnRleEluZGV4ZXMucHVzaChvZmZzZXQgKyAwKTtcbiAgICAgIHZlcnRleEluZGV4ZXMucHVzaChvZmZzZXQgKyAyKTtcbiAgICAgIHZlcnRleEluZGV4ZXMucHVzaChvZmZzZXQgKyAzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBwb3NpdGlvbiwgcm90YXRpb25zKSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdHJhbnNmb3JtLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXNFbGVtZW50O1xuIl19