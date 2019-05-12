'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

  function CanvasElement(mask, facets, transform) {
    _classCallCheck(this, CanvasElement);

    var _this = _possibleConstructorReturn(this, (CanvasElement.__proto__ || Object.getPrototypeOf(CanvasElement)).call(this));

    _this.mask = mask;
    _this.facets = facets;
    _this.transform = transform;
    return _this;
  }

  _createClass(CanvasElement, [{
    key: 'getMask',
    value: function getMask() {
      return this.mask;
    }
  }, {
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
    value: function initialise(colourRenderer, textureRenderer, transforms, masking) {
      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.initialise(colourRenderer, textureRenderer, transforms, masking);
      });

      this.facets.forEach(function (facet) {
        return facet.applyTransforms(transforms);
      });

      if (this.mask) {
        var element = this; ///

        this.mask.maskElement(element);
      }

      if (!masking) {
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

      var size = properties.size,
          position = properties.position,
          rotations = properties.rotations,
          mask = properties.mask,
          transform = composeTransform(size, position, rotations),
          canvasElement = Element.fromProperties.apply(Element, [Class, properties, mask, facets, transform].concat(remainingArguments));


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwidHJhbnNmb3JtVXRpbGl0aWVzIiwicHVzaCIsImNvbXBvc2VUcmFuc2Zvcm0iLCJDYW52YXNFbGVtZW50IiwibWFzayIsImZhY2V0cyIsInRyYW5zZm9ybSIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidmVydGV4UG9zaXRpb25zIiwicmVkdWNlIiwiZmFjZXQiLCJmYWNldFZlcnRleFBvc2l0aW9ucyIsImdldFZlcnRleFBvc2l0aW9ucyIsInZlcnRleE5vcm1hbHMiLCJmYWNldFZlcnRleE5vcm1hbHMiLCJnZXRWZXJ0ZXhOb3JtYWxzIiwidmVydGV4SW5kZXhlcyIsImluZGV4IiwiZmFjZXRWZXJ0ZXhJbmRleGVzIiwiZ2V0VmVydGV4SW5kZXhlcyIsInRyYW5zZm9ybXMiLCJtYXNraW5nIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiaW5pdGlhbGlzZSIsImFwcGx5VHJhbnNmb3JtcyIsImVsZW1lbnQiLCJtYXNrRWxlbWVudCIsInJlbmRlciIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInNpemUiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsImNhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSxxQkFBcUJGLFFBQVEsd0JBQVIsQ0FGM0I7O0FBSU0sSUFBRUcsSUFBRixHQUFXRixjQUFYLENBQUVFLElBQUY7QUFBQSxJQUNFQyxnQkFERixHQUN1QkYsa0JBRHZC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UUFENkQ7QUFBQSxVQUNuREMsU0FEbUQsR0FDL0JKLFVBRCtCLENBQ25ESSxTQURtRDtBQUFBLFVBQ3hDakMsSUFEd0MsR0FDL0I2QixVQUQrQixDQUN4QzdCLElBRHdDO0FBQUEsVUFFckVFLFNBRnFFLEdBRXpESixpQkFBaUJpQyxJQUFqQixFQUF1QkMsUUFBdkIsRUFBaUNDLFNBQWpDLENBRnlEO0FBQUEsVUFHckVDLGFBSHFFLEdBR3JEekMsUUFBUTBDLGNBQVIsaUJBQXVCUCxLQUF2QixFQUE4QkMsVUFBOUIsRUFBMEM3QixJQUExQyxFQUFnREMsTUFBaEQsRUFBd0RDLFNBQXhELFNBQXNFNEIsa0JBQXRFLEVBSHFEOzs7QUFLM0UsYUFBT0ksYUFBUDtBQUNEOzs7O0VBM0Z5QnpDLE87O0FBOEY1QjJDLE9BQU9DLE9BQVAsR0FBaUJ0QyxhQUFqQiIsImZpbGUiOiJjYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdHJhbnNmb3JtVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3RyYW5zZm9ybScpO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjb21wb3NlVHJhbnNmb3JtIH0gPSB0cmFuc2Zvcm1VdGlsaXRpZXM7XG5cbmNsYXNzIENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IobWFzaywgZmFjZXRzLCB0cmFuc2Zvcm0pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5tYXNrID0gbWFzaztcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldE1hc2soKSB7XG4gICAgcmV0dXJuIHRoaXMubWFzaztcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgc2V0RmFjZXRzKGZhY2V0cykge1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICB9XG5cbiAgcmVuZGVyKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGdldFZlcnRleFBvc2l0aW9ucygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoKHZlcnRleFBvc2l0aW9ucywgZmFjZXQpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCk7XG4gICAgICBcbiAgICAgIHB1c2godmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleFBvc2l0aW9ucztcbiAgfVxuXG4gIGdldFZlcnRleE5vcm1hbHMoKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFscyA9IHRoaXMuZmFjZXRzLnJlZHVjZSgodmVydGV4Tm9ybWFscywgZmFjZXQpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKTtcbiAgICAgIFxuICAgICAgcHVzaCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuXG4gICAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuXG4gIGdldFZlcnRleEluZGV4ZXMoKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlcyA9IHRoaXMuZmFjZXRzLnJlZHVjZSgodmVydGV4SW5kZXhlcywgZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KTtcbiAgICAgIFxuICAgICAgcHVzaCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuXG4gICAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIGluaXRpYWxpc2UoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3JtcywgbWFza2luZykge1xuICAgIHRyYW5zZm9ybXMgPSBbdGhpcy50cmFuc2Zvcm0sIC4uLnRyYW5zZm9ybXNdOyAvLy9cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuaW5pdGlhbGlzZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zLCBtYXNraW5nKSk7XG5cbiAgICB0aGlzLmZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4gZmFjZXQuYXBwbHlUcmFuc2Zvcm1zKHRyYW5zZm9ybXMpKTtcblxuICAgIGlmICh0aGlzLm1hc2spIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgdGhpcy5tYXNrLm1hc2tFbGVtZW50KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmICghbWFza2luZykge1xuICAgICAgdGhpcy5yZW5kZXIoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBmYWNldHMgPSBbXSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBzaXplLCBwb3NpdGlvbiwgcm90YXRpb25zLCBtYXNrIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGNvbXBvc2VUcmFuc2Zvcm0oc2l6ZSwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgY2FudmFzRWxlbWVudCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIG1hc2ssIGZhY2V0cywgdHJhbnNmb3JtLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXNFbGVtZW50O1xuIl19