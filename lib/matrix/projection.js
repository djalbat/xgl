'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Matrix = require('../matrix'),
    constants = require('../constants'),
    matrixUtilities = require('../utilities/matrix');

var perspective4 = matrixUtilities.perspective4,
    FIELD_OF_VIEW = constants.FIELD_OF_VIEW,
    Z_NEAR = constants.Z_NEAR,
    Z_FAR = constants.Z_FAR;

var ProjectionMatrix = function (_Matrix) {
      _inherits(ProjectionMatrix, _Matrix);

      function ProjectionMatrix() {
            _classCallCheck(this, ProjectionMatrix);

            return _possibleConstructorReturn(this, (ProjectionMatrix.__proto__ || Object.getPrototypeOf(ProjectionMatrix)).apply(this, arguments));
      }

      _createClass(ProjectionMatrix, null, [{
            key: 'fromWidthAndHeight',
            value: function fromWidthAndHeight(width, height) {
                  var fieldOfView = FIELD_OF_VIEW,
                      aspectRatio = width / height,
                      zNear = Z_NEAR,
                      zFar = Z_FAR,
                      matrix = perspective4(fieldOfView, aspectRatio, zNear, zFar),
                      projectionMatrix = new ProjectionMatrix(matrix);

                  return projectionMatrix;
            }
      }]);

      return ProjectionMatrix;
}(Matrix);

module.exports = ProjectionMatrix;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9tYXRyaXgvcHJvamVjdGlvbi5qcyJdLCJuYW1lcyI6WyJNYXRyaXgiLCJyZXF1aXJlIiwiY29uc3RhbnRzIiwibWF0cml4VXRpbGl0aWVzIiwicGVyc3BlY3RpdmU0IiwiRklFTERfT0ZfVklFVyIsIlpfTkVBUiIsIlpfRkFSIiwiUHJvamVjdGlvbk1hdHJpeCIsIndpZHRoIiwiaGVpZ2h0IiwiZmllbGRPZlZpZXciLCJhc3BlY3RSYXRpbyIsInpOZWFyIiwiekZhciIsIm1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsV0FBUixDQUFmO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxjQUFSLENBRGxCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLHFCQUFSLENBRnhCOztBQUlNLElBQUVHLFlBQUYsR0FBbUJELGVBQW5CLENBQUVDLFlBQUY7QUFBQSxJQUNFQyxhQURGLEdBQ21DSCxTQURuQyxDQUNFRyxhQURGO0FBQUEsSUFDaUJDLE1BRGpCLEdBQ21DSixTQURuQyxDQUNpQkksTUFEakI7QUFBQSxJQUN5QkMsS0FEekIsR0FDbUNMLFNBRG5DLENBQ3lCSyxLQUR6Qjs7SUFHQUMsZ0I7Ozs7Ozs7Ozs7OytDQUNzQkMsSyxFQUFPQyxNLEVBQVE7QUFDdkMsc0JBQU1DLGNBQWNOLGFBQXBCO0FBQUEsc0JBQ01PLGNBQWNILFFBQVFDLE1BRDVCO0FBQUEsc0JBRU1HLFFBQVFQLE1BRmQ7QUFBQSxzQkFHTVEsT0FBT1AsS0FIYjtBQUFBLHNCQUlNUSxTQUFTWCxhQUFhTyxXQUFiLEVBQTBCQyxXQUExQixFQUF1Q0MsS0FBdkMsRUFBOENDLElBQTlDLENBSmY7QUFBQSxzQkFLTUUsbUJBQW1CLElBQUlSLGdCQUFKLENBQXFCTyxNQUFyQixDQUx6Qjs7QUFPQSx5QkFBT0MsZ0JBQVA7QUFDRDs7OztFQVY0QmhCLE07O0FBYS9CaUIsT0FBT0MsT0FBUCxHQUFpQlYsZ0JBQWpCIiwiZmlsZSI6InByb2plY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE1hdHJpeCA9IHJlcXVpcmUoJy4uL21hdHJpeCcpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICBtYXRyaXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvbWF0cml4Jyk7XG5cbmNvbnN0IHsgcGVyc3BlY3RpdmU0IH0gPSBtYXRyaXhVdGlsaXRpZXMsXG4gICAgICB7IEZJRUxEX09GX1ZJRVcsIFpfTkVBUiwgWl9GQVIgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgUHJvamVjdGlvbk1hdHJpeCBleHRlbmRzIE1hdHJpeCB7XG4gIHN0YXRpYyBmcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IGZpZWxkT2ZWaWV3ID0gRklFTERfT0ZfVklFVyxcbiAgICAgICAgICBhc3BlY3RSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0LFxuICAgICAgICAgIHpOZWFyID0gWl9ORUFSLFxuICAgICAgICAgIHpGYXIgPSBaX0ZBUixcbiAgICAgICAgICBtYXRyaXggPSBwZXJzcGVjdGl2ZTQoZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhciksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IG5ldyBQcm9qZWN0aW9uTWF0cml4KG1hdHJpeCk7XG4gICAgXG4gICAgcmV0dXJuIHByb2plY3Rpb25NYXRyaXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9qZWN0aW9uTWF0cml4O1xuIl19