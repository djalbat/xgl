'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facet = require('./facet'),
    vec3 = require('./maths/vec3'),
    LineInXYPlane = require('./lineInXYPlane'),
    arrayUtilities = require('./utilities/array'),
    verticesUtilities = require('./utilities/vertices'),
    quaternionUtilities = require('./utilities/quaternion');

var add = vec3.add,
    subtract = vec3.subtract,
    scale = vec3.scale,
    transform = vec3.transform,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    permute = arrayUtilities.permute,
    calculateRotationQuaternion = quaternionUtilities.calculateRotationQuaternion,
    calculateNormal = verticesUtilities.calculateNormal,
    rotateVertices = verticesUtilities.rotateVertices,
    translateVertices = verticesUtilities.translateVertices;

var FacetInXYPlane = function (_Facet) {
  _inherits(FacetInXYPlane, _Facet);

  function FacetInXYPlane(vertices, normal, rotationQuaternion, translation) {
    _classCallCheck(this, FacetInXYPlane);

    var _this = _possibleConstructorReturn(this, (FacetInXYPlane.__proto__ || Object.getPrototypeOf(FacetInXYPlane)).call(this, vertices, normal));

    _this.rotationQuaternion = rotationQuaternion;

    _this.translation = translation;
    return _this;
  }

  _createClass(FacetInXYPlane, [{
    key: 'getRotationQuaternion',
    value: function getRotationQuaternion() {
      return this.rotationQuaternion;
    }
  }, {
    key: 'getTranslation',
    value: function getTranslation() {
      return this.translation;
    }
  }, {
    key: 'getForwardsRotationQuaternion',
    value: function getForwardsRotationQuaternion() {
      var forwardsRotationQuaternion = this.rotationQuaternion;

      return forwardsRotationQuaternion;
    }
  }, {
    key: 'getBackwardsRotationQuaternion',
    value: function getBackwardsRotationQuaternion() {
      var rotationQuaternionComponents = this.rotationQuaternion,
          ///
      backwardsRotationQuaternionComponents = rotationQuaternionComponents.map(function (rotationQuaternionComponent, index) {
        var backwardsRotationQuaternionComponent = index < 1 ? ///
        +rotationQuaternionComponent : -rotationQuaternionComponent;

        return backwardsRotationQuaternionComponent;
      }),
          backwardsRotationQuaternion = backwardsRotationQuaternionComponents;

      return backwardsRotationQuaternion;
    }
  }, {
    key: 'getForwardsTranslation',
    value: function getForwardsTranslation() {
      var forwardsTranslation = this.translation;

      return forwardsTranslation;
    }
  }, {
    key: 'getBackwardsTranslation',
    value: function getBackwardsTranslation() {
      var translationComponents = this.translation,
          ///
      backwardsTranslationComponents = translationComponents.map(function (translationComponent, index) {
        var backwardsTranslationComponent = index < 2 ? ///
        +translationComponent : -translationComponent;

        return backwardsTranslationComponent;
      }),
          backwardsTranslation = backwardsTranslationComponents;

      return backwardsTranslation;
    }
  }, {
    key: 'getEdgeLinesInXYPlane',
    value: function getEdgeLinesInXYPlane() {
      var edgeLinesInXYPlane = [],
          verticesLength = 3; ///

      for (var index = 0; index < verticesLength; index++) {
        var startIndex = index,
            endIndex = (index + 1) % verticesLength,
            startVertex = this.vertices[startIndex],
            endVertex = this.vertices[endIndex],
            edgeLineInXYPlane = LineInXYPlane.fromVertices(startVertex, endVertex);

        edgeLinesInXYPlane.push(edgeLineInXYPlane);
      }

      return edgeLinesInXYPlane;
    }
  }, {
    key: 'rotate',
    value: function rotate(rotationMatrix) {
      var mat2 = rotationMatrix; ///

      this.vertices = this.vertices.map(function (vertex) {
        var vec = vertex;

        vec = transform(vec, mat2);

        vertex = vec;

        return vertex;
      });
    }
  }, {
    key: 'possiblySplit',
    value: function possiblySplit(verticalLineInXYPlane) {
      var intersections = this.calculateIntersectionsWithVerticalLineInXYPlane(verticalLineInXYPlane),
          intersectionsIncludesNull = intersections.includes(null),
          facetsInXYPlane = intersectionsIncludesNull ? this.possiblySplitWithNullIntersection(intersections) : this.possiblySplitWithoutNullIntersection(intersections);

      return facetsInXYPlane;
    }
  }, {
    key: 'possiblySplitWithNullIntersection',
    value: function possiblySplitWithNullIntersection(intersections) {
      var nonNullIntersections = calculateNonNullIntersections(intersections),
          firstNonNullIntersection = first(nonNullIntersections),
          firstNonNullIntersectionNonTrivial = isIntersectionNonTrivial(firstNonNullIntersection),
          facetsInXYPlane = firstNonNullIntersectionNonTrivial ? this.splitWithNullIntersection(intersections) : this.doNotSplit();

      return facetsInXYPlane;
    }
  }, {
    key: 'doNotSplit',
    value: function doNotSplit() {
      var facetInXYPlane = this,
          ///
      facetsInXYPlane = [facetInXYPlane];

      return facetsInXYPlane;
    }
  }, {
    key: 'splitWithNullIntersection',
    value: function splitWithNullIntersection(intersections) {
      var verticesLength = 3,
          nullIntersectionIndex = calculateNonNullIntersectionIndex(intersections),
          places = (verticesLength - nullIntersectionIndex) % verticesLength;

      var vertices = this.getVertices();

      intersections = permute(intersections, places);

      vertices = permute(vertices, places);

      var firstVertex = first(vertices),
          secondVertex = second(vertices),
          thirdVertex = third(vertices),
          nonNullIntersections = intersections.slice(1),
          firstNonNullIntersection = first(nonNullIntersections),
          secondNonNullIntersection = second(nonNullIntersections),
          firstIntermediateVertex = calculateIntermediateVertex(secondVertex, thirdVertex, firstNonNullIntersection),
          secondIntermediateVertex = calculateIntermediateVertex(thirdVertex, firstVertex, secondNonNullIntersection),
          firstVertices = [firstVertex, secondVertex, secondIntermediateVertex],
          secondVertices = [secondVertex, firstIntermediateVertex, secondIntermediateVertex],
          thirdVertices = [firstIntermediateVertex, thirdVertex, secondIntermediateVertex],
          normal = this.getNormal(),
          firstFacetInXYPlane = new FacetInXYPlane(firstVertices, normal, this.rotationQuaternion, this.translation),
          secondFacetInXYPlane = new FacetInXYPlane(secondVertices, normal, this.rotationQuaternion, this.translation),
          thirdFacetInXYPlane = new FacetInXYPlane(thirdVertices, normal, this.rotationQuaternion, this.translation),
          facetsInXYPlane = [firstFacetInXYPlane, secondFacetInXYPlane, thirdFacetInXYPlane];

      return facetsInXYPlane;
    }
  }, {
    key: 'possiblySplitWithoutNullIntersection',
    value: function possiblySplitWithoutNullIntersection(intersections) {
      var nonTrivialIntersections = calculateNonTrivialIntersections(intersections),
          nonTrivialIntersectionsLength = nonTrivialIntersections.length,
          oneNonTrivialIntersection = nonTrivialIntersectionsLength === 1,
          facetsInXYPlane = oneNonTrivialIntersection ? this.splitWithOneNonTrivialIntersection(intersections) : this.splitWithTwoNonTrivialIntersection(intersections);

      return facetsInXYPlane;
    }
  }, {
    key: 'splitWithOneNonTrivialIntersection',
    value: function splitWithOneNonTrivialIntersection(intersections) {
      var verticesLength = 3,
          nonTrivialIntersectionIndex = calculateNonTrivialIntersectionIndex(intersections),
          places = (verticesLength - nonTrivialIntersectionIndex) % verticesLength;

      var vertices = this.getVertices();

      intersections = permute(intersections, places);

      vertices = permute(vertices, places);

      var firstVertex = first(vertices),
          secondVertex = second(vertices),
          thirdVertex = third(vertices),
          firstIntersection = first(intersections),
          nonTrivialIntersection = firstIntersection,
          ///
      intermediateVertex = calculateIntermediateVertex(firstVertex, secondVertex, nonTrivialIntersection),
          firstVertices = [firstVertex, intermediateVertex, thirdVertex],
          secondVertices = [intermediateVertex, secondVertex, thirdVertex],
          normal = this.getNormal(),
          firstFacetInXYPlane = new FacetInXYPlane(firstVertices, normal, this.rotationQuaternion, this.translation),
          secondFacetInXYPlane = new FacetInXYPlane(secondVertices, normal, this.rotationQuaternion, this.translation),
          facetsInXYPlane = [firstFacetInXYPlane, secondFacetInXYPlane];

      return facetsInXYPlane;
    }
  }, {
    key: 'splitWithTwoNonTrivialIntersection',
    value: function splitWithTwoNonTrivialIntersection(intersections) {
      var verticesLength = 3,
          trivialIntersectionIndex = calculateTrivialIntersectionIndex(intersections),
          places = (verticesLength - trivialIntersectionIndex) % verticesLength;

      var vertices = this.getVertices();

      intersections = permute(intersections, places);

      vertices = permute(vertices, places);

      var firstVertex = first(vertices),
          secondVertex = second(vertices),
          thirdVertex = third(vertices),
          nonTrivialIntersections = intersections.slice(1),
          firstNonTrivialIntersection = first(nonTrivialIntersections),
          secondNonTrivialIntersection = second(nonTrivialIntersections),
          firstIntermediateVertex = calculateIntermediateVertex(secondVertex, thirdVertex, firstNonTrivialIntersection),
          secondIntermediateVertex = calculateIntermediateVertex(thirdVertex, firstVertex, secondNonTrivialIntersection),
          firstVertices = [firstVertex, secondVertex, firstIntermediateVertex],
          secondVertices = [firstVertex, firstIntermediateVertex, secondIntermediateVertex],
          thirdVertices = [firstIntermediateVertex, thirdVertex, secondIntermediateVertex],
          normal = this.getNormal(),
          firstFacetInXYPlane = new FacetInXYPlane(firstVertices, normal, this.rotationQuaternion, this.translation),
          secondFacetInXYPlane = new FacetInXYPlane(secondVertices, normal, this.rotationQuaternion, this.translation),
          thirdFacetInXYPlane = new FacetInXYPlane(thirdVertices, normal, this.rotationQuaternion, this.translation),
          facetsInXYPlane = [firstFacetInXYPlane, secondFacetInXYPlane, thirdFacetInXYPlane];

      return facetsInXYPlane;
    }
  }, {
    key: 'calculateIntersectionsWithVerticalLineInXYPlane',
    value: function calculateIntersectionsWithVerticalLineInXYPlane(verticalLineInXYPlane) {
      var edgeLinesInXYPlane = this.getEdgeLinesInXYPlane(),
          intersections = edgeLinesInXYPlane.map(function (edgeLineInXYPlane) {
        var intersection = edgeLineInXYPlane.calculateIntersectionWithVerticalLineInXYPlane(verticalLineInXYPlane);

        return intersection;
      });

      return intersections;
    }
  }], [{
    key: 'fromFacet',
    value: function fromFacet(facet) {
      var normal = facet.getNormal();

      var rotationQuaternion = calculateRotationQuaternion(normal);

      var vertices = facet.getVertices();

      vertices = rotateVertices(vertices, rotationQuaternion);

      var translation = calculateTranslation(vertices);

      vertices = translateVertices(vertices, translation);

      normal = calculateNormal(vertices);

      var facetInXYPlane = new FacetInXYPlane(vertices, normal, rotationQuaternion, translation);

      return facetInXYPlane;
    }
  }]);

  return FacetInXYPlane;
}(Facet);

module.exports = FacetInXYPlane;

function calculateTranslation(vertices) {
  var firstVertex = first(vertices),
      vertex = firstVertex,
      ///
  vertexComponents = vertex,
      ///
  thirdVertexComponent = third(vertexComponents),
      z = thirdVertexComponent,
      ///
  translation = [0, 0, -z];

  return translation;
}

function calculateIntermediateVertex(startVertex, endVertex, nonNullIntersection) {
  var direction = subtract(endVertex, startVertex),
      offset = scale(direction, nonNullIntersection),
      intermediateVertex = add(startVertex, offset);

  return intermediateVertex;
}

function isIntersectionTrivial(intersection) {
  var intersectionNonTrivial = isIntersectionNonTrivial(intersection),
      intersectionTrivial = !intersectionNonTrivial;

  return intersectionTrivial;
}

function isIntersectionNonTrivial(intersection) {
  var intersectionNonTrivial = intersection > 0 && intersection < 1;

  return intersectionNonTrivial;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mYWNldEluWFlQbGFuZS5qcyJdLCJuYW1lcyI6WyJGYWNldCIsInJlcXVpcmUiLCJ2ZWMzIiwiTGluZUluWFlQbGFuZSIsImFycmF5VXRpbGl0aWVzIiwidmVydGljZXNVdGlsaXRpZXMiLCJxdWF0ZXJuaW9uVXRpbGl0aWVzIiwiYWRkIiwic3VidHJhY3QiLCJzY2FsZSIsInRyYW5zZm9ybSIsImZpcnN0Iiwic2Vjb25kIiwidGhpcmQiLCJwZXJtdXRlIiwiY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uIiwiY2FsY3VsYXRlTm9ybWFsIiwicm90YXRlVmVydGljZXMiLCJ0cmFuc2xhdGVWZXJ0aWNlcyIsIkZhY2V0SW5YWVBsYW5lIiwidmVydGljZXMiLCJub3JtYWwiLCJyb3RhdGlvblF1YXRlcm5pb24iLCJ0cmFuc2xhdGlvbiIsImZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwicm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyIsImJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMiLCJtYXAiLCJyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQiLCJpbmRleCIsImJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCIsImJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiIsImZvcndhcmRzVHJhbnNsYXRpb24iLCJ0cmFuc2xhdGlvbkNvbXBvbmVudHMiLCJiYWNrd2FyZHNUcmFuc2xhdGlvbkNvbXBvbmVudHMiLCJ0cmFuc2xhdGlvbkNvbXBvbmVudCIsImJhY2t3YXJkc1RyYW5zbGF0aW9uQ29tcG9uZW50IiwiYmFja3dhcmRzVHJhbnNsYXRpb24iLCJlZGdlTGluZXNJblhZUGxhbmUiLCJ2ZXJ0aWNlc0xlbmd0aCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsInN0YXJ0VmVydGV4IiwiZW5kVmVydGV4IiwiZWRnZUxpbmVJblhZUGxhbmUiLCJmcm9tVmVydGljZXMiLCJwdXNoIiwicm90YXRpb25NYXRyaXgiLCJtYXQyIiwidmVydGV4IiwidmVjIiwidmVydGljYWxMaW5lSW5YWVBsYW5lIiwiaW50ZXJzZWN0aW9ucyIsImNhbGN1bGF0ZUludGVyc2VjdGlvbnNXaXRoVmVydGljYWxMaW5lSW5YWVBsYW5lIiwiaW50ZXJzZWN0aW9uc0luY2x1ZGVzTnVsbCIsImluY2x1ZGVzIiwiZmFjZXRzSW5YWVBsYW5lIiwicG9zc2libHlTcGxpdFdpdGhOdWxsSW50ZXJzZWN0aW9uIiwicG9zc2libHlTcGxpdFdpdGhvdXROdWxsSW50ZXJzZWN0aW9uIiwibm9uTnVsbEludGVyc2VjdGlvbnMiLCJjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyIsImZpcnN0Tm9uTnVsbEludGVyc2VjdGlvbiIsImZpcnN0Tm9uTnVsbEludGVyc2VjdGlvbk5vblRyaXZpYWwiLCJpc0ludGVyc2VjdGlvbk5vblRyaXZpYWwiLCJzcGxpdFdpdGhOdWxsSW50ZXJzZWN0aW9uIiwiZG9Ob3RTcGxpdCIsImZhY2V0SW5YWVBsYW5lIiwibnVsbEludGVyc2VjdGlvbkluZGV4IiwiY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4IiwicGxhY2VzIiwiZ2V0VmVydGljZXMiLCJmaXJzdFZlcnRleCIsInNlY29uZFZlcnRleCIsInRoaXJkVmVydGV4Iiwic2xpY2UiLCJzZWNvbmROb25OdWxsSW50ZXJzZWN0aW9uIiwiZmlyc3RJbnRlcm1lZGlhdGVWZXJ0ZXgiLCJjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXgiLCJzZWNvbmRJbnRlcm1lZGlhdGVWZXJ0ZXgiLCJmaXJzdFZlcnRpY2VzIiwic2Vjb25kVmVydGljZXMiLCJ0aGlyZFZlcnRpY2VzIiwiZ2V0Tm9ybWFsIiwiZmlyc3RGYWNldEluWFlQbGFuZSIsInNlY29uZEZhY2V0SW5YWVBsYW5lIiwidGhpcmRGYWNldEluWFlQbGFuZSIsIm5vblRyaXZpYWxJbnRlcnNlY3Rpb25zIiwiY2FsY3VsYXRlTm9uVHJpdmlhbEludGVyc2VjdGlvbnMiLCJub25Ucml2aWFsSW50ZXJzZWN0aW9uc0xlbmd0aCIsImxlbmd0aCIsIm9uZU5vblRyaXZpYWxJbnRlcnNlY3Rpb24iLCJzcGxpdFdpdGhPbmVOb25Ucml2aWFsSW50ZXJzZWN0aW9uIiwic3BsaXRXaXRoVHdvTm9uVHJpdmlhbEludGVyc2VjdGlvbiIsIm5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCIsImNhbGN1bGF0ZU5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCIsImZpcnN0SW50ZXJzZWN0aW9uIiwibm9uVHJpdmlhbEludGVyc2VjdGlvbiIsImludGVybWVkaWF0ZVZlcnRleCIsInRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCIsImNhbGN1bGF0ZVRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCIsImZpcnN0Tm9uVHJpdmlhbEludGVyc2VjdGlvbiIsInNlY29uZE5vblRyaXZpYWxJbnRlcnNlY3Rpb24iLCJnZXRFZGdlTGluZXNJblhZUGxhbmUiLCJpbnRlcnNlY3Rpb24iLCJjYWxjdWxhdGVJbnRlcnNlY3Rpb25XaXRoVmVydGljYWxMaW5lSW5YWVBsYW5lIiwiZmFjZXQiLCJjYWxjdWxhdGVUcmFuc2xhdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJ2ZXJ0ZXhDb21wb25lbnRzIiwidGhpcmRWZXJ0ZXhDb21wb25lbnQiLCJ6Iiwibm9uTnVsbEludGVyc2VjdGlvbiIsImRpcmVjdGlvbiIsIm9mZnNldCIsImlzSW50ZXJzZWN0aW9uVHJpdmlhbCIsImludGVyc2VjdGlvbk5vblRyaXZpYWwiLCJpbnRlcnNlY3Rpb25Ucml2aWFsIiwicmVkdWNlIiwiaW50ZXJzZWN0aW9uTm9uTnVsbCIsImluZGV4T2YiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxTQUFSLENBQWQ7QUFBQSxJQUNNQyxPQUFPRCxRQUFRLGNBQVIsQ0FEYjtBQUFBLElBRU1FLGdCQUFnQkYsUUFBUSxpQkFBUixDQUZ0QjtBQUFBLElBR01HLGlCQUFpQkgsUUFBUSxtQkFBUixDQUh2QjtBQUFBLElB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QnJELHlCQUF5QndDLFlBQXpCLENBQS9COztBQUVBLFVBQUlhLHNCQUFKLEVBQTRCO0FBQzFCdkIsc0NBQThCaEUsS0FBOUI7QUFDRDtBQUNGOztBQUVELFdBQU9nRSwyQkFBUDtBQUNELEdBVm1DLEVBVWpDLElBVmlDLENBQXBDOztBQVlBLFNBQU9BLDJCQUFQO0FBQ0QiLCJmaWxlIjoiZmFjZXRJblhZUGxhbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEZhY2V0ID0gcmVxdWlyZSgnLi9mYWNldCcpLFxuICAgICAgdmVjMyA9IHJlcXVpcmUoJy4vbWF0aHMvdmVjMycpLFxuICAgICAgTGluZUluWFlQbGFuZSA9IHJlcXVpcmUoJy4vbGluZUluWFlQbGFuZScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy92ZXJ0aWNlcycpLFxuICAgICAgcXVhdGVybmlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3F1YXRlcm5pb24nKTtcblxuY29uc3QgeyBhZGQsIHN1YnRyYWN0LCBzY2FsZSwgdHJhbnNmb3JtIH0gPSB2ZWMzLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgcGVybXV0ZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZVJvdGF0aW9uUXVhdGVybmlvbiB9ID0gcXVhdGVybmlvblV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlTm9ybWFsLCByb3RhdGVWZXJ0aWNlcywgdHJhbnNsYXRlVmVydGljZXMgfSA9IHZlcnRpY2VzVXRpbGl0aWVzO1xuXG5jbGFzcyBGYWNldEluWFlQbGFuZSBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgcm90YXRpb25RdWF0ZXJuaW9uLCB0cmFuc2xhdGlvbikge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwpO1xuICAgIFxuICAgIHRoaXMucm90YXRpb25RdWF0ZXJuaW9uID0gcm90YXRpb25RdWF0ZXJuaW9uO1xuXG4gICAgdGhpcy50cmFuc2xhdGlvbiA9IHRyYW5zbGF0aW9uO1xuICB9XG5cbiAgZ2V0Um90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldFRyYW5zbGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uO1xuICB9XG5cbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgY29uc3QgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSB0aGlzLnJvdGF0aW9uUXVhdGVybmlvbjtcblxuICAgIHJldHVybiBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuICBcbiAgZ2V0QmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIGNvbnN0IHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMgPSB0aGlzLnJvdGF0aW9uUXVhdGVybmlvbiwgLy8vXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyA9IHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMubWFwKGZ1bmN0aW9uKHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IChpbmRleCA8IDEpID8gIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArcm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtcm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHM7XG4gICAgICAgICAgICAgIFxuICAgIHJldHVybiBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRGb3J3YXJkc1RyYW5zbGF0aW9uKCkge1xuICAgIGNvbnN0IGZvcndhcmRzVHJhbnNsYXRpb24gPSB0aGlzLnRyYW5zbGF0aW9uO1xuXG4gICAgcmV0dXJuIGZvcndhcmRzVHJhbnNsYXRpb247XG4gIH1cblxuICBnZXRCYWNrd2FyZHNUcmFuc2xhdGlvbigpIHtcbiAgICBjb25zdCB0cmFuc2xhdGlvbkNvbXBvbmVudHMgPSB0aGlzLnRyYW5zbGF0aW9uLCAvLy9cbiAgICAgICAgICBiYWNrd2FyZHNUcmFuc2xhdGlvbkNvbXBvbmVudHMgPSB0cmFuc2xhdGlvbkNvbXBvbmVudHMubWFwKGZ1bmN0aW9uKHRyYW5zbGF0aW9uQ29tcG9uZW50LCBpbmRleCkge1xuICAgICAgICAgICAgY29uc3QgYmFja3dhcmRzVHJhbnNsYXRpb25Db21wb25lbnQgPSAoaW5kZXggPCAyKSA/IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICt0cmFuc2xhdGlvbkNvbXBvbmVudCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtdHJhbnNsYXRpb25Db21wb25lbnQ7XG5cbiAgICAgICAgICAgIHJldHVybiBiYWNrd2FyZHNUcmFuc2xhdGlvbkNvbXBvbmVudDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBiYWNrd2FyZHNUcmFuc2xhdGlvbiA9IGJhY2t3YXJkc1RyYW5zbGF0aW9uQ29tcG9uZW50cztcbiAgICBcbiAgICByZXR1cm4gYmFja3dhcmRzVHJhbnNsYXRpb247XG4gIH1cblxuICBnZXRFZGdlTGluZXNJblhZUGxhbmUoKSB7XG4gICAgY29uc3QgZWRnZUxpbmVzSW5YWVBsYW5lID0gW10sXG4gICAgICAgICAgdmVydGljZXNMZW5ndGggPSAzOyAvLy9cblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2ZXJ0aWNlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LFxuICAgICAgICAgICAgZW5kSW5kZXggPSAoaW5kZXggKyAxKSAlIHZlcnRpY2VzTGVuZ3RoLFxuICAgICAgICAgICAgc3RhcnRWZXJ0ZXggPSB0aGlzLnZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgICAgZW5kVmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgICBlZGdlTGluZUluWFlQbGFuZSA9IExpbmVJblhZUGxhbmUuZnJvbVZlcnRpY2VzKHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuXG4gICAgICBlZGdlTGluZXNJblhZUGxhbmUucHVzaChlZGdlTGluZUluWFlQbGFuZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VMaW5lc0luWFlQbGFuZTtcbiAgfVxuXG4gIHJvdGF0ZShyb3RhdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IG1hdDIgPSByb3RhdGlvbk1hdHJpeDsgIC8vL1xuXG4gICAgdGhpcy52ZXJ0aWNlcyA9IHRoaXMudmVydGljZXMubWFwKGZ1bmN0aW9uKHZlcnRleCkge1xuICAgICAgbGV0IHZlYyA9IHZlcnRleDtcblxuICAgICAgdmVjID0gdHJhbnNmb3JtKHZlYywgbWF0Mik7XG5cbiAgICAgIHZlcnRleCA9IHZlYztcblxuICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICB9KTtcbiAgfVxuXG4gIHBvc3NpYmx5U3BsaXQodmVydGljYWxMaW5lSW5YWVBsYW5lKSB7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9ucyA9IHRoaXMuY2FsY3VsYXRlSW50ZXJzZWN0aW9uc1dpdGhWZXJ0aWNhbExpbmVJblhZUGxhbmUodmVydGljYWxMaW5lSW5YWVBsYW5lKSxcbiAgICAgICAgICBpbnRlcnNlY3Rpb25zSW5jbHVkZXNOdWxsID0gaW50ZXJzZWN0aW9ucy5pbmNsdWRlcyhudWxsKSxcbiAgICAgICAgICBmYWNldHNJblhZUGxhbmUgPSBpbnRlcnNlY3Rpb25zSW5jbHVkZXNOdWxsID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zc2libHlTcGxpdFdpdGhOdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NzaWJseVNwbGl0V2l0aG91dE51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucyk7XG5cbiAgICByZXR1cm4gZmFjZXRzSW5YWVBsYW5lO1xuICB9XG5cbiAgcG9zc2libHlTcGxpdFdpdGhOdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9ucyA9IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIGZpcnN0Tm9uTnVsbEludGVyc2VjdGlvbiA9IGZpcnN0KG5vbk51bGxJbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBmaXJzdE5vbk51bGxJbnRlcnNlY3Rpb25Ob25Ucml2aWFsID0gaXNJbnRlcnNlY3Rpb25Ob25Ucml2aWFsKGZpcnN0Tm9uTnVsbEludGVyc2VjdGlvbiksXG4gICAgICAgICAgZmFjZXRzSW5YWVBsYW5lID0gZmlyc3ROb25OdWxsSW50ZXJzZWN0aW9uTm9uVHJpdmlhbCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwbGl0V2l0aE51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvTm90U3BsaXQoKTtcblxuICAgIHJldHVybiBmYWNldHNJblhZUGxhbmU7XG4gIH1cblxuICBkb05vdFNwbGl0KCkge1xuICAgIGNvbnN0IGZhY2V0SW5YWVBsYW5lID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZhY2V0c0luWFlQbGFuZSA9IFtcbiAgICAgICAgICAgIGZhY2V0SW5YWVBsYW5lXG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiBmYWNldHNJblhZUGxhbmU7XG4gIH1cblxuICBzcGxpdFdpdGhOdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0aWNlc0xlbmd0aCA9IDMsXG4gICAgICAgICAgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHBsYWNlcyA9ICh2ZXJ0aWNlc0xlbmd0aCAtIG51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSB2ZXJ0aWNlc0xlbmd0aDtcblxuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKTtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICB2ZXJ0aWNlcyA9IHBlcm11dGUodmVydGljZXMsIHBsYWNlcyk7XG5cbiAgICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodmVydGljZXMpLFxuICAgICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICAgIG5vbk51bGxJbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgxKSxcbiAgICAgICAgICBmaXJzdE5vbk51bGxJbnRlcnNlY3Rpb24gPSBmaXJzdChub25OdWxsSW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgc2Vjb25kTm9uTnVsbEludGVyc2VjdGlvbiA9IHNlY29uZChub25OdWxsSW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgZmlyc3RJbnRlcm1lZGlhdGVWZXJ0ZXggPSBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXgoc2Vjb25kVmVydGV4LCB0aGlyZFZlcnRleCwgZmlyc3ROb25OdWxsSW50ZXJzZWN0aW9uKSxcbiAgICAgICAgICBzZWNvbmRJbnRlcm1lZGlhdGVWZXJ0ZXggPSBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXgodGhpcmRWZXJ0ZXgsIGZpcnN0VmVydGV4LCBzZWNvbmROb25OdWxsSW50ZXJzZWN0aW9uKSxcbiAgICAgICAgICBmaXJzdFZlcnRpY2VzID0gW1xuICAgICAgICAgICAgZmlyc3RWZXJ0ZXgsXG4gICAgICAgICAgICBzZWNvbmRWZXJ0ZXgsXG4gICAgICAgICAgICBzZWNvbmRJbnRlcm1lZGlhdGVWZXJ0ZXhcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlY29uZFZlcnRpY2VzID0gW1xuICAgICAgICAgICAgc2Vjb25kVmVydGV4LFxuICAgICAgICAgICAgZmlyc3RJbnRlcm1lZGlhdGVWZXJ0ZXgsXG4gICAgICAgICAgICBzZWNvbmRJbnRlcm1lZGlhdGVWZXJ0ZXhcbiAgICAgICAgICBdLFxuICAgICAgICAgIHRoaXJkVmVydGljZXMgPSBbXG4gICAgICAgICAgICBmaXJzdEludGVybWVkaWF0ZVZlcnRleCxcbiAgICAgICAgICAgIHRoaXJkVmVydGV4LFxuICAgICAgICAgICAgc2Vjb25kSW50ZXJtZWRpYXRlVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICAgIGZpcnN0RmFjZXRJblhZUGxhbmUgPSBuZXcgRmFjZXRJblhZUGxhbmUoZmlyc3RWZXJ0aWNlcywgbm9ybWFsLCB0aGlzLnJvdGF0aW9uUXVhdGVybmlvbiwgdGhpcy50cmFuc2xhdGlvbiksXG4gICAgICAgICAgc2Vjb25kRmFjZXRJblhZUGxhbmUgPSBuZXcgRmFjZXRJblhZUGxhbmUoc2Vjb25kVmVydGljZXMsIG5vcm1hbCwgdGhpcy5yb3RhdGlvblF1YXRlcm5pb24sIHRoaXMudHJhbnNsYXRpb24pLFxuICAgICAgICAgIHRoaXJkRmFjZXRJblhZUGxhbmUgPSBuZXcgRmFjZXRJblhZUGxhbmUodGhpcmRWZXJ0aWNlcywgbm9ybWFsLCB0aGlzLnJvdGF0aW9uUXVhdGVybmlvbiwgdGhpcy50cmFuc2xhdGlvbiksXG4gICAgICAgICAgZmFjZXRzSW5YWVBsYW5lID0gW1xuICAgICAgICAgICAgZmlyc3RGYWNldEluWFlQbGFuZSxcbiAgICAgICAgICAgIHNlY29uZEZhY2V0SW5YWVBsYW5lLFxuICAgICAgICAgICAgdGhpcmRGYWNldEluWFlQbGFuZVxuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gZmFjZXRzSW5YWVBsYW5lO1xuICB9XG5cbiAgcG9zc2libHlTcGxpdFdpdGhvdXROdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMpIHtcbiAgICBjb25zdCBub25Ucml2aWFsSW50ZXJzZWN0aW9ucyA9IGNhbGN1bGF0ZU5vblRyaXZpYWxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIG5vblRyaXZpYWxJbnRlcnNlY3Rpb25zTGVuZ3RoID0gbm9uVHJpdmlhbEludGVyc2VjdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIG9uZU5vblRyaXZpYWxJbnRlcnNlY3Rpb24gPSAobm9uVHJpdmlhbEludGVyc2VjdGlvbnNMZW5ndGggPT09IDEpLFxuICAgICAgICAgIGZhY2V0c0luWFlQbGFuZSA9IG9uZU5vblRyaXZpYWxJbnRlcnNlY3Rpb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGxpdFdpdGhPbmVOb25Ucml2aWFsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGxpdFdpdGhUd29Ob25Ucml2aWFsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZhY2V0c0luWFlQbGFuZTtcbiAgfVxuXG4gIHNwbGl0V2l0aE9uZU5vblRyaXZpYWxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucykge1xuICAgIGNvbnN0IHZlcnRpY2VzTGVuZ3RoID0gMyxcbiAgICAgICAgICBub25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOb25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKHZlcnRpY2VzTGVuZ3RoIC0gbm9uVHJpdmlhbEludGVyc2VjdGlvbkluZGV4KSAlIHZlcnRpY2VzTGVuZ3RoO1xuXG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IHBlcm11dGUoaW50ZXJzZWN0aW9ucywgcGxhY2VzKTtcblxuICAgIHZlcnRpY2VzID0gcGVybXV0ZSh2ZXJ0aWNlcywgcGxhY2VzKTtcblxuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3RJbnRlcnNlY3Rpb24gPSBmaXJzdChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBub25Ucml2aWFsSW50ZXJzZWN0aW9uID0gZmlyc3RJbnRlcnNlY3Rpb24sIC8vL1xuICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleCA9IGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleChmaXJzdFZlcnRleCwgc2Vjb25kVmVydGV4LCBub25Ucml2aWFsSW50ZXJzZWN0aW9uKSxcbiAgICAgICAgICBmaXJzdFZlcnRpY2VzID0gW1xuICAgICAgICAgICAgZmlyc3RWZXJ0ZXgsXG4gICAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXgsXG4gICAgICAgICAgICB0aGlyZFZlcnRleFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2Vjb25kVmVydGljZXMgPSBbXG4gICAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXgsXG4gICAgICAgICAgICBzZWNvbmRWZXJ0ZXgsXG4gICAgICAgICAgICB0aGlyZFZlcnRleFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgICBmaXJzdEZhY2V0SW5YWVBsYW5lID0gbmV3IEZhY2V0SW5YWVBsYW5lKGZpcnN0VmVydGljZXMsIG5vcm1hbCwgdGhpcy5yb3RhdGlvblF1YXRlcm5pb24sIHRoaXMudHJhbnNsYXRpb24pLFxuICAgICAgICAgIHNlY29uZEZhY2V0SW5YWVBsYW5lID0gbmV3IEZhY2V0SW5YWVBsYW5lKHNlY29uZFZlcnRpY2VzLCBub3JtYWwsIHRoaXMucm90YXRpb25RdWF0ZXJuaW9uLCB0aGlzLnRyYW5zbGF0aW9uKSxcbiAgICAgICAgICBmYWNldHNJblhZUGxhbmUgPSBbXG4gICAgICAgICAgICBmaXJzdEZhY2V0SW5YWVBsYW5lLFxuICAgICAgICAgICAgc2Vjb25kRmFjZXRJblhZUGxhbmVcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIGZhY2V0c0luWFlQbGFuZTtcbiAgfVxuXG4gIHNwbGl0V2l0aFR3b05vblRyaXZpYWxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucykge1xuICAgIGNvbnN0IHZlcnRpY2VzTGVuZ3RoID0gMyxcbiAgICAgICAgICB0cml2aWFsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVUcml2aWFsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKHZlcnRpY2VzTGVuZ3RoIC0gdHJpdmlhbEludGVyc2VjdGlvbkluZGV4KSAlIHZlcnRpY2VzTGVuZ3RoO1xuXG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IHBlcm11dGUoaW50ZXJzZWN0aW9ucywgcGxhY2VzKTtcblxuICAgIHZlcnRpY2VzID0gcGVybXV0ZSh2ZXJ0aWNlcywgcGxhY2VzKTtcblxuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgbm9uVHJpdmlhbEludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnNsaWNlKDEpLFxuICAgICAgICAgIGZpcnN0Tm9uVHJpdmlhbEludGVyc2VjdGlvbiA9IGZpcnN0KG5vblRyaXZpYWxJbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBzZWNvbmROb25Ucml2aWFsSW50ZXJzZWN0aW9uID0gc2Vjb25kKG5vblRyaXZpYWxJbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBmaXJzdEludGVybWVkaWF0ZVZlcnRleCA9IGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleChzZWNvbmRWZXJ0ZXgsIHRoaXJkVmVydGV4LCBmaXJzdE5vblRyaXZpYWxJbnRlcnNlY3Rpb24pLFxuICAgICAgICAgIHNlY29uZEludGVybWVkaWF0ZVZlcnRleCA9IGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleCh0aGlyZFZlcnRleCwgZmlyc3RWZXJ0ZXgsIHNlY29uZE5vblRyaXZpYWxJbnRlcnNlY3Rpb24pLFxuICAgICAgICAgIGZpcnN0VmVydGljZXMgPSBbXG4gICAgICAgICAgICBmaXJzdFZlcnRleCxcbiAgICAgICAgICAgIHNlY29uZFZlcnRleCxcbiAgICAgICAgICAgIGZpcnN0SW50ZXJtZWRpYXRlVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZWNvbmRWZXJ0aWNlcyA9IFtcbiAgICAgICAgICAgIGZpcnN0VmVydGV4LFxuICAgICAgICAgICAgZmlyc3RJbnRlcm1lZGlhdGVWZXJ0ZXgsXG4gICAgICAgICAgICBzZWNvbmRJbnRlcm1lZGlhdGVWZXJ0ZXhcbiAgICAgICAgICBdLFxuICAgICAgICAgIHRoaXJkVmVydGljZXMgPSBbXG4gICAgICAgICAgICBmaXJzdEludGVybWVkaWF0ZVZlcnRleCxcbiAgICAgICAgICAgIHRoaXJkVmVydGV4LFxuICAgICAgICAgICAgc2Vjb25kSW50ZXJtZWRpYXRlVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICAgIGZpcnN0RmFjZXRJblhZUGxhbmUgPSBuZXcgRmFjZXRJblhZUGxhbmUoZmlyc3RWZXJ0aWNlcywgbm9ybWFsLCB0aGlzLnJvdGF0aW9uUXVhdGVybmlvbiwgdGhpcy50cmFuc2xhdGlvbiksXG4gICAgICAgICAgc2Vjb25kRmFjZXRJblhZUGxhbmUgPSBuZXcgRmFjZXRJblhZUGxhbmUoc2Vjb25kVmVydGljZXMsIG5vcm1hbCwgdGhpcy5yb3RhdGlvblF1YXRlcm5pb24sIHRoaXMudHJhbnNsYXRpb24pLFxuICAgICAgICAgIHRoaXJkRmFjZXRJblhZUGxhbmUgPSBuZXcgRmFjZXRJblhZUGxhbmUodGhpcmRWZXJ0aWNlcywgbm9ybWFsLCB0aGlzLnJvdGF0aW9uUXVhdGVybmlvbiwgdGhpcy50cmFuc2xhdGlvbiksXG4gICAgICAgICAgZmFjZXRzSW5YWVBsYW5lID0gW1xuICAgICAgICAgICAgZmlyc3RGYWNldEluWFlQbGFuZSxcbiAgICAgICAgICAgIHNlY29uZEZhY2V0SW5YWVBsYW5lLFxuICAgICAgICAgICAgdGhpcmRGYWNldEluWFlQbGFuZVxuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gZmFjZXRzSW5YWVBsYW5lO1xuICB9XG5cbiAgY2FsY3VsYXRlSW50ZXJzZWN0aW9uc1dpdGhWZXJ0aWNhbExpbmVJblhZUGxhbmUodmVydGljYWxMaW5lSW5YWVBsYW5lKSB7XG4gICAgY29uc3QgZWRnZUxpbmVzSW5YWVBsYW5lID0gdGhpcy5nZXRFZGdlTGluZXNJblhZUGxhbmUoKSxcbiAgICAgICAgICBpbnRlcnNlY3Rpb25zID0gZWRnZUxpbmVzSW5YWVBsYW5lLm1hcChmdW5jdGlvbihlZGdlTGluZUluWFlQbGFuZSkge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gZWRnZUxpbmVJblhZUGxhbmUuY2FsY3VsYXRlSW50ZXJzZWN0aW9uV2l0aFZlcnRpY2FsTGluZUluWFlQbGFuZSh2ZXJ0aWNhbExpbmVJblhZUGxhbmUpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGludGVyc2VjdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZhY2V0KGZhY2V0KSB7XG4gICAgbGV0IG5vcm1hbCA9IGZhY2V0LmdldE5vcm1hbCgpO1xuICAgIFxuICAgIGNvbnN0IHJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpO1xuXG4gICAgbGV0IHZlcnRpY2VzID0gZmFjZXQuZ2V0VmVydGljZXMoKTtcbiAgICBcbiAgICB2ZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKHZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pO1xuICAgIFxuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gY2FsY3VsYXRlVHJhbnNsYXRpb24odmVydGljZXMpO1xuICAgIFxuICAgIHZlcnRpY2VzID0gdHJhbnNsYXRlVmVydGljZXModmVydGljZXMsIHRyYW5zbGF0aW9uKTtcbiAgICAgICAgXG4gICAgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzKTtcbiAgICBcbiAgICBjb25zdCBmYWNldEluWFlQbGFuZSA9IG5ldyBGYWNldEluWFlQbGFuZSh2ZXJ0aWNlcywgbm9ybWFsLCByb3RhdGlvblF1YXRlcm5pb24sIHRyYW5zbGF0aW9uKTtcblxuICAgIHJldHVybiBmYWNldEluWFlQbGFuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZhY2V0SW5YWVBsYW5lO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVUcmFuc2xhdGlvbih2ZXJ0aWNlcykge1xuICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgdmVydGV4ID0gZmlyc3RWZXJ0ZXgsIC8vL1xuICAgICAgICB2ZXJ0ZXhDb21wb25lbnRzID0gdmVydGV4LCAgLy8vXG4gICAgICAgIHRoaXJkVmVydGV4Q29tcG9uZW50ID0gdGhpcmQodmVydGV4Q29tcG9uZW50cyksXG4gICAgICAgIHogPSB0aGlyZFZlcnRleENvbXBvbmVudCwgLy8vXG4gICAgICAgIHRyYW5zbGF0aW9uID0gWzAsIDAsIC16XTtcblxuICByZXR1cm4gdHJhbnNsYXRpb247XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4LCBub25OdWxsSW50ZXJzZWN0aW9uKSB7XG4gIGNvbnN0IGRpcmVjdGlvbiA9IHN1YnRyYWN0KGVuZFZlcnRleCwgc3RhcnRWZXJ0ZXgpLFxuICAgICAgICBvZmZzZXQgPSBzY2FsZShkaXJlY3Rpb24sIG5vbk51bGxJbnRlcnNlY3Rpb24pLFxuICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXggPSBhZGQoc3RhcnRWZXJ0ZXgsIG9mZnNldCk7XG5cbiAgcmV0dXJuIGludGVybWVkaWF0ZVZlcnRleDtcbn1cblxuZnVuY3Rpb24gaXNJbnRlcnNlY3Rpb25Ucml2aWFsKGludGVyc2VjdGlvbikge1xuICBjb25zdCBpbnRlcnNlY3Rpb25Ob25Ucml2aWFsID0gaXNJbnRlcnNlY3Rpb25Ob25Ucml2aWFsKGludGVyc2VjdGlvbiksXG4gICAgICAgIGludGVyc2VjdGlvblRyaXZpYWwgPSAhaW50ZXJzZWN0aW9uTm9uVHJpdmlhbDtcblxuICByZXR1cm4gaW50ZXJzZWN0aW9uVHJpdmlhbDtcbn1cblxuZnVuY3Rpb24gaXNJbnRlcnNlY3Rpb25Ob25Ucml2aWFsKGludGVyc2VjdGlvbikge1xuICBjb25zdCBpbnRlcnNlY3Rpb25Ob25Ucml2aWFsID0gKChpbnRlcnNlY3Rpb24gPiAwKSAmJiAoaW50ZXJzZWN0aW9uIDwgMSkpO1xuXG4gIHJldHVybiBpbnRlcnNlY3Rpb25Ob25Ucml2aWFsO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24obm9uTnVsbEludGVyc2VjdGlvbnMsIGludGVyc2VjdGlvbikge1xuICAgIGNvbnN0IGludGVyc2VjdGlvbk5vbk51bGwgPSAoaW50ZXJzZWN0aW9uICE9PSBudWxsKTtcblxuICAgIGlmIChpbnRlcnNlY3Rpb25Ob25OdWxsKSB7XG4gICAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uOyAvLy9cblxuICAgICAgbm9uTnVsbEludGVyc2VjdGlvbnMucHVzaChub25OdWxsSW50ZXJzZWN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uTnVsbEludGVyc2VjdGlvbnM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbm9uTnVsbEludGVyc2VjdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vblRyaXZpYWxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3Qgbm9uVHJpdmlhbEludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnJlZHVjZShmdW5jdGlvbihub25Ucml2aWFsSW50ZXJzZWN0aW9ucywgaW50ZXJzZWN0aW9uKSB7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9uTm9uVHJpdmlhbCA9IGlzSW50ZXJzZWN0aW9uTm9uVHJpdmlhbChpbnRlcnNlY3Rpb24pO1xuXG4gICAgaWYgKGludGVyc2VjdGlvbk5vblRyaXZpYWwpIHtcbiAgICAgIGNvbnN0IG5vblRyaXZpYWxJbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb247ICAvLy9cblxuICAgICAgbm9uVHJpdmlhbEludGVyc2VjdGlvbnMucHVzaChub25Ucml2aWFsSW50ZXJzZWN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVHJpdmlhbEludGVyc2VjdGlvbnM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbm9uVHJpdmlhbEludGVyc2VjdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMuaW5kZXhPZihudWxsKTtcblxuICByZXR1cm4gbnVsbEludGVyc2VjdGlvbkluZGV4O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVUcml2aWFsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucykge1xuICBjb25zdCB0cml2aWFsSW50ZXJzZWN0aW9uSW5kZXggPSBpbnRlcnNlY3Rpb25zLnJlZHVjZShmdW5jdGlvbih0cml2aWFsSW50ZXJzZWN0aW9uSW5kZXgsIGludGVyc2VjdGlvbiwgaW5kZXgpIHtcbiAgICBpZiAodHJpdmlhbEludGVyc2VjdGlvbkluZGV4ID09PSBudWxsKSB7XG4gICAgICBjb25zdCBpbnRlcnNlY3Rpb25Ob25Ucml2aWFsID0gaXNJbnRlcnNlY3Rpb25Ucml2aWFsKGludGVyc2VjdGlvbik7XG5cbiAgICAgIGlmIChpbnRlcnNlY3Rpb25Ob25Ucml2aWFsKSB7XG4gICAgICAgIHRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cml2aWFsSW50ZXJzZWN0aW9uSW5kZXg7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiB0cml2aWFsSW50ZXJzZWN0aW9uSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMucmVkdWNlKGZ1bmN0aW9uKG5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkge1xuICAgIGlmIChub25Ucml2aWFsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGludGVyc2VjdGlvbk5vblRyaXZpYWwgPSBpc0ludGVyc2VjdGlvbk5vblRyaXZpYWwoaW50ZXJzZWN0aW9uKTtcblxuICAgICAgaWYgKGludGVyc2VjdGlvbk5vblRyaXZpYWwpIHtcbiAgICAgICAgbm9uVHJpdmlhbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG5vblRyaXZpYWxJbnRlcnNlY3Rpb25JbmRleDtcbn1cbiJdfQ==