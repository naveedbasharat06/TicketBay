"use client"
import React, { useState } from "react";
import { CUSTOMMENU } from "../constants";
import Link from "next/link";
function Dashboard() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = () => {
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  return (
    <div>
      <div className="w-full h-10 bg-[#D3D3D3] flex items-center pl-2">
        <div className="top-5 left-5 cursor-pointer" onClick={openDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
      <div className="relative">
        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-white p-4 transform transition-transform ease-in-out shadow-md  bg-white ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between ">
            <h2 className="text-2xl font-bold mb-4">Drawer</h2>
            <div
              className="text-right cursor-pointer mt-[5px]"
              onClick={closeDrawer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div>
            {CUSTOMMENU.map((item) => {
              return (
                <div className=" mb-[10px]" key={item.id}>
                 <Link href={item.menu!="Home"?"/"+item.menu:"/"} className="cursor-pointer" onClick={()=>setDrawerOpen(false)}>{item.menu}</Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
