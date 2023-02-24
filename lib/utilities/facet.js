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
    cloneEdges: function() {
        return cloneEdges;
    },
    cloneNormal: function() {
        return cloneNormal;
    },
    cloneVertices: function() {
        return cloneVertices;
    },
    calculateEdges: function() {
        return calculateEdges;
    },
    calculateNormal: function() {
        return calculateNormal;
    },
    calculateArea: function() {
        return calculateArea;
    }
});
var _constants = require("../constants");
var _array = require("../utilities/array");
var _vector = require("../maths/vector");
function cloneEdges(edges) {
    edges = edges.map(function(edge) {
        edge = edge.clone(); ///
        return edge;
    });
    return edges;
}
function cloneNormal(normal) {
    normal = normal.clone();
    return normal;
}
function cloneVertices(vertices) {
    vertices = vertices.map(function(vertex) {
        vertex = vertex.clone(); ///
        return vertex;
    });
    return vertices;
}
function calculateEdges(vertices, Edge) {
    var edges = vertices.map(function(vertex, index) {
        var startIndex = index, endIndex = (startIndex + 1) % _constants.VERTICES_LENGTH, startVertex = vertices[startIndex], endVertex = vertices[endIndex], edge = Edge.fromStartVertexAndEndVertex(startVertex, endVertex);
        return edge;
    });
    return edges;
}
function calculateNormal(vertices, Normal) {
    var normal = Normal.fromVertices(vertices);
    return normal;
}
function calculateArea(vertices) {
    var firstVertex = (0, _array.first)(vertices), secondVertex = (0, _array.second)(vertices), thirdVertex = (0, _array.third)(vertices), firstVertexPosition = firstVertex.getPosition(), secondVertexPosition = secondVertex.getPosition(), thirdVertexPosition = thirdVertex.getPosition(), firstExtent = (0, _vector.subtract3)(secondVertexPosition, firstVertexPosition), secondExtent = (0, _vector.subtract3)(thirdVertexPosition, firstVertexPosition), area = (0, _vector.length3)((0, _vector.cross3)(firstExtent, secondExtent)) / 2;
    return area;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmFjZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFZFUlRJQ0VTX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc3VidHJhY3QzLCBjcm9zczMsIGxlbmd0aDMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUVkZ2VzKGVkZ2VzKSB7XG4gIGVkZ2VzID0gZWRnZXMubWFwKChlZGdlKSA9PiB7XG4gICAgZWRnZSA9IGVkZ2UuY2xvbmUoKTsgIC8vL1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lTm9ybWFsKG5vcm1hbCkge1xuICBub3JtYWwgPSBub3JtYWwuY2xvbmUoKTtcbiAgXG4gIHJldHVybiBub3JtYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gIHZlcnRpY2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICB2ZXJ0ZXggPSB2ZXJ0ZXguY2xvbmUoKTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfSk7XG5cbiAgcmV0dXJuIHZlcnRpY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpIHtcbiAgY29uc3QgZWRnZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBzdGFydEluZGV4ID0gaW5kZXgsIC8vL1xuICAgICAgICAgIGVuZEluZGV4ID0gKHN0YXJ0SW5kZXggKyAxKSAlIFZFUlRJQ0VTX0xFTkdUSCxcbiAgICAgICAgICBzdGFydFZlcnRleCA9IHZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgIGVuZFZlcnRleCA9IHZlcnRpY2VzW2VuZEluZGV4XSxcbiAgICAgICAgICBlZGdlID0gRWRnZS5mcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpIHtcbiAgY29uc3Qgbm9ybWFsID0gTm9ybWFsLmZyb21WZXJ0aWNlcyh2ZXJ0aWNlcyk7XG5cbiAgcmV0dXJuIG5vcm1hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUFyZWEodmVydGljZXMpIHtcbiAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICBmaXJzdFZlcnRleFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgc2Vjb25kVmVydGV4UG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXhQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIGZpcnN0RXh0ZW50ID0gc3VidHJhY3QzKHNlY29uZFZlcnRleFBvc2l0aW9uLCBmaXJzdFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgc2Vjb25kRXh0ZW50ID0gc3VidHJhY3QzKHRoaXJkVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICBhcmVhID0gbGVuZ3RoMyhjcm9zczMoZmlyc3RFeHRlbnQsIHNlY29uZEV4dGVudCkpIC8gMjtcblxuICByZXR1cm4gYXJlYTtcbn1cbiJdLCJuYW1lcyI6WyJjbG9uZUVkZ2VzIiwiY2xvbmVOb3JtYWwiLCJjbG9uZVZlcnRpY2VzIiwiY2FsY3VsYXRlRWRnZXMiLCJjYWxjdWxhdGVOb3JtYWwiLCJjYWxjdWxhdGVBcmVhIiwiZWRnZXMiLCJtYXAiLCJlZGdlIiwiY2xvbmUiLCJub3JtYWwiLCJ2ZXJ0aWNlcyIsInZlcnRleCIsIkVkZ2UiLCJpbmRleCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsIlZFUlRJQ0VTX0xFTkdUSCIsInN0YXJ0VmVydGV4IiwiZW5kVmVydGV4IiwiZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4IiwiTm9ybWFsIiwiZnJvbVZlcnRpY2VzIiwiZmlyc3RWZXJ0ZXgiLCJmaXJzdCIsInNlY29uZFZlcnRleCIsInNlY29uZCIsInRoaXJkVmVydGV4IiwidGhpcmQiLCJmaXJzdFZlcnRleFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJzZWNvbmRWZXJ0ZXhQb3NpdGlvbiIsInRoaXJkVmVydGV4UG9zaXRpb24iLCJmaXJzdEV4dGVudCIsInN1YnRyYWN0MyIsInNlY29uZEV4dGVudCIsImFyZWEiLCJsZW5ndGgzIiwiY3Jvc3MzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFNZ0JBLFVBQVU7ZUFBVkE7O0lBVUFDLFdBQVc7ZUFBWEE7O0lBTUFDLGFBQWE7ZUFBYkE7O0lBVUFDLGNBQWM7ZUFBZEE7O0lBY0FDLGVBQWU7ZUFBZkE7O0lBTUFDLGFBQWE7ZUFBYkE7Ozt5QkFsRGdCO3FCQUNLO3NCQUNNO0FBRXBDLFNBQVNMLFdBQVdNLEtBQUssRUFBRTtJQUNoQ0EsUUFBUUEsTUFBTUMsR0FBRyxDQUFDLFNBQUNDLE1BQVM7UUFDMUJBLE9BQU9BLEtBQUtDLEtBQUssSUFBSyxHQUFHO1FBRXpCLE9BQU9EO0lBQ1Q7SUFFQSxPQUFPRjtBQUNUO0FBRU8sU0FBU0wsWUFBWVMsTUFBTSxFQUFFO0lBQ2xDQSxTQUFTQSxPQUFPRCxLQUFLO0lBRXJCLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTUixjQUFjUyxRQUFRLEVBQUU7SUFDdENBLFdBQVdBLFNBQVNKLEdBQUcsQ0FBQyxTQUFDSyxRQUFXO1FBQ2xDQSxTQUFTQSxPQUFPSCxLQUFLLElBQUssR0FBRztRQUU3QixPQUFPRztJQUNUO0lBRUEsT0FBT0Q7QUFDVDtBQUVPLFNBQVNSLGVBQWVRLFFBQVEsRUFBRUUsSUFBSSxFQUFFO0lBQzdDLElBQU1QLFFBQVFLLFNBQVNKLEdBQUcsQ0FBQyxTQUFDSyxRQUFRRSxPQUFVO1FBQzVDLElBQU1DLGFBQWFELE9BQ2JFLFdBQVcsQUFBQ0QsQ0FBQUEsYUFBYSxDQUFBLElBQUtFLDBCQUFlLEVBQzdDQyxjQUFjUCxRQUFRLENBQUNJLFdBQVcsRUFDbENJLFlBQVlSLFFBQVEsQ0FBQ0ssU0FBUyxFQUM5QlIsT0FBT0ssS0FBS08sMkJBQTJCLENBQUNGLGFBQWFDO1FBRTNELE9BQU9YO0lBQ1Q7SUFFQSxPQUFPRjtBQUNUO0FBRU8sU0FBU0YsZ0JBQWdCTyxRQUFRLEVBQUVVLE1BQU0sRUFBRTtJQUNoRCxJQUFNWCxTQUFTVyxPQUFPQyxZQUFZLENBQUNYO0lBRW5DLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTTCxjQUFjTSxRQUFRLEVBQUU7SUFDdEMsSUFBTVksY0FBY0MsSUFBQUEsWUFBSyxFQUFDYixXQUNwQmMsZUFBZUMsSUFBQUEsYUFBTSxFQUFDZixXQUN0QmdCLGNBQWNDLElBQUFBLFlBQUssRUFBQ2pCLFdBQ3BCa0Isc0JBQXNCTixZQUFZTyxXQUFXLElBQzdDQyx1QkFBdUJOLGFBQWFLLFdBQVcsSUFDL0NFLHNCQUFzQkwsWUFBWUcsV0FBVyxJQUM3Q0csY0FBY0MsSUFBQUEsaUJBQVMsRUFBQ0gsc0JBQXNCRixzQkFDOUNNLGVBQWVELElBQUFBLGlCQUFTLEVBQUNGLHFCQUFxQkgsc0JBQzlDTyxPQUFPQyxJQUFBQSxlQUFPLEVBQUNDLElBQUFBLGNBQU0sRUFBQ0wsYUFBYUUsaUJBQWlCO0lBRTFELE9BQU9DO0FBQ1QifQ==