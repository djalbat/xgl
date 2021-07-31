"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../index");
var _texturedQuadrangle = _interopRequireDefault(require("./element/texturedQuadrangle"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var preloadImages = _index.preloadUtilities.preloadImages;
var houseExample = function() {
    preloadImages(function(images, imageNames) {
        var canvas = new _index.Canvas();
        return(/*#__PURE__*/ React.createElement(_index.Scene, {
            canvas: canvas
        }, /*#__PURE__*/ React.createElement(_index.Part, {
            images: images,
            imageNames: imageNames,
            imageTiling: true
        }, /*#__PURE__*/ React.createElement(_texturedQuadrangle.default, {
            position: [
                0,
                0,
                0
            ],
            imageName: "floorboards.jpg"
        })), /*#__PURE__*/ React.createElement(_index.DesignCamera, null)));
    });
};
var _default = houseExample;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2hvdXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBEZXNpZ25DYW1lcmEsIHByZWxvYWRVdGlsaXRpZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVGV4dHVyZWRRdWFkcmFuZ2xlIGZyb20gXCIuL2VsZW1lbnQvdGV4dHVyZWRRdWFkcmFuZ2xlXCI7XG5cbmNvbnN0IHsgcHJlbG9hZEltYWdlcyB9ID0gcHJlbG9hZFV0aWxpdGllcztcblxuY29uc3QgaG91c2VFeGFtcGxlID0gKCkgPT4ge1xuICBwcmVsb2FkSW1hZ2VzKChpbWFnZXMsIGltYWdlTmFtZXMpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgICA8UGFydCBpbWFnZXM9e2ltYWdlc30gaW1hZ2VOYW1lcz17aW1hZ2VOYW1lc30gaW1hZ2VUaWxpbmcgPlxuICAgICAgICAgIDxUZXh0dXJlZFF1YWRyYW5nbGUgcG9zaXRpb249e1sgMCwgMCwgMCBdfSBpbWFnZU5hbWU9XCJmbG9vcmJvYXJkcy5qcGdcIiAvPlxuICAgICAgICA8L1BhcnQ+XG4gICAgICAgIDxEZXNpZ25DYW1lcmEvPlxuICAgICAgPC9TY2VuZT5cblxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaG91c2VFeGFtcGxlO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRXdELEdBQVUsQ0FBVixNQUFVO0FBRS9DLEdBQThCLENBQTlCLG1CQUE4Qjs7Ozs7O0FBRTdELEdBQUssQ0FBRyxhQUFhLEdBSitDLE1BQVUsa0JBSXRFLGFBQWE7QUFFckIsR0FBSyxDQUFDLFlBQVksY0FBUyxDQUFDO0lBQzFCLGFBQWEsVUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFLLENBQUM7UUFDckMsR0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBUjhDLE1BQVU7aURBQVYsTUFBVTtZQVlqRSxNQUFNLEVBQUUsTUFBTTs2Q0FaeUMsTUFBVTtZQWFoRSxNQUFNLEVBQUUsTUFBTTtZQUFFLFVBQVUsRUFBRSxVQUFVO1lBQUUsV0FBVyxFQUFYLElBQVc7NkNBWGxDLG1CQUE4QjtZQVkvQixRQUFRO2dCQUFJLENBQUM7Z0JBQUUsQ0FBQztnQkFBRSxDQUFDOztZQUFJLFNBQVMsR0FBQyxlQUFpQjsrQ0FkWixNQUFVO0lBb0I1RSxDQUFDO0FBQ0gsQ0FBQztlQUVjLFlBQVkifQ==