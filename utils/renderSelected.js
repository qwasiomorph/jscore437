const listOfSelected = document.querySelector(".selected");
export function addRepo(repo) {
  const name = repo.name;
  const owner = repo.owner.login;
  const stars = repo.stargazers_count;
  const item = document.createElement("li");
  item.classList.add("chosenItem");
  item.innerHTML = `<div class="itemInfo"><h4>Name: ${name}</h4><div>Owner: ${owner}</div><div>Stars: ${stars}</div></div>`;
  const remButton = document.createElement("button");
  remButton.classList.add("buttonRemove");
  remButton.addEventListener("click", (e) => {
    e.preventDefault();
    listOfSelected.removeChild(item);
  });
  remButton.textContent = "Remove";
  item.appendChild(remButton);
  listOfSelected.appendChild(item);
}
