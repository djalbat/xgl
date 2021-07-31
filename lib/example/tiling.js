"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _index = require("../index");
var _configuration = _interopRequireDefault(require("../miscellaneous/configuration"));
var _colouredSquare = _interopRequireDefault(require("./element/colouredSquare"));
var _texturedQuadrangle = _interopRequireDefault(require("./element/texturedQuadrangle"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var forEach = _necessary.asynchronousUtilities.forEach;
var tilingExample = function() {
    var imageNames = _configuration.default.imageNames, imageDirectoryURI = _configuration.default.imageDirectoryURI;
    preloadImages(imageNames, imageDirectoryURI, function(images) {
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
function preloadImages(imageNames, imageDirectoryURI, callback) {
    var done = function done() {
        var images = context.images;
        callback(images);
    };
    var images = [], context = {
        images: images
    };
    forEach(imageNames, function(imageName, next, done1, context1) {
        var onload = function onload() {
            images.push(image);
            next();
        };
        var image = new Image(), src = "".concat(imageDirectoryURI, "/").concat(imageName);
        Object.assign(image, {
            src: src,
            onload: onload
        });
    }, done, context);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3RpbGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgTWFzaywgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IGNvbmZpZ3VyYXRpb24gZnJvbSBcIi4uL21pc2NlbGxhbmVvdXMvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcbmltcG9ydCBUZXh0dXJlZFF1YWRyYW5nbGUgZnJvbSBcIi4vZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGVcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmNvbnN0IHRpbGluZ0V4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaW1hZ2VOYW1lcywgaW1hZ2VEaXJlY3RvcnlVUkkgfSA9IGNvbmZpZ3VyYXRpb247XG5cbiAgcHJlbG9hZEltYWdlcyhpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSwgKGltYWdlcykgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxNYXNrIHJlZmVyZW5jZT1cIm1hc2tcIj5cbiAgICAgICAgICA8Q29sb3VyZWRTcXVhcmUgc2NhbGU9e1sgMC4yNSwgMC4yNSwgMSBdfSBwb3NpdGlvbj17WyAwLjEyNSwgMC4xMjUsIDAgXX0gLz5cbiAgICAgICAgPC9NYXNrPlxuICAgICAgICA8UGFydCBpbWFnZXM9e2ltYWdlc30gaW1hZ2VOYW1lcz17aW1hZ2VOYW1lc30gaW1hZ2VUaWxpbmcgPlxuICAgICAgICAgIDxUZXh0dXJlZFF1YWRyYW5nbGUgcG9zaXRpb249e1sgMCwgMCwgMCBdfSBpbWFnZU5hbWU9XCJmbG9vcmJvYXJkcy5qcGdcIiBtYXNrUmVmZXJlbmNlPVwibWFza1wiIC8+XG4gICAgICAgICAgPFRleHR1cmVkUXVhZHJhbmdsZSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCAtMC41IF19IGltYWdlTmFtZT1cInBhdmluZy5qcGdcIiBtYXNrUmVmZXJlbmNlPVwibWFza1wiIC8+XG4gICAgICAgIDwvUGFydD5cbiAgICAgICAgPERlc2lnbkNhbWVyYS8+XG4gICAgICA8L1NjZW5lPlxuXG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aWxpbmdFeGFtcGxlO1xuXG5mdW5jdGlvbiBwcmVsb2FkSW1hZ2VzKGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJLCBjYWxsYmFjaykge1xuICBjb25zdCBpbWFnZXMgPSBbXSxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICBpbWFnZXNcbiAgICAgICAgfTtcblxuICBmb3JFYWNoKGltYWdlTmFtZXMsIChpbWFnZU5hbWUsIG5leHQsIGRvbmUsIGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpLFxuICAgICAgICAgIHNyYyA9IGAke2ltYWdlRGlyZWN0b3J5VVJJfS8ke2ltYWdlTmFtZX1gO1xuXG4gICAgT2JqZWN0LmFzc2lnbihpbWFnZSwge1xuICAgICAgc3JjLFxuICAgICAgb25sb2FkXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBvbmxvYWQoKSB7XG4gICAgICBpbWFnZXMucHVzaChpbWFnZSk7XG5cbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH0sIGRvbmUsIGNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IGNvbnRleHQ7XG5cbiAgICBjYWxsYmFjayhpbWFnZXMpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFMEIsR0FBVyxDQUFYLFVBQVc7QUFDTyxHQUFVLENBQVYsTUFBVTtBQUV4QyxHQUFnQyxDQUFoQyxjQUFnQztBQUMvQixHQUEwQixDQUExQixlQUEwQjtBQUN0QixHQUE4QixDQUE5QixtQkFBOEI7Ozs7OztBQUU3RCxHQUFLLENBQUcsT0FBTyxHQVB1QixVQUFXLHVCQU96QyxPQUFPO0FBRWYsR0FBSyxDQUFDLGFBQWEsY0FBUyxDQUFDO0lBQzNCLEdBQUssQ0FBRyxVQUFVLEdBUE0sY0FBZ0MsU0FPaEQsVUFBVSxFQUFFLGlCQUFpQixHQVBiLGNBQWdDLFNBT3BDLGlCQUFpQjtJQUVyQyxhQUFhLENBQUMsVUFBVSxFQUFFLGlCQUFpQixXQUFHLE1BQU0sRUFBSyxDQUFDO1FBQ3hELEdBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQVprQyxNQUFVO2lEQUFWLE1BQVU7WUFnQnJELE1BQU0sRUFBRSxNQUFNOzZDQWhCNkIsTUFBVTtZQWlCcEQsU0FBUyxHQUFDLElBQU07NkNBZEgsZUFBMEI7WUFlM0IsS0FBSztnQkFBSSxJQUFJO2dCQUFFLElBQUk7Z0JBQUUsQ0FBQzs7WUFBSSxRQUFRO2dCQUFJLEtBQUs7Z0JBQUUsS0FBSztnQkFBRSxDQUFDOzsrQ0FsQnZCLE1BQVU7WUFvQnBELE1BQU0sRUFBRSxNQUFNO1lBQUUsVUFBVSxFQUFFLFVBQVU7WUFBRSxXQUFXLEVBQVgsSUFBVzs2Q0FoQmxDLG1CQUE4QjtZQWlCL0IsUUFBUTtnQkFBSSxDQUFDO2dCQUFFLENBQUM7Z0JBQUUsQ0FBQzs7WUFBSSxTQUFTLEdBQUMsZUFBaUI7WUFBQyxhQUFhLEdBQUMsSUFBTTs4Q0FqQnRFLG1CQUE4QjtZQWtCL0IsUUFBUTtpQkFBSyxHQUFHO2lCQUFHLEdBQUc7aUJBQUcsR0FBRzs7WUFBSSxTQUFTLEdBQUMsVUFBWTtZQUFDLGFBQWEsR0FBQyxJQUFNOytDQXRCakQsTUFBVTtJQTRCaEUsQ0FBQztBQUNILENBQUM7ZUFFYyxhQUFhOztTQUVuQixhQUFhLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxDQUFDO1FBc0J0RCxJQUFJLFlBQUosSUFBSSxHQUFHLENBQUM7UUFDZixHQUFLLENBQUcsTUFBTSxHQUFLLE9BQU8sQ0FBbEIsTUFBTTtRQUVkLFFBQVEsQ0FBQyxNQUFNO0lBQ2pCLENBQUM7SUF6QkQsR0FBSyxDQUFDLE1BQU0sT0FDTixPQUFPO1FBQ0wsTUFBTSxFQUFOLE1BQU07O0lBR2QsT0FBTyxDQUFDLFVBQVUsV0FBRyxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUksRUFBRSxRQUFPLEVBQUssQ0FBQztZQVM5QyxNQUFNLFlBQU4sTUFBTSxHQUFHLENBQUM7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBRWpCLElBQUk7UUFDTixDQUFDO1FBWkQsR0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxJQUNqQixHQUFHLE1BQTJCLE1BQVMsQ0FBOUIsaUJBQWlCLEdBQUMsQ0FBQyxHQUFZLE1BQUEsQ0FBVixTQUFTO1FBRTdDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSztZQUNqQixHQUFHLEVBQUgsR0FBRztZQUNILE1BQU0sRUFBTixNQUFNOztJQVFWLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTztBQU9sQixDQUFDIn0=