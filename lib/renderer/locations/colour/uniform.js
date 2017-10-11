'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UniformLocations = require('../../locations/uniform'),
    vertexShaderSource = require('../source/colour/vertex');

var vertexColourAttributeName = vertexShaderSource.vertexColourAttributeName;

var ColourUniformLocations = function (_UniformLocations) {
  _inherits(ColourUniformLocations, _UniformLocations);

  function ColourUniformLocations(offsetMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, projectionMatrixUniformLocation, normalMatrixUniformLocation, vertexColourAttributeLocation) {
    _classCallCheck(this, ColourUniformLocations);

    var _this = _possibleConstructorReturn(this, (ColourUniformLocations.__proto__ || Object.getPrototypeOf(ColourUniformLocations)).call(this, offsetMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, projectionMatrixUniformLocation, normalMatrixUniformLocation));

    _this.vertexColourAttributeLocation = vertexColourAttributeLocation;
    return _this;
  }

  _createClass(ColourUniformLocations, [{
    key: 'getVertexColourAttributeLocation',
    value: function getVertexColourAttributeLocation() {
      return this.vertexColourAttributeLocation;
    }
  }], [{
    key: 'fromProgram',
    value: function fromProgram(program, canvas) {
      var vertexColourAttributeLocation = canvas.getAttributeLocation(program, vertexColourAttributeName),
          colourUniformLocations = UniformLocations.fromProgram(ColourUniformLocations, program, canvas, vertexColourAttributeLocation);

      return colourUniformLocations;
    }
  }]);

  return ColourUniformLocations;
}(UniformLocations);

module.exports = ColourUniformLocations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9yZW5kZXJlci9sb2NhdGlvbnMvY29sb3VyL3VuaWZvcm0uanMiXSwibmFtZXMiOlsiVW5pZm9ybUxvY2F0aW9ucyIsInJlcXVpcmUiLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJ2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lIiwiQ29sb3VyVW5pZm9ybUxvY2F0aW9ucyIsIm9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwicG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwibm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwidmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24iLCJwcm9ncmFtIiwiY2FudmFzIiwiZ2V0QXR0cmlidXRlTG9jYXRpb24iLCJjb2xvdXJVbmlmb3JtTG9jYXRpb25zIiwiZnJvbVByb2dyYW0iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLG1CQUFtQkMsUUFBUSx5QkFBUixDQUF6QjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSx5QkFBUixDQUQzQjs7SUFHUUUseUIsR0FBOEJELGtCLENBQTlCQyx5Qjs7SUFFRkMsc0I7OztBQUNKLGtDQUFZQywyQkFBWixFQUF5Q0MsNkJBQXpDLEVBQXdFQyw2QkFBeEUsRUFBdUdDLCtCQUF2RyxFQUF3SUMsMkJBQXhJLEVBQXFLQyw2QkFBckssRUFBb007QUFBQTs7QUFBQSxnSkFDNUxMLDJCQUQ0TCxFQUMvSkMsNkJBRCtKLEVBQ2hJQyw2QkFEZ0ksRUFDakdDLCtCQURpRyxFQUNoRUMsMkJBRGdFOztBQUdsTSxVQUFLQyw2QkFBTCxHQUFxQ0EsNkJBQXJDO0FBSGtNO0FBSW5NOzs7O3VEQUVrQztBQUNqQyxhQUFPLEtBQUtBLDZCQUFaO0FBQ0Q7OztnQ0FFa0JDLE8sRUFBU0MsTSxFQUFRO0FBQ2xDLFVBQU1GLGdDQUFnQ0UsT0FBT0Msb0JBQVAsQ0FBNEJGLE9BQTVCLEVBQXFDUix5QkFBckMsQ0FBdEM7QUFBQSxVQUNNVyx5QkFBeUJkLGlCQUFpQmUsV0FBakIsQ0FBNkJYLHNCQUE3QixFQUFxRE8sT0FBckQsRUFBOERDLE1BQTlELEVBQXNFRiw2QkFBdEUsQ0FEL0I7O0FBR0EsYUFBT0ksc0JBQVA7QUFDRDs7OztFQWhCa0NkLGdCOztBQW1CckNnQixPQUFPQyxPQUFQLEdBQWlCYixzQkFBakIiLCJmaWxlIjoidW5pZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL2xvY2F0aW9ucy91bmlmb3JtJyksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuLi9zb3VyY2UvY29sb3VyL3ZlcnRleCcpO1xuXG5jb25zdCB7IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgfSA9IHZlcnRleFNoYWRlclNvdXJjZTtcblxuY2xhc3MgQ29sb3VyVW5pZm9ybUxvY2F0aW9ucyBleHRlbmRzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHN1cGVyKG9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24pO1xuICAgIFxuICAgIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgY29sb3VyVW5pZm9ybUxvY2F0aW9ucyA9IFVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0oQ29sb3VyVW5pZm9ybUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clVuaWZvcm1Mb2NhdGlvbnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJVbmlmb3JtTG9jYXRpb25zO1xuIl19