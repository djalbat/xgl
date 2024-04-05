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
    divide2: function() {
        return divide2;
    },
    divide3: function() {
        return divide3;
    },
    divide4: function() {
        return divide4;
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
    mean2: function() {
        return mean2;
    },
    mean3: function() {
        return mean3;
    },
    mean4: function() {
        return mean4;
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
    sum2: function() {
        return sum2;
    },
    sum3: function() {
        return sum3;
    },
    sum4: function() {
        return sum4;
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
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
function multiply2(vectorA, vectorB) {
    var _vectorA = _sliced_to_array(vectorA, 2), x0 = _vectorA[0], y0 = _vectorA[1], _vectorB = _sliced_to_array(vectorB, 2), x1 = _vectorB[0], y1 = _vectorB[1];
    return [
        x0 * x1,
        y0 * y1
    ];
}
function multiply3(vectorA, vectorB) {
    var _vectorA = _sliced_to_array(vectorA, 3), x0 = _vectorA[0], y0 = _vectorA[1], z0 = _vectorA[2], _vectorB = _sliced_to_array(vectorB, 3), x1 = _vectorB[0], y1 = _vectorB[1], z1 = _vectorB[2];
    return [
        x0 * x1,
        y0 * y1,
        z0 * z1
    ];
}
function multiply4(vectorA, vectorB) {
    var _vectorA = _sliced_to_array(vectorA, 4), x0 = _vectorA[0], y0 = _vectorA[1], z0 = _vectorA[2], w0 = _vectorA[3], _vectorB = _sliced_to_array(vectorB, 4), x1 = _vectorB[0], y1 = _vectorB[1], z1 = _vectorB[2], w1 = _vectorB[3];
    return [
        x0 * x1,
        y0 * y1,
        z0 * z1,
        w0 * w1
    ];
}
function divide2(vector, divisor) {
    var _vector = _sliced_to_array(vector, 2), x = _vector[0], y = _vector[1];
    return [
        x / divisor,
        y / divisor
    ];
}
function divide3(vector, divisor) {
    var _vector = _sliced_to_array(vector, 3), x = _vector[0], y = _vector[1], z = _vector[2];
    return [
        x / divisor,
        y / divisor,
        z / divisor
    ];
}
function divide4(vector, divisor) {
    var _vector = _sliced_to_array(vector, 4), x = _vector[0], y = _vector[1], z = _vector[2], w = _vector[3];
    return [
        x / divisor,
        y / divisor,
        z / divisor,
        w / divisor
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
function sum2() {
    for(var _len = arguments.length, vectors = new Array(_len), _key = 0; _key < _len; _key++){
        vectors[_key] = arguments[_key];
    }
    var zero = zero2(), sum = vectors.reduce(function(sum, vector) {
        sum = add2(sum, vector);
        return sum;
    }, zero);
    return sum;
}
function sum3() {
    for(var _len = arguments.length, vectors = new Array(_len), _key = 0; _key < _len; _key++){
        vectors[_key] = arguments[_key];
    }
    var zero = zero3(), sum = vectors.reduce(function(sum, vector) {
        sum = add3(sum, vector);
        return sum;
    }, zero);
    return sum;
}
function sum4() {
    for(var _len = arguments.length, vectors = new Array(_len), _key = 0; _key < _len; _key++){
        vectors[_key] = arguments[_key];
    }
    var zero = zero4(), sum = vectors.reduce(function(sum, vector) {
        sum = add4(sum, vector);
        return sum;
    }, zero);
    return sum;
}
function mean2() {
    for(var _len = arguments.length, vectors = new Array(_len), _key = 0; _key < _len; _key++){
        vectors[_key] = arguments[_key];
    }
    var length = vectors.length, sum = sum2.apply(void 0, _to_consumable_array(vectors)), mean = divide2(sum, length);
    return mean;
}
function mean3() {
    for(var _len = arguments.length, vectors = new Array(_len), _key = 0; _key < _len; _key++){
        vectors[_key] = arguments[_key];
    }
    var length = vectors.length, sum = sum3.apply(void 0, _to_consumable_array(vectors)), mean = divide3(sum, length);
    return mean;
}
function mean4() {
    for(var _len = arguments.length, vectors = new Array(_len), _key = 0; _key < _len; _key++){
        vectors[_key] = arguments[_key];
    }
    var length = vectors.length, sum = sum4.apply(void 0, _to_consumable_array(vectors)), mean = divide4(sum, length);
    return mean;
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
    add2: add2,
    add3: add3,
    add4: add4,
    subtract2: subtract2,
    subtract3: subtract3,
    subtract4: subtract4,
    multiply2: multiply2,
    multiply3: multiply3,
    multiply4: multiply4,
    divide2: divide2,
    divide3: divide3,
    divide4: divide4,
    scale2: scale2,
    scale3: scale3,
    scale4: scale4,
    transform2: transform2,
    transform3: transform3,
    transform4: transform4,
    sum2: sum2,
    sum3: sum3,
    sum4: sum4,
    mean2: mean2,
    mean3: mean3,
    mean4: mean4
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXRocy92ZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvMigpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvMygpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm80KCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgyKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoMyh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoNCh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6LCB3IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoYTAgKiBiMCArIGExICogYjEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG90Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoYTAgKiBiMCArIGExICogYjEgKyBhMiAqIGIyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdDQodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIsIGEzIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIGIwLCBiMSwgYjIsIGIzIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoYTAgKiBiMCArIGExICogYjEgKyBhMiAqIGIyICsgYTMgKiBiMyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcm9zczModmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGExICogYjIgLSBhMiAqIGIxLFxuICAgIGEyICogYjAgLSBhMCAqIGIyLFxuICAgIGEwICogYjEgLSBhMSAqIGIwLFxuXG4gIF0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpc2UyKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcixcblxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4IC8gbGVuZ3RoLFxuICAgIHkgLyBsZW5ndGgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpc2UzKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcixcblxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBsZW5ndGgsXG4gICAgeSAvIGxlbmd0aCxcbiAgICB6IC8gbGVuZ3RoLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXNlNCh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6LCB3IF0gPSB2ZWN0b3IsXG5cbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3KTtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBsZW5ndGgsXG4gICAgeSAvIGxlbmd0aCxcbiAgICB6IC8gbGVuZ3RoLFxuICAgIHcgLyBsZW5ndGgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZsZWN0Mih2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICAteCxcbiAgICAteSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmxlY3QzKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIC14LFxuICAgIC15LFxuICAgIC16LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmbGVjdDQodmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiwgdyBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgLXgsXG4gICAgLXksXG4gICAgLXosXG4gICAgLXcsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cnVuY2F0ZTQodmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCxcbiAgICB5LFxuICAgIHosXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKyBiMCxcbiAgICBhMSArIGIxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKyBiMCxcbiAgICBhMSArIGIxLFxuICAgIGEyICsgYjIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQ0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyLCBhMyBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyLCBiMyBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICsgYjAsXG4gICAgYTEgKyBiMSxcbiAgICBhMiArIGIyLFxuICAgIGEzICsgYjMsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDIodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAtIGIwLFxuICAgIGExIC0gYjEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDModmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwIC0gYjAsXG4gICAgYTEgLSBiMSxcbiAgICBhMiAtIGIyLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Q0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyLCBhMyBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyLCBiMyBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwIC0gYjAsXG4gICAgYTEgLSBiMSxcbiAgICBhMiAtIGIyLFxuICAgIGEzIC0gYjMsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTIodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIHgwLCB5MCBdID0gdmVjdG9yQSxcbiAgICAgICAgWyB4MSwgeTEgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4MCAqIHgxLFxuICAgIHkwICogeTEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTModmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIHgwLCB5MCwgejAgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgeDEsIHkxLCB6MSBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIHgwICogeDEsXG4gICAgeTAgKiB5MSxcbiAgICB6MCAqIHoxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHk0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyB4MCwgeTAsIHowLCB3MCBdID0gdmVjdG9yQSxcbiAgICAgICAgWyB4MSwgeTEsIHoxLCB3MSBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIHgwICogeDEsXG4gICAgeTAgKiB5MSxcbiAgICB6MCAqIHoxLFxuICAgIHcwICogdzEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGUyKHZlY3RvciwgZGl2aXNvcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBkaXZpc29yLFxuICAgIHkgLyBkaXZpc29yLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlMyh2ZWN0b3IsIGRpdmlzb3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4IC8gZGl2aXNvcixcbiAgICB5IC8gZGl2aXNvcixcbiAgICB6IC8gZGl2aXNvcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZTQodmVjdG9yLCBkaXZpc29yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiwgdyBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCAvIGRpdmlzb3IsXG4gICAgeSAvIGRpdmlzb3IsXG4gICAgeiAvIGRpdmlzb3IsXG4gICAgdyAvIGRpdmlzb3IsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTIodmVjdG9yLCBzY2FsYXIpIHtcbiAgY29uc3QgWyB4LCB5IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4ICogc2NhbGFyLFxuICAgIHkgKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTModmVjdG9yLCBzY2FsYXIpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4ICogc2NhbGFyLFxuICAgIHkgKiBzY2FsYXIsXG4gICAgeiAqIHNjYWxhcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlNCh2ZWN0b3IsIHNjYWxhcikge1xuICBjb25zdCBbIHgsIHksIHosIHcgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIHggKiBzY2FsYXIsXG4gICAgeSAqIHNjYWxhcixcbiAgICB6ICogc2NhbGFyLFxuICAgIHcgKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0yKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IFsgeCwgeSBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMgXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgIG0wICogeCArIG0yICogeSxcbiAgICBtMSAqIHggKyBtMyAqIHksXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0zKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCBdID0gbWF0cml4O1xuXG4gIHJldHVybiAoW1xuXG4gICAgbTAgKiB4ICsgbTMgKiB5ICsgbTYgKiB6LFxuICAgIG0xICogeCArIG00ICogeSArIG03ICogeixcbiAgICBtMiAqIHggKyBtNSAqIHkgKyBtOCAqIHosXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm00KHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IFsgeCwgeSwgeiwgdyBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeDtcblxuXG4gIHJldHVybiAoW1xuXG4gICAgbTAgKiB4ICsgbTQgKiB5ICsgbTggKiB6ICsgbTEyICogdyxcbiAgICBtMSAqIHggKyBtNSAqIHkgKyBtOSAqIHogKyBtMTMgKiB3LFxuICAgIG0yICogeCArIG02ICogeSArIG0xMCAqIHogKyBtMTQgKiB3LFxuICAgIG0zICogeCArIG03ICogeSArIG0xMSAqIHogKyBtMTUgKiB3LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VtMiguLi52ZWN0b3JzKSB7XG4gIGNvbnN0IHplcm8gPSB6ZXJvMigpLFxuICAgICAgICBzdW0gPSB2ZWN0b3JzLnJlZHVjZSgoc3VtLCB2ZWN0b3IpID0+IHtcbiAgICAgICAgICBzdW0gPSBhZGQyKHN1bSwgdmVjdG9yKTtcblxuICAgICAgICAgIHJldHVybiBzdW07XG4gICAgICAgIH0sIHplcm8pO1xuXG4gIHJldHVybiBzdW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdW0zKC4uLnZlY3RvcnMpIHtcbiAgY29uc3QgemVybyA9IHplcm8zKCksXG4gICAgICAgIHN1bSA9IHZlY3RvcnMucmVkdWNlKChzdW0sIHZlY3RvcikgPT4ge1xuICAgICAgICAgIHN1bSA9IGFkZDMoc3VtLCB2ZWN0b3IpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1bTtcbiAgICAgICAgfSwgemVybyk7XG5cbiAgcmV0dXJuIHN1bTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bTQoLi4udmVjdG9ycykge1xuICBjb25zdCB6ZXJvID0gemVybzQoKSxcbiAgICAgICAgc3VtID0gdmVjdG9ycy5yZWR1Y2UoKHN1bSwgdmVjdG9yKSA9PiB7XG4gICAgICAgICAgc3VtID0gYWRkNChzdW0sIHZlY3Rvcik7XG5cbiAgICAgICAgICByZXR1cm4gc3VtO1xuICAgICAgICB9LCB6ZXJvKTtcblxuICByZXR1cm4gc3VtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVhbjIoLi4udmVjdG9ycykge1xuICBjb25zdCBsZW5ndGggPSB2ZWN0b3JzLmxlbmd0aCxcbiAgICAgICAgc3VtID0gc3VtMiguLi52ZWN0b3JzKSxcbiAgICAgICAgbWVhbiA9IGRpdmlkZTIoc3VtLCBsZW5ndGgpO1xuXG4gIHJldHVybiBtZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVhbjMoLi4udmVjdG9ycykge1xuICBjb25zdCBsZW5ndGggPSB2ZWN0b3JzLmxlbmd0aCxcbiAgICAgICAgc3VtID0gc3VtMyguLi52ZWN0b3JzKSxcbiAgICAgICAgbWVhbiA9IGRpdmlkZTMoc3VtLCBsZW5ndGgpO1xuXG4gIHJldHVybiBtZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVhbjQoLi4udmVjdG9ycykge1xuICBjb25zdCBsZW5ndGggPSB2ZWN0b3JzLmxlbmd0aCxcbiAgICAgICAgc3VtID0gc3VtNCguLi52ZWN0b3JzKSxcbiAgICAgICAgbWVhbiA9IGRpdmlkZTQoc3VtLCBsZW5ndGgpO1xuXG4gIHJldHVybiBtZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHplcm8yLFxuICB6ZXJvMyxcbiAgemVybzQsXG4gIGxlbmd0aDIsXG4gIGxlbmd0aDMsXG4gIGxlbmd0aDQsXG4gIGRvdDIsXG4gIGRvdDMsXG4gIGRvdDQsXG4gIGNyb3NzMyxcbiAgbm9ybWFsaXNlMixcbiAgbm9ybWFsaXNlMyxcbiAgbm9ybWFsaXNlNCxcbiAgcmVmbGVjdDIsXG4gIHJlZmxlY3QzLFxuICByZWZsZWN0NCxcbiAgdHJ1bmNhdGU0LFxuICBhZGQyLFxuICBhZGQzLFxuICBhZGQ0LFxuICBzdWJ0cmFjdDIsXG4gIHN1YnRyYWN0MyxcbiAgc3VidHJhY3Q0LFxuICBtdWx0aXBseTIsXG4gIG11bHRpcGx5MyxcbiAgbXVsdGlwbHk0LFxuICBkaXZpZGUyLFxuICBkaXZpZGUzLFxuICBkaXZpZGU0LFxuICBzY2FsZTIsXG4gIHNjYWxlMyxcbiAgc2NhbGU0LFxuICB0cmFuc2Zvcm0yLFxuICB0cmFuc2Zvcm0zLFxuICB0cmFuc2Zvcm00LFxuICBzdW0yLFxuICBzdW0zLFxuICBzdW00LFxuICBtZWFuMixcbiAgbWVhbjMsXG4gIG1lYW40XG59O1xuIl0sIm5hbWVzIjpbImFkZDIiLCJhZGQzIiwiYWRkNCIsImNyb3NzMyIsImRpdmlkZTIiLCJkaXZpZGUzIiwiZGl2aWRlNCIsImRvdDIiLCJkb3QzIiwiZG90NCIsImxlbmd0aDIiLCJsZW5ndGgzIiwibGVuZ3RoNCIsIm1lYW4yIiwibWVhbjMiLCJtZWFuNCIsIm11bHRpcGx5MiIsIm11bHRpcGx5MyIsIm11bHRpcGx5NCIsIm5vcm1hbGlzZTIiLCJub3JtYWxpc2UzIiwibm9ybWFsaXNlNCIsInJlZmxlY3QyIiwicmVmbGVjdDMiLCJyZWZsZWN0NCIsInNjYWxlMiIsInNjYWxlMyIsInNjYWxlNCIsInN1YnRyYWN0MiIsInN1YnRyYWN0MyIsInN1YnRyYWN0NCIsInN1bTIiLCJzdW0zIiwic3VtNCIsInRyYW5zZm9ybTIiLCJ0cmFuc2Zvcm0zIiwidHJhbnNmb3JtNCIsInRydW5jYXRlNCIsInplcm8yIiwiemVybzMiLCJ6ZXJvNCIsInZlY3RvciIsIngiLCJ5IiwiTWF0aCIsInNxcnQiLCJ6IiwidyIsInZlY3RvckEiLCJ2ZWN0b3JCIiwiYTAiLCJhMSIsImIwIiwiYjEiLCJhMiIsImIyIiwiYTMiLCJiMyIsImxlbmd0aCIsIngwIiwieTAiLCJ4MSIsInkxIiwiejAiLCJ6MSIsIncwIiwidzEiLCJkaXZpc29yIiwic2NhbGFyIiwibWF0cml4IiwibTAiLCJtMSIsIm0yIiwibTMiLCJtNCIsIm01IiwibTYiLCJtNyIsIm04IiwibTkiLCJtMTAiLCJtMTEiLCJtMTIiLCJtMTMiLCJtMTQiLCJtMTUiLCJ2ZWN0b3JzIiwiemVybyIsInN1bSIsInJlZHVjZSIsIm1lYW4iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQThLZ0JBLElBQUk7ZUFBSkE7O0lBWUFDLElBQUk7ZUFBSkE7O0lBYUFDLElBQUk7ZUFBSkE7O0lBaElBQyxNQUFNO2VBQU5BOztJQXdZaEIsT0EwQ0U7ZUExQ0Y7O0lBNUtnQkMsT0FB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