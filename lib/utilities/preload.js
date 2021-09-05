"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.preloadImages = preloadImages;
exports.preloadImageMap = preloadImageMap;
exports.default = void 0;
var _necessary = require("necessary");
var _constants = require("../constants");
var _defaults = require("../defaults");
var forEach = _necessary.asynchronousUtilities.forEach;
function preloadImages(callback, param) {
    var configuration = param === void 0 ? window.__configuration__ : param;
    var done = function done() {
        var images = context.images;
        callback(images, imageNames);
    };
    var _host = configuration.host, host = _host === void 0 ? _defaults.DEFAULT_HOST : _host, imageNames = configuration.imageNames, imageDirectoryURI = configuration.imageDirectoryURI, images = [], context = {
        images: images
    };
    forEach(imageNames, function(imageName, next, done1, context1) {
        var onload = function onload() {
            images.push(image);
            next();
        };
        var src = "".concat(host).concat(imageDirectoryURI, "/").concat(imageName), image = new Image(), crossOrigin = _constants.ANONYMOUS;
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
    var _host = configuration.host, host = _host === void 0 ? _defaults.DEFAULT_HOST : _host, imageMapURI = configuration.imageMapURI, imageMapJSON = configuration.imageMapJSON, src = "".concat(host).concat(imageMapURI), imageMap = new Image(), crossOrigin = _constants.ANONYMOUS; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcHJlbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBBTk9OWU1PVVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBERUZBVUxUX0hPU1QgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkSW1hZ2VzKGNhbGxiYWNrLCBjb25maWd1cmF0aW9uID0gd2luZG93Ll9fY29uZmlndXJhdGlvbl9fKSB7IC8vL1xuICBjb25zdCB7IGhvc3QgPSBERUZBVUxUX0hPU1QsIGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJIH0gPSBjb25maWd1cmF0aW9uLFxuICAgICAgICBpbWFnZXMgPSBbXSxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICBpbWFnZXNcbiAgICAgICAgfTtcblxuICBmb3JFYWNoKGltYWdlTmFtZXMsIChpbWFnZU5hbWUsIG5leHQsIGRvbmUsIGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBzcmMgPSBgJHtob3N0fSR7aW1hZ2VEaXJlY3RvcnlVUkl9LyR7aW1hZ2VOYW1lfWAsXG4gICAgICAgICAgaW1hZ2UgPSBuZXcgSW1hZ2UoKSxcbiAgICAgICAgICBjcm9zc09yaWdpbiA9IEFOT05ZTU9VUztcblxuICBPYmplY3QuYXNzaWduKGltYWdlLCB7XG4gICAgICBzcmMsXG4gICAgICBvbmxvYWQsXG4gICAgICBjcm9zc09yaWdpblxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gb25sb2FkKCkge1xuICAgICAgaW1hZ2VzLnB1c2goaW1hZ2UpO1xuXG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9LCBkb25lLCBjb250ZXh0KTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSBjb250ZXh0O1xuXG4gICAgY2FsbGJhY2soaW1hZ2VzLCBpbWFnZU5hbWVzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbG9hZEltYWdlTWFwKGNhbGxiYWNrLCBjb25maWd1cmF0aW9uID0gd2luZG93Ll9fY29uZmlndXJhdGlvbl9fKSB7IC8vL1xuICBjb25zdCB7IGhvc3QgPSBERUZBVUxUX0hPU1QsIGltYWdlTWFwVVJJLCBpbWFnZU1hcEpTT04gfSA9IGNvbmZpZ3VyYXRpb24sXG4gICAgICAgIHNyYyA9IGAke2hvc3R9JHtpbWFnZU1hcFVSSX1gLFxuICAgICAgICBpbWFnZU1hcCA9IG5ldyBJbWFnZSgpLFx0Ly8vXG4gICAgICAgIGNyb3NzT3JpZ2luID0gQU5PTllNT1VTOyAgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihpbWFnZU1hcCwge1xuICAgIHNyYyxcbiAgICBvbmxvYWQsXG4gICAgY3Jvc3NPcmlnaW5cbiAgfSk7XG5cbiAgZnVuY3Rpb24gb25sb2FkKGV2ZW50KSB7XG4gICAgY2FsbGJhY2soaW1hZ2VNYXAsIGltYWdlTWFwSlNPTik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcmVsb2FkSW1hZ2VzLFxuICBwcmVsb2FkSW1hZ2VNYXBcbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQVNJLGFBQWEsR0FBYixhQUFhO1FBZ0NiLGVBQWUsR0FBZixlQUFlOztBQXZDTyxHQUFXLENBQVgsVUFBVztBQUV2QixHQUFjLENBQWQsVUFBYztBQUNYLEdBQWEsQ0FBYixTQUFhO0FBRTFDLEdBQUssQ0FBRyxPQUFPLEdBTHVCLFVBQVcsdUJBS3pDLE9BQU87U0FFQyxhQUFhLENBQUMsUUFBUSxFQUFFLEtBQXdDLEVBQUUsQ0FBQztRQUEzQyxhQUFhLEdBQWIsS0FBd0MsY0FBeEIsTUFBTSxDQUFDLGlCQUFpQixHQUF4QyxLQUF3QztRQXlCckUsSUFBSSxZQUFKLElBQUksR0FBRyxDQUFDO1FBQ2YsR0FBSyxDQUFHLE1BQU0sR0FBSyxPQUFPLENBQWxCLE1BQU07UUFFZCxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQVU7SUFDN0IsQ0FBQztJQTVCRCxHQUFLLFNBQTBELGFBQWEsQ0FBcEUsSUFBSSxFQUFKLElBQUksc0JBTGUsU0FBYSx1QkFLWCxVQUFVLEdBQXdCLGFBQWEsQ0FBL0MsVUFBVSxFQUFFLGlCQUFpQixHQUFLLGFBQWEsQ0FBbkMsaUJBQWlCLEVBQ3BELE1BQU0sT0FDTixPQUFPO1FBQ0wsTUFBTSxFQUFOLE1BQU07O0lBR2QsT0FBTyxDQUFDLFVBQVUsV0FBRyxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUksRUFBRSxRQUFPLEVBQUssQ0FBQztZQVc5QyxNQUFNLFlBQU4sTUFBTSxHQUFHLENBQUM7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBRWpCLElBQUk7UUFDTixDQUFDO1FBZEQsR0FBSyxDQUFDLEdBQUcsTUFBYSxNQUFpQixDQUF4QixJQUFJLEVBQXdCLE1BQVMsQ0FBOUIsaUJBQWlCLEdBQUMsQ0FBQyxHQUFZLE1BQUEsQ0FBVixTQUFTLEdBQzlDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxJQUNqQixXQUFXLEdBZkssVUFBYztRQWlCdEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ2YsR0FBRyxFQUFILEdBQUc7WUFDSCxNQUFNLEVBQU4sTUFBTTtZQUNOLFdBQVcsRUFBWCxXQUFXOztJQVFmLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTztBQU9sQixDQUFDO1NBRWUsZUFBZSxDQUFDLFFBQVEsRUFBRSxLQUF3QyxFQUFFLENBQUM7UUFBM0MsYUFBYSxHQUFiLEtBQXdDLGNBQXhCLE1BQU0sQ0FBQyxpQkFBaUIsR0FBeEMsS0FBd0M7UUFZdkUsTUFBTSxZQUFOLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QixRQUFRLENBQUMsUUFBUSxFQUFFLFlBQVk7SUFDakMsQ0FBQztJQWJELEdBQUssU0FBc0QsYUFBYSxDQUFoRSxJQUFJLEVBQUosSUFBSSxzQkFyQ2UsU0FBYSx1QkFxQ1gsV0FBVyxHQUFtQixhQUFhLENBQTNDLFdBQVcsRUFBRSxZQUFZLEdBQUssYUFBYSxDQUE5QixZQUFZLEVBQ2hELEdBQUcsTUFBYSxNQUFXLENBQWxCLElBQUksRUFBZSxNQUFBLENBQVosV0FBVyxHQUMzQixRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssSUFDcEIsV0FBVyxHQXpDTyxVQUFjLFdBeUNOLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUVuQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVE7UUFDcEIsR0FBRyxFQUFILEdBQUc7UUFDSCxNQUFNLEVBQU4sTUFBTTtRQUNOLFdBQVcsRUFBWCxXQUFXOztBQU1mLENBQUM7O0lBR0MsYUFBYSxFQUFiLGFBQWE7SUFDYixlQUFlLEVBQWYsZUFBZSJ9