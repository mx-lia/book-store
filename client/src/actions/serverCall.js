export default function serverCall(endpoint, { body, header: method, ...customConfig } = {}) {
  const headers = { "content-type": "application/json" };
  const config = {
    method: method? method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }
  return window.fetch(endpoint, config).then(async (response) => {
    if (response.status === 401) {
      return;
    }
    if (response.redirected) {
      window.location.href = response.url;
      return;
    }
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}
