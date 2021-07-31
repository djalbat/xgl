"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.preloadImages = preloadImages;
exports.preloadImageMap = preloadImageMap;
exports.default = void 0;
var _necessary = require("necessary");
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
        var image = new Image(), src = "".concat(imageDirectoryURI, "/").concat(imageName);
        Object.assign(image, {
            src: src,
            onload: onload
        });
    }, done, context);
}
function preloadImageMap(callback, param) {
    var configuration = param === void 0 ? window.__configuration__ : param;
    var onload = function onload(event) {
        callback(imageMap, imageMapJSON);
    };
    var imageMapURI = configuration.imageMapURI, imageMapJSON = configuration.imageMapJSON, imageMap = new Image(), src = imageMapURI; ///
    Object.assign(imageMap, {
        src: src,
        onload: onload
    });
}
var _default = {
    preloadImages: preloadImages,
    preloadImageMap: preloadImageMap
};
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcHJlbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWRJbWFnZXMoY2FsbGJhY2ssIGNvbmZpZ3VyYXRpb24gPSB3aW5kb3cuX19jb25maWd1cmF0aW9uX18pIHsgLy8vXG4gIGNvbnN0IHsgaW1hZ2VOYW1lcywgaW1hZ2VEaXJlY3RvcnlVUkkgfSA9IGNvbmZpZ3VyYXRpb24sXG4gICAgICAgIGltYWdlcyA9IFtdLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIGltYWdlc1xuICAgICAgICB9O1xuXG4gIGZvckVhY2goaW1hZ2VOYW1lcywgKGltYWdlTmFtZSwgbmV4dCwgZG9uZSwgY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCksXG4gICAgICAgICAgc3JjID0gYCR7aW1hZ2VEaXJlY3RvcnlVUkl9LyR7aW1hZ2VOYW1lfWA7XG5cbiAgICBPYmplY3QuYXNzaWduKGltYWdlLCB7XG4gICAgICBzcmMsXG4gICAgICBvbmxvYWRcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG9ubG9hZCgpIHtcbiAgICAgIGltYWdlcy5wdXNoKGltYWdlKTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfSwgZG9uZSwgY29udGV4dCk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gY29udGV4dDtcblxuICAgIGNhbGxiYWNrKGltYWdlcywgaW1hZ2VOYW1lcyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWRJbWFnZU1hcChjYWxsYmFjaywgY29uZmlndXJhdGlvbiA9IHdpbmRvdy5fX2NvbmZpZ3VyYXRpb25fXykgeyAvLy9cbiAgY29uc3QgeyBpbWFnZU1hcFVSSSwgaW1hZ2VNYXBKU09OIH0gPSBjb25maWd1cmF0aW9uLFxuICAgICAgICBpbWFnZU1hcCA9IG5ldyBJbWFnZSgpLFx0Ly8vXG4gICAgICAgIHNyYyA9IGltYWdlTWFwVVJJOyAgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihpbWFnZU1hcCwge1xuICAgIHNyYyxcbiAgICBvbmxvYWRcbiAgfSk7XG5cbiAgZnVuY3Rpb24gb25sb2FkKGV2ZW50KSB7XG4gICAgY2FsbGJhY2soaW1hZ2VNYXAsIGltYWdlTWFwSlNPTik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcmVsb2FkSW1hZ2VzLFxuICBwcmVsb2FkSW1hZ2VNYXBcbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQU1JLGFBQWEsR0FBYixhQUFhO1FBOEJiLGVBQWUsR0FBZixlQUFlOztBQWxDTyxHQUFXLENBQVgsVUFBVztBQUVqRCxHQUFLLENBQUcsT0FBTyxHQUZ1QixVQUFXLHVCQUV6QyxPQUFPO1NBRUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxLQUF3QyxFQUFFLENBQUM7UUFBM0MsYUFBYSxHQUFiLEtBQXdDLGNBQXhCLE1BQU0sQ0FBQyxpQkFBaUIsR0FBeEMsS0FBd0M7UUF1QnJFLElBQUksWUFBSixJQUFJLEdBQUcsQ0FBQztRQUNmLEdBQUssQ0FBRyxNQUFNLEdBQUssT0FBTyxDQUFsQixNQUFNO1FBRWQsUUFBUSxDQUFDLE1BQU0sRUFBRSxVQUFVO0lBQzdCLENBQUM7SUExQkQsR0FBSyxDQUFHLFVBQVUsR0FBd0IsYUFBYSxDQUEvQyxVQUFVLEVBQUUsaUJBQWlCLEdBQUssYUFBYSxDQUFuQyxpQkFBaUIsRUFDL0IsTUFBTSxPQUNOLE9BQU87UUFDTCxNQUFNLEVBQU4sTUFBTTs7SUFHZCxPQUFPLENBQUMsVUFBVSxXQUFHLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSSxFQUFFLFFBQU8sRUFBSyxDQUFDO1lBUzlDLE1BQU0sWUFBTixNQUFNLEdBQUcsQ0FBQztZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFFakIsSUFBSTtRQUNOLENBQUM7UUFaRCxHQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLElBQ2pCLEdBQUcsTUFBMkIsTUFBUyxDQUE5QixpQkFBaUIsR0FBQyxDQUFDLEdBQVksTUFBQSxDQUFWLFNBQVM7UUFFN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ2pCLEdBQUcsRUFBSCxHQUFHO1lBQ0gsTUFBTSxFQUFOLE1BQU07O0lBUVYsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPO0FBT2xCLENBQUM7U0FFZSxlQUFlLENBQUMsUUFBUSxFQUFFLEtBQXdDLEVBQUUsQ0FBQztRQUEzQyxhQUFhLEdBQWIsS0FBd0MsY0FBeEIsTUFBTSxDQUFDLGlCQUFpQixHQUF4QyxLQUF3QztRQVV2RSxNQUFNLFlBQU4sTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsWUFBWTtJQUNqQyxDQUFDO0lBWEQsR0FBSyxDQUFHLFdBQVcsR0FBbUIsYUFBYSxDQUEzQyxXQUFXLEVBQUUsWUFBWSxHQUFLLGFBQWEsQ0FBOUIsWUFBWSxFQUMzQixRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssSUFDcEIsR0FBRyxHQUFHLFdBQVcsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRO1FBQ3BCLEdBQUcsRUFBSCxHQUFHO1FBQ0gsTUFBTSxFQUFOLE1BQU07O0FBTVYsQ0FBQzs7SUFHQyxhQUFhLEVBQWIsYUFBYTtJQUNiLGVBQWUsRUFBZixlQUFlIn0=