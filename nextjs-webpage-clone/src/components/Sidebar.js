// components/Sidebar.js
import { HomeIcon, BellIcon, EnvelopeIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className="fixed h-screen p-4 bg-black text-white w-[250px] flex flex-col space-y-4 left-0 top-0 z-50 border-r border-gray-800">
      <div className="space-y-3">
        <SidebarItem Icon={HomeIcon} title="Home" />
        <SidebarItem Icon={BellIcon} title="Notifications" />
        <SidebarItem Icon={EnvelopeIcon} title="Messages" />
        <SidebarItem Icon={UserCircleIcon} title="Profile" />
      </div>
      <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full w-full transition-colors duration-200">
        Post
      </button>
    </div>
  );
};

const SidebarItem = ({ Icon, title }) => (
  <div className="flex items-center space-x-3 p-3 hover:bg-gray-800 rounded-lg cursor-pointer">
    <Icon className="h-6 w-6" />
    <p className="text-lg">{title}</p>
  </div>
);

export default Sidebar;