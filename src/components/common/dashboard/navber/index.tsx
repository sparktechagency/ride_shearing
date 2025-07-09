import { Bell, Menu } from "lucide-react";
import profile from "../../../../assets/profile.png"
import { Link } from "react-router-dom";
import { useTitle } from "../../../../hooks/title";


export default function Navber({ sidebarOpen, setSidebarOpen }: any) {
  const { title, subtitle } = useTitle();
  return (
    <div className="sticky top-0  flex w-full bg-[white] py-3 shadow-xs">
      <header className="w-full px-3">
        <div className="flex justify-between items-center">
          {/* left side*/}
          <div className="flex gap-4 items-center">
            <button
              aria-controls="sidebar"
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
              className="z-99999 block  border rounded-md border-stroke cursor-pointer  p-1.5 lg:hidden"
            >
              <Menu className="cursor-pointer" size={20} />
            </button>
            <ul className="hidden lg:block">
              <li className="text-2xl font-bold text-primary">{title}</li>
              <li className="text-sm text-gray-600">{subtitle}</li>
            </ul>
          </div>
          {/* right side */}
          <div>
            <div className="flex items-center gap-4">
              {/* Notification Icon */}
              <Link className="size-10 bg-[#5E7D82] rounded-full flex items-center justify-center" to="/notifications">
                <Bell className="text-white" />
              </Link>

              {/* Profile Picture */}
              <Link to="/profile">
                <img
                  src={profile} // Replace with actual image path
                  alt="Profile"
                  className="size-10 rounded-full object-cover"
                />
              </Link>
              <span className="font-semibold text-black">John Doe</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
