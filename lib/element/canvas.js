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
    value: function render(textureRenderer, colourRenderer) {
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
    value: function initialise(textureRenderer, colourRenderer, transforms, masked) {
      var _this2 = this;

      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      this.facets.forEach(function (facet) {
        facet.applyTransforms(transforms);
      });

      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        var masked = false; ///

        childElement.initialise(textureRenderer, colourRenderer, transforms, masked);

        if (childElement instanceof Mask) {
          var mask = childElement,
              ///
          element = _this2; ///

          mask.maskElement(element);
        }
      });

      if (!masked) {
        this.render(textureRenderer, colourRenderer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIk1hc2siLCJhcnJheVV0aWxpdGllcyIsInRyYW5zZm9ybVV0aWxpdGllcyIsInB1c2giLCJjb21wb3NlVHJhbnNmb3JtIiwiQ2FudmFzRWxlbWVudCIsImZhY2V0cyIsInRyYW5zZm9ybSIsInRleHR1cmVSZW5kZXJlciIsImNvbG91clJlbmRlcmVyIiwidmVydGV4UG9zaXRpb25zIiwicmVkdWNlIiwiZmFjZXQiLCJmYWNldFZlcnRleFBvc2l0aW9ucyIsImdldFZlcnRleFBvc2l0aW9ucyIsInZlcnRleE5vcm1hbHMiLCJmYWNldFZlcnRleE5vcm1hbHMiLCJnZXRWZXJ0ZXhOb3JtYWxzIiwidmVydGV4SW5kZXhlcyIsImluZGV4IiwiZmFjZXRWZXJ0ZXhJbmRleGVzIiwiZ2V0VmVydGV4SW5kZXhlcyIsInRyYW5zZm9ybXMiLCJtYXNrZWQiLCJmb3JFYWNoIiwiYXBwbHlUcmFuc2Zvcm1zIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJjaGlsZEVsZW1lbnQiLCJpbml0aWFsaXNlIiwibWFzayIsImVsZW1lbnQiLCJtYXNrRWxlbWVudCIsInJlbmRlciIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsImNhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxPQUFPRCxRQUFRLGlCQUFSLENBRGI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FGdkI7QUFBQSxJQUdNRyxxQkFBcUJILFFBQVEsd0JBQVIsQ0FIM0I7O0FBS00sSUFBRUks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O0FBQUEsVUFDNURDLE1BRDRELEdBQ3JCSCxVQURxQixDQUM1REcsTUFENEQ7QUFBQSxVQUNwREMsS0FEb0QsR0FDckJKLFVBRHFCLENBQ3BESSxLQURvRDtBQUFBLFVBQzdDQyxRQUQ2QyxHQUNyQkwsVUFEcUIsQ0FDN0NLLFFBRDZDO0FBQUEsVUFDbkNDLFNBRG1DLEdBQ3JCTixVQURxQixDQUNuQ00sU0FEbUM7QUFBQSxVQUVyRWxDLFNBRnFFLEdBRXpESCxpQkFBaUJpQyxLQUFqQixFQUF3QkMsTUFBeEIsRUFBZ0NDLEtBQWhDLEVBQXVDQyxRQUF2QyxFQUFpREMsU0FBakQsQ0FGeUQ7QUFBQSxVQUdyRUMsYUFIcUUsR0FHckQ1QyxRQUFRNkMsY0FBUixpQkFBdUJULEtBQXZCLEVBQThCQyxVQUE5QixFQUEwQzdCLE1BQTFDLEVBQWtEQyxTQUFsRCxTQUFnRTZCLGtCQUFoRSxFQUhxRDs7O0FBSzNFLGFBQU9NLGFBQVA7QUFDRDs7OztFQTlGeUI1QyxPOztBQWlHNUI4QyxPQUFPQyxPQUFQLEdBQWlCeEMsYUFBakIiLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgTWFzayA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvbWFzaycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHRyYW5zZm9ybVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy90cmFuc2Zvcm0nKTtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY29tcG9zZVRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtVXRpbGl0aWVzO1xuXG5jbGFzcyBDYW52YXNFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGZhY2V0cywgdHJhbnNmb3JtKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICAgIFxuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldFRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm07XG4gIH1cblxuICBzZXRGYWNldHMoZmFjZXRzKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gIH1cblxuICByZW5kZXIodGV4dHVyZVJlbmRlcmVyLCBjb2xvdXJSZW5kZXJlcikge1xuICAgIC8vL1xuICB9XG5cbiAgZ2V0VmVydGV4UG9zaXRpb25zKCkge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMuZmFjZXRzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0KSB7XG4gICAgICBjb25zdCBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpO1xuICAgICAgXG4gICAgICBwdXNoKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gIH1cblxuICBnZXRWZXJ0ZXhOb3JtYWxzKCkge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbHMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4Tm9ybWFscywgZmFjZXQpIHtcbiAgICAgIGNvbnN0IGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKTtcbiAgICAgIFxuICAgICAgcHVzaCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuXG4gICAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuXG4gIGdldFZlcnRleEluZGV4ZXMoKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlcyA9IHRoaXMuZmFjZXRzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhJbmRleGVzLCBmYWNldCwgaW5kZXgpIHtcbiAgICAgIGNvbnN0IGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpO1xuICAgICAgXG4gICAgICBwdXNoKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXhJbmRleGVzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhJbmRleGVzO1xuICB9XG5cbiAgaW5pdGlhbGlzZSh0ZXh0dXJlUmVuZGVyZXIsIGNvbG91clJlbmRlcmVyLCB0cmFuc2Zvcm1zLCBtYXNrZWQpIHtcbiAgICB0cmFuc2Zvcm1zID0gW3RoaXMudHJhbnNmb3JtLCAuLi50cmFuc2Zvcm1zXTsgLy8vXG5cbiAgICB0aGlzLmZhY2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGZhY2V0KSB7XG4gICAgICBmYWNldC5hcHBseVRyYW5zZm9ybXModHJhbnNmb3Jtcyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgbWFza2VkID0gZmFsc2U7IC8vL1xuXG4gICAgICBjaGlsZEVsZW1lbnQuaW5pdGlhbGlzZSh0ZXh0dXJlUmVuZGVyZXIsIGNvbG91clJlbmRlcmVyLCB0cmFuc2Zvcm1zLCBtYXNrZWQpO1xuXG4gICAgICBpZiAoY2hpbGRFbGVtZW50IGluc3RhbmNlb2YgTWFzaykge1xuICAgICAgICBjb25zdCBtYXNrID0gY2hpbGRFbGVtZW50LCAgLy8vXG4gICAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgICBtYXNrLm1hc2tFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFtYXNrZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyKHRleHR1cmVSZW5kZXJlciwgY29sb3VyUmVuZGVyZXIpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgZmFjZXRzID0gW10sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZGVwdGgsIHBvc2l0aW9uLCByb3RhdGlvbnMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgY2FudmFzRWxlbWVudCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGZhY2V0cywgdHJhbnNmb3JtLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXNFbGVtZW50O1xuIl19