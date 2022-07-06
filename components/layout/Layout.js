
import { useState } from "react";
import Head from "../Meta";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "./Navbar";


const Layout = ({ children }) => {

  const [openSidebar, setOpenSidebar] = useState(false);

  const sideNavOpen = () => {
    setOpenSidebar(openSidebar => !openSidebar)
  }

  return (
    <div className="wrapper">
      <Head />
      <div>
        <Navbar sideNavOpen={sideNavOpen} />
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        {children}
      </div>
    </div>
  );
}

export default Layout;
