import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 sm:ml-[280px] flex flex-col">
        <Header />
        <main className="flex-1  p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
