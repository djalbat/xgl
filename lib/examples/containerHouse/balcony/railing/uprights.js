'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Upright = require('./upright'),
    CanvasElement = require('../../../../element/canvas');

var radius = Upright.radius;

var Uprights = function (_CanvasElement) {
  _inherits(Uprights, _CanvasElement);

  function Uprights() {
    _classCallCheck(this, Uprights);

    return _possibleConstructorReturn(this, (Uprights.__proto__ || Object.getPrototypeOf(Uprights)).apply(this, arguments));
  }

  _createClass(Uprights, [{
    key: 'childElements',
    value: function childElements(properties) {
      var overallHeight = properties.overallHeight,
          length = properties.length,
          thickness = properties.thickness,
          step = 0.5,
          count = length / step,
          elements = [];


      for (var index = 1; index < count; index++) {
        var position = [step * index - radius, 0, thickness / 2 + radius];

        elements.push(React.createElement(Upright, { position: position, overallHeight: overallHeight }));
      }

      return elements;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(Uprights, properties);
    }
  }]);

  return Uprights;
}(CanvasElement);

module.exports = Uprights;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3JhaWxpbmcvdXByaWdodHMuanMiXSwibmFtZXMiOlsiVXByaWdodCIsInJlcXVpcmUiLCJDYW52YXNFbGVtZW50IiwicmFkaXVzIiwiVXByaWdodHMiLCJwcm9wZXJ0aWVzIiwib3ZlcmFsbEhlaWdodCIsImxlbmd0aCIsInRoaWNrbmVzcyIsInN0ZXAiLCJjb3VudCIsImVsZW1lbnRzIiwiaW5kZXgiLCJwb3NpdGlvbiIsInB1c2giLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLDRCQUFSLENBRHRCOztJQUdRRSxNLEdBQVdILE8sQ0FBWEcsTTs7SUFFRkMsUTs7Ozs7Ozs7Ozs7a0NBQ1VDLFUsRUFBWTtBQUFBLFVBQ2hCQyxhQURnQixHQUNxQkQsVUFEckIsQ0FDaEJDLGFBRGdCO0FBQUEsVUFDREMsTUFEQyxHQUNxQkYsVUFEckIsQ0FDREUsTUFEQztBQUFBLFVBQ09DLFNBRFAsR0FDcUJILFVBRHJCLENBQ09HLFNBRFA7QUFBQSxVQUVsQkMsSUFGa0IsR0FFWCxHQUZXO0FBQUEsVUFHbEJDLEtBSGtCLEdBR1ZILFNBQVNFLElBSEM7QUFBQSxVQUlsQkUsUUFKa0IsR0FJUCxFQUpPOzs7QUFNeEIsV0FBSyxJQUFJQyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRRixLQUE1QixFQUFtQ0UsT0FBbkMsRUFBNEM7QUFDMUMsWUFBTUMsV0FBVyxDQUFDSixPQUFPRyxLQUFQLEdBQWVULE1BQWhCLEVBQXdCLENBQXhCLEVBQTJCSyxZQUFZLENBQVosR0FBZ0JMLE1BQTNDLENBQWpCOztBQUVBUSxpQkFBU0csSUFBVCxDQUVFLG9CQUFDLE9BQUQsSUFBUyxVQUFVRCxRQUFuQixFQUE2QixlQUFlUCxhQUE1QyxHQUZGO0FBS0Q7O0FBRUQsYUFBT0ssUUFBUDtBQUNEOzs7bUNBRXFCTixVLEVBQVk7QUFBRSxhQUFPSCxjQUFjYSxjQUFkLENBQTZCWCxRQUE3QixFQUF1Q0MsVUFBdkMsQ0FBUDtBQUE0RDs7OztFQXBCM0VILGE7O0FBdUJ2QmMsT0FBT0MsT0FBUCxHQUFpQmIsUUFBakIiLCJmaWxlIjoidXByaWdodHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFVwcmlnaHQgPSByZXF1aXJlKCcuL3VwcmlnaHQnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jb25zdCB7IHJhZGl1cyB9ID0gVXByaWdodDtcblxuY2xhc3MgVXByaWdodHMgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvdmVyYWxsSGVpZ2h0LCBsZW5ndGgsIHRoaWNrbmVzcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBzdGVwID0gMC41LFxuICAgICAgICAgIGNvdW50ID0gbGVuZ3RoIC8gc3RlcCxcbiAgICAgICAgICBlbGVtZW50cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IFtzdGVwICogaW5kZXggLSByYWRpdXMsIDAsIHRoaWNrbmVzcyAvIDIgKyByYWRpdXNdO1xuXG4gICAgICBlbGVtZW50cy5wdXNoKFxuXG4gICAgICAgIDxVcHJpZ2h0IHBvc2l0aW9uPXtwb3NpdGlvbn0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gLz5cblxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFVwcmlnaHRzLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVwcmlnaHRzO1xuIl19