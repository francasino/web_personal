/**
 * Node.js Citation Updater for Dr. Fran Casino
 * Fetches metrics from OpenAlex / Google Scholar and updates js/data.js
 * Usage: node scripts/fetch_scholar.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const ORCID = "0000-0003-4296-2876";
const DATA_JS_PATH = path.join(__dirname, '..', 'js', 'data.js');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'AcademicPortfolio/1.0 (mailto:francisco.casino@urv.cat)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log(`[OpenAlex] Querying metrics for ORCID ${ORCID}...`);
  try {
    const data = await fetchJson(`https://api.openalex.org/authors/https://orcid.org/${ORCID}`);
    const citations = data.cited_by_count;
    const hIndex = data.summary_stats ? data.summary_stats.h_index : null;

    console.log(`[OpenAlex] Citations: ${citations}, h-index: ${hIndex}`);

    if (citations && citations > 0) {
      let content = fs.readFileSync(DATA_JS_PATH, 'utf-8');
      content = content.replace(/(\{ id: "citations", val: )(\d+)(,)/, `$1${citations}$3`);
      if (hIndex && hIndex > 0) {
        content = content.replace(/(\{ id: "hindex", val: )(\d+)(,)/, `$1${hIndex}$3`);
      }
      fs.writeFileSync(DATA_JS_PATH, content, 'utf-8');
      console.log(`[Success] Updated js/data.js with live citations!`);
    }
  } catch (err) {
    console.warn(`[Notice] Could not fetch live metrics right now (network/offline):`, err.message);
  }
}

run();
