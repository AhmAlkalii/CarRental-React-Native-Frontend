import { DATA_API_ENDPOINT } from "./environment";

const fetchData = async () => {
    try {
      const response = await fetch(DATA_API_ENDPOINT);
      const data = await response.json();
  
      if (data && data.type === "Engine" && Array.isArray(data.data)) {
        return data.data;
      } else {
        throw new Error("Invalid data structure");
      }
    } catch (err) {
      throw new Error(err.message || 'Error fetching data');
    }
  };
  
  export default fetchData;
  