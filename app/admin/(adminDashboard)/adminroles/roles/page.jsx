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

import { RolesColumns } from "./rolesColumns";
import adminRoleStore from "../../adminStore/adminroleStore";
import Modals from "@/components/standardModal/standardModal";
import { Formik } from "formik";
import { Label } from "@/components/ui/label";
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
  const fetchAllRole = adminRoleStore((state) => state.fetchAllRole);
  const roles = adminRoleStore((state) => state.roles);
  const addRole = adminRoleStore((state) => state.addRole);
  const addPerLoading = adminRoleStore((state) => state.addPerLoading);

  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(debouncedSearch);
      fetchAllRole(1, debouncedSearch, status);
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
    fetchAllRole(currentPage, search, status);
  }, []);
  useEffect(() => {
    fetchAllRole(1, debouncedSearch, status);
  }, [status]);

  const downloadExport = () => {
    exportToExcel();
  };
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="container mx-auto py-5 shadow rounded bg-white ">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-3 p-3 justify-end">
        <div className="w-[100%]">
          <Button onClick={() => setModalOpen(true)}>
            <Plus className="text-bold" /> Create
          </Button>
        </div>
      </div>
      <DataTables
        columns={RolesColumns}
        data={roles}
        fetchPage={fetchAllRole}
        meta={meta}
      />
      <Modals isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div>
          <Formik
            initialValues={{
              role_name: "",
            }}
            //validationSchema={LoginSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                await addRole(values, setModalOpen);
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
                    <Label htmlFor="role_name" className="text-[14px] mb-1">
                      Role Name
                    </Label>
                    <Input
                      name="role_name"
                      id="role_name"
                      type="text"
                      placeholder="Role name"
                      value={values.role_name}
                      onChange={handleChange}
                      autoComplete="false"
                    />
                    <CustomErrorMessage name="permission_name" />
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
