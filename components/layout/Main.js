import Banner from "../banner/Banner";
import Sidebar from "../sidebar/Sidebar";

import Link from "next/link";
import Suggested from "../suggested-universities/Suggested";
import Viewed from "../Viewed";
import Layout from "./Layout";

const Main = () => {
  return (
    <>
    <Layout />
    <div className="main">
      <div className="main-content">
        <Banner />
        <div className="apply-section">
          <div className="apply-section-inner">
            <div className="apply-section-left">
              <h1>I have already chosen my University...</h1>
              <p>If you know where to apply, you can continue with the application. </p>
            </div>
            <div className="apply-section-cta">
              <Link href="/applied">
                <a className="apply-now">Apply Now</a>
              </Link>
            </div>
          </div>
        </div>
        <Suggested />
        <Viewed />
      </div>
    </div>
    </>
  );
}

export default Main;
