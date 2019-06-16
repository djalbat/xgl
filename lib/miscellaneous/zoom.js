'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants');

var DISTANCE_SCALAR = constants.DISTANCE_SCALAR,
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
    value: function updateDistance(delta) {
      var scalar = DISTANCE_SCALAR; ///

      this.distance -= delta * scalar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL3pvb20uanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwicmVxdWlyZSIsIkRJU1RBTkNFX1NDQUxBUiIsIk1JTklNVU1fRElTVEFOQ0UiLCJab29tIiwiZGlzdGFuY2UiLCJkZWx0YSIsInNjYWxhciIsIk1hdGgiLCJtYXgiLCJpbml0aWFsRGlzdGFuY2UiLCJ6b29tIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsY0FBUixDQUFsQjs7SUFFUUMsZSxHQUFzQ0YsUyxDQUF0Q0UsZTtJQUFpQkMsZ0IsR0FBcUJILFMsQ0FBckJHLGdCOztJQUVuQkMsSTtBQUNKLGdCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtBLFFBQVo7QUFDRDs7O21DQUVjQyxLLEVBQU87QUFDcEIsVUFBTUMsU0FBU0wsZUFBZixDQURvQixDQUNZOztBQUVoQyxXQUFLRyxRQUFMLElBQWlCQyxRQUFRQyxNQUF6Qjs7QUFFQSxXQUFLRixRQUFMLEdBQWdCRyxLQUFLQyxHQUFMLENBQVNOLGdCQUFULEVBQTJCLEtBQUtFLFFBQWhDLENBQWhCO0FBQ0Q7Ozt3Q0FFMEJLLGUsRUFBaUI7QUFDMUMsVUFBTUwsV0FBV0ssZUFBakI7QUFBQSxVQUFrQztBQUM1QkMsYUFBTyxJQUFJUCxJQUFKLENBQVNDLFFBQVQsQ0FEYjs7QUFHQSxhQUFPTSxJQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCVCxJQUFqQiIsImZpbGUiOiJ6b29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBESVNUQU5DRV9TQ0FMQVIsIE1JTklNVU1fRElTVEFOQ0UgfSA9IGNvbnN0YW50czsgXG5cbmNsYXNzIFpvb20ge1xuICBjb25zdHJ1Y3RvcihkaXN0YW5jZSkge1xuICAgIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgfVxuXG4gIGdldERpc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmRpc3RhbmNlO1xuICB9XG5cbiAgdXBkYXRlRGlzdGFuY2UoZGVsdGEpIHtcbiAgICBjb25zdCBzY2FsYXIgPSBESVNUQU5DRV9TQ0FMQVI7IC8vL1xuICAgIFxuICAgIHRoaXMuZGlzdGFuY2UgLT0gZGVsdGEgKiBzY2FsYXI7XG5cbiAgICB0aGlzLmRpc3RhbmNlID0gTWF0aC5tYXgoTUlOSU1VTV9ESVNUQU5DRSwgdGhpcy5kaXN0YW5jZSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0gaW5pdGlhbERpc3RhbmNlLCAvLy9cbiAgICAgICAgICB6b29tID0gbmV3IFpvb20oZGlzdGFuY2UpO1xuICAgIFxuICAgIHJldHVybiB6b29tO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWm9vbTtcbiJdfQ==