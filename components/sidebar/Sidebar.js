import SidebarItem from "./SidebarItem";
import sidebarData from '../../data/sidebar-data.json';

const Sidebar = ({openSidebar, setOpenSidebar}) => {
    return (
        <div className={"sidebar" + (openSidebar ? " sidebar-active" : '')}>
            {sidebarData.map((siebarItems, index) => {
                return (
                    <SidebarItem siebarItems={siebarItems} key={index} />
                )
            })}
        </div>
    );
}


export default Sidebar;
