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
      var childElements = this.getChildElements();

      this.facets.forEach(function (facet) {
        return facet.applyTransform(transform);
      });

      childElements.forEach(function (childElement) {
        return childElement.applyTransform(transform);
      });
    }
  }, {
    key: 'createFacets',
    value: function createFacets(hidden) {
      var childElements = this.getChildElements();

      hidden = hidden || this.hidden; ///

      childElements.forEach(function (childElement) {
        return childElement.createFacets(hidden);
      });

      return hidden;
    }
  }, {
    key: 'amendFacets',
    value: function amendFacets() {
      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.amendFacets();
      });

      this.applyTransform(this.transform);

      this.applyMask(this.mask);
    }
  }, {
    key: 'addFacets',
    value: function addFacets(colourRenderer, textureRenderer) {
      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.addFacets(colourRenderer, textureRenderer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsInRyYW5zZm9ybVV0aWxpdGllcyIsImNvbXBvc2VUcmFuc2Zvcm0iLCJDYW52YXNFbGVtZW50IiwidHJhbnNmb3JtIiwiZmFjZXRzIiwibWFzayIsImhpZGRlbiIsImVsZW1lbnQiLCJtYXNrRWxlbWVudCIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZm9yRWFjaCIsImZhY2V0IiwiYXBwbHlUcmFuc2Zvcm0iLCJjaGlsZEVsZW1lbnQiLCJjcmVhdGVGYWNldHMiLCJhbWVuZEZhY2V0cyIsImFwcGx5TWFzayIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiYWRkRmFjZXRzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwic2NhbGUiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsImNhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLHdCQUFSLENBRDNCOztJQUdRRSxnQixHQUFxQkQsa0IsQ0FBckJDLGdCOztJQUVGQyxhOzs7QUFDSix5QkFBWUMsU0FBWixFQUF1QkMsTUFBdkIsRUFBK0JDLElBQS9CLEVBQXFDQyxNQUFyQyxFQUE2QztBQUFBOztBQUFBOztBQUczQyxVQUFLSCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjs7QUFFQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFQMkM7QUFRNUM7Ozs7bUNBRWM7QUFDYixhQUFPLEtBQUtILFNBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7OEJBRVNELE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OzhCQUVTQyxJLEVBQU07QUFDZCxVQUFJQSxJQUFKLEVBQVU7QUFDUixZQUFNRSxVQUFVLElBQWhCLENBRFEsQ0FDYzs7QUFFdEJGLGFBQUtHLFdBQUwsQ0FBaUJELE9BQWpCO0FBQ0Q7QUFDRjs7O21DQUVjSixTLEVBQVc7QUFDeEIsVUFBTU0sZ0JBQWdCLEtBQUtDLGdCQUFMLEVBQXRCOztBQUVBLFdBQUtOLE1BQUwsQ0FBWU8sT0FBWixDQUFvQixVQUFDQyxLQUFEO0FBQUEsZUFBV0EsTUFBTUMsY0FBTixDQUFxQlYsU0FBckIsQ0FBWDtBQUFBLE9BQXBCOztBQUVBTSxvQkFBY0UsT0FBZCxDQUFzQixVQUFDRyxZQUFEO0FBQUEsZUFBa0JBLGFBQWFELGNBQWIsQ0FBNEJWLFNBQTVCLENBQWxCO0FBQUEsT0FBdEI7QUFDRDs7O2lDQUVZRyxNLEVBQVE7QUFDbkIsVUFBTUcsZ0JBQWdCLEtBQUtDLGdCQUFMLEVBQXRCOztBQUVBSixlQUFTQSxVQUFVLEtBQUtBLE1BQXhCLENBSG1CLENBR2E7O0FBRWhDRyxvQkFBY0UsT0FBZCxDQUFzQixVQUFDRyxZQUFEO0FBQUEsZUFBa0JBLGFBQWFDLFlBQWIsQ0FBMEJULE1BQTFCLENBQWxCO0FBQUEsT0FBdEI7O0FBRUEsYUFBT0EsTUFBUDtBQUNEOzs7a0NBRWE7QUFDWixVQUFNRyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFBdEI7O0FBRUFELG9CQUFjRSxPQUFkLENBQXNCLFVBQUNHLFlBQUQ7QUFBQSxlQUFrQkEsYUFBYUUsV0FBYixFQUFsQjtBQUFBLE9BQXRCOztBQUVBLFdBQUtILGNBQUwsQ0FBb0IsS0FBS1YsU0FBekI7O0FBRUEsV0FBS2MsU0FBTCxDQUFlLEtBQUtaLElBQXBCO0FBQ0Q7Ozs4QkFFU2EsYyxFQUFnQkMsZSxFQUFpQjtBQUN6QyxVQUFNVixnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFBdEI7O0FBRUFELG9CQUFjRSxPQUFkLENBQXNCLFVBQUNHLFlBQUQ7QUFBQSxlQUFrQkEsYUFBYU0sU0FBYixDQUF1QkYsY0FBdkIsRUFBdUNDLGVBQXZDLENBQWxCO0FBQUEsT0FBdEI7QUFDRDs7O21DQUVxQkUsSyxFQUFPQyxVLEVBQW1DO0FBQUEsd0NBQXBCQyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUFBLFVBQ3REQyxLQURzRCxHQUNNRixVQUROLENBQ3RERSxLQURzRDtBQUFBLFVBQy9DQyxRQUQrQyxHQUNNSCxVQUROLENBQy9DRyxRQUQrQztBQUFBLFVBQ3JDQyxTQURxQyxHQUNNSixVQUROLENBQ3JDSSxTQURxQztBQUFBLDZCQUNNSixVQUROLENBQzFCakIsSUFEMEI7QUFBQSxVQUMxQkEsSUFEMEIsb0NBQ25CLElBRG1CO0FBQUEsK0JBQ01pQixVQUROLENBQ2JoQixNQURhO0FBQUEsVUFDYkEsTUFEYSxzQ0FDSixLQURJO0FBQUEsVUFFeERILFNBRndELEdBRTVDRixpQkFBaUJ1QixLQUFqQixFQUF3QkMsUUFBeEIsRUFBa0NDLFNBQWxDLENBRjRDO0FBQUEsVUFHeER0QixNQUh3RCxHQUcvQyxFQUgrQztBQUFBLFVBSXhEdUIsYUFKd0QsR0FJeEM3QixRQUFROEIsY0FBUixpQkFBdUJQLEtBQXZCLEVBQThCQyxVQUE5QixFQUEwQ25CLFNBQTFDLEVBQXFEQyxNQUFyRCxFQUE2REMsSUFBN0QsRUFBbUVDLE1BQW5FLFNBQThFaUIsa0JBQTlFLEVBSndDOzs7QUFNOUQsYUFBT0ksYUFBUDtBQUNEOzs7O0VBNUV5QjdCLE87O0FBK0U1QitCLE9BQU9DLE9BQVAsR0FBaUI1QixhQUFqQiIsImZpbGUiOiJjYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICB0cmFuc2Zvcm1VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdHJhbnNmb3JtJyk7XG5cbmNvbnN0IHsgY29tcG9zZVRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtVXRpbGl0aWVzO1xuXG5jbGFzcyBDYW52YXNFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gICAgdGhpcy5tYXNrID0gbWFzaztcblxuICAgIHRoaXMuaGlkZGVuID0gaGlkZGVuO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRNYXNrKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2s7XG4gIH1cblxuICBzZXRGYWNldHMoZmFjZXRzKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gIH1cblxuICBhcHBseU1hc2sobWFzaykge1xuICAgIGlmIChtYXNrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIG1hc2subWFza0VsZW1lbnQoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgdGhpcy5mYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IGZhY2V0LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pKTtcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhoaWRkZW4pIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBoaWRkZW4gPSBoaWRkZW4gfHwgdGhpcy5oaWRkZW47IC8vL1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHMoaGlkZGVuKSk7XG5cbiAgICByZXR1cm4gaGlkZGVuO1xuICB9XG5cbiAgYW1lbmRGYWNldHMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hbWVuZEZhY2V0cygpKTtcblxuICAgIHRoaXMuYXBwbHlUcmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pO1xuXG4gICAgdGhpcy5hcHBseU1hc2sodGhpcy5tYXNrKTtcbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHNjYWxlLCBwb3NpdGlvbiwgcm90YXRpb25zLCBtYXNrID0gbnVsbCwgaGlkZGVuID0gZmFsc2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybShzY2FsZSwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgZmFjZXRzID0gW10sXG4gICAgICAgICAgY2FudmFzRWxlbWVudCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc0VsZW1lbnQ7XG4iXX0=