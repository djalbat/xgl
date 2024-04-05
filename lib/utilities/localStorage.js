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
    getJSON: function() {
        return getJSON;
    },
    removeJSON: function() {
        return removeJSON;
    },
    setJSON: function() {
        return setJSON;
    }
});
function getJSON(key) {
    var json = null;
    var value = get(key);
    if (value !== null) {
        json = JSON.parse(value);
    }
    return json;
}
function setJSON(key, json) {
    var value = JSON.stringify(json);
    set(key, value);
}
function removeJSON(key) {
    remove(key);
}
function get(kay) {
    var value = localStorage.getItem(kay) || null;
    return value;
}
function set(kay, value) {
    localStorage.setItem(kay, value);
}
function remove(key) {
    localStorage.removeItem(key);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbG9jYWxTdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SlNPTihrZXkpIHtcbiAgbGV0IGpzb24gPSBudWxsO1xuXG4gIGNvbnN0IHZhbHVlID0gZ2V0KGtleSk7XG5cbiAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAganNvbiA9IEpTT04ucGFyc2UodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIGpzb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRKU09OKGtleSwganNvbikge1xuICBjb25zdCB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGpzb24pO1xuXG4gIHNldChrZXksIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUpTT04oa2V5KSB7XG4gIHJlbW92ZShrZXkpO1xufVxuXG5mdW5jdGlvbiBnZXQoa2F5KSB7XG4gIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2F5KSB8fCBudWxsO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gc2V0KGtheSwgdmFsdWUpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2F5LCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShrZXkpIHtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbn0iXSwibmFtZXMiOlsiZ2V0SlNPTiIsInJlbW92ZUpTT04iLCJzZXRKU09OIiwia2V5IiwianNvbiIsInZhbHVlIiwiZ2V0IiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic2V0IiwicmVtb3ZlIiwia2F5IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRWdCQSxPQUFPO2VBQVBBOztJQWtCQUMsVUFBVTtlQUFWQTs7SUFOQUMsT0FBTztlQUFQQTs7O0FBWlQsU0FBU0YsUUFBUUcsR0FBRztJQUN6QixJQUFJQyxPQUFPO0lBRVgsSUFBTUMsUUFBUUMsSUFBSUg7SUFFbEIsSUFBSUUsVUFBVSxNQUFNO1FBQ2xCRCxPQUFPRyxLQUFLQyxLQUFLLENBQUNIO0lBQ3BCO0lBRUEsT0FBT0Q7QUFDVDtBQUVPLFNBQVNGLFFBQVFDLEdBQUcsRUFBRUMsSUFBSTtJQUMvQixJQUFNQyxRQUFRRSxLQUFLRSxTQUFTLENBQUNMO0lBRTdCTSxJQUFJUCxLQUFLRTtBQUNYO0FBRU8sU0FBU0osV0FBV0UsR0FBRztJQUM1QlEsT0FBT1I7QUFDVDtBQUVBLFNBQVNHLElBQUlNLEdBQUc7SUFDZCxJQUFNUCxRQUFRUSxhQUFhQyxPQUFPLENBQUNGLFFBQVE7SUFFM0MsT0FBT1A7QUFDVDtBQUVBLFNBQVNLLElBQUlFLEdBQUcsRUFBRVAsS0FBSztJQUNyQlEsYUFBYUUsT0FBTyxDQUFDSCxLQUFLUDtBQUM1QjtBQUVBLFNBQVNNLE9BQU9SLEdBQUc7SUFDakJVLGFBQWFHLFVBQVUsQ0FBQ2I7QUFDMUIifQ==