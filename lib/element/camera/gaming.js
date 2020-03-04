'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Pan = require('../../miscellaneous/pan'),
    Tilt = require('../../miscellaneous/tilt'),
    Camera = require('../camera'),
    vectorMaths = require('../../maths/vector'),
    matrixUtilities = require('../../utilities/matrix');

var zero2 = vectorMaths.zero2,
    offsetsMatrixFromOffsets = matrixUtilities.offsetsMatrixFromOffsets,
    rotationsMatrixFromAngles = matrixUtilities.rotationsMatrixFromAngles,
    positionMatrixFromNothing = matrixUtilities.positionMatrixFromNothing,
    projectionMatrixFromWidthAndHeight = matrixUtilities.projectionMatrixFromWidthAndHeight,
    normalsMatrixFromRotationsMatrix = matrixUtilities.normalsMatrixFromRotationsMatrix;
var defaultInitialAngles = zero2(),
    defaultInitialPosition = [0, 0, 5];

var GamingCamera = /*#__PURE__*/function (_Camera) {
  _inherits(GamingCamera, _Camera);

  function GamingCamera() {
    _classCallCheck(this, GamingCamera);

    return _possibleConstructorReturn(this, _getPrototypeOf(GamingCamera).apply(this, arguments));
  }

  _createClass(GamingCamera, [{
    key: "update",
    value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback) {
      var pan = this.getPan(),
          tilt = this.getTilt();

      if (false) {///
      } else if (shiftKeyDown) {
        pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt);
      } else if (mouseWheelDelta !== 0) {
        pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt);
      } else {
        tilt.updateAngles(relativeMouseCoordinates);
      }

      var angles = tilt.getAngles(),
          offsets = pan.getOffsets(),
          offsetsMatrix = offsetsMatrixFromOffsets(offsets),
          positionMatrix = positionMatrixFromNothing(),
          rotationsMatrix = rotationsMatrixFromAngles(angles),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix);
      callback(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var _properties$initialAn = properties.initialAngles,
          initialAngles = _properties$initialAn === void 0 ? defaultInitialAngles : _properties$initialAn,
          _properties$initialPo = properties.initialPosition,
          initialPosition = _properties$initialPo === void 0 ? defaultInitialPosition : _properties$initialPo,
          flipped = true,
          pan = Pan.fromInitialPosition(initialPosition),
          tilt = Tilt.fromInitialAnglesAndFlipped(initialAngles, flipped),
          gamingCamera = Camera.fromProperties(GamingCamera, properties, pan, tilt);
      return gamingCamera;
    }
  }]);

  return GamingCamera;
}(Camera);

module.exports = GamingCamera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWluZy5qcyJdLCJuYW1lcyI6WyJQYW4iLCJyZXF1aXJlIiwiVGlsdCIsIkNhbWVyYSIsInZlY3Rvck1hdGhzIiwibWF0cml4VXRpbGl0aWVzIiwiemVybzIiLCJvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMiLCJyb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzIiwicG9zaXRpb25NYXRyaXhGcm9tTm90aGluZyIsInByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQiLCJub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCIsImRlZmF1bHRJbml0aWFsQW5nbGVzIiwiZGVmYXVsdEluaXRpYWxQb3NpdGlvbiIsIkdhbWluZ0NhbWVyYSIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsIm1vdXNlV2hlZWxEZWx0YSIsInNoaWZ0S2V5RG93biIsIndpZHRoIiwiaGVpZ2h0IiwiY2FsbGJhY2siLCJwYW4iLCJnZXRQYW4iLCJ0aWx0IiwiZ2V0VGlsdCIsInVwZGF0ZU9mZnNldHMiLCJ1cGRhdGVBbmdsZXMiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJvZmZzZXRzIiwiZ2V0T2Zmc2V0cyIsIm9mZnNldHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxzTWF0cml4IiwicHJvcGVydGllcyIsImluaXRpYWxBbmdsZXMiLCJpbml0aWFsUG9zaXRpb24iLCJmbGlwcGVkIiwiZnJvbUluaXRpYWxQb3NpdGlvbiIsImZyb21Jbml0aWFsQW5nbGVzQW5kRmxpcHBlZCIsImdhbWluZ0NhbWVyYSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsR0FBRyxHQUFHQyxPQUFPLENBQUMseUJBQUQsQ0FBbkI7QUFBQSxJQUNNQyxJQUFJLEdBQUdELE9BQU8sQ0FBQywwQkFBRCxDQURw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QUNEOzs7O0VBMUN3QnZDLE07O0FBNkMzQnlDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQi9CLFlBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQYW4gPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3BhbicpLFxuICAgICAgVGlsdCA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdCcpLFxuXG4gICAgICBDYW1lcmEgPSByZXF1aXJlKCcuLi9jYW1lcmEnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBtYXRyaXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvbWF0cml4Jyk7XG5cbmNvbnN0IHsgemVybzIgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsIHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMsIHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcsIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQsIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4IH0gPSBtYXRyaXhVdGlsaXRpZXM7XG5cbmNvbnN0IGRlZmF1bHRJbml0aWFsQW5nbGVzID0gemVybzIoKSxcbiAgICAgIGRlZmF1bHRJbml0aWFsUG9zaXRpb24gPSBbIDAsIDAsIDUgXTtcblxuXG5jbGFzcyBHYW1pbmdDYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuXG5cblxuXG5cblxuICB1cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgd2lkdGgsIGhlaWdodCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBwYW4gPSB0aGlzLmdldFBhbigpLFxuICAgICAgICAgIHRpbHQgPSB0aGlzLmdldFRpbHQoKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIHBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCB0aWx0KTtcbiAgICB9IGVsc2UgaWYgKG1vdXNlV2hlZWxEZWx0YSAhPT0gMCkge1xuICAgICAgcGFuLnVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHRpbHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGFuZ2xlcyA9IHRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHBhbi5nZXRPZmZzZXRzKCksXG5cbiAgICAgICAgICBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZygpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KTtcblxuICAgIGNhbGxiYWNrKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxBbmdsZXMgPSBkZWZhdWx0SW5pdGlhbEFuZ2xlcywgaW5pdGlhbFBvc2l0aW9uID0gZGVmYXVsdEluaXRpYWxQb3NpdGlvbiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBmbGlwcGVkID0gdHJ1ZSxcbiAgICAgICAgICBwYW4gPSBQYW4uZnJvbUluaXRpYWxQb3NpdGlvbihpbml0aWFsUG9zaXRpb24pLFxuICAgICAgICAgIHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzQW5kRmxpcHBlZChpbml0aWFsQW5nbGVzLCBmbGlwcGVkKSxcblxuICAgICAgICAgIGdhbWluZ0NhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhHYW1pbmdDYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCk7XG5cbiAgICByZXR1cm4gZ2FtaW5nQ2FtZXJhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtaW5nQ2FtZXJhO1xuIl19