'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    ColourRenderer = require('../renderer/colour'),
    TextureRenderer = require('../renderer/texture');

var Part = function (_Element) {
  _inherits(Part, _Element);

  function Part(images, imageMap, imageNames, imageMapJSON, colourRenderer, textureRenderer) {
    _classCallCheck(this, Part);

    var _this = _possibleConstructorReturn(this, (Part.__proto__ || Object.getPrototypeOf(Part)).call(this));

    _this.images = images;
    _this.imageMap = imageMap;
    _this.imageNames = imageNames;
    _this.imageMapJSON = imageMapJSON;
    _this.colourRenderer = colourRenderer;
    _this.textureRenderer = textureRenderer;
    return _this;
  }

  _createClass(Part, [{
    key: 'render',
    value: function render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      this.colourRenderer.render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

      if (this.textureRenderer !== null) {
        this.textureRenderer.render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
      }
    }
  }, {
    key: 'initialise',
    value: function initialise(canvas) {
      var childElements = this.getChildElements(),
          colourRenderer = ColourRenderer.fromNothing(canvas);

      var textureRenderer = null;

      if (this.images) {
        textureRenderer = TextureRenderer.fromImagesAndImageNames(this.images, this.imageNames, canvas);
      }

      if (this.imageMap) {
        textureRenderer = TextureRenderer.fromImageMapAndImageMapJSON(this.imageMap, this.imageMapJSON, canvas);
      }

      childElements.forEach(function (childElement) {
        return childElement.applyTransformsAndMasks();
      });

      childElements.forEach(function (childElement) {
        return childElement.render(colourRenderer, textureRenderer);
      });

      colourRenderer.createBuffers(canvas);

      if (textureRenderer !== null) {
        textureRenderer.createBuffers(canvas);
      }

      this.colourRenderer = colourRenderer;

      this.textureRenderer = textureRenderer;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var images = properties.images,
          imageMap = properties.imageMap,
          imageNames = properties.imageNames,
          imageMapJSON = properties.imageMapJSON,
          colourRenderer = null,
          textureRenderer = null,
          part = Element.fromProperties(Part, properties, images, imageMap, imageNames, imageMapJSON, colourRenderer, textureRenderer);


      return part;
    }
  }]);

  return Part;
}(Element);

module.exports = Part;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3BhcnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJDb2xvdXJSZW5kZXJlciIsIlRleHR1cmVSZW5kZXJlciIsIlBhcnQiLCJpbWFnZXMiLCJpbWFnZU1hcCIsImltYWdlTmFtZXMiLCJpbWFnZU1hcEpTT04iLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsImNhbnZhcyIsIm9mZnNldE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsTWF0cml4IiwicmVuZGVyIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJmcm9tTm90aGluZyIsImZyb21JbWFnZXNBbmRJbWFnZU5hbWVzIiwiZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OIiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsImFwcGx5VHJhbnNmb3Jtc0FuZE1hc2tzIiwiY3JlYXRlQnVmZmVycyIsInByb3BlcnRpZXMiLCJwYXJ0IiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2QjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSxxQkFBUixDQUZ4Qjs7SUFJTUcsSTs7O0FBQ0osZ0JBQVlDLE1BQVosRUFBb0JDLFFBQXBCLEVBQThCQyxVQUE5QixFQUEwQ0MsWUFBMUMsRUFBd0RDLGNBQXhELEVBQXdFQyxlQUF4RSxFQUF5RjtBQUFBOztBQUFBOztBQUd2RixVQUFLTCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxVQUFLQyxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLFVBQUtDLGVBQUwsR0FBdUJBLGVBQXZCO0FBUnVGO0FBU3hGOzs7OzJCQUVNQyxNLEVBQVFDLFksRUFBY0MsYyxFQUFnQkMsYyxFQUFnQkMsZ0IsRUFBa0JDLFksRUFBYztBQUMzRixXQUFLUCxjQUFMLENBQW9CUSxNQUFwQixDQUEyQk4sTUFBM0IsRUFBbUNDLFlBQW5DLEVBQWlEQyxjQUFqRCxFQUFpRUMsY0FBakUsRUFBaUZDLGdCQUFqRixFQUFtR0MsWUFBbkc7O0FBRUEsVUFBSSxLQUFLTixlQUFMLEtBQXlCLElBQTdCLEVBQW1DO0FBQ2pDLGFBQUtBLGVBQUwsQ0FBcUJPLE1BQXJCLENBQTRCTixNQUE1QixFQUFvQ0MsWUFBcEMsRUFBa0RDLGNBQWxELEVBQWtFQyxjQUFsRSxFQUFrRkMsZ0JBQWxGLEVBQW9HQyxZQUFwRztBQUNEO0FBQ0Y7OzsrQkFFVUwsTSxFQUFRO0FBQ2pCLFVBQU1PLGdCQUFnQixLQUFLQyxnQkFBTCxFQUF0QjtBQUFBLFVBQ01WLGlCQUFpQlAsZUFBZWtCLFdBQWYsQ0FBMkJULE1BQTNCLENBRHZCOztBQUdBLFVBQUlELGtCQUFrQixJQUF0Qjs7QUFFQSxVQUFJLEtBQUtMLE1BQVQsRUFBaUI7QUFDZkssMEJBQWtCUCxnQkFBZ0JrQix1QkFBaEIsQ0FBd0MsS0FBS2hCLE1BQTdDLEVBQXFELEtBQUtFLFVBQTFELEVBQXNFSSxNQUF0RSxDQUFsQjtBQUNEOztBQUVELFVBQUksS0FBS0wsUUFBVCxFQUFtQjtBQUNqQkksMEJBQWtCUCxnQkFBZ0JtQiwyQkFBaEIsQ0FBNEMsS0FBS2hCLFFBQWpELEVBQTJELEtBQUtFLFlBQWhFLEVBQThFRyxNQUE5RSxDQUFsQjtBQUNEOztBQUVETyxvQkFBY0ssT0FBZCxDQUFzQixVQUFDQyxZQUFEO0FBQUEsZUFBa0JBLGFBQWFDLHVCQUFiLEVBQWxCO0FBQUEsT0FBdEI7O0FBRUFQLG9CQUFjSyxPQUFkLENBQXNCLFVBQUNDLFlBQUQ7QUFBQSxlQUFrQkEsYUFBYVAsTUFBYixDQUFvQlIsY0FBcEIsRUFBb0NDLGVBQXBDLENBQWxCO0FBQUEsT0FBdEI7O0FBRUFELHFCQUFlaUIsYUFBZixDQUE2QmYsTUFBN0I7O0FBRUEsVUFBSUQsb0JBQW9CLElBQXhCLEVBQThCO0FBQzVCQSx3QkFBZ0JnQixhQUFoQixDQUE4QmYsTUFBOUI7QUFDRDs7QUFFRCxXQUFLRixjQUFMLEdBQXNCQSxjQUF0Qjs7QUFFQSxXQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUNEOzs7bUNBRXFCaUIsVSxFQUFZO0FBQUEsVUFDeEJ0QixNQUR3QixHQUN1QnNCLFVBRHZCLENBQ3hCdEIsTUFEd0I7QUFBQSxVQUNoQkMsUUFEZ0IsR0FDdUJxQixVQUR2QixDQUNoQnJCLFFBRGdCO0FBQUEsVUFDTkMsVUFETSxHQUN1Qm9CLFVBRHZCLENBQ05wQixVQURNO0FBQUEsVUFDTUMsWUFETixHQUN1Qm1CLFVBRHZCLENBQ01uQixZQUROO0FBQUEsVUFFMUJDLGNBRjBCLEdBRVQsSUFGUztBQUFBLFVBRzFCQyxlQUgwQixHQUdSLElBSFE7QUFBQSxVQUkxQmtCLElBSjBCLEdBSW5CNUIsUUFBUTZCLGNBQVIsQ0FBdUJ6QixJQUF2QixFQUE2QnVCLFVBQTdCLEVBQXlDdEIsTUFBekMsRUFBaURDLFFBQWpELEVBQTJEQyxVQUEzRCxFQUF1RUMsWUFBdkUsRUFBcUZDLGNBQXJGLEVBQXFHQyxlQUFyRyxDQUptQjs7O0FBTWhDLGFBQU9rQixJQUFQO0FBQ0Q7Ozs7RUF4RGdCNUIsTzs7QUEyRG5COEIsT0FBT0MsT0FBUCxHQUFpQjNCLElBQWpCIiwiZmlsZSI6InBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBDb2xvdXJSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2NvbG91cicpLFxuICAgICAgVGV4dHVyZVJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvdGV4dHVyZScpO1xuXG5jbGFzcyBQYXJ0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGltYWdlcywgaW1hZ2VNYXAsIGltYWdlTmFtZXMsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcbiAgICB0aGlzLmltYWdlTWFwID0gaW1hZ2VNYXA7XG4gICAgdGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcbiAgICB0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbiAgXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyLnJlbmRlcihjYW52YXMsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuXG4gICAgaWYgKHRoaXMudGV4dHVyZVJlbmRlcmVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnRleHR1cmVSZW5kZXJlci5yZW5kZXIoY2FudmFzLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgICB9XG4gIH1cbiAgXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gQ29sb3VyUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKTtcblxuICAgIGxldCB0ZXh0dXJlUmVuZGVyZXIgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuaW1hZ2VzKSB7XG4gICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbUltYWdlc0FuZEltYWdlTmFtZXModGhpcy5pbWFnZXMsIHRoaXMuaW1hZ2VOYW1lcywgY2FudmFzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbWFnZU1hcCkge1xuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZU1hcEFuZEltYWdlTWFwSlNPTih0aGlzLmltYWdlTWFwLCB0aGlzLmltYWdlTWFwSlNPTiwgY2FudmFzKTtcbiAgICB9XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFwcGx5VHJhbnNmb3Jtc0FuZE1hc2tzKCkpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5yZW5kZXIoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuXG4gICAgaWYgKHRleHR1cmVSZW5kZXJlciAhPT0gbnVsbCkge1xuICAgICAgdGV4dHVyZVJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZXMsIGltYWdlTWFwLCBpbWFnZU5hbWVzLCBpbWFnZU1hcEpTT04gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgcGFydCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFydCwgcHJvcGVydGllcywgaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VNYXBKU09OLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydDtcbiJdfQ==