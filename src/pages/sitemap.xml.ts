// sitemap.xml, built at build time: the fixed pages, every collection entry
// and the proposal defence deck. The 404 page is left out.
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL("https://tomasvangorp.com");
  const paths = [
    "/",
    "/projects/",
    "/work/",
    "/research/",
    "/about/",
    "/contact/",
    "/after-the-commitment-proposal-defence",
  ];
  for (const stream of ["projects", "work", "research"] as const) {
    const entries = await getCollection(stream);
    for (const entry of entries) paths.push(`/${stream}/${entry.id}/`);
  }
  const urls = paths
    .map((path) => `  <url><loc>${new URL(path, base).href}</loc></url>`)
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
