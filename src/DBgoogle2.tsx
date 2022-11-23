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



function DBgoogle02() {
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
    ["날짜", "시가", "저가", "고가", "종가"],
  ];
  //arr.map(callback(currentValue[, index[, array]])[, thisArg])
  Data.map((i: company, index) => {
    const pushArr: any = [i.day, i.open, i.low, i.high, i.close];
    // chartData.push(pushArr);
    // console.log(index);
    // console.log(typeof index);
    if (index % 7 === 0) {     
      console.log(`index === ${index}`);
      chartData.push(pushArr);
    }
  });  
  
  const options = {
    legend: "none",
    bar: {
      groupWidth: "90%",
    }, // Remove space between bars.
    candlestick: {
      risingColor: { strokeWidth: 30, fill: "blue" }, // green
      fallingColor: { strokeWidth: 20, fill: "#a52714" }, // red
      hAxis: { format: 'long' },
      vAxis: { logScale: 'true' },

    },
  };
  
  return (
    <div>
      <Chart
      chartType="CandlestickChart"
      width="70vw"
      height="150vw"
      data={chartData}
      options={options}
    />
    </div>
  );
}


export default DBgoogle02;

