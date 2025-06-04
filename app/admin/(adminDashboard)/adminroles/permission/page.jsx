"use client";

import { DataTables } from "@/components/tables/data-table";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";

import adminRoleStore from "../../adminStore/adminroleStore";
import { PermissionColumns } from "./permissionColumn";

import { Formik } from "formik";
import { Label } from "@/components/ui/label";
import Modals from "@/components/standardModal/standardModal";
import CustomErrorMessage from "@/components/errorMessage/errorMessage";
import Loading from "@/components/loading_spinner/loading";

export default function AdminRolePage() {
  const {
    meta,
    currentPage,
    search,
    setStatus,
    status,
    setSearch,
    exportToExcel,
    exportLoading,
  } = adminRoleStore();
  const fetchAllPermission = adminRoleStore(
    (state) => state.fetchAllPermission
  );
  const permissions = adminRoleStore((state) => state.permissions);
  const addPermission = adminRoleStore((state) => state.addPermission);
  const addPerLoading = adminRoleStore((state) => state.addPerLoading);
  const fetchAllRoleWithOutPagination = adminRoleStore(
    (state) => state.fetchAllRoleWithOutPagination
  );
  const allRolesPag = adminRoleStore((state) => state.allRolesPag);
  useEffect(() => {
    fetchAllRoleWithOutPagination();
  }, []);

  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(debouncedSearch);
      fetchAllPermission(1, debouncedSearch, status);
    }, 500); // 500ms delay

    return () => clearTimeout(handler); // cleanup previous timer
  }, [debouncedSearch]);

  const handleSearchChange = (e) => {
    setDebouncedSearch(e.target.value);
  };
  const handleStatusChange = (value) => {
    setStatus(value == "all" ? "" : value);
  };
  useEffect(() => {
    fetchAllPermission(currentPage, search, status);
  }, []);
  useEffect(() => {
    fetchAllPermission(1, debouncedSearch, status);
  }, [status]);

  const downloadExport = () => {
    exportToExcel();
  };
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="container mx-auto py-5 shadow rounded bg-white ">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-3 p-3">
        <div className="w-[100%]">
          <Input
            type="text"
            placeholder="Search contribution..."
            value={debouncedSearch}
            onChange={handleSearchChange}
          />
        </div>

        <div className="w-[100%]">
          <Button className="w-full" onClick={() => setModalOpen(true)}>
            <Plus className="text-bold" /> Create
          </Button>
        </div>
      </div>
      <DataTables
        columns={PermissionColumns}
        data={permissions}
        fetchPage={fetchAllPermission}
        meta={meta}
      />

      <Modals isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div>
          <Formik
            initialValues={{
              permission_name: "",
              role: "",
            }}
            //validationSchema={LoginSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                await addPermission(values, setModalOpen);
                console.log(values);
              } catch (err) {
                toast.error(err.msg);
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
                <div>
                  <div className="mb-5">
                    <Label htmlFor="email" className="text-[14px] mb-1">
                      Permission Name
                    </Label>
                    <Input
                      name="permission_name"
                      id="permission_name"
                      type="text"
                      placeholder="Permission name"
                      value={values.permission_name}
                      onChange={handleChange}
                      autoComplete="false"
                    />
                    <CustomErrorMessage name="permission_name" />
                  </div>

                  <div className="mb-3">
                    <Label htmlFor="roles" className="text-[14px] mb-1">
                      Roles
                    </Label>
                    <Select
                      value={values.role} // Ensure string for matching
                      onValueChange={(val) => setFieldValue("role", val)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        {allRolesPag.map((data) => (
                          <SelectItem key={data.id} value={data.name}>
                            {data.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <CustomErrorMessage name="role" />
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      size="lg"
                      className="me-3 rounded-1 cursor-pointer "
                    >
                      {addPerLoading ? <Loading /> : "Save"}
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </Modals>
    </div>
  );
}
