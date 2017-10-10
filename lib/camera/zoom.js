'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants');

var MINIMUM_DISTANCE = constants.MINIMUM_DISTANCE;

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
      this.distance += delta * 5; ///

      this.distance = Math.max(MINIMUM_DISTANCE, this.distance);
    }
  }], [{
    key: 'fromInitialPosition',
    value: function fromInitialPosition(initialPosition) {
      var initialDistance = -initialPosition[2],
          ///
      distance = initialDistance,
          zoom = new Zoom(distance);

      return zoom;
    }
  }]);

  return Zoom;
}();

module.exports = Zoom;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvem9vbS5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJyZXF1aXJlIiwiTUlOSU1VTV9ESVNUQU5DRSIsIlpvb20iLCJkaXN0YW5jZSIsImRlbHRhIiwiTWF0aCIsIm1heCIsImluaXRpYWxQb3NpdGlvbiIsImluaXRpYWxEaXN0YW5jZSIsInpvb20iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCOztJQUVRQyxnQixHQUFxQkYsUyxDQUFyQkUsZ0I7O0lBRUZDLEk7QUFDSixnQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQSxRQUFaO0FBQ0Q7OzsyQ0FFc0JDLEssRUFBTztBQUM1QixXQUFLRCxRQUFMLElBQWlCQyxRQUFRLENBQXpCLENBRDRCLENBQ0M7O0FBRTdCLFdBQUtELFFBQUwsR0FBZ0JFLEtBQUtDLEdBQUwsQ0FBU0wsZ0JBQVQsRUFBMkIsS0FBS0UsUUFBaEMsQ0FBaEI7QUFDRDs7O3dDQUUwQkksZSxFQUFpQjtBQUMxQyxVQUFNQyxrQkFBa0IsQ0FBQ0QsZ0JBQWdCLENBQWhCLENBQXpCO0FBQUEsVUFBNkM7QUFDdkNKLGlCQUFXSyxlQURqQjtBQUFBLFVBRU1DLE9BQU8sSUFBSVAsSUFBSixDQUFTQyxRQUFULENBRmI7O0FBSUEsYUFBT00sSUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQlQsSUFBakIiLCJmaWxlIjoiem9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgTUlOSU1VTV9ESVNUQU5DRSB9ID0gY29uc3RhbnRzOyBcblxuY2xhc3MgWm9vbSB7XG4gIGNvbnN0cnVjdG9yKGRpc3RhbmNlKSB7XG4gICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzdGFuY2U7XG4gIH1cblxuICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKSB7XG4gICAgdGhpcy5kaXN0YW5jZSArPSBkZWx0YSAqIDU7ICAvLy9cblxuICAgIHRoaXMuZGlzdGFuY2UgPSBNYXRoLm1heChNSU5JTVVNX0RJU1RBTkNFLCB0aGlzLmRpc3RhbmNlKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Jbml0aWFsUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uKSB7XG4gICAgY29uc3QgaW5pdGlhbERpc3RhbmNlID0gLWluaXRpYWxQb3NpdGlvblsyXSwgLy8vXG4gICAgICAgICAgZGlzdGFuY2UgPSBpbml0aWFsRGlzdGFuY2UsXG4gICAgICAgICAgem9vbSA9IG5ldyBab29tKGRpc3RhbmNlKTtcbiAgICBcbiAgICByZXR1cm4gem9vbTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFpvb207XG4iXX0=