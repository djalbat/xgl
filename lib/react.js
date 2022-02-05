"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _element = _interopRequireDefault(require("./element"));
var _function = _interopRequireDefault(require("./element/canvas/function"));
var _constants = require("./constants");
var _array = require("./utilities/array");
var _elements = require("./utilities/elements");
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
    var element = void 0;
    if (isSubclassOf(firstArgument, _element.default)) {
        var Class = firstArgument; ///
        Object.assign(properties, {
            childElements: childElements
        });
        element = Class.fromProperties(properties);
    } else if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.FUNCTION) {
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
function sanitiseChildElements(childElements) {
    childElements = (0, _array).flatten(childElements);
    childElements = (0, _elements).removeFalseyElements(childElements);
    return childElements;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IEZ1bmN0aW9uQ2FudmFzRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy9mdW5jdGlvblwiO1xuXG5pbXBvcnQgeyBGVU5DVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmxhdHRlbiwgZ3VhcmFudGVlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkRWxlbWVudHMpIHtcbiAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307ICAvLy9cblxuICBjaGlsZEVsZW1lbnRzID0gc2FuaXRpc2VDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpOyAvLy9cblxuICBsZXQgZWxlbWVudDtcblxuICBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gRlVOQ1RJT04pIHtcbiAgICBjb25zdCBmdW5jID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBndWFyYW50ZWUoZnVuYyhwcm9wZXJ0aWVzKSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBGdW5jdGlvbkNhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCB0eXBlT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAvLy9cbiAgICB0eXBlT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQpIHtcbiAgICAgIHR5cGVPZiA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG5cbmZ1bmN0aW9uIHNhbml0aXNlQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNoaWxkRWxlbWVudHMgPSBmbGF0dGVuKGNoaWxkRWxlbWVudHMpO1xuXG4gIGNoaWxkRWxlbWVudHMgPSByZW1vdmVGYWxzZXlFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVFbGVtZW50IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwic2FuaXRpc2VDaGlsZEVsZW1lbnRzIiwiZWxlbWVudCIsImlzU3ViY2xhc3NPZiIsIkNsYXNzIiwiT2JqZWN0IiwiYXNzaWduIiwiZnJvbVByb3BlcnRpZXMiLCJmdW5jIiwiUmVhY3QiLCJhcmd1bWVudCIsInR5cGVP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