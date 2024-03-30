import Nav from "@/components/Nav";
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
      <body className={`${montserrat.className} overflow-x-hidden bg-black`}>
        <Nav />
        {children}
      </body>
    </html>
  );
};

export default layout;
