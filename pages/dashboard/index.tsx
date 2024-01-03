import React from "react";
import BrowsEvent from "@/components/dashboard/browsEvent";
import DashboardBookings from "@/components/dashboard/dashboardBookings";
import { useMedia } from "react-use";

function Dashboard() {
  const isSmallScreen = useMedia("(max-width: 600px)");
  const isMediumScreen = useMedia("(min-width: 601px) and (max-width: 1024px)");
  return (
    <div>
      <BrowsEvent />
      <div className={`mt-10 ${isSmallScreen||isMediumScreen?"pl-2 pr-2":""}`}>
        <DashboardBookings />
      </div>
    </div>
  );
}

export default Dashboard;
