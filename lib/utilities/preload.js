"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.preloadImages = preloadImages;
exports.preloadImageMap = preloadImageMap;
exports.default = void 0;
var _necessary = require("necessary");
var _constants = require("../constants");
var forEach = _necessary.asynchronousUtilities.forEach;
function preloadImages(callback, param) {
    var configuration = param === void 0 ? window.__configuration__ : param;
    var done = function done() {
        var images = context.images;
        callback(images, imageNames);
    };
    var imageNames = configuration.imageNames, imageDirectoryURI = configuration.imageDirectoryURI, images = [], context = {
        images: images
    };
    forEach(imageNames, function(imageName, next, done1, context1) {
        var onload = function onload() {
            images.push(image);
            next();
        };
        var src = "".concat(imageDirectoryURI, "/").concat(imageName), image = new Image(), crossOrigin = _constants.ANONYMOUS;
        Object.assign(image, {
            src: src,
            onload: onload,
            crossOrigin: crossOrigin
        });
    }, done, context);
}
function preloadImageMap(callback, param) {
    var configuration = param === void 0 ? window.__configuration__ : param;
    var onload = function onload(event) {
        callback(imageMap, imageMapJSON);
    };
    var imageMapURI = configuration.imageMapURI, imageMapJSON = configuration.imageMapJSON, src = imageMapURI, imageMap = new Image(), crossOrigin = _constants.ANONYMOUS; ///
    Object.assign(imageMap, {
        src: src,
        onload: onload,
        crossOrigin: crossOrigin
    });
}
var _default = {
    preloadImages: preloadImages,
    preloadImageMap: preloadImageMap
};
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcHJlbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBBTk9OWU1PVVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlbG9hZEltYWdlcyhjYWxsYmFjaywgY29uZmlndXJhdGlvbiA9IHdpbmRvdy5fX2NvbmZpZ3VyYXRpb25fXykgeyAvLy9cbiAgY29uc3QgeyBpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSB9ID0gY29uZmlndXJhdGlvbixcbiAgICAgICAgaW1hZ2VzID0gW10sXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgaW1hZ2VzXG4gICAgICAgIH07XG5cbiAgZm9yRWFjaChpbWFnZU5hbWVzLCAoaW1hZ2VOYW1lLCBuZXh0LCBkb25lLCBjb250ZXh0KSA9PiB7XG4gICAgY29uc3Qgc3JjID0gYCR7aW1hZ2VEaXJlY3RvcnlVUkl9LyR7aW1hZ2VOYW1lfWAsXG4gICAgICAgICAgaW1hZ2UgPSBuZXcgSW1hZ2UoKSxcbiAgICAgICAgICBjcm9zc09yaWdpbiA9IEFOT05ZTU9VUztcblxuICBPYmplY3QuYXNzaWduKGltYWdlLCB7XG4gICAgICBzcmMsXG4gICAgICBvbmxvYWQsXG4gICAgICBjcm9zc09yaWdpblxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gb25sb2FkKCkge1xuICAgICAgaW1hZ2VzLnB1c2goaW1hZ2UpO1xuXG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9LCBkb25lLCBjb250ZXh0KTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSBjb250ZXh0O1xuXG4gICAgY2FsbGJhY2soaW1hZ2VzLCBpbWFnZU5hbWVzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbG9hZEltYWdlTWFwKGNhbGxiYWNrLCBjb25maWd1cmF0aW9uID0gd2luZG93Ll9fY29uZmlndXJhdGlvbl9fKSB7IC8vL1xuICBjb25zdCB7IGltYWdlTWFwVVJJLCBpbWFnZU1hcEpTT04gfSA9IGNvbmZpZ3VyYXRpb24sXG4gICAgICAgIHNyYyA9IGltYWdlTWFwVVJJLFxuICAgICAgICBpbWFnZU1hcCA9IG5ldyBJbWFnZSgpLFx0Ly8vXG4gICAgICAgIGNyb3NzT3JpZ2luID0gQU5PTllNT1VTOyAgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihpbWFnZU1hcCwge1xuICAgIHNyYyxcbiAgICBvbmxvYWQsXG4gICAgY3Jvc3NPcmlnaW5cbiAgfSk7XG5cbiAgZnVuY3Rpb24gb25sb2FkKGV2ZW50KSB7XG4gICAgY2FsbGJhY2soaW1hZ2VNYXAsIGltYWdlTWFwSlNPTik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcmVsb2FkSW1hZ2VzLFxuICBwcmVsb2FkSW1hZ2VNYXBcbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQVFJLGFBQWEsR0FBYixhQUFhO1FBZ0NiLGVBQWUsR0FBZixlQUFlOztBQXRDTyxHQUFXLENBQVgsVUFBVztBQUV2QixHQUFjLENBQWQsVUFBYztBQUV4QyxHQUFLLENBQUcsT0FBTyxHQUp1QixVQUFXLHVCQUl6QyxPQUFPO1NBRUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxLQUF3QyxFQUFFLENBQUM7UUFBM0MsYUFBYSxHQUFiLEtBQXdDLGNBQXhCLE1BQU0sQ0FBQyxpQkFBaUIsR0FBeEMsS0FBd0M7UUF5QnJFLElBQUksWUFBSixJQUFJLEdBQUcsQ0FBQztRQUNmLEdBQUssQ0FBRyxNQUFNLEdBQUssT0FBTyxDQUFsQixNQUFNO1FBRWQsUUFBUSxDQUFDLE1BQU0sRUFBRSxVQUFVO0lBQzdCLENBQUM7SUE1QkQsR0FBSyxDQUFHLFVBQVUsR0FBd0IsYUFBYSxDQUEvQyxVQUFVLEVBQUUsaUJBQWlCLEdBQUssYUFBYSxDQUFuQyxpQkFBaUIsRUFDL0IsTUFBTSxPQUNOLE9BQU87UUFDTCxNQUFNLEVBQU4sTUFBTTs7SUFHZCxPQUFPLENBQUMsVUFBVSxXQUFHLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSSxFQUFFLFFBQU8sRUFBSyxDQUFDO1lBVzlDLE1BQU0sWUFBTixNQUFNLEdBQUcsQ0FBQztZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFFakIsSUFBSTtRQUNOLENBQUM7UUFkRCxHQUFLLENBQUMsR0FBRyxNQUEyQixNQUFTLENBQTlCLGlCQUFpQixHQUFDLENBQUMsR0FBWSxNQUFBLENBQVYsU0FBUyxHQUN2QyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssSUFDakIsV0FBVyxHQWRLLFVBQWM7UUFnQnRDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSztZQUNmLEdBQUcsRUFBSCxHQUFHO1lBQ0gsTUFBTSxFQUFOLE1BQU07WUFDTixXQUFXLEVBQVgsV0FBVzs7SUFRZixDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU87QUFPbEIsQ0FBQztTQUVlLGVBQWUsQ0FBQyxRQUFRLEVBQUUsS0FBd0MsRUFBRSxDQUFDO1FBQTNDLGFBQWEsR0FBYixLQUF3QyxjQUF4QixNQUFNLENBQUMsaUJBQWlCLEdBQXhDLEtBQXdDO1FBWXZFLE1BQU0sWUFBTixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxZQUFZO0lBQ2pDLENBQUM7SUFiRCxHQUFLLENBQUcsV0FBVyxHQUFtQixhQUFhLENBQTNDLFdBQVcsRUFBRSxZQUFZLEdBQUssYUFBYSxDQUE5QixZQUFZLEVBQzNCLEdBQUcsR0FBRyxXQUFXLEVBQ2pCLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxJQUNwQixXQUFXLEdBeENPLFVBQWMsV0F3Q04sQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRW5DLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUTtRQUNwQixHQUFHLEVBQUgsR0FBRztRQUNILE1BQU0sRUFBTixNQUFNO1FBQ04sV0FBVyxFQUFYLFdBQVc7O0FBTWYsQ0FBQzs7SUFHQyxhQUFhLEVBQWIsYUFBYTtJQUNiLGVBQWUsRUFBZixlQUFlIn0=