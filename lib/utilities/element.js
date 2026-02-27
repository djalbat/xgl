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
        if (childElement instanceof Class) {
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
            if (childElement instanceof Class) {
                element = childElement; ///
            }
        }
        return element;
    }, null);
    return element;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgQ2xhc3MpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzLnJlZHVjZSgoZWxlbWVudHMsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGlmIChjaGlsZEVsZW1lbnQgaW5zdGFuY2VvZiBDbGFzcykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgQ2xhc3MpIHtcbiAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudHMucmVkdWNlKChlbGVtZW50LCBjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgICAgIGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzIiwiZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyIsImNoaWxkRWxlbWVudHMiLCJDbGFzcyIsImVsZW1lbnRzIiwicmVkdWNlIiwiY2hpbGRFbGVtZW50IiwiZWxlbWVudCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWVnQkE7ZUFBQUE7O1FBYkFDO2VBQUFBOzs7QUFBVCxTQUFTQSwwQkFBMEJDLGFBQWEsRUFBRUMsS0FBSztJQUM1RCxNQUFNQyxXQUFXRixjQUFjRyxNQUFNLENBQUMsQ0FBQ0QsVUFBVUU7UUFDL0MsSUFBSUEsd0JBQXdCSCxPQUFPO1lBQ2pDLE1BQU1JLFVBQVVELGNBQWUsR0FBRztZQUVsQ0YsU0FBU0ksSUFBSSxDQUFDRDtRQUNoQjtRQUNBLE9BQU9IO0lBQ1QsR0FBRyxFQUFFO0lBRUwsT0FBT0E7QUFDVDtBQUVPLFNBQVNKLHlCQUF5QkUsYUFBYSxFQUFFQyxLQUFLO0lBQzNELE1BQU1JLFVBQVVMLGNBQWNHLE1BQU0sQ0FBQyxDQUFDRSxTQUFTRDtRQUM3QyxJQUFJQyxZQUFZLE1BQU07WUFDcEIsSUFBSUQsd0JBQXdCSCxPQUFPO2dCQUNqQ0ksVUFBVUQsY0FBZSxHQUFHO1lBQzlCO1FBQ0Y7UUFFQSxPQUFPQztJQUNULEdBQUc7SUFFSCxPQUFPQTtBQUNUIn0=