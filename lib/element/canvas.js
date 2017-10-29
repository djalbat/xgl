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
              firstVector = subtract(secondVertexPosition, firstVertexPosition),
              secondVector = subtract(thirdVertexPosition, firstVertexPosition),
              vertexNormal = normalise(cross(firstVector, secondVector));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsInZlYzMiLCJhcnJheVV0aWxpdGllcyIsInRyYW5zZm9ybVV0aWxpdGllcyIsImNob3AiLCJjb21wb3NlVHJhbnNmb3JtIiwic3VidHJhY3QiLCJjcm9zcyIsIm5vcm1hbGlzZSIsIkNhbnZhc0VsZW1lbnQiLCJ0cmFuc2Zvcm0iLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsInRyYW5zZm9ybXMiLCJjaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImZvckVhY2giLCJjaGlsZEVsZW1lbnQiLCJjcmVhdGUiLCJpbml0aWFsVmVydGV4UG9zaXRpb25zIiwiZ2V0SW5pdGlhbFZlcnRleFBvc2l0aW9ucyIsInZlcnRleFBvc2l0aW9ucyIsIm1hcCIsImluaXRpYWxWZXJ0ZXhQb3NpdGlvbiIsInZlcnRleFBvc2l0aW9uIiwiZmFjZXMiLCJ2ZXJ0ZXhOb3JtYWxzIiwicmVkdWNlIiwiZmFjZSIsImluZGV4IiwiZmlyc3RWZXJ0ZXhJbmRleCIsInNlY29uZFZlcnRleEluZGV4IiwidGhpcmRWZXJ0ZXhJbmRleCIsImZpcnN0VmVydGV4UG9zaXRpb24iLCJzZWNvbmRWZXJ0ZXhQb3NpdGlvbiIsInRoaXJkVmVydGV4UG9zaXRpb24iLCJmaXJzdFZlY3RvciIsInNlY29uZFZlY3RvciIsInZlcnRleE5vcm1hbCIsInB1c2giLCJ2ZXJ0ZXhJbmRleGVzIiwidmVydGV4UG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwiZmFjZXNMZW5ndGgiLCJvZmZzZXQiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwicG9zaXRpb24iLCJyb3RhdGlvbnMiLCJjYW52YXNFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoi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QyxTQUExQyxTQUF3RHFDLGtCQUF4RCxFQUh3Qzs7O0FBSzlELGFBQU9NLGFBQVA7QUFDRDs7OztFQXhGeUJ0RCxPOztBQTJGNUJ3RCxPQUFPQyxPQUFQLEdBQWlCL0MsYUFBakIiLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgdmVjMyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlYzMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB0cmFuc2Zvcm1VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdHJhbnNmb3JtJyk7XG5cbmNvbnN0IHsgY2hvcCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNvbXBvc2VUcmFuc2Zvcm0gfSA9IHRyYW5zZm9ybVV0aWxpdGllcyxcbiAgICAgIHsgc3VidHJhY3QsIGNyb3NzLCBub3JtYWxpc2UgfSA9IHZlYzM7XG5cbmNsYXNzIENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKSB7XG4gICAgdHJhbnNmb3JtcyA9IFt0aGlzLnRyYW5zZm9ybSwgLi4udHJhbnNmb3Jtc107IC8vL1xuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9ucyh0cmFuc2Zvcm1zKSB7XG4gICAgdHJhbnNmb3JtcyA9IFt0aGlzLnRyYW5zZm9ybSwgLi4udHJhbnNmb3Jtc107IC8vL1xuXG4gICAgY29uc3QgaW5pdGlhbFZlcnRleFBvc2l0aW9ucyA9IHRoaXMuZ2V0SW5pdGlhbFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMubWFwKGZ1bmN0aW9uKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbikge1xuICAgICAgICAgICAgbGV0IHZlcnRleFBvc2l0aW9uID0gaW5pdGlhbFZlcnRleFBvc2l0aW9uO1xuXG4gICAgICAgICAgICB0cmFuc2Zvcm1zLmZvckVhY2goZnVuY3Rpb24odHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgIHZlcnRleFBvc2l0aW9uID0gdHJhbnNmb3JtKHZlcnRleFBvc2l0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVydGV4UG9zaXRpb247XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4Tm9ybWFscyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCBmYWNlcyA9IGNob3AodmVydGV4UG9zaXRpb25zLCA0KSwgIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBmYWNlcy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4Tm9ybWFscywgZmFjZSkge1xuICAgICAgICAgICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gZmFjZTsgLy8vXG5cbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA0OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZpcnN0VmVydGV4SW5kZXggPSBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kVmVydGV4SW5kZXggPSAoaW5kZXggKyAxKSAlIDQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXJkVmVydGV4SW5kZXggPSAoaW5kZXggKyAzKSAlIDQsXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0VmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbZmlyc3RWZXJ0ZXhJbmRleF0sXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW3NlY29uZFZlcnRleEluZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1t0aGlyZFZlcnRleEluZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RWZWN0b3IgPSBzdWJ0cmFjdChzZWNvbmRWZXJ0ZXhQb3NpdGlvbiwgZmlyc3RWZXJ0ZXhQb3NpdGlvbiksXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZFZlY3RvciA9IHN1YnRyYWN0KHRoaXJkVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwgPSBub3JtYWxpc2UoY3Jvc3MoZmlyc3RWZWN0b3IsIHNlY29uZFZlY3RvcikpO1xuXG4gICAgICAgICAgICAgIHZlcnRleE5vcm1hbHMucHVzaCh2ZXJ0ZXhOb3JtYWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleEluZGV4ZXModmVydGV4UG9zaXRpb25zKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0xlbmd0aCA9IHZlcnRleFBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgZmFjZXNMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbnNMZW5ndGggLyA0OyAvLy9cblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmYWNlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gaW5kZXggKiA0O1xuXG4gICAgICB2ZXJ0ZXhJbmRleGVzLnB1c2gob2Zmc2V0ICsgMCk7XG4gICAgICB2ZXJ0ZXhJbmRleGVzLnB1c2gob2Zmc2V0ICsgMSk7XG4gICAgICB2ZXJ0ZXhJbmRleGVzLnB1c2gob2Zmc2V0ICsgMik7XG4gICAgICB2ZXJ0ZXhJbmRleGVzLnB1c2gob2Zmc2V0ICsgMCk7XG4gICAgICB2ZXJ0ZXhJbmRleGVzLnB1c2gob2Zmc2V0ICsgMik7XG4gICAgICB2ZXJ0ZXhJbmRleGVzLnB1c2gob2Zmc2V0ICsgMyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZGVwdGgsIHBvc2l0aW9uLCByb3RhdGlvbnMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgY2FudmFzRWxlbWVudCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHRyYW5zZm9ybSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzRWxlbWVudDtcbiJdfQ==