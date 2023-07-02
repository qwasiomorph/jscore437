import { searchField } from "../main";
import { addRepo } from "./renderSelected";

export function renderResult(items) {
  const listElem = document.querySelector(".searchRes");
  listElem.innerHTML = ``;
  if (items) {
    items.forEach((item, index) => {
      const listItem = document.createElement("li");
      listItem.classList.add("listItem");
      listItem.innerHTML = `<h4>${item.name}</h4>`;
      listElem.appendChild(listItem);
      listItem.addEventListener("click", (e) => {
        e.preventDefault();
        addRepo(item);
        searchField.value = "";
        renderResult();
      });
    });
  }
}
