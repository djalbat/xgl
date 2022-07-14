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
var _colouredSquare = /*#__PURE__*/ _interopRequireDefault(require("./element/colouredSquare"));
var _texturedQuadrangle = /*#__PURE__*/ _interopRequireDefault(require("./element/texturedQuadrangle"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var preloadImages = _index.preloadUtilities.preloadImages, host = window.host, imageNames = window.imageNames, imageDirectoryURI = window.imageDirectoryURI;
var tilingExample = function() {
    preloadImages(host, imageNames, imageDirectoryURI, function(images, imageNames) {
        var canvas = new _index.Canvas(), context = {};
        return /*#__PURE__*/ React.createElement(_index.Scene, {
            canvas: canvas,
            context: context
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3RpbGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgTWFzaywgRGVzaWduQ2FtZXJhLCBwcmVsb2FkVXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcbmltcG9ydCBUZXh0dXJlZFF1YWRyYW5nbGUgZnJvbSBcIi4vZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGVcIjtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VzIH0gPSBwcmVsb2FkVXRpbGl0aWVzLFxuICAgICAgeyBob3N0LCBpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSB9ID0gd2luZG93O1xuXG5jb25zdCB0aWxpbmdFeGFtcGxlID0gKCkgPT4ge1xuICBwcmVsb2FkSW1hZ2VzKGhvc3QsIGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJLCAoaW1hZ2VzLCBpbWFnZU5hbWVzKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpLFxuICAgICAgICAgIGNvbnRleHQgPSB7fTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30gY29udGV4dD17Y29udGV4dH0gPlxuICAgICAgICA8UGFydCBpbWFnZXM9e2ltYWdlc30gaW1hZ2VOYW1lcz17aW1hZ2VOYW1lc30gaW1hZ2VUaWxpbmcgPlxuICAgICAgICAgIDxNYXNrIHJlZmVyZW5jZT1cIm1hc2tcIj5cbiAgICAgICAgICAgIDxDb2xvdXJlZFNxdWFyZSBzY2FsZT17WyAwLjI1LCAwLjI1LCAxIF19IHBvc2l0aW9uPXtbIDAuMTI1LCAwLjEyNSwgMC4xMjUgXX0gLz5cbiAgICAgICAgICA8L01hc2s+XG4gICAgICAgICAgPFRleHR1cmVkUXVhZHJhbmdsZSBwb3NpdGlvbj17WyAwLCAwLCAwIF19IGltYWdlTmFtZT1cImZsb29yYm9hcmRzLmpwZ1wiIG1hc2tSZWZlcmVuY2U9XCJtYXNrXCIgLz5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsIC0wLjUgXX0gaW1hZ2VOYW1lPVwicGF2aW5nLmpwZ1wiIG1hc2tSZWZlcmVuY2U9XCJtYXNrXCIgLz5cbiAgICAgICAgPC9QYXJ0PlxuICAgICAgICA8RGVzaWduQ2FtZXJhLz5cbiAgICAgIDwvU2NlbmU+XG5cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRpbGluZ0V4YW1wbGU7XG4iXSwibmFtZXMiOlsicHJlbG9hZEltYWdlcyIsInByZWxvYWRVdGlsaXRpZXMiLCJob3N0Iiwid2luZG93IiwiaW1hZ2VOYW1lcyIsImltYWdlRGlyZWN0b3J5VVJJIiwidGlsaW5nRXhhbXBsZSIsImltYWdlcyIsImNhbnZhcyIsIkNhbnZhcyIsImNvbnRleHQiLCJTY2VuZSIsIlBhcnQiLCJpbWFnZVRpbGluZyIsIk1hc2siLCJyZWZlcmVuY2UiLCJDb2xvdXJlZFNxdWFyZSIsInNjYWxlIiwicG9zaXRpb24iLCJUZXh0dXJlZFF1YWRyYW5nbGUiLCJpbWFnZU5hbWUiLCJtYXNrUmVmZXJlbmNlIiwiRGVzaWduQ2FtZXJhIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBZ0NiLFNBQTZCOzs7ZUFBN0IsUUFBNkI7OztxQkE5QjZDLFVBQVU7bUVBRXpELDBCQUEwQjt1RUFDdEIsOEJBQThCOzs7Ozs7QUFFN0QsSUFBTSxBQUFFQSxhQUFhLEdBQUtDLE1BQWdCLGlCQUFBLENBQWxDRCxhQUFhLEFBQXFCLEVBQ2xDRSxJQUFJLEdBQW9DQyxNQUFNLENBQTlDRCxJQUFJLEVBQUVFLFVBQVUsR0FBd0JELE1BQU0sQ0FBeENDLFVBQVUsRUFBRUMsaUJBQWlCLEdBQUtGLE1BQU0sQ0FBNUJFLGlCQUFpQixBQUFZO0FBRXZELElBQU1DLGFBQWEsR0FBRyxXQUFNO0lBQzFCTixhQUFhLENBQUNFLElBQUksRUFBRUUsVUFBVSxFQUFFQyxpQkFBaUIsRUFBRSxTQUFDRSxNQUFNLEVBQUVILFVBQVUsRUFBSztRQUN6RSxJQUFNSSxNQUFNLEdBQUcsSUFBSUMsTUFBTSxPQUFBLEVBQUUsRUFDckJDLE9BQU8sR0FBRyxFQUFFLEFBQUM7UUFFbkIscUJBRUUsb0JBQUNDLE1BQUssTUFBQTtZQUFDSCxNQUFNLEVBQUVBLE1BQU07WUFBRUUsT0FBTyxFQUFFQSxPQUFPO3lCQUNyQyxvQkFBQ0UsTUFBSSxLQUFBO1lBQUNMLE1BQU0sRUFBRUEsTUFBTTtZQUFFSCxVQUFVLEVBQUVBLFVBQVU7WUFBRVMsV0FBVyxFQUFYQSxJQUFXO3lCQUN2RCxvQkFBQ0MsTUFBSSxLQUFBO1lBQUNDLFNBQVMsRUFBQyxNQUFNO3lCQUNwQixvQkFBQ0MsZUFBYyxRQUFBO1lBQUNDLEtBQUssRUFBRTtBQUFFLG9CQUFJO0FBQUUsb0JBQUk7QUFBRSxpQkFBQzthQUFFO1lBQUVDLFFBQVEsRUFBRTtBQUFFLHFCQUFLO0FBQUUscUJBQUs7QUFBRSxxQkFBSzthQUFFO1VBQUksQ0FDMUUsZ0JBQ1Asb0JBQUNDLG1CQUFrQixRQUFBO1lBQUNELFFBQVEsRUFBRTtBQUFFLGlCQUFDO0FBQUUsaUJBQUM7QUFBRSxpQkFBQzthQUFFO1lBQUVFLFNBQVMsRUFBQyxpQkFBaUI7WUFBQ0MsYUFBYSxFQUFDLE1BQU07VUFBRyxnQkFDOUYsb0JBQUNGLG1CQUFrQixRQUFBO1lBQUNELFFBQVEsRUFBRTtnQkFBRSxDQUFDLEdBQUc7Z0JBQUUsQ0FBQyxHQUFHO2dCQUFFLENBQUMsR0FBRzthQUFFO1lBQUVFLFNBQVMsRUFBQyxZQUFZO1lBQUNDLGFBQWEsRUFBQyxNQUFNO1VBQUcsQ0FDN0YsZ0JBQ1Asb0JBQUNDLE1BQVksYUFBQSxPQUFFLENBQ1QsQ0FFUjtLQUNILENBQUMsQ0FBQztDQUNKLEFBQUM7SUFFRixRQUE2QixHQUFkaEIsYUFBYSJ9