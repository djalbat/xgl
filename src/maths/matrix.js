"use strict";

import { normalise3 } from "../maths/vector";

export function identity2() {
  return ([

    1, 0,
    0, 1,

  ]);
}

export function identity3() {
  return ([

    1, 0, 0,
    0, 1, 0,
    0, 0, 1,

  ]);
}

export function identity4() {
  return ([

    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1,

  ]);
}

export function multiply2(matrixA, matrixB) {
  const [ a0, a1, a2, a3 ] = matrixA,
        [ b0, b1, b2, b3 ] = matrixB;

  return ([

    a0 * b0 + a2 * b1,
    a1 * b0 + a3 * b1,

    a0 * b2 + a2 * b3,
    a1 * b2 + a3 * b3,

  ]);
}

export function multiply3(matrixA, matrixB) {
  const [ a0, a1, a2, a3, a4, a5, a6, a7, a8 ] = matrixA,
        [ b0, b1, b2, b3, b4, b5, b6, b7, b8 ] = matrixB;

  return ([

    a0 * b0 + a3 * b1 + a6 * b2,
    a1 * b0 + a4 * b1 + a7 * b2,
    a2 * b0 + a5 * b1 + a8 * b2,

    a0 * b3 + a3 * b4 + a6 * b5,
    a1 * b3 + a4 * b4 + a7 * b5,
    a2 * b3 + a5 * b4 + a8 * b5,

    a0 * b6 + a3 * b7 + a6 * b8,
    a1 * b6 + a4 * b7 + a7 * b8,
    a2 * b6 + a5 * b7 + a8 * b8,

  ]);
}

export function multiply4(matrixA, matrixB) {
  const  [ a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15 ] = matrixA,
         [ b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15 ] = matrixB;

  return ([

    a0 *  b0 +  a4 *  b1 +  a8 *  b2 + a12 *  b3,
    a1 *  b0 +  a5 *  b1 +  a9 *  b2 + a13 *  b3,
    a2 *  b0 +  a6 *  b1 + a10 *  b2 + a14 *  b3,
    a3 *  b0 +  a7 *  b1 + a11 *  b2 + a15 *  b3,

    a0 *  b4 +  a4 *  b5 +  a8 *  b6 + a12 *  b7,
    a1 *  b4 +  a5 *  b5 +  a9 *  b6 + a13 *  b7,
    a2 *  b4 +  a6 *  b5 + a10 *  b6 + a14 *  b7,
    a3 *  b4 +  a7 *  b5 + a11 *  b6 + a15 *  b7,

    a0 *  b8 +  a4 *  b9 +  a8 * b10 + a12 * b11,
    a1 *  b8 +  a5 *  b9 +  a9 * b10 + a13 * b11,
    a2 *  b8 +  a6 *  b9 + a10 * b10 + a14 * b11,
    a3 *  b8 +  a7 *  b9 + a11 * b10 + a15 * b11,

    a0 * b12 +  a4 * b13 +  a8 * b14 + a12 * b15,
    a1 * b12 +  a5 * b13 +  a9 * b14 + a13 * b15,
    a2 * b12 +  a6 * b13 + a10 * b14 + a14 * b15,
    a3 * b12 +  a7 * b13 + a11 * b14 + a15 * b15,

  ]);
}

export function determinant2(matrix) {
  const [ m0, m1, m2, m3 ] = matrix;

  return ( m0 * m3 - m2 * m1 );
}

export function determinant3(matrix) {
  const [ m0, m1, m2, m3, m4, m5, m6, m7, m8 ] = matrix,

        b01 =  m8 * m4 - m5 * m7,
        b11 = -m8 * m3 + m5 * m6,
        b21 =  m7 * m3 - m4 * m6;

  return ( m0 * b01 + m1 * b11 + m2 * b21 );
}

export function determinant4(matrix) {
  const [ m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15 ] = matrix,

        b00 = m0 * m5 - m1 * m4,
        b01 = m0 * m6 - m2 * m4,
        b02 = m0 * m7 - m3 * m4,
        b03 = m1 * m6 - m2 * m5,
        b04 = m1 * m7 - m3 * m5,
        b05 = m2 * m7 - m3 * m6,
        b06 = m8 * m13 - m9 * m12,
        b07 = m8 * m14 - m10 * m12,
        b08 = m8 * m15 - m11 * m12,
        b09 = m9 * m14 - m10 * m13,
        b10 = m9 * m15 - m11 * m13,
        b11 = m10 * m15 - m11 * m14;

  return ( b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06 );
}

export function transpose2(matrix) {
  const [ m0, m1, m2, m3 ] = matrix;

  return ([

    m0, m2,
    m1, m3,

  ]);
}

export function transpose3(matrix) {
  const [ m0, m1, m2, m3, m4, m5, m6, m7, m8 ] = matrix;

  return ([

    m0, m3, m6,
    m1, m4, m7,
    m2, m5, m8,

  ]);
}

export function transpose4(matrix) {
  const [ m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15 ] = matrix;

  return ([

    m0, m4, m8, m12,
    m1, m5, m9, m13,
    m2, m6, m10, m14,
    m3, m7, m11, m15,

  ]);
}

export function invert2(matrix) {
  const [ m0, m1, m2, m3 ] = matrix,

        determinant = determinant2(matrix);

  return ([

    +m3 / determinant, -m1 / determinant,
    -m2 / determinant, +m0 / determinant,

  ]);
}

export function invert3(matrix) {
  const [ m0, m1, m2, m3, m4, m5, m6, m7, m8 ] = matrix,

        determinant = determinant3(matrix),

        b01 =  m8 * m4 - m5 * m7,
        b11 = -m8 * m3 + m5 * m6,
        b21 =  m7 * m3 - m4 * m6;

  return ([

    b01 / determinant, (-m8 * m1 + m2 * m7) / determinant, ( m5 * m1 - m2 * m4) / determinant,
    b11 / determinant, ( m8 * m0 - m2 * m6) / determinant, (-m5 * m0 + m2 * m3) / determinant,
    b21 / determinant, (-m7 * m0 + m1 * m6) / determinant, ( m4 * m0 - m1 * m3) / determinant,

  ]);
}

export function invert4(matrix) {
  const [ m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15 ] = matrix,

        determinant = determinant4(matrix),

        b00 = m0 * m5 - m1 * m4,
        b01 = m0 * m6 - m2 * m4,
        b02 = m0 * m7 - m3 * m4,
        b03 = m1 * m6 - m2 * m5,
        b04 = m1 * m7 - m3 * m5,
        b05 = m2 * m7 - m3 * m6,
        b06 = m8 * m13 - m9 * m12,
        b07 = m8 * m14 - m10 * m12,
        b08 = m8 * m15 - m11 * m12,
        b09 = m9 * m14 - m10 * m13,
        b10 = m9 * m15 - m11 * m13,
        b11 = m10 * m15 - m11 * m14;

  return ([

    (m5 * b11 - m6 * b10 + m7 * b09) / determinant, (m2 * b10 - m1 * b11 - m3 * b09) / determinant, (m13 * b05 - m14 * b04 + m15 * b03) / determinant, (m10 * b04 - m9 * b05 - m11 * b03) / determinant,
    (m6 * b08 - m4 * b11 - m7 * b07) / determinant, (m0 * b11 - m2 * b08 + m3 * b07) / determinant, (m14 * b02 - m12 * b05 - m15 * b01) / determinant, (m8 * b05 - m10 * b02 + m11 * b01) / determinant,
    (m4 * b10 - m5 * b08 + m7 * b06) / determinant, (m1 * b08 - m0 * b10 - m3 * b06) / determinant, (m12 * b04 - m13 * b02 + m15 * b00) / determinant, (m9 * b02 - m8 * b04 - m11 * b00) / determinant,
    (m5 * b07 - m4 * b09 - m6 * b06) / determinant, (m0 * b09 - m1 * b07 + m2 * b06) / determinant, (m13 * b01 - m12 * b03 - m14 * b00) / determinant, (m8 * b03 - m9 * b01 + m10 * b00) / determinant,

  ]);
}

export function scale4(matrix, vector) {
  const [ x, y, z ] = vector,

        [ m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15 ] = matrix;

  return ([

    m0 * x, m1 * x, m2 * x, m3 * x,
    m4 * y, m5 * y, m6 * y, m7 * y,
    m8 * z, m9 * z, m10 * z, m11 * z,
    m12 * 1, m13 * 1, m14 * 1, m15 * 1,

  ]);
}

export function rotate4(matrix, angle, vector) {
  const [ x, y, z ] = normalise3(vector),

        [ m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15 ] = matrix,

        s = Math.sin(angle),
        c = Math.cos(angle),
        t = 1 - c,

        b00 = x * x * t + c,
        b01 = y * x * t + z * s,
        b02 = z * x * t - y * s,
        b10 = x * y * t - z * s,
        b11 = y * y * t + c,
        b12 = z * y * t + x * s,
        b20 = x * z * t + y * s,
        b21 = y * z * t - x * s,
        b22 = z * z * t + c;

  return ([

    m0 * b00 + m4 * b01 + m8 * b02, m1 * b00 + m5 * b01 + m9 * b02, m2 * b00 + m6 * b01 + m10 * b02, m3 * b00 + m7 * b01 + m11 * b02,
    m0 * b10 + m4 * b11 + m8 * b12, m1 * b10 + m5 * b11 + m9 * b12, m2 * b10 + m6 * b11 + m10 * b12, m3 * b10 + m7 * b11 + m11 * b12,
    m0 * b20 + m4 * b21 + m8 * b22, m1 * b20 + m5 * b21 + m9 * b22, m2 * b20 + m6 * b21 + m10 * b22, m3 * b20 + m7 * b21 + m11 * b22,
                               m12,                            m13,                             m14,                             m15,

  ]);
}

export function translate4(matrix, vector) {
  const [ x, y, z ] = vector,

        [ m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15 ] = matrix;

  return ([

                                m0,                             m1,                              m2,                              m3,
                                m4,                             m5,                              m6,                              m7,
                                m8,                             m9,                             m10,                             m11,
    m0 * x + m4 * y + m8 * z + m12, m1 * x + m5 * y + m9 * z + m13, m2 * x + m6 * y + m10 * z + m14, m3 * x + m7 * y + m11 * z + m15,

  ]);
}

export function perspective4(fieldOfView, aspectRatio, zNear, zFar) {
  const f = 1 / Math.tan(fieldOfView / 2),
        nf = 1 / (zNear - zFar);

  return ([

    f / aspectRatio, 0, 0,                       0,
    0,               f, 0,                       0,
    0,               0, (zFar + zNear) * nf,    -1,
    0,               0, (2 * zFar * zNear) * nf, 0,

  ]);
}

export default {
  identity2,
  identity3,
  identity4,
  multiply2,
  multiply3,
  multiply4,
  determinant2,
  determinant3,
  determinant4,
  transpose2,
  transpose3,
  transpose4,
  invert2,
  invert3,
  invert4,
  scale4,
  rotate4,
  translate4,
  perspective4
};
