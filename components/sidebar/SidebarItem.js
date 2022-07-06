import { useState } from "react";

import Link from "next/link";
import { IoChevronDownSharp } from "react-icons/io5";
import Backdrop from '../Backdrop';

import * as Icons from "react-icons/md";
const CustomFaIcon = ({ name }) => {
    const MdIcon = Icons[name];
    if (!MdIcon) return <p>Icon not found!</p>;

    return (
        <MdIcon />
    );
};


const SidebarItem = ({ siebarItems }) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const dropClose = () => {
        setOpenDropdown(false)
    }

    if (siebarItems.childrens) {
        return (
            <Backdrop onClick={dropClose}>
                <div className="sidebar-single">
                    <div className="sidebar-single__item">
                        <Link href={siebarItems.path}>
                            <a className="sidebar-single-link">
                                <span className="icon">
                                    <CustomFaIcon name={siebarItems.icon} />
                                </span>
                                <span className="link-text">
                                    {siebarItems.title}
                                </span>
                            </a>
                        </Link>
                        <IoChevronDownSharp className="sidenav-toggle-icon" onClick={() => setOpenDropdown(openDropdown => !openDropdown)} />
                    </div>
                    <div className={"sidebar-single-content" + (openDropdown ? " sidebar-single-content-active" : "")}>
                        <Link href="/applied">
                            <a>Applied</a>
                        </Link>
                        <Link href="/saved">
                            <a>Saved</a>
                        </Link>
                    </div>
                </div>
            </Backdrop>
        );
    } else {
        return (
            <Backdrop onClick={dropClose}>
                <div className="sidebar-single">
                    <div className="sidebar-single__item sidebar-single__item-alt">
                        <Link href={siebarItems.path}>
                            <a className="sidebar-single-link">
                                <span className="icon">
                                    <CustomFaIcon name={siebarItems.icon} />
                                </span>
                                <span className="link-text">
                                    {siebarItems.title}
                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
            </Backdrop>
        );
    }
}

export default SidebarItem;
