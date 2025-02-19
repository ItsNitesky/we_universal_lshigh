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

// Random header image
$(document).ready(function() {
    const images = ['dashboard.png', 'dashboard2.jpeg', 'dashboard3.jpeg', 'dashboard4.jpeg'];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const imagePath = `./styles/we_universal_lshigh/theme/images/${randomImage}`;
    
    // Preload the image
    const img = new Image();
    img.onload = function() {
        document.querySelector('.inventea-dashboard').style.backgroundImage = 
            `linear-gradient(135deg, rgba(51,165,255,0.4), rgba(51,165,255,0.3)), url("${imagePath}")`;
    };
    img.src = imagePath;
});
