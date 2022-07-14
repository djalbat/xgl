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
    childElements = (0, _array.flatten)(childElements);
    childElements = (0, _elements.removeFalseyElements)(childElements);
    return childElements;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IEZ1bmN0aW9uQ2FudmFzRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy9mdW5jdGlvblwiO1xuXG5pbXBvcnQgeyBGVU5DVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmxhdHRlbiwgZ3VhcmFudGVlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkRWxlbWVudHMpIHtcbiAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307ICAvLy9cblxuICBjaGlsZEVsZW1lbnRzID0gc2FuaXRpc2VDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpOyAvLy9cblxuICBsZXQgZWxlbWVudDtcblxuICBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gRlVOQ1RJT04pIHtcbiAgICBjb25zdCBmdW5jID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBndWFyYW50ZWUoZnVuYyhwcm9wZXJ0aWVzKSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBGdW5jdGlvbkNhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCB0eXBlT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAvLy9cbiAgICB0eXBlT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQpIHtcbiAgICAgIHR5cGVPZiA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG5cbmZ1bmN0aW9uIHNhbml0aXNlQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNoaWxkRWxlbWVudHMgPSBmbGF0dGVuKGNoaWxkRWxlbWVudHMpO1xuXG4gIGNoaWxkRWxlbWVudHMgPSByZW1vdmVGYWxzZXlFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVFbGVtZW50IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwic2FuaXRpc2VDaGlsZEVsZW1lbnRzIiwiZWxlbWVudCIsImlzU3ViY2xhc3NPZiIsIkVsZW1lbnQiLCJDbGFzcyIsIk9iamVjdCIsImFzc2lnbiIsImZyb21Qcm9wZXJ0aWVzIiwiRlVOQ1RJT04iLCJmdW5jIiwiZ3VhcmFudGVlIiwiRnVuY3Rpb25DYW52YXNFbGVtZW50IiwiUmVhY3QiLCJhcmd1bWVudCIsInR5cGVPZiIsIm5hbWUiLCJnZXRQcm90b3R5cGVPZiIsImZsYXR0ZW4iLCJyZW1vdmVGYWxzZXlFbGVtZW50cyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQTBDYixTQUFxQjs7O2VBQXJCLFFBQXFCOzs7NERBeENELFdBQVc7NkRBQ0csMkJBQTJCO3lCQUVwQyxhQUFhO3FCQUNILG1CQUFtQjt3QkFDakIsc0JBQXNCOzs7Ozs7Ozs7O0FBRTNELFNBQVNBLGFBQWEsQ0FBQ0MsYUFBYSxFQUFFQyxVQUFVLEVBQW9CO0lBQWxCLElBQUEsSUFBQSxJQUFnQixHQUFoQixTQUFnQixDQUFoQixNQUFnQixFQUFoQixBQUFHQyxhQUFhLEdBQWhCLFVBQUEsSUFBZ0IsR0FBaEIsQ0FBZ0IsR0FBaEIsSUFBZ0IsR0FBaEIsQ0FBZ0IsSUFBQSxDQUFBLEVBQWhCLElBQWdCLEdBQWhCLENBQWdCLEVBQWhCLElBQWdCLEdBQWhCLElBQWdCLEVBQWhCLElBQWdCLEVBQUEsQ0FBaEI7UUFBQSxBQUFHQSxhQUFhLENBQWhCLElBQWdCLEdBQWhCLENBQWdCLElBQWhCLFNBQWdCLEFBQWhCLENBQUEsSUFBZ0IsQ0FBQSxDQUFBO0tBQUE7SUFDaEVELFVBQVUsR0FBR0EsVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFFLEdBQUc7SUFFbkNDLGFBQWEsR0FBR0MscUJBQXFCLENBQUNELGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRztJQUV6RCxJQUFJRSxPQUFPLEFBQUM7SUFFWixJQUFJQyxZQUFZLENBQUNMLGFBQWEsRUFBRU0sUUFBTyxRQUFBLENBQUMsRUFBRTtRQUN4QyxJQUFNQyxLQUFLLEdBQUdQLGFBQWEsQUFBQyxFQUFFLEdBQUc7UUFFakNRLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDUixVQUFVLEVBQUU7WUFDeEJDLGFBQWEsRUFBYkEsYUFBYTtTQUNkLENBQUMsQ0FBQztRQUVIRSxPQUFPLEdBQUdHLEtBQUssQ0FBQ0csY0FBYyxDQUFDVCxVQUFVLENBQUMsQ0FBQztLQUM1QyxNQUFNLElBQUksQ0FBQSxPQUFPRCxhQUFhLGlDQUFwQixPQUFvQixDQUFiQSxhQUFhLENBQUEsQ0FBQSxLQUFLVyxVQUFRLFNBQUEsRUFBRTtRQUM1QyxJQUFNQyxJQUFJLEdBQUdaLGFBQWEsRUFDcEJFLGNBQWEsR0FBR1csSUFBQUEsTUFBUyxVQUFBLEVBQUNELElBQUksQ0FBQ1gsVUFBVSxDQUFDLENBQUMsQUFBQztRQUVsRE8sTUFBTSxDQUFDQyxNQUFNLENBQUNSLFVBQVUsRUFBRTtZQUN4QkMsYUFBYSxFQUFiQSxjQUFhO1NBQ2QsQ0FBQyxDQUFDO1FBRUhFLE9BQU8sR0FBR1UsU0FBcUIsUUFBQSxDQUFDSixjQUFjLENBQUNULFVBQVUsQ0FBQyxDQUFDO0tBQzVEO0lBRUQsT0FBT0csT0FBTyxDQUFDO0NBQ2hCO0FBRUQsSUFBTVcsS0FBSyxHQUFHO0lBQ1poQixhQUFhLEVBQWJBLGFBQWE7Q0FDZCxBQUFDO0lBRUYsUUFBcUIsR0FBTmdCLEtBQUs7QUFFcEIsU0FBU1YsWUFBWSxDQUFDVyxRQUFRLEVBQUVULEtBQUssRUFBRTtJQUNyQyxJQUFJVSxNQUFNLEdBQUcsS0FBSyxBQUFDO0lBRW5CLElBQUlELFFBQVEsQ0FBQ0UsSUFBSSxLQUFLWCxLQUFLLENBQUNXLElBQUksRUFBRTtRQUNoQ0QsTUFBTSxHQUFHLElBQUksQ0FBQztLQUNmLE1BQU07UUFDTEQsUUFBUSxHQUFHUixNQUFNLENBQUNXLGNBQWMsQ0FBQ0gsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHO1FBRS9DLElBQUlBLFFBQVEsRUFBRTtZQUNaQyxNQUFNLEdBQUdaLFlBQVksQ0FBQ1csUUFBUSxFQUFFVCxLQUFLLENBQUMsQ0FBQztTQUN4QztLQUNGO0lBRUQsT0FBT1UsTUFBTSxDQUFDO0NBQ2Y7QUFFRCxTQUFTZCxxQkFBcUIsQ0FBQ0QsYUFBYSxFQUFFO0lBQzVDQSxhQUFhLEdBQUdrQixJQUFBQSxNQUFPLFFBQUEsRUFBQ2xCLGFBQWEsQ0FBQyxDQUFDO0lBRXZDQSxhQUFhLEdBQUdtQixJQUFBQSxTQUFvQixxQkFBQSxFQUFDbkIsYUFBYSxDQUFDLENBQUM7SUFFcEQsT0FBT0EsYUFBYSxDQUFDO0NBQ3RCIn0=