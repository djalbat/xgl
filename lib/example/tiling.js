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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3RpbGluZy5qcyJdLCJuYW1lcyI6WyJDYW52YXMiLCJTY2VuZSIsIlBhcnQiLCJNYXNrIiwiRGVzaWduQ2FtZXJhIiwicHJlbG9hZFV0aWxpdGllcyIsIkNvbG91cmVkU3F1YXJlIiwiVGV4dHVyZWRRdWFkcmFuZ2xlIiwicHJlbG9hZEltYWdlcyIsInRpbGluZ0V4YW1wbGUiLCJpbWFnZXMiLCJpbWFnZU5hbWVzIiwiY2FudmFzIiwiaW1hZ2VUaWxpbmciLCJyZWZlcmVuY2UiLCJzY2FsZSIsInBvc2l0aW9uIiwiaW1hZ2VOYW1lIiwibWFza1JlZmVyZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFOEQsR0FBVSxDQUFWLE1BQVU7QUFFekQsR0FBMEIsQ0FBMUIsZUFBMEI7QUFDdEIsR0FBOEIsQ0FBOUIsbUJBQThCOzs7Ozs7QUFFN0QsR0FBSyxDQUFHLGFBQWEsR0FMcUQsTUFBVSxrQkFLNUUsYUFBYTtBQUVyQixHQUFLLENBQUMsYUFBYSxHQUFHLFFBQ3RCLEdBRDRCLENBQUM7SUFDM0IsYUFBYSxDQUFDLFFBQVEsQ0FBUCxNQUFNLEVBQUUsVUFBVSxFQUFLLENBQUM7UUFDckMsR0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBVG9ELE1BQVU7UUFXaEYsTUFBTSxtQ0FYZ0UsTUFBVTtZQWF2RSxNQUFNLEVBQUUsTUFBTTs2Q0FiK0MsTUFBVTtZQWN0RSxNQUFNLEVBQUUsTUFBTTtZQUFFLFVBQVUsRUFBRSxVQUFVO1lBQUUsV0FBVyxFQUFYLElBQVc7NkNBZFMsTUFBVTtZQWVwRSxTQUFTLEVBQUMsQ0FBTTs2Q0FiTCxlQUEwQjtZQWN6QixLQUFLLEVBQUUsQ0FBQztnQkFBQyxJQUFJO2dCQUFFLElBQUk7Z0JBQUUsQ0FBQztZQUFDLENBQUM7WUFBRSxRQUFRLEVBQUUsQ0FBQztnQkFBQyxLQUFLO2dCQUFFLEtBQUs7Z0JBQUUsS0FBSztZQUFDLENBQUM7K0NBYnhELG1CQUE4QjtZQWUvQixRQUFRLEVBQUUsQ0FBQztnQkFBQyxDQUFDO2dCQUFFLENBQUM7Z0JBQUUsQ0FBQztZQUFDLENBQUM7WUFBRSxTQUFTLEVBQUMsQ0FBaUI7WUFBQyxhQUFhLEVBQUMsQ0FBTTs4Q0FmdEUsbUJBQThCO1lBZ0IvQixRQUFRLEVBQUUsQ0FBQztpQkFBRSxHQUFHO2lCQUFHLEdBQUc7aUJBQUcsR0FBRztZQUFDLENBQUM7WUFBRSxTQUFTLEVBQUMsQ0FBWTtZQUFDLGFBQWEsRUFBQyxDQUFNOytDQW5CL0IsTUFBVTtJQXlCbEYsQ0FBQztBQUNILENBQUM7ZUFFYyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIE1hc2ssIERlc2lnbkNhbWVyYSwgcHJlbG9hZFV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDb2xvdXJlZFNxdWFyZSBmcm9tIFwiLi9lbGVtZW50L2NvbG91cmVkU3F1YXJlXCI7XG5pbXBvcnQgVGV4dHVyZWRRdWFkcmFuZ2xlIGZyb20gXCIuL2VsZW1lbnQvdGV4dHVyZWRRdWFkcmFuZ2xlXCI7XG5cbmNvbnN0IHsgcHJlbG9hZEltYWdlcyB9ID0gcHJlbG9hZFV0aWxpdGllcztcblxuY29uc3QgdGlsaW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgcHJlbG9hZEltYWdlcygoaW1hZ2VzLCBpbWFnZU5hbWVzKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgICAgPFBhcnQgaW1hZ2VzPXtpbWFnZXN9IGltYWdlTmFtZXM9e2ltYWdlTmFtZXN9IGltYWdlVGlsaW5nID5cbiAgICAgICAgICA8TWFzayByZWZlcmVuY2U9XCJtYXNrXCI+XG4gICAgICAgICAgICA8Q29sb3VyZWRTcXVhcmUgc2NhbGU9e1sgMC4yNSwgMC4yNSwgMSBdfSBwb3NpdGlvbj17WyAwLjEyNSwgMC4xMjUsIDAuMTI1IF19IC8+XG4gICAgICAgICAgPC9NYXNrPlxuICAgICAgICAgIDxUZXh0dXJlZFF1YWRyYW5nbGUgcG9zaXRpb249e1sgMCwgMCwgMCBdfSBpbWFnZU5hbWU9XCJmbG9vcmJvYXJkcy5qcGdcIiBtYXNrUmVmZXJlbmNlPVwibWFza1wiIC8+XG4gICAgICAgICAgPFRleHR1cmVkUXVhZHJhbmdsZSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCAtMC41IF19IGltYWdlTmFtZT1cInBhdmluZy5qcGdcIiBtYXNrUmVmZXJlbmNlPVwibWFza1wiIC8+XG4gICAgICAgIDwvUGFydD5cbiAgICAgICAgPERlc2lnbkNhbWVyYS8+XG4gICAgICA8L1NjZW5lPlxuXG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aWxpbmdFeGFtcGxlO1xuIl19