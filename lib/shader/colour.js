'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var Shader = require('../shader'),
    UniformLocations = require('./locations/uniform'),
    AttributeLocations = require('./locations/attribute'),
    vertexShaderSource = require('./source/colour/vertex'),
    fragmentShaderSource = require('./source/colour/fragment');

var createVertexShader = Shader.createVertexShader,
    createFragmentShader = Shader.createFragmentShader,
    vertexColourAttributeName = vertexShaderSource.vertexColourAttributeName,
    arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

var ColourShader = function (_Shader) {
  _inherits(ColourShader, _Shader);

  function ColourShader(program, uniformLocations, attributeLocations, vertexColourAttributeLocation, vertexColourData) {
    _classCallCheck(this, ColourShader);

    var _this = _possibleConstructorReturn(this, (ColourShader.__proto__ || Object.getPrototypeOf(ColourShader)).call(this, program, uniformLocations, attributeLocations));

    _this.vertexColourAttributeLocation = vertexColourAttributeLocation;
    _this.vertexColourData = vertexColourData;
    return _this;
  }

  _createClass(ColourShader, [{
    key: 'addVertexColourData',
    value: function addVertexColourData(vertexColourData) {
      add(this.vertexColourData, vertexColourData);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      this.createVertexColourBuffer(canvas);

      _get(ColourShader.prototype.__proto__ || Object.getPrototypeOf(ColourShader.prototype), 'createBuffers', this).call(this, canvas);
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

      _get(ColourShader.prototype.__proto__ || Object.getPrototypeOf(ColourShader.prototype), 'bindBuffers', this).call(this, canvas);
    }
  }, {
    key: 'bindVertexColourBuffer',
    value: function bindVertexColourBuffer(canvas) {
      var vertexColourComponents = 4;

      canvas.bindBuffer(this.vertexColourBuffer, this.vertexColourAttributeLocation, vertexColourComponents);
    }
  }, {
    key: 'activateTexture',
    value: function activateTexture(canvas) {} ///

  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var vertexShader = createVertexShader(vertexShaderSource, canvas),
          fragmentShader = createFragmentShader(fragmentShaderSource, canvas),
          program = canvas.createProgram(vertexShader, fragmentShader),
          vertexColourAttributeLocation = canvas.getAttributeLocation(program, vertexColourAttributeName),
          uniformLocations = UniformLocations.fromProgram(program, canvas),
          attributeLocations = AttributeLocations.fromProgram(program, canvas),
          vertexColourData = [],
          colourShader = new ColourShader(program, uniformLocations, attributeLocations, vertexColourAttributeLocation, vertexColourData);

      return colourShader;
    }
  }]);

  return ColourShader;
}(Shader);

module.exports = ColourShader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvY29sb3VyLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJTaGFkZXIiLCJVbmlmb3JtTG9jYXRpb25zIiwiQXR0cmlidXRlTG9jYXRpb25zIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJjcmVhdGVWZXJ0ZXhTaGFkZXIiLCJjcmVhdGVGcmFnbWVudFNoYWRlciIsInZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUiLCJhcnJheVV0aWxpdGllcyIsIm1lcmdlIiwiYWRkIiwiQ29sb3VyU2hhZGVyIiwicHJvZ3JhbSIsInVuaWZvcm1Mb2NhdGlvbnMiLCJhdHRyaWJ1dGVMb2NhdGlvbnMiLCJ2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleENvbG91ckRhdGEiLCJjYW52YXMiLCJjcmVhdGVWZXJ0ZXhDb2xvdXJCdWZmZXIiLCJ2ZXJ0ZXhDb2xvdXJCdWZmZXIiLCJjcmVhdGVCdWZmZXIiLCJiaW5kVmVydGV4Q29sb3VyQnVmZmVyIiwidmVydGV4Q29sb3VyQ29tcG9uZW50cyIsImJpbmRCdWZmZXIiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsImNyZWF0ZVByb2dyYW0iLCJnZXRBdHRyaWJ1dGVMb2NhdGlvbiIsImZyb21Qcm9ncmFtIiwiY29sb3VyU2hhZGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxTQUFTRCxRQUFRLFdBQVIsQ0FBZjtBQUFBLElBQ01FLG1CQUFtQkYsUUFBUSxxQkFBUixDQUR6QjtBQUFBLElBRU1HLHFCQUFxQkgsUUFBUSx1QkFBUixDQUYzQjtBQUFBLElBR01JLHFCQUFxQkosUUFBUSx3QkFBUixDQUgzQjtBQUFBLElBSU1LLHVCQUF1QkwsUUFBUSwwQkFBUixDQUo3Qjs7SUFNUU0sa0IsR0FBNkNMLE0sQ0FBN0NLLGtCO0lBQW9CQyxvQixHQUF5Qk4sTSxDQUF6Qk0sb0I7SUFDcEJDLHlCLEdBQThCSixrQixDQUE5QkkseUI7SUFDQUMsYyxHQUFtQlYsUyxDQUFuQlUsYztJQUNBQyxLLEdBQVVELGMsQ0FBVkMsSztJQUNGQyxHLEdBQU1ELEssRUFBUTs7SUFFZEUsWTs7O0FBQ0osd0JBQVlDLE9BQVosRUFBcUJDLGdCQUFyQixFQUF1Q0Msa0JBQXZDLEVBQTJEQyw2QkFBM0QsRUFBMEZDLGdCQUExRixFQUE0RztBQUFBOztBQUFBLDRIQUNwR0osT0FEb0csRUFDM0ZDLGdCQUQyRixFQUN6RUMsa0JBRHlFOztBQUcxRyxVQUFLQyw2QkFBTCxHQUFxQ0EsNkJBQXJDO0FBQ0EsVUFBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUowRztBQUszRzs7Ozt3Q0FFbUJBLGdCLEVBQWtCO0FBQ3BDTixVQUFJLEtBQUtNLGdCQUFULEVBQTJCQSxnQkFBM0I7QUFDRDs7O2tDQUVhQyxNLEVBQVE7QUFDcEIsV0FBS0Msd0JBQUwsQ0FBOEJELE1BQTlCOztBQUVBLGdJQUFvQkEsTUFBcEI7QUFDRDs7OzZDQUV3QkEsTSxFQUFRO0FBQy9CLFdBQUtFLGtCQUFMLEdBQTBCRixPQUFPRyxZQUFQLENBQW9CLEtBQUtKLGdCQUF6QixDQUExQjtBQUNEOzs7Z0NBRVdDLE0sRUFBUTtBQUNsQixXQUFLSSxzQkFBTCxDQUE0QkosTUFBNUI7O0FBRUEsOEhBQWtCQSxNQUFsQjtBQUNEOzs7MkNBRXNCQSxNLEVBQVE7QUFDN0IsVUFBTUsseUJBQXlCLENBQS9COztBQUVBTCxhQUFPTSxVQUFQLENBQWtCLEtBQUtKLGtCQUF2QixFQUEyQyxLQUFLSiw2QkFBaEQsRUFBK0VPLHNCQUEvRTtBQUNEOzs7b0NBRWVMLE0sRUFBUSxDQUFFLEMsQ0FBRTs7OztnQ0FFVEEsTSxFQUFRO0FBQ3pCLFVBQU1PLGVBQWVuQixtQkFBbUJGLGtCQUFuQixFQUF1Q2MsTUFBdkMsQ0FBckI7QUFBQSxVQUNNUSxpQkFBaUJuQixxQkFBcUJGLG9CQUFyQixFQUEyQ2EsTUFBM0MsQ0FEdkI7QUFBQSxVQUVNTCxVQUFVSyxPQUFPUyxhQUFQLENBQXFCRixZQUFyQixFQUFtQ0MsY0FBbkMsQ0FGaEI7QUFBQSxVQUdNVixnQ0FBZ0NFLE9BQU9VLG9CQUFQLENBQTRCZixPQUE1QixFQUFxQ0wseUJBQXJDLENBSHRDO0FBQUEsVUFJTU0sbUJBQW1CWixpQkFBaUIyQixXQUFqQixDQUE2QmhCLE9BQTdCLEVBQXNDSyxNQUF0QyxDQUp6QjtBQUFBLFVBS01ILHFCQUFxQlosbUJBQW1CMEIsV0FBbkIsQ0FBK0JoQixPQUEvQixFQUF3Q0ssTUFBeEMsQ0FMM0I7QUFBQSxVQU1NRCxtQkFBbUIsRUFOekI7QUFBQSxVQU9NYSxlQUFlLElBQUlsQixZQUFKLENBQWlCQyxPQUFqQixFQUEwQkMsZ0JBQTFCLEVBQTRDQyxrQkFBNUMsRUFBZ0VDLDZCQUFoRSxFQUErRkMsZ0JBQS9GLENBUHJCOztBQVNBLGFBQU9hLFlBQVA7QUFDRDs7OztFQS9Dd0I3QixNOztBQWtEM0I4QixPQUFPQyxPQUFQLEdBQWlCcEIsWUFBakIiLCJmaWxlIjoiY29sb3VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgU2hhZGVyID0gcmVxdWlyZSgnLi4vc2hhZGVyJyksXG4gICAgICBVbmlmb3JtTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvdW5pZm9ybScpLFxuICAgICAgQXR0cmlidXRlTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvYXR0cmlidXRlJyksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS9jb2xvdXIvdmVydGV4JyksXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL2NvbG91ci9mcmFnbWVudCcpO1xuXG5jb25zdCB7IGNyZWF0ZVZlcnRleFNoYWRlciwgY3JlYXRlRnJhZ21lbnRTaGFkZXIgfSA9IFNoYWRlcixcbiAgICAgIHsgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSB9ID0gdmVydGV4U2hhZGVyU291cmNlLFxuICAgICAgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBtZXJnZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICBhZGQgPSBtZXJnZTsgIC8vL1xuXG5jbGFzcyBDb2xvdXJTaGFkZXIgZXh0ZW5kcyBTaGFkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJEYXRhKSB7XG4gICAgc3VwZXIocHJvZ3JhbSwgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgICB0aGlzLnZlcnRleENvbG91ckRhdGEgPSB2ZXJ0ZXhDb2xvdXJEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4Q29sb3VyRGF0YSh2ZXJ0ZXhDb2xvdXJEYXRhKSB7XG4gICAgYWRkKHRoaXMudmVydGV4Q29sb3VyRGF0YSwgdmVydGV4Q29sb3VyRGF0YSk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIHRoaXMuY3JlYXRlVmVydGV4Q29sb3VyQnVmZmVyKGNhbnZhcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhDb2xvdXJCdWZmZXIoY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRoaXMudmVydGV4Q29sb3VyRGF0YSk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhDb2xvdXJCdWZmZXIoY2FudmFzKTtcblxuICAgIHN1cGVyLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kVmVydGV4Q29sb3VyQnVmZmVyKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleENvbG91ckNvbXBvbmVudHMgPSA0O1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhDb2xvdXJCdWZmZXIsIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckNvbXBvbmVudHMpO1xuICB9XG5cbiAgYWN0aXZhdGVUZXh0dXJlKGNhbnZhcykge30gIC8vL1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIGZyYWdtZW50U2hhZGVyID0gY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgcHJvZ3JhbSA9IGNhbnZhcy5jcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgdmVydGV4Q29sb3VyRGF0YSA9IFtdLFxuICAgICAgICAgIGNvbG91clNoYWRlciA9IG5ldyBDb2xvdXJTaGFkZXIocHJvZ3JhbSwgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clNoYWRlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clNoYWRlcjtcbiJdfQ==