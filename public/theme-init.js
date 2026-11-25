// Sets the light/dark class on <html> before the page paints, so there is no flash of the
// wrong theme. Loaded as a classic (render-blocking) script from BaseHead.astro. It lives in
// its own file so the Content-Security-Policy can allow it via 'self' (inline scripts would
// need a hash).
const theme = (() => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
})();

if (theme === "light") {
  document.documentElement.classList.remove("dark");
} else {
  document.documentElement.classList.add("dark");
}
window.localStorage.setItem("theme", theme);
