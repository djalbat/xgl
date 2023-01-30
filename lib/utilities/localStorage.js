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
    setJSON: function() {
        return setJSON;
    },
    removeJSON: function() {
        return removeJSON;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbG9jYWxTdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SlNPTihrZXkpIHtcbiAgbGV0IGpzb24gPSBudWxsO1xuXG4gIGNvbnN0IHZhbHVlID0gZ2V0KGtleSk7XG5cbiAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAganNvbiA9IEpTT04ucGFyc2UodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIGpzb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRKU09OKGtleSwganNvbikge1xuICBjb25zdCB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGpzb24pO1xuXG4gIHNldChrZXksIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUpTT04oa2V5KSB7XG4gIHJlbW92ZShrZXkpO1xufVxuXG5mdW5jdGlvbiBnZXQoa2F5KSB7XG4gIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2F5KSB8fCBudWxsO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gc2V0KGtheSwgdmFsdWUpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2F5LCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShrZXkpIHtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbn0iXSwibmFtZXMiOlsiZ2V0SlNPTiIsInNldEpTT04iLCJyZW1vdmVKU09OIiwia2V5IiwianNvbiIsInZhbHVlIiwiZ2V0IiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic2V0IiwicmVtb3ZlIiwia2F5IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFFZ0JBLE9BQU87ZUFBUEE7O0lBWUFDLE9BQU87ZUFBUEE7O0lBTUFDLFVBQVU7ZUFBVkE7OztBQWxCVCxTQUFTRixRQUFRRyxHQUFHLEVBQUU7SUFDM0IsSUFBSUMsT0FBTyxJQUFJO0lBRWYsSUFBTUMsUUFBUUMsSUFBSUg7SUFFbEIsSUFBSUUsVUFBVSxJQUFJLEVBQUU7UUFDbEJELE9BQU9HLEtBQUtDLEtBQUssQ0FBQ0g7SUFDcEIsQ0FBQztJQUVELE9BQU9EO0FBQ1Q7QUFFTyxTQUFTSCxRQUFRRSxHQUFHLEVBQUVDLElBQUksRUFBRTtJQUNqQyxJQUFNQyxRQUFRRSxLQUFLRSxTQUFTLENBQUNMO0lBRTdCTSxJQUFJUCxLQUFLRTtBQUNYO0FBRU8sU0FBU0gsV0FBV0MsR0FBRyxFQUFFO0lBQzlCUSxPQUFPUjtBQUNUO0FBRUEsU0FBU0csSUFBSU0sR0FBRyxFQUFFO0lBQ2hCLElBQU1QLFFBQVFRLGFBQWFDLE9BQU8sQ0FBQ0YsUUFBUSxJQUFJO0lBRS9DLE9BQU9QO0FBQ1Q7QUFFQSxTQUFTSyxJQUFJRSxHQUFHLEVBQUVQLEtBQUssRUFBRTtJQUN2QlEsYUFBYUUsT0FBTyxDQUFDSCxLQUFLUDtBQUM1QjtBQUVBLFNBQVNNLE9BQU9SLEdBQUcsRUFBRTtJQUNuQlUsYUFBYUcsVUFBVSxDQUFDYjtBQUMxQiJ9