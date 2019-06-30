'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var GamingCamera = function (_Camera) {
      _inherits(GamingCamera, _Camera);

      function GamingCamera() {
            _classCallCheck(this, GamingCamera);

            return _possibleConstructorReturn(this, (GamingCamera.__proto__ || Object.getPrototypeOf(GamingCamera)).apply(this, arguments));
      }

      _createClass(GamingCamera, [{
            key: 'update',
            value: function update(canvas) {
                  var pan = this.getPan(),
                      tilt = this.getTilt(),
                      width = canvas.getWidth(),
                      height = canvas.getHeight(),
                      angles = tilt.getAngles(),
                      offsets = pan.getOffsets(),
                      offsetsMatrix = offsetsMatrixFromOffsets(offsets),
                      positionMatrix = positionMatrixFromNothing(),
                      rotationsMatrix = rotationsMatrixFromAngles(angles),
                      projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
                      normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix),
                      updateHandler = this.getUpdateHandler();

                  updateHandler(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
            }
      }], [{
            key: 'fromProperties',
            value: function fromProperties(properties) {
                  var _properties$initialAn = properties.initialAngles,
                      initialAngles = _properties$initialAn === undefined ? defaultInitialAngles : _properties$initialAn,
                      _properties$initialPo = properties.initialPosition,
                      initialPosition = _properties$initialPo === undefined ? defaultInitialPosition : _properties$initialPo,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiXSwibmFtZXMiOlsiUGFuIiwicmVxdWlyZSIsIlRpbHQiLCJDYW1lcmEiLCJ2ZWN0b3JNYXRocyIsIm1hdHJpeFV0aWxpdGllcyIsInplcm8yIiwib2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzIiwicm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyIsInBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmciLCJwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0Iiwibm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgiLCJkZWZhdWx0SW5pdGlhbEFuZ2xlcyIsImRlZmF1bHRJbml0aWFsUG9zaXRpb24iLCJHYW1pbmdDYW1lcmEiLCJjYW52YXMiLCJwYW4iLCJnZXRQYW4iLCJ0aWx0IiwiZ2V0VGlsdCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJvZmZzZXRzIiwiZ2V0T2Zmc2V0cyIsIm9mZnNldHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxzTWF0cml4IiwidXBkYXRlSGFuZGxlciIsImdldFVwZGF0ZUhhbmRsZXIiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbEFuZ2xlcyIsImluaXRpYWxQb3NpdGlvbiIsImZsaXBwZWQiLCJmcm9tSW5pdGlhbFBvc2l0aW9uIiwiZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkIiwiZ2FtaW5nQ2FtZXJhIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU1DLFFBQVEseUJBQVIsQ0FBWjtBQUFBLElBQ01DLE9BQU9ELFFBQVEsMEJBQVIsQ0FEYjtBQUFBLElBR01FLFNBQVNGLFFBQVEsV0FBUixDQUhmO0FBQUEsSUFJTUcsY0FBY0gsUUFBUSxvQkFBUixDQUpwQjtBQUFBLElBS01JLGtCQUFrQkosUUFBUSx3QkFBUixDQUx4Qjs7QUFPTSxJQUFFSyxLQUFGLEdBQVlGLFdBQVosQ0FBRUUsS0FBRjtBQUFBLElBQ0VDLHdCQURGLEdBQzJKRixlQUQzSixDQUNFRSx3QkFERjtBQUFBLElBQzRCQyx5QkFENUIsR0FDMkpILGVBRDNKLENBQzRCRyx5QkFENUI7QUFBQSxJQUN1REMseUJBRHZELEdBQzJKSixlQUQzSixDQUN1REkseUJBRHZEO0FBQUEsSUFDa0ZDLGtDQURsRixHQUMySkwsZUFEM0osQ0FDa0ZLLGtDQURsRjtBQUFBLElBQ3NIQyxnQ0FEdEgsR0FDMkpOLGVBRDNKLENBQ3NITSxnQ0FEdEg7OztBQUdOLElBQU1DLHVCQUF1Qk4sT0FBN0I7QUFBQSxJQUNNTyx5QkFBeUIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FEL0I7O0lBSU1DLFk7Ozs7Ozs7Ozs7O21DQUNHQyxNLEVBQVE7QUFDYixzQkFBTUMsTUFBTSxLQUFLQyxNQUFMLEVBQVo7QUFBQSxzQkFDTUMsT0FBTyxLQUFLQyxPQUFMLEVBRGI7QUFBQSxzQkFFTUMsUUFBUUwsT0FBT00sUUFBUCxFQUZkO0FBQUEsc0JBR01DLFNBQVNQLE9BQU9RLFNBQVAsRUFIZjtBQUFBLHNCQUlNQyxTQUFTTixLQUFLTyxTQUFMLEVBSmY7QUFBQSxzQkFLTUMsVUFBVVYsSUFBSVcsVUFBSixFQUxoQjtBQUFBLHNCQU9NQyxnQkFBZ0JyQix5QkFBeUJtQixPQUF6QixDQVB0QjtBQUFBLHNCQVFNRyxpQkFBaUJwQiwyQkFSdkI7QUFBQSxzQkFTTXFCLGtCQUFrQnRCLDBCQUEwQmdCLE1BQTFCLENBVHhCO0FBQUEsc0JBVU1PLG1CQUFtQnJCLG1DQUFtQ1UsS0FBbkMsRUFBMENFLE1BQTFDLENBVnpCO0FBQUEsc0JBV01VLGdCQUFnQnJCLGlDQUFpQ21CLGVBQWpDLENBWHRCO0FBQUEsc0JBWU1HLGdCQUFnQixLQUFLQyxnQkFBTCxFQVp0Qjs7QUFjQUQsZ0NBQWNMLGFBQWQsRUFBNkJJLGFBQTdCLEVBQTRDSCxjQUE1QyxFQUE0REMsZUFBNUQsRUFBNkVDLGdCQUE3RTtBQUNEOzs7MkNBRXFCSSxVLEVBQVk7QUFBQSw4Q0FDMkRBLFVBRDNELENBQ3hCQyxhQUR3QjtBQUFBLHNCQUN4QkEsYUFEd0IseUNBQ1J4QixvQkFEUTtBQUFBLDhDQUMyRHVCLFVBRDNELENBQ2NFLGVBRGQ7QUFBQSxzQkFDY0EsZUFEZCx5Q0FDZ0N4QixzQkFEaEM7QUFBQSxzQkFFMUJ5QixPQUYwQixHQUVoQixJQUZnQjtBQUFBLHNCQUcxQnRCLEdBSDBCLEdBR3BCaEIsSUFBSXVDLG1CQUFKLENBQXdCRixlQUF4QixDQUhvQjtBQUFBLHNCQUkxQm5CLElBSjBCLEdBSW5CaEIsS0FBS3NDLDJCQUFMLENBQWlDSixhQUFqQyxFQUFnREUsT0FBaEQsQ0FKbUI7QUFBQSxzQkFNMUJHLFlBTjBCLEdBTVh0QyxPQUFPdUMsY0FBUCxDQUFzQjVCLFlBQXRCLEVBQW9DcUIsVUFBcEMsRUFBZ0RuQixHQUFoRCxFQUFxREUsSUFBckQsQ0FOVzs7O0FBUWhDLHlCQUFPdUIsWUFBUDtBQUNEOzs7O0VBNUJ3QnRDLE07O0FBK0IzQndDLE9BQU9DLE9BQVAsR0FBaUI5QixZQUFqQiIsImZpbGUiOiJnYW1pbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhbiA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvcGFuJyksXG4gICAgICBUaWx0ID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0JyksXG5cbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2NhbWVyYScpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi8uLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIG1hdHJpeFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9tYXRyaXgnKTtcblxuY29uc3QgeyB6ZXJvMiB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cywgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcywgcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZywgcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCwgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXggfSA9IG1hdHJpeFV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdEluaXRpYWxBbmdsZXMgPSB6ZXJvMigpLFxuICAgICAgZGVmYXVsdEluaXRpYWxQb3NpdGlvbiA9IFsgMCwgMCwgNSBdO1xuXG5cbmNsYXNzIEdhbWluZ0NhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIHVwZGF0ZShjYW52YXMpIHtcbiAgICBjb25zdCBwYW4gPSB0aGlzLmdldFBhbigpLFxuICAgICAgICAgIHRpbHQgPSB0aGlzLmdldFRpbHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IGNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG9mZnNldHMgPSBwYW4uZ2V0T2Zmc2V0cygpLFxuXG4gICAgICAgICAgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCksXG4gICAgICAgICAgdXBkYXRlSGFuZGxlciA9IHRoaXMuZ2V0VXBkYXRlSGFuZGxlcigpO1xuXG4gICAgdXBkYXRlSGFuZGxlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsQW5nbGVzID0gZGVmYXVsdEluaXRpYWxBbmdsZXMsIGluaXRpYWxQb3NpdGlvbiA9IGRlZmF1bHRJbml0aWFsUG9zaXRpb24gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZmxpcHBlZCA9IHRydWUsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uKSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQoaW5pdGlhbEFuZ2xlcywgZmxpcHBlZCksXG5cbiAgICAgICAgICBnYW1pbmdDYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoR2FtaW5nQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQpO1xuXG4gICAgcmV0dXJuIGdhbWluZ0NhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWluZ0NhbWVyYTtcbiJdfQ==