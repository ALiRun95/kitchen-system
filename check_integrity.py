import re
import os

os.chdir(r"C:\Users\Izzat\.gemini\antigravity\scratch\ecc-workspace\kitchen-system")

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open('app.js', 'r', encoding='utf-8') as f:
    js = f.read()

html_ids = set(re.findall(r'id=["\']([^"\']+)["\']', html))
js_get_ids = set(re.findall(r'getElementById\(["\']([^"\']+)["\']\)', js))

missing_ids = js_get_ids - html_ids
print("JS references IDs not in HTML:", missing_ids)
print(f"Total HTML IDs: {len(html_ids)}")
print(f"Total JS getElementById references: {len(js_get_ids)}")

# Check for onclick handler functions in HTML vs defined functions in JS
html_onclicks = set(re.findall(r'onclick=["\']([a-zA-Z0-9_]+)\(', html))
js_functions = set(re.findall(r'function\s+([a-zA-Z0-9_]+)\s*\(', js))

missing_funcs = html_onclicks - js_functions
print("HTML onclick functions missing in JS:", missing_funcs)
