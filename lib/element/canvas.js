'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    Mask = require('../element/mask'),
    arrayUtilities = require('../utilities/array'),
    transformUtilities = require('../utilities/transform');

var push = arrayUtilities.push,
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
    key: 'render',
    value: function render(colourRenderer, textureRenderer) {
      ///
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
    key: 'initialise',
    value: function initialise(colourRenderer, textureRenderer, transforms, masked) {
      var _this2 = this;

      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      this.facets.forEach(function (facet) {
        return facet.applyTransforms(transforms);
      });

      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        var masked = false; ///

        childElement.initialise(colourRenderer, textureRenderer, transforms, masked);

        if (childElement instanceof Mask) {
          var mask = childElement,
              ///
          element = _this2; ///

          mask.maskElement(element);
        }
      });

      if (!masked) {
        this.render(colourRenderer, textureRenderer);
      }
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var facets = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIk1hc2siLCJhcnJheVV0aWxpdGllcyIsInRyYW5zZm9ybVV0aWxpdGllcyIsInB1c2giLCJjb21wb3NlVHJhbnNmb3JtIiwiQ2FudmFzRWxlbWVudCIsImZhY2V0cyIsInRyYW5zZm9ybSIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidmVydGV4UG9zaXRpb25zIiwicmVkdWNlIiwiZmFjZXQiLCJmYWNldFZlcnRleFBvc2l0aW9ucyIsImdldFZlcnRleFBvc2l0aW9ucyIsInZlcnRleE5vcm1hbHMiLCJmYWNldFZlcnRleE5vcm1hbHMiLCJnZXRWZXJ0ZXhOb3JtYWxzIiwidmVydGV4SW5kZXhlcyIsImluZGV4IiwiZmFjZXRWZXJ0ZXhJbmRleGVzIiwiZ2V0VmVydGV4SW5kZXhlcyIsInRyYW5zZm9ybXMiLCJtYXNrZWQiLCJmb3JFYWNoIiwiYXBwbHlUcmFuc2Zvcm1zIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJjaGlsZEVsZW1lbnQiLCJpbml0aWFsaXNlIiwibWFzayIsImVsZW1lbnQiLCJtYXNrRWxlbWVudCIsInJlbmRlciIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsImNhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxPQUFPRCxRQUFRLGlCQUFSLENBRGI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FGdkI7QUFBQSxJQUdNRyxxQkFBcUJILFFBQVEsd0JBQVIsQ0FIM0I7O0FBS00sSUFBRUks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QURtRTtBQUFBLFVBQzVEQyxNQUQ0RCxHQUNyQkgsVUFEcUIsQ0FDNURHLE1BRDREO0FBQUEsVUFDcERDLEtBRG9ELEdBQ3JCSixVQURxQixDQUNwREksS0FEb0Q7QUFBQSxVQUM3Q0MsUUFENkMsR0FDckJMLFVBRHFCLENBQzdDSyxRQUQ2QztBQUFBLFVBQ25DQyxTQURtQyxHQUNyQk4sVUFEcUIsQ0FDbkNNLFNBRG1DO0FBQUEsVUFFckVsQyxTQUZxRSxHQUV6REgsaUJBQWlCaUMsS0FBakIsRUFBd0JDLE1BQXhCLEVBQWdDQyxLQUFoQyxFQUF1Q0MsUUFBdkMsRUFBaURDLFNBQWpELENBRnlEO0FBQUEsVUFHckVDLGFBSHFFLEdBR3JENUMsUUFBUTZDLGNBQVIsaUJBQXVCVCxLQUF2QixFQUE4QkMsVUFBOUIsRUFBMEM3QixNQUExQyxFQUFrREMsU0FBbEQsU0FBZ0U2QixrQkFBaEUsRUFIcUQ7OztBQUszRSxhQUFPTSxhQUFQO0FBQ0Q7Ozs7RUE1RnlCNUMsTzs7QUErRjVCOEMsT0FBT0MsT0FBUCxHQUFpQnhDLGFBQWpCIiwiZmlsZSI6ImNhbnZhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIE1hc2sgPSByZXF1aXJlKCcuLi9lbGVtZW50L21hc2snKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB0cmFuc2Zvcm1VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdHJhbnNmb3JtJyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNvbXBvc2VUcmFuc2Zvcm0gfSA9IHRyYW5zZm9ybVV0aWxpdGllcztcblxuY2xhc3MgQ2FudmFzRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihmYWNldHMsIHRyYW5zZm9ybSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgICBcbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgc2V0RmFjZXRzKGZhY2V0cykge1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICB9XG5cbiAgcmVuZGVyKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGdldFZlcnRleFBvc2l0aW9ucygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoKHZlcnRleFBvc2l0aW9ucywgZmFjZXQpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCk7XG4gICAgICBcbiAgICAgIHB1c2godmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleFBvc2l0aW9ucztcbiAgfVxuXG4gIGdldFZlcnRleE5vcm1hbHMoKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFscyA9IHRoaXMuZmFjZXRzLnJlZHVjZSgodmVydGV4Tm9ybWFscywgZmFjZXQpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKTtcbiAgICAgIFxuICAgICAgcHVzaCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuXG4gICAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuXG4gIGdldFZlcnRleEluZGV4ZXMoKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlcyA9IHRoaXMuZmFjZXRzLnJlZHVjZSgodmVydGV4SW5kZXhlcywgZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KTtcbiAgICAgIFxuICAgICAgcHVzaCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuXG4gICAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIGluaXRpYWxpc2UoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3JtcywgbWFza2VkKSB7XG4gICAgdHJhbnNmb3JtcyA9IFt0aGlzLnRyYW5zZm9ybSwgLi4udHJhbnNmb3Jtc107IC8vL1xuXG4gICAgdGhpcy5mYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IGZhY2V0LmFwcGx5VHJhbnNmb3Jtcyh0cmFuc2Zvcm1zKSk7XG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgbWFza2VkID0gZmFsc2U7IC8vL1xuXG4gICAgICBjaGlsZEVsZW1lbnQuaW5pdGlhbGlzZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zLCBtYXNrZWQpO1xuXG4gICAgICBpZiAoY2hpbGRFbGVtZW50IGluc3RhbmNlb2YgTWFzaykge1xuICAgICAgICBjb25zdCBtYXNrID0gY2hpbGRFbGVtZW50LCAgLy8vXG4gICAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgICBtYXNrLm1hc2tFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFtYXNrZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgZmFjZXRzID0gW10sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZGVwdGgsIHBvc2l0aW9uLCByb3RhdGlvbnMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgY2FudmFzRWxlbWVudCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGZhY2V0cywgdHJhbnNmb3JtLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXNFbGVtZW50O1xuIl19