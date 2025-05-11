"use client";

import apiClient from "@/lib/axios";
import React, { useEffect, useState } from "react";
import { useAuthStore } from "../authStore/userAuthStore";

const Jude = () => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(false);

  const getme = async () => {
    try {
      setLoading(true);
      const res = await apiClient.get("/api/profile", {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          Accept: "application/json",
          "Content-Type": "application/json",
          // "XSRF-TOKEN": getCookie("XSRF-TOKEN"),
        },
        withCredentials: true,
        withXSRFToken: true,
      });
      console.log(res.data);

      setAuth(res.data.messages);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setAuth({});
      setLoading(false);
    }
  };
  useEffect(() => {
    getme();
  }, []);
  console.log(auth);
  // useEffect(() => {
  //   if (!auth) {
  //     router.push("/login");
  //   }
  // }, [auth, router]);
  // if (loading) {
  //   return (
  //     <div>
  //       <h1>Loading.....</h1>
  //     </div>
  //   );
  // }
  return (
    <div>
      <h1>Hello word</h1>
    </div>
  );
};

export default Jude;
