/**
 * @typedef {{ ASSETS: { fetch: globalThis.fetch } }} Env
 */

/**
 * @param {URL} url
 * @returns {string}
 */
function getDestination(url) {
  if (url.pathname === "/l/avemujica/detail") {
    if (url.searchParams.has("id153220")) {
      return "/page1";
    }
  }

  return "/invalid";
}

export default {
  /**
   * @param {Request} request
   * @param {Env} env
   * @returns {Promise<Response>}
   */
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
    return env.ASSETS.fetch(new URL(getDestination(url), request.url));
  },
};
