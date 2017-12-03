'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    Mask = require('../element/mask'),
    arrayUtilities = require('../utilities/array'),
    vectorUtilities = require('../utilities/vector'),
    transformUtilities = require('../utilities/transform');

var push = arrayUtilities.push,
    normalise3 = vectorUtilities.normalise3,
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
    value: function create(colourRenderer, textureRenderer, transforms, masked) {
      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      this.facets.forEach(function (facet) {
        facet.applyTransforms(transforms);
      });

      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        var masked = false; ///

        childElement.create(colourRenderer, textureRenderer, transforms, masked);

        if (childElement instanceof Mask) {
          var mask = childElement,
              ///
          element = this; ///

          mask.maskElement(element);
        }
      }.bind(this));

      if (!masked) {
        this.render(colourRenderer, textureRenderer);
      }
    }
  }, {
    key: 'calculateVertexPositions',
    value: function calculateVertexPositions() {
      var vertexPositions = this.facets.reduce(function (vertexPositions, facet) {
        var facetVertexPositions = facet.getVertexPositions();

        push(vertexPositions, facetVertexPositions);

        return vertexPositions;
      }, []);

      return vertexPositions;
    }
  }, {
    key: 'calculateVertexNormals',
    value: function calculateVertexNormals() {
      var vertexNormals = this.facets.reduce(function (vertexNormals, facet) {
        var facetVertexNormals = facet.getVertexNormals();

        push(vertexNormals, facetVertexNormals);

        return vertexNormals;
      }, []);

      return vertexNormals;
    }
  }, {
    key: 'calculateVertexIndexes',
    value: function calculateVertexIndexes() {
      var vertexIndexes = this.facets.reduce(function (vertexIndexes, facet, index) {
        var facetVertexIndexes = facet.getVertexIndexes(index);

        push(vertexIndexes, facetVertexIndexes);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIk1hc2siLCJhcnJheVV0aWxpdGllcyIsInZlY3RvclV0aWxpdGllcyIsInRyYW5zZm9ybVV0aWxpdGllcyIsInB1c2giLCJub3JtYWxpc2UzIiwiY29tcG9zZVRyYW5zZm9ybSIsIkNhbnZhc0VsZW1lbnQiLCJmYWNldHMiLCJ0cmFuc2Zvcm0iLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsInRyYW5zZm9ybXMiLCJtYXNrZWQiLCJmb3JFYWNoIiwiZmFjZXQiLCJhcHBseVRyYW5zZm9ybXMiLCJjaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImNoaWxkRWxlbWVudCIsImNyZWF0ZSIsIm1hc2siLCJlbGVtZW50IiwibWFza0VsZW1lbnQiLCJiaW5kIiwicmVuZGVyIiwidmVydGV4UG9zaXRpb25zIiwicmVkdWNlIiwiZmFjZXRWZXJ0ZXhQb3NpdGlvbnMiLCJnZXRWZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhOb3JtYWxzIiwiZmFjZXRWZXJ0ZXhOb3JtYWxzIiwiZ2V0VmVydGV4Tm9ybWFscyIsInZlcnRleEluZGV4ZXMiLCJpbmRleCIsImZhY2V0VmVydGV4SW5kZXhlcyIsImdldFZlcnRleEluZGV4ZXMiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwicG9zaXRpb24iLCJyb3RhdGlvbnMiLCJjYW52YXNFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSxpQkFBUixDQURiO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLG9CQUFSLENBRnZCO0FBQUEsSUFHTUcsa0JB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O0FBQUEsd0NBQXBCK0Isa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFBQSxVQUM5REMsS0FEOEQsR0FDaEJGLFVBRGdCLENBQzlERSxLQUQ4RDtBQUFBLFVBQ3ZEQyxNQUR1RCxHQUNoQkgsVUFEZ0IsQ0FDdkRHLE1BRHVEO0FBQUEsVUFDL0NDLEtBRCtDLEdBQ2hCSixVQURnQixDQUMvQ0ksS0FEK0M7QUFBQSxVQUN4Q0MsUUFEd0MsR0FDaEJMLFVBRGdCLENBQ3hDSyxRQUR3QztBQUFBLFVBQzlCQyxTQUQ4QixHQUNoQk4sVUFEZ0IsQ0FDOUJNLFNBRDhCO0FBQUEsVUFFaEVuQyxTQUZnRSxHQUVwREgsaUJBQWlCa0MsS0FBakIsRUFBd0JDLE1BQXhCLEVBQWdDQyxLQUFoQyxFQUF1Q0MsUUFBdkMsRUFBaURDLFNBQWpELENBRm9EO0FBQUEsVUFHaEVDLGFBSGdFLEdBR2hEL0MsUUFBUWdELGNBQVIsaUJBQXVCVCxLQUF2QixFQUE4QkMsVUFBOUIsRUFBMEM5QixNQUExQyxFQUFrREMsU0FBbEQsU0FBZ0U4QixrQkFBaEUsRUFIZ0Q7OztBQUt0RSxhQUFPTSxhQUFQO0FBQ0Q7Ozs7RUExRnlCL0MsTzs7QUE2RjVCaUQsT0FBT0MsT0FBUCxHQUFpQnpDLGFBQWpCIiwiZmlsZSI6ImNhbnZhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIE1hc2sgPSByZXF1aXJlKCcuLi9lbGVtZW50L21hc2snKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB2ZWN0b3JVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVjdG9yJyksXG4gICAgICB0cmFuc2Zvcm1VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdHJhbnNmb3JtJyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IG5vcm1hbGlzZTMgfSA9IHZlY3RvclV0aWxpdGllcyxcbiAgICAgIHsgY29tcG9zZVRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtVXRpbGl0aWVzO1xuXG5jbGFzcyBDYW52YXNFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGZhY2V0cywgdHJhbnNmb3JtKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICAgIFxuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldFRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm07XG4gIH1cblxuICBzZXRGYWNldHMoZmFjZXRzKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3JtcywgbWFza2VkKSB7XG4gICAgdHJhbnNmb3JtcyA9IFt0aGlzLnRyYW5zZm9ybSwgLi4udHJhbnNmb3Jtc107IC8vL1xuXG4gICAgdGhpcy5mYWNldHMuZm9yRWFjaChmdW5jdGlvbihmYWNldCkge1xuICAgICAgZmFjZXQuYXBwbHlUcmFuc2Zvcm1zKHRyYW5zZm9ybXMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgY29uc3QgbWFza2VkID0gZmFsc2U7IC8vL1xuICAgICAgXG4gICAgICBjaGlsZEVsZW1lbnQuY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMsIG1hc2tlZCk7XG5cbiAgICAgIGlmIChjaGlsZEVsZW1lbnQgaW5zdGFuY2VvZiBNYXNrKSB7XG4gICAgICAgIGNvbnN0IG1hc2sgPSBjaGlsZEVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICAgIG1hc2subWFza0VsZW1lbnQoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIGlmICghbWFza2VkKSB7XG4gICAgICB0aGlzLnJlbmRlcihjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgICB9XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5mYWNldHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleFBvc2l0aW9ucywgZmFjZXQpIHtcbiAgICAgIGNvbnN0IGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCk7XG4gICAgICBcbiAgICAgIHB1c2godmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleFBvc2l0aW9ucztcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleE5vcm1hbHMoKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFscyA9IHRoaXMuZmFjZXRzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhOb3JtYWxzLCBmYWNldCkge1xuICAgICAgY29uc3QgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpO1xuICAgICAgXG4gICAgICBwdXNoKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4SW5kZXhlcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzID0gdGhpcy5mYWNldHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleEluZGV4ZXMsIGZhY2V0LCBpbmRleCkge1xuICAgICAgY29uc3QgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCk7XG4gICAgICBcbiAgICAgIHB1c2godmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcblxuICAgICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGZhY2V0cywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBwb3NpdGlvbiwgcm90YXRpb25zKSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgZmFjZXRzLCB0cmFuc2Zvcm0sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc0VsZW1lbnQ7XG4iXX0=