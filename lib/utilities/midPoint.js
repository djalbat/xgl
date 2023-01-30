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
    calculateMidPointPosition: function() {
        return calculateMidPointPosition;
    },
    projectMidPointPositionOntoXYPlane: function() {
        return projectMidPointPositionOntoXYPlane;
    },
    isMidPointPositionToOneSideOfMaskingEdges: function() {
        return isMidPointPositionToOneSideOfMaskingEdges;
    }
});
var _vector = require("../maths/vector");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function calculateMidPointPosition(vertices) {
    var midPointPosition = vertices.reduce(function(midPointPosition, vertex) {
        var vertexPosition = vertex.getPosition(), scaledVertexPosition = (0, _vector.scale3)(vertexPosition, 1 / 3);
        midPointPosition = (0, _vector.add3)(midPointPosition, scaledVertexPosition);
        return midPointPosition;
    }, [
        0,
        0,
        0
    ]);
    return midPointPosition;
}
function projectMidPointPositionOntoXYPlane(midPointPosition) {
    midPointPosition = _toConsumableArray(midPointPosition.slice(0, 2)).concat([
        0
    ]); ///
    return midPointPosition;
}
function isMidPointPositionToOneSideOfMaskingEdges(midPointPosition, maskingEdges) {
    var midPointPositionToTheLeftOfMaskingEdges = isMidPointPositionToTheLeftOfMaskingEdges(midPointPosition, maskingEdges), midPointPositionToTheRightOfMaskingEdges = isMidPointPositionToTheRightOfMaskingEdges(midPointPosition, maskingEdges), midPointPositionToOneSideOfMaskingEdges = midPointPositionToTheLeftOfMaskingEdges || midPointPositionToTheRightOfMaskingEdges; ///
    return midPointPositionToOneSideOfMaskingEdges;
}
function isMidPointPositionToTheLeftOfMaskingEdges(midPointPosition, maskingEdges) {
    var midPointPositionToTheLeftOfMaskingEdges = maskingEdges.reduce(function(midPointPositionToTheLeftOfMaskingEdges, maskingEdge) {
        if (midPointPositionToTheLeftOfMaskingEdges) {
            var midPointPositionToTheLeftOfMaskingEdge = maskingEdge.isMidPointPositionToTheLeft(midPointPosition);
            midPointPositionToTheLeftOfMaskingEdges = midPointPositionToTheLeftOfMaskingEdge;
        }
        return midPointPositionToTheLeftOfMaskingEdges;
    }, true);
    return midPointPositionToTheLeftOfMaskingEdges;
}
function isMidPointPositionToTheRightOfMaskingEdges(midPointPosition, maskingEdges) {
    var midPointPositionToTheRightOfMaskingEdges = maskingEdges.reduce(function(midPointPositionToTheRightOfMaskingEdges, maskingEdge) {
        if (midPointPositionToTheRightOfMaskingEdges) {
            var midPointPositionToTheRightOfMaskingEdge = maskingEdge.isMidPointPositionToTheRight(midPointPosition);
            midPointPositionToTheRightOfMaskingEdges = midPointPositionToTheRightOfMaskingEdge;
        }
        return midPointPositionToTheRightOfMaskingEdges;
    }, true);
    return midPointPositionToTheRightOfMaskingEdges;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbWlkUG9pbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZDMsIHNjYWxlMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24odmVydGljZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvbiA9IHZlcnRpY2VzLnJlZHVjZSgobWlkUG9pbnRQb3NpdGlvbiwgdmVydGV4KSA9PiB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBzY2FsZWRWZXJ0ZXhQb3NpdGlvbiA9IHNjYWxlMyh2ZXJ0ZXhQb3NpdGlvbiwgMS8zKTtcblxuICAgIG1pZFBvaW50UG9zaXRpb24gPSBhZGQzKG1pZFBvaW50UG9zaXRpb24sIHNjYWxlZFZlcnRleFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uO1xuICB9LCBbIDAsIDAsIDAgXSk7XG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lKG1pZFBvaW50UG9zaXRpb24pIHtcbiAgbWlkUG9pbnRQb3NpdGlvbiA9IFsgLi4ubWlkUG9pbnRQb3NpdGlvbi5zbGljZSgwLCAyKSwgMCBdOyAgLy8vXG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzID0gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSxcbiAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgfHwgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlczsgLy8vXG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcztcbn1cblxuZnVuY3Rpb24gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyA9IG1hc2tpbmdFZGdlcy5yZWR1Y2UoKG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcywgbWFza2luZ0VkZ2UpID0+IHtcbiAgICBpZiAobWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzKSB7XG4gICAgICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZSA9IG1hc2tpbmdFZGdlLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKTtcblxuICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzID0gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcztcbiAgfSwgdHJ1ZSk7XG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcztcbn1cblxuZnVuY3Rpb24gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzID0gbWFza2luZ0VkZ2VzLnJlZHVjZSgobWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcywgbWFza2luZ0VkZ2UpID0+IHtcbiAgICBpZiAobWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcykge1xuICAgICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlID0gbWFza2luZ0VkZ2UuaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodChtaWRQb2ludFBvc2l0aW9uKTtcblxuICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyA9IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcztcbiAgfSwgdHJ1ZSk7XG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXM7XG59XG4iXSwibmFtZXMiOlsiY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbiIsInByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUiLCJpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyIsInZlcnRpY2VzIiwibWlkUG9pbnRQb3NpdGlvbiIsInJlZHVjZSIsInZlcnRleCIsInZlcnRleFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJzY2FsZWRWZXJ0ZXhQb3NpdGlvbiIsInNjYWxlMyIsImFkZDMiLCJzbGljZSIsIm1hc2tpbmdFZGdlcyIsIm1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyIsImlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzIiwibWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyIsImlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyIsIm1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyIsIm1hc2tpbmdFZGdlIiwibWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2UiLCJpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQiLCJtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2UiLCJpc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJZ0JBLHlCQUF5QjtlQUF6QkE7O0lBYUFDLGtDQUFrQztlQUFsQ0E7O0lBTUFDLHlDQUF5QztlQUF6Q0E7OztzQkFyQmE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLFNBQVNGLDBCQUEwQkcsUUFBUSxFQUFFO0lBQ2xELElBQU1DLG1CQUFtQkQsU0FBU0UsTUFBTSxDQUFDLFNBQUNELGtCQUFrQkUsUUFBVztRQUNyRSxJQUFNQyxpQkFBaUJELE9BQU9FLFdBQVcsSUFDbkNDLHVCQUF1QkMsSUFBQUEsY0FBTSxFQUFDSCxnQkFBZ0IsSUFBRTtRQUV0REgsbUJBQW1CTyxJQUFBQSxZQUFJLEVBQUNQLGtCQUFrQks7UUFFMUMsT0FBT0w7SUFDVCxHQUFHO1FBQUU7UUFBRztRQUFHO0tBQUc7SUFFZCxPQUFPQTtBQUNUO0FBRU8sU0FBU0gsbUNBQW1DRyxnQkFBZ0IsRUFBRTtJQUNuRUEsbUJBQW1CLEFBQUUsbUJBQUdBLGlCQUFpQlEsS0FBSyxDQUFDLEdBQUcsV0FBL0I7UUFBbUM7S0FBRyxHQUFHLEdBQUc7SUFFL0QsT0FBT1I7QUFDVDtBQUVPLFNBQVNGLDBDQUEwQ0UsZ0JBQWdCLEVBQUVTLFlBQVksRUFBRTtJQUN4RixJQUFNQywwQ0FBMENDLDBDQUEwQ1gsa0JBQWtCUyxlQUN0R0csMkNBQTJDQywyQ0FBMkNiLGtCQUFrQlMsZUFDeEdLLDBDQUEwQ0osMkNBQTJDRSwwQ0FBMEMsR0FBRztJQUV4SSxPQUFPRTtBQUNUO0FBRUEsU0FBU0gsMENBQTBDWCxnQkFBZ0IsRUFBRVMsWUFBWSxFQUFFO0lBQ2pGLElBQU1DLDBDQUEwQ0QsYUFBYVIsTUFBTSxDQUFDLFNBQUNTLHlDQUF5Q0ssYUFBZ0I7UUFDNUgsSUFBSUwseUNBQXlDO1lBQzNDLElBQU1NLHlDQUF5Q0QsWUFBWUUsMkJBQTJCLENBQUNqQjtZQUV2RlUsMENBQTBDTTtRQUM1QyxDQUFDO1FBRUQsT0FBT047SUFDVCxHQUFHLElBQUk7SUFFUCxPQUFPQTtBQUNUO0FBRUEsU0FBU0csMkNBQTJDYixnQkFBZ0IsRUFBRVMsWUFBWSxFQUFFO0lBQ2xGLElBQU1HLDJDQUEyQ0gsYUFBYVIsTUFBTSxDQUFDLFNBQUNXLDBDQUEwQ0csYUFBZ0I7UUFDOUgsSUFBSUgsMENBQTBDO1lBQzVDLElBQU1NLDBDQUEwQ0gsWUFBWUksNEJBQTRCLENBQUNuQjtZQUV6RlksMkNBQTJDTTtRQUM3QyxDQUFDO1FBRUQsT0FBT047SUFDVCxHQUFHLElBQUk7SUFFUCxPQUFPQTtBQUNUIn0=