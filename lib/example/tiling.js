"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../index");
var _colouredSquare = _interopRequireDefault(require("./element/colouredSquare"));
var _texturedQuadrangle = _interopRequireDefault(require("./element/texturedQuadrangle"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var preloadImages = _index.preloadUtilities.preloadImages;
var tilingExample = function() {
    preloadImages(function(images, imageNames) {
        var canvas = new _index.Canvas();
        return(/*#__PURE__*/ React.createElement(_index.Scene, {
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
        })), /*#__PURE__*/ React.createElement(_index.DesignCamera, null)));
    });
};
var _default = tilingExample;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3RpbGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgTWFzaywgRGVzaWduQ2FtZXJhLCBwcmVsb2FkVXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcbmltcG9ydCBUZXh0dXJlZFF1YWRyYW5nbGUgZnJvbSBcIi4vZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGVcIjtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VzIH0gPSBwcmVsb2FkVXRpbGl0aWVzO1xuXG5jb25zdCB0aWxpbmdFeGFtcGxlID0gKCkgPT4ge1xuICBwcmVsb2FkSW1hZ2VzKChpbWFnZXMsIGltYWdlTmFtZXMpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgICA8UGFydCBpbWFnZXM9e2ltYWdlc30gaW1hZ2VOYW1lcz17aW1hZ2VOYW1lc30gaW1hZ2VUaWxpbmcgPlxuICAgICAgICAgIDxNYXNrIHJlZmVyZW5jZT1cIm1hc2tcIj5cbiAgICAgICAgICAgIDxDb2xvdXJlZFNxdWFyZSBzY2FsZT17WyAwLjI1LCAwLjI1LCAxIF19IHBvc2l0aW9uPXtbIDAuMTI1LCAwLjEyNSwgMC4xMjUgXX0gLz5cbiAgICAgICAgICA8L01hc2s+XG4gICAgICAgICAgPFRleHR1cmVkUXVhZHJhbmdsZSBwb3NpdGlvbj17WyAwLCAwLCAwIF19IGltYWdlTmFtZT1cImZsb29yYm9hcmRzLmpwZ1wiIG1hc2tSZWZlcmVuY2U9XCJtYXNrXCIgLz5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsIC0wLjUgXX0gaW1hZ2VOYW1lPVwicGF2aW5nLmpwZ1wiIG1hc2tSZWZlcmVuY2U9XCJtYXNrXCIgLz5cbiAgICAgICAgPC9QYXJ0PlxuICAgICAgICA8RGVzaWduQ2FtZXJhLz5cbiAgICAgIDwvU2NlbmU+XG5cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRpbGluZ0V4YW1wbGU7XG4iXSwibmFtZXMiOlsicHJlbG9hZEltYWdlcyIsInRpbGluZ0V4YW1wbGUiLCJpbWFnZXMiLCJpbWFnZU5hbWVzIiwiY2FudmFzIiwiaW1hZ2VUaWxpbmciLCJyZWZlcmVuY2UiLCJzY2FsZSIsInBvc2l0aW9uIiwiaW1hZ2VOYW1lIiwibWFza1JlZmVyZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFOEQsR0FBVSxDQUFWLE1BQVU7QUFFekQsR0FBMEIsQ0FBMUIsZUFBMEI7QUFDdEIsR0FBOEIsQ0FBOUIsbUJBQThCOzs7Ozs7QUFFN0QsR0FBSyxDQUFHQSxhQUFhLEdBTHFELE1BQVUsa0JBSzVFQSxhQUFhO0FBRXJCLEdBQUssQ0FBQ0MsYUFBYSxHQUFHLFFBQ3RCLEdBRDRCLENBQUM7SUFDM0JELGFBQWEsQ0FBQyxRQUFRLENBQVBFLE1BQU0sRUFBRUMsVUFBVSxFQUFLLENBQUM7UUFDckMsR0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQVRvRCxNQUFVO1FBV2hGLE1BQU0sbUNBWGdFLE1BQVU7WUFhdkVBLE1BQU0sRUFBRUEsTUFBTTs2Q0FiK0MsTUFBVTtZQWN0RUYsTUFBTSxFQUFFQSxNQUFNO1lBQUVDLFVBQVUsRUFBRUEsVUFBVTtZQUFFRSxXQUFXLEVBQVhBLElBQVc7NkNBZFMsTUFBVTtZQWVwRUMsU0FBUyxFQUFDLENBQU07NkNBYkwsZUFBMEI7WUFjekJDLEtBQUssRUFBRSxDQUFDO2dCQUFDLElBQUk7Z0JBQUUsSUFBSTtnQkFBRSxDQUFDO1lBQUMsQ0FBQztZQUFFQyxRQUFRLEVBQUUsQ0FBQztnQkFBQyxLQUFLO2dCQUFFLEtBQUs7Z0JBQUUsS0FBSztZQUFDLENBQUM7K0NBYnhELG1CQUE4QjtZQWUvQkEsUUFBUSxFQUFFLENBQUM7Z0JBQUMsQ0FBQztnQkFBRSxDQUFDO2dCQUFFLENBQUM7WUFBQyxDQUFDO1lBQUVDLFNBQVMsRUFBQyxDQUFpQjtZQUFDQyxhQUFhLEVBQUMsQ0FBTTs4Q0FmdEUsbUJBQThCO1lBZ0IvQkYsUUFBUSxFQUFFLENBQUM7aUJBQUUsR0FBRztpQkFBRyxHQUFHO2lCQUFHLEdBQUc7WUFBQyxDQUFDO1lBQUVDLFNBQVMsRUFBQyxDQUFZO1lBQUNDLGFBQWEsRUFBQyxDQUFNOytDQW5CL0IsTUFBVTtJQXlCbEYsQ0FBQztBQUNILENBQUM7ZUFFY1QsYUFBYSJ9