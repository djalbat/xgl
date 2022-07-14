"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isApproximatelyEqualToOne: function() {
        return isApproximatelyEqualToOne;
    },
    isApproximatelyEqualToZero: function() {
        return isApproximatelyEqualToZero;
    }
});
var _defaults = require("../defaults");
function isApproximatelyEqualToOne(value) {
    var marginOfError = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_MARGIN_OF_ERROR;
    return isApproximatelyEqualTo(value, 1, marginOfError);
}
function isApproximatelyEqualToZero(value) {
    var marginOfError = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_MARGIN_OF_ERROR;
    return isApproximatelyEqualTo(value, 0, marginOfError);
}
function isApproximatelyEqualTo(valueA, valueB) {
    var marginOfError = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _defaults.DEFAULT_MARGIN_OF_ERROR;
    var difference = valueA - valueB, absoluteDifference = Math.abs(difference), approximatelyEqual = absoluteDifference < marginOfError;
    return approximatelyEqual;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXBwcm94aW1hdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lKHZhbHVlLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHsgcmV0dXJuIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWUsIDEsIG1hcmdpbk9mRXJyb3IpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyh2YWx1ZSwgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SKSB7IHJldHVybiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlLCAwLCBtYXJnaW5PZkVycm9yKTsgfVxuXG5mdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlQSwgdmFsdWVCLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHtcbiAgY29uc3QgZGlmZmVyZW5jZSA9IHZhbHVlQSAtIHZhbHVlQixcbiAgICAgICAgYWJzb2x1dGVEaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZSksXG4gICAgICAgIGFwcHJveGltYXRlbHlFcXVhbCA9IChhYnNvbHV0ZURpZmZlcmVuY2UgPCBtYXJnaW5PZkVycm9yKTtcblxuICByZXR1cm4gYXBwcm94aW1hdGVseUVxdWFsO1xufVxuIl0sIm5hbWVzIjpbImlzQXBwcm94aW1hdGVseUVxdWFsVG9PbmUiLCJpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyIsInZhbHVlIiwibWFyZ2luT2ZFcnJvciIsIkRFRkFVTFRfTUFSR0lOX09GX0VSUk9SIiwiaXNBcHByb3hpbWF0ZWx5RXF1YWxUbyIsInZhbHVlQSIsInZhbHVlQiIsImRpZmZlcmVuY2UiLCJhYnNvbHV0ZURpZmZlcmVuY2UiLCJNYXRoIiwiYWJzIiwiYXBwcm94aW1hdGVseUVxdWFsIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBSUdBLHlCQUF5QjtlQUF6QkEseUJBQXlCOztJQUV6QkMsMEJBQTBCO2VBQTFCQSwwQkFBMEI7Ozt3QkFKRixhQUFhO0FBRTlDLFNBQVNELHlCQUF5QixDQUFDRSxLQUFLLEVBQTJDO1FBQXpDQyxhQUFhLEdBQWJBLCtDQUF1QyxrQkFBdkJDLFNBQXVCLHdCQUFBO0lBQUksT0FBT0Msc0JBQXNCLENBQUNILEtBQUssRUFBRSxDQUFDLEVBQUVDLGFBQWEsQ0FBQyxDQUFDO0NBQUU7QUFFOUksU0FBU0YsMEJBQTBCLENBQUNDLEtBQUssRUFBMkM7UUFBekNDLGFBQWEsR0FBYkEsK0NBQXVDLGtCQUF2QkMsU0FBdUIsd0JBQUE7SUFBSSxPQUFPQyxzQkFBc0IsQ0FBQ0gsS0FBSyxFQUFFLENBQUMsRUFBRUMsYUFBYSxDQUFDLENBQUM7Q0FBRTtBQUV0SixTQUFTRSxzQkFBc0IsQ0FBQ0MsTUFBTSxFQUFFQyxNQUFNLEVBQTJDO1FBQXpDSixhQUFhLEdBQWJBLCtDQUF1QyxrQkFBdkJDLFNBQXVCLHdCQUFBO0lBQ3JGLElBQU1JLFVBQVUsR0FBR0YsTUFBTSxHQUFHQyxNQUFNLEVBQzVCRSxrQkFBa0IsR0FBR0MsSUFBSSxDQUFDQyxHQUFHLENBQUNILFVBQVUsQ0FBQyxFQUN6Q0ksa0JBQWtCLEdBQUlILGtCQUFrQixHQUFHTixhQUFhLEFBQUMsQUFBQztJQUVoRSxPQUFPUyxrQkFBa0IsQ0FBQztDQUMzQiJ9