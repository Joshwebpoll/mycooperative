import React, { useState, useRef, useEffect } from "react";
import { useFormikContext } from "formik";
import contributionStore from "../../adminStore/contributionStore";
import { Label } from "@/components/ui/label";

const options = [
  { value: "all", label: "All" }, // 👈 Add "All" option
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
  { value: "grape", label: "Grape" },
];

export default function MultiSelect({ name }) {
  const fetchUsers = contributionStore((state) => state.fetchUsers);
  const users = contributionStore((state) => state.users);
  const { setFieldValue, values } = useFormikContext();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const selected = values[name] || [];
  console.log(selected, "kksks");

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (value) => {
    console.log(values);
    if (value === "All") {
      setFieldValue(name, ["All"]);
    } else {
      let newValues = selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected.filter((v) => v !== "All"), value];

      setFieldValue(name, newValues);
    }
  };

  const allUsers = [{ id: "all", email: "All" }, ...users];
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isSelected = (value) => selected.includes(value);
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="relative w-full mb-4" ref={dropdownRef}>
      <Label className="block text-sm font-medium text-gray-700 mb-2">
        Select Users (You can either send to specific email or all users buy
        checking the all box)
      </Label>

      <div
        className="border border-gray-300 rounded-md p-2 bg-white cursor-pointer min-h-[42px] flex flex-wrap gap-1"
        onClick={toggleDropdown}
      >
        {selected.length > 0 ? (
          selected.map((val) => (
            <span
              key={val}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
            >
              {val}
            </span>
          ))
        ) : (
          <span className="text-gray-400 text-sm">Select Users...</span>
        )}
      </div>

      {isOpen && (
        <ul className="absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded-md border border-gray-300 bg-white shadow-md">
          {allUsers.map((opt) => (
            <li
              key={opt.id}
              onClick={() => handleSelect(opt.email)}
              className={`px-4 py-2 cursor-pointer text-sm hover:bg-blue-100 ${
                isSelected(opt.email) ? "bg-blue-50 font-medium" : ""
              }`}
            >
              <input
                type="checkbox"
                checked={isSelected(opt.email)}
                readOnly
                className="mr-2"
              />
              {opt.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
