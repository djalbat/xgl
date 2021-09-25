"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _element = _interopRequireDefault(require("./element"));
var _function = _interopRequireDefault(require("./element/canvas/function"));
var _constants = require("./constants");
var _array = require("./utilities/array");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
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
    } else if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.FUNCTION) {
        var func = firstArgument, childElements = (0, _array).guarantee(func(properties));
        Object.assign(properties, {
            childElements: childElements
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwiRnVuY3Rpb25DYW52YXNFbGVtZW50IiwiRlVOQ1RJT04iLCJmbGF0dGVuIiwiZ3VhcmFudGVlIiwiY3JlYXRlRWxlbWVudCIsImZpcnN0QXJndW1lbnQiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsImVsZW1lbnQiLCJpc1N1YmNsYXNzT2YiLCJDbGFzcyIsIk9iamVjdCIsImFzc2lnbiIsImZyb21Qcm9wZXJ0aWVzIiwiZnVuYyIsIlJlYWN0IiwiYXJndW1lbnQiLCJ0eXBlT2YiLCJuYW1lIiwiZ2V0UHJvdG90eXBlT2YiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVEsR0FBVyxDQUFYLFFBQVc7QUFDRyxHQUEyQixDQUEzQixTQUEyQjtBQUVwQyxHQUFhLENBQWIsVUFBYTtBQUNILEdBQW1CLENBQW5CLE1BQW1COzs7Ozs7Ozs7U0FFN0MsYUFBYSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQW9CLENBQUM7SUFBbkIsR0FBRyxDQUFILEdBQWdCLENBQWhCLElBQWdCLEdBQWhCLFNBQWdCLENBQWhCLE1BQWdCLEVBQWIsYUFBYSxHQUFoQixHQUFnQixPQUFoQixJQUFnQixHQUFoQixDQUFnQixHQUFoQixJQUFnQixHQUFoQixDQUFnQixHQUFoQixDQUFnQixHQUFoQixJQUFnQixHQUFoQixDQUFnQixFQUFoQixJQUFnQixHQUFoQixJQUFnQixFQUFoQixJQUFnQixHQUFoQixDQUFDO1FBQUUsYUFBYSxDQUFoQixJQUFnQixHQUFoQixDQUFnQixJQUFoQixTQUFnQixDQUFoQixJQUFnQjtJQUFELENBQUM7SUFDaEUsVUFBVSxHQUFHLFVBQVUsSUFBSSxDQUFDO0lBQUEsQ0FBQyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUVuQyxhQUFhLE9BTG9CLE1BQW1CLFVBSzVCLGFBQWEsRUFBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFM0MsR0FBRyxDQUFDLE9BQU8sR0FBUCxJQUFJLENBQUosQ0FBTztJQUVYLEVBQUUsRUFBRSxZQUFZLENBQUMsYUFBYSxFQWJaLFFBQVcsV0FhYSxDQUFDO1FBQ3pDLEdBQUssQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztRQUVqQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3pCLGFBQWEsRUFBYixhQUFhO1FBQ2YsQ0FBQztRQUVELE9BQU8sR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLFVBQVU7SUFDM0MsQ0FBQyxNQUFNLEVBQUUsVUFBUyxhQUFhLGlDQUFwQixPQUFvQixDQUFiLGFBQWEsT0FsQlIsVUFBYSxXQWtCVSxDQUFDO1FBQzdDLEdBQUssQ0FBQyxJQUFJLEdBQUcsYUFBYSxFQUNwQixhQUFhLE9BbkJZLE1BQW1CLFlBbUJsQixJQUFJLENBQUMsVUFBVTtRQUUvQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3pCLGFBQWEsRUFBYixhQUFhO1FBQ2YsQ0FBQztRQUVELE9BQU8sR0E1QnVCLFNBQTJCLFNBNEJ6QixjQUFjLENBQUMsVUFBVTtJQUMzRCxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU87QUFDaEIsQ0FBQztBQUVELEdBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQztJQUNiLGFBQWEsRUFBYixhQUFhO0FBQ2YsQ0FBQztlQUVjLEtBQUs7O1NBRVgsWUFBWSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUN0QyxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUs7SUFFbEIsRUFBRSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pDLE1BQU0sR0FBRyxJQUFJO0lBQ2YsQ0FBQyxNQUFNLENBQUM7UUFDTixRQUFRLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1FBRS9DLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQztZQUNiLE1BQU0sR0FBRyxZQUFZLENBQUMsUUFBUSxFQUFFLEtBQUs7UUFDdkMsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsTUFBTTtBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IEZ1bmN0aW9uQ2FudmFzRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy9mdW5jdGlvblwiO1xuXG5pbXBvcnQgeyBGVU5DVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmxhdHRlbiwgZ3VhcmFudGVlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRFbGVtZW50cykge1xuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCB7fTsgIC8vL1xuXG4gIGNoaWxkRWxlbWVudHMgPSBmbGF0dGVuKGNoaWxkRWxlbWVudHMpOyAvLy9cblxuICBsZXQgZWxlbWVudDtcblxuICBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gRlVOQ1RJT04pIHtcbiAgICBjb25zdCBmdW5jID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBndWFyYW50ZWUoZnVuYyhwcm9wZXJ0aWVzKSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBGdW5jdGlvbkNhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCB0eXBlT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAvLy9cbiAgICB0eXBlT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQpIHtcbiAgICAgIHR5cGVPZiA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG4iXX0=