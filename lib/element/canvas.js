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

      var size = properties.size,
          position = properties.position,
          rotations = properties.rotations,
          _properties$mask = properties.mask,
          mask = _properties$mask === undefined ? null : _properties$mask,
          transform = composeTransform(size, position, rotations),
          canvasElement = Element.fromProperties.apply(Element, [Class, properties, transform, facets, mask].concat(remainingArguments));


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwidHJhbnNmb3JtVXRpbGl0aWVzIiwicHVzaCIsImNvbXBvc2VUcmFuc2Zvcm0iLCJDYW52YXNFbGVtZW50IiwidHJhbnNmb3JtIiwiZmFjZXRzIiwibWFzayIsInZlcnRleEluZGV4ZXMiLCJyZWR1Y2UiLCJmYWNldCIsImluZGV4IiwiZmFjZXRWZXJ0ZXhJbmRleGVzIiwiZ2V0VmVydGV4SW5kZXhlcyIsInZlcnRleE5vcm1hbHMiLCJmYWNldFZlcnRleE5vcm1hbHMiLCJnZXRWZXJ0ZXhOb3JtYWxzIiwidmVydGV4UG9zaXRpb25zIiwiZmFjZXRWZXJ0ZXhQb3NpdGlvbnMiLCJnZXRWZXJ0ZXhQb3NpdGlvbnMiLCJlbGVtZW50IiwibWFza0VsZW1lbnQiLCJmb3JFYWNoIiwiYXBwbHlUcmFuc2Zvcm0iLCJjaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImNoaWxkRWxlbWVudCIsImFwcGx5VHJhbnNmb3Jtc0FuZE1hc2tzIiwiYXBwbHlNYXNrIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJyZW5kZXIiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJzaXplIiwicG9zaXRpb24iLCJyb3RhdGlvbnMiLCJjYW52YXNFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2QjtBQUFBLElBRU1FLHFCQUFxQkYsUUFBUSx3QkFBUixDQUYzQjs7QUFJTSxJQUFFRyxJQUFGLEdBQVdGLGNBQVgsQ0FBRUUsSUFBRjtBQUFBLElBQ0VDLGdCQURGLEdBQ3VCRixrQkFEdkIs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TUFBb0MsdUVBQTNCLEVBQTJCOztBQUFBLHdDQUFwQjRCLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBQUEsVUFDbkVDLElBRG1FLEdBQ3hCRixVQUR3QixDQUNuRUUsSUFEbUU7QUFBQSxVQUM3REMsUUFENkQsR0FDeEJILFVBRHdCLENBQzdERyxRQUQ2RDtBQUFBLFVBQ25EQyxTQURtRCxHQUN4QkosVUFEd0IsQ0FDbkRJLFNBRG1EO0FBQUEsNkJBQ3hCSixVQUR3QixDQUN4QzFCLElBRHdDO0FBQUEsVUFDeENBLElBRHdDLG9DQUNqQyxJQURpQztBQUFBLFVBRXJFRixTQUZxRSxHQUV6REYsaUJBQWlCZ0MsSUFBakIsRUFBdUJDLFFBQXZCLEVBQWlDQyxTQUFqQyxDQUZ5RDtBQUFBLFVBR3JFQyxhQUhxRSxHQUdyRHhDLFFBQVF5QyxjQUFSLGlCQUF1QlAsS0FBdkIsRUFBOEJDLFVBQTlCLEVBQTBDNUIsU0FBMUMsRUFBcURDLE1BQXJELEVBQTZEQyxJQUE3RCxTQUFzRTJCLGtCQUF0RSxFQUhxRDs7O0FBSzNFLGFBQU9JLGFBQVA7QUFDRDs7OztFQW5HeUJ4QyxPOztBQXNHNUIwQyxPQUFPQyxPQUFQLEdBQWlCckMsYUFBakIiLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHRyYW5zZm9ybVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy90cmFuc2Zvcm0nKTtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY29tcG9zZVRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtVXRpbGl0aWVzO1xuXG5jbGFzcyBDYW52YXNFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICAgIHRoaXMubWFzayA9IG1hc2s7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldE1hc2soKSB7XG4gICAgcmV0dXJuIHRoaXMubWFzaztcbiAgfVxuXG4gIHNldEZhY2V0cyhmYWNldHMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgfVxuXG4gIGdldFZlcnRleEluZGV4ZXMoKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlcyA9IHRoaXMuZmFjZXRzLnJlZHVjZSgodmVydGV4SW5kZXhlcywgZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KTtcbiAgICAgIFxuICAgICAgcHVzaCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuXG4gICAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIGdldFZlcnRleE5vcm1hbHMoKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFscyA9IHRoaXMuZmFjZXRzLnJlZHVjZSgodmVydGV4Tm9ybWFscywgZmFjZXQpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKTtcblxuICAgICAgcHVzaCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuXG4gICAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuXG4gIGdldFZlcnRleFBvc2l0aW9ucygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoKHZlcnRleFBvc2l0aW9ucywgZmFjZXQpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCk7XG5cbiAgICAgIHB1c2godmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleFBvc2l0aW9ucztcbiAgfVxuXG4gIGFwcGx5TWFzayhtYXNrKSB7XG4gICAgaWYgKG1hc2spIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgbWFzay5tYXNrRWxlbWVudChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLmZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4gZmFjZXQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm1zQW5kTWFza3MoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hcHBseVRyYW5zZm9ybXNBbmRNYXNrcygpKTtcblxuICAgIHRoaXMuYXBwbHlUcmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pO1xuXG4gICAgdGhpcy5hcHBseU1hc2sodGhpcy5tYXNrKTtcbiAgfVxuXG4gIHJlbmRlcihjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5yZW5kZXIoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBmYWNldHMgPSBbXSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBzaXplLCBwb3NpdGlvbiwgcm90YXRpb25zLCBtYXNrID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHNpemUsIHBvc2l0aW9uLCByb3RhdGlvbnMpLFxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzRWxlbWVudDtcbiJdfQ==