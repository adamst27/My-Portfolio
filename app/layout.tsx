import Nav from "@/components/Nav";
import Progress from "@components/Progress";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "STAD",
  description: "Portfolio of STAD, a full-stack NextJS developer",
};
const layout = ({ children }: any) => {
  return (
    <html lang="en">
      <body className={`${montserrat.className} overflow-x-hidden bg-black`}>
        <Progress />
        <Nav />
        {children}
      </body>
    </html>
  );
};

export default layout;
