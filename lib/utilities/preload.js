"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get preloadImageMap () {
        return preloadImageMap;
    },
    get preloadImages () {
        return preloadImages;
    }
});
const _necessary = require("necessary");
const _constants = require("../constants");
const { forEach } = _necessary.asynchronousUtilities;
function preloadImages(host, imageNames, imageDirectoryURI, callback) {
    const images = [], context = {
        images
    };
    forEach(imageNames, (imageName, next, done, context)=>{
        const src = `${host}${imageDirectoryURI}/${imageName}`, image = new Image(), crossOrigin = _constants.ANONYMOUS;
        Object.assign(image, {
            src,
            onload,
            crossOrigin
        });
        function onload() {
            images.push(image);
            next();
        }
    }, done, context);
    function done() {
        const { images } = context;
        callback(images, imageNames);
    }
}
function preloadImageMap(host, imageMapURI, imageMapJSON, callback) {
    const src = `${host}${imageMapURI}`, imageMap = new Image(), crossOrigin = _constants.ANONYMOUS; ///
    Object.assign(imageMap, {
        src,
        onload,
        crossOrigin
    });
    function onload(event) {
        callback(imageMap, imageMapJSON);
    }
}
const _default = {
    preloadImages,
    preloadImageMap
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcHJlbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBBTk9OWU1PVVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlbG9hZEltYWdlcyhob3N0LCBpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSwgY2FsbGJhY2spIHtcbiAgY29uc3QgaW1hZ2VzID0gW10sXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgaW1hZ2VzXG4gICAgICAgIH07XG5cbiAgZm9yRWFjaChpbWFnZU5hbWVzLCAoaW1hZ2VOYW1lLCBuZXh0LCBkb25lLCBjb250ZXh0KSA9PiB7XG4gICAgY29uc3Qgc3JjID0gYCR7aG9zdH0ke2ltYWdlRGlyZWN0b3J5VVJJfS8ke2ltYWdlTmFtZX1gLFxuICAgICAgICAgIGltYWdlID0gbmV3IEltYWdlKCksXG4gICAgICAgICAgY3Jvc3NPcmlnaW4gPSBBTk9OWU1PVVM7XG5cbiAgT2JqZWN0LmFzc2lnbihpbWFnZSwge1xuICAgICAgc3JjLFxuICAgICAgb25sb2FkLFxuICAgICAgY3Jvc3NPcmlnaW5cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG9ubG9hZCgpIHtcbiAgICAgIGltYWdlcy5wdXNoKGltYWdlKTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfSwgZG9uZSwgY29udGV4dCk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gY29udGV4dDtcblxuICAgIGNhbGxiYWNrKGltYWdlcywgaW1hZ2VOYW1lcyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWRJbWFnZU1hcChob3N0LCBpbWFnZU1hcFVSSSwgaW1hZ2VNYXBKU09OLCBjYWxsYmFjaykge1xuICBjb25zdCBzcmMgPSBgJHtob3N0fSR7aW1hZ2VNYXBVUkl9YCxcbiAgICAgICAgaW1hZ2VNYXAgPSBuZXcgSW1hZ2UoKSxcdC8vL1xuICAgICAgICBjcm9zc09yaWdpbiA9IEFOT05ZTU9VUzsgIC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oaW1hZ2VNYXAsIHtcbiAgICBzcmMsXG4gICAgb25sb2FkLFxuICAgIGNyb3NzT3JpZ2luXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9ubG9hZChldmVudCkge1xuICAgIGNhbGxiYWNrKGltYWdlTWFwLCBpbWFnZU1hcEpTT04pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJlbG9hZEltYWdlcyxcbiAgcHJlbG9hZEltYWdlTWFwXG59O1xuIl0sIm5hbWVzIjpbInByZWxvYWRJbWFnZU1hcCIsInByZWxvYWRJbWFnZXMiLCJmb3JFYWNoIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiaG9zdCIsImltYWdlTmFtZXMiLCJpbWFnZURpcmVjdG9yeVVSSSIsImNhbGxiYWNrIiwiaW1hZ2VzIiwiY29udGV4dCIsImltYWdlTmFtZSIsIm5leHQiLCJkb25lIiwic3JjIiwiaW1hZ2UiLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwiQU5PTllNT1VTIiwiT2JqZWN0IiwiYXNzaWduIiwib25sb2FkIiwicHVzaCIsImltYWdlTWFwVVJJIiwiaW1hZ2VNYXBKU09OIiwiaW1hZ2VNYXAiLCJldmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBdURBO2VBQUE7O1FBaEJnQkE7ZUFBQUE7O1FBL0JBQztlQUFBQTs7OzJCQU5zQjsyQkFFWjtBQUUxQixNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHQyxnQ0FBcUI7QUFFbEMsU0FBU0YsY0FBY0csSUFBSSxFQUFFQyxVQUFVLEVBQUVDLGlCQUFpQixFQUFFQyxRQUFRO0lBQ3pFLE1BQU1DLFNBQVMsRUFBRSxFQUNYQyxVQUFVO1FBQ1JEO0lBQ0Y7SUFFTk4sUUFBUUcsWUFBWSxDQUFDSyxXQUFXQyxNQUFNQyxNQUFNSDtRQUMxQyxNQUFNSSxNQUFNLEdBQUdULE9BQU9FLGtCQUFrQixDQUFDLEVBQUVJLFdBQVcsRUFDaERJLFFBQVEsSUFBSUMsU0FDWkMsY0FBY0Msb0JBQVM7UUFFL0JDLE9BQU9DLE1BQU0sQ0FBQ0wsT0FBTztZQUNqQkQ7WUFDQU87WUFDQUo7UUFDRjtRQUVBLFNBQVNJO1lBQ1BaLE9BQU9hLElBQUksQ0FBQ1A7WUFFWkg7UUFDRjtJQUNGLEdBQUdDLE1BQU1IO0lBRVQsU0FBU0c7UUFDUCxNQUFNLEVBQUVKLE1BQU0sRUFBRSxHQUFHQztRQUVuQkYsU0FBU0MsUUFBUUg7SUFDbkI7QUFDRjtBQUVPLFNBQVNMLGdCQUFnQkksSUFBSSxFQUFFa0IsV0FBVyxFQUFFQyxZQUFZLEVBQUVoQixRQUFRO0lBQ3ZFLE1BQU1NLE1BQU0sR0FBR1QsT0FBT2tCLGFBQWEsRUFDN0JFLFdBQVcsSUFBSVQsU0FDZkMsY0FBY0Msb0JBQVMsRUFBRyxHQUFHO0lBRW5DQyxPQUFPQyxNQUFNLENBQUNLLFVBQVU7UUFDdEJYO1FBQ0FPO1FBQ0FKO0lBQ0Y7SUFFQSxTQUFTSSxPQUFPSyxLQUFLO1FBQ25CbEIsU0FBU2lCLFVBQVVEO0lBQ3JCO0FBQ0Y7TUFFQSxXQUFlO0lBQ2J0QjtJQUNBRDtBQUNGIn0=