'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

      function GamingCamera(keyEvents, mouseEvents, updateHandler, pan, tilt) {
            _classCallCheck(this, GamingCamera);

            return _possibleConstructorReturn(this, (GamingCamera.__proto__ || Object.getPrototypeOf(GamingCamera)).call(this, keyEvents, mouseEvents, updateHandler, pan, tilt));
      }

      _createClass(GamingCamera, [{
            key: 'mouseWheelHandler',
            value: function mouseWheelHandler(delta, canvas) {
                  var tilt = this.getTilt();

                  this.pan.updateZOffset(delta, tilt);

                  this.update(canvas);
            }
      }, {
            key: 'update',
            value: function update(canvas) {
                  var width = canvas.getWidth(),
                      height = canvas.getHeight(),
                      angles = this.tilt.getAngles(),
                      offsets = this.pan.getOffsets(),
                      offsetsMatrix = offsetsMatrixFromOffsets(offsets),
                      positionMatrix = positionMatrixFromNothing(),
                      rotationsMatrix = rotationsMatrixFromAngles(angles),
                      projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
                      normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix);

                  _get(GamingCamera.prototype.__proto__ || Object.getPrototypeOf(GamingCamera.prototype), 'update', this).call(this, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiXSwibmFtZXMiOlsiUGFuIiwicmVxdWlyZSIsIlRpbHQiLCJDYW1lcmEiLCJ2ZWN0b3JNYXRocyIsIm1hdHJpeFV0aWxpdGllcyIsInplcm8yIiwib2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzIiwicm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyIsInBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmciLCJwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0Iiwibm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgiLCJkZWZhdWx0SW5pdGlhbEFuZ2xlcyIsImRlZmF1bHRJbml0aWFsUG9zaXRpb24iLCJHYW1pbmdDYW1lcmEiLCJrZXlFdmVudHMiLCJtb3VzZUV2ZW50cyIsInVwZGF0ZUhhbmRsZXIiLCJwYW4iLCJ0aWx0IiwiZGVsdGEiLCJjYW52YXMiLCJnZXRUaWx0IiwidXBkYXRlWk9mZnNldCIsInVwZGF0ZSIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJvZmZzZXRzIiwiZ2V0T2Zmc2V0cyIsIm9mZnNldHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxzTWF0cml4IiwicHJvcGVydGllcyIsImluaXRpYWxBbmdsZXMiLCJpbml0aWFsUG9zaXRpb24iLCJmbGlwcGVkIiwiZnJvbUluaXRpYWxQb3NpdGlvbiIsImZyb21Jbml0aWFsQW5nbGVzQW5kRmxpcHBlZCIsImdhbWluZ0NhbWVyYSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU1DLFFBQVEseUJBQVIsQ0FBWjtBQUFBLElBQ01DLE9BQU9ELFFBQVEsMEJBQVIsQ0FEYjtBQUFBLElBR01FLFNBQVNGLFFBQVEsV0FBUixDQUhmO0FBQUEsSUFJTUcsY0FBY0gsUUFBUSxvQkFBUixDQUpwQjtBQUFBLElBS01JLGtCQUFrQkosUUFBUSx3QkFBUixDQUx4Qjs7QUFPTSxJQUFFSyxLQUFGLEdBQVlGLFdBQVosQ0FBRUUsS0FBRjtBQUFBLElBQ0VDLHdCQURGLEdBQzJKRixlQUQzSixDQUNFRSx3QkFERjtBQUFBLElBQzRCQyx5QkFENUIsR0FDMkpILGVBRDNKLENBQzRCRyx5QkFENUI7QUFBQSxJQUN1REMseUJBRHZELEdBQzJKSixlQUQzSixDQUN1REkseUJBRHZEO0FBQUEsSUFDa0ZDLGtDQURsRixHQUMySkwsZUFEM0osQ0FDa0ZLLGtDQURsRjtBQUFBLElBQ3NIQyxnQ0FEdEgsR0FDMkpOLGVBRDNKLENBQ3NITSxnQ0FEdEg7OztBQUdOLElBQU1DLHVCQUF1Qk4sT0FBN0I7QUFBQSxJQUNNTyx5QkFBeUIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FEL0I7O0lBSU1DLFk7OztBQUNKLDRCQUFZQyxTQUFaLEVBQXVCQyxXQUF2QixFQUFvQ0MsYUFBcEMsRUFBbURDLEdBQW5ELEVBQXdEQyxJQUF4RCxFQUE4RDtBQUFBOztBQUFBLCtIQUN0REosU0FEc0QsRUFDM0NDLFdBRDJDLEVBQzlCQyxhQUQ4QixFQUNmQyxHQURlLEVBQ1ZDLElBRFU7QUFJN0Q7Ozs7OENBRWlCQyxLLEVBQU9DLE0sRUFBUTtBQUMvQixzQkFBTUYsT0FBTyxLQUFLRyxPQUFMLEVBQWI7O0FBRUEsdUJBQUtKLEdBQUwsQ0FBU0ssYUFBVCxDQUF1QkgsS0FBdkIsRUFBOEJELElBQTlCOztBQUVBLHVCQUFLSyxNQUFMLENBQVlILE1BQVo7QUFDRDs7O21DQUVNQSxNLEVBQVE7QUFDYixzQkFBTUksUUFBUUosT0FBT0ssUUFBUCxFQUFkO0FBQUEsc0JBQ01DLFNBQVNOLE9BQU9PLFNBQVAsRUFEZjtBQUFBLHNCQUVNQyxTQUFTLEtBQUtWLElBQUwsQ0FBVVcsU0FBVixFQUZmO0FBQUEsc0JBR01DLFVBQVUsS0FBS2IsR0FBTCxDQUFTYyxVQUFULEVBSGhCO0FBQUEsc0JBS01DLGdCQUFnQjFCLHlCQUF5QndCLE9BQXpCLENBTHRCO0FBQUEsc0JBTU1HLGlCQUFpQnpCLDJCQU52QjtBQUFBLHNCQU9NMEIsa0JBQWtCM0IsMEJBQTBCcUIsTUFBMUIsQ0FQeEI7QUFBQSxzQkFRTU8sbUJBQW1CMUIsbUNBQW1DZSxLQUFuQyxFQUEwQ0UsTUFBMUMsQ0FSekI7QUFBQSxzQkFTTVUsZ0JBQWdCMUIsaUNBQWlDd0IsZUFBakMsQ0FUdEI7O0FBV0EscUlBQWFGLGFBQWIsRUFBNEJJLGFBQTVCLEVBQTJDSCxjQUEzQyxFQUEyREMsZUFBM0QsRUFBNEVDLGdCQUE1RTtBQUNEOzs7MkNBRXFCRSxVLEVBQVk7QUFBQSw4Q0FDMkRBLFVBRDNELENBQ3hCQyxhQUR3QjtBQUFBLHNCQUN4QkEsYUFEd0IseUNBQ1IzQixvQkFEUTtBQUFBLDhDQUMyRDBCLFVBRDNELENBQ2NFLGVBRGQ7QUFBQSxzQkFDY0EsZUFEZCx5Q0FDZ0MzQixzQkFEaEM7QUFBQSxzQkFFMUI0QixPQUYwQixHQUVoQixJQUZnQjtBQUFBLHNCQUcxQnZCLEdBSDBCLEdBR3BCbEIsSUFBSTBDLG1CQUFKLENBQXdCRixlQUF4QixDQUhvQjtBQUFBLHNCQUkxQnJCLElBSjBCLEdBSW5CakIsS0FBS3lDLDJCQUFMLENBQWlDSixhQUFqQyxFQUFnREUsT0FBaEQsQ0FKbUI7QUFBQSxzQkFNMUJHLFlBTjBCLEdBTVh6QyxPQUFPMEMsY0FBUCxDQUFzQi9CLFlBQXRCLEVBQW9Dd0IsVUFBcEMsRUFBZ0RwQixHQUFoRCxFQUFxREMsSUFBckQsQ0FOVzs7O0FBUWhDLHlCQUFPeUIsWUFBUDtBQUNEOzs7O0VBdkN3QnpDLE07O0FBMEMzQjJDLE9BQU9DLE9BQVAsR0FBaUJqQyxZQUFqQiIsImZpbGUiOiJnYW1pbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhbiA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvcGFuJyksXG4gICAgICBUaWx0ID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0JyksXG5cbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2NhbWVyYScpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi8uLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIG1hdHJpeFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9tYXRyaXgnKTtcblxuY29uc3QgeyB6ZXJvMiB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cywgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcywgcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZywgcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCwgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXggfSA9IG1hdHJpeFV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdEluaXRpYWxBbmdsZXMgPSB6ZXJvMigpLFxuICAgICAgZGVmYXVsdEluaXRpYWxQb3NpdGlvbiA9IFsgMCwgMCwgNV07XG5cblxuY2xhc3MgR2FtaW5nQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3Ioa2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlciwgcGFuLCB0aWx0KSB7XG4gICAgc3VwZXIoa2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlciwgcGFuLCB0aWx0KTtcblxuXG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihkZWx0YSwgY2FudmFzKSB7XG4gICAgY29uc3QgdGlsdCA9IHRoaXMuZ2V0VGlsdCgpO1xuXG4gICAgdGhpcy5wYW4udXBkYXRlWk9mZnNldChkZWx0YSwgdGlsdCk7XG5cbiAgICB0aGlzLnVwZGF0ZShjYW52YXMpO1xuICB9XG5cbiAgdXBkYXRlKGNhbnZhcykge1xuICAgIGNvbnN0IHdpZHRoID0gY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5wYW4uZ2V0T2Zmc2V0cygpLFxuXG4gICAgICAgICAgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICBzdXBlci51cGRhdGUob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbEFuZ2xlcyA9IGRlZmF1bHRJbml0aWFsQW5nbGVzLCBpbml0aWFsUG9zaXRpb24gPSBkZWZhdWx0SW5pdGlhbFBvc2l0aW9uIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGZsaXBwZWQgPSB0cnVlLFxuICAgICAgICAgIHBhbiA9IFBhbi5mcm9tSW5pdGlhbFBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbiksXG4gICAgICAgICAgdGlsdCA9IFRpbHQuZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkKGluaXRpYWxBbmdsZXMsIGZsaXBwZWQpLFxuXG4gICAgICAgICAgZ2FtaW5nQ2FtZXJhID0gQ2FtZXJhLmZyb21Qcm9wZXJ0aWVzKEdhbWluZ0NhbWVyYSwgcHJvcGVydGllcywgcGFuLCB0aWx0KTtcblxuICAgIHJldHVybiBnYW1pbmdDYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1pbmdDYW1lcmE7XG4iXX0=