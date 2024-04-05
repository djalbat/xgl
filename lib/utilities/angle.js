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
    calculateHalfAngleCosine: function() {
        return calculateHalfAngleCosine;
    },
    calculateHalfAngleSine: function() {
        return calculateHalfAngleSine;
    }
});
function calculateHalfAngleSine(angleCosine) {
    return Math.sqrt((1 - angleCosine) / 2);
}
function calculateHalfAngleCosine(angleCosine) {
    return Math.sqrt((1 + angleCosine) / 2);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYW5nbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlQ29zaW5lKSB7IHJldHVybiBNYXRoLnNxcnQoKDEgLSBhbmdsZUNvc2luZSkgLyAyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlQ29zaW5lKSB7IHJldHVybiBNYXRoLnNxcnQoKDEgKyBhbmdsZUNvc2luZSkgLyAyKTsgfVxuIl0sIm5hbWVzIjpbImNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZSIsImNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUiLCJhbmdsZUNvc2luZSIsIk1hdGgiLCJzcXJ0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJZ0JBLHdCQUF3QjtlQUF4QkE7O0lBRkFDLHNCQUFzQjtlQUF0QkE7OztBQUFULFNBQVNBLHVCQUF1QkMsV0FBVztJQUFJLE9BQU9DLEtBQUtDLElBQUksQ0FBQyxBQUFDLENBQUEsSUFBSUYsV0FBVSxJQUFLO0FBQUk7QUFFeEYsU0FBU0YseUJBQXlCRSxXQUFXO0lBQUksT0FBT0MsS0FBS0MsSUFBSSxDQUFDLEFBQUMsQ0FBQSxJQUFJRixXQUFVLElBQUs7QUFBSSJ9