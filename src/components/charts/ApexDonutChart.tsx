import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface DonutChartProps {
  data: Array<{ status: string; count: number }>;
}

const DonutChart: React.FC<DonutChartProps> = ({ data }) => {
  console.log("Raw Data:", data);

  // Normalize data by ensuring consistent casing
  const normalizedData = data.map((item) => ({
    status: item.status.trim().toLowerCase(), // Normalize to lowercase
    count: item.count,
  }));

  console.log("Normalized Data:", normalizedData);

  // Extract counts for the series
  const series = normalizedData.map((item) => item.count);
  // Extract status for the labels
  const labels = normalizedData.map((item) => item.status);

  // Define color mapping (Ensure keys are lowercase)
  const colorMapping: { [key: string]: string } = {
    deliveries: "#7f0273",
    orders: "#1BA9EA",
    operations: "#7050e7",
  };

  // Generate the colors array with a default fallback
  const colors = normalizedData.map(
    (item) => colorMapping[item.status] || "#ff0000"
  );

  console.log("Colors Used:", colors);

  // Generate percentage values
  const total = series.reduce((sum, value) => sum + value, 0);
  const percentages = series.map((value) => ((value / total) * 100).toFixed(0));

  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: labels,
    colors: colors,
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false, // Hide default legend
    },
  };

  return (
    <div className="flex flex-col items-center bg-white shadow rounded-md p-5">
      <h2 className="text-lg font-semibold text-[#000819]">Analytics</h2>
      {/* Donut Chart */}
      <Chart options={options} series={series} type="donut" width="300" />

      {/* Custom Legend */}
      <div className="flex justify-center mt-4 space-x-8">
        {normalizedData.map((item, index) => (
          <div key={index} className="text-center">
            <p className="text-lg font-bold" style={{ color: colors[index] }}>
              {percentages[index]}%
            </p>
            <p className="text-gray-500">{item.status.charAt(0).toUpperCase() + item.status.slice(1)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;
