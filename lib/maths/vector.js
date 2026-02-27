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
    const [x, y] = vector;
    return Math.sqrt(x * x + y * y);
}
function length3(vector) {
    const [x, y, z] = vector;
    return Math.sqrt(x * x + y * y + z * z);
}
function length4(vector) {
    const [x, y, z, w] = vector;
    return Math.sqrt(x * x + y * y + z * z + w * w);
}
function dot2(vectorA, vectorB) {
    const [a0, a1] = vectorA, [b0, b1] = vectorB;
    return a0 * b0 + a1 * b1;
}
function dot3(vectorA, vectorB) {
    const [a0, a1, a2] = vectorA, [b0, b1, b2] = vectorB;
    return a0 * b0 + a1 * b1 + a2 * b2;
}
function dot4(vectorA, vectorB) {
    const [a0, a1, a2, a3] = vectorA, [b0, b1, b2, b3] = vectorB;
    return a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
}
function cross3(vectorA, vectorB) {
    const [a0, a1, a2] = vectorA, [b0, b1, b2] = vectorB;
    return [
        a1 * b2 - a2 * b1,
        a2 * b0 - a0 * b2,
        a0 * b1 - a1 * b0
    ];
}
function normalise2(vector) {
    const [x, y] = vector, length = Math.sqrt(x * x + y * y);
    return [
        x / length,
        y / length
    ];
}
function normalise3(vector) {
    const [x, y, z] = vector, length = Math.sqrt(x * x + y * y + z * z);
    return [
        x / length,
        y / length,
        z / length
    ];
}
function normalise4(vector) {
    const [x, y, z, w] = vector, length = Math.sqrt(x * x + y * y + z * z + w * w);
    return [
        x / length,
        y / length,
        z / length,
        w / length
    ];
}
function reflect2(vector) {
    const [x, y] = vector;
    return [
        -x,
        -y
    ];
}
function reflect3(vector) {
    const [x, y, z] = vector;
    return [
        -x,
        -y,
        -z
    ];
}
function reflect4(vector) {
    const [x, y, z, w] = vector;
    return [
        -x,
        -y,
        -z,
        -w
    ];
}
function truncate4(vector) {
    const [x, y, z] = vector;
    return [
        x,
        y,
        z
    ];
}
function add2(vectorA, vectorB) {
    const [a0, a1] = vectorA, [b0, b1] = vectorB;
    return [
        a0 + b0,
        a1 + b1
    ];
}
function add3(vectorA, vectorB) {
    const [a0, a1, a2] = vectorA, [b0, b1, b2] = vectorB;
    return [
        a0 + b0,
        a1 + b1,
        a2 + b2
    ];
}
function add4(vectorA, vectorB) {
    const [a0, a1, a2, a3] = vectorA, [b0, b1, b2, b3] = vectorB;
    return [
        a0 + b0,
        a1 + b1,
        a2 + b2,
        a3 + b3
    ];
}
function subtract2(vectorA, vectorB) {
    const [a0, a1] = vectorA, [b0, b1] = vectorB;
    return [
        a0 - b0,
        a1 - b1
    ];
}
function subtract3(vectorA, vectorB) {
    const [a0, a1, a2] = vectorA, [b0, b1, b2] = vectorB;
    return [
        a0 - b0,
        a1 - b1,
        a2 - b2
    ];
}
function subtract4(vectorA, vectorB) {
    const [a0, a1, a2, a3] = vectorA, [b0, b1, b2, b3] = vectorB;
    return [
        a0 - b0,
        a1 - b1,
        a2 - b2,
        a3 - b3
    ];
}
function multiply2(vectorA, vectorB) {
    const [x0, y0] = vectorA, [x1, y1] = vectorB;
    return [
        x0 * x1,
        y0 * y1
    ];
}
function multiply3(vectorA, vectorB) {
    const [x0, y0, z0] = vectorA, [x1, y1, z1] = vectorB;
    return [
        x0 * x1,
        y0 * y1,
        z0 * z1
    ];
}
function multiply4(vectorA, vectorB) {
    const [x0, y0, z0, w0] = vectorA, [x1, y1, z1, w1] = vectorB;
    return [
        x0 * x1,
        y0 * y1,
        z0 * z1,
        w0 * w1
    ];
}
function divide2(vector, divisor) {
    const [x, y] = vector;
    return [
        x / divisor,
        y / divisor
    ];
}
function divide3(vector, divisor) {
    const [x, y, z] = vector;
    return [
        x / divisor,
        y / divisor,
        z / divisor
    ];
}
function divide4(vector, divisor) {
    const [x, y, z, w] = vector;
    return [
        x / divisor,
        y / divisor,
        z / divisor,
        w / divisor
    ];
}
function scale2(vector, scalar) {
    const [x, y] = vector;
    return [
        x * scalar,
        y * scalar
    ];
}
function scale3(vector, scalar) {
    const [x, y, z] = vector;
    return [
        x * scalar,
        y * scalar,
        z * scalar
    ];
}
function scale4(vector, scalar) {
    const [x, y, z, w] = vector;
    return [
        x * scalar,
        y * scalar,
        z * scalar,
        w * scalar
    ];
}
function transform2(vector, matrix) {
    const [x, y] = vector, [m0, m1, m2, m3] = matrix;
    return [
        m0 * x + m2 * y,
        m1 * x + m3 * y
    ];
}
function transform3(vector, matrix) {
    const [x, y, z] = vector, [m0, m1, m2, m3, m4, m5, m6, m7, m8] = matrix;
    return [
        m0 * x + m3 * y + m6 * z,
        m1 * x + m4 * y + m7 * z,
        m2 * x + m5 * y + m8 * z
    ];
}
function transform4(vector, matrix) {
    const [x, y, z, w] = vector, [m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15] = matrix;
    return [
        m0 * x + m4 * y + m8 * z + m12 * w,
        m1 * x + m5 * y + m9 * z + m13 * w,
        m2 * x + m6 * y + m10 * z + m14 * w,
        m3 * x + m7 * y + m11 * z + m15 * w
    ];
}
function sum2(...vectors) {
    const zero = zero2(), sum = vectors.reduce((sum, vector)=>{
        sum = add2(sum, vector);
        return sum;
    }, zero);
    return sum;
}
function sum3(...vectors) {
    const zero = zero3(), sum = vectors.reduce((sum, vector)=>{
        sum = add3(sum, vector);
        return sum;
    }, zero);
    return sum;
}
function sum4(...vectors) {
    const zero = zero4(), sum = vectors.reduce((sum, vector)=>{
        sum = add4(sum, vector);
        return sum;
    }, zero);
    return sum;
}
function mean2(...vectors) {
    const length = vectors.length, sum = sum2(...vectors), mean = divide2(sum, length);
    return mean;
}
function mean3(...vectors) {
    const length = vectors.length, sum = sum3(...vectors), mean = divide3(sum, length);
    return mean;
}
function mean4(...vectors) {
    const length = vectors.length, sum = sum4(...vectors), mean = divide4(sum, length);
    return mean;
}
const _default = {
    zero2,
    zero3,
    zero4,
    length2,
    length3,
    length4,
    dot2,
    dot3,
    dot4,
    cross3,
    normalise2,
    normalise3,
    normalise4,
    reflect2,
    reflect3,
    reflect4,
    truncate4,
    add2,
    add3,
    add4,
    subtract2,
    subtract3,
    subtract4,
    multiply2,
    multiply3,
    multiply4,
    divide2,
    divide3,
    divide4,
    scale2,
    scale3,
    scale4,
    transform2,
    transform3,
    transform4,
    sum2,
    sum3,
    sum4,
    mean2,
    mean3,
    mean4
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXRocy92ZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvMigpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvMygpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm80KCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgyKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoMyh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoNCh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6LCB3IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoYTAgKiBiMCArIGExICogYjEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG90Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoYTAgKiBiMCArIGExICogYjEgKyBhMiAqIGIyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdDQodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIsIGEzIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIGIwLCBiMSwgYjIsIGIzIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoYTAgKiBiMCArIGExICogYjEgKyBhMiAqIGIyICsgYTMgKiBiMyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcm9zczModmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGExICogYjIgLSBhMiAqIGIxLFxuICAgIGEyICogYjAgLSBhMCAqIGIyLFxuICAgIGEwICogYjEgLSBhMSAqIGIwLFxuXG4gIF0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpc2UyKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcixcblxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4IC8gbGVuZ3RoLFxuICAgIHkgLyBsZW5ndGgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpc2UzKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcixcblxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBsZW5ndGgsXG4gICAgeSAvIGxlbmd0aCxcbiAgICB6IC8gbGVuZ3RoLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXNlNCh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6LCB3IF0gPSB2ZWN0b3IsXG5cbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3KTtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBsZW5ndGgsXG4gICAgeSAvIGxlbmd0aCxcbiAgICB6IC8gbGVuZ3RoLFxuICAgIHcgLyBsZW5ndGgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZsZWN0Mih2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICAteCxcbiAgICAteSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmxlY3QzKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIC14LFxuICAgIC15LFxuICAgIC16LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmbGVjdDQodmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiwgdyBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgLXgsXG4gICAgLXksXG4gICAgLXosXG4gICAgLXcsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cnVuY2F0ZTQodmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCxcbiAgICB5LFxuICAgIHosXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKyBiMCxcbiAgICBhMSArIGIxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKyBiMCxcbiAgICBhMSArIGIxLFxuICAgIGEyICsgYjIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQ0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyLCBhMyBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyLCBiMyBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICsgYjAsXG4gICAgYTEgKyBiMSxcbiAgICBhMiArIGIyLFxuICAgIGEzICsgYjMsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDIodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAtIGIwLFxuICAgIGExIC0gYjEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDModmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwIC0gYjAsXG4gICAgYTEgLSBiMSxcbiAgICBhMiAtIGIyLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Q0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyLCBhMyBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyLCBiMyBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwIC0gYjAsXG4gICAgYTEgLSBiMSxcbiAgICBhMiAtIGIyLFxuICAgIGEzIC0gYjMsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTIodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIHgwLCB5MCBdID0gdmVjdG9yQSxcbiAgICAgICAgWyB4MSwgeTEgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4MCAqIHgxLFxuICAgIHkwICogeTEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTModmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIHgwLCB5MCwgejAgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgeDEsIHkxLCB6MSBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIHgwICogeDEsXG4gICAgeTAgKiB5MSxcbiAgICB6MCAqIHoxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHk0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyB4MCwgeTAsIHowLCB3MCBdID0gdmVjdG9yQSxcbiAgICAgICAgWyB4MSwgeTEsIHoxLCB3MSBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIHgwICogeDEsXG4gICAgeTAgKiB5MSxcbiAgICB6MCAqIHoxLFxuICAgIHcwICogdzEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGUyKHZlY3RvciwgZGl2aXNvcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBkaXZpc29yLFxuICAgIHkgLyBkaXZpc29yLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlMyh2ZWN0b3IsIGRpdmlzb3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4IC8gZGl2aXNvcixcbiAgICB5IC8gZGl2aXNvcixcbiAgICB6IC8gZGl2aXNvcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZTQodmVjdG9yLCBkaXZpc29yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiwgdyBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCAvIGRpdmlzb3IsXG4gICAgeSAvIGRpdmlzb3IsXG4gICAgeiAvIGRpdmlzb3IsXG4gICAgdyAvIGRpdmlzb3IsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTIodmVjdG9yLCBzY2FsYXIpIHtcbiAgY29uc3QgWyB4LCB5IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4ICogc2NhbGFyLFxuICAgIHkgKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTModmVjdG9yLCBzY2FsYXIpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4ICogc2NhbGFyLFxuICAgIHkgKiBzY2FsYXIsXG4gICAgeiAqIHNjYWxhcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlNCh2ZWN0b3IsIHNjYWxhcikge1xuICBjb25zdCBbIHgsIHksIHosIHcgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIHggKiBzY2FsYXIsXG4gICAgeSAqIHNjYWxhcixcbiAgICB6ICogc2NhbGFyLFxuICAgIHcgKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0yKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IFsgeCwgeSBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMgXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgIG0wICogeCArIG0yICogeSxcbiAgICBtMSAqIHggKyBtMyAqIHksXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0zKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCBdID0gbWF0cml4O1xuXG4gIHJldHVybiAoW1xuXG4gICAgbTAgKiB4ICsgbTMgKiB5ICsgbTYgKiB6LFxuICAgIG0xICogeCArIG00ICogeSArIG03ICogeixcbiAgICBtMiAqIHggKyBtNSAqIHkgKyBtOCAqIHosXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm00KHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IFsgeCwgeSwgeiwgdyBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeDtcblxuXG4gIHJldHVybiAoW1xuXG4gICAgbTAgKiB4ICsgbTQgKiB5ICsgbTggKiB6ICsgbTEyICogdyxcbiAgICBtMSAqIHggKyBtNSAqIHkgKyBtOSAqIHogKyBtMTMgKiB3LFxuICAgIG0yICogeCArIG02ICogeSArIG0xMCAqIHogKyBtMTQgKiB3LFxuICAgIG0zICogeCArIG03ICogeSArIG0xMSAqIHogKyBtMTUgKiB3LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VtMiguLi52ZWN0b3JzKSB7XG4gIGNvbnN0IHplcm8gPSB6ZXJvMigpLFxuICAgICAgICBzdW0gPSB2ZWN0b3JzLnJlZHVjZSgoc3VtLCB2ZWN0b3IpID0+IHtcbiAgICAgICAgICBzdW0gPSBhZGQyKHN1bSwgdmVjdG9yKTtcblxuICAgICAgICAgIHJldHVybiBzdW07XG4gICAgICAgIH0sIHplcm8pO1xuXG4gIHJldHVybiBzdW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdW0zKC4uLnZlY3RvcnMpIHtcbiAgY29uc3QgemVybyA9IHplcm8zKCksXG4gICAgICAgIHN1bSA9IHZlY3RvcnMucmVkdWNlKChzdW0sIHZlY3RvcikgPT4ge1xuICAgICAgICAgIHN1bSA9IGFkZDMoc3VtLCB2ZWN0b3IpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1bTtcbiAgICAgICAgfSwgemVybyk7XG5cbiAgcmV0dXJuIHN1bTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bTQoLi4udmVjdG9ycykge1xuICBjb25zdCB6ZXJvID0gemVybzQoKSxcbiAgICAgICAgc3VtID0gdmVjdG9ycy5yZWR1Y2UoKHN1bSwgdmVjdG9yKSA9PiB7XG4gICAgICAgICAgc3VtID0gYWRkNChzdW0sIHZlY3Rvcik7XG5cbiAgICAgICAgICByZXR1cm4gc3VtO1xuICAgICAgICB9LCB6ZXJvKTtcblxuICByZXR1cm4gc3VtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVhbjIoLi4udmVjdG9ycykge1xuICBjb25zdCBsZW5ndGggPSB2ZWN0b3JzLmxlbmd0aCxcbiAgICAgICAgc3VtID0gc3VtMiguLi52ZWN0b3JzKSxcbiAgICAgICAgbWVhbiA9IGRpdmlkZTIoc3VtLCBsZW5ndGgpO1xuXG4gIHJldHVybiBtZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVhbjMoLi4udmVjdG9ycykge1xuICBjb25zdCBsZW5ndGggPSB2ZWN0b3JzLmxlbmd0aCxcbiAgICAgICAgc3VtID0gc3VtMyguLi52ZWN0b3JzKSxcbiAgICAgICAgbWVhbiA9IGRpdmlkZTMoc3VtLCBsZW5ndGgpO1xuXG4gIHJldHVybiBtZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVhbjQoLi4udmVjdG9ycykge1xuICBjb25zdCBsZW5ndGggPSB2ZWN0b3JzLmxlbmd0aCxcbiAgICAgICAgc3VtID0gc3VtNCguLi52ZWN0b3JzKSxcbiAgICAgICAgbWVhbiA9IGRpdmlkZTQoc3VtLCBsZW5ndGgpO1xuXG4gIHJldHVybiBtZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHplcm8yLFxuICB6ZXJvMyxcbiAgemVybzQsXG4gIGxlbmd0aDIsXG4gIGxlbmd0aDMsXG4gIGxlbmd0aDQsXG4gIGRvdDIsXG4gIGRvdDMsXG4gIGRvdDQsXG4gIGNyb3NzMyxcbiAgbm9ybWFsaXNlMixcbiAgbm9ybWFsaXNlMyxcbiAgbm9ybWFsaXNlNCxcbiAgcmVmbGVjdDIsXG4gIHJlZmxlY3QzLFxuICByZWZsZWN0NCxcbiAgdHJ1bmNhdGU0LFxuICBhZGQyLFxuICBhZGQzLFxuICBhZGQ0LFxuICBzdWJ0cmFjdDIsXG4gIHN1YnRyYWN0MyxcbiAgc3VidHJhY3Q0LFxuICBtdWx0aXBseTIsXG4gIG11bHRpcGx5MyxcbiAgbXVsdGlwbHk0LFxuICBkaXZpZGUyLFxuICBkaXZpZGUzLFxuICBkaXZpZGU0LFxuICBzY2FsZTIsXG4gIHNjYWxlMyxcbiAgc2NhbGU0LFxuICB0cmFuc2Zvcm0yLFxuICB0cmFuc2Zvcm0zLFxuICB0cmFuc2Zvcm00LFxuICBzdW0yLFxuICBzdW0zLFxuICBzdW00LFxuICBtZWFuMixcbiAgbWVhbjMsXG4gIG1lYW40XG59O1xuIl0sIm5hbWVzIjpbImFkZDIiLCJhZGQzIiwiYWRkNCIsImNyb3NzMyIsImRpdmlkZTIiLCJkaXZpZGUzIiwiZGl2aWRlNCIsImRvdDIiLCJkb3QzIiwiZG90NCIsImxlbmd0aDIiLCJsZW5ndGgzIiwibGVuZ3RoNCIsIm1lYW4yIiwibWVhbjMiLCJtZWFuNCIsIm11bHRpcGx5MiIsIm11bHRpcGx5MyIsIm11bHRpcGx5NCIsIm5vcm1hbGlzZTIiLCJub3JtYWxpc2UzIiwibm9ybWFsaXNlNCIsInJlZmxlY3QyIiwicmVmbGVjdDMiLCJyZWZsZWN0NCIsInNjYWxlMiIsInNjYWxlMyIsInNjYWxlNCIsInN1YnRyYWN0MiIsInN1YnRyYWN0MyIsInN1YnRyYWN0NCIsInN1bTIiLCJzdW0zIiwic3VtNCIsInRyYW5zZm9ybTIiLCJ0cmFuc2Zvcm0zIiwidHJhbnNmb3JtNCIsInRydW5jYXRlNCIsInplcm8yIiwiemVybzMiLCJ6ZXJvNCIsInZlY3RvciIsIngiLCJ5IiwiTWF0aCIsInNxcnQiLCJ6IiwidyIsInZlY3RvckEiLCJ2ZWN0b3JCIiwiYTAiLCJhMSIsImIwIiwiYjEiLCJhMiIsImIyIiwiYTMiLCJiMyIsImxlbmd0aCIsIngwIiwieTAiLCJ4MSIsInkxIiwiejAiLCJ6MSIsIncwIiwidzEiLCJkaXZpc29yIiwic2NhbGFyIiwibWF0cml4IiwibTAiLCJtMSIsIm0yIiwibTMiLCJtNCIsIm01IiwibTYiLCJtNyIsIm04IiwibTkiLCJtMTAiLCJtMTEiLCJtMTIiLCJtMTMiLCJtMTQiLCJtMTUiLCJ2ZWN0b3JzIiwiemVybyIsInN1bSIsInJlZHVjZSIsIm1lYW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQThLZ0JBO2VBQUFBOztRQVlBQztlQUFBQTs7UUFhQUM7ZUFBQUE7O1FBaElBQztlQUFBQTs7UUF3WWhCO2VBQUE7O1FBNUtnQkM7ZUFBQUE7O1FBV0FDO2VBQUFBOztRQVlBQztlQUFBQTs7UUF4UUFDO2VBQUFBOztRQU9BQztlQUFBQTs7UUFPQUM7ZUFBQUE7O1FBaENBQztlQUFBQTs7UUFNQUM7ZUFBQUE7O1FBTUFDO2VBQUFBOztRQTJZQUM7ZUFBQUE7O1FBUUFDO2VBQUFBOztRQVFBQztlQUFBQTs7UUEzTUFDO2VBQUFBOztRQVlBQztlQUFBQTs7UUFhQUM7ZUFBQUE7O1FBak1BQztlQUFBQTs7UUFhQUM7ZUFBQUE7O1FBY0FDO2VBQUFBOztRQWVBQztlQUFBQTs7UUFXQUM7ZUFBQUE7O1FBWUFDO2VBQUFBOztRQWtMQUM7ZUFBQUE7O1FBV0FDO2VBQUFBOztRQVlBQztlQUFBQTs7UUF6SUFDO2VBQUFBOztRQVlBQztlQUFBQTs7UUFhQUM7ZUFBQUE7O1FBd0tBQztlQUFBQTs7UUFXQUM7ZUFBQUE7O1FBV0FDO2VBQUFBOztRQWpFQUM7ZUFBQUE7O1FBYUFDO2VBQUFBOztRQWNBQztlQUFBQTs7UUFwT0FDO2VBQUFBOztRQWhLQUM7ZUFBQUE7O1FBU0FDO2VBQUFBOztRQVVBQztlQUFBQTs7O0FBbkJULFNBQVNGO0lBQ2QsT0FBUTtRQUVOO1FBQ0E7S0FFRDtBQUNIO0FBRU8sU0FBU0M7SUFDZCxPQUFRO1FBRU47UUFDQTtRQUNBO0tBRUQ7QUFDSDtBQUVPLFNBQVNDO0lBQ2Qs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