import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/defaultComponents/header";
import Footer from "@/components/defaultComponents/footer";
import { Provider } from "mobx-react";
import bookingsStore from "@/store/bookings.store";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header></Header>
      <Provider bookingsStore={bookingsStore}>
        <Component {...pageProps} />
      </Provider>
      <div className="mt-10">
        <Footer />
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}
