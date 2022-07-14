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
    calculateHalfAngleSine: function() {
        return calculateHalfAngleSine;
    },
    calculateHalfAngleCosine: function() {
        return calculateHalfAngleCosine;
    }
});
function calculateHalfAngleSine(angleCosine) {
    return Math.sqrt((1 - angleCosine) / 2);
}
function calculateHalfAngleCosine(angleCosine) {
    return Math.sqrt((1 + angleCosine) / 2);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYW5nbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlQ29zaW5lKSB7IHJldHVybiBNYXRoLnNxcnQoKDEgLSBhbmdsZUNvc2luZSkgLyAyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlQ29zaW5lKSB7IHJldHVybiBNYXRoLnNxcnQoKDEgKyBhbmdsZUNvc2luZSkgLyAyKTsgfVxuIl0sIm5hbWVzIjpbImNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUiLCJjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUiLCJhbmdsZUNvc2luZSIsIk1hdGgiLCJzcXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBRUdBLHNCQUFzQjtlQUF0QkEsc0JBQXNCOztJQUV0QkMsd0JBQXdCO2VBQXhCQSx3QkFBd0I7OztBQUZqQyxTQUFTRCxzQkFBc0IsQ0FBQ0UsV0FBVyxFQUFFO0lBQUUsT0FBT0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdGLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0NBQUU7QUFFekYsU0FBU0Qsd0JBQXdCLENBQUNDLFdBQVcsRUFBRTtJQUFFLE9BQU9DLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHRixXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztDQUFFIn0=