"use client";

// import React, { useEffect, useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@radix-ui/react-dropdown-menu";
// import { Button } from "@/components/ui/button";
// import Modal from "@/components/standardModal/standardModal";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import { Formik } from "formik";
// import loanStore from "@/app/admin/(adminDashboard)/adminStore/loanStore";
// export default function Homeme() {
//   const { users, fetchUsers } = loanStore();
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [search, setSearch] = useState("");
//   const [openx, setOpenx] = React.useState(false);
//   const [searchm, setSearchm] = useState("");
//    const [selected, setSelected] = useState(false);
//   const filteredItems = users.filter((item) =>
//     item.email.toLowerCase().includes(search.toLowerCase())
//   );
//   const filteredItemss = users.filter((item) =>
//     item.email.toLowerCase().includes(searchm.toLowerCase())
//   );
//   useEffect(() => {
//     fetchUsers();
//   }, []);
//   console.log(users);
//   return (
//     <main className="flex items-center justify-center min-h-screen">
//       <Button onClick={() => setModalOpen(true)}>Open Modal</Button>

//       <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
//         <Formik
//           initialValues={{
//             guarantor_user_id: "",
//             status: "",
//           }}
//           //validationSchema={LoginSchema}
//           enableReinitialize={true}
//           onSubmit={async (values, { setSubmitting }) => {
//             try {
//               console.log(values);
//             } catch (err) {
//               toast.error(err.msg);
//             }
//           }}
//         >
//           {({
//             values,
//             errors,
//             touched,
//             handleChange,
//             handleBlur,
//             handleSubmit,
//             isSubmitting,
//             setFieldValue,
//           }) => (
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <div className="mb-3">
//                   <Label htmlFor="email" className="text-[14px] mb-1">
//                     Loan Status
//                   </Label>
//                   <Select
//                     value={values.status}
//                     onValueChange={(val) => setFieldValue("status", val)}
//                   >
//                     <SelectTrigger className="w-[100%] ">
//                       <SelectValue placeholder="Status" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectGroup>
//                         <SelectLabel>Loan Status</SelectLabel>
//                         <SelectItem value="pending">Pending</SelectItem>
//                         <SelectItem value="disbursed">Disbursed</SelectItem>
//                         <SelectItem value="defaulted">Defaulted</SelectItem>
//                         <SelectItem value="completed">Completed</SelectItem>
//                         <SelectItem value="approved">Approved</SelectItem>
//                       </SelectGroup>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="w-full max-w-2xl mx-auto mb-3 ">
//                   <Label htmlFor="email" className="text-[14px] mb-1">
//                     Choose Guarantor
//                   </Label>
//                   <Command className="w-full  border border-gray-300">
//                     <CommandInput
//                       placeholder="Choose a Guarantor"
//                       value={searchm}
//                       onValueChange={(value) => {
//                         setSearchm(value);
//                         setOpenx(true);
//                       }}
//                       onFocus={() => setOpenx(true)}
//                       onBlur={() => setTimeout(() => setOpenx(false), 100)}
//                     />

//                     {openx && (
//                       <CommandList className="max-h-60 overflow-y-auto">
//                         {filteredItemss.length > 0 ? (
//                           <CommandGroup heading="Results">
//                             {filteredItemss.map((item, index) => (
//                               <CommandItem
//                                 key={index}
//                                 onSelect={() => {
//                                   setSearchm(item.email); // Set the input value to the selected item
//                                   setOpenx(false); // Optionally close the dropdown
//                                   setSelected(false); // Reset selected state when typing
//                                   setFieldValue("guarantor_user_id", item.id);
//                                   // setValue(item.email);
//                                 }}
//                               >
//                                 {item.email}
//                               </CommandItem>
//                             ))}
//                           </CommandGroup>
//                         ) : (
//                           <CommandEmpty>No results found.</CommandEmpty>
//                         )}
//                       </CommandList>
//                     )}
//                   </Command>
//                 </div>
//                 <div className="flex justify-end">
//                   <Button
//                     type="submit"
//                     size="lg"
//                     className="me-3 rounded-1 cursor-pointer "
//                   >
//                     Save
//                   </Button>
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="cursor-pointer"
//                   >
//                     Save & Exit
//                   </Button>
//                 </div>
//               </div>
//             </form>
//           )}
//         </Formik>
//       </Modal>
//     </main>
//   );
// }
// import React, { useState, useRef, useEffect } from "react";
// import { Formik, Form } from "formik";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// } from "@/components/ui/popover";
// import loanStore from "@/app/admin/(adminDashboard)/adminStore/loanStore";

// export default function CommandForm() {
//   const options = [
//     { u: "Apple", value: "apple" },
//     { u: "Banana", value: "banana" },
//     { u: "Cherry", value: "cherry" },
//   ];
//   const { users, fetchUsers } = loanStore();
//   useEffect(() => {
//     fetchUsers();
//   }, []);
//   console.log(users);
//   return (
//     <div className="max-w-md mx-auto mt-10 p-4">
//       <Formik
//         initialValues={{ fruit: "" }}
//         onSubmit={(values) => {
//           alert("Selected Fruit: " + values.fruit);
//         }}
//       >
//         {({ values, setFieldValue }) => {
//           const [open, setOpen] = useState(false);
//           const triggerRef = useRef(null);
//           const [width, setWidth] = useState(0);

//           useEffect(() => {
//             if (triggerRef.current) {
//               setWidth(triggerRef.current.offsetWidth);
//             }
//           }, [triggerRef.current, open]);

//           const selectedLabel =
//             users.find((opt) => opt.name === values.fruit)?.name ||
//             "Select fruit";
//           console.log(selectedLabel);
//           return (
//             <Form className="space-y-4">
//               <label className="block text-sm font-medium">
//                 Choose a Fruit
//               </label>

//               <Popover open={open} onOpenChange={setOpen}>
//                 <PopoverTrigger asChild>
//                   <button
//                     type="button"
//                     ref={triggerRef}
//                     className="w-full border px-3 py-2 text-left text-sm rounded-md bg-white"
//                   >
//                     {selectedLabel}
//                   </button>
//                 </PopoverTrigger>
//                 <PopoverContent className="p-0" style={{ width }} align="start">
//                   <Command>
//                     <CommandInput placeholder="Search fruit..." />
//                     <CommandList>
//                       <CommandEmpty>No results found.</CommandEmpty>
//                       <CommandGroup>
//                         {users.map((option) => (
//                           <CommandItem
//                             key={option.id}
//                             value={option.name}
//                             onSelect={() => {
//                               setFieldValue("fruit", option.name);
//                               setOpen(false);
//                             }}
//                           >
//                             {option.name}
//                           </CommandItem>
//                         ))}
//                       </CommandGroup>
//                     </CommandList>
//                   </Command>
//                 </PopoverContent>
//               </Popover>

//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-600 text-white rounded"
//               >
//                 Submit
//               </button>
//             </Form>
//           );
//         }}
//       </Formik>
//     </div>
//   );
// }
// import React from "react";
// import { Formik, Form } from "formik";
// import MultiSelect from "../../admin/(adminDashboard)/bulkemail/multiSelectOption/multiSelect";

// export default function FormikMultiSelectForm() {
//   return (
//     <Formik
//       initialValues={{ fruits: [] }}
//       onSubmit={(values) => {
//         // alert("Selected values: " + values.fruits.join(", "));
//         console.log(values);
//       }}
//     >
//       <Form className="p-4">
//         <MultiSelect name="fruits" />
//         <button
//           type="submit"
//           className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Submit
//         </button>
//       </Form>
//     </Formik>
//   );
// }

// NotificationBell.jsx
import * as Popover from "@radix-ui/react-popover";
import { Bell } from "lucide-react";
import { useState } from "react";

const notifications = [
  { id: 1, message: "New comment on your post" },
  { id: 2, message: "Your order has been shipped" },
  { id: 3, message: "New follower: John Doe" },
];

export default function NotificationBell() {
  const [open, setOpen] = useState(false);

  return (
    <div>

    </div>
  );
}
