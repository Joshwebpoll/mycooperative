// components/Modal.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import React from "react";

export default function Modals({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-10 left-1/2 -translate-x-1/2 z-50 bg-white p-6 rounded-xl max-w-sm sm:max-w-md md:max-w-md lg:max-w-md w-full "
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div className="mt-4">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
