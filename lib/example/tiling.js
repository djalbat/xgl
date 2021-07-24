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
var canvas = new _index.Canvas(), mask = /*#__PURE__*/ React.createElement(_index.Mask, null, /*#__PURE__*/ React.createElement(_colouredSquare.default, {
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
}));
var tilingExample = function() {
    var imageNames = _configuration.default.imageNames, imageDirectoryURI = _configuration.default.imageDirectoryURI;
    preloadImages(imageNames, imageDirectoryURI, function(images) {
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
            imageName: "floorboards.jpg",
            mask: mask
        }), /*#__PURE__*/ React.createElement(_texturedQuadrangle.default, {
            position: [
                -0.5,
                -0.5,
                -0.5
            ],
            imageName: "paving.jpg",
            mask: mask
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3RpbGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgTWFzaywgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IGNvbmZpZ3VyYXRpb24gZnJvbSBcIi4uL21pc2NlbGxhbmVvdXMvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcbmltcG9ydCBUZXh0dXJlZFF1YWRyYW5nbGUgZnJvbSBcIi4vZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGVcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKSxcbiAgICAgIG1hc2sgPVxuXG4gICAgICAgIDxNYXNrPlxuICAgICAgICAgIDxDb2xvdXJlZFNxdWFyZSBzY2FsZT17WyAwLjI1LCAwLjI1LCAxIF19IHBvc2l0aW9uPXtbIDAuMTI1LCAwLjEyNSwgMCBdfSAvPlxuICAgICAgICA8L01hc2s+XG5cbiAgICAgIDtcblxuY29uc3QgdGlsaW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgeyBpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSB9ID0gY29uZmlndXJhdGlvbjtcblxuICBwcmVsb2FkSW1hZ2VzKGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJLCAoaW1hZ2VzKSA9PiB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgICAgPFBhcnQgaW1hZ2VzPXtpbWFnZXN9IGltYWdlTmFtZXM9e2ltYWdlTmFtZXN9IGltYWdlVGlsaW5nID5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIDAsIDAsIDAgXX0gaW1hZ2VOYW1lPVwiZmxvb3Jib2FyZHMuanBnXCIgbWFzaz17bWFza30gLz5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsIC0wLjUgXX0gaW1hZ2VOYW1lPVwicGF2aW5nLmpwZ1wiIG1hc2s9e21hc2t9IC8+XG4gICAgICAgIDwvUGFydD5cbiAgICAgICAgPERlc2lnbkNhbWVyYS8+XG4gICAgICA8L1NjZW5lPlxuXG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aWxpbmdFeGFtcGxlO1xuXG5mdW5jdGlvbiBwcmVsb2FkSW1hZ2VzKGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJLCBjYWxsYmFjaykge1xuICBjb25zdCBpbWFnZXMgPSBbXSxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICBpbWFnZXNcbiAgICAgICAgfTtcblxuICBmb3JFYWNoKGltYWdlTmFtZXMsIChpbWFnZU5hbWUsIG5leHQsIGRvbmUsIGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpLFxuICAgICAgICAgIHNyYyA9IGAke2ltYWdlRGlyZWN0b3J5VVJJfS8ke2ltYWdlTmFtZX1gO1xuXG4gICAgT2JqZWN0LmFzc2lnbihpbWFnZSwge1xuICAgICAgc3JjLFxuICAgICAgb25sb2FkXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBvbmxvYWQoKSB7XG4gICAgICBpbWFnZXMucHVzaChpbWFnZSk7XG5cbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH0sIGRvbmUsIGNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IGNvbnRleHQ7XG5cbiAgICBjYWxsYmFjayhpbWFnZXMpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFMEIsR0FBVyxDQUFYLFVBQVc7QUFDTyxHQUFVLENBQVYsTUFBVTtBQUV4QyxHQUFnQyxDQUFoQyxjQUFnQztBQUMvQixHQUEwQixDQUExQixlQUEwQjtBQUN0QixHQUE4QixDQUE5QixtQkFBOEI7Ozs7OztBQUU3RCxHQUFLLENBQUcsT0FBTyxHQVB1QixVQUFXLHVCQU96QyxPQUFPO0FBRWYsR0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBUnNDLE1BQVUsV0FTNUQsSUFBSSxxQ0FUOEMsTUFBVSwrQ0FHdkMsZUFBMEI7SUFTM0IsS0FBSztRQUFJLElBQUk7UUFBRSxJQUFJO1FBQUUsQ0FBQzs7SUFBSSxRQUFRO1FBQUksS0FBSztRQUFFLEtBQUs7UUFBRSxDQUFDOzs7QUFLL0UsR0FBSyxDQUFDLGFBQWEsY0FBUyxDQUFDO0lBQzNCLEdBQUssQ0FBRyxVQUFVLEdBaEJNLGNBQWdDLFNBZ0JoRCxVQUFVLEVBQUUsaUJBQWlCLEdBaEJiLGNBQWdDLFNBZ0JwQyxpQkFBaUI7SUFFckMsYUFBYSxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsV0FBRyxNQUFNLEVBQUssQ0FBQztpREFwQkosTUFBVTtZQXVCckQsTUFBTSxFQUFFLE1BQU07NkNBdkI2QixNQUFVO1lBd0JwRCxNQUFNLEVBQUUsTUFBTTtZQUFFLFVBQVUsRUFBRSxVQUFVO1lBQUUsV0FBVyxFQUFYLElBQVc7NkNBcEJsQyxtQkFBOEI7WUFxQi9CLFFBQVE7Z0JBQUksQ0FBQztnQkFBRSxDQUFDO2dCQUFFLENBQUM7O1lBQUksU0FBUyxHQUFDLGVBQWlCO1lBQUMsSUFBSSxFQUFFLElBQUk7OENBckI1RCxtQkFBOEI7WUFzQi9CLFFBQVE7aUJBQUssR0FBRztpQkFBRyxHQUFHO2lCQUFHLEdBQUc7O1lBQUksU0FBUyxHQUFDLFVBQVk7WUFBQyxJQUFJLEVBQUUsSUFBSTsrQ0ExQnZDLE1BQVU7SUFnQ2hFLENBQUM7QUFDSCxDQUFDO2VBRWMsYUFBYTs7U0FFbkIsYUFBYSxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsQ0FBQztRQXNCdEQsSUFBSSxZQUFKLElBQUksR0FBRyxDQUFDO1FBQ2YsR0FBSyxDQUFHLE1BQU0sR0FBSyxPQUFPLENBQWxCLE1BQU07UUFFZCxRQUFRLENBQUMsTUFBTTtJQUNqQixDQUFDO0lBekJELEdBQUssQ0FBQyxNQUFNLE9BQ04sT0FBTztRQUNMLE1BQU0sRUFBTixNQUFNOztJQUdkLE9BQU8sQ0FBQyxVQUFVLFdBQUcsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFJLEVBQUUsUUFBTyxFQUFLLENBQUM7WUFTOUMsTUFBTSxZQUFOLE1BQU0sR0FBRyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztZQUVqQixJQUFJO1FBQ04sQ0FBQztRQVpELEdBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssSUFDakIsR0FBRyxNQUEyQixNQUFTLENBQTlCLGlCQUFpQixHQUFDLENBQUMsR0FBWSxNQUFBLENBQVYsU0FBUztRQUU3QyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUs7WUFDakIsR0FBRyxFQUFILEdBQUc7WUFDSCxNQUFNLEVBQU4sTUFBTTs7SUFRVixDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU87QUFPbEIsQ0FBQyJ9