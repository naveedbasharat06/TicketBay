import React from "react";
import DashboardHeader from "@/components/dashboard";
import EventCetegory from "@/components/dashboard/eventCetegory";

function index() {
  return (
    <div>
      <DashboardHeader />
      <div className="mt-5">
        <EventCetegory />
      </div>
    </div>
  );
}

export default index;
