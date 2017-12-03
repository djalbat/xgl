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

function translateTextureCoordinates(textureCoordinates, left, bottom, width, height) {
  textureCoordinates = add2(multiply2(textureCoordinates, [width, height]), [left, bottom]);

  return textureCoordinates;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsInZlY3RvclV0aWxpdGllcyIsImltYWdlTWFwVXRpbGl0aWVzIiwiYWRkMiIsIm11bHRpcGx5MiIsImdldEltYWdlRGV0YWlscyIsIlRleHR1cmVkQ2FudmFzRWxlbWVudCIsImZhY2V0cyIsInRyYW5zZm9ybSIsInRleHR1cmVDb29yZGluYXRlcyIsImltYWdlTmFtZSIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidHJhbnNmb3JtcyIsIm1hc2tlZCIsInJlbmRlciIsInZlcnRleFBvc2l0aW9ucyIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9ucyIsInZlcnRleEluZGV4ZXMiLCJjYWxjdWxhdGVWZXJ0ZXhJbmRleGVzIiwidmVydGV4Tm9ybWFscyIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbHMiLCJjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZXMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFRleHR1cmVDb29yZGluYXRlcyIsImxlZnQiLCJpbWFnZURldGFpbHMiLCJib3R0b20iLCJ3aWR0aCIsImhlaWdodCIsIm1hcCIsInRyYW5zbGF0ZVRleHR1cmVDb29yZGluYXRlcyIsIkNsYXNzIiwicHJvcGVydGllcyIsInZlcnRpY2VzIiwiaW5kZXhlcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInRleHR1cmVkQ2FudmFzRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxzQkFBUixDQUF0QjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSx3QkFBUixDQUR4QjtBQUFBLElBRU1FLG9CQUFvQkYsUUFBUSwwQkFBUixD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QXJCOztBQUVBLFNBQU9wQixrQkFBUDtBQUNEIiwiZmlsZSI6InRleHR1cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy92ZWN0b3InKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgYWRkMiwgbXVsdGlwbHkyIH0gPSB2ZWN0b3JVdGlsaXRpZXMsXG4gICAgICB7IGdldEltYWdlRGV0YWlscyB9ID0gaW1hZ2VNYXBVdGlsaXRpZXM7XG5cbmNsYXNzIFRleHR1cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihmYWNldHMsIHRyYW5zZm9ybSwgdGV4dHVyZUNvb3JkaW5hdGVzLCBpbWFnZU5hbWUpIHtcbiAgICBzdXBlcihmYWNldHMsIHRyYW5zZm9ybSk7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVDb29yZGluYXRlcztcblxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVzKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuICBcbiAgZ2V0SW1hZ2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmltYWdlTmFtZTtcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zLCBtYXNrZWQpIHtcbiAgICBzdXBlci5jcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcyk7XG4gICAgXG4gICAgaWYgKCFtYXNrZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyKHRleHR1cmVSZW5kZXJlcik7XG4gICAgfVxuICB9XG4gIFxuICByZW5kZXIodGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhJbmRleGVzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlcyA9IHRoaXMuY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVzKCk7XG5cbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFRleHR1cmVDb29yZGluYXRlcyh0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVzKCkge1xuICAgIGNvbnN0IGltYWdlRGV0YWlscyA9IGdldEltYWdlRGV0YWlscyh0aGlzLmltYWdlTmFtZSksXG4gICAgICAgICAgeyBsZWZ0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlRGV0YWlscyxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0aGlzLnRleHR1cmVDb29yZGluYXRlcy5tYXAoZnVuY3Rpb24odGV4dHVyZUNvb3JkaW5hdGVzKSB7IC8vL1xuICAgICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVzID0gdHJhbnNsYXRlVGV4dHVyZUNvb3JkaW5hdGVzKHRleHR1cmVDb29yZGluYXRlcywgbGVmdCwgYm90dG9tLCB3aWR0aCwgaGVpZ2h0ICk7XG5cbiAgICAgICAgICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdmVydGljZXMsIGluZGV4ZXMsIHRleHR1cmVDb29yZGluYXRlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZWRDYW52YXNFbGVtZW50ID0gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdmVydGljZXMsIGluZGV4ZXMsIHRleHR1cmVDb29yZGluYXRlcywgaW1hZ2VOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlZENhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQ7XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZVRleHR1cmVDb29yZGluYXRlcyh0ZXh0dXJlQ29vcmRpbmF0ZXMsIGxlZnQsIGJvdHRvbSwgd2lkdGgsIGhlaWdodCApIHtcbiAgdGV4dHVyZUNvb3JkaW5hdGVzID0gYWRkMihtdWx0aXBseTIodGV4dHVyZUNvb3JkaW5hdGVzLCBbIHdpZHRoLCBoZWlnaHQgXSApLCBbIGxlZnQsIGJvdHRvbSBdKTtcblxuICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVzO1xufVxuIl19