// Submits URLs to Bing's Webmaster Tools "Submit URL batch" API so new pages
// get crawled without waiting for Bing's own sitemap re-crawl schedule.
//
// The API key is NEVER read from a file or committed anywhere — it must be
// passed as an environment variable for this single run only:
//
//   BING_API_KEY=your-key-here node scripts/submit-bing-urls.mjs
//
// By default this submits every URL currently in the live sitemap (safe and
// idempotent — re-submitting already-indexed URLs does nothing harmful).
// Pass specific paths as CLI args to submit only those instead:
//
//   BING_API_KEY=your-key-here node scripts/submit-bing-urls.mjs /routes/riyadh-to-khobar /routes/khobar-to-riyadh

const SITE_URL = "https://saudiprivatetransfers.com";
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const BING_ENDPOINT = "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch";

// Bing's documented cap per batch call.
const CHUNK_SIZE = 500;

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function getUrlsFromSitemap() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`Failed to fetch sitemap: ${res.status} ${res.statusText}`);
  const xml = await res.text();
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  return matches.map((m) => m[1].trim());
}

async function submitBatch(apiKey, urls) {
  const res = await fetch(`${BING_ENDPOINT}?apikey=${encodeURIComponent(apiKey)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ siteUrl: SITE_URL, urlList: urls }),
  });

  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Bing API error ${res.status}: ${text || res.statusText}`);
  }
  return text;
}

async function main() {
  const apiKey = process.env.BING_API_KEY;
  if (!apiKey) {
    console.error(
      "Missing BING_API_KEY. Run as: BING_API_KEY=your-key node scripts/submit-bing-urls.mjs"
    );
    process.exit(1);
  }

  const argPaths = process.argv.slice(2);
  let urls;
  if (argPaths.length > 0) {
    urls = argPaths.map((p) => (p.startsWith("http") ? p : `${SITE_URL}${p.startsWith("/") ? "" : "/"}${p}`));
    console.log(`Submitting ${urls.length} explicit URL(s) passed as arguments.`);
  } else {
    console.log(`Fetching sitemap from ${SITEMAP_URL} ...`);
    urls = await getUrlsFromSitemap();
    console.log(`Found ${urls.length} URLs in the sitemap.`);
  }

  if (urls.length === 0) {
    console.log("No URLs to submit.");
    return;
  }

  const batches = chunk(urls, CHUNK_SIZE);
  let submitted = 0;
  for (const [i, batch] of batches.entries()) {
    try {
      await submitBatch(apiKey, batch);
      submitted += batch.length;
      console.log(`Batch ${i + 1}/${batches.length}: submitted ${batch.length} URLs.`);
    } catch (err) {
      console.error(`Batch ${i + 1}/${batches.length} failed:`, err.message);
    }
  }

  console.log(`Done. ${submitted}/${urls.length} URLs submitted to Bing.`);
}

main().catch((err) => {
  console.error("Fatal error:", err.message);
  process.exit(1);
});
