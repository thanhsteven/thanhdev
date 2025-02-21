const accorTitles = document.querySelectorAll(".accordion-title");
[...accorTitles].forEach(function (item) {
  item.addEventListener("click", function (event) {
    let accorContent = event.target.nextElementSibling;
    let icon = event.target.querySelector(".fa-angle-down");
    if (!accorContent.hasAttribute("style")) {
      collapseAnswers();
      accorContent.style.maxHeight = accorContent.scrollHeight + "px";
      icon.style.transform = "rotateX(180deg)";
    } else {
      accorContent.removeAttribute("style");
      icon.removeAttribute("style");
    }
  });
});

const accorItems = document.querySelectorAll(".accordion-item");
function collapseAnswers() {
  [...accorItems].forEach(function (item) {
    let title = item.querySelector(".accordion-title");
    let answer = item.querySelector(".accordion-answer");
    let icon = title.querySelector(".fa-angle-down");
    title.removeAttribute("style");
    answer.removeAttribute("style");
    icon.removeAttribute("style");
  });
}
