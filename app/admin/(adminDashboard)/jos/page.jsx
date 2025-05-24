// "use client";

// // import Modal from "@/components/adminModal/adminModalBox";
// // import CustomErrorMessage from "@/components/errorMessage/errorMessage";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectGroup,
// //   SelectItem,
// //   SelectLabel,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";
// // import { Formik } from "formik";
// // import { useState } from "react";

// // export default function ExamplePage() {
// //   const [showModal, setShowModal] = useState(false);

// //   return (
// //     <div className="p-10">
// //       <button
// //         className="bg-blue-600 text-white px-4 py-2 rounded-lg"
// //         onClick={() => setShowModal(true)}
// //       >
// //         Open Modal
// //       </button>

// //       <Modal
// //         isOpen={showModal}
// //         onClose={() => setShowModal(false)}
// //         title="Manual Loan Repayment"
// //       >
// //         <Formik
// //           initialValues={{
// //             repayment_amount: "",
// //             acct_number: "",
// //             paymeent_method: "",
// //             status: "",
// //           }}
// //           //validationSchema={LoginSchema}
// //           onSubmit={async (values, { setSubmitting }) => {
// //             try {
// //               // await createLoan(values);
// //               // console.log(values);
// //               // toast.success("Created contribution successfully");
// //             } catch (err) {
// //               toast.error(err.msg);
// //             } finally {
// //               setSubmitting(false);
// //             }
// //           }}
// //         >
// //           {({
// //             values,
// //             errors,
// //             touched,
// //             handleChange,
// //             handleBlur,
// //             handleSubmit,
// //             isSubmitting,
// //             setFieldValue,
// //           }) => (
// //             <form>
// //               <div>
// //                 <div className="mb-3">
// //                   <Label
// //                     htmlFor="repayment_amount"
// //                     className="text-[14px] mb-1"
// //                   >
// //                     Payment Method
// //                   </Label>

// //                   <Input
// //                     type="text"
// //                     id="repayment_amount"
// //                     placeholder="Repayment Amount"
// //                     onChange={handleChange}
// //                     value={values.repayment_amount}
// //                     className=""
// //                   />
// //                   <CustomErrorMessage name="repayment_amount" />
// //                 </div>
// //                 <div className="mb-3">
// //                   <Label htmlFor="acct_number" className="text-[14px] mb-1">
// //                     Account Number/Membership Id
// //                   </Label>

// //                   <Input
// //                     type="text"
// //                     id="acct_number"
// //                     placeholder="Account Number or Membership Id"
// //                     onChange={handleChange}
// //                     value={values.acct_number}
// //                     className=""
// //                   />
// //                   <CustomErrorMessage name="acct_number" />
// //                 </div>
// //                 <div className="mb-3">
// //                   <Label htmlFor="paymeent_method" className="text-[14px] mb-1">
// //                     Payment Method
// //                   </Label>

// //                   <Input
// //                     type="text"
// //                     id="paymeent_method"
// //                     placeholder="Payment Method"
// //                     onChange={handleChange}
// //                     value={values.paymeent_method}
// //                     className=""
// //                   />
// //                   <CustomErrorMessage name="paymeent_method" />
// //                 </div>
// //                 <div className="mb-3">
// //                   <Label htmlFor="status" className="text-[14px] mb-1">
// //                     Repayment Status
// //                   </Label>
// //                   <Select
// //                     value={values.status}
// //                     onValueChange={(val) => setFieldValue("status", val)}
// //                     name="status"
// //                   >
// //                     <SelectTrigger className="w-[100%] ">
// //                       <SelectValue placeholder="Status" />
// //                     </SelectTrigger>
// //                     <SelectContent>
// //                       <SelectGroup>
// //                         <SelectLabel>Status</SelectLabel>
// //                         <SelectItem value="pending">Pending</SelectItem>
// //                         <SelectItem value="completed">Compeleted</SelectItem>
// //                         <SelectItem value="processing">Processing</SelectItem>
// //                       </SelectGroup>
// //                     </SelectContent>
// //                   </Select>
// //                   <CustomErrorMessage name="status" />
// //                 </div>
// //               </div>
// //             </form>
// //           )}
// //         </Formik>
// //       </Modal>
// //     </div>
// //   );
// // }
// import { useState, useEffect, useCallback } from "react";

// import { useRepayment } from "../repayment/hooks/fetchData";
// import { debounce } from "lodash";
// import { DataTables } from "@/components/tables/data-table";
// import { repaymentColumns } from "../repayment/repaymentColumns/repaymentColumns";
// import { Pagination } from "../repayment/hooks/pagination";

// export default function UsersPage() {
//   const [page, setPage] = useState(1);
//   const [searchInput, setSearchInput] = useState("");
//   const [search, setSearch] = useState("");
//   const [status, setStatus] = useState("");
//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");

//   const { repayments, pagination, isLoading } = useRepayment({
//     page,
//     search,
//     status,
//     from_date: fromDate,
//     to_date: toDate,
//   });
//   console.log(pagination);
//   const debouncedSearch = useCallback(
//     debounce((val) => {
//       setSearch(val);
//       setPage(1);
//     }, 500),
//     []
//   );

//   useEffect(() => {
//     debouncedSearch(searchInput);
//   }, [searchInput, debouncedSearch]);

//   useEffect(() => {
//     setPage(1);
//   }, [status, fromDate, toDate]);

//   return (
//     <div className="p-4 max-w-3xl mx-auto">
//       <DataTables
//         columns={repaymentColumns}
//         data={repayments}
//         meta={pagination}
//       />
//       <Pagination
//         currentPage={pagination?.current_page ?? 1}
//         lastPage={pagination?.last_page ?? 1}
//         onPageChange={(page) => setPage(page)}
//       />
//     </div>
//   );
// }
