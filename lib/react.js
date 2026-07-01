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
const _element = /*#__PURE__*/ _interop_require_default(require("./element"));
const _function = /*#__PURE__*/ _interop_require_default(require("./element/canvas/function"));
const _constants = require("./constants");
const _array = require("./utilities/array");
const _elements = require("./utilities/elements");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createElement(firstArgument, properties, ...childElements) {
    properties = properties || {}; ///
    childElements = sanitiseChildElements(childElements); ///
    let element;
    if (_element.default.isPrototypeOf(firstArgument)) {
        const Class = firstArgument; ///
        Object.assign(properties, {
            childElements
        });
        element = Class.fromProperties(properties);
    } else if (typeof firstArgument === _constants.FUNCTION) {
        const func = firstArgument, childElements = (0, _array.guarantee)(func(properties));
        Object.assign(properties, {
            childElements
        });
        element = _function.default.fromProperties(properties);
    }
    return element;
}
const React = {
    createElement
};
const _default = React;
function sanitiseChildElements(childElements) {
    childElements = (0, _array.flatten)(childElements);
    childElements = (0, _elements.removeFalseyElements)(childElements);
    return childElements;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IEZ1bmN0aW9uQ2FudmFzRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy9mdW5jdGlvblwiO1xuXG5pbXBvcnQgeyBGVU5DVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmxhdHRlbiwgZ3VhcmFudGVlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkRWxlbWVudHMpIHtcbiAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307ICAvLy9cblxuICBjaGlsZEVsZW1lbnRzID0gc2FuaXRpc2VDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpOyAvLy9cblxuICBsZXQgZWxlbWVudDtcblxuICBpZiAoRWxlbWVudC5pc1Byb3RvdHlwZU9mKGZpcnN0QXJndW1lbnQpKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gRlVOQ1RJT04pIHtcbiAgICBjb25zdCBmdW5jID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBndWFyYW50ZWUoZnVuYyhwcm9wZXJ0aWVzKSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBGdW5jdGlvbkNhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBzYW5pdGlzZUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICBjaGlsZEVsZW1lbnRzID0gZmxhdHRlbihjaGlsZEVsZW1lbnRzKTtcblxuICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudCIsImZpcnN0QXJndW1lbnQiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsInNhbml0aXNlQ2hpbGRFbGVtZW50cyIsImVsZW1lbnQiLCJFbGVtZW50IiwiaXNQcm90b3R5cGVPZiIsIkNsYXNzIiwiT2JqZWN0IiwiYXNzaWduIiwiZnJvbVByb3BlcnRpZXMiLCJGVU5DVElPTiIsImZ1bmMiLCJndWFyYW50ZWUiLCJGdW5jdGlvbkNhbnZhc0VsZW1lbnQiLCJSZWFjdCIsImZsYXR0ZW4iLCJyZW1vdmVGYWxzZXlFbGVtZW50cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMENBOzs7ZUFBQTs7O2dFQXhDb0I7aUVBQ2M7MkJBRVQ7dUJBQ1U7MEJBQ0U7Ozs7OztBQUVyQyxTQUFTQSxjQUFjQyxhQUFhLEVBQUVDLFVBQVUsRUFBRSxHQUFHQyxhQUFhO0lBQ2hFRCxhQUFhQSxjQUFjLENBQUMsR0FBSSxHQUFHO0lBRW5DQyxnQkFBZ0JDLHNCQUFzQkQsZ0JBQWdCLEdBQUc7SUFFekQsSUFBSUU7SUFFSixJQUFJQyxnQkFBTyxDQUFDQyxhQUFhLENBQUNOLGdCQUFnQjtRQUN4QyxNQUFNTyxRQUFRUCxlQUFnQixHQUFHO1FBRWpDUSxPQUFPQyxNQUFNLENBQUNSLFlBQVk7WUFDeEJDO1FBQ0Y7UUFFQUUsVUFBVUcsTUFBTUcsY0FBYyxDQUFDVDtJQUNqQyxPQUFPLElBQUksT0FBT0Qsa0JBQWtCVyxtQkFBUSxFQUFFO1FBQzVDLE1BQU1DLE9BQU9aLGVBQ1BFLGdCQUFnQlcsSUFBQUEsZ0JBQVMsRUFBQ0QsS0FBS1g7UUFFckNPLE9BQU9DLE1BQU0sQ0FBQ1IsWUFBWTtZQUN4QkM7UUFDRjtRQUVBRSxVQUFVVSxpQkFBcUIsQ0FBQ0osY0FBYyxDQUFDVDtJQUNqRDtJQUVBLE9BQU9HO0FBQ1Q7QUFFQSxNQUFNVyxRQUFRO0lBQ1poQjtBQUNGO01BRUEsV0FBZWdCO0FBRWYsU0FBU1osc0JBQXNCRCxhQUFhO0lBQzFDQSxnQkFBZ0JjLElBQUFBLGNBQU8sRUFBQ2Q7SUFFeEJBLGdCQUFnQmUsSUFBQUEsOEJBQW9CLEVBQUNmO0lBRXJDLE9BQU9BO0FBQ1QifQ==