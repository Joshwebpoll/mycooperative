"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import Modal from "@/components/standardModal/standardModal";
import {Formik} from 'formik'
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

export function LoanApproval({ isModalOpen, setModalOpen }) {
  // const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="flex items-center justify-center min-h-screen">
      {/* <Button onClick={() => setModalOpen(true)}>Open Modal</Button> */}

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <Card className="w-[380px]">
          <CardHeader>
            <CardTitle>Loan Approval</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Formik
              initialValues={{
                member_id: singleCon.user_id || "",
                account_number: singleCon.account_number || "",
                contribution_type: singleCon.contribution_type || "",
                amount_contributed: singleCon.amount_contributed || "",
                status: singleCon.status || "",
                payment_method: singleCon.payment_method || "",
                contribution_date: "",
                contribution_deposit_type:
                  singleCon.contribution_deposit_type || "",
              }}
              //validationSchema={LoginSchema}
              enableReinitialize={true}
              onSubmit={handleSubmit}
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
                        Contribution Type
                      </Label>
                      <Select
                        value={values.contribution_type}
                        onValueChange={(val) =>
                          setFieldValue("contribution_type", val)
                        }
                      >
                        <SelectTrigger className="w-[100%] ">
                          <SelectValue placeholder="Contribution" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Contribution</SelectLabel>
                            <SelectItem value="savings">Savings</SelectItem>
                            <SelectItem value="shares">Shares</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="mb-3">
                      <Label
                        htmlFor="amount_contributed "
                        className="text-[14px] mb-1"
                      >
                        Amount Contributed
                      </Label>

                      <Input
                        type="text"
                        id="amount_contributed"
                        placeholder="Amount Contributed"
                        value={values.amount_contributed}
                        onChange={handleChange}
                        className="py-5"
                      />
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </CardContent>
          <CardFooter>
            <Button className="mt-4" onClick={() => setModalOpen(false)}>
              Close
            </Button>{" "}
          </CardFooter>
        </Card>
      </Modal>
    </main>
  );
}
