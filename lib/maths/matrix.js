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
    default: function() {
        return _default;
    },
    determinant2: function() {
        return determinant2;
    },
    determinant3: function() {
        return determinant3;
    },
    determinant4: function() {
        return determinant4;
    },
    identity2: function() {
        return identity2;
    },
    identity3: function() {
        return identity3;
    },
    identity4: function() {
        return identity4;
    },
    invert2: function() {
        return invert2;
    },
    invert3: function() {
        return invert3;
    },
    invert4: function() {
        return invert4;
    },
    multiply2: function() {
        return multiply2;
    },
    multiply3: function() {
        return multiply3;
    },
    multiply4: function() {
        return multiply4;
    },
    perspective4: function() {
        return perspective4;
    },
    rotate4: function() {
        return rotate4;
    },
    scale4: function() {
        return scale4;
    },
    translate4: function() {
        return translate4;
    },
    transpose2: function() {
        return transpose2;
    },
    transpose3: function() {
        return transpose3;
    },
    transpose4: function() {
        return transpose4;
    }
});
var _vector = require("../maths/vector");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function identity2() {
    return [
        1,
        0,
        0,
        1
    ];
}
function identity3() {
    return [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
    ];
}
function identity4() {
    return [
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
    ];
}
function multiply2(matrixA, matrixB) {
    var _matrixA = _sliced_to_array(matrixA, 4), a0 = _matrixA[0], a1 = _matrixA[1], a2 = _matrixA[2], a3 = _matrixA[3], _matrixB = _sliced_to_array(matrixB, 4), b0 = _matrixB[0], b1 = _matrixB[1], b2 = _matrixB[2], b3 = _matrixB[3];
    return [
        a0 * b0 + a2 * b1,
        a1 * b0 + a3 * b1,
        a0 * b2 + a2 * b3,
        a1 * b2 + a3 * b3
    ];
}
function multiply3(matrixA, matrixB) {
    var _matrixA = _sliced_to_array(matrixA, 9), a0 = _matrixA[0], a1 = _matrixA[1], a2 = _matrixA[2], a3 = _matrixA[3], a4 = _matrixA[4], a5 = _matrixA[5], a6 = _matrixA[6], a7 = _matrixA[7], a8 = _matrixA[8], _matrixB = _sliced_to_array(matrixB, 9), b0 = _matrixB[0], b1 = _matrixB[1], b2 = _matrixB[2], b3 = _matrixB[3], b4 = _matrixB[4], b5 = _matrixB[5], b6 = _matrixB[6], b7 = _matrixB[7], b8 = _matrixB[8];
    return [
        a0 * b0 + a3 * b1 + a6 * b2,
        a1 * b0 + a4 * b1 + a7 * b2,
        a2 * b0 + a5 * b1 + a8 * b2,
        a0 * b3 + a3 * b4 + a6 * b5,
        a1 * b3 + a4 * b4 + a7 * b5,
        a2 * b3 + a5 * b4 + a8 * b5,
        a0 * b6 + a3 * b7 + a6 * b8,
        a1 * b6 + a4 * b7 + a7 * b8,
        a2 * b6 + a5 * b7 + a8 * b8
    ];
}
function multiply4(matrixA, matrixB) {
    var _matrixA = _sliced_to_array(matrixA, 16), a0 = _matrixA[0], a1 = _matrixA[1], a2 = _matrixA[2], a3 = _matrixA[3], a4 = _matrixA[4], a5 = _matrixA[5], a6 = _matrixA[6], a7 = _matrixA[7], a8 = _matrixA[8], a9 = _matrixA[9], a10 = _matrixA[10], a11 = _matrixA[11], a12 = _matrixA[12], a13 = _matrixA[13], a14 = _matrixA[14], a15 = _matrixA[15], _matrixB = _sliced_to_array(matrixB, 16), b0 = _matrixB[0], b1 = _matrixB[1], b2 = _matrixB[2], b3 = _matrixB[3], b4 = _matrixB[4], b5 = _matrixB[5], b6 = _matrixB[6], b7 = _matrixB[7], b8 = _matrixB[8], b9 = _matrixB[9], b10 = _matrixB[10], b11 = _matrixB[11], b12 = _matrixB[12], b13 = _matrixB[13], b14 = _matrixB[14], b15 = _matrixB[15];
    return [
        a0 * b0 + a4 * b1 + a8 * b2 + a12 * b3,
        a1 * b0 + a5 * b1 + a9 * b2 + a13 * b3,
        a2 * b0 + a6 * b1 + a10 * b2 + a14 * b3,
        a3 * b0 + a7 * b1 + a11 * b2 + a15 * b3,
        a0 * b4 + a4 * b5 + a8 * b6 + a12 * b7,
        a1 * b4 + a5 * b5 + a9 * b6 + a13 * b7,
        a2 * b4 + a6 * b5 + a10 * b6 + a14 * b7,
        a3 * b4 + a7 * b5 + a11 * b6 + a15 * b7,
        a0 * b8 + a4 * b9 + a8 * b10 + a12 * b11,
        a1 * b8 + a5 * b9 + a9 * b10 + a13 * b11,
        a2 * b8 + a6 * b9 + a10 * b10 + a14 * b11,
        a3 * b8 + a7 * b9 + a11 * b10 + a15 * b11,
        a0 * b12 + a4 * b13 + a8 * b14 + a12 * b15,
        a1 * b12 + a5 * b13 + a9 * b14 + a13 * b15,
        a2 * b12 + a6 * b13 + a10 * b14 + a14 * b15,
        a3 * b12 + a7 * b13 + a11 * b14 + a15 * b15
    ];
}
function determinant2(matrix) {
    var _matrix = _sliced_to_array(matrix, 4), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3];
    return m0 * m3 - m2 * m1;
}
function determinant3(matrix) {
    var _matrix = _sliced_to_array(matrix, 9), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], b01 = m8 * m4 - m5 * m7, b11 = -m8 * m3 + m5 * m6, b21 = m7 * m3 - m4 * m6;
    return m0 * b01 + m1 * b11 + m2 * b21;
}
function determinant4(matrix) {
    var _matrix = _sliced_to_array(matrix, 16), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], m9 = _matrix[9], m10 = _matrix[10], m11 = _matrix[11], m12 = _matrix[12], m13 = _matrix[13], m14 = _matrix[14], m15 = _matrix[15], b00 = m0 * m5 - m1 * m4, b01 = m0 * m6 - m2 * m4, b02 = m0 * m7 - m3 * m4, b03 = m1 * m6 - m2 * m5, b04 = m1 * m7 - m3 * m5, b05 = m2 * m7 - m3 * m6, b06 = m8 * m13 - m9 * m12, b07 = m8 * m14 - m10 * m12, b08 = m8 * m15 - m11 * m12, b09 = m9 * m14 - m10 * m13, b10 = m9 * m15 - m11 * m13, b11 = m10 * m15 - m11 * m14;
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
function transpose2(matrix) {
    var _matrix = _sliced_to_array(matrix, 4), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3];
    return [
        m0,
        m2,
        m1,
        m3
    ];
}
function transpose3(matrix) {
    var _matrix = _sliced_to_array(matrix, 9), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8];
    return [
        m0,
        m3,
        m6,
        m1,
        m4,
        m7,
        m2,
        m5,
        m8
    ];
}
function transpose4(matrix) {
    var _matrix = _sliced_to_array(matrix, 16), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], m9 = _matrix[9], m10 = _matrix[10], m11 = _matrix[11], m12 = _matrix[12], m13 = _matrix[13], m14 = _matrix[14], m15 = _matrix[15];
    return [
        m0,
        m4,
        m8,
        m12,
        m1,
        m5,
        m9,
        m13,
        m2,
        m6,
        m10,
        m14,
        m3,
        m7,
        m11,
        m15
    ];
}
function invert2(matrix) {
    var _matrix = _sliced_to_array(matrix, 4), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], determinant = determinant2(matrix);
    return [
        +m3 / determinant,
        -m1 / determinant,
        -m2 / determinant,
        +m0 / determinant
    ];
}
function invert3(matrix) {
    var _matrix = _sliced_to_array(matrix, 9), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], determinant = determinant3(matrix), b01 = m8 * m4 - m5 * m7, b11 = -m8 * m3 + m5 * m6, b21 = m7 * m3 - m4 * m6;
    return [
        b01 / determinant,
        (-m8 * m1 + m2 * m7) / determinant,
        (m5 * m1 - m2 * m4) / determinant,
        b11 / determinant,
        (m8 * m0 - m2 * m6) / determinant,
        (-m5 * m0 + m2 * m3) / determinant,
        b21 / determinant,
        (-m7 * m0 + m1 * m6) / determinant,
        (m4 * m0 - m1 * m3) / determinant
    ];
}
function invert4(matrix) {
    var _matrix = _sliced_to_array(matrix, 16), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], m9 = _matrix[9], m10 = _matrix[10], m11 = _matrix[11], m12 = _matrix[12], m13 = _matrix[13], m14 = _matrix[14], m15 = _matrix[15], determinant = determinant4(matrix), b00 = m0 * m5 - m1 * m4, b01 = m0 * m6 - m2 * m4, b02 = m0 * m7 - m3 * m4, b03 = m1 * m6 - m2 * m5, b04 = m1 * m7 - m3 * m5, b05 = m2 * m7 - m3 * m6, b06 = m8 * m13 - m9 * m12, b07 = m8 * m14 - m10 * m12, b08 = m8 * m15 - m11 * m12, b09 = m9 * m14 - m10 * m13, b10 = m9 * m15 - m11 * m13, b11 = m10 * m15 - m11 * m14;
    return [
        (m5 * b11 - m6 * b10 + m7 * b09) / determinant,
        (m2 * b10 - m1 * b11 - m3 * b09) / determinant,
        (m13 * b05 - m14 * b04 + m15 * b03) / determinant,
        (m10 * b04 - m9 * b05 - m11 * b03) / determinant,
        (m6 * b08 - m4 * b11 - m7 * b07) / determinant,
        (m0 * b11 - m2 * b08 + m3 * b07) / determinant,
        (m14 * b02 - m12 * b05 - m15 * b01) / determinant,
        (m8 * b05 - m10 * b02 + m11 * b01) / determinant,
        (m4 * b10 - m5 * b08 + m7 * b06) / determinant,
        (m1 * b08 - m0 * b10 - m3 * b06) / determinant,
        (m12 * b04 - m13 * b02 + m15 * b00) / determinant,
        (m9 * b02 - m8 * b04 - m11 * b00) / determinant,
        (m5 * b07 - m4 * b09 - m6 * b06) / determinant,
        (m0 * b09 - m1 * b07 + m2 * b06) / determinant,
        (m13 * b01 - m12 * b03 - m14 * b00) / determinant,
        (m8 * b03 - m9 * b01 + m10 * b00) / determinant
    ];
}
function scale4(matrix, vector) {
    var _vector = _sliced_to_array(vector, 3), x = _vector[0], y = _vector[1], z = _vector[2], _matrix = _sliced_to_array(matrix, 16), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], m9 = _matrix[9], m10 = _matrix[10], m11 = _matrix[11], m12 = _matrix[12], m13 = _matrix[13], m14 = _matrix[14], m15 = _matrix[15];
    return [
        m0 * x,
        m1 * x,
        m2 * x,
        m3 * x,
        m4 * y,
        m5 * y,
        m6 * y,
        m7 * y,
        m8 * z,
        m9 * z,
        m10 * z,
        m11 * z,
        m12 * 1,
        m13 * 1,
        m14 * 1,
        m15 * 1
    ];
}
function rotate4(matrix, angle, vector) {
    var _normalise3 = _sliced_to_array((0, _vector.normalise3)(vector), 3), x = _normalise3[0], y = _normalise3[1], z = _normalise3[2], _matrix = _sliced_to_array(matrix, 16), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], m9 = _matrix[9], m10 = _matrix[10], m11 = _matrix[11], m12 = _matrix[12], m13 = _matrix[13], m14 = _matrix[14], m15 = _matrix[15], s = Math.sin(angle), c = Math.cos(angle), t = 1 - c, b00 = x * x * t + c, b01 = y * x * t + z * s, b02 = z * x * t - y * s, b10 = x * y * t - z * s, b11 = y * y * t + c, b12 = z * y * t + x * s, b20 = x * z * t + y * s, b21 = y * z * t - x * s, b22 = z * z * t + c;
    return [
        m0 * b00 + m4 * b01 + m8 * b02,
        m1 * b00 + m5 * b01 + m9 * b02,
        m2 * b00 + m6 * b01 + m10 * b02,
        m3 * b00 + m7 * b01 + m11 * b02,
        m0 * b10 + m4 * b11 + m8 * b12,
        m1 * b10 + m5 * b11 + m9 * b12,
        m2 * b10 + m6 * b11 + m10 * b12,
        m3 * b10 + m7 * b11 + m11 * b12,
        m0 * b20 + m4 * b21 + m8 * b22,
        m1 * b20 + m5 * b21 + m9 * b22,
        m2 * b20 + m6 * b21 + m10 * b22,
        m3 * b20 + m7 * b21 + m11 * b22,
        m12,
        m13,
        m14,
        m15
    ];
}
function translate4(matrix, vector) {
    var _vector = _sliced_to_array(vector, 3), x = _vector[0], y = _vector[1], z = _vector[2], _matrix = _sliced_to_array(matrix, 16), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], m9 = _matrix[9], m10 = _matrix[10], m11 = _matrix[11], m12 = _matrix[12], m13 = _matrix[13], m14 = _matrix[14], m15 = _matrix[15];
    return [
        m0,
        m1,
        m2,
        m3,
        m4,
        m5,
        m6,
        m7,
        m8,
        m9,
        m10,
        m11,
        m0 * x + m4 * y + m8 * z + m12,
        m1 * x + m5 * y + m9 * z + m13,
        m2 * x + m6 * y + m10 * z + m14,
        m3 * x + m7 * y + m11 * z + m15
    ];
}
function perspective4(fieldOfView, aspectRatio, zNear, zFar) {
    var f = 1 / Math.tan(fieldOfView / 2), nf = 1 / (zNear - zFar);
    return [
        f / aspectRatio,
        0,
        0,
        0,
        0,
        f,
        0,
        0,
        0,
        0,
        (zFar + zNear) * nf,
        -1,
        0,
        0,
        2 * zFar * zNear * nf,
        0
    ];
}
var _default = {
    identity2: identity2,
    identity3: identity3,
    identity4: identity4,
    multiply2: multiply2,
    multiply3: multiply3,
    multiply4: multiply4,
    determinant2: determinant2,
    determinant3: determinant3,
    determinant4: determinant4,
    transpose2: transpose2,
    transpose3: transpose3,
    transpose4: transpose4,
    invert2: invert2,
    invert3: invert3,
    invert4: invert4,
    scale4: scale4,
    rotate4: rotate4,
    translate4: translate4,
    perspective4: perspective4
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXRocy9tYXRyaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vcm1hbGlzZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTIoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMSwgMCxcbiAgICAwLCAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkzKCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsIDAsXG4gICAgMCwgMSwgMCxcbiAgICAwLCAwLCAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHk0KCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsIDAsIDAsXG4gICAgMCwgMSwgMCwgMCxcbiAgICAwLCAwLCAxLCAwLFxuICAgIDAsIDAsIDAsIDEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTIobWF0cml4QSwgbWF0cml4Qikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIsIGEzIF0gPSBtYXRyaXhBLFxuICAgICAgICBbIGIwLCBiMSwgYjIsIGIzIF0gPSBtYXRyaXhCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiBiMCArIGEyICogYjEsXG4gICAgYTEgKiBiMCArIGEzICogYjEsXG5cbiAgICBhMCAqIGIyICsgYTIgKiBiMyxcbiAgICBhMSAqIGIyICsgYTMgKiBiMyxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5MyhtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCBdID0gbWF0cml4QSxcbiAgICAgICAgWyBiMCwgYjEsIGIyLCBiMywgYjQsIGI1LCBiNiwgYjcsIGI4IF0gPSBtYXRyaXhCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiBiMCArIGEzICogYjEgKyBhNiAqIGIyLFxuICAgIGExICogYjAgKyBhNCAqIGIxICsgYTcgKiBiMixcbiAgICBhMiAqIGIwICsgYTUgKiBiMSArIGE4ICogYjIsXG5cbiAgICBhMCAqIGIzICsgYTMgKiBiNCArIGE2ICogYjUsXG4gICAgYTEgKiBiMyArIGE0ICogYjQgKyBhNyAqIGI1LFxuICAgIGEyICogYjMgKyBhNSAqIGI0ICsgYTggKiBiNSxcblxuICAgIGEwICogYjYgKyBhMyAqIGI3ICsgYTYgKiBiOCxcbiAgICBhMSAqIGI2ICsgYTQgKiBiNyArIGE3ICogYjgsXG4gICAgYTIgKiBiNiArIGE1ICogYjcgKyBhOCAqIGI4LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHk0KG1hdHJpeEEsIG1hdHJpeEIpIHtcbiAgY29uc3QgIFsgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCwgYTExLCBhMTIsIGExMywgYTE0LCBhMTUgXSA9IG1hdHJpeEEsXG4gICAgICAgICBbIGIwLCBiMSwgYjIsIGIzLCBiNCwgYjUsIGI2LCBiNywgYjgsIGI5LCBiMTAsIGIxMSwgYjEyLCBiMTMsIGIxNCwgYjE1IF0gPSBtYXRyaXhCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiAgYjAgKyAgYTQgKiAgYjEgKyAgYTggKiAgYjIgKyBhMTIgKiAgYjMsXG4gICAgYTEgKiAgYjAgKyAgYTUgKiAgYjEgKyAgYTkgKiAgYjIgKyBhMTMgKiAgYjMsXG4gICAgYTIgKiAgYjAgKyAgYTYgKiAgYjEgKyBhMTAgKiAgYjIgKyBhMTQgKiAgYjMsXG4gICAgYTMgKiAgYjAgKyAgYTcgKiAgYjEgKyBhMTEgKiAgYjIgKyBhMTUgKiAgYjMsXG5cbiAgICBhMCAqICBiNCArICBhNCAqICBiNSArICBhOCAqICBiNiArIGExMiAqICBiNyxcbiAgICBhMSAqICBiNCArICBhNSAqICBiNSArICBhOSAqICBiNiArIGExMyAqICBiNyxcbiAgICBhMiAqICBiNCArICBhNiAqICBiNSArIGExMCAqICBiNiArIGExNCAqICBiNyxcbiAgICBhMyAqICBiNCArICBhNyAqICBiNSArIGExMSAqICBiNiArIGExNSAqICBiNyxcblxuICAgIGEwICogIGI4ICsgIGE0ICogIGI5ICsgIGE4ICogYjEwICsgYTEyICogYjExLFxuICAgIGExICogIGI4ICsgIGE1ICogIGI5ICsgIGE5ICogYjEwICsgYTEzICogYjExLFxuICAgIGEyICogIGI4ICsgIGE2ICogIGI5ICsgYTEwICogYjEwICsgYTE0ICogYjExLFxuICAgIGEzICogIGI4ICsgIGE3ICogIGI5ICsgYTExICogYjEwICsgYTE1ICogYjExLFxuXG4gICAgYTAgKiBiMTIgKyAgYTQgKiBiMTMgKyAgYTggKiBiMTQgKyBhMTIgKiBiMTUsXG4gICAgYTEgKiBiMTIgKyAgYTUgKiBiMTMgKyAgYTkgKiBiMTQgKyBhMTMgKiBiMTUsXG4gICAgYTIgKiBiMTIgKyAgYTYgKiBiMTMgKyBhMTAgKiBiMTQgKyBhMTQgKiBiMTUsXG4gICAgYTMgKiBiMTIgKyAgYTcgKiBiMTMgKyBhMTEgKiBiMTQgKyBhMTUgKiBiMTUsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmFudDIobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMgXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKCBtMCAqIG0zIC0gbTIgKiBtMSApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQzKG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTggXSA9IG1hdHJpeCxcblxuICAgICAgICBiMDEgPSAgbTggKiBtNCAtIG01ICogbTcsXG4gICAgICAgIGIxMSA9IC1tOCAqIG0zICsgbTUgKiBtNixcbiAgICAgICAgYjIxID0gIG03ICogbTMgLSBtNCAqIG02O1xuXG4gIHJldHVybiAoIG0wICogYjAxICsgbTEgKiBiMTEgKyBtMiAqIGIyMSApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQ0KG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTgsIG05LCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0xNCwgbTE1IF0gPSBtYXRyaXgsXG5cbiAgICAgICAgYjAwID0gbTAgKiBtNSAtIG0xICogbTQsXG4gICAgICAgIGIwMSA9IG0wICogbTYgLSBtMiAqIG00LFxuICAgICAgICBiMDIgPSBtMCAqIG03IC0gbTMgKiBtNCxcbiAgICAgICAgYjAzID0gbTEgKiBtNiAtIG0yICogbTUsXG4gICAgICAgIGIwNCA9IG0xICogbTcgLSBtMyAqIG01LFxuICAgICAgICBiMDUgPSBtMiAqIG03IC0gbTMgKiBtNixcbiAgICAgICAgYjA2ID0gbTggKiBtMTMgLSBtOSAqIG0xMixcbiAgICAgICAgYjA3ID0gbTggKiBtMTQgLSBtMTAgKiBtMTIsXG4gICAgICAgIGIwOCA9IG04ICogbTE1IC0gbTExICogbTEyLFxuICAgICAgICBiMDkgPSBtOSAqIG0xNCAtIG0xMCAqIG0xMyxcbiAgICAgICAgYjEwID0gbTkgKiBtMTUgLSBtMTEgKiBtMTMsXG4gICAgICAgIGIxMSA9IG0xMCAqIG0xNSAtIG0xMSAqIG0xNDtcblxuICByZXR1cm4gKCBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDYgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZTIobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMgXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgIG0wLCBtMixcbiAgICBtMSwgbTMsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2UzKG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTggXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgIG0wLCBtMywgbTYsXG4gICAgbTEsIG00LCBtNyxcbiAgICBtMiwgbTUsIG04LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlNChtYXRyaXgpIHtcbiAgY29uc3QgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04LCBtOSwgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMTQsIG0xNSBdID0gbWF0cml4O1xuXG4gIHJldHVybiAoW1xuXG4gICAgbTAsIG00LCBtOCwgbTEyLFxuICAgIG0xLCBtNSwgbTksIG0xMyxcbiAgICBtMiwgbTYsIG0xMCwgbTE0LFxuICAgIG0zLCBtNywgbTExLCBtMTUsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQyKG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zIF0gPSBtYXRyaXgsXG5cbiAgICAgICAgZGV0ZXJtaW5hbnQgPSBkZXRlcm1pbmFudDIobWF0cml4KTtcblxuICByZXR1cm4gKFtcblxuICAgICttMyAvIGRldGVybWluYW50LCAtbTEgLyBkZXRlcm1pbmFudCxcbiAgICAtbTIgLyBkZXRlcm1pbmFudCwgK20wIC8gZGV0ZXJtaW5hbnQsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQzKG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTggXSA9IG1hdHJpeCxcblxuICAgICAgICBkZXRlcm1pbmFudCA9IGRldGVybWluYW50MyhtYXRyaXgpLFxuXG4gICAgICAgIGIwMSA9ICBtOCAqIG00IC0gbTUgKiBtNyxcbiAgICAgICAgYjExID0gLW04ICogbTMgKyBtNSAqIG02LFxuICAgICAgICBiMjEgPSAgbTcgKiBtMyAtIG00ICogbTY7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBiMDEgLyBkZXRlcm1pbmFudCwgKC1tOCAqIG0xICsgbTIgKiBtNykgLyBkZXRlcm1pbmFudCwgKCBtNSAqIG0xIC0gbTIgKiBtNCkgLyBkZXRlcm1pbmFudCxcbiAgICBiMTEgLyBkZXRlcm1pbmFudCwgKCBtOCAqIG0wIC0gbTIgKiBtNikgLyBkZXRlcm1pbmFudCwgKC1tNSAqIG0wICsgbTIgKiBtMykgLyBkZXRlcm1pbmFudCxcbiAgICBiMjEgLyBkZXRlcm1pbmFudCwgKC1tNyAqIG0wICsgbTEgKiBtNikgLyBkZXRlcm1pbmFudCwgKCBtNCAqIG0wIC0gbTEgKiBtMykgLyBkZXRlcm1pbmFudCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVydDQobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeCxcblxuICAgICAgICBkZXRlcm1pbmFudCA9IGRldGVybWluYW50NChtYXRyaXgpLFxuXG4gICAgICAgIGIwMCA9IG0wICogbTUgLSBtMSAqIG00LFxuICAgICAgICBiMDEgPSBtMCAqIG02IC0gbTIgKiBtNCxcbiAgICAgICAgYjAyID0gbTAgKiBtNyAtIG0zICogbTQsXG4gICAgICAgIGIwMyA9IG0xICogbTYgLSBtMiAqIG01LFxuICAgICAgICBiMDQgPSBtMSAqIG03IC0gbTMgKiBtNSxcbiAgICAgICAgYjA1ID0gbTIgKiBtNyAtIG0zICogbTYsXG4gICAgICAgIGIwNiA9IG04ICogbTEzIC0gbTkgKiBtMTIsXG4gICAgICAgIGIwNyA9IG04ICogbTE0IC0gbTEwICogbTEyLFxuICAgICAgICBiMDggPSBtOCAqIG0xNSAtIG0xMSAqIG0xMixcbiAgICAgICAgYjA5ID0gbTkgKiBtMTQgLSBtMTAgKiBtMTMsXG4gICAgICAgIGIxMCA9IG05ICogbTE1IC0gbTExICogbTEzLFxuICAgICAgICBiMTEgPSBtMTAgKiBtMTUgLSBtMTEgKiBtMTQ7XG5cbiAgcmV0dXJuIChbXG5cbiAgICAobTUgKiBiMTEgLSBtNiAqIGIxMCArIG03ICogYjA5KSAvIGRldGVybWluYW50LCAobTIgKiBiMTAgLSBtMSAqIGIxMSAtIG0zICogYjA5KSAvIGRldGVybWluYW50LCAobTEzICogYjA1IC0gbTE0ICogYjA0ICsgbTE1ICogYjAzKSAvIGRldGVybWluYW50LCAobTEwICogYjA0IC0gbTkgKiBiMDUgLSBtMTEgKiBiMDMpIC8gZGV0ZXJtaW5hbnQsXG4gICAgKG02ICogYjA4IC0gbTQgKiBiMTEgLSBtNyAqIGIwNykgLyBkZXRlcm1pbmFudCwgKG0wICogYjExIC0gbTIgKiBiMDggKyBtMyAqIGIwNykgLyBkZXRlcm1pbmFudCwgKG0xNCAqIGIwMiAtIG0xMiAqIGIwNSAtIG0xNSAqIGIwMSkgLyBkZXRlcm1pbmFudCwgKG04ICogYjA1IC0gbTEwICogYjAyICsgbTExICogYjAxKSAvIGRldGVybWluYW50LFxuICAgIChtNCAqIGIxMCAtIG01ICogYjA4ICsgbTcgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMSAqIGIwOCAtIG0wICogYjEwIC0gbTMgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMTIgKiBiMDQgLSBtMTMgKiBiMDIgKyBtMTUgKiBiMDApIC8gZGV0ZXJtaW5hbnQsIChtOSAqIGIwMiAtIG04ICogYjA0IC0gbTExICogYjAwKSAvIGRldGVybWluYW50LFxuICAgIChtNSAqIGIwNyAtIG00ICogYjA5IC0gbTYgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMCAqIGIwOSAtIG0xICogYjA3ICsgbTIgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMTMgKiBiMDEgLSBtMTIgKiBiMDMgLSBtMTQgKiBiMDApIC8gZGV0ZXJtaW5hbnQsIChtOCAqIGIwMyAtIG05ICogYjAxICsgbTEwICogYjAwKSAvIGRldGVybWluYW50LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGU0KG1hdHJpeCwgdmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgIG0wICogeCwgbTEgKiB4LCBtMiAqIHgsIG0zICogeCxcbiAgICBtNCAqIHksIG01ICogeSwgbTYgKiB5LCBtNyAqIHksXG4gICAgbTggKiB6LCBtOSAqIHosIG0xMCAqIHosIG0xMSAqIHosXG4gICAgbTEyICogMSwgbTEzICogMSwgbTE0ICogMSwgbTE1ICogMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZTQobWF0cml4LCBhbmdsZSwgdmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gbm9ybWFsaXNlMyh2ZWN0b3IpLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeCxcblxuICAgICAgICBzID0gTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICBjID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICB0ID0gMSAtIGMsXG5cbiAgICAgICAgYjAwID0geCAqIHggKiB0ICsgYyxcbiAgICAgICAgYjAxID0geSAqIHggKiB0ICsgeiAqIHMsXG4gICAgICAgIGIwMiA9IHogKiB4ICogdCAtIHkgKiBzLFxuICAgICAgICBiMTAgPSB4ICogeSAqIHQgLSB6ICogcyxcbiAgICAgICAgYjExID0geSAqIHkgKiB0ICsgYyxcbiAgICAgICAgYjEyID0geiAqIHkgKiB0ICsgeCAqIHMsXG4gICAgICAgIGIyMCA9IHggKiB6ICogdCArIHkgKiBzLFxuICAgICAgICBiMjEgPSB5ICogeiAqIHQgLSB4ICogcyxcbiAgICAgICAgYjIyID0geiAqIHogKiB0ICsgYztcblxuICByZXR1cm4gKFtcblxuICAgIG0wICogYjAwICsgbTQgKiBiMDEgKyBtOCAqIGIwMiwgbTEgKiBiMDAgKyBtNSAqIGIwMSArIG05ICogYjAyLCBtMiAqIGIwMCArIG02ICogYjAxICsgbTEwICogYjAyLCBtMyAqIGIwMCArIG03ICogYjAxICsgbTExICogYjAyLFxuICAgIG0wICogYjEwICsgbTQgKiBiMTEgKyBtOCAqIGIxMiwgbTEgKiBiMTAgKyBtNSAqIGIxMSArIG05ICogYjEyLCBtMiAqIGIxMCArIG02ICogYjExICsgbTEwICogYjEyLCBtMyAqIGIxMCArIG03ICogYjExICsgbTExICogYjEyLFxuICAgIG0wICogYjIwICsgbTQgKiBiMjEgKyBtOCAqIGIyMiwgbTEgKiBiMjAgKyBtNSAqIGIyMSArIG05ICogYjIyLCBtMiAqIGIyMCArIG02ICogYjIxICsgbTEwICogYjIyLCBtMyAqIGIyMCArIG03ICogYjIxICsgbTExICogYjIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xMiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTE0LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTE1LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlNChtYXRyaXgsIHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcixcblxuICAgICAgICBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTgsIG05LCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0xNCwgbTE1IF0gPSBtYXRyaXg7XG5cbiAgcmV0dXJuIChbXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTQsICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtNSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtNiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtNyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTgsICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtOSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xMSxcbiAgICBtMCAqIHggKyBtNCAqIHkgKyBtOCAqIHogKyBtMTIsIG0xICogeCArIG01ICogeSArIG05ICogeiArIG0xMywgbTIgKiB4ICsgbTYgKiB5ICsgbTEwICogeiArIG0xNCwgbTMgKiB4ICsgbTcgKiB5ICsgbTExICogeiArIG0xNSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlNChmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKSB7XG4gIGNvbnN0IGYgPSAxIC8gTWF0aC50YW4oZmllbGRPZlZpZXcgLyAyKSxcbiAgICAgICAgbmYgPSAxIC8gKHpOZWFyIC0gekZhcik7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBmIC8gYXNwZWN0UmF0aW8sIDAsIDAsICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgIDAsICAgICAgICAgICAgICAgZiwgMCwgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgMCwgICAgICAgICAgICAgICAwLCAoekZhciArIHpOZWFyKSAqIG5mLCAgICAtMSxcbiAgICAwLCAgICAgICAgICAgICAgIDAsICgyICogekZhciAqIHpOZWFyKSAqIG5mLCAwLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlkZW50aXR5MixcbiAgaWRlbnRpdHkzLFxuICBpZGVudGl0eTQsXG4gIG11bHRpcGx5MixcbiAgbXVsdGlwbHkzLFxuICBtdWx0aXBseTQsXG4gIGRldGVybWluYW50MixcbiAgZGV0ZXJtaW5hbnQzLFxuICBkZXRlcm1pbmFudDQsXG4gIHRyYW5zcG9zZTIsXG4gIHRyYW5zcG9zZTMsXG4gIHRyYW5zcG9zZTQsXG4gIGludmVydDIsXG4gIGludmVydDMsXG4gIGludmVydDQsXG4gIHNjYWxlNCxcbiAgcm90YXRlNCxcbiAgdHJhbnNsYXRlNCxcbiAgcGVyc3BlY3RpdmU0XG59O1xuIl0sIm5hbWVzIjpbImRldGVybWluYW50MiIsImRldGVybWluYW50MyIsImRldGVybWluYW50NCIsImlkZW50aXR5MiIsImlkZW50aXR5MyIsImlkZW50aXR5NCIsImludmVydDIiLCJpbnZlcnQzIiwiaW52ZXJ0NCIsIm11bHRpcGx5MiIsIm11bHRpcGx5MyIsIm11bHRpcGx5NCIsInBlcnNwZWN0aXZlNCIsInJvdGF0ZTQiLCJzY2FsZTQiLCJ0cmFuc2xhdGU0IiwidHJhbnNwb3NlMiIsInRyYW5zcG9zZTMiLCJ0cmFuc3Bvc2U0IiwibWF0cml4QSIsIm1hdHJpeEIiLCJhMCIsImExIiwiYTIiLCJhMyIsImIwIiwiYjEiLCJiMiIsImIzIiwiYTQiLCJhNSIsImE2IiwiYTciLCJhOCIsImI0IiwiYjUiLCJiNiIsImI3IiwiYjgiLCJhOSIsImExMCIsImExMSIsImExMiIsImExMyIsImExNCIsImExNSIsImI5IiwiYjEwIiwiYjExIiwiYjEyIiwiYjEzIiwiYjE0IiwiYjE1IiwibWF0cml4IiwibTAiLCJtMSIsIm0yIiwibTMiLCJtNCIsIm01IiwibTYiLCJtNyIsIm04IiwiYjAxIiwiYjIxIiwibTkiLCJtMTAiLCJtMTEiLCJtMTIiLCJtMTMiLCJtMTQiLCJtMTUiLCJiMDAiLCJiMDIiLCJiMDMiLCJiMDQiLCJiMDUiLCJiMDYiLCJiMDciLCJiMDgiLCJiMDkiLCJkZXRlcm1pbmFudCIsInZlY3RvciIsIngiLCJ5IiwieiIsImFuZ2xlIiwibm9ybWFsaXNlMyIsInMiLCJNYXRoIiwic2luIiwiYyIsImNvcyIsInQiLCJiMjAiLCJiMjIiLCJmaWVsZE9mVmlldyIsImFzcGVjdFJhdGlvIiwiek5lYXIiLCJ6RmFyIiwiZiIsInRhbiIsIm5mIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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