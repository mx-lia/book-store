export default function serverCall(
  endpoint,
  { body, header: method, ...customConfig } = {}
) {
  const headers = { "content-type": "application/json" };
  const config = {
    method: method ? method : body ? "POST" : "GET",
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
    if (response.redirected) {
      window.location.href = response.url;
      return;
    }
    if (response.status === 500) throw new Error("Something wrong");
    if (response.status === 401) return;
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return Promise.reject();
    }
  });
}
