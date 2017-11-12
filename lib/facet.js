'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line'),
    arrayUtilities = require('./utilities/array'),
    vectorUtilities = require('./utilities/vector'),
    vertexUtilities = require('./utilities/vertex'),
    verticesUtilities = require('./utilities/vertices'),
    approximateUtilities = require('./utilities/approximate');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    permute = arrayUtilities.permute,
    _rotateAboutZAxis = vertexUtilities.rotateAboutZAxis,
    isApproximatelyEqualToZero = approximateUtilities.isApproximatelyEqualToZero,
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
    key: 'splitWithNullIntersection',
    value: function splitWithNullIntersection(intersections) {
      var facets = void 0;

      var nonNullIntersections = calculateNonNullIntersections(intersections),
          nonTrivialNonNullIntersections = calculateNonTrivialIntersections(nonNullIntersections),
          nonTrivialNonNullIntersectionsLength = nonTrivialNonNullIntersections.length;

      switch (nonTrivialNonNullIntersectionsLength) {
        case 2:
          facets = this.splitWithTwoNonTrivialNonNullIntersections(intersections);
          break;

        default:
          facets = this.splitWithNoNonTrivialNonNullIntersections();
          break;
      }

      return facets;
    }
  }, {
    key: 'splitWithoutNullIntersection',
    value: function splitWithoutNullIntersection(intersections) {
      var facets = void 0;

      var nonTrivialIntersections = calculateNonTrivialIntersections(intersections),
          nonTrivialIntersectionsLength = nonTrivialIntersections.length;

      switch (nonTrivialIntersectionsLength) {
        case 2:
          facets = this.splitWithTwoNonTrivialIntersections(intersections);
          break;

        case 1:
          facets = this.splitWithOneNonTrivialIntersection(intersections);
          break;

        default:
          facets = this.splitWithNoNonTrivialIntersections();
          break;
      }

      return facets;
    }
  }, {
    key: 'splitWithTwoNonTrivialNonNullIntersections',
    value: function splitWithTwoNonTrivialNonNullIntersections(intersections) {
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
          facets = [firstFacet, secondFacet, thirdFacet];

      return facets;
    }
  }, {
    key: 'splitWithNoNonTrivialNonNullIntersections',
    value: function splitWithNoNonTrivialNonNullIntersections() {
      var facet = this,
          ///
      facets = [facet];

      return facets;
    }
  }, {
    key: 'splitWithTwoNonTrivialIntersections',
    value: function splitWithTwoNonTrivialIntersections(intersections) {
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
          firstFacetInXYPlane = Facet.fromVertices(firstVertices),
          secondFacetInXYPlane = Facet.fromVertices(secondVertices),
          thirdFacetInXYPlane = Facet.fromVertices(thirdVertices),
          facets = [firstFacetInXYPlane, secondFacetInXYPlane, thirdFacetInXYPlane];

      return facets;
    }
  }, {
    key: 'splitWithOneNonTrivialIntersection',
    value: function splitWithOneNonTrivialIntersection(intersections) {
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
          firstFacetInXYPlane = Facet.fromVertices(firstVertices),
          secondFacetInXYPlane = Facet.fromVertices(secondVertices),
          facets = [firstFacetInXYPlane, secondFacetInXYPlane];

      return facets;
    }
  }, {
    key: 'splitWithNoNonTrivialIntersections',
    value: function splitWithNoNonTrivialIntersections() {
      var facet = this,
          ///
      facets = [facet];

      return facets;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mYWNldC5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwidmVjdG9yVXRpbGl0aWVzIiwidmVydGV4VXRpbGl0aWVzIiwidmVydGljZXNVdGlsaXRpZXMiLCJhcHByb3hpbWF0ZVV0aWxpdGllcyIsImZpcnN0Iiwic2Vjb25kIiwidGhpcmQiLCJwZXJtdXRlIiwicm90YXRlQWJvdXRaQXhpcyIsImlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIiwiY2FsY3VsYXRlTm9ybWFsIiwicm90YXRlVmVydGljZXMiLCJhZGQzIiwic3VidHJhY3QzIiwic2NhbGUzIiwibGVuZ3RoMyIsIkZhY2V0IiwidmVydGljZXMiLCJub3JtYWwiLCJ2ZXJ0aWNlc0xlbmd0aCIsImxpbmVzIiwibWFwIiwidmVydGV4IiwiaW5kZXgiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJzdGFydFZlcnRleCIsImVuZFZlcnRleCIsImxpbmUiLCJmcm9tVmVydGljZXMiLCJiaW5kIiwibm9ybWFsTGVuZ3RoIiwibm9ybWFsTGVuZ3RoQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIiwidG9vU21hbGwiLCJsaW5lc0luWFlQbGFuZSIsImluc2lkZUxpbmVzSW5YWVBsYW5lIiwiaXNJbnNpZGVMaW5lc0luWFlQbGFuZSIsIm91dHNpZGVMaW5lc0luWFlQbGFuZSIsInRvdGFsT2ZTaWRlc09mTGluZUluWFlQbGFuZSIsInJlZHVjZSIsImxpbmVJblhZUGxhbmUiLCJzaWRlT2ZMaW5lSW5YWVBsYW5lIiwiY2FsY3VsYXRlU2lkZU9mTGluZUluWFlQbGFuZSIsInRvdGFsT2ZTaWRlc09mTGluZUluWFlQbGFuZUFic29sdXRlVmFsdWUiLCJNYXRoIiwiYWJzIiwicm90YXRpb25RdWF0ZXJuaW9uIiwicm90YXRpb25BYm91dFpBeGlzTWF0cml4IiwiaW50ZXJzZWN0aW9ucyIsImZhY2V0cyIsIm5vbk51bGxJbnRlcnNlY3Rpb25zIiwiY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMiLCJub25Ucml2aWFsTm9uTnVsbEludGVyc2VjdGlvbnMiLCJjYWxjdWxhdGVOb25Ucml2aWFsSW50ZXJzZWN0aW9ucyIsIm5vblRyaXZpYWxOb25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCIsImxlbmd0aCIsInNwbGl0V2l0aFR3b05vblRyaXZpYWxOb25OdWxsSW50ZXJzZWN0aW9ucyIsInNwbGl0V2l0aE5vTm9uVHJpdmlhbE5vbk51bGxJbnRlcnNlY3Rpb25zIiwibm9uVHJpdmlhbEludGVyc2VjdGlvbnMiLCJub25Ucml2aWFsSW50ZXJzZWN0aW9uc0xlbmd0aCIsInNwbGl0V2l0aFR3b05vblRyaXZpYWxJbnRlcnNlY3Rpb25zIiwic3BsaXRXaXRoT25lTm9uVHJpdmlhbEludGVyc2VjdGlvbiIsInNwbGl0V2l0aE5vTm9uVHJpdmlhbEludGVyc2VjdGlvbnMiLCJudWxsSW50ZXJzZWN0aW9uSW5kZXgiLCJjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgiLCJwbGFjZXMiLCJmaXJzdFZlcnRleCIsInNlY29uZFZlcnRleCIsInRoaXJkVmVydGV4Iiwic2xpY2UiLCJmaXJzdE5vbk51bGxJbnRlcnNlY3Rpb24iLCJzZWNvbmROb25OdWxsSW50ZXJzZWN0aW9uIiwiZmlyc3RJbnRlcm1lZGlhdGVWZXJ0ZXgiLCJjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXgiLCJzZWNvbmRJbnRlcm1lZGlhdGVWZXJ0ZXgiLCJmaXJzdFZlcnRpY2VzIiwic2Vjb25kVmVydGljZXMiLCJ0aGlyZFZlcnRpY2VzIiwiZmlyc3RGYWNldCIsInNlY29uZEZhY2V0IiwidGhpcmRGYWNldCIsImZhY2V0IiwidHJpdmlhbEludGVyc2VjdGlvbkluZGV4IiwiY2FsY3VsYXRlVHJpdmlhbEludGVyc2VjdGlvbkluZGV4IiwiZmlyc3ROb25Ucml2aWFsSW50ZXJzZWN0aW9uIiwic2Vjb25kTm9uVHJpdmlhbEludGVyc2VjdGlvbiIsImZpcnN0RmFjZXRJblhZUGxhbmUiLCJzZWNvbmRGYWNldEluWFlQbGFuZSIsInRoaXJkRmFjZXRJblhZUGxhbmUiLCJub25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXgiLCJjYWxjdWxhdGVOb25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXgiLCJmaXJzdEludGVyc2VjdGlvbiIsIm5vblRyaXZpYWxJbnRlcnNlY3Rpb24iLCJpbnRlcm1lZGlhdGVWZXJ0ZXgiLCJ2ZXJ0ZXhTaWRlIiwiY2FsY3VsYXRlVmVydGV4U2lkZSIsInZlcnRpY2FsTGluZUluWFlQbGFuZSIsImdldExpbmVzIiwiaW50ZXJzZWN0aW9uIiwiY2FsY3VsYXRlSW50ZXJzZWN0aW9uV2l0aFZlcnRpY2FsTGluZUluWFlQbGFuZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJpc0ludGVyc2VjdGlvblRyaXZpYWwiLCJpbnRlcnNlY3Rpb25Ob25Ucml2aWFsIiwiaXNJbnRlcnNlY3Rpb25Ob25Ucml2aWFsIiwiaW50ZXJzZWN0aW9uVHJpdmlhbCIsIm5vbk51bGxJbnRlcnNlY3Rpb24iLCJkaXJlY3Rpb24iLCJvZmZzZXQiLCJpbnRlcnNlY3Rpb25Ob25OdWxsIiwicHVzaCIsImluZGV4T2YiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxtQkFBUixDQUR2QjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSxvQkFBUixDQUZ4QjtBQUFBLElBR01HLGtCQUFrQkgsUUFBUSxvQkFBUixDQUh4QjtBQUFBLElBSU1JLG9CQUFvQkosUUFBUSxzQkFBUixDQUoxQjtBQUFBLElBS01LLHVCQUF1QkwsUUFBUSx5QkFBUixDQUw3Qjs7SUFPUU0sSyxHQUFrQ0wsYyxDQUFsQ0ssSztJQUFPQyxNLEdBQTJCTixjLENBQTNCTSxNO0lBQVFDLEssR0FBbUJQLGMsQ0FBbkJPLEs7SUFBT0MsTyxHQUFZUixjLENBQVpRLE87SUFDdEJDLGlCLEdBQXFCUCxlLENBQXJCTyxnQjtJQUNBQywwQixHQUErQk4sb0IsQ0FB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O0FBQ0QsR0FWK0IsRUFVN0IsRUFWNkIsQ0FBaEM7O0FBWUEsU0FBT0EsdUJBQVA7QUFDRDs7QUFFRCxTQUFTTSxpQ0FBVCxDQUEyQ2hCLGFBQTNDLEVBQTBEO0FBQ3hELE1BQU1lLHdCQUF3QmYsY0FBYytELE9BQWQsQ0FBc0IsSUFBdEIsQ0FBOUI7O0FBRUEsU0FBT2hELHFCQUFQO0FBQ0Q7O0FBRUQsU0FBU29CLGlDQUFULENBQTJDbkMsYUFBM0MsRUFBMEQ7QUFDeEQsTUFBTWtDLDJCQUEyQmxDLGNBQWNULE1BQWQsQ0FBcUIsVUFBUzJDLHdCQUFULEVBQW1DZ0IsWUFBbkMsRUFBaUQzRSxLQUFqRCxFQUF3RDtBQUM1RyxRQUFJMkQsNkJBQTZCLElBQWpDLEVBQXVDO0FBQ3JDLFVBQU1xQix5QkFBeUJELHNCQUFzQkosWUFBdEIsQ0FBL0I7O0FBRUEsVUFBSUssc0JBQUosRUFBNEI7QUFDMUJyQixtQ0FBMkIzRCxLQUEzQjtBQUNEO0FBQ0Y7O0FBRUQsV0FBTzJELHdCQUFQO0FBQ0QsR0FWZ0MsRUFVOUIsSUFWOEIsQ0FBakM7O0FBWUEsU0FBT0Esd0JBQVA7QUFDRDs7QUFFRCxTQUFTUSxvQ0FBVCxDQUE4QzFDLGFBQTlDLEVBQTZEO0FBQzNELE1BQU15Qyw4QkFBOEJ6QyxjQUFjVCxNQUFkLENBQXFCLFVBQVNrRCwyQkFBVCxFQUFzQ1MsWUFBdEMsRUFBb0QzRSxLQUFwRCxFQUEyRDtBQUNsSCxRQUFJa0UsZ0NBQWdDLElBQXBDLEVBQTBDO0FBQ3hDLFVBQU1jLHlCQUF5QkMseUJBQXlCTixZQUF6QixDQUEvQjs7QUFFQSxVQUFJSyxzQkFBSixFQUE0QjtBQUMxQmQsc0NBQThCbEUsS0FBOUI7QUFDRDtBQUNGOztBQUVELFdBQU9rRSwyQkFBUDtBQUNELEdBVm1DLEVBVWpDLElBVmlDLENBQXBDOztBQVlBLFNBQU9BLDJCQUFQO0FBQ0QiLCJmaWxlIjoiZmFjZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlY3RvcicpLFxuICAgICAgdmVydGV4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdmVydGV4JyksXG4gICAgICB2ZXJ0aWNlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlcnRpY2VzJyksXG4gICAgICBhcHByb3hpbWF0ZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FwcHJveGltYXRlJyk7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQsIHBlcm11dGUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyByb3RhdGVBYm91dFpBeGlzIH0gPSB2ZXJ0ZXhVdGlsaXRpZXMsXG4gICAgICB7IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIH0gPSBhcHByb3hpbWF0ZVV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlTm9ybWFsLCByb3RhdGVWZXJ0aWNlcyB9ID0gdmVydGljZXNVdGlsaXRpZXMsXG4gICAgICB7IGFkZDMsIHN1YnRyYWN0Mywgc2NhbGUzLCBsZW5ndGgzIH0gPSB2ZWN0b3JVdGlsaXRpZXM7XG5cbmNsYXNzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCkge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgfVxuXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0Tm9ybWFsKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbDtcbiAgfVxuXG4gIGdldExpbmVzKCkge1xuICAgIGNvbnN0IHZlcnRpY2VzTGVuZ3RoID0gMywgLy8vXG4gICAgICAgICAgbGluZXMgPSB0aGlzLnZlcnRpY2VzLm1hcChmdW5jdGlvbih2ZXJ0ZXgsIGluZGV4KSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gaW5kZXgsXG4gICAgICAgICAgICAgICAgICBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMSkgJSB2ZXJ0aWNlc0xlbmd0aCxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGVuZFZlcnRleCA9IHRoaXMudmVydGljZXNbZW5kSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgbGluZSA9IExpbmUuZnJvbVZlcnRpY2VzKHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBsaW5lO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gbGluZXM7XG4gIH1cbiAgXG4gIGlzVG9vU21hbGwoKSB7XG4gICAgY29uc3Qgbm9ybWFsTGVuZ3RoID0gbGVuZ3RoMyh0aGlzLm5vcm1hbCksXG4gICAgICAgICAgbm9ybWFsTGVuZ3RoQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8obm9ybWFsTGVuZ3RoKSxcbiAgICAgICAgICB0b29TbWFsbCA9IG5vcm1hbExlbmd0aEFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuICAgIFxuICAgIHJldHVybiB0b29TbWFsbDtcbiAgfVxuICBcbiAgaXNPdXRzaWRlTGluZXNJblhZUGxhbmUobGluZXNJblhZUGxhbmUpIHtcbiAgICBjb25zdCBpbnNpZGVMaW5lc0luWFlQbGFuZSA9IHRoaXMuaXNJbnNpZGVMaW5lc0luWFlQbGFuZShsaW5lc0luWFlQbGFuZSksXG4gICAgICAgICAgb3V0c2lkZUxpbmVzSW5YWVBsYW5lID0gIWluc2lkZUxpbmVzSW5YWVBsYW5lO1xuICAgIFxuICAgIHJldHVybiBvdXRzaWRlTGluZXNJblhZUGxhbmU7XG4gIH1cbiAgXG4gIGlzSW5zaWRlTGluZXNJblhZUGxhbmUobGluZXNJblhZUGxhbmUpIHtcbiAgICBjb25zdCB0b3RhbE9mU2lkZXNPZkxpbmVJblhZUGxhbmUgPSBsaW5lc0luWFlQbGFuZS5yZWR1Y2UoZnVuY3Rpb24odG90YWxPZlNpZGVzT2ZMaW5lSW5YWVBsYW5lLCBsaW5lSW5YWVBsYW5lKSB7XG4gICAgICAgICAgICBjb25zdCBzaWRlT2ZMaW5lSW5YWVBsYW5lID0gdGhpcy5jYWxjdWxhdGVTaWRlT2ZMaW5lSW5YWVBsYW5lKGxpbmVJblhZUGxhbmUpO1xuXG4gICAgICAgICAgICB0b3RhbE9mU2lkZXNPZkxpbmVJblhZUGxhbmUgKz0gc2lkZU9mTGluZUluWFlQbGFuZTtcblxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsT2ZTaWRlc09mTGluZUluWFlQbGFuZTtcbiAgICAgICAgICB9LmJpbmQodGhpcyksIDApLFxuICAgICAgICAgIHRvdGFsT2ZTaWRlc09mTGluZUluWFlQbGFuZUFic29sdXRlVmFsdWUgPSBNYXRoLmFicyh0b3RhbE9mU2lkZXNPZkxpbmVJblhZUGxhbmUpLFxuICAgICAgICAgIGluc2lkZUxpbmVzSW5YWVBsYW5lID0gKHRvdGFsT2ZTaWRlc09mTGluZUluWFlQbGFuZUFic29sdXRlVmFsdWUgPT09IDMpO1xuXG4gICAgcmV0dXJuIGluc2lkZUxpbmVzSW5YWVBsYW5lO1xuICB9XG4gIFxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKHRoaXMudmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcyk7XG4gIH1cblxuICByb3RhdGVBYm91dFpBeGlzKHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCkge1xuICAgIHRoaXMudmVydGljZXMgPSB0aGlzLnZlcnRpY2VzLm1hcChmdW5jdGlvbih2ZXJ0ZXgpIHtcbiAgICAgIHZlcnRleCA9IHJvdGF0ZUFib3V0WkF4aXModmVydGV4LCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpO1xuXG4gICAgICByZXR1cm4gdmVydGV4O1xuICAgIH0pO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcyk7XG4gIH1cblxuICBzcGxpdFdpdGhOdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMpIHtcbiAgICBsZXQgZmFjZXRzO1xuXG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBub25Ucml2aWFsTm9uTnVsbEludGVyc2VjdGlvbnMgPSBjYWxjdWxhdGVOb25Ucml2aWFsSW50ZXJzZWN0aW9ucyhub25OdWxsSW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgbm9uVHJpdmlhbE5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoID0gbm9uVHJpdmlhbE5vbk51bGxJbnRlcnNlY3Rpb25zLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobm9uVHJpdmlhbE5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoKSB7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICBmYWNldHMgPSB0aGlzLnNwbGl0V2l0aFR3b05vblRyaXZpYWxOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQgOlxuICAgICAgICBmYWNldHMgPSB0aGlzLnNwbGl0V2l0aE5vTm9uVHJpdmlhbE5vbk51bGxJbnRlcnNlY3Rpb25zKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBmYWNldHM7XG4gIH1cblxuICBzcGxpdFdpdGhvdXROdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMpIHtcbiAgICBsZXQgZmFjZXRzO1xuXG4gICAgY29uc3Qgbm9uVHJpdmlhbEludGVyc2VjdGlvbnMgPSBjYWxjdWxhdGVOb25Ucml2aWFsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBub25Ucml2aWFsSW50ZXJzZWN0aW9uc0xlbmd0aCA9IG5vblRyaXZpYWxJbnRlcnNlY3Rpb25zLmxlbmd0aDtcblxuICAgIHN3aXRjaChub25Ucml2aWFsSW50ZXJzZWN0aW9uc0xlbmd0aCkge1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgZmFjZXRzID0gdGhpcy5zcGxpdFdpdGhUd29Ob25Ucml2aWFsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMSA6XG4gICAgICAgIGZhY2V0cyA9IHRoaXMuc3BsaXRXaXRoT25lTm9uVHJpdmlhbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQgOlxuICAgICAgICBmYWNldHMgPSB0aGlzLnNwbGl0V2l0aE5vTm9uVHJpdmlhbEludGVyc2VjdGlvbnMoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhY2V0cztcbiAgfVxuXG4gIHNwbGl0V2l0aFR3b05vblRyaXZpYWxOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSB7XG4gICAgY29uc3QgdmVydGljZXNMZW5ndGggPSAzLFxuICAgICAgICAgIG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAodmVydGljZXNMZW5ndGggLSBudWxsSW50ZXJzZWN0aW9uSW5kZXgpICUgdmVydGljZXNMZW5ndGg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgdGhpcy52ZXJ0aWNlcyA9IHBlcm11dGUodGhpcy52ZXJ0aWNlcywgcGxhY2VzKTtcblxuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnNsaWNlKDEpLFxuICAgICAgICAgIGZpcnN0Tm9uTnVsbEludGVyc2VjdGlvbiA9IGZpcnN0KG5vbk51bGxJbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBzZWNvbmROb25OdWxsSW50ZXJzZWN0aW9uID0gc2Vjb25kKG5vbk51bGxJbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBmaXJzdEludGVybWVkaWF0ZVZlcnRleCA9IGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleChzZWNvbmRWZXJ0ZXgsIHRoaXJkVmVydGV4LCBmaXJzdE5vbk51bGxJbnRlcnNlY3Rpb24pLFxuICAgICAgICAgIHNlY29uZEludGVybWVkaWF0ZVZlcnRleCA9IGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleCh0aGlyZFZlcnRleCwgZmlyc3RWZXJ0ZXgsIHNlY29uZE5vbk51bGxJbnRlcnNlY3Rpb24pLFxuICAgICAgICAgIGZpcnN0VmVydGljZXMgPSBbXG4gICAgICAgICAgICBmaXJzdFZlcnRleCxcbiAgICAgICAgICAgIHNlY29uZFZlcnRleCxcbiAgICAgICAgICAgIHNlY29uZEludGVybWVkaWF0ZVZlcnRleFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2Vjb25kVmVydGljZXMgPSBbXG4gICAgICAgICAgICBzZWNvbmRWZXJ0ZXgsXG4gICAgICAgICAgICBmaXJzdEludGVybWVkaWF0ZVZlcnRleCxcbiAgICAgICAgICAgIHNlY29uZEludGVybWVkaWF0ZVZlcnRleFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdGhpcmRWZXJ0aWNlcyA9IFtcbiAgICAgICAgICAgIGZpcnN0SW50ZXJtZWRpYXRlVmVydGV4LFxuICAgICAgICAgICAgdGhpcmRWZXJ0ZXgsXG4gICAgICAgICAgICBzZWNvbmRJbnRlcm1lZGlhdGVWZXJ0ZXhcbiAgICAgICAgICBdLFxuICAgICAgICAgIGZpcnN0RmFjZXQgPSBGYWNldC5mcm9tVmVydGljZXMoZmlyc3RWZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kRmFjZXQgPSBGYWNldC5mcm9tVmVydGljZXMoc2Vjb25kVmVydGljZXMpLFxuICAgICAgICAgIHRoaXJkRmFjZXQgPSBGYWNldC5mcm9tVmVydGljZXModGhpcmRWZXJ0aWNlcyksXG4gICAgICAgICAgZmFjZXRzID0gW1xuICAgICAgICAgICAgZmlyc3RGYWNldCxcbiAgICAgICAgICAgIHNlY29uZEZhY2V0LFxuICAgICAgICAgICAgdGhpcmRGYWNldFxuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gZmFjZXRzO1xuICB9XG5cbiAgc3BsaXRXaXRoTm9Ob25Ucml2aWFsTm9uTnVsbEludGVyc2VjdGlvbnMoKSB7XG4gICAgY29uc3QgZmFjZXQgPSB0aGlzLCAgLy8vXG4gICAgICAgIGZhY2V0cyA9IFtcbiAgICAgICAgICBmYWNldFxuICAgICAgICBdO1xuXG4gICAgcmV0dXJuIGZhY2V0cztcbiAgfVxuXG4gIHNwbGl0V2l0aFR3b05vblRyaXZpYWxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0aWNlc0xlbmd0aCA9IDMsXG4gICAgICAgICAgdHJpdmlhbEludGVyc2VjdGlvbkluZGV4ID0gY2FsY3VsYXRlVHJpdmlhbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHBsYWNlcyA9ICh2ZXJ0aWNlc0xlbmd0aCAtIHRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCkgJSB2ZXJ0aWNlc0xlbmd0aDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICB0aGlzLnZlcnRpY2VzID0gcGVybXV0ZSh0aGlzLnZlcnRpY2VzLCBwbGFjZXMpO1xuXG4gICAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBub25Ucml2aWFsSW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMSksXG4gICAgICAgICAgZmlyc3ROb25Ucml2aWFsSW50ZXJzZWN0aW9uID0gZmlyc3Qobm9uVHJpdmlhbEludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHNlY29uZE5vblRyaXZpYWxJbnRlcnNlY3Rpb24gPSBzZWNvbmQobm9uVHJpdmlhbEludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIGZpcnN0SW50ZXJtZWRpYXRlVmVydGV4ID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4KHNlY29uZFZlcnRleCwgdGhpcmRWZXJ0ZXgsIGZpcnN0Tm9uVHJpdmlhbEludGVyc2VjdGlvbiksXG4gICAgICAgICAgc2Vjb25kSW50ZXJtZWRpYXRlVmVydGV4ID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4KHRoaXJkVmVydGV4LCBmaXJzdFZlcnRleCwgc2Vjb25kTm9uVHJpdmlhbEludGVyc2VjdGlvbiksXG4gICAgICAgICAgZmlyc3RWZXJ0aWNlcyA9IFtcbiAgICAgICAgICAgIGZpcnN0VmVydGV4LFxuICAgICAgICAgICAgc2Vjb25kVmVydGV4LFxuICAgICAgICAgICAgZmlyc3RJbnRlcm1lZGlhdGVWZXJ0ZXhcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlY29uZFZlcnRpY2VzID0gW1xuICAgICAgICAgICAgZmlyc3RWZXJ0ZXgsXG4gICAgICAgICAgICBmaXJzdEludGVybWVkaWF0ZVZlcnRleCxcbiAgICAgICAgICAgIHNlY29uZEludGVybWVkaWF0ZVZlcnRleFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdGhpcmRWZXJ0aWNlcyA9IFtcbiAgICAgICAgICAgIGZpcnN0SW50ZXJtZWRpYXRlVmVydGV4LFxuICAgICAgICAgICAgdGhpcmRWZXJ0ZXgsXG4gICAgICAgICAgICBzZWNvbmRJbnRlcm1lZGlhdGVWZXJ0ZXhcbiAgICAgICAgICBdLFxuICAgICAgICAgIGZpcnN0RmFjZXRJblhZUGxhbmUgPSBGYWNldC5mcm9tVmVydGljZXMoZmlyc3RWZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kRmFjZXRJblhZUGxhbmUgPSBGYWNldC5mcm9tVmVydGljZXMoc2Vjb25kVmVydGljZXMpLFxuICAgICAgICAgIHRoaXJkRmFjZXRJblhZUGxhbmUgPSBGYWNldC5mcm9tVmVydGljZXModGhpcmRWZXJ0aWNlcyksXG4gICAgICAgICAgZmFjZXRzID0gW1xuICAgICAgICAgICAgZmlyc3RGYWNldEluWFlQbGFuZSxcbiAgICAgICAgICAgIHNlY29uZEZhY2V0SW5YWVBsYW5lLFxuICAgICAgICAgICAgdGhpcmRGYWNldEluWFlQbGFuZVxuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gZmFjZXRzO1xuICB9XG5cbiAgc3BsaXRXaXRoT25lTm9uVHJpdmlhbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zKSB7XG4gICAgY29uc3QgdmVydGljZXNMZW5ndGggPSAzLFxuICAgICAgICAgIG5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAodmVydGljZXNMZW5ndGggLSBub25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXgpICUgdmVydGljZXNMZW5ndGg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgdGhpcy52ZXJ0aWNlcyA9IHBlcm11dGUodGhpcy52ZXJ0aWNlcywgcGxhY2VzKTtcblxuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3RJbnRlcnNlY3Rpb24gPSBmaXJzdChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBub25Ucml2aWFsSW50ZXJzZWN0aW9uID0gZmlyc3RJbnRlcnNlY3Rpb24sIC8vL1xuICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleCA9IGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleChmaXJzdFZlcnRleCwgc2Vjb25kVmVydGV4LCBub25Ucml2aWFsSW50ZXJzZWN0aW9uKSxcbiAgICAgICAgICBmaXJzdFZlcnRpY2VzID0gW1xuICAgICAgICAgICAgZmlyc3RWZXJ0ZXgsXG4gICAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXgsXG4gICAgICAgICAgICB0aGlyZFZlcnRleFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2Vjb25kVmVydGljZXMgPSBbXG4gICAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXgsXG4gICAgICAgICAgICBzZWNvbmRWZXJ0ZXgsXG4gICAgICAgICAgICB0aGlyZFZlcnRleFxuICAgICAgICAgIF0sXG4gICAgICAgICAgZmlyc3RGYWNldEluWFlQbGFuZSA9IEZhY2V0LmZyb21WZXJ0aWNlcyhmaXJzdFZlcnRpY2VzKSxcbiAgICAgICAgICBzZWNvbmRGYWNldEluWFlQbGFuZSA9IEZhY2V0LmZyb21WZXJ0aWNlcyhzZWNvbmRWZXJ0aWNlcyksXG4gICAgICAgICAgZmFjZXRzID0gW1xuICAgICAgICAgICAgZmlyc3RGYWNldEluWFlQbGFuZSxcbiAgICAgICAgICAgIHNlY29uZEZhY2V0SW5YWVBsYW5lXG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiBmYWNldHM7XG4gIH1cblxuICBzcGxpdFdpdGhOb05vblRyaXZpYWxJbnRlcnNlY3Rpb25zKCkge1xuICAgIGNvbnN0IGZhY2V0ID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZhY2V0cyA9IFtcbiAgICAgICAgICAgIGZhY2V0XG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiBmYWNldHM7XG4gIH1cblxuICBjYWxjdWxhdGVTaWRlT2ZMaW5lSW5YWVBsYW5lKGxpbmVJblhZUGxhbmUpIHtcbiAgICBjb25zdCBzaWRlT2ZMaW5lSW5YWVBsYW5lID0gdGhpcy52ZXJ0aWNlcy5yZWR1Y2UoZnVuY3Rpb24oc2lkZU9mTGluZUluWFlQbGFuZSwgdmVydGV4KSB7XG4gICAgICBpZiAoc2lkZU9mTGluZUluWFlQbGFuZSA9PT0gMCkge1xuICAgICAgICBjb25zdCB2ZXJ0ZXhTaWRlID0gbGluZUluWFlQbGFuZS5jYWxjdWxhdGVWZXJ0ZXhTaWRlKHZlcnRleCk7XG5cbiAgICAgICAgc2lkZU9mTGluZUluWFlQbGFuZSA9IHZlcnRleFNpZGU7IC8vL1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2lkZU9mTGluZUluWFlQbGFuZTtcbiAgICB9LCAwKTtcblxuICAgIHJldHVybiBzaWRlT2ZMaW5lSW5YWVBsYW5lO1xuICB9XG5cbiAgY2FsY3VsYXRlSW50ZXJzZWN0aW9uc1dpdGhWZXJ0aWNhbExpbmVJblhZUGxhbmUodmVydGljYWxMaW5lSW5YWVBsYW5lKSB7XG4gICAgY29uc3QgbGluZXMgPSB0aGlzLmdldExpbmVzKCksXG4gICAgICAgICAgaW50ZXJzZWN0aW9ucyA9IGxpbmVzLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBsaW5lLmNhbGN1bGF0ZUludGVyc2VjdGlvbldpdGhWZXJ0aWNhbExpbmVJblhZUGxhbmUodmVydGljYWxMaW5lSW5YWVBsYW5lKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGludGVyc2VjdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzKSxcbiAgICAgICAgICBmYWNldCA9IG5ldyBGYWNldCh2ZXJ0aWNlcywgbm9ybWFsKTtcblxuICAgIHJldHVybiBmYWNldDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZhY2V0O1xuXG5mdW5jdGlvbiBpc0ludGVyc2VjdGlvblRyaXZpYWwoaW50ZXJzZWN0aW9uKSB7XG4gIGNvbnN0IGludGVyc2VjdGlvbk5vblRyaXZpYWwgPSBpc0ludGVyc2VjdGlvbk5vblRyaXZpYWwoaW50ZXJzZWN0aW9uKSxcbiAgICAgIGludGVyc2VjdGlvblRyaXZpYWwgPSAhaW50ZXJzZWN0aW9uTm9uVHJpdmlhbDtcblxuICByZXR1cm4gaW50ZXJzZWN0aW9uVHJpdmlhbDtcbn1cblxuZnVuY3Rpb24gaXNJbnRlcnNlY3Rpb25Ob25Ucml2aWFsKGludGVyc2VjdGlvbikge1xuICBjb25zdCBpbnRlcnNlY3Rpb25Ob25Ucml2aWFsID0gKChpbnRlcnNlY3Rpb24gPiAwKSAmJiAoaW50ZXJzZWN0aW9uIDwgMSkpO1xuXG4gIHJldHVybiBpbnRlcnNlY3Rpb25Ob25Ucml2aWFsO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCwgbm9uTnVsbEludGVyc2VjdGlvbikge1xuICBjb25zdCBkaXJlY3Rpb24gPSBzdWJ0cmFjdDMoZW5kVmVydGV4LCBzdGFydFZlcnRleCksXG4gICAgICBvZmZzZXQgPSBzY2FsZTMoZGlyZWN0aW9uLCBub25OdWxsSW50ZXJzZWN0aW9uKSxcbiAgICAgIGludGVybWVkaWF0ZVZlcnRleCA9IGFkZDMoc3RhcnRWZXJ0ZXgsIG9mZnNldCk7XG5cbiAgcmV0dXJuIGludGVybWVkaWF0ZVZlcnRleDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucykge1xuICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMucmVkdWNlKGZ1bmN0aW9uKG5vbk51bGxJbnRlcnNlY3Rpb25zLCBpbnRlcnNlY3Rpb24pIHtcbiAgICBjb25zdCBpbnRlcnNlY3Rpb25Ob25OdWxsID0gKGludGVyc2VjdGlvbiAhPT0gbnVsbCk7XG5cbiAgICBpZiAoaW50ZXJzZWN0aW9uTm9uTnVsbCkge1xuICAgICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbjsgLy8vXG5cbiAgICAgIG5vbk51bGxJbnRlcnNlY3Rpb25zLnB1c2gobm9uTnVsbEludGVyc2VjdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vbk51bGxJbnRlcnNlY3Rpb25zO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIG5vbk51bGxJbnRlcnNlY3Rpb25zO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVOb25Ucml2aWFsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG5vblRyaXZpYWxJbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24obm9uVHJpdmlhbEludGVyc2VjdGlvbnMsIGludGVyc2VjdGlvbikge1xuICAgIGNvbnN0IGludGVyc2VjdGlvbk5vblRyaXZpYWwgPSBpc0ludGVyc2VjdGlvbk5vblRyaXZpYWwoaW50ZXJzZWN0aW9uKTtcblxuICAgIGlmIChpbnRlcnNlY3Rpb25Ob25Ucml2aWFsKSB7XG4gICAgICBjb25zdCBub25Ucml2aWFsSW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uOyAgLy8vXG5cbiAgICAgIG5vblRyaXZpYWxJbnRlcnNlY3Rpb25zLnB1c2gobm9uVHJpdmlhbEludGVyc2VjdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRyaXZpYWxJbnRlcnNlY3Rpb25zO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIG5vblRyaXZpYWxJbnRlcnNlY3Rpb25zO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucykge1xuICBjb25zdCBudWxsSW50ZXJzZWN0aW9uSW5kZXggPSBpbnRlcnNlY3Rpb25zLmluZGV4T2YobnVsbCk7XG5cbiAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlVHJpdmlhbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3QgdHJpdmlhbEludGVyc2VjdGlvbkluZGV4ID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24odHJpdmlhbEludGVyc2VjdGlvbkluZGV4LCBpbnRlcnNlY3Rpb24sIGluZGV4KSB7XG4gICAgaWYgKHRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgaW50ZXJzZWN0aW9uTm9uVHJpdmlhbCA9IGlzSW50ZXJzZWN0aW9uVHJpdmlhbChpbnRlcnNlY3Rpb24pO1xuXG4gICAgICBpZiAoaW50ZXJzZWN0aW9uTm9uVHJpdmlhbCkge1xuICAgICAgICB0cml2aWFsSW50ZXJzZWN0aW9uSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJpdmlhbEludGVyc2VjdGlvbkluZGV4O1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gdHJpdmlhbEludGVyc2VjdGlvbkluZGV4O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVOb25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucykge1xuICBjb25zdCBub25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXggPSBpbnRlcnNlY3Rpb25zLnJlZHVjZShmdW5jdGlvbihub25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXgsIGludGVyc2VjdGlvbiwgaW5kZXgpIHtcbiAgICBpZiAobm9uVHJpdmlhbEludGVyc2VjdGlvbkluZGV4ID09PSBudWxsKSB7XG4gICAgICBjb25zdCBpbnRlcnNlY3Rpb25Ob25Ucml2aWFsID0gaXNJbnRlcnNlY3Rpb25Ob25Ucml2aWFsKGludGVyc2VjdGlvbik7XG5cbiAgICAgIGlmIChpbnRlcnNlY3Rpb25Ob25Ucml2aWFsKSB7XG4gICAgICAgIG5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXg7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBub25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXg7XG59XG4iXX0=