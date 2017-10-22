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

      var initialVertexPositions = this.getInitialVertexPositions(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsInZlYzMiLCJhcnJheVV0aWxpdGllcyIsInRyYW5zZm9ybVV0aWxpdGllcyIsImNob3AiLCJmbGF0dGVuIiwiY29tcG9zZVRyYW5zZm9ybSIsInN1YnRyYWN0IiwiY3Jvc3MiLCJub3JtYWxpc2UiLCJDYW52YXNFbGVtZW50IiwidHJhbnNmb3JtIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJ0cmFuc2Zvcm1zIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiY3JlYXRlIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9ucyIsImdldEluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJtYXAiLCJpbml0aWFsVmVydGV4UG9zaXRpb24iLCJ2ZXJ0ZXhQb3NpdGlvbiIsInZlcnRleFBvc2l0aW9uRGF0YSIsImZhY2VzIiwidmVydGV4Tm9ybWFscyIsInJlZHVjZSIsImZhY2UiLCJpbmRleCIsImZpcnN0VmVydGV4SW5kZXgiLCJzZWNvbmRWZXJ0ZXhJbmRleCIsInRoaXJkVmVydGV4SW5kZXgiLCJmaXJzdFZlcnRleFBvc2l0aW9uIiwic2Vjb25kVmVydGV4UG9zaXRpb24iLCJ0aGlyZFZlcnRleFBvc2l0aW9uIiwiZmlyc3RWZWN0b3IiLCJzZWNvbmRWZWN0b3IiLCJ2ZXJ0ZXhOb3JtYWwiLCJwdXNoIiwidmVydGV4Tm9ybWFsRGF0YSIsInZlcnRleEluZGV4RGF0YSIsInZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCIsImxlbmd0aCIsImZhY2VzTGVuZ3RoIiwib2Zmc2V0IiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwid2lkdGgiLCJoZWlnaHQiLCJkZXB0aCIsInBvc2l0aW9uIiwicm90YXRpb25zIiwiY2FudmFzRWxl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d0JDLE1BQXhCLEVBQWdDQyxLQUFoQyxFQUF1Q0MsUUFBdkMsRUFBaURDLFNBQWpELENBRjRDO0FBQUEsVUFHeERDLGFBSHdELEdBR3hDekQsUUFBUTBELGNBQVIsaUJBQXVCVCxLQUF2QixFQUE4QkMsVUFBOUIsRUFBMEN0QyxTQUExQyxTQUF3RHVDLGtCQUF4RCxFQUh3Qzs7O0FBSzlELGFBQU9NLGFBQVA7QUFDRDs7OztFQTFGeUJ6RCxPOztBQTZGNUIyRCxPQUFPQyxPQUFQLEdBQWlCakQsYUFBakIiLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgdmVjMyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlYzMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB0cmFuc2Zvcm1VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdHJhbnNmb3JtJyk7XG5cbmNvbnN0IHsgY2hvcCwgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNvbXBvc2VUcmFuc2Zvcm0gfSA9IHRyYW5zZm9ybVV0aWxpdGllcyxcbiAgICAgIHsgc3VidHJhY3QsIGNyb3NzLCBub3JtYWxpc2UgfSA9IHZlYzM7XG5cbmNsYXNzIENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKSB7XG4gICAgdHJhbnNmb3JtcyA9IFt0aGlzLnRyYW5zZm9ybSwgLi4udHJhbnNmb3Jtc107IC8vL1xuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSh0cmFuc2Zvcm1zKSB7XG4gICAgdHJhbnNmb3JtcyA9IFt0aGlzLnRyYW5zZm9ybSwgLi4udHJhbnNmb3Jtc107IC8vL1xuXG4gICAgY29uc3QgaW5pdGlhbFZlcnRleFBvc2l0aW9ucyA9IHRoaXMuZ2V0SW5pdGlhbFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMubWFwKGZ1bmN0aW9uKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbikge1xuICAgICAgICAgICAgbGV0IHZlcnRleFBvc2l0aW9uID0gaW5pdGlhbFZlcnRleFBvc2l0aW9uO1xuXG4gICAgICAgICAgICB0cmFuc2Zvcm1zLmZvckVhY2goZnVuY3Rpb24odHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgIHZlcnRleFBvc2l0aW9uID0gdHJhbnNmb3JtKHZlcnRleFBvc2l0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVydGV4UG9zaXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25EYXRhID0gZmxhdHRlbih2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgcmV0dXJuIHZlcnRleFBvc2l0aW9uRGF0YTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEodmVydGV4UG9zaXRpb25EYXRhKSB7XG4gICAgY29uc3QgZmFjZXMgPSBjaG9wKHZlcnRleFBvc2l0aW9uRGF0YSwgMTIpLCAgLy8vXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IGZhY2VzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhOb3JtYWxzLCBmYWNlKSB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSBjaG9wKGZhY2UsIDMpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICBjb25zdCBmaXJzdFZlcnRleEluZGV4ID0gaW5kZXgsXG4gICAgICAgICAgICAgICAgICBzZWNvbmRWZXJ0ZXhJbmRleCA9IChpbmRleCArIDEpICUgNCxcbiAgICAgICAgICAgICAgICAgIHRoaXJkVmVydGV4SW5kZXggPSAoaW5kZXggKyAzKSAlIDQsXG4gICAgICAgICAgICAgICAgICBmaXJzdFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW2ZpcnN0VmVydGV4SW5kZXhdLFxuICAgICAgICAgICAgICAgICAgc2Vjb25kVmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbc2Vjb25kVmVydGV4SW5kZXhdLFxuICAgICAgICAgICAgICAgICAgdGhpcmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1t0aGlyZFZlcnRleEluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGZpcnN0VmVjdG9yID0gc3VidHJhY3Qoc2Vjb25kVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICAgICAgICAgICAgc2Vjb25kVmVjdG9yID0gc3VidHJhY3QodGhpcmRWZXJ0ZXhQb3NpdGlvbiwgZmlyc3RWZXJ0ZXhQb3NpdGlvbiksXG4gICAgICAgICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwgPSBub3JtYWxpc2UoY3Jvc3MoZmlyc3RWZWN0b3IsIHNlY29uZFZlY3RvcikpO1xuXG4gICAgICAgICAgICAgIHZlcnRleE5vcm1hbHMucHVzaCh2ZXJ0ZXhOb3JtYWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgICAgICAgICB9LCBbXSksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsRGF0YSA9IGZsYXR0ZW4odmVydGV4Tm9ybWFscyk7IC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleE5vcm1hbERhdGE7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhJbmRleERhdGEodmVydGV4UG9zaXRpb25EYXRhKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhEYXRhID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25EYXRhTGVuZ3RoID0gdmVydGV4UG9zaXRpb25EYXRhLmxlbmd0aCxcbiAgICAgICAgICBmYWNlc0xlbmd0aCA9IHZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCAvIDEyOyAvLy9cblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmYWNlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gaW5kZXggKiA0O1xuXG4gICAgICB2ZXJ0ZXhJbmRleERhdGEucHVzaChvZmZzZXQgKyAwKTtcbiAgICAgIHZlcnRleEluZGV4RGF0YS5wdXNoKG9mZnNldCArIDEpO1xuICAgICAgdmVydGV4SW5kZXhEYXRhLnB1c2gob2Zmc2V0ICsgMik7XG4gICAgICB2ZXJ0ZXhJbmRleERhdGEucHVzaChvZmZzZXQgKyAwKTtcbiAgICAgIHZlcnRleEluZGV4RGF0YS5wdXNoKG9mZnNldCArIDIpO1xuICAgICAgdmVydGV4SW5kZXhEYXRhLnB1c2gob2Zmc2V0ICsgMyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcnRleEluZGV4RGF0YTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBwb3NpdGlvbiwgcm90YXRpb25zKSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdHJhbnNmb3JtLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXNFbGVtZW50OyJdfQ==