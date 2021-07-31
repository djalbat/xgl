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
                0
            ]
        })), /*#__PURE__*/ React.createElement(_index.Part, {
            images: images,
            imageNames: imageNames,
            imageTiling: true
        }, /*#__PURE__*/ React.createElement(_texturedQuadrangle.default, {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3RpbGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgTWFzaywgRGVzaWduQ2FtZXJhLCBwcmVsb2FkVXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcbmltcG9ydCBUZXh0dXJlZFF1YWRyYW5nbGUgZnJvbSBcIi4vZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGVcIjtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VzIH0gPSBwcmVsb2FkVXRpbGl0aWVzO1xuXG5jb25zdCB0aWxpbmdFeGFtcGxlID0gKCkgPT4ge1xuICBwcmVsb2FkSW1hZ2VzKChpbWFnZXMsIGltYWdlTmFtZXMpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgICA8TWFzayByZWZlcmVuY2U9XCJtYXNrXCI+XG4gICAgICAgICAgPENvbG91cmVkU3F1YXJlIHNjYWxlPXtbIDAuMjUsIDAuMjUsIDEgXX0gcG9zaXRpb249e1sgMC4xMjUsIDAuMTI1LCAwIF19IC8+XG4gICAgICAgIDwvTWFzaz5cbiAgICAgICAgPFBhcnQgaW1hZ2VzPXtpbWFnZXN9IGltYWdlTmFtZXM9e2ltYWdlTmFtZXN9IGltYWdlVGlsaW5nID5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIDAsIDAsIDAgXX0gaW1hZ2VOYW1lPVwiZmxvb3Jib2FyZHMuanBnXCIgbWFza1JlZmVyZW5jZT1cIm1hc2tcIiAvPlxuICAgICAgICAgIDxUZXh0dXJlZFF1YWRyYW5nbGUgcG9zaXRpb249e1sgLTAuNSwgLTAuNSwgLTAuNSBdfSBpbWFnZU5hbWU9XCJwYXZpbmcuanBnXCIgbWFza1JlZmVyZW5jZT1cIm1hc2tcIiAvPlxuICAgICAgICA8L1BhcnQ+XG4gICAgICAgIDxEZXNpZ25DYW1lcmEvPlxuICAgICAgPC9TY2VuZT5cblxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGlsaW5nRXhhbXBsZTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUU4RCxHQUFVLENBQVYsTUFBVTtBQUV6RCxHQUEwQixDQUExQixlQUEwQjtBQUN0QixHQUE4QixDQUE5QixtQkFBOEI7Ozs7OztBQUU3RCxHQUFLLENBQUcsYUFBYSxHQUxxRCxNQUFVLGtCQUs1RSxhQUFhO0FBRXJCLEdBQUssQ0FBQyxhQUFhLGNBQVMsQ0FBQztJQUMzQixhQUFhLFVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBSyxDQUFDO1FBQ3JDLEdBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQVRvRCxNQUFVO2lEQUFWLE1BQVU7WUFhdkUsTUFBTSxFQUFFLE1BQU07NkNBYitDLE1BQVU7WUFjdEUsU0FBUyxHQUFDLElBQU07NkNBWkgsZUFBMEI7WUFhM0IsS0FBSztnQkFBSSxJQUFJO2dCQUFFLElBQUk7Z0JBQUUsQ0FBQzs7WUFBSSxRQUFRO2dCQUFJLEtBQUs7Z0JBQUUsS0FBSztnQkFBRSxDQUFDOzsrQ0FmTCxNQUFVO1lBaUJ0RSxNQUFNLEVBQUUsTUFBTTtZQUFFLFVBQVUsRUFBRSxVQUFVO1lBQUUsV0FBVyxFQUFYLElBQVc7NkNBZGxDLG1CQUE4QjtZQWUvQixRQUFRO2dCQUFJLENBQUM7Z0JBQUUsQ0FBQztnQkFBRSxDQUFDOztZQUFJLFNBQVMsR0FBQyxlQUFpQjtZQUFDLGFBQWEsR0FBQyxJQUFNOzhDQWZ0RSxtQkFBOEI7WUFnQi9CLFFBQVE7aUJBQUssR0FBRztpQkFBRyxHQUFHO2lCQUFHLEdBQUc7O1lBQUksU0FBUyxHQUFDLFVBQVk7WUFBQyxhQUFhLEdBQUMsSUFBTTsrQ0FuQi9CLE1BQVU7SUF5QmxGLENBQUM7QUFDSCxDQUFDO2VBRWMsYUFBYSJ9