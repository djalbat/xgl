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
    verticesUtilities = require('../utilities/vertices'),
    imageMapUtilities = require('../utilities/imageMap');

var _permute = arrayUtilities.permute,
    getImageDetails = imageMapUtilities.getImageDetails,
    verticesFromVertexCoordinatesAndIndexes = verticesUtilities.verticesFromVertexCoordinatesAndIndexes,
    cloneEdges = facetUtilities.cloneEdges,
    cloneNormal = facetUtilities.cloneNormal,
    cloneVertices = facetUtilities.cloneVertices,
    calculateEdges = facetUtilities.calculateEdges,
    calculateNormal = facetUtilities.calculateNormal,
    cloneTextureCoordinates = textureUtilities.cloneTextureCoordinates,
    calculateVertexTextureCoordinates = textureUtilities.calculateVertexTextureCoordinates,
    calculateAdjustedTextureCoordinates = textureUtilities.calculateAdjustedTextureCoordinates,
    textureCoordinatesFromTextureCoordinatesAndIndex = textureUtilities.textureCoordinatesFromTextureCoordinatesAndIndex;

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
    value: function getVertexTextureCoordinates() {
      var imageDetails = getImageDetails(this.imageName),
          left = imageDetails.left,
          bottom = imageDetails.bottom,
          width = imageDetails.width,
          height = imageDetails.height,
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
    value: function fromVertexCoordinatesImageNameAndTextureCoordinates(vertexCoordinates, indexes, imageName, textureCoordinates, index) {
      textureCoordinates = textureCoordinatesFromTextureCoordinatesAndIndex(textureCoordinates, index); ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mYWNldC90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJFZGdlIiwicmVxdWlyZSIsIkZhY2V0IiwiTm9ybWFsIiwiVmVydGV4IiwiYXJyYXlVdGlsaXRpZXMiLCJmYWNldFV0aWxpdGllcyIsInRleHR1cmVVdGlsaXRpZXMiLCJ2ZXJ0aWNlc1V0aWxpdGllcyIsImltYWdlTWFwVXRpbGl0aWVzIiwicGVybXV0ZSIsImdldEltYWdlRGV0YWlscyIsInZlcnRpY2VzRnJvbVZlcnRleENvb3JkaW5hdGVzQW5kSW5kZXhlcyIsImNsb25lRWRnZXMiLCJjbG9uZU5vcm1hbCIsImNsb25lVmVydGljZXMiLCJjYWxjdWxhdGVFZGdlcyIsImNhbGN1bGF0ZU5vcm1hbCIsImNsb25lVGV4dHVyZUNvb3JkaW5hdGVzIiwiY2FsY3VsYXRlVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzIiwiY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZXMiLCJ0ZXh0dXJlQ29vcmRpbmF0ZXNGcm9tVGV4dHVyZUNvb3JkaW5hdGVzQW5kSW5kZXgiLCJUZXh0dXJlZEZhY2V0IiwidmVydGljZXMiLCJub3JtYWwiLCJlZGdlcyIsImltYWdlTmFtZSIsInRleHR1cmVDb29yZGluYXRlcyIsImdldFZlcnRpY2VzIiwiZ2V0Tm9ybWFsIiwiZ2V0RWRnZXMiLCJ0ZXh0dXJlZEZhY2V0IiwibGVmdCIsImltYWdlRGV0YWlscyIsImJvdHRvbSIsIndpZHRoIiwiaGVpZ2h0IiwidmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzIiwicGxhY2VzIiwicGFyZW50VmVydGljZXMiLCJhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlcyIsInZlcnRleENvb3JkaW5hdGVzIiwiaW5kZXhlcyIsImluZGV4IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxV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QUtBLGFBQU9JLGFBQVA7QUFDRDs7OztFQW5FeUI3QixLOztBQXNFNUIwQyxPQUFPQyxPQUFQLEdBQWlCdkIsYUFBakIiLCJmaWxlIjoidGV4dHVyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuLi9lZGdlJyksXG4gICAgICBGYWNldCA9IHJlcXVpcmUoJy4uL2ZhY2V0JyksXG4gICAgICBOb3JtYWwgPSByZXF1aXJlKCcuLi9ub3JtYWwnKSxcbiAgICAgIFZlcnRleCA9IHJlcXVpcmUoJy4uL3ZlcnRleCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIGZhY2V0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ZhY2V0JyksXG4gICAgICB0ZXh0dXJlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3RleHR1cmUnKSxcbiAgICAgIHZlcnRpY2VzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3ZlcnRpY2VzJyksXG4gICAgICBpbWFnZU1hcFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9pbWFnZU1hcCcpO1xuXG5jb25zdCB7IHBlcm11dGUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBnZXRJbWFnZURldGFpbHMgfSA9IGltYWdlTWFwVXRpbGl0aWVzLFxuICAgICAgeyB2ZXJ0aWNlc0Zyb21WZXJ0ZXhDb29yZGluYXRlc0FuZEluZGV4ZXMgfSA9IHZlcnRpY2VzVXRpbGl0aWVzLFxuICAgICAgeyBjbG9uZUVkZ2VzLCBjbG9uZU5vcm1hbCwgY2xvbmVWZXJ0aWNlcywgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9ID0gZmFjZXRVdGlsaXRpZXMsXG4gICAgICB7IGNsb25lVGV4dHVyZUNvb3JkaW5hdGVzLCBjYWxjdWxhdGVWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMsIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVzLCB0ZXh0dXJlQ29vcmRpbmF0ZXNGcm9tVGV4dHVyZUNvb3JkaW5hdGVzQW5kSW5kZXggfSA9IHRleHR1cmVVdGlsaXRpZXM7XG5cbmNsYXNzIFRleHR1cmVkRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcykge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcblxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVzID0gY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBnZXRJbWFnZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VOYW1lO1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVzKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldFZlcnRleFRleHR1cmVDb29yZGluYXRlcygpIHtcbiAgICBjb25zdCBpbWFnZURldGFpbHMgPSBnZXRJbWFnZURldGFpbHModGhpcy5pbWFnZU5hbWUpLFxuICAgICAgICAgIHsgbGVmdCwgYm90dG9tLCB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZURldGFpbHMsXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzID0gY2FsY3VsYXRlVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzLCBsZWZ0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgcmV0dXJuIHZlcnRleFRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIHBlcm11dGUocGxhY2VzKSB7XG4gICAgc3VwZXIucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMgPSBwZXJtdXRlKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzLCBwbGFjZXMpO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgIHBhcmVudFZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcywgLy8vXG4gICAgICAgICAgYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZXMgPSBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlcyh2ZXJ0aWNlcywgbm9ybWFsLCBwYXJlbnRWZXJ0aWNlcywgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgIGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlcyA9IGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4Q29vcmRpbmF0ZXNJbWFnZU5hbWVBbmRUZXh0dXJlQ29vcmRpbmF0ZXModmVydGV4Q29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCBpbmRleCkge1xuICAgIHRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVDb29yZGluYXRlc0Zyb21UZXh0dXJlQ29vcmRpbmF0ZXNBbmRJbmRleCh0ZXh0dXJlQ29vcmRpbmF0ZXMsIGluZGV4KTsgIC8vL1xuXG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21WZXJ0ZXhDb29yZGluYXRlc0FuZEluZGV4ZXModmVydGV4Q29vcmRpbmF0ZXMsIGluZGV4ZXMsIFZlcnRleCksXG4gICAgICAgICAgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZEZhY2V0O1xuIl19