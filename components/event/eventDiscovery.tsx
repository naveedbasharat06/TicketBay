import React, { useState, useEffect } from "react";
import { eventsDropDown, eventData, EventType } from "@/constants";
import EventCard from "../landingPage/components/eventCard";
import Pagination from "./customComponents/customPagination";
import { useMedia } from "react-use";
import { useRouter as useNavigation } from "next/navigation";

function EventDiscovery() {
  const isSmallScreen = useMedia("(max-width: 600px)");
  const [activeTab, setActiveTab] = useState(0);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState<EventType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage, setEventsPerPage] = useState(5);
  const [activeFilter, setActiveFilter] = useState(1);
  const navigation = useNavigation();
  const applySortingAndFiltering = () => {
    let sortedEvents = [];
    // Apply sorting
    if (activeTab !== 0) {
      sortedEvents = [...eventData].sort(
        (eventA, eventB) => eventA.startingFrom - eventB.startingFrom
      );
    } else {
      sortedEvents = sortUpcomingEvents(eventData);
    }

    // Apply filtering
    let filteredEvents = sortedEvents;
    switch (activeFilter) {
      case 2:
        filteredEvents = sortedEvents.filter(
          (item: any) => item.eventType === "Featured"
        );
        break;
      case 3:
        filteredEvents = sortedEvents.filter(
          (item: any) => item.eventType === "Festival"
        );
        break;
      case 4:
        filteredEvents = sortedEvents.filter(
          (item: any) => item.eventType === "Party"
        );
        break;
      default:
        // If no matching case is found, use the original sortedEvents
        filteredEvents = sortedEvents;
        break;
    }
    // Update state
    setFilteredEvents(filteredEvents);
  };

  useEffect(() => {
    applySortingAndFiltering();
    isSmallScreen ? setEventsPerPage(5) : setEventsPerPage(12);
  }, [activeTab, isSmallScreen, activeFilter]);

  // Only apply filters when the filter changes
  useEffect(() => {
    if (activeFilter > 1) {
      applySortingAndFiltering();
    }
  }, [activeFilter]);

  const searchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchQuery(newValue);
    if (newValue === "") {
      setCurrentPage(1);
      applySortingAndFiltering();
    } else {
      // Filter events based on the search query
      const filtered = eventData.filter((event) =>
        event.eventdesc.toLowerCase().includes(newValue.toLowerCase())
      );
      setFilteredEvents(filtered);
    }
  };

  const sortUpcomingEvents = (events: any) => {
    const currentDate = new Date();
    const currentMonth = currentDate
      .toLocaleString("default", { month: "short" })
      .toUpperCase();
    const currentDay = currentDate.getDate();

    return events.filter((event: any) => {
      const eventMonth = event.dateMonth;
      const eventDay = parseInt(event.dateDay);

      // Compare months
      if (eventMonth > currentMonth) {
        return true;
      } else if (eventMonth === currentMonth) {
        // If months are the same, compare days
        return eventDay >= currentDay;
      } else {
        return false;
      }
    });
  };

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="mt-[80px] lg:flex md:flex justify-between items-center">
        <div>
          <span className="lg:text-[48px] text-[30px] font-[600] text-[#133142]">
            Discover Events
          </span>
        </div>
      </div>

      <div className="lg:flex md:flex justify-between mt-[30px] ">
        <div className="flex gap-10 items-center">
          <div>
            <span
              className={`text-[14px] font-[500] cursor-pointer ${
                activeTab === 0 ? "text-[#FD2F09]" : "text-[#979797]"
              }`}
              onClick={() => {
                setActiveTab(0);
              }}
            >
              Upcoming
            </span>
            {activeTab === 0 && (
              <hr className="bg-[#FD2F09] h-[3px] lg:relative md:relative top-[17px]" />
            )}
          </div>
          <div>
            <span
              className={`text-[14px] font-[500] cursor-pointer ${
                activeTab === 1 ? "text-[#FD2F09]" : "text-[#979797]"
              }`}
              onClick={() => {
                setActiveTab(1);
              }}
            >
              Lowest price
            </span>
            {activeTab === 1 && (
              <hr className="bg-[#FD2F09] h-[3px] lg:relative md:relative top-[17px]" />
            )}
          </div>
        </div>
        <div
          className={`border border-[#E3F5FF] p-3 rounded-[4px] flex ${
            isSmallScreen && "mt-2"
          }`}
        >
          <div className="flex gap-5">
            <img src="assets/images/search.svg" alt="search" />
            <input
              type="text"
              placeholder="Events title or keyword"
              className="outline-none"
              value={searchQuery}
              onChange={searchInputChange} // Listen to input changes
            />
          </div>
          <div className="flex">
            <hr className="border  w-[1px] h-[100%]" />
            <div className="ml-[30px] flex gap-5">
              <span className="text-[14px] font-[500] text-[#797979]">
                Filters
              </span>
              <img
                src="assets/images/filter.svg"
                alt="filter"
                className="cursor-pointer"
                onClick={() => {
                  isDropdownVisible
                    ? setIsDropdownVisible(false)
                    : setIsDropdownVisible(true);
                }}
              />
            </div>
            {isDropdownVisible && (
              <div className="absolute right-8 mt-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 ">
                  {eventsDropDown.map((item) => (
                    <li
                      className="cursor-pointer"
                      onClick={() => {
                        setIsDropdownVisible(false);
                        setActiveFilter(item.id);
                      }}
                    >
                      <span
                        className={`block px-4 py-2 hover:bg-[#FD2F09] hover:text-[white] dark:hover:bg-gray-600 dark:hover:text-white ${
                          activeFilter !== 1 &&
                          activeFilter === item.id &&
                          "bg-[#FD2F09] text-[white]"
                        }`}
                      >
                        {item.menu}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr className="h-[2px] mt-1 bg-[#E3F5FF]" />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5">
        {currentEvents.map((event) => (
          <div
            className="cursor-pointer"
            onClick={() => {
              navigation.push(`events/checkout?id=${event.id}`);
            }}
          >
            <EventCard event={event} />
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredEvents.length / eventsPerPage)}
        onPageChange={paginate}
      />
    </div>
  );
}

export default EventDiscovery;
