import Nav from "@/components/Nav";
import Banner from "@components/Banner";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Stadworks",
  description: "porfolio website of stadworks",
};
const layout = ({ children }: any) => {
  return (
    <html lang="en">
      <body className={`${montserrat.className} overflow-x-hidden`}>
        <Nav />
        {children}
        <Banner />
      </body>
    </html>
  );
};

export default layout;
