"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _element = _interopRequireDefault(require("./element"));
var _function = _interopRequireDefault(require("./element/canvas/function"));
var _array = require("./utilities/array");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createElement(firstArgument, properties) {
    for(var _len = arguments.length, childElements = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        childElements[_key - 2] = arguments[_key];
    }
    properties = properties || {
    }; ///
    childElements = (0, _array).flatten(childElements); ///
    var element = void 0;
    if (isSubclassOf(firstArgument, _element.default)) {
        var Class = firstArgument; ///
        Object.assign(properties, {
            childElements: childElements
        });
        element = Class.fromProperties(properties);
    } else if (typeof firstArgument === "function") {
        var func = firstArgument, childElements1 = (0, _array).guarantee(func(properties));
        Object.assign(properties, {
            childElements: childElements1
        });
        element = _function.default.fromProperties(properties);
    }
    return element;
}
var React = {
    createElement: createElement
};
var _default = React;
exports.default = _default;
function isSubclassOf(argument, Class) {
    var typeOf = false;
    if (argument.name === Class.name) {
        typeOf = true;
    } else {
        argument = Object.getPrototypeOf(argument); ///
        if (argument) {
            typeOf = isSubclassOf(argument, Class);
        }
    }
    return typeOf;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IEZ1bmN0aW9uQ2FudmFzRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy9mdW5jdGlvblwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuLCBndWFyYW50ZWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9OyAgLy8vXG5cbiAgY2hpbGRFbGVtZW50cyA9IGZsYXR0ZW4oY2hpbGRFbGVtZW50cyk7IC8vL1xuXG4gIGxldCBlbGVtZW50O1xuXG4gIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywge1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0pO1xuXG4gICAgZWxlbWVudCA9IENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb25zdCBmdW5jID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBndWFyYW50ZWUoZnVuYyhwcm9wZXJ0aWVzKSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBGdW5jdGlvbkNhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCB0eXBlT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAvLy9cbiAgICB0eXBlT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQpIHtcbiAgICAgIHR5cGVPZiA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFUSxHQUFXLENBQVgsUUFBVztBQUNHLEdBQTJCLENBQTNCLFNBQTJCO0FBRTFCLEdBQW1CLENBQW5CLE1BQW1COzs7Ozs7U0FFN0MsYUFBYSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQW9CLENBQUM7UUFBbkIsR0FBZ0IsQ0FBaEIsSUFBZ0IsR0FBaEIsU0FBZ0IsQ0FBaEIsTUFBZ0IsRUFBYixhQUFhLEdBQWhCLEdBQWdCLE9BQWhCLElBQWdCLEdBQWhCLENBQWdCLEdBQWhCLElBQWdCLEdBQWhCLENBQWdCLEdBQWhCLENBQWdCLEdBQWhCLElBQWdCLEdBQWhCLENBQWdCLEVBQWhCLElBQWdCLEdBQWhCLElBQWdCLEVBQWhCLElBQWdCLEdBQWhCLENBQUM7UUFBRSxhQUFhLENBQWhCLElBQWdCLEdBQWhCLENBQWdCLElBQWhCLFNBQWdCLENBQWhCLElBQWdCO0lBQUQsQ0FBQztJQUNoRSxVQUFVLEdBQUcsVUFBVTtNQUFTLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUVuQyxhQUFhLE9BTG9CLE1BQW1CLFVBSzVCLGFBQWEsRUFBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFM0MsR0FBRyxDQUFDLE9BQU8sUUFBUCxDQUFPO0lBRVgsRUFBRSxFQUFFLFlBQVksQ0FBQyxhQUFhLEVBWlosUUFBVyxXQVlhLENBQUM7UUFDekMsR0FBSyxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1FBRWpDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVTtZQUN0QixhQUFhLEVBQWIsYUFBYTs7UUFHZixPQUFPLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxVQUFVO0lBQzNDLENBQUMsTUFBTSxFQUFFLFNBQVMsYUFBYSxNQUFLLFFBQVUsR0FBRSxDQUFDO1FBQy9DLEdBQUssQ0FBQyxJQUFJLEdBQUcsYUFBYSxFQUNwQixjQUFhLE9BbkJZLE1BQW1CLFlBbUJsQixJQUFJLENBQUMsVUFBVTtRQUUvQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVU7WUFDdEIsYUFBYSxFQUFiLGNBQWE7O1FBR2YsT0FBTyxHQTNCdUIsU0FBMkIsU0EyQnpCLGNBQWMsQ0FBQyxVQUFVO0lBQzNELENBQUM7V0FFTSxPQUFPO0FBQ2hCLENBQUM7QUFFRCxHQUFLLENBQUMsS0FBSztJQUNULGFBQWEsRUFBYixhQUFhOztlQUdBLEtBQUs7O1NBRVgsWUFBWSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUN0QyxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUs7SUFFbEIsRUFBRSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pDLE1BQU0sR0FBRyxJQUFJO0lBQ2YsQ0FBQyxNQUFNLENBQUM7UUFDTixRQUFRLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1FBRS9DLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQztZQUNiLE1BQU0sR0FBRyxZQUFZLENBQUMsUUFBUSxFQUFFLEtBQUs7UUFDdkMsQ0FBQztJQUNILENBQUM7V0FFTSxNQUFNO0FBQ2YsQ0FBQyJ9