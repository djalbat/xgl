'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var plane = require('../plane'),
    TexturedCanvasElement = require('../../../element/canvas/textured');

var initialVertexPositionData = plane.initialVertexPositionData;

var TexturedPlane = function (_TexturedCanvasElemen) {
  _inherits(TexturedPlane, _TexturedCanvasElemen);

  function TexturedPlane() {
    _classCallCheck(this, TexturedPlane);

    return _possibleConstructorReturn(this, (TexturedPlane.__proto__ || Object.getPrototypeOf(TexturedPlane)).apply(this, arguments));
  }

  _createClass(TexturedPlane, [{
    key: 'getInitialVertexPositionData',
    value: function getInitialVertexPositionData() {
      return initialVertexPositionData;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return TexturedCanvasElement.fromProperties(TexturedPlane, properties);
    }
  }]);

  return TexturedPlane;
}(TexturedCanvasElement);

module.exports = TexturedPlane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vdGV4dHVyZWQvcGxhbmUuanMiXSwibmFtZXMiOlsicGxhbmUiLCJyZXF1aXJlIiwiVGV4dHVyZWRDYW52YXNFbGVtZW50IiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsIlRleHR1cmVkUGxhbmUiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsVUFBUixDQUFkO0FBQUEsSUFDTUMsd0JBQXdCRCxRQUFRLGtDQUFSLENBRDlCOztJQUdRRSx5QixHQUE4QkgsSyxDQUE5QkcseUI7O0lBRUZDLGE7Ozs7Ozs7Ozs7O21EQUMyQjtBQUM3QixhQUFPRCx5QkFBUDtBQUNEOzs7bUNBRXFCRSxVLEVBQVk7QUFBRSxhQUFPSCxzQkFBc0JJLGNBQXRCLENBQXFDRixhQUFyQyxFQUFvREMsVUFBcEQsQ0FBUDtBQUF5RTs7OztFQUxuRkgscUI7O0FBUTVCSyxPQUFPQyxPQUFQLEdBQWlCSixhQUFqQiIsImZpbGUiOiJwbGFuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGxhbmUgPSByZXF1aXJlKCcuLi9wbGFuZScpLFxuICAgICAgVGV4dHVyZWRDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMvdGV4dHVyZWQnKTtcblxuY29uc3QgeyBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIH0gPSBwbGFuZTtcblxuY2xhc3MgVGV4dHVyZWRQbGFuZSBleHRlbmRzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB7XG4gIGdldEluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEoKSB7XG4gICAgcmV0dXJuIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGE7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gVGV4dHVyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVkUGxhbmUsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRQbGFuZTtcbiJdfQ==