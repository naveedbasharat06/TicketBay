import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/defaultComponents/header";
import Footer from "@/components/defaultComponents/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header></Header>
      <Component {...pageProps} />
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
