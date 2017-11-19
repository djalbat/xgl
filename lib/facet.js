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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mYWNldC5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwidmVjdG9yVXRpbGl0aWVzIiwidmVydGV4VXRpbGl0aWVzIiwidmVydGljZXNVdGlsaXRpZXMiLCJhcHByb3hpbWF0ZVV0aWxpdGllcyIsInJvdGF0ZUFib3V0WkF4aXMiLCJpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyIsImZpcnN0Iiwic2Vjb25kIiwidGhpcmQiLCJwZXJtdXRlIiwiY2FsY3VsYXRlTm9ybWFsIiwicm90YXRlVmVydGljZXMiLCJhZGQzIiwic3VidHJhY3QzIiwic2NhbGUzIiwibGVuZ3RoMyIsIkZhY2V0IiwidmVydGljZXMiLCJub3JtYWwiLCJ2ZXJ0aWNlc0xlbmd0aCIsImxpbmVzIiwibWFwIiwidmVydGV4IiwiaW5kZXgiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJzdGFydFZlcnRleCIsImVuZFZlcnRleCIsImxpbmUiLCJmcm9tVmVydGljZXMiLCJiaW5kIiwibWlkUG9pbnQiLCJyZWR1Y2UiLCJzY2FsZWRWZXJ0ZXgiLCJub3JtYWxMZW5ndGgiLCJub3JtYWxMZW5ndGhBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8iLCJ0b29TbWFsbCIsImxpbmVzSW5YWVBsYW5lIiwiaW5zaWRlTGluZXNJblhZUGxhbmUiLCJpc0luc2lkZUxpbmVzSW5YWVBsYW5lIiwib3V0c2lkZUxpbmVzSW5YWVBsYW5lIiwiZ2V0TWlkUG9pbnQiLCJtaWRQb2ludFRvT25lU2lkZU9mTGluZXNJblhZUGxhbmUiLCJpc01pZFBvaW50VG9PbmVTaWRlT2ZMaW5lc0luWFlQbGFuZSIsInRyYW5zZm9ybXMiLCJmb3JFYWNoIiwidHJhbnNmb3JtIiwicm90YXRpb25RdWF0ZXJuaW9uIiwicm90YXRpb25BYm91dFpBeGlzTWF0cml4IiwiaW50ZXJzZWN0aW9ucyIsInNtYWxsZXJGYWNldHMiLCJpbnRlcnNlY3Rpb25zSW5jbHVkZXNOdWxsIiwiaW5jbHVkZXMiLCJzcGxpdFdpdGhOdWxsSW50ZXJzZWN0aW9uIiwic3BsaXRXaXRob3V0TnVsbEludGVyc2VjdGlvbiIsIm5vbk51bGxJbnRlcnNlY3Rpb25zIiwiY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMiLCJub25Ucml2aWFsTm9uTnVsbEludGVyc2VjdGlvbnMiLCJjYWxjdWxhdGVOb25Ucml2aWFsSW50ZXJzZWN0aW9ucyIsIm5vblRyaXZpYWxOb25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCIsImxlbmd0aCIsInNwbGl0V2l0aFR3b05vblRyaXZpYWxOb25OdWxsSW50ZXJzZWN0aW9ucyIsInNtYWxsZXJGYWNldCIsInB1c2giLCJub25Ucml2aWFsSW50ZXJzZWN0aW9ucyIsIm5vblRyaXZpYWxJbnRlcnNlY3Rpb25zTGVuZ3RoIiwic3BsaXRXaXRoVHdvTm9uVHJpdmlhbEludGVyc2VjdGlvbnMiLCJzcGxpdFdpdGhPbmVOb25Ucml2aWFsSW50ZXJzZWN0aW9uIiwibnVsbEludGVyc2VjdGlvbkluZGV4IiwiY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4IiwicGxhY2VzIiwiZmlyc3RWZXJ0ZXgiLCJzZWNvbmRWZXJ0ZXgiLCJ0aGlyZFZlcnRleCIsInNsaWNlIiwiZmlyc3ROb25OdWxsSW50ZXJzZWN0aW9uIiwic2Vjb25kTm9uTnVsbEludGVyc2VjdGlvbiIsImZpcnN0SW50ZXJtZWRpYXRlVmVydGV4IiwiY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4Iiwic2Vjb25kSW50ZXJtZWRpYXRlVmVydGV4IiwiZmlyc3RWZXJ0aWNlcyIsInNlY29uZFZlcnRpY2VzIiwidGhpcmRWZXJ0aWNlcyIsImZpcnN0RmFjZXQiLCJzZWNvbmRGYWNldCIsInRoaXJkRmFjZXQiLCJmaXJzdEZhY2V0VG9vU21hbGwiLCJpc1Rvb1NtYWxsIiwic2Vjb25kRmFjZXRUb29TbWFsbCIsInRoaXJkRmFjZXRUb29TbWFsbCIsInRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCIsImNhbGN1bGF0ZVRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCIsImZpcnN0Tm9uVHJpdmlhbEludGVyc2VjdGlvbiIsInNlY29uZE5vblRyaXZpYWxJbnRlcnNlY3Rpb24iLCJub25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXgiLCJjYWxjdWxhdGVOb25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXgiLCJmaXJzdEludGVyc2VjdGlvbiIsIm5vblRyaXZpYWxJbnRlcnNlY3Rpb24iLCJpbnRlcm1lZGlhdGVWZXJ0ZXgiLCJ2ZXJ0aWNhbExpbmVJblhZUGxhbmUiLCJnZXRMaW5lcyIsImludGVyc2VjdGlvbiIsImNhbGN1bGF0ZUludGVyc2VjdGlvbldpdGhWZXJ0aWNhbExpbmVJblhZUGxhbmUiLCJmYWNldCIsIm1vZHVsZSIsImV4cG9ydHMiLCJpc0ludGVyc2VjdGlvblRyaXZpYWwiLCJpbnRlcnNlY3Rpb25Ob25Ucml2aWFsIiwiaXNJbnRlcnNlY3Rpb25Ob25Ucml2aWFsIiwiaW50ZXJzZWN0aW9uVHJpdmlhbCIsIm5vbk51bGxJbnRlcnNlY3Rpb24iLCJkaXJlY3Rpb24iLCJvZmZzZXQiLCJpbnRlcnNlY3Rpb25Ob25OdWxsIiwiaW5kZXhPZiIsIm1pZFBvaW50VG9UaGVMZWZ0T2ZMaW5lc0luWFlQbGFuZSIsImlzTWlkUG9pbnRUb1RoZUxlZnRPZkxpbmVzSW5YWVBsYW5lIiwibWlkUG9pbnRUb1RoZVJpZ2h0T2ZMaW5lc0luWFlQbGFuZSIsImlzTWlkUG9pbnRUb1RoZVJpZ2h0T2ZMaW5lc0luWFlQbGFuZSIsImxpbmVJblhZUGxhbmUiLCJtaWRQb2ludFRvVGhlTGVmdE9mTGluZUluWFlQbGFuZSIsImlzTWlkUG9pbnRUb1RoZUxlZnQiLCJtaWRQb2ludFRvVGhlUmlnaHRPZkxpbmVJblhZUGxhbmUiLCJpc01pZFBvaW50VG9UaGVSaWdodCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG1CQUFSLENBRHZCO0FBQUEsSUFF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dEMsVUFBTUssb0NBQW9DSCxjQUFjSSxvQkFBZCxDQUFtQzVGLFFBQW5DLENBQTFDOztBQUVBc0YsMkNBQXFDSyxpQ0FBckM7QUFDRDs7QUFFRCxXQUFPTCxrQ0FBUDtBQUNELEdBUjBDLEVBUXhDLElBUndDLENBQTNDOztBQVVBLFNBQU9BLGtDQUFQO0FBQ0QiLCJmaWxlIjoiZmFjZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlY3RvcicpLFxuICAgICAgdmVydGV4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdmVydGV4JyksXG4gICAgICB2ZXJ0aWNlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlcnRpY2VzJyksXG4gICAgICBhcHByb3hpbWF0ZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FwcHJveGltYXRlJyk7XG5cbmNvbnN0IHsgcm90YXRlQWJvdXRaQXhpcyB9ID0gdmVydGV4VXRpbGl0aWVzLFxuICAgICAgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9ID0gYXBwcm94aW1hdGVVdGlsaXRpZXMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBwZXJtdXRlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlTm9ybWFsLCByb3RhdGVWZXJ0aWNlcyB9ID0gdmVydGljZXNVdGlsaXRpZXMsXG4gICAgICB7IGFkZDMsIHN1YnRyYWN0Mywgc2NhbGUzLCBsZW5ndGgzIH0gPSB2ZWN0b3JVdGlsaXRpZXM7XG5cbmNsYXNzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCkge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgfVxuXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0Tm9ybWFsKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbDtcbiAgfVxuXG4gIGdldExpbmVzKCkge1xuICAgIGNvbnN0IHZlcnRpY2VzTGVuZ3RoID0gMywgLy8vXG4gICAgICAgICAgbGluZXMgPSB0aGlzLnZlcnRpY2VzLm1hcChmdW5jdGlvbih2ZXJ0ZXgsIGluZGV4KSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gaW5kZXgsXG4gICAgICAgICAgICAgICAgICBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMSkgJSB2ZXJ0aWNlc0xlbmd0aCxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGVuZFZlcnRleCA9IHRoaXMudmVydGljZXNbZW5kSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgbGluZSA9IExpbmUuZnJvbVZlcnRpY2VzKHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBsaW5lO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gbGluZXM7XG4gIH1cbiAgXG4gIGdldE1pZFBvaW50KCkge1xuICAgIGNvbnN0IG1pZFBvaW50ID0gdGhpcy52ZXJ0aWNlcy5yZWR1Y2UoZnVuY3Rpb24obWlkUG9pbnQsIHZlcnRleCkge1xuICAgICAgY29uc3Qgc2NhbGVkVmVydGV4ID0gc2NhbGUzKHZlcnRleCwgMS8zKTtcbiAgICAgIFxuICAgICAgbWlkUG9pbnQgPSBhZGQzKG1pZFBvaW50LCBzY2FsZWRWZXJ0ZXgpO1xuICAgICAgXG4gICAgICByZXR1cm4gbWlkUG9pbnQ7XG4gICAgfSwgWyAwLCAwLCAwIF0pO1xuICAgIFxuICAgIHJldHVybiBtaWRQb2ludDtcbiAgfVxuICBcbiAgaXNUb29TbWFsbCgpIHtcbiAgICBjb25zdCBub3JtYWxMZW5ndGggPSBsZW5ndGgzKHRoaXMubm9ybWFsKSxcbiAgICAgICAgICBub3JtYWxMZW5ndGhBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhub3JtYWxMZW5ndGgpLFxuICAgICAgICAgIHRvb1NtYWxsID0gbm9ybWFsTGVuZ3RoQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIHRvb1NtYWxsO1xuICB9XG4gIFxuICBpc091dHNpZGVMaW5lc0luWFlQbGFuZShsaW5lc0luWFlQbGFuZSkge1xuICAgIGNvbnN0IGluc2lkZUxpbmVzSW5YWVBsYW5lID0gdGhpcy5pc0luc2lkZUxpbmVzSW5YWVBsYW5lKGxpbmVzSW5YWVBsYW5lKSxcbiAgICAgICAgICBvdXRzaWRlTGluZXNJblhZUGxhbmUgPSAhaW5zaWRlTGluZXNJblhZUGxhbmU7XG4gICAgXG4gICAgcmV0dXJuIG91dHNpZGVMaW5lc0luWFlQbGFuZTtcbiAgfVxuICBcbiAgaXNJbnNpZGVMaW5lc0luWFlQbGFuZShsaW5lc0luWFlQbGFuZSkge1xuICAgIGNvbnN0IG1pZFBvaW50ID0gdGhpcy5nZXRNaWRQb2ludCgpLFxuICAgICAgICAgIG1pZFBvaW50VG9PbmVTaWRlT2ZMaW5lc0luWFlQbGFuZSA9IGlzTWlkUG9pbnRUb09uZVNpZGVPZkxpbmVzSW5YWVBsYW5lKG1pZFBvaW50LCBsaW5lc0luWFlQbGFuZSksXG4gICAgICAgICAgaW5zaWRlTGluZXNJblhZUGxhbmUgPSBtaWRQb2ludFRvT25lU2lkZU9mTGluZXNJblhZUGxhbmU7ICAvLy9cblxuICAgIHJldHVybiBpbnNpZGVMaW5lc0luWFlQbGFuZTtcbiAgfVxuICBcbiAgYXBwbHlUcmFuc2Zvcm1zKHRyYW5zZm9ybXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcy5tYXAoZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICB0cmFuc2Zvcm1zLmZvckVhY2goZnVuY3Rpb24odHJhbnNmb3JtKSB7XG4gICAgICAgIHZlcnRleCA9IHRyYW5zZm9ybSh2ZXJ0ZXgpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgfSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzKTtcbiAgfVxuICBcbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMudmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyh0aGlzLnZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pO1xuICAgIFxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMpO1xuICB9XG5cbiAgcm90YXRlQWJvdXRaQXhpcyhyb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcy5tYXAoZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICB2ZXJ0ZXggPSByb3RhdGVBYm91dFpBeGlzKHZlcnRleCwgcm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcblxuICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICB9KTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMpO1xuICB9XG4gIFxuICBzcGxpdChpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9uc0luY2x1ZGVzTnVsbCA9IGludGVyc2VjdGlvbnMuaW5jbHVkZXMobnVsbCk7XG5cbiAgICBpbnRlcnNlY3Rpb25zSW5jbHVkZXNOdWxsID9cbiAgICAgIHRoaXMuc3BsaXRXaXRoTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRob3V0TnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgfVxuXG4gIHNwbGl0V2l0aE51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25zID0gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgbm9uVHJpdmlhbE5vbk51bGxJbnRlcnNlY3Rpb25zID0gY2FsY3VsYXRlTm9uVHJpdmlhbEludGVyc2VjdGlvbnMobm9uTnVsbEludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIG5vblRyaXZpYWxOb25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCA9IG5vblRyaXZpYWxOb25OdWxsSW50ZXJzZWN0aW9ucy5sZW5ndGg7XG5cbiAgICBzd2l0Y2ggKG5vblRyaXZpYWxOb25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCkge1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhUd29Ob25Ucml2aWFsTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0IDpcbiAgICAgICAgY29uc3Qgc21hbGxlckZhY2V0ID0gdGhpczsgIC8vL1xuXG4gICAgICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzcGxpdFdpdGhvdXROdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBub25Ucml2aWFsSW50ZXJzZWN0aW9ucyA9IGNhbGN1bGF0ZU5vblRyaXZpYWxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIG5vblRyaXZpYWxJbnRlcnNlY3Rpb25zTGVuZ3RoID0gbm9uVHJpdmlhbEludGVyc2VjdGlvbnMubGVuZ3RoO1xuXG4gICAgc3dpdGNoKG5vblRyaXZpYWxJbnRlcnNlY3Rpb25zTGVuZ3RoKSB7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aFR3b05vblRyaXZpYWxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAxIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhPbmVOb25Ucml2aWFsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdCA6XG4gICAgICAgIGNvbnN0IHNtYWxsZXJGYWNldCA9IHRoaXM7ICAvLy9cblxuICAgICAgICBzbWFsbGVyRmFjZXRzLnB1c2goc21hbGxlckZhY2V0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc3BsaXRXaXRoVHdvTm9uVHJpdmlhbE5vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCB2ZXJ0aWNlc0xlbmd0aCA9IDMsXG4gICAgICAgICAgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHBsYWNlcyA9ICh2ZXJ0aWNlc0xlbmd0aCAtIG51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSB2ZXJ0aWNlc0xlbmd0aDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICB0aGlzLnZlcnRpY2VzID0gcGVybXV0ZSh0aGlzLnZlcnRpY2VzLCBwbGFjZXMpO1xuXG4gICAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBub25OdWxsSW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMSksXG4gICAgICAgICAgZmlyc3ROb25OdWxsSW50ZXJzZWN0aW9uID0gZmlyc3Qobm9uTnVsbEludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHNlY29uZE5vbk51bGxJbnRlcnNlY3Rpb24gPSBzZWNvbmQobm9uTnVsbEludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIGZpcnN0SW50ZXJtZWRpYXRlVmVydGV4ID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4KHNlY29uZFZlcnRleCwgdGhpcmRWZXJ0ZXgsIGZpcnN0Tm9uTnVsbEludGVyc2VjdGlvbiksXG4gICAgICAgICAgc2Vjb25kSW50ZXJtZWRpYXRlVmVydGV4ID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4KHRoaXJkVmVydGV4LCBmaXJzdFZlcnRleCwgc2Vjb25kTm9uTnVsbEludGVyc2VjdGlvbiksXG4gICAgICAgICAgZmlyc3RWZXJ0aWNlcyA9IFtcbiAgICAgICAgICAgIGZpcnN0VmVydGV4LFxuICAgICAgICAgICAgc2Vjb25kVmVydGV4LFxuICAgICAgICAgICAgc2Vjb25kSW50ZXJtZWRpYXRlVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZWNvbmRWZXJ0aWNlcyA9IFtcbiAgICAgICAgICAgIHNlY29uZFZlcnRleCxcbiAgICAgICAgICAgIGZpcnN0SW50ZXJtZWRpYXRlVmVydGV4LFxuICAgICAgICAgICAgc2Vjb25kSW50ZXJtZWRpYXRlVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICB0aGlyZFZlcnRpY2VzID0gW1xuICAgICAgICAgICAgZmlyc3RJbnRlcm1lZGlhdGVWZXJ0ZXgsXG4gICAgICAgICAgICB0aGlyZFZlcnRleCxcbiAgICAgICAgICAgIHNlY29uZEludGVybWVkaWF0ZVZlcnRleFxuICAgICAgICAgIF0sXG4gICAgICAgICAgZmlyc3RGYWNldCA9IEZhY2V0LmZyb21WZXJ0aWNlcyhmaXJzdFZlcnRpY2VzKSxcbiAgICAgICAgICBzZWNvbmRGYWNldCA9IEZhY2V0LmZyb21WZXJ0aWNlcyhzZWNvbmRWZXJ0aWNlcyksXG4gICAgICAgICAgdGhpcmRGYWNldCA9IEZhY2V0LmZyb21WZXJ0aWNlcyh0aGlyZFZlcnRpY2VzKSxcbiAgICAgICAgICBmaXJzdEZhY2V0VG9vU21hbGwgPSBmaXJzdEZhY2V0LmlzVG9vU21hbGwoKSxcbiAgICAgICAgICBzZWNvbmRGYWNldFRvb1NtYWxsID0gc2Vjb25kRmFjZXQuaXNUb29TbWFsbCgpLFxuICAgICAgICAgIHRoaXJkRmFjZXRUb29TbWFsbCA9IHRoaXJkRmFjZXQuaXNUb29TbWFsbCgpO1xuXG4gICAgaWYgKCFmaXJzdEZhY2V0VG9vU21hbGwpIHtcbiAgICAgIHNtYWxsZXJGYWNldHMucHVzaChmaXJzdEZhY2V0KTtcbiAgICB9XG5cbiAgICBpZiAoIXNlY29uZEZhY2V0VG9vU21hbGwpIHtcbiAgICAgIHNtYWxsZXJGYWNldHMucHVzaChzZWNvbmRGYWNldCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlyZEZhY2V0VG9vU21hbGwpIHtcbiAgICAgIHNtYWxsZXJGYWNldHMucHVzaCh0aGlyZEZhY2V0KTtcbiAgICB9XG4gIH1cblxuICBzcGxpdFdpdGhUd29Ob25Ucml2aWFsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3QgdmVydGljZXNMZW5ndGggPSAzLFxuICAgICAgICAgIHRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZVRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAodmVydGljZXNMZW5ndGggLSB0cml2aWFsSW50ZXJzZWN0aW9uSW5kZXgpICUgdmVydGljZXNMZW5ndGg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgdGhpcy52ZXJ0aWNlcyA9IHBlcm11dGUodGhpcy52ZXJ0aWNlcywgcGxhY2VzKTtcblxuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgbm9uVHJpdmlhbEludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnNsaWNlKDEpLFxuICAgICAgICAgIGZpcnN0Tm9uVHJpdmlhbEludGVyc2VjdGlvbiA9IGZpcnN0KG5vblRyaXZpYWxJbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBzZWNvbmROb25Ucml2aWFsSW50ZXJzZWN0aW9uID0gc2Vjb25kKG5vblRyaXZpYWxJbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBmaXJzdEludGVybWVkaWF0ZVZlcnRleCA9IGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleChzZWNvbmRWZXJ0ZXgsIHRoaXJkVmVydGV4LCBmaXJzdE5vblRyaXZpYWxJbnRlcnNlY3Rpb24pLFxuICAgICAgICAgIHNlY29uZEludGVybWVkaWF0ZVZlcnRleCA9IGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleCh0aGlyZFZlcnRleCwgZmlyc3RWZXJ0ZXgsIHNlY29uZE5vblRyaXZpYWxJbnRlcnNlY3Rpb24pLFxuICAgICAgICAgIGZpcnN0VmVydGljZXMgPSBbXG4gICAgICAgICAgICBmaXJzdFZlcnRleCxcbiAgICAgICAgICAgIHNlY29uZFZlcnRleCxcbiAgICAgICAgICAgIGZpcnN0SW50ZXJtZWRpYXRlVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZWNvbmRWZXJ0aWNlcyA9IFtcbiAgICAgICAgICAgIGZpcnN0VmVydGV4LFxuICAgICAgICAgICAgZmlyc3RJbnRlcm1lZGlhdGVWZXJ0ZXgsXG4gICAgICAgICAgICBzZWNvbmRJbnRlcm1lZGlhdGVWZXJ0ZXhcbiAgICAgICAgICBdLFxuICAgICAgICAgIHRoaXJkVmVydGljZXMgPSBbXG4gICAgICAgICAgICBmaXJzdEludGVybWVkaWF0ZVZlcnRleCxcbiAgICAgICAgICAgIHRoaXJkVmVydGV4LFxuICAgICAgICAgICAgc2Vjb25kSW50ZXJtZWRpYXRlVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBmaXJzdEZhY2V0PSBGYWNldC5mcm9tVmVydGljZXMoZmlyc3RWZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kRmFjZXQgPSBGYWNldC5mcm9tVmVydGljZXMoc2Vjb25kVmVydGljZXMpLFxuICAgICAgICAgIHRoaXJkRmFjZXQgPSBGYWNldC5mcm9tVmVydGljZXModGhpcmRWZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3RGYWNldFRvb1NtYWxsID0gZmlyc3RGYWNldC5pc1Rvb1NtYWxsKCksXG4gICAgICAgICAgc2Vjb25kRmFjZXRUb29TbWFsbCA9IHNlY29uZEZhY2V0LmlzVG9vU21hbGwoKSxcbiAgICAgICAgICB0aGlyZEZhY2V0VG9vU21hbGwgPSB0aGlyZEZhY2V0LmlzVG9vU21hbGwoKTtcblxuICAgIGlmICghZmlyc3RGYWNldFRvb1NtYWxsKSB7XG4gICAgICBzbWFsbGVyRmFjZXRzLnB1c2goZmlyc3RGYWNldCk7XG4gICAgfVxuXG4gICAgaWYgKCFzZWNvbmRGYWNldFRvb1NtYWxsKSB7XG4gICAgICBzbWFsbGVyRmFjZXRzLnB1c2goc2Vjb25kRmFjZXQpO1xuICAgIH1cblxuICAgIGlmICghdGhpcmRGYWNldFRvb1NtYWxsKSB7XG4gICAgICBzbWFsbGVyRmFjZXRzLnB1c2godGhpcmRGYWNldCk7XG4gICAgfVxuICB9XG5cbiAgc3BsaXRXaXRoT25lTm9uVHJpdmlhbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3QgdmVydGljZXNMZW5ndGggPSAzLFxuICAgICAgICAgIG5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAodmVydGljZXNMZW5ndGggLSBub25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXgpICUgdmVydGljZXNMZW5ndGg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgdGhpcy52ZXJ0aWNlcyA9IHBlcm11dGUodGhpcy52ZXJ0aWNlcywgcGxhY2VzKTtcblxuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3RJbnRlcnNlY3Rpb24gPSBmaXJzdChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBub25Ucml2aWFsSW50ZXJzZWN0aW9uID0gZmlyc3RJbnRlcnNlY3Rpb24sIC8vL1xuICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleCA9IGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleChmaXJzdFZlcnRleCwgc2Vjb25kVmVydGV4LCBub25Ucml2aWFsSW50ZXJzZWN0aW9uKSxcbiAgICAgICAgICBmaXJzdFZlcnRpY2VzID0gW1xuICAgICAgICAgICAgZmlyc3RWZXJ0ZXgsXG4gICAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXgsXG4gICAgICAgICAgICB0aGlyZFZlcnRleFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2Vjb25kVmVydGljZXMgPSBbXG4gICAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXgsXG4gICAgICAgICAgICBzZWNvbmRWZXJ0ZXgsXG4gICAgICAgICAgICB0aGlyZFZlcnRleFxuICAgICAgICAgIF0sXG4gICAgICAgICAgZmlyc3RGYWNldCA9IEZhY2V0LmZyb21WZXJ0aWNlcyhmaXJzdFZlcnRpY2VzKSxcbiAgICAgICAgICBzZWNvbmRGYWNldCA9IEZhY2V0LmZyb21WZXJ0aWNlcyhzZWNvbmRWZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3RGYWNldFRvb1NtYWxsID0gZmlyc3RGYWNldC5pc1Rvb1NtYWxsKCksXG4gICAgICAgICAgc2Vjb25kRmFjZXRUb29TbWFsbCA9IHNlY29uZEZhY2V0LmlzVG9vU21hbGwoKTtcblxuICAgIGlmICghZmlyc3RGYWNldFRvb1NtYWxsKSB7XG4gICAgICBzbWFsbGVyRmFjZXRzLnB1c2goZmlyc3RGYWNldCk7XG4gICAgfVxuXG4gICAgaWYgKCFzZWNvbmRGYWNldFRvb1NtYWxsKSB7XG4gICAgICBzbWFsbGVyRmFjZXRzLnB1c2goc2Vjb25kRmFjZXQpO1xuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZUludGVyc2VjdGlvbnNXaXRoVmVydGljYWxMaW5lSW5YWVBsYW5lKHZlcnRpY2FsTGluZUluWFlQbGFuZSkge1xuICAgIGNvbnN0IGxpbmVzID0gdGhpcy5nZXRMaW5lcygpLFxuICAgICAgICAgIGludGVyc2VjdGlvbnMgPSBsaW5lcy5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gbGluZS5jYWxjdWxhdGVJbnRlcnNlY3Rpb25XaXRoVmVydGljYWxMaW5lSW5YWVBsYW5lKHZlcnRpY2FsTGluZUluWFlQbGFuZSk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBpbnRlcnNlY3Rpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcyksXG4gICAgICAgICAgZmFjZXQgPSBuZXcgRmFjZXQodmVydGljZXMsIG5vcm1hbCk7XG5cbiAgICByZXR1cm4gZmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGYWNldDtcblxuZnVuY3Rpb24gaXNJbnRlcnNlY3Rpb25Ucml2aWFsKGludGVyc2VjdGlvbikge1xuICBjb25zdCBpbnRlcnNlY3Rpb25Ob25Ucml2aWFsID0gaXNJbnRlcnNlY3Rpb25Ob25Ucml2aWFsKGludGVyc2VjdGlvbiksXG4gICAgICBpbnRlcnNlY3Rpb25Ucml2aWFsID0gIWludGVyc2VjdGlvbk5vblRyaXZpYWw7XG5cbiAgcmV0dXJuIGludGVyc2VjdGlvblRyaXZpYWw7XG59XG5cbmZ1bmN0aW9uIGlzSW50ZXJzZWN0aW9uTm9uVHJpdmlhbChpbnRlcnNlY3Rpb24pIHtcbiAgY29uc3QgaW50ZXJzZWN0aW9uTm9uVHJpdmlhbCA9ICgoaW50ZXJzZWN0aW9uID4gMCkgJiYgKGludGVyc2VjdGlvbiA8IDEpKTtcblxuICByZXR1cm4gaW50ZXJzZWN0aW9uTm9uVHJpdmlhbDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgsIG5vbk51bGxJbnRlcnNlY3Rpb24pIHtcbiAgY29uc3QgZGlyZWN0aW9uID0gc3VidHJhY3QzKGVuZFZlcnRleCwgc3RhcnRWZXJ0ZXgpLFxuICAgICAgICBvZmZzZXQgPSBzY2FsZTMoZGlyZWN0aW9uLCBub25OdWxsSW50ZXJzZWN0aW9uKSxcbiAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4ID0gYWRkMyhzdGFydFZlcnRleCwgb2Zmc2V0KTtcblxuICByZXR1cm4gaW50ZXJtZWRpYXRlVmVydGV4O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24obm9uTnVsbEludGVyc2VjdGlvbnMsIGludGVyc2VjdGlvbikge1xuICAgIGNvbnN0IGludGVyc2VjdGlvbk5vbk51bGwgPSAoaW50ZXJzZWN0aW9uICE9PSBudWxsKTtcblxuICAgIGlmIChpbnRlcnNlY3Rpb25Ob25OdWxsKSB7XG4gICAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uOyAvLy9cblxuICAgICAgbm9uTnVsbEludGVyc2VjdGlvbnMucHVzaChub25OdWxsSW50ZXJzZWN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uTnVsbEludGVyc2VjdGlvbnM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbm9uTnVsbEludGVyc2VjdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vblRyaXZpYWxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3Qgbm9uVHJpdmlhbEludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnJlZHVjZShmdW5jdGlvbihub25Ucml2aWFsSW50ZXJzZWN0aW9ucywgaW50ZXJzZWN0aW9uKSB7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9uTm9uVHJpdmlhbCA9IGlzSW50ZXJzZWN0aW9uTm9uVHJpdmlhbChpbnRlcnNlY3Rpb24pO1xuXG4gICAgaWYgKGludGVyc2VjdGlvbk5vblRyaXZpYWwpIHtcbiAgICAgIGNvbnN0IG5vblRyaXZpYWxJbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb247ICAvLy9cblxuICAgICAgbm9uVHJpdmlhbEludGVyc2VjdGlvbnMucHVzaChub25Ucml2aWFsSW50ZXJzZWN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVHJpdmlhbEludGVyc2VjdGlvbnM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbm9uVHJpdmlhbEludGVyc2VjdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMuaW5kZXhPZihudWxsKTtcblxuICByZXR1cm4gbnVsbEludGVyc2VjdGlvbkluZGV4O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVUcml2aWFsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucykge1xuICBjb25zdCB0cml2aWFsSW50ZXJzZWN0aW9uSW5kZXggPSBpbnRlcnNlY3Rpb25zLnJlZHVjZShmdW5jdGlvbih0cml2aWFsSW50ZXJzZWN0aW9uSW5kZXgsIGludGVyc2VjdGlvbiwgaW5kZXgpIHtcbiAgICBpZiAodHJpdmlhbEludGVyc2VjdGlvbkluZGV4ID09PSBudWxsKSB7XG4gICAgICBjb25zdCBpbnRlcnNlY3Rpb25Ob25Ucml2aWFsID0gaXNJbnRlcnNlY3Rpb25Ucml2aWFsKGludGVyc2VjdGlvbik7XG5cbiAgICAgIGlmIChpbnRlcnNlY3Rpb25Ob25Ucml2aWFsKSB7XG4gICAgICAgIHRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cml2aWFsSW50ZXJzZWN0aW9uSW5kZXg7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiB0cml2aWFsSW50ZXJzZWN0aW9uSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMucmVkdWNlKGZ1bmN0aW9uKG5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkge1xuICAgIGlmIChub25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGludGVyc2VjdGlvbk5vblRyaXZpYWwgPSBpc0ludGVyc2VjdGlvbk5vblRyaXZpYWwoaW50ZXJzZWN0aW9uKTtcblxuICAgICAgaWYgKGludGVyc2VjdGlvbk5vblRyaXZpYWwpIHtcbiAgICAgICAgbm9uVHJpdmlhbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleDtcbn1cblxuZnVuY3Rpb24gaXNNaWRQb2ludFRvT25lU2lkZU9mTGluZXNJblhZUGxhbmUobWlkUG9pbnQsIGxpbmVzSW5YWVBsYW5lKSB7XG4gIGNvbnN0IG1pZFBvaW50VG9UaGVMZWZ0T2ZMaW5lc0luWFlQbGFuZSA9IGlzTWlkUG9pbnRUb1RoZUxlZnRPZkxpbmVzSW5YWVBsYW5lKG1pZFBvaW50LCBsaW5lc0luWFlQbGFuZSksXG4gICAgICAgIG1pZFBvaW50VG9UaGVSaWdodE9mTGluZXNJblhZUGxhbmUgPSBpc01pZFBvaW50VG9UaGVSaWdodE9mTGluZXNJblhZUGxhbmUobWlkUG9pbnQsIGxpbmVzSW5YWVBsYW5lKSxcbiAgICAgICAgbWlkUG9pbnRUb09uZVNpZGVPZkxpbmVzSW5YWVBsYW5lID0gbWlkUG9pbnRUb1RoZUxlZnRPZkxpbmVzSW5YWVBsYW5lIHx8IG1pZFBvaW50VG9UaGVSaWdodE9mTGluZXNJblhZUGxhbmU7IC8vL1xuXG4gIHJldHVybiBtaWRQb2ludFRvT25lU2lkZU9mTGluZXNJblhZUGxhbmU7XG59XG5cbmZ1bmN0aW9uIGlzTWlkUG9pbnRUb1RoZUxlZnRPZkxpbmVzSW5YWVBsYW5lKG1pZFBvaW50LCBsaW5lc0luWFlQbGFuZSkge1xuICBjb25zdCBtaWRQb2ludFRvVGhlTGVmdE9mTGluZXNJblhZUGxhbmUgPSBsaW5lc0luWFlQbGFuZS5yZWR1Y2UoZnVuY3Rpb24obWlkUG9pbnRUb1RoZUxlZnRPZkxpbmVzSW5YWVBsYW5lLCBsaW5lSW5YWVBsYW5lKSB7XG4gICAgaWYgKG1pZFBvaW50VG9UaGVMZWZ0T2ZMaW5lc0luWFlQbGFuZSkge1xuICAgICAgY29uc3QgbWlkUG9pbnRUb1RoZUxlZnRPZkxpbmVJblhZUGxhbmUgPSBsaW5lSW5YWVBsYW5lLmlzTWlkUG9pbnRUb1RoZUxlZnQobWlkUG9pbnQpO1xuXG4gICAgICBtaWRQb2ludFRvVGhlTGVmdE9mTGluZXNJblhZUGxhbmUgPSBtaWRQb2ludFRvVGhlTGVmdE9mTGluZUluWFlQbGFuZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWlkUG9pbnRUb1RoZUxlZnRPZkxpbmVzSW5YWVBsYW5lO1xuICB9LCB0cnVlKTtcblxuICByZXR1cm4gbWlkUG9pbnRUb1RoZUxlZnRPZkxpbmVzSW5YWVBsYW5lO1xufVxuXG5mdW5jdGlvbiBpc01pZFBvaW50VG9UaGVSaWdodE9mTGluZXNJblhZUGxhbmUobWlkUG9pbnQsIGxpbmVzSW5YWVBsYW5lKSB7XG4gIGNvbnN0IG1pZFBvaW50VG9UaGVSaWdodE9mTGluZXNJblhZUGxhbmUgPSBsaW5lc0luWFlQbGFuZS5yZWR1Y2UoZnVuY3Rpb24obWlkUG9pbnRUb1RoZVJpZ2h0T2ZMaW5lc0luWFlQbGFuZSwgbGluZUluWFlQbGFuZSkge1xuICAgIGlmIChtaWRQb2ludFRvVGhlUmlnaHRPZkxpbmVzSW5YWVBsYW5lKSB7XG4gICAgICBjb25zdCBtaWRQb2ludFRvVGhlUmlnaHRPZkxpbmVJblhZUGxhbmUgPSBsaW5lSW5YWVBsYW5lLmlzTWlkUG9pbnRUb1RoZVJpZ2h0KG1pZFBvaW50KTtcblxuICAgICAgbWlkUG9pbnRUb1RoZVJpZ2h0T2ZMaW5lc0luWFlQbGFuZSA9IG1pZFBvaW50VG9UaGVSaWdodE9mTGluZUluWFlQbGFuZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWlkUG9pbnRUb1RoZVJpZ2h0T2ZMaW5lc0luWFlQbGFuZTtcbiAgfSwgdHJ1ZSk7XG5cbiAgcmV0dXJuIG1pZFBvaW50VG9UaGVSaWdodE9mTGluZXNJblhZUGxhbmU7XG59XG5cblxuXG5cbiJdfQ==