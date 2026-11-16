/**
 * Old WordPress permalinks like /?p=95 → clean homepage with no query string.
 * A _redirects rule of `/  p=:id  /  301!` would forward `p` and loop forever.
 */
export default async (request: Request) => {
  const url = new URL(request.url);
  if (url.pathname !== "/" && url.pathname !== "") return;
  if (!url.searchParams.has("p")) return;

  const clean = new URL("/", url.origin);
  return Response.redirect(clean.href, 301);
};

export const config = {
  path: "/",
};
