
import {useState, useEffect} from "react"
import axios from "axios"

const useAxiosOnMount = (url)=> {

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getResponse();
  },[]);
 
  const getResponse = async ()=> {
    setError(null);
    try{
      let res = await axios.get(url);
      setResponse(res);
      setLoading(false);

    }catch (error) {
      setError(error);
      setLoading(false);
    }

  };

  return {response, loading, error}

};

export default useAxiosOnMount;