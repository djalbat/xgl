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
        return( /*#__PURE__*/ React.createElement(_index.Scene, {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3B5cmFtaWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIEdhbWluZ0NhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBQeXJhbWlkIGZyb20gXCIuL2VsZW1lbnQvcHlyYW1pZFwiO1xuaW1wb3J0IGNvbmZpZ3VyYXRpb24gZnJvbSBcIi4uL21pc2NlbGxhbmVvdXMvY29uZmlndXJhdGlvblwiO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IHB5cmFtaWRFeGFtcGxlID0gKCkgPT4ge1xuICBwcmVsb2FkSW1hZ2VNYXAoKGltYWdlTWFwKSA9PiB7XG4gICAgY29uc3QgeyBpbWFnZU1hcEpTT04gfSA9IGNvbmZpZ3VyYXRpb247XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgICA8UGFydCBpbWFnZU1hcD17aW1hZ2VNYXB9IGltYWdlTWFwSlNPTj17aW1hZ2VNYXBKU09OfT5cbiAgICAgICAgICA8UHlyYW1pZCAvPlxuICAgICAgICA8L1BhcnQ+XG4gICAgICAgIDxHYW1pbmdDYW1lcmEgLz5cbiAgICAgIDwvU2NlbmU+XG5cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHB5cmFtaWRFeGFtcGxlO1xuXG5mdW5jdGlvbiBwcmVsb2FkSW1hZ2VNYXAoY2FsbGJhY2spIHtcbiAgY29uc3QgeyBpbWFnZU1hcFVSSSB9ID0gY29uZmlndXJhdGlvbixcbiAgICAgICAgaW1hZ2VNYXAgPSBuZXcgSW1hZ2UoKSxcdC8vL1xuICAgICAgICBzcmMgPSBpbWFnZU1hcFVSSTsgIC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oaW1hZ2VNYXAsIHtcbiAgICBzcmMsXG4gICAgb25sb2FkXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9ubG9hZChldmVudCkge1xuICAgIGNhbGxiYWNrKGltYWdlTWFwKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRXNDLE1BQVU7SUFFeEMsUUFBbUI7SUFDYixjQUFnQzs7Ozs7O0lBRXBELE1BQU0sT0FMc0MsTUFBVTtJQU90RCxjQUFjO0lBQ2xCLGVBQWUsVUFBRSxRQUFRO1lBQ2YsWUFBWSxHQU5FLGNBQWdDLFNBTTlDLFlBQVk7a0RBVDBCLE1BQVU7WUFhL0MsTUFBTSxFQUFFLE1BQU07NkNBYnVCLE1BQVU7WUFjOUMsUUFBUSxFQUFFLFFBQVE7WUFBRSxZQUFZLEVBQUUsWUFBWTs2Q0FaeEMsUUFBbUIsb0RBRlcsTUFBVTs7O2VBd0I3QyxjQUFjOztTQUVwQixlQUFlLENBQUMsUUFBUTtRQVV0QixNQUFNLFlBQU4sTUFBTSxDQUFDLEtBQUs7UUFDbkIsUUFBUSxDQUFDLFFBQVE7O1FBVlgsV0FBVyxHQXhCSyxjQUFnQyxTQXdCaEQsV0FBVyxFQUNiLFFBQVEsT0FBTyxLQUFLLElBQ3BCLEdBQUcsR0FBRyxXQUFXLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRTdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUTtRQUNwQixHQUFHLEVBQUgsR0FBRztRQUNILE1BQU0sRUFBTixNQUFNIn0=