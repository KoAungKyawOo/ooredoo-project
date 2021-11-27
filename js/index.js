// Dropdown
$(".nav-item").hover(
  function () {
    $("ul", this).stop().slideDown();
  },
  function () {
    $("ul", this).stop().slideUp();
  }
);

// Promotion section
var tabs = document.getElementsByClassName("tab");
var panels = document.getElementsByClassName("panel");
var i;
clickTab(0);
function clickTab(n) {
  for (i = 0; i < panels.length; i++) {
    panels[i].style.display = "none";
  }
  for (i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active", "");
  }
  panels[n].style.display = "block";
  tabs[n].className += " active";
}
