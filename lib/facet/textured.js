'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edge = require('../edge'),
    Facet = require('../facet'),
    Normal = require('../normal'),
    Vertex = require('../vertex'),
    arrayUtilities = require('../utilities/array'),
    facetUtilities = require('../utilities/facet'),
    textureUtilities = require('../utilities/texture'),
    verticesUtilities = require('../utilities/vertices');

var _permute = arrayUtilities.permute,
    verticesFromVertexCoordinatesAndIndexes = verticesUtilities.verticesFromVertexCoordinatesAndIndexes,
    cloneEdges = facetUtilities.cloneEdges,
    cloneNormal = facetUtilities.cloneNormal,
    cloneVertices = facetUtilities.cloneVertices,
    calculateEdges = facetUtilities.calculateEdges,
    calculateNormal = facetUtilities.calculateNormal,
    cloneTextureCoordinates = textureUtilities.cloneTextureCoordinates,
    calculateVertexTextureCoordinates = textureUtilities.calculateVertexTextureCoordinates,
    calculateAdjustedTextureCoordinates = textureUtilities.calculateAdjustedTextureCoordinates;

var TexturedFacet = function (_Facet) {
  _inherits(TexturedFacet, _Facet);

  function TexturedFacet(vertices, normal, edges, imageName, textureCoordinates) {
    _classCallCheck(this, TexturedFacet);

    var _this = _possibleConstructorReturn(this, (TexturedFacet.__proto__ || Object.getPrototypeOf(TexturedFacet)).call(this, vertices, normal, edges));

    _this.imageName = imageName;

    _this.textureCoordinates = textureCoordinates;
    return _this;
  }

  _createClass(TexturedFacet, [{
    key: 'clone',
    value: function clone() {
      var vertices = this.getVertices(),
          normal = this.getNormal(),
          edges = this.getEdges();

      vertices = cloneVertices(vertices);
      normal = cloneNormal(normal);
      edges = cloneEdges(edges);

      var imageName = this.imageName,
          textureCoordinates = cloneTextureCoordinates(this.textureCoordinates),
          texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinates);

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
    value: function getVertexTextureCoordinates(imageJSON) {
      var extent = imageJSON[this.imageName],
          left = extent.left,
          bottom = extent.bottom,
          width = extent.width,
          height = extent.height,
          vertexTextureCoordinates = calculateVertexTextureCoordinates(this.textureCoordinates, left, bottom, width, height);


      return vertexTextureCoordinates;
    }
  }, {
    key: 'permute',
    value: function permute(places) {
      _get(TexturedFacet.prototype.__proto__ || Object.getPrototypeOf(TexturedFacet.prototype), 'permute', this).call(this, places);

      this.textureCoordinates = _permute(this.textureCoordinates, places);
    }
  }, {
    key: 'fromVertices',
    value: function fromVertices(vertices) {
      var normal = calculateNormal(vertices, Normal),
          parentVertices = this.vertices,
          ///
      adjustedTextureCoordinates = calculateAdjustedTextureCoordinates(vertices, normal, parentVertices, this.textureCoordinates),
          edges = calculateEdges(vertices, Edge),
          imageName = this.imageName,
          textureCoordinates = adjustedTextureCoordinates,
          ///
      texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinates);

      return texturedFacet;
    }
  }], [{
    key: 'fromVertexCoordinatesImageNameAndTextureCoordinates',
    value: function fromVertexCoordinatesImageNameAndTextureCoordinates(vertexCoordinates, indexes, imageName, textureCoordinates) {
      var vertices = verticesFromVertexCoordinatesAndIndexes(vertexCoordinates, indexes, Vertex),
          normal = calculateNormal(vertices, Normal),
          edges = calculateEdges(vertices, Edge),
          texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinates);

      return texturedFacet;
    }
  }]);

  return TexturedFacet;
}(Facet);

module.exports = TexturedFacet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mYWNldC90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJFZGdlIiwicmVxdWlyZSIsIkZhY2V0IiwiTm9ybWFsIiwiVmVydGV4IiwiYXJyYXlVdGlsaXRpZXMiLCJmYWNldFV0aWxpdGllcyIsInRleHR1cmVVdGlsaXRpZXMiLCJ2ZXJ0aWNlc1V0aWxpdGllcyIsInBlcm11dGUiLCJ2ZXJ0aWNlc0Zyb21WZXJ0ZXhDb29yZGluYXRlc0FuZEluZGV4ZXMiLCJjbG9uZUVkZ2VzIiwiY2xvbmVOb3JtYWwiLCJjbG9uZVZlcnRpY2VzIiwiY2FsY3VsYXRlRWRnZXMiLCJjYWxjdWxhdGVOb3JtYWwiLCJjbG9uZVRleHR1cmVDb29yZGluYXRlcyIsImNhbGN1bGF0ZVZlcnRleFRleHR1cmVDb29yZGluYXRlcyIsImNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVzIiwiVGV4dHVyZWRGYWNldCIsInZlcnRpY2VzIiwibm9ybWFsIiwiZWRnZXMiLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZXMiLCJnZXRWZXJ0aWNlcyIsImdldE5vcm1hbCIsImdldEVkZ2VzIiwidGV4dHVyZWRGYWNldCIsImltYWdlSlNPTiIsImxlZnQiLCJleHRlbnQiLCJib3R0b20iLCJ3aWR0aCIsImhlaWdodCIsInZlcnRleFRleHR1cmVDb29yZGluYXRlcyIsInBsYWNlcyIsInBhcmVudFZlcnRpY2VzIiwiYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZXMiLCJ2ZXJ0ZXhDb29yZGluYXRlcyIsImluZGV4ZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxRQUFRRCxRQUFRLFVBQVIsQ0FEZDtBQUFBLElBRU1FLFNBQVNGLFFBQVEsV0FBUixDQUZmO0FBQUEsSUFHTUcsU0FBU0gsUUFBUSxXQUFSLENBSGY7QUFBQSxJQUlNSSxpQkFBaUJK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QixvQ0FBb0NFLFFBQXBDLEVBQThDQyxNQUE5QyxFQUFzRGdCLGNBQXRELEVBQXNFLEtBQUtiLGtCQUEzRSxDQUZuQztBQUFBLFVBR01GLFFBQVFSLGVBQWVNLFFBQWYsRUFBeUJwQixJQUF6QixDQUhkO0FBQUEsVUFJTXVCLFlBQVksS0FBS0EsU0FKdkI7QUFBQSxVQUtNQyxxQkFBcUJjLDBCQUwzQjtBQUFBLFVBS3dEO0FBQ2xEVixzQkFBZ0IsSUFBSVQsYUFBSixDQUFrQkMsUUFBbEIsRUFBNEJDLE1BQTVCLEVBQW9DQyxLQUFwQyxFQUEyQ0MsU0FBM0MsRUFBc0RDLGtCQUF0RCxDQU50Qjs7QUFRQSxhQUFPSSxhQUFQO0FBQ0Q7Ozt3RUFFMERXLGlCLEVBQW1CQyxPLEVBQVNqQixTLEVBQVdDLGtCLEVBQW9CO0FBQ3BILFVBQU1KLFdBQVdWLHdDQUF3QzZCLGlCQUF4QyxFQUEyREMsT0FBM0QsRUFBb0VwQyxNQUFwRSxDQUFqQjtBQUFBLFVBQ01pQixTQUFTTixnQkFBZ0JLLFFBQWhCLEVBQTBCakIsTUFBMUIsQ0FEZjtBQUFBLFVBRU1tQixRQUFRUixlQUFlTSxRQUFmLEVBQXlCcEIsSUFBekIsQ0FGZDtBQUFBLFVBR000QixnQkFBZ0IsSUFBSVQsYUFBSixDQUFrQkMsUUFBbEIsRUFBNEJDLE1BQTVCLEVBQW9DQyxLQUFwQyxFQUEyQ0MsU0FBM0MsRUFBc0RDLGtCQUF0RCxDQUh0Qjs7QUFLQSxhQUFPSSxhQUFQO0FBQ0Q7Ozs7RUFsRXlCMUIsSzs7QUFxRTVCdUMsT0FBT0MsT0FBUCxHQUFpQnZCLGFBQWpCIiwiZmlsZSI6InRleHR1cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFZGdlID0gcmVxdWlyZSgnLi4vZWRnZScpLFxuICAgICAgRmFjZXQgPSByZXF1aXJlKCcuLi9mYWNldCcpLFxuICAgICAgTm9ybWFsID0gcmVxdWlyZSgnLi4vbm9ybWFsJyksXG4gICAgICBWZXJ0ZXggPSByZXF1aXJlKCcuLi92ZXJ0ZXgnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBmYWNldFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9mYWNldCcpLFxuICAgICAgdGV4dHVyZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy90ZXh0dXJlJyksXG4gICAgICB2ZXJ0aWNlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy92ZXJ0aWNlcycpO1xuXG5jb25zdCB7IHBlcm11dGUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB2ZXJ0aWNlc0Zyb21WZXJ0ZXhDb29yZGluYXRlc0FuZEluZGV4ZXMgfSA9IHZlcnRpY2VzVXRpbGl0aWVzLFxuICAgICAgeyBjbG9uZUVkZ2VzLCBjbG9uZU5vcm1hbCwgY2xvbmVWZXJ0aWNlcywgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9ID0gZmFjZXRVdGlsaXRpZXMsXG4gICAgICB7IGNsb25lVGV4dHVyZUNvb3JkaW5hdGVzLCBjYWxjdWxhdGVWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMsIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVzIH0gPSB0ZXh0dXJlVXRpbGl0aWVzO1xuXG5jbGFzcyBUZXh0dXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVzID0gY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBnZXRJbWFnZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VOYW1lO1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVzKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldFZlcnRleFRleHR1cmVDb29yZGluYXRlcyhpbWFnZUpTT04pIHtcbiAgICBjb25zdCBleHRlbnQgPSBpbWFnZUpTT05bdGhpcy5pbWFnZU5hbWVdLFxuICAgICAgICAgIHsgbGVmdCwgYm90dG9tLCB3aWR0aCwgaGVpZ2h0IH0gPSBleHRlbnQsXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzID0gY2FsY3VsYXRlVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzLCBsZWZ0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgcmV0dXJuIHZlcnRleFRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIHBlcm11dGUocGxhY2VzKSB7XG4gICAgc3VwZXIucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMgPSBwZXJtdXRlKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzLCBwbGFjZXMpO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgIHBhcmVudFZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcywgLy8vXG4gICAgICAgICAgYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZXMgPSBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlcyh2ZXJ0aWNlcywgbm9ybWFsLCBwYXJlbnRWZXJ0aWNlcywgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgIGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlcyA9IGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4Q29vcmRpbmF0ZXNJbWFnZU5hbWVBbmRUZXh0dXJlQ29vcmRpbmF0ZXModmVydGV4Q29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21WZXJ0ZXhDb29yZGluYXRlc0FuZEluZGV4ZXModmVydGV4Q29vcmRpbmF0ZXMsIGluZGV4ZXMsIFZlcnRleCksXG4gICAgICAgICAgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZEZhY2V0O1xuIl19