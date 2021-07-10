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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3B5cmFtaWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIEdhbWluZ0NhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBQeXJhbWlkIGZyb20gXCIuL2VsZW1lbnQvcHlyYW1pZFwiO1xuaW1wb3J0IGNvbmZpZ3VyYXRpb24gZnJvbSBcIi4uL21pc2NlbGxhbmVvdXMvY29uZmlndXJhdGlvblwiO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IHB5cmFtaWRFeGFtcGxlID0gKCkgPT4ge1xuICBwcmVsb2FkSW1hZ2VNYXAoKGltYWdlTWFwKSA9PiB7XG4gICAgY29uc3QgeyBpbWFnZU1hcEpTT04gfSA9IGNvbmZpZ3VyYXRpb247XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgICA8UGFydCBpbWFnZU1hcD17aW1hZ2VNYXB9IGltYWdlTWFwSlNPTj17aW1hZ2VNYXBKU09OfT5cbiAgICAgICAgICA8UHlyYW1pZCAvPlxuICAgICAgICA8L1BhcnQ+XG4gICAgICAgIDxHYW1pbmdDYW1lcmEgLz5cbiAgICAgIDwvU2NlbmU+XG5cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHB5cmFtaWRFeGFtcGxlO1xuXG5mdW5jdGlvbiBwcmVsb2FkSW1hZ2VNYXAoY2FsbGJhY2spIHtcbiAgY29uc3QgeyBpbWFnZU1hcFVSSSB9ID0gY29uZmlndXJhdGlvbixcbiAgICAgICAgaW1hZ2VNYXAgPSBuZXcgSW1hZ2UoKSxcdC8vL1xuICAgICAgICBzcmMgPSBpbWFnZU1hcFVSSTsgIC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oaW1hZ2VNYXAsIHtcbiAgICBzcmMsXG4gICAgb25sb2FkXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9ubG9hZChldmVudCkge1xuICAgIGNhbGxiYWNrKGltYWdlTWFwKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRXNDLEdBQVUsQ0FBVixNQUFVO0FBRXhDLEdBQW1CLENBQW5CLFFBQW1CO0FBQ2IsR0FBZ0MsQ0FBaEMsY0FBZ0M7Ozs7OztBQUUxRCxHQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FMZ0MsTUFBVTtBQU81RCxHQUFLLENBQUMsY0FBYyxjQUFTLENBQUM7SUFDNUIsZUFBZSxVQUFFLFFBQVEsRUFBSyxDQUFDO1FBQzdCLEdBQUssQ0FBRyxZQUFZLEdBTkUsY0FBZ0MsU0FNOUMsWUFBWTtpREFUMEIsTUFBVTtZQWEvQyxNQUFNLEVBQUUsTUFBTTs2Q0FidUIsTUFBVTtZQWM5QyxRQUFRLEVBQUUsUUFBUTtZQUFFLFlBQVksRUFBRSxZQUFZOzZDQVp4QyxRQUFtQixvREFGVyxNQUFVO0lBcUIxRCxDQUFDO0FBQ0gsQ0FBQztlQUVjLGNBQWM7O1NBRXBCLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQVV6QixNQUFNLFlBQU4sTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLFFBQVEsQ0FBQyxRQUFRO0lBQ25CLENBQUM7SUFYRCxHQUFLLENBQUcsV0FBVyxHQXhCSyxjQUFnQyxTQXdCaEQsV0FBVyxFQUNiLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxJQUNwQixHQUFHLEdBQUcsV0FBVyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUU3QixNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVE7UUFDcEIsR0FBRyxFQUFILEdBQUc7UUFDSCxNQUFNLEVBQU4sTUFBTTs7QUFNVixDQUFDIn0=