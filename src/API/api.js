import { API_BASEURL, API_KEY } from "../constant/constant";
import { getHeader } from "./getHeader";

export async function getTopSories(section) {

    try {

      const URL = API_BASEURL+section+'.json?api-key='+API_KEY;
    
      const response = await fetch(URL);

      return await response.json();

    }
    catch (error) {
      alert(error)
      console.log("error", error);
    }

  
  }