'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../../constants');

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
    key: 'mouseWheelEventHandler',
    value: function mouseWheelEventHandler(delta) {
      var scalar = DISTANCE_SCALAR;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS96b29tLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJESVNUQU5DRV9TQ0FMQVIiLCJNSU5JTVVNX0RJU1RBTkNFIiwiWm9vbSIsImRpc3RhbmNlIiwiZGVsdGEiLCJzY2FsYXIiLCJNYXRoIiwibWF4IiwiaW5pdGlhbERpc3RhbmNlIiwiem9vbSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGlCQUFSLENBQWxCOztJQUVRQyxlLEdBQXNDRixTLENBQXRDRSxlO0lBQWlCQyxnQixHQUFxQkgsUyxDQUFyQkcsZ0I7O0lBRW5CQyxJO0FBQ0osZ0JBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0EsUUFBWjtBQUNEOzs7MkNBRXNCQyxLLEVBQU87QUFDNUIsVUFBTUMsU0FBU0wsZUFBZjs7QUFFQSxXQUFLRyxRQUFMLElBQWlCQyxRQUFRQyxNQUF6Qjs7QUFFQSxXQUFLRixRQUFMLEdBQWdCRyxLQUFLQyxHQUFMLENBQVNOLGdCQUFULEVBQTJCLEtBQUtFLFFBQWhDLENBQWhCO0FBQ0Q7Ozt3Q0FFMEJLLGUsRUFBaUI7QUFDMUMsVUFBTUwsV0FBV0ssZUFBakI7QUFBQSxVQUFrQztBQUM1QkMsYUFBTyxJQUFJUCxJQUFKLENBQVNDLFFBQVQsQ0FEYjs7QUFHQSxhQUFPTSxJQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCVCxJQUFqQiIsImZpbGUiOiJ6b29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBESVNUQU5DRV9TQ0FMQVIsIE1JTklNVU1fRElTVEFOQ0UgfSA9IGNvbnN0YW50czsgXG5cbmNsYXNzIFpvb20ge1xuICBjb25zdHJ1Y3RvcihkaXN0YW5jZSkge1xuICAgIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgfVxuXG4gIGdldERpc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmRpc3RhbmNlO1xuICB9XG5cbiAgbW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSkge1xuICAgIGNvbnN0IHNjYWxhciA9IERJU1RBTkNFX1NDQUxBUjtcbiAgICBcbiAgICB0aGlzLmRpc3RhbmNlIC09IGRlbHRhICogc2NhbGFyO1xuXG4gICAgdGhpcy5kaXN0YW5jZSA9IE1hdGgubWF4KE1JTklNVU1fRElTVEFOQ0UsIHRoaXMuZGlzdGFuY2UpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUluaXRpYWxEaXN0YW5jZShpbml0aWFsRGlzdGFuY2UpIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IGluaXRpYWxEaXN0YW5jZSwgLy8vXG4gICAgICAgICAgem9vbSA9IG5ldyBab29tKGRpc3RhbmNlKTtcbiAgICBcbiAgICByZXR1cm4gem9vbTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFpvb207XG4iXX0=