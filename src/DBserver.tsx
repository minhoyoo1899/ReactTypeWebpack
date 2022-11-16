import axios from "axios";
import { useEffect, useState } from "react";
//import CompInfo from "./CompInfo";

type company = {
  no: number;
  market: string;
  code: string;
  name: string;
  startday: string;
  realSearch: string;
  flotationNY: string;
};

type companyResponse = {
  data: company[];
};

const DBdata = () => {
  const [companyData, setCompanyData] = useState<any>([]);

  // useEffect(() => {
  //   const getSamsungM = async () => {
  //     try {
  //       let response = await axios.get("http://127.0.0.1:5000/samsungPrice_m")        setSamsungM(response.data)
  //     } catch (error) { console.log(error) }
  //   }
  //   getSamsungM()
  // }, [])


  useEffect((): any => {
    // const conn = async () => {
    //   try {
    //     let response = await axios.get("http://localhost:5000/company");
    //   }
    // }
    try {      
      axios
        .get<companyResponse>("http://localhost:5000/company", {
          headers: {
            Accept: "application/json",
          },
        })
        .then((response: any) => {
          setCompanyData(response.data);
          //console.log(response);
        });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message : ", error.message);
        return error.message;
      } else {
        console.log("unexpected error : ", error);
        return "An unexpected error occurred";
      }
    }
  }, []);

  return (
    <>
      <h1>DB연동</h1>
      {companyData.map((element: any) => (
        <div>
          <p>
            {element.no} {element.market} - {element.name} - {element.code} -
            {element.startday}
          </p>
        </div>
      ))}
    </>
  );
};

export default DBdata;