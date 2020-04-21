"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var _default = {
  createElement: createElement
};
exports["default"] = _default;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUVsZW1lbnQiLCJmaXJzdEFyZ3VtZW50IiwicHJvcGVydGllcyIsImNoaWxkRWxlbWVudHMiLCJlbGVtZW50IiwiaXNTdWJjbGFzc09mIiwiRWxlbWVudCIsIkNsYXNzIiwiT2JqZWN0IiwiYXNzaWduIiwiZnJvbVByb3BlcnRpZXMiLCJmdW5jIiwiRnVuY3Rpb25DYW52YXNFbGVtZW50IiwiYXJndW1lbnQiLCJ0eXBlT2YiLCJuYW1lIiwiZ2V0UHJvdG90eXBlT2YiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxhQUF2QixFQUFzQ0MsVUFBdEMsRUFBb0U7QUFBQSxvQ0FBZkMsYUFBZTtBQUFmQSxJQUFBQSxhQUFlO0FBQUE7O0FBQ2xFRCxFQUFBQSxVQUFVLEdBQUdBLFVBQVUsSUFBSSxFQUEzQixDQURrRSxDQUNsQzs7QUFFaENDLEVBQUFBLGFBQWEsR0FBRyxvQkFBUUEsYUFBUixDQUFoQixDQUhrRSxDQUcxQjs7QUFFeEMsTUFBSUMsT0FBSjs7QUFFQSxNQUFJQyxZQUFZLENBQUNKLGFBQUQsRUFBZ0JLLG1CQUFoQixDQUFoQixFQUEwQztBQUN4QyxRQUFNQyxLQUFLLEdBQUdOLGFBQWQsQ0FEd0MsQ0FDVjs7QUFFOUJPLElBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUCxVQUFkLEVBQTBCO0FBQ3hCQyxNQUFBQSxhQUFhLEVBQWJBO0FBRHdCLEtBQTFCO0FBSUFDLElBQUFBLE9BQU8sR0FBR0csS0FBSyxDQUFDRyxjQUFOLENBQXFCUixVQUFyQixDQUFWO0FBQ0QsR0FSRCxNQVFPLElBQUksT0FBT0QsYUFBUCxLQUF5QixVQUE3QixFQUF5QztBQUM5QyxRQUFNVSxJQUFJLEdBQUdWLGFBQWI7QUFBQSxRQUE2QjtBQUN2QkUsSUFBQUEsY0FBYSxHQUFHLHNCQUFVUSxJQUFJLENBQUNULFVBQUQsQ0FBZCxDQUR0Qjs7QUFHQU0sSUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNQLFVBQWQsRUFBMEI7QUFDeEJDLE1BQUFBLGFBQWEsRUFBYkE7QUFEd0IsS0FBMUI7QUFJQUMsSUFBQUEsT0FBTyxHQUFHUSxxQkFBc0JGLGNBQXRCLENBQXFDUixVQUFyQyxDQUFWO0FBQ0Q7O0FBRUQsU0FBT0UsT0FBUDtBQUNEOztlQUVjO0FBQ2JKLEVBQUFBLGFBQWEsRUFBYkE7QUFEYSxDOzs7QUFJZixTQUFTSyxZQUFULENBQXNCUSxRQUF0QixFQUFnQ04sS0FBaEMsRUFBdUM7QUFDckMsTUFBSU8sTUFBTSxHQUFHLEtBQWI7O0FBRUEsTUFBSUQsUUFBUSxDQUFDRSxJQUFULEtBQWtCUixLQUFLLENBQUNRLElBQTVCLEVBQWtDO0FBQUU7QUFDbENELElBQUFBLE1BQU0sR0FBRyxJQUFUO0FBQ0QsR0FGRCxNQUVPO0FBQ0xELElBQUFBLFFBQVEsR0FBR0wsTUFBTSxDQUFDUSxjQUFQLENBQXNCSCxRQUF0QixDQUFYLENBREssQ0FDdUM7O0FBRTVDLFFBQUlBLFFBQUosRUFBYztBQUNaQyxNQUFBQSxNQUFNLEdBQUdULFlBQVksQ0FBQ1EsUUFBRCxFQUFXTixLQUFYLENBQXJCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPTyxNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IEZ1bmN0aW9uQ2FudmFzRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy9mdW5jdGlvblwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuLCBndWFyYW50ZWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9OyAgLy8vXG5cbiAgY2hpbGRFbGVtZW50cyA9IGZsYXR0ZW4oY2hpbGRFbGVtZW50cyk7IC8vL1xuXG4gIGxldCBlbGVtZW50O1xuXG4gIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywge1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0pO1xuXG4gICAgZWxlbWVudCA9IENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb25zdCBmdW5jID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBndWFyYW50ZWUoZnVuYyhwcm9wZXJ0aWVzKSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBGdW5jdGlvbkNhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVFbGVtZW50XG59O1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCB0eXBlT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAvLy9cbiAgICB0eXBlT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQpIHtcbiAgICAgIHR5cGVPZiA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG4iXX0=