// Elysium Visuals landing: scroll reveal + latest launcher release from GitHub.
document.documentElement.classList.add("js");

const REPO = "dejure-xvii/elysium-launcher";

// Scroll reveal with a small stagger for siblings revealed together.
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries
        .filter((e) => e.isIntersecting)
        .forEach((e, i) => {
          e.target.style.setProperty("--d", `${i * 70}ms`);
          e.target.classList.add("in");
          io.unobserve(e.target);
        });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("in"));
}

document.querySelectorAll(".js-year").forEach((el) => (el.textContent = new Date().getFullYear()));

// Point download buttons straight at the installer of the latest release.
// On any failure the buttons keep linking to the /releases/latest page.
fetch(`https://api.github.com/repos/${REPO}/releases/latest`, { headers: { Accept: "application/vnd.github+json" } })
  .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
  .then((release) => {
    const asset = release.assets.find((a) => /x64-setup\.exe$/i.test(a.name));
    if (asset) {
      document.querySelectorAll(".js-download").forEach((a) => (a.href = asset.browser_download_url));
    }
    if (release.tag_name) {
      document.querySelectorAll(".js-version").forEach((el) => (el.textContent = release.tag_name));
    }
  })
  .catch(() => {});
