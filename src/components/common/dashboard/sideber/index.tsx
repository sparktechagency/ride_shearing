import { adminSideLinks } from "../nav-data";
import type { Dispatch, SetStateAction } from "react";
import NavItem from "../nav-item";
import logo from "../../../../assets/logo.svg"
import { Button } from "../../../ui";
import { LogOut } from 'lucide-react';

export interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  return (
    <div className="flex">
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 opacity-50"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* Sidebar */}
      <aside
        className={`absolute left-0 top-0 z-20 flex h-screen transition-transform  transform duration-300 ease-linear flex-col overflow-y-hidden bg-[#5b7a7d]  text-[#000000] w-[240px] lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col ">
          <div>
            <div className="flex items-center justify-center my-4 text-white">
              <img
                className="w-[100px]"
                src={logo}
              />
            </div>
            <nav>
              <NavItem item={adminSideLinks} />
            </nav>
          </div>
          <Button className="mx-3 absolute bottom-3 w-[200px] text-rose-500 bg-white cursor-pointer hover:bg-white"><LogOut className="rotate-180" />Log Out</Button>
        </div>
      </aside>
    </div>
  );
}
