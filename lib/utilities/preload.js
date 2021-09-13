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
    forEach(imageNames, function(imageName, next, done, context) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcHJlbG9hZC5qcyJdLCJuYW1lcyI6WyJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJBTk9OWU1PVVMiLCJERUZBVUxUX0hPU1QiLCJmb3JFYWNoIiwicHJlbG9hZEltYWdlcyIsImNhbGxiYWNrIiwiY29uZmlndXJhdGlvbiIsIndpbmRvdyIsIl9fY29uZmlndXJhdGlvbl9fIiwiaG9zdCIsImltYWdlTmFtZXMiLCJpbWFnZURpcmVjdG9yeVVSSSIsImltYWdlcyIsImNvbnRleHQiLCJpbWFnZU5hbWUiLCJuZXh0IiwiZG9uZSIsInNyYyIsImltYWdlIiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsIk9iamVjdCIsImFzc2lnbiIsIm9ubG9hZCIsInB1c2giLCJwcmVsb2FkSW1hZ2VNYXAiLCJpbWFnZU1hcFVSSSIsImltYWdlTWFwSlNPTiIsImltYWdlTWFwIiwiZXZlbnQiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFTSSxhQUFhLEdBQWIsYUFBYTtRQWdDYixlQUFlLEdBQWYsZUFBZTs7QUF2Q08sR0FBVyxDQUFYLFVBQVc7QUFFdkIsR0FBYyxDQUFkLFVBQWM7QUFDWCxHQUFhLENBQWIsU0FBYTtBQUUxQyxHQUFLLENBQUcsT0FBTyxHQUx1QixVQUFXLHVCQUt6QyxPQUFPO1NBRUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxLQUF3QyxFQUFFLENBQUM7UUFBM0MsYUFBYSxHQUFiLEtBQXdDLGNBQXhCLE1BQU0sQ0FBQyxpQkFBaUIsR0FBeEMsS0FBd0M7UUF5QnJFLElBQUksR0FBYixRQUFRLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDZixHQUFLLENBQUcsTUFBTSxHQUFLLE9BQU8sQ0FBbEIsTUFBTTtRQUVkLFFBQVEsQ0FBQyxNQUFNLEVBQUUsVUFBVTtJQUM3QixDQUFDO0lBNUJELEdBQUssU0FBMEQsYUFBYSxDQUFwRSxJQUFJLEVBQUosSUFBSSxzQkFMZSxTQUFhLHVCQUtYLFVBQVUsR0FBd0IsYUFBYSxDQUEvQyxVQUFVLEVBQUUsaUJBQWlCLEdBQUssYUFBYSxDQUFuQyxpQkFBaUIsRUFDcEQsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUNYLE9BQU8sR0FBRyxDQUFDO1FBQ1QsTUFBTSxFQUFOLE1BQU07SUFDUixDQUFDO0lBRVAsT0FBTyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQVAsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFLLENBQUM7WUFXOUMsTUFBTSxHQUFmLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFFakIsSUFBSTtRQUNOLENBQUM7UUFkRCxHQUFLLENBQUMsR0FBRyxNQUFhLE1BQWlCLENBQXhCLElBQUksRUFBd0IsTUFBUyxDQUE5QixpQkFBaUIsR0FBQyxDQUFDLEdBQVksTUFBQSxDQUFWLFNBQVMsR0FDOUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLElBQ2pCLFdBQVcsR0FmSyxVQUFjO1FBaUJ0QyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2xCLEdBQUcsRUFBSCxHQUFHO1lBQ0gsTUFBTSxFQUFOLE1BQU07WUFDTixXQUFXLEVBQVgsV0FBVztRQUNiLENBQUM7SUFPSCxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU87QUFPbEIsQ0FBQztTQUVlLGVBQWUsQ0FBQyxRQUFRLEVBQUUsS0FBd0MsRUFBRSxDQUFDO1FBQTNDLGFBQWEsR0FBYixLQUF3QyxjQUF4QixNQUFNLENBQUMsaUJBQWlCLEdBQXhDLEtBQXdDO1FBWXZFLE1BQU0sR0FBZixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsWUFBWTtJQUNqQyxDQUFDO0lBYkQsR0FBSyxTQUFzRCxhQUFhLENBQWhFLElBQUksRUFBSixJQUFJLHNCQXJDZSxTQUFhLHVCQXFDWCxXQUFXLEdBQW1CLGFBQWEsQ0FBM0MsV0FBVyxFQUFFLFlBQVksR0FBSyxhQUFhLENBQTlCLFlBQVksRUFDaEQsR0FBRyxNQUFhLE1BQVcsQ0FBbEIsSUFBSSxFQUFlLE1BQUEsQ0FBWixXQUFXLEdBQzNCLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxJQUNwQixXQUFXLEdBekNPLFVBQWMsV0F5Q04sQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRW5DLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsR0FBRyxFQUFILEdBQUc7UUFDSCxNQUFNLEVBQU4sTUFBTTtRQUNOLFdBQVcsRUFBWCxXQUFXO0lBQ2IsQ0FBQztBQUtILENBQUM7ZUFFYyxDQUFDO0lBQ2QsYUFBYSxFQUFiLGFBQWE7SUFDYixlQUFlLEVBQWYsZUFBZTtBQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgQU5PTllNT1VTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9IT1NUIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlbG9hZEltYWdlcyhjYWxsYmFjaywgY29uZmlndXJhdGlvbiA9IHdpbmRvdy5fX2NvbmZpZ3VyYXRpb25fXykgeyAvLy9cbiAgY29uc3QgeyBob3N0ID0gREVGQVVMVF9IT1NULCBpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSB9ID0gY29uZmlndXJhdGlvbixcbiAgICAgICAgaW1hZ2VzID0gW10sXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgaW1hZ2VzXG4gICAgICAgIH07XG5cbiAgZm9yRWFjaChpbWFnZU5hbWVzLCAoaW1hZ2VOYW1lLCBuZXh0LCBkb25lLCBjb250ZXh0KSA9PiB7XG4gICAgY29uc3Qgc3JjID0gYCR7aG9zdH0ke2ltYWdlRGlyZWN0b3J5VVJJfS8ke2ltYWdlTmFtZX1gLFxuICAgICAgICAgIGltYWdlID0gbmV3IEltYWdlKCksXG4gICAgICAgICAgY3Jvc3NPcmlnaW4gPSBBTk9OWU1PVVM7XG5cbiAgT2JqZWN0LmFzc2lnbihpbWFnZSwge1xuICAgICAgc3JjLFxuICAgICAgb25sb2FkLFxuICAgICAgY3Jvc3NPcmlnaW5cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG9ubG9hZCgpIHtcbiAgICAgIGltYWdlcy5wdXNoKGltYWdlKTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfSwgZG9uZSwgY29udGV4dCk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gY29udGV4dDtcblxuICAgIGNhbGxiYWNrKGltYWdlcywgaW1hZ2VOYW1lcyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWRJbWFnZU1hcChjYWxsYmFjaywgY29uZmlndXJhdGlvbiA9IHdpbmRvdy5fX2NvbmZpZ3VyYXRpb25fXykgeyAvLy9cbiAgY29uc3QgeyBob3N0ID0gREVGQVVMVF9IT1NULCBpbWFnZU1hcFVSSSwgaW1hZ2VNYXBKU09OIH0gPSBjb25maWd1cmF0aW9uLFxuICAgICAgICBzcmMgPSBgJHtob3N0fSR7aW1hZ2VNYXBVUkl9YCxcbiAgICAgICAgaW1hZ2VNYXAgPSBuZXcgSW1hZ2UoKSxcdC8vL1xuICAgICAgICBjcm9zc09yaWdpbiA9IEFOT05ZTU9VUzsgIC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oaW1hZ2VNYXAsIHtcbiAgICBzcmMsXG4gICAgb25sb2FkLFxuICAgIGNyb3NzT3JpZ2luXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9ubG9hZChldmVudCkge1xuICAgIGNhbGxiYWNrKGltYWdlTWFwLCBpbWFnZU1hcEpTT04pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJlbG9hZEltYWdlcyxcbiAgcHJlbG9hZEltYWdlTWFwXG59O1xuIl19