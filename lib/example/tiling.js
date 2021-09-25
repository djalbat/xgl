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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3RpbGluZy5qcyJdLCJuYW1lcyI6WyJDYW52YXMiLCJTY2VuZSIsIlBhcnQiLCJNYXNrIiwiRGVzaWduQ2FtZXJhIiwicHJlbG9hZFV0aWxpdGllcyIsIkNvbG91cmVkU3F1YXJlIiwiVGV4dHVyZWRRdWFkcmFuZ2xlIiwicHJlbG9hZEltYWdlcyIsInRpbGluZ0V4YW1wbGUiLCJpbWFnZXMiLCJpbWFnZU5hbWVzIiwiY2FudmFzIiwicmVmZXJlbmNlIiwic2NhbGUiLCJwb3NpdGlvbiIsImltYWdlVGlsaW5nIiwiaW1hZ2VOYW1lIiwibWFza1JlZmVyZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFOEQsR0FBVSxDQUFWLE1BQVU7QUFFekQsR0FBMEIsQ0FBMUIsZUFBMEI7QUFDdEIsR0FBOEIsQ0FBOUIsbUJBQThCOzs7Ozs7QUFFN0QsR0FBSyxDQUFHLGFBQWEsR0FMcUQsTUFBVSxrQkFLNUUsYUFBYTtBQUVyQixHQUFLLENBQUMsYUFBYSxHQUFHLFFBQ3RCLEdBRDRCLENBQUM7SUFDM0IsYUFBYSxDQUFDLFFBQVEsQ0FBUCxNQUFNLEVBQUUsVUFBVSxFQUFLLENBQUM7UUFDckMsR0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBVG9ELE1BQVU7UUFXaEYsTUFBTSxtQ0FYZ0UsTUFBVTtZQWF2RSxNQUFNLEVBQUUsTUFBTTs2Q0FiK0MsTUFBVTtZQWN0RSxTQUFTLEVBQUMsQ0FBTTs2Q0FaSCxlQUEwQjtZQWEzQixLQUFLLEVBQUUsQ0FBQztnQkFBQyxJQUFJO2dCQUFFLElBQUk7Z0JBQUUsQ0FBQztZQUFDLENBQUM7WUFBRSxRQUFRLEVBQUUsQ0FBQztnQkFBQyxLQUFLO2dCQUFFLEtBQUs7Z0JBQUUsQ0FBQztZQUFDLENBQUM7K0NBZlAsTUFBVTtZQWlCdEUsTUFBTSxFQUFFLE1BQU07WUFBRSxVQUFVLEVBQUUsVUFBVTtZQUFFLFdBQVcsRUFBWCxJQUFXOzZDQWRsQyxtQkFBOEI7WUFlL0IsUUFBUSxFQUFFLENBQUM7Z0JBQUMsQ0FBQztnQkFBRSxDQUFDO2dCQUFFLENBQUM7WUFBQyxDQUFDO1lBQUUsU0FBUyxFQUFDLENBQWlCO1lBQUMsYUFBYSxFQUFDLENBQU07OENBZnRFLG1CQUE4QjtZQWdCL0IsUUFBUSxFQUFFLENBQUM7aUJBQUUsR0FBRztpQkFBRyxHQUFHO2lCQUFHLEdBQUc7WUFBQyxDQUFDO1lBQUUsU0FBUyxFQUFDLENBQVk7WUFBQyxhQUFhLEVBQUMsQ0FBTTsrQ0FuQi9CLE1BQVU7SUF5QmxGLENBQUM7QUFDSCxDQUFDO2VBRWMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBNYXNrLCBEZXNpZ25DYW1lcmEsIHByZWxvYWRVdGlsaXRpZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ29sb3VyZWRTcXVhcmUgZnJvbSBcIi4vZWxlbWVudC9jb2xvdXJlZFNxdWFyZVwiO1xuaW1wb3J0IFRleHR1cmVkUXVhZHJhbmdsZSBmcm9tIFwiLi9lbGVtZW50L3RleHR1cmVkUXVhZHJhbmdsZVwiO1xuXG5jb25zdCB7IHByZWxvYWRJbWFnZXMgfSA9IHByZWxvYWRVdGlsaXRpZXM7XG5cbmNvbnN0IHRpbGluZ0V4YW1wbGUgPSAoKSA9PiB7XG4gIHByZWxvYWRJbWFnZXMoKGltYWdlcywgaW1hZ2VOYW1lcykgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxNYXNrIHJlZmVyZW5jZT1cIm1hc2tcIj5cbiAgICAgICAgICA8Q29sb3VyZWRTcXVhcmUgc2NhbGU9e1sgMC4yNSwgMC4yNSwgMSBdfSBwb3NpdGlvbj17WyAwLjEyNSwgMC4xMjUsIDAgXX0gLz5cbiAgICAgICAgPC9NYXNrPlxuICAgICAgICA8UGFydCBpbWFnZXM9e2ltYWdlc30gaW1hZ2VOYW1lcz17aW1hZ2VOYW1lc30gaW1hZ2VUaWxpbmcgPlxuICAgICAgICAgIDxUZXh0dXJlZFF1YWRyYW5nbGUgcG9zaXRpb249e1sgMCwgMCwgMCBdfSBpbWFnZU5hbWU9XCJmbG9vcmJvYXJkcy5qcGdcIiBtYXNrUmVmZXJlbmNlPVwibWFza1wiIC8+XG4gICAgICAgICAgPFRleHR1cmVkUXVhZHJhbmdsZSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCAtMC41IF19IGltYWdlTmFtZT1cInBhdmluZy5qcGdcIiBtYXNrUmVmZXJlbmNlPVwibWFza1wiIC8+XG4gICAgICAgIDwvUGFydD5cbiAgICAgICAgPERlc2lnbkNhbWVyYS8+XG4gICAgICA8L1NjZW5lPlxuXG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aWxpbmdFeGFtcGxlO1xuIl19