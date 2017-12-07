'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    BalconySection = require('../balcony/section'),
    Railing = require('../balcony/railing');

var thickness = Railing.thickness;

var MainBalcony = function (_CanvasElement) {
  _inherits(MainBalcony, _CanvasElement);

  function MainBalcony() {
    _classCallCheck(this, MainBalcony);

    return _possibleConstructorReturn(this, (MainBalcony.__proto__ || Object.getPrototypeOf(MainBalcony)).apply(this, arguments));
  }

  _createClass(MainBalcony, [{
    key: 'childElements',
    value: function childElements() {
      return [

      // <BalconySection position={[ 40, 19,  0 ]} />,
      // <BalconySection position={[ 44, 19,  0 ]} />,
      // <BalconySection position={[ 36, 19,  0 ]} />,
      // <BalconySection position={[ 32, 19,  0 ]} />,
      // <BalconySection position={[ 28, 19,  0 ]} />,
      // <BalconySection position={[ 40, 19, 16 ]} />,
      // <BalconySection position={[ 44, 19, 16 ]} />,

      // <Railing position={[ 28, 19,            0 ]} length={20} />,
      // <Railing position={[ 20, 19, 32-thickness ]} length={28} />,
      // <Railing position={[ 48, 19, 0            ]} rotations={[ 0, -90, 0]} length={32} />,

      React.createElement(Railing, { length: 6 })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(MainBalcony, properties);
    }
  }]);

  return MainBalcony;
}(CanvasElement);

module.exports = MainBalcony;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L21haW4uanMiXSwibmFtZXMiOlsiQ2FudmFzRWxlbWVudCIsInJlcXVpcmUiLCJCYWxjb255U2VjdGlvbiIsIlJhaWxpbmciLCJ0aGlja25lc3MiLCJNYWluQmFsY29ueSIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLHlCQUFSLENBQXRCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBRHZCO0FBQUEsSUFFTUUsVUFBVUYsUUFBUSxvQkFBUixDQUZoQjs7SUFJUUcsUyxHQUFjRCxPLENBQWRDLFM7O0lBRUZDLFc7Ozs7Ozs7Ozs7O29DQUNZO0FBQ2QsYUFBUTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQUMsT0FBRCxJQUFTLFFBQVEsQ0FBakIsR0FkTSxDQUFSO0FBaUJEOzs7bUNBRXFCQyxVLEVBQVk7QUFBRSxhQUFPTixjQUFjTyxjQUFkLENBQTZCRixXQUE3QixFQUEwQ0MsVUFBMUMsQ0FBUDtBQUErRDs7OztFQXJCM0VOLGE7O0FBd0IxQlEsT0FBT0MsT0FBUCxHQUFpQkosV0FBakIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBCYWxjb255U2VjdGlvbiA9IHJlcXVpcmUoJy4uL2JhbGNvbnkvc2VjdGlvbicpLFxuICAgICAgUmFpbGluZyA9IHJlcXVpcmUoJy4uL2JhbGNvbnkvcmFpbGluZycpO1xuXG5jb25zdCB7IHRoaWNrbmVzcyB9ID0gUmFpbGluZztcblxuY2xhc3MgTWFpbkJhbGNvbnkgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgLy8gPEJhbGNvbnlTZWN0aW9uIHBvc2l0aW9uPXtbIDQwLCAxOSwgIDAgXX0gLz4sXG4gICAgICAvLyA8QmFsY29ueVNlY3Rpb24gcG9zaXRpb249e1sgNDQsIDE5LCAgMCBdfSAvPixcbiAgICAgIC8vIDxCYWxjb255U2VjdGlvbiBwb3NpdGlvbj17WyAzNiwgMTksICAwIF19IC8+LFxuICAgICAgLy8gPEJhbGNvbnlTZWN0aW9uIHBvc2l0aW9uPXtbIDMyLCAxOSwgIDAgXX0gLz4sXG4gICAgICAvLyA8QmFsY29ueVNlY3Rpb24gcG9zaXRpb249e1sgMjgsIDE5LCAgMCBdfSAvPixcbiAgICAgIC8vIDxCYWxjb255U2VjdGlvbiBwb3NpdGlvbj17WyA0MCwgMTksIDE2IF19IC8+LFxuICAgICAgLy8gPEJhbGNvbnlTZWN0aW9uIHBvc2l0aW9uPXtbIDQ0LCAxOSwgMTYgXX0gLz4sXG5cbiAgICAgIC8vIDxSYWlsaW5nIHBvc2l0aW9uPXtbIDI4LCAxOSwgICAgICAgICAgICAwIF19IGxlbmd0aD17MjB9IC8+LFxuICAgICAgLy8gPFJhaWxpbmcgcG9zaXRpb249e1sgMjAsIDE5LCAzMi10aGlja25lc3MgXX0gbGVuZ3RoPXsyOH0gLz4sXG4gICAgICAvLyA8UmFpbGluZyBwb3NpdGlvbj17WyA0OCwgMTksIDAgICAgICAgICAgICBdfSByb3RhdGlvbnM9e1sgMCwgLTkwLCAwXX0gbGVuZ3RoPXszMn0gLz4sXG5cbiAgICAgIDxSYWlsaW5nIGxlbmd0aD17Nn0gLz4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE1haW5CYWxjb255LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1haW5CYWxjb255O1xuIl19