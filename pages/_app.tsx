import React, { useState, useEffect } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/defaultComponents/header";
import Footer from "@/components/defaultComponents/footer";
import { Provider } from "mobx-react";
import bookingsStore from "@/store/bookings.store";
import usersStore from "@/store/users.store";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [isFooterVisible, setIsFooterVisible] = useState(true);
  const router = useRouter();
  const { pathname } = router;
  const excludedPaths = ["/login", "/signup"];
  useEffect(() => {
    // Check if the current pathname is in the excludedPaths array
    if (excludedPaths.includes(pathname)) {
      setIsFooterVisible(false);
    } else {
      setIsFooterVisible(true);
    }
  }, [pathname]);

  return (
    <div>
      <Header></Header>
      <Provider bookingsStore={bookingsStore} usersStore={usersStore}>
        <Component {...pageProps} />
      </Provider>
      {isFooterVisible &&(
        <div className="mt-10">
          <Footer />
        </div>
      )}
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}
