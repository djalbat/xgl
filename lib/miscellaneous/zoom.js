'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants');

var DELTA_SCALAR = constants.DELTA_SCALAR,
    MINIMUM_DISTANCE = constants.MINIMUM_DISTANCE;

var Zoom = function () {
  function Zoom(distance) {
    _classCallCheck(this, Zoom);

    this.distance = distance;
  }

  _createClass(Zoom, [{
    key: 'getDistance',
    value: function getDistance() {
      return this.distance;
    }
  }, {
    key: 'updateDistance',
    value: function updateDistance(mouseWheelDelta) {
      this.distance -= mouseWheelDelta * DELTA_SCALAR;

      this.distance = Math.max(MINIMUM_DISTANCE, this.distance);
    }
  }], [{
    key: 'fromInitialDistance',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3pvb20uanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwicmVxdWlyZSIsIkRFTFRBX1NDQUxBUiIsIk1JTklNVU1fRElTVEFOQ0UiLCJab29tIiwiZGlzdGFuY2UiLCJtb3VzZVdoZWVsRGVsdGEiLCJNYXRoIiwibWF4IiwiaW5pdGlhbERpc3RhbmNlIiwiem9vbSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7O0lBRVFDLFksR0FBbUNGLFMsQ0FBbkNFLFk7SUFBY0MsZ0IsR0FBcUJILFMsQ0FBckJHLGdCOztJQUVoQkMsSTtBQUNKLGdCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtBLFFBQVo7QUFDRDs7O21DQUVjQyxlLEVBQWlCO0FBQzlCLFdBQUtELFFBQUwsSUFBaUJDLGtCQUFrQkosWUFBbkM7O0FBRUEsV0FBS0csUUFBTCxHQUFnQkUsS0FBS0MsR0FBTCxDQUFTTCxnQkFBVCxFQUEyQixLQUFLRSxRQUFoQyxDQUFoQjtBQUNEOzs7d0NBRTBCSSxlLEVBQWlCO0FBQzFDLFVBQU1KLFdBQVdJLGVBQWpCO0FBQUEsVUFBa0M7QUFDNUJDLGFBQU8sSUFBSU4sSUFBSixDQUFTQyxRQUFULENBRGI7O0FBR0EsYUFBT0ssSUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQlIsSUFBakIiLCJmaWxlIjoiem9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgREVMVEFfU0NBTEFSLCBNSU5JTVVNX0RJU1RBTkNFIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIFpvb20ge1xuICBjb25zdHJ1Y3RvcihkaXN0YW5jZSkge1xuICAgIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgfVxuXG4gIGdldERpc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmRpc3RhbmNlO1xuICB9XG5cbiAgdXBkYXRlRGlzdGFuY2UobW91c2VXaGVlbERlbHRhKSB7XG4gICAgdGhpcy5kaXN0YW5jZSAtPSBtb3VzZVdoZWVsRGVsdGEgKiBERUxUQV9TQ0FMQVI7XG5cbiAgICB0aGlzLmRpc3RhbmNlID0gTWF0aC5tYXgoTUlOSU1VTV9ESVNUQU5DRSwgdGhpcy5kaXN0YW5jZSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0gaW5pdGlhbERpc3RhbmNlLCAvLy9cbiAgICAgICAgICB6b29tID0gbmV3IFpvb20oZGlzdGFuY2UpO1xuICAgIFxuICAgIHJldHVybiB6b29tO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWm9vbTtcbiJdfQ==