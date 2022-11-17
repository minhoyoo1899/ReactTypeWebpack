import axios from "axios";
import { useEffect, useState } from "react";
import CompInfo from "./CompInfo";


const AxiosConn = () => {
  const [companyData, setCompanyData] = useState<any>([]);
  useEffect((): any => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log(response);
      });
  }, []);
 
}