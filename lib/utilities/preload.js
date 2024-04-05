"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    preloadImageMap: function() {
        return preloadImageMap;
    },
    preloadImages: function() {
        return preloadImages;
    }
});
var _necessary = require("necessary");
var _constants = require("../constants");
var forEach = _necessary.asynchronousUtilities.forEach;
function preloadImages(host, imageNames, imageDirectoryURI, callback) {
    var images = [], context = {
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
    function done() {
        var images = context.images;
        callback(images, imageNames);
    }
}
function preloadImageMap(host, imageMapURI, imageMapJSON, callback) {
    var src = "".concat(host).concat(imageMapURI), imageMap = new Image(), crossOrigin = _constants.ANONYMOUS; ///
    Object.assign(imageMap, {
        src: src,
        onload: onload,
        crossOrigin: crossOrigin
    });
    function onload(event) {
        callback(imageMap, imageMapJSON);
    }
}
var _default = {
    preloadImages: preloadImages,
    preloadImageMap: preloadImageMap
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcHJlbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBBTk9OWU1PVVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlbG9hZEltYWdlcyhob3N0LCBpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSwgY2FsbGJhY2spIHtcbiAgY29uc3QgaW1hZ2VzID0gW10sXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgaW1hZ2VzXG4gICAgICAgIH07XG5cbiAgZm9yRWFjaChpbWFnZU5hbWVzLCAoaW1hZ2VOYW1lLCBuZXh0LCBkb25lLCBjb250ZXh0KSA9PiB7XG4gICAgY29uc3Qgc3JjID0gYCR7aG9zdH0ke2ltYWdlRGlyZWN0b3J5VVJJfS8ke2ltYWdlTmFtZX1gLFxuICAgICAgICAgIGltYWdlID0gbmV3IEltYWdlKCksXG4gICAgICAgICAgY3Jvc3NPcmlnaW4gPSBBTk9OWU1PVVM7XG5cbiAgT2JqZWN0LmFzc2lnbihpbWFnZSwge1xuICAgICAgc3JjLFxuICAgICAgb25sb2FkLFxuICAgICAgY3Jvc3NPcmlnaW5cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG9ubG9hZCgpIHtcbiAgICAgIGltYWdlcy5wdXNoKGltYWdlKTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfSwgZG9uZSwgY29udGV4dCk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gY29udGV4dDtcblxuICAgIGNhbGxiYWNrKGltYWdlcywgaW1hZ2VOYW1lcyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWRJbWFnZU1hcChob3N0LCBpbWFnZU1hcFVSSSwgaW1hZ2VNYXBKU09OLCBjYWxsYmFjaykge1xuICBjb25zdCBzcmMgPSBgJHtob3N0fSR7aW1hZ2VNYXBVUkl9YCxcbiAgICAgICAgaW1hZ2VNYXAgPSBuZXcgSW1hZ2UoKSxcdC8vL1xuICAgICAgICBjcm9zc09yaWdpbiA9IEFOT05ZTU9VUzsgIC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oaW1hZ2VNYXAsIHtcbiAgICBzcmMsXG4gICAgb25sb2FkLFxuICAgIGNyb3NzT3JpZ2luXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9ubG9hZChldmVudCkge1xuICAgIGNhbGxiYWNrKGltYWdlTWFwLCBpbWFnZU1hcEpTT04pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJlbG9hZEltYWdlcyxcbiAgcHJlbG9hZEltYWdlTWFwXG59O1xuIl0sIm5hbWVzIjpbInByZWxvYWRJbWFnZU1hcCIsInByZWxvYWRJbWFnZXMiLCJmb3JFYWNoIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiaG9zdCIsImltYWdlTmFtZXMiLCJpbWFnZURpcmVjdG9yeVVSSSIsImNhbGxiYWNrIiwiaW1hZ2VzIiwiY29udGV4dCIsImltYWdlTmFtZSIsIm5leHQiLCJkb25lIiwib25sb2FkIiwicHVzaCIsImltYWdlIiwic3JjIiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsIkFOT05ZTU9VUyIsIk9iamVjdCIsImFzc2lnbiIsImltYWdlTWFwVVJJIiwiaW1hZ2VNYXBKU09OIiwiaW1hZ2VNYXAiLCJldmVudCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBdURBLE9BR0U7ZUFIRjs7SUFoQmdCQSxlQUFlO2VBQWZBOztJQS9CQUMsYUFBYTtlQUFiQTs7O3lCQU5zQjt5QkFFWjtBQUUxQixJQUFNLEFBQUVDLFVBQVlDLGdDQUFxQixDQUFqQ0Q7QUFFRCxTQUFTRCxjQUFjRyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsaUJBQWlCLEVBQUVDLFFBQVE7SUFDekUsSUFBTUMsU0FBUyxFQUFFLEVBQ1hDLFVBQVU7UUFDUkQsUUFBQUE7SUFDRjtJQUVOTixRQUFRRyxZQUFZLFNBQUNLLFdBQVdDLE1BQU1DLE1BQU1IO1lBV2pDSSxTQUFULFNBQVNBO1lBQ1BMLE9BQU9NLElBQUksQ0FBQ0M7WUFFWko7UUFDRjtRQWRBLElBQU1LLE1BQU0sQUFBQyxHQUFTVixPQUFQRixNQUE0Qk0sT0FBckJKLG1CQUFrQixLQUFhLE9BQVZJLFlBQ3JDSyxRQUFRLElBQUlFLFNBQ1pDLGNBQWNDLG9CQUFTO1FBRS9CQyxPQUFPQyxNQUFNLENBQUNOLE9BQU87WUFDakJDLEtBQUFBO1lBQ0FILFFBQUFBO1lBQ0FLLGFBQUFBO1FBQ0Y7SUFPRixHQUFHTixNQUFNSDtJQUVULFNBQVNHO1FBQ1AsSUFBTSxBQUFFSixTQUFXQyxRQUFYRDtRQUVSRCxTQUFTQyxRQUFRSDtJQUNuQjtBQUNGO0FBRU8sU0FBU0wsZ0JBQWdCSSxJQUFJLEVBQUVrQixXQUFXLEVBQUVDLFlBQVksRUFBRWhCLFFBQVE7SUFDdkUsSUFBTVMsTUFBTSxBQUFDLEdBQVNNLE9BQVBsQixNQUFtQixPQUFaa0IsY0FDaEJFLFdBQVcsSUFBSVAsU0FDZkMsY0FBY0Msb0JBQVMsRUFBRyxHQUFHO0lBRW5DQyxPQUFPQyxNQUFNLENBQUNHLFVBQVU7UUFDdEJSLEtBQUFBO1FBQ0FILFFBQUFBO1FBQ0FLLGFBQUFBO0lBQ0Y7SUFFQSxTQUFTTCxPQUFPWSxLQUFLO1FBQ25CbEIsU0FBU2lCLFVBQVVEO0lBQ3JCO0FBQ0Y7SUFFQSxXQUFlO0lBQ2J0QixlQUFBQTtJQUNBRCxpQkFBQUE7QUFDRiJ9