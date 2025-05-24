"use client";

import Modal from "@/components/adminModal/adminModalBox";
import CustomErrorMessage from "@/components/errorMessage/errorMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Formik } from "formik";
import { useState } from "react";

import * as Yup from "yup";
import repaymentStore from "../../adminStore/repaymentStore";
import Loading from "@/components/loading_spinner/loading";

const RepaymentvalidationSchema = Yup.object().shape({
  repayment_amount: Yup.number()
    .typeError("Repayment amount must be a number")
    .required("Repayment amount is required")
    .positive("Repayment amount must be greater than zero"),

  acct_number: Yup.string().required("Account number is required"),
  loan_number: Yup.string().required("Account number is required"),

  payment_method: Yup.string().required("Payment method is required"),

  status: Yup.string()
    .oneOf(
      ["pending", "completed", "processing"],
      'Status must be either "pending" or "completed"'
    )
    .required("Status is required"),
});

export function CreateRepayment({ setShowModal, showModal }) {
  const isCreatingloading = repaymentStore((state) => state.isCreatingloading);
  const addManualRepayment = repaymentStore(
    (state) => state.addManualRepayment
  );
  return (
    <div className="">
      {/* <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </button> */}

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Manual Loan Repayment"
      >
        <Formik
          initialValues={{
            repayment_amount: "",
            loan_number: "",
            acct_number: "",
            payment_method: "",
            status: "",
          }}
          // validationSchema={RepaymentvalidationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await addManualRepayment(values, setShowModal);
              console.log(values);
              // toast.success("Created contribution successfully");
            } catch (err) {
              console.log(err);
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
              <div>
                <div className="mb-3">
                  <Label htmlFor="loan_number" className="text-[14px] mb-1">
                    Loan Number
                  </Label>

                  <Input
                    type="text"
                    id="loan_number"
                    placeholder="Loan Reference Number"
                    onChange={handleChange}
                    value={values.loan_number}
                  />
                  <CustomErrorMessage name="loan_number" />
                </div>
                <div className="mb-3">
                  <Label
                    htmlFor="repayment_amount"
                    className="text-[14px] mb-1"
                  >
                    Repayment Amount
                  </Label>

                  <Input
                    type="text"
                    id="repayment_amount"
                    placeholder="Repayment Amount"
                    onChange={handleChange}
                    value={values.repayment_amount}
                    className=""
                  />
                  <CustomErrorMessage name="repayment_amount" />
                </div>
                <div className="mb-3">
                  <Label htmlFor="acct_number" className="text-[14px] mb-1">
                    Account Number/Membership Id
                  </Label>

                  <Input
                    type="text"
                    id="acct_number"
                    placeholder="Account Number or Membership Id"
                    onChange={handleChange}
                    value={values.acct_number}
                    className=""
                  />
                  <CustomErrorMessage name="acct_number" />
                </div>
                {/* <div className="mb-3">
                  <Label htmlFor="payment_method" className="text-[14px] mb-1">
                    Payment Method
                  </Label>

                  <Input
                    type="text"
                    id="payment_method"
                    placeholder="Payment Method"
                    onChange={handleChange}
                    value={values.payment_method}
                    className=""
                  />
                  <CustomErrorMessage name="payment_method" />
                </div> */}
                <div className="mb-3">
                  <Label htmlFor="payment_method" className="text-[14px] mb-1">
                    Payment Method
                  </Label>
                  <Select
                    value={values.payment_method}
                    onValueChange={(val) =>
                      setFieldValue("payment_method", val)
                    }
                    name="payment_method"
                  >
                    <SelectTrigger className="w-[100%] ">
                      <SelectValue placeholder="Payment Method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Payment Method</SelectLabel>
                        <SelectItem value="cash">Cash</SelectItem>
                        <SelectItem value="transfer">Transfer</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <CustomErrorMessage name="payment_method" />
                </div>
                <div className="mb-3">
                  <Label htmlFor="status" className="text-[14px] mb-1">
                    Repayment Status
                  </Label>
                  <Select
                    value={values.status}
                    onValueChange={(val) => setFieldValue("status", val)}
                    name="status"
                  >
                    <SelectTrigger className="w-[100%] ">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Status</SelectLabel>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="processing">Processing</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <CustomErrorMessage name="status" />
                </div>
              </div>
              <div className=" flex items-center justify-end mt-5 gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">
                  {isCreatingloading ? <Loading /> : "Create Repayment"}
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </Modal>
    </div>
  );
}
