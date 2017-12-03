'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    arrayUtilities = require('../../utilities/array'),
    vectorUtilities = require('../../utilities/vector'),
    imageMapUtilities = require('../../utilities/imageMap');

var push = arrayUtilities.push,
    add2 = vectorUtilities.add2,
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
      var facets = this.getFacets(),
          imageDetails = getImageDetails(this.imageName),
          left = imageDetails.left,
          bottom = imageDetails.bottom,
          width = imageDetails.width,
          height = imageDetails.height,
          textureCoordinates = facets.reduce(function (textureCoordinates, facet) {
        ///
        push(textureCoordinates, translateTextureCoordinates(this.textureCoordinates, left, bottom, width, height));

        return textureCoordinates;
      }.bind(this), []);


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
  textureCoordinates = textureCoordinates.map(function (textureCoordinates) {
    ///
    textureCoordinates = add2(multiply2(textureCoordinates, [width, height]), [left, bottom]);

    return textureCoordinates;
  });

  return textureCoordinates;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwidmVjdG9yVXRpbGl0aWVzIiwiaW1hZ2VNYXBVdGlsaXRpZXMiLCJwdXNoIiwiYWRkMiIsIm11bHRpcGx5MiIsImdldEltYWdlRGV0YWlscyIsIlRleHR1cmVkQ2FudmFzRWxlbWVudCIsImZhY2V0cyIsInRyYW5zZm9ybSIsInRleHR1cmVDb29yZGluYXRlcyIsImltYWdlTmFtZSIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidHJhbnNmb3JtcyIsIm1hc2tlZCIsInJlbmRlciIsInZlcnRleFBvc2l0aW9ucyIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9ucyIsInZlcnRleEluZGV4ZXMiLCJjYWxjdWxhdGVWZXJ0ZXhJbmRleGVzIiwidmVydGV4Tm9ybWFscyIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbHMiLCJjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZXMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFRleHR1cmVDb29yZGluYXRlcyIsImdldEZhY2V0cyIsImltYWdlRGV0YWlscyIsImxlZnQiLCJib3R0b20iLCJ3aWR0aCIsImhlaWdodCIsInJlZHVjZSIsImZhY2V0IiwidHJhbnNsYXRlVGV4dHVyZUNvb3JkaW5hdGVzIiwiYmluZCIsIkNsYXNzIiwicHJvcGVydGllcyIsInZlcnRpY2VzIiwiaW5kZXhlcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInRleHR1cmVkQ2FudmFzRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxzQkFBUixDQUF0QjtBQUFBLElB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O0FBR04sYUFBT0MscUJBQVA7QUFDRDs7OztFQXZEaUM3QyxhOztBQTBEcEMrQyxPQUFPQyxPQUFQLEdBQWlCdkMscUJBQWpCOztBQUVBLFNBQVM2QiwyQkFBVCxDQUFxQzFCLGtCQUFyQyxFQUF5RG9CLElBQXpELEVBQStEQyxNQUEvRCxFQUF1RUMsS0FBdkUsRUFBOEVDLE1BQTlFLEVBQXVGO0FBQ3JGdkIsdUJBQXFCQSxtQkFBbUJxQyxHQUFuQixDQUF1QixVQUFTckMsa0JBQVQsRUFBNkI7QUFBRztBQUMxRUEseUJBQXFCTixLQUFLQyxVQUFVSyxrQkFBVixFQUE4QixDQUFFc0IsS0FBRixFQUFTQyxNQUFULENBQTlCLENBQUwsRUFBd0QsQ0FBRUgsSUFBRixFQUFRQyxNQUFSLENBQXhELENBQXJCOztBQUVBLFdBQU9yQixrQkFBUDtBQUNELEdBSm9CLENBQXJCOztBQU1BLFNBQU9BLGtCQUFQO0FBQ0QiLCJmaWxlIjoidGV4dHVyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy92ZWN0b3InKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGFkZDIsIG11bHRpcGx5MiB9ID0gdmVjdG9yVXRpbGl0aWVzLFxuICAgICAgeyBnZXRJbWFnZURldGFpbHMgfSA9IGltYWdlTWFwVXRpbGl0aWVzO1xuXG5jbGFzcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZmFjZXRzLCB0cmFuc2Zvcm0sIHRleHR1cmVDb29yZGluYXRlcywgaW1hZ2VOYW1lKSB7XG4gICAgc3VwZXIoZmFjZXRzLCB0cmFuc2Zvcm0pO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcbiAgfVxuXG4gIGdldFRleHR1cmVDb29yZGluYXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gIH1cbiAgXG4gIGdldEltYWdlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZU5hbWU7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3JtcywgbWFza2VkKSB7XG4gICAgc3VwZXIuY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpO1xuICAgIFxuICAgIGlmICghbWFza2VkKSB7XG4gICAgICB0aGlzLnJlbmRlcih0ZXh0dXJlUmVuZGVyZXIpO1xuICAgIH1cbiAgfVxuICBcbiAgcmVuZGVyKHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4SW5kZXhlcygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0aGlzLmNhbGN1bGF0ZVRleHR1cmVDb29yZGluYXRlcygpO1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRUZXh0dXJlQ29vcmRpbmF0ZXModGV4dHVyZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVRleHR1cmVDb29yZGluYXRlcygpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIGltYWdlRGV0YWlscyA9IGdldEltYWdlRGV0YWlscyh0aGlzLmltYWdlTmFtZSksXG4gICAgICAgICAgeyBsZWZ0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlRGV0YWlscyxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBmYWNldHMucmVkdWNlKGZ1bmN0aW9uKHRleHR1cmVDb29yZGluYXRlcywgZmFjZXQpIHsgLy8vXG4gICAgICAgICAgICBwdXNoKHRleHR1cmVDb29yZGluYXRlcywgdHJhbnNsYXRlVGV4dHVyZUNvb3JkaW5hdGVzKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzLCBsZWZ0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQgKSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpLCBbXSk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdmVydGljZXMsIGluZGV4ZXMsIHRleHR1cmVDb29yZGluYXRlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZWRDYW52YXNFbGVtZW50ID0gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdmVydGljZXMsIGluZGV4ZXMsIHRleHR1cmVDb29yZGluYXRlcywgaW1hZ2VOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlZENhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQ7XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZVRleHR1cmVDb29yZGluYXRlcyh0ZXh0dXJlQ29vcmRpbmF0ZXMsIGxlZnQsIGJvdHRvbSwgd2lkdGgsIGhlaWdodCApIHtcbiAgdGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzLm1hcChmdW5jdGlvbih0ZXh0dXJlQ29vcmRpbmF0ZXMpIHsgIC8vL1xuICAgIHRleHR1cmVDb29yZGluYXRlcyA9IGFkZDIobXVsdGlwbHkyKHRleHR1cmVDb29yZGluYXRlcywgWyB3aWR0aCwgaGVpZ2h0IF0gKSwgWyBsZWZ0LCBib3R0b20gXSk7XG5cbiAgICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9KTtcblxuICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVzO1xufVxuIl19