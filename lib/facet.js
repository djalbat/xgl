'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line'),
    arrayUtilities = require('./utilities/array'),
    vectorUtilities = require('./utilities/vector'),
    vertexUtilities = require('./utilities/vertex'),
    verticesUtilities = require('./utilities/vertices'),
    approximateUtilities = require('./utilities/approximate');

var _rotateAboutZAxis = vertexUtilities.rotateAboutZAxis,
    isApproximatelyEqualToZero = approximateUtilities.isApproximatelyEqualToZero,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    permute = arrayUtilities.permute,
    calculateNormal = verticesUtilities.calculateNormal,
    rotateVertices = verticesUtilities.rotateVertices,
    add3 = vectorUtilities.add3,
    subtract3 = vectorUtilities.subtract3,
    scale3 = vectorUtilities.scale3,
    length3 = vectorUtilities.length3;

var Facet = function () {
  function Facet(vertices, normal) {
    _classCallCheck(this, Facet);

    this.vertices = vertices;
    this.normal = normal;
  }

  _createClass(Facet, [{
    key: 'getVertices',
    value: function getVertices() {
      return this.vertices;
    }
  }, {
    key: 'getNormal',
    value: function getNormal() {
      return this.normal;
    }
  }, {
    key: 'getLines',
    value: function getLines() {
      var verticesLength = 3,
          ///
      lines = this.vertices.map(function (vertex, index) {
        var startIndex = index,
            endIndex = (startIndex + 1) % verticesLength,
            startVertex = this.vertices[startIndex],
            endVertex = this.vertices[endIndex],
            line = Line.fromVertices(startVertex, endVertex);

        return line;
      }.bind(this));

      return lines;
    }
  }, {
    key: 'getMidPoint',
    value: function getMidPoint() {
      var midPoint = this.vertices.reduce(function (midPoint, vertex) {
        var scaledVertex = scale3(vertex, 1 / 3);

        midPoint = add3(midPoint, scaledVertex);

        return midPoint;
      }, [0, 0, 0]);

      return midPoint;
    }
  }, {
    key: 'isTooSmall',
    value: function isTooSmall() {
      var normalLength = length3(this.normal),
          normalLengthApproximatelyEqualToZero = isApproximatelyEqualToZero(normalLength),
          tooSmall = normalLengthApproximatelyEqualToZero; ///

      return tooSmall;
    }
  }, {
    key: 'isOutsideLinesInXYPlane',
    value: function isOutsideLinesInXYPlane(linesInXYPlane) {
      var insideLinesInXYPlane = this.isInsideLinesInXYPlane(linesInXYPlane),
          outsideLinesInXYPlane = !insideLinesInXYPlane;

      return outsideLinesInXYPlane;
    }
  }, {
    key: 'isInsideLinesInXYPlane',
    value: function isInsideLinesInXYPlane(linesInXYPlane) {
      var midPoint = this.getMidPoint(),
          midPointToOneSideOfLinesInXYPlane = isMidPointToOneSideOfLinesInXYPlane(midPoint, linesInXYPlane),
          insideLinesInXYPlane = midPointToOneSideOfLinesInXYPlane; ///

      return insideLinesInXYPlane;
    }
  }, {
    key: 'applyTransforms',
    value: function applyTransforms(transforms) {
      this.vertices = this.vertices.map(function (vertex) {
        transforms.forEach(function (transform) {
          vertex = transform(vertex);
        });

        return vertex;
      });

      this.normal = calculateNormal(this.vertices);
    }
  }, {
    key: 'rotate',
    value: function rotate(rotationQuaternion) {
      this.vertices = rotateVertices(this.vertices, rotationQuaternion);

      this.normal = calculateNormal(this.vertices);
    }
  }, {
    key: 'rotateAboutZAxis',
    value: function rotateAboutZAxis(rotationAboutZAxisMatrix) {
      this.vertices = this.vertices.map(function (vertex) {
        vertex = _rotateAboutZAxis(vertex, rotationAboutZAxisMatrix);

        return vertex;
      });

      this.normal = calculateNormal(this.vertices);
    }
  }, {
    key: 'split',
    value: function split(intersections, smallerFacets) {
      var intersectionsIncludesNull = intersections.includes(null);

      intersectionsIncludesNull ? this.splitWithNullIntersection(intersections, smallerFacets) : this.splitWithoutNullIntersection(intersections, smallerFacets);
    }
  }, {
    key: 'splitWithNullIntersection',
    value: function splitWithNullIntersection(intersections, smallerFacets) {
      var nonNullIntersections = calculateNonNullIntersections(intersections),
          nonTrivialNonNullIntersections = calculateNonTrivialIntersections(nonNullIntersections),
          nonTrivialNonNullIntersectionsLength = nonTrivialNonNullIntersections.length;

      switch (nonTrivialNonNullIntersectionsLength) {
        case 2:
          this.splitWithTwoNonTrivialNonNullIntersections(intersections, smallerFacets);
          break;

        default:
          var smallerFacet = this; ///

          smallerFacets.push(smallerFacet);
          break;
      }
    }
  }, {
    key: 'splitWithoutNullIntersection',
    value: function splitWithoutNullIntersection(intersections, smallerFacets) {
      var nonTrivialIntersections = calculateNonTrivialIntersections(intersections),
          nonTrivialIntersectionsLength = nonTrivialIntersections.length;

      switch (nonTrivialIntersectionsLength) {
        case 2:
          this.splitWithTwoNonTrivialIntersections(intersections, smallerFacets);
          break;

        case 1:
          this.splitWithOneNonTrivialIntersection(intersections, smallerFacets);
          break;

        default:
          var smallerFacet = this; ///

          smallerFacets.push(smallerFacet);
          break;
      }
    }
  }, {
    key: 'splitWithTwoNonTrivialNonNullIntersections',
    value: function splitWithTwoNonTrivialNonNullIntersections(intersections, smallerFacets) {
      var verticesLength = 3,
          nullIntersectionIndex = calculateNonNullIntersectionIndex(intersections),
          places = (verticesLength - nullIntersectionIndex) % verticesLength;

      intersections = permute(intersections, places);

      this.vertices = permute(this.vertices, places);

      var firstVertex = first(this.vertices),
          secondVertex = second(this.vertices),
          thirdVertex = third(this.vertices),
          nonNullIntersections = intersections.slice(1),
          firstNonNullIntersection = first(nonNullIntersections),
          secondNonNullIntersection = second(nonNullIntersections),
          firstIntermediateVertex = calculateIntermediateVertex(secondVertex, thirdVertex, firstNonNullIntersection),
          secondIntermediateVertex = calculateIntermediateVertex(thirdVertex, firstVertex, secondNonNullIntersection),
          firstVertices = [firstVertex, secondVertex, secondIntermediateVertex],
          secondVertices = [secondVertex, firstIntermediateVertex, secondIntermediateVertex],
          thirdVertices = [firstIntermediateVertex, thirdVertex, secondIntermediateVertex],
          firstFacet = Facet.fromVertices(firstVertices),
          secondFacet = Facet.fromVertices(secondVertices),
          thirdFacet = Facet.fromVertices(thirdVertices),
          firstFacetTooSmall = firstFacet.isTooSmall(),
          secondFacetTooSmall = secondFacet.isTooSmall(),
          thirdFacetTooSmall = thirdFacet.isTooSmall();

      if (!firstFacetTooSmall) {
        smallerFacets.push(firstFacet);
      }

      if (!secondFacetTooSmall) {
        smallerFacets.push(secondFacet);
      }

      if (!thirdFacetTooSmall) {
        smallerFacets.push(thirdFacet);
      }
    }
  }, {
    key: 'splitWithTwoNonTrivialIntersections',
    value: function splitWithTwoNonTrivialIntersections(intersections, smallerFacets) {
      var verticesLength = 3,
          trivialIntersectionIndex = calculateTrivialIntersectionIndex(intersections),
          places = (verticesLength - trivialIntersectionIndex) % verticesLength;

      intersections = permute(intersections, places);

      this.vertices = permute(this.vertices, places);

      var firstVertex = first(this.vertices),
          secondVertex = second(this.vertices),
          thirdVertex = third(this.vertices),
          nonTrivialIntersections = intersections.slice(1),
          firstNonTrivialIntersection = first(nonTrivialIntersections),
          secondNonTrivialIntersection = second(nonTrivialIntersections),
          firstIntermediateVertex = calculateIntermediateVertex(secondVertex, thirdVertex, firstNonTrivialIntersection),
          secondIntermediateVertex = calculateIntermediateVertex(thirdVertex, firstVertex, secondNonTrivialIntersection),
          firstVertices = [firstVertex, secondVertex, firstIntermediateVertex],
          secondVertices = [firstVertex, firstIntermediateVertex, secondIntermediateVertex],
          thirdVertices = [firstIntermediateVertex, thirdVertex, secondIntermediateVertex],
          firstFacet = Facet.fromVertices(firstVertices),
          secondFacet = Facet.fromVertices(secondVertices),
          thirdFacet = Facet.fromVertices(thirdVertices),
          firstFacetTooSmall = firstFacet.isTooSmall(),
          secondFacetTooSmall = secondFacet.isTooSmall(),
          thirdFacetTooSmall = thirdFacet.isTooSmall();

      if (!firstFacetTooSmall) {
        smallerFacets.push(firstFacet);
      }

      if (!secondFacetTooSmall) {
        smallerFacets.push(secondFacet);
      }

      if (!thirdFacetTooSmall) {
        smallerFacets.push(thirdFacet);
      }
    }
  }, {
    key: 'splitWithOneNonTrivialIntersection',
    value: function splitWithOneNonTrivialIntersection(intersections, smallerFacets) {
      var verticesLength = 3,
          nonTrivialIntersectionIndex = calculateNonTrivialIntersectionIndex(intersections),
          places = (verticesLength - nonTrivialIntersectionIndex) % verticesLength;

      intersections = permute(intersections, places);

      this.vertices = permute(this.vertices, places);

      var firstVertex = first(this.vertices),
          secondVertex = second(this.vertices),
          thirdVertex = third(this.vertices),
          firstIntersection = first(intersections),
          nonTrivialIntersection = firstIntersection,
          ///
      intermediateVertex = calculateIntermediateVertex(firstVertex, secondVertex, nonTrivialIntersection),
          firstVertices = [firstVertex, intermediateVertex, thirdVertex],
          secondVertices = [intermediateVertex, secondVertex, thirdVertex],
          firstFacet = Facet.fromVertices(firstVertices),
          secondFacet = Facet.fromVertices(secondVertices),
          firstFacetTooSmall = firstFacet.isTooSmall(),
          secondFacetTooSmall = secondFacet.isTooSmall();

      if (!firstFacetTooSmall) {
        smallerFacets.push(firstFacet);
      }

      if (!secondFacetTooSmall) {
        smallerFacets.push(secondFacet);
      }
    }
  }, {
    key: 'calculateIntersectionsWithVerticalLineInXYPlane',
    value: function calculateIntersectionsWithVerticalLineInXYPlane(verticalLineInXYPlane) {
      var lines = this.getLines(),
          intersections = lines.map(function (line) {
        var intersection = line.calculateIntersectionWithVerticalLineInXYPlane(verticalLineInXYPlane);

        return intersection;
      });

      return intersections;
    }
  }], [{
    key: 'fromVertices',
    value: function fromVertices(vertices) {
      var normal = calculateNormal(vertices),
          facet = new Facet(vertices, normal);

      return facet;
    }
  }, {
    key: 'fromVerticesAndIndexes',
    value: function fromVerticesAndIndexes(vertices, indexes) {
      vertices = indexes.map(function (index) {
        var vertex = vertices[index];

        return vertex;
      });

      var facet = Facet.fromVertices(vertices);

      return facet;
    }
  }]);

  return Facet;
}();

module.exports = Facet;

function isIntersectionTrivial(intersection) {
  var intersectionNonTrivial = isIntersectionNonTrivial(intersection),
      intersectionTrivial = !intersectionNonTrivial;

  return intersectionTrivial;
}

function isIntersectionNonTrivial(intersection) {
  var intersectionNonTrivial = intersection > 0 && intersection < 1;

  return intersectionNonTrivial;
}

function calculateIntermediateVertex(startVertex, endVertex, nonNullIntersection) {
  var direction = subtract3(endVertex, startVertex),
      offset = scale3(direction, nonNullIntersection),
      intermediateVertex = add3(startVertex, offset);

  return intermediateVertex;
}

function calculateNonNullIntersections(intersections) {
  var nonNullIntersections = intersections.reduce(function (nonNullIntersections, intersection) {
    var intersectionNonNull = intersection !== null;

    if (intersectionNonNull) {
      var nonNullIntersection = intersection; ///

      nonNullIntersections.push(nonNullIntersection);
    }

    return nonNullIntersections;
  }, []);

  return nonNullIntersections;
}

function calculateNonTrivialIntersections(intersections) {
  var nonTrivialIntersections = intersections.reduce(function (nonTrivialIntersections, intersection) {
    var intersectionNonTrivial = isIntersectionNonTrivial(intersection);

    if (intersectionNonTrivial) {
      var nonTrivialIntersection = intersection; ///

      nonTrivialIntersections.push(nonTrivialIntersection);
    }

    return nonTrivialIntersections;
  }, []);

  return nonTrivialIntersections;
}

function calculateNonNullIntersectionIndex(intersections) {
  var nullIntersectionIndex = intersections.indexOf(null);

  return nullIntersectionIndex;
}

function calculateTrivialIntersectionIndex(intersections) {
  var trivialIntersectionIndex = intersections.reduce(function (trivialIntersectionIndex, intersection, index) {
    if (trivialIntersectionIndex === null) {
      var intersectionNonTrivial = isIntersectionTrivial(intersection);

      if (intersectionNonTrivial) {
        trivialIntersectionIndex = index;
      }
    }

    return trivialIntersectionIndex;
  }, null);

  return trivialIntersectionIndex;
}

function calculateNonTrivialIntersectionIndex(intersections) {
  var nonTrivialIntersectionIndex = intersections.reduce(function (nonTrivialIntersectionIndex, intersection, index) {
    if (nonTrivialIntersectionIndex === null) {
      var intersectionNonTrivial = isIntersectionNonTrivial(intersection);

      if (intersectionNonTrivial) {
        nonTrivialIntersectionIndex = index;
      }
    }

    return nonTrivialIntersectionIndex;
  }, null);

  return nonTrivialIntersectionIndex;
}

function isMidPointToOneSideOfLinesInXYPlane(midPoint, linesInXYPlane) {
  var midPointToTheLeftOfLinesInXYPlane = isMidPointToTheLeftOfLinesInXYPlane(midPoint, linesInXYPlane),
      midPointToTheRightOfLinesInXYPlane = isMidPointToTheRightOfLinesInXYPlane(midPoint, linesInXYPlane),
      midPointToOneSideOfLinesInXYPlane = midPointToTheLeftOfLinesInXYPlane || midPointToTheRightOfLinesInXYPlane; ///

  return midPointToOneSideOfLinesInXYPlane;
}

function isMidPointToTheLeftOfLinesInXYPlane(midPoint, linesInXYPlane) {
  var midPointToTheLeftOfLinesInXYPlane = linesInXYPlane.reduce(function (midPointToTheLeftOfLinesInXYPlane, lineInXYPlane) {
    if (midPointToTheLeftOfLinesInXYPlane) {
      var midPointToTheLeftOfLineInXYPlane = lineInXYPlane.isMidPointToTheLeft(midPoint);

      midPointToTheLeftOfLinesInXYPlane = midPointToTheLeftOfLineInXYPlane;
    }

    return midPointToTheLeftOfLinesInXYPlane;
  }, true);

  return midPointToTheLeftOfLinesInXYPlane;
}

function isMidPointToTheRightOfLinesInXYPlane(midPoint, linesInXYPlane) {
  var midPointToTheRightOfLinesInXYPlane = linesInXYPlane.reduce(function (midPointToTheRightOfLinesInXYPlane, lineInXYPlane) {
    if (midPointToTheRightOfLinesInXYPlane) {
      var midPointToTheRightOfLineInXYPlane = lineInXYPlane.isMidPointToTheRight(midPoint);

      midPointToTheRightOfLinesInXYPlane = midPointToTheRightOfLineInXYPlane;
    }

    return midPointToTheRightOfLinesInXYPlane;
  }, true);

  return midPointToTheRightOfLinesInXYPlane;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mYWNldC5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwidmVjdG9yVXRpbGl0aWVzIiwidmVydGV4VXRpbGl0aWVzIiwidmVydGljZXNVdGlsaXRpZXMiLCJhcHByb3hpbWF0ZVV0aWxpdGllcyIsInJvdGF0ZUFib3V0WkF4aXMiLCJpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyIsImZpcnN0Iiwic2Vjb25kIiwidGhpcmQiLCJwZXJtdXRlIiwiY2FsY3VsYXRlTm9ybWFsIiwicm90YXRlVmVydGljZXMiLCJhZGQzIiwic3VidHJhY3QzIiwic2NhbGUzIiwibGVuZ3RoMyIsIkZhY2V0IiwidmVydGljZXMiLCJub3JtYWwiLCJ2ZXJ0aWNlc0xlbmd0aCIsImxpbmVzIiwibWFwIiwidmVydGV4IiwiaW5kZXgiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJzdGFydFZlcnRleCIsImVuZFZlcnRleCIsImxpbmUiLCJmcm9tVmVydGljZXMiLCJiaW5kIiwibWlkUG9pbnQiLCJyZWR1Y2UiLCJzY2FsZWRWZXJ0ZXgiLCJub3JtYWxMZW5ndGgiLCJub3JtYWxMZW5ndGhBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8iLCJ0b29TbWFsbCIsImxpbmVzSW5YWVBsYW5lIiwiaW5zaWRlTGluZXNJblhZUGxhbmUiLCJpc0luc2lkZUxpbmVzSW5YWVBsYW5lIiwib3V0c2lkZUxpbmVzSW5YWVBsYW5lIiwiZ2V0TWlkUG9pbnQiLCJtaWRQb2ludFRvT25lU2lkZU9mTGluZXNJblhZUGxhbmUiLCJpc01pZFBvaW50VG9PbmVTaWRlT2ZMaW5lc0luWFlQbGFuZSIsInRyYW5zZm9ybXMiLCJmb3JFYWNoIiwidHJhbnNmb3JtIiwicm90YXRpb25RdWF0ZXJuaW9uIiwicm90YXRpb25BYm91dFpBeGlzTWF0cml4IiwiaW50ZXJzZWN0aW9ucyIsInNtYWxsZXJGYWNldHMiLCJpbnRlcnNlY3Rpb25zSW5jbHVkZXNOdWxsIiwiaW5jbHVkZXMiLCJzcGxpdFdpdGhOdWxsSW50ZXJzZWN0aW9uIiwic3BsaXRXaXRob3V0TnVsbEludGVyc2VjdGlvbiIsIm5vbk51bGxJbnRlcnNlY3Rpb25zIiwiY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMiLCJub25Ucml2aWFsTm9uTnVsbEludGVyc2VjdGlvbnMiLCJjYWxjdWxhdGVOb25Ucml2aWFsSW50ZXJzZWN0aW9ucyIsIm5vblRyaXZpYWxOb25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCIsImxlbmd0aCIsInNwbGl0V2l0aFR3b05vblRyaXZpYWxOb25OdWxsSW50ZXJzZWN0aW9ucyIsInNtYWxsZXJGYWNldCIsInB1c2giLCJub25Ucml2aWFsSW50ZXJzZWN0aW9ucyIsIm5vblRyaXZpYWxJbnRlcnNlY3Rpb25zTGVuZ3RoIiwic3BsaXRXaXRoVHdvTm9uVHJpdmlhbEludGVyc2VjdGlvbnMiLCJzcGxpdFdpdGhPbmVOb25Ucml2aWFsSW50ZXJzZWN0aW9uIiwibnVsbEludGVyc2VjdGlvbkluZGV4IiwiY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4IiwicGxhY2VzIiwiZmlyc3RWZXJ0ZXgiLCJzZWNvbmRWZXJ0ZXgiLCJ0aGlyZFZlcnRleCIsInNsaWNlIiwiZmlyc3ROb25OdWxsSW50ZXJzZWN0aW9uIiwic2Vjb25kTm9uTnVsbEludGVyc2VjdGlvbiIsImZpcnN0SW50ZXJtZWRpYXRlVmVydGV4IiwiY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4Iiwic2Vjb25kSW50ZXJtZWRpYXRlVmVydGV4IiwiZmlyc3RWZXJ0aWNlcyIsInNlY29uZFZlcnRpY2VzIiwidGhpcmRWZXJ0aWNlcyIsImZpcnN0RmFjZXQiLCJzZWNvbmRGYWNldCIsInRoaXJkRmFjZXQiLCJmaXJzdEZhY2V0VG9vU21hbGwiLCJpc1Rvb1NtYWxsIiwic2Vjb25kRmFjZXRUb29TbWFsbCIsInRoaXJkRmFjZXRUb29TbWFsbCIsInRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCIsImNhbGN1bGF0ZVRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCIsImZpcnN0Tm9uVHJpdmlhbEludGVyc2VjdGlvbiIsInNlY29uZE5vblRyaXZpYWxJbnRlcnNlY3Rpb24iLCJub25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXgiLCJjYWxjdWxhdGVOb25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXgiLCJmaXJzdEludGVyc2VjdGlvbiIsIm5vblRyaXZpYWxJbnRlcnNlY3Rpb24iLCJpbnRlcm1lZGlhdGVWZXJ0ZXgiLCJ2ZXJ0aWNhbExpbmVJblhZUGxhbmUiLCJnZXRMaW5lcyIsImludGVyc2VjdGlvbiIsImNhbGN1bGF0ZUludGVyc2VjdGlvbldpdGhWZXJ0aWNhbExpbmVJblhZUGxhbmUiLCJmYWNldCIsImluZGV4ZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiaXNJbnRlcnNlY3Rpb25Ucml2aWFsIiwiaW50ZXJzZWN0aW9uTm9uVHJpdmlhbCIsImlzSW50ZXJzZWN0aW9uTm9uVHJpdmlhbCIsImludGVyc2VjdGlvblRyaXZpYWwiLCJub25OdWxsSW50ZXJzZWN0aW9uIiwiZGlyZWN0aW9uIiwib2Zmc2V0IiwiaW50ZXJzZWN0aW9uTm9uTnVsbCIsImluZGV4T2YiLCJtaWRQb2ludFRvVGhlTGVmdE9mTGluZXNJblhZUGxhbmUiLCJpc01pZFBvaW50VG9UaGVMZWZ0T2ZMaW5lc0luWFlQbGFuZSIsIm1pZFBvaW50VG9UaGVSaWdodE9mTGluZXNJblhZUGxhbmUiLCJpc01pZFBvaW50VG9UaGVSaWdodE9mTGluZXNJblhZUGxhbmUiLCJsaW5lSW5YWVBsYW5lIiwibWlkUG9pbnRUb1RoZUxlZnRPZkxpbmVJblhZUGxhbmUiLCJpc01pZFBvaW50VG9UaGVMZWZ0IiwibWlkUG9pbnRUb1RoZVJpZ2h0T2ZMaW5lSW5YWVBsYW5lIiwiaXNNaWRQb2ludFRvVGhlUmlnaHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxtQkFBUixDQUR2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O0FBQ0Q7O0FBRUQsV0FBT0wsaUNBQVA7QUFDRCxHQVJ5QyxFQVF2QyxJQVJ1QyxDQUExQzs7QUFVQSxTQUFPQSxpQ0FBUDtBQUNEOztBQUVELFNBQVNHLG9DQUFULENBQThDeEYsUUFBOUMsRUFBd0RNLGNBQXhELEVBQXdFO0FBQ3RFLE1BQU1pRixxQ0FBcUNqRixlQUFlTCxNQUFmLENBQXNCLFVBQVNzRixrQ0FBVCxFQUE2Q0UsYUFBN0MsRUFBNEQ7QUFDM0gsUUFBSUYsa0NBQUosRUFBd0M7QUFDdEMsVUFBTUssb0NBQW9DSCxjQUFjSSxvQkFBZCxDQUFtQzdGLFFBQW5DLENBQTFDOztBQUVBdUYsMkNBQXFDSyxpQ0FBckM7QUFDRDs7QUFFRCxXQUFPTCxrQ0FBUDtBQUNELEdBUjBDLEVBUXhDLElBUndDLENBQTNDOztBQVVBLFNBQU9BLGtDQUFQO0FBQ0QiLCJmaWxlIjoiZmFjZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlY3RvcicpLFxuICAgICAgdmVydGV4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdmVydGV4JyksXG4gICAgICB2ZXJ0aWNlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlcnRpY2VzJyksXG4gICAgICBhcHByb3hpbWF0ZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FwcHJveGltYXRlJyk7XG5cbmNvbnN0IHsgcm90YXRlQWJvdXRaQXhpcyB9ID0gdmVydGV4VXRpbGl0aWVzLFxuICAgICAgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9ID0gYXBwcm94aW1hdGVVdGlsaXRpZXMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBwZXJtdXRlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlTm9ybWFsLCByb3RhdGVWZXJ0aWNlcyB9ID0gdmVydGljZXNVdGlsaXRpZXMsXG4gICAgICB7IGFkZDMsIHN1YnRyYWN0Mywgc2NhbGUzLCBsZW5ndGgzIH0gPSB2ZWN0b3JVdGlsaXRpZXM7XG5cbmNsYXNzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCkge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgfVxuXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0Tm9ybWFsKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbDtcbiAgfVxuXG4gIGdldExpbmVzKCkge1xuICAgIGNvbnN0IHZlcnRpY2VzTGVuZ3RoID0gMywgLy8vXG4gICAgICAgICAgbGluZXMgPSB0aGlzLnZlcnRpY2VzLm1hcChmdW5jdGlvbih2ZXJ0ZXgsIGluZGV4KSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gaW5kZXgsXG4gICAgICAgICAgICAgICAgICBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMSkgJSB2ZXJ0aWNlc0xlbmd0aCxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGVuZFZlcnRleCA9IHRoaXMudmVydGljZXNbZW5kSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgbGluZSA9IExpbmUuZnJvbVZlcnRpY2VzKHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBsaW5lO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gbGluZXM7XG4gIH1cbiAgXG4gIGdldE1pZFBvaW50KCkge1xuICAgIGNvbnN0IG1pZFBvaW50ID0gdGhpcy52ZXJ0aWNlcy5yZWR1Y2UoZnVuY3Rpb24obWlkUG9pbnQsIHZlcnRleCkge1xuICAgICAgY29uc3Qgc2NhbGVkVmVydGV4ID0gc2NhbGUzKHZlcnRleCwgMS8zKTtcbiAgICAgIFxuICAgICAgbWlkUG9pbnQgPSBhZGQzKG1pZFBvaW50LCBzY2FsZWRWZXJ0ZXgpO1xuICAgICAgXG4gICAgICByZXR1cm4gbWlkUG9pbnQ7XG4gICAgfSwgWyAwLCAwLCAwIF0pO1xuICAgIFxuICAgIHJldHVybiBtaWRQb2ludDtcbiAgfVxuICBcbiAgaXNUb29TbWFsbCgpIHtcbiAgICBjb25zdCBub3JtYWxMZW5ndGggPSBsZW5ndGgzKHRoaXMubm9ybWFsKSxcbiAgICAgICAgICBub3JtYWxMZW5ndGhBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhub3JtYWxMZW5ndGgpLFxuICAgICAgICAgIHRvb1NtYWxsID0gbm9ybWFsTGVuZ3RoQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIHRvb1NtYWxsO1xuICB9XG4gIFxuICBpc091dHNpZGVMaW5lc0luWFlQbGFuZShsaW5lc0luWFlQbGFuZSkge1xuICAgIGNvbnN0IGluc2lkZUxpbmVzSW5YWVBsYW5lID0gdGhpcy5pc0luc2lkZUxpbmVzSW5YWVBsYW5lKGxpbmVzSW5YWVBsYW5lKSxcbiAgICAgICAgICBvdXRzaWRlTGluZXNJblhZUGxhbmUgPSAhaW5zaWRlTGluZXNJblhZUGxhbmU7XG4gICAgXG4gICAgcmV0dXJuIG91dHNpZGVMaW5lc0luWFlQbGFuZTtcbiAgfVxuICBcbiAgaXNJbnNpZGVMaW5lc0luWFlQbGFuZShsaW5lc0luWFlQbGFuZSkge1xuICAgIGNvbnN0IG1pZFBvaW50ID0gdGhpcy5nZXRNaWRQb2ludCgpLFxuICAgICAgICAgIG1pZFBvaW50VG9PbmVTaWRlT2ZMaW5lc0luWFlQbGFuZSA9IGlzTWlkUG9pbnRUb09uZVNpZGVPZkxpbmVzSW5YWVBsYW5lKG1pZFBvaW50LCBsaW5lc0luWFlQbGFuZSksXG4gICAgICAgICAgaW5zaWRlTGluZXNJblhZUGxhbmUgPSBtaWRQb2ludFRvT25lU2lkZU9mTGluZXNJblhZUGxhbmU7ICAvLy9cblxuICAgIHJldHVybiBpbnNpZGVMaW5lc0luWFlQbGFuZTtcbiAgfVxuICBcbiAgYXBwbHlUcmFuc2Zvcm1zKHRyYW5zZm9ybXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcy5tYXAoZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICB0cmFuc2Zvcm1zLmZvckVhY2goZnVuY3Rpb24odHJhbnNmb3JtKSB7XG4gICAgICAgIHZlcnRleCA9IHRyYW5zZm9ybSh2ZXJ0ZXgpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgfSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzKTtcbiAgfVxuICBcbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMudmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyh0aGlzLnZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pO1xuICAgIFxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMpO1xuICB9XG5cbiAgcm90YXRlQWJvdXRaQXhpcyhyb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcy5tYXAoZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICB2ZXJ0ZXggPSByb3RhdGVBYm91dFpBeGlzKHZlcnRleCwgcm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcblxuICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICB9KTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMpO1xuICB9XG4gIFxuICBzcGxpdChpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9uc0luY2x1ZGVzTnVsbCA9IGludGVyc2VjdGlvbnMuaW5jbHVkZXMobnVsbCk7XG5cbiAgICBpbnRlcnNlY3Rpb25zSW5jbHVkZXNOdWxsID9cbiAgICAgIHRoaXMuc3BsaXRXaXRoTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRob3V0TnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgfVxuXG4gIHNwbGl0V2l0aE51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25zID0gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgbm9uVHJpdmlhbE5vbk51bGxJbnRlcnNlY3Rpb25zID0gY2FsY3VsYXRlTm9uVHJpdmlhbEludGVyc2VjdGlvbnMobm9uTnVsbEludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIG5vblRyaXZpYWxOb25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCA9IG5vblRyaXZpYWxOb25OdWxsSW50ZXJzZWN0aW9ucy5sZW5ndGg7XG5cbiAgICBzd2l0Y2ggKG5vblRyaXZpYWxOb25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCkge1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhUd29Ob25Ucml2aWFsTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0IDpcbiAgICAgICAgY29uc3Qgc21hbGxlckZhY2V0ID0gdGhpczsgIC8vL1xuXG4gICAgICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzcGxpdFdpdGhvdXROdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBub25Ucml2aWFsSW50ZXJzZWN0aW9ucyA9IGNhbGN1bGF0ZU5vblRyaXZpYWxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIG5vblRyaXZpYWxJbnRlcnNlY3Rpb25zTGVuZ3RoID0gbm9uVHJpdmlhbEludGVyc2VjdGlvbnMubGVuZ3RoO1xuXG4gICAgc3dpdGNoKG5vblRyaXZpYWxJbnRlcnNlY3Rpb25zTGVuZ3RoKSB7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aFR3b05vblRyaXZpYWxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAxIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhPbmVOb25Ucml2aWFsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdCA6XG4gICAgICAgIGNvbnN0IHNtYWxsZXJGYWNldCA9IHRoaXM7ICAvLy9cblxuICAgICAgICBzbWFsbGVyRmFjZXRzLnB1c2goc21hbGxlckZhY2V0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc3BsaXRXaXRoVHdvTm9uVHJpdmlhbE5vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCB2ZXJ0aWNlc0xlbmd0aCA9IDMsXG4gICAgICAgICAgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHBsYWNlcyA9ICh2ZXJ0aWNlc0xlbmd0aCAtIG51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSB2ZXJ0aWNlc0xlbmd0aDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICB0aGlzLnZlcnRpY2VzID0gcGVybXV0ZSh0aGlzLnZlcnRpY2VzLCBwbGFjZXMpO1xuXG4gICAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBub25OdWxsSW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMSksXG4gICAgICAgICAgZmlyc3ROb25OdWxsSW50ZXJzZWN0aW9uID0gZmlyc3Qobm9uTnVsbEludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHNlY29uZE5vbk51bGxJbnRlcnNlY3Rpb24gPSBzZWNvbmQobm9uTnVsbEludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIGZpcnN0SW50ZXJtZWRpYXRlVmVydGV4ID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4KHNlY29uZFZlcnRleCwgdGhpcmRWZXJ0ZXgsIGZpcnN0Tm9uTnVsbEludGVyc2VjdGlvbiksXG4gICAgICAgICAgc2Vjb25kSW50ZXJtZWRpYXRlVmVydGV4ID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4KHRoaXJkVmVydGV4LCBmaXJzdFZlcnRleCwgc2Vjb25kTm9uTnVsbEludGVyc2VjdGlvbiksXG4gICAgICAgICAgZmlyc3RWZXJ0aWNlcyA9IFtcbiAgICAgICAgICAgIGZpcnN0VmVydGV4LFxuICAgICAgICAgICAgc2Vjb25kVmVydGV4LFxuICAgICAgICAgICAgc2Vjb25kSW50ZXJtZWRpYXRlVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZWNvbmRWZXJ0aWNlcyA9IFtcbiAgICAgICAgICAgIHNlY29uZFZlcnRleCxcbiAgICAgICAgICAgIGZpcnN0SW50ZXJtZWRpYXRlVmVydGV4LFxuICAgICAgICAgICAgc2Vjb25kSW50ZXJtZWRpYXRlVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICB0aGlyZFZlcnRpY2VzID0gW1xuICAgICAgICAgICAgZmlyc3RJbnRlcm1lZGlhdGVWZXJ0ZXgsXG4gICAgICAgICAgICB0aGlyZFZlcnRleCxcbiAgICAgICAgICAgIHNlY29uZEludGVybWVkaWF0ZVZlcnRleFxuICAgICAgICAgIF0sXG4gICAgICAgICAgZmlyc3RGYWNldCA9IEZhY2V0LmZyb21WZXJ0aWNlcyhmaXJzdFZlcnRpY2VzKSxcbiAgICAgICAgICBzZWNvbmRGYWNldCA9IEZhY2V0LmZyb21WZXJ0aWNlcyhzZWNvbmRWZXJ0aWNlcyksXG4gICAgICAgICAgdGhpcmRGYWNldCA9IEZhY2V0LmZyb21WZXJ0aWNlcyh0aGlyZFZlcnRpY2VzKSxcbiAgICAgICAgICBmaXJzdEZhY2V0VG9vU21hbGwgPSBmaXJzdEZhY2V0LmlzVG9vU21hbGwoKSxcbiAgICAgICAgICBzZWNvbmRGYWNldFRvb1NtYWxsID0gc2Vjb25kRmFjZXQuaXNUb29TbWFsbCgpLFxuICAgICAgICAgIHRoaXJkRmFjZXRUb29TbWFsbCA9IHRoaXJkRmFjZXQuaXNUb29TbWFsbCgpO1xuXG4gICAgaWYgKCFmaXJzdEZhY2V0VG9vU21hbGwpIHtcbiAgICAgIHNtYWxsZXJGYWNldHMucHVzaChmaXJzdEZhY2V0KTtcbiAgICB9XG5cbiAgICBpZiAoIXNlY29uZEZhY2V0VG9vU21hbGwpIHtcbiAgICAgIHNtYWxsZXJGYWNldHMucHVzaChzZWNvbmRGYWNldCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlyZEZhY2V0VG9vU21hbGwpIHtcbiAgICAgIHNtYWxsZXJGYWNldHMucHVzaCh0aGlyZEZhY2V0KTtcbiAgICB9XG4gIH1cblxuICBzcGxpdFdpdGhUd29Ob25Ucml2aWFsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3QgdmVydGljZXNMZW5ndGggPSAzLFxuICAgICAgICAgIHRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZVRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAodmVydGljZXNMZW5ndGggLSB0cml2aWFsSW50ZXJzZWN0aW9uSW5kZXgpICUgdmVydGljZXNMZW5ndGg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgdGhpcy52ZXJ0aWNlcyA9IHBlcm11dGUodGhpcy52ZXJ0aWNlcywgcGxhY2VzKTtcblxuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgbm9uVHJpdmlhbEludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnNsaWNlKDEpLFxuICAgICAgICAgIGZpcnN0Tm9uVHJpdmlhbEludGVyc2VjdGlvbiA9IGZpcnN0KG5vblRyaXZpYWxJbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBzZWNvbmROb25Ucml2aWFsSW50ZXJzZWN0aW9uID0gc2Vjb25kKG5vblRyaXZpYWxJbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBmaXJzdEludGVybWVkaWF0ZVZlcnRleCA9IGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleChzZWNvbmRWZXJ0ZXgsIHRoaXJkVmVydGV4LCBmaXJzdE5vblRyaXZpYWxJbnRlcnNlY3Rpb24pLFxuICAgICAgICAgIHNlY29uZEludGVybWVkaWF0ZVZlcnRleCA9IGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleCh0aGlyZFZlcnRleCwgZmlyc3RWZXJ0ZXgsIHNlY29uZE5vblRyaXZpYWxJbnRlcnNlY3Rpb24pLFxuICAgICAgICAgIGZpcnN0VmVydGljZXMgPSBbXG4gICAgICAgICAgICBmaXJzdFZlcnRleCxcbiAgICAgICAgICAgIHNlY29uZFZlcnRleCxcbiAgICAgICAgICAgIGZpcnN0SW50ZXJtZWRpYXRlVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZWNvbmRWZXJ0aWNlcyA9IFtcbiAgICAgICAgICAgIGZpcnN0VmVydGV4LFxuICAgICAgICAgICAgZmlyc3RJbnRlcm1lZGlhdGVWZXJ0ZXgsXG4gICAgICAgICAgICBzZWNvbmRJbnRlcm1lZGlhdGVWZXJ0ZXhcbiAgICAgICAgICBdLFxuICAgICAgICAgIHRoaXJkVmVydGljZXMgPSBbXG4gICAgICAgICAgICBmaXJzdEludGVybWVkaWF0ZVZlcnRleCxcbiAgICAgICAgICAgIHRoaXJkVmVydGV4LFxuICAgICAgICAgICAgc2Vjb25kSW50ZXJtZWRpYXRlVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBmaXJzdEZhY2V0PSBGYWNldC5mcm9tVmVydGljZXMoZmlyc3RWZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kRmFjZXQgPSBGYWNldC5mcm9tVmVydGljZXMoc2Vjb25kVmVydGljZXMpLFxuICAgICAgICAgIHRoaXJkRmFjZXQgPSBGYWNldC5mcm9tVmVydGljZXModGhpcmRWZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3RGYWNldFRvb1NtYWxsID0gZmlyc3RGYWNldC5pc1Rvb1NtYWxsKCksXG4gICAgICAgICAgc2Vjb25kRmFjZXRUb29TbWFsbCA9IHNlY29uZEZhY2V0LmlzVG9vU21hbGwoKSxcbiAgICAgICAgICB0aGlyZEZhY2V0VG9vU21hbGwgPSB0aGlyZEZhY2V0LmlzVG9vU21hbGwoKTtcblxuICAgIGlmICghZmlyc3RGYWNldFRvb1NtYWxsKSB7XG4gICAgICBzbWFsbGVyRmFjZXRzLnB1c2goZmlyc3RGYWNldCk7XG4gICAgfVxuXG4gICAgaWYgKCFzZWNvbmRGYWNldFRvb1NtYWxsKSB7XG4gICAgICBzbWFsbGVyRmFjZXRzLnB1c2goc2Vjb25kRmFjZXQpO1xuICAgIH1cblxuICAgIGlmICghdGhpcmRGYWNldFRvb1NtYWxsKSB7XG4gICAgICBzbWFsbGVyRmFjZXRzLnB1c2godGhpcmRGYWNldCk7XG4gICAgfVxuICB9XG5cbiAgc3BsaXRXaXRoT25lTm9uVHJpdmlhbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3QgdmVydGljZXNMZW5ndGggPSAzLFxuICAgICAgICAgIG5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAodmVydGljZXNMZW5ndGggLSBub25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXgpICUgdmVydGljZXNMZW5ndGg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgdGhpcy52ZXJ0aWNlcyA9IHBlcm11dGUodGhpcy52ZXJ0aWNlcywgcGxhY2VzKTtcblxuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3RJbnRlcnNlY3Rpb24gPSBmaXJzdChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBub25Ucml2aWFsSW50ZXJzZWN0aW9uID0gZmlyc3RJbnRlcnNlY3Rpb24sIC8vL1xuICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleCA9IGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleChmaXJzdFZlcnRleCwgc2Vjb25kVmVydGV4LCBub25Ucml2aWFsSW50ZXJzZWN0aW9uKSxcbiAgICAgICAgICBmaXJzdFZlcnRpY2VzID0gW1xuICAgICAgICAgICAgZmlyc3RWZXJ0ZXgsXG4gICAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXgsXG4gICAgICAgICAgICB0aGlyZFZlcnRleFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2Vjb25kVmVydGljZXMgPSBbXG4gICAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXgsXG4gICAgICAgICAgICBzZWNvbmRWZXJ0ZXgsXG4gICAgICAgICAgICB0aGlyZFZlcnRleFxuICAgICAgICAgIF0sXG4gICAgICAgICAgZmlyc3RGYWNldCA9IEZhY2V0LmZyb21WZXJ0aWNlcyhmaXJzdFZlcnRpY2VzKSxcbiAgICAgICAgICBzZWNvbmRGYWNldCA9IEZhY2V0LmZyb21WZXJ0aWNlcyhzZWNvbmRWZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3RGYWNldFRvb1NtYWxsID0gZmlyc3RGYWNldC5pc1Rvb1NtYWxsKCksXG4gICAgICAgICAgc2Vjb25kRmFjZXRUb29TbWFsbCA9IHNlY29uZEZhY2V0LmlzVG9vU21hbGwoKTtcblxuICAgIGlmICghZmlyc3RGYWNldFRvb1NtYWxsKSB7XG4gICAgICBzbWFsbGVyRmFjZXRzLnB1c2goZmlyc3RGYWNldCk7XG4gICAgfVxuXG4gICAgaWYgKCFzZWNvbmRGYWNldFRvb1NtYWxsKSB7XG4gICAgICBzbWFsbGVyRmFjZXRzLnB1c2goc2Vjb25kRmFjZXQpO1xuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZUludGVyc2VjdGlvbnNXaXRoVmVydGljYWxMaW5lSW5YWVBsYW5lKHZlcnRpY2FsTGluZUluWFlQbGFuZSkge1xuICAgIGNvbnN0IGxpbmVzID0gdGhpcy5nZXRMaW5lcygpLFxuICAgICAgICAgIGludGVyc2VjdGlvbnMgPSBsaW5lcy5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gbGluZS5jYWxjdWxhdGVJbnRlcnNlY3Rpb25XaXRoVmVydGljYWxMaW5lSW5YWVBsYW5lKHZlcnRpY2FsTGluZUluWFlQbGFuZSk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBpbnRlcnNlY3Rpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcyksXG4gICAgICAgICAgZmFjZXQgPSBuZXcgRmFjZXQodmVydGljZXMsIG5vcm1hbCk7XG5cbiAgICByZXR1cm4gZmFjZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRpY2VzQW5kSW5kZXhlcyh2ZXJ0aWNlcywgaW5kZXhlcykge1xuICAgIHZlcnRpY2VzID0gaW5kZXhlcy5tYXAoZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIGNvbnN0IHZlcnRleCA9IHZlcnRpY2VzW2luZGV4XTtcblxuICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZhY2V0ID0gRmFjZXQuZnJvbVZlcnRpY2VzKHZlcnRpY2VzKTtcblxuICAgIHJldHVybiBmYWNldDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZhY2V0O1xuXG5mdW5jdGlvbiBpc0ludGVyc2VjdGlvblRyaXZpYWwoaW50ZXJzZWN0aW9uKSB7XG4gIGNvbnN0IGludGVyc2VjdGlvbk5vblRyaXZpYWwgPSBpc0ludGVyc2VjdGlvbk5vblRyaXZpYWwoaW50ZXJzZWN0aW9uKSxcbiAgICAgIGludGVyc2VjdGlvblRyaXZpYWwgPSAhaW50ZXJzZWN0aW9uTm9uVHJpdmlhbDtcblxuICByZXR1cm4gaW50ZXJzZWN0aW9uVHJpdmlhbDtcbn1cblxuZnVuY3Rpb24gaXNJbnRlcnNlY3Rpb25Ob25Ucml2aWFsKGludGVyc2VjdGlvbikge1xuICBjb25zdCBpbnRlcnNlY3Rpb25Ob25Ucml2aWFsID0gKChpbnRlcnNlY3Rpb24gPiAwKSAmJiAoaW50ZXJzZWN0aW9uIDwgMSkpO1xuXG4gIHJldHVybiBpbnRlcnNlY3Rpb25Ob25Ucml2aWFsO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCwgbm9uTnVsbEludGVyc2VjdGlvbikge1xuICBjb25zdCBkaXJlY3Rpb24gPSBzdWJ0cmFjdDMoZW5kVmVydGV4LCBzdGFydFZlcnRleCksXG4gICAgICAgIG9mZnNldCA9IHNjYWxlMyhkaXJlY3Rpb24sIG5vbk51bGxJbnRlcnNlY3Rpb24pLFxuICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXggPSBhZGQzKHN0YXJ0VmVydGV4LCBvZmZzZXQpO1xuXG4gIHJldHVybiBpbnRlcm1lZGlhdGVWZXJ0ZXg7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnJlZHVjZShmdW5jdGlvbihub25OdWxsSW50ZXJzZWN0aW9ucywgaW50ZXJzZWN0aW9uKSB7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9uTm9uTnVsbCA9IChpbnRlcnNlY3Rpb24gIT09IG51bGwpO1xuXG4gICAgaWYgKGludGVyc2VjdGlvbk5vbk51bGwpIHtcbiAgICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb247IC8vL1xuXG4gICAgICBub25OdWxsSW50ZXJzZWN0aW9ucy5wdXNoKG5vbk51bGxJbnRlcnNlY3Rpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBub25OdWxsSW50ZXJzZWN0aW9ucztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBub25OdWxsSW50ZXJzZWN0aW9ucztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTm9uVHJpdmlhbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucykge1xuICBjb25zdCBub25Ucml2aWFsSW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMucmVkdWNlKGZ1bmN0aW9uKG5vblRyaXZpYWxJbnRlcnNlY3Rpb25zLCBpbnRlcnNlY3Rpb24pIHtcbiAgICBjb25zdCBpbnRlcnNlY3Rpb25Ob25Ucml2aWFsID0gaXNJbnRlcnNlY3Rpb25Ob25Ucml2aWFsKGludGVyc2VjdGlvbik7XG5cbiAgICBpZiAoaW50ZXJzZWN0aW9uTm9uVHJpdmlhbCkge1xuICAgICAgY29uc3Qgbm9uVHJpdmlhbEludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbjsgIC8vL1xuXG4gICAgICBub25Ucml2aWFsSW50ZXJzZWN0aW9ucy5wdXNoKG5vblRyaXZpYWxJbnRlcnNlY3Rpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBub25Ucml2aWFsSW50ZXJzZWN0aW9ucztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBub25Ucml2aWFsSW50ZXJzZWN0aW9ucztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW50ZXJzZWN0aW9ucy5pbmRleE9mKG51bGwpO1xuXG4gIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IHRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMucmVkdWNlKGZ1bmN0aW9uKHRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkge1xuICAgIGlmICh0cml2aWFsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGludGVyc2VjdGlvbk5vblRyaXZpYWwgPSBpc0ludGVyc2VjdGlvblRyaXZpYWwoaW50ZXJzZWN0aW9uKTtcblxuICAgICAgaWYgKGludGVyc2VjdGlvbk5vblRyaXZpYWwpIHtcbiAgICAgICAgdHJpdmlhbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTm9uVHJpdmlhbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3Qgbm9uVHJpdmlhbEludGVyc2VjdGlvbkluZGV4ID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24obm9uVHJpdmlhbEludGVyc2VjdGlvbkluZGV4LCBpbnRlcnNlY3Rpb24sIGluZGV4KSB7XG4gICAgaWYgKG5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgaW50ZXJzZWN0aW9uTm9uVHJpdmlhbCA9IGlzSW50ZXJzZWN0aW9uTm9uVHJpdmlhbChpbnRlcnNlY3Rpb24pO1xuXG4gICAgICBpZiAoaW50ZXJzZWN0aW9uTm9uVHJpdmlhbCkge1xuICAgICAgICBub25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVHJpdmlhbEludGVyc2VjdGlvbkluZGV4O1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gbm9uVHJpdmlhbEludGVyc2VjdGlvbkluZGV4O1xufVxuXG5mdW5jdGlvbiBpc01pZFBvaW50VG9PbmVTaWRlT2ZMaW5lc0luWFlQbGFuZShtaWRQb2ludCwgbGluZXNJblhZUGxhbmUpIHtcbiAgY29uc3QgbWlkUG9pbnRUb1RoZUxlZnRPZkxpbmVzSW5YWVBsYW5lID0gaXNNaWRQb2ludFRvVGhlTGVmdE9mTGluZXNJblhZUGxhbmUobWlkUG9pbnQsIGxpbmVzSW5YWVBsYW5lKSxcbiAgICAgICAgbWlkUG9pbnRUb1RoZVJpZ2h0T2ZMaW5lc0luWFlQbGFuZSA9IGlzTWlkUG9pbnRUb1RoZVJpZ2h0T2ZMaW5lc0luWFlQbGFuZShtaWRQb2ludCwgbGluZXNJblhZUGxhbmUpLFxuICAgICAgICBtaWRQb2ludFRvT25lU2lkZU9mTGluZXNJblhZUGxhbmUgPSBtaWRQb2ludFRvVGhlTGVmdE9mTGluZXNJblhZUGxhbmUgfHwgbWlkUG9pbnRUb1RoZVJpZ2h0T2ZMaW5lc0luWFlQbGFuZTsgLy8vXG5cbiAgcmV0dXJuIG1pZFBvaW50VG9PbmVTaWRlT2ZMaW5lc0luWFlQbGFuZTtcbn1cblxuZnVuY3Rpb24gaXNNaWRQb2ludFRvVGhlTGVmdE9mTGluZXNJblhZUGxhbmUobWlkUG9pbnQsIGxpbmVzSW5YWVBsYW5lKSB7XG4gIGNvbnN0IG1pZFBvaW50VG9UaGVMZWZ0T2ZMaW5lc0luWFlQbGFuZSA9IGxpbmVzSW5YWVBsYW5lLnJlZHVjZShmdW5jdGlvbihtaWRQb2ludFRvVGhlTGVmdE9mTGluZXNJblhZUGxhbmUsIGxpbmVJblhZUGxhbmUpIHtcbiAgICBpZiAobWlkUG9pbnRUb1RoZUxlZnRPZkxpbmVzSW5YWVBsYW5lKSB7XG4gICAgICBjb25zdCBtaWRQb2ludFRvVGhlTGVmdE9mTGluZUluWFlQbGFuZSA9IGxpbmVJblhZUGxhbmUuaXNNaWRQb2ludFRvVGhlTGVmdChtaWRQb2ludCk7XG5cbiAgICAgIG1pZFBvaW50VG9UaGVMZWZ0T2ZMaW5lc0luWFlQbGFuZSA9IG1pZFBvaW50VG9UaGVMZWZ0T2ZMaW5lSW5YWVBsYW5lO1xuICAgIH1cblxuICAgIHJldHVybiBtaWRQb2ludFRvVGhlTGVmdE9mTGluZXNJblhZUGxhbmU7XG4gIH0sIHRydWUpO1xuXG4gIHJldHVybiBtaWRQb2ludFRvVGhlTGVmdE9mTGluZXNJblhZUGxhbmU7XG59XG5cbmZ1bmN0aW9uIGlzTWlkUG9pbnRUb1RoZVJpZ2h0T2ZMaW5lc0luWFlQbGFuZShtaWRQb2ludCwgbGluZXNJblhZUGxhbmUpIHtcbiAgY29uc3QgbWlkUG9pbnRUb1RoZVJpZ2h0T2ZMaW5lc0luWFlQbGFuZSA9IGxpbmVzSW5YWVBsYW5lLnJlZHVjZShmdW5jdGlvbihtaWRQb2ludFRvVGhlUmlnaHRPZkxpbmVzSW5YWVBsYW5lLCBsaW5lSW5YWVBsYW5lKSB7XG4gICAgaWYgKG1pZFBvaW50VG9UaGVSaWdodE9mTGluZXNJblhZUGxhbmUpIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50VG9UaGVSaWdodE9mTGluZUluWFlQbGFuZSA9IGxpbmVJblhZUGxhbmUuaXNNaWRQb2ludFRvVGhlUmlnaHQobWlkUG9pbnQpO1xuXG4gICAgICBtaWRQb2ludFRvVGhlUmlnaHRPZkxpbmVzSW5YWVBsYW5lID0gbWlkUG9pbnRUb1RoZVJpZ2h0T2ZMaW5lSW5YWVBsYW5lO1xuICAgIH1cblxuICAgIHJldHVybiBtaWRQb2ludFRvVGhlUmlnaHRPZkxpbmVzSW5YWVBsYW5lO1xuICB9LCB0cnVlKTtcblxuICByZXR1cm4gbWlkUG9pbnRUb1RoZVJpZ2h0T2ZMaW5lc0luWFlQbGFuZTtcbn1cblxuXG5cblxuIl19