"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var constants = require("../constants");

var DELTA_SCALAR = constants.DELTA_SCALAR,
    MINIMUM_DISTANCE = constants.MINIMUM_DISTANCE;

var Zoom = /*#__PURE__*/function () {
  function Zoom(distance) {
    _classCallCheck(this, Zoom);

    this.distance = distance;
  }

  _createClass(Zoom, [{
    key: "getDistance",
    value: function getDistance() {
      return this.distance;
    }
  }, {
    key: "updateDistance",
    value: function updateDistance(mouseWheelDelta) {
      this.distance -= mouseWheelDelta * DELTA_SCALAR;
      this.distance = Math.max(MINIMUM_DISTANCE, this.distance);
    }
  }], [{
    key: "fromInitialDistance",
    value: function fromInitialDistance(initialDistance) {
      var distance = initialDistance,
          ///
      zoom = new Zoom(distance);
      return zoom;
    }
  }]);

  return Zoom;
}();

module.exports = Zoom;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInpvb20uanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwicmVxdWlyZSIsIkRFTFRBX1NDQUxBUiIsIk1JTklNVU1fRElTVEFOQ0UiLCJab29tIiwiZGlzdGFuY2UiLCJtb3VzZVdoZWVsRGVsdGEiLCJNYXRoIiwibWF4IiwiaW5pdGlhbERpc3RhbmNlIiwiem9vbSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0lBRVFDLFksR0FBbUNGLFMsQ0FBbkNFLFk7SUFBY0MsZ0IsR0FBcUJILFMsQ0FBckJHLGdCOztJQUVoQkMsSTtBQUNKLGdCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtBLFFBQVo7QUFDRDs7O21DQUVjQyxlLEVBQWlCO0FBQzlCLFdBQUtELFFBQUwsSUFBaUJDLGVBQWUsR0FBR0osWUFBbkM7QUFFQSxXQUFLRyxRQUFMLEdBQWdCRSxJQUFJLENBQUNDLEdBQUwsQ0FBU0wsZ0JBQVQsRUFBMkIsS0FBS0UsUUFBaEMsQ0FBaEI7QUFDRDs7O3dDQUUwQkksZSxFQUFpQjtBQUMxQyxVQUFNSixRQUFRLEdBQUdJLGVBQWpCO0FBQUEsVUFBa0M7QUFDNUJDLE1BQUFBLElBQUksR0FBRyxJQUFJTixJQUFKLENBQVNDLFFBQVQsQ0FEYjtBQUdBLGFBQU9LLElBQVA7QUFDRDs7Ozs7O0FBR0hDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlIsSUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcblxuY29uc3QgeyBERUxUQV9TQ0FMQVIsIE1JTklNVU1fRElTVEFOQ0UgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgWm9vbSB7XG4gIGNvbnN0cnVjdG9yKGRpc3RhbmNlKSB7XG4gICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzdGFuY2U7XG4gIH1cblxuICB1cGRhdGVEaXN0YW5jZShtb3VzZVdoZWVsRGVsdGEpIHtcbiAgICB0aGlzLmRpc3RhbmNlIC09IG1vdXNlV2hlZWxEZWx0YSAqIERFTFRBX1NDQUxBUjtcblxuICAgIHRoaXMuZGlzdGFuY2UgPSBNYXRoLm1heChNSU5JTVVNX0RJU1RBTkNFLCB0aGlzLmRpc3RhbmNlKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBpbml0aWFsRGlzdGFuY2UsIC8vL1xuICAgICAgICAgIHpvb20gPSBuZXcgWm9vbShkaXN0YW5jZSk7XG4gICAgXG4gICAgcmV0dXJuIHpvb207XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBab29tO1xuIl19