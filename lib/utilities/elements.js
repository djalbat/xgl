"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeFalseyElements = removeFalseyElements;
function removeFalseyElements(elements1) {
    elements1 = elements1.reduce(function(elements, element) {
        if (element) {
            elements.push(element);
        }
        return elements;
    }, []);
    return elements1;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGYWxzZXlFbGVtZW50cyhlbGVtZW50cykge1xuICBlbGVtZW50cyA9IGVsZW1lbnRzLnJlZHVjZSgoZWxlbWVudHMsIGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG4iXSwibmFtZXMiOlsicmVtb3ZlRmFsc2V5RWxlbWVudHMiLCJlbGVtZW50cyIsInJlZHVjZSIsImVsZW1lbnQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7O1FBRUlBLG9CQUFvQixHQUFwQkEsb0JBQW9CO1NBQXBCQSxvQkFBb0IsQ0FBQ0MsU0FBUSxFQUFFLENBQUM7SUFDOUNBLFNBQVEsR0FBR0EsU0FBUSxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFQRCxRQUFRLEVBQUVFLE9BQU8sRUFBSyxDQUFDO1FBQ2pELEVBQUUsRUFBRUEsT0FBTyxFQUFFLENBQUM7WUFDWkYsUUFBUSxDQUFDRyxJQUFJLENBQUNELE9BQU87UUFDdkIsQ0FBQztRQUVELE1BQU0sQ0FBQ0YsUUFBUTtJQUNqQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSxDQUFDQSxTQUFRO0FBQ2pCLENBQUMifQ==