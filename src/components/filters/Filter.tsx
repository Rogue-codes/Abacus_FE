import React from "react";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const FilterButtons: React.FC = () => {
  const transactionMenu = (
    <Menu>
      <Menu.Item key="1">All Transactions</Menu.Item>
      <Menu.Item key="2">Completed</Menu.Item>
      <Menu.Item key="3">Pending</Menu.Item>
      <Menu.Item key="4">Canceled</Menu.Item>
    </Menu>
  );

  const dateMenu = (
    <Menu>
      <Menu.Item key="1">Last 30 days</Menu.Item>
      <Menu.Item key="2">Last 7 days</Menu.Item>
      <Menu.Item key="3">This Month</Menu.Item>
      <Menu.Item key="4">Last Month</Menu.Item>
    </Menu>
  );

  return (
    <div className="flex gap-2">
      <Dropdown overlay={transactionMenu} trigger={["click"]}>
        <Button className="bg-gray-700 text-white hover:bg-gray-600">
          All Transactions <DownOutlined />
        </Button>
      </Dropdown>

      <Dropdown overlay={dateMenu} trigger={["click"]}>
        <Button className="bg-gray-700 text-white hover:bg-gray-600">
          Last 30 days <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default FilterButtons;
