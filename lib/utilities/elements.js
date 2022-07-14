"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removeFalseyElements", {
    enumerable: true,
    get: function() {
        return removeFalseyElements;
    }
});
function removeFalseyElements(elements) {
    elements = elements.reduce(function(elements, element) {
        if (element) {
            elements.push(element);
        }
        return elements;
    }, []);
    return elements;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGYWxzZXlFbGVtZW50cyhlbGVtZW50cykge1xuICBlbGVtZW50cyA9IGVsZW1lbnRzLnJlZHVjZSgoZWxlbWVudHMsIGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG4iXSwibmFtZXMiOlsicmVtb3ZlRmFsc2V5RWxlbWVudHMiLCJlbGVtZW50cyIsInJlZHVjZSIsImVsZW1lbnQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBRUdBLHNCQUFvQjs7O2VBQXBCQSxvQkFBb0I7OztBQUE3QixTQUFTQSxvQkFBb0IsQ0FBQ0MsUUFBUSxFQUFFO0lBQzdDQSxRQUFRLEdBQUdBLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLFNBQUNELFFBQVEsRUFBRUUsT0FBTyxFQUFLO1FBQ2hELElBQUlBLE9BQU8sRUFBRTtZQUNYRixRQUFRLENBQUNHLElBQUksQ0FBQ0QsT0FBTyxDQUFDLENBQUM7U0FDeEI7UUFFRCxPQUFPRixRQUFRLENBQUM7S0FDakIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE9BQU9BLFFBQVEsQ0FBQztDQUNqQiJ9