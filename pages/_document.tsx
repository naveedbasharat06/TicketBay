import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/defaultComponents/header";
import Footer from "@/components/defaultComponents/footer";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="pl-8 pr-8">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
