'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var Renderer = require('../renderer'),
    UniformLocations = require('./locations/uniform'),
    AttributeLocations = require('./locations/attribute'),
    vertexShaderSource = require('./source/colour/vertex'),
    fragmentShaderSource = require('./source/colour/fragment');

var vertexColourAttributeName = vertexShaderSource.vertexColourAttributeName,
    arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

var ColourRenderer = function (_Renderer) {
  _inherits(ColourRenderer, _Renderer);

  function ColourRenderer(program, uniformLocations, attributeLocations, vertexColourAttributeLocation, vertexColourData) {
    _classCallCheck(this, ColourRenderer);

    var _this = _possibleConstructorReturn(this, (ColourRenderer.__proto__ || Object.getPrototypeOf(ColourRenderer)).call(this, program, uniformLocations, attributeLocations));

    _this.vertexColourAttributeLocation = vertexColourAttributeLocation;
    _this.vertexColourData = vertexColourData;
    return _this;
  }

  _createClass(ColourRenderer, [{
    key: 'addVertexColourData',
    value: function addVertexColourData(vertexColourData) {
      add(this.vertexColourData, vertexColourData);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      this.createVertexColourBuffer(canvas);

      _get(ColourRenderer.prototype.__proto__ || Object.getPrototypeOf(ColourRenderer.prototype), 'createBuffers', this).call(this, canvas);
    }
  }, {
    key: 'createVertexColourBuffer',
    value: function createVertexColourBuffer(canvas) {
      this.vertexColourBuffer = canvas.createBuffer(this.vertexColourData);
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers(canvas) {
      this.bindVertexColourBuffer(canvas);

      _get(ColourRenderer.prototype.__proto__ || Object.getPrototypeOf(ColourRenderer.prototype), 'bindBuffers', this).call(this, canvas);
    }
  }, {
    key: 'bindVertexColourBuffer',
    value: function bindVertexColourBuffer(canvas) {
      var vertexColourComponents = 4;

      canvas.bindBuffer(this.vertexColourBuffer, this.vertexColourAttributeLocation, vertexColourComponents);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var vertexShader = canvas.createVertexRenderer(vertexShaderSource),
          fragmentShader = canvas.createFragmentRenderer(fragmentShaderSource),
          program = canvas.createProgram(vertexShader, fragmentShader),
          vertexColourAttributeLocation = canvas.getAttributeLocation(program, vertexColourAttributeName),
          uniformLocations = UniformLocations.fromProgram(program, canvas),
          attributeLocations = AttributeLocations.fromProgram(program, canvas),
          vertexColourData = [],
          colourRenderer = new ColourRenderer(program, uniformLocations, attributeLocations, vertexColourAttributeLocation, vertexColourData);

      return colourRenderer;
    }
  }]);

  return ColourRenderer;
}(Renderer);

module.exports = ColourRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9yZW5kZXJlci9jb2xvdXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlJlbmRlcmVyIiwiVW5pZm9ybUxvY2F0aW9ucyIsIkF0dHJpYnV0ZUxvY2F0aW9ucyIsInZlcnRleFNoYWRlclNvdXJjZSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwidmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSIsImFycmF5VXRpbGl0aWVzIiwibWVyZ2UiLCJhZGQiLCJDb2xvdXJSZW5kZXJlciIsInByb2dyYW0iLCJ1bmlmb3JtTG9jYXRpb25zIiwiYXR0cmlidXRlTG9jYXRpb25zIiwidmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24iLCJ2ZXJ0ZXhDb2xvdXJEYXRhIiwiY2FudmFzIiwiY3JlYXRlVmVydGV4Q29sb3VyQnVmZmVyIiwidmVydGV4Q29sb3VyQnVmZmVyIiwiY3JlYXRlQnVmZmVyIiwiYmluZFZlcnRleENvbG91ckJ1ZmZlciIsInZlcnRleENvbG91ckNvbXBvbmVudHMiLCJiaW5kQnVmZmVyIiwidmVydGV4U2hhZGVyIiwiY3JlYXRlVmVydGV4UmVuZGVyZXIiLCJmcmFnbWVudFNoYWRlciIsImNyZWF0ZUZyYWdtZW50UmVuZGVyZXIiLCJjcmVhdGVQcm9ncmFtIiwiZ2V0QXR0cmlidXRlTG9jYXRpb24iLCJmcm9tUHJvZ3JhbSIsImNvbG91clJlbmRlcmVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxXQUFXRCxRQUFRLGFBQVIsQ0FBakI7QUFBQSxJQUNNRSxtQkFBbUJGLFFBQVEscUJBQVIsQ0FEekI7QUFBQSxJQUVNRyxxQkFBcUJILFFBQVEsdUJBQVIsQ0FGM0I7QUFBQSxJQUdNSSxxQkFBcUJKLFFBQVEsd0JBQVIsQ0FIM0I7QUFBQSxJQUlNSyx1QkFBdUJMLFFBQVEsMEJBQVIsQ0FKN0I7O0FBTU0sSUFBRU0seUJBQUYsR0FBZ0NGLGtCQUFoQyxDQUFFRSx5QkFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJSLFNBRHJCLENBQ0VRLGNBREY7QUFBQSxJQUVFQyxLQUZGLEdBRVlELGNBRlosQ0FFRUMsS0FGRjtBQUFBLElBR0FDLEdBSEEsR0FHTUQsS0FITixDLENBR2M7O0lBRWRFLGM7OztBQUNKLDBCQUFZQyxPQUFaLEVBQXFCQyxnQkFBckIsRUFBdUNDLGtCQUF2QyxFQUEyREMsNkJBQTNELEVBQTBGQyxnQkFBMUYsRUFBNEc7QUFBQTs7QUFBQSxnSUFDcEdKLE9BRG9HLEVBQzNGQyxnQkFEMkYsRUFDekVDLGtCQUR5RTs7QUFHMUcsVUFBS0MsNkJBQUwsR0FBcUNBLDZCQUFyQztBQUNBLFVBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFKMEc7QUFLM0c7Ozs7d0NBRW1CQSxnQixFQUFrQjtBQUNwQ04sVUFBSSxLQUFLTSxnQkFBVCxFQUEyQkEsZ0JBQTNCO0FBQ0Q7OztrQ0FFYUMsTSxFQUFRO0FBQ3BCLFdBQUtDLHdCQUFMLENBQThCRCxNQUE5Qjs7QUFFQSxvSUFBb0JBLE1BQXBCO0FBQ0Q7Ozs2Q0FFd0JBLE0sRUFBUTtBQUMvQixXQUFLRSxrQkFBTCxHQUEwQkYsT0FBT0csWUFBUCxDQUFvQixLQUFLSixnQkFBekIsQ0FBMUI7QUFDRDs7O2dDQUVXQyxNLEVBQVE7QUFDbEIsV0FBS0ksc0JBQUwsQ0FBNEJKLE1BQTVCOztBQUVBLGtJQUFrQkEsTUFBbEI7QUFDRDs7OzJDQUVzQkEsTSxFQUFRO0FBQzdCLFVBQU1LLHlCQUF5QixDQUEvQjs7QUFFQUwsYUFBT00sVUFBUCxDQUFrQixLQUFLSixrQkFBdkIsRUFBMkMsS0FBS0osNkJBQWhELEVBQStFTyxzQkFBL0U7QUFDRDs7O2dDQUVrQkwsTSxFQUFRO0FBQ3pCLFVBQU1PLGVBQWVQLE9BQU9RLG9CQUFQLENBQTRCcEIsa0JBQTVCLENBQXJCO0FBQUEsVUFDTXFCLGlCQUFpQlQsT0FBT1Usc0JBQVAsQ0FBOEJyQixvQkFBOUIsQ0FEdkI7QUFBQSxVQUVNTSxVQUFVSyxPQUFPVyxhQUFQLENBQXFCSixZQUFyQixFQUFtQ0UsY0FBbkMsQ0FGaEI7QUFBQSxVQUdNWCxnQ0FBZ0NFLE9BQU9ZLG9CQUFQLENBQTRCakIsT0FBNUIsRUFBcUNMLHlCQUFyQyxDQUh0QztBQUFBLFVBSU1NLG1CQUFtQlYsaUJBQWlCMkIsV0FBakIsQ0FBNkJsQixPQUE3QixFQUFzQ0ssTUFBdEMsQ0FKekI7QUFBQSxVQUtNSCxxQkFBcUJWLG1CQUFtQjBCLFdBQW5CLENBQStCbEIsT0FBL0IsRUFBd0NLLE1BQXhDLENBTDNCO0FBQUEsVUFNTUQsbUJBQW1CLEVBTnpCO0FBQUEsVUFPTWUsaUJBQWlCLElBQUlwQixjQUFKLENBQW1CQyxPQUFuQixFQUE0QkMsZ0JBQTVCLEVBQThDQyxrQkFBOUMsRUFBa0VDLDZCQUFsRSxFQUFpR0MsZ0JBQWpHLENBUHZCOztBQVNBLGFBQU9lLGNBQVA7QUFDRDs7OztFQTdDMEI3QixROztBQWdEN0I4QixPQUFPQyxPQUFQLEdBQWlCdEIsY0FBakIiLCJmaWxlIjoiY29sb3VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlcicpLFxuICAgICAgVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL3VuaWZvcm0nKSxcbiAgICAgIEF0dHJpYnV0ZUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL2F0dHJpYnV0ZScpLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvY29sb3VyL3ZlcnRleCcpLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS9jb2xvdXIvZnJhZ21lbnQnKTtcblxuY29uc3QgeyB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lIH0gPSB2ZXJ0ZXhTaGFkZXJTb3VyY2UsXG4gICAgICB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IG1lcmdlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNsYXNzIENvbG91clJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJEYXRhKSB7XG4gICAgc3VwZXIocHJvZ3JhbSwgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgICB0aGlzLnZlcnRleENvbG91ckRhdGEgPSB2ZXJ0ZXhDb2xvdXJEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4Q29sb3VyRGF0YSh2ZXJ0ZXhDb2xvdXJEYXRhKSB7XG4gICAgYWRkKHRoaXMudmVydGV4Q29sb3VyRGF0YSwgdmVydGV4Q29sb3VyRGF0YSk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIHRoaXMuY3JlYXRlVmVydGV4Q29sb3VyQnVmZmVyKGNhbnZhcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhDb2xvdXJCdWZmZXIoY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRoaXMudmVydGV4Q29sb3VyRGF0YSk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhDb2xvdXJCdWZmZXIoY2FudmFzKTtcblxuICAgIHN1cGVyLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kVmVydGV4Q29sb3VyQnVmZmVyKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleENvbG91ckNvbXBvbmVudHMgPSA0O1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhDb2xvdXJCdWZmZXIsIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckNvbXBvbmVudHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleFNoYWRlciA9IGNhbnZhcy5jcmVhdGVWZXJ0ZXhSZW5kZXJlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UpLFxuICAgICAgICAgIGZyYWdtZW50U2hhZGVyID0gY2FudmFzLmNyZWF0ZUZyYWdtZW50UmVuZGVyZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UpLFxuICAgICAgICAgIHByb2dyYW0gPSBjYW52YXMuY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IEF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHZlcnRleENvbG91ckRhdGEgPSBbXSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IG5ldyBDb2xvdXJSZW5kZXJlcihwcm9ncmFtLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJSZW5kZXJlcjtcbiJdfQ==