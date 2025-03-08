import React from "react";
import { Pagination } from "antd";

interface ICustomPagination {
  currentPage: number;
  total: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  perPage?: number
}

const CustomPagination = ({
  currentPage,
  total,
  setCurrentPage,
  perPage = 10,
}: ICustomPagination) => {
  const handleChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <Pagination
      current={currentPage}
      total={total}
      onChange={(page) => handleChange(page)}
      pageSize={perPage}
    />
  );
};

export default CustomPagination;