import axios from "axios";
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

interface company {
  no: number,
  open: number,
  high: number,
  low: number,
  close: number,
  volume: number,
  day: string
}



function DBgoogle() {
  const [Data, setData] = useState([]);
  const fetchDatas = async () => {
    try {
      setData([]);
      const res = await axios.get("http://127.0.0.1:5000/code/530063");
      console.log("fetch data!!");
      console.log(res);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchDatas();
  }, []);

  // console.log("Data === ");
  // console.log(Data);
  // Data.map((i: company) => {
  //   console.log("data test :");
  //   console.log(i.no);
  //   console.log(i.open);
  //   console.log(i.high);
  //   console.log(i.low);
  //   console.log(i.close);
  //   console.log(i.volume);
  //   console.log(i.day);
  // });

 const chartData: any = [
    ["DATE", "시가", "고가", "저가", "종가"],    
  ];
  //arr.map(callback(currentValue[, index[, array]])[, thisArg])
  Data.map((i: company, index) => {
    const pushArr: any = [i.day, i.open, i.high, i.low, i.close];
    // console.log(typeof index);
    if (index % 7 === 0) {     
      console.log(`index === ${index}`);
      chartData.push(pushArr);
    }
    
  });  
  
  const options = {
    legend: "none",
    bar: { groupWidth: "100%" }, // Remove space between bars.
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
      risingColor: { strokeWidth: 0, fill: "blue" }, // green
    },
  };
  
  return (
    <div>
      <Chart
      chartType="CandlestickChart"
      width="100vw"
      height="100vh"
      data={chartData}
      options={options}
    />
    </div>
  );
}


export default DBgoogle;

