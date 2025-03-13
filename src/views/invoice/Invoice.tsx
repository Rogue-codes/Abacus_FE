/* eslint-disable @typescript-eslint/no-explicit-any */
import { Space, Table, TableProps } from "antd";
import { IoMdEye } from "react-icons/io";
import { invoiceData } from "../../utils/data";

export default function Invoice() {
  const columns: TableProps<any>["columns"] = [
    {
      title: "Client",
      key: "client",
      dataIndex: "client"
    },
    {
      title: "Status",
      key: "status",
      render: (_, row) => (
        <div className={`${row.status === "pending" ? "bg-orange-500" : row.status === "completed" ? "bg-green-800" : "bg-red-800"} border flex text-white justify-center items-center py-1 rounded-lg`}
        >
          {row.status}
        </div>
      ),
      // width: 300
    },
    {
      title: "amount",
      key: "amount",
      render: (_, row) => (
        <p>NGN {row.amount}</p>
      ),
    },
    {
      title: "Date",
      key: "name",
      dataIndex: "date",
      // width: 220
    },
    {
      title: "ID",
      key: "id",
      dataIndex: "id",
      // width: 220
    },
    {
      title: "Actions",
      key: "action",
      render: (_, row) => (
        <Space className="relative">
          <div>
            <IoMdEye size={25} className="cursor-pointer" />
          </div>
        </Space>
      ),
    },
  ];

  return (
    <div className='w-full'>
      <div className="w-full flex justify-between">
        <div className="w-[70%] h-[80vh] bg-white rounded-md p-8">
          <div className="flex my-8 justify-between items-center">
            <input type="text" className="w-[40%] rounded-md bg-white p-3 border border-gray-300 focus:outline-0 placeholder:text-gray-300" placeholder="Invoice ID, customer name"/>
            <button className="py-3 px-5 text-white cursor-pointer text-sm rounded-md bg-[#cc33ba]">Create Invoice</button>
          </div>
          <div>
            <Table
              columns={columns}
              dataSource={invoiceData || []}
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

        </div>
        <div className="w-[28%] h-44 bg-white rounded-md px-8 py-3">
          <div>
            <p className="font-light text-[#000819]">Total Paid</p>
            <h2 className="text-2xl font-bold text-green-400">$156,790.80</h2>
          </div>

          <div className="mt-6">
            <p className="font-light text-[#000819]">Awaiting Payment</p>
            <h2 className="text-2xl font-bold text-red-400">$15,360.80</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
