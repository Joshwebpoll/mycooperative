// "use client";

// import React, { useState } from "react";

// import loanStore from "../userStore/loanStore";
// const columns = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: "Cash Assets",
//     className: "column-money",
//     dataIndex: "money",
//     align: "right",
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//   },
// ];
// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     money: "￥300,000.00",
//     address: "New York No. 1 Lake Park",
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     money: "￥1,256,000.00",
//     address: "London No. 1 Lake Park",
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     money: "￥120,000.00",
//     address: "Sydney No. 1 Lake Park",
//   },
//   {
//     key: "4",
//     name: "Joe Black",
//     money: "￥120,000.00",
//     address: "Sydney No. 1 Lake Park",
//   },
//   {
//     key: "5",
//     name: "Joe Black",
//     money: "￥120,000.00",
//     address: "Sydney No. 1 Lake Park",
//   },
//   {
//     key: "6",
//     name: "Joe Black",
//     money: "￥120,000.00",
//     address: "Sydney No. 1 Lake Park",
//   },
//   {
//     key: "7",
//     name: "Joe Black",
//     money: "￥120,000.00",
//     address: "Sydney No. 1 Lake Park",
//   },
//   {
//     key: "8",
//     name: "Joe Black",
//     money: "￥120,000.00",
//     address: "Sydney No. 1 Lake Park",
//   },
//   {
//     key: "9",
//     name: "Joe Black",
//     money: "￥120,000.00",
//     address: "Sydney No. 1 Lake Park",
//   },
//   {
//     key: "10",
//     name: "Joe Black",
//     money: "￥120,000.00",
//     address: "Sydney No. 1 Lake Park",
//   },
//   {
//     key: "11",
//     name: "Joe Black",
//     money: "￥120,000.00",
//     address: "Sydney No. 1 Lake Park",
//   },
// ];

// const App = () => {
//   const {
//     fetchLoans,
//     loans,
//     meta,
//     currentPage,
//     search,
//     setStatus,
//     status,
//     setSearch,
//     exportToExcel,
//     exportLoading,
//     setDateRange,
//     applyForLoan,
//   } = loanStore();
//   const isLoading = loanStore((state) => state.isLoading);
//   const [loading, setLoading] = useState(true);
//   setTimeout(() => {
//     setLoading(false);
//   }, 3000);
//   return (
//     <Table
//       columns={columns}
//       dataSource={data}
//       pagination={5}
//       bordered
//       loading={{ spinning: loading, tip: "Loading.." }}
//     />
//   );
// };

// export default App;
