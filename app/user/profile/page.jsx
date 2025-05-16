"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage, Formik } from "formik";
import { React, useEffect, useState } from "react";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

import { Check, ChevronsUpDown } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import profileStore from "../userStore/profileStore";
import Loading from "@/components/loading_spinner/loading";
import {
  bankDetailsSchema,
  passwordSchema,
  ProfileValidationSchema,
} from "@/components/profileValidation/profileValidation";
import CustomErrorMessage from "@/components/errorMessage/errorMessage";
import { format } from "date-fns";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

const Profilexx = () => {
  const getAllBanks = profileStore((state) => state.getAllBanks);
  const banks = profileStore((state) => state.banks);
  const loading = profileStore((state) => state.loading);
  const isCreating = profileStore((state) => state.isCreating);
  const verifyBanks = profileStore((state) => state.verifyBanks);
  const getAllAccountNumber = profileStore(
    (state) => state.getAllAccountNumber
  );
  const account = profileStore((state) => state.account);
  const getSingleUserUpdate = profileStore(
    (state) => state.getSingleUserUpdate
  );
  const personalUser = profileStore((state) => state.personalUser);
  const updateUserProfile = profileStore((state) => state.updateUserProfile);
  const isUpdating = profileStore((state) => state.isUpdating);
  const isUpdatingPassword = profileStore((state) => state.isUpdatingPassword);
  const updateUserPassword = profileStore((state) => state.updateUserPassword);
  const pageLoading = profileStore((state) => state.pageLoading);
  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [searchm, setSearchm] = useState("");
  const [openx, setOpenx] = useState(false);
  const [selected, setSelected] = useState(false);
  const [showPassword, setShowPassword] = useState({
    current: false,
    password: false,
    confirm: false,
  });
  const router = useRouter();

  useEffect(() => {
    getAllBanks();
  }, [getAllBanks]);
  useEffect(() => {
    getAllAccountNumber();
  }, [getAllAccountNumber]);
  useEffect(() => {
    getSingleUserUpdate();
  }, [getSingleUserUpdate]);

  console.log(personalUser);
  const filteredBanks = banks.filter((item) =>
    item.bank_name.toLowerCase().includes(search.toLowerCase())
  );

  if (pageLoading) {
    return (
      <div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div>
            <div>
              <Skeleton className="h-[600px]   bg-[#e1e6f0]" />
            </div>
          </div>
          <div className="mb-3">
            <div className="  mb-5">
              <Skeleton className="h-[250px]  bg-[#e1e6f0]" />
            </div>
            <div className=" ">
              <Skeleton className="h-[205px]  bg-[#e1e6f0]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div>
          <div className=" rounded  shadow-xl bg-white p-5">
            <Formik
              initialValues={{
                name: personalUser.name || "",
                surname: personalUser.surname || "",
                lastname: personalUser.lastname || "",
                username: personalUser.username || "",
                email: personalUser.email || "",
                phone_number: personalUser.phone_number || "",
                date_of_birth: personalUser.date_of_birth || "",
                country: personalUser.country || "",
                state: personalUser.state || "",
                address: personalUser.address || "",
                city: personalUser.city || "",
                gender: personalUser.gender || "",
              }}
              validationSchema={ProfileValidationSchema}
              onSubmit={(values, { setSubmitting }) => {
                // setTimeout(() => {
                //   alert(JSON.stringify(values, null, 2));
                //   setSubmitting(false);
                // }, 400);

                //setSubmitting(false);
                updateUserProfile(values);
                console.log(values);
              }}
              enableReinitialize={true}
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
                  <div className="mb-4">
                    <h2>Profile Update</h2>
                  </div>
                  <div className="mb-3">
                    <Label
                      htmlFor="amount_contributed "
                      className="text-[14px] mb-1"
                    >
                      First Name
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="First Name"
                      value={values.name}
                      onChange={handleChange}
                    />
                    <CustomErrorMessage name="name" />
                  </div>
                  <div className="mb-3">
                    <Label htmlFor="surname" className="text-[14px] mb-1">
                      Surname
                    </Label>
                    <Input
                      type="text"
                      id="surname"
                      placeholder="Surname"
                      value={values.surname}
                      onChange={handleChange}
                    />
                    <CustomErrorMessage name="surname" />
                  </div>
                  <div className="mb-3">
                    <Label
                      htmlFor="amount_contributed "
                      className="text-[14px] mb-1"
                    >
                      Last Name
                    </Label>
                    <Input
                      type="text"
                      id="lastname"
                      placeholder="Last Name"
                      value={values.lastname}
                      onChange={handleChange}
                    />
                    <CustomErrorMessage name="lastname" />
                  </div>
                  <div className="mb-3">
                    <Label
                      htmlFor="amount_contributed "
                      className="text-[14px] mb-1"
                    >
                      Email
                    </Label>
                    <Input
                      type="text"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    <CustomErrorMessage name="email" />
                  </div>
                  <div className="mb-3">
                    <Label
                      htmlFor="amount_contributed "
                      className="text-[14px] mb-1"
                    >
                      Username
                    </Label>
                    <Input
                      type="text"
                      id="username"
                      placeholder="Username"
                      value={values.username}
                      onChange={handleChange}
                    />
                    <CustomErrorMessage name="username" />
                  </div>
                  <div className="mb-3">
                    <Label
                      htmlFor="amount_contributed "
                      className="text-[14px] mb-1"
                    >
                      Country
                    </Label>
                    <Input
                      type="text"
                      id="country"
                      placeholder="Country"
                      value={values.country}
                      onChange={handleChange}
                    />
                    <CustomErrorMessage name="country" />
                  </div>
                  <div className="mb-3">
                    <Label
                      htmlFor="amount_contributed "
                      className="text-[14px] mb-1"
                    >
                      Phone Number
                    </Label>
                    <Input
                      type="text"
                      id="phone_number"
                      placeholder="Phone Number"
                      value={values.phone_number}
                      onChange={handleChange}
                    />
                    <CustomErrorMessage name="phone_number" />
                  </div>

                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4">
                    <div>
                      <div className="mb-3">
                        <Label
                          htmlFor="amount_contributed "
                          className="text-[14px] mb-1"
                        >
                          Address
                        </Label>
                        <Input
                          type="text"
                          id="address"
                          placeholder="Address"
                          value={values.address}
                          onChange={handleChange}
                        />
                        <CustomErrorMessage name="address" />
                      </div>
                    </div>
                    <div>
                      <div className="mb-3">
                        <Label
                          htmlFor="amount_contributed "
                          className="text-[14px] mb-1"
                        >
                          City
                        </Label>
                        <Input
                          type="text"
                          id="city"
                          placeholder="City"
                          value={values.city}
                          onChange={handleChange}
                        />
                        <CustomErrorMessage name="city" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4">
                    <div>
                      <div className="mb-3">
                        <Label
                          htmlFor="amount_contributed "
                          className="text-[14px] mb-1"
                        >
                          State
                        </Label>
                        <Input
                          type="text"
                          id="state"
                          placeholder="State"
                          value={values.state}
                          onChange={handleChange}
                        />
                        <CustomErrorMessage name="state" />
                      </div>
                    </div>
                    <div>
                      <div className="mb-3">
                        <Label
                          htmlFor="amount_contributed "
                          className="text-[14px] mb-1"
                        >
                          Gender
                        </Label>
                        <Select
                          value={values.gender}
                          onValueChange={(val) => setFieldValue("gender", val)}
                          name="gender"
                        >
                          <SelectTrigger className="w-[100%]">
                            <SelectValue placeholder="Select a Gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Gender</SelectLabel>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <CustomErrorMessage name="gender" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <Label htmlFor="date_of_birth" className="text-[14px] mb-1">
                      Date of Birth
                    </Label>
                    <Popover className="py-5">
                      <PopoverTrigger asChild className="py-5">
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[100%] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon />
                          {values.date_of_birth ? (
                            format(values.date_of_birth, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 py-5" align="start">
                        <Calendar
                          mode="single"
                          selected={values.date_of_birth}
                          onSelect={(date) =>
                            setFieldValue(
                              "date_of_birth",
                              date?.toISOString().split("T")[0]
                            )
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <CustomErrorMessage name="date_of_birth" />
                  </div>
                  <div className="mb-3">
                    <Button type="submit" className="w-full">
                      {isUpdating ? <Loading /> : "Update Profile"}
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
        <div className="mb-3">
          <div className="rounded shadow-xl bg-white p-5 mb-5">
            <Formik
              initialValues={{
                current_password: "",
                password: "",
                password_confirmation: "",
              }}
              validationSchema={passwordSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                  await updateUserPassword(values, router);
                  resetForm();
                } catch (error) {
                  toast.error(error);
                } finally {
                  setSubmitting(false);
                }
              }}
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
                  <div className="mb-4">
                    <h2>Change Password {isSubmitting}</h2>
                  </div>
                  <div className="mb-3 relative">
                    <Label
                      htmlFor="current_password"
                      className="text-[14px] mb-1"
                    >
                      Current Password (Old password)
                    </Label>
                    <Input
                      type={showPassword.current ? "text" : "password"}
                      id="current_password"
                      placeholder="Current Password"
                      value={values.current_password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword({
                          ...showPassword,
                          current: !showPassword.current,
                        })
                      }
                      className="absolute right-3 top-11 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      tabIndex={-1}
                    >
                      {showPassword.current ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                    <CustomErrorMessage name="current_password" />
                  </div>
                  <div className="mb-3 relative">
                    <Label htmlFor="new_password" className="text-[14px] mb-1">
                      New Password
                    </Label>
                    <Input
                      type={showPassword.password ? "text" : "password"}
                      id="password"
                      placeholder="New Password"
                      value={values.password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword({
                          ...showPassword,
                          password: !showPassword.password,
                        })
                      }
                      className="absolute right-3 top-11 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      tabIndex={-1}
                    >
                      {showPassword.password ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                    <CustomErrorMessage name="password" />
                  </div>
                  <div className="mb-3 relative">
                    <Label
                      htmlFor="confirm_password"
                      className="text-[14px] mb-1"
                    >
                      Confirm Password
                    </Label>
                    <Input
                      type={showPassword.confirm ? "text" : "password"}
                      id="password_confirmation"
                      placeholder="Confirm Password"
                      value={values.password_confirmation}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword({
                          ...showPassword,
                          confirm: !showPassword.confirm,
                        })
                      }
                      className="absolute right-3 top-11 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      tabIndex={-1}
                    >
                      {showPassword.confirm ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                    <CustomErrorMessage name="password_confirmation" />
                  </div>
                  <div className="mb-3">
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isUpdatingPassword ? <Loading /> : "Change Password"}
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
          <div className="rounded shadow-xl bg-white p-5">
            <Formik
              initialValues={{
                bank_name: account?.bank_name || "",
                bank_account_number: account?.bank_account_number || "",
                bank_account_name: account?.bank_account_name || "",
              }}
              validationSchema={bankDetailsSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  // alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
                verifyBanks(values);
                // setSubmitting(false);
                console.log(values);
              }}
              enableReinitialize={true}
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
                  <div className="mb-4">
                    <h2>Bank Details</h2>
                    <span className="text-[13.5px] ">
                      Bank Account Name (Firstname first - Please note that your
                      bank account name must match with your cooperative account
                      name)*
                    </span>
                  </div>
                  <div className="mb-3">
                    <Label htmlFor="bank_name" className="text-[14px] mb-1">
                      Bank Name
                    </Label>

                    <Command className="w-full  border border-gray-300">
                      <CommandInput
                        placeholder="Choose Banks"
                        value={search ? search : values.bank_name}
                        onValueChange={(value) => {
                          setSearch(value);
                          setOpen(true);
                        }}
                        onFocus={() => setOpen(true)}
                        onBlur={() => setTimeout(() => setOpen(false), 100)}
                      />

                      {open && (
                        <CommandList className="max-h-60 overflow-y-auto">
                          {filteredBanks.length > 0 ? (
                            <CommandGroup heading="Banks">
                              {filteredBanks.map((item, index) => (
                                <CommandItem
                                  key={index}
                                  onSelect={() => {
                                    setSearch(item.bank_name); // Set the input value to the selected item
                                    setOpen(false); // Optionally close the dropdown
                                    setSelected(false); // Reset selected state when typing
                                    setFieldValue("bank_name", item.bank_code);
                                    //  setValue(item.email);
                                  }}
                                >
                                  {item.bank_name}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          ) : (
                            <CommandEmpty>No results found.</CommandEmpty>
                          )}
                        </CommandList>
                      )}
                    </Command>

                    <CustomErrorMessage name="bank_name" />
                  </div>
                  <div className="mb-3">
                    <Label
                      htmlFor="bank_account_number"
                      className="text-[14px] mb-1"
                    >
                      Bank Account Name
                    </Label>
                    <Input
                      type="text"
                      id="bank_account_number"
                      placeholder="Bank Account Number"
                      value={values.bank_account_number}
                      onChange={handleChange}
                    />
                    <CustomErrorMessage name="bank_account_number" />
                  </div>
                  <div className="mb-3">
                    <Label
                      htmlFor="bank_account_name"
                      className="text-[14px] mb-1"
                    >
                      Bank Account Name
                    </Label>
                    <Input
                      type="text"
                      id="bank_account_name"
                      placeholder="Bank Account Name"
                      value={values.bank_account_name}
                      onChange={handleChange}
                    />
                    <CustomErrorMessage name="bank_account_name" />
                  </div>
                  <div className="mb-3">
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isCreating ? <Loading /> : "Update Bank"}
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilexx;
