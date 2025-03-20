// components/Sidebar.js
import { HomeIcon, BellIcon, EnvelopeIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className="fixed h-screen p-4 bg-black text-white flex flex-col space-y-8 left-0 top-0 z-50 border-r border-gray-800">
      {/* Logo */}
      <h1 className="text-2xl font-bold px-4">X</h1>

      {/* Navigation Items */}
      <div className="space-y-3">
        <SidebarItem Icon={HomeIcon} title="" />
        <SidebarItem Icon={BellIcon} title="" />
        <SidebarItem Icon={EnvelopeIcon} title="" />
        <SidebarItem Icon={UserCircleIcon} title="" />
      </div>

      {/* Post Button */}
      <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full w-full transition-colors duration-200 text-lg">
        Post
      </button>
    </div>
  );
};

const SidebarItem = ({ Icon, title }) => (
  <div className="flex items-center space-x-3 p-3 hover:bg-gray-800 rounded-full cursor-pointer">
    <Icon className="h-6 w-6" />
    <p className="text-lg">{title}</p>
  </div>
);

export default Sidebar;