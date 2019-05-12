'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    MaskingFacet = require('../maskingFacet'),
    arrayUtilities = require('../utilities/array'),
    transformUtilities = require('../utilities/transform');

var push = arrayUtilities.push,
    composeTransform = transformUtilities.composeTransform;

var Mask = function (_Element) {
  _inherits(Mask, _Element);

  function Mask(transform, facets) {
    _classCallCheck(this, Mask);

    var _this = _possibleConstructorReturn(this, (Mask.__proto__ || Object.getPrototypeOf(Mask)).call(this));

    _this.transform = transform;

    _this.facets = facets;
    return _this;
  }

  _createClass(Mask, [{
    key: 'getFacets',
    value: function getFacets() {
      return this.facets;
    }
  }, {
    key: 'retrieveMaskingFacets',
    value: function retrieveMaskingFacets() {
      var element = this,
          ///
      facets = retrieveFacets(element),
          maskingFacets = facets.map(function (facet) {
        var maskingFacet = MaskingFacet.fromFacet(facet);

        return maskingFacet;
      });

      return maskingFacets;
    }
  }, {
    key: 'maskElement',
    value: function maskElement(element) {
      var facets = retrieveFacets(element);

      var maskingFacets = this.retrieveMaskingFacets();

      maskingFacets.forEach(function (maskingFacet) {
        var unmaskedFacets = [];

        facets.forEach(function (facet) {
          return maskingFacet.maskFacet(facet, unmaskedFacets);
        });

        facets = unmaskedFacets; ///
      });

      element.setFacets(facets);
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      var childElements = this.getChildElements(),
          colourRenderer = null,
          ///
      textureRenderer = null,
          ///
      transforms = [this.transform],
          ///
      masking = true; ///

      childElements.forEach(function (childElement) {
        return childElement.initialise(colourRenderer, textureRenderer, transforms, masking);
      });
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var size = properties.size,
          position = properties.position,
          rotations = properties.rotations,
          transform = composeTransform(size, position, rotations),
          facets = [],
          mask = Element.fromProperties(Mask, properties, transform, facets);


      mask.initialise();

      return mask;
    }
  }]);

  return Mask;
}(Element);

module.exports = Mask;

function retrieveFacets(element) {
  var facets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var elementFacets = element.getFacets(),
      childElements = element.getChildElements();

  childElements.forEach(function (childElement) {
    var element = childElement; ///

    retrieveFacets(element, facets);
  });

  push(facets, elementFacets);

  return facets;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L21hc2suanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJNYXNraW5nRmFjZXQiLCJhcnJheVV0aWxpdGllcyIsInRyYW5zZm9ybVV0aWxpdGllcyIsInB1c2giLCJjb21wb3NlVHJhbnNmb3JtIiwiTWFzayIsInRyYW5zZm9ybSIsImZhY2V0cyIsImVsZW1lbnQiLCJyZXRyaWV2ZUZhY2V0cyIsIm1hc2tpbmdGYWNldHMiLCJtYXAiLCJmYWNldCIsIm1hc2tpbmdGYWNldCIsImZyb21GYWNldCIsInJldHJpZXZlTWFza2luZ0ZhY2V0cyIsImZvckVhY2giLCJ1bm1hc2tlZEZhY2V0cyIsIm1hc2tGYWNldCIsInNldEZhY2V0cyIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJ0cmFuc2Zvcm1zIiwibWFza2luZyIsImNoaWxkRWxlbWVudCIsImluaXRpYWxpc2UiLCJwcm9wZXJ0aWVzIiwic2l6ZSIsInBvc2l0aW9uIiwicm90YXRpb25zIiwibWFzayIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImVsZW1lbnRGYWNldHMiLCJnZXRGYWNldHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsZUFBZUQsUUFBUSxpQkFBUixDQURyQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxvQkFBUixDQUZ2QjtBQUFBLElBR01HLHFCQUFxQkgsUUFBUSx3QkFBUixDQUgzQjs7QUFLTSxJQUFFSSxJQUFGLEdBQVdGLGNBQVgsQ0FBRUUsSUFBRjtBQUFBLElBQ0VDLGdCQURGLEdBQ3VCRixrQkFEdkIsQ0FDRUUsZ0JBREY7O0lBR0FDLEk7OztBQUNKLGdCQUFZQyxTQUFaLEVBQXVCQyxNQUF2QixFQUErQjtBQUFBOztBQUFBOztBQUc3QixVQUFLRCxTQUFMLEdBQWlCQSxTQUFqQjs7QUFFQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFMNkI7QUFNOUI7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLE1BQVo7QUFDRDs7OzRDQUV1QjtBQUN0QixVQUFNQyxVQUFVLElBQWhCO0FBQUEsVUFBc0I7QUFDaEJELGVBQVNFLGVBQWVELE9BQWYsQ0FEZjtBQUFBLFVBRU1FLGdCQUFnQkgsT0FBT0ksR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBVztBQUNwQyxZQUFNQyxlQUFlYixhQUFhYyxTQUFiLENBQXVCRixLQUF2QixDQUFyQjs7QUFFQSxlQUFPQyxZQUFQO0FBQ0QsT0FKZSxDQUZ0Qjs7QUFRQSxhQUFPSCxhQUFQO0FBQ0Q7OztnQ0FFV0YsTyxFQUFTO0FBQ25CLFVBQUlELFNBQVNFLGVBQWVELE9BQWYsQ0FBYjs7QUFFQSxVQUFNRSxnQkFBZ0IsS0FBS0sscUJBQUwsRUFBdEI7O0FBRUFMLG9CQUFjTSxPQUFkLENBQXNCLFVBQUNILFlBQUQsRUFBa0I7QUFDdEMsWUFBTUksaUJBQWlCLEVBQXZCOztBQUVBVixlQUFPUyxPQUFQLENBQWUsVUFBQ0osS0FBRDtBQUFBLGlCQUFXQyxhQUFhSyxTQUFiLENBQXVCTixLQUF2QixFQUE4QkssY0FBOUIsQ0FBWDtBQUFBLFNBQWY7O0FBRUFWLGlCQUFTVSxjQUFULENBTHNDLENBS1o7QUFDM0IsT0FORDs7QUFRQVQsY0FBUVcsU0FBUixDQUFrQlosTUFBbEI7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTWEsZ0JBQWdCLEtBQUtDLGdCQUFMLEVBQXRCO0FBQUEsVUFDTUMsaUJBQWlCLElBRHZCO0FBQUEsVUFDNkI7QUFDdkJDLHdCQUFrQixJQUZ4QjtBQUFBLFVBRThCO0FBQ3hCQyxtQkFBYSxDQUFDLEtBQUtsQixTQUFOLENBSG5CO0FBQUEsVUFHcUM7QUFDL0JtQixnQkFBVSxJQUpoQixDQURXLENBS1c7O0FBRXRCTCxvQkFBY0osT0FBZCxDQUFzQixVQUFDVSxZQUFEO0FBQUEsZUFBa0JBLGFBQWFDLFVBQWIsQ0FBd0JMLGNBQXhCLEVBQXdDQyxlQUF4QyxFQUF5REMsVUFBekQsRUFBcUVDLE9BQXJFLENBQWxCO0FBQUEsT0FBdEI7QUFDRDs7O21DQUVxQkcsVSxFQUFZO0FBQUEsVUFDeEJDLElBRHdCLEdBQ01ELFVBRE4sQ0FDeEJDLElBRHdCO0FBQUEsVUFDbEJDLFFBRGtCLEdBQ01GLFVBRE4sQ0FDbEJFLFFBRGtCO0FBQUEsVUFDUkMsU0FEUSxHQUNNSCxVQUROLENBQ1JHLFNBRFE7QUFBQSxVQUUxQnpCLFNBRjBCLEdBRWRGLGlCQUFpQnlCLElBQWpCLEVBQXVCQyxRQUF2QixFQUFpQ0MsU0FBakMsQ0FGYztBQUFBLFVBRzFCeEIsTUFIMEIsR0FHakIsRUFIaUI7QUFBQSxVQUkxQnlCLElBSjBCLEdBSW5CbEMsUUFBUW1DLGNBQVIsQ0FBdUI1QixJQUF2QixFQUE2QnVCLFVBQTdCLEVBQXlDdEIsU0FBekMsRUFBb0RDLE1BQXBELENBSm1COzs7QUFNaEN5QixXQUFLTCxVQUFMOztBQUVBLGFBQU9LLElBQVA7QUFDRDs7OztFQTVEZ0JsQyxPOztBQStEbkJvQyxPQUFPQyxPQUFQLEdBQWlCOUIsSUFBakI7O0FBRUEsU0FBU0ksY0FBVCxDQUF3QkQsT0FBeEIsRUFBOEM7QUFBQSxNQUFiRCxNQUFhLHVFQUFKLEVBQUk7O0FBQzVDLE1BQU02QixnQkFBZ0I1QixRQUFRNkIsU0FBUixFQUF0QjtBQUFBLE1BQ01qQixnQkFBZ0JaLFFBQVFhLGdCQUFSLEVBRHRCOztBQUdBRCxnQkFBY0osT0FBZCxDQUFzQixVQUFDVSxZQUFELEVBQWtCO0FBQ3RDLFFBQU1sQixVQUFVa0IsWUFBaEIsQ0FEc0MsQ0FDUjs7QUFFOUJqQixtQkFBZUQsT0FBZixFQUF3QkQsTUFBeEI7QUFDRCxHQUpEOztBQU1BSixPQUFLSSxNQUFMLEVBQWE2QixhQUFiOztBQUVBLFNBQU83QixNQUFQO0FBQ0QiLCJmaWxlIjoibWFzay5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIE1hc2tpbmdGYWNldCA9IHJlcXVpcmUoJy4uL21hc2tpbmdGYWNldCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHRyYW5zZm9ybVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy90cmFuc2Zvcm0nKTtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY29tcG9zZVRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtVXRpbGl0aWVzO1xuXG5jbGFzcyBNYXNrIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSwgZmFjZXRzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuXG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gIH1cblxuICBnZXRGYWNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmFjZXRzO1xuICB9XG5cbiAgcmV0cmlldmVNYXNraW5nRmFjZXRzKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBmYWNldHMgPSByZXRyaWV2ZUZhY2V0cyhlbGVtZW50KSxcbiAgICAgICAgICBtYXNraW5nRmFjZXRzID0gZmFjZXRzLm1hcCgoZmFjZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IE1hc2tpbmdGYWNldC5mcm9tRmFjZXQoZmFjZXQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBtYXNraW5nRmFjZXRzOyAgICAgICAgICBcbiAgfVxuXG4gIG1hc2tFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBsZXQgZmFjZXRzID0gcmV0cmlldmVGYWNldHMoZWxlbWVudCk7XG4gICAgXG4gICAgY29uc3QgbWFza2luZ0ZhY2V0cyA9IHRoaXMucmV0cmlldmVNYXNraW5nRmFjZXRzKCk7XG5cbiAgICBtYXNraW5nRmFjZXRzLmZvckVhY2goKG1hc2tpbmdGYWNldCkgPT4ge1xuICAgICAgY29uc3QgdW5tYXNrZWRGYWNldHMgPSBbXTtcblxuICAgICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiBtYXNraW5nRmFjZXQubWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cykpO1xuXG4gICAgICBmYWNldHMgPSB1bm1hc2tlZEZhY2V0czsgIC8vL1xuICAgIH0pO1xuICAgIFxuICAgIGVsZW1lbnQuc2V0RmFjZXRzKGZhY2V0cyk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHRyYW5zZm9ybXMgPSBbdGhpcy50cmFuc2Zvcm1dLCAvLy9cbiAgICAgICAgICBtYXNraW5nID0gdHJ1ZTsgLy8vXG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmluaXRpYWxpc2UoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3JtcywgbWFza2luZykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHNpemUsIHBvc2l0aW9uLCByb3RhdGlvbnMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybShzaXplLCBwb3NpdGlvbiwgcm90YXRpb25zKSxcbiAgICAgICAgICBmYWNldHMgPSBbXSxcbiAgICAgICAgICBtYXNrID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhNYXNrLCBwcm9wZXJ0aWVzLCB0cmFuc2Zvcm0sIGZhY2V0cyk7XG5cbiAgICBtYXNrLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBtYXNrO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWFzaztcblxuZnVuY3Rpb24gcmV0cmlldmVGYWNldHMoZWxlbWVudCwgZmFjZXRzID0gW10pIHtcbiAgY29uc3QgZWxlbWVudEZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCksXG4gICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7IC8vL1xuXG4gICAgcmV0cmlldmVGYWNldHMoZWxlbWVudCwgZmFjZXRzKTtcbiAgfSk7XG5cbiAgcHVzaChmYWNldHMsIGVsZW1lbnRGYWNldHMpO1xuXG4gIHJldHVybiBmYWNldHM7XG59XG4iXX0=