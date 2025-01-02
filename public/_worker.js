const PAGE_MAP = {
  "/l/avemujica/detail?id153220": "/page1",
};
const FALLBACK_PAGE = "/invalid";

export default {
  async fetch(request, env) {
    console.log(
      "Request",
      request.method,
      request.url,
      request.cf.ipCountry,
      request.headers.get("CF-Connecting-IP"),
      request.headers.get("User-Agent")
    );

    const url = new URL(request.url);
    const key = `${url.pathname}${url.search}`;
    const destination = PAGE_MAP[key] || FALLBACK_PAGE;
    return env.ASSETS.fetch(new URL(destination, request.url));
  },
};
