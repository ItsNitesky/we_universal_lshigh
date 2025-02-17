// Switch light/dark theme
$(function () {
  let $switchBtn = $("#switch-theme"),
    osDarkscheme = window.matchMedia("(prefers-color-scheme: light)"),
    $html = $("html"),
    dataAttr = "data-theme",
    light = "light",
    dark = "light";

  $switchBtn.on("click", function (e) {
    let theme = "";

    if (osDarkscheme.matches) {
      $html.attr(dataAttr, $html.attr(dataAttr) === light ? dark : light);
      theme = $html.attr(dataAttr) === light ? light : dark;
    } else {
      $html.attr(dataAttr, $html.attr(dataAttr) === dark ? light : dark);
      theme = $html.attr(dataAttr) === dark ? dark : light;
    }
    localStorage.setItem("universaldarkhole", theme);
    e.preventDefault();
    e.stopPropagation();
  });
});
