import { DM_Sans, Inter } from "next/font/google";

import Preloader from "@/layout/Preloader";
import "@css/animate.min.css";
import "@css/bootstrap.min.css";
import "@css/flaticon.min.css";
import "@css/fontawesome-5.14.0.min.css";
import "@css/nice-select.min.css";
import "@css/slick.min.css";
import "@css/style.css";
import "./globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import SideBar from "@/layout/SideBar";
import { getWebsiteSetting, getSocial } from "@/lib/settingApi";
import NextTopLoader from 'nextjs-toploader';
/** google fonts */
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});
const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-dm_sans",
  display: "swap",
});
const setting = await getWebsiteSetting();
const social = await getSocial();
/** Font family */
const fontFamily = `${inter.variable} ${dm_sans.variable} `;

export const metadata = {
  title: {
    template:
      "Shiplujs - Explore My Amazing Web Wonderland!!",
    default:
     "Shiplujs - Explore My Amazing Web Wonderland!!",
  },
  description: "Shiplujs - Explore My Amazing Web Wonderland!!",
};

export default async function RootLayout({ children }) {

  return (
    <html lang="en" className={`${fontFamily} scroll-smooth`}>
      <body>
        <NextTopLoader crawl={true} color="#c9f31d" height={4} showSpinner={false} shadow="0 0 10px #2299DD,0 0 5px #2299DD" />
        <Header setting={setting} social={social} />
        <Preloader />
        <SideBar setting={setting} social={social} />
        {children}
        <Footer setting={setting} social={social} />
      </body>
    </html>
  );
}
