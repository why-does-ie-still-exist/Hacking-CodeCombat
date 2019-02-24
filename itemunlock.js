function unlockItem(itemTag) {
  if (itemTag.nodeName == "DIV") {
    itemTag.className = itemTag.className.replace("locked", "unlocked");
    itemTag.click();
  }
}

availableItems = Array.from(document.getElementsByClassName("item"));

availableItems.forEach(unlockItem);
