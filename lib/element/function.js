'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    transformUtilities = require('../utilities/transform');

var composeTransform = transformUtilities.composeTransform;

var FunctionElement = function (_Element) {
  _inherits(FunctionElement, _Element);

  function FunctionElement(transform) {
    _classCallCheck(this, FunctionElement);

    var _this = _possibleConstructorReturn(this, (FunctionElement.__proto__ || Object.getPrototypeOf(FunctionElement)).call(this));

    _this.transform = transform;
    return _this;
  }

  _createClass(FunctionElement, [{
    key: 'initialise',
    value: function initialise(colourRenderer, textureRenderer, transforms, masking) {
      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      var childElements = this.getChildElements();

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
          functionElement = Element.fromProperties(FunctionElement, properties, transform);


      return functionElement;
    }
  }]);

  return FunctionElement;
}(Element);

module.exports = FunctionElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2Z1bmN0aW9uLmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwidHJhbnNmb3JtVXRpbGl0aWVzIiwiY29tcG9zZVRyYW5zZm9ybSIsIkZ1bmN0aW9uRWxlbWVudCIsInRyYW5zZm9ybSIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidHJhbnNmb3JtcyIsIm1hc2tpbmciLCJjaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImZvckVhY2giLCJjaGlsZEVsZW1lbnQiLCJpbml0aWFsaXNlIiwicHJvcGVydGllcyIsInNpemUiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsImZ1bmN0aW9uRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSx3QkFBUixDQUQzQjs7SUFHUUUsZ0IsR0FBcUJELGtCLENBQXJCQyxnQjs7SUFFRkMsZTs7O0FBQ0osMkJBQVlDLFNBQVosRUFBdUI7QUFBQTs7QUFBQTs7QUFHckIsVUFBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFIcUI7QUFJdEI7Ozs7K0JBRVVDLGMsRUFBZ0JDLGUsRUFBaUJDLFUsRUFBWUMsTyxFQUFTO0FBQy9ERCxvQkFBYyxLQUFLSCxTQUFuQiw0QkFBaUNHLFVBQWpDLEdBRCtELENBQ2pCOztBQUU5QyxVQUFNRSxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFBdEI7O0FBRUFELG9CQUFjRSxPQUFkLENBQXNCLFVBQUNDLFlBQUQ7QUFBQSxlQUFrQkEsYUFBYUMsVUFBYixDQUF3QlIsY0FBeEIsRUFBd0NDLGVBQXhDLEVBQXlEQyxVQUF6RCxFQUFxRUMsT0FBckUsQ0FBbEI7QUFBQSxPQUF0QjtBQUNEOzs7bUNBRXFCTSxVLEVBQVk7QUFBQSxVQUN4QkMsSUFEd0IsR0FDTUQsVUFETixDQUN4QkMsSUFEd0I7QUFBQSxVQUNsQkMsUUFEa0IsR0FDTUYsVUFETixDQUNsQkUsUUFEa0I7QUFBQSxVQUNSQyxTQURRLEdBQ01ILFVBRE4sQ0FDUkcsU0FEUTtBQUFBLFVBRTFCYixTQUYwQixHQUVkRixpQkFBaUJhLElBQWpCLEVBQXVCQyxRQUF2QixFQUFpQ0MsU0FBakMsQ0FGYztBQUFBLFVBRzFCQyxlQUgwQixHQUdSbkIsUUFBUW9CLGNBQVIsQ0FBdUJoQixlQUF2QixFQUF3Q1csVUFBeEMsRUFBb0RWLFNBQXBELENBSFE7OztBQUtoQyxhQUFPYyxlQUFQO0FBQ0Q7Ozs7RUFyQjJCbkIsTzs7QUF3QjlCcUIsT0FBT0MsT0FBUCxHQUFpQmxCLGVBQWpCIiwiZmlsZSI6ImZ1bmN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgdHJhbnNmb3JtVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3RyYW5zZm9ybScpO1xuXG5jb25zdCB7IGNvbXBvc2VUcmFuc2Zvcm0gfSA9IHRyYW5zZm9ybVV0aWxpdGllcztcblxuY2xhc3MgRnVuY3Rpb25FbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3JtcywgbWFza2luZykge1xuICAgIHRyYW5zZm9ybXMgPSBbdGhpcy50cmFuc2Zvcm0sIC4uLnRyYW5zZm9ybXNdOyAvLy9cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuaW5pdGlhbGlzZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zLCBtYXNraW5nKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgc2l6ZSwgcG9zaXRpb24sIHJvdGF0aW9ucyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHNpemUsIHBvc2l0aW9uLCByb3RhdGlvbnMpLFxuICAgICAgICAgIGZ1bmN0aW9uRWxlbWVudCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoRnVuY3Rpb25FbGVtZW50LCBwcm9wZXJ0aWVzLCB0cmFuc2Zvcm0pO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uRWxlbWVudDtcbiJdfQ==