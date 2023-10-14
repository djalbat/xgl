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
    add2: function() {
        return add2;
    },
    add3: function() {
        return add3;
    },
    add4: function() {
        return add4;
    },
    cross3: function() {
        return cross3;
    },
    default: function() {
        return _default;
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
    length2: function() {
        return length2;
    },
    length3: function() {
        return length3;
    },
    length4: function() {
        return length4;
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
    scale2: function() {
        return scale2;
    },
    scale3: function() {
        return scale3;
    },
    scale4: function() {
        return scale4;
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
    truncate4: function() {
        return truncate4;
    },
    zero2: function() {
        return zero2;
    },
    zero3: function() {
        return zero3;
    },
    zero4: function() {
        return zero4;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXRocy92ZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvMigpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvMygpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm80KCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgyKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoMyh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoNCh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6LCB3IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoYTAgKiBiMCArIGExICogYjEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG90Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoYTAgKiBiMCArIGExICogYjEgKyBhMiAqIGIyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdDQodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIsIGEzIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIGIwLCBiMSwgYjIsIGIzIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoYTAgKiBiMCArIGExICogYjEgKyBhMiAqIGIyICsgYTMgKiBiMyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcm9zczModmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGExICogYjIgLSBhMiAqIGIxLFxuICAgIGEyICogYjAgLSBhMCAqIGIyLFxuICAgIGEwICogYjEgLSBhMSAqIGIwLFxuXG4gIF0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpc2UyKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcixcblxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4IC8gbGVuZ3RoLFxuICAgIHkgLyBsZW5ndGgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpc2UzKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcixcblxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBsZW5ndGgsXG4gICAgeSAvIGxlbmd0aCxcbiAgICB6IC8gbGVuZ3RoLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXNlNCh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6LCB3IF0gPSB2ZWN0b3IsXG5cbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3KTtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBsZW5ndGgsXG4gICAgeSAvIGxlbmd0aCxcbiAgICB6IC8gbGVuZ3RoLFxuICAgIHcgLyBsZW5ndGgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZsZWN0Mih2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICAteCxcbiAgICAteSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmxlY3QzKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIC14LFxuICAgIC15LFxuICAgIC16LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmbGVjdDQodmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiwgdyBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgLXgsXG4gICAgLXksXG4gICAgLXosXG4gICAgLXcsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cnVuY2F0ZTQodmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCxcbiAgICB5LFxuICAgIHosXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTIodmVjdG9yLCBzY2FsYXIpIHtcbiAgY29uc3QgWyB4LCB5IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4ICogc2NhbGFyLFxuICAgIHkgKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTModmVjdG9yLCBzY2FsYXIpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4ICogc2NhbGFyLFxuICAgIHkgKiBzY2FsYXIsXG4gICAgeiAqIHNjYWxhcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlNCh2ZWN0b3IsIHNjYWxhcikge1xuICBjb25zdCBbIHgsIHksIHosIHcgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIHggKiBzY2FsYXIsXG4gICAgeSAqIHNjYWxhcixcbiAgICB6ICogc2NhbGFyLFxuICAgIHcgKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKyBiMCxcbiAgICBhMSArIGIxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKyBiMCxcbiAgICBhMSArIGIxLFxuICAgIGEyICsgYjIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQ0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyLCBhMyBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyLCBiMyBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICsgYjAsXG4gICAgYTEgKyBiMSxcbiAgICBhMiArIGIyLFxuICAgIGEzICsgYjMsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDIodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAtIGIwLFxuICAgIGExIC0gYjEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDModmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwIC0gYjAsXG4gICAgYTEgLSBiMSxcbiAgICBhMiAtIGIyLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Q0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyLCBhMyBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyLCBiMyBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwIC0gYjAsXG4gICAgYTEgLSBiMSxcbiAgICBhMiAtIGIyLFxuICAgIGEzIC0gYjMsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0yKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IFsgeCwgeSBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMgXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgIG0wICogeCArIG0yICogeSxcbiAgICBtMSAqIHggKyBtMyAqIHksXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0zKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCBdID0gbWF0cml4O1xuXG4gIHJldHVybiAoW1xuXG4gICAgbTAgKiB4ICsgbTMgKiB5ICsgbTYgKiB6LFxuICAgIG0xICogeCArIG00ICogeSArIG03ICogeixcbiAgICBtMiAqIHggKyBtNSAqIHkgKyBtOCAqIHosXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm00KHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IFsgeCwgeSwgeiwgdyBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeDtcblxuXG4gIHJldHVybiAoW1xuXG4gICAgbTAgKiB4ICsgbTQgKiB5ICsgbTggKiB6ICsgbTEyICogdyxcbiAgICBtMSAqIHggKyBtNSAqIHkgKyBtOSAqIHogKyBtMTMgKiB3LFxuICAgIG0yICogeCArIG02ICogeSArIG0xMCAqIHogKyBtMTQgKiB3LFxuICAgIG0zICogeCArIG03ICogeSArIG0xMSAqIHogKyBtMTUgKiB3LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHplcm8yLFxuICB6ZXJvMyxcbiAgemVybzQsXG4gIGxlbmd0aDIsXG4gIGxlbmd0aDMsXG4gIGxlbmd0aDQsXG4gIGRvdDIsXG4gIGRvdDMsXG4gIGRvdDQsXG4gIGNyb3NzMyxcbiAgbm9ybWFsaXNlMixcbiAgbm9ybWFsaXNlMyxcbiAgbm9ybWFsaXNlNCxcbiAgcmVmbGVjdDIsXG4gIHJlZmxlY3QzLFxuICByZWZsZWN0NCxcbiAgdHJ1bmNhdGU0LFxuICBzY2FsZTIsXG4gIHNjYWxlMyxcbiAgc2NhbGU0LFxuICBhZGQyLFxuICBhZGQzLFxuICBhZGQ0LFxuICBzdWJ0cmFjdDIsXG4gIHN1YnRyYWN0MyxcbiAgc3VidHJhY3Q0LFxuICB0cmFuc2Zvcm0yLFxuICB0cmFuc2Zvcm0zLFxuICB0cmFuc2Zvcm00XG59O1xuIl0sIm5hbWVzIjpbImFkZDIiLCJhZGQzIiwiYWRkNCIsImNyb3NzMyIsImRvdDIiLCJkb3QzIiwiZG90NCIsImxlbmd0aDIiLCJsZW5ndGgzIiwibGVuZ3RoNCIsIm5vcm1hbGlzZTIiLCJub3JtYWxpc2UzIiwibm9ybWFsaXNlNCIsInJlZmxlY3QyIiwicmVmbGVjdDMiLCJyZWZsZWN0NCIsInNjYWxlMiIsInNjYWxlMyIsInNjYWxlNCIsInN1YnRyYWN0MiIsInN1YnRyYWN0MyIsInN1YnRyYWN0NCIsInRyYW5zZm9ybTIiLCJ0cmFuc2Zvcm0zIiwidHJhbnNmb3JtNCIsInRydW5jYXRlNCIsInplcm8yIiwiemVybzMiLCJ6ZXJvNCIsInZlY3RvciIsIngiLCJ5IiwiTWF0aCIsInNxcnQiLCJ6IiwidyIsInZlY3RvckEiLCJ2ZWN0b3JCIiwiYTAiLCJhMSIsImIwIiwiYjEiLCJhMiIsImIyIiwiYTMiLCJiMyIsImxlbmd0aCIsInNjYWxhciIsIm1hdHJpeCIsIm0wIiwibTEiLCJtMiIsIm0zIiwibTQiLCJtNSIsIm02IiwibTciLCJtOCIsIm05IiwibTEwIiwibTExIiwibTEyIiwibTEzIiwibTE0IiwibTE1Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFrTmdCQSxJQUFJO2VBQUpBOztJQVlBQyxJQUFJO2VBQUpBOztJQWFBQyxJQUFJO2VBQUpBOztJQXBLQUMsTUFBTTtlQUFOQTs7SUFvUWhCLE9BOEJFO2VBOUJGOztJQXpSZ0JDLElBQUk7ZUFBSkE7O0lBT0FDLElBQUk7ZUFBSkE7O0lBT0FDLElBQUk7ZUFBSkE7O0lBaENBQyxPQUFPO2VBQVBBOztJQU1BQyxPQUFPO2VBQVBBOztJQU1BQyxPQUFPO2VBQVBBOztJQXdDQUMsVUFBVTtlQUFWQTs7SUFhQUMsVUFBVTtlQUFWQTs7SUFjQUMsVUFBVTtlQUFWQTs7SUFlQUMsUUFBUTtlQUFSQTs7SUFXQUMsUUFBUTtlQUFSQTs7SUFZQUMsUUFBUTtlQUFSQTs7SUF5QkFDLE1BQU07ZUFBTkE7O0lBV0FDLE1BQU07ZUFBTkE7O0lBWUFDLE1BQU07ZUFBTkE7O0lBb0RBQyxTQUFTO2VBQVRBOztJQVlBQyxTQUFTO2VBQVRBOztJQWFBQyxTQUFTO2VBQVRBOztJQWNBQyxVQUFVO2VBQVZBOztJQWFBQyxVQUFVO2VBQVZBOztJQWNBQyxVQUFVO2VBQVZBOztJQXpKQUMsU0FBUztlQUFUQTs7SUFoS0FDLEtBQUs7ZUFBTEE7O0lBU0FDLEtBQUs7ZUFBTEE7O0lBVUFDLEtBQUs7ZUFBTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFuQlQsU0FBU0Y7SUFDZCxPQUFRO1FBRU47UUFDQTtLQUVEO0FBQ0g7QUFFTyxTQUFTQztJQUNkLE9BQVE7UUFFTjtRQUNBO1FBQ0E7S0FFRDtBQUNIO0FBRU8sU0FBU0M7SUFDZCxPQUFRO1FBRU47UUFDQTtRQUNBO1FBQ0E7S0FFRDtBQUNIO0FBRU8sU0FBU3JCLFFBQVFzQixNQUFNO0lBQzVCLElBQWlCQSwyQkFBQUEsWUFBVEMsSUFBU0QsWUFBTkUsSUFBTUY7SUFFakIsT0FBT0csS0FBS0MsSUFBSSxDQUFDSCxJQUFJQSxJQUFJQyxJQUFJQTtBQUMvQjtBQUVPLFNBQVN2QixRQUFRcUIsTUFBTTtJQUM1QixJQUFvQkEsMkJBQUFBLFlBQVpDLElBQVlELFlBQVRFLElBQVNGLFlBQU5LLElBQU1MO0lBRXBCLE9BQU9HLEtBQUtDLElBQUksQ0FBQ0gsSUFBSUEsSUFBSUMsSUFBSUEsSUFBSUcsSUFBSUE7QUFDdkM7QUFFTyxTQUFTekIsUUFBUW9CLE1BQU07SUFDNUIsSUFBdUJBLDJCQUFBQSxZQUFmQyxJQUFlRCxZQUFaRSxJQUFZRixZQUFUSyxJQUFTTCxZQUFOTSxJQUFNTjtJQUV2QixPQUFPRyxLQUFLQyxJQUFJLENBQUNILElBQUlBLElBQUlDLElBQUlBLElBQUlHLElBQUlBLElBQUlDLElBQUlBO0FBQy9DO0FBRU8sU0FBUy9CLEtBQUtnQyxPQUFPLEVBQUVDLE9BQU87SUFDbkMsSUFBbUJELDRCQUFBQSxhQUFYRSxLQUFXRixhQUFQRyxLQUFPSCxhQUNBQyw0QkFBQUEsYUFBWEcsS0FBV0gsYUFBUEksS0FBT0o7SUFFbkIsT0FBUUMsS0FBS0UsS0FBS0QsS0FBS0U7QUFDekI7QUFFTyxTQUFTcEMsS0FBSytCLE9BQU8sRUFBRUMsT0FBTztJQUNuQyxJQUF1QkQsNEJBQUFBLGFBQWZFLEtBQWVGLGFBQVhHLEtBQVdILGFBQVBNLEtBQU9OLGFBQ0FDLDRCQUFBQSxhQUFmRyxLQUFlSCxhQUFYSSxLQUFXSixhQUFQTSxLQUFPTjtJQUV2QixPQUFRQyxLQUFLRSxLQUFLRCxLQUFLRSxLQUFLQyxLQUFLQztBQUNuQztBQUVPLFNBQVNyQyxLQUFLOEIsT0FBTyxFQUFFQyxPQUFPO0lBQ25DLElBQTJCRCw0QkFBQUEsYUFBbkJFLEtBQW1CRixhQUFmRyxLQUFlSCxhQUFYTSxLQUFXTixhQUFQUSxLQUFPUixhQUNBQyw0QkFBQUEsYUFBbkJHLEtBQW1CSCxhQUFmSSxLQUFlSixhQUFYTSxLQUFXTixhQUFQUSxLQUFPUjtJQUUzQixPQUFRQyxLQUFLRSxLQUFLRCxLQUFLRSxLQUFLQyxLQUFLQyxLQUFLQyxLQUFLQztBQUM3QztBQUVPLFNBQVMxQyxPQUFPaUMsT0FBTyxFQUFFQyxPQUFPO0lBQ3JDLElBQXVCRCw0QkFBQUEsYUFBZkUsS0FBZUYsYUFBWEcsS0FBV0gsYUFBUE0sS0FBT04sYUFDQUMsNEJBQUFBLGFBQWZHLEtBQWVILGFBQVhJLEtBQVdKLGFBQVBNLEtBQU9OO0lBRXZCLE9BQVE7UUFFTkUsS0FBS0ksS0FBS0QsS0FBS0Q7UUFDZkMsS0FBS0YsS0FBS0YsS0FBS0s7UUFDZkwsS0FBS0csS0FBS0YsS0FBS0M7S0FFaEI7QUFDSDtBQUVPLFNBQVM5QixXQUFXbUIsTUFBTTtJQUMvQixJQUFpQkEsMkJBQUFBLFlBQVRDLElBQVNELFlBQU5FLElBQU1GLFlBRVhpQixTQUFTZCxLQUFLQyxJQUFJLENBQUNILElBQUlBLElBQUlDLElBQUlBO0lBRXJDLE9BQVE7UUFFTkQsSUFBSWdCO1FBQ0pmLElBQUllO0tBRUw7QUFDSDtBQUVPLFNBQVNuQyxXQUFXa0IsTUFBTTtJQUMvQixJQUFvQkEsMkJBQUFBLFlBQVpDLElBQVlELFlBQVRFLElBQVNGLFlBQU5LLElBQU1MLFlBRWRpQixTQUFTZCxLQUFLQyxJQUFJLENBQUNILElBQUlBLElBQUlDLElBQUlBLElBQUlHLElBQUlBO0lBRTdDLE9BQVE7UUFFTkosSUFBSWdCO1FBQ0pmLElBQUllO1FBQ0paLElBQUlZO0tBRUw7QUFDSDtBQUVPLFNBQVNsQyxXQUFXaUIsTUFBTTtJQUMvQixJQUF1QkEsMkJBQUFBLFlBQWZDLElBQWVELFlBQVpFLElBQVlGLFlBQVRLLElBQVNMLFlBQU5NLElBQU1OLFlBRWpCaUIsU0FBU2QsS0FBS0MsSUFBSSxDQUFDSCxJQUFJQSxJQUFJQyxJQUFJQSxJQUFJRyxJQUFJQSxJQUFJQyxJQUFJQTtJQUVyRCxPQUFRO1FBRU5MLElBQUlnQjtRQUNKZixJQUFJZTtRQUNKWixJQUFJWTtRQUNKWCxJQUFJVztLQUVMO0FBQ0g7QUFFTyxTQUFTakMsU0FBU2dCLE1BQU07SUFDN0IsSUFBaUJBLDJCQUFBQSxZQUFUQyxJQUFTRCxZQUFORSxJQUFNRjtJQUVqQixPQUFRO1FBRU4sQ0FBQ0M7UUFDRCxDQUFDQztLQUVGO0FBQ0g7QUFFTyxTQUFTakIsU0FBU2UsTUFBTTtJQUM3QixJQUFvQkEsMkJBQUFBLFlBQVpDLElBQVlELFlBQVRFLElBQVNGLFlBQU5LLElBQU1MO0lBRXBCLE9BQVE7UUFFTixDQUFDQztRQUNELENBQUNDO1FBQ0QsQ0FBQ0c7S0FFRjtBQUNIO0FBRU8sU0FBU25CLFNBQVNjLE1BQU07SUFDN0IsSUFBdUJBLDJCQUFBQSxZQUFmQyxJQUFlRCxZQUFaRSxJQUFZRixZQUFUSyxJQUFTTCxZQUFOTSxJQUFNTjtJQUV2QixPQUFRO1FBRU4sQ0FBQ0M7UUFDRCxDQUFDQztRQUNELENBQUNHO1FBQ0QsQ0FBQ0M7S0FFRjtBQUNIO0FBRU8sU0FBU1YsVUFBVUksTUFBTTtJQUM5QixJQUFvQkEsMkJBQUFBLFlBQVpDLElBQVlELFlBQVRFLElBQVNGLFlBQU5LLElBQU1MO0lBRXBCLE9BQVE7UUFFTkM7UUFDQUM7UUFDQUc7S0FFRDtBQUNIO0FBRU8sU0FBU2xCLE9BQU9hLE1BQU0sRUFBRWtCLE1BQU07SUFDbkMsSUFBaUJsQiwyQkFBQUEsWUFBVEMsSUFBU0QsWUFBTkUsSUFBTUY7SUFFakIsT0FBUTtRQUVOQyxJQUFJaUI7UUFDSmhCLElBQUlnQjtLQUVMO0FBQ0g7QUFFTyxTQUFTOUIsT0FBT1ksTUFBTSxFQUFFa0IsTUFBTTtJQUNuQyxJQUFvQmxCLDJCQUFBQSxZQUFaQyxJQUFZRCxZQUFURSxJQUFTRixZQUFOSyxJQUFNTDtJQUVwQixPQUFRO1FBRU5DLElBQUlpQjtRQUNKaEIsSUFBSWdCO1FBQ0piLElBQUlhO0tBRUw7QUFDSDtBQUVPLFNBQVM3QixPQUFPVyxNQUFNLEVBQUVrQixNQUFNO0lBQ25DLElBQXVCbEIsMkJBQUFBLFlBQWZDLElBQWVELFlBQVpFLElBQVlGLFlBQVRLLElBQVNMLFlBQU5NLElBQU1OO0lBRXZCLE9BQVE7UUFFTkMsSUFBSWlCO1FBQ0poQixJQUFJZ0I7UUFDSmIsSUFBSWE7UUFDSlosSUFBSVk7S0FFTDtBQUNIO0FBRU8sU0FBUy9DLEtBQUtvQyxPQUFPLEVBQUVDLE9BQU87SUFDbkMsSUFBbUJELDRCQUFBQSxhQUFYRSxLQUFXRixhQUFQRyxLQUFPSCxhQUNBQyw0QkFBQUEsYUFBWEcsS0FBV0gsYUFBUEksS0FBT0o7SUFFbkIsT0FBUTtRQUVOQyxLQUFLRTtRQUNMRCxLQUFLRTtLQUVOO0FBQ0g7QUFFTyxTQUFTeEMsS0FBS21DLE9BQU8sRUFBRUMsT0FBTztJQUNuQyxJQUF1QkQsNEJBQUFBLGFBQWZFLEtBQWVGLGFBQVhHLEtBQVdILGFBQVBNLEtBQU9OLGFBQ0FDLDRCQUFBQSxhQUFmRyxLQUFlSCxhQUFYSSxLQUFXSixhQUFQTSxLQUFPTjtJQUV2QixPQUFRO1FBRU5DLEtBQUtFO1FBQ0xELEtBQUtFO1FBQ0xDLEtBQUtDO0tBRU47QUFDSDtBQUVPLFNBQVN6QyxLQUFLa0MsT0FBTyxFQUFFQyxPQUFPO0lBQ25DLElBQTJCRCw0QkFBQUEsYUFBbkJFLEtBQW1CRixhQUFmRyxLQUFlSCxhQUFYTSxLQUFXTixhQUFQUSxLQUFPUixhQUNBQyw0QkFBQUEsYUFBbkJHLEtBQW1CSCxhQUFmSSxLQUFlSixhQUFYTSxLQUFXTixhQUFQUSxLQUFPUjtJQUUzQixPQUFRO1FBRU5DLEtBQUtFO1FBQ0xELEtBQUtFO1FBQ0xDLEtBQUtDO1FBQ0xDLEtBQUtDO0tBRU47QUFDSDtBQUVPLFNBQVMxQixVQUFVaUIsT0FBTyxFQUFFQyxPQUFPO0lBQ3hDLElBQW1CRCw0QkFBQUEsYUFBWEUsS0FBV0YsYUFBUEcsS0FBT0gsYUFDQUMsNEJBQUFBLGFBQVhHLEtBQVdILGFBQVBJLEtBQU9KO0lBRW5CLE9BQVE7UUFFTkMsS0FBS0U7UUFDTEQsS0FBS0U7S0FFTjtBQUNIO0FBRU8sU0FBU3JCLFVBQVVnQixPQUFPLEVBQUVDLE9BQU87SUFDeEMsSUFBdUJELDRCQUFBQSxhQUFmRSxLQUFlRixhQUFYRyxLQUFXSCxhQUFQTSxLQUFPTixhQUNBQyw0QkFBQUEsYUFBZkcsS0FBZUgsYUFBWEksS0FBV0osYUFBUE0sS0FBT047SUFFdkIsT0FBUTtRQUVOQyxLQUFLRTtRQUNMRCxLQUFLRTtRQUNMQyxLQUFLQztLQUVOO0FBQ0g7QUFFTyxTQUFTdEIsVUFBVWUsT0FBTyxFQUFFQyxPQUFPO0lBQ3hDLElBQTJCRCw0QkFBQUEsYUFBbkJFLEtBQW1CRixhQUFmRyxLQUFlSCxhQUFYTSxLQUFXTixhQUFQUSxLQUFPUixhQUNBQyw0QkFBQUEsYUFBbkJHLEtBQW1CSCxhQUFmSSxLQUFlSixhQUFYTSxLQUFXTixhQUFQUSxLQUFPUjtJQUUzQixPQUFRO1FBRU5DLEtBQUtFO1FBQ0xELEtBQUtFO1FBQ0xDLEtBQUtDO1FBQ0xDLEtBQUtDO0tBRU47QUFDSDtBQUVPLFNBQVN2QixXQUFXTyxNQUFNLEVBQUVtQixNQUFNO0lBQ3ZDLElBQWlCbkIsMkJBQUFBLFlBQVRDLElBQVNELFlBQU5FLElBQU1GLFlBRVVtQiwyQkFBQUEsWUFBbkJDLEtBQW1CRCxZQUFmRSxLQUFlRixZQUFYRyxLQUFXSCxZQUFQSSxLQUFPSjtJQUUzQixPQUFRO1FBRU5DLEtBQUtuQixJQUFJcUIsS0FBS3BCO1FBQ2RtQixLQUFLcEIsSUFBSXNCLEtBQUtyQjtLQUVmO0FBQ0g7QUFFTyxTQUFTUixXQUFXTSxNQUFNLEVBQUVtQixNQUFNO0lBQ3ZDLElBQW9CbkIsMkJBQUFBLFlBQVpDLElBQVlELFlBQVRFLElBQVNGLFlBQU5LLElBQU1MLFlBRTJCbUIsMkJBQUFBLFlBQXZDQyxLQUF1Q0QsWUFBbkNFLEtBQW1DRixZQUEvQkcsS0FBK0JILFlBQTNCSSxLQUEyQkosWUFBdkJLLEtBQXVCTCxZQUFuQk0sS0FBbUJOLFlBQWZPLEtBQWVQLFlBQVhRLEtBQVdSLFlBQVBTLEtBQU9UO0lBRS9DLE9BQVE7UUFFTkMsS0FBS25CLElBQUlzQixLQUFLckIsSUFBSXdCLEtBQUtyQjtRQUN2QmdCLEtBQUtwQixJQUFJdUIsS0FBS3RCLElBQUl5QixLQUFLdEI7UUFDdkJpQixLQUFLckIsSUFBSXdCLEtBQUt2QixJQUFJMEIsS0FBS3ZCO0tBRXhCO0FBQ0g7QUFFTyxTQUFTVixXQUFXSyxNQUFNLEVBQUVtQixNQUFNO0lBQ3ZDLElBQXVCbkIsMkJBQUFBLFlBQWZDLElBQWVELFlBQVpFLElBQVlGLFlBQVRLLElBQVNMLFlBQU5NLElBQU1OLFlBRTBEbUIsMkJBQUFBLGFBQXpFQyxLQUF5RUQsWUFBckVFLEtBQXFFRixZQUFqRUcsS0FBaUVILFlBQTdESSxLQUE2REosWUFBekRLLEtBQXlETCxZQUFyRE0sS0FBcUROLFlBQWpETyxLQUFpRFAsWUFBN0NRLEtBQTZDUixZQUF6Q1MsS0FBeUNULFlBQXJDVSxLQUFxQ1YsWUFBakNXLE1BQWlDWCxhQUE1QlksTUFBNEJaLGFBQXZCYSxNQUF1QmIsYUFBbEJjLE1BQWtCZCxhQUFiZSxNQUFhZixhQUFSZ0IsTUFBUWhCO0lBR2pGLE9BQVE7UUFFTkMsS0FBS25CLElBQUl1QixLQUFLdEIsSUFBSTBCLEtBQUt2QixJQUFJMkIsTUFBTTFCO1FBQ2pDZSxLQUFLcEIsSUFBSXdCLEtBQUt2QixJQUFJMkIsS0FBS3hCLElBQUk0QixNQUFNM0I7UUFDakNnQixLQUFLckIsSUFBSXlCLEtBQUt4QixJQUFJNEIsTUFBTXpCLElBQUk2QixNQUFNNUI7UUFDbENpQixLQUFLdEIsSUFBSTBCLEtBQUt6QixJQUFJNkIsTUFBTTFCLElBQUk4QixNQUFNN0I7S0FFbkM7QUFDSDtJQUVBLFdBQWU7SUFDYlQsT0FBQUE7SUFDQUMsT0FBQUE7SUFDQUMsT0FBQUE7SUFDQXJCLFNBQUFBO0lBQ0FDLFNBQUFBO0lBQ0FDLFNBQUFBO0lBQ0FMLE1BQUFBO0lBQ0FDLE1BQUFBO0lBQ0FDLE1BQUFBO0lBQ0FILFFBQUFBO0lBQ0FPLFlBQUFBO0lBQ0FDLFlBQUFBO0lBQ0FDLFlBQUFBO0lBQ0FDLFVBQUFBO0lBQ0FDLFVBQUFBO0lBQ0FDLFVBQUFBO0lBQ0FVLFdBQUFBO0lBQ0FULFFBQUFBO0lBQ0FDLFFBQUFBO0lBQ0FDLFFBQUFBO0lBQ0FsQixNQUFBQTtJQUNBQyxNQUFBQTtJQUNBQyxNQUFBQTtJQUNBaUIsV0FBQUE7SUFDQUMsV0FBQUE7SUFDQUMsV0FBQUE7SUFDQUMsWUFBQUE7SUFDQUMsWUFBQUE7SUFDQUMsWUFBQUE7QUFDRiJ9