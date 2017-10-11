'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var Renderer = require('../renderer'),
    vertexShaderSource = require('./source/colour/vertexShader'),
    fragmentShaderSource = require('./source/colour/fragmentShader'),
    ColourUniformLocations = require('./locations/colour/uniform'),
    ColourAttributeLocations = require('./locations/colour/attribute');

var createProgram = Renderer.createProgram,
    arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

var ColourRenderer = function (_Renderer) {
  _inherits(ColourRenderer, _Renderer);

  function ColourRenderer(program, uniformLocations, attributeLocations, vertexColourData, vertexColourBuffer) {
    _classCallCheck(this, ColourRenderer);

    var _this = _possibleConstructorReturn(this, (ColourRenderer.__proto__ || Object.getPrototypeOf(ColourRenderer)).call(this, program, uniformLocations, attributeLocations));

    _this.vertexColourData = vertexColourData;
    _this.vertexColourBuffer = vertexColourBuffer;
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
    key: 'addVertexColourData',
    value: function addVertexColourData(vertexColourData) {
      add(this.vertexColourData, vertexColourData);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      this.vertexColourBuffer = canvas.createBuffer(this.vertexColourData);

      _get(ColourRenderer.prototype.__proto__ || Object.getPrototypeOf(ColourRenderer.prototype), 'createBuffers', this).call(this, canvas);
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers(canvas) {
      var vertexColourAttributeLocation = this.getVertexColourAttributeLocation(),
          vertexColourComponents = 4;

      canvas.bindBuffer(this.vertexColourBuffer, vertexColourAttributeLocation, vertexColourComponents);

      _get(ColourRenderer.prototype.__proto__ || Object.getPrototypeOf(ColourRenderer.prototype), 'bindBuffers', this).call(this, canvas);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var program = createProgram(vertexShaderSource, fragmentShaderSource),
          colourUniformLocations = ColourUniformLocations.fromProgram(program, canvas),
          colourAttributeLocations = ColourAttributeLocations.fromProgram(program, canvas),
          uniformLocations = colourUniformLocations,
          ///
      attributeLocations = colourAttributeLocations,
          ///
      vertexColourData = [],
          vertexColourBuffer = null,
          ///
      colourRenderer = new ColourRenderer(program, uniformLocations, attributeLocations, vertexColourData, vertexColourBuffer);

      return colourRenderer;
    }
  }]);

  return ColourRenderer;
}(Renderer);

module.exports = ColourRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9yZW5kZXJlci9jb2xvdXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlJlbmRlcmVyIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJDb2xvdXJVbmlmb3JtTG9jYXRpb25zIiwiQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIiwiY3JlYXRlUHJvZ3JhbSIsImFycmF5VXRpbGl0aWVzIiwibWVyZ2UiLCJhZGQiLCJDb2xvdXJSZW5kZXJlciIsInByb2dyYW0iLCJ1bmlmb3JtTG9jYXRpb25zIiwiYXR0cmlidXRlTG9jYXRpb25zIiwidmVydGV4Q29sb3VyRGF0YSIsInZlcnRleENvbG91ckJ1ZmZlciIsImdldEF0dHJpYnV0ZUxvY2F0aW9ucyIsInZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24iLCJjYW52YXMiLCJjcmVhdGVCdWZmZXIiLCJ2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzIiwiYmluZEJ1ZmZlciIsImNvbG91clVuaWZvcm1Mb2NhdGlvbnMiLCJmcm9tUHJvZ3JhbSIsImNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyIsImNvbG91clJlbmRlcmVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxXQUFXRCxRQUFRLGFBQVIsQ0FBakI7QUFBQSxJQUNNRSxxQkFBcUJGLFFBQVEsOEJBQVIsQ0FEM0I7QUFBQSxJQUVNRyx1QkFBdUJILFFBQVEsZ0NBQVIsQ0FGN0I7QUFBQSxJQUdNSSx5QkFBeUJKLFFBQVEsNEJBQVIsQ0FIL0I7QUFBQSxJQUlNSywyQkFBMkJMLFFBQVEsOEJBQVIsQ0FKakM7O0FBTU0sSUFBRU0sYUFBRixHQUFvQkwsUUFBcEIsQ0FBRUssYUFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJSLFNBRHJCLENBQ0VRLGNBREY7QUFBQSxJQUVFQyxLQUZGLEdBRVlELGNBRlosQ0FFRUMsS0FGRjtBQUFBLElBR0FDLEdBSEEsR0FHTUQsS0FITixDLENBR2M7O0lBRWRFLGM7OztBQUNKLDBCQUFZQyxPQUFaLEVBQXFCQyxnQkFBckIsRUFBdUNDLGtCQUF2QyxFQUEyREMsZ0JBQTNELEVBQTZFQyxrQkFBN0UsRUFBaUc7QUFBQTs7QUFBQSxnSUFDekZKLE9BRHlGLEVBQ2hGQyxnQkFEZ0YsRUFDOURDLGtCQUQ4RDs7QUFHL0YsVUFBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFVBQUtDLGtCQUFMLEdBQTBCQSxrQkFBMUI7QUFKK0Y7QUFLaEc7Ozs7dURBRWtDO0FBQ2pDLFVBQU1GLHFCQUFxQixLQUFLRyxxQkFBTCxFQUEzQjtBQUFBLFVBQ01DLGdDQUFnQ0osbUJBQW1CSyxnQ0FBbkIsRUFEdEM7O0FBR0EsYUFBT0QsNkJBQVA7QUFDRDs7O3dDQUVtQkgsZ0IsRUFBa0I7QUFDcENMLFVBQUksS0FBS0ssZ0JBQVQsRUFBMkJBLGdCQUEzQjtBQUNEOzs7a0NBRWFLLE0sRUFBUTtBQUNwQixXQUFLSixrQkFBTCxHQUEwQkksT0FBT0MsWUFBUCxDQUFvQixLQUFLTixnQkFBekIsQ0FBMUI7O0FBRUEsb0lBQW9CSyxNQUFwQjtBQUNEOzs7Z0NBRVdBLE0sRUFBUTtBQUNsQixVQUFNRixnQ0FBZ0MsS0FBS0MsZ0NBQUwsRUFBdEM7QUFBQSxVQUNNRyx5QkFBeUIsQ0FEL0I7O0FBR0FGLGFBQU9HLFVBQVAsQ0FBa0IsS0FBS1Asa0JBQXZCLEVBQTJDRSw2QkFBM0MsRUFBMEVJLHNCQUExRTs7QUFFQSxrSUFBa0JGLE1BQWxCO0FBQ0Q7OztnQ0FFa0JBLE0sRUFBUTtBQUN6QixVQUFNUixVQUFVTCxjQUFjSixrQkFBZCxFQUFrQ0Msb0JBQWxDLENBQWhCO0FBQUEsVUFDTW9CLHlCQUF5Qm5CLHVCQUF1Qm9CLFdBQXZCLENBQW1DYixPQUFuQyxFQUE0Q1EsTUFBNUMsQ0FEL0I7QUFBQSxVQUVNTSwyQkFBMkJwQix5QkFBeUJtQixXQUF6QixDQUFxQ2IsT0FBckMsRUFBOENRLE1BQTlDLENBRmpDO0FBQUEsVUFHTVAsbUJBQW1CVyxzQkFIekI7QUFBQSxVQUdrRDtBQUM1Q1YsMkJBQXFCWSx3QkFKM0I7QUFBQSxVQUlzRDtBQUNoRFgseUJBQW1CLEVBTHpCO0FBQUEsVUFNTUMscUJBQXFCLElBTjNCO0FBQUEsVUFNa0M7QUFDNUJXLHVCQUFpQixJQUFJaEIsY0FBSixDQUFtQkMsT0FBbkIsRUFBNEJDLGdCQUE1QixFQUE4Q0Msa0JBQTlDLEVBQWtFQyxnQkFBbEUsRUFBb0ZDLGtCQUFwRixDQVB2Qjs7QUFTQSxhQUFPVyxjQUFQO0FBQ0Q7Ozs7RUE3QzBCekIsUTs7QUFnRDdCMEIsT0FBT0MsT0FBUCxHQUFpQmxCLGNBQWpCIiwiZmlsZSI6ImNvbG91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXInKSxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXInKSxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvY29sb3VyL2ZyYWdtZW50U2hhZGVyJyksXG4gICAgICBDb2xvdXJVbmlmb3JtTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvY29sb3VyL3VuaWZvcm0nKSxcbiAgICAgIENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL2NvbG91ci9hdHRyaWJ1dGUnKTtcblxuY29uc3QgeyBjcmVhdGVQcm9ncmFtIH0gPSBSZW5kZXJlcixcbiAgICAgIHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgbWVyZ2UgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgQ29sb3VyUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHByb2dyYW0sIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgdmVydGV4Q29sb3VyRGF0YSwgdmVydGV4Q29sb3VyQnVmZmVyKSB7XG4gICAgc3VwZXIocHJvZ3JhbSwgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3VyRGF0YSA9IHZlcnRleENvbG91ckRhdGE7XG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJCdWZmZXIgPSB2ZXJ0ZXhDb2xvdXJCdWZmZXI7XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZUxvY2F0aW9ucygpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZXR1cm4gdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBhZGRWZXJ0ZXhDb2xvdXJEYXRhKHZlcnRleENvbG91ckRhdGEpIHtcbiAgICBhZGQodGhpcy52ZXJ0ZXhDb2xvdXJEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRoaXMudmVydGV4Q29sb3VyRGF0YSk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzID0gNDtcblxuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Q29sb3VyQnVmZmVyLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQ29tcG9uZW50cyk7XG5cbiAgICBzdXBlci5iaW5kQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpLFxuICAgICAgICAgIGNvbG91clVuaWZvcm1Mb2NhdGlvbnMgPSBDb2xvdXJVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgY29sb3VyQXR0cmlidXRlTG9jYXRpb25zID0gQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IGNvbG91clVuaWZvcm1Mb2NhdGlvbnMsICAvLy9cbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMsICAvLy9cbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJEYXRhID0gW10sXG4gICAgICAgICAgdmVydGV4Q29sb3VyQnVmZmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbmV3IENvbG91clJlbmRlcmVyKHByb2dyYW0sIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgdmVydGV4Q29sb3VyRGF0YSwgdmVydGV4Q29sb3VyQnVmZmVyKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJSZW5kZXJlcjtcbiJdfQ==