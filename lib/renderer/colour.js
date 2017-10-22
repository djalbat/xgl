'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Renderer = require('../renderer'),
    ColourRendererData = require('../rendererData/colour'),
    vertexShaderSource = require('./source/colour/vertexShader'),
    fragmentShaderSource = require('./source/colour/fragmentShader'),
    ColourUniformLocations = require('./locations/colour/uniform'),
    ColourAttributeLocations = require('./locations/colour/attribute');

var createProgram = Renderer.createProgram;

var ColourRenderer = function (_Renderer) {
  _inherits(ColourRenderer, _Renderer);

  function ColourRenderer(program, uniformLocations, attributeLocations, rendererData) {
    _classCallCheck(this, ColourRenderer);

    var _this = _possibleConstructorReturn(this, (ColourRenderer.__proto__ || Object.getPrototypeOf(ColourRenderer)).call(this, program, uniformLocations, attributeLocations, rendererData));

    _this.vertexColoursBuffer = null; ///
    return _this;
  }

  _createClass(ColourRenderer, [{
    key: 'getVertexColourAttributeLocation',
    value: function getVertexColourAttributeLocation() {
      var attributeLocations = this.getAttributeLocations(),
          vertexColourAttributeLocation = attributeLocations.getVertexColourAttributeLocation();

      return vertexColourAttributeLocation;
    }
  }, {
    key: 'addVertexColours',
    value: function addVertexColours(vertexColours) {
      this.rendererData.addVertexColours(vertexColours);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      var vertexColoursData = this.rendererData.getVertexColoursData();

      this.vertexColoursBuffer = canvas.createBuffer(vertexColoursData);

      _get(ColourRenderer.prototype.__proto__ || Object.getPrototypeOf(ColourRenderer.prototype), 'createBuffers', this).call(this, canvas);
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers(canvas) {
      var vertexColourAttributeLocation = this.getVertexColourAttributeLocation(),
          vertexColourComponents = 4;

      canvas.bindBuffer(this.vertexColoursBuffer, vertexColourAttributeLocation, vertexColourComponents);

      _get(ColourRenderer.prototype.__proto__ || Object.getPrototypeOf(ColourRenderer.prototype), 'bindBuffers', this).call(this, canvas);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var program = createProgram(vertexShaderSource, fragmentShaderSource, canvas),
          uniformLocations = ColourUniformLocations.fromProgram(program, canvas),
          attributeLocations = ColourAttributeLocations.fromProgram(program, canvas),
          colourRendererData = ColourRendererData.fromNothing(),
          rendererData = colourRendererData,
          ///
      colourRenderer = new ColourRenderer(program, uniformLocations, attributeLocations, rendererData);

      return colourRenderer;
    }
  }]);

  return ColourRenderer;
}(Renderer);

module.exports = ColourRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9yZW5kZXJlci9jb2xvdXIuanMiXSwibmFtZXMiOlsiUmVuZGVyZXIiLCJyZXF1aXJlIiwiQ29sb3VyUmVuZGVyZXJEYXRhIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJDb2xvdXJVbmlmb3JtTG9jYXRpb25zIiwiQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIiwiY3JlYXRlUHJvZ3JhbSIsIkNvbG91clJlbmRlcmVyIiwicHJvZ3JhbSIsInVuaWZvcm1Mb2NhdGlvbnMiLCJhdHRyaWJ1dGVMb2NhdGlvbnMiLCJyZW5kZXJlckRhdGEiLCJ2ZXJ0ZXhDb2xvdXJzQnVmZmVyIiwiZ2V0QXR0cmlidXRlTG9jYXRpb25zIiwidmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleENvbG91cnMiLCJhZGRWZXJ0ZXhDb2xvdXJzIiwiY2FudmFzIiwidmVydGV4Q29sb3Vyc0RhdGEiLCJnZXRWZXJ0ZXhDb2xvdXJzRGF0YSIsImNyZWF0ZUJ1ZmZlciIsInZlcnRleENvbG91ckNvbXBvbmVudHMiLCJiaW5kQnVmZmVyIiwiZnJvbVByb2dyYW0iLCJjb2xvdXJSZW5kZXJlckRhdGEiLCJmcm9tTm90aGluZyIsImNvbG91clJlbmRlcmVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsYUFBUixDQUFqQjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSx3QkFBUixDQUQzQjtBQUFBLElBRU1FLHFCQUFxQkYsUUFBUSw4QkFBUixDQUYzQjtBQUFBLElBR01HLHVCQUF1QkgsUUFBUSxnQ0FBUixDQUg3QjtBQUFBLElBSU1JLHlCQUF5QkosUUFBUSw0QkFBUixDQUovQjtBQUFBLElBS01LLDJCQUEyQkwsUUFBUSw4QkFBUixDQUxqQzs7SUFPUU0sYSxHQUFrQlAsUSxDQUFsQk8sYTs7SUFFRkMsYzs7O0FBQ0osMEJBQVlDLE9BQVosRUFBcUJDLGdCQUFyQixFQUF1Q0Msa0JBQXZDLEVBQTJEQyxZQUEzRCxFQUF5RTtBQUFBOztBQUFBLGdJQUNqRUgsT0FEaUUsRUFDeERDLGdCQUR3RCxFQUN0Q0Msa0JBRHNDLEVBQ2xCQyxZQURrQjs7QUFHdkUsVUFBS0MsbUJBQUwsR0FBMkIsSUFBM0IsQ0FIdUUsQ0FHdEM7QUFIc0M7QUFJeEU7Ozs7dURBRWtDO0FBQ2pDLFVBQU1GLHFCQUFxQixLQUFLRyxxQkFBTCxFQUEzQjtBQUFBLFVBQ01DLGdDQUFnQ0osbUJBQW1CSyxnQ0FBbkIsRUFEdEM7O0FBR0EsYUFBT0QsNkJBQVA7QUFDRDs7O3FDQUVnQkUsYSxFQUFlO0FBQUUsV0FBS0wsWUFBTCxDQUFrQk0sZ0JBQWxCLENBQW1DRCxhQUFuQztBQUFvRDs7O2tDQUV4RUUsTSxFQUFRO0FBQ3BCLFVBQU1DLG9CQUFvQixLQUFLUixZQUFMLENBQWtCUyxvQkFBbEIsRUFBMUI7O0FBRUEsV0FBS1IsbUJBQUwsR0FBMkJNLE9BQU9HLFlBQVAsQ0FBb0JGLGlCQUFwQixDQUEzQjs7QUFFQSxvSUFBb0JELE1BQXBCO0FBQ0Q7OztnQ0FFV0EsTSxFQUFRO0FBQ2xCLFVBQU1KLGdDQUFnQyxLQUFLQyxnQ0FBTCxFQUF0QztBQUFBLFVBQ01PLHlCQUF5QixDQUQvQjs7QUFHQUosYUFBT0ssVUFBUCxDQUFrQixLQUFLWCxtQkFBdkIsRUFBNENFLDZCQUE1QyxFQUEyRVEsc0JBQTNFOztBQUVBLGtJQUFrQkosTUFBbEI7QUFDRDs7O2dDQUVrQkEsTSxFQUFRO0FBQ3pCLFVBQU1WLFVBQVVGLGNBQWNKLGtCQUFkLEVBQWtDQyxvQkFBbEMsRUFBd0RlLE1BQXhELENBQWhCO0FBQUEsVUFDTVQsbUJBQW1CTCx1QkFBdUJvQixXQUF2QixDQUFtQ2hCLE9BQW5DLEVBQTRDVSxNQUE1QyxDQUR6QjtBQUFBLFVBRU1SLHFCQUFxQkwseUJBQXlCbUIsV0FBekIsQ0FBcUNoQixPQUFyQyxFQUE4Q1UsTUFBOUMsQ0FGM0I7QUFBQSxVQUdNTyxxQkFBcUJ4QixtQkFBbUJ5QixXQUFuQixFQUgzQjtBQUFBLFVBSU1mLGVBQWVjLGtCQUpyQjtBQUFBLFVBSTBDO0FBQ3BDRSx1QkFBaUIsSUFBSXBCLGNBQUosQ0FBbUJDLE9BQW5CLEVBQTRCQyxnQkFBNUIsRUFBOENDLGtCQUE5QyxFQUFrRUMsWUFBbEUsQ0FMdkI7O0FBT0EsYUFBT2dCLGNBQVA7QUFDRDs7OztFQTFDMEI1QixROztBQTZDN0I2QixPQUFPQyxPQUFQLEdBQWlCdEIsY0FBakIiLCJmaWxlIjoiY29sb3VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyJyksXG4gICAgICBDb2xvdXJSZW5kZXJlckRhdGEgPSByZXF1aXJlKCcuLi9yZW5kZXJlckRhdGEvY29sb3VyJyksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyJyksXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL2NvbG91ci9mcmFnbWVudFNoYWRlcicpLFxuICAgICAgQ29sb3VyVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL2NvbG91ci91bmlmb3JtJyksXG4gICAgICBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlJyk7XG5cbmNvbnN0IHsgY3JlYXRlUHJvZ3JhbSB9ID0gUmVuZGVyZXI7XG5cbmNsYXNzIENvbG91clJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIHJlbmRlcmVyRGF0YSkge1xuICAgIHN1cGVyKHByb2dyYW0sIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgcmVuZGVyZXJEYXRhKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciA9IG51bGw7IC8vL1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKSB7IHRoaXMucmVuZGVyZXJEYXRhLmFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycyk7IH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleENvbG91cnNEYXRhID0gdGhpcy5yZW5kZXJlckRhdGEuZ2V0VmVydGV4Q29sb3Vyc0RhdGEoKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VyQ29tcG9uZW50cyA9IDQ7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleENvbG91cnNCdWZmZXIsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzKTtcblxuICAgIHN1cGVyLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gQ29sb3VyVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyRGF0YSA9IENvbG91clJlbmRlcmVyRGF0YS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IGNvbG91clJlbmRlcmVyRGF0YSwgIC8vL1xuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbmV3IENvbG91clJlbmRlcmVyKHByb2dyYW0sIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgcmVuZGVyZXJEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJSZW5kZXJlcjtcbiJdfQ==