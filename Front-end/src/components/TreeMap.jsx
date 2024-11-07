import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = ({ data }) => {
  const [chartOptions] = useState({
    series: [
      {
        data: [...data.map((item) => item.y)],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 500,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          distributed: true,
          horizontal: true,
        },
      },
      colors: [
        "#33b2df",
        "#546E7A",
        "#d4526e",
        "#13d8aa",
        "#A5978B",
        "#2b908f",
        "#f9a3a4",
        "#90ee7e",
        "#f48024",
        "#69d2e7",
      ],
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "16px",
          colors: ["#fff"],
        },
      },
      xaxis: {
        categories: [...data.map((item) => item.x)],
        labels: {
          style: {
            fontSize: "14px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: "14px",
          },
        },
      },
      tooltip: {
        // theme: "dark",
        y: {
          formatter: function (val) {
            return `${val.toLocaleString()} Min Total Spend`;
          },
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartOptions.options}
          series={chartOptions.series}
          type="bar"
          height={380}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
