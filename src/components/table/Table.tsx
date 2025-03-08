import { Space, TableProps } from "antd";
import { IoMdEye } from "react-icons/io";


  export const columns: TableProps<any>["columns"] = [
    {
      title: "Date",
      key: "name",
      dataIndex:"date",
      width:220
    },
    {
      title: "ID",
      key: "id",
      dataIndex: "id",
      width:220
    },
    {
      title: "Amount",
      key: "amount",
      render: (_, row) => (
        <p>NGN {row.amount}</p>
      ),
    },
    {
        title: "Status",
        key: "status",
        render: (_, row) => (
          <div className={`${row.status ==="pending" ? "bg-orange-500" : row.status ==="completed" ? "bg-green-800" : "bg-red-800"} border flex text-white justify-center w-[50%] items-center py-1 rounded-lg`}
          >
            {row.status}
          </div>
        ),
        width:300
      },
      {
        title: "Description",
        key: "description",
        render: (_, row) => (
          <div 
          >
            <p>{row.description}</p>
          </div>
        ),
        width: 250,
      },
    {
      title: "Actions",
      key: "action",
      render: (_, row) => (
        <Space className="relative">
          <div
            
          >
            <IoMdEye size={25} className="cursor-pointer"/>
          </div>
          {/* {selectedRow?._id === row._id && (
            <div
              ref={menuRef}
              className="absolute -right-20 top-8 !z-[99] w-44 shadow-md border bg-white"
            >
              {rowMenuOptions(row).map((option) => (
                <div
                  key={option.label}
                  onClick={option.onclick}
                  className="cursor-pointer !text-sm hover:bg-WKS-Primary hover:text-white p-2 flex justify-start items-center gap-2"
                >
                  {option.icon}
                  {option.label}
                </div>
              ))}
            </div>
          )} */}
        </Space>
      ),
    },
  ];
