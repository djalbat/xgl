'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facet = require('../facet'),
    vectorUtilities = require('../utilities/vector'),
    verticesUtilities = require('../utilities/vertices'),
    imageMapUtilities = require('../utilities/imageMap');

var add2 = vectorUtilities.add2,
    multiply2 = vectorUtilities.multiply2,
    calculateNormal = verticesUtilities.calculateNormal,
    getImageDetails = imageMapUtilities.getImageDetails;

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
      var imageName = this.imageName,
          textureCoordinates = this.textureCoordinates.map(function (textureCoordinates) {
        textureCoordinates = textureCoordinates.slice(); ///

        return textureCoordinates;
      }),
          texturedFacet = TexturedFacet.fromVerticesImageNameAndTextureCoordinates(vertices, imageName, textureCoordinates);

      return texturedFacet;
    }
  }], [{
    key: 'fromVerticesImageNameAndTextureCoordinates',
    value: function fromVerticesImageNameAndTextureCoordinates(vertices, imageName, textureCoordinates) {
      var normal = calculateNormal(vertices),
          texturedFacet = new TexturedFacet(vertices, normal, imageName, textureCoordinates);

      return texturedFacet;
    }
  }, {
    key: 'fromVerticesIndexesImageNameAndTextureCoordinates',
    value: function fromVerticesIndexesImageNameAndTextureCoordinates(vertices, indexes, imageName, textureCoordinates, index) {
      vertices = indexes.map(function (index) {
        return vertices[index];
      }); ///

      textureCoordinates = textureCoordinates.slice(index * 3, index * 3 + 3); ///

      var texturedFacet = TexturedFacet.fromVerticesImageNameAndTextureCoordinates(vertices, imageName, textureCoordinates);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mYWNldC90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJGYWNldCIsInJlcXVpcmUiLCJ2ZWN0b3JVdGlsaXRpZXMiLCJ2ZXJ0aWNlc1V0aWxpdGllcyIsImltYWdlTWFwVXRpbGl0aWVzIiwiYWRkMiIsIm11bHRpcGx5MiIsImNhbGN1bGF0ZU5vcm1hbCIsImdldEltYWdlRGV0YWlscyIsIlRleHR1cmVkRmFjZXQiLCJ2ZXJ0aWNlcyIsIm5vcm1hbCIsImltYWdlTmFtZSIsInRleHR1cmVDb29yZGluYXRlcyIsImdldFZlcnRpY2VzIiwiZ2V0Tm9ybWFsIiwibWFwIiwidmVydGV4Iiwic2xpY2UiLCJ0ZXh0dXJlZEZhY2V0IiwibGVmdCIsImltYWdlRGV0YWlscyIsImJvdHRvbSIsIndpZHRoIiwiaGVpZ2h0IiwidmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzIiwidHJhbnNsYXRlVGV4dHVyZUNvb3JkaW5hdGVzIiwiaW50ZXJzZWN0aW9ucyIsInNtYWxsZXJGYWNldHMiLCJmcm9tVmVydGljZXNJbWFnZU5hbWVBbmRUZXh0dXJlQ29vcmRpbmF0ZXMiLCJpbmRleGVzIiwiaW5kZXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxVQUFSLENBQWQ7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEscUJBQVIsQ0FEeEI7QUFBQSxJQUVNRSxvQkFBb0JGLFFBQVEsdUJBQVIsQ0FGMUI7QUFBQSxJQUdNRyxvQkFBb0JILFFBQVEsdUJBQVIsQ0FIMUI7O0lBS1FJLEksR0FBb0JILGUsQ0FBcEJHLEk7SUFBTUMsUyxHQUFjSixlLENBQWRJLFM7SUFDTkMsZSxHQUFvQkosaUIsQ0FBcEJJLGU7SUFDQUMsZSxHQUFvQkosaUIsQ0FBcEJJLGU7O0lBRUZDLGE7OztBQUNKLHlCQUFZQyxRQUFaLEVBQXNCQyxNQUF0QixFQUE4QkMsU0FBOUIsRUFBeUNDLGtCQUF6QyxFQUE2RDtBQUFB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LGVBQU9yQixTQUFTcUIsS0FBVCxDQUFQO0FBQXlCLE9BQXZELENBQVgsQ0FEZ0gsQ0FDMUM7O0FBRXRFbEIsMkJBQXFCQSxtQkFBbUJLLEtBQW5CLENBQXlCYSxRQUFRLENBQWpDLEVBQW9DQSxRQUFRLENBQVIsR0FBWSxDQUFoRCxDQUFyQixDQUhnSCxDQUd0Qzs7QUFFMUUsVUFBTVosZ0JBQWdCVixjQUFjb0IsMENBQWQsQ0FBeURuQixRQUF6RCxFQUFtRUUsU0FBbkUsRUFBOEVDLGtCQUE5RSxDQUF0Qjs7QUFFQSxhQUFPTSxhQUFQO0FBQ0Q7Ozs7RUE5RXlCbkIsSzs7QUFpRjVCZ0MsT0FBT0MsT0FBUCxHQUFpQnhCLGFBQWpCOztBQUVBLFNBQVNpQiwyQkFBVCxDQUFxQ2Isa0JBQXJDLEVBQXlETyxJQUF6RCxFQUErREUsTUFBL0QsRUFBdUVDLEtBQXZFLEVBQThFQyxNQUE5RSxFQUF1RjtBQUNyRlgsdUJBQXFCQSxtQkFBbUJHLEdBQW5CLENBQXVCLFVBQVNILGtCQUFULEVBQTZCO0FBQUc7QUFDMUVBLHlCQUFxQlIsS0FBS0MsVUFBVU8sa0JBQVYsRUFBOEIsQ0FBRVUsS0FBRixFQUFTQyxNQUFULENBQTlCLENBQUwsRUFBd0QsQ0FBRUosSUFBRixFQUFRRSxNQUFSLENBQXhELENBQXJCOztBQUVBLFdBQU9ULGtCQUFQO0FBQ0QsR0FKb0IsQ0FBckI7O0FBTUEsU0FBT0Esa0JBQVA7QUFDRCIsImZpbGUiOiJ0ZXh0dXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRmFjZXQgPSByZXF1aXJlKCcuLi9mYWNldCcpLFxuICAgICAgdmVjdG9yVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3ZlY3RvcicpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVydGljZXMnKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgYWRkMiwgbXVsdGlwbHkyIH0gPSB2ZWN0b3JVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZU5vcm1hbCB9ID0gdmVydGljZXNVdGlsaXRpZXMsXG4gICAgICB7IGdldEltYWdlRGV0YWlscyB9ID0gaW1hZ2VNYXBVdGlsaXRpZXM7XG5cbmNsYXNzIFRleHR1cmVkRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCk7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKTtcblxuICAgIHZlcnRpY2VzID0gdmVydGljZXMubWFwKGZ1bmN0aW9uKHZlcnRleCkge1xuICAgICAgdmVydGV4ID0gdmVydGV4LnNsaWNlKCk7ICAvLy9cblxuICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICB9KTtcblxuICAgIG5vcm1hbCA9IG5vcm1hbC5zbGljZSgpOyAgLy8vXG5cbiAgICBjb25zdCBpbWFnZU5hbWUgPSB0aGlzLmltYWdlTmFtZSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0aGlzLnRleHR1cmVDb29yZGluYXRlcy5tYXAoZnVuY3Rpb24odGV4dHVyZUNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXMuc2xpY2UoKTsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVzO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIGdldEltYWdlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZU5hbWU7XG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKCkge1xuICAgIGNvbnN0IGltYWdlRGV0YWlscyA9IGdldEltYWdlRGV0YWlscyh0aGlzLmltYWdlTmFtZSksXG4gICAgICAgICAgeyBsZWZ0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlRGV0YWlscyxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMgPSB0cmFuc2xhdGVUZXh0dXJlQ29vcmRpbmF0ZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMsIGxlZnQsIGJvdHRvbSwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICByZXR1cm4gdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgRmFjZXQpIHsgc3VwZXIuc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgdGhpcyk7IH1cblxuICBzcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIEZhY2V0KSB7IHN1cGVyLnNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgdGhpcyk7IH1cblxuICBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBjb25zdCBpbWFnZU5hbWUgPSB0aGlzLmltYWdlTmFtZSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0aGlzLnRleHR1cmVDb29yZGluYXRlcy5tYXAoZnVuY3Rpb24odGV4dHVyZUNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXMuc2xpY2UoKTsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVzO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBUZXh0dXJlZEZhY2V0LmZyb21WZXJ0aWNlc0ltYWdlTmFtZUFuZFRleHR1cmVDb29yZGluYXRlcyh2ZXJ0aWNlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRpY2VzSW1hZ2VOYW1lQW5kVGV4dHVyZUNvb3JkaW5hdGVzKHZlcnRpY2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcykge1xuICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcyksXG4gICAgICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0aWNlc0luZGV4ZXNJbWFnZU5hbWVBbmRUZXh0dXJlQ29vcmRpbmF0ZXModmVydGljZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCBpbmRleCkge1xuICAgIHZlcnRpY2VzID0gaW5kZXhlcy5tYXAoZnVuY3Rpb24oaW5kZXgpIHsgcmV0dXJuIHZlcnRpY2VzW2luZGV4XTsgfSk7ICAvLy9cblxuICAgIHRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVDb29yZGluYXRlcy5zbGljZShpbmRleCAqIDMsIGluZGV4ICogMyArIDMpOyAgLy8vXG5cbiAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gVGV4dHVyZWRGYWNldC5mcm9tVmVydGljZXNJbWFnZU5hbWVBbmRUZXh0dXJlQ29vcmRpbmF0ZXModmVydGljZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRGYWNldDtcblxuZnVuY3Rpb24gdHJhbnNsYXRlVGV4dHVyZUNvb3JkaW5hdGVzKHRleHR1cmVDb29yZGluYXRlcywgbGVmdCwgYm90dG9tLCB3aWR0aCwgaGVpZ2h0ICkge1xuICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXMubWFwKGZ1bmN0aW9uKHRleHR1cmVDb29yZGluYXRlcykgeyAgLy8vXG4gICAgdGV4dHVyZUNvb3JkaW5hdGVzID0gYWRkMihtdWx0aXBseTIodGV4dHVyZUNvb3JkaW5hdGVzLCBbIHdpZHRoLCBoZWlnaHQgXSApLCBbIGxlZnQsIGJvdHRvbSBdKTtcblxuICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gIH0pO1xuXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG59XG4iXX0=