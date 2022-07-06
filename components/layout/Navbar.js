import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoChevronDownSharp } from "react-icons/io5";

import Backdrop from "../Backdrop";
import notification from "../../data/notification-data.json";
import { FaBars } from "react-icons/fa";
const Navbar = ({ sideNavOpen }) => {

  // notification modal
  const [notificationModal, setNotificationModal] = useState(false);
  const notificationClose = () => {
    setNotificationModal(false);
  };

  // profile modal
  const [profileOpen, setProfileOpen] = useState(false);

  const profileClose = () => {
    setProfileOpen(false);
  }

  return (
    <div className="navbar">
      <div className="navbar__content">
        <Link href="/">
          <a className="navbar-brand">
            Migonest
          </a>
        </Link>
        <div className="navbar__content-right">
          <Backdrop onClick={notificationClose}>
            <div className="notification-wrapper">
              <button className="notification">
                <IoMdNotificationsOutline onClick={() => setNotificationModal(notificationModal => !notificationModal)} />
              </button>
              <div className={"notification-content" + (notificationModal ? " notification-content-active" : " notification-content-inactive")}>
                <div className="notification-content-wrapper">

                  {notification.map((item, index) => {
                    return (
                      <div className="notification-single" key={index}>
                        <Link href={item.path}>
                          <a>
                            <span className="notification-header">{item.title}</span>
                            <span className="secondary-text">{item.subtitle}</span>
                            <span className="secondary-text notification-time">Date: {item.date}</span>
                          </a>
                        </Link>
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>
          </Backdrop>
          <div className="profile-wrapper">
            <div className="profile">
              <Link href="/profile">
                <a className="profile-info"> <Image src="/images/profile/avatar.png" width="40" height="40px" alt="Image" /> <span className="profile-name">Raihana Chowdhury</span></a>
              </Link>
              <Backdrop onClick={profileClose}>
                <IoChevronDownSharp className="profile-chevron" onClick={() => setProfileOpen(profileOpen => !profileOpen)} />
              </Backdrop>
              <div className={"profile-content" + (profileOpen ? " profile-content-active" : " profile-content-inactive")}>
                <Link href="/profile">
                  <a>Profile</a>
                </Link>
                <Link href="/settings">
                  <a>Settings</a>
                </Link>
                <Link href="/help">
                  <a>Help</a>
                </Link>
                <Link href="/">
                  <a>Log Out</a>
                </Link>
              </div>
            </div>
          </div>
          <FaBars className="open-sidebar" onClick={sideNavOpen} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
