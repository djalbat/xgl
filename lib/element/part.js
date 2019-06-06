'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    ColourRenderer = require('../renderer/colour'),
    ImagesTextureRenderer = require('../renderer/texture/images'),
    ImageMapTextureRenderer = require('../renderer/texture/imageMap');

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
      var colourRenderer = ColourRenderer.fromNothing(canvas);

      var textureRenderer = null;

      if (this.images) {
        var imagesTextureRenderer = ImagesTextureRenderer.fromImagesAndImageNames(this.images, this.imageNames, canvas);

        textureRenderer = imagesTextureRenderer; ///
      }

      if (this.imageMap) {
        var imageMapTextureRenderer = ImageMapTextureRenderer.fromImageMapAndImageMapJSON(this.imageMap, this.imageMapJSON, canvas);

        textureRenderer = imageMapTextureRenderer; ///
      }

      var childElements = this.getChildElements();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3BhcnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJDb2xvdXJSZW5kZXJlciIsIkltYWdlc1RleHR1cmVSZW5kZXJlciIsIkltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIiwiUGFydCIsImltYWdlcyIsImltYWdlTWFwIiwiaW1hZ2VOYW1lcyIsImltYWdlTWFwSlNPTiIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiY2FudmFzIiwib2Zmc2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJyZW5kZXIiLCJjcmVhdGVCdWZmZXJzIiwiZnJvbU5vdGhpbmciLCJpbWFnZXNUZXh0dXJlUmVuZGVyZXIiLCJmcm9tSW1hZ2VzQW5kSW1hZ2VOYW1lcyIsImltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIiwiZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiYXBwbHlUcmFuc2Zvcm1zQW5kTWFza3MiLCJwcm9wZXJ0aWVzIiwicGFydCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSx3QkFBd0JGLFFBQVEsNEJBQVIsQ0FGOUI7QUFBQSxJQUdNRywwQkFBMEJILFFBQVEsOEJBQVIsQ0FIaEM7O0lBS01JLEk7OztBQUNKLGdCQUFZQyxNQUFaLEVBQW9CQyxRQUFwQixFQUE4QkMsVUFBOUIsRUFBMENDLFlBQTFDLEVBQXdEQyxjQUF4RCxFQUF3RUMsZUFBeEUsRUFBeUY7QUFBQTs7QUFBQTs7QUFH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QUF1RUMsWUFBdkUsRUFBcUZDLGNBQXJGLEVBQXFHQyxlQUFyRyxDQUptQjs7O0FBTWhDLGFBQU9vQixJQUFQO0FBQ0Q7Ozs7RUE3RGdCL0IsTzs7QUFnRW5CaUMsT0FBT0MsT0FBUCxHQUFpQjdCLElBQWpCIiwiZmlsZSI6InBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBDb2xvdXJSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2NvbG91cicpLFxuICAgICAgSW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvdGV4dHVyZS9pbWFnZXMnKSxcbiAgICAgIEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvdGV4dHVyZS9pbWFnZU1hcCcpO1xuXG5jbGFzcyBQYXJ0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGltYWdlcywgaW1hZ2VNYXAsIGltYWdlTmFtZXMsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcbiAgICB0aGlzLmltYWdlTWFwID0gaW1hZ2VNYXA7XG4gICAgdGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcbiAgICB0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbiAgXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyICYmIHRoaXMuY29sb3VyUmVuZGVyZXIucmVuZGVyKGNhbnZhcywgb2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7ICAvLy9cblxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyICYmIHRoaXMudGV4dHVyZVJlbmRlcmVyLnJlbmRlcihjYW52YXMsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpOyAgLy8vXG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgJiYgdGhpcy5jb2xvdXJSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7IC8vL1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgJiYgdGhpcy50ZXh0dXJlUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpOyAvLy9cbiAgfVxuICBcbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICBjb25zdCBjb2xvdXJSZW5kZXJlciA9IENvbG91clJlbmRlcmVyLmZyb21Ob3RoaW5nKGNhbnZhcyk7XG5cbiAgICBsZXQgdGV4dHVyZVJlbmRlcmVyID0gbnVsbDtcblxuICAgIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgY29uc3QgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZXNBbmRJbWFnZU5hbWVzKHRoaXMuaW1hZ2VzLCB0aGlzLmltYWdlTmFtZXMsIGNhbnZhcyk7XG5cbiAgICAgIHRleHR1cmVSZW5kZXJlciA9IGltYWdlc1RleHR1cmVSZW5kZXJlcjsgIC8vL1xuICAgIH1cblxuICAgIGlmICh0aGlzLmltYWdlTWFwKSB7XG4gICAgICBjb25zdCBpbWFnZU1hcFRleHR1cmVSZW5kZXJlciA9IEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZU1hcEFuZEltYWdlTWFwSlNPTih0aGlzLmltYWdlTWFwLCB0aGlzLmltYWdlTWFwSlNPTiwgY2FudmFzKTtcblxuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXI7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFwcGx5VHJhbnNmb3Jtc0FuZE1hc2tzKCkpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5yZW5kZXIoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikpO1xuXG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG5cbiAgICB0aGlzLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZXMsIGltYWdlTWFwLCBpbWFnZU5hbWVzLCBpbWFnZU1hcEpTT04gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgcGFydCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFydCwgcHJvcGVydGllcywgaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VNYXBKU09OLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydDtcbiJdfQ==