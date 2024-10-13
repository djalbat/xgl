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
    normalsMatrixFromRotationsMatrix: function() {
        return normalsMatrixFromRotationsMatrix;
    },
    offsetsMatrixFromOffsets: function() {
        return offsetsMatrixFromOffsets;
    },
    positionMatrixFromDistance: function() {
        return positionMatrixFromDistance;
    },
    positionMatrixFromNothing: function() {
        return positionMatrixFromNothing;
    },
    positionMatrixFromPosition: function() {
        return positionMatrixFromPosition;
    },
    projectionMatrixFromCameraAndCanvas: function() {
        return projectionMatrixFromCameraAndCanvas;
    },
    rotationsMatrixFromAngles: function() {
        return rotationsMatrixFromAngles;
    },
    rotationsMatrixFromRotations: function() {
        return rotationsMatrixFromRotations;
    },
    scaleMatrixFromScale: function() {
        return scaleMatrixFromScale;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbWF0cml4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzY2FsZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaWRlbnRpdHk0LCBzY2FsZTQsIGludmVydDQsIHJvdGF0ZTQsIHRyYW5zbGF0ZTQsIHRyYW5zcG9zZTQsIHBlcnNwZWN0aXZlNCB9IGZyb20gXCIuLi9tYXRocy9tYXRyaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlTWF0cml4RnJvbVNjYWxlKHNjYWxlKSB7XG4gIGxldCBzY2FsZU1hdHJpeCA9IGlkZW50aXR5NCgpO1xuXG4gIHNjYWxlTWF0cml4ID0gc2NhbGU0KHNjYWxlTWF0cml4LCBzY2FsZSk7XG5cbiAgcmV0dXJuIHNjYWxlTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpIHtcbiAgbGV0IG9mZnNldHNNYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgb2Zmc2V0c01hdHJpeCA9IHRyYW5zbGF0ZTQob2Zmc2V0c01hdHJpeCwgb2Zmc2V0cyk7XG5cbiAgcmV0dXJuIG9mZnNldHNNYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCkge1xuICBsZXQgcG9zaXRpb25NYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpIHtcbiAgbGV0IHBvc2l0aW9uTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIGNvbnN0IHggPSAwLFxuICAgICAgICB5ID0gMCxcbiAgICAgICAgeiA9IC1kaXN0YW5jZTtcblxuICBwb3NpdGlvbk1hdHJpeCA9IHRyYW5zbGF0ZTQocG9zaXRpb25NYXRyaXgsIFsgeCwgeSwgeiBdKTtcblxuICByZXR1cm4gcG9zaXRpb25NYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICBsZXQgcG9zaXRpb25NYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgcG9zaXRpb25NYXRyaXggPSB0cmFuc2xhdGU0KHBvc2l0aW9uTWF0cml4LCBwb3NpdGlvbik7XG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMsIHJldmVyc2VPcmRlciA9IGZhbHNlKSB7XG4gIGxldCByb3RhdGlvbnNNYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgY29uc3QgZmlyc3RBbmdsZSA9IGZpcnN0KGFuZ2xlcyksXG4gICAgICAgIHNlY29uZEFuZ2xlID0gc2Vjb25kKGFuZ2xlcyksXG4gICAgICAgIHRoaXJkQW5nbGUgPSB0aGlyZChhbmdsZXMpLFxuICAgICAgICB4QW5nbGUgPSBmaXJzdEFuZ2xlLCAgLy8vL1xuICAgICAgICB5QW5nbGUgPSBzZWNvbmRBbmdsZSwgLy8vXG4gICAgICAgIHpBbmdsZSA9IHRoaXJkQW5nbGUsICAvLy9cbiAgICAgICAgeEF4aXMgPSBbIDEsIDAsIDAgXSxcbiAgICAgICAgeUF4aXMgPSBbIDAsIDEsIDAgXSxcbiAgICAgICAgekF4aXMgPSBbIDAsIDAsIDEgXTtcblxuICBpZiAocmV2ZXJzZU9yZGVyKSB7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHpBbmdsZSwgekF4aXMpO1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB5QW5nbGUsIHlBeGlzKTtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeEFuZ2xlLCB4QXhpcyk7XG4gIH0gZWxzZSB7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHhBbmdsZSwgeEF4aXMpO1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB5QW5nbGUsIHlBeGlzKTtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgekFuZ2xlLCB6QXhpcyk7XG4gIH1cblxuICByZXR1cm4gcm90YXRpb25zTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyhyb3RhdGlvbnMpIHtcbiAgY29uc3Qgc2NhbGFyID0gREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIsIC8vL1xuICAgICAgICBhbmdsZXMgPSBzY2FsZTMocm90YXRpb25zLCBzY2FsYXIpLFxuICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyk7XG5cbiAgcmV0dXJuIHJvdGF0aW9uc01hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCkge1xuICBsZXQgbm9ybWFsc01hdHJpeCA9IGludmVydDQocm90YXRpb25zTWF0cml4KTsgLy8vXG5cbiAgbm9ybWFsc01hdHJpeCA9IHRyYW5zcG9zZTQobm9ybWFsc01hdHJpeCk7XG5cbiAgcmV0dXJuIG5vcm1hbHNNYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyhjYW1lcmEsIGNhbnZhcykge1xuICBjb25zdCB6RmFyID0gY2FtZXJhLmdldFpGYXIoKSxcbiAgICAgICAgek5lYXIgPSBjYW1lcmEuZ2V0Wk5lYXIoKSxcbiAgICAgICAgd2lkdGggPSBjYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICBmaWVsZE9mVmlldyA9IGNhbWVyYS5nZXRGaWVsZE9mVmlldygpLFxuICAgICAgICBhc3BlY3RSYXRpbyA9ICggd2lkdGggLyBoZWlnaHQgKSxcbiAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHBlcnNwZWN0aXZlNChmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKTtcblxuICByZXR1cm4gcHJvamVjdGlvbk1hdHJpeDtcbn1cbiJdLCJuYW1lcyI6WyJub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCIsIm9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyIsInBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlIiwicG9zaXRpb25NYXRyaXhGcm9tTm90aGluZyIsInBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uIiwicHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMiLCJyb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzIiwicm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyIsInNjYWxlTWF0cml4RnJvbVNjYWxlIiwic2NhbGUiLCJzY2FsZU1hdHJpeCIsImlkZW50aXR5NCIsInNjYWxlNCIsIm9mZnNldHMiLCJvZmZzZXRzTWF0cml4IiwidHJhbnNsYXRlNCIsInBvc2l0aW9uTWF0cml4IiwiZGlzdGFuY2UiLCJ4IiwieSIsInoiLCJwb3NpdGlvbiIsImFuZ2xlcyIsInJldmVyc2VPcmRlciIsInJvdGF0aW9uc01hdHJpeCIsImZpcnN0QW5nbGUiLCJmaXJzdCIsInNlY29uZEFuZ2xlIiwic2Vjb25kIiwidGhpcmRBbmdsZSIsInRoaXJkIiwieEFuZ2xlIiwieUFuZ2xlIiwiekFuZ2xlIiwieEF4aXMiLCJ5QXhpcyIsInpBeGlzIiwicm90YXRlNCIsInJvdGF0aW9ucyIsInNjYWxhciIsIkRFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIiwic2NhbGUzIiwibm9ybWFsc01hdHJpeCIsImludmVydDQiLCJ0cmFuc3Bvc2U0IiwiY2FtZXJhIiwiY2FudmFzIiwiekZhciIsImdldFpGYXIiLCJ6TmVhciIsImdldFpOZWFyIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsImZpZWxkT2ZWaWV3IiwiZ2V0RmllbGRPZlZpZXciLCJhc3BlY3RSYXRpbyIsInByb2plY3Rpb25NYXRyaXgiLCJwZXJzcGVjdGl2ZTQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQW1GZ0JBLGdDQUFnQztlQUFoQ0E7O0lBcEVBQyx3QkFBd0I7ZUFBeEJBOztJQWNBQywwQkFBMEI7ZUFBMUJBOztJQU5BQyx5QkFBeUI7ZUFBekJBOztJQWtCQUMsMEJBQTBCO2VBQTFCQTs7SUFrREFDLG1DQUFtQztlQUFuQ0E7O0lBMUNBQyx5QkFBeUI7ZUFBekJBOztJQTBCQUMsNEJBQTRCO2VBQTVCQTs7SUFwRUFDLG9CQUFvQjtlQUFwQkE7OztzQkFMTztxQkFDYzt5QkFDUztzQkFDNEM7QUFFbkYsU0FBU0EscUJBQXFCQyxLQUFLO0lBQ3hDLElBQUlDLGNBQWNDLElBQUFBLGlCQUFTO0lBRTNCRCxjQUFjRSxJQUFBQSxjQUFNLEVBQUNGLGFBQWFEO0lBRWxDLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTVCx5QkFBeUJZLE9BQU87SUFDOUMsSUFBSUMsZ0JBQWdCSCxJQUFBQSxpQkFBUyxLQUFJLEdBQUc7SUFFcENHLGdCQUFnQkMsSUFBQUEsa0JBQVUsRUFBQ0QsZUFBZUQ7SUFFMUMsT0FBT0M7QUFDVDtBQUVPLFNBQVNYO0lBQ2QsSUFBSWEsaUJBQWlCTCxJQUFBQSxpQkFBUyxLQUFJLEdBQUc7SUFFckMsT0FBT0s7QUFDVDtBQUVPLFNBQVNkLDJCQUEyQmUsUUFBUTtJQUNqRCxJQUFJRCxpQkFBaUJMLElBQUFBLGlCQUFTLEtBQUksR0FBRztJQUVyQyxJQUFNTyxJQUFJLEdBQ0pDLElBQUksR0FDSkMsSUFBSSxDQUFDSDtJQUVYRCxpQkFBaUJELElBQUFBLGtCQUFVLEVBQUNDLGdCQUFnQjtRQUFFRTtRQUFHQztRQUFHQztLQUFHO0lBRXZELE9BQU9KO0FBQ1Q7QUFFTyxTQUFTWiwyQkFBMkJpQixRQUFRO0lBQ2pELElBQUlMLGlCQUFpQkwsSUFBQUEsaUJBQVMsS0FBSSxHQUFHO0lBRXJDSyxpQkFBaUJELElBQUFBLGtCQUFVLEVBQUNDLGdCQUFnQks7SUFFNUMsT0FBT0w7QUFDVDtBQUVPLFNBQVNWLDBCQUEwQmdCLE1BQU07UUFBRUMsZUFBQUEsaUVBQWU7SUFDL0QsSUFBSUMsa0JBQWtCYixJQUFBQSxpQkFBUyxLQUFJLEdBQUc7SUFFdEMsSUFBTWMsYUFBYUMsSUFBQUEsWUFBSyxFQUFDSixTQUNuQkssY0FBY0MsSUFBQUEsYUFBTSxFQUFDTixTQUNyQk8sYUFBYUMsSUFBQUEsWUFBSyxFQUFDUixTQUNuQlMsU0FBU04sWUFDVE8sU0FBU0wsYUFDVE0sU0FBU0osWUFDVEssUUFBUTtRQUFFO1FBQUc7UUFBRztLQUFHLEVBQ25CQyxRQUFRO1FBQUU7UUFBRztRQUFHO0tBQUcsRUFDbkJDLFFBQVE7UUFBRTtRQUFHO1FBQUc7S0FBRztJQUV6QixJQUFJYixjQUFjO1FBQ2hCQyxrQkFBa0JhLElBQUFBLGVBQU8sRUFBQ2IsaUJBQWlCUyxRQUFRRztRQUNuRFosa0JBQWtCYSxJQUFBQSxlQUFPLEVBQUNiLGlCQUFpQlEsUUFBUUc7UUFDbkRYLGtCQUFrQmEsSUFBQUEsZUFBTyxFQUFDYixpQkFBaUJPLFFBQVFHO0lBQ3JELE9BQU87UUFDTFYsa0JBQWtCYSxJQUFBQSxlQUFPLEVBQUNiLGlCQUFpQk8sUUFBUUc7UUFDbkRWLGtCQUFrQmEsSUFBQUEsZUFBTyxFQUFDYixpQkFBaUJRLFFBQVFHO1FBQ25EWCxrQkFBa0JhLElBQUFBLGVBQU8sRUFBQ2IsaUJBQWlCUyxRQUFRRztJQUNyRDtJQUVBLE9BQU9aO0FBQ1Q7QUFFTyxTQUFTakIsNkJBQTZCK0IsU0FBUztJQUNwRCxJQUFNQyxTQUFTQyx3Q0FBNkIsRUFDdENsQixTQUFTbUIsSUFBQUEsY0FBTSxFQUFDSCxXQUFXQyxTQUMzQmYsa0JBQWtCbEIsMEJBQTBCZ0I7SUFFbEQsT0FBT0U7QUFDVDtBQUVPLFNBQVN4QixpQ0FBaUN3QixlQUFlO0lBQzlELElBQUlrQixnQkFBZ0JDLElBQUFBLGVBQU8sRUFBQ25CLGtCQUFrQixHQUFHO0lBRWpEa0IsZ0JBQWdCRSxJQUFBQSxrQkFBVSxFQUFDRjtJQUUzQixPQUFPQTtBQUNUO0FBRU8sU0FBU3JDLG9DQUFvQ3dDLE1BQU0sRUFBRUMsTUFBTTtJQUNoRSxJQUFNQyxPQUFPRixPQUFPRyxPQUFPLElBQ3JCQyxRQUFRSixPQUFPSyxRQUFRLElBQ3ZCQyxRQUFRTCxPQUFPTSxRQUFRLElBQ3ZCQyxTQUFTUCxPQUFPUSxTQUFTLElBQ3pCQyxjQUFjVixPQUFPVyxjQUFjLElBQ25DQyxjQUFnQk4sUUFBUUUsUUFDeEJLLG1CQUFtQkMsSUFBQUEsb0JBQVksRUFBQ0osYUFBYUUsYUFBYVIsT0FBT0Y7SUFFdkUsT0FBT1c7QUFDVCJ9