const saved_theme = localStorage.getItem("theme");
if (saved_theme) {
  document.documentElement.className = saved_theme;
} else {
  const prefers_dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = prefers_dark ? "dark" : "light";
  document.documentElement.className = theme;
  localStorage.setItem("theme", theme);
}
