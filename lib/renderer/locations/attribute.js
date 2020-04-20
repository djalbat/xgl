"use strict";

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var lightingSource = require("../source/lighting"),
    positionSource = require("../source/position");

var vertexNormalAttributeName = lightingSource.vertexNormalAttributeName,
    vertexPositionAttributeName = positionSource.vertexPositionAttributeName;

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

      var vertexPositionAttributeLocation = canvas.getAttributeLocation(program, vertexPositionAttributeName),
          vertexNormalAttributeLocation = canvas.getAttributeLocation(program, vertexNormalAttributeName),
          attributeLocations = _construct(Class, [vertexPositionAttributeLocation, vertexNormalAttributeLocation].concat(remainingArguments));

      return attributeLocations;
    }
  }]);

  return AttributeLocations;
}();

module.exports = AttributeLocations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS5qcyJdLCJuYW1lcyI6WyJsaWdodGluZ1NvdXJjZSIsInJlcXVpcmUiLCJwb3NpdGlvblNvdXJjZSIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUiLCJ2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUiLCJBdHRyaWJ1dGVMb2NhdGlvbnMiLCJ2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24iLCJDbGFzcyIsInByb2dyYW0iLCJjYW52YXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJnZXRBdHRyaWJ1dGVMb2NhdGlvbiIsImF0dHJpYnV0ZUxvY2F0aW9ucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsR0FBR0MsT0FBTyxDQUFDLG9CQUFELENBQTlCO0FBQUEsSUFDTUMsY0FBYyxHQUFHRCxPQUFPLENBQUMsb0JBQUQsQ0FEOUI7O0FBR00sSUFBRUUseUJBQUYsR0FBZ0NILGNBQWhDLENBQUVHLHlCQUFGO0FBQUEsSUFDRUMsMkJBREYsR0FDa0NGLGNBRGxDLENBQ0VFLDJCQURGOztJQUdBQyxrQjtBQUNKLDhCQUFZQywrQkFBWixFQUE2Q0MsNkJBQTdDLEVBQTRFO0FBQUE7O0FBQzFFLFNBQUtELCtCQUFMLEdBQXVDQSwrQkFBdkM7QUFDQSxTQUFLQyw2QkFBTCxHQUFxQ0EsNkJBQXJDO0FBQ0Q7Ozs7eURBRW9DO0FBQ25DLGFBQU8sS0FBS0QsK0JBQVo7QUFDRDs7O3VEQUVrQztBQUNqQyxhQUFPLEtBQUtDLDZCQUFaO0FBQ0Q7OztnQ0FFa0JDLEssRUFBT0MsTyxFQUFTQyxNLEVBQStCO0FBQUEsd0NBQXBCQyxrQkFBb0I7QUFBcEJBLFFBQUFBLGtCQUFvQjtBQUFBOztBQUNoRSxVQUFNTCwrQkFBK0IsR0FBR0ksTUFBTSxDQUFDRSxvQkFBUCxDQUE0QkgsT0FBNUIsRUFBcUNMLDJCQUFyQyxDQUF4QztBQUFBLFVBQ01HLDZCQUE2QixHQUFHRyxNQUFNLENBQUNFLG9CQUFQLENBQTRCSCxPQUE1QixFQUFxQ04seUJBQXJDLENBRHRDO0FBQUEsVUFFTVUsa0JBQWtCLGNBQU9MLEtBQVAsR0FBYUYsK0JBQWIsRUFBOENDLDZCQUE5QyxTQUFnRkksa0JBQWhGLEVBRnhCOztBQUlBLGFBQU9FLGtCQUFQO0FBQ0Q7Ozs7OztBQUdIQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJWLGtCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBsaWdodGluZ1NvdXJjZSA9IHJlcXVpcmUoXCIuLi9zb3VyY2UvbGlnaHRpbmdcIiksXG4gICAgICBwb3NpdGlvblNvdXJjZSA9IHJlcXVpcmUoXCIuLi9zb3VyY2UvcG9zaXRpb25cIik7XG5cbmNvbnN0IHsgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSB9ID0gbGlnaHRpbmdTb3VyY2UsXG4gICAgICB7IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSB9ID0gcG9zaXRpb25Tb3VyY2U7XG5cbmNsYXNzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXR0cmlidXRlTG9jYXRpb25zO1xuIl19