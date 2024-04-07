import { useState, useEffect } from "react";
import axios from "axios";
const base_url = 'http://192.168.100.10:5000'
const useFetch = (endpoint:string,method:string, query:object,requestBody:object) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  
  const fetchData = async () => {
    setIsLoading(true);   
    try {
      const response = await axios({
        method: 'POST',
        url: `${base_url}/${endpoint}`,
        data: requestBody,
        headers: {
            'Content-Type': 'application/json'
          }
      });
      if (response && response.data) {
        console.log(response);
        setError(null);
        setData(response.data);
      } else {
        setData(null); 

        setError(response);
      }
      
      setIsLoading(false);
      
      console.log(error);
      
      
    } catch (error) {
        setData(null)
        console.log(error);
        
      setError(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;