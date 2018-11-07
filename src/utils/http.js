export function post(url, data) {
  return fetch(url, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(data)
  });
}

export function patch(url, data) {
  return fetch(url, {
    method: "PATCH",
    mode: "cors",
    body: JSON.stringify(data)
  });
}

export function get(url) {
  return fetch(url, {
    method: "GET",
    mode: "cors"
  });
}
