"use client";

import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import Modal from "@/components/standardModal/standardModal";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Form, Formik } from "formik";
import loanStore from "../../adminStore/loanStore";

export default function ApproveLoans({ isModalOpen, setModalOpen }) {
  const { users, fetchUsers } = loanStore();
  //   const [isModalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [openx, setOpenx] = React.useState(false);
  const [searchm, setSearchm] = useState("");
  const [selected, setSelected] = useState(false);
  const filteredItems = users.filter((item) =>
    item.email.toLowerCase().includes(search.toLowerCase())
  );
  const filteredItemss = users.filter((item) =>
    item.email.toLowerCase().includes(searchm.toLowerCase())
  );
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(searchm);
  const options = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ];
  return (
    // <main className="flex items-center justify-center min-h-screen">

    <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
      {/* <Formik
        initialValues={{
          guarantor_user_id: "",
          status: "",
          fruit: "",
        }}
        //validationSchema={LoginSchema}
        enableReinitialize={true}
        // onSubmit={async (values, setFieldValue, { setSubmitting }) => {
        //   const [open, setOpen] = useState(false);
        //     const triggerRef = useRef(null);
        //     const [width, setWidth] = useState(0);
        //     useEffect(() => {
        //       if (triggerRef.current) {
        //         setWidth(triggerRef.current.offsetWidth);
        //       }
        //     }, [triggerRef.current, open]);

        //     const selectedLabel =
        //       users.find((opt) => opt.email === values.fruit)?.label ||
        //       "Select fruit";
        //   try {
            

          
        //     console.log(values);
        //   } catch (err) {
        //     // toast.error(err.msg);
        //   }
        // }}
        
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <div className="mb-3">
                <Label htmlFor="email" className="text-[14px] mb-1">
                  Loan Status
                </Label>
                <Select
                  value={values.status}
                  onValueChange={(val) => setFieldValue("status", val)}
                >
                  <SelectTrigger className="w-[100%] ">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Loan Status</SelectLabel>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="disbursed">Disbursed</SelectItem>
                      <SelectItem value="defaulted">Defaulted</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full max-w-2xl mx-auto mb-3 ">
                <Label htmlFor="email" className="text-[14px] mb-1">
                  Choose Guarantor
                </Label>

                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      ref={triggerRef}
                      className="w-full border px-3 py-2 text-left text-sm rounded-md bg-white"
                    >
                      {selectedLabel}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="p-0"
                    style={{ width }}
                    align="start"
                  >
                    <Command>
                      <CommandInput placeholder="Search fruit..." />
                      <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                          {options.map((option) => (
                            <CommandItem
                              key={option.email}
                              value={option.email}
                              onSelect={() => {
                                setFieldValue("fruit", option.email);
                                setOpen(false);
                              }}
                            >
                              {option.email}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>

                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Submit
                </button>
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  size="lg"
                  className="me-3 rounded-1 cursor-pointer "
                >
                  Save
                </Button>
                <Button size="lg" variant="outline" className="cursor-pointer">
                  Save & Exit
                </Button>
              </div>
            </div>
          </form>
        )}
      </Formik> */}

      <Formik
        initialValues={{ email: "", status: "" }}
        onSubmit={(values) => {
          alert("Selected Fruit: " + values.email);
        }}
      >
        {({ values, setFieldValue, handleChange, handleSubmit }) => {
          const [open, setOpen] = useState(false);
          const triggerRef = useRef(null);
          const [width, setWidth] = useState(0);

          useEffect(() => {
            if (triggerRef.current) {
              setWidth(triggerRef.current.offsetWidth);
            }
          }, [triggerRef.current, open]);

          const selectedLabel =
            users.find((opt) => opt.email === values.email)?.email ||
            "Select fruit";

          return (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="mb-3">
                <Label htmlFor="status" className="text-[14px] mb-1">
                  Status
                </Label>

                <Input
                  type="text"
                  id="status"
                  placeholder="Amount Contributed"
                  value={values.status}
                  onChange={handleChange}
                  className="py-5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Choose a Fruit
                </label>

                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      ref={triggerRef}
                      className="w-full border px-3 py-2 text-left text-sm rounded-md bg-white"
                    >
                      {selectedLabel}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="p-0"
                    style={{ width }}
                    align="start"
                  >
                    <Command>
                      <CommandInput placeholder="Search fruit..." />
                      <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                          {users.map((option) => (
                            <CommandItem
                              key={option.email}
                              value={option.email}
                              onSelect={() => {
                                setFieldValue("fruit", option.email);
                                setOpen(false);
                              }}
                            >
                              {option.email}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    </Modal>
  );
}
