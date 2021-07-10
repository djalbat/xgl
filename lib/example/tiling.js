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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3RpbGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgTWFzaywgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IGNvbmZpZ3VyYXRpb24gZnJvbSBcIi4uL21pc2NlbGxhbmVvdXMvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcbmltcG9ydCBUZXh0dXJlZFF1YWRyYW5nbGUgZnJvbSBcIi4vZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGVcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKSxcbiAgICAgIG1hc2sgPVxuXG4gICAgICAgIDxNYXNrPlxuICAgICAgICAgIDxDb2xvdXJlZFNxdWFyZSBzY2FsZT17WyAwLjI1LCAwLjI1LCAxIF19IHBvc2l0aW9uPXtbIDAuMTI1LCAwLjEyNSwgMCBdfSAvPlxuICAgICAgICA8L01hc2s+XG5cbiAgICAgIDtcblxuY29uc3QgdGlsaW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgeyBpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSB9ID0gY29uZmlndXJhdGlvbjtcblxuICBwcmVsb2FkSW1hZ2VzKGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJLCAoaW1hZ2VzKSA9PiB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgICAgPFBhcnQgaW1hZ2VzPXtpbWFnZXN9IGltYWdlTmFtZXM9e2ltYWdlTmFtZXN9IGltYWdlVGlsaW5nID5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIDAsIDAsIDAgXX0gaW1hZ2VOYW1lPVwiZmxvb3Jib2FyZHMuanBnXCIgbWFzaz17bWFza30gLz5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsIC0wLjUgXX0gaW1hZ2VOYW1lPVwicGF2aW5nLmpwZ1wiIG1hc2s9e21hc2t9IC8+XG4gICAgICAgIDwvUGFydD5cbiAgICAgICAgPERlc2lnbkNhbWVyYSAvPlxuICAgICAgPC9TY2VuZT5cblxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGlsaW5nRXhhbXBsZTtcblxuZnVuY3Rpb24gcHJlbG9hZEltYWdlcyhpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSwgY2FsbGJhY2spIHtcbiAgY29uc3QgaW1hZ2VzID0gW10sXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgaW1hZ2VzXG4gICAgICAgIH07XG5cbiAgZm9yRWFjaChpbWFnZU5hbWVzLCAoaW1hZ2VOYW1lLCBuZXh0LCBkb25lLCBjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKSxcbiAgICAgICAgICBzcmMgPSBgJHtpbWFnZURpcmVjdG9yeVVSSX0vJHtpbWFnZU5hbWV9YDtcblxuICAgIE9iamVjdC5hc3NpZ24oaW1hZ2UsIHtcbiAgICAgIHNyYyxcbiAgICAgIG9ubG9hZFxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gb25sb2FkKCkge1xuICAgICAgaW1hZ2VzLnB1c2goaW1hZ2UpO1xuXG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9LCBkb25lLCBjb250ZXh0KTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSBjb250ZXh0O1xuXG4gICAgY2FsbGJhY2soaW1hZ2VzKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRTBCLEdBQVcsQ0FBWCxVQUFXO0FBQ08sR0FBVSxDQUFWLE1BQVU7QUFFeEMsR0FBZ0MsQ0FBaEMsY0FBZ0M7QUFDL0IsR0FBMEIsQ0FBMUIsZUFBMEI7QUFDdEIsR0FBOEIsQ0FBOUIsbUJBQThCOzs7Ozs7QUFFN0QsR0FBSyxDQUFHLE9BQU8sR0FQdUIsVUFBVyx1QkFPekMsT0FBTztBQUVmLEdBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQVJzQyxNQUFVLFdBUzVELElBQUkscUNBVDhDLE1BQVUsK0NBR3ZDLGVBQTBCO0lBUzNCLEtBQUs7UUFBSSxJQUFJO1FBQUUsSUFBSTtRQUFFLENBQUM7O0lBQUksUUFBUTtRQUFJLEtBQUs7UUFBRSxLQUFLO1FBQUUsQ0FBQzs7O0FBSy9FLEdBQUssQ0FBQyxhQUFhLGNBQVMsQ0FBQztJQUMzQixHQUFLLENBQUcsVUFBVSxHQWhCTSxjQUFnQyxTQWdCaEQsVUFBVSxFQUFFLGlCQUFpQixHQWhCYixjQUFnQyxTQWdCcEMsaUJBQWlCO0lBRXJDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLFdBQUcsTUFBTSxFQUFLLENBQUM7aURBcEJKLE1BQVU7WUF1QnJELE1BQU0sRUFBRSxNQUFNOzZDQXZCNkIsTUFBVTtZQXdCcEQsTUFBTSxFQUFFLE1BQU07WUFBRSxVQUFVLEVBQUUsVUFBVTtZQUFFLFdBQVcsRUFBWCxJQUFXOzZDQXBCbEMsbUJBQThCO1lBcUIvQixRQUFRO2dCQUFJLENBQUM7Z0JBQUUsQ0FBQztnQkFBRSxDQUFDOztZQUFJLFNBQVMsR0FBQyxlQUFpQjtZQUFDLElBQUksRUFBRSxJQUFJOzhDQXJCNUQsbUJBQThCO1lBc0IvQixRQUFRO2lCQUFLLEdBQUc7aUJBQUcsR0FBRztpQkFBRyxHQUFHOztZQUFJLFNBQVMsR0FBQyxVQUFZO1lBQUMsSUFBSSxFQUFFLElBQUk7K0NBMUJ2QyxNQUFVO0lBZ0NoRSxDQUFDO0FBQ0gsQ0FBQztlQUVjLGFBQWE7O1NBRW5CLGFBQWEsQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFzQnRELElBQUksWUFBSixJQUFJLEdBQUcsQ0FBQztRQUNmLEdBQUssQ0FBRyxNQUFNLEdBQUssT0FBTyxDQUFsQixNQUFNO1FBRWQsUUFBUSxDQUFDLE1BQU07SUFDakIsQ0FBQztJQXpCRCxHQUFLLENBQUMsTUFBTSxPQUNOLE9BQU87UUFDTCxNQUFNLEVBQU4sTUFBTTs7SUFHZCxPQUFPLENBQUMsVUFBVSxXQUFHLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSSxFQUFFLFFBQU8sRUFBSyxDQUFDO1lBUzlDLE1BQU0sWUFBTixNQUFNLEdBQUcsQ0FBQztZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFFakIsSUFBSTtRQUNOLENBQUM7UUFaRCxHQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLElBQ2pCLEdBQUcsTUFBMkIsTUFBUyxDQUE5QixpQkFBaUIsR0FBQyxDQUFDLEdBQVksTUFBQSxDQUFWLFNBQVM7UUFFN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ2pCLEdBQUcsRUFBSCxHQUFHO1lBQ0gsTUFBTSxFQUFOLE1BQU07O0lBUVYsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPO0FBT2xCLENBQUMifQ==