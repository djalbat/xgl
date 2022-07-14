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
    elementsFromChildElements: function() {
        return elementsFromChildElements;
    },
    elementFromChildElements: function() {
        return elementFromChildElements;
    }
});
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function elementsFromChildElements(childElements, Class) {
    var elements = childElements.reduce(function(elements, childElement) {
        if (_instanceof(childElement, Class)) {
            var element = childElement; ///
            elements.push(element);
        }
        return elements;
    }, []);
    return elements;
}
function elementFromChildElements(childElements, Class) {
    var element = childElements.reduce(function(element, childElement) {
        if (element === null) {
            if (_instanceof(childElement, Class)) {
                element = childElement; ///
            }
        }
        return element;
    }, null);
    return element;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgQ2xhc3MpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzLnJlZHVjZSgoZWxlbWVudHMsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGlmIChjaGlsZEVsZW1lbnQgaW5zdGFuY2VvZiBDbGFzcykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgQ2xhc3MpIHtcbiAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudHMucmVkdWNlKChlbGVtZW50LCBjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgICAgIGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyIsImVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyIsImNoaWxkRWxlbWVudHMiLCJDbGFzcyIsImVsZW1lbnRzIiwicmVkdWNlIiwiY2hpbGRFbGVtZW50IiwiZWxlbWVudCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7SUFFR0EseUJBQXlCO2VBQXpCQSx5QkFBeUI7O0lBYXpCQyx3QkFBd0I7ZUFBeEJBLHdCQUF3Qjs7Ozs7Ozs7OztBQWJqQyxTQUFTRCx5QkFBeUIsQ0FBQ0UsYUFBYSxFQUFFQyxLQUFLLEVBQUU7SUFDOUQsSUFBTUMsUUFBUSxHQUFHRixhQUFhLENBQUNHLE1BQU0sQ0FBQyxTQUFDRCxRQUFRLEVBQUVFLFlBQVksRUFBSztRQUNoRSxJQUFJQSxBQUFZLFdBQVlILENBQXhCRyxZQUFZLEVBQVlILEtBQUssQ0FBQSxFQUFFO1lBQ2pDLElBQU1JLE9BQU8sR0FBR0QsWUFBWSxBQUFDLEVBQUUsR0FBRztZQUVsQ0YsUUFBUSxDQUFDSSxJQUFJLENBQUNELE9BQU8sQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsT0FBT0gsUUFBUSxDQUFDO0tBQ2pCLEVBQUUsRUFBRSxDQUFDLEFBQUM7SUFFUCxPQUFPQSxRQUFRLENBQUM7Q0FDakI7QUFFTSxTQUFTSCx3QkFBd0IsQ0FBQ0MsYUFBYSxFQUFFQyxLQUFLLEVBQUU7SUFDN0QsSUFBTUksT0FBTyxHQUFHTCxhQUFhLENBQUNHLE1BQU0sQ0FBQyxTQUFDRSxPQUFPLEVBQUVELFlBQVksRUFBSztRQUM5RCxJQUFJQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3BCLElBQUlELEFBQVksV0FBWUgsQ0FBeEJHLFlBQVksRUFBWUgsS0FBSyxDQUFBLEVBQUU7Z0JBQ2pDSSxPQUFPLEdBQUdELFlBQVksQ0FBQyxDQUFFLEdBQUc7YUFDN0I7U0FDRjtRQUVELE9BQU9DLE9BQU8sQ0FBQztLQUNoQixFQUFFLElBQUksQ0FBQyxBQUFDO0lBRVQsT0FBT0EsT0FBTyxDQUFDO0NBQ2hCIn0=