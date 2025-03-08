import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface DonutChartReportProps {
  data: { name: string; value: number; color: string }[];
  title?: string;
}

const DonutChartReport: React.FC<DonutChartReportProps> = ({
  data,
  title = "Analytics",
}) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full max-w-xs">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button className="text-gray-600 hover:text-gray-800">⋮</button>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={50}
            outerRadius={70}
            fill="#8884d8"
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div className="flex justify-center space-x-4 mt-4">
        {data.map((item, index) => (
          <div key={index} className="text-center">
            <span
              className="font-semibold"
              style={{ color: item.color }}
            >
              {item.value}%
            </span>
            <p className="text-sm text-gray-500">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChartReport;
