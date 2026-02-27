"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TexturedQuadrangle;
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
], defaultImageName = "plaster.jpg", defaultTextureCoordinates = [
    [
        [
            0,
            0
        ],
        [
            2,
            0
        ],
        [
            2,
            2
        ]
    ],
    [
        [
            2,
            2
        ],
        [
            0,
            2
        ],
        [
            0,
            0
        ]
    ]
];
class TexturedQuadrangle extends _index.TexturedCanvasElement {
    static fromProperties(properties) {
        const { imageName = defaultImageName, textureCoordinates = defaultTextureCoordinates } = properties, texturedQuadrangle = _index.TexturedCanvasElement.fromProperties(TexturedQuadrangle, properties, coordinates, indexes, imageName, textureCoordinates);
        return texturedQuadrangle;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2VsZW1lbnQvdGV4dHVyZWRRdWFkcmFuZ2xlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgMCwgMCwgMCBdLFxuICAgICAgICBbIDEsIDAsIDAgXSxcbiAgICAgICAgWyAwLCAxLCAwIF0sXG4gICAgICAgIFsgMSwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDMgXSxcbiAgICAgICAgWyAzLCAyLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBkZWZhdWx0SW1hZ2VOYW1lID0gXCJwbGFzdGVyLmpwZ1wiLFxuICAgICAgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIFsgMCwgMCBdLCBbIDIsIDAgXSwgWyAyLCAyIF0gXSxcbiAgICAgICAgWyBbIDIsIDIgXSwgWyAwLCAyIF0sIFsgMCwgMCBdIF0sXG5cbiAgICAgIF07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkUXVhZHJhbmdsZSBleHRlbmRzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgPSBkZWZhdWx0SW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkUXVhZHJhbmdsZSA9IFRleHR1cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlZFF1YWRyYW5nbGUsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRRdWFkcmFuZ2xlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVGV4dHVyZWRRdWFkcmFuZ2xlIiwiY29vcmRpbmF0ZXMiLCJpbmRleGVzIiwiZGVmYXVsdEltYWdlTmFtZSIsImRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMiLCJUZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZXMiLCJ0ZXh0dXJlZFF1YWRyYW5nbGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBCQTs7O2VBQXFCQTs7O3VCQXhCaUI7QUFFdEMsTUFBTUMsY0FBYztJQUVaO1FBQUU7UUFBRztRQUFHO0tBQUc7SUFDWDtRQUFFO1FBQUc7UUFBRztLQUFHO0lBQ1g7UUFBRTtRQUFHO1FBQUc7S0FBRztJQUNYO1FBQUU7UUFBRztRQUFHO0tBQUc7Q0FFWixFQUNEQyxVQUFVO0lBRVI7UUFBRTtRQUFHO1FBQUc7S0FBRztJQUNYO1FBQUU7UUFBRztRQUFHO0tBQUc7Q0FFWixFQUNEQyxtQkFBbUIsZUFDbkJDLDRCQUE0QjtJQUUxQjtRQUFFO1lBQUU7WUFBRztTQUFHO1FBQUU7WUFBRTtZQUFHO1NBQUc7UUFBRTtZQUFFO1lBQUc7U0FBRztLQUFFO0lBQ2hDO1FBQUU7WUFBRTtZQUFHO1NBQUc7UUFBRTtZQUFFO1lBQUc7U0FBRztRQUFFO1lBQUU7WUFBRztTQUFHO0tBQUU7Q0FFakM7QUFFUSxNQUFNSiwyQkFBMkJLLDRCQUFxQjtJQUNuRSxPQUFPQyxlQUFlQyxVQUFVLEVBQUU7UUFDaEMsTUFBTSxFQUFFQyxZQUFZTCxnQkFBZ0IsRUFBRU0scUJBQXFCTCx5QkFBeUIsRUFBRSxHQUFHRyxZQUNuRkcscUJBQXFCTCw0QkFBcUIsQ0FBQ0MsY0FBYyxDQUFDTixvQkFBb0JPLFlBQVlOLGFBQWFDLFNBQVNNLFdBQVdDO1FBRWpJLE9BQU9DO0lBQ1Q7QUFDRiJ9