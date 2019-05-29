'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    arrayUtilities = require('../utilities/array'),
    transformUtilities = require('../utilities/transform');

var push = arrayUtilities.push,
    composeTransform = transformUtilities.composeTransform;

var CanvasElement = function (_Element) {
  _inherits(CanvasElement, _Element);

  function CanvasElement(transform, facets, mask) {
    _classCallCheck(this, CanvasElement);

    var _this = _possibleConstructorReturn(this, (CanvasElement.__proto__ || Object.getPrototypeOf(CanvasElement)).call(this));

    _this.transform = transform;
    _this.facets = facets;
    _this.mask = mask;
    return _this;
  }

  _createClass(CanvasElement, [{
    key: 'getTransform',
    value: function getTransform() {
      return this.transform;
    }
  }, {
    key: 'getFacets',
    value: function getFacets() {
      return this.facets;
    }
  }, {
    key: 'getMask',
    value: function getMask() {
      return this.mask;
    }
  }, {
    key: 'setFacets',
    value: function setFacets(facets) {
      this.facets = facets;
    }
  }, {
    key: 'getVertexIndexes',
    value: function getVertexIndexes() {
      var vertexIndexes = this.facets.reduce(function (vertexIndexes, facet, index) {
        var facetVertexIndexes = facet.getVertexIndexes(index);

        push(vertexIndexes, facetVertexIndexes);

        return vertexIndexes;
      }, []);

      return vertexIndexes;
    }
  }, {
    key: 'getVertexNormals',
    value: function getVertexNormals() {
      var vertexNormals = this.facets.reduce(function (vertexNormals, facet) {
        var facetVertexNormals = facet.getVertexNormals();

        push(vertexNormals, facetVertexNormals);

        return vertexNormals;
      }, []);

      return vertexNormals;
    }
  }, {
    key: 'getVertexPositions',
    value: function getVertexPositions() {
      var vertexPositions = this.facets.reduce(function (vertexPositions, facet) {
        var facetVertexPositions = facet.getVertexPositions();

        push(vertexPositions, facetVertexPositions);

        return vertexPositions;
      }, []);

      return vertexPositions;
    }
  }, {
    key: 'applyMask',
    value: function applyMask(mask) {
      if (mask) {
        var element = this; ///

        mask.maskElement(element);
      }
    }
  }, {
    key: 'applyTransform',
    value: function applyTransform(transform) {
      this.facets.forEach(function (facet) {
        return facet.applyTransform(transform);
      });

      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.applyTransform(transform);
      });
    }
  }, {
    key: 'applyTransformsAndMasks',
    value: function applyTransformsAndMasks() {
      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.applyTransformsAndMasks();
      });

      this.applyTransform(this.transform);

      this.applyMask(this.mask);
    }
  }, {
    key: 'render',
    value: function render(colourRenderer, textureRenderer) {
      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.render(colourRenderer, textureRenderer);
      });
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var facets = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      for (var _len = arguments.length, remainingArguments = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        remainingArguments[_key - 3] = arguments[_key];
      }

      var scale = properties.scale,
          position = properties.position,
          rotations = properties.rotations,
          _properties$mask = properties.mask,
          mask = _properties$mask === undefined ? null : _properties$mask,
          transform = composeTransform(scale, position, rotations),
          canvasElement = Element.fromProperties.apply(Element, [Class, properties, transform, facets, mask].concat(remainingArguments));


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwidHJhbnNmb3JtVXRpbGl0aWVzIiwicHVzaCIsImNvbXBvc2VUcmFuc2Zvcm0iLCJDYW52YXNFbGVtZW50IiwidHJhbnNmb3JtIiwiZmFjZXRzIiwibWFzayIsInZlcnRleEluZGV4ZXMiLCJyZWR1Y2UiLCJmYWNldCIsImluZGV4IiwiZmFjZXRWZXJ0ZXhJbmRleGVzIiwiZ2V0VmVydGV4SW5kZXhlcyIsInZlcnRleE5vcm1hbHMiLCJmYWNldFZlcnRleE5vcm1hbHMiLCJnZXRWZXJ0ZXhOb3JtYWxzIiwidmVydGV4UG9zaXRpb25zIiwiZmFjZXRWZXJ0ZXhQb3NpdGlvbnMiLCJnZXRWZXJ0ZXhQb3NpdGlvbnMiLCJlbGVtZW50IiwibWFza0VsZW1lbnQiLCJmb3JFYWNoIiwiYXBwbHlUcmFuc2Zvcm0iLCJjaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImNoaWxkRWxlbWVudCIsImFwcGx5VHJhbnNmb3Jtc0FuZE1hc2tzIiwiYXBwbHlNYXNrIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJyZW5kZXIiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJzY2FsZSIsInBvc2l0aW9uIiwicm90YXRpb25zIiwiY2FudmFzRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSxxQkFBcUJGLFFBQVEsd0JBQVIsQ0FGM0I7O0FBSU0sSUFBRUcsSUFBRixHQUFXRixjQUFYLENBQUVFLElBQUY7QUFBQSxJQUNFQyxnQkFERixHQUN1QkYsa0JBRHZC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LE1BQW9DLHVFQUEzQixFQUEyQjs7QUFBQSx3Q0FBcEI0QixrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUFBLFVBQ25FQyxLQURtRSxHQUN2QkYsVUFEdUIsQ0FDbkVFLEtBRG1FO0FBQUEsVUFDNURDLFFBRDRELEdBQ3ZCSCxVQUR1QixDQUM1REcsUUFENEQ7QUFBQSxVQUNsREMsU0FEa0QsR0FDdkJKLFVBRHVCLENBQ2xESSxTQURrRDtBQUFBLDZCQUN2QkosVUFEdUIsQ0FDdkMxQixJQUR1QztBQUFBLFVBQ3ZDQSxJQUR1QyxvQ0FDaEMsSUFEZ0M7QUFBQSxVQUVyRUYsU0FGcUUsR0FFekRGLGlCQUFpQmdDLEtBQWpCLEVBQXdCQyxRQUF4QixFQUFrQ0MsU0FBbEMsQ0FGeUQ7QUFBQSxVQUdyRUMsYUFIcUUsR0FHckR4QyxRQUFReUMsY0FBUixpQkFBdUJQLEtBQXZCLEVBQThCQyxVQUE5QixFQUEwQzVCLFNBQTFDLEVBQXFEQyxNQUFyRCxFQUE2REMsSUFBN0QsU0FBc0UyQixrQkFBdEUsRUFIcUQ7OztBQUszRSxhQUFPSSxhQUFQO0FBQ0Q7Ozs7RUFuR3lCeEMsTzs7QUFzRzVCMEMsT0FBT0MsT0FBUCxHQUFpQnJDLGFBQWpCIiwiZmlsZSI6ImNhbnZhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB0cmFuc2Zvcm1VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdHJhbnNmb3JtJyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNvbXBvc2VUcmFuc2Zvcm0gfSA9IHRyYW5zZm9ybVV0aWxpdGllcztcblxuY2xhc3MgQ2FudmFzRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgICB0aGlzLm1hc2sgPSBtYXNrO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRNYXNrKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2s7XG4gIH1cblxuICBzZXRGYWNldHMoZmFjZXRzKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gIH1cblxuICBnZXRWZXJ0ZXhJbmRleGVzKCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoKHZlcnRleEluZGV4ZXMsIGZhY2V0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCk7XG4gICAgICBcbiAgICAgIHB1c2godmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcblxuICAgICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gIH1cblxuICBnZXRWZXJ0ZXhOb3JtYWxzKCkge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbHMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoKHZlcnRleE5vcm1hbHMsIGZhY2V0KSA9PiB7XG4gICAgICBjb25zdCBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCk7XG5cbiAgICAgIHB1c2godmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcblxuICAgICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gIH1cblxuICBnZXRWZXJ0ZXhQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5mYWNldHMucmVkdWNlKCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0KSA9PiB7XG4gICAgICBjb25zdCBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpO1xuXG4gICAgICBwdXNoKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gIH1cblxuICBhcHBseU1hc2sobWFzaykge1xuICAgIGlmIChtYXNrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIG1hc2subWFza0VsZW1lbnQoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgdGhpcy5mYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IGZhY2V0LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3Jtc0FuZE1hc2tzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYXBwbHlUcmFuc2Zvcm1zQW5kTWFza3MoKSk7XG5cbiAgICB0aGlzLmFwcGx5VHJhbnNmb3JtKHRoaXMudHJhbnNmb3JtKTtcblxuICAgIHRoaXMuYXBwbHlNYXNrKHRoaXMubWFzayk7XG4gIH1cblxuICByZW5kZXIoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQucmVuZGVyKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgZmFjZXRzID0gW10sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgc2NhbGUsIHBvc2l0aW9uLCByb3RhdGlvbnMsIG1hc2sgPSBudWxsIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGNvbXBvc2VUcmFuc2Zvcm0oc2NhbGUsIHBvc2l0aW9uLCByb3RhdGlvbnMpLFxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzRWxlbWVudDtcbiJdfQ==