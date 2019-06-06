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
      this.colourRenderer && this.colourRenderer.render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix); ///

      this.textureRenderer && this.textureRenderer.render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix); ///
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      this.colourRenderer && this.colourRenderer.createBuffers(canvas); ///

      this.textureRenderer && this.textureRenderer.createBuffers(canvas); ///
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

      this.colourRenderer = colourRenderer;

      this.textureRenderer = textureRenderer;

      this.createBuffers(canvas);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3BhcnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJDb2xvdXJSZW5kZXJlciIsIlRleHR1cmVSZW5kZXJlciIsIlBhcnQiLCJpbWFnZXMiLCJpbWFnZU1hcCIsImltYWdlTmFtZXMiLCJpbWFnZU1hcEpTT04iLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsImNhbnZhcyIsIm9mZnNldE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsTWF0cml4IiwicmVuZGVyIiwiY3JlYXRlQnVmZmVycyIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZnJvbU5vdGhpbmciLCJmcm9tSW1hZ2VzQW5kSW1hZ2VOYW1lcyIsImZyb21JbWFnZU1hcEFuZEltYWdlTWFwSlNPTiIsImZvckVhY2giLCJjaGlsZEVsZW1lbnQiLCJhcHBseVRyYW5zZm9ybXNBbmRNYXNrcyIsInByb3BlcnRpZXMiLCJwYXJ0IiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2QjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSxxQkFBUixDQUZ4Qjs7SUFJTUcsSTs7O0FBQ0osZ0JBQVlDLE1BQVosRUFBb0JDLFFBQXBCLEVBQThCQyxVQUE5QixFQUEwQ0MsWUFBMUMsRUFBd0RDLGNBQXhELEVBQXdFQyxlQUF4RSxFQUF5RjtBQUFBOztBQUFBOztBQUd2RixVQUFLTCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxVQUFLQyxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLFVBQUtDLGVBQUwsR0FBdUJBLGVBQXZCO0FBUnVGO0FBU3hGOzs7OzJCQUVNQyxNLEVBQVFDLFksRUFBY0MsYyxFQUFnQkMsYyxFQUFnQkMsZ0IsRUFBa0JDLFksRUFBYztBQUMzRixXQUFLUCxjQUFMLElBQXVCLEtBQUtBLGNBQUwsQ0FBb0JRLE1BQXBCLENBQTJCTixNQUEzQixFQUFtQ0MsWUFBbkMsRUFBaURDLGNBQWpELEVBQWlFQyxjQUFqRSxFQUFpRkMsZ0JBQWpGLEVBQW1HQyxZQUFuRyxDQUF2QixDQUQyRixDQUMrQzs7QUFFMUksV0FBS04sZUFBTCxJQUF3QixLQUFLQSxlQUFMLENBQXFCTyxNQUFyQixDQUE0Qk4sTUFBNUIsRUFBb0NDLFlBQXBDLEVBQWtEQyxjQUFsRCxFQUFrRUMsY0FBbEUsRUFBa0ZDLGdCQUFsRixFQUFvR0MsWUFBcEcsQ0FBeEIsQ0FIMkYsQ0FHaUQ7QUFDN0k7OztrQ0FFYUwsTSxFQUFRO0FBQ3BCLFdBQUtGLGNBQUwsSUFBdUIsS0FBS0EsY0FBTCxDQUFvQlMsYUFBcEIsQ0FBa0NQLE1BQWxDLENBQXZCLENBRG9CLENBQzhDOztBQUVsRSxXQUFLRCxlQUFMLElBQXdCLEtBQUtBLGVBQUwsQ0FBcUJRLGFBQXJCLENBQW1DUCxNQUFuQyxDQUF4QixDQUhvQixDQUdnRDtBQUNyRTs7OytCQUVVQSxNLEVBQVE7QUFDakIsVUFBTVEsZ0JBQWdCLEtBQUtDLGdCQUFMLEVBQXRCO0FBQUEsVUFDTVgsaUJBQWlCUCxlQUFlbUIsV0FBZixDQUEyQlYsTUFBM0IsQ0FEdkI7O0FBR0EsVUFBSUQsa0JBQWtCLElBQXRCOztBQUVBLFVBQUksS0FBS0wsTUFBVCxFQUFpQjtBQUNmSywwQkFBa0JQLGdCQUFnQm1CLHVCQUFoQixDQUF3QyxLQUFLakIsTUFBN0MsRUFBcUQsS0FBS0UsVUFBMUQsRUFBc0VJLE1BQXRFLENBQWxCO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLTCxRQUFULEVBQW1CO0FBQ2pCSSwwQkFBa0JQLGdCQUFnQm9CLDJCQUFoQixDQUE0QyxLQUFLakIsUUFBakQsRUFBMkQsS0FBS0UsWUFBaEUsRUFBOEVHLE1BQTlFLENBQWxCO0FBQ0Q7O0FBRURRLG9CQUFjSyxPQUFkLENBQXNCLFVBQUNDLFlBQUQ7QUFBQSxlQUFrQkEsYUFBYUMsdUJBQWIsRUFBbEI7QUFBQSxPQUF0Qjs7QUFFQVAsb0JBQWNLLE9BQWQsQ0FBc0IsVUFBQ0MsWUFBRDtBQUFBLGVBQWtCQSxhQUFhUixNQUFiLENBQW9CUixjQUFwQixFQUFvQ0MsZUFBcEMsQ0FBbEI7QUFBQSxPQUF0Qjs7QUFFQSxXQUFLRCxjQUFMLEdBQXNCQSxjQUF0Qjs7QUFFQSxXQUFLQyxlQUFMLEdBQXVCQSxlQUF2Qjs7QUFFQSxXQUFLUSxhQUFMLENBQW1CUCxNQUFuQjtBQUNEOzs7bUNBRXFCZ0IsVSxFQUFZO0FBQUEsVUFDeEJ0QixNQUR3QixHQUN1QnNCLFVBRHZCLENBQ3hCdEIsTUFEd0I7QUFBQSxVQUNoQkMsUUFEZ0IsR0FDdUJxQixVQUR2QixDQUNoQnJCLFFBRGdCO0FBQUEsVUFDTkMsVUFETSxHQUN1Qm9CLFVBRHZCLENBQ05wQixVQURNO0FBQUEsVUFDTUMsWUFETixHQUN1Qm1CLFVBRHZCLENBQ01uQixZQUROO0FBQUEsVUFFMUJDLGNBRjBCLEdBRVQsSUFGUztBQUFBLFVBRzFCQyxlQUgwQixHQUdSLElBSFE7QUFBQSxVQUkxQmtCLElBSjBCLEdBSW5CNUIsUUFBUTZCLGNBQVIsQ0FBdUJ6QixJQUF2QixFQUE2QnVCLFVBQTdCLEVBQXlDdEIsTUFBekMsRUFBaURDLFFBQWpELEVBQTJEQyxVQUEzRCxFQUF1RUMsWUFBdkUsRUFBcUZDLGNBQXJGLEVBQXFHQyxlQUFyRyxDQUptQjs7O0FBTWhDLGFBQU9rQixJQUFQO0FBQ0Q7Ozs7RUF4RGdCNUIsTzs7QUEyRG5COEIsT0FBT0MsT0FBUCxHQUFpQjNCLElBQWpCIiwiZmlsZSI6InBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBDb2xvdXJSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2NvbG91cicpLFxuICAgICAgVGV4dHVyZVJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvdGV4dHVyZScpO1xuXG5jbGFzcyBQYXJ0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGltYWdlcywgaW1hZ2VNYXAsIGltYWdlTmFtZXMsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcbiAgICB0aGlzLmltYWdlTWFwID0gaW1hZ2VNYXA7XG4gICAgdGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcbiAgICB0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbiAgXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyICYmIHRoaXMuY29sb3VyUmVuZGVyZXIucmVuZGVyKGNhbnZhcywgb2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7ICAvLy9cblxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyICYmIHRoaXMudGV4dHVyZVJlbmRlcmVyLnJlbmRlcihjYW52YXMsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpOyAgLy8vXG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgJiYgdGhpcy5jb2xvdXJSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7IC8vL1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgJiYgdGhpcy50ZXh0dXJlUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpOyAvLy9cbiAgfVxuICBcbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBDb2xvdXJSZW5kZXJlci5mcm9tTm90aGluZyhjYW52YXMpO1xuXG4gICAgbGV0IHRleHR1cmVSZW5kZXJlciA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5pbWFnZXMpIHtcbiAgICAgIHRleHR1cmVSZW5kZXJlciA9IFRleHR1cmVSZW5kZXJlci5mcm9tSW1hZ2VzQW5kSW1hZ2VOYW1lcyh0aGlzLmltYWdlcywgdGhpcy5pbWFnZU5hbWVzLCBjYW52YXMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmltYWdlTWFwKSB7XG4gICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKHRoaXMuaW1hZ2VNYXAsIHRoaXMuaW1hZ2VNYXBKU09OLCBjYW52YXMpO1xuICAgIH1cblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYXBwbHlUcmFuc2Zvcm1zQW5kTWFza3MoKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LnJlbmRlcihjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSk7XG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcblxuICAgIHRoaXMuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlcywgaW1hZ2VNYXAsIGltYWdlTmFtZXMsIGltYWdlTWFwSlNPTiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IG51bGwsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICBwYXJ0ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhQYXJ0LCBwcm9wZXJ0aWVzLCBpbWFnZXMsIGltYWdlTWFwLCBpbWFnZU5hbWVzLCBpbWFnZU1hcEpTT04sIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0O1xuIl19