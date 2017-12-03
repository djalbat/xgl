'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facet = require('../facet'),
    arrayUtilities = require('../utilities/array'),
    matrixUtilities = require('../utilities/matrix'),
    vectorUtilities = require('../utilities/vector'),
    verticesUtilities = require('../utilities/vertices'),
    imageMapUtilities = require('../utilities/imageMap'),
    rotationUtilities = require('../utilities/rotation');

var invert2 = matrixUtilities.invert2,
    invert3 = matrixUtilities.invert3,
    getImageDetails = imageMapUtilities.getImageDetails,
    calculateRotationQuaternion = rotationUtilities.calculateRotationQuaternion,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    _permute = arrayUtilities.permute,
    calculateNormal = verticesUtilities.calculateNormal,
    rotateVertices = verticesUtilities.rotateVertices,
    add2 = vectorUtilities.add2,
    multiply2 = vectorUtilities.multiply2,
    transform2 = vectorUtilities.transform2,
    transform3 = vectorUtilities.transform3;

var TexturedFacet = function (_Facet) {
  _inherits(TexturedFacet, _Facet);

  function TexturedFacet(vertices, normal, imageName, textureCoordinates) {
    _classCallCheck(this, TexturedFacet);

    var _this = _possibleConstructorReturn(this, (TexturedFacet.__proto__ || Object.getPrototypeOf(TexturedFacet)).call(this, vertices, normal));

    _this.imageName = imageName;
    _this.textureCoordinates = textureCoordinates;
    return _this;
  }

  _createClass(TexturedFacet, [{
    key: 'clone',
    value: function clone() {
      var vertices = this.getVertices(),
          normal = this.getNormal();

      vertices = vertices.map(function (vertex) {
        vertex = vertex.slice(); ///

        return vertex;
      });

      normal = normal.slice(); ///

      var imageName = this.imageName,
          textureCoordinates = this.textureCoordinates.map(function (textureCoordinates) {
        textureCoordinates = textureCoordinates.slice(); ///

        return textureCoordinates;
      }),
          texturedFacet = new TexturedFacet(vertices, normal, imageName, textureCoordinates);

      return texturedFacet;
    }
  }, {
    key: 'getImageName',
    value: function getImageName() {
      return this.imageName;
    }
  }, {
    key: 'getTextureCoordinates',
    value: function getTextureCoordinates() {
      return this.textureCoordinates;
    }
  }, {
    key: 'getVertexTextureCoordinates',
    value: function getVertexTextureCoordinates() {
      var imageDetails = getImageDetails(this.imageName),
          left = imageDetails.left,
          bottom = imageDetails.bottom,
          width = imageDetails.width,
          height = imageDetails.height,
          vertexTextureCoordinates = translateTextureCoordinates(this.textureCoordinates, left, bottom, width, height);


      return vertexTextureCoordinates;
    }
  }, {
    key: 'permute',
    value: function permute(places) {
      _get(TexturedFacet.prototype.__proto__ || Object.getPrototypeOf(TexturedFacet.prototype), 'permute', this).call(this, places);

      this.textureCoordinates = _permute(this.textureCoordinates, places);
    }
  }, {
    key: 'splitWithTwoNonNullIntersections',
    value: function splitWithTwoNonNullIntersections(intersections, smallerFacets, Facet) {
      _get(TexturedFacet.prototype.__proto__ || Object.getPrototypeOf(TexturedFacet.prototype), 'splitWithTwoNonNullIntersections', this).call(this, intersections, smallerFacets, this);
    }
  }, {
    key: 'splitWithOneNonNullIntersection',
    value: function splitWithOneNonNullIntersection(intersections, smallerFacets, Facet) {
      _get(TexturedFacet.prototype.__proto__ || Object.getPrototypeOf(TexturedFacet.prototype), 'splitWithOneNonNullIntersection', this).call(this, intersections, smallerFacets, this);
    }
  }, {
    key: 'fromVertices',
    value: function fromVertices(vertices) {
      var normal = calculateNormal(vertices),
          imageName = this.imageName,
          parentVertices = this.vertices,
          ///
      textureCoordinates = textureCoordinatesFromVerticesParentVerticesAndTextureCoordinates(vertices, parentVertices, this.textureCoordinates),
          texturedFacet = new TexturedFacet(vertices, normal, imageName, textureCoordinates);

      return texturedFacet;
    }
  }], [{
    key: 'fromVerticesIndexesImageNameAndTextureCoordinates',
    value: function fromVerticesIndexesImageNameAndTextureCoordinates(vertices, indexes, imageName, textureCoordinates, index) {
      vertices = indexes.map(function (index) {
        return vertices[index];
      }); ///

      textureCoordinates = textureCoordinates.slice(index * 3, index * 3 + 3); ///

      var normal = calculateNormal(vertices),
          texturedFacet = new TexturedFacet(vertices, normal, imageName, textureCoordinates);

      return texturedFacet;
    }
  }]);

  return TexturedFacet;
}(Facet);

module.exports = TexturedFacet;

function translateTextureCoordinates(textureCoordinates, left, bottom, width, height) {
  textureCoordinates = textureCoordinates.map(function (textureCoordinates) {
    ///
    textureCoordinates = add2(multiply2(textureCoordinates, [width, height]), [left, bottom]);

    return textureCoordinates;
  });

  return textureCoordinates;
}

function textureCoordinatesFromVerticesParentVerticesAndTextureCoordinates(vertices, parentVertices, textureCoordinates) {
  var normal = calculateNormal(vertices),
      rotationQuaternion = calculateRotationQuaternion(normal),
      verticesInXYPlane = rotateVertices(vertices, rotationQuaternion),
      parentVerticesInXYPlane = rotateVertices(parentVertices, rotationQuaternion),
      firstVertexInXYPlane = first(verticesInXYPlane),
      secondVertexInXYPlane = second(verticesInXYPlane),
      thirdVertexInXYPlane = third(verticesInXYPlane),
      firstParentVertexInXYPlane = first(parentVerticesInXYPlane),
      secondParentVertexInXYPlane = second(parentVerticesInXYPlane),
      thirdParentVertexInXYPlane = third(parentVerticesInXYPlane),
      P1x = firstParentVertexInXYPlane[0],
      ///
  P1y = firstParentVertexInXYPlane[1],
      ///
  P2x = secondParentVertexInXYPlane[0],
      ///
  P2y = secondParentVertexInXYPlane[1],
      ///
  P3x = thirdParentVertexInXYPlane[0],
      ///
  P3y = thirdParentVertexInXYPlane[1],
      ///
  changeOfBasisMatrix = calculateChangeOfBasisMatrix(textureCoordinates),
      xVector = transform3([P1x, P2x, P3x], changeOfBasisMatrix),
      yVector = transform3([P1y, P2y, P3y], changeOfBasisMatrix),
      Ox = xVector[0],
      ///
  Oy = yVector[0],
      ///
  Ux = xVector[1],
      ///
  Uy = yVector[1],
      ///
  Vx = xVector[2],
      ///
  Vy = yVector[2],
      ///
  R1x = firstVertexInXYPlane[0],
      ///
  R1y = firstVertexInXYPlane[1],
      ///
  R2x = secondVertexInXYPlane[0],
      ///
  R2y = secondVertexInXYPlane[1],
      ///
  R3x = thirdVertexInXYPlane[0],
      ///
  R3y = thirdVertexInXYPlane[1],
      ///
  matrix = invert2([Ux, Uy, Vx, Vy]),
      firstTextureCoordinates = transform2([R1x - Ox, R1y - Oy], matrix),
      secondTextureCoordinates = transform2([R2x - Ox, R2y - Oy], matrix),
      thirdTextureCoordinates = transform2([R3x - Ox, R3y - Oy], matrix);

  textureCoordinates = [firstTextureCoordinates, secondTextureCoordinates, thirdTextureCoordinates];

  return textureCoordinates;
}

function calculateChangeOfBasisMatrix(textureCoordinates) {
  var firstTextureCoordinate = first(textureCoordinates),
      secondTextureCoordinate = second(textureCoordinates),
      thirdTextureCoordinate = third(textureCoordinates),
      P1u = firstTextureCoordinate[0],
      ///
  P1v = firstTextureCoordinate[1],
      ///
  P2u = secondTextureCoordinate[0],
      ///
  P2v = secondTextureCoordinate[1],
      ///
  P3u = thirdTextureCoordinate[0],
      ///
  P3v = thirdTextureCoordinate[1],
      ///
  changeOfBasisMatrix = invert3([1, 1, 1, P1u, P2u, P3u, P1v, P2v, P3v]);

  return changeOfBasisMatrix;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mYWNldC90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJGYWNldCIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsIm1hdHJpeFV0aWxpdGllcyIsInZlY3RvclV0aWxpdGllcyIsInZlcnRpY2VzVXRpbGl0aWVzIiwiaW1hZ2VNYXBVdGlsaXRpZXMiLCJyb3RhdGlvblV0aWxpdGllcyIsImludmVydDIiLCJpbnZlcnQzIiwiZ2V0SW1hZ2VEZXRhaWxzIiwiY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uIiwiZmlyc3QiLCJzZWNvbmQiLCJ0aGlyZCIsInBlcm11dGUiLCJjYWxjdWxhdGVOb3JtYWwiLCJyb3RhdGVWZXJ0aWNlcyIsImFkZDIiLCJtdWx0aXBseTIiLCJ0cmFuc2Zvcm0yIiwidHJhbnNmb3JtMyIsIlRleHR1cmVkRmFjZXQiLCJ2ZXJ0aWNlcyIsIm5vcm1hbCIsImltYWdlTmFtZSIsInRleHR1cmVDb29yZGluYXRlcyIsImdldFZlcnRpY2VzIiwiZ2V0Tm9ybWFsIiwibWFwIiwidmVydGV4Iiwic2xpY2UiLCJ0ZXh0dXJlZEZhY2V0IiwibGVmdCIsImltYWdlRGV0YWlscyIsImJvdHRvbSIsIndpZHRoIiwiaGVpZ2h0IiwidmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzIiwidHJhbnNsYXRlVGV4dHVyZUNvb3JkaW5hdGVzIiwicGxhY2VzIiwiaW50ZXJzZWN0aW9ucyIsInNtYWxsZXJGYWNldHMiLCJwYXJlbnRWZXJ0aWNlcyIsInRleHR1cmVDb29yZGluYXRlc0Zyb21WZXJ0aWNlc1BhcmVudFZlcnRpY2VzQW5kVGV4dHVyZUNvb3JkaW5hdGVzIiwiaW5kZXhlcyIsImluZGV4IiwibW9kdWxlIiwiZXhwb3J0cyIsInJvdGF0aW9uUXVhdGVybmlvbiIsInZlcnRpY2VzSW5YWVBsYW5lIiwicGFyZW50VmVydGljZXNJblhZUGxhbmUiLCJmaXJzdFZlcnRleEluWFlQbGFuZSIsInNlY29uZFZlcnRleEluWFlQbGFuZSIsInRoaXJkVmVydGV4SW5YWVBsYW5lIiwiZmlyc3RQYXJlbnRWZXJ0ZXhJblhZUGxhbmUiLCJzZWNvbmRQYXJlbnRWZXJ0ZXhJblhZUGxhbmUiLCJ0aGlyZFBhcmVudFZlcnRleEluWFlQbGFuZSIsIlAxeCIsIlAxeSIsIlAyeCIsIlAyeSIsIlAzeCIsIlAzeSIsImNoYW5nZU9mQmFzaXNNYXRyaXgiLCJjYWxjdWxhdGVDaGFuZ2VPZkJhc2lzTWF0cml4IiwieFZlY3RvciIsInlWZWN0b3IiLCJPeCIsIk95IiwiVXgiLCJVeSIsIlZ4IiwiVnkiLCJSMXgiLCJSMXkiLCJSMngiLCJSMnkiLCJSM3giLCJSM3kiLCJtYXRyaXgiLCJmaXJzdFRleHR1cmVDb29yZGluYXRlcyIsInNlY29uZFRleHR1cmVDb29yZGluYXRlcyIsInRoaXJkVGV4dHVyZUNvb3JkaW5hdGVzIiwiZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZSIsInNlY29uZFRleHR1cmVDb29yZGluYXRlIiwidGhpcmRUZXh0dXJlQ29vcmRpbmF0ZSIsIlAxdSIsIlAxdiIsIlAydSIsIlAydiIsIlAzdSIsIlAzdiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsVUFBUixDQUFkO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBRHZCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLHFCQUFSLENBRnhCO0FBQUEsSUFHTUcsa0JBQWtCSCxRQUFRLHFCQUFSLENBSHhCO0FBQUEsSUFJTUksb0JBQW9CSixRQUFRLHVCQUFSLENBSjFCO0FBQUEsSUFLTUssb0JBQW9CTCxRQUFRLHVCQUFSLENBTDFCO0FBQUEsSUFNTU0sb0JBQW9CTixRQUFRLHVCQUFSLENBTjFCOztJQVFRTyxPLEdBQXFCTCxlLENBQXJCSyxPO0lBQVNDLE8sR0FBWU4sZSxDQUFaTSxPO0lBQ1RDLGUsR0FBb0JKLGlCLENBQXBCSSxlO0lBQ0FDLDJCLEdBQWdDSixpQixDQUFoQ0ksMkI7SUFDQUMsSyxHQUFrQ1YsYyxDQUFsQ1UsSztJQUFPQyxNLEdB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LE1BQW5DLENBbENoQzs7QUFvQ0F0RCx1QkFBcUIsQ0FDbkJ1RCx1QkFEbUIsRUFFbkJDLHdCQUZtQixFQUduQkMsdUJBSG1CLENBQXJCOztBQU1BLFNBQU96RCxrQkFBUDtBQUNEOztBQUVELFNBQVN1Qyw0QkFBVCxDQUFzQ3ZDLGtCQUF0QyxFQUEwRDtBQUN4RCxNQUFNMEQseUJBQXlCeEUsTUFBTWMsa0JBQU4sQ0FBL0I7QUFBQSxNQUNNMkQsMEJBQTBCeEUsT0FBT2Esa0JBQVAsQ0FEaEM7QUFBQSxNQUVNNEQseUJBQXlCeEUsTUFBTVksa0JBQU4sQ0FGL0I7QUFBQSxNQUdNNkQsTUFBTUgsdUJBQXVCLENBQXZCLENBSFo7QUFBQSxNQUd1QztBQUNqQ0ksUUFBTUosdUJBQXVCLENBQXZCLENBSlo7QUFBQSxNQUl1QztBQUNqQ0ssUUFBTUosd0JBQXdCLENBQXhCLENBTFo7QUFBQSxNQUt3QztBQUNsQ0ssUUFBTUwsd0JBQXdCLENBQXhCLENBTlo7QUFBQSxNQU13QztBQUNsQ00sUUFBTUwsdUJBQXVCLENBQXZCLENBUFo7QUFBQSxNQU91QztBQUNqQ00sUUFBTU4sdUJBQXVCLENBQXZCLENBUlo7QUFBQSxNQVF1QztBQUNqQ3RCLHdCQUFzQnZELFFBQVEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVzhFLEdBQVgsRUFBZ0JFLEdBQWhCLEVBQXFCRSxHQUFyQixFQUEwQkgsR0FBMUIsRUFBK0JFLEdBQS9CLEVBQW9DRSxHQUFwQyxDQUFSLENBVDVCOztBQVdBLFNBQU81QixtQkFBUDtBQUNEIiwiZmlsZSI6InRleHR1cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBGYWNldCA9IHJlcXVpcmUoJy4uL2ZhY2V0JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgbWF0cml4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL21hdHJpeCcpLFxuICAgICAgdmVjdG9yVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3ZlY3RvcicpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVydGljZXMnKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyksXG4gICAgICByb3RhdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9yb3RhdGlvbicpO1xuXG5jb25zdCB7IGludmVydDIsIGludmVydDMgfSA9IG1hdHJpeFV0aWxpdGllcyxcbiAgICAgIHsgZ2V0SW1hZ2VEZXRhaWxzIH0gPSBpbWFnZU1hcFV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uIH0gPSByb3RhdGlvblV0aWxpdGllcyxcbiAgICAgIHsgZmlyc3QsIHNlY29uZCwgdGhpcmQsIHBlcm11dGUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVOb3JtYWwsIHJvdGF0ZVZlcnRpY2VzIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcyxcbiAgICAgIHsgYWRkMiwgbXVsdGlwbHkyLCB0cmFuc2Zvcm0yLCB0cmFuc2Zvcm0zIH0gPSB2ZWN0b3JVdGlsaXRpZXM7XG5cbmNsYXNzIFRleHR1cmVkRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCk7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKTtcblxuICAgIHZlcnRpY2VzID0gdmVydGljZXMubWFwKGZ1bmN0aW9uKHZlcnRleCkge1xuICAgICAgdmVydGV4ID0gdmVydGV4LnNsaWNlKCk7ICAvLy9cblxuICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICB9KTtcblxuICAgIG5vcm1hbCA9IG5vcm1hbC5zbGljZSgpOyAgLy8vXG5cbiAgICBjb25zdCBpbWFnZU5hbWUgPSB0aGlzLmltYWdlTmFtZSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0aGlzLnRleHR1cmVDb29yZGluYXRlcy5tYXAoZnVuY3Rpb24odGV4dHVyZUNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXMuc2xpY2UoKTsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVzO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIGdldEltYWdlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZU5hbWU7XG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKCkge1xuICAgIGNvbnN0IGltYWdlRGV0YWlscyA9IGdldEltYWdlRGV0YWlscyh0aGlzLmltYWdlTmFtZSksXG4gICAgICAgICAgeyBsZWZ0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlRGV0YWlscyxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMgPSB0cmFuc2xhdGVUZXh0dXJlQ29vcmRpbmF0ZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMsIGxlZnQsIGJvdHRvbSwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICByZXR1cm4gdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgcGVybXV0ZShwbGFjZXMpIHtcbiAgICBzdXBlci5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlcyA9IHBlcm11dGUodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMsIHBsYWNlcyk7XG4gIH1cblxuICBzcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBGYWNldCkgeyBzdXBlci5zcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCB0aGlzKTsgfVxuXG4gIHNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgRmFjZXQpIHsgc3VwZXIuc3BsaXRXaXRoT25lTm9uTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCB0aGlzKTsgfVxuXG4gIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcyksXG4gICAgICAgICAgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsXG4gICAgICAgICAgcGFyZW50VmVydGljZXMgPSB0aGlzLnZlcnRpY2VzLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXNGcm9tVmVydGljZXNQYXJlbnRWZXJ0aWNlc0FuZFRleHR1cmVDb29yZGluYXRlcyh2ZXJ0aWNlcywgcGFyZW50VmVydGljZXMsIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRpY2VzSW5kZXhlc0ltYWdlTmFtZUFuZFRleHR1cmVDb29yZGluYXRlcyh2ZXJ0aWNlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMsIGluZGV4KSB7XG4gICAgdmVydGljZXMgPSBpbmRleGVzLm1hcChmdW5jdGlvbihpbmRleCkgeyByZXR1cm4gdmVydGljZXNbaW5kZXhdOyB9KTsgIC8vL1xuXG4gICAgdGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzLnNsaWNlKGluZGV4ICogMywgaW5kZXggKiAzICsgMyk7ICAvLy9cblxuICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcyksXG4gICAgICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRGYWNldDtcblxuZnVuY3Rpb24gdHJhbnNsYXRlVGV4dHVyZUNvb3JkaW5hdGVzKHRleHR1cmVDb29yZGluYXRlcywgbGVmdCwgYm90dG9tLCB3aWR0aCwgaGVpZ2h0ICkge1xuICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXMubWFwKGZ1bmN0aW9uKHRleHR1cmVDb29yZGluYXRlcykgeyAgLy8vXG4gICAgdGV4dHVyZUNvb3JkaW5hdGVzID0gYWRkMihtdWx0aXBseTIodGV4dHVyZUNvb3JkaW5hdGVzLCBbIHdpZHRoLCBoZWlnaHQgXSApLCBbIGxlZnQsIGJvdHRvbSBdKTtcblxuICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gIH0pO1xuXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG59XG5cbmZ1bmN0aW9uIHRleHR1cmVDb29yZGluYXRlc0Zyb21WZXJ0aWNlc1BhcmVudFZlcnRpY2VzQW5kVGV4dHVyZUNvb3JkaW5hdGVzKHZlcnRpY2VzLCBwYXJlbnRWZXJ0aWNlcywgdGV4dHVyZUNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcyksXG4gICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpLFxuICAgICAgICB2ZXJ0aWNlc0luWFlQbGFuZSA9IHJvdGF0ZVZlcnRpY2VzKHZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICBwYXJlbnRWZXJ0aWNlc0luWFlQbGFuZSA9IHJvdGF0ZVZlcnRpY2VzKHBhcmVudFZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICBmaXJzdFZlcnRleEluWFlQbGFuZSA9IGZpcnN0KHZlcnRpY2VzSW5YWVBsYW5lKSxcbiAgICAgICAgc2Vjb25kVmVydGV4SW5YWVBsYW5lID0gc2Vjb25kKHZlcnRpY2VzSW5YWVBsYW5lKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXhJblhZUGxhbmUgPSB0aGlyZCh2ZXJ0aWNlc0luWFlQbGFuZSksXG4gICAgICAgIGZpcnN0UGFyZW50VmVydGV4SW5YWVBsYW5lID0gZmlyc3QocGFyZW50VmVydGljZXNJblhZUGxhbmUpLFxuICAgICAgICBzZWNvbmRQYXJlbnRWZXJ0ZXhJblhZUGxhbmUgPSBzZWNvbmQocGFyZW50VmVydGljZXNJblhZUGxhbmUpLFxuICAgICAgICB0aGlyZFBhcmVudFZlcnRleEluWFlQbGFuZSA9IHRoaXJkKHBhcmVudFZlcnRpY2VzSW5YWVBsYW5lKSxcbiAgICAgICAgUDF4ID0gZmlyc3RQYXJlbnRWZXJ0ZXhJblhZUGxhbmVbMF0sIC8vL1xuICAgICAgICBQMXkgPSBmaXJzdFBhcmVudFZlcnRleEluWFlQbGFuZVsxXSwgLy8vXG4gICAgICAgIFAyeCA9IHNlY29uZFBhcmVudFZlcnRleEluWFlQbGFuZVswXSwgLy8vXG4gICAgICAgIFAyeSA9IHNlY29uZFBhcmVudFZlcnRleEluWFlQbGFuZVsxXSwgLy8vXG4gICAgICAgIFAzeCA9IHRoaXJkUGFyZW50VmVydGV4SW5YWVBsYW5lWzBdLCAvLy9cbiAgICAgICAgUDN5ID0gdGhpcmRQYXJlbnRWZXJ0ZXhJblhZUGxhbmVbMV0sIC8vL1xuICAgICAgICBjaGFuZ2VPZkJhc2lzTWF0cml4ID0gY2FsY3VsYXRlQ2hhbmdlT2ZCYXNpc01hdHJpeCh0ZXh0dXJlQ29vcmRpbmF0ZXMpLFxuICAgICAgICB4VmVjdG9yID0gdHJhbnNmb3JtMyhbIFAxeCwgUDJ4LCBQM3ggXSwgY2hhbmdlT2ZCYXNpc01hdHJpeCksXG4gICAgICAgIHlWZWN0b3IgPSB0cmFuc2Zvcm0zKFsgUDF5LCBQMnksIFAzeSBdLCBjaGFuZ2VPZkJhc2lzTWF0cml4KSxcbiAgICAgICAgT3ggPSB4VmVjdG9yWzBdLCAgLy8vXG4gICAgICAgIE95ID0geVZlY3RvclswXSwgIC8vL1xuICAgICAgICBVeCA9IHhWZWN0b3JbMV0sICAvLy9cbiAgICAgICAgVXkgPSB5VmVjdG9yWzFdLCAgLy8vXG4gICAgICAgIFZ4ID0geFZlY3RvclsyXSwgIC8vL1xuICAgICAgICBWeSA9IHlWZWN0b3JbMl0sICAvLy9cbiAgICAgICAgUjF4ID0gZmlyc3RWZXJ0ZXhJblhZUGxhbmVbMF0sICAvLy9cbiAgICAgICAgUjF5ID0gZmlyc3RWZXJ0ZXhJblhZUGxhbmVbMV0sICAvLy9cbiAgICAgICAgUjJ4ID0gc2Vjb25kVmVydGV4SW5YWVBsYW5lWzBdLCAvLy9cbiAgICAgICAgUjJ5ID0gc2Vjb25kVmVydGV4SW5YWVBsYW5lWzFdLCAvLy9cbiAgICAgICAgUjN4ID0gdGhpcmRWZXJ0ZXhJblhZUGxhbmVbMF0sICAvLy9cbiAgICAgICAgUjN5ID0gdGhpcmRWZXJ0ZXhJblhZUGxhbmVbMV0sICAvLy9cbiAgICAgICAgbWF0cml4ID0gaW52ZXJ0MihbIFV4LCBVeSwgVngsIFZ5IF0pLFxuICAgICAgICBmaXJzdFRleHR1cmVDb29yZGluYXRlcyA9IHRyYW5zZm9ybTIoWyBSMXggLSBPeCwgUjF5IC0gT3kgXSwgbWF0cml4KSxcbiAgICAgICAgc2Vjb25kVGV4dHVyZUNvb3JkaW5hdGVzID0gdHJhbnNmb3JtMihbIFIyeCAtIE94LCBSMnkgLSBPeSBdLCBtYXRyaXgpLFxuICAgICAgICB0aGlyZFRleHR1cmVDb29yZGluYXRlcyA9IHRyYW5zZm9ybTIoWyBSM3ggLSBPeCwgUjN5IC0gT3kgXSwgbWF0cml4KTtcblxuICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBbXG4gICAgZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZXMsXG4gICAgc2Vjb25kVGV4dHVyZUNvb3JkaW5hdGVzLFxuICAgIHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVzLFxuICBdO1xuXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUNoYW5nZU9mQmFzaXNNYXRyaXgodGV4dHVyZUNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IGZpcnN0VGV4dHVyZUNvb3JkaW5hdGUgPSBmaXJzdCh0ZXh0dXJlQ29vcmRpbmF0ZXMpLFxuICAgICAgICBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZSA9IHNlY29uZCh0ZXh0dXJlQ29vcmRpbmF0ZXMpLFxuICAgICAgICB0aGlyZFRleHR1cmVDb29yZGluYXRlID0gdGhpcmQodGV4dHVyZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgUDF1ID0gZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZVswXSwgLy8vXG4gICAgICAgIFAxdiA9IGZpcnN0VGV4dHVyZUNvb3JkaW5hdGVbMV0sIC8vL1xuICAgICAgICBQMnUgPSBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZVswXSwgLy8vXG4gICAgICAgIFAydiA9IHNlY29uZFRleHR1cmVDb29yZGluYXRlWzFdLCAvLy9cbiAgICAgICAgUDN1ID0gdGhpcmRUZXh0dXJlQ29vcmRpbmF0ZVswXSwgLy8vXG4gICAgICAgIFAzdiA9IHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVbMV0sIC8vL1xuICAgICAgICBjaGFuZ2VPZkJhc2lzTWF0cml4ID0gaW52ZXJ0MyhbIDEsIDEsIDEsIFAxdSwgUDJ1LCBQM3UsIFAxdiwgUDJ2LCBQM3YgXSk7XG5cbiAgcmV0dXJuIGNoYW5nZU9mQmFzaXNNYXRyaXg7XG59XG4iXX0=