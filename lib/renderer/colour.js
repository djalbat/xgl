'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Renderer = require('../renderer'),
    RendererBuffers = require('../rendererBuffers'),
    ColourRendererData = require('../rendererData/colour'),
    vertexShaderSource = require('./source/colour/vertexShader'),
    fragmentShaderSource = require('./source/colour/fragmentShader'),
    ColourUniformLocations = require('./locations/colour/uniform'),
    ColourAttributeLocations = require('./locations/colour/attribute');

var createProgram = Renderer.createProgram;

var ColourRenderer = function (_Renderer) {
  _inherits(ColourRenderer, _Renderer);

  function ColourRenderer(program, uniformLocations, attributeLocations, rendererData, rendererBuffers) {
    _classCallCheck(this, ColourRenderer);

    var _this = _possibleConstructorReturn(this, (ColourRenderer.__proto__ || Object.getPrototypeOf(ColourRenderer)).call(this, program, uniformLocations, attributeLocations, rendererData, rendererBuffers));

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
      rendererBuffers = RendererBuffers.fromNothing(),
          colourRenderer = new ColourRenderer(program, uniformLocations, attributeLocations, rendererData, rendererBuffers);

      return colourRenderer;
    }
  }]);

  return ColourRenderer;
}(Renderer);

module.exports = ColourRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9yZW5kZXJlci9jb2xvdXIuanMiXSwibmFtZXMiOlsiUmVuZGVyZXIiLCJyZXF1aXJlIiwiUmVuZGVyZXJCdWZmZXJzIiwiQ29sb3VyUmVuZGVyZXJEYXRhIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJDb2xvdXJVbmlmb3JtTG9jYXRpb25zIiwiQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIiwiY3JlYXRlUHJvZ3JhbSIsIkNvbG91clJlbmRlcmVyIiwicHJvZ3JhbSIsInVuaWZvcm1Mb2NhdGlvbnMiLCJhdHRyaWJ1dGVMb2NhdGlvbnMiLCJyZW5kZXJlckRhdGEiLCJyZW5kZXJlckJ1ZmZlcnMiLCJ2ZXJ0ZXhDb2xvdXJzQnVmZmVyIiwiZ2V0QXR0cmlidXRlTG9jYXRpb25zIiwidmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleENvbG91cnMiLCJhZGRWZXJ0ZXhDb2xvdXJzIiwiY2FudmFzIiwidmVydGV4Q29sb3Vyc0RhdGEiLCJnZXRWZXJ0ZXhDb2xvdXJzRGF0YSIsImNyZWF0ZUJ1ZmZlciIsInZlcnRleENvbG91ckNvbXBvbmVudHMiLCJiaW5kQnVmZmVyIiwiZnJvbVByb2dyYW0iLCJjb2xvdXJSZW5kZXJlckRhdGEiLCJmcm9tTm90aGluZyIsImNvbG91clJlbmRlcmVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsYUFBUixDQUFqQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSxvQkFBUixDQUR4QjtBQUFBLElBRU1FLHFCQUFxQkYsUUFBUSx3QkFBUixDQUYzQjtBQUFBLElBR01HLHFCQUFxQkgsUUFBUSw4QkFBUixDQUgzQjtBQUFBLElBSU1JLHVCQUF1QkosUUFBUSxnQ0FBUixDQUo3QjtBQUFBLElBS01LLHlCQUF5QkwsUUFBUSw0QkFBUixDQUwvQjtBQUFBLElBTU1NLDJCQUEyQk4sUUFBUSw4QkFBUixDQU5qQzs7SUFRUU8sYSxHQUFrQlIsUSxDQUFsQlEsYTs7SUFFRkMsYzs7O0FBQ0osMEJBQVlDLE9BQVosRUFBcUJDLGdCQUFyQixFQUF1Q0Msa0JBQXZDLEVBQTJEQyxZQUEzRCxFQUF5RUMsZUFBekUsRUFBMEY7QUFBQTs7QUFBQSxnSUFDbEZKLE9BRGtGLEVBQ3pFQyxnQkFEeUUsRUFDdkRDLGtCQUR1RCxFQUNuQ0MsWUFEbUMsRUFDckJDLGVBRHFCOztBQUd4RixVQUFLQyxtQkFBTCxHQUEyQixJQUEzQixDQUh3RixDQUd2RDtBQUh1RDtBQUl6Rjs7Ozt1REFFa0M7QUFDakMsVUFBTUgscUJBQXFCLEtBQUtJLHFCQUFMLEVBQTNCO0FBQUEsVUFDTUMsZ0NBQWdDTCxtQkFBbUJNLGdDQUFuQixFQUR0Qzs7QUFHQSxhQUFPRCw2QkFBUDtBQUNEOzs7cUNBRWdCRSxhLEVBQWU7QUFBRSxXQUFLTixZQUFMLENBQWtCTyxnQkFBbEIsQ0FBbUNELGFBQW5DO0FBQW9EOzs7a0NBRXhFRSxNLEVBQVE7QUFDcEIsVUFBTUMsb0JBQW9CLEtBQUtULFlBQUwsQ0FBa0JVLG9CQUFsQixFQUExQjs7QUFFQSxXQUFLUixtQkFBTCxHQUEyQk0sT0FBT0csWUFBUCxDQUFvQkYsaUJBQXBCLENBQTNCOztBQUVBLG9JQUFvQkQsTUFBcEI7QUFDRDs7O2dDQUVXQSxNLEVBQVE7QUFDbEIsVUFBTUosZ0NBQWdDLEtBQUtDLGdDQUFMLEVBQXRDO0FBQUEsVUFDTU8seUJBQXlCLENBRC9COztBQUdBSixhQUFPSyxVQUFQLENBQWtCLEtBQUtYLG1CQUF2QixFQUE0Q0UsNkJBQTVDLEVBQTJFUSxzQkFBM0U7O0FBRUEsa0lBQWtCSixNQUFsQjtBQUNEOzs7Z0NBRWtCQSxNLEVBQVE7QUFDekIsVUFBTVgsVUFBVUYsY0FBY0osa0JBQWQsRUFBa0NDLG9CQUFsQyxFQUF3RGdCLE1BQXhELENBQWhCO0FBQUEsVUFDTVYsbUJBQW1CTCx1QkFBdUJxQixXQUF2QixDQUFtQ2pCLE9BQW5DLEVBQTRDVyxNQUE1QyxDQUR6QjtBQUFBLFVBRU1ULHFCQUFxQkwseUJBQXlCb0IsV0FBekIsQ0FBcUNqQixPQUFyQyxFQUE4Q1csTUFBOUMsQ0FGM0I7QUFBQSxVQUdNTyxxQkFBcUJ6QixtQkFBbUIwQixXQUFuQixFQUgzQjtBQUFBLFVBSU1oQixlQUFlZSxrQkFKckI7QUFBQSxVQUkwQztBQUNwQ2Qsd0JBQWtCWixnQkFBZ0IyQixXQUFoQixFQUx4QjtBQUFBLFVBTU1DLGlCQUFpQixJQUFJckIsY0FBSixDQUFtQkMsT0FBbkIsRUFBNEJDLGdCQUE1QixFQUE4Q0Msa0JBQTlDLEVBQWtFQyxZQUFsRSxFQUFnRkMsZUFBaEYsQ0FOdkI7O0FBUUEsYUFBT2dCLGNBQVA7QUFDRDs7OztFQTNDMEI5QixROztBQThDN0IrQixPQUFPQyxPQUFQLEdBQWlCdkIsY0FBakIiLCJmaWxlIjoiY29sb3VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyJyksXG4gICAgICBSZW5kZXJlckJ1ZmZlcnMgPSByZXF1aXJlKCcuLi9yZW5kZXJlckJ1ZmZlcnMnKSxcbiAgICAgIENvbG91clJlbmRlcmVyRGF0YSA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyRGF0YS9jb2xvdXInKSxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXInKSxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvY29sb3VyL2ZyYWdtZW50U2hhZGVyJyksXG4gICAgICBDb2xvdXJVbmlmb3JtTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvY29sb3VyL3VuaWZvcm0nKSxcbiAgICAgIENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL2NvbG91ci9hdHRyaWJ1dGUnKTtcblxuY29uc3QgeyBjcmVhdGVQcm9ncmFtIH0gPSBSZW5kZXJlcjtcblxuY2xhc3MgQ29sb3VyUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHByb2dyYW0sIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMpIHtcbiAgICBzdXBlcihwcm9ncmFtLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciA9IG51bGw7IC8vL1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKSB7IHRoaXMucmVuZGVyZXJEYXRhLmFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycyk7IH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleENvbG91cnNEYXRhID0gdGhpcy5yZW5kZXJlckRhdGEuZ2V0VmVydGV4Q29sb3Vyc0RhdGEoKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VyQ29tcG9uZW50cyA9IDQ7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleENvbG91cnNCdWZmZXIsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzKTtcblxuICAgIHN1cGVyLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gQ29sb3VyVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyRGF0YSA9IENvbG91clJlbmRlcmVyRGF0YS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IGNvbG91clJlbmRlcmVyRGF0YSwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IFJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbmV3IENvbG91clJlbmRlcmVyKHByb2dyYW0sIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clJlbmRlcmVyO1xuIl19