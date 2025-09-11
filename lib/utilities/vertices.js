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
    get rotateVertices () {
        return rotateVertices;
    },
    get verticesFromCoordinateTuplesAndIndexTuple () {
        return verticesFromCoordinateTuplesAndIndexTuple;
    }
});
function rotateVertices(vertices, rotationQuaternion) {
    var rotatedVertices = vertices.map(function(vertex) {
        var rotatedVertex = vertex.clone(); ///
        rotatedVertex.rotate(rotationQuaternion);
        return rotatedVertex;
    });
    return rotatedVertices;
}
function verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, Vertex) {
    var indexes = indexTuple, vertices = indexes.map(function(index) {
        var coordinateTuple = coordinateTuples[index], vertex = Vertex.fromCoordinateTuple(coordinateTuple);
        return vertex;
    });
    return vertices;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVydGljZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVWZXJ0aWNlcyh2ZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IHJvdGF0ZWRWZXJ0aWNlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB7XG4gICAgY29uc3Qgcm90YXRlZFZlcnRleCA9IHZlcnRleC5jbG9uZSgpOyAgLy8vXG5cbiAgICByb3RhdGVkVmVydGV4LnJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgcmV0dXJuIHJvdGF0ZWRWZXJ0ZXg7XG4gIH0pO1xuXG4gIHJldHVybiByb3RhdGVkVmVydGljZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpIHsgIC8vL1xuICBjb25zdCBpbmRleGVzID0gaW5kZXhUdXBsZSwgLy8vXG4gICAgICAgIHZlcnRpY2VzID0gaW5kZXhlcy5tYXAoKGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgY29vcmRpbmF0ZVR1cGxlID0gY29vcmRpbmF0ZVR1cGxlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgdmVydGV4ID0gVmVydGV4LmZyb21Db29yZGluYXRlVHVwbGUoY29vcmRpbmF0ZVR1cGxlKTtcblxuICAgICAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB2ZXJ0aWNlcztcbn1cbiJdLCJuYW1lcyI6WyJyb3RhdGVWZXJ0aWNlcyIsInZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIiwidmVydGljZXMiLCJyb3RhdGlvblF1YXRlcm5pb24iLCJyb3RhdGVkVmVydGljZXMiLCJtYXAiLCJ2ZXJ0ZXgiLCJyb3RhdGVkVmVydGV4IiwiY2xvbmUiLCJyb3RhdGUiLCJjb29yZGluYXRlVHVwbGVzIiwiaW5kZXhUdXBsZSIsIlZlcnRleCIsImluZGV4ZXMiLCJpbmRleCIsImNvb3JkaW5hdGVUdXBsZSIsImZyb21Db29yZGluYXRlVHVwbGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQUVnQkE7ZUFBQUE7O1FBWUFDO2VBQUFBOzs7QUFaVCxTQUFTRCxlQUFlRSxRQUFRLEVBQUVDLGtCQUFrQjtJQUN6RCxJQUFNQyxrQkFBa0JGLFNBQVNHLEdBQUcsQ0FBQyxTQUFDQztRQUNwQyxJQUFNQyxnQkFBZ0JELE9BQU9FLEtBQUssSUFBSyxHQUFHO1FBRTFDRCxjQUFjRSxNQUFNLENBQUNOO1FBRXJCLE9BQU9JO0lBQ1Q7SUFFQSxPQUFPSDtBQUNUO0FBRU8sU0FBU0gsMENBQTBDUyxnQkFBZ0IsRUFBRUMsVUFBVSxFQUFFQyxNQUFNO0lBQzVGLElBQU1DLFVBQVVGLFlBQ1ZULFdBQVdXLFFBQVFSLEdBQUcsQ0FBQyxTQUFDUztRQUN0QixJQUFNQyxrQkFBa0JMLGdCQUFnQixDQUFDSSxNQUFNLEVBQ3pDUixTQUFTTSxPQUFPSSxtQkFBbUIsQ0FBQ0Q7UUFFMUMsT0FBT1Q7SUFDVDtJQUVOLE9BQU9KO0FBQ1QifQ==