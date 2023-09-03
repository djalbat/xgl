"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _index = require("../index");
var _colouredSquare = /*#__PURE__*/ _interop_require_default(require("./element/colouredSquare"));
var _texturedQuadrangle = /*#__PURE__*/ _interop_require_default(require("./element/texturedQuadrangle"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var preloadImages = _index.preloadUtilities.preloadImages, host = window.host, imageNames = window.imageNames, imageDirectoryURI = window.imageDirectoryURI;
var tilingExample = function() {
    preloadImages(host, imageNames, imageDirectoryURI, function(images, imageNames) {
        var canvas = new _index.Canvas();
        return /*#__PURE__*/ React.createElement(_index.Scene, {
            canvas: canvas
        }, /*#__PURE__*/ React.createElement(_index.Part, {
            images: images,
            imageNames: imageNames,
            imageTiling: true
        }, /*#__PURE__*/ React.createElement(_index.Mask, {
            reference: "mask"
        }, /*#__PURE__*/ React.createElement(_colouredSquare.default, {
            scale: [
                0.25,
                0.25,
                1
            ],
            position: [
                0.125,
                0.125,
                0.125
            ]
        })), /*#__PURE__*/ React.createElement(_texturedQuadrangle.default, {
            position: [
                0,
                0,
                0
            ],
            imageName: "floorboards.jpg",
            maskReference: "mask"
        }), /*#__PURE__*/ React.createElement(_texturedQuadrangle.default, {
            position: [
                -0.5,
                -0.5,
                -0.5
            ],
            imageName: "paving.jpg",
            maskReference: "mask"
        })), /*#__PURE__*/ React.createElement(_index.DesignCamera, null));
    });
};
var _default = tilingExample;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3RpbGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgTWFzaywgRGVzaWduQ2FtZXJhLCBwcmVsb2FkVXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcbmltcG9ydCBUZXh0dXJlZFF1YWRyYW5nbGUgZnJvbSBcIi4vZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGVcIjtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VzIH0gPSBwcmVsb2FkVXRpbGl0aWVzLFxuICAgICAgeyBob3N0LCBpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSB9ID0gd2luZG93O1xuXG5jb25zdCB0aWxpbmdFeGFtcGxlID0gKCkgPT4ge1xuICBwcmVsb2FkSW1hZ2VzKGhvc3QsIGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJLCAoaW1hZ2VzLCBpbWFnZU5hbWVzKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfSA+XG4gICAgICAgIDxQYXJ0IGltYWdlcz17aW1hZ2VzfSBpbWFnZU5hbWVzPXtpbWFnZU5hbWVzfSBpbWFnZVRpbGluZyA+XG4gICAgICAgICAgPE1hc2sgcmVmZXJlbmNlPVwibWFza1wiPlxuICAgICAgICAgICAgPENvbG91cmVkU3F1YXJlIHNjYWxlPXtbIDAuMjUsIDAuMjUsIDEgXX0gcG9zaXRpb249e1sgMC4xMjUsIDAuMTI1LCAwLjEyNSBdfSAvPlxuICAgICAgICAgIDwvTWFzaz5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIDAsIDAsIDAgXX0gaW1hZ2VOYW1lPVwiZmxvb3Jib2FyZHMuanBnXCIgbWFza1JlZmVyZW5jZT1cIm1hc2tcIiAvPlxuICAgICAgICAgIDxUZXh0dXJlZFF1YWRyYW5nbGUgcG9zaXRpb249e1sgLTAuNSwgLTAuNSwgLTAuNSBdfSBpbWFnZU5hbWU9XCJwYXZpbmcuanBnXCIgbWFza1JlZmVyZW5jZT1cIm1hc2tcIiAvPlxuICAgICAgICA8L1BhcnQ+XG4gICAgICAgIDxEZXNpZ25DYW1lcmEvPlxuICAgICAgPC9TY2VuZT5cblxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGlsaW5nRXhhbXBsZTtcbiJdLCJuYW1lcyI6WyJwcmVsb2FkSW1hZ2VzIiwicHJlbG9hZFV0aWxpdGllcyIsImhvc3QiLCJ3aW5kb3ciLCJpbWFnZU5hbWVzIiwiaW1hZ2VEaXJlY3RvcnlVUkkiLCJ0aWxpbmdFeGFtcGxlIiwiaW1hZ2VzIiwiY2FudmFzIiwiQ2FudmFzIiwiU2NlbmUiLCJQYXJ0IiwiaW1hZ2VUaWxpbmciLCJNYXNrIiwicmVmZXJlbmNlIiwiQ29sb3VyZWRTcXVhcmUiLCJzY2FsZSIsInBvc2l0aW9uIiwiVGV4dHVyZWRRdWFkcmFuZ2xlIiwiaW1hZ2VOYW1lIiwibWFza1JlZmVyZW5jZSIsIkRlc2lnbkNhbWVyYSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK0JBOzs7ZUFBQTs7O3FCQTdCMEU7cUVBRS9DO3lFQUNJOzs7Ozs7QUFFL0IsSUFBTSxBQUFFQSxnQkFBa0JDLHVCQUFnQixDQUFsQ0QsZUFDQUUsT0FBd0NDLE9BQXhDRCxNQUFNRSxhQUFrQ0QsT0FBbENDLFlBQVlDLG9CQUFzQkYsT0FBdEJFO0FBRTFCLElBQU1DLGdCQUFnQjtJQUNwQk4sY0FBY0UsTUFBTUUsWUFBWUMsbUJBQW1CLFNBQUNFLFFBQVFIO1FBQzFELElBQU1JLFNBQVMsSUFBSUMsYUFBTTtRQUV6QixxQkFFRSxvQkFBQ0MsWUFBSztZQUFDRixRQUFRQTt5QkFDYixvQkFBQ0csV0FBSTtZQUFDSixRQUFRQTtZQUFRSCxZQUFZQTtZQUFZUSxhQUFBQTt5QkFDNUMsb0JBQUNDLFdBQUk7WUFBQ0MsV0FBVTt5QkFDZCxvQkFBQ0MsdUJBQWM7WUFBQ0MsT0FBTztnQkFBRTtnQkFBTTtnQkFBTTthQUFHO1lBQUVDLFVBQVU7Z0JBQUU7Z0JBQU87Z0JBQU87YUFBTzsyQkFFN0Usb0JBQUNDLDJCQUFrQjtZQUFDRCxVQUFVO2dCQUFFO2dCQUFHO2dCQUFHO2FBQUc7WUFBRUUsV0FBVTtZQUFrQkMsZUFBYzswQkFDckYsb0JBQUNGLDJCQUFrQjtZQUFDRCxVQUFVO2dCQUFFLENBQUM7Z0JBQUssQ0FBQztnQkFBSyxDQUFDO2FBQUs7WUFBRUUsV0FBVTtZQUFhQyxlQUFjOzJCQUUzRixvQkFBQ0MsbUJBQVk7SUFJbkI7QUFDRjtJQUVBLFdBQWVmIn0=