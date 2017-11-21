'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    MaskingFacet = require('../maskingFacet'),
    arrayUtilities = require('../utilities/array');

var push = arrayUtilities.push;

var MaskElement = function (_Element) {
  _inherits(MaskElement, _Element);

  function MaskElement() {
    _classCallCheck(this, MaskElement);

    return _possibleConstructorReturn(this, (MaskElement.__proto__ || Object.getPrototypeOf(MaskElement)).apply(this, arguments));
  }

  _createClass(MaskElement, [{
    key: 'getFacets',
    value: function getFacets() {
      var childElements = this.getChildElements(),
          facets = childElements.reduce(function (facets, childElement) {
        var childElementFacets = childElement.getFacets();

        push(facets, childElementFacets);

        return facets;
      }, []);

      return facets;
    }
  }, {
    key: 'getMaskingFacets',
    value: function getMaskingFacets() {
      var facets = this.getFacets(),
          maskingFacets = facets.map(MaskingFacet.fromFacet);

      return maskingFacets;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {
      var childElements = this.getChildElements(),
          mask = true; ///

      childElements.forEach(function (childElement) {
        childElement.create(colourRenderer, textureRenderer, transforms, mask);
      });
    }
  }, {
    key: 'mask',
    value: function mask(element) {
      var facets = element.getFacets();

      var maskingFacets = this.getMaskingFacets();

      maskingFacets.forEach(function (maskingFacet) {
        var unmaskedFacets = [];

        facets.forEach(function (facet) {
          maskingFacet.maskFacet(facet, unmaskedFacets);
        });

        facets = unmaskedFacets; ///
      });

      element.setFacets(facets);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Element.fromProperties(MaskElement, properties);
    }
  }]);

  return MaskElement;
}(Element);

module.exports = MaskElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L21hc2suanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJNYXNraW5nRmFjZXQiLCJhcnJheVV0aWxpdGllcyIsInB1c2giLCJNYXNrRWxlbWVudCIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZmFjZXRzIiwicmVkdWNlIiwiY2hpbGRFbGVtZW50IiwiY2hpbGRFbGVtZW50RmFjZXRzIiwiZ2V0RmFjZXRzIiwibWFza2luZ0ZhY2V0cyIsIm1hcCIsImZyb21GYWNldCIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidHJhbnNmb3JtcyIsIm1hc2siLCJmb3JFYWNoIiwiY3JlYXRlIiwiZWxlbWVudCIsImdldE1hc2tpbmdGYWNldHMiLCJtYXNraW5nRmFjZXQiLCJ1bm1hc2tlZEZhY2V0cyIsImZhY2V0IiwibWFza0ZhY2V0Iiwic2V0RmFjZXRzIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxlQUFlRCxRQUFRLGlCQUFSLENBRHJCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLG9CQUFSLENBRnZCOztJQUtRRyxJLEdBQVNELGMsQ0FBVEMsSTs7SUFFRkMsVzs7Ozs7Ozs7Ozs7Z0NBQ1E7QUFDVixVQUFNQyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFBdEI7QUFBQSxVQUNNQyxTQUFVRixjQUFjRyxNQUFkLENBQXFCLFVBQVNELE1BQVQsRUFBaUJFLFlBQWpCLEVBQStCO0FBQzVELFlBQU1DLHFCQUFxQkQsYUFBYUUsU0FBYixFQUEzQjs7QUFFQVIsYUFBS0ksTUFBTCxFQUFhRyxrQkFBYjs7QUFFQSxlQUFPSCxNQUFQO0FBQ0QsT0FOUyxFQU1QLEVBTk8sQ0FEaEI7O0FBU0EsYUFBT0EsTUFBUDtBQUNEOzs7dUNBRWtCO0FBQ2pCLFVBQU1BLFNBQVMsS0FBS0ksU0FBTCxFQUFmO0FBQUEsVUFDTUMsZ0JBQWdCTCxPQUFPTSxHQUFQLENBQVdaLGFBQWFhLFNBQXhCLENBRHRCOztBQUdBLGFBQU9GLGFBQVA7QUFDRDs7OzJCQUVNRyxjLEVBQWdCQyxlLEVBQWlCQyxVLEVBQVk7QUFDbEQsVUFBTVosZ0JBQWdCLEtBQUtDLGdCQUFMLEVBQXRCO0FBQUEsVUFDTVksT0FBTyxJQURiLENBRGtELENBRTlCOztBQUVwQmIsb0JBQWNjLE9BQWQsQ0FBc0IsVUFBU1YsWUFBVCxFQUF1QjtBQUMzQ0EscUJBQWFXLE1BQWIsQ0FBb0JMLGNBQXBCLEVBQW9DQyxlQUFwQyxFQUFxREMsVUFBckQsRUFBaUVDLElBQWpFO0FBQ0QsT0FGRDtBQUdEOzs7eUJBRUlHLE8sRUFBUztBQUNaLFVBQUlkLFNBQVNjLFFBQVFWLFNBQVIsRUFBYjs7QUFFQSxVQUFNQyxnQkFBZ0IsS0FBS1UsZ0JBQUwsRUFBdEI7O0FBRUFWLG9CQUFjTyxPQUFkLENBQXNCLFVBQVNJLFlBQVQsRUFBdUI7QUFDM0MsWUFBTUMsaUJBQWlCLEVBQXZCOztBQUVBakIsZUFBT1ksT0FBUCxDQUFlLFVBQVNNLEtBQVQsRUFBZ0I7QUFDN0JGLHVCQUFhRyxTQUFiLENBQXVCRCxLQUF2QixFQUE4QkQsY0FBOUI7QUFDRCxTQUZEOztBQUlBakIsaUJBQVNpQixjQUFULENBUDJDLENBT2pCO0FBQzNCLE9BUkQ7O0FBVUFILGNBQVFNLFNBQVIsQ0FBa0JwQixNQUFsQjtBQUNEOzs7bUNBRXFCcUIsVSxFQUFZO0FBQUUsYUFBTzdCLFFBQVE4QixjQUFSLENBQXVCekIsV0FBdkIsRUFBb0N3QixVQUFwQyxDQUFQO0FBQXlEOzs7O0VBaERyRTdCLE87O0FBbUQxQitCLE9BQU9DLE9BQVAsR0FBaUIzQixXQUFqQiIsImZpbGUiOiJtYXNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgTWFza2luZ0ZhY2V0ID0gcmVxdWlyZSgnLi4vbWFza2luZ0ZhY2V0JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIE1hc2tFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldEZhY2V0cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgZmFjZXRzID0gIGNoaWxkRWxlbWVudHMucmVkdWNlKGZ1bmN0aW9uKGZhY2V0cywgY2hpbGRFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZEVsZW1lbnRGYWNldHMgPSBjaGlsZEVsZW1lbnQuZ2V0RmFjZXRzKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHB1c2goZmFjZXRzLCBjaGlsZEVsZW1lbnRGYWNldHMpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFjZXRzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBmYWNldHM7XG4gIH1cbiAgXG4gIGdldE1hc2tpbmdGYWNldHMoKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICBtYXNraW5nRmFjZXRzID0gZmFjZXRzLm1hcChNYXNraW5nRmFjZXQuZnJvbUZhY2V0KTtcbiAgICBcbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0czsgICAgICAgICAgXG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcykge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBtYXNrID0gdHJ1ZTsgIC8vL1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zLCBtYXNrKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgbWFzayhlbGVtZW50KSB7XG4gICAgbGV0IGZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCk7XG4gICAgXG4gICAgY29uc3QgbWFza2luZ0ZhY2V0cyA9IHRoaXMuZ2V0TWFza2luZ0ZhY2V0cygpO1xuXG4gICAgbWFza2luZ0ZhY2V0cy5mb3JFYWNoKGZ1bmN0aW9uKG1hc2tpbmdGYWNldCkge1xuICAgICAgY29uc3QgdW5tYXNrZWRGYWNldHMgPSBbXTtcblxuICAgICAgZmFjZXRzLmZvckVhY2goZnVuY3Rpb24oZmFjZXQpIHtcbiAgICAgICAgbWFza2luZ0ZhY2V0Lm1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMpO1xuICAgICAgfSk7XG5cbiAgICAgIGZhY2V0cyA9IHVubWFza2VkRmFjZXRzOyAgLy8vXG4gICAgfSk7XG4gICAgXG4gICAgZWxlbWVudC5zZXRGYWNldHMoZmFjZXRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE1hc2tFbGVtZW50LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hc2tFbGVtZW50O1xuIl19