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

  function Mask(transform) {
    _classCallCheck(this, Mask);

    var _this = _possibleConstructorReturn(this, (Mask.__proto__ || Object.getPrototypeOf(Mask)).call(this));

    _this.transform = transform;
    return _this;
  }

  _createClass(Mask, [{
    key: 'getTransform',
    value: function getTransform() {
      return this.transform;
    }
  }, {
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
          maskingFacets = facets.map(function (facet) {
        var maskingFacet = MaskingFacet.fromFacet(facet);

        return maskingFacet;
      });

      return maskingFacets;
    }
  }, {
    key: 'maskElement',
    value: function maskElement(element) {
      var facets = element.getFacets();

      var maskingFacets = this.getMaskingFacets();

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
          mask = Element.fromProperties(Mask, properties, transform);


      mask.initialise();

      return mask;
    }
  }]);

  return Mask;
}(Element);

module.exports = Mask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L21hc2suanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJNYXNraW5nRmFjZXQiLCJhcnJheVV0aWxpdGllcyIsInRyYW5zZm9ybVV0aWxpdGllcyIsInB1c2giLCJjb21wb3NlVHJhbnNmb3JtIiwiTWFzayIsInRyYW5zZm9ybSIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZmFjZXRzIiwicmVkdWNlIiwiY2hpbGRFbGVtZW50IiwiY2hpbGRFbGVtZW50RmFjZXRzIiwiZ2V0RmFjZXRzIiwibWFza2luZ0ZhY2V0cyIsIm1hcCIsImZhY2V0IiwibWFza2luZ0ZhY2V0IiwiZnJvbUZhY2V0IiwiZWxlbWVudCIsImdldE1hc2tpbmdGYWNldHMiLCJmb3JFYWNoIiwidW5tYXNrZWRGYWNldHMiLCJtYXNrRmFjZXQiLCJzZXRGYWNldHMiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsInRyYW5zZm9ybXMiLCJtYXNraW5nIiwiaW5pdGlhbGlzZSIsInByb3BlcnRpZXMiLCJzaXplIiwicG9zaXRpb24iLCJyb3RhdGlvbnMiLCJtYXNrIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01DLGVBQWVELFFBQVEsaUJBQVIsQ0FEckI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FGdkI7QUFBQSxJQUdNRyxxQkFBcUJILFFBQVEsd0JBQVIsQ0FIM0I7O0FBS00sSUFBRUksSUFBRixHQUFXRixjQUFYLENBQUVFLElBQUY7QUFBQSxJQUNFQyxnQkFERixHQUN1QkYsa0JBRHZCLENBQ0VFLGdCQURGOztJQUdBQyxJOzs7QUFDSixnQkFBWUMsU0FBWixFQUF1QjtBQUFBOztBQUFBOztBQUdyQixVQUFLQSxTQUFMLEdBQWlCQSxTQUFqQjtBQUhxQjtBQUl0Qjs7OzttQ0FFYztBQUNiLGFBQU8sS0FBS0EsU0FBWjtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNQyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFBdEI7QUFBQSxVQUNNQyxTQUFVRixjQUFjRyxNQUFkLENBQXFCLFVBQUNELE1BQUQsRUFBU0UsWUFBVCxFQUEwQjtBQUN2RCxZQUFNQyxxQkFBcUJELGFBQWFFLFNBQWIsRUFBM0I7O0FBRUFWLGFBQUtNLE1BQUwsRUFBYUcsa0JBQWI7O0FBRUEsZUFBT0gsTUFBUDtBQUNELE9BTlMsRUFNUCxFQU5PLENBRGhCOztBQVNBLGFBQU9BLE1BQVA7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFNQSxTQUFTLEtBQUtJLFNBQUwsRUFBZjtBQUFBLFVBQ01DLGdCQUFnQkwsT0FBT00sR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBVztBQUNwQyxZQUFNQyxlQUFlakIsYUFBYWtCLFNBQWIsQ0FBdUJGLEtBQXZCLENBQXJCOztBQUVBLGVBQU9DLFlBQVA7QUFDRCxPQUplLENBRHRCOztBQU9BLGFBQU9ILGFBQVA7QUFDRDs7O2dDQUVXSyxPLEVBQVM7QUFDbkIsVUFBSVYsU0FBU1UsUUFBUU4sU0FBUixFQUFiOztBQUVBLFVBQU1DLGdCQUFnQixLQUFLTSxnQkFBTCxFQUF0Qjs7QUFFQU4sb0JBQWNPLE9BQWQsQ0FBc0IsVUFBQ0osWUFBRCxFQUFrQjtBQUN0QyxZQUFNSyxpQkFBaUIsRUFBdkI7O0FBRUFiLGVBQU9ZLE9BQVAsQ0FBZSxVQUFDTCxLQUFEO0FBQUEsaUJBQVdDLGFBQWFNLFNBQWIsQ0FBdUJQLEtBQXZCLEVBQThCTSxjQUE5QixDQUFYO0FBQUEsU0FBZjs7QUFFQWIsaUJBQVNhLGNBQVQsQ0FMc0MsQ0FLWjtBQUMzQixPQU5EOztBQVFBSCxjQUFRSyxTQUFSLENBQWtCZixNQUFsQjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFNRixnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFBdEI7QUFBQSxVQUNNaUIsaUJBQWlCLElBRHZCO0FBQUEsVUFDNkI7QUFDdkJDLHdCQUFrQixJQUZ4QjtBQUFBLFVBRThCO0FBQ3hCQyxtQkFBYSxDQUFDLEtBQUtyQixTQUFOLENBSG5CO0FBQUEsVUFHcUM7QUFDL0JzQixnQkFBVSxJQUpoQixDQURXLENBS1c7O0FBRXRCckIsb0JBQWNjLE9BQWQsQ0FBc0IsVUFBQ1YsWUFBRDtBQUFBLGVBQWtCQSxhQUFha0IsVUFBYixDQUF3QkosY0FBeEIsRUFBd0NDLGVBQXhDLEVBQXlEQyxVQUF6RCxFQUFxRUMsT0FBckUsQ0FBbEI7QUFBQSxPQUF0QjtBQUNEOzs7bUNBRXFCRSxVLEVBQVk7QUFBQSxVQUN4QkMsSUFEd0IsR0FDTUQsVUFETixDQUN4QkMsSUFEd0I7QUFBQSxVQUNsQkMsUUFEa0IsR0FDTUYsVUFETixDQUNsQkUsUUFEa0I7QUFBQSxVQUNSQyxTQURRLEdBQ01ILFVBRE4sQ0FDUkcsU0FEUTtBQUFBLFVBRTFCM0IsU0FGMEIsR0FFZEYsaUJBQWlCMkIsSUFBakIsRUFBdUJDLFFBQXZCLEVBQWlDQyxTQUFqQyxDQUZjO0FBQUEsVUFHMUJDLElBSDBCLEdBR25CcEMsUUFBUXFDLGNBQVIsQ0FBdUI5QixJQUF2QixFQUE2QnlCLFVBQTdCLEVBQXlDeEIsU0FBekMsQ0FIbUI7OztBQUtoQzRCLFdBQUtMLFVBQUw7O0FBRUEsYUFBT0ssSUFBUDtBQUNEOzs7O0VBckVnQnBDLE87O0FBd0VuQnNDLE9BQU9DLE9BQVAsR0FBaUJoQyxJQUFqQiIsImZpbGUiOiJtYXNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgTWFza2luZ0ZhY2V0ID0gcmVxdWlyZSgnLi4vbWFza2luZ0ZhY2V0JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdHJhbnNmb3JtVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3RyYW5zZm9ybScpO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjb21wb3NlVHJhbnNmb3JtIH0gPSB0cmFuc2Zvcm1VdGlsaXRpZXM7XG5cbmNsYXNzIE1hc2sgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgZmFjZXRzID0gIGNoaWxkRWxlbWVudHMucmVkdWNlKChmYWNldHMsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRFbGVtZW50RmFjZXRzID0gY2hpbGRFbGVtZW50LmdldEZhY2V0cygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwdXNoKGZhY2V0cywgY2hpbGRFbGVtZW50RmFjZXRzKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhY2V0cztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmFjZXRzO1xuICB9XG4gIFxuICBnZXRNYXNraW5nRmFjZXRzKCkge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0cyA9IGZhY2V0cy5tYXAoKGZhY2V0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXNraW5nRmFjZXQgPSBNYXNraW5nRmFjZXQuZnJvbUZhY2V0KGZhY2V0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0czsgICAgICAgICAgXG4gIH1cblxuICBtYXNrRWxlbWVudChlbGVtZW50KSB7XG4gICAgbGV0IGZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCk7XG4gICAgXG4gICAgY29uc3QgbWFza2luZ0ZhY2V0cyA9IHRoaXMuZ2V0TWFza2luZ0ZhY2V0cygpO1xuXG4gICAgbWFza2luZ0ZhY2V0cy5mb3JFYWNoKChtYXNraW5nRmFjZXQpID0+IHtcbiAgICAgIGNvbnN0IHVubWFza2VkRmFjZXRzID0gW107XG5cbiAgICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4gbWFza2luZ0ZhY2V0Lm1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMpKTtcblxuICAgICAgZmFjZXRzID0gdW5tYXNrZWRGYWNldHM7ICAvLy9cbiAgICB9KTtcbiAgICBcbiAgICBlbGVtZW50LnNldEZhY2V0cyhmYWNldHMpO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICB0cmFuc2Zvcm1zID0gW3RoaXMudHJhbnNmb3JtXSwgLy8vXG4gICAgICAgICAgbWFza2luZyA9IHRydWU7IC8vL1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5pbml0aWFsaXNlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMsIG1hc2tpbmcpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBzaXplLCBwb3NpdGlvbiwgcm90YXRpb25zIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGNvbXBvc2VUcmFuc2Zvcm0oc2l6ZSwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgbWFzayA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTWFzaywgcHJvcGVydGllcywgdHJhbnNmb3JtKTtcblxuICAgIG1hc2suaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIG1hc2s7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNrO1xuIl19