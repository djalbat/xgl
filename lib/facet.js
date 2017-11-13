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
      var totalOfSidesOfLineInXYPlane = linesInXYPlane.reduce(function (totalOfSidesOfLineInXYPlane, lineInXYPlane) {
        var sideOfLineInXYPlane = this.calculateSideOfLineInXYPlane(lineInXYPlane);

        totalOfSidesOfLineInXYPlane += sideOfLineInXYPlane;

        return totalOfSidesOfLineInXYPlane;
      }.bind(this), 0),
          totalOfSidesOfLineInXYPlaneAbsoluteValue = Math.abs(totalOfSidesOfLineInXYPlane),
          insideLinesInXYPlane = totalOfSidesOfLineInXYPlaneAbsoluteValue === 3;

      return insideLinesInXYPlane;
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
  }, {
    key: 'calculateSideOfLineInXYPlane',
    value: function calculateSideOfLineInXYPlane(lineInXYPlane) {
      var sideOfLineInXYPlane = this.vertices.reduce(function (sideOfLineInXYPlane, vertex) {
        if (sideOfLineInXYPlane === 0) {
          var vertexSide = lineInXYPlane.calculateVertexSide(vertex);

          sideOfLineInXYPlane = vertexSide; ///
        }

        return sideOfLineInXYPlane;
      }, 0);

      return sideOfLineInXYPlane;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mYWNldC5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwidmVjdG9yVXRpbGl0aWVzIiwidmVydGV4VXRpbGl0aWVzIiwidmVydGljZXNVdGlsaXRpZXMiLCJhcHByb3hpbWF0ZVV0aWxpdGllcyIsInJvdGF0ZUFib3V0WkF4aXMiLCJpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyIsImZpcnN0Iiwic2Vjb25kIiwidGhpcmQiLCJwZXJtdXRlIiwiY2FsY3VsYXRlTm9ybWFsIiwicm90YXRlVmVydGljZXMiLCJhZGQzIiwic3VidHJhY3QzIiwic2NhbGUzIiwibGVuZ3RoMyIsIkZhY2V0IiwidmVydGljZXMiLCJub3JtYWwiLCJ2ZXJ0aWNlc0xlbmd0aCIsImxpbmVzIiwibWFwIiwidmVydGV4IiwiaW5kZXgiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJzdGFydFZlcnRleCIsImVuZFZlcnRleCIsImxpbmUiLCJmcm9tVmVydGljZXMiLCJiaW5kIiwibm9ybWFsTGVuZ3RoIiwibm9ybWFsTGVuZ3RoQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIiwidG9vU21hbGwiLCJsaW5lc0luWFlQbGFuZSIsImluc2lkZUxpbmVzSW5YWVBsYW5lIiwiaXNJbnNpZGVMaW5lc0luWFlQbGFuZSIsIm91dHNpZGVMaW5lc0luWFlQbGFuZSIsInRvdGFsT2ZTaWRlc09mTGluZUluWFlQbGFuZSIsInJlZHVjZSIsImxpbmVJblhZUGxhbmUiLCJzaWRlT2ZMaW5lSW5YWVBsYW5lIiwiY2FsY3VsYXRlU2lkZU9mTGluZUluWFlQbGFuZSIsInRvdGFsT2ZTaWRlc09mTGluZUluWFlQbGFuZUFic29sdXRlVmFsdWUiLCJNYXRoIiwiYWJzIiwicm90YXRpb25RdWF0ZXJuaW9uIiwicm90YXRpb25BYm91dFpBeGlzTWF0cml4IiwiaW50ZXJzZWN0aW9ucyIsInNtYWxsZXJGYWNldHMiLCJpbnRlcnNlY3Rpb25zSW5jbHVkZXNOdWxsIiwiaW5jbHVkZXMiLCJzcGxpdFdpdGhOdWxsSW50ZXJzZWN0aW9uIiwic3BsaXRXaXRob3V0TnVsbEludGVyc2VjdGlvbiIsIm5vbk51bGxJbnRlcnNlY3Rpb25zIiwiY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMiLCJub25Ucml2aWFsTm9uTnVsbEludGVyc2VjdGlvbnMiLCJjYWxjdWxhdGVOb25Ucml2aWFsSW50ZXJzZWN0aW9ucyIsIm5vblRyaXZpYWxOb25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCIsImxlbmd0aCIsInNwbGl0V2l0aFR3b05vblRyaXZpYWxOb25OdWxsSW50ZXJzZWN0aW9ucyIsInNtYWxsZXJGYWNldCIsInB1c2giLCJub25Ucml2aWFsSW50ZXJzZWN0aW9ucyIsIm5vblRyaXZpYWxJbnRlcnNlY3Rpb25zTGVuZ3RoIiwic3BsaXRXaXRoVHdvTm9uVHJpdmlhbEludGVyc2VjdGlvbnMiLCJzcGxpdFdpdGhPbmVOb25Ucml2aWFsSW50ZXJzZWN0aW9uIiwibnVsbEludGVyc2VjdGlvbkluZGV4IiwiY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4IiwicGxhY2VzIiwiZmlyc3RWZXJ0ZXgiLCJzZWNvbmRWZXJ0ZXgiLCJ0aGlyZFZlcnRleCIsInNsaWNlIiwiZmlyc3ROb25OdWxsSW50ZXJzZWN0aW9uIiwic2Vjb25kTm9uTnVsbEludGVyc2VjdGlvbiIsImZpcnN0SW50ZXJtZWRpYXRlVmVydGV4IiwiY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4Iiwic2Vjb25kSW50ZXJtZWRpYXRlVmVydGV4IiwiZmlyc3RWZXJ0aWNlcyIsInNlY29uZFZlcnRpY2VzIiwidGhpcmRWZXJ0aWNlcyIsImZpcnN0RmFjZXQiLCJzZWNvbmRGYWNldCIsInRoaXJkRmFjZXQiLCJmaXJzdEZhY2V0VG9vU21hbGwiLCJpc1Rvb1NtYWxsIiwic2Vjb25kRmFjZXRUb29TbWFsbCIsInRoaXJkRmFjZXRUb29TbWFsbCIsInRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCIsImNhbGN1bGF0ZVRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCIsImZpcnN0Tm9uVHJpdmlhbEludGVyc2VjdGlvbiIsInNlY29uZE5vblRyaXZpYWxJbnRlcnNlY3Rpb24iLCJub25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXgiLCJjYWxjdWxhdGVOb25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXgiLCJmaXJzdEludGVyc2VjdGlvbiIsIm5vblRyaXZpYWxJbnRlcnNlY3Rpb24iLCJpbnRlcm1lZGlhdGVWZXJ0ZXgiLCJ2ZXJ0aWNhbExpbmVJblhZUGxhbmUiLCJnZXRMaW5lcyIsImludGVyc2VjdGlvbiIsImNhbGN1bGF0ZUludGVyc2VjdGlvbldpdGhWZXJ0aWNhbExpbmVJblhZUGxhbmUiLCJ2ZXJ0ZXhTaWRlIiwiY2FsY3VsYXRlVmVydGV4U2lkZSIsImZhY2V0IiwibW9kdWxlIiwiZXhwb3J0cyIsImlzSW50ZXJzZWN0aW9uVHJpdmlhbCIsImludGVyc2VjdGlvbk5vblRyaXZpYWwiLCJpc0ludGVyc2VjdGlvbk5vblRyaXZpYWwiLCJpbnRlcnNlY3Rpb25Ucml2aWFsIiwibm9uTnVsbEludGVyc2VjdGlvbiIsImRpcmVjdGlvbiIsIm9mZnNldCIsImludGVyc2VjdGlvbk5vbk51bGwiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsbUJBQVIsQ0FEdkI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEsb0JBQVIsQ0FGeEI7QUFBQSxJQUdNRyxrQkFBa0JILFFBQVEsb0JBQVIsQ0FIeEI7QUFBQSxJQUlNSSxvQkFBb0JKLFFBQVEsc0JBQVIsQ0FKMUI7QUFBQSxJQUtNSyx1QkFBdUJMLFFBQVEseUJBQVIsQ0FMN0I7O0FBT00sSUFBRU0saUJBQUYsR0FBdUJILGVBQXZCLENBQUVHLGdCQUFGO0FBQUEsSUFDRUMsMEJBREYsR0FDaUNGLG9CQURqQyxDQUNFRSwwQkFERjtBQUFBLElBRUVDLEtBRkYsR0FF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QUFDRCxHQVYrQixFQVU3QixFQVY2QixDQUFoQzs7QUFZQSxTQUFPQSx1QkFBUDtBQUNEOztBQUVELFNBQVNLLGlDQUFULENBQTJDcEIsYUFBM0MsRUFBMEQ7QUFDeEQsTUFBTW1CLHdCQUF3Qm5CLGNBQWNtRSxPQUFkLENBQXNCLElBQXRCLENBQTlCOztBQUVBLFNBQU9oRCxxQkFBUDtBQUNEOztBQUVELFNBQVN1QixpQ0FBVCxDQUEyQzFDLGFBQTNDLEVBQTBEO0FBQ3hELE1BQU15QywyQkFBMkJ6QyxjQUFjVCxNQUFkLENBQXFCLFVBQVNrRCx3QkFBVCxFQUFtQ1csWUFBbkMsRUFBaUQ3RSxLQUFqRCxFQUF3RDtBQUM1RyxRQUFJa0UsNkJBQTZCLElBQWpDLEVBQXVDO0FBQ3JDLFVBQU1tQix5QkFBeUJELHNCQUFzQlAsWUFBdEIsQ0FBL0I7O0FBRUEsVUFBSVEsc0JBQUosRUFBNEI7QUFDMUJuQixtQ0FBMkJsRSxLQUEzQjtBQUNEO0FBQ0Y7O0FBRUQsV0FBT2tFLHdCQUFQO0FBQ0QsR0FWZ0MsRUFVOUIsSUFWOEIsQ0FBakM7O0FBWUEsU0FBT0Esd0JBQVA7QUFDRDs7QUFFRCxTQUFTSyxvQ0FBVCxDQUE4QzlDLGFBQTlDLEVBQTZEO0FBQzNELE1BQU02Qyw4QkFBOEI3QyxjQUFjVCxNQUFkLENBQXFCLFVBQVNzRCwyQkFBVCxFQUFzQ08sWUFBdEMsRUFBb0Q3RSxLQUFwRCxFQUEyRDtBQUNsSCxRQUFJc0UsZ0NBQWdDLElBQXBDLEVBQTBDO0FBQ3hDLFVBQU1lLHlCQUF5QkMseUJBQXlCVCxZQUF6QixDQUEvQjs7QUFFQSxVQUFJUSxzQkFBSixFQUE0QjtBQUMxQmYsc0NBQThCdEUsS0FBOUI7QUFDRDtBQUNGOztBQUVELFdBQU9zRSwyQkFBUDtBQUNELEdBVm1DLEVBVWpDLElBVmlDLENBQXBDOztBQVlBLFNBQU9BLDJCQUFQO0FBQ0QiLCJmaWxlIjoiZmFjZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlY3RvcicpLFxuICAgICAgdmVydGV4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdmVydGV4JyksXG4gICAgICB2ZXJ0aWNlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlcnRpY2VzJyksXG4gICAgICBhcHByb3hpbWF0ZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FwcHJveGltYXRlJyk7XG5cbmNvbnN0IHsgcm90YXRlQWJvdXRaQXhpcyB9ID0gdmVydGV4VXRpbGl0aWVzLFxuICAgICAgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9ID0gYXBwcm94aW1hdGVVdGlsaXRpZXMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBwZXJtdXRlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlTm9ybWFsLCByb3RhdGVWZXJ0aWNlcyB9ID0gdmVydGljZXNVdGlsaXRpZXMsXG4gICAgICB7IGFkZDMsIHN1YnRyYWN0Mywgc2NhbGUzLCBsZW5ndGgzIH0gPSB2ZWN0b3JVdGlsaXRpZXM7XG5cbmNsYXNzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCkge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgfVxuXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0Tm9ybWFsKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbDtcbiAgfVxuXG4gIGdldExpbmVzKCkge1xuICAgIGNvbnN0IHZlcnRpY2VzTGVuZ3RoID0gMywgLy8vXG4gICAgICAgICAgbGluZXMgPSB0aGlzLnZlcnRpY2VzLm1hcChmdW5jdGlvbih2ZXJ0ZXgsIGluZGV4KSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gaW5kZXgsXG4gICAgICAgICAgICAgICAgICBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMSkgJSB2ZXJ0aWNlc0xlbmd0aCxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGVuZFZlcnRleCA9IHRoaXMudmVydGljZXNbZW5kSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgbGluZSA9IExpbmUuZnJvbVZlcnRpY2VzKHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBsaW5lO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gbGluZXM7XG4gIH1cbiAgXG4gIGlzVG9vU21hbGwoKSB7XG4gICAgY29uc3Qgbm9ybWFsTGVuZ3RoID0gbGVuZ3RoMyh0aGlzLm5vcm1hbCksXG4gICAgICAgICAgbm9ybWFsTGVuZ3RoQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8obm9ybWFsTGVuZ3RoKSxcbiAgICAgICAgICB0b29TbWFsbCA9IG5vcm1hbExlbmd0aEFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuICAgIFxuICAgIHJldHVybiB0b29TbWFsbDtcbiAgfVxuICBcbiAgaXNPdXRzaWRlTGluZXNJblhZUGxhbmUobGluZXNJblhZUGxhbmUpIHtcbiAgICBjb25zdCBpbnNpZGVMaW5lc0luWFlQbGFuZSA9IHRoaXMuaXNJbnNpZGVMaW5lc0luWFlQbGFuZShsaW5lc0luWFlQbGFuZSksXG4gICAgICAgICAgb3V0c2lkZUxpbmVzSW5YWVBsYW5lID0gIWluc2lkZUxpbmVzSW5YWVBsYW5lO1xuICAgIFxuICAgIHJldHVybiBvdXRzaWRlTGluZXNJblhZUGxhbmU7XG4gIH1cbiAgXG4gIGlzSW5zaWRlTGluZXNJblhZUGxhbmUobGluZXNJblhZUGxhbmUpIHtcbiAgICBjb25zdCB0b3RhbE9mU2lkZXNPZkxpbmVJblhZUGxhbmUgPSBsaW5lc0luWFlQbGFuZS5yZWR1Y2UoZnVuY3Rpb24odG90YWxPZlNpZGVzT2ZMaW5lSW5YWVBsYW5lLCBsaW5lSW5YWVBsYW5lKSB7XG4gICAgICAgICAgICBjb25zdCBzaWRlT2ZMaW5lSW5YWVBsYW5lID0gdGhpcy5jYWxjdWxhdGVTaWRlT2ZMaW5lSW5YWVBsYW5lKGxpbmVJblhZUGxhbmUpO1xuXG4gICAgICAgICAgICB0b3RhbE9mU2lkZXNPZkxpbmVJblhZUGxhbmUgKz0gc2lkZU9mTGluZUluWFlQbGFuZTtcblxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsT2ZTaWRlc09mTGluZUluWFlQbGFuZTtcbiAgICAgICAgICB9LmJpbmQodGhpcyksIDApLFxuICAgICAgICAgIHRvdGFsT2ZTaWRlc09mTGluZUluWFlQbGFuZUFic29sdXRlVmFsdWUgPSBNYXRoLmFicyh0b3RhbE9mU2lkZXNPZkxpbmVJblhZUGxhbmUpLFxuICAgICAgICAgIGluc2lkZUxpbmVzSW5YWVBsYW5lID0gKHRvdGFsT2ZTaWRlc09mTGluZUluWFlQbGFuZUFic29sdXRlVmFsdWUgPT09IDMpO1xuXG4gICAgcmV0dXJuIGluc2lkZUxpbmVzSW5YWVBsYW5lO1xuICB9XG4gIFxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKHRoaXMudmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcyk7XG4gIH1cblxuICByb3RhdGVBYm91dFpBeGlzKHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCkge1xuICAgIHRoaXMudmVydGljZXMgPSB0aGlzLnZlcnRpY2VzLm1hcChmdW5jdGlvbih2ZXJ0ZXgpIHtcbiAgICAgIHZlcnRleCA9IHJvdGF0ZUFib3V0WkF4aXModmVydGV4LCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpO1xuXG4gICAgICByZXR1cm4gdmVydGV4O1xuICAgIH0pO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcyk7XG4gIH1cbiAgXG4gIHNwbGl0KGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBpbnRlcnNlY3Rpb25zSW5jbHVkZXNOdWxsID0gaW50ZXJzZWN0aW9ucy5pbmNsdWRlcyhudWxsKTtcblxuICAgIGludGVyc2VjdGlvbnNJbmNsdWRlc051bGwgP1xuICAgICAgdGhpcy5zcGxpdFdpdGhOdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhvdXROdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICB9XG5cbiAgc3BsaXRXaXRoTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBub25Ucml2aWFsTm9uTnVsbEludGVyc2VjdGlvbnMgPSBjYWxjdWxhdGVOb25Ucml2aWFsSW50ZXJzZWN0aW9ucyhub25OdWxsSW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgbm9uVHJpdmlhbE5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoID0gbm9uVHJpdmlhbE5vbk51bGxJbnRlcnNlY3Rpb25zLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobm9uVHJpdmlhbE5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoKSB7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aFR3b05vblRyaXZpYWxOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQgOlxuICAgICAgICBjb25zdCBzbWFsbGVyRmFjZXQgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgc21hbGxlckZhY2V0cy5wdXNoKHNtYWxsZXJGYWNldCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHNwbGl0V2l0aG91dE51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IG5vblRyaXZpYWxJbnRlcnNlY3Rpb25zID0gY2FsY3VsYXRlTm9uVHJpdmlhbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgbm9uVHJpdmlhbEludGVyc2VjdGlvbnNMZW5ndGggPSBub25Ucml2aWFsSW50ZXJzZWN0aW9ucy5sZW5ndGg7XG5cbiAgICBzd2l0Y2gobm9uVHJpdmlhbEludGVyc2VjdGlvbnNMZW5ndGgpIHtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoVHdvTm9uVHJpdmlhbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDEgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE9uZU5vblRyaXZpYWxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0IDpcbiAgICAgICAgY29uc3Qgc21hbGxlckZhY2V0ID0gdGhpczsgIC8vL1xuXG4gICAgICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzcGxpdFdpdGhUd29Ob25Ucml2aWFsTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IHZlcnRpY2VzTGVuZ3RoID0gMyxcbiAgICAgICAgICBudWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKHZlcnRpY2VzTGVuZ3RoIC0gbnVsbEludGVyc2VjdGlvbkluZGV4KSAlIHZlcnRpY2VzTGVuZ3RoO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IHBlcm11dGUoaW50ZXJzZWN0aW9ucywgcGxhY2VzKTtcblxuICAgIHRoaXMudmVydGljZXMgPSBwZXJtdXRlKHRoaXMudmVydGljZXMsIHBsYWNlcyk7XG5cbiAgICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIG5vbk51bGxJbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgxKSxcbiAgICAgICAgICBmaXJzdE5vbk51bGxJbnRlcnNlY3Rpb24gPSBmaXJzdChub25OdWxsSW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgc2Vjb25kTm9uTnVsbEludGVyc2VjdGlvbiA9IHNlY29uZChub25OdWxsSW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgZmlyc3RJbnRlcm1lZGlhdGVWZXJ0ZXggPSBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXgoc2Vjb25kVmVydGV4LCB0aGlyZFZlcnRleCwgZmlyc3ROb25OdWxsSW50ZXJzZWN0aW9uKSxcbiAgICAgICAgICBzZWNvbmRJbnRlcm1lZGlhdGVWZXJ0ZXggPSBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXgodGhpcmRWZXJ0ZXgsIGZpcnN0VmVydGV4LCBzZWNvbmROb25OdWxsSW50ZXJzZWN0aW9uKSxcbiAgICAgICAgICBmaXJzdFZlcnRpY2VzID0gW1xuICAgICAgICAgICAgZmlyc3RWZXJ0ZXgsXG4gICAgICAgICAgICBzZWNvbmRWZXJ0ZXgsXG4gICAgICAgICAgICBzZWNvbmRJbnRlcm1lZGlhdGVWZXJ0ZXhcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlY29uZFZlcnRpY2VzID0gW1xuICAgICAgICAgICAgc2Vjb25kVmVydGV4LFxuICAgICAgICAgICAgZmlyc3RJbnRlcm1lZGlhdGVWZXJ0ZXgsXG4gICAgICAgICAgICBzZWNvbmRJbnRlcm1lZGlhdGVWZXJ0ZXhcbiAgICAgICAgICBdLFxuICAgICAgICAgIHRoaXJkVmVydGljZXMgPSBbXG4gICAgICAgICAgICBmaXJzdEludGVybWVkaWF0ZVZlcnRleCxcbiAgICAgICAgICAgIHRoaXJkVmVydGV4LFxuICAgICAgICAgICAgc2Vjb25kSW50ZXJtZWRpYXRlVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBmaXJzdEZhY2V0ID0gRmFjZXQuZnJvbVZlcnRpY2VzKGZpcnN0VmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZEZhY2V0ID0gRmFjZXQuZnJvbVZlcnRpY2VzKHNlY29uZFZlcnRpY2VzKSxcbiAgICAgICAgICB0aGlyZEZhY2V0ID0gRmFjZXQuZnJvbVZlcnRpY2VzKHRoaXJkVmVydGljZXMpLFxuICAgICAgICAgIGZpcnN0RmFjZXRUb29TbWFsbCA9IGZpcnN0RmFjZXQuaXNUb29TbWFsbCgpLFxuICAgICAgICAgIHNlY29uZEZhY2V0VG9vU21hbGwgPSBzZWNvbmRGYWNldC5pc1Rvb1NtYWxsKCksXG4gICAgICAgICAgdGhpcmRGYWNldFRvb1NtYWxsID0gdGhpcmRGYWNldC5pc1Rvb1NtYWxsKCk7XG5cbiAgICBpZiAoIWZpcnN0RmFjZXRUb29TbWFsbCkge1xuICAgICAgc21hbGxlckZhY2V0cy5wdXNoKGZpcnN0RmFjZXQpO1xuICAgIH1cblxuICAgIGlmICghc2Vjb25kRmFjZXRUb29TbWFsbCkge1xuICAgICAgc21hbGxlckZhY2V0cy5wdXNoKHNlY29uZEZhY2V0KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXJkRmFjZXRUb29TbWFsbCkge1xuICAgICAgc21hbGxlckZhY2V0cy5wdXNoKHRoaXJkRmFjZXQpO1xuICAgIH1cbiAgfVxuXG4gIHNwbGl0V2l0aFR3b05vblRyaXZpYWxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCB2ZXJ0aWNlc0xlbmd0aCA9IDMsXG4gICAgICAgICAgdHJpdmlhbEludGVyc2VjdGlvbkluZGV4ID0gY2FsY3VsYXRlVHJpdmlhbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHBsYWNlcyA9ICh2ZXJ0aWNlc0xlbmd0aCAtIHRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCkgJSB2ZXJ0aWNlc0xlbmd0aDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICB0aGlzLnZlcnRpY2VzID0gcGVybXV0ZSh0aGlzLnZlcnRpY2VzLCBwbGFjZXMpO1xuXG4gICAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBub25Ucml2aWFsSW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMSksXG4gICAgICAgICAgZmlyc3ROb25Ucml2aWFsSW50ZXJzZWN0aW9uID0gZmlyc3Qobm9uVHJpdmlhbEludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHNlY29uZE5vblRyaXZpYWxJbnRlcnNlY3Rpb24gPSBzZWNvbmQobm9uVHJpdmlhbEludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIGZpcnN0SW50ZXJtZWRpYXRlVmVydGV4ID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4KHNlY29uZFZlcnRleCwgdGhpcmRWZXJ0ZXgsIGZpcnN0Tm9uVHJpdmlhbEludGVyc2VjdGlvbiksXG4gICAgICAgICAgc2Vjb25kSW50ZXJtZWRpYXRlVmVydGV4ID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4KHRoaXJkVmVydGV4LCBmaXJzdFZlcnRleCwgc2Vjb25kTm9uVHJpdmlhbEludGVyc2VjdGlvbiksXG4gICAgICAgICAgZmlyc3RWZXJ0aWNlcyA9IFtcbiAgICAgICAgICAgIGZpcnN0VmVydGV4LFxuICAgICAgICAgICAgc2Vjb25kVmVydGV4LFxuICAgICAgICAgICAgZmlyc3RJbnRlcm1lZGlhdGVWZXJ0ZXhcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlY29uZFZlcnRpY2VzID0gW1xuICAgICAgICAgICAgZmlyc3RWZXJ0ZXgsXG4gICAgICAgICAgICBmaXJzdEludGVybWVkaWF0ZVZlcnRleCxcbiAgICAgICAgICAgIHNlY29uZEludGVybWVkaWF0ZVZlcnRleFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdGhpcmRWZXJ0aWNlcyA9IFtcbiAgICAgICAgICAgIGZpcnN0SW50ZXJtZWRpYXRlVmVydGV4LFxuICAgICAgICAgICAgdGhpcmRWZXJ0ZXgsXG4gICAgICAgICAgICBzZWNvbmRJbnRlcm1lZGlhdGVWZXJ0ZXhcbiAgICAgICAgICBdLFxuICAgICAgICAgIGZpcnN0RmFjZXQ9IEZhY2V0LmZyb21WZXJ0aWNlcyhmaXJzdFZlcnRpY2VzKSxcbiAgICAgICAgICBzZWNvbmRGYWNldCA9IEZhY2V0LmZyb21WZXJ0aWNlcyhzZWNvbmRWZXJ0aWNlcyksXG4gICAgICAgICAgdGhpcmRGYWNldCA9IEZhY2V0LmZyb21WZXJ0aWNlcyh0aGlyZFZlcnRpY2VzKSxcbiAgICAgICAgICBmaXJzdEZhY2V0VG9vU21hbGwgPSBmaXJzdEZhY2V0LmlzVG9vU21hbGwoKSxcbiAgICAgICAgICBzZWNvbmRGYWNldFRvb1NtYWxsID0gc2Vjb25kRmFjZXQuaXNUb29TbWFsbCgpLFxuICAgICAgICAgIHRoaXJkRmFjZXRUb29TbWFsbCA9IHRoaXJkRmFjZXQuaXNUb29TbWFsbCgpO1xuXG4gICAgaWYgKCFmaXJzdEZhY2V0VG9vU21hbGwpIHtcbiAgICAgIHNtYWxsZXJGYWNldHMucHVzaChmaXJzdEZhY2V0KTtcbiAgICB9XG5cbiAgICBpZiAoIXNlY29uZEZhY2V0VG9vU21hbGwpIHtcbiAgICAgIHNtYWxsZXJGYWNldHMucHVzaChzZWNvbmRGYWNldCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlyZEZhY2V0VG9vU21hbGwpIHtcbiAgICAgIHNtYWxsZXJGYWNldHMucHVzaCh0aGlyZEZhY2V0KTtcbiAgICB9XG4gIH1cblxuICBzcGxpdFdpdGhPbmVOb25Ucml2aWFsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCB2ZXJ0aWNlc0xlbmd0aCA9IDMsXG4gICAgICAgICAgbm9uVHJpdmlhbEludGVyc2VjdGlvbkluZGV4ID0gY2FsY3VsYXRlTm9uVHJpdmlhbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHBsYWNlcyA9ICh2ZXJ0aWNlc0xlbmd0aCAtIG5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCkgJSB2ZXJ0aWNlc0xlbmd0aDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICB0aGlzLnZlcnRpY2VzID0gcGVybXV0ZSh0aGlzLnZlcnRpY2VzLCBwbGFjZXMpO1xuXG4gICAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBmaXJzdEludGVyc2VjdGlvbiA9IGZpcnN0KGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIG5vblRyaXZpYWxJbnRlcnNlY3Rpb24gPSBmaXJzdEludGVyc2VjdGlvbiwgLy8vXG4gICAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4ID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4KGZpcnN0VmVydGV4LCBzZWNvbmRWZXJ0ZXgsIG5vblRyaXZpYWxJbnRlcnNlY3Rpb24pLFxuICAgICAgICAgIGZpcnN0VmVydGljZXMgPSBbXG4gICAgICAgICAgICBmaXJzdFZlcnRleCxcbiAgICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleCxcbiAgICAgICAgICAgIHRoaXJkVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZWNvbmRWZXJ0aWNlcyA9IFtcbiAgICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleCxcbiAgICAgICAgICAgIHNlY29uZFZlcnRleCxcbiAgICAgICAgICAgIHRoaXJkVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBmaXJzdEZhY2V0ID0gRmFjZXQuZnJvbVZlcnRpY2VzKGZpcnN0VmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZEZhY2V0ID0gRmFjZXQuZnJvbVZlcnRpY2VzKHNlY29uZFZlcnRpY2VzKSxcbiAgICAgICAgICBmaXJzdEZhY2V0VG9vU21hbGwgPSBmaXJzdEZhY2V0LmlzVG9vU21hbGwoKSxcbiAgICAgICAgICBzZWNvbmRGYWNldFRvb1NtYWxsID0gc2Vjb25kRmFjZXQuaXNUb29TbWFsbCgpO1xuXG4gICAgaWYgKCFmaXJzdEZhY2V0VG9vU21hbGwpIHtcbiAgICAgIHNtYWxsZXJGYWNldHMucHVzaChmaXJzdEZhY2V0KTtcbiAgICB9XG5cbiAgICBpZiAoIXNlY29uZEZhY2V0VG9vU21hbGwpIHtcbiAgICAgIHNtYWxsZXJGYWNldHMucHVzaChzZWNvbmRGYWNldCk7XG4gICAgfVxuICB9XG5cbiAgY2FsY3VsYXRlSW50ZXJzZWN0aW9uc1dpdGhWZXJ0aWNhbExpbmVJblhZUGxhbmUodmVydGljYWxMaW5lSW5YWVBsYW5lKSB7XG4gICAgY29uc3QgbGluZXMgPSB0aGlzLmdldExpbmVzKCksXG4gICAgICAgICAgaW50ZXJzZWN0aW9ucyA9IGxpbmVzLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBsaW5lLmNhbGN1bGF0ZUludGVyc2VjdGlvbldpdGhWZXJ0aWNhbExpbmVJblhZUGxhbmUodmVydGljYWxMaW5lSW5YWVBsYW5lKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGludGVyc2VjdGlvbnM7XG4gIH1cblxuICBjYWxjdWxhdGVTaWRlT2ZMaW5lSW5YWVBsYW5lKGxpbmVJblhZUGxhbmUpIHtcbiAgICBjb25zdCBzaWRlT2ZMaW5lSW5YWVBsYW5lID0gdGhpcy52ZXJ0aWNlcy5yZWR1Y2UoZnVuY3Rpb24oc2lkZU9mTGluZUluWFlQbGFuZSwgdmVydGV4KSB7XG4gICAgICBpZiAoc2lkZU9mTGluZUluWFlQbGFuZSA9PT0gMCkge1xuICAgICAgICBjb25zdCB2ZXJ0ZXhTaWRlID0gbGluZUluWFlQbGFuZS5jYWxjdWxhdGVWZXJ0ZXhTaWRlKHZlcnRleCk7XG5cbiAgICAgICAgc2lkZU9mTGluZUluWFlQbGFuZSA9IHZlcnRleFNpZGU7IC8vL1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2lkZU9mTGluZUluWFlQbGFuZTtcbiAgICB9LCAwKTtcblxuICAgIHJldHVybiBzaWRlT2ZMaW5lSW5YWVBsYW5lO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcyksXG4gICAgICAgICAgZmFjZXQgPSBuZXcgRmFjZXQodmVydGljZXMsIG5vcm1hbCk7XG5cbiAgICByZXR1cm4gZmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGYWNldDtcblxuZnVuY3Rpb24gaXNJbnRlcnNlY3Rpb25Ucml2aWFsKGludGVyc2VjdGlvbikge1xuICBjb25zdCBpbnRlcnNlY3Rpb25Ob25Ucml2aWFsID0gaXNJbnRlcnNlY3Rpb25Ob25Ucml2aWFsKGludGVyc2VjdGlvbiksXG4gICAgICBpbnRlcnNlY3Rpb25Ucml2aWFsID0gIWludGVyc2VjdGlvbk5vblRyaXZpYWw7XG5cbiAgcmV0dXJuIGludGVyc2VjdGlvblRyaXZpYWw7XG59XG5cbmZ1bmN0aW9uIGlzSW50ZXJzZWN0aW9uTm9uVHJpdmlhbChpbnRlcnNlY3Rpb24pIHtcbiAgY29uc3QgaW50ZXJzZWN0aW9uTm9uVHJpdmlhbCA9ICgoaW50ZXJzZWN0aW9uID4gMCkgJiYgKGludGVyc2VjdGlvbiA8IDEpKTtcblxuICByZXR1cm4gaW50ZXJzZWN0aW9uTm9uVHJpdmlhbDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgsIG5vbk51bGxJbnRlcnNlY3Rpb24pIHtcbiAgY29uc3QgZGlyZWN0aW9uID0gc3VidHJhY3QzKGVuZFZlcnRleCwgc3RhcnRWZXJ0ZXgpLFxuICAgICAgICBvZmZzZXQgPSBzY2FsZTMoZGlyZWN0aW9uLCBub25OdWxsSW50ZXJzZWN0aW9uKSxcbiAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4ID0gYWRkMyhzdGFydFZlcnRleCwgb2Zmc2V0KTtcblxuICByZXR1cm4gaW50ZXJtZWRpYXRlVmVydGV4O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24obm9uTnVsbEludGVyc2VjdGlvbnMsIGludGVyc2VjdGlvbikge1xuICAgIGNvbnN0IGludGVyc2VjdGlvbk5vbk51bGwgPSAoaW50ZXJzZWN0aW9uICE9PSBudWxsKTtcblxuICAgIGlmIChpbnRlcnNlY3Rpb25Ob25OdWxsKSB7XG4gICAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uOyAvLy9cblxuICAgICAgbm9uTnVsbEludGVyc2VjdGlvbnMucHVzaChub25OdWxsSW50ZXJzZWN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uTnVsbEludGVyc2VjdGlvbnM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbm9uTnVsbEludGVyc2VjdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vblRyaXZpYWxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3Qgbm9uVHJpdmlhbEludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnJlZHVjZShmdW5jdGlvbihub25Ucml2aWFsSW50ZXJzZWN0aW9ucywgaW50ZXJzZWN0aW9uKSB7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9uTm9uVHJpdmlhbCA9IGlzSW50ZXJzZWN0aW9uTm9uVHJpdmlhbChpbnRlcnNlY3Rpb24pO1xuXG4gICAgaWYgKGludGVyc2VjdGlvbk5vblRyaXZpYWwpIHtcbiAgICAgIGNvbnN0IG5vblRyaXZpYWxJbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb247ICAvLy9cblxuICAgICAgbm9uVHJpdmlhbEludGVyc2VjdGlvbnMucHVzaChub25Ucml2aWFsSW50ZXJzZWN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVHJpdmlhbEludGVyc2VjdGlvbnM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbm9uVHJpdmlhbEludGVyc2VjdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMuaW5kZXhPZihudWxsKTtcblxuICByZXR1cm4gbnVsbEludGVyc2VjdGlvbkluZGV4O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVUcml2aWFsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucykge1xuICBjb25zdCB0cml2aWFsSW50ZXJzZWN0aW9uSW5kZXggPSBpbnRlcnNlY3Rpb25zLnJlZHVjZShmdW5jdGlvbih0cml2aWFsSW50ZXJzZWN0aW9uSW5kZXgsIGludGVyc2VjdGlvbiwgaW5kZXgpIHtcbiAgICBpZiAodHJpdmlhbEludGVyc2VjdGlvbkluZGV4ID09PSBudWxsKSB7XG4gICAgICBjb25zdCBpbnRlcnNlY3Rpb25Ob25Ucml2aWFsID0gaXNJbnRlcnNlY3Rpb25Ucml2aWFsKGludGVyc2VjdGlvbik7XG5cbiAgICAgIGlmIChpbnRlcnNlY3Rpb25Ob25Ucml2aWFsKSB7XG4gICAgICAgIHRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cml2aWFsSW50ZXJzZWN0aW9uSW5kZXg7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiB0cml2aWFsSW50ZXJzZWN0aW9uSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMucmVkdWNlKGZ1bmN0aW9uKG5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkge1xuICAgIGlmIChub25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGludGVyc2VjdGlvbk5vblRyaXZpYWwgPSBpc0ludGVyc2VjdGlvbk5vblRyaXZpYWwoaW50ZXJzZWN0aW9uKTtcblxuICAgICAgaWYgKGludGVyc2VjdGlvbk5vblRyaXZpYWwpIHtcbiAgICAgICAgbm9uVHJpdmlhbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleDtcbn1cbiJdfQ==