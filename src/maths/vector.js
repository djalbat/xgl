"use strict";

export function zero2() {
  return ([

    0,
    0,

  ]);
}

export function zero3() {
  return ([

    0,
    0,
    0,

  ]);
}

export function zero4() {
  return ([

    0,
    0,
    0,
    0,

  ]);
}

export function length2(vector) {
  const [ x, y ] = vector;

  return Math.sqrt(x * x + y * y);
}

export function length3(vector) {
  const [ x, y, z ] = vector;

  return Math.sqrt(x * x + y * y + z * z);
}

export function length4(vector) {
  const [ x, y, z, w ] = vector;

  return Math.sqrt(x * x + y * y + z * z + w * w);
}

export function dot2(vectorA, vectorB) {
  const [ a0, a1 ] = vectorA,
        [ b0, b1 ] = vectorB;

  return (a0 * b0 + a1 * b1);
}

export function dot3(vectorA, vectorB) {
  const [ a0, a1, a2 ] = vectorA,
        [ b0, b1, b2 ] = vectorB;

  return (a0 * b0 + a1 * b1 + a2 * b2);
}

export function dot4(vectorA, vectorB) {
  const [ a0, a1, a2, a3 ] = vectorA,
        [ b0, b1, b2, b3 ] = vectorB;

  return (a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3);
}

export function cross3(vectorA, vectorB) {
  const [ a0, a1, a2 ] = vectorA,
        [ b0, b1, b2 ] = vectorB;

  return ([

    a1 * b2 - a2 * b1,
    a2 * b0 - a0 * b2,
    a0 * b1 - a1 * b0,

  ])
}

export function normalise2(vector) {
  const [ x, y ] = vector,

        length = Math.sqrt(x * x + y * y);

  return ([

    x / length,
    y / length,

  ]);
}

export function normalise3(vector) {
  const [ x, y, z ] = vector,

        length = Math.sqrt(x * x + y * y + z * z);

  return ([

    x / length,
    y / length,
    z / length,

  ]);
}

export function normalise4(vector) {
  const [ x, y, z, w ] = vector,

        length = Math.sqrt(x * x + y * y + z * z + w * w);

  return ([

    x / length,
    y / length,
    z / length,
    w / length,

  ]);
}

export function reflect2(vector) {
  const [ x, y ] = vector;

  return ([

    -x,
    -y,

  ]);
}

export function reflect3(vector) {
  const [ x, y, z ] = vector;

  return ([

    -x,
    -y,
    -z,

  ]);
}

export function reflect4(vector) {
  const [ x, y, z, w ] = vector;

  return ([

    -x,
    -y,
    -z,
    -w,

  ]);
}

export function truncate4(vector) {
  const [ x, y, z ] = vector;

  return ([

    x,
    y,
    z,

  ]);
}

export function add2(vectorA, vectorB) {
  const [ a0, a1 ] = vectorA,
        [ b0, b1 ] = vectorB;

  return ([

    a0 + b0,
    a1 + b1,

  ]);
}

export function add3(vectorA, vectorB) {
  const [ a0, a1, a2 ] = vectorA,
        [ b0, b1, b2 ] = vectorB;

  return ([

    a0 + b0,
    a1 + b1,
    a2 + b2,

  ]);
}

export function add4(vectorA, vectorB) {
  const [ a0, a1, a2, a3 ] = vectorA,
        [ b0, b1, b2, b3 ] = vectorB;

  return ([

    a0 + b0,
    a1 + b1,
    a2 + b2,
    a3 + b3,

  ]);
}

export function subtract2(vectorA, vectorB) {
  const [ a0, a1 ] = vectorA,
        [ b0, b1 ] = vectorB;

  return ([

    a0 - b0,
    a1 - b1,

  ]);
}

export function subtract3(vectorA, vectorB) {
  const [ a0, a1, a2 ] = vectorA,
        [ b0, b1, b2 ] = vectorB;

  return ([

    a0 - b0,
    a1 - b1,
    a2 - b2,

  ]);
}

export function subtract4(vectorA, vectorB) {
  const [ a0, a1, a2, a3 ] = vectorA,
        [ b0, b1, b2, b3 ] = vectorB;

  return ([

    a0 - b0,
    a1 - b1,
    a2 - b2,
    a3 - b3,

  ]);
}

export function multiply2(vector, multiplier) {
  const [ x, y ] = vector;

  return ([

    x * multiplier,
    y * multiplier,

  ]);
}

export function multiply3(vector, multiplier) {
  const [ x, y, z ] = vector;

  return ([

    x * multiplier,
    y * multiplier,
    z * multiplier,

  ]);
}

export function multiply4(vector, multiplier) {
  const [ x, y, z, w ] = vector;

  return ([

    x * multiplier,
    y * multiplier,
    z * multiplier,
    w * multiplier,

  ]);
}

export function divide2(vector, divisor) {
  const [ x, y ] = vector;

  return ([

    x / divisor,
    y / divisor,

  ]);
}

export function divide3(vector, divisor) {
  const [ x, y, z ] = vector;

  return ([

    x / divisor,
    y / divisor,
    z / divisor,

  ]);
}

export function divide4(vector, divisor) {
  const [ x, y, z, w ] = vector;

  return ([

    x / divisor,
    y / divisor,
    z / divisor,
    w / divisor,

  ]);
}

export function scale2(vector, scalar) {
  const [ x, y ] = vector;

  return ([

    x * scalar,
    y * scalar,

  ]);
}

export function scale3(vector, scalar) {
  const [ x, y, z ] = vector;

  return ([

    x * scalar,
    y * scalar,
    z * scalar,

  ]);
}

export function scale4(vector, scalar) {
  const [ x, y, z, w ] = vector;

  return ([

    x * scalar,
    y * scalar,
    z * scalar,
    w * scalar,

  ]);
}

export function transform2(vector, matrix) {
  const [ x, y ] = vector,

        [ m0, m1, m2, m3 ] = matrix;

  return ([

    m0 * x + m2 * y,
    m1 * x + m3 * y,

  ]);
}

export function transform3(vector, matrix) {
  const [ x, y, z ] = vector,

        [ m0, m1, m2, m3, m4, m5, m6, m7, m8 ] = matrix;

  return ([

    m0 * x + m3 * y + m6 * z,
    m1 * x + m4 * y + m7 * z,
    m2 * x + m5 * y + m8 * z,

  ]);
}

export function transform4(vector, matrix) {
  const [ x, y, z, w ] = vector,

        [ m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15 ] = matrix;


  return ([

    m0 * x + m4 * y + m8 * z + m12 * w,
    m1 * x + m5 * y + m9 * z + m13 * w,
    m2 * x + m6 * y + m10 * z + m14 * w,
    m3 * x + m7 * y + m11 * z + m15 * w,

  ]);
}

export function total2(...vectors) {
  const zero = zero2(),
        total = vectors.reduce((total, vector) => {
          total = add2(total, vector);

          return total;
        }, zero);

  return total;
}

export function total3(...vectors) {
  const zero = zero3(),
        total = vectors.reduce((total, vector) => {
          total = add3(total, vector);

          return total;
        }, zero);

  return total;
}

export function total4(...vectors) {
  const zero = zero4(),
        total = vectors.reduce((total, vector) => {
          total = add4(total, vector);

          return total;
        }, zero);

  return total;
}

export function mean2(...vectors) {
  const length = vectors.length,
        total = total2(...vectors),
        mean = divide2(total, length);

  return mean;
}

export function mean3(...vectors) {
  const length = vectors.length,
        total = total3(...vectors),
        mean = divide3(total, length);

  return mean;
}

export function mean4(...vectors) {
  const length = vectors.length,
        total = total4(...vectors),
        mean = divide4(total, length);

  return mean;
}

export default {
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
  total2,
  total3,
  total4,
  mean2,
  mean3,
  mean4
};
