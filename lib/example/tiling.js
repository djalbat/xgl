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
var preloadImages = _index.preloadUtilities.preloadImages, host = globalThis.host, imageNames = globalThis.imageNames, imageDirectoryURI = globalThis.imageDirectoryURI;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3RpbGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgTWFzaywgRGVzaWduQ2FtZXJhLCBwcmVsb2FkVXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcbmltcG9ydCBUZXh0dXJlZFF1YWRyYW5nbGUgZnJvbSBcIi4vZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGVcIjtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VzIH0gPSBwcmVsb2FkVXRpbGl0aWVzLFxuICAgICAgeyBob3N0LCBpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSB9ID0gZ2xvYmFsVGhpcztcblxuY29uc3QgdGlsaW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgcHJlbG9hZEltYWdlcyhob3N0LCBpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSwgKGltYWdlcywgaW1hZ2VOYW1lcykgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30gPlxuICAgICAgICA8UGFydCBpbWFnZXM9e2ltYWdlc30gaW1hZ2VOYW1lcz17aW1hZ2VOYW1lc30gaW1hZ2VUaWxpbmcgPlxuICAgICAgICAgIDxNYXNrIHJlZmVyZW5jZT1cIm1hc2tcIj5cbiAgICAgICAgICAgIDxDb2xvdXJlZFNxdWFyZSBzY2FsZT17WyAwLjI1LCAwLjI1LCAxIF19IHBvc2l0aW9uPXtbIDAuMTI1LCAwLjEyNSwgMC4xMjUgXX0gLz5cbiAgICAgICAgICA8L01hc2s+XG4gICAgICAgICAgPFRleHR1cmVkUXVhZHJhbmdsZSBwb3NpdGlvbj17WyAwLCAwLCAwIF19IGltYWdlTmFtZT1cImZsb29yYm9hcmRzLmpwZ1wiIG1hc2tSZWZlcmVuY2U9XCJtYXNrXCIgLz5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsIC0wLjUgXX0gaW1hZ2VOYW1lPVwicGF2aW5nLmpwZ1wiIG1hc2tSZWZlcmVuY2U9XCJtYXNrXCIgLz5cbiAgICAgICAgPC9QYXJ0PlxuICAgICAgICA8RGVzaWduQ2FtZXJhLz5cbiAgICAgIDwvU2NlbmU+XG5cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRpbGluZ0V4YW1wbGU7XG4iXSwibmFtZXMiOlsicHJlbG9hZEltYWdlcyIsInByZWxvYWRVdGlsaXRpZXMiLCJob3N0IiwiZ2xvYmFsVGhpcyIsImltYWdlTmFtZXMiLCJpbWFnZURpcmVjdG9yeVVSSSIsInRpbGluZ0V4YW1wbGUiLCJpbWFnZXMiLCJjYW52YXMiLCJDYW52YXMiLCJTY2VuZSIsIlBhcnQiLCJpbWFnZVRpbGluZyIsIk1hc2siLCJyZWZlcmVuY2UiLCJDb2xvdXJlZFNxdWFyZSIsInNjYWxlIiwicG9zaXRpb24iLCJUZXh0dXJlZFF1YWRyYW5nbGUiLCJpbWFnZU5hbWUiLCJtYXNrUmVmZXJlbmNlIiwiRGVzaWduQ2FtZXJhIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK0JBOzs7ZUFBQTs7O3FCQTdCMEU7cUVBRS9DO3lFQUNJOzs7Ozs7QUFFL0IsSUFBTSxBQUFFQSxnQkFBa0JDLHVCQUFnQixDQUFsQ0QsZUFDQUUsT0FBd0NDLFdBQXhDRCxNQUFNRSxhQUFrQ0QsV0FBbENDLFlBQVlDLG9CQUFzQkYsV0FBdEJFO0FBRTFCLElBQU1DLGdCQUFnQjtJQUNwQk4sY0FBY0UsTUFBTUUsWUFBWUMsbUJBQW1CLFNBQUNFLFFBQVFIO1FBQzFELElBQU1JLFNBQVMsSUFBSUMsYUFBTTtRQUV6QixxQkFFRSxvQkFBQ0MsWUFBSztZQUFDRixRQUFRQTt5QkFDYixvQkFBQ0csV0FBSTtZQUFDSixRQUFRQTtZQUFRSCxZQUFZQTtZQUFZUSxhQUFBQTt5QkFDNUMsb0JBQUNDLFdBQUk7WUFBQ0MsV0FBVTt5QkFDZCxvQkFBQ0MsdUJBQWM7WUFBQ0MsT0FBTztnQkFBRTtnQkFBTTtnQkFBTTthQUFHO1lBQUVDLFVBQVU7Z0JBQUU7Z0JBQU87Z0JBQU87YUFBTzsyQkFFN0Usb0JBQUNDLDJCQUFrQjtZQUFDRCxVQUFVO2dCQUFFO2dCQUFHO2dCQUFHO2FBQUc7WUFBRUUsV0FBVTtZQUFrQkMsZUFBYzswQkFDckYsb0JBQUNGLDJCQUFrQjtZQUFDRCxVQUFVO2dCQUFFLENBQUM7Z0JBQUssQ0FBQztnQkFBSyxDQUFDO2FBQUs7WUFBRUUsV0FBVTtZQUFhQyxlQUFjOzJCQUUzRixvQkFBQ0MsbUJBQVk7SUFJbkI7QUFDRjtJQUVBLFdBQWVmIn0=