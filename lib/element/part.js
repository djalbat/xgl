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

  function Part(imageMap, imageJSON, colourRenderer, textureRenderer) {
    _classCallCheck(this, Part);

    var _this = _possibleConstructorReturn(this, (Part.__proto__ || Object.getPrototypeOf(Part)).call(this));

    _this.imageMap = imageMap;
    _this.imageJSON = imageJSON;
    _this.colourRenderer = colourRenderer;
    _this.textureRenderer = textureRenderer;
    return _this;
  }

  _createClass(Part, [{
    key: 'render',
    value: function render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      var colourRendererProgram = this.colourRenderer.getProgram(),
          textureRendererProgram = this.textureRenderer.getProgram();

      canvas.useProgram(colourRendererProgram);

      this.colourRenderer.bindBuffers(canvas);

      canvas.render(this.colourRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

      canvas.useProgram(textureRendererProgram);

      this.textureRenderer.bindBuffers(canvas);

      this.textureRenderer.activateTexture(canvas);

      canvas.render(this.textureRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    }
  }, {
    key: 'initialise',
    value: function initialise(canvas) {
      var _this2 = this;

      var transforms = [],
          masked = false;

      this.colourRenderer = ColourRenderer.fromNothing(canvas);
      this.textureRenderer = TextureRenderer.fromImageMapAndImageJSON(this.imageMap, this.imageJSON, canvas);

      this.childElements.forEach(function (childElement) {
        childElement.initialise(_this2.colourRenderer, _this2.textureRenderer, transforms, masked);
      });

      this.colourRenderer.createBuffers(canvas);
      this.textureRenderer.createBuffers(canvas);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var imageMap = properties.imageMap,
          imageJSON = properties.imageJSON,
          colourRenderer = null,
          textureRenderer = null,
          part = Element.fromProperties(Part, properties, imageMap, imageJSON, colourRenderer, textureRenderer);


      return part;
    }
  }]);

  return Part;
}(Element);

module.exports = Part;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3BhcnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJDb2xvdXJSZW5kZXJlciIsIlRleHR1cmVSZW5kZXJlciIsIlBhcnQiLCJpbWFnZU1hcCIsImltYWdlSlNPTiIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiY2FudmFzIiwib2Zmc2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJjb2xvdXJSZW5kZXJlclByb2dyYW0iLCJnZXRQcm9ncmFtIiwidGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSIsInVzZVByb2dyYW0iLCJiaW5kQnVmZmVycyIsInJlbmRlciIsImFjdGl2YXRlVGV4dHVyZSIsInRyYW5zZm9ybXMiLCJtYXNrZWQiLCJmcm9tTm90aGluZyIsImZyb21JbWFnZU1hcEFuZEltYWdlSlNPTiIsImNoaWxkRWxlbWVudHMiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiaW5pdGlhbGlzZSIsImNyZWF0ZUJ1ZmZlcnMiLCJwcm9wZXJ0aWVzIiwicGFydCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEscUJBQVIsQ0FGeEI7O0lBSU1HLEk7OztBQUNKLGdCQUFZQyxRQUFaLEVBQXNCQyxTQUF0QixFQUFpQ0MsY0FBakMsRUFBaURDLGVBQWpELEVBQWtFO0FBQUE7O0FBQUE7O0FBR2hFLFVBQUtILFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxVQUFLQyxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLFVBQUtDLGVBQUwsR0FBdUJBLGVBQXZCO0FBTmdFO0FBT2pFOzs7OzJCQUVNQyxNLEVBQVFDLFksRUFBY0MsYyxFQUFnQkMsYyxFQUFnQkMsZ0IsRUFBa0JDLFksRUFBYztBQUMzRixVQUFNQyx3QkFBd0IsS0FBS1IsY0FBTCxDQUFvQlMsVUFBcEIsRUFBOUI7QUFBQSxVQUNNQyx5QkFBeUIsS0FBS1QsZUFBTCxDQUFxQlEsVUFBckIsRUFEL0I7O0FBR0FQLGFBQU9TLFVBQVAsQ0FBa0JILHFCQUFsQjs7QUFFQSxXQUFLUixjQUFMLENBQW9CWSxXQUFwQixDQUFnQ1YsTUFBaEM7O0FBRUFBLGFBQU9XLE1BQVAsQ0FBYyxLQUFLYixjQUFuQixFQUFtQ0csWUFBbkMsRUFBaURDLGNBQWpELEVBQWlFQyxjQUFqRSxFQUFpRkMsZ0JBQWpGLEVBQW1HQyxZQUFuRzs7QUFFQUwsYUFBT1MsVUFBUCxDQUFrQkQsc0JBQWxCOztBQUVBLFdBQUtULGVBQUwsQ0FBcUJXLFdBQXJCLENBQWlDVixNQUFqQzs7QUFFQSxXQUFLRCxlQUFMLENBQXFCYSxlQUFyQixDQUFxQ1osTUFBckM7O0FBRUFBLGFBQU9XLE1BQVAsQ0FBYyxLQUFLWixlQUFuQixFQUFvQ0UsWUFBcEMsRUFBa0RDLGNBQWxELEVBQWtFQyxjQUFsRSxFQUFrRkMsZ0JBQWxGLEVBQW9HQyxZQUFwRztBQUNEOzs7K0JBRVVMLE0sRUFBUTtBQUFBOztBQUNqQixVQUFNYSxhQUFhLEVBQW5CO0FBQUEsVUFDTUMsU0FBUyxLQURmOztBQUdBLFdBQUtoQixjQUFMLEdBQXNCTCxlQUFlc0IsV0FBZixDQUEyQmYsTUFBM0IsQ0FBdEI7QUFDQSxXQUFLRCxlQUFMLEdBQXVCTCxnQkFBZ0JzQix3QkFBaEIsQ0FBeUMsS0FBS3BCLFFBQTlDLEVBQXdELEtBQUtDLFNBQTdELEVBQXdFRyxNQUF4RSxDQUF2Qjs7QUFFQSxXQUFLaUIsYUFBTCxDQUFtQkMsT0FBbkIsQ0FBMkIsVUFBQ0MsWUFBRCxFQUFrQjtBQUMzQ0EscUJBQWFDLFVBQWIsQ0FBd0IsT0FBS3RCLGNBQTdCLEVBQTZDLE9BQUtDLGVBQWxELEVBQW1FYyxVQUFuRSxFQUErRUMsTUFBL0U7QUFDRCxPQUZEOztBQUlBLFdBQUtoQixjQUFMLENBQW9CdUIsYUFBcEIsQ0FBa0NyQixNQUFsQztBQUNBLFdBQUtELGVBQUwsQ0FBcUJzQixhQUFyQixDQUFtQ3JCLE1BQW5DO0FBQ0Q7OzttQ0FFcUJzQixVLEVBQVk7QUFBQSxVQUN4QjFCLFFBRHdCLEdBQ0EwQixVQURBLENBQ3hCMUIsUUFEd0I7QUFBQSxVQUNkQyxTQURjLEdBQ0F5QixVQURBLENBQ2R6QixTQURjO0FBQUEsVUFFMUJDLGNBRjBCLEdBRVQsSUFGUztBQUFBLFVBRzFCQyxlQUgwQixHQUdSLElBSFE7QUFBQSxVQUkxQndCLElBSjBCLEdBSW5CaEMsUUFBUWlDLGNBQVIsQ0FBdUI3QixJQUF2QixFQUE2QjJCLFVBQTdCLEVBQXlDMUIsUUFBekMsRUFBbURDLFNBQW5ELEVBQThEQyxjQUE5RCxFQUE4RUMsZUFBOUUsQ0FKbUI7OztBQU1oQyxhQUFPd0IsSUFBUDtBQUNEOzs7O0VBbkRnQmhDLE87O0FBc0RuQmtDLE9BQU9DLE9BQVAsR0FBaUIvQixJQUFqQiIsImZpbGUiOiJwYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgQ29sb3VyUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlci9jb2xvdXInKSxcbiAgICAgIFRleHR1cmVSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL3RleHR1cmUnKTtcblxuY2xhc3MgUGFydCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihpbWFnZU1hcCwgaW1hZ2VKU09OLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaW1hZ2VNYXAgPSBpbWFnZU1hcDtcbiAgICB0aGlzLmltYWdlSlNPTiA9IGltYWdlSlNPTjtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbiAgXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICBjb25zdCBjb2xvdXJSZW5kZXJlclByb2dyYW0gPSB0aGlzLmNvbG91clJlbmRlcmVyLmdldFByb2dyYW0oKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJQcm9ncmFtID0gdGhpcy50ZXh0dXJlUmVuZGVyZXIuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0oY29sb3VyUmVuZGVyZXJQcm9ncmFtKTtcblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNhbnZhcy5yZW5kZXIodGhpcy5jb2xvdXJSZW5kZXJlciwgb2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbSh0ZXh0dXJlUmVuZGVyZXJQcm9ncmFtKTtcbiAgICBcbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlci5iaW5kQnVmZmVycyhjYW52YXMpO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyLmFjdGl2YXRlVGV4dHVyZShjYW52YXMpO1xuICAgIFxuICAgIGNhbnZhcy5yZW5kZXIodGhpcy50ZXh0dXJlUmVuZGVyZXIsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICB9XG4gIFxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgIGNvbnN0IHRyYW5zZm9ybXMgPSBbXSxcbiAgICAgICAgICBtYXNrZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBDb2xvdXJSZW5kZXJlci5mcm9tTm90aGluZyhjYW52YXMpO1xuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZU1hcEFuZEltYWdlSlNPTih0aGlzLmltYWdlTWFwLCB0aGlzLmltYWdlSlNPTiwgY2FudmFzKTtcblxuICAgIHRoaXMuY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5pbml0aWFsaXNlKHRoaXMuY29sb3VyUmVuZGVyZXIsIHRoaXMudGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zLCBtYXNrZWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlTWFwLCBpbWFnZUpTT04gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBudWxsLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IG51bGwsXG4gICAgICAgICAgcGFydCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFydCwgcHJvcGVydGllcywgaW1hZ2VNYXAsIGltYWdlSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnQ7XG4iXX0=