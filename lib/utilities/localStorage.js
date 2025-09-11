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
    get getJSON () {
        return getJSON;
    },
    get removeJSON () {
        return removeJSON;
    },
    get setJSON () {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbG9jYWxTdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SlNPTihrZXkpIHtcbiAgbGV0IGpzb24gPSBudWxsO1xuXG4gIGNvbnN0IHZhbHVlID0gZ2V0KGtleSk7XG5cbiAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAganNvbiA9IEpTT04ucGFyc2UodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIGpzb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRKU09OKGtleSwganNvbikge1xuICBjb25zdCB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGpzb24pO1xuXG4gIHNldChrZXksIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUpTT04oa2V5KSB7XG4gIHJlbW92ZShrZXkpO1xufVxuXG5mdW5jdGlvbiBnZXQoa2F5KSB7XG4gIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2F5KSB8fCBudWxsO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gc2V0KGtheSwgdmFsdWUpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2F5LCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShrZXkpIHtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbn0iXSwibmFtZXMiOlsiZ2V0SlNPTiIsInJlbW92ZUpTT04iLCJzZXRKU09OIiwia2V5IiwianNvbiIsInZhbHVlIiwiZ2V0IiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic2V0IiwicmVtb3ZlIiwia2F5IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFFZ0JBO2VBQUFBOztRQWtCQUM7ZUFBQUE7O1FBTkFDO2VBQUFBOzs7QUFaVCxTQUFTRixRQUFRRyxHQUFHO0lBQ3pCLElBQUlDLE9BQU87SUFFWCxJQUFNQyxRQUFRQyxJQUFJSDtJQUVsQixJQUFJRSxVQUFVLE1BQU07UUFDbEJELE9BQU9HLEtBQUtDLEtBQUssQ0FBQ0g7SUFDcEI7SUFFQSxPQUFPRDtBQUNUO0FBRU8sU0FBU0YsUUFBUUMsR0FBRyxFQUFFQyxJQUFJO0lBQy9CLElBQU1DLFFBQVFFLEtBQUtFLFNBQVMsQ0FBQ0w7SUFFN0JNLElBQUlQLEtBQUtFO0FBQ1g7QUFFTyxTQUFTSixXQUFXRSxHQUFHO0lBQzVCUSxPQUFPUjtBQUNUO0FBRUEsU0FBU0csSUFBSU0sR0FBRztJQUNkLElBQU1QLFFBQVFRLGFBQWFDLE9BQU8sQ0FBQ0YsUUFBUTtJQUUzQyxPQUFPUDtBQUNUO0FBRUEsU0FBU0ssSUFBSUUsR0FBRyxFQUFFUCxLQUFLO0lBQ3JCUSxhQUFhRSxPQUFPLENBQUNILEtBQUtQO0FBQzVCO0FBRUEsU0FBU00sT0FBT1IsR0FBRztJQUNqQlUsYUFBYUcsVUFBVSxDQUFDYjtBQUMxQiJ9