"use client";

import CustomErrorMessage from "@/components/errorMessage/errorMessage";
import { Formik } from "formik";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  InterestValidationSchema,
  ReferrslValidationSchema,
} from "./schemaValidation/validation";
import apiClient from "@/lib/axios";
import useSWR from "swr";
import { Skeleton } from "@/components/ui/skeleton";
import interestStore from "../adminStore/interestStore";
import Loading from "@/components/loading_spinner/loading";
import { toast } from "sonner";

const Percentage = () => {
  const isCreateLoading = interestStore((state) => state.isCreateLoading);
  const isCreateRefLoading = interestStore((state) => state.isCreateRefLoading);
  const updateInterest = interestStore((state) => state.updateInterest);
  const updateReferral = interestStore((state) => state.updateReferral);

  const fetcher = (url) => apiClient.get(url).then((res) => res.data.reward);
  const fetchInterest = (url) =>
    apiClient.get(url).then((res) => res.data.interest);
  const { data, isLoading, mutate, error } = useSWR(
    "/api/admin/reward",
    fetcher
  );

  const { data: interest, isLoading: loading } = useSWR(
    "/api/admin/get_interest",
    fetchInterest
  );

  if (loading) {
    return (
      <div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div>
            <div>
              <Skeleton className="h-[400px]   bg-[#e1e6f0]" />
            </div>
          </div>
          <div>
            <div>
              <Skeleton className="h-[400px]   bg-[#e1e6f0]" />
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
          <div className="rounded  bg-white p-5 mb-5 shadow-xl">
            <Formik
              initialValues={{
                interest: interest?.interest_rate || "",
                max_amount: interest?.max_amount || "",
                min_amount: interest?.min_amount || "",
              }}
              validationSchema={InterestValidationSchema}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  //resetForm();
                  await updateInterest(values, interest);
                } catch (error) {
                  // toast.error(error);
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
                    <h2>Interest Rate</h2>
                  </div>
                  <div className="mb-3 relative">
                    <Label htmlFor="interest" className="text-[14px] mb-1">
                      Interest Percentage
                    </Label>
                    <Input
                      type="number"
                      id="interest"
                      placeholder="Interest Percentage"
                      value={values.interest}
                      onChange={handleChange}
                    />

                    <CustomErrorMessage name="interest" />
                  </div>
                  <div className="mb-3 relative">
                    <Label htmlFor="new_password" className="text-[14px] mb-1">
                      Minimum Amount
                    </Label>
                    <Input
                      type="number"
                      id="min_amount"
                      placeholder="Minimum Amount"
                      value={values.min_amount}
                      onChange={handleChange}
                    />

                    <CustomErrorMessage name="min_amount" />
                  </div>
                  <div className="mb-3 relative">
                    <Label htmlFor="interest" className="text-[14px] mb-1">
                      Maximum Amount
                    </Label>
                    <Input
                      type="number"
                      id="max_amount"
                      placeholder="Max Amount"
                      value={values.max_amount}
                      onChange={handleChange}
                    />

                    <CustomErrorMessage name="max_amount" />
                  </div>

                  <div className="mb-3">
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isCreateLoading ? <Loading /> : "Update Interest"}
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
        <div>
          <div className="rounded  bg-white p-5 mb-5 shadow-xl">
            <Formik
              initialValues={{
                reward_percent: data?.referral_reward_percent || "",
                max_amount: data?.max_amount || "",
                min_amount: data?.min_amount || "",
              }}
              validationSchema={ReferrslValidationSchema}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  await updateReferral(values, data);
                } catch (error) {
                  console.log(error);
                } finally {
                  setSubmitting(false);
                }
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
                    <h2>Referral Reward</h2>
                  </div>
                  <div className="mb-3 relative">
                    <Label htmlFor="interest" className="text-[14px] mb-1">
                      Reward Percentage
                    </Label>
                    <Input
                      type="number"
                      id="reward_percent"
                      placeholder="Reward Percentage"
                      value={values.reward_percent}
                      onChange={handleChange}
                    />

                    <CustomErrorMessage name="reward_percent" />
                  </div>
                  <div className="mb-3 relative">
                    <Label htmlFor="min_amount" className="text-[14px] mb-1">
                      Minimum Amount
                    </Label>
                    <Input
                      type="number"
                      id="min_amount"
                      placeholder="Minimum Amount"
                      value={values.min_amount}
                      onChange={handleChange}
                    />

                    <CustomErrorMessage name="min_amount" />
                  </div>
                  <div className="mb-3 relative">
                    <Label htmlFor="max_amount" className="text-[14px] mb-1">
                      Maximum Amount
                    </Label>
                    <Input
                      type="number"
                      id="max_amount"
                      placeholder="Max Amount"
                      value={values.max_amount}
                      onChange={handleChange}
                    />

                    <CustomErrorMessage name="max_amount" />
                  </div>

                  <div className="mb-3">
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isCreateRefLoading ? <Loading /> : "Update Reward"}
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

export default Percentage;
