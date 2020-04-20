"use strict";

var _element = _interopRequireDefault(require("./element"));

var _function = _interopRequireDefault(require("./element/canvas/function"));

var _array = require("./utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createElement(firstArgument, properties) {
  for (var _len = arguments.length, childElements = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    childElements[_key - 2] = arguments[_key];
  }

  properties = properties || {}; ///

  childElements = (0, _array.flatten)(childElements); ///

  var element;

  if (isSubclassOf(firstArgument, _element["default"])) {
    var Class = firstArgument; ///

    Object.assign(properties, {
      childElements: childElements
    });
    element = Class.fromProperties(properties);
  } else if (typeof firstArgument === "function") {
    var func = firstArgument,
        ///
    _childElements = (0, _array.guarantee)(func(properties));

    Object.assign(properties, {
      childElements: _childElements
    });
    element = _function["default"].fromProperties(properties);
  }

  return element;
}

var React = {
  createElement: createElement
};
module.exports = React;

function isSubclassOf(argument, Class) {
  var typeOf = false;

  if (argument.name === Class.name) {
    ///
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument) {
      typeOf = isSubclassOf(argument, Class);
    }
  }

  return typeOf;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUVsZW1lbnQiLCJmaXJzdEFyZ3VtZW50IiwicHJvcGVydGllcyIsImNoaWxkRWxlbWVudHMiLCJlbGVtZW50IiwiaXNTdWJjbGFzc09mIiwiRWxlbWVudCIsIkNsYXNzIiwiT2JqZWN0IiwiYXNzaWduIiwiZnJvbVByb3BlcnRpZXMiLCJmdW5jIiwiRnVuY3Rpb25DYW52YXNFbGVtZW50IiwiUmVhY3QiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJndW1lbnQiLCJ0eXBlT2YiLCJuYW1lIiwiZ2V0UHJvdG90eXBlT2YiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOztBQUVBOzs7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsYUFBdkIsRUFBc0NDLFVBQXRDLEVBQW9FO0FBQUEsb0NBQWZDLGFBQWU7QUFBZkEsSUFBQUEsYUFBZTtBQUFBOztBQUNsRUQsRUFBQUEsVUFBVSxHQUFHQSxVQUFVLElBQUksRUFBM0IsQ0FEa0UsQ0FDbEM7O0FBRWhDQyxFQUFBQSxhQUFhLEdBQUcsb0JBQVFBLGFBQVIsQ0FBaEIsQ0FIa0UsQ0FHMUI7O0FBRXhDLE1BQUlDLE9BQUo7O0FBRUEsTUFBSUMsWUFBWSxDQUFDSixhQUFELEVBQWdCSyxtQkFBaEIsQ0FBaEIsRUFBMEM7QUFDeEMsUUFBTUMsS0FBSyxHQUFHTixhQUFkLENBRHdDLENBQ1Y7O0FBRTlCTyxJQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY1AsVUFBZCxFQUEwQjtBQUN4QkMsTUFBQUEsYUFBYSxFQUFiQTtBQUR3QixLQUExQjtBQUlBQyxJQUFBQSxPQUFPLEdBQUdHLEtBQUssQ0FBQ0csY0FBTixDQUFxQlIsVUFBckIsQ0FBVjtBQUNELEdBUkQsTUFRTyxJQUFJLE9BQU9ELGFBQVAsS0FBeUIsVUFBN0IsRUFBeUM7QUFDOUMsUUFBTVUsSUFBSSxHQUFHVixhQUFiO0FBQUEsUUFBNkI7QUFDdkJFLElBQUFBLGNBQWEsR0FBRyxzQkFBVVEsSUFBSSxDQUFDVCxVQUFELENBQWQsQ0FEdEI7O0FBR0FNLElBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUCxVQUFkLEVBQTBCO0FBQ3hCQyxNQUFBQSxhQUFhLEVBQWJBO0FBRHdCLEtBQTFCO0FBSUFDLElBQUFBLE9BQU8sR0FBR1EscUJBQXNCRixjQUF0QixDQUFxQ1IsVUFBckMsQ0FBVjtBQUNEOztBQUVELFNBQU9FLE9BQVA7QUFDRDs7QUFFRCxJQUFNUyxLQUFLLEdBQUc7QUFDWmIsRUFBQUEsYUFBYSxFQUFFQTtBQURILENBQWQ7QUFJQWMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCRixLQUFqQjs7QUFFQSxTQUFTUixZQUFULENBQXNCVyxRQUF0QixFQUFnQ1QsS0FBaEMsRUFBdUM7QUFDckMsTUFBSVUsTUFBTSxHQUFHLEtBQWI7O0FBRUEsTUFBSUQsUUFBUSxDQUFDRSxJQUFULEtBQWtCWCxLQUFLLENBQUNXLElBQTVCLEVBQWtDO0FBQUU7QUFDbENELElBQUFBLE1BQU0sR0FBRyxJQUFUO0FBQ0QsR0FGRCxNQUVPO0FBQ0xELElBQUFBLFFBQVEsR0FBR1IsTUFBTSxDQUFDVyxjQUFQLENBQXNCSCxRQUF0QixDQUFYLENBREssQ0FDdUM7O0FBRTVDLFFBQUlBLFFBQUosRUFBYztBQUNaQyxNQUFBQSxNQUFNLEdBQUdaLFlBQVksQ0FBQ1csUUFBRCxFQUFXVCxLQUFYLENBQXJCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPVSxNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IEZ1bmN0aW9uQ2FudmFzRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy9mdW5jdGlvblwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuLCBndWFyYW50ZWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9OyAgLy8vXG5cbiAgY2hpbGRFbGVtZW50cyA9IGZsYXR0ZW4oY2hpbGRFbGVtZW50cyk7IC8vL1xuXG4gIGxldCBlbGVtZW50O1xuXG4gIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywge1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0pO1xuXG4gICAgZWxlbWVudCA9IENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb25zdCBmdW5jID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBndWFyYW50ZWUoZnVuYyhwcm9wZXJ0aWVzKSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBGdW5jdGlvbkNhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHR5cGVPZiA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudC5uYW1lID09PSBDbGFzcy5uYW1lKSB7IC8vL1xuICAgIHR5cGVPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgdHlwZU9mID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVPZjtcbn1cbiJdfQ==