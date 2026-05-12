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
    let json = null;
    const value = get(key);
    if (value !== null) {
        const jsonString = value; ///
        json = JSON.parse(jsonString);
    }
    return json;
}
function setJSON(key, json) {
    const jsonString = JSON.stringify(json), value = jsonString; ///
    set(key, value);
}
function removeJSON(key) {
    remove(key);
}
function get(kay) {
    const value = localStorage.getItem(kay) || null;
    return value;
}
function set(kay, value) {
    localStorage.setItem(kay, value);
}
function remove(key) {
    localStorage.removeItem(key);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbG9jYWxTdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SlNPTihrZXkpIHtcbiAgbGV0IGpzb24gPSBudWxsO1xuXG4gIGNvbnN0IHZhbHVlID0gZ2V0KGtleSk7XG5cbiAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgY29uc3QganNvblN0cmluZyA9IHZhbHVlOyAvLy9cblxuICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuICB9XG5cbiAgcmV0dXJuIGpzb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRKU09OKGtleSwganNvbikge1xuICBjb25zdCBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbiksXG4gICAgICAgIHZhbHVlID0ganNvblN0cmluZzsgLy8vXG5cbiAgc2V0KGtleSwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSlNPTihrZXkpIHtcbiAgcmVtb3ZlKGtleSk7XG59XG5cbmZ1bmN0aW9uIGdldChrYXkpIHtcbiAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrYXkpIHx8IG51bGw7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBzZXQoa2F5LCB2YWx1ZSkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrYXksIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKGtleSkge1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xufSJdLCJuYW1lcyI6WyJnZXRKU09OIiwicmVtb3ZlSlNPTiIsInNldEpTT04iLCJrZXkiLCJqc29uIiwidmFsdWUiLCJnZXQiLCJqc29uU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic2V0IiwicmVtb3ZlIiwia2F5IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFFZ0JBO2VBQUFBOztRQXFCQUM7ZUFBQUE7O1FBUEFDO2VBQUFBOzs7QUFkVCxTQUFTRixRQUFRRyxHQUFHO0lBQ3pCLElBQUlDLE9BQU87SUFFWCxNQUFNQyxRQUFRQyxJQUFJSDtJQUVsQixJQUFJRSxVQUFVLE1BQU07UUFDbEIsTUFBTUUsYUFBYUYsT0FBTyxHQUFHO1FBRTdCRCxPQUFPSSxLQUFLQyxLQUFLLENBQUNGO0lBQ3BCO0lBRUEsT0FBT0g7QUFDVDtBQUVPLFNBQVNGLFFBQVFDLEdBQUcsRUFBRUMsSUFBSTtJQUMvQixNQUFNRyxhQUFhQyxLQUFLRSxTQUFTLENBQUNOLE9BQzVCQyxRQUFRRSxZQUFZLEdBQUc7SUFFN0JJLElBQUlSLEtBQUtFO0FBQ1g7QUFFTyxTQUFTSixXQUFXRSxHQUFHO0lBQzVCUyxPQUFPVDtBQUNUO0FBRUEsU0FBU0csSUFBSU8sR0FBRztJQUNkLE1BQU1SLFFBQVFTLGFBQWFDLE9BQU8sQ0FBQ0YsUUFBUTtJQUUzQyxPQUFPUjtBQUNUO0FBRUEsU0FBU00sSUFBSUUsR0FBRyxFQUFFUixLQUFLO0lBQ3JCUyxhQUFhRSxPQUFPLENBQUNILEtBQUtSO0FBQzVCO0FBRUEsU0FBU08sT0FBT1QsR0FBRztJQUNqQlcsYUFBYUcsVUFBVSxDQUFDZDtBQUMxQiJ9