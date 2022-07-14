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
    preloadImages: function() {
        return preloadImages;
    },
    preloadImageMap: function() {
        return preloadImageMap;
    },
    default: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _constants = require("../constants");
var forEach = _necessary.asynchronousUtilities.forEach;
function preloadImages(host, imageNames, imageDirectoryURI, callback) {
    var done = function done() {
        var images = context.images;
        callback(images, imageNames);
    };
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
}
function preloadImageMap(host, imageMapURI, imageMapJSON, callback) {
    var onload = function onload(event) {
        callback(imageMap, imageMapJSON);
    };
    var src = "".concat(host).concat(imageMapURI), imageMap = new Image(), crossOrigin = _constants.ANONYMOUS; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcHJlbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBBTk9OWU1PVVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlbG9hZEltYWdlcyhob3N0LCBpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSwgY2FsbGJhY2spIHtcbiAgY29uc3QgaW1hZ2VzID0gW10sXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgaW1hZ2VzXG4gICAgICAgIH07XG5cbiAgZm9yRWFjaChpbWFnZU5hbWVzLCAoaW1hZ2VOYW1lLCBuZXh0LCBkb25lLCBjb250ZXh0KSA9PiB7XG4gICAgY29uc3Qgc3JjID0gYCR7aG9zdH0ke2ltYWdlRGlyZWN0b3J5VVJJfS8ke2ltYWdlTmFtZX1gLFxuICAgICAgICAgIGltYWdlID0gbmV3IEltYWdlKCksXG4gICAgICAgICAgY3Jvc3NPcmlnaW4gPSBBTk9OWU1PVVM7XG5cbiAgT2JqZWN0LmFzc2lnbihpbWFnZSwge1xuICAgICAgc3JjLFxuICAgICAgb25sb2FkLFxuICAgICAgY3Jvc3NPcmlnaW5cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG9ubG9hZCgpIHtcbiAgICAgIGltYWdlcy5wdXNoKGltYWdlKTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfSwgZG9uZSwgY29udGV4dCk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gY29udGV4dDtcblxuICAgIGNhbGxiYWNrKGltYWdlcywgaW1hZ2VOYW1lcyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWRJbWFnZU1hcChob3N0LCBpbWFnZU1hcFVSSSwgaW1hZ2VNYXBKU09OLCBjYWxsYmFjaykge1xuICBjb25zdCBzcmMgPSBgJHtob3N0fSR7aW1hZ2VNYXBVUkl9YCxcbiAgICAgICAgaW1hZ2VNYXAgPSBuZXcgSW1hZ2UoKSxcdC8vL1xuICAgICAgICBjcm9zc09yaWdpbiA9IEFOT05ZTU9VUzsgIC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oaW1hZ2VNYXAsIHtcbiAgICBzcmMsXG4gICAgb25sb2FkLFxuICAgIGNyb3NzT3JpZ2luXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9ubG9hZChldmVudCkge1xuICAgIGNhbGxiYWNrKGltYWdlTWFwLCBpbWFnZU1hcEpTT04pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJlbG9hZEltYWdlcyxcbiAgcHJlbG9hZEltYWdlTWFwXG59O1xuIl0sIm5hbWVzIjpbInByZWxvYWRJbWFnZXMiLCJwcmVsb2FkSW1hZ2VNYXAiLCJmb3JFYWNoIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiaG9zdCIsImltYWdlTmFtZXMiLCJpbWFnZURpcmVjdG9yeVVSSSIsImNhbGxiYWNrIiwiZG9uZSIsImltYWdlcyIsImNvbnRleHQiLCJpbWFnZU5hbWUiLCJuZXh0Iiwib25sb2FkIiwicHVzaCIsImltYWdlIiwic3JjIiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsIkFOT05ZTU9VUyIsIk9iamVjdCIsImFzc2lnbiIsImltYWdlTWFwVVJJIiwiaW1hZ2VNYXBKU09OIiwiZXZlbnQiLCJpbWFnZU1hcCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQVFHQSxhQUFhO2VBQWJBLGFBQWE7O0lBK0JiQyxlQUFlO2VBQWZBLGVBQWU7O0lBZ0IvQixPQUdFO2VBSEYsUUFHRTs7O3lCQXhEb0MsV0FBVzt5QkFFdkIsY0FBYztBQUV4QyxJQUFNLEFBQUVDLE9BQU8sR0FBS0MsVUFBcUIsc0JBQUEsQ0FBakNELE9BQU8sQUFBMEIsQUFBQztBQUVuQyxTQUFTRixhQUFhLENBQUNJLElBQUksRUFBRUMsVUFBVSxFQUFFQyxpQkFBaUIsRUFBRUMsUUFBUSxFQUFFO1FBd0JsRUMsSUFBSSxHQUFiLFNBQVNBLElBQUksR0FBRztRQUNkLElBQU0sQUFBRUMsTUFBTSxHQUFLQyxPQUFPLENBQWxCRCxNQUFNLEFBQVksQUFBQztRQUUzQkYsUUFBUSxDQUFDRSxNQUFNLEVBQUVKLFVBQVUsQ0FBQyxDQUFDO0tBQzlCO0lBM0JELElBQU1JLE1BQU0sR0FBRyxFQUFFLEVBQ1hDLE9BQU8sR0FBRztRQUNSRCxNQUFNLEVBQU5BLE1BQU07S0FDUCxBQUFDO0lBRVJQLE9BQU8sQ0FBQ0csVUFBVSxFQUFFLFNBQUNNLFNBQVMsRUFBRUMsSUFBSSxFQUFFSixJQUFJLEVBQUVFLE9BQU8sRUFBSztZQVc3Q0csTUFBTSxHQUFmLFNBQVNBLE1BQU0sR0FBRztZQUNoQkosTUFBTSxDQUFDSyxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDO1lBRW5CSCxJQUFJLEVBQUUsQ0FBQztTQUNSO1FBZEQsSUFBTUksR0FBRyxHQUFHLEFBQUMsRUFBQSxDQUFTVixNQUFpQixDQUF4QkYsSUFBSSxDQUFxQixDQUFHTyxNQUFTLENBQTlCTCxpQkFBaUIsRUFBQyxHQUFDLENBQVksQ0FBQSxNQUFBLENBQVZLLFNBQVMsQ0FBRSxFQUNoREksS0FBSyxHQUFHLElBQUlFLEtBQUssRUFBRSxFQUNuQkMsV0FBVyxHQUFHQyxVQUFTLFVBQUEsQUFBQztRQUVoQ0MsTUFBTSxDQUFDQyxNQUFNLENBQUNOLEtBQUssRUFBRTtZQUNqQkMsR0FBRyxFQUFIQSxHQUFHO1lBQ0hILE1BQU0sRUFBTkEsTUFBTTtZQUNOSyxXQUFXLEVBQVhBLFdBQVc7U0FDWixDQUFDLENBQUM7S0FPSixFQUFFVixJQUFJLEVBQUVFLE9BQU8sQ0FBQyxDQUFDO0NBT25CO0FBRU0sU0FBU1QsZUFBZSxDQUFDRyxJQUFJLEVBQUVrQixXQUFXLEVBQUVDLFlBQVksRUFBRWhCLFFBQVEsRUFBRTtRQVdoRU0sTUFBTSxHQUFmLFNBQVNBLE1BQU0sQ0FBQ1csS0FBSyxFQUFFO1FBQ3JCakIsUUFBUSxDQUFDa0IsUUFBUSxFQUFFRixZQUFZLENBQUMsQ0FBQztLQUNsQztJQVpELElBQU1QLEdBQUcsR0FBRyxBQUFDLEVBQUEsQ0FBU00sTUFBVyxDQUFsQmxCLElBQUksQ0FBZSxDQUFBLE1BQUEsQ0FBWmtCLFdBQVcsQ0FBRSxFQUM3QkcsUUFBUSxHQUFHLElBQUlSLEtBQUssRUFBRSxFQUN0QkMsV0FBVyxHQUFHQyxVQUFTLFVBQUEsQUFBQyxFQUFFLEdBQUc7SUFFbkNDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDSSxRQUFRLEVBQUU7UUFDdEJULEdBQUcsRUFBSEEsR0FBRztRQUNISCxNQUFNLEVBQU5BLE1BQU07UUFDTkssV0FBVyxFQUFYQSxXQUFXO0tBQ1osQ0FBQyxDQUFDO0NBS0o7SUFFRCxRQUdFLEdBSGE7SUFDYmxCLGFBQWEsRUFBYkEsYUFBYTtJQUNiQyxlQUFlLEVBQWZBLGVBQWU7Q0FDaEIifQ==