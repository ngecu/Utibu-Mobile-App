import { useState, useEffect } from "react";
import axios from "axios";
const base_url = 'http://localhost:5000'
const useFetch = (endpoint:string,method:string, query:object,requestBody:object) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  
  const fetchData = async () => {
    setIsLoading(true);   
    try {
      const response = await axios({
        method: 'POST',
        url: 'http://192.168.100.10:5000/customer/login',
        data: requestBody,
        headers: {
            'Content-Type': 'application/json'
          }
      });
      console.log(response);
      
      setData(response.data.data);
      setIsLoading(false);
    
      
    } catch (error) {
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