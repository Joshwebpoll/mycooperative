"use client";

import apiClient from "@/lib/axios";
import { useState } from "react";

export default function Joshmani() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Example login logic (replace with API call)
  //   console.log("Logging in:", { email, password });

  //   // You could use fetch or axios to POST to your backend here
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      // Get CSRF token
      apiClient
        .get("/sanctum/csrf-cookie", {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          apiClient
            .post(
              "/login",
              { email, password },
              {
                headers: {
                  "X-Requested-With": "XMLHttpRequest",
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "http://localhost:3000",
                },
              }
            )
            .then((response) => {
              console.log("Login successful!", response.data);
            })
            .catch((error) => {
              console.log(error.response?.data?.message);
            });
        })
        .catch((error) => {
          console.log(error.response?.data?.message);
        });
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            //value={password}
            // onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}
