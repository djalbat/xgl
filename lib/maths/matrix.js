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
    get default () {
        return _default;
    },
    get determinant2 () {
        return determinant2;
    },
    get determinant3 () {
        return determinant3;
    },
    get determinant4 () {
        return determinant4;
    },
    get identity2 () {
        return identity2;
    },
    get identity3 () {
        return identity3;
    },
    get identity4 () {
        return identity4;
    },
    get invert2 () {
        return invert2;
    },
    get invert3 () {
        return invert3;
    },
    get invert4 () {
        return invert4;
    },
    get multiply2 () {
        return multiply2;
    },
    get multiply3 () {
        return multiply3;
    },
    get multiply4 () {
        return multiply4;
    },
    get perspective4 () {
        return perspective4;
    },
    get rotate4 () {
        return rotate4;
    },
    get scale4 () {
        return scale4;
    },
    get translate4 () {
        return translate4;
    },
    get transpose2 () {
        return transpose2;
    },
    get transpose3 () {
        return transpose3;
    },
    get transpose4 () {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXRocy9tYXRyaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vcm1hbGlzZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTIoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMSwgMCxcbiAgICAwLCAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkzKCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsIDAsXG4gICAgMCwgMSwgMCxcbiAgICAwLCAwLCAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHk0KCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsIDAsIDAsXG4gICAgMCwgMSwgMCwgMCxcbiAgICAwLCAwLCAxLCAwLFxuICAgIDAsIDAsIDAsIDEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTIobWF0cml4QSwgbWF0cml4Qikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIsIGEzIF0gPSBtYXRyaXhBLFxuICAgICAgICBbIGIwLCBiMSwgYjIsIGIzIF0gPSBtYXRyaXhCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiBiMCArIGEyICogYjEsXG4gICAgYTEgKiBiMCArIGEzICogYjEsXG5cbiAgICBhMCAqIGIyICsgYTIgKiBiMyxcbiAgICBhMSAqIGIyICsgYTMgKiBiMyxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5MyhtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCBdID0gbWF0cml4QSxcbiAgICAgICAgWyBiMCwgYjEsIGIyLCBiMywgYjQsIGI1LCBiNiwgYjcsIGI4IF0gPSBtYXRyaXhCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiBiMCArIGEzICogYjEgKyBhNiAqIGIyLFxuICAgIGExICogYjAgKyBhNCAqIGIxICsgYTcgKiBiMixcbiAgICBhMiAqIGIwICsgYTUgKiBiMSArIGE4ICogYjIsXG5cbiAgICBhMCAqIGIzICsgYTMgKiBiNCArIGE2ICogYjUsXG4gICAgYTEgKiBiMyArIGE0ICogYjQgKyBhNyAqIGI1LFxuICAgIGEyICogYjMgKyBhNSAqIGI0ICsgYTggKiBiNSxcblxuICAgIGEwICogYjYgKyBhMyAqIGI3ICsgYTYgKiBiOCxcbiAgICBhMSAqIGI2ICsgYTQgKiBiNyArIGE3ICogYjgsXG4gICAgYTIgKiBiNiArIGE1ICogYjcgKyBhOCAqIGI4LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHk0KG1hdHJpeEEsIG1hdHJpeEIpIHtcbiAgY29uc3QgIFsgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCwgYTExLCBhMTIsIGExMywgYTE0LCBhMTUgXSA9IG1hdHJpeEEsXG4gICAgICAgICBbIGIwLCBiMSwgYjIsIGIzLCBiNCwgYjUsIGI2LCBiNywgYjgsIGI5LCBiMTAsIGIxMSwgYjEyLCBiMTMsIGIxNCwgYjE1IF0gPSBtYXRyaXhCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiAgYjAgKyAgYTQgKiAgYjEgKyAgYTggKiAgYjIgKyBhMTIgKiAgYjMsXG4gICAgYTEgKiAgYjAgKyAgYTUgKiAgYjEgKyAgYTkgKiAgYjIgKyBhMTMgKiAgYjMsXG4gICAgYTIgKiAgYjAgKyAgYTYgKiAgYjEgKyBhMTAgKiAgYjIgKyBhMTQgKiAgYjMsXG4gICAgYTMgKiAgYjAgKyAgYTcgKiAgYjEgKyBhMTEgKiAgYjIgKyBhMTUgKiAgYjMsXG5cbiAgICBhMCAqICBiNCArICBhNCAqICBiNSArICBhOCAqICBiNiArIGExMiAqICBiNyxcbiAgICBhMSAqICBiNCArICBhNSAqICBiNSArICBhOSAqICBiNiArIGExMyAqICBiNyxcbiAgICBhMiAqICBiNCArICBhNiAqICBiNSArIGExMCAqICBiNiArIGExNCAqICBiNyxcbiAgICBhMyAqICBiNCArICBhNyAqICBiNSArIGExMSAqICBiNiArIGExNSAqICBiNyxcblxuICAgIGEwICogIGI4ICsgIGE0ICogIGI5ICsgIGE4ICogYjEwICsgYTEyICogYjExLFxuICAgIGExICogIGI4ICsgIGE1ICogIGI5ICsgIGE5ICogYjEwICsgYTEzICogYjExLFxuICAgIGEyICogIGI4ICsgIGE2ICogIGI5ICsgYTEwICogYjEwICsgYTE0ICogYjExLFxuICAgIGEzICogIGI4ICsgIGE3ICogIGI5ICsgYTExICogYjEwICsgYTE1ICogYjExLFxuXG4gICAgYTAgKiBiMTIgKyAgYTQgKiBiMTMgKyAgYTggKiBiMTQgKyBhMTIgKiBiMTUsXG4gICAgYTEgKiBiMTIgKyAgYTUgKiBiMTMgKyAgYTkgKiBiMTQgKyBhMTMgKiBiMTUsXG4gICAgYTIgKiBiMTIgKyAgYTYgKiBiMTMgKyBhMTAgKiBiMTQgKyBhMTQgKiBiMTUsXG4gICAgYTMgKiBiMTIgKyAgYTcgKiBiMTMgKyBhMTEgKiBiMTQgKyBhMTUgKiBiMTUsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmFudDIobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMgXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKCBtMCAqIG0zIC0gbTIgKiBtMSApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQzKG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTggXSA9IG1hdHJpeCxcblxuICAgICAgICBiMDEgPSAgbTggKiBtNCAtIG01ICogbTcsXG4gICAgICAgIGIxMSA9IC1tOCAqIG0zICsgbTUgKiBtNixcbiAgICAgICAgYjIxID0gIG03ICogbTMgLSBtNCAqIG02O1xuXG4gIHJldHVybiAoIG0wICogYjAxICsgbTEgKiBiMTEgKyBtMiAqIGIyMSApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQ0KG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTgsIG05LCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0xNCwgbTE1IF0gPSBtYXRyaXgsXG5cbiAgICAgICAgYjAwID0gbTAgKiBtNSAtIG0xICogbTQsXG4gICAgICAgIGIwMSA9IG0wICogbTYgLSBtMiAqIG00LFxuICAgICAgICBiMDIgPSBtMCAqIG03IC0gbTMgKiBtNCxcbiAgICAgICAgYjAzID0gbTEgKiBtNiAtIG0yICogbTUsXG4gICAgICAgIGIwNCA9IG0xICogbTcgLSBtMyAqIG01LFxuICAgICAgICBiMDUgPSBtMiAqIG03IC0gbTMgKiBtNixcbiAgICAgICAgYjA2ID0gbTggKiBtMTMgLSBtOSAqIG0xMixcbiAgICAgICAgYjA3ID0gbTggKiBtMTQgLSBtMTAgKiBtMTIsXG4gICAgICAgIGIwOCA9IG04ICogbTE1IC0gbTExICogbTEyLFxuICAgICAgICBiMDkgPSBtOSAqIG0xNCAtIG0xMCAqIG0xMyxcbiAgICAgICAgYjEwID0gbTkgKiBtMTUgLSBtMTEgKiBtMTMsXG4gICAgICAgIGIxMSA9IG0xMCAqIG0xNSAtIG0xMSAqIG0xNDtcblxuICByZXR1cm4gKCBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDYgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZTIobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMgXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgIG0wLCBtMixcbiAgICBtMSwgbTMsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2UzKG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTggXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgIG0wLCBtMywgbTYsXG4gICAgbTEsIG00LCBtNyxcbiAgICBtMiwgbTUsIG04LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlNChtYXRyaXgpIHtcbiAgY29uc3QgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04LCBtOSwgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMTQsIG0xNSBdID0gbWF0cml4O1xuXG4gIHJldHVybiAoW1xuXG4gICAgbTAsIG00LCBtOCwgbTEyLFxuICAgIG0xLCBtNSwgbTksIG0xMyxcbiAgICBtMiwgbTYsIG0xMCwgbTE0LFxuICAgIG0zLCBtNywgbTExLCBtMTUsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQyKG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zIF0gPSBtYXRyaXgsXG5cbiAgICAgICAgZGV0ZXJtaW5hbnQgPSBkZXRlcm1pbmFudDIobWF0cml4KTtcblxuICByZXR1cm4gKFtcblxuICAgICttMyAvIGRldGVybWluYW50LCAtbTEgLyBkZXRlcm1pbmFudCxcbiAgICAtbTIgLyBkZXRlcm1pbmFudCwgK20wIC8gZGV0ZXJtaW5hbnQsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQzKG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTggXSA9IG1hdHJpeCxcblxuICAgICAgICBkZXRlcm1pbmFudCA9IGRldGVybWluYW50MyhtYXRyaXgpLFxuXG4gICAgICAgIGIwMSA9ICBtOCAqIG00IC0gbTUgKiBtNyxcbiAgICAgICAgYjExID0gLW04ICogbTMgKyBtNSAqIG02LFxuICAgICAgICBiMjEgPSAgbTcgKiBtMyAtIG00ICogbTY7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBiMDEgLyBkZXRlcm1pbmFudCwgKC1tOCAqIG0xICsgbTIgKiBtNykgLyBkZXRlcm1pbmFudCwgKCBtNSAqIG0xIC0gbTIgKiBtNCkgLyBkZXRlcm1pbmFudCxcbiAgICBiMTEgLyBkZXRlcm1pbmFudCwgKCBtOCAqIG0wIC0gbTIgKiBtNikgLyBkZXRlcm1pbmFudCwgKC1tNSAqIG0wICsgbTIgKiBtMykgLyBkZXRlcm1pbmFudCxcbiAgICBiMjEgLyBkZXRlcm1pbmFudCwgKC1tNyAqIG0wICsgbTEgKiBtNikgLyBkZXRlcm1pbmFudCwgKCBtNCAqIG0wIC0gbTEgKiBtMykgLyBkZXRlcm1pbmFudCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVydDQobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeCxcblxuICAgICAgICBkZXRlcm1pbmFudCA9IGRldGVybWluYW50NChtYXRyaXgpLFxuXG4gICAgICAgIGIwMCA9IG0wICogbTUgLSBtMSAqIG00LFxuICAgICAgICBiMDEgPSBtMCAqIG02IC0gbTIgKiBtNCxcbiAgICAgICAgYjAyID0gbTAgKiBtNyAtIG0zICogbTQsXG4gICAgICAgIGIwMyA9IG0xICogbTYgLSBtMiAqIG01LFxuICAgICAgICBiMDQgPSBtMSAqIG03IC0gbTMgKiBtNSxcbiAgICAgICAgYjA1ID0gbTIgKiBtNyAtIG0zICogbTYsXG4gICAgICAgIGIwNiA9IG04ICogbTEzIC0gbTkgKiBtMTIsXG4gICAgICAgIGIwNyA9IG04ICogbTE0IC0gbTEwICogbTEyLFxuICAgICAgICBiMDggPSBtOCAqIG0xNSAtIG0xMSAqIG0xMixcbiAgICAgICAgYjA5ID0gbTkgKiBtMTQgLSBtMTAgKiBtMTMsXG4gICAgICAgIGIxMCA9IG05ICogbTE1IC0gbTExICogbTEzLFxuICAgICAgICBiMTEgPSBtMTAgKiBtMTUgLSBtMTEgKiBtMTQ7XG5cbiAgcmV0dXJuIChbXG5cbiAgICAobTUgKiBiMTEgLSBtNiAqIGIxMCArIG03ICogYjA5KSAvIGRldGVybWluYW50LCAobTIgKiBiMTAgLSBtMSAqIGIxMSAtIG0zICogYjA5KSAvIGRldGVybWluYW50LCAobTEzICogYjA1IC0gbTE0ICogYjA0ICsgbTE1ICogYjAzKSAvIGRldGVybWluYW50LCAobTEwICogYjA0IC0gbTkgKiBiMDUgLSBtMTEgKiBiMDMpIC8gZGV0ZXJtaW5hbnQsXG4gICAgKG02ICogYjA4IC0gbTQgKiBiMTEgLSBtNyAqIGIwNykgLyBkZXRlcm1pbmFudCwgKG0wICogYjExIC0gbTIgKiBiMDggKyBtMyAqIGIwNykgLyBkZXRlcm1pbmFudCwgKG0xNCAqIGIwMiAtIG0xMiAqIGIwNSAtIG0xNSAqIGIwMSkgLyBkZXRlcm1pbmFudCwgKG04ICogYjA1IC0gbTEwICogYjAyICsgbTExICogYjAxKSAvIGRldGVybWluYW50LFxuICAgIChtNCAqIGIxMCAtIG01ICogYjA4ICsgbTcgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMSAqIGIwOCAtIG0wICogYjEwIC0gbTMgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMTIgKiBiMDQgLSBtMTMgKiBiMDIgKyBtMTUgKiBiMDApIC8gZGV0ZXJtaW5hbnQsIChtOSAqIGIwMiAtIG04ICogYjA0IC0gbTExICogYjAwKSAvIGRldGVybWluYW50LFxuICAgIChtNSAqIGIwNyAtIG00ICogYjA5IC0gbTYgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMCAqIGIwOSAtIG0xICogYjA3ICsgbTIgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMTMgKiBiMDEgLSBtMTIgKiBiMDMgLSBtMTQgKiBiMDApIC8gZGV0ZXJtaW5hbnQsIChtOCAqIGIwMyAtIG05ICogYjAxICsgbTEwICogYjAwKSAvIGRldGVybWluYW50LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGU0KG1hdHJpeCwgdmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgIG0wICogeCwgbTEgKiB4LCBtMiAqIHgsIG0zICogeCxcbiAgICBtNCAqIHksIG01ICogeSwgbTYgKiB5LCBtNyAqIHksXG4gICAgbTggKiB6LCBtOSAqIHosIG0xMCAqIHosIG0xMSAqIHosXG4gICAgbTEyICogMSwgbTEzICogMSwgbTE0ICogMSwgbTE1ICogMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZTQobWF0cml4LCBhbmdsZSwgdmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gbm9ybWFsaXNlMyh2ZWN0b3IpLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeCxcblxuICAgICAgICBzID0gTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICBjID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICB0ID0gMSAtIGMsXG5cbiAgICAgICAgYjAwID0geCAqIHggKiB0ICsgYyxcbiAgICAgICAgYjAxID0geSAqIHggKiB0ICsgeiAqIHMsXG4gICAgICAgIGIwMiA9IHogKiB4ICogdCAtIHkgKiBzLFxuICAgICAgICBiMTAgPSB4ICogeSAqIHQgLSB6ICogcyxcbiAgICAgICAgYjExID0geSAqIHkgKiB0ICsgYyxcbiAgICAgICAgYjEyID0geiAqIHkgKiB0ICsgeCAqIHMsXG4gICAgICAgIGIyMCA9IHggKiB6ICogdCArIHkgKiBzLFxuICAgICAgICBiMjEgPSB5ICogeiAqIHQgLSB4ICogcyxcbiAgICAgICAgYjIyID0geiAqIHogKiB0ICsgYztcblxuICByZXR1cm4gKFtcblxuICAgIG0wICogYjAwICsgbTQgKiBiMDEgKyBtOCAqIGIwMiwgbTEgKiBiMDAgKyBtNSAqIGIwMSArIG05ICogYjAyLCBtMiAqIGIwMCArIG02ICogYjAxICsgbTEwICogYjAyLCBtMyAqIGIwMCArIG03ICogYjAxICsgbTExICogYjAyLFxuICAgIG0wICogYjEwICsgbTQgKiBiMTEgKyBtOCAqIGIxMiwgbTEgKiBiMTAgKyBtNSAqIGIxMSArIG05ICogYjEyLCBtMiAqIGIxMCArIG02ICogYjExICsgbTEwICogYjEyLCBtMyAqIGIxMCArIG03ICogYjExICsgbTExICogYjEyLFxuICAgIG0wICogYjIwICsgbTQgKiBiMjEgKyBtOCAqIGIyMiwgbTEgKiBiMjAgKyBtNSAqIGIyMSArIG05ICogYjIyLCBtMiAqIGIyMCArIG02ICogYjIxICsgbTEwICogYjIyLCBtMyAqIGIyMCArIG03ICogYjIxICsgbTExICogYjIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xMiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTE0LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTE1LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlNChtYXRyaXgsIHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcixcblxuICAgICAgICBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTgsIG05LCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0xNCwgbTE1IF0gPSBtYXRyaXg7XG5cbiAgcmV0dXJuIChbXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTQsICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtNSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtNiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtNyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTgsICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtOSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xMSxcbiAgICBtMCAqIHggKyBtNCAqIHkgKyBtOCAqIHogKyBtMTIsIG0xICogeCArIG01ICogeSArIG05ICogeiArIG0xMywgbTIgKiB4ICsgbTYgKiB5ICsgbTEwICogeiArIG0xNCwgbTMgKiB4ICsgbTcgKiB5ICsgbTExICogeiArIG0xNSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlNChmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKSB7XG4gIGNvbnN0IGYgPSAxIC8gTWF0aC50YW4oZmllbGRPZlZpZXcgLyAyKSxcbiAgICAgICAgbmYgPSAxIC8gKHpOZWFyIC0gekZhcik7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBmIC8gYXNwZWN0UmF0aW8sIDAsIDAsICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgIDAsICAgICAgICAgICAgICAgZiwgMCwgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgMCwgICAgICAgICAgICAgICAwLCAoekZhciArIHpOZWFyKSAqIG5mLCAgICAtMSxcbiAgICAwLCAgICAgICAgICAgICAgIDAsICgyICogekZhciAqIHpOZWFyKSAqIG5mLCAwLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlkZW50aXR5MixcbiAgaWRlbnRpdHkzLFxuICBpZGVudGl0eTQsXG4gIG11bHRpcGx5MixcbiAgbXVsdGlwbHkzLFxuICBtdWx0aXBseTQsXG4gIGRldGVybWluYW50MixcbiAgZGV0ZXJtaW5hbnQzLFxuICBkZXRlcm1pbmFudDQsXG4gIHRyYW5zcG9zZTIsXG4gIHRyYW5zcG9zZTMsXG4gIHRyYW5zcG9zZTQsXG4gIGludmVydDIsXG4gIGludmVydDMsXG4gIGludmVydDQsXG4gIHNjYWxlNCxcbiAgcm90YXRlNCxcbiAgdHJhbnNsYXRlNCxcbiAgcGVyc3BlY3RpdmU0XG59O1xuIl0sIm5hbWVzIjpbImRldGVybWluYW50MiIsImRldGVybWluYW50MyIsImRldGVybWluYW50NCIsImlkZW50aXR5MiIsImlkZW50aXR5MyIsImlkZW50aXR5NCIsImludmVydDIiLCJpbnZlcnQzIiwiaW52ZXJ0NCIsIm11bHRpcGx5MiIsIm11bHRpcGx5MyIsIm11bHRpcGx5NCIsInBlcnNwZWN0aXZlNCIsInJvdGF0ZTQiLCJzY2FsZTQiLCJ0cmFuc2xhdGU0IiwidHJhbnNwb3NlMiIsInRyYW5zcG9zZTMiLCJ0cmFuc3Bvc2U0IiwibWF0cml4QSIsIm1hdHJpeEIiLCJhMCIsImExIiwiYTIiLCJhMyIsImIwIiwiYjEiLCJiMiIsImIzIiwiYTQiLCJhNSIsImE2IiwiYTciLCJhOCIsImI0IiwiYjUiLCJiNiIsImI3IiwiYjgiLCJhOSIsImExMCIsImExMSIsImExMiIsImExMyIsImExNCIsImExNSIsImI5IiwiYjEwIiwiYjExIiwiYjEyIiwiYjEzIiwiYjE0IiwiYjE1IiwibWF0cml4IiwibTAiLCJtMSIsIm0yIiwibTMiLCJtNCIsIm01IiwibTYiLCJtNyIsIm04IiwiYjAxIiwiYjIxIiwibTkiLCJtMTAiLCJtMTEiLCJtMTIiLCJtMTMiLCJtMTQiLCJtMTUiLCJiMDAiLCJiMDIiLCJiMDMiLCJiMDQiLCJiMDUiLCJiMDYiLCJiMDciLCJiMDgiLCJiMDkiLCJkZXRlcm1pbmFudCIsInZlY3RvciIsIngiLCJ5IiwieiIsImFuZ2xlIiwibm9ybWFsaXNlMyIsInMiLCJNYXRoIiwic2luIiwiYyIsImNvcyIsInQiLCJiMjAiLCJiMjIiLCJmaWVsZE9mVmlldyIsImFzcGVjdFJhdGlvIiwiek5lYXIiLCJ6RmFyIiwiZiIsInRhbiIsIm5mIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUE4U0E7ZUFBQTs7UUEzTWdCQTtlQUFBQTs7UUFNQUM7ZUFBQUE7O1FBVUFDO2VBQUFBOztRQS9HQUM7ZUFBQUE7O1FB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