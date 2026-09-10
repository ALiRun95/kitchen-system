import os

os.chdir(r"C:\Users\Izzat\.gemini\antigravity\scratch\ecc-workspace\kitchen-system")

with open('app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"Total lines in app.js: {len(lines)}")

# Search for any unescaped single quote in JS strings
for i, line in enumerate(lines):
    # Check for backtick template strings with unescaped single quotes or string syntax errors
    if "Qo'y" in line or "Lag'mon" in line or "Sho'rba" in line or "O'rtacha" in line:
        # Check if single quote inside single-quoted string
        if "'" in line and not line.strip().startswith("//"):
            pass
