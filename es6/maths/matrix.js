'use strict';

function identity2() {
  return ([

    1, 0,
    0, 1,

  ]);
}

function identity3() {
  return ([

    1, 0, 0,
    0, 1, 0,
    0, 0, 1,

  ]);
}

function identity4() {
  return ([

    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1,

  ]);
}

function multiply2(matrixA, matrixB) {
  const a0 = matrixA[0],
        a1 = matrixA[1],
        a2 = matrixA[2],
        a3 = matrixA[3],

        b0 = matrixB[0],
        b1 = matrixB[1],
        b2 = matrixB[2],
        b3 = matrixB[3];

  return ([

    a0 * b0 + a2 * b1,
    a1 * b0 + a3 * b1,

    a0 * b2 + a2 * b3,
    a1 * b2 + a3 * b3,

  ]);
}

function multiply3(matrixA, matrixB) {
  const a0 = matrixA[0],
        a1 = matrixA[1],
        a2 = matrixA[2],
        a3 = matrixA[3],
        a4 = matrixA[4],
        a5 = matrixA[5],
        a6 = matrixA[6],
        a7 = matrixA[7],
        a8 = matrixA[8],

        b0 = matrixB[0],
        b1 = matrixB[1],
        b2 = matrixB[2],
        b3 = matrixB[3],
        b4 = matrixB[4],
        b5 = matrixB[5],
        b6 = matrixB[6],
        b7 = matrixB[7],
        b8 = matrixB[8];

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

function multiply4(matrixA, matrixB) {
  const  a0 = matrixA[ 0],
         a1 = matrixA[ 1],
         a2 = matrixA[ 2],
         a3 = matrixA[ 3],
         a4 = matrixA[ 4],
         a5 = matrixA[ 5],
         a6 = matrixA[ 6],
         a7 = matrixA[ 7],
         a8 = matrixA[ 8],
         a9 = matrixA[ 9],
        a10 = matrixA[10],
        a11 = matrixA[11],
        a12 = matrixA[12],
        a13 = matrixA[13],
        a14 = matrixA[14],
        a15 = matrixA[15],

         b0 = matrixB[ 0],
         b1 = matrixB[ 1],
         b2 = matrixB[ 2],
         b3 = matrixB[ 3],
         b4 = matrixB[ 4],
         b5 = matrixB[ 5],
         b6 = matrixB[ 6],
         b7 = matrixB[ 7],
         b8 = matrixB[ 8],
         b9 = matrixB[ 9],
        b10 = matrixB[10],
        b11 = matrixB[11],
        b12 = matrixB[12],
        b13 = matrixB[13],
        b14 = matrixB[14],
        b15 = matrixB[15];

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

function invert2(matrix) {
  const m0 = matrix[0],
        m1 = matrix[1],
        m2 = matrix[2],
        m3 = matrix[3],

        determinant = m0 * m3 - m2 * m1;

  if (determinant !== 0) {
    return ([

      +m3 / determinant, -m1 / determinant,
      -m2 / determinant, +m0 / determinant,

    ]);
  }
}

function invert3(matrix) {
  const m00 = matrix[0], m01 = matrix[1], m02 = matrix[2],
        m10 = matrix[3], m11 = matrix[4], m12 = matrix[5],
        m20 = matrix[6], m21 = matrix[7], m22 = matrix[8],

        b01 =  m22 * m11 - m12 * m21,
        b11 = -m22 * m10 + m12 * m20,
        b21 =  m21 * m10 - m11 * m20,

        determinant = m00 * b01 + m01 * b11 + m02 * b21;

  if (determinant !== 0) {
    return ([

      b01 / determinant, (-m22 * m01 + m02 * m21) / determinant, ( m12 * m01 - m02 * m11) / determinant,
      b11 / determinant, ( m22 * m00 - m02 * m20) / determinant, (-m12 * m00 + m02 * m10) / determinant,
      b21 / determinant, (-m21 * m00 + m01 * m20) / determinant, ( m11 * m00 - m01 * m10) / determinant,

    ]);
  }
}

function invert4(matrix) {
  const m00 = matrix[ 0], m01 = matrix[ 1], m02 = matrix[ 2], m03 = matrix[ 3],
        m10 = matrix[ 4], m11 = matrix[ 5], m12 = matrix[ 6], m13 = matrix[ 7],
        m20 = matrix[ 8], m21 = matrix[ 9], m22 = matrix[10], m23 = matrix[11],
        m30 = matrix[12], m31 = matrix[13], m32 = matrix[14], m33 = matrix[15],

        b00 = m00 * m11 - m01 * m10,
        b01 = m00 * m12 - m02 * m10,
        b02 = m00 * m13 - m03 * m10,
        b03 = m01 * m12 - m02 * m11,
        b04 = m01 * m13 - m03 * m11,
        b05 = m02 * m13 - m03 * m12,
        b06 = m20 * m31 - m21 * m30,
        b07 = m20 * m32 - m22 * m30,
        b08 = m20 * m33 - m23 * m30,
        b09 = m21 * m32 - m22 * m31,
        b10 = m21 * m33 - m23 * m31,
        b11 = m22 * m33 - m23 * m32,

        determinant = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (determinant !== 0) {
    return ([

      (m11 * b11 - m12 * b10 + m13 * b09) / determinant, (m02 * b10 - m01 * b11 - m03 * b09) / determinant, (m31 * b05 - m32 * b04 + m33 * b03) / determinant, (m22 * b04 - m21 * b05 - m23 * b03) / determinant,
      (m12 * b08 - m10 * b11 - m13 * b07) / determinant, (m00 * b11 - m02 * b08 + m03 * b07) / determinant, (m32 * b02 - m30 * b05 - m33 * b01) / determinant, (m20 * b05 - m22 * b02 + m23 * b01) / determinant,
      (m10 * b10 - m11 * b08 + m13 * b06) / determinant, (m01 * b08 - m00 * b10 - m03 * b06) / determinant, (m30 * b04 - m31 * b02 + m33 * b00) / determinant, (m21 * b02 - m20 * b04 - m23 * b00) / determinant,
      (m11 * b07 - m10 * b09 - m12 * b06) / determinant, (m00 * b09 - m01 * b07 + m02 * b06) / determinant, (m31 * b01 - m30 * b03 - m32 * b00) / determinant, (m20 * b03 - m21 * b01 + m22 * b00) / determinant,

    ]);
  }
}

function transpose2(matrix) {
  return ([

    matrix[0], matrix[2],
    matrix[1], matrix[3],

  ]);
}

function transpose3(matrix) {
  return ([

    matrix[0], matrix[3], matrix[6],
    matrix[1], matrix[4], matrix[7],
    matrix[2], matrix[5], matrix[8],

  ]);
}

function transpose4(matrix) {
  return ([

    matrix[ 0], matrix[ 4], matrix[ 8], matrix[12],
    matrix[ 1], matrix[ 5], matrix[ 9], matrix[13],
    matrix[ 2], matrix[ 6], matrix[10], matrix[14],
    matrix[ 3], matrix[ 7], matrix[11], matrix[15],

  ]);
}

function scale4(matrix, vector) {
  const x = vector[0],
        y = vector[1],
        z = vector[2];

  return ([

    matrix[ 0] * x, matrix[ 1] * x, matrix[ 2] * x, matrix[ 3] * x,
    matrix[ 4] * y, matrix[ 5] * y, matrix[ 6] * y, matrix[ 7] * y,
    matrix[ 8] * z, matrix[ 9] * z, matrix[10] * z, matrix[11] * z,
    matrix[12] * 1, matrix[13] * 1, matrix[14] * 1, matrix[15] * 1,

  ]);
}

function rotate4(matrix, angle, vector) {
  let x = vector[0],
      y = vector[1],
      z = vector[2];

  const length = Math.sqrt(x * x + y * y + z * z);

  if (length !== 0) {
    x /= length;
    y /= length;
    z /= length;

    const s = Math.sin(angle),
          c = Math.cos(angle),
          t = 1 - c,

          m00 = matrix[ 0],
          m01 = matrix[ 1],
          m02 = matrix[ 2],
          m03 = matrix[ 3],
          m10 = matrix[ 4],
          m11 = matrix[ 5],
          m12 = matrix[ 6],
          m13 = matrix[ 7],
          m20 = matrix[ 8],
          m21 = matrix[ 9],
          m22 = matrix[10],
          m23 = matrix[11],

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

      m00 * b00 + m10 * b01 + m20 * b02, m01 * b00 + m11 * b01 + m21 * b02, m02 * b00 + m12 * b01 + m22 * b02, m03 * b00 + m13 * b01 + m23 * b02,
      m00 * b10 + m10 * b11 + m20 * b12, m01 * b10 + m11 * b11 + m21 * b12, m02 * b10 + m12 * b11 + m22 * b12, m03 * b10 + m13 * b11 + m23 * b12,
      m00 * b20 + m10 * b21 + m20 * b22, m01 * b20 + m11 * b21 + m21 * b22, m02 * b20 + m12 * b21 + m22 * b22, m03 * b20 + m13 * b21 + m23 * b22,
                             matrix[12],                        matrix[13],                        matrix[14],                        matrix[15],

    ]);
  }
}

function translate4(matrix, vector) {
  const x = vector[0],
        y = vector[1],
        z = vector[2],

        m00 = matrix[ 0],
        m01 = matrix[ 1],
        m02 = matrix[ 2],
        m03 = matrix[ 3],
        m10 = matrix[ 4],
        m11 = matrix[ 5],
        m12 = matrix[ 6],
        m13 = matrix[ 7],
        m20 = matrix[ 8],
        m21 = matrix[ 9],
        m22 = matrix[10],
        m23 = matrix[11];

  return ([

                                         m00,                                      m01,                                      m02,                                      m03,
                                         m10,                                      m11,                                      m12,                                      m13,
                                         m20,                                      m21,                                      m22,                                      m23,
    m00 * x + m10 * y + m20 * z + matrix[12], m01 * x + m11 * y + m21 * z + matrix[13], m02 * x + m12 * y + m22 * z + matrix[14], m03 * x + m13 * y + m23 * z + matrix[15],

  ]);
}

function perspective4(fieldOfView, aspectRatio, zNear, zFar) {
  const f = 1.0 / Math.tan(fieldOfView / 2),
        nf = 1 / (zNear - zFar);

  return ([

    f / aspectRatio, 0, 0,                       0,
    0,               f, 0,                       0,
    0,               0, (zFar + zNear) * nf,    -1,
    0,               0, (2 * zFar * zNear) * nf, 0,

  ]);
}

module.exports = {
  identity2,
  identity3,
  identity4,
  multiply2,
  multiply3,
  multiply4,
  invert2,
  invert3,
  invert4,
  scale4,
  rotate4,
  transpose2,
  transpose3,
  transpose4,
  translate4,
  perspective4
};
