import { url, starsDesc, fivePerPage } from "./consts";
import { renderResult } from "./renderSearch";
export async function fetchRepos(query) {
  if (query) {
    try {
      const data = await fetch(`${url}?q=${query}${starsDesc}${fivePerPage}`);
      const dataObj = await data.json();
      renderResult(dataObj.items);
    } catch (error) {
      console.log(error);
    }
  } else {
    renderResult();
  }
}
