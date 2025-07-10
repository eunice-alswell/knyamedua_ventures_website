import fs from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = 'https://www.nyameduagrupp.com';

const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/products',
  '/contact',
];

const productSlugs = [
    'lpg-commercial-storage-tanks',
    'industrial-cookstoves',
    'commercial-regulators-and-heating-systems',
    'rego-valves-and-fittings',
    'liquid-guages',
    'lpg-meter-and-measuring-systems',
    'commercial-grills',
    'commercial-ovens',
    
  // Add your full slug list here
];

const dynamicRoutes = productSlugs.map(slug => `/products/${slug}`);

const allRoutes = [...staticRoutes, ...dynamicRoutes];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    route => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join('')}
</urlset>`;

fs.writeFileSync(resolve(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log('✅ Sitemap generated at /public/sitemap.xml');
