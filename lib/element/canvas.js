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

var composeTransform = transformUtilities.composeTransform,
    chop = arrayUtilities.chop,
    flatten = arrayUtilities.flatten,
    subtract = vec3.subtract,
    cross = vec3.cross,
    normalise = vec3.normalise;

var CanvasElement = function (_Element) {
  _inherits(CanvasElement, _Element);

  function CanvasElement(transform, childElements) {
    _classCallCheck(this, CanvasElement);

    var _this = _possibleConstructorReturn(this, (CanvasElement.__proto__ || Object.getPrototypeOf(CanvasElement)).call(this));

    _this.transform = transform;

    _this.childElements = childElements;
    return _this;
  }

  _createClass(CanvasElement, [{
    key: 'isCanvasElement',
    value: function isCanvasElement() {
      return true;
    }
  }, {
    key: 'getTransform',
    value: function getTransform() {
      return this.transform;
    }
  }, {
    key: 'getChildElements',
    value: function getChildElements() {
      return this.childElements;
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
          childElements = properties.childElements,
          transform = composeTransform(width, height, depth, position, rotations),
          canvasElement = new (Function.prototype.bind.apply(Class, [null].concat([transform, childElements], remainingArguments)))();


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsInZlYzMiLCJhcnJheVV0aWxpdGllcyIsInRyYW5zZm9ybVV0aWxpdGllcyIsImNvbXBvc2VUcmFuc2Zvcm0iLCJjaG9wIiwiZmxhdHRlbiIsInN1YnRyYWN0IiwiY3Jvc3MiLCJub3JtYWxpc2UiLCJDYW52YXNFbGVtZW50IiwidHJhbnNmb3JtIiwiY2hpbGRFbGVtZW50cyIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidHJhbnNmb3JtcyIsImdldENoaWxkRWxlbWVudHMiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiY3JlYXRlIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsImdldEluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJpbml0aWFsVmVydGV4UG9zaXRpb25zIiwidmVydGV4UG9zaXRpb25zIiwibWFwIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uIiwidmVydGV4UG9zaXRpb24iLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJmYWNlcyIsInZlcnRleE5vcm1hbHMiLCJyZWR1Y2UiLCJmYWNlIiwiaW5kZXgiLCJmaXJzdFZlcnRleEluZGV4Iiwic2Vjb25kVmVydGV4SW5kZXgiLCJ0aGlyZFZlcnRleEluZGV4IiwiZmlyc3RWZXJ0ZXhQb3NpdGlvbiIsInNlY29uZFZlcnRleFBvc2l0aW9uIiwidGhpcmRWZXJ0ZXhQb3NpdGlvbiIsImZpcnN0VmVjdG9yIiwic2Vjb25kVmVjdG9yIiwidmVydGV4Tm9ybWFsIiwicHVzaCIsInZlcnRleE5vcm1hbERhdGEiLCJ2ZXJ0ZXhJbmRleERhdGEiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGFMZW5ndGgiLCJsZW5ndGgiLCJmYWNlc0xlbmd0aCIsIm9mZnNldCIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJw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cEJBLDBCQUFvQjtBQUFBOztBQUFBLFVBQ3REQyxLQURzRCxHQUNPRixVQURQLENBQ3RERSxLQURzRDtBQUFBLFVBQy9DQyxNQUQrQyxHQUNPSCxVQURQLENBQy9DRyxNQUQrQztBQUFBLFVBQ3ZDQyxLQUR1QyxHQUNPSixVQURQLENBQ3ZDSSxLQUR1QztBQUFBLFVBQ2hDQyxRQURnQyxHQUNPTCxVQURQLENBQ2hDSyxRQURnQztBQUFBLFVBQ3RCQyxTQURzQixHQUNPTixVQURQLENBQ3RCTSxTQURzQjtBQUFBLFVBQ1g1QyxhQURXLEdBQ09zQyxVQURQLENBQ1h0QyxhQURXO0FBQUEsVUFFeERELFNBRndELEdBRTVDUCxpQkFBaUJnRCxLQUFqQixFQUF3QkMsTUFBeEIsRUFBZ0NDLEtBQWhDLEVBQXVDQyxRQUF2QyxFQUFpREMsU0FBakQsQ0FGNEM7QUFBQSxVQUd4REMsYUFId0Qsc0NBR3BDUixLQUhvQyxpQkFHOUJ0QyxTQUg4QixFQUduQkMsYUFIbUIsR0FHRHVDLGtCQUhDOzs7QUFLOUQsYUFBT00sYUFBUDtBQUNEOzs7O0VBckd5QjFELE87O0FBd0c1QjJELE9BQU9DLE9BQVAsR0FBaUJqRCxhQUFqQiIsImZpbGUiOiJjYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICB2ZWMzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjMycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHRyYW5zZm9ybVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy90cmFuc2Zvcm0nKTtcblxuY29uc3QgeyBjb21wb3NlVHJhbnNmb3JtIH0gPSB0cmFuc2Zvcm1VdGlsaXRpZXMsXG4gICAgICB7IGNob3AsIGZsYXR0ZW4gfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBzdWJ0cmFjdCwgY3Jvc3MsIG5vcm1hbGlzZSB9ID0gdmVjMztcblxuY2xhc3MgQ2FudmFzRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGNoaWxkRWxlbWVudHMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG5cbiAgICB0aGlzLmNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgaXNDYW52YXNFbGVtZW50KCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKSB7XG4gICAgdHJhbnNmb3JtcyA9IFt0aGlzLnRyYW5zZm9ybSwgLi4udHJhbnNmb3Jtc107IC8vL1xuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSh0cmFuc2Zvcm1zKSB7XG4gICAgdHJhbnNmb3JtcyA9IFt0aGlzLnRyYW5zZm9ybSwgLi4udHJhbnNmb3Jtc107IC8vL1xuXG4gICAgY29uc3QgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSA9IHRoaXMuZ2V0SW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSgpLFxuICAgICAgICAgIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMgPSBjaG9wKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIDMpLCAgLy8vXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gaW5pdGlhbFZlcnRleFBvc2l0aW9ucy5tYXAoZnVuY3Rpb24oaW5pdGlhbFZlcnRleFBvc2l0aW9uKSB7XG4gICAgICAgICAgICBsZXQgdmVydGV4UG9zaXRpb24gPSBpbml0aWFsVmVydGV4UG9zaXRpb247XG5cbiAgICAgICAgICAgIHRyYW5zZm9ybXMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgICAgdmVydGV4UG9zaXRpb24gPSB0cmFuc2Zvcm0odmVydGV4UG9zaXRpb24pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBmbGF0dGVuKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICByZXR1cm4gdmVydGV4UG9zaXRpb25EYXRhO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpIHtcbiAgICBjb25zdCBmYWNlcyA9IGNob3AodmVydGV4UG9zaXRpb25EYXRhLCAxMiksICAvLy9cbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gZmFjZXMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleE5vcm1hbHMsIGZhY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IGNob3AoZmFjZSwgMyk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA0OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZpcnN0VmVydGV4SW5kZXggPSBpbmRleCxcbiAgICAgICAgICAgICAgICAgIHNlY29uZFZlcnRleEluZGV4ID0gKGluZGV4ICsgMSkgJSA0LFxuICAgICAgICAgICAgICAgICAgdGhpcmRWZXJ0ZXhJbmRleCA9IChpbmRleCArIDMpICUgNCxcbiAgICAgICAgICAgICAgICAgIGZpcnN0VmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbZmlyc3RWZXJ0ZXhJbmRleF0sXG4gICAgICAgICAgICAgICAgICBzZWNvbmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tzZWNvbmRWZXJ0ZXhJbmRleF0sXG4gICAgICAgICAgICAgICAgICB0aGlyZFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW3RoaXJkVmVydGV4SW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZmlyc3RWZWN0b3IgPSBzdWJ0cmFjdChzZWNvbmRWZXJ0ZXhQb3NpdGlvbiwgZmlyc3RWZXJ0ZXhQb3NpdGlvbiksXG4gICAgICAgICAgICAgICAgICBzZWNvbmRWZWN0b3IgPSBzdWJ0cmFjdCh0aGlyZFZlcnRleFBvc2l0aW9uLCBmaXJzdFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgICAgICAgICAgIHZlcnRleE5vcm1hbCA9IG5vcm1hbGlzZShjcm9zcyhmaXJzdFZlY3Rvciwgc2Vjb25kVmVjdG9yKSk7XG5cbiAgICAgICAgICAgICAgdmVydGV4Tm9ybWFscy5wdXNoKHZlcnRleE5vcm1hbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxEYXRhID0gZmxhdHRlbih2ZXJ0ZXhOb3JtYWxzKTsgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4Tm9ybWFsRGF0YTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleERhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGFMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbkRhdGEubGVuZ3RoLFxuICAgICAgICAgIGZhY2VzTGVuZ3RoID0gdmVydGV4UG9zaXRpb25EYXRhTGVuZ3RoIC8gMTI7IC8vL1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZhY2VzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBpbmRleCAqIDQ7XG5cbiAgICAgIHZlcnRleEluZGV4RGF0YS5wdXNoKG9mZnNldCArIDApO1xuICAgICAgdmVydGV4SW5kZXhEYXRhLnB1c2gob2Zmc2V0ICsgMSk7XG4gICAgICB2ZXJ0ZXhJbmRleERhdGEucHVzaChvZmZzZXQgKyAyKTtcbiAgICAgIHZlcnRleEluZGV4RGF0YS5wdXNoKG9mZnNldCArIDApO1xuICAgICAgdmVydGV4SW5kZXhEYXRhLnB1c2gob2Zmc2V0ICsgMik7XG4gICAgICB2ZXJ0ZXhJbmRleERhdGEucHVzaChvZmZzZXQgKyAzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVydGV4SW5kZXhEYXRhO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBwb3NpdGlvbiwgcm90YXRpb25zLCBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGNvbXBvc2VUcmFuc2Zvcm0od2lkdGgsIGhlaWdodCwgZGVwdGgsIHBvc2l0aW9uLCByb3RhdGlvbnMpLFxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQgPSBuZXcgQ2xhc3ModHJhbnNmb3JtLCBjaGlsZEVsZW1lbnRzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXNFbGVtZW50O1xuIl19