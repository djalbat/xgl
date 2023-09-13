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
    multiply2: function() {
        return multiply2;
    },
    multiply3: function() {
        return multiply3;
    },
    multiply4: function() {
        return multiply4;
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
    return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1];
}
function dot3(vectorA, vectorB) {
    return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1] + vectorA[2] * vectorB[2];
}
function dot4(vectorA, vectorB) {
    return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1] + vectorA[2] * vectorB[2] + vectorA[3] * vectorB[3];
}
function cross3(vectorA, vectorB) {
    var ax = vectorA[0], ay = vectorA[1], az = vectorA[2], bx = vectorB[0], by = vectorB[1], bz = vectorB[2];
    return [
        ay * bz - az * by,
        az * bx - ax * bz,
        ax * by - ay * bx
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
    var x = vector[0], y = vector[1], z = vector[2], length = Math.sqrt(x * x + y * y + z * z);
    return [
        x / length,
        y / length,
        z / length
    ];
}
function normalise4(vector) {
    var x = vector[0], y = vector[1], z = vector[2], w = vector[3], length = Math.sqrt(x * x + y * y + z * z + w * w);
    return [
        x / length,
        y / length,
        z / length,
        w / length
    ];
}
function reflect2(vector) {
    return [
        -vector[0],
        -vector[1]
    ];
}
function reflect3(vector) {
    return [
        -vector[0],
        -vector[1],
        -vector[2]
    ];
}
function reflect4(vector) {
    return [
        -vector[0],
        -vector[1],
        -vector[2],
        -vector[3]
    ];
}
function truncate4(vector) {
    return [
        vector[0],
        vector[1],
        vector[2]
    ];
}
function scale2(vector, scalar) {
    return [
        vector[0] * scalar,
        vector[1] * scalar
    ];
}
function scale3(vector, scalar) {
    return [
        vector[0] * scalar,
        vector[1] * scalar,
        vector[2] * scalar
    ];
}
function scale4(vector, scalar) {
    return [
        vector[0] * scalar,
        vector[1] * scalar,
        vector[2] * scalar,
        vector[3] * scalar
    ];
}
function add2(vectorA, vectorB) {
    return [
        vectorA[0] + vectorB[0],
        vectorA[1] + vectorB[1]
    ];
}
function add3(vectorA, vectorB) {
    return [
        vectorA[0] + vectorB[0],
        vectorA[1] + vectorB[1],
        vectorA[2] + vectorB[2]
    ];
}
function add4(vectorA, vectorB) {
    return [
        vectorA[0] + vectorB[0],
        vectorA[1] + vectorB[1],
        vectorA[2] + vectorB[2],
        vectorA[3] + vectorB[3]
    ];
}
function subtract2(vectorA, vectorB) {
    return [
        vectorA[0] - vectorB[0],
        vectorA[1] - vectorB[1]
    ];
}
function subtract3(vectorA, vectorB) {
    return [
        vectorA[0] - vectorB[0],
        vectorA[1] - vectorB[1],
        vectorA[2] - vectorB[2]
    ];
}
function subtract4(vectorA, vectorB) {
    return [
        vectorA[0] - vectorB[0],
        vectorA[1] - vectorB[1],
        vectorA[2] - vectorB[2],
        vectorA[3] - vectorB[3]
    ];
}
function multiply2(vectorA, vectorB) {
    return [
        vectorA[0] * vectorB[0],
        vectorA[1] * vectorB[1]
    ];
}
function multiply3(vectorA, vectorB) {
    return [
        vectorA[0] * vectorB[0],
        vectorA[1] * vectorB[1],
        vectorA[2] * vectorB[2]
    ];
}
function multiply4(vectorA, vectorB) {
    return [
        vectorA[0] * vectorB[0],
        vectorA[1] * vectorB[1],
        vectorA[2] * vectorB[2],
        vectorA[3] * vectorB[3]
    ];
}
function transform2(vector, matrix) {
    var x = vector[0], y = vector[1];
    return [
        matrix[0] * x + matrix[2] * y,
        matrix[1] * x + matrix[3] * y
    ];
}
function transform3(vector, matrix) {
    var x = vector[0], y = vector[1], z = vector[2];
    return [
        matrix[0] * x + matrix[3] * y + matrix[6] * z,
        matrix[1] * x + matrix[4] * y + matrix[7] * z,
        matrix[2] * x + matrix[5] * y + matrix[8] * z
    ];
}
function transform4(vector, matrix) {
    var x = vector[0], y = vector[1], z = vector[2], w = vector[3];
    return [
        matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12] * w,
        matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13] * w,
        matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14] * w,
        matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15] * w
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
    multiply2: multiply2,
    multiply3: multiply3,
    multiply4: multiply4,
    transform2: transform2,
    transform3: transform3,
    transform4: transform4
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXRocy92ZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvMigpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvMygpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm80KCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgyKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgzKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcjtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGg0KHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHosIHcgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeiArIHcqdyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QyKHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuICh2ZWN0b3JBWzBdICogdmVjdG9yQlswXSArIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZG90Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiAodmVjdG9yQVswXSAqIHZlY3RvckJbMF0gKyB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSArIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzJdKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZG90NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiAodmVjdG9yQVswXSAqIHZlY3RvckJbMF0gKyB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSArIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzJdICsgdmVjdG9yQVszXSAqIHZlY3RvckJbM10pOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjcm9zczModmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBheCA9IHZlY3RvckFbMF0sIGF5ID0gdmVjdG9yQVsxXSwgYXogPSB2ZWN0b3JBWzJdLFxuICAgICAgICBieCA9IHZlY3RvckJbMF0sIGJ5ID0gdmVjdG9yQlsxXSwgYnogPSB2ZWN0b3JCWzJdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYXkgKiBieiAtIGF6ICogYnksXG4gICAgYXogKiBieCAtIGF4ICogYnosXG4gICAgYXggKiBieSAtIGF5ICogYngsXG5cbiAgXSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGlzZTIodmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSBdID0gdmVjdG9yLFxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCp4ICsgeSp5KTtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBsZW5ndGgsXG4gICAgeSAvIGxlbmd0aCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGlzZTModmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl0sXG4gICAgICAgIGxlbmd0aCA9IE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnopO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCAvIGxlbmd0aCxcbiAgICB5IC8gbGVuZ3RoLFxuICAgIHogLyBsZW5ndGgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpc2U0KHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuICAgICAgICB3ID0gdmVjdG9yWzNdLFxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6ICsgdyp3KTtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBsZW5ndGgsXG4gICAgeSAvIGxlbmd0aCxcbiAgICB6IC8gbGVuZ3RoLFxuICAgIHcgLyBsZW5ndGgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZsZWN0Mih2ZWN0b3IpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAtdmVjdG9yWzBdLFxuICAgIC12ZWN0b3JbMV0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZsZWN0Myh2ZWN0b3IpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAtdmVjdG9yWzBdLFxuICAgIC12ZWN0b3JbMV0sXG4gICAgLXZlY3RvclsyXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmxlY3Q0KHZlY3Rvcikge1xuICByZXR1cm4gKFtcblxuICAgIC12ZWN0b3JbMF0sXG4gICAgLXZlY3RvclsxXSxcbiAgICAtdmVjdG9yWzJdLFxuICAgIC12ZWN0b3JbM10sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cnVuY2F0ZTQodmVjdG9yKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yWzBdLFxuICAgIHZlY3RvclsxXSxcbiAgICB2ZWN0b3JbMl1cblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlMih2ZWN0b3IsIHNjYWxhcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMV0gKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTModmVjdG9yLCBzY2FsYXIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzFdICogc2NhbGFyLFxuICAgIHZlY3RvclsyXSAqIHNjYWxhcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlNCh2ZWN0b3IsIHNjYWxhcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMV0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzJdICogc2NhbGFyLFxuICAgIHZlY3RvclszXSAqIHNjYWxhcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZDIodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKyB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKyB2ZWN0b3JCWzFdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSArIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSArIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSArIHZlY3RvckJbMl0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQ0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICsgdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICsgdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdICsgdmVjdG9yQlsyXSxcbiAgICB2ZWN0b3JBWzNdICsgdmVjdG9yQlszXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0Mih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAtIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAtIHZlY3RvckJbMV0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDModmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gLSB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gLSB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gLSB2ZWN0b3JCWzJdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Q0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdIC0gdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdIC0gdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdIC0gdmVjdG9yQlsyXSxcbiAgICB2ZWN0b3JBWzNdIC0gdmVjdG9yQlszXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5Mih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAqIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTModmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzJdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHk0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICogdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdICogdmVjdG9yQlsyXSxcbiAgICB2ZWN0b3JBWzNdICogdmVjdG9yQlszXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybTIodmVjdG9yLCBtYXRyaXgpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXTtcblxuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFswXSAqIHggKyBtYXRyaXhbMl0gKiB5LFxuICAgIG1hdHJpeFsxXSAqIHggKyBtYXRyaXhbM10gKiB5LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtMyh2ZWN0b3IsIG1hdHJpeCkge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WzBdICogeCArIG1hdHJpeFszXSAqIHkgKyBtYXRyaXhbNl0gKiB6LFxuICAgIG1hdHJpeFsxXSAqIHggKyBtYXRyaXhbNF0gKiB5ICsgbWF0cml4WzddICogeixcbiAgICBtYXRyaXhbMl0gKiB4ICsgbWF0cml4WzVdICogeSArIG1hdHJpeFs4XSAqIHosXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm00KHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl0sXG4gICAgICAgIHcgPSB2ZWN0b3JbM107XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbIDBdICogeCArIG1hdHJpeFsgNF0gKiB5ICsgbWF0cml4WyA4XSAqIHogKyBtYXRyaXhbMTJdICogdyxcbiAgICBtYXRyaXhbIDFdICogeCArIG1hdHJpeFsgNV0gKiB5ICsgbWF0cml4WyA5XSAqIHogKyBtYXRyaXhbMTNdICogdyxcbiAgICBtYXRyaXhbIDJdICogeCArIG1hdHJpeFsgNl0gKiB5ICsgbWF0cml4WzEwXSAqIHogKyBtYXRyaXhbMTRdICogdyxcbiAgICBtYXRyaXhbIDNdICogeCArIG1hdHJpeFsgN10gKiB5ICsgbWF0cml4WzExXSAqIHogKyBtYXRyaXhbMTVdICogdyxcblxuICBdKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICB6ZXJvMixcbiAgemVybzMsXG4gIHplcm80LFxuICBsZW5ndGgyLFxuICBsZW5ndGgzLFxuICBsZW5ndGg0LFxuICBkb3QyLFxuICBkb3QzLFxuICBkb3Q0LFxuICBjcm9zczMsXG4gIG5vcm1hbGlzZTIsXG4gIG5vcm1hbGlzZTMsXG4gIG5vcm1hbGlzZTQsXG4gIHJlZmxlY3QyLFxuICByZWZsZWN0MyxcbiAgcmVmbGVjdDQsXG4gIHRydW5jYXRlNCxcbiAgc2NhbGUyLFxuICBzY2FsZTMsXG4gIHNjYWxlNCxcbiAgYWRkMixcbiAgYWRkMyxcbiAgYWRkNCxcbiAgc3VidHJhY3QyLFxuICBzdWJ0cmFjdDMsXG4gIHN1YnRyYWN0NCxcbiAgbXVsdGlwbHkyLFxuICBtdWx0aXBseTMsXG4gIG11bHRpcGx5NCxcbiAgdHJhbnNmb3JtMixcbiAgdHJhbnNmb3JtMyxcbiAgdHJhbnNmb3JtNFxufTtcbiJdLCJuYW1lcyI6WyJ6ZXJvMiIsInplcm8zIiwiemVybzQiLCJsZW5ndGgyIiwibGVuZ3RoMyIsImxlbmd0aDQiLCJkb3QyIiwiZG90MyIsImRvdDQiLCJjcm9zczMiLCJub3JtYWxpc2UyIiwibm9ybWFsaXNlMyIsIm5vcm1hbGlzZTQiLCJyZWZsZWN0MiIsInJlZmxlY3QzIiwicmVmbGVjdDQiLCJ0cnVuY2F0ZTQiLCJzY2FsZTIiLCJzY2FsZTMiLCJzY2FsZTQiLCJhZGQyIiwiYWRkMyIsImFkZDQiLCJzdWJ0cmFjdDIiLCJzdWJ0cmFjdDMiLCJzdWJ0cmFjdDQiLCJtdWx0aXBseTIiLCJtdWx0aXBseTMiLCJtdWx0aXBseTQiLCJ0cmFuc2Zvcm0yIiwidHJhbnNmb3JtMyIsInRyYW5zZm9ybTQiLCJ2ZWN0b3IiLCJ4IiwieSIsIk1hdGgiLCJzcXJ0IiwieiIsInciLCJ2ZWN0b3JBIiwidmVjdG9yQiIsImF4IiwiYXkiLCJheiIsImJ4IiwiYnkiLCJieiIsImxlbmd0aCIsInNjYWxhciIsIm1hdHJpeCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRWdCQSxLQUFLO2VBQUxBOztJQVNBQyxLQUFLO2VBQUxBOztJQVVBQyxL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RyxHQUFHWixJQUFJWSxNQUFNLENBQUMsR0FBRyxHQUFHWDtRQUNoRVcsTUFBTSxDQUFFLEVBQUUsR0FBR2hCLElBQUlnQixNQUFNLENBQUUsRUFBRSxHQUFHZixJQUFJZSxNQUFNLENBQUMsR0FBRyxHQUFHWixJQUFJWSxNQUFNLENBQUMsR0FBRyxHQUFHWDtLQUVqRTtBQUNIO0lBRUEsV0FBZTtJQUNidEMsT0FBQUE7SUFDQUMsT0FBQUE7SUFDQUMsT0FBQUE7SUFDQUMsU0FBQUE7SUFDQUMsU0FBQUE7SUFDQUMsU0FBQUE7SUFDQUMsTUFBQUE7SUFDQUMsTUFBQUE7SUFDQUMsTUFBQUE7SUFDQUMsUUFBQUE7SUFDQUMsWUFBQUE7SUFDQUMsWUFBQUE7SUFDQUMsWUFBQUE7SUFDQUMsVUFBQUE7SUFDQUMsVUFBQUE7SUFDQUMsVUFBQUE7SUFDQUMsV0FBQUE7SUFDQUMsUUFBQUE7SUFDQUMsUUFBQUE7SUFDQUMsUUFBQUE7SUFDQUMsTUFBQUE7SUFDQUMsTUFBQUE7SUFDQUMsTUFBQUE7SUFDQUMsV0FBQUE7SUFDQUMsV0FBQUE7SUFDQUMsV0FBQUE7SUFDQUMsV0FBQUE7SUFDQUMsV0FBQUE7SUFDQUMsV0FBQUE7SUFDQUMsWUFBQUE7SUFDQUMsWUFBQUE7SUFDQUMsWUFBQUE7QUFDRiJ9