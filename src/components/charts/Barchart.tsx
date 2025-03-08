import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface BarChartReportProps {
  data: { name: string; value1: number; value2: number }[];
  color1?: string;
  color2?: string;
  title?: string;
}

const BarChartReport: React.FC<BarChartReportProps> = ({
  data,
  color1 = "#2E7D32", // Green
  color2 = "#C62828", // Red
  title = "Report",
}) => {
  return (
    <div className="bg-white p-4 rounded-md shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[#000819]">{title}</h2>
        <button className="text-gray-600 hover:text-gray-800">⋮</button>
      </div>
      <ResponsiveContainer width="100%" height={310}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#6B7280" />
          <YAxis stroke="#6B7280" />
          <Tooltip />
          <Bar dataKey="value1" fill={color1} radius={[4, 4, 0, 0]} />
          <Bar dataKey="value2" fill={color2} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartReport;
