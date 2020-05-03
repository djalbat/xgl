"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lighting = require("../source/lighting");

var _position = require("../source/position");

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AttributeLocations = /*#__PURE__*/function () {
  function AttributeLocations(vertexPositionAttributeLocation, vertexNormalAttributeLocation) {
    _classCallCheck(this, AttributeLocations);

    this.vertexPositionAttributeLocation = vertexPositionAttributeLocation;
    this.vertexNormalAttributeLocation = vertexNormalAttributeLocation;
  }

  _createClass(AttributeLocations, [{
    key: "getVertexPositionAttributeLocation",
    value: function getVertexPositionAttributeLocation() {
      return this.vertexPositionAttributeLocation;
    }
  }, {
    key: "getVertexNormalAttributeLocation",
    value: function getVertexNormalAttributeLocation() {
      return this.vertexNormalAttributeLocation;
    }
  }], [{
    key: "fromProgram",
    value: function fromProgram(Class, program, canvas) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        remainingArguments[_key - 3] = arguments[_key];
      }

      var vertexPositionAttributeLocation = canvas.getAttributeLocation(program, _position.vertexPositionAttributeName),
          vertexNormalAttributeLocation = canvas.getAttributeLocation(program, _lighting.vertexNormalAttributeName),
          attributeLocations = _construct(Class, [vertexPositionAttributeLocation, vertexNormalAttributeLocation].concat(remainingArguments));

      return attributeLocations;
    }
  }]);

  return AttributeLocations;
}();

exports["default"] = AttributeLocations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS5qcyJdLCJuYW1lcyI6WyJBdHRyaWJ1dGVMb2NhdGlvbnMiLCJ2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24iLCJDbGFzcyIsInByb2dyYW0iLCJjYW52YXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJnZXRBdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUiLCJhdHRyaWJ1dGVMb2NhdGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxrQjtBQUNuQiw4QkFBWUMsK0JBQVosRUFBNkNDLDZCQUE3QyxFQUE0RTtBQUFBOztBQUMxRSxTQUFLRCwrQkFBTCxHQUF1Q0EsK0JBQXZDO0FBQ0EsU0FBS0MsNkJBQUwsR0FBcUNBLDZCQUFyQztBQUNEOzs7O3lEQUVvQztBQUNuQyxhQUFPLEtBQUtELCtCQUFaO0FBQ0Q7Ozt1REFFa0M7QUFDakMsYUFBTyxLQUFLQyw2QkFBWjtBQUNEOzs7Z0NBRWtCQyxLLEVBQU9DLE8sRUFBU0MsTSxFQUErQjtBQUFBLHdDQUFwQkMsa0JBQW9CO0FBQXBCQSxRQUFBQSxrQkFBb0I7QUFBQTs7QUFDaEUsVUFBTUwsK0JBQStCLEdBQUdJLE1BQU0sQ0FBQ0Usb0JBQVAsQ0FBNEJILE9BQTVCLEVBQXFDSSxxQ0FBckMsQ0FBeEM7QUFBQSxVQUNNTiw2QkFBNkIsR0FBR0csTUFBTSxDQUFDRSxvQkFBUCxDQUE0QkgsT0FBNUIsRUFBcUNLLG1DQUFyQyxDQUR0QztBQUFBLFVBRU1DLGtCQUFrQixjQUFPUCxLQUFQLEdBQWFGLCtCQUFiLEVBQThDQyw2QkFBOUMsU0FBZ0ZJLGtCQUFoRixFQUZ4Qjs7QUFJQSxhQUFPSSxrQkFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vc291cmNlL2xpZ2h0aW5nXCI7XG5pbXBvcnQgeyB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vc291cmNlL3Bvc2l0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG4iXX0=