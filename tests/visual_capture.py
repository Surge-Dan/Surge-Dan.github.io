from pathlib import Path

from playwright.sync_api import sync_playwright


OUT = Path(r"D:\Temp\daniel-portfolio-checks")
OUT.mkdir(parents=True, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900}, device_scale_factor=1)
    page.goto("http://127.0.0.1:4181/", wait_until="networkidle")
    page.wait_for_timeout(900)
    for section in ["hero", "about", "work", "projects", "skills", "favorites", "contact"]:
        page.locator(f"#{section}").scroll_into_view_if_needed()
        page.wait_for_timeout(1400)
        if section == "favorites":
            print(page.locator(".fav-3d-icon").evaluate_all("els => els.map(e => ({src: e.src, width: e.naturalWidth, height: e.naturalHeight}))"))
            print("fallbacks", page.locator(".fav-icon-fallback").count())
        page.screenshot(path=str(OUT / f"{section}.png"))
    page.locator("#themeToggle").click()
    for section in ["about", "favorites", "contact"]:
        page.locator(f"#{section}").scroll_into_view_if_needed()
        page.wait_for_timeout(1100)
        page.screenshot(path=str(OUT / f"dark-{section}.png"))
    browser.close()

print("captured section previews")
