"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ColouredSquare;
    }
});
const _index = require("../../index");
const coordinates = [
    [
        0,
        0,
        0
    ],
    [
        1,
        0,
        0
    ],
    [
        0,
        1,
        0
    ],
    [
        1,
        1,
        0
    ]
], indexes = [
    [
        0,
        1,
        3
    ],
    [
        3,
        2,
        0
    ]
], defaultColour = [
    1,
    0,
    0
];
class ColouredSquare extends _index.ColouredCanvasElement {
    static fromProperties(properties) {
        const { colour = defaultColour } = properties, colouredSquare = _index.ColouredCanvasElement.fromProperties(ColouredSquare, properties, coordinates, indexes, colour);
        return colouredSquare;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2VsZW1lbnQvY29sb3VyZWRTcXVhcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbG91cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuY29uc3QgY29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAwLCAwIF0sXG4gICAgICAgIFsgMSwgMCwgMCBdLFxuICAgICAgICBbIDAsIDEsIDAgXSxcbiAgICAgICAgWyAxLCAxLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBpbmRleGVzID0gW1xuXG4gICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICBbIDMsIDIsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRDb2xvdXIgPSBbIDEsIDAsIDAgXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyZWRTcXVhcmUgZXh0ZW5kcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBcdGNvbnN0IHsgY29sb3VyID0gZGVmYXVsdENvbG91ciB9ID0gcHJvcGVydGllcyxcblx0XHRcdCAgICBjb2xvdXJlZFNxdWFyZSA9IENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJlZFNxdWFyZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cik7XG5cbiAgXHRyZXR1cm4gY29sb3VyZWRTcXVhcmU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb2xvdXJlZFNxdWFyZSIsImNvb3JkaW5hdGVzIiwiaW5kZXhlcyIsImRlZmF1bHRDb2xvdXIiLCJDb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJjb2xvdXIiLCJjb2xvdXJlZFNxdWFyZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBb0JBOzs7ZUFBcUJBOzs7dUJBbEJpQjtBQUV0QyxNQUFNQyxjQUFjO0lBRVo7UUFBRTtRQUFHO1FBQUc7S0FBRztJQUNYO1FBQUU7UUFBRztRQUFHO0tBQUc7SUFDWDtRQUFFO1FBQUc7UUFBRztLQUFHO0lBQ1g7UUFBRTtRQUFHO1FBQUc7S0FBRztDQUVaLEVBQ0RDLFVBQVU7SUFFUjtRQUFFO1FBQUc7UUFBRztLQUFHO0lBQ1g7UUFBRTtRQUFHO1FBQUc7S0FBRztDQUVaLEVBQ0RDLGdCQUFnQjtJQUFFO0lBQUc7SUFBRztDQUFHO0FBRWxCLE1BQU1ILHVCQUF1QkksNEJBQXFCO0lBQy9ELE9BQU9DLGVBQWVDLFVBQVUsRUFBRTtRQUNqQyxNQUFNLEVBQUVDLFNBQVNKLGFBQWEsRUFBRSxHQUFHRyxZQUMvQkUsaUJBQWlCSiw0QkFBcUIsQ0FBQ0MsY0FBYyxDQUFDTCxnQkFBZ0JNLFlBQVlMLGFBQWFDLFNBQVNLO1FBRTVHLE9BQU9DO0lBQ1I7QUFDRiJ9