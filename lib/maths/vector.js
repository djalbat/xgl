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
    zero2: function() {
        return zero2;
    },
    zero3: function() {
        return zero3;
    },
    zero4: function() {
        return zero4;
    },
    length2: function() {
        return length2;
    },
    length3: function() {
        return length3;
    },
    length4: function() {
        return length4;
    },
    dot2: function() {
        return dot2;
    },
    dot3: function() {
        return dot3;
    },
    dot4: function() {
        return dot4;
    },
    cross3: function() {
        return cross3;
    },
    normalise2: function() {
        return normalise2;
    },
    normalise3: function() {
        return normalise3;
    },
    normalise4: function() {
        return normalise4;
    },
    reflect2: function() {
        return reflect2;
    },
    reflect3: function() {
        return reflect3;
    },
    reflect4: function() {
        return reflect4;
    },
    truncate4: function() {
        return truncate4;
    },
    scale2: function() {
        return scale2;
    },
    scale3: function() {
        return scale3;
    },
    scale4: function() {
        return scale4;
    },
    add2: function() {
        return add2;
    },
    add3: function() {
        return add3;
    },
    add4: function() {
        return add4;
    },
    subtract2: function() {
        return subtract2;
    },
    subtract3: function() {
        return subtract3;
    },
    subtract4: function() {
        return subtract4;
    },
    transform2: function() {
        return transform2;
    },
    transform3: function() {
        return transform3;
    },
    transform4: function() {
        return transform4;
    },
    default: function() {
        return _default;
    }
});
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
function zero2() {
    return [
        0,
        0
    ];
}
function zero3() {
    return [
        0,
        0,
        0
    ];
}
function zero4() {
    return [
        0,
        0,
        0,
        0
    ];
}
function length2(vector) {
    var _vector = _sliced_to_array(vector, 2), x = _vector[0], y = _vector[1];
    return Math.sqrt(x * x + y * y);
}
function length3(vector) {
    var _vector = _sliced_to_array(vector, 3), x = _vector[0], y = _vector[1], z = _vector[2];
    return Math.sqrt(x * x + y * y + z * z);
}
function length4(vector) {
    var _vector = _sliced_to_array(vector, 4), x = _vector[0], y = _vector[1], z = _vector[2], w = _vector[3];
    return Math.sqrt(x * x + y * y + z * z + w * w);
}
function dot2(vectorA, vectorB) {
    var _vectorA = _sliced_to_array(vectorA, 2), a0 = _vectorA[0], a1 = _vectorA[1], _vectorB = _sliced_to_array(vectorB, 2), b0 = _vectorB[0], b1 = _vectorB[1];
    return a0 * b0 + a1 * b1;
}
function dot3(vectorA, vectorB) {
    var _vectorA = _sliced_to_array(vectorA, 3), a0 = _vectorA[0], a1 = _vectorA[1], a2 = _vectorA[2], _vectorB = _sliced_to_array(vectorB, 3), b0 = _vectorB[0], b1 = _vectorB[1], b2 = _vectorB[2];
    return a0 * b0 + a1 * b1 + a2 * b2;
}
function dot4(vectorA, vectorB) {
    var _vectorA = _sliced_to_array(vectorA, 4), a0 = _vectorA[0], a1 = _vectorA[1], a2 = _vectorA[2], a3 = _vectorA[3], _vectorB = _sliced_to_array(vectorB, 4), b0 = _vectorB[0], b1 = _vectorB[1], b2 = _vectorB[2], b3 = _vectorB[3];
    return a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
}
function cross3(vectorA, vectorB) {
    var _vectorA = _sliced_to_array(vectorA, 3), a0 = _vectorA[0], a1 = _vectorA[1], a2 = _vectorA[2], _vectorB = _sliced_to_array(vectorB, 3), b0 = _vectorB[0], b1 = _vectorB[1], b2 = _vectorB[2];
    return [
        a1 * b2 - a2 * b1,
        a2 * b0 - a0 * b2,
        a0 * b1 - a1 * b0
    ];
}
function normalise2(vector) {
    var _vector = _sliced_to_array(vector, 2), x = _vector[0], y = _vector[1], length = Math.sqrt(x * x + y * y);
    return [
        x / length,
        y / length
    ];
}
function normalise3(vector) {
    var _vector = _sliced_to_array(vector, 3), x = _vector[0], y = _vector[1], z = _vector[2], length = Math.sqrt(x * x + y * y + z * z);
    return [
        x / length,
        y / length,
        z / length
    ];
}
function normalise4(vector) {
    var _vector = _sliced_to_array(vector, 4), x = _vector[0], y = _vector[1], z = _vector[2], w = _vector[3], length = Math.sqrt(x * x + y * y + z * z + w * w);
    return [
        x / length,
        y / length,
        z / length,
        w / length
    ];
}
function reflect2(vector) {
    var _vector = _sliced_to_array(vector, 2), x = _vector[0], y = _vector[1];
    return [
        -x,
        -y
    ];
}
function reflect3(vector) {
    var _vector = _sliced_to_array(vector, 3), x = _vector[0], y = _vector[1], z = _vector[2];
    return [
        -x,
        -y,
        -z
    ];
}
function reflect4(vector) {
    var _vector = _sliced_to_array(vector, 4), x = _vector[0], y = _vector[1], z = _vector[2], w = _vector[3];
    return [
        -x,
        -y,
        -z,
        -w
    ];
}
function truncate4(vector) {
    var _vector = _sliced_to_array(vector, 3), x = _vector[0], y = _vector[1], z = _vector[2];
    return [
        x,
        y,
        z
    ];
}
function scale2(vector, scalar) {
    var _vector = _sliced_to_array(vector, 2), x = _vector[0], y = _vector[1];
    return [
        x * scalar,
        y * scalar
    ];
}
function scale3(vector, scalar) {
    var _vector = _sliced_to_array(vector, 3), x = _vector[0], y = _vector[1], z = _vector[2];
    return [
        x * scalar,
        y * scalar,
        z * scalar
    ];
}
function scale4(vector, scalar) {
    var _vector = _sliced_to_array(vector, 4), x = _vector[0], y = _vector[1], z = _vector[2], w = _vector[3];
    return [
        x * scalar,
        y * scalar,
        z * scalar,
        w * scalar
    ];
}
function add2(vectorA, vectorB) {
    var _vectorA = _sliced_to_array(vectorA, 2), a0 = _vectorA[0], a1 = _vectorA[1], _vectorB = _sliced_to_array(vectorB, 2), b0 = _vectorB[0], b1 = _vectorB[1];
    return [
        a0 + b0,
        a1 + b1
    ];
}
function add3(vectorA, vectorB) {
    var _vectorA = _sliced_to_array(vectorA, 3), a0 = _vectorA[0], a1 = _vectorA[1], a2 = _vectorA[2], _vectorB = _sliced_to_array(vectorB, 3), b0 = _vectorB[0], b1 = _vectorB[1], b2 = _vectorB[2];
    return [
        a0 + b0,
        a1 + b1,
        a2 + b2
    ];
}
function add4(vectorA, vectorB) {
    var _vectorA = _sliced_to_array(vectorA, 4), a0 = _vectorA[0], a1 = _vectorA[1], a2 = _vectorA[2], a3 = _vectorA[3], _vectorB = _sliced_to_array(vectorB, 4), b0 = _vectorB[0], b1 = _vectorB[1], b2 = _vectorB[2], b3 = _vectorB[3];
    return [
        a0 + b0,
        a1 + b1,
        a2 + b2,
        a3 + b3
    ];
}
function subtract2(vectorA, vectorB) {
    var _vectorA = _sliced_to_array(vectorA, 2), a0 = _vectorA[0], a1 = _vectorA[1], _vectorB = _sliced_to_array(vectorB, 2), b0 = _vectorB[0], b1 = _vectorB[1];
    return [
        a0 - b0,
        a1 - b1
    ];
}
function subtract3(vectorA, vectorB) {
    var _vectorA = _sliced_to_array(vectorA, 3), a0 = _vectorA[0], a1 = _vectorA[1], a2 = _vectorA[2], _vectorB = _sliced_to_array(vectorB, 3), b0 = _vectorB[0], b1 = _vectorB[1], b2 = _vectorB[2];
    return [
        a0 - b0,
        a1 - b1,
        a2 - b2
    ];
}
function subtract4(vectorA, vectorB) {
    var _vectorA = _sliced_to_array(vectorA, 4), a0 = _vectorA[0], a1 = _vectorA[1], a2 = _vectorA[2], a3 = _vectorA[3], _vectorB = _sliced_to_array(vectorB, 4), b0 = _vectorB[0], b1 = _vectorB[1], b2 = _vectorB[2], b3 = _vectorB[3];
    return [
        a0 - b0,
        a1 - b1,
        a2 - b2,
        a3 - b3
    ];
}
function transform2(vector, matrix) {
    var _vector = _sliced_to_array(vector, 2), x = _vector[0], y = _vector[1], _matrix = _sliced_to_array(matrix, 4), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3];
    return [
        m0 * x + m2 * y,
        m1 * x + m3 * y
    ];
}
function transform3(vector, matrix) {
    var _vector = _sliced_to_array(vector, 3), x = _vector[0], y = _vector[1], z = _vector[2], _matrix = _sliced_to_array(matrix, 9), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8];
    return [
        m0 * x + m3 * y + m6 * z,
        m1 * x + m4 * y + m7 * z,
        m2 * x + m5 * y + m8 * z
    ];
}
function transform4(vector, matrix) {
    var _vector = _sliced_to_array(vector, 4), x = _vector[0], y = _vector[1], z = _vector[2], w = _vector[3], _matrix = _sliced_to_array(matrix, 16), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], m9 = _matrix[9], m10 = _matrix[10], m11 = _matrix[11], m12 = _matrix[12], m13 = _matrix[13], m14 = _matrix[14], m15 = _matrix[15];
    return [
        m0 * x + m4 * y + m8 * z + m12 * w,
        m1 * x + m5 * y + m9 * z + m13 * w,
        m2 * x + m6 * y + m10 * z + m14 * w,
        m3 * x + m7 * y + m11 * z + m15 * w
    ];
}
var _default = {
    zero2: zero2,
    zero3: zero3,
    zero4: zero4,
    length2: length2,
    length3: length3,
    length4: length4,
    dot2: dot2,
    dot3: dot3,
    dot4: dot4,
    cross3: cross3,
    normalise2: normalise2,
    normalise3: normalise3,
    normalise4: normalise4,
    reflect2: reflect2,
    reflect3: reflect3,
    reflect4: reflect4,
    truncate4: truncate4,
    scale2: scale2,
    scale3: scale3,
    scale4: scale4,
    add2: add2,
    add3: add3,
    add4: add4,
    subtract2: subtract2,
    subtract3: subtract3,
    subtract4: subtract4,
    transform2: transform2,
    transform3: transform3,
    transform4: transform4
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXRocy92ZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvMigpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvMygpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm80KCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgyKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoMyh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoNCh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6LCB3IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoYTAgKiBiMCArIGExICogYjEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG90Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoYTAgKiBiMCArIGExICogYjEgKyBhMiAqIGIyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdDQodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIsIGEzIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIGIwLCBiMSwgYjIsIGIzIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoYTAgKiBiMCArIGExICogYjEgKyBhMiAqIGIyICsgYTMgKiBiMyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcm9zczModmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGExICogYjIgLSBhMiAqIGIxLFxuICAgIGEyICogYjAgLSBhMCAqIGIyLFxuICAgIGEwICogYjEgLSBhMSAqIGIwLFxuXG4gIF0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpc2UyKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcixcblxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4IC8gbGVuZ3RoLFxuICAgIHkgLyBsZW5ndGgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpc2UzKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcixcblxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBsZW5ndGgsXG4gICAgeSAvIGxlbmd0aCxcbiAgICB6IC8gbGVuZ3RoLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXNlNCh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6LCB3IF0gPSB2ZWN0b3IsXG5cbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3KTtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBsZW5ndGgsXG4gICAgeSAvIGxlbmd0aCxcbiAgICB6IC8gbGVuZ3RoLFxuICAgIHcgLyBsZW5ndGgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZsZWN0Mih2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICAteCxcbiAgICAteSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmxlY3QzKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIC14LFxuICAgIC15LFxuICAgIC16LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmbGVjdDQodmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiwgdyBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgLXgsXG4gICAgLXksXG4gICAgLXosXG4gICAgLXcsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cnVuY2F0ZTQodmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCxcbiAgICB5LFxuICAgIHosXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTIodmVjdG9yLCBzY2FsYXIpIHtcbiAgY29uc3QgWyB4LCB5IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4ICogc2NhbGFyLFxuICAgIHkgKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTModmVjdG9yLCBzY2FsYXIpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4ICogc2NhbGFyLFxuICAgIHkgKiBzY2FsYXIsXG4gICAgeiAqIHNjYWxhcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlNCh2ZWN0b3IsIHNjYWxhcikge1xuICBjb25zdCBbIHgsIHksIHosIHcgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIHggKiBzY2FsYXIsXG4gICAgeSAqIHNjYWxhcixcbiAgICB6ICogc2NhbGFyLFxuICAgIHcgKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKyBiMCxcbiAgICBhMSArIGIxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKyBiMCxcbiAgICBhMSArIGIxLFxuICAgIGEyICsgYjIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQ0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyLCBhMyBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyLCBiMyBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICsgYjAsXG4gICAgYTEgKyBiMSxcbiAgICBhMiArIGIyLFxuICAgIGEzICsgYjMsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDIodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAtIGIwLFxuICAgIGExIC0gYjEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDModmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwIC0gYjAsXG4gICAgYTEgLSBiMSxcbiAgICBhMiAtIGIyLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Q0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyLCBhMyBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyLCBiMyBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwIC0gYjAsXG4gICAgYTEgLSBiMSxcbiAgICBhMiAtIGIyLFxuICAgIGEzIC0gYjMsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0yKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IFsgeCwgeSBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMgXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgIG0wICogeCArIG0yICogeSxcbiAgICBtMSAqIHggKyBtMyAqIHksXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0zKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCBdID0gbWF0cml4O1xuXG4gIHJldHVybiAoW1xuXG4gICAgbTAgKiB4ICsgbTMgKiB5ICsgbTYgKiB6LFxuICAgIG0xICogeCArIG00ICogeSArIG03ICogeixcbiAgICBtMiAqIHggKyBtNSAqIHkgKyBtOCAqIHosXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm00KHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IFsgeCwgeSwgeiwgdyBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeDtcblxuXG4gIHJldHVybiAoW1xuXG4gICAgbTAgKiB4ICsgbTQgKiB5ICsgbTggKiB6ICsgbTEyICogdyxcbiAgICBtMSAqIHggKyBtNSAqIHkgKyBtOSAqIHogKyBtMTMgKiB3LFxuICAgIG0yICogeCArIG02ICogeSArIG0xMCAqIHogKyBtMTQgKiB3LFxuICAgIG0zICogeCArIG03ICogeSArIG0xMSAqIHogKyBtMTUgKiB3LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHplcm8yLFxuICB6ZXJvMyxcbiAgemVybzQsXG4gIGxlbmd0aDIsXG4gIGxlbmd0aDMsXG4gIGxlbmd0aDQsXG4gIGRvdDIsXG4gIGRvdDMsXG4gIGRvdDQsXG4gIGNyb3NzMyxcbiAgbm9ybWFsaXNlMixcbiAgbm9ybWFsaXNlMyxcbiAgbm9ybWFsaXNlNCxcbiAgcmVmbGVjdDIsXG4gIHJlZmxlY3QzLFxuICByZWZsZWN0NCxcbiAgdHJ1bmNhdGU0LFxuICBzY2FsZTIsXG4gIHNjYWxlMyxcbiAgc2NhbGU0LFxuICBhZGQyLFxuICBhZGQzLFxuICBhZGQ0LFxuICBzdWJ0cmFjdDIsXG4gIHN1YnRyYWN0MyxcbiAgc3VidHJhY3Q0LFxuICB0cmFuc2Zvcm0yLFxuICB0cmFuc2Zvcm0zLFxuICB0cmFuc2Zvcm00XG59O1xuIl0sIm5hbWVzIjpbInplcm8yIiwiemVybzMiLCJ6ZXJvNCIsImxlbmd0aDIiLCJsZW5ndGgzIiwibGVuZ3RoNCIsImRvdDIiLCJkb3QzIiwiZG90NCIsImNyb3NzMyIsIm5vcm1hbGlzZTIiLCJub3JtYWxpc2UzIiwibm9ybWFsaXNlNCIsInJlZmxlY3QyIiwicmVmbGVjdDMiLCJyZWZsZWN0NCIsInRydW5jYXRlNCIsInNjYWxlMiIsInNjYWxlMyIsInNjYWxlNCIsImFkZDIiLCJhZGQzIiwiYWRkNCIsInN1YnRyYWN0MiIsInN1YnRyYWN0MyIsInN1YnRyYWN0NCIsInRyYW5zZm9ybTIiLCJ0cmFuc2Zvcm0zIiwidHJhbnNmb3JtNCIsInZlY3RvciIsIngiLCJ5IiwiTWF0aCIsInNxcnQiLCJ6IiwidyIsInZlY3RvckEiLCJ2ZWN0b3JCIiwiYTAiLCJhMSIsImIwIiwiYjEiLCJhMiIsImIyIiwiYTMiLCJiMyIsImxlbmd0aCIsInNjYWxhciIsIm1hdHJpeCIsIm0wIiwibTEiLCJtMiIsIm0zIiwibTQiLCJtNSIsIm02IiwibTciLCJtOCIsIm05IiwibTEwIiwibTExIiwibTEyIiwibTEzIiwibTE0IiwibTE1Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFFZ0JBLEtBQUs7ZUFBTEE7O0lBU0FDLEtBQUs7ZUFBTEE7O0lBVUFDLEtBQUs7ZUFBTEE7O0lBV0FDLE9BQU87ZUFBUEE7O0lBTUFDLE9BQU87ZUFBUEE7O0lBTUFDLE9BQU87ZUFBUEE7O0lBTUFDLElBQUk7ZUFBSkE7O0lBT0FDLElBQUk7ZUFBSkE7O0lBT0FDLElBQUk7ZUFBSkE7O0lBT0FDLE1BQU07ZUFBTkE7O0lBYUFDLFVBQVU7ZUFBVkE7O0lBYUFDLFVBQVU7ZUFBVkE7O0lBY0FDLFVBQVU7ZUFBVkE7O0lBZUFDLFFBQVE7ZUFBUkE7O0lBV0FDLFFBQVE7ZUFBUkE7O0lBWUFDLFFBQVE7ZUFBUkE7O0lBYUFDLFNBQVM7ZUFBVEE7O0lBWUFDLE1BQU07ZUFBTkE7O0lBV0FDLE1BQU07ZUFBTkE7O0lBWUFDLE1BQU07ZUFBTkE7O0lBYUFDLElBQUk7ZUFBSkE7O0lBWUFDLElBQUk7ZUFBSkE7O0lBYUFDLElBQUk7ZUFBSkE7O0lBY0FDLFNBQVM7ZUFBVEE7O0lBWUFDLFNBQVM7ZUFBVEE7O0lBYUFDLFNBQVM7ZUFBVEE7O0lBY0FDLFVBQVU7ZUFB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