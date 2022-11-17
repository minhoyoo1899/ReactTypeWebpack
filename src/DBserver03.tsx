import { Routes, Route, Link } from "react-router-dom";
import React ,{useEffect,useState} from "react";
import axios from 'axios';


interface company {
  code:string,
  name:string,
  market:string
}

function DBserver03() {
  const [Data, setData] = useState([]);
  const fatchDatas = async() => {
    try{
       setData([]);
      const res = await axios.get("http://localhost:5000/company");
      console.log("feach datas!!")
      setData(res.data); // useState 변수에 담긴다
      //  console.log(Data)
    } catch(e){
      console.log(e)
    }
  };
  useEffect(() => {
   fatchDatas();
  }, []);
  console.log(Data)
  
  return (
    <div>
    <div>
      {Data.map((i:company)=>{
            return(
              <p>{i.name}</p>
            )
          })}
    </div>
    <div>
    {Data.map((i:company)=>{
          return(
            <p>{i.code}</p>
          )
        })}
      </div>
      <div>
      {Data.map((i:company)=>{
            return(
              <p>{i.market}</p>
            )
          })}
      </div>
      </div>
  )
}

export default DBserver03;