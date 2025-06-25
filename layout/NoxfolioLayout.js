"use client";
import { noxfolioUtilits } from "@/utility";
import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

const NoxfolioLayout = ({
  children,
}) => {
  useEffect(() => {
    noxfolioUtilits.animaiton();
  }, []);

  return (
    <div className="page-wrapper">
      {children}
    </div>
  );
};
export default NoxfolioLayout;
