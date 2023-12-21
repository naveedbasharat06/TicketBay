import React, { useState, useEffect } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/defaultComponents/header";
import Footer from "@/components/defaultComponents/footer";
import { Provider } from "mobx-react";
import bookingsStore from "@/store/bookings.store";
import usersStore from "@/store/users.store";
import Store from "@/store/lookups.store";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import Loading from "@/components/defaultComponents/loading";
import Router from "next/router";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SidebarLayout from "@/components/dashboard/customComponents/sidebar";
export const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const [isFooterVisible, setIsFooterVisible] = useState(true);
  const router = useRouter();
  const { pathname } = router;
  const excludedPaths = ["/login", "/signup", "/dashboard"];
  useEffect(() => {
    // Check if the current pathname is in the excludedPaths array
    if (excludedPaths.includes(pathname)) {
      setIsFooterVisible(false);
    } else {
      setIsFooterVisible(true);
    }
  }, [pathname]);

  const [loading, setLoading] = React.useState(false);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);
    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);
    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <div className={`${!pathname.includes("/dashboard") && "pl-8 pr-8"}`}>
      <QueryClientProvider client={queryClient}>
        {!pathname.startsWith("/dashboard") && <Header></Header>}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            key={router.route}
          >
            <div>
              <Provider
                bookingsStore={bookingsStore}
                usersStore={usersStore}
                Store={Store}
              >
                {loading && <Loading />}
                {pathname.startsWith("/dashboard") ? (
                  <SidebarLayout>
                    <Component {...pageProps} />
                  </SidebarLayout>
                ) : (
                  <div>
                    <Component {...pageProps} />
                  </div>
                )}
              </Provider>
            </div>
          </motion.div>
        </AnimatePresence>
        {isFooterVisible && !pathname.startsWith("/dashboard")&& (
          <div className="mt-10">
            <Footer />
          </div>
        )}
        <Toaster position="bottom-right" reverseOrder={false} />
        <motion.div
          className="fixed top-0 left-0 right-0 h-[1px] bg-red-500 origin-left z-50"
          style={{ scaleX: scrollYProgress }}
        />
      </QueryClientProvider>
    </div>
  );
}
