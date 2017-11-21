'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    Facet = require('../facet'),
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

      var childElements = this.getChildElements(),
          masking = false; ///

      childElements.forEach(function (childElement) {
        childElement.create(colourRenderer, textureRenderer, transforms, masking);

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
    value: function fromProperties(Class, properties, vertices, indexes) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
        remainingArguments[_key - 4] = arguments[_key];
      }

      var width = properties.width,
          height = properties.height,
          depth = properties.depth,
          position = properties.position,
          rotations = properties.rotations,
          facets = indexes.map(function (indexes) {
        var facet = Facet.fromVerticesAndIndexes(vertices, indexes);

        return facet;
      }),
          transform = composeTransform(width, height, depth, position, rotations),
          canvasElement = Element.fromProperties.apply(Element, [Class, properties, facets, transform].concat(remainingArguments));


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkZhY2V0IiwiTWFzayIsInZlY3RvclV0aWxpdGllcyIsInRyYW5zZm9ybVV0aWxpdGllcyIsIm5vcm1hbGlzZTMiLCJjb21wb3NlVHJhbnNmb3JtIiwiQ2FudmFzRWxlbWVudCIsImZhY2V0cyIsInRyYW5zZm9ybSIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidHJhbnNmb3JtcyIsImZvckVhY2giLCJmYWNldCIsImFwcGx5VHJhbnNmb3JtcyIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwibWFza2luZyIsImNoaWxkRWxlbWVudCIsImNyZWF0ZSIsIm1hc2siLCJlbGVtZW50IiwibWFza0VsZW1lbnQiLCJiaW5kIiwidmVydGV4UG9zaXRpb25zIiwicmVkdWNlIiwidmVydGljZXMiLCJnZXRWZXJ0aWNlcyIsInZlcnRleCIsInZlcnRleFBvc2l0aW9uIiwic2xpY2UiLCJwdXNoIiwidmVydGV4Tm9ybWFscyIsIm5vcm1hbCIsImdldE5vcm1hbCIsInZlcnRleE5vcm1hbCIsInZlcnRleEluZGV4IiwidmVydGV4SW5kZXhlcyIsIkNsYXNzIiwicHJvcGVydGllcyIsImluZGV4ZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwicG9zaXRpb24iLCJyb3RhdGlvbnMiLCJtYXAiLCJmcm9tVmVydGljZXNBbmRJbmRleGVzIiwiY2FudmFzRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01DLFFBQVFELFFBQVEsVUFBUixDQURkO0FBQUEsSUFFTUUsT0FBT0YsUUFBUSxpQkFBUixDQUZiO0FBQUEsSUFHTUcsa0JBQWtC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cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBGYWNldCA9IHJlcXVpcmUoJy4uL2ZhY2V0JyksXG4gICAgICBNYXNrID0gcmVxdWlyZSgnLi4vZWxlbWVudC9tYXNrJyksXG4gICAgICB2ZWN0b3JVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVjdG9yJyksXG4gICAgICB0cmFuc2Zvcm1VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdHJhbnNmb3JtJyk7XG5cbmNvbnN0IHsgbm9ybWFsaXNlMyB9ID0gdmVjdG9yVXRpbGl0aWVzLFxuICAgICAgeyBjb21wb3NlVHJhbnNmb3JtIH0gPSB0cmFuc2Zvcm1VdGlsaXRpZXM7XG5cbmNsYXNzIENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZmFjZXRzLCB0cmFuc2Zvcm0pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgc2V0RmFjZXRzKGZhY2V0cykge1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpIHtcbiAgICB0cmFuc2Zvcm1zID0gW3RoaXMudHJhbnNmb3JtLCAuLi50cmFuc2Zvcm1zXTsgLy8vXG5cbiAgICB0aGlzLmZhY2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGZhY2V0KSB7XG4gICAgICBmYWNldC5hcHBseVRyYW5zZm9ybXModHJhbnNmb3Jtcyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgbWFza2luZyA9IGZhbHNlOyAvLy9cblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3JtcywgbWFza2luZyk7XG5cbiAgICAgIGlmIChjaGlsZEVsZW1lbnQgaW5zdGFuY2VvZiBNYXNrKSB7XG4gICAgICAgIGNvbnN0IG1hc2sgPSBjaGlsZEVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICAgIG1hc2subWFza0VsZW1lbnQoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9ucygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4UG9zaXRpb25zLCBmYWNldCkge1xuICAgICAgY29uc3QgdmVydGljZXMgPSBmYWNldC5nZXRWZXJ0aWNlcygpO1xuXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSB2ZXJ0aWNlcy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4UG9zaXRpb25zLCB2ZXJ0ZXgpIHtcbiAgICAgICAgY29uc3QgdmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXguc2xpY2UoKTsgLy8vXG5cbiAgICAgICAgdmVydGV4UG9zaXRpb25zLnB1c2godmVydGV4UG9zaXRpb24pO1xuXG4gICAgICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gICAgICB9LCB2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxzKCkge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbHMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4Tm9ybWFscywgZmFjZXQpIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGZhY2V0LmdldE5vcm1hbCgpLFxuICAgICAgICAgICAgdmVydGV4Tm9ybWFsID0gbm9ybWFsaXNlMyhub3JtYWwpO1xuXG4gICAgICB2ZXJ0ZXhOb3JtYWxzLnB1c2godmVydGV4Tm9ybWFsKTtcbiAgICAgIHZlcnRleE5vcm1hbHMucHVzaCh2ZXJ0ZXhOb3JtYWwpO1xuICAgICAgdmVydGV4Tm9ybWFscy5wdXNoKHZlcnRleE5vcm1hbCk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4SW5kZXhlcygpIHtcbiAgICBsZXQgdmVydGV4SW5kZXggPSAwO1xuXG4gICAgY29uc3QgdmVydGV4SW5kZXhlcyA9IHRoaXMuZmFjZXRzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhJbmRleGVzLCBmYWNldCkge1xuICAgICAgdmVydGV4SW5kZXhlcy5wdXNoKHZlcnRleEluZGV4KyspO1xuICAgICAgdmVydGV4SW5kZXhlcy5wdXNoKHZlcnRleEluZGV4KyspO1xuICAgICAgdmVydGV4SW5kZXhlcy5wdXNoKHZlcnRleEluZGV4KyspO1xuXG4gICAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdmVydGljZXMsIGluZGV4ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZGVwdGgsIHBvc2l0aW9uLCByb3RhdGlvbnMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZmFjZXRzID0gaW5kZXhlcy5tYXAoZnVuY3Rpb24oaW5kZXhlcykge1xuICAgICAgICAgICAgY29uc3QgZmFjZXQgPSBGYWNldC5mcm9tVmVydGljZXNBbmRJbmRleGVzKHZlcnRpY2VzLCBpbmRleGVzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGZhY2V0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGNvbXBvc2VUcmFuc2Zvcm0od2lkdGgsIGhlaWdodCwgZGVwdGgsIHBvc2l0aW9uLCByb3RhdGlvbnMpLFxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBmYWNldHMsIHRyYW5zZm9ybSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzRWxlbWVudDtcbiJdfQ==