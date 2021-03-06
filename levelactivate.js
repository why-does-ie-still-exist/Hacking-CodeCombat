function htmlToElement(html) {
  var template = document.createElement("template");
  template.innerHTML = html;
  return template.content.firstChild;
}

levelPlayButton = htmlToElement(
  '<button data-i18n="common.play" class="btn btn-success btn btn-lg btn-illustrated start-level">Play</button>'
);

levelInfoBoxes = document.getElementsByClassName("level-info rtl-allowed");

for (i = 0; i < levelInfoBoxes.length; i++) {
  levelInfoBoxes[i].appendChild(levelPlayButton.cloneNode());
}
