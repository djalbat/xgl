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
    scaleMatrixFromScale: function() {
        return scaleMatrixFromScale;
    },
    offsetsMatrixFromOffsets: function() {
        return offsetsMatrixFromOffsets;
    },
    positionMatrixFromNothing: function() {
        return positionMatrixFromNothing;
    },
    positionMatrixFromDistance: function() {
        return positionMatrixFromDistance;
    },
    positionMatrixFromPosition: function() {
        return positionMatrixFromPosition;
    },
    rotationsMatrixFromAngles: function() {
        return rotationsMatrixFromAngles;
    },
    rotationsMatrixFromRotations: function() {
        return rotationsMatrixFromRotations;
    },
    normalsMatrixFromRotationsMatrix: function() {
        return normalsMatrixFromRotationsMatrix;
    },
    projectionMatrixFromCameraAndCanvas: function() {
        return projectionMatrixFromCameraAndCanvas;
    }
});
var _vector = require("../maths/vector");
var _array = require("../utilities/array");
var _constants = require("../constants");
var _matrix = require("../maths/matrix");
function scaleMatrixFromScale(scale) {
    var scaleMatrix = (0, _matrix.identity4)();
    scaleMatrix = (0, _matrix.scale4)(scaleMatrix, scale);
    return scaleMatrix;
}
function offsetsMatrixFromOffsets(offsets) {
    var offsetsMatrix = (0, _matrix.identity4)(); ///
    offsetsMatrix = (0, _matrix.translate4)(offsetsMatrix, offsets);
    return offsetsMatrix;
}
function positionMatrixFromNothing() {
    var positionMatrix = (0, _matrix.identity4)(); ///
    return positionMatrix;
}
function positionMatrixFromDistance(distance) {
    var positionMatrix = (0, _matrix.identity4)(); ///
    var x = 0, y = 0, z = -distance;
    positionMatrix = (0, _matrix.translate4)(positionMatrix, [
        x,
        y,
        z
    ]);
    return positionMatrix;
}
function positionMatrixFromPosition(position) {
    var positionMatrix = (0, _matrix.identity4)(); ///
    positionMatrix = (0, _matrix.translate4)(positionMatrix, position);
    return positionMatrix;
}
function rotationsMatrixFromAngles(angles) {
    var reverseOrder = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var rotationsMatrix = (0, _matrix.identity4)(); ///
    var firstAngle = (0, _array.first)(angles), secondAngle = (0, _array.second)(angles), thirdAngle = (0, _array.third)(angles), xAngle = firstAngle, yAngle = secondAngle, zAngle = thirdAngle, xAxis = [
        1,
        0,
        0
    ], yAxis = [
        0,
        1,
        0
    ], zAxis = [
        0,
        0,
        1
    ];
    if (reverseOrder) {
        rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, zAngle, zAxis);
        rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, yAngle, yAxis);
        rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, xAngle, xAxis);
    } else {
        rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, xAngle, xAxis);
        rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, yAngle, yAxis);
        rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, zAngle, zAxis);
    }
    return rotationsMatrix;
}
function rotationsMatrixFromRotations(rotations) {
    var scalar = _constants.DEGREES_TO_RADIANS_MULTIPLIER, angles = (0, _vector.scale3)(rotations, scalar), rotationsMatrix = rotationsMatrixFromAngles(angles);
    return rotationsMatrix;
}
function normalsMatrixFromRotationsMatrix(rotationsMatrix) {
    var normalsMatrix = (0, _matrix.invert4)(rotationsMatrix); ///
    normalsMatrix = (0, _matrix.transpose4)(normalsMatrix);
    return normalsMatrix;
}
function projectionMatrixFromCameraAndCanvas(camera, canvas) {
    var zFar = camera.getZFar(), zNear = camera.getZNear(), width = canvas.getWidth(), height = canvas.getHeight(), fieldOfView = camera.getFieldOfView(), aspectRatio = width / height, projectionMatrix = (0, _matrix.perspective4)(fieldOfView, aspectRatio, zNear, zFar);
    return projectionMatrix;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbWF0cml4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzY2FsZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaWRlbnRpdHk0LCBzY2FsZTQsIGludmVydDQsIHJvdGF0ZTQsIHRyYW5zbGF0ZTQsIHRyYW5zcG9zZTQsIHBlcnNwZWN0aXZlNCB9IGZyb20gXCIuLi9tYXRocy9tYXRyaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlTWF0cml4RnJvbVNjYWxlKHNjYWxlKSB7XG4gIGxldCBzY2FsZU1hdHJpeCA9IGlkZW50aXR5NCgpO1xuXG4gIHNjYWxlTWF0cml4ID0gc2NhbGU0KHNjYWxlTWF0cml4LCBzY2FsZSk7XG5cbiAgcmV0dXJuIHNjYWxlTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpIHtcbiAgbGV0IG9mZnNldHNNYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgb2Zmc2V0c01hdHJpeCA9IHRyYW5zbGF0ZTQob2Zmc2V0c01hdHJpeCwgb2Zmc2V0cyk7XG5cbiAgcmV0dXJuIG9mZnNldHNNYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCkge1xuICBsZXQgcG9zaXRpb25NYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpIHtcbiAgbGV0IHBvc2l0aW9uTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIGNvbnN0IHggPSAwLFxuICAgICAgICB5ID0gMCxcbiAgICAgICAgeiA9IC1kaXN0YW5jZTtcblxuICBwb3NpdGlvbk1hdHJpeCA9IHRyYW5zbGF0ZTQocG9zaXRpb25NYXRyaXgsIFsgeCwgeSwgeiBdKTtcblxuICByZXR1cm4gcG9zaXRpb25NYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICBsZXQgcG9zaXRpb25NYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgcG9zaXRpb25NYXRyaXggPSB0cmFuc2xhdGU0KHBvc2l0aW9uTWF0cml4LCBwb3NpdGlvbik7XG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMsIHJldmVyc2VPcmRlciA9IGZhbHNlKSB7XG4gIGxldCByb3RhdGlvbnNNYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgY29uc3QgZmlyc3RBbmdsZSA9IGZpcnN0KGFuZ2xlcyksXG4gICAgICAgIHNlY29uZEFuZ2xlID0gc2Vjb25kKGFuZ2xlcyksXG4gICAgICAgIHRoaXJkQW5nbGUgPSB0aGlyZChhbmdsZXMpLFxuICAgICAgICB4QW5nbGUgPSBmaXJzdEFuZ2xlLCAgLy8vL1xuICAgICAgICB5QW5nbGUgPSBzZWNvbmRBbmdsZSwgLy8vXG4gICAgICAgIHpBbmdsZSA9IHRoaXJkQW5nbGUsICAvLy9cbiAgICAgICAgeEF4aXMgPSBbIDEsIDAsIDAgXSxcbiAgICAgICAgeUF4aXMgPSBbIDAsIDEsIDAgXSxcbiAgICAgICAgekF4aXMgPSBbIDAsIDAsIDEgXTtcblxuICBpZiAocmV2ZXJzZU9yZGVyKSB7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHpBbmdsZSwgekF4aXMpO1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB5QW5nbGUsIHlBeGlzKTtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeEFuZ2xlLCB4QXhpcyk7XG4gIH0gZWxzZSB7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHhBbmdsZSwgeEF4aXMpO1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB5QW5nbGUsIHlBeGlzKTtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgekFuZ2xlLCB6QXhpcyk7XG4gIH1cblxuICByZXR1cm4gcm90YXRpb25zTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyhyb3RhdGlvbnMpIHtcbiAgY29uc3Qgc2NhbGFyID0gREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIsIC8vL1xuICAgICAgICBhbmdsZXMgPSBzY2FsZTMocm90YXRpb25zLCBzY2FsYXIpLFxuICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyk7XG5cbiAgcmV0dXJuIHJvdGF0aW9uc01hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCkge1xuICBsZXQgbm9ybWFsc01hdHJpeCA9IGludmVydDQocm90YXRpb25zTWF0cml4KTsgLy8vXG5cbiAgbm9ybWFsc01hdHJpeCA9IHRyYW5zcG9zZTQobm9ybWFsc01hdHJpeCk7XG5cbiAgcmV0dXJuIG5vcm1hbHNNYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyhjYW1lcmEsIGNhbnZhcykge1xuICBjb25zdCB6RmFyID0gY2FtZXJhLmdldFpGYXIoKSxcbiAgICAgICAgek5lYXIgPSBjYW1lcmEuZ2V0Wk5lYXIoKSxcbiAgICAgICAgd2lkdGggPSBjYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICBmaWVsZE9mVmlldyA9IGNhbWVyYS5nZXRGaWVsZE9mVmlldygpLFxuICAgICAgICBhc3BlY3RSYXRpbyA9ICggd2lkdGggLyBoZWlnaHQgKSxcbiAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHBlcnNwZWN0aXZlNChmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKTtcblxuICByZXR1cm4gcHJvamVjdGlvbk1hdHJpeDtcbn1cbiJdLCJuYW1lcyI6WyJzY2FsZU1hdHJpeEZyb21TY2FsZSIsIm9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyIsInBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmciLCJwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZSIsInBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uIiwicm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyIsInJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMiLCJub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzIiwic2NhbGUiLCJzY2FsZU1hdHJpeCIsImlkZW50aXR5NCIsInNjYWxlNCIsIm9mZnNldHMiLCJvZmZzZXRzTWF0cml4IiwidHJhbnNsYXRlNCIsInBvc2l0aW9uTWF0cml4IiwiZGlzdGFuY2UiLCJ4IiwieSIsInoiLCJwb3NpdGlvbiIsImFuZ2xlcyIsInJldmVyc2VPcmRlciIsInJvdGF0aW9uc01hdHJpeCIsImZpcnN0QW5nbGUiLCJmaXJzdCIsInNlY29uZEFuZ2xlIiwic2Vjb25kIiwidGhpcmRBbmdsZSIsInRoaXJkIiwieEFuZ2xlIiwieUFuZ2xlIiwiekFuZ2xlIiwieEF4aXMiLCJ5QXhpcyIsInpBeGlzIiwicm90YXRlNCIsInJvdGF0aW9ucyIsInNjYWxhciIsIkRFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIiwic2NhbGUzIiwibm9ybWFsc01hdHJpeCIsImludmVydDQiLCJ0cmFuc3Bvc2U0IiwiY2FtZXJhIiwiY2FudmFzIiwiekZhciIsImdldFpGYXIiLCJ6TmVhciIsImdldFpOZWFyIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsImZpZWxkT2ZWaWV3IiwiZ2V0RmllbGRPZlZpZXciLCJhc3BlY3RSYXRpbyIsInByb2plY3Rpb25NYXRyaXgiLCJwZXJzcGVjdGl2ZTQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU9nQkEsb0JBQW9CO2VBQXBCQTs7SUFRQUMsd0JBQXdCO2VBQXhCQTs7SUFRQUMseUJBQXlCO2VBQXpCQTs7SUFNQUMsMEJBQTBCO2VBQTFCQTs7SUFZQUMsMEJBQTBCO2VBQTFCQTs7SUFRQUMseUJBQXlCO2VBQXpCQTs7SUEwQkFDLDRCQUE0QjtlQUE1QkE7O0lBUUFDLGdDQUFnQztlQUFoQ0E7O0lBUUFDLG1DQUFtQztlQUFuQ0E7OztzQkF6Rk87cUJBQ2M7eUJBQ1M7c0JBQzRDO0FBRW5GLFNBQVNSLHFCQUFxQlMsS0FBSztJQUN4QyxJQUFJQyxjQUFjQyxJQUFBQSxpQkFBUztJQUUzQkQsY0FBY0UsSUFBQUEsY0FBTSxFQUFDRixhQUFhRDtJQUVsQyxPQUFPQztBQUNUO0FBRU8sU0FBU1QseUJBQXlCWSxPQUFPO0lBQzlDLElBQUlDLGdCQUFnQkgsSUFBQUEsaUJBQVMsS0FBSSxHQUFHO0lBRXBDRyxnQkFBZ0JDLElBQUFBLGtCQUFVLEVBQUNELGVBQWVEO0lBRTFDLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTWjtJQUNkLElBQUljLGlCQUFpQkwsSUFBQUEsaUJBQVMsS0FBSSxHQUFHO0lBRXJDLE9BQU9LO0FBQ1Q7QUFFTyxTQUFTYiwyQkFBMkJjLFFBQVE7SUFDakQsSUFBSUQsaUJBQWlCTCxJQUFBQSxpQkFBUyxLQUFJLEdBQUc7SUFFckMsSUFBTU8sSUFBSSxHQUNKQyxJQUFJLEdBQ0pDLElBQUksQ0FBQ0g7SUFFWEQsaUJBQWlCRCxJQUFBQSxrQkFBVSxFQUFDQyxnQkFBZ0I7UUFBRUU7UUFBR0M7UUFBR0M7S0FBRztJQUV2RCxPQUFPSjtBQUNUO0FBRU8sU0FBU1osMkJBQTJCaUIsUUFBUTtJQUNqRCxJQUFJTCxpQkFBaUJMLElBQUFBLGlCQUFTLEtBQUksR0FBRztJQUVyQ0ssaUJBQWlCRCxJQUFBQSxrQkFBVSxFQUFDQyxnQkFBZ0JLO0lBRTVDLE9BQU9MO0FBQ1Q7QUFFTyxTQUFTWCwwQkFBMEJpQixNQUFNO1FBQUVDLGVBQUFBLGlFQUFlO0lBQy9ELElBQUlDLGtCQUFrQmIsSUFBQUEsaUJBQVMsS0FBSSxHQUFHO0lBRXRDLElBQU1jLGFBQWFDLElBQUFBLFlBQUssRUFBQ0osU0FDbkJLLGNBQWNDLElBQUFBLGFBQU0sRUFBQ04sU0FDckJPLGFBQWFDLElBQUFBLFlBQUssRUFBQ1IsU0FDbkJTLFNBQVNOLFlBQ1RPLFNBQVNMLGFBQ1RNLFNBQVNKLFlBQ1RLLFFBQVE7UUFBRTtRQUFHO1FBQUc7S0FBRyxFQUNuQkMsUUFBUTtRQUFFO1FBQUc7UUFBRztLQUFHLEVBQ25CQyxRQUFRO1FBQUU7UUFBRztRQUFHO0tBQUc7SUFFekIsSUFBSWIsY0FBYztRQUNoQkMsa0JBQWtCYSxJQUFBQSxlQUFPLEVBQUNiLGlCQUFpQlMsUUFBUUc7UUFDbkRaLGtCQUFrQmEsSUFBQUEsZUFBTyxFQUFDYixpQkFBaUJRLFFBQVFHO1FBQ25EWCxrQkFBa0JhLElBQUFBLGVBQU8sRUFBQ2IsaUJBQWlCTyxRQUFRRztJQUNyRCxPQUFPO1FBQ0xWLGtCQUFrQmEsSUFBQUEsZUFBTyxFQUFDYixpQkFBaUJPLFFBQVFHO1FBQ25EVixrQkFBa0JhLElBQUFBLGVBQU8sRUFBQ2IsaUJBQWlCUSxRQUFRRztRQUNuRFgsa0JBQWtCYSxJQUFBQSxlQUFPLEVBQUNiLGlCQUFpQlMsUUFBUUc7SUFDckQ7SUFFQSxPQUFPWjtBQUNUO0FBRU8sU0FBU2xCLDZCQUE2QmdDLFNBQVM7SUFDcEQsSUFBTUMsU0FBU0Msd0NBQTZCLEVBQ3RDbEIsU0FBU21CLElBQUFBLGNBQU0sRUFBQ0gsV0FBV0MsU0FDM0JmLGtCQUFrQm5CLDBCQUEwQmlCO0lBRWxELE9BQU9FO0FBQ1Q7QUFFTyxTQUFTakIsaUNBQWlDaUIsZUFBZTtJQUM5RCxJQUFJa0IsZ0JBQWdCQyxJQUFBQSxlQUFPLEVBQUNuQixrQkFBa0IsR0FBRztJQUVqRGtCLGdCQUFnQkUsSUFBQUEsa0JBQVUsRUFBQ0Y7SUFFM0IsT0FBT0E7QUFDVDtBQUVPLFNBQVNsQyxvQ0FBb0NxQyxNQUFNLEVBQUVDLE1BQU07SUFDaEUsSUFBTUMsT0FBT0YsT0FBT0csT0FBTyxJQUNyQkMsUUFBUUosT0FBT0ssUUFBUSxJQUN2QkMsUUFBUUwsT0FBT00sUUFBUSxJQUN2QkMsU0FBU1AsT0FBT1EsU0FBUyxJQUN6QkMsY0FBY1YsT0FBT1csY0FBYyxJQUNuQ0MsY0FBZ0JOLFFBQVFFLFFBQ3hCSyxtQkFBbUJDLElBQUFBLG9CQUFZLEVBQUNKLGFBQWFFLGFBQWFSLE9BQU9GO0lBRXZFLE9BQU9XO0FBQ1QifQ==