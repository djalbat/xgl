"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../index");
var _pyramid = _interopRequireDefault(require("./element/pyramid"));
var _configuration = _interopRequireDefault(require("../miscellaneous/configuration"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var canvas = new _index.Canvas();
var pyramidExample = function() {
    preloadImageMap(function(imageMap) {
        var imageMapJSON = _configuration.default.imageMapJSON;
        return(/*#__PURE__*/ React.createElement(_index.Scene, {
            canvas: canvas
        }, /*#__PURE__*/ React.createElement(_index.Part, {
            imageMap: imageMap,
            imageMapJSON: imageMapJSON
        }, /*#__PURE__*/ React.createElement(_pyramid.default, null)), /*#__PURE__*/ React.createElement(_index.GamingCamera, null)));
    });
};
var _default = pyramidExample;
exports.default = _default;
function preloadImageMap(callback) {
    var onload = function onload(event) {
        callback(imageMap);
    };
    var imageMapURI = _configuration.default.imageMapURI, imageMap = new Image(), src = imageMapURI; ///
    Object.assign(imageMap, {
        src: src,
        onload: onload
    });
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3B5cmFtaWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIEdhbWluZ0NhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBQeXJhbWlkIGZyb20gXCIuL2VsZW1lbnQvcHlyYW1pZFwiO1xuaW1wb3J0IGNvbmZpZ3VyYXRpb24gZnJvbSBcIi4uL21pc2NlbGxhbmVvdXMvY29uZmlndXJhdGlvblwiO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IHB5cmFtaWRFeGFtcGxlID0gKCkgPT4ge1xuICBwcmVsb2FkSW1hZ2VNYXAoKGltYWdlTWFwKSA9PiB7XG4gICAgY29uc3QgeyBpbWFnZU1hcEpTT04gfSA9IGNvbmZpZ3VyYXRpb247XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgICA8UGFydCBpbWFnZU1hcD17aW1hZ2VNYXB9IGltYWdlTWFwSlNPTj17aW1hZ2VNYXBKU09OfT5cbiAgICAgICAgICA8UHlyYW1pZC8+XG4gICAgICAgIDwvUGFydD5cbiAgICAgICAgPEdhbWluZ0NhbWVyYS8+XG4gICAgICA8L1NjZW5lPlxuXG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBweXJhbWlkRXhhbXBsZTtcblxuZnVuY3Rpb24gcHJlbG9hZEltYWdlTWFwKGNhbGxiYWNrKSB7XG4gIGNvbnN0IHsgaW1hZ2VNYXBVUkkgfSA9IGNvbmZpZ3VyYXRpb24sXG4gICAgICAgIGltYWdlTWFwID0gbmV3IEltYWdlKCksXHQvLy9cbiAgICAgICAgc3JjID0gaW1hZ2VNYXBVUkk7ICAvLy9cblxuICBPYmplY3QuYXNzaWduKGltYWdlTWFwLCB7XG4gICAgc3JjLFxuICAgIG9ubG9hZFxuICB9KTtcblxuICBmdW5jdGlvbiBvbmxvYWQoZXZlbnQpIHtcbiAgICBjYWxsYmFjayhpbWFnZU1hcCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVzQyxHQUFVLENBQVYsTUFBVTtBQUV4QyxHQUFtQixDQUFuQixRQUFtQjtBQUNiLEdBQWdDLENBQWhDLGNBQWdDOzs7Ozs7QUFFMUQsR0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBTGdDLE1BQVU7QUFPNUQsR0FBSyxDQUFDLGNBQWMsY0FBUyxDQUFDO0lBQzVCLGVBQWUsVUFBRSxRQUFRLEVBQUssQ0FBQztRQUM3QixHQUFLLENBQUcsWUFBWSxHQU5FLGNBQWdDLFNBTTlDLFlBQVk7aURBVDBCLE1BQVU7WUFhL0MsTUFBTSxFQUFFLE1BQU07NkNBYnVCLE1BQVU7WUFjOUMsUUFBUSxFQUFFLFFBQVE7WUFBRSxZQUFZLEVBQUUsWUFBWTs2Q0FaeEMsUUFBbUIsb0RBRlcsTUFBVTtJQXFCMUQsQ0FBQztBQUNILENBQUM7ZUFFYyxjQUFjOztTQUVwQixlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7UUFVekIsTUFBTSxZQUFOLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QixRQUFRLENBQUMsUUFBUTtJQUNuQixDQUFDO0lBWEQsR0FBSyxDQUFHLFdBQVcsR0F4QkssY0FBZ0MsU0F3QmhELFdBQVcsRUFDYixRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssSUFDcEIsR0FBRyxHQUFHLFdBQVcsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRO1FBQ3BCLEdBQUcsRUFBSCxHQUFHO1FBQ0gsTUFBTSxFQUFOLE1BQU07O0FBTVYsQ0FBQyJ9