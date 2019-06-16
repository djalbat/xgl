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
  const a00 = matrix[0], a01 = matrix[1], a02 = matrix[2],
        a10 = matrix[3], a11 = matrix[4], a12 = matrix[5],
        a20 = matrix[6], a21 = matrix[7], a22 = matrix[8],

        b01 =  a22 * a11 - a12 * a21,
        b11 = -a22 * a10 + a12 * a20,
        b21 =  a21 * a10 - a11 * a20,

        determinant = a00 * b01 + a01 * b11 + a02 * b21;

  if (determinant !== 0) {
    return ([

      b01 / determinant, (-a22 * a01 + a02 * a21) / determinant, ( a12 * a01 - a02 * a11) / determinant,
      b11 / determinant, ( a22 * a00 - a02 * a20) / determinant, (-a12 * a00 + a02 * a10) / determinant,
      b21 / determinant, (-a21 * a00 + a01 * a20) / determinant, ( a11 * a00 - a01 * a10) / determinant,

    ]);
  }
}

function invert4(matrix) {
  const a00 = matrix[ 0], a01 = matrix[ 1], a02 = matrix[ 2], a03 = matrix[ 3],
        a10 = matrix[ 4], a11 = matrix[ 5], a12 = matrix[ 6], a13 = matrix[ 7],
        a20 = matrix[ 8], a21 = matrix[ 9], a22 = matrix[10], a23 = matrix[11],
        a30 = matrix[12], a31 = matrix[13], a32 = matrix[14], a33 = matrix[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        determinant = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (determinant !== 0) {
    return ([

      (a11 * b11 - a12 * b10 + a13 * b09) / determinant, (a02 * b10 - a01 * b11 - a03 * b09) / determinant, (a31 * b05 - a32 * b04 + a33 * b03) / determinant, (a22 * b04 - a21 * b05 - a23 * b03) / determinant,
      (a12 * b08 - a10 * b11 - a13 * b07) / determinant, (a00 * b11 - a02 * b08 + a03 * b07) / determinant, (a32 * b02 - a30 * b05 - a33 * b01) / determinant, (a20 * b05 - a22 * b02 + a23 * b01) / determinant,
      (a10 * b10 - a11 * b08 + a13 * b06) / determinant, (a01 * b08 - a00 * b10 - a03 * b06) / determinant, (a30 * b04 - a31 * b02 + a33 * b00) / determinant, (a21 * b02 - a20 * b04 - a23 * b00) / determinant,
      (a11 * b07 - a10 * b09 - a12 * b06) / determinant, (a00 * b09 - a01 * b07 + a02 * b06) / determinant, (a31 * b01 - a30 * b03 - a32 * b00) / determinant, (a20 * b03 - a21 * b01 + a22 * b00) / determinant,

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
          a00 = matrix[ 0],
          a01 = matrix[ 1],
          a02 = matrix[ 2],
          a03 = matrix[ 3],
          a10 = matrix[ 4],
          a11 = matrix[ 5],
          a12 = matrix[ 6],
          a13 = matrix[ 7],
          a20 = matrix[ 8],
          a21 = matrix[ 9],
          a22 = matrix[10],
          a23 = matrix[11],
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

      a00 * b00 + a10 * b01 + a20 * b02, a01 * b00 + a11 * b01 + a21 * b02, a02 * b00 + a12 * b01 + a22 * b02, a03 * b00 + a13 * b01 + a23 * b02,
      a00 * b10 + a10 * b11 + a20 * b12, a01 * b10 + a11 * b11 + a21 * b12, a02 * b10 + a12 * b11 + a22 * b12, a03 * b10 + a13 * b11 + a23 * b12,
      a00 * b20 + a10 * b21 + a20 * b22, a01 * b20 + a11 * b21 + a21 * b22, a02 * b20 + a12 * b21 + a22 * b22, a03 * b20 + a13 * b21 + a23 * b22,
                             matrix[12],                        matrix[13],                        matrix[14],                        matrix[15],

    ]);
  }
}

function translate4(matrix, vector) {
  let x = vector[0],
      y = vector[1],
      z = vector[2],
      a00 = matrix[0],
      a01 = matrix[1],
      a02 = matrix[2],
      a03 = matrix[3],
      a10 = matrix[4],
      a11 = matrix[5],
      a12 = matrix[6],
      a13 = matrix[7],
      a20 = matrix[8],
      a21 = matrix[9],
      a22 = matrix[10],
      a23 = matrix[11];

  return ([

                                         a00,                                      a01,                                      a02,                                      a03,
                                         a10,                                      a11,                                      a12,                                      a13,
                                         a20,                                      a21,                                      a22,                                      a23,
    a00 * x + a10 * y + a20 * z + matrix[12], a01 * x + a11 * y + a21 * z + matrix[13], a02 * x + a12 * y + a22 * z + matrix[14], a03 * x + a13 * y + a23 * z + matrix[15],

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
