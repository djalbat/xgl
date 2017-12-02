'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    vectorUtilities = require('../../utilities/vector'),
    imageMapUtilities = require('../../utilities/imageMap');

var add2 = vectorUtilities.add2,
    multiply2 = vectorUtilities.multiply2,
    getImageDetails = imageMapUtilities.getImageDetails;

var TexturedCanvasElement = function (_CanvasElement) {
  _inherits(TexturedCanvasElement, _CanvasElement);

  function TexturedCanvasElement(facets, transform, textureCoordinates, imageName) {
    _classCallCheck(this, TexturedCanvasElement);

    var _this = _possibleConstructorReturn(this, (TexturedCanvasElement.__proto__ || Object.getPrototypeOf(TexturedCanvasElement)).call(this, facets, transform));

    _this.textureCoordinates = textureCoordinates;

    _this.imageName = imageName;
    return _this;
  }

  _createClass(TexturedCanvasElement, [{
    key: 'getTextureCoordinates',
    value: function getTextureCoordinates() {
      return this.textureCoordinates;
    }
  }, {
    key: 'getImageName',
    value: function getImageName() {
      return this.imageName;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms, masked) {
      _get(TexturedCanvasElement.prototype.__proto__ || Object.getPrototypeOf(TexturedCanvasElement.prototype), 'create', this).call(this, colourRenderer, textureRenderer, transforms);

      if (!masked) {
        this.render(textureRenderer);
      }
    }
  }, {
    key: 'render',
    value: function render(textureRenderer) {
      var vertexPositions = this.calculateVertexPositions(),
          vertexIndexes = this.calculateVertexIndexes(),
          vertexNormals = this.calculateVertexNormals(),
          textureCoordinates = this.calculateTextureCoordinates();

      textureRenderer.addVertexPositions(vertexPositions);
      textureRenderer.addVertexIndexes(vertexIndexes);
      textureRenderer.addVertexNormals(vertexNormals);
      textureRenderer.addTextureCoordinates(textureCoordinates);
    }
  }, {
    key: 'calculateTextureCoordinates',
    value: function calculateTextureCoordinates() {
      var imageDetails = getImageDetails(this.imageName),
          left = imageDetails.left,
          bottom = imageDetails.bottom,
          width = imageDetails.width,
          height = imageDetails.height,
          textureCoordinates = this.textureCoordinates.map(function (textureCoordinates) {
        ///
        textureCoordinates = translateTextureCoordinates(textureCoordinates, left, bottom, width, height);

        return textureCoordinates;
      });


      return textureCoordinates;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, vertices, indexes, textureCoordinates) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
        remainingArguments[_key - 5] = arguments[_key];
      }

      var imageName = properties.imageName,
          texturedCanvasElement = CanvasElement.fromProperties.apply(CanvasElement, [Class, properties, vertices, indexes, textureCoordinates, imageName].concat(remainingArguments));


      return texturedCanvasElement;
    }
  }]);

  return TexturedCanvasElement;
}(CanvasElement);

module.exports = TexturedCanvasElement;

function translateTextureCoordinates(texturecoordinates, left, bottom, width, height) {
  texturecoordinates = add2(multiply2(texturecoordinates, [width, height]), [left, bottom]);

  return texturecoordinates;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsInZlY3RvclV0aWxpdGllcyIsImltYWdlTWFwVXRpbGl0aWVzIiwiYWRkMiIsIm11bHRpcGx5MiIsImdldEltYWdlRGV0YWlscyIsIlRleHR1cmVkQ2FudmFzRWxlbWVudCIsImZhY2V0cyIsInRyYW5zZm9ybSIsInRleHR1cmVDb29yZGluYXRlcyIsImltYWdlTmFtZSIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidHJhbnNmb3JtcyIsIm1hc2tlZCIsInJlbmRlciIsInZlcnRleFBvc2l0aW9ucyIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9ucyIsInZlcnRleEluZGV4ZXMiLCJjYWxjdWxhdGVWZXJ0ZXhJbmRleGVzIiwidmVydGV4Tm9ybWFscyIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbHMiLCJjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZXMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFRleHR1cmVDb29yZGluYXRlcyIsImxlZnQiLCJpbWFnZURldGFpbHMiLCJib3R0b20iLCJ3aWR0aCIsImhlaWdodCIsIm1hcCIsInRyYW5zbGF0ZVRleHR1cmVDb29yZGluYXRlcyIsIkNsYXNzIiwicHJvcGVydGllcyIsInZlcnRpY2VzIiwiaW5kZXhlcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInRleHR1cmVkQ2FudmFzRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsInRleHR1cmVjb29yZGluYXRlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxzQkFBUixDQUF0QjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSx3QkFBUixDQUR4QjtBQUFBLElBRU1F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LEVBQVFFLE1BQVIsQ0FBeEQsQ0FBckI7O0FBRUEsU0FBT2Msa0JBQVA7QUFDRCIsImZpbGUiOiJ0ZXh0dXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICB2ZWN0b3JVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvdmVjdG9yJyksXG4gICAgICBpbWFnZU1hcFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9pbWFnZU1hcCcpO1xuXG5jb25zdCB7IGFkZDIsIG11bHRpcGx5MiB9ID0gdmVjdG9yVXRpbGl0aWVzLFxuICAgICAgeyBnZXRJbWFnZURldGFpbHMgfSA9IGltYWdlTWFwVXRpbGl0aWVzO1xuXG5jbGFzcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZmFjZXRzLCB0cmFuc2Zvcm0sIHRleHR1cmVDb29yZGluYXRlcywgaW1hZ2VOYW1lKSB7XG4gICAgc3VwZXIoZmFjZXRzLCB0cmFuc2Zvcm0pO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcbiAgfVxuXG4gIGdldFRleHR1cmVDb29yZGluYXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gIH1cbiAgXG4gIGdldEltYWdlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZU5hbWU7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3JtcywgbWFza2VkKSB7XG4gICAgc3VwZXIuY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpO1xuICAgIFxuICAgIGlmICghbWFza2VkKSB7XG4gICAgICB0aGlzLnJlbmRlcih0ZXh0dXJlUmVuZGVyZXIpO1xuICAgIH1cbiAgfVxuICBcbiAgcmVuZGVyKHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4SW5kZXhlcygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0aGlzLmNhbGN1bGF0ZVRleHR1cmVDb29yZGluYXRlcygpO1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRUZXh0dXJlQ29vcmRpbmF0ZXModGV4dHVyZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVRleHR1cmVDb29yZGluYXRlcygpIHtcbiAgICBjb25zdCBpbWFnZURldGFpbHMgPSBnZXRJbWFnZURldGFpbHModGhpcy5pbWFnZU5hbWUpLFxuICAgICAgICAgIHsgbGVmdCwgYm90dG9tLCB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZURldGFpbHMsXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVzID0gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMubWFwKGZ1bmN0aW9uKHRleHR1cmVDb29yZGluYXRlcykgeyAvLy9cbiAgICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlcyA9IHRyYW5zbGF0ZVRleHR1cmVDb29yZGluYXRlcyh0ZXh0dXJlQ29vcmRpbmF0ZXMsIGxlZnQsIGJvdHRvbSwgd2lkdGgsIGhlaWdodCApO1xuXG4gICAgICAgICAgICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVzO1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHZlcnRpY2VzLCBpbmRleGVzLCB0ZXh0dXJlQ29vcmRpbmF0ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgaW1hZ2VOYW1lIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkQ2FudmFzRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHZlcnRpY2VzLCBpbmRleGVzLCB0ZXh0dXJlQ29vcmRpbmF0ZXMsIGltYWdlTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZWRDYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRDYW52YXNFbGVtZW50O1xuXG5mdW5jdGlvbiB0cmFuc2xhdGVUZXh0dXJlQ29vcmRpbmF0ZXModGV4dHVyZWNvb3JkaW5hdGVzLCBsZWZ0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQgKSB7XG4gIHRleHR1cmVjb29yZGluYXRlcyA9IGFkZDIobXVsdGlwbHkyKHRleHR1cmVjb29yZGluYXRlcywgWyB3aWR0aCwgaGVpZ2h0IF0gKSwgWyBsZWZ0LCBib3R0b20gXSk7XG5cbiAgcmV0dXJuIHRleHR1cmVjb29yZGluYXRlcztcbn1cbiJdfQ==