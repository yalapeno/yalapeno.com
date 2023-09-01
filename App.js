let unorderedListElement = document.createElement("UL");

const fruits = ["Apple", "Banana", "Sanana"];

for (const index in fruits) {
    let listItemElement = document.createElement("LI");
    listItemElement.innerHTML = fruits[index]
    unorderedListElement.appendChild(listItemElement)
}
document.body.appendChild(unorderedListElement)