import { useDebounce } from "./utils/debounce";
import { url, starsDesc } from "./utils/consts";
import { fetchRepos } from "./utils/fetchRepos";
console.clear();
export const searchField = document.querySelector(".search");
const debounedFetch = useDebounce(fetchRepos, 500);
searchField.addEventListener("input", async (e) => {
  e.preventDefault();
  debounedFetch(e.target.value);
});
