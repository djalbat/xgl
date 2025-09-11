"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get calculateMidPointPosition () {
        return calculateMidPointPosition;
    },
    get isMidPointPositionToOneSideOfMaskingEdges () {
        return isMidPointPositionToOneSideOfMaskingEdges;
    },
    get projectMidPointPositionOntoXYPlane () {
        return projectMidPointPositionOntoXYPlane;
    }
});
var _vector = require("../maths/vector");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
    midPointPosition = _to_consumable_array(midPointPosition.slice(0, 2)).concat([
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbWlkUG9pbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZDMsIHNjYWxlMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24odmVydGljZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvbiA9IHZlcnRpY2VzLnJlZHVjZSgobWlkUG9pbnRQb3NpdGlvbiwgdmVydGV4KSA9PiB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBzY2FsZWRWZXJ0ZXhQb3NpdGlvbiA9IHNjYWxlMyh2ZXJ0ZXhQb3NpdGlvbiwgMS8zKTtcblxuICAgIG1pZFBvaW50UG9zaXRpb24gPSBhZGQzKG1pZFBvaW50UG9zaXRpb24sIHNjYWxlZFZlcnRleFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uO1xuICB9LCBbIDAsIDAsIDAgXSk7XG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lKG1pZFBvaW50UG9zaXRpb24pIHtcbiAgbWlkUG9pbnRQb3NpdGlvbiA9IFsgLi4ubWlkUG9pbnRQb3NpdGlvbi5zbGljZSgwLCAyKSwgMCBdOyAgLy8vXG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzID0gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSxcbiAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgfHwgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlczsgLy8vXG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcztcbn1cblxuZnVuY3Rpb24gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyA9IG1hc2tpbmdFZGdlcy5yZWR1Y2UoKG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcywgbWFza2luZ0VkZ2UpID0+IHtcbiAgICBpZiAobWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzKSB7XG4gICAgICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZSA9IG1hc2tpbmdFZGdlLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKTtcblxuICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzID0gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcztcbiAgfSwgdHJ1ZSk7XG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcztcbn1cblxuZnVuY3Rpb24gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzID0gbWFza2luZ0VkZ2VzLnJlZHVjZSgobWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcywgbWFza2luZ0VkZ2UpID0+IHtcbiAgICBpZiAobWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcykge1xuICAgICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlID0gbWFza2luZ0VkZ2UuaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodChtaWRQb2ludFBvc2l0aW9uKTtcblxuICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyA9IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcztcbiAgfSwgdHJ1ZSk7XG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXM7XG59XG4iXSwibmFtZXMiOlsiY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbiIsImlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzIiwicHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZSIsInZlcnRpY2VzIiwibWlkUG9pbnRQb3NpdGlvbiIsInJlZHVjZSIsInZlcnRleCIsInZlcnRleFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJzY2FsZWRWZXJ0ZXhQb3NpdGlvbiIsInNjYWxlMyIsImFkZDMiLCJzbGljZSIsIm1hc2tpbmdFZGdlcyIsIm1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyIsImlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzIiwibWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyIsImlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyIsIm1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyIsIm1hc2tpbmdFZGdlIiwibWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2UiLCJpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQiLCJtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2UiLCJpc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFJZ0JBO2VBQUFBOztRQW1CQUM7ZUFBQUE7O1FBTkFDO2VBQUFBOzs7c0JBZmE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLFNBQVNGLDBCQUEwQkcsUUFBUTtJQUNoRCxJQUFNQyxtQkFBbUJELFNBQVNFLE1BQU0sQ0FBQyxTQUFDRCxrQkFBa0JFO1FBQzFELElBQU1DLGlCQUFpQkQsT0FBT0UsV0FBVyxJQUNuQ0MsdUJBQXVCQyxJQUFBQSxjQUFNLEVBQUNILGdCQUFnQixJQUFFO1FBRXRESCxtQkFBbUJPLElBQUFBLFlBQUksRUFBQ1Asa0JBQWtCSztRQUUxQyxPQUFPTDtJQUNULEdBQUc7UUFBRTtRQUFHO1FBQUc7S0FBRztJQUVkLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTRixtQ0FBbUNFLGdCQUFnQjtJQUNqRUEsbUJBQW1CLEFBQUUscUJBQUdBLGlCQUFpQlEsS0FBSyxDQUFDLEdBQUcsV0FBL0I7UUFBbUM7S0FBRyxHQUFHLEdBQUc7SUFFL0QsT0FBT1I7QUFDVDtBQUVPLFNBQVNILDBDQUEwQ0csZ0JBQWdCLEVBQUVTLFlBQVk7SUFDdEYsSUFBTUMsMENBQTBDQywwQ0FBMENYLGtCQUFrQlMsZUFDdEdHLDJDQUEyQ0MsMkNBQTJDYixrQkFBa0JTLGVBQ3hHSywwQ0FBMENKLDJDQUEyQ0UsMENBQTBDLEdBQUc7SUFFeEksT0FBT0U7QUFDVDtBQUVBLFNBQVNILDBDQUEwQ1gsZ0JBQWdCLEVBQUVTLFlBQVk7SUFDL0UsSUFBTUMsMENBQTBDRCxhQUFhUixNQUFNLENBQUMsU0FBQ1MseUNBQXlDSztRQUM1RyxJQUFJTCx5Q0FBeUM7WUFDM0MsSUFBTU0seUNBQXlDRCxZQUFZRSwyQkFBMkIsQ0FBQ2pCO1lBRXZGVSwwQ0FBMENNO1FBQzVDO1FBRUEsT0FBT047SUFDVCxHQUFHO0lBRUgsT0FBT0E7QUFDVDtBQUVBLFNBQVNHLDJDQUEyQ2IsZ0JBQWdCLEVBQUVTLFlBQVk7SUFDaEYsSUFBTUcsMkNBQTJDSCxhQUFhUixNQUFNLENBQUMsU0FBQ1csMENBQTBDRztRQUM5RyxJQUFJSCwwQ0FBMEM7WUFDNUMsSUFBTU0sMENBQTBDSCxZQUFZSSw0QkFBNEIsQ0FBQ25CO1lBRXpGWSwyQ0FBMkNNO1FBQzdDO1FBRUEsT0FBT047SUFDVCxHQUFHO0lBRUgsT0FBT0E7QUFDVCJ9