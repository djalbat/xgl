'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Upright = require('./upright'),
    vec3 = require('../../../../maths/vec3'),
    CanvasElement = require('../../../../element/canvas');

var add = vec3.add;

var Uprights = function (_CanvasElement) {
  _inherits(Uprights, _CanvasElement);

  function Uprights() {
    _classCallCheck(this, Uprights);

    return _possibleConstructorReturn(this, (Uprights.__proto__ || Object.getPrototypeOf(Uprights)).apply(this, arguments));
  }

  _createClass(Uprights, [{
    key: 'childElements',
    value: function childElements(properties) {
      var position = properties.position,
          rotations = properties.rotations,
          height = properties.height,
          length = properties.length,
          thickness = properties.thickness,
          overallPosition = position,
          elements = [],
          step = 0.5,
          count = length / step;


      for (var index = 1; index < count; index++) {
        var _position = [step * index, 0, thickness / 2, 1];

        elements.push(React.createElement(Upright, { position: add(overallPosition, _position), rotations: rotations, height: height }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3JhaWxpbmcvdXByaWdodHMuanMiXSwibmFtZXMiOlsiVXByaWdodCIsInJlcXVpcmUiLCJ2ZWMzIiwiQ2FudmFzRWxlbWVudCIsImFkZCIsIlVwcmlnaHRzIiwicHJvcGVydGllcyIsInBvc2l0aW9uIiwicm90YXRpb25zIiwiaGVpZ2h0IiwibGVuZ3RoIiwidGhpY2tuZXNzIiwib3ZlcmFsbFBvc2l0aW9uIiwiZWxlbWVudHMiLCJzdGVwIiwiY291bnQiLCJpbmRleCIsInB1c2giLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSx3QkFBUixDQURiO0FBQUEsSUFFTUUsZ0JBQWdCRixRQUFRLDRCQUFSLENBRnRCOztJQUlRRyxHLEdBQVFGLEksQ0FBUkUsRzs7SUFFRkMsUTs7Ozs7Ozs7Ozs7a0NBQ1VDLFUsRUFBWTtBQUFBLFVBQ2hCQyxRQURnQixHQUNtQ0QsVUFEbkMsQ0FDaEJDLFFBRGdCO0FBQUEsVUFDTkMsU0FETSxHQUNtQ0YsVUFEbkMsQ0FDTkUsU0FETTtBQUFBLFVBQ0tDLE1BREwsR0FDbUNILFVBRG5DLENBQ0tHLE1BREw7QUFBQSxVQUNhQyxNQURiLEdBQ21DSixVQURuQyxDQUNhSSxNQURiO0FBQUEsVUFDcUJDLFNBRHJCLEdBQ21DTCxVQURuQyxDQUNxQkssU0FEckI7QUFBQSxVQUVsQkMsZUFGa0IsR0FFQUwsUUFGQTtBQUFBLFVBR2xCTSxRQUhrQixHQUdQLEVBSE87QUFBQSxVQUlsQkMsSUFKa0IsR0FJWCxHQUpXO0FBQUEsVUFLbEJDLEtBTGtCLEdBS1ZMLFNBQVNJLElBTEM7OztBQU94QixXQUFLLElBQUlFLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFELEtBQTVCLEVBQW1DQyxPQUFuQyxFQUE0QztBQUMxQyxZQUFNVCxZQUFXLENBQUNPLE9BQU9FLEtBQVIsRUFBZSxDQUFmLEVBQWtCTCxZQUFZLENBQTlCLEVBQWlDLENBQWpDLENBQWpCOztBQUVBRSxpQkFBU0ksSUFBVCxDQUVFLG9CQUFDLE9BQUQsSUFBUyxVQUFVYixJQUFJUSxlQUFKLEVBQXFCTCxTQUFyQixDQUFuQixFQUFtRCxXQUFXQyxTQUE5RCxFQUF5RSxRQUFRQyxNQUFqRixHQUZGO0FBS0Q7O0FBRUQsYUFBT0ksUUFBUDtBQUNEOzs7bUNBRXFCUCxVLEVBQVk7QUFBRSxhQUFPSCxjQUFjZSxjQUFkLENBQTZCYixRQUE3QixFQUF1Q0MsVUFBdkMsQ0FBUDtBQUE0RDs7OztFQXJCM0VILGE7O0FBd0J2QmdCLE9BQU9DLE9BQVAsR0FBaUJmLFFBQWpCIiwiZmlsZSI6InVwcmlnaHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBVcHJpZ2h0ID0gcmVxdWlyZSgnLi91cHJpZ2h0JyksXG4gICAgICB2ZWMzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vbWF0aHMvdmVjMycpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNvbnN0IHsgYWRkIH0gPSB2ZWMzO1xuXG5jbGFzcyBVcHJpZ2h0cyBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHBvc2l0aW9uLCByb3RhdGlvbnMsIGhlaWdodCwgbGVuZ3RoLCB0aGlja25lc3MgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgb3ZlcmFsbFBvc2l0aW9uID0gcG9zaXRpb24sXG4gICAgICAgICAgZWxlbWVudHMgPSBbXSxcbiAgICAgICAgICBzdGVwID0gMC41LFxuICAgICAgICAgIGNvdW50ID0gbGVuZ3RoIC8gc3RlcDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBbc3RlcCAqIGluZGV4LCAwLCB0aGlja25lc3MgLyAyLCAxXTtcblxuICAgICAgZWxlbWVudHMucHVzaChcblxuICAgICAgICA8VXByaWdodCBwb3NpdGlvbj17YWRkKG92ZXJhbGxQb3NpdGlvbiwgcG9zaXRpb24pfSByb3RhdGlvbnM9e3JvdGF0aW9uc30gaGVpZ2h0PXtoZWlnaHR9Lz5cblxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFVwcmlnaHRzLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVwcmlnaHRzO1xuIl19