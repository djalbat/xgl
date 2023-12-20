"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _element = /*#__PURE__*/ _interop_require_default(require("./element"));
var _function = /*#__PURE__*/ _interop_require_default(require("./element/canvas/function"));
var _constants = require("./constants");
var _array = require("./utilities/array");
var _elements = require("./utilities/elements");
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function createElement(firstArgument, properties) {
    for(var _len = arguments.length, childElements = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        childElements[_key - 2] = arguments[_key];
    }
    properties = properties || {}; ///
    childElements = sanitiseChildElements(childElements); ///
    var element;
    if (isSubclassOf(firstArgument, _element.default)) {
        var Class = firstArgument; ///
        Object.assign(properties, {
            childElements: childElements
        });
        element = Class.fromProperties(properties);
    } else if ((typeof firstArgument === "undefined" ? "undefined" : _type_of(firstArgument)) === _constants.FUNCTION) {
        var func = firstArgument, childElements1 = (0, _array.guarantee)(func(properties));
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
function isSubclassOf(argument, Class) {
    var subclassOf = _instanceof(argument.prototype, Class);
    return subclassOf;
}
function sanitiseChildElements(childElements) {
    childElements = (0, _array.flatten)(childElements);
    childElements = (0, _elements.removeFalseyElements)(childElements);
    return childElements;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IEZ1bmN0aW9uQ2FudmFzRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy9mdW5jdGlvblwiO1xuXG5pbXBvcnQgeyBGVU5DVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmxhdHRlbiwgZ3VhcmFudGVlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkRWxlbWVudHMpIHtcbiAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307ICAvLy9cblxuICBjaGlsZEVsZW1lbnRzID0gc2FuaXRpc2VDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpOyAvLy9cblxuICBsZXQgZWxlbWVudDtcblxuICBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gRlVOQ1RJT04pIHtcbiAgICBjb25zdCBmdW5jID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBndWFyYW50ZWUoZnVuYyhwcm9wZXJ0aWVzKSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBGdW5jdGlvbkNhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGNvbnN0IHN1YmNsYXNzT2YgPSAoYXJndW1lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgQ2xhc3MpO1xuXG4gIHJldHVybiBzdWJjbGFzc09mO1xufVxuXG5mdW5jdGlvbiBzYW5pdGlzZUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICBjaGlsZEVsZW1lbnRzID0gZmxhdHRlbihjaGlsZEVsZW1lbnRzKTtcblxuICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudCIsImZpcnN0QXJndW1lbnQiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsInNhbml0aXNlQ2hpbGRFbGVtZW50cyIsImVsZW1lbnQiLCJpc1N1YmNsYXNzT2YiLCJFbGVtZW50IiwiQ2xhc3MiLCJPYmplY3QiLCJhc3NpZ24iLCJmcm9tUHJvcGVydGllcyIsIkZVTkNUSU9OIiwiZnVuYyIsImd1YXJhbnRlZSIsIkZ1bmN0aW9uQ2FudmFzRWxlbWVudCIsIlJlYWN0IiwiYXJndW1lbnQiLCJzdWJjbGFzc09mIiwicHJvdG90eXBlIiwiZmxhdHRlbiIsInJlbW92ZUZhbHNleUVsZW1lbnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwQ0E7OztlQUFBOzs7OERBeENvQjsrREFDYzt5QkFFVDtxQkFDVTt3QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsU0FBU0EsY0FBY0MsYUFBYSxFQUFFQyxVQUFVO0lBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLGdCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO1FBQUdBLGNBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFnQjs7SUFDaEVELGFBQWFBLGNBQWMsQ0FBQyxHQUFJLEdBQUc7SUFFbkNDLGdCQUFnQkMsc0JBQXNCRCxnQkFBZ0IsR0FBRztJQUV6RCxJQUFJRTtJQUVKLElBQUlDLGFBQWFMLGVBQWVNLGdCQUFPLEdBQUc7UUFDeEMsSUFBTUMsUUFBUVAsZUFBZ0IsR0FBRztRQUVqQ1EsT0FBT0MsTUFBTSxDQUFDUixZQUFZO1lBQ3hCQyxlQUFBQTtRQUNGO1FBRUFFLFVBQVVHLE1BQU1HLGNBQWMsQ0FBQ1Q7SUFDakMsT0FBTyxJQUFJLENBQUEsT0FBT0QsOENBQVAsU0FBT0EsY0FBWSxNQUFNVyxtQkFBUSxFQUFFO1FBQzVDLElBQU1DLE9BQU9aLGVBQ1BFLGlCQUFnQlcsSUFBQUEsZ0JBQVMsRUFBQ0QsS0FBS1g7UUFFckNPLE9BQU9DLE1BQU0sQ0FBQ1IsWUFBWTtZQUN4QkMsZUFBQUE7UUFDRjtRQUVBRSxVQUFVVSxpQkFBcUIsQ0FBQ0osY0FBYyxDQUFDVDtJQUNqRDtJQUVBLE9BQU9HO0FBQ1Q7QUFFQSxJQUFNVyxRQUFRO0lBQ1poQixlQUFBQTtBQUNGO0lBRUEsV0FBZWdCO0FBRWYsU0FBU1YsYUFBYVcsUUFBUSxFQUFFVCxLQUFLO0lBQ25DLElBQU1VLGFBQWNELEFBQWtCLFlBQWxCQSxTQUFTRSxTQUFTLEVBQVlYO0lBRWxELE9BQU9VO0FBQ1Q7QUFFQSxTQUFTZCxzQkFBc0JELGFBQWE7SUFDMUNBLGdCQUFnQmlCLElBQUFBLGNBQU8sRUFBQ2pCO0lBRXhCQSxnQkFBZ0JrQixJQUFBQSw4QkFBb0IsRUFBQ2xCO0lBRXJDLE9BQU9BO0FBQ1QifQ==