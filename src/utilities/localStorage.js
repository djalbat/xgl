"use strict";

export function getJSON(key) {
  let json = null;

  const value = get(key);

  if (value !== null) {
    json = JSON.parse(value);
  }

  return json;
}

export function setJSON(key, json) {
  const value = JSON.stringify(json);

  set(key, value);
}

export function removeJSON(key) {
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