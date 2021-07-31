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
var pyramidExample = function() {
    preloadImageMap(function(imageMap) {
        var imageMapJSON = _configuration.default.imageMapJSON, canvas = new _index.Canvas();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3B5cmFtaWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7Q2FudmFzLCBTY2VuZSwgUGFydCwgR2FtaW5nQ2FtZXJhLCBEZXNpZ25DYW1lcmF9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBQeXJhbWlkIGZyb20gXCIuL2VsZW1lbnQvcHlyYW1pZFwiO1xuaW1wb3J0IGNvbmZpZ3VyYXRpb24gZnJvbSBcIi4uL21pc2NlbGxhbmVvdXMvY29uZmlndXJhdGlvblwiO1xuXG5jb25zdCBweXJhbWlkRXhhbXBsZSA9ICgpID0+IHtcbiAgcHJlbG9hZEltYWdlTWFwKChpbWFnZU1hcCkgPT4ge1xuICAgIGNvbnN0IHsgaW1hZ2VNYXBKU09OIH0gPSBjb25maWd1cmF0aW9uLFxuICAgICAgICAgIGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxQYXJ0IGltYWdlTWFwPXtpbWFnZU1hcH0gaW1hZ2VNYXBKU09OPXtpbWFnZU1hcEpTT059PlxuICAgICAgICAgIDxQeXJhbWlkLz5cbiAgICAgICAgPC9QYXJ0PlxuICAgICAgICA8R2FtaW5nQ2FtZXJhLz5cbiAgICAgIDwvU2NlbmU+XG5cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHB5cmFtaWRFeGFtcGxlO1xuXG5mdW5jdGlvbiBwcmVsb2FkSW1hZ2VNYXAoY2FsbGJhY2spIHtcbiAgY29uc3QgeyBpbWFnZU1hcFVSSSB9ID0gY29uZmlndXJhdGlvbixcbiAgICAgICAgaW1hZ2VNYXAgPSBuZXcgSW1hZ2UoKSxcdC8vL1xuICAgICAgICBzcmMgPSBpbWFnZU1hcFVSSTsgIC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oaW1hZ2VNYXAsIHtcbiAgICBzcmMsXG4gICAgb25sb2FkXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9ubG9hZChldmVudCkge1xuICAgIGNhbGxiYWNrKGltYWdlTWFwKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWtELEdBQVUsQ0FBVixNQUFVO0FBRXBELEdBQW1CLENBQW5CLFFBQW1CO0FBQ2IsR0FBZ0MsQ0FBaEMsY0FBZ0M7Ozs7OztBQUUxRCxHQUFLLENBQUMsY0FBYyxjQUFTLENBQUM7SUFDNUIsZUFBZSxVQUFFLFFBQVEsRUFBSyxDQUFDO1FBQzdCLEdBQUssQ0FBRyxZQUFZLEdBSkUsY0FBZ0MsU0FJOUMsWUFBWSxFQUNkLE1BQU0sR0FBRyxHQUFHLENBUndDLE1BQVU7aURBQVYsTUFBVTtZQVkzRCxNQUFNLEVBQUUsTUFBTTs2Q0FabUMsTUFBVTtZQWExRCxRQUFRLEVBQUUsUUFBUTtZQUFFLFlBQVksRUFBRSxZQUFZOzZDQVh4QyxRQUFtQixvREFGdUIsTUFBVTtJQW9CdEUsQ0FBQztBQUNILENBQUM7ZUFFYyxjQUFjOztTQUVwQixlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7UUFVekIsTUFBTSxZQUFOLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QixRQUFRLENBQUMsUUFBUTtJQUNuQixDQUFDO0lBWEQsR0FBSyxDQUFHLFdBQVcsR0F2QkssY0FBZ0MsU0F1QmhELFdBQVcsRUFDYixRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssSUFDcEIsR0FBRyxHQUFHLFdBQVcsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRO1FBQ3BCLEdBQUcsRUFBSCxHQUFHO1FBQ0gsTUFBTSxFQUFOLE1BQU07O0FBTVYsQ0FBQyJ9