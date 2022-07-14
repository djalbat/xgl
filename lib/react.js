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
var _element = /*#__PURE__*/ _interopRequireDefault(require("./element"));
var _function = /*#__PURE__*/ _interopRequireDefault(require("./element/canvas/function"));
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
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
    } else if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.FUNCTION) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IEZ1bmN0aW9uQ2FudmFzRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy9mdW5jdGlvblwiO1xuXG5pbXBvcnQgeyBGVU5DVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmxhdHRlbiwgZ3VhcmFudGVlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkRWxlbWVudHMpIHtcbiAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307ICAvLy9cblxuICBjaGlsZEVsZW1lbnRzID0gc2FuaXRpc2VDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpOyAvLy9cblxuICBsZXQgZWxlbWVudDtcblxuICBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gRlVOQ1RJT04pIHtcbiAgICBjb25zdCBmdW5jID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBndWFyYW50ZWUoZnVuYyhwcm9wZXJ0aWVzKSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBGdW5jdGlvbkNhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGNvbnN0IHN1YmNsYXNzT2YgPSAoYXJndW1lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgQ2xhc3MpO1xuXG4gIHJldHVybiBzdWJjbGFzc09mO1xufVxuXG5mdW5jdGlvbiBzYW5pdGlzZUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICBjaGlsZEVsZW1lbnRzID0gZmxhdHRlbihjaGlsZEVsZW1lbnRzKTtcblxuICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudCIsImZpcnN0QXJndW1lbnQiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsInNhbml0aXNlQ2hpbGRFbGVtZW50cyIsImVsZW1lbnQiLCJpc1N1YmNsYXNzT2YiLCJFbGVtZW50IiwiQ2xhc3MiLCJPYmplY3QiLCJhc3NpZ24iLCJmcm9tUHJvcGVydGllcyIsIkZVTkNUSU9OIiwiZnVuYyIsImd1YXJhbnRlZSIsIkZ1bmN0aW9uQ2FudmFzRWxlbWVudCIsIlJlYWN0IiwiYXJndW1lbnQiLCJzdWJjbGFzc09mIiwicHJvdG90eXBlIiwiZmxhdHRlbiIsInJlbW92ZUZhbHNleUVsZW1lbnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBMENiLFNBQXFCOzs7ZUFBckIsUUFBcUI7Ozs0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