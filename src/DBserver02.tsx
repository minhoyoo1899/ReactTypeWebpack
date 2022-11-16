import axios from "axios";
import { useEffect, useState } from "react";
import CompInfo from "./CompInfo";

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
  useEffect((): any => {
    try {
      axios.get<companyResponse>("http://localhost:5000/compdata", {
        headers: {
          Accept: "application/json",
        },
      }).then((reponse: any) => {
        setCompanyData(reponse.data);
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
            no : {element.no}, <br/>
            open: {element.open}, <br/>
            high: {element.high}, <br/>
            low: {element.low}, <br/>
            close: {element.close}, <br/>
            volume: {element.volume}, <br/>
            day: {element.day}, <br/>
          </p>
        </div>
      ))}
    </>
  )
};

export default DBdata;
