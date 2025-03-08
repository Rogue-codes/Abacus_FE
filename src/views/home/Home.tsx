import { Table } from "antd";
import DonutChart from "../../components/charts/ApexDonutChart";
import BarChartReport from "../../components/charts/Barchart";
import { Icons } from "../../components/icons"
import { columns } from "../../components/table/Table";
import { transactions } from "../../utils/data";
import FilterButtons from "../../components/filters/Filter";
import CustomPagination from "../../components/pagination/CustomPagination";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const cardsData = [
    {
      title: "Balance",
      amount: "$27632",
      insight: "Compared to ($21340 last year)",
      percentage: "2.5%",
    },
    {
      title: "Profit",
      amount: "$27632",
      insight: "Compared to ($21340 last year)",
      percentage: "2.5%",
    },
    {
      title: "Loss",
      amount: "$110",
      insight: "Compared to ($165 last year)",
      percentage: "-1.5%",
    }
  ]

  const sampleData = [
    { name: "JAN", value1: 2000, value2: 500 },
    { name: "FEB", value1: 700, value2: 2000 },
    { name: "MAR", value1: 2000, value2: 2000 },
    { name: "APR", value1: 2000, value2: 500 },
    { name: "MAY", value1: 700, value2: 2000 },
    { name: "JUN", value1: 2000, value2: 500 },
    { name: "JULY", value1: 2000, value2: 500 },
    { name: "AUG", value1: 2000, value2: 500 },
    { name: "SEP", value1: 2000, value2: 500 },
    { name: "OCT", value1: 2000, value2: 500 },
  ];

  // const sampleDonutChartData = [
  //   { name: "Operations", value: 15, color: "#7E57C2" }, // Purple
  //   { name: "Orders", value: 28, color: "#42A5F5" }, // Blue
  //   { name: "Deliveries", value: 13, color: "#8E24AA" }, // Dark Purple
  // ];

  const sampleDonutChartData = [
    { status: "Operations ", count: 25 },
    { status: "Orders", count: 15 },
    { status: "Deliveries", count: 20 },
  ];


  return (
    <div className="w-full">

      <div className="flex justify-between items-center">
        {
          cardsData.map((card, index) => (
            <div className="w-[24vw] h-36 p-5 bg-white shadow rounded-md" key={index}>
              <p className="font-medium text-[#000819]">{card.title}</p>
              <div className="my-3 flex justify-start items-center gap-5">
                <p className="text-xl font-bold text-[#482dab]">{card.amount}</p>
                <div className={`${card.title === "Loss" ? "text-red-500" : "text-green-500"} text-sm flex jusstify-start items-center gap-2`}>
                  <p>{card.percentage}</p>
                  {card.title === "Loss" ? <Icons.arrowDown /> : <Icons.arrowUp />}
                </div>
              </div>
              <p className="text-sm">{card.insight}</p>
            </div>
          ))
        }
      </div>

      <div className="w-full my-16 flex justify-between items-center">
        <div className="w-[90%]">
          <BarChartReport data={sampleData} />
        </div>

        <div className="w-[40%] flex justify-center items-center">
          {/* <DonutChartReport data={sampleDonutChartData} /> */}
          <DonutChart data={sampleDonutChartData} />
        </div>
      </div>

      <div className="w-full bg-white p-8 rounded-md shadow ">
        <div className="w-full flex justify-between items-center my-5">
          <p className="text-lg font-semibold text-[#000819]">Transaction</p>
          <FilterButtons/>
        </div>
        <div className="h-[500px] overflow-y-scroll">
          <Table
            columns={columns}
            dataSource={transactions || []}
            // loading={}
            pagination={false}
            components={{
              header: {
                cell: (props: any) => (
                  <th
                    {...props}
                    style={{
                      backgroundColor: "#fff",
                      // borderTop:"solid 1px #482dab",
                      borderBottom: "solid 1px #482dab",
                      color: "#482dab",
                      borderRadius: "0px"
                    }}
                  >
                    {props.children}
                  </th>
                ),
              },
            }}
          />
        </div>

        <div className="w-full py-2 flex justify-center mt-5 items-center">
              <CustomPagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                total={10}
                perPage={5}
              />
            </div>
      </div>
    </div>
  )
}
