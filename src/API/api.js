import { API_BASEURL, API_KEY, API_SEARCH_BASEURL } from "../constant/constant";
import { getHeader } from "./getHeader";

export async function getTopSories(section) {

    try {

      const URL = API_BASEURL+section+'.json?api-key='+API_KEY;
    
      const response = await fetch(URL);

      return await response.json();

    }
    catch (error) {
      console.log("error", error);
    }

  
  }

  export async function getSearchArticle(search) {

    try {

      const URL = API_SEARCH_BASEURL+search+'&api-key='+API_KEY;
    
      const response = await fetch(URL);

      return await response.json();

    }
    catch (error) {
      console.log("error", error);
    }

  
  }