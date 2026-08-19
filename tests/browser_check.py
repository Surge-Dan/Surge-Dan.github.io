from pathlib import Path

from playwright.sync_api import sync_playwright


ROOT = "http://127.0.0.1:4181/"
OUT = Path(r"D:\Temp\daniel-portfolio-checks")
OUT.mkdir(parents=True, exist_ok=True)


def check_page(page):
    page.goto(ROOT, wait_until="networkidle")
    page.wait_for_timeout(1200)

    assert page.locator("#hero").count() == 1
    assert page.locator(".hero-oil-scene").count() == 1
    assert page.locator("#about, #work, #projects, #skills, #favorites, #contact").count() == 6
    assert page.locator("#nav .nav-links a").count() == 7
    assert page.locator("h1").count() == 1
    assert page.locator(".hero-oil-scene svg").count() == 1

    page.locator("#themeToggle").click()
    assert page.locator("html").get_attribute("data-theme") == "dark"
    page.locator("#themeToggle").click()
    assert page.locator("html").get_attribute("data-theme") == "light"

    page.locator(".project-card").first.click(force=True)
    assert page.locator(".project-card").first.get_attribute("class").find("expanded") >= 0

    page.locator("#favorites").scroll_into_view_if_needed()
    page.wait_for_timeout(700)
    assert page.locator(".fav-3d-card").count() >= 9
    page.screenshot(path=str(OUT / "final-desktop.png"), full_page=True)


def check_mobile(browser):
    page = browser.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=1)
    check_page(page)
    page.locator("#menuBtn").click()
    assert page.locator("#navDrawer").get_attribute("class").find("open") >= 0
    page.locator("#navDrawer a").first.click()
    assert page.locator("#navDrawer").get_attribute("class").find("open") < 0
    overflow = page.evaluate("document.documentElement.scrollWidth - window.innerWidth")
    assert overflow <= 1, overflow
    page.screenshot(path=str(OUT / "final-mobile.png"), full_page=True)
    page.close()


with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    console_errors = []
    page = browser.new_page(viewport={"width": 1440, "height": 900}, device_scale_factor=1)
    page.on("console", lambda message: console_errors.append(f"{message.text} @ {message.location}") if message.type == "error" else None)
    check_page(page)
    check_mobile(browser)
    assert not console_errors, console_errors
    browser.close()

print("PASS original modules, oil-paint hero, theme, carousel, mobile layout, and console checks")
