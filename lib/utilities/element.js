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
    get elementFromChildElements () {
        return elementFromChildElements;
    },
    get elementsFromChildElements () {
        return elementsFromChildElements;
    }
});
function elementsFromChildElements(childElements, Class) {
    const elements = childElements.reduce((elements, childElement)=>{
        if (Class.prototype.isPrototypeOf(childElement)) {
            const element = childElement; ///
            elements.push(element);
        }
        return elements;
    }, []);
    return elements;
}
function elementFromChildElements(childElements, Class) {
    const element = childElements.reduce((element, childElement)=>{
        if (element === null) {
            if (Class.prototype.isPrototypeOf(childElement)) {
                element = childElement; ///
            }
        }
        return element;
    }, null);
    return element;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgQ2xhc3MpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzLnJlZHVjZSgoZWxlbWVudHMsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGlmIChDbGFzcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihjaGlsZEVsZW1lbnQpKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBDbGFzcykge1xuICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKGVsZW1lbnQsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICBpZiAoQ2xhc3MucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoY2hpbGRFbGVtZW50KSkge1xuICAgICAgICBlbGVtZW50ID0gY2hpbGRFbGVtZW50OyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyIsImVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMiLCJjaGlsZEVsZW1lbnRzIiwiQ2xhc3MiLCJlbGVtZW50cyIsInJlZHVjZSIsImNoaWxkRWxlbWVudCIsInByb3RvdHlwZSIsImlzUHJvdG90eXBlT2YiLCJlbGVtZW50IiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBZWdCQTtlQUFBQTs7UUFiQUM7ZUFBQUE7OztBQUFULFNBQVNBLDBCQUEwQkMsYUFBYSxFQUFFQyxLQUFLO0lBQzVELE1BQU1DLFdBQVdGLGNBQWNHLE1BQU0sQ0FBQyxDQUFDRCxVQUFVRTtRQUMvQyxJQUFJSCxNQUFNSSxTQUFTLENBQUNDLGFBQWEsQ0FBQ0YsZUFBZTtZQUMvQyxNQUFNRyxVQUFVSCxjQUFlLEdBQUc7WUFFbENGLFNBQVNNLElBQUksQ0FBQ0Q7UUFDaEI7UUFDQSxPQUFPTDtJQUNULEdBQUcsRUFBRTtJQUVMLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTSix5QkFBeUJFLGFBQWEsRUFBRUMsS0FBSztJQUMzRCxNQUFNTSxVQUFVUCxjQUFjRyxNQUFNLENBQUMsQ0FBQ0ksU0FBU0g7UUFDN0MsSUFBSUcsWUFBWSxNQUFNO1lBQ3BCLElBQUlOLE1BQU1JLFNBQVMsQ0FBQ0MsYUFBYSxDQUFDRixlQUFlO2dCQUMvQ0csVUFBVUgsY0FBZSxHQUFHO1lBQzlCO1FBQ0Y7UUFFQSxPQUFPRztJQUNULEdBQUc7SUFFSCxPQUFPQTtBQUNUIn0=