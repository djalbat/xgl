'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    transformUtilities = require('../utilities/transform');

var composeTransform = transformUtilities.composeTransform;

var CanvasElement = function (_Element) {
  _inherits(CanvasElement, _Element);

  function CanvasElement(transform, facets, mask, hidden) {
    _classCallCheck(this, CanvasElement);

    var _this = _possibleConstructorReturn(this, (CanvasElement.__proto__ || Object.getPrototypeOf(CanvasElement)).call(this));

    _this.transform = transform;
    _this.facets = facets;
    _this.mask = mask;

    _this.hidden = hidden;
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
    key: 'isHidden',
    value: function isHidden() {
      return this.hidden;
    }
  }, {
    key: 'setFacets',
    value: function setFacets(facets) {
      this.facets = facets;
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
    key: 'initialise',
    value: function initialise(colourRenderer, textureRenderer) {
      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.initialise(colourRenderer, textureRenderer);
      });
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var scale = properties.scale,
          position = properties.position,
          rotations = properties.rotations,
          _properties$mask = properties.mask,
          mask = _properties$mask === undefined ? null : _properties$mask,
          _properties$hidden = properties.hidden,
          hidden = _properties$hidden === undefined ? false : _properties$hidden,
          transform = composeTransform(scale, position, rotations),
          facets = [],
          canvasElement = Element.fromProperties.apply(Element, [Class, properties, transform, facets, mask, hidden].concat(remainingArguments));


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsInRyYW5zZm9ybVV0aWxpdGllcyIsImNvbXBvc2VUcmFuc2Zvcm0iLCJDYW52YXNFbGVtZW50IiwidHJhbnNmb3JtIiwiZmFjZXRzIiwibWFzayIsImhpZGRlbiIsImVsZW1lbnQiLCJtYXNrRWxlbWVudCIsImZvckVhY2giLCJmYWNldCIsImFwcGx5VHJhbnNmb3JtIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJjaGlsZEVsZW1lbnQiLCJhcHBseVRyYW5zZm9ybXNBbmRNYXNrcyIsImFwcGx5TWFzayIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiaW5pdGlhbGlzZSIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInNjYWxlIiwicG9zaXRpb24iLCJyb3RhdGlvbnMiLCJjYW52YXNFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSx3QkFBUixDQUQzQjs7SUFHUUUsZ0IsR0FBcUJELGtCLENBQXJCQyxnQjs7SUFFRkMsYTs7O0FBQ0oseUJBQVlDLFNBQVosRUFBdUJDLE1BQXZCLEVBQStCQyxJQUEvQixFQUFxQ0MsTUFBckMsRUFBNkM7QUFBQTs7QUFBQTs7QUFHM0MsVUFBS0gsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7O0FBRUEsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBUDJDO0FBUTVDOzs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLSCxTQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0MsTUFBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7Ozs4QkFFU0YsTSxFQUFRO0FBQ2hCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7OEJBRVNDLEksRUFBTTtBQUNkLFVBQUlBLElBQUosRUFBVTtBQUNSLFlBQU1FLFVBQVUsSUFBaEIsQ0FEUSxDQUNjOztBQUV0QkYsYUFBS0csV0FBTCxDQUFpQkQsT0FBakI7QUFDRDtBQUNGOzs7bUNBRWNKLFMsRUFBVztBQUN4QixXQUFLQyxNQUFMLENBQVlLLE9BQVosQ0FBb0IsVUFBQ0MsS0FBRDtBQUFBLGVBQVdBLE1BQU1DLGNBQU4sQ0FBcUJSLFNBQXJCLENBQVg7QUFBQSxPQUFwQjs7QUFFQSxVQUFNUyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFBdEI7O0FBRUFELG9CQUFjSCxPQUFkLENBQXNCLFVBQUNLLFlBQUQ7QUFBQSxlQUFrQkEsYUFBYUgsY0FBYixDQUE0QlIsU0FBNUIsQ0FBbEI7QUFBQSxPQUF0QjtBQUNEOzs7OENBRXlCO0FBQ3hCLFVBQU1TLGdCQUFnQixLQUFLQyxnQkFBTCxFQUF0Qjs7QUFFQUQsb0JBQWNILE9BQWQsQ0FBc0IsVUFBQ0ssWUFBRDtBQUFBLGVBQWtCQSxhQUFhQyx1QkFBYixFQUFsQjtBQUFBLE9BQXRCOztBQUVBLFdBQUtKLGNBQUwsQ0FBb0IsS0FBS1IsU0FBekI7O0FBRUEsV0FBS2EsU0FBTCxDQUFlLEtBQUtYLElBQXBCO0FBQ0Q7OzsrQkFFVVksYyxFQUFnQkMsZSxFQUFpQjtBQUMxQyxVQUFNTixnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFBdEI7O0FBRUFELG9CQUFjSCxPQUFkLENBQXNCLFVBQUNLLFlBQUQ7QUFBQSxlQUFrQkEsYUFBYUssVUFBYixDQUF3QkYsY0FBeEIsRUFBd0NDLGVBQXhDLENBQWxCO0FBQUEsT0FBdEI7QUFDRDs7O21DQUVxQkUsSyxFQUFPQyxVLEVBQW1DO0FBQUEsd0NBQXBCQyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUFBLFVBQ3REQyxLQURzRCxHQUNNRixVQUROLENBQ3RERSxLQURzRDtBQUFBLFVBQy9DQyxRQUQrQyxHQUNNSCxVQUROLENBQy9DRyxRQUQrQztBQUFBLFVBQ3JDQyxTQURxQyxHQUNNSixVQUROLENBQ3JDSSxTQURxQztBQUFBLDZCQUNNSixVQUROLENBQzFCaEIsSUFEMEI7QUFBQSxVQUMxQkEsSUFEMEIsb0NBQ25CLElBRG1CO0FBQUEsK0JBQ01nQixVQUROLENBQ2JmLE1BRGE7QUFBQSxVQUNiQSxNQURhLHNDQUNKLEtBREk7QUFBQSxVQUV4REgsU0FGd0QsR0FFNUNGLGlCQUFpQnNCLEtBQWpCLEVBQXdCQyxRQUF4QixFQUFrQ0MsU0FBbEMsQ0FGNEM7QUFBQSxVQUd4RHJCLE1BSHdELEdBRy9DLEVBSCtDO0FBQUEsVUFJeERzQixhQUp3RCxHQUl4QzVCLFFBQVE2QixjQUFSLGlCQUF1QlAsS0FBdkIsRUFBOEJDLFVBQTlCLEVBQTBDbEIsU0FBMUMsRUFBcURDLE1BQXJELEVBQTZEQyxJQUE3RCxFQUFtRUMsTUFBbkUsU0FBOEVnQixrQkFBOUUsRUFKd0M7OztBQU05RCxhQUFPSSxhQUFQO0FBQ0Q7Ozs7RUF0RXlCNUIsTzs7QUF5RTVCOEIsT0FBT0MsT0FBUCxHQUFpQjNCLGFBQWpCIiwiZmlsZSI6ImNhbnZhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIHRyYW5zZm9ybVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy90cmFuc2Zvcm0nKTtcblxuY29uc3QgeyBjb21wb3NlVHJhbnNmb3JtIH0gPSB0cmFuc2Zvcm1VdGlsaXRpZXM7XG5cbmNsYXNzIENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgICB0aGlzLm1hc2sgPSBtYXNrO1xuXG4gICAgdGhpcy5oaWRkZW4gPSBoaWRkZW47XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldE1hc2soKSB7XG4gICAgcmV0dXJuIHRoaXMubWFzaztcbiAgfVxuXG4gIGlzSGlkZGVuKCkge1xuICAgIHJldHVybiB0aGlzLmhpZGRlbjtcbiAgfVxuXG4gIHNldEZhY2V0cyhmYWNldHMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgfVxuXG4gIGFwcGx5TWFzayhtYXNrKSB7XG4gICAgaWYgKG1hc2spIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgbWFzay5tYXNrRWxlbWVudChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLmZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4gZmFjZXQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm1zQW5kTWFza3MoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hcHBseVRyYW5zZm9ybXNBbmRNYXNrcygpKTtcblxuICAgIHRoaXMuYXBwbHlUcmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pO1xuXG4gICAgdGhpcy5hcHBseU1hc2sodGhpcy5tYXNrKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuaW5pdGlhbGlzZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgc2NhbGUsIHBvc2l0aW9uLCByb3RhdGlvbnMsIG1hc2sgPSBudWxsLCBoaWRkZW4gPSBmYWxzZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCBwb3NpdGlvbiwgcm90YXRpb25zKSxcbiAgICAgICAgICBmYWNldHMgPSBbXSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzRWxlbWVudDtcbiJdfQ==