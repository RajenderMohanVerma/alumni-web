import os

root_dir = r"C:\Users\Public\Dbit Alumhi Hub\alumni-web\templates"

for subdir, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith(".html"):
            filepath = os.path.join(subdir, file)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            
            # Avoid double replacement
            if "DBIT ALUMNI HUB" in content and "Alumni Hub" not in content.replace("DBIT ALUMNI HUB", ""):
                print(f"Skipping {file} (already rebranded)")
                continue

            # Replace "Alumni Hub" with "DBIT Alumni Hub"
            # But we must be careful not to create "DBIT Alumni Hub"
            # Strategy: Replace "DBIT ALUMNI HUB" with placeholder, then "Alumni Hub" with "DBIT ALUMNI HUB", then placeholder back.
            
            # Actually, simpler: Replace "Alumni Hub" with "DBIT Alumni Hub", then fix doubles.
            new_content = content.replace("Alumni Hub", "DBIT ALUMNI HUB")
            new_content = new_content.replace("DBIT DBIT ALUMNI HUB", "DBIT ALUMNI HUB")
            
            if content != new_content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated {file}")
