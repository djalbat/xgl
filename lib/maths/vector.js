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
    get add2 () {
        return add2;
    },
    get add3 () {
        return add3;
    },
    get add4 () {
        return add4;
    },
    get cross3 () {
        return cross3;
    },
    get default () {
        return _default;
    },
    get divide2 () {
        return divide2;
    },
    get divide3 () {
        return divide3;
    },
    get divide4 () {
        return divide4;
    },
    get dot2 () {
        return dot2;
    },
    get dot3 () {
        return dot3;
    },
    get dot4 () {
        return dot4;
    },
    get length2 () {
        return length2;
    },
    get length3 () {
        return length3;
    },
    get length4 () {
        return length4;
    },
    get mean2 () {
        return mean2;
    },
    get mean3 () {
        return mean3;
    },
    get mean4 () {
        return mean4;
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
    get normalise2 () {
        return normalise2;
    },
    get normalise3 () {
        return normalise3;
    },
    get normalise4 () {
        return normalise4;
    },
    get reflect2 () {
        return reflect2;
    },
    get reflect3 () {
        return reflect3;
    },
    get reflect4 () {
        return reflect4;
    },
    get scale2 () {
        return scale2;
    },
    get scale3 () {
        return scale3;
    },
    get scale4 () {
        return scale4;
    },
    get subtract2 () {
        return subtract2;
    },
    get subtract3 () {
        return subtract3;
    },
    get subtract4 () {
        return subtract4;
    },
    get sum2 () {
        return sum2;
    },
    get sum3 () {
        return sum3;
    },
    get sum4 () {
        return sum4;
    },
    get transform2 () {
        return transform2;
    },
    get transform3 () {
        return transform3;
    },
    get transform4 () {
        return transform4;
    },
    get truncate4 () {
        return truncate4;
    },
    get zero2 () {
        return zero2;
    },
    get zero3 () {
        return zero3;
    },
    get zero4 () {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXRocy92ZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvMigpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvMygpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm80KCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgyKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoMyh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoNCh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6LCB3IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoYTAgKiBiMCArIGExICogYjEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG90Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoYTAgKiBiMCArIGExICogYjEgKyBhMiAqIGIyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdDQodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIsIGEzIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIGIwLCBiMSwgYjIsIGIzIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoYTAgKiBiMCArIGExICogYjEgKyBhMiAqIGIyICsgYTMgKiBiMyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcm9zczModmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGExICogYjIgLSBhMiAqIGIxLFxuICAgIGEyICogYjAgLSBhMCAqIGIyLFxuICAgIGEwICogYjEgLSBhMSAqIGIwLFxuXG4gIF0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpc2UyKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcixcblxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4IC8gbGVuZ3RoLFxuICAgIHkgLyBsZW5ndGgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpc2UzKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcixcblxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBsZW5ndGgsXG4gICAgeSAvIGxlbmd0aCxcbiAgICB6IC8gbGVuZ3RoLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXNlNCh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6LCB3IF0gPSB2ZWN0b3IsXG5cbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3KTtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBsZW5ndGgsXG4gICAgeSAvIGxlbmd0aCxcbiAgICB6IC8gbGVuZ3RoLFxuICAgIHcgLyBsZW5ndGgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZsZWN0Mih2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICAteCxcbiAgICAteSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmxlY3QzKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIC14LFxuICAgIC15LFxuICAgIC16LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmbGVjdDQodmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiwgdyBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgLXgsXG4gICAgLXksXG4gICAgLXosXG4gICAgLXcsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cnVuY2F0ZTQodmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCxcbiAgICB5LFxuICAgIHosXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKyBiMCxcbiAgICBhMSArIGIxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKyBiMCxcbiAgICBhMSArIGIxLFxuICAgIGEyICsgYjIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQ0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyLCBhMyBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyLCBiMyBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICsgYjAsXG4gICAgYTEgKyBiMSxcbiAgICBhMiArIGIyLFxuICAgIGEzICsgYjMsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDIodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAtIGIwLFxuICAgIGExIC0gYjEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDModmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwIC0gYjAsXG4gICAgYTEgLSBiMSxcbiAgICBhMiAtIGIyLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Q0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyLCBhMyBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyLCBiMyBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwIC0gYjAsXG4gICAgYTEgLSBiMSxcbiAgICBhMiAtIGIyLFxuICAgIGEzIC0gYjMsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTIodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIHgwLCB5MCBdID0gdmVjdG9yQSxcbiAgICAgICAgWyB4MSwgeTEgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4MCAqIHgxLFxuICAgIHkwICogeTEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTModmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIHgwLCB5MCwgejAgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgeDEsIHkxLCB6MSBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIHgwICogeDEsXG4gICAgeTAgKiB5MSxcbiAgICB6MCAqIHoxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHk0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyB4MCwgeTAsIHowLCB3MCBdID0gdmVjdG9yQSxcbiAgICAgICAgWyB4MSwgeTEsIHoxLCB3MSBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIHgwICogeDEsXG4gICAgeTAgKiB5MSxcbiAgICB6MCAqIHoxLFxuICAgIHcwICogdzEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGUyKHZlY3RvciwgZGl2aXNvcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBkaXZpc29yLFxuICAgIHkgLyBkaXZpc29yLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlMyh2ZWN0b3IsIGRpdmlzb3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4IC8gZGl2aXNvcixcbiAgICB5IC8gZGl2aXNvcixcbiAgICB6IC8gZGl2aXNvcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZTQodmVjdG9yLCBkaXZpc29yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiwgdyBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCAvIGRpdmlzb3IsXG4gICAgeSAvIGRpdmlzb3IsXG4gICAgeiAvIGRpdmlzb3IsXG4gICAgdyAvIGRpdmlzb3IsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTIodmVjdG9yLCBzY2FsYXIpIHtcbiAgY29uc3QgWyB4LCB5IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4ICogc2NhbGFyLFxuICAgIHkgKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTModmVjdG9yLCBzY2FsYXIpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4ICogc2NhbGFyLFxuICAgIHkgKiBzY2FsYXIsXG4gICAgeiAqIHNjYWxhcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlNCh2ZWN0b3IsIHNjYWxhcikge1xuICBjb25zdCBbIHgsIHksIHosIHcgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIHggKiBzY2FsYXIsXG4gICAgeSAqIHNjYWxhcixcbiAgICB6ICogc2NhbGFyLFxuICAgIHcgKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0yKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IFsgeCwgeSBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMgXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgIG0wICogeCArIG0yICogeSxcbiAgICBtMSAqIHggKyBtMyAqIHksXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0zKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCBdID0gbWF0cml4O1xuXG4gIHJldHVybiAoW1xuXG4gICAgbTAgKiB4ICsgbTMgKiB5ICsgbTYgKiB6LFxuICAgIG0xICogeCArIG00ICogeSArIG03ICogeixcbiAgICBtMiAqIHggKyBtNSAqIHkgKyBtOCAqIHosXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm00KHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IFsgeCwgeSwgeiwgdyBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeDtcblxuXG4gIHJldHVybiAoW1xuXG4gICAgbTAgKiB4ICsgbTQgKiB5ICsgbTggKiB6ICsgbTEyICogdyxcbiAgICBtMSAqIHggKyBtNSAqIHkgKyBtOSAqIHogKyBtMTMgKiB3LFxuICAgIG0yICogeCArIG02ICogeSArIG0xMCAqIHogKyBtMTQgKiB3LFxuICAgIG0zICogeCArIG03ICogeSArIG0xMSAqIHogKyBtMTUgKiB3LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VtMiguLi52ZWN0b3JzKSB7XG4gIGNvbnN0IHplcm8gPSB6ZXJvMigpLFxuICAgICAgICBzdW0gPSB2ZWN0b3JzLnJlZHVjZSgoc3VtLCB2ZWN0b3IpID0+IHtcbiAgICAgICAgICBzdW0gPSBhZGQyKHN1bSwgdmVjdG9yKTtcblxuICAgICAgICAgIHJldHVybiBzdW07XG4gICAgICAgIH0sIHplcm8pO1xuXG4gIHJldHVybiBzdW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdW0zKC4uLnZlY3RvcnMpIHtcbiAgY29uc3QgemVybyA9IHplcm8zKCksXG4gICAgICAgIHN1bSA9IHZlY3RvcnMucmVkdWNlKChzdW0sIHZlY3RvcikgPT4ge1xuICAgICAgICAgIHN1bSA9IGFkZDMoc3VtLCB2ZWN0b3IpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1bTtcbiAgICAgICAgfSwgemVybyk7XG5cbiAgcmV0dXJuIHN1bTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bTQoLi4udmVjdG9ycykge1xuICBjb25zdCB6ZXJvID0gemVybzQoKSxcbiAgICAgICAgc3VtID0gdmVjdG9ycy5yZWR1Y2UoKHN1bSwgdmVjdG9yKSA9PiB7XG4gICAgICAgICAgc3VtID0gYWRkNChzdW0sIHZlY3Rvcik7XG5cbiAgICAgICAgICByZXR1cm4gc3VtO1xuICAgICAgICB9LCB6ZXJvKTtcblxuICByZXR1cm4gc3VtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVhbjIoLi4udmVjdG9ycykge1xuICBjb25zdCBsZW5ndGggPSB2ZWN0b3JzLmxlbmd0aCxcbiAgICAgICAgc3VtID0gc3VtMiguLi52ZWN0b3JzKSxcbiAgICAgICAgbWVhbiA9IGRpdmlkZTIoc3VtLCBsZW5ndGgpO1xuXG4gIHJldHVybiBtZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVhbjMoLi4udmVjdG9ycykge1xuICBjb25zdCBsZW5ndGggPSB2ZWN0b3JzLmxlbmd0aCxcbiAgICAgICAgc3VtID0gc3VtMyguLi52ZWN0b3JzKSxcbiAgICAgICAgbWVhbiA9IGRpdmlkZTMoc3VtLCBsZW5ndGgpO1xuXG4gIHJldHVybiBtZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVhbjQoLi4udmVjdG9ycykge1xuICBjb25zdCBsZW5ndGggPSB2ZWN0b3JzLmxlbmd0aCxcbiAgICAgICAgc3VtID0gc3VtNCguLi52ZWN0b3JzKSxcbiAgICAgICAgbWVhbiA9IGRpdmlkZTQoc3VtLCBsZW5ndGgpO1xuXG4gIHJldHVybiBtZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHplcm8yLFxuICB6ZXJvMyxcbiAgemVybzQsXG4gIGxlbmd0aDIsXG4gIGxlbmd0aDMsXG4gIGxlbmd0aDQsXG4gIGRvdDIsXG4gIGRvdDMsXG4gIGRvdDQsXG4gIGNyb3NzMyxcbiAgbm9ybWFsaXNlMixcbiAgbm9ybWFsaXNlMyxcbiAgbm9ybWFsaXNlNCxcbiAgcmVmbGVjdDIsXG4gIHJlZmxlY3QzLFxuICByZWZsZWN0NCxcbiAgdHJ1bmNhdGU0LFxuICBhZGQyLFxuICBhZGQzLFxuICBhZGQ0LFxuICBzdWJ0cmFjdDIsXG4gIHN1YnRyYWN0MyxcbiAgc3VidHJhY3Q0LFxuICBtdWx0aXBseTIsXG4gIG11bHRpcGx5MyxcbiAgbXVsdGlwbHk0LFxuICBkaXZpZGUyLFxuICBkaXZpZGUzLFxuICBkaXZpZGU0LFxuICBzY2FsZTIsXG4gIHNjYWxlMyxcbiAgc2NhbGU0LFxuICB0cmFuc2Zvcm0yLFxuICB0cmFuc2Zvcm0zLFxuICB0cmFuc2Zvcm00LFxuICBzdW0yLFxuICBzdW0zLFxuICBzdW00LFxuICBtZWFuMixcbiAgbWVhbjMsXG4gIG1lYW40XG59O1xuIl0sIm5hbWVzIjpbImFkZDIiLCJhZGQzIiwiYWRkNCIsImNyb3NzMyIsImRpdmlkZTIiLCJkaXZpZGUzIiwiZGl2aWRlNCIsImRvdDIiLCJkb3QzIiwiZG90NCIsImxlbmd0aDIiLCJsZW5ndGgzIiwibGVuZ3RoNCIsIm1lYW4yIiwibWVhbjMiLCJtZWFuNCIsIm11bHRpcGx5MiIsIm11bHRpcGx5MyIsIm11bHRpcGx5NCIsIm5vcm1hbGlzZTIiLCJub3JtYWxpc2UzIiwibm9ybWFsaXNlNCIsInJlZmxlY3QyIiwicmVmbGVjdDMiLCJyZWZsZWN0NCIsInNjYWxlMiIsInNjYWxlMyIsInNjYWxlNCIsInN1YnRyYWN0MiIsInN1YnRyYWN0MyIsInN1YnRyYWN0NCIsInN1bTIiLCJzdW0zIiwic3VtNCIsInRyYW5zZm9ybTIiLCJ0cmFuc2Zvcm0zIiwidHJhbnNmb3JtNCIsInRydW5jYXRlNCIsInplcm8yIiwiemVybzMiLCJ6ZXJvNCIsInZlY3RvciIsIngiLCJ5IiwiTWF0aCIsInNxcnQiLCJ6IiwidyIsInZlY3RvckEiLCJ2ZWN0b3JCIiwiYTAiLCJhMSIsImIwIiwiYjEiLCJhMiIsImIyIiwiYTMiLCJiMyIsImxlbmd0aCIsIngwIiwieTAiLCJ4MSIsInkxIiwiejAiLCJ6MSIsIncwIiwidzEiLCJkaXZpc29yIiwic2NhbGFyIiwibWF0cml4IiwibTAiLCJtMSIsIm0yIiwibTMiLCJtNCIsIm01IiwibTYiLCJtNyIsIm04IiwibTkiLCJtMTAiLCJtMTEiLCJtMTIiLCJtMTMiLCJtMTQiLCJtMTUiLCJ2ZWN0b3JzIiwiemVybyIsInN1bSIsInJlZHVjZSIsIm1lYW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQThLZ0JBO2VBQUFBOztRQVlBQztlQUFBQTs7UUFhQUM7ZUFBQUE7O1FBaElBQztlQUFBQTs7UUF3WWhCO2VBQUE7O1FBNUtnQkM7ZUFBQUE7O1FBV0FDO2VBQUFBOztRQVlBQztlQUFBQTs7UUF4UUFDO2VBQUFBOztRQU9BQztlQUFBQTs7UUFPQUM7ZUFBQUE7O1FBaENBQztlQUFBQTs7UUFNQUM7ZUFBQUE7O1FBTUFDO2VBQUFBOztRQTJZQUM7ZUFBQUE7O1FBUUFDO2VBQUFBOztRQVFBQztlQUFBQTs7UUEzTUFDO2VBQUFBOztRQVlBQztlQUFBQTs7UUFhQUM7ZUFBQUE7O1FBak1BQztlQUFBQTs7UUFhQUM7ZUFBQUE7O1FBY0FDO2VBQUFBOztRQWVBQztlQUFBQTs7UUFXQUM7ZUFBQUE7O1FBWUFDO2VBQUFBOztRQWtMQUM7ZUFBQUE7O1FBV0FDO2VBQUFBOztRQVlBQztlQUFBQTs7UUF6SUFDO2VBQUFBOztRQVlBQztlQUFBQTs7UUFhQUM7ZUFBQUE7O1FBd0tBQztlQUFBQTs7UUFXQUM7ZUFBQUE7O1FBV0FDO2VBQUFBOztRQWpFQUM7ZUFBQUE7O1FBYUFDO2VBQUFBOztRQWNBQztlQUFBQTs7UUFwT0FDO2VBQUFBOztRQWhLQUM7ZUFBQUE7O1FBU0FDO2VBQUFBOztRQVVBQztlQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW5CVCxTQUFTRjtJQUNkLE9BQVE7UUFFTjtRQUNBO0tBRUQ7QUFDSDtBQUVP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