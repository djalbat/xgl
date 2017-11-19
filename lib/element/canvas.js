'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    Mask = require('../element/mask'),
    vectorUtilities = require('../utilities/vector'),
    transformUtilities = require('../utilities/transform');

var normalise3 = vectorUtilities.normalise3,
    composeTransform = transformUtilities.composeTransform;

var CanvasElement = function (_Element) {
  _inherits(CanvasElement, _Element);

  function CanvasElement(facets, transform) {
    _classCallCheck(this, CanvasElement);

    var _this = _possibleConstructorReturn(this, (CanvasElement.__proto__ || Object.getPrototypeOf(CanvasElement)).call(this));

    _this.facets = facets;

    _this.transform = transform;
    return _this;
  }

  _createClass(CanvasElement, [{
    key: 'getFacets',
    value: function getFacets() {
      return this.facets;
    }
  }, {
    key: 'getTransform',
    value: function getTransform() {
      return this.transform;
    }
  }, {
    key: 'setFacets',
    value: function setFacets(facets) {
      this.facets = facets;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {
      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      this.facets.forEach(function (facet) {
        facet.applyTransforms(transforms);
      });

      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        childElement.create(colourRenderer, textureRenderer, transforms);

        if (childElement instanceof Mask) {
          var mask = childElement,
              ///
          element = this; ///

          mask.maskElement(element);
        }
      }.bind(this));
    }
  }, {
    key: 'calculateVertexPositions',
    value: function calculateVertexPositions() {
      var vertexPositions = this.facets.reduce(function (vertexPositions, facet) {
        var vertices = facet.getVertices();

        vertexPositions = vertices.reduce(function (vertexPositions, vertex) {
          var vertexPosition = vertex.slice(); ///

          vertexPositions.push(vertexPosition);

          return vertexPositions;
        }, vertexPositions);

        return vertexPositions;
      }, []);

      return vertexPositions;
    }
  }, {
    key: 'calculateVertexNormals',
    value: function calculateVertexNormals() {
      var vertexNormals = this.facets.reduce(function (vertexNormals, facet) {
        var normal = facet.getNormal(),
            vertexNormal = normalise3(normal);

        vertexNormals.push(vertexNormal);
        vertexNormals.push(vertexNormal);
        vertexNormals.push(vertexNormal);

        return vertexNormals;
      }, []);

      return vertexNormals;
    }
  }, {
    key: 'calculateVertexIndexes',
    value: function calculateVertexIndexes() {
      var vertexIndex = 0;

      var vertexIndexes = this.facets.reduce(function (vertexIndexes, facet) {
        vertexIndexes.push(vertexIndex++);
        vertexIndexes.push(vertexIndex++);
        vertexIndexes.push(vertexIndex++);

        return vertexIndexes;
      }, []);

      return vertexIndexes;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, facets) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        remainingArguments[_key - 3] = arguments[_key];
      }

      var width = properties.width,
          height = properties.height,
          depth = properties.depth,
          position = properties.position,
          rotations = properties.rotations,
          transform = composeTransform(width, height, depth, position, rotations),
          canvasElement = Element.fromProperties.apply(Element, [Class, properties, facets, transform].concat(remainingArguments));


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIk1hc2siLCJ2ZWN0b3JVdGlsaXRpZXMiLCJ0cmFuc2Zvcm1VdGlsaXRpZXMiLCJub3JtYWxpc2UzIiwiY29tcG9zZVRyYW5zZm9ybSIsIkNhbnZhc0VsZW1lbnQiLCJmYWNldHMiLCJ0cmFuc2Zvcm0iLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsInRyYW5zZm9ybXMiLCJmb3JFYWNoIiwiZmFjZXQiLCJhcHBseVRyYW5zZm9ybXMiLCJjaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImNoaWxkRWxlbWVudCIsImNyZWF0ZSIsIm1hc2siLCJlbGVtZW50IiwibWFza0VsZW1lbnQiLCJiaW5kIiwidmVydGV4UG9zaXRpb25zIiwicmVkdWNlIiwidmVydGljZXMiLCJnZXRWZXJ0aWNlcyIsInZlcnRleCIsInZlcnRleFBvc2l0aW9uIiwic2xpY2UiLCJwdXNoIiwidmVydGV4Tm9ybWFscyIsIm5vcm1hbCIsImdldE5vcm1hbCIsInZlcnRleE5vcm1hbCIsInZlcnRleEluZGV4IiwidmVydGV4SW5kZXhlcyIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsImNhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxPQUFPRCxRQUFRLGlCQUFSLENBRGI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEscUJBQVIsQ0FGeEI7QUFBQSxJQUdNRyxxQkFBcUJILFFBQVEsd0JBQVIsQ0FIM0I7O0FBS00sSUFBRUksVUFBRixHQUFpQkYsZUFBakIsQ0FBRUUs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RUFBK0I7QUFBQSx3Q0FBcEJnQyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUFBLFVBQzlEQyxLQUQ4RCxHQUNoQkYsVUFEZ0IsQ0FDOURFLEtBRDhEO0FBQUEsVUFDdkRDLE1BRHVELEdBQ2hCSCxVQURnQixDQUN2REcsTUFEdUQ7QUFBQSxVQUMvQ0MsS0FEK0MsR0FDaEJKLFVBRGdCLENBQy9DSSxLQUQrQztBQUFBLFVBQ3hDQyxRQUR3QyxHQUNoQkwsVUFEZ0IsQ0FDeENLLFFBRHdDO0FBQUEsVUFDOUJDLFNBRDhCLEdBQ2hCTixVQURnQixDQUM5Qk0sU0FEOEI7QUFBQSxVQUVoRXBDLFNBRmdFLEdBRXBESCxpQkFBaUJtQyxLQUFqQixFQUF3QkMsTUFBeEIsRUFBZ0NDLEtBQWhDLEVBQXVDQyxRQUF2QyxFQUFpREMsU0FBakQsQ0FGb0Q7QUFBQSxVQUdoRUMsYUFIZ0UsR0FHaEQ5QyxRQUFRK0MsY0FBUixpQkFBdUJULEtBQXZCLEVBQThCQyxVQUE5QixFQUEwQy9CLE1BQTFDLEVBQWtEQyxTQUFsRCxTQUFnRStCLGtCQUFoRSxFQUhnRDs7O0FBS3RFLGFBQU9NLGFBQVA7QUFDRDs7OztFQS9GeUI5QyxPOztBQWtHNUJnRCxPQUFPQyxPQUFQLEdBQWlCMUMsYUFBakIiLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgTWFzayA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvbWFzaycpLFxuICAgICAgdmVjdG9yVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3ZlY3RvcicpLFxuICAgICAgdHJhbnNmb3JtVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3RyYW5zZm9ybScpO1xuXG5jb25zdCB7IG5vcm1hbGlzZTMgfSA9IHZlY3RvclV0aWxpdGllcyxcbiAgICAgIHsgY29tcG9zZVRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtVXRpbGl0aWVzO1xuXG5jbGFzcyBDYW52YXNFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGZhY2V0cywgdHJhbnNmb3JtKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuXG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gIH1cblxuICBnZXRGYWNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmFjZXRzO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIHNldEZhY2V0cyhmYWNldHMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKSB7XG4gICAgdHJhbnNmb3JtcyA9IFt0aGlzLnRyYW5zZm9ybSwgLi4udHJhbnNmb3Jtc107IC8vL1xuXG4gICAgdGhpcy5mYWNldHMuZm9yRWFjaChmdW5jdGlvbihmYWNldCkge1xuICAgICAgZmFjZXQuYXBwbHlUcmFuc2Zvcm1zKHRyYW5zZm9ybXMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKTtcblxuICAgICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIE1hc2spIHtcbiAgICAgICAgY29uc3QgbWFzayA9IGNoaWxkRWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgICBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgICAgbWFzay5tYXNrRWxlbWVudChlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zKCkge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMuZmFjZXRzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0KSB7XG4gICAgICBjb25zdCB2ZXJ0aWNlcyA9IGZhY2V0LmdldFZlcnRpY2VzKCk7XG5cbiAgICAgIHZlcnRleFBvc2l0aW9ucyA9IHZlcnRpY2VzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhQb3NpdGlvbnMsIHZlcnRleCkge1xuICAgICAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleC5zbGljZSgpOyAvLy9cblxuICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMucHVzaCh2ZXJ0ZXhQb3NpdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHZlcnRleFBvc2l0aW9ucztcbiAgICAgIH0sIHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleFBvc2l0aW9ucztcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleE5vcm1hbHMoKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFscyA9IHRoaXMuZmFjZXRzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhOb3JtYWxzLCBmYWNldCkge1xuICAgICAgY29uc3Qgbm9ybWFsID0gZmFjZXQuZ2V0Tm9ybWFsKCksXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwgPSBub3JtYWxpc2UzKG5vcm1hbCk7XG5cbiAgICAgIHZlcnRleE5vcm1hbHMucHVzaCh2ZXJ0ZXhOb3JtYWwpO1xuICAgICAgdmVydGV4Tm9ybWFscy5wdXNoKHZlcnRleE5vcm1hbCk7XG4gICAgICB2ZXJ0ZXhOb3JtYWxzLnB1c2godmVydGV4Tm9ybWFsKTtcblxuICAgICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhJbmRleGVzKCkge1xuICAgIGxldCB2ZXJ0ZXhJbmRleCA9IDA7XG5cbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzID0gdGhpcy5mYWNldHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleEluZGV4ZXMsIGZhY2V0KSB7XG4gICAgICB2ZXJ0ZXhJbmRleGVzLnB1c2godmVydGV4SW5kZXgrKyk7XG4gICAgICB2ZXJ0ZXhJbmRleGVzLnB1c2godmVydGV4SW5kZXgrKyk7XG4gICAgICB2ZXJ0ZXhJbmRleGVzLnB1c2godmVydGV4SW5kZXgrKyk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXhJbmRleGVzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhJbmRleGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBmYWNldHMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZGVwdGgsIHBvc2l0aW9uLCByb3RhdGlvbnMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgY2FudmFzRWxlbWVudCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGZhY2V0cywgdHJhbnNmb3JtLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXNFbGVtZW50O1xuIl19