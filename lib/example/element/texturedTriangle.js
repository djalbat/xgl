"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TexturedTriangle;
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
        0.5,
        1,
        0
    ]
], indexes = [
    [
        0,
        1,
        2
    ]
], defaultImageName = "stripes.jpg", defaultTextureCoordinates = [
    [
        [
            0,
            0
        ],
        [
            1,
            0
        ],
        [
            0.5,
            1
        ]
    ]
];
class TexturedTriangle extends _index.TexturedCanvasElement {
    static fromProperties(properties) {
        const { imageName = defaultImageName, textureCoordinates = defaultTextureCoordinates } = properties, texturedTriangle = _index.TexturedCanvasElement.fromProperties(TexturedTriangle, properties, coordinates, indexes, imageName, textureCoordinates);
        return texturedTriangle;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2VsZW1lbnQvdGV4dHVyZWRUcmlhbmdsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbICAgMCwgMCwgMCBdLFxuICAgICAgICBbICAgMSwgMCwgMCBdLFxuICAgICAgICBbIDAuNSwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDIgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRJbWFnZU5hbWUgPSBcInN0cmlwZXMuanBnXCIsXG4gICAgICBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgWyAwLCAwIF0sIFsgMSwgMCBdLCBbIDAuNSwgMSBdIF0sXG5cbiAgICAgIF07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkVHJpYW5nbGUgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VOYW1lID0gZGVmYXVsdEltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzID0gZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZFRyaWFuZ2xlID0gVGV4dHVyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVkVHJpYW5nbGUsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRUcmlhbmdsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRleHR1cmVkVHJpYW5nbGUiLCJjb29yZGluYXRlcyIsImluZGV4ZXMiLCJkZWZhdWx0SW1hZ2VOYW1lIiwiZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyIsIlRleHR1cmVkQ2FudmFzRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsImltYWdlTmFtZSIsInRleHR1cmVDb29yZGluYXRlcyIsInRleHR1cmVkVHJpYW5nbGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVCQTs7O2VBQXFCQTs7O3VCQXJCaUI7QUFFdEMsTUFBTUMsY0FBYztJQUVaO1FBQUk7UUFBRztRQUFHO0tBQUc7SUFDYjtRQUFJO1FBQUc7UUFBRztLQUFHO0lBQ2I7UUFBRTtRQUFLO1FBQUc7S0FBRztDQUVkLEVBQ0RDLFVBQVU7SUFFUjtRQUFFO1FBQUc7UUFBRztLQUFHO0NBRVosRUFDREMsbUJBQW1CLGVBQ25CQyw0QkFBNEI7SUFFMUI7UUFBRTtZQUFFO1lBQUc7U0FBRztRQUFFO1lBQUU7WUFBRztTQUFHO1FBQUU7WUFBRTtZQUFLO1NBQUc7S0FBRTtDQUVuQztBQUVRLE1BQU1KLHlCQUF5QkssNEJBQXFCO0lBQ2pFLE9BQU9DLGVBQWVDLFVBQVUsRUFBRTtRQUNoQyxNQUFNLEVBQUVDLFlBQVlMLGdCQUFnQixFQUFFTSxxQkFBcUJMLHlCQUF5QixFQUFFLEdBQUdHLFlBQ25GRyxtQkFBbUJMLDRCQUFxQixDQUFDQyxjQUFjLENBQUNOLGtCQUFrQk8sWUFBWU4sYUFBYUMsU0FBU00sV0FBV0M7UUFFN0gsT0FBT0M7SUFDVDtBQUNGIn0=