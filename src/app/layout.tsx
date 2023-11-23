"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header/header";
const inter = Inter({ subsets: ["latin"] });
import { motion, AnimatePresence } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="pt-12">
          <Header></Header>
          <div
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }} // Initial animation properties
              animate={{ opacity: 1, y: 0 }} // Animation properties when the component is rendered
              exit={{ opacity: 0, y: -20 }} // Animation properties when the component is removed
              transition={{ duration: 0.5 }} // Animation duration
            >
              <AnimatePresence>{children}</AnimatePresence>
            </motion.div>
          </div>
        </div>
      </body>
    </html>
  );
}
