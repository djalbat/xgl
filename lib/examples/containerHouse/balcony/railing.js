'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopRail = require('./railing/topRail'),
    Uprights = require('./railing/uprights'),
    CanvasElement = require('../../../element/canvas');

var thickness = TopRail.thickness,
    overallHeight = 3;

var Railing = function (_CanvasElement) {
  _inherits(Railing, _CanvasElement);

  function Railing() {
    _classCallCheck(this, Railing);

    return _possibleConstructorReturn(this, (Railing.__proto__ || Object.getPrototypeOf(Railing)).apply(this, arguments));
  }

  _createClass(Railing, [{
    key: 'childElements',
    value: function childElements(properties) {
      var length = properties.length;


      return [React.createElement(TopRail, { overallHeight: overallHeight, length: length }), React.createElement(Uprights, { overallHeight: overallHeight, length: length, thickness: thickness })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(Railing, properties);
    }
  }]);

  return Railing;
}(CanvasElement);

Object.assign(Railing, {
  thickness: thickness
});

module.exports = Railing;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3JhaWxpbmcuanMiXSwibmFtZXMiOlsiVG9wUmFpbCIsInJlcXVpcmUiLCJVcHJpZ2h0cyIsIkNhbnZhc0VsZW1lbnQiLCJ0aGlja25lc3MiLCJvdmVyYWxsSGVpZ2h0IiwiUmFpbGluZyIsInByb3BlcnRpZXMiLCJsZW5ndGgiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxtQkFBUixDQUFoQjtBQUFBLElBQ01DLFdBQVdELFFBQVEsb0JBQVIsQ0FEakI7QUFBQSxJQUVNRSxnQkFBZ0JGLFFBQVEseUJBQVIsQ0FGdEI7O0FBSU0sSUFBRUcsU0FBRixHQUFnQkosT0FBaEIsQ0FBRUksU0FBRjtBQUFBLElBQ0FDLGFBREEsR0FDZ0IsQ0FEaEI7O0lBR0FDLE87Ozs7Ozs7Ozs7O2tDQUNVQyxVLEVBQVk7QUFBQSxVQUNoQkMsTUFEZ0IsR0FDTEQsVUFESyxDQUNoQkMsTUFEZ0I7OztBQUd4QixhQUFRLENBRU4sb0JBQUMsT0FBRCxJQUFTLGVBQWVILGFBQXhCLEVBQXVDLFFBQVFHLE1BQS9DLEdBRk0sRUFJTixvQkFBQyxRQUFELElBQVUsZUFBZUgsYUFBekIsRUFBd0MsUUFBUUcsTUFBaEQsRUFBd0QsV0FBV0osU0FBbkUsR0FKTSxDQUFSO0FBT0Q7OzttQ0FFcUJHLFUsRUFBWTtBQUFFLGFBQU9KLGNBQWNNLGNBQWQsQ0FBNkJILE9BQTdCLEVBQXNDQyxVQUF0QyxDQUFQO0FBQTJEOzs7O0VBYjNFSixhOztBQWdCdEJPLE9BQU9DLE1BQVAsQ0FBY0wsT0FBZCxFQUF1QjtBQUNyQkYsYUFBV0E7QUFEVSxDQUF2Qjs7QUFJQVEsT0FBT0MsT0FBUCxHQUFpQlAsT0FBakIiLCJmaWxlIjoicmFpbGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVG9wUmFpbCA9IHJlcXVpcmUoJy4vcmFpbGluZy90b3BSYWlsJyksXG4gICAgICBVcHJpZ2h0cyA9IHJlcXVpcmUoJy4vcmFpbGluZy91cHJpZ2h0cycpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNvbnN0IHsgdGhpY2tuZXNzIH0gPSBUb3BSYWlsLFxuICAgICAgb3ZlcmFsbEhlaWdodCA9IDM7XG5cbmNsYXNzIFJhaWxpbmcgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IHByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFRvcFJhaWwgb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gbGVuZ3RoPXtsZW5ndGh9IC8+LFxuXG4gICAgICA8VXByaWdodHMgb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gbGVuZ3RoPXtsZW5ndGh9IHRoaWNrbmVzcz17dGhpY2tuZXNzfSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhSYWlsaW5nLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKFJhaWxpbmcsIHtcbiAgdGhpY2tuZXNzOiB0aGlja25lc3Ncbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJhaWxpbmc7XG4iXX0=