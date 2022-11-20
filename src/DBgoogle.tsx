import axios from "axios";
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

interface company {
  code: string,
  name: string,
  market: string
}

function DBgoogle() {
  const [Data, setData] = useState([]);
  const fetchDatas = async () => {
    try {
      setData([]);
      const res = await axios.get("http://locahost:5000/company");
      console.log("fetch datas@@");
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchDatas();
  }, []);
  console.log(Data);
}


export default DBgoogle;