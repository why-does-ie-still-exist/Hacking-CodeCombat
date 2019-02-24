function unlockWorld(worldTag) {
  if (worldTag.nodeName == "DIV") {
    worldTag.className = worldTag.className.replace("locked", "unlocked");
  }
}

worldsList = Array.from(document.getElementsByClassName("campaign"));

betaWorldsList = Array.from(document.getElementsByClassName("beta-campaign"));

worldsList.forEach(unlockWorld);
betaWorldsList.forEach(unlockWorld);

function htmlToElement(html) {
  var template = document.createElement("template");
  template.innerHTML = html;
  return template.content.firstChild;
}
