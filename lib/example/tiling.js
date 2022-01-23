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
        var canvas = new _index.Canvas(), context = {
        };
        return(/*#__PURE__*/ React.createElement(_index.Scene, {
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
        })), /*#__PURE__*/ React.createElement(_index.DesignCamera, null)));
    });
};
var _default = tilingExample;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3RpbGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgTWFzaywgRGVzaWduQ2FtZXJhLCBwcmVsb2FkVXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcbmltcG9ydCBUZXh0dXJlZFF1YWRyYW5nbGUgZnJvbSBcIi4vZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGVcIjtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VzIH0gPSBwcmVsb2FkVXRpbGl0aWVzO1xuXG5jb25zdCB0aWxpbmdFeGFtcGxlID0gKCkgPT4ge1xuICBwcmVsb2FkSW1hZ2VzKChpbWFnZXMsIGltYWdlTmFtZXMpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCksXG4gICAgICAgICAgY29udGV4dCA9IHt9O1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfSBjb250ZXh0PXtjb250ZXh0fSA+XG4gICAgICAgIDxQYXJ0IGltYWdlcz17aW1hZ2VzfSBpbWFnZU5hbWVzPXtpbWFnZU5hbWVzfSBpbWFnZVRpbGluZyA+XG4gICAgICAgICAgPE1hc2sgcmVmZXJlbmNlPVwibWFza1wiPlxuICAgICAgICAgICAgPENvbG91cmVkU3F1YXJlIHNjYWxlPXtbIDAuMjUsIDAuMjUsIDEgXX0gcG9zaXRpb249e1sgMC4xMjUsIDAuMTI1LCAwLjEyNSBdfSAvPlxuICAgICAgICAgIDwvTWFzaz5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIDAsIDAsIDAgXX0gaW1hZ2VOYW1lPVwiZmxvb3Jib2FyZHMuanBnXCIgbWFza1JlZmVyZW5jZT1cIm1hc2tcIiAvPlxuICAgICAgICAgIDxUZXh0dXJlZFF1YWRyYW5nbGUgcG9zaXRpb249e1sgLTAuNSwgLTAuNSwgLTAuNSBdfSBpbWFnZU5hbWU9XCJwYXZpbmcuanBnXCIgbWFza1JlZmVyZW5jZT1cIm1hc2tcIiAvPlxuICAgICAgICA8L1BhcnQ+XG4gICAgICAgIDxEZXNpZ25DYW1lcmEvPlxuICAgICAgPC9TY2VuZT5cblxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGlsaW5nRXhhbXBsZTtcbiJdLCJuYW1lcyI6WyJwcmVsb2FkSW1hZ2VzIiwidGlsaW5nRXhhbXBsZSIsImltYWdlcyIsImltYWdlTmFtZXMiLCJjYW52YXMiLCJjb250ZXh0IiwiaW1hZ2VUaWxpbmciLCJyZWZlcmVuY2UiLCJzY2FsZSIsInBvc2l0aW9uIiwiaW1hZ2VOYW1lIiwibWFza1JlZmVyZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFOEQsR0FBVSxDQUFWLE1BQVU7QUFFekQsR0FBMEIsQ0FBMUIsZUFBMEI7QUFDdEIsR0FBOEIsQ0FBOUIsbUJBQThCOzs7Ozs7QUFFN0QsR0FBSyxDQUFHQSxhQUFhLEdBTHFELE1BQVUsa0JBSzVFQSxhQUFhO0FBRXJCLEdBQUssQ0FBQ0MsYUFBYSxHQUFHLFFBQ3RCLEdBRDRCLENBQUM7SUFDM0JELGFBQWEsQ0FBQyxRQUFRLENBQVBFLE1BQU0sRUFBRUMsVUFBVSxFQUFLLENBQUM7UUFDckMsR0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQVRvRCxNQUFVLFdBVTFFQyxPQUFPLEdBQUcsQ0FBQztRQUFBLENBQUM7UUFFbEIsTUFBTSxtQ0FaZ0UsTUFBVTtZQWN2RUQsTUFBTSxFQUFFQSxNQUFNO1lBQUVDLE9BQU8sRUFBRUEsT0FBTzs2Q0FkNkIsTUFBVTtZQWV0RUgsTUFBTSxFQUFFQSxNQUFNO1lBQUVDLFVBQVUsRUFBRUEsVUFBVTtZQUFFRyxXQUFXLEVBQVhBLElBQVc7NkNBZlMsTUFBVTtZQWdCcEVDLFNBQVMsRUFBQyxDQUFNOzZDQWRMLGVBQTBCO1lBZXpCQyxLQUFLLEVBQUUsQ0FBQztBQUFDLG9CQUFJO0FBQUUsb0JBQUk7QUFBRSxpQkFBQztZQUFDLENBQUM7WUFBRUMsUUFBUSxFQUFFLENBQUM7QUFBQyxxQkFBSztBQUFFLHFCQUFLO0FBQUUscUJBQUs7WUFBQyxDQUFDOytDQWR4RCxtQkFBOEI7WUFnQi9CQSxRQUFRLEVBQUUsQ0FBQztBQUFDLGlCQUFDO0FBQUUsaUJBQUM7QUFBRSxpQkFBQztZQUFDLENBQUM7WUFBRUMsU0FBUyxFQUFDLENBQWlCO1lBQUNDLGFBQWEsRUFBQyxDQUFNOzhDQWhCdEUsbUJBQThCO1lBaUIvQkYsUUFBUSxFQUFFLENBQUM7aUJBQUUsR0FBRztpQkFBRyxHQUFHO2lCQUFHLEdBQUc7WUFBQyxDQUFDO1lBQUVDLFNBQVMsRUFBQyxDQUFZO1lBQUNDLGFBQWEsRUFBQyxDQUFNOytDQXBCL0IsTUFBVTtJQTBCbEYsQ0FBQztBQUNILENBQUM7ZUFFY1YsYUFBYSJ9