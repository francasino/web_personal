#!/usr/bin/env python3
"""
Scholar Citation Updater for Dr. Fran Casino
Fetches live citations and bibliometric stats from OpenAlex / Google Scholar
and safely updates js/data.js.
Can be triggered manually or run via scheduled GitHub Actions.
Cost: 100% Free, zero servers, lightweight.
"""

import re
import json
import urllib.request
import sys
import os

SCHOLAR_USER_ID = "YzfuK8AAAAAJ"
ORCID = "0000-0003-4296-2876"
DATA_JS_PATH = os.path.join(os.path.dirname(__file__), "..", "js", "data.js")

def fetch_metrics():
    """Fetches citation count using OpenAlex API (reliable, free, no CAPTCHA) with Scholar fallback."""
    citations = None
    h_index = None

    # Primary Method: OpenAlex API by ORCID
    try:
        url = f"https://api.openalex.org/authors/https://orcid.org/{ORCID}"
        req = urllib.request.Request(url, headers={"User-Agent": "AcademicPortfolioBot/1.0 (mailto:francisco.casino@urv.cat)"})
        with urllib.request.urlopen(req, timeout=10) as response:
            if response.status == 200:
                data = json.loads(response.read().decode('utf-8'))
                citations = data.get("cited_by_count")
                h_index = data.get("summary_stats", {}).get("h_index")
                print(f"[OpenAlex] Retrieved: Citations = {citations}, h-index = {h_index}")
    except Exception as e:
        print(f"[OpenAlex] Error or timeout: {e}")

    # Fallback Method: Scrape public Google Scholar page
    if not citations or citations < 8000:
        try:
            scholar_url = f"https://scholar.google.com/citations?user={SCHOLAR_USER_ID}&hl=en"
            req = urllib.request.Request(scholar_url, headers={
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            })
            with urllib.request.urlopen(req, timeout=10) as response:
                html = response.read().decode('utf-8', errors='ignore')
                # Pattern for citations table
                match = re.search(r'Citations</a></td><td class="gsc_rsb_std">(\d+)</td>', html)
                if match:
                    citations = int(match.group(1))
                    print(f"[Google Scholar] Scraped Citations = {citations}")
                h_match = re.search(r'h-index</a></td><td class="gsc_rsb_std">(\d+)</td>', html)
                if h_match:
                    h_index = int(h_match.group(1))
                    print(f"[Google Scholar] Scraped h-index = {h_index}")
        except Exception as e:
            print(f"[Google Scholar] Fallback scrape failed: {e}")

    return citations, h_index

def update_data_js(citations, h_index):
    """Updates citations and h-index in js/data.js while preserving all formatting."""
    if not os.path.exists(DATA_JS_PATH):
        print(f"Error: {DATA_JS_PATH} not found.")
        sys.exit(1)

    with open(DATA_JS_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    updated = False

    if citations and citations > 0:
        # Update citations count in stats
        new_content, count = re.subn(
            r'(\{ id: "citations", val: )(\d+)(,)',
            rf'\g<1>{citations}\g<3>',
            content
        )
        if count > 0:
            content = new_content
            updated = True
            print(f"Updated citations in data.js to {citations}")

    if h_index and h_index > 0:
        new_content, count = re.subn(
            r'(\{ id: "hindex", val: )(\d+)(,)',
            rf'\g<1>{h_index}\g<3>',
            content
        )
        if count > 0:
            content = new_content
            updated = True
            print(f"Updated h-index in data.js to {h_index}")

    if updated:
        with open(DATA_JS_PATH, "w", encoding="utf-8") as f:
            f.write(content)
        print("Successfully saved updated js/data.js")
    else:
        print("No changes needed or regex pattern not matched.")

if __name__ == "__main__":
    cits, h = fetch_metrics()
    if cits or h:
        update_data_js(cits, h)
    else:
        print("Could not retrieve newer metrics. Existing values preserved.")
