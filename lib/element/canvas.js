'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    vec3 = require('../maths/vec3'),
    arrayUtilities = require('../utilities/array'),
    transformUtilities = require('../utilities/transform');

var composeTransform = transformUtilities.composeTransform,
    composeTransforms = transformUtilities.composeTransforms,
    chop = arrayUtilities.chop,
    flatten = arrayUtilities.flatten,
    subtract = vec3.subtract,
    cross = vec3.cross,
    normalise = vec3.normalise;

var CanvasElement = function (_Element) {
  _inherits(CanvasElement, _Element);

  function CanvasElement(transform, transformations) {
    _classCallCheck(this, CanvasElement);

    var _this = _possibleConstructorReturn(this, (CanvasElement.__proto__ || Object.getPrototypeOf(CanvasElement)).call(this));

    _this.transform = transform;

    _this.transformations = transformations;
    return _this;
  }

  _createClass(CanvasElement, [{
    key: 'getTransform',
    value: function getTransform() {
      return this.transform;
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
      transforms = composeTransforms(this.transform, this.transformations),
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
          transform = composeTransform(width, height, depth, dimensions, position, rotations),
          canvasElement = new (Function.prototype.bind.apply(Class, [null].concat([transform, transformations], remainingArguments)))();


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsInZlYzMiLCJhcnJheVV0aWxpdGllcyIsInRyYW5zZm9ybVV0aWxpdGllcyIsImNvbXBvc2VUcmFuc2Zvcm0iLCJjb21wb3NlVHJhbnNmb3JtcyIsImNob3AiLCJmbGF0dGVuIiwic3VidHJhY3QiLCJjcm9zcyIsIm5vcm1hbGlzZSIsIkNhbnZhc0VsZW1lbnQiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2Zvcm1hdGlvbnMiLCJpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwiZ2V0SW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsImluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMiLCJ0cmFuc2Zvcm1zIiwidmVydGV4UG9zaXRpb25zIiwibWFwIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uIiwidmVydGV4UG9zaXRpb24iLCJmb3JFYWNoIiwidmVydGV4UG9zaXRpb25EYXRhIiwiZmFjZXMiLCJ2ZXJ0ZXhOb3JtYWxzIiwicmVkdWNlIiwiZmFjZSIsImluZGV4IiwiZmlyc3RWZXJ0ZXhJbmRleCIsInNlY29uZFZlcnRleEluZGV4IiwidGhpcmRWZXJ0ZXhJbmRleCIsImZpcnN0VmVydGV4UG9zaXRpb24iLCJzZWNvbmRWZXJ0ZXhQb3NpdGlvbiIsInRoaXJkVmVydGV4UG9zaXRpb24iLCJmaXJzdFZlY3RvciIsInNlY29uZFZlY3RvciIsInZlcnRleE5vcm1hbCIsInB1c2giLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidmVydGV4SW5kZXhEYXRhIiwidmVydGV4UG9zaXRpb25EYXRhTGVuZ3RoIiwibGVuZ3RoIiwiZmFjZXNMZW5ndGgiLCJvZmZzZXQiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwiZGltZW5zaW9ucyIsInBvc2l0aW9uIiwicm90YXRpb25zIiwiY2FudmFzRWxlbWVudCIsIm1vZHVs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LEVBQWdDQyxLQUFoQyxFQUF1Q0MsVUFBdkMsRUFBbURDLFFBQW5ELEVBQTZEQyxTQUE3RCxDQUY0QztBQUFBLFVBR3hEQyxhQUh3RCxzQ0FHcENULEtBSG9DLGlCQUc5QmpDLFNBSDhCLEVBR25CQyxlQUhtQixHQUdDa0Msa0JBSEQ7OztBQUs5RCxhQUFPTyxhQUFQO0FBQ0Q7Ozs7RUF0RnlCdkQsTzs7QUF5RjVCd0QsT0FBT0MsT0FBUCxHQUFpQjdDLGFBQWpCIiwiZmlsZSI6ImNhbnZhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIHZlYzMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWMzJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdHJhbnNmb3JtVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3RyYW5zZm9ybScpO1xuXG5jb25zdCB7IGNvbXBvc2VUcmFuc2Zvcm0sIGNvbXBvc2VUcmFuc2Zvcm1zIH0gPSB0cmFuc2Zvcm1VdGlsaXRpZXMsXG4gICAgICB7IGNob3AsIGZsYXR0ZW4gfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBzdWJ0cmFjdCwgY3Jvc3MsIG5vcm1hbGlzZSB9ID0gdmVjMztcblxuY2xhc3MgQ2FudmFzRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIHRyYW5zZm9ybWF0aW9ucykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcblxuICAgIHRoaXMudHJhbnNmb3JtYXRpb25zID0gdHJhbnNmb3JtYXRpb25zO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldFRyYW5zZm9ybWF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1hdGlvbnM7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEoKSB7XG4gICAgY29uc3QgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSA9IHRoaXMuZ2V0SW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSgpLFxuICAgICAgICAgIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMgPSBjaG9wKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIDMpLCAgLy8vXG4gICAgICAgICAgdHJhbnNmb3JtcyA9IGNvbXBvc2VUcmFuc2Zvcm1zKHRoaXMudHJhbnNmb3JtLCB0aGlzLnRyYW5zZm9ybWF0aW9ucyksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gaW5pdGlhbFZlcnRleFBvc2l0aW9ucy5tYXAoZnVuY3Rpb24oaW5pdGlhbFZlcnRleFBvc2l0aW9uKSB7XG4gICAgICAgICAgICBsZXQgdmVydGV4UG9zaXRpb24gPSBpbml0aWFsVmVydGV4UG9zaXRpb247XG5cbiAgICAgICAgICAgIHRyYW5zZm9ybXMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgICAgdmVydGV4UG9zaXRpb24gPSB0cmFuc2Zvcm0odmVydGV4UG9zaXRpb24pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBmbGF0dGVuKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICByZXR1cm4gdmVydGV4UG9zaXRpb25EYXRhO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpIHtcbiAgICBjb25zdCBmYWNlcyA9IGNob3AodmVydGV4UG9zaXRpb25EYXRhLCAxMiksICAvLy9cbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gZmFjZXMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleE5vcm1hbHMsIGZhY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IGNob3AoZmFjZSwgMyk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA0OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZpcnN0VmVydGV4SW5kZXggPSBpbmRleCxcbiAgICAgICAgICAgICAgICAgIHNlY29uZFZlcnRleEluZGV4ID0gKGluZGV4ICsgMSkgJSA0LFxuICAgICAgICAgICAgICAgICAgdGhpcmRWZXJ0ZXhJbmRleCA9IChpbmRleCArIDMpICUgNCxcbiAgICAgICAgICAgICAgICAgIGZpcnN0VmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbZmlyc3RWZXJ0ZXhJbmRleF0sXG4gICAgICAgICAgICAgICAgICBzZWNvbmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tzZWNvbmRWZXJ0ZXhJbmRleF0sXG4gICAgICAgICAgICAgICAgICB0aGlyZFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW3RoaXJkVmVydGV4SW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZmlyc3RWZWN0b3IgPSBzdWJ0cmFjdChzZWNvbmRWZXJ0ZXhQb3NpdGlvbiwgZmlyc3RWZXJ0ZXhQb3NpdGlvbiksXG4gICAgICAgICAgICAgICAgICBzZWNvbmRWZWN0b3IgPSBzdWJ0cmFjdCh0aGlyZFZlcnRleFBvc2l0aW9uLCBmaXJzdFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgICAgICAgICAgIHZlcnRleE5vcm1hbCA9IG5vcm1hbGlzZShjcm9zcyhmaXJzdFZlY3Rvciwgc2Vjb25kVmVjdG9yKSk7XG5cbiAgICAgICAgICAgICAgdmVydGV4Tm9ybWFscy5wdXNoKHZlcnRleE5vcm1hbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxEYXRhID0gZmxhdHRlbih2ZXJ0ZXhOb3JtYWxzKTsgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4Tm9ybWFsRGF0YTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleERhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGFMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbkRhdGEubGVuZ3RoLFxuICAgICAgICAgIGZhY2VzTGVuZ3RoID0gdmVydGV4UG9zaXRpb25EYXRhTGVuZ3RoIC8gMTI7IC8vL1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZhY2VzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBpbmRleCAqIDQ7XG5cbiAgICAgIHZlcnRleEluZGV4RGF0YS5wdXNoKG9mZnNldCArIDApO1xuICAgICAgdmVydGV4SW5kZXhEYXRhLnB1c2gob2Zmc2V0ICsgMSk7XG4gICAgICB2ZXJ0ZXhJbmRleERhdGEucHVzaChvZmZzZXQgKyAyKTtcbiAgICAgIHZlcnRleEluZGV4RGF0YS5wdXNoKG9mZnNldCArIDApO1xuICAgICAgdmVydGV4SW5kZXhEYXRhLnB1c2gob2Zmc2V0ICsgMik7XG4gICAgICB2ZXJ0ZXhJbmRleERhdGEucHVzaChvZmZzZXQgKyAzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVydGV4SW5kZXhEYXRhO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBkaW1lbnNpb25zLCBwb3NpdGlvbiwgcm90YXRpb25zLCB0cmFuc2Zvcm1hdGlvbnMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgZGltZW5zaW9ucywgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgY2FudmFzRWxlbWVudCA9IG5ldyBDbGFzcyh0cmFuc2Zvcm0sIHRyYW5zZm9ybWF0aW9ucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzRWxlbWVudDtcbiJdfQ==