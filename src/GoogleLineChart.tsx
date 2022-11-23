import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

interface company {
  no: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  day: string;
}

function GoogleLineChart() {
  const [Data, setData] = useState([]);
  const fetchDatas = async () => {
    try {
      setData([]);
      const res = await axios.get("http://127.0.0.1:5000/code/530063");
      console.log("fetch data!!");
      // console.log(res);
      // console.log("aaa");
      setData(res.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchDatas();
  }, []);

  const chartData: any = [
    [
      { type: "string", label: "요일" }, //date
      { type: "number", label: "고가" }, // open
      { id: "i.open", type: "number", role: "interval" },
      { id: "i.close", type: "number", role: "interval" },
      { id: "i.low", type: "number", role: "interval" },
      // { id: "0", type: "number", role: "interval" },
      { id: "i.volume", type: "number", role: "interval" },
      { id: "volume", type: "number" },
    ],
  ];
  Data.map((i: company, index) => {
    const sum: number = (i.open + i.close + i.high + i.low);
    const avg: number = sum / 4;
    const startPoint = 0;
    // console.log(avg);
    const pushArr: any = [i.day, i.high, i.open, i.close, i.low, i.volume, i.volume];
    chartData.push(pushArr);
  });
  // console.log(chartData);

  const options = {
    series: [{ color: "#1A8763" }],
    intervals: { lineWidth: 1, barWidth: 1, style: "boxes" },
    legend: "none",
    annotation: {
      boxStyle: {
        // Color of the box outline.
        stroke: '#888',
        // Thickness of the box outline.
        strokeWidth: 1,
        // x-radius of the corner curvature.
        rx: 10,
        // y-radius of the corner curvature.
        ry: 10,
        // Attributes for linear gradient fill.
        gradient: {
          // Start color for gradient.
          color1: '#fbf6a7',
          // Finish color for gradient.
          color2: '#33b679',
          // Where on the boundary to start and
          // end the color1/color2 gradient,
          // relative to the upper left corner
          // of the boundary.
          x1: '0%', y1: '0%',
          x2: '100%', y2: '100%',
          // If true, the boundary for x1,
          // y1, x2, and y2 is the box. If
          // false, it's the entire chart.
          useObjectBoundingBoxUnits: true
        }
      }
    }
  };

  const stickData = [
    [
      "Date",
      "시가",
      "저가",
      "고가",
      "종가",
      "거래량",
      "평균",
    ],
  ];

  Data.map((i: company, index) => {
    const sum: number = (i.open + i.close + i.high + i.low);
    const avg: number = sum / 4;
    // console.log(avg);
    const pushArr: any = [i.day, i.open, i.low, i.high, i.close, i.volume, avg];
    stickData.push(pushArr);
  });

  const stickOptions = {
    title: "주식 차트",
    vAxis: { title: "Stock" },
    hAxis: { title: "Date" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
  };

  return (
    <div>
      <div>
         <Chart
          chartType="LineChart"
          width="50vw"
          height="50vw"
          data={chartData}
          options={options}
        />   
        <Chart
        chartType="ComboChart"
        width="50vw"
        height="50vw"
        data={stickData}
        options={stickOptions}
      />
      </div>
    </div>
  );
}

// export const data = [
//   [
//     "Month",
//     "Bolivia",
//     "Ecuador",
//     "Madagascar",
//     "Papua New Guinea",
//     "Rwanda",
//     "Average",
//   ],
//   ["2004/05", 165, 938, 522, 998, 450, 614.6],
//   ["2005/06", 135, 1120, 599, 1268, 288, 682],
//   ["2006/07", 157, 1167, 587, 807, 397, 623],
//   ["2007/08", 139, 1110, 615, 968, 215, 609.4],
//   ["2008/09", 136, 691, 629, 1026, 366, 569.6],
// ];

// export const options = {
//   title: "Monthly Coffee Production by Country",
//   vAxis: { title: "Cups" },
//   hAxis: { title: "Month" },
//   seriesType: "bars",
//   series: { 5: { type: "line" } },
// };

// export function App() {
//   return (
//     <Chart
//       chartType="ComboChart"
//       width="100%"
//       height="400px"
//       data={data}
//       options={options}
//     />
//   );
// }






// export const data = [
//   [
//     { type: "number", label: "x" }, //date
//     { type: "number", label: "values" }, //volume
//     { id: "open", type: "number", role: "interval" },
//     { id: "close", type: "number", role: "interval" },
//     { id: "low", type: "number", role: "interval" },
//     { id: "high", type: "number", role: "interval" },
//   ],
// ];

// export const options = {
//   series: [{ color: "#1A8763" }],
//   intervals: { lineWidth: 1, barWidth: 1, style: "boxes" },
//   legend: "none",
// };

// export function App() {
//   return (
//     <Chart
//       chartType="LineChart"
//       width="100%"
//       height="400px"
//       data={data}
//       options={options}
//     />
//   );
// }

export default GoogleLineChart;