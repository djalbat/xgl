'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line'),
    vec3 = require('./maths/vec3'),
    arrayUtilities = require('./utilities/array'),
    verticesUtilities = require('./utilities/vertices'),
    approximateUtilities = require('./utilities/approximate');

var add = vec3.add,
    subtract = vec3.subtract,
    scale = vec3.scale,
    transform = vec3.transform,
    length = vec3.length,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    permute = arrayUtilities.permute,
    calculateNormal = verticesUtilities.calculateNormal,
    rotateVertices = verticesUtilities.rotateVertices,
    isApproximatelyEqualToZero = approximateUtilities.isApproximatelyEqualToZero;

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
      var normalLength = length(this.normal),
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
      var mat2 = rotationAboutZAxisMatrix; ///

      this.vertices = this.vertices.map(function (vertex) {
        var vec = vertex;

        vec = transform(vec, mat2);

        vertex = vec;

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
  var direction = subtract(endVertex, startVertex),
      offset = scale(direction, nonNullIntersection),
      intermediateVertex = add(startVertex, offset);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mYWNldC5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsInZlYzMiLCJhcnJheVV0aWxpdGllcyIsInZlcnRpY2VzVXRpbGl0aWVzIiwiYXBwcm94aW1hdGVVdGlsaXRpZXMiLCJhZGQiLCJzdWJ0cmFjdCIsInNjYWxlIiwidHJhbnNmb3JtIiwibGVuZ3RoIiwiZmlyc3QiLCJzZWNvbmQiLCJ0aGlyZCIsInBlcm11dGUiLCJjYWxjdWxhdGVOb3JtYWwiLCJyb3RhdGVWZXJ0aWNlcyIsImlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIiwiRmFjZXQiLCJ2ZXJ0aWNlcyIsIm5vcm1hbCIsInZlcnRpY2VzTGVuZ3RoIiwibGluZXMiLCJtYXAiLCJ2ZXJ0ZXgiLCJpbmRleCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsInN0YXJ0VmVydGV4IiwiZW5kVmVydGV4IiwibGluZSIsImZyb21WZXJ0aWNlcyIsImJpbmQiLCJub3JtYWxMZW5ndGgiLCJub3JtYWxMZW5ndGhBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8iLCJ0b29TbWFsbCIsImxpbmVzSW5YWVBsYW5lIiwiaW5zaWRlTGluZXNJblhZUGxhbmUiLCJpc0luc2lkZUxpbmVzSW5YWVBsYW5lIiwib3V0c2lkZUxpbmVzSW5YWVBsYW5lIiwidG90YWxPZlNpZGVzT2ZMaW5lSW5YWVBsYW5lIiwicmVkdWNlIiwibGluZUluWFlQbGFuZSIsInNpZGVPZkxpbmVJblhZUGxhbmUiLCJjYWxjdWxhdGVTaWRlT2ZMaW5lSW5YWVBsYW5lIiwidG90YWxPZlNpZGVzT2ZMaW5lSW5YWVBsYW5lQWJzb2x1dGVWYWx1ZSIsIk1hdGgiLCJhYnMiLCJyb3RhdGlvblF1YXRlcm5pb24iLCJyb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJtYXQyIiwidmVjIiwiaW50ZXJzZWN0aW9ucyIsImZhY2V0cyIsIm5vbk51bGxJbnRlcnNlY3Rpb25zIiwiY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMiLCJub25Ucml2aWFsTm9uTnVsbEludGVyc2VjdGlvbnMiLCJjYWxjdWxhdGVOb25Ucml2aWFsSW50ZXJzZWN0aW9ucyIsIm5vblRyaXZpYWxOb25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCIsInNwbGl0V2l0aFR3b05vblRyaXZpYWxOb25OdWxsSW50ZXJzZWN0aW9ucyIsInNwbGl0V2l0aE5vTm9uVHJpdmlhbE5vbk51bGxJbnRlcnNlY3Rpb25zIiwibm9uVHJpdmlhbEludGVyc2VjdGlvbnMiLCJub25Ucml2aWFsSW50ZXJzZWN0aW9uc0xlbmd0aCIsInNwbGl0V2l0aFR3b05vblRyaXZpYWxJbnRlcnNlY3Rpb25zIiwic3BsaXRXaXRoT25lTm9uVHJpdmlhbEludGVyc2VjdGlvbiIsInNwbGl0V2l0aE5vTm9uVHJpdmlhbEludGVyc2VjdGlvbnMiLCJudWxsSW50ZXJzZWN0aW9uSW5kZXgiLCJjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgiLCJwbGFjZXMiLCJmaXJzdFZlcnRleCIsInNlY29uZFZlcnRleCIsInRoaXJkVmVydGV4Iiwic2xpY2UiLCJmaXJzdE5vbk51bGxJbnRlcnNlY3Rpb24iLCJzZWNvbmROb25OdWxsSW50ZXJzZWN0aW9uIiwiZmlyc3RJbnRlcm1lZGlhdGVWZXJ0ZXgiLCJjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXgiLCJzZWNvbmRJbnRlcm1lZGlhdGVWZXJ0ZXgiLCJmaXJzdFZlcnRpY2VzIiwic2Vjb25kVmVydGljZXMiLCJ0aGlyZFZlcnRpY2VzIiwiZmlyc3RGYWNldCIsInNlY29uZEZhY2V0IiwidGhpcmRGYWNldCIsImZhY2V0IiwidHJpdmlhbEludGVyc2VjdGlvbkluZGV4IiwiY2FsY3VsYXRlVHJpdmlhbEludGVyc2VjdGlvbkluZGV4IiwiZmlyc3ROb25Ucml2aWFsSW50ZXJzZWN0aW9uIiwic2Vjb25kTm9uVHJpdmlhbEludGVyc2VjdGlvbiIsImZpcnN0RmFjZXRJblhZUGxhbmUiLCJzZWNvbmRGYWNldEluWFlQbGFuZSIsInRoaXJkRmFjZXRJblhZUGxhbmUiLCJub25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXgiLCJjYWxjdWxhdGVOb25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXgiLCJmaXJzdEludGVyc2VjdGlvbiIsIm5vblRyaXZpYWxJbnRlcnNlY3Rpb24iLCJpbnRlcm1lZGlhdGVWZXJ0ZXgiLCJ2ZXJ0ZXhTaWRlIiwiY2FsY3VsYXRlVmVydGV4U2lkZSIsInZlcnRpY2FsTGluZUluWFlQbGFuZSIsImdldExpbmVzIiwiaW50ZXJzZWN0aW9uIiwiY2FsY3VsYXRlSW50ZXJzZWN0aW9uV2l0aFZlcnRpY2FsTGluZUluWFlQbGFuZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJpc0ludGVyc2VjdGlvblRyaXZpYWwiLCJpbnRlcnNlY3Rpb25Ob25Ucml2aWFsIiwiaXNJbnRlcnNlY3Rpb25Ob25Ucml2aWFsIiwiaW50ZXJzZWN0aW9uVHJpdmlhbCIsIm5vbk51bGxJbnRlcnNlY3Rpb24iLCJkaXJlY3Rpb24iLCJvZmZzZXQiLCJpbnRlcnNlY3Rpb25Ob25OdWxsIiwicHVzaCIsImluZGV4T2YiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ01DLE9BQU9ELFFBQVEsY0FBUixDQURiO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLG1CQUFSLENBRnZCO0FBQUEsSUFHTUcsb0JBQW9CSCxRQUFRLHNCQUFSLENBSDFCO0FBQUEsSUFJTUksdUJBQXVCSixRQUFRLHlCQUFSLENBSjdCOztJQU1RSyxHLEdBQTRDSixJLENBQTVDSSxHO0lBQUtDLFEsR0FBdUNMLEksQ0FBdkNLLFE7SUFBVUMsSyxHQUE2Qk4sSSxDQUE3Qk0sSztJQUFPQyxTLEdBQXNCUCxJLENBQXRCTyxTO0lBQVdDLE0sR0FBV1IsSSxDQUFYUSxNO0lBQ2pDQyxLLEdBQWtDUixjLENBQWxDUSxLO0lBQU9DLE0sR0FBMkJULGMsQ0FBM0JTLE07SUFBUUMsSyxHQUFtQlYsYyxDQUFuQlUsSztJQUFPQyxPLEdBQVlYLGMsQ0FBWlcs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QkFBUDtBQUNELEdBVitCLEVBVTdCLEVBVjZCLENBQWhDOztBQVlBLFNBQU9BLHVCQUFQO0FBQ0Q7O0FBRUQsU0FBU00saUNBQVQsQ0FBMkNmLGFBQTNDLEVBQTBEO0FBQ3hELE1BQU1jLHdCQUF3QmQsY0FBYzhELE9BQWQsQ0FBc0IsSUFBdEIsQ0FBOUI7O0FBRUEsU0FBT2hELHFCQUFQO0FBQ0Q7O0FBRUQsU0FBU29CLGlDQUFULENBQTJDbEMsYUFBM0MsRUFBMEQ7QUFDeEQsTUFBTWlDLDJCQUEyQmpDLGNBQWNYLE1BQWQsQ0FBcUIsVUFBUzRDLHdCQUFULEVBQW1DZ0IsWUFBbkMsRUFBaUQ1RSxLQUFqRCxFQUF3RDtBQUM1RyxRQUFJNEQsNkJBQTZCLElBQWpDLEVBQXVDO0FBQ3JDLFVBQU1xQix5QkFBeUJELHNCQUFzQkosWUFBdEIsQ0FBL0I7O0FBRUEsVUFBSUssc0JBQUosRUFBNEI7QUFDMUJyQixtQ0FBMkI1RCxLQUEzQjtBQUNEO0FBQ0Y7O0FBRUQsV0FBTzRELHdCQUFQO0FBQ0QsR0FWZ0MsRUFVOUIsSUFWOEIsQ0FBakM7O0FBWUEsU0FBT0Esd0JBQVA7QUFDRDs7QUFFRCxTQUFTUSxvQ0FBVCxDQUE4Q3pDLGFBQTlDLEVBQTZEO0FBQzNELE1BQU13Qyw4QkFBOEJ4QyxjQUFjWCxNQUFkLENBQXFCLFVBQVNtRCwyQkFBVCxFQUFzQ1MsWUFBdEMsRUFBb0Q1RSxLQUFwRCxFQUEyRDtBQUNsSCxRQUFJbUUsZ0NBQWdDLElBQXBDLEVBQTBDO0FBQ3hDLFVBQU1jLHlCQUF5QkMseUJBQXlCTixZQUF6QixDQUEvQjs7QUFFQSxVQUFJSyxzQkFBSixFQUE0QjtBQUMxQmQsc0NBQThCbkUsS0FBOUI7QUFDRDtBQUNGOztBQUVELFdBQU9tRSwyQkFBUDtBQUNELEdBVm1DLEVBVWpDLElBVmlDLENBQXBDOztBQVlBLFNBQU9BLDJCQUFQO0FBQ0QiLCJmaWxlIjoiZmFjZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcbiAgICAgIHZlYzMgPSByZXF1aXJlKCcuL21hdGhzL3ZlYzMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlcnRpY2VzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdmVydGljZXMnKSxcbiAgICAgIGFwcHJveGltYXRlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXBwcm94aW1hdGUnKTtcblxuY29uc3QgeyBhZGQsIHN1YnRyYWN0LCBzY2FsZSwgdHJhbnNmb3JtLCBsZW5ndGggfSA9IHZlYzMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBwZXJtdXRlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlTm9ybWFsLCByb3RhdGVWZXJ0aWNlcyB9ID0gdmVydGljZXNVdGlsaXRpZXMsXG4gICAgICB7IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIH0gPSBhcHByb3hpbWF0ZVV0aWxpdGllczsgXG5cbmNsYXNzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCkge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgfVxuXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0Tm9ybWFsKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbDtcbiAgfVxuXG4gIGdldExpbmVzKCkge1xuICAgIGNvbnN0IHZlcnRpY2VzTGVuZ3RoID0gMywgLy8vXG4gICAgICAgICAgbGluZXMgPSB0aGlzLnZlcnRpY2VzLm1hcChmdW5jdGlvbih2ZXJ0ZXgsIGluZGV4KSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gaW5kZXgsXG4gICAgICAgICAgICAgICAgICBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMSkgJSB2ZXJ0aWNlc0xlbmd0aCxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGVuZFZlcnRleCA9IHRoaXMudmVydGljZXNbZW5kSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgbGluZSA9IExpbmUuZnJvbVZlcnRpY2VzKHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBsaW5lO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gbGluZXM7XG4gIH1cbiAgXG4gIGlzVG9vU21hbGwoKSB7XG4gICAgY29uc3Qgbm9ybWFsTGVuZ3RoID0gbGVuZ3RoKHRoaXMubm9ybWFsKSxcbiAgICAgICAgICBub3JtYWxMZW5ndGhBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhub3JtYWxMZW5ndGgpLFxuICAgICAgICAgIHRvb1NtYWxsID0gbm9ybWFsTGVuZ3RoQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIHRvb1NtYWxsO1xuICB9XG4gIFxuICBpc091dHNpZGVMaW5lc0luWFlQbGFuZShsaW5lc0luWFlQbGFuZSkge1xuICAgIGNvbnN0IGluc2lkZUxpbmVzSW5YWVBsYW5lID0gdGhpcy5pc0luc2lkZUxpbmVzSW5YWVBsYW5lKGxpbmVzSW5YWVBsYW5lKSxcbiAgICAgICAgICBvdXRzaWRlTGluZXNJblhZUGxhbmUgPSAhaW5zaWRlTGluZXNJblhZUGxhbmU7XG4gICAgXG4gICAgcmV0dXJuIG91dHNpZGVMaW5lc0luWFlQbGFuZTtcbiAgfVxuICBcbiAgaXNJbnNpZGVMaW5lc0luWFlQbGFuZShsaW5lc0luWFlQbGFuZSkge1xuICAgIGNvbnN0IHRvdGFsT2ZTaWRlc09mTGluZUluWFlQbGFuZSA9IGxpbmVzSW5YWVBsYW5lLnJlZHVjZShmdW5jdGlvbih0b3RhbE9mU2lkZXNPZkxpbmVJblhZUGxhbmUsIGxpbmVJblhZUGxhbmUpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpZGVPZkxpbmVJblhZUGxhbmUgPSB0aGlzLmNhbGN1bGF0ZVNpZGVPZkxpbmVJblhZUGxhbmUobGluZUluWFlQbGFuZSk7XG5cbiAgICAgICAgICAgIHRvdGFsT2ZTaWRlc09mTGluZUluWFlQbGFuZSArPSBzaWRlT2ZMaW5lSW5YWVBsYW5lO1xuXG4gICAgICAgICAgICByZXR1cm4gdG90YWxPZlNpZGVzT2ZMaW5lSW5YWVBsYW5lO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSwgMCksXG4gICAgICAgICAgdG90YWxPZlNpZGVzT2ZMaW5lSW5YWVBsYW5lQWJzb2x1dGVWYWx1ZSA9IE1hdGguYWJzKHRvdGFsT2ZTaWRlc09mTGluZUluWFlQbGFuZSksXG4gICAgICAgICAgaW5zaWRlTGluZXNJblhZUGxhbmUgPSAodG90YWxPZlNpZGVzT2ZMaW5lSW5YWVBsYW5lQWJzb2x1dGVWYWx1ZSA9PT0gMyk7XG5cbiAgICByZXR1cm4gaW5zaWRlTGluZXNJblhZUGxhbmU7XG4gIH1cbiAgXG4gIHJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gcm90YXRlVmVydGljZXModGhpcy52ZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICBcbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzKTtcbiAgfVxuXG4gIHJvdGF0ZUFib3V0WkF4aXMocm90YXRpb25BYm91dFpBeGlzTWF0cml4KSB7XG4gICAgY29uc3QgbWF0MiA9IHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeDsgIC8vL1xuXG4gICAgdGhpcy52ZXJ0aWNlcyA9IHRoaXMudmVydGljZXMubWFwKGZ1bmN0aW9uKHZlcnRleCkge1xuICAgICAgbGV0IHZlYyA9IHZlcnRleDtcblxuICAgICAgdmVjID0gdHJhbnNmb3JtKHZlYywgbWF0Mik7XG5cbiAgICAgIHZlcnRleCA9IHZlYztcblxuICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICB9KTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMpO1xuICB9XG5cbiAgc3BsaXRXaXRoTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zKSB7XG4gICAgbGV0IGZhY2V0cztcblxuICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25zID0gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgbm9uVHJpdmlhbE5vbk51bGxJbnRlcnNlY3Rpb25zID0gY2FsY3VsYXRlTm9uVHJpdmlhbEludGVyc2VjdGlvbnMobm9uTnVsbEludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIG5vblRyaXZpYWxOb25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCA9IG5vblRyaXZpYWxOb25OdWxsSW50ZXJzZWN0aW9ucy5sZW5ndGg7XG5cbiAgICBzd2l0Y2ggKG5vblRyaXZpYWxOb25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCkge1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgZmFjZXRzID0gdGhpcy5zcGxpdFdpdGhUd29Ob25Ucml2aWFsTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0IDpcbiAgICAgICAgZmFjZXRzID0gdGhpcy5zcGxpdFdpdGhOb05vblRyaXZpYWxOb25OdWxsSW50ZXJzZWN0aW9ucygpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gZmFjZXRzO1xuICB9XG5cbiAgc3BsaXRXaXRob3V0TnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zKSB7XG4gICAgbGV0IGZhY2V0cztcblxuICAgIGNvbnN0IG5vblRyaXZpYWxJbnRlcnNlY3Rpb25zID0gY2FsY3VsYXRlTm9uVHJpdmlhbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgbm9uVHJpdmlhbEludGVyc2VjdGlvbnNMZW5ndGggPSBub25Ucml2aWFsSW50ZXJzZWN0aW9ucy5sZW5ndGg7XG5cbiAgICBzd2l0Y2gobm9uVHJpdmlhbEludGVyc2VjdGlvbnNMZW5ndGgpIHtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgIGZhY2V0cyA9IHRoaXMuc3BsaXRXaXRoVHdvTm9uVHJpdmlhbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDEgOlxuICAgICAgICBmYWNldHMgPSB0aGlzLnNwbGl0V2l0aE9uZU5vblRyaXZpYWxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0IDpcbiAgICAgICAgZmFjZXRzID0gdGhpcy5zcGxpdFdpdGhOb05vblRyaXZpYWxJbnRlcnNlY3Rpb25zKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBmYWNldHM7XG4gIH1cblxuICBzcGxpdFdpdGhUd29Ob25Ucml2aWFsTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucykge1xuICAgIGNvbnN0IHZlcnRpY2VzTGVuZ3RoID0gMyxcbiAgICAgICAgICBudWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKHZlcnRpY2VzTGVuZ3RoIC0gbnVsbEludGVyc2VjdGlvbkluZGV4KSAlIHZlcnRpY2VzTGVuZ3RoO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IHBlcm11dGUoaW50ZXJzZWN0aW9ucywgcGxhY2VzKTtcblxuICAgIHRoaXMudmVydGljZXMgPSBwZXJtdXRlKHRoaXMudmVydGljZXMsIHBsYWNlcyk7XG5cbiAgICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIG5vbk51bGxJbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgxKSxcbiAgICAgICAgICBmaXJzdE5vbk51bGxJbnRlcnNlY3Rpb24gPSBmaXJzdChub25OdWxsSW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgc2Vjb25kTm9uTnVsbEludGVyc2VjdGlvbiA9IHNlY29uZChub25OdWxsSW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgZmlyc3RJbnRlcm1lZGlhdGVWZXJ0ZXggPSBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXgoc2Vjb25kVmVydGV4LCB0aGlyZFZlcnRleCwgZmlyc3ROb25OdWxsSW50ZXJzZWN0aW9uKSxcbiAgICAgICAgICBzZWNvbmRJbnRlcm1lZGlhdGVWZXJ0ZXggPSBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXgodGhpcmRWZXJ0ZXgsIGZpcnN0VmVydGV4LCBzZWNvbmROb25OdWxsSW50ZXJzZWN0aW9uKSxcbiAgICAgICAgICBmaXJzdFZlcnRpY2VzID0gW1xuICAgICAgICAgICAgZmlyc3RWZXJ0ZXgsXG4gICAgICAgICAgICBzZWNvbmRWZXJ0ZXgsXG4gICAgICAgICAgICBzZWNvbmRJbnRlcm1lZGlhdGVWZXJ0ZXhcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlY29uZFZlcnRpY2VzID0gW1xuICAgICAgICAgICAgc2Vjb25kVmVydGV4LFxuICAgICAgICAgICAgZmlyc3RJbnRlcm1lZGlhdGVWZXJ0ZXgsXG4gICAgICAgICAgICBzZWNvbmRJbnRlcm1lZGlhdGVWZXJ0ZXhcbiAgICAgICAgICBdLFxuICAgICAgICAgIHRoaXJkVmVydGljZXMgPSBbXG4gICAgICAgICAgICBmaXJzdEludGVybWVkaWF0ZVZlcnRleCxcbiAgICAgICAgICAgIHRoaXJkVmVydGV4LFxuICAgICAgICAgICAgc2Vjb25kSW50ZXJtZWRpYXRlVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBmaXJzdEZhY2V0ID0gRmFjZXQuZnJvbVZlcnRpY2VzKGZpcnN0VmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZEZhY2V0ID0gRmFjZXQuZnJvbVZlcnRpY2VzKHNlY29uZFZlcnRpY2VzKSxcbiAgICAgICAgICB0aGlyZEZhY2V0ID0gRmFjZXQuZnJvbVZlcnRpY2VzKHRoaXJkVmVydGljZXMpLFxuICAgICAgICAgIGZhY2V0cyA9IFtcbiAgICAgICAgICAgIGZpcnN0RmFjZXQsXG4gICAgICAgICAgICBzZWNvbmRGYWNldCxcbiAgICAgICAgICAgIHRoaXJkRmFjZXRcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIGZhY2V0cztcbiAgfVxuXG4gIHNwbGl0V2l0aE5vTm9uVHJpdmlhbE5vbk51bGxJbnRlcnNlY3Rpb25zKCkge1xuICAgIGNvbnN0IGZhY2V0ID0gdGhpcywgIC8vL1xuICAgICAgICBmYWNldHMgPSBbXG4gICAgICAgICAgZmFjZXRcbiAgICAgICAgXTtcblxuICAgIHJldHVybiBmYWNldHM7XG4gIH1cblxuICBzcGxpdFdpdGhUd29Ob25Ucml2aWFsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSB7XG4gICAgY29uc3QgdmVydGljZXNMZW5ndGggPSAzLFxuICAgICAgICAgIHRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZVRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAodmVydGljZXNMZW5ndGggLSB0cml2aWFsSW50ZXJzZWN0aW9uSW5kZXgpICUgdmVydGljZXNMZW5ndGg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgdGhpcy52ZXJ0aWNlcyA9IHBlcm11dGUodGhpcy52ZXJ0aWNlcywgcGxhY2VzKTtcblxuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgbm9uVHJpdmlhbEludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnNsaWNlKDEpLFxuICAgICAgICAgIGZpcnN0Tm9uVHJpdmlhbEludGVyc2VjdGlvbiA9IGZpcnN0KG5vblRyaXZpYWxJbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBzZWNvbmROb25Ucml2aWFsSW50ZXJzZWN0aW9uID0gc2Vjb25kKG5vblRyaXZpYWxJbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBmaXJzdEludGVybWVkaWF0ZVZlcnRleCA9IGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleChzZWNvbmRWZXJ0ZXgsIHRoaXJkVmVydGV4LCBmaXJzdE5vblRyaXZpYWxJbnRlcnNlY3Rpb24pLFxuICAgICAgICAgIHNlY29uZEludGVybWVkaWF0ZVZlcnRleCA9IGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleCh0aGlyZFZlcnRleCwgZmlyc3RWZXJ0ZXgsIHNlY29uZE5vblRyaXZpYWxJbnRlcnNlY3Rpb24pLFxuICAgICAgICAgIGZpcnN0VmVydGljZXMgPSBbXG4gICAgICAgICAgICBmaXJzdFZlcnRleCxcbiAgICAgICAgICAgIHNlY29uZFZlcnRleCxcbiAgICAgICAgICAgIGZpcnN0SW50ZXJtZWRpYXRlVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZWNvbmRWZXJ0aWNlcyA9IFtcbiAgICAgICAgICAgIGZpcnN0VmVydGV4LFxuICAgICAgICAgICAgZmlyc3RJbnRlcm1lZGlhdGVWZXJ0ZXgsXG4gICAgICAgICAgICBzZWNvbmRJbnRlcm1lZGlhdGVWZXJ0ZXhcbiAgICAgICAgICBdLFxuICAgICAgICAgIHRoaXJkVmVydGljZXMgPSBbXG4gICAgICAgICAgICBmaXJzdEludGVybWVkaWF0ZVZlcnRleCxcbiAgICAgICAgICAgIHRoaXJkVmVydGV4LFxuICAgICAgICAgICAgc2Vjb25kSW50ZXJtZWRpYXRlVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBmaXJzdEZhY2V0SW5YWVBsYW5lID0gRmFjZXQuZnJvbVZlcnRpY2VzKGZpcnN0VmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZEZhY2V0SW5YWVBsYW5lID0gRmFjZXQuZnJvbVZlcnRpY2VzKHNlY29uZFZlcnRpY2VzKSxcbiAgICAgICAgICB0aGlyZEZhY2V0SW5YWVBsYW5lID0gRmFjZXQuZnJvbVZlcnRpY2VzKHRoaXJkVmVydGljZXMpLFxuICAgICAgICAgIGZhY2V0cyA9IFtcbiAgICAgICAgICAgIGZpcnN0RmFjZXRJblhZUGxhbmUsXG4gICAgICAgICAgICBzZWNvbmRGYWNldEluWFlQbGFuZSxcbiAgICAgICAgICAgIHRoaXJkRmFjZXRJblhZUGxhbmVcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIGZhY2V0cztcbiAgfVxuXG4gIHNwbGl0V2l0aE9uZU5vblRyaXZpYWxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucykge1xuICAgIGNvbnN0IHZlcnRpY2VzTGVuZ3RoID0gMyxcbiAgICAgICAgICBub25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOb25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKHZlcnRpY2VzTGVuZ3RoIC0gbm9uVHJpdmlhbEludGVyc2VjdGlvbkluZGV4KSAlIHZlcnRpY2VzTGVuZ3RoO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IHBlcm11dGUoaW50ZXJzZWN0aW9ucywgcGxhY2VzKTtcblxuICAgIHRoaXMudmVydGljZXMgPSBwZXJtdXRlKHRoaXMudmVydGljZXMsIHBsYWNlcyk7XG5cbiAgICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIGZpcnN0SW50ZXJzZWN0aW9uID0gZmlyc3QoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgbm9uVHJpdmlhbEludGVyc2VjdGlvbiA9IGZpcnN0SW50ZXJzZWN0aW9uLCAvLy9cbiAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXggPSBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXgoZmlyc3RWZXJ0ZXgsIHNlY29uZFZlcnRleCwgbm9uVHJpdmlhbEludGVyc2VjdGlvbiksXG4gICAgICAgICAgZmlyc3RWZXJ0aWNlcyA9IFtcbiAgICAgICAgICAgIGZpcnN0VmVydGV4LFxuICAgICAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4LFxuICAgICAgICAgICAgdGhpcmRWZXJ0ZXhcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlY29uZFZlcnRpY2VzID0gW1xuICAgICAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4LFxuICAgICAgICAgICAgc2Vjb25kVmVydGV4LFxuICAgICAgICAgICAgdGhpcmRWZXJ0ZXhcbiAgICAgICAgICBdLFxuICAgICAgICAgIGZpcnN0RmFjZXRJblhZUGxhbmUgPSBGYWNldC5mcm9tVmVydGljZXMoZmlyc3RWZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kRmFjZXRJblhZUGxhbmUgPSBGYWNldC5mcm9tVmVydGljZXMoc2Vjb25kVmVydGljZXMpLFxuICAgICAgICAgIGZhY2V0cyA9IFtcbiAgICAgICAgICAgIGZpcnN0RmFjZXRJblhZUGxhbmUsXG4gICAgICAgICAgICBzZWNvbmRGYWNldEluWFlQbGFuZVxuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gZmFjZXRzO1xuICB9XG5cbiAgc3BsaXRXaXRoTm9Ob25Ucml2aWFsSW50ZXJzZWN0aW9ucygpIHtcbiAgICBjb25zdCBmYWNldCA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmYWNldHMgPSBbXG4gICAgICAgICAgICBmYWNldFxuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gZmFjZXRzO1xuICB9XG5cbiAgY2FsY3VsYXRlU2lkZU9mTGluZUluWFlQbGFuZShsaW5lSW5YWVBsYW5lKSB7XG4gICAgY29uc3Qgc2lkZU9mTGluZUluWFlQbGFuZSA9IHRoaXMudmVydGljZXMucmVkdWNlKGZ1bmN0aW9uKHNpZGVPZkxpbmVJblhZUGxhbmUsIHZlcnRleCkge1xuICAgICAgaWYgKHNpZGVPZkxpbmVJblhZUGxhbmUgPT09IDApIHtcbiAgICAgICAgY29uc3QgdmVydGV4U2lkZSA9IGxpbmVJblhZUGxhbmUuY2FsY3VsYXRlVmVydGV4U2lkZSh2ZXJ0ZXgpO1xuXG4gICAgICAgIHNpZGVPZkxpbmVJblhZUGxhbmUgPSB2ZXJ0ZXhTaWRlOyAvLy9cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNpZGVPZkxpbmVJblhZUGxhbmU7XG4gICAgfSwgMCk7XG5cbiAgICByZXR1cm4gc2lkZU9mTGluZUluWFlQbGFuZTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUludGVyc2VjdGlvbnNXaXRoVmVydGljYWxMaW5lSW5YWVBsYW5lKHZlcnRpY2FsTGluZUluWFlQbGFuZSkge1xuICAgIGNvbnN0IGxpbmVzID0gdGhpcy5nZXRMaW5lcygpLFxuICAgICAgICAgIGludGVyc2VjdGlvbnMgPSBsaW5lcy5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gbGluZS5jYWxjdWxhdGVJbnRlcnNlY3Rpb25XaXRoVmVydGljYWxMaW5lSW5YWVBsYW5lKHZlcnRpY2FsTGluZUluWFlQbGFuZSk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBpbnRlcnNlY3Rpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcyksXG4gICAgICAgICAgZmFjZXQgPSBuZXcgRmFjZXQodmVydGljZXMsIG5vcm1hbCk7XG5cbiAgICByZXR1cm4gZmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGYWNldDtcblxuZnVuY3Rpb24gaXNJbnRlcnNlY3Rpb25Ucml2aWFsKGludGVyc2VjdGlvbikge1xuICBjb25zdCBpbnRlcnNlY3Rpb25Ob25Ucml2aWFsID0gaXNJbnRlcnNlY3Rpb25Ob25Ucml2aWFsKGludGVyc2VjdGlvbiksXG4gICAgICBpbnRlcnNlY3Rpb25Ucml2aWFsID0gIWludGVyc2VjdGlvbk5vblRyaXZpYWw7XG5cbiAgcmV0dXJuIGludGVyc2VjdGlvblRyaXZpYWw7XG59XG5cbmZ1bmN0aW9uIGlzSW50ZXJzZWN0aW9uTm9uVHJpdmlhbChpbnRlcnNlY3Rpb24pIHtcbiAgY29uc3QgaW50ZXJzZWN0aW9uTm9uVHJpdmlhbCA9ICgoaW50ZXJzZWN0aW9uID4gMCkgJiYgKGludGVyc2VjdGlvbiA8IDEpKTtcblxuICByZXR1cm4gaW50ZXJzZWN0aW9uTm9uVHJpdmlhbDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgsIG5vbk51bGxJbnRlcnNlY3Rpb24pIHtcbiAgY29uc3QgZGlyZWN0aW9uID0gc3VidHJhY3QoZW5kVmVydGV4LCBzdGFydFZlcnRleCksXG4gICAgICBvZmZzZXQgPSBzY2FsZShkaXJlY3Rpb24sIG5vbk51bGxJbnRlcnNlY3Rpb24pLFxuICAgICAgaW50ZXJtZWRpYXRlVmVydGV4ID0gYWRkKHN0YXJ0VmVydGV4LCBvZmZzZXQpO1xuXG4gIHJldHVybiBpbnRlcm1lZGlhdGVWZXJ0ZXg7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnJlZHVjZShmdW5jdGlvbihub25OdWxsSW50ZXJzZWN0aW9ucywgaW50ZXJzZWN0aW9uKSB7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9uTm9uTnVsbCA9IChpbnRlcnNlY3Rpb24gIT09IG51bGwpO1xuXG4gICAgaWYgKGludGVyc2VjdGlvbk5vbk51bGwpIHtcbiAgICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb247IC8vL1xuXG4gICAgICBub25OdWxsSW50ZXJzZWN0aW9ucy5wdXNoKG5vbk51bGxJbnRlcnNlY3Rpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBub25OdWxsSW50ZXJzZWN0aW9ucztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBub25OdWxsSW50ZXJzZWN0aW9ucztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTm9uVHJpdmlhbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucykge1xuICBjb25zdCBub25Ucml2aWFsSW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMucmVkdWNlKGZ1bmN0aW9uKG5vblRyaXZpYWxJbnRlcnNlY3Rpb25zLCBpbnRlcnNlY3Rpb24pIHtcbiAgICBjb25zdCBpbnRlcnNlY3Rpb25Ob25Ucml2aWFsID0gaXNJbnRlcnNlY3Rpb25Ob25Ucml2aWFsKGludGVyc2VjdGlvbik7XG5cbiAgICBpZiAoaW50ZXJzZWN0aW9uTm9uVHJpdmlhbCkge1xuICAgICAgY29uc3Qgbm9uVHJpdmlhbEludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbjsgIC8vL1xuXG4gICAgICBub25Ucml2aWFsSW50ZXJzZWN0aW9ucy5wdXNoKG5vblRyaXZpYWxJbnRlcnNlY3Rpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBub25Ucml2aWFsSW50ZXJzZWN0aW9ucztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBub25Ucml2aWFsSW50ZXJzZWN0aW9ucztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW50ZXJzZWN0aW9ucy5pbmRleE9mKG51bGwpO1xuXG4gIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IHRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMucmVkdWNlKGZ1bmN0aW9uKHRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkge1xuICAgIGlmICh0cml2aWFsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGludGVyc2VjdGlvbk5vblRyaXZpYWwgPSBpc0ludGVyc2VjdGlvblRyaXZpYWwoaW50ZXJzZWN0aW9uKTtcblxuICAgICAgaWYgKGludGVyc2VjdGlvbk5vblRyaXZpYWwpIHtcbiAgICAgICAgdHJpdmlhbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTm9uVHJpdmlhbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3Qgbm9uVHJpdmlhbEludGVyc2VjdGlvbkluZGV4ID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24obm9uVHJpdmlhbEludGVyc2VjdGlvbkluZGV4LCBpbnRlcnNlY3Rpb24sIGluZGV4KSB7XG4gICAgaWYgKG5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgaW50ZXJzZWN0aW9uTm9uVHJpdmlhbCA9IGlzSW50ZXJzZWN0aW9uTm9uVHJpdmlhbChpbnRlcnNlY3Rpb24pO1xuXG4gICAgICBpZiAoaW50ZXJzZWN0aW9uTm9uVHJpdmlhbCkge1xuICAgICAgICBub25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVHJpdmlhbEludGVyc2VjdGlvbkluZGV4O1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gbm9uVHJpdmlhbEludGVyc2VjdGlvbkluZGV4O1xufVxuIl19