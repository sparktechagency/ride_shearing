import {
  LayoutDashboard,
  UsersRound,
  Settings,
  Calendar,
  UserRound,
  KeyRound,
  CircleAlert,
  CircleQuestionMark,
} from "lucide-react";

interface ItemProps {
  to?: string;
  icon?:any;
  label: string;
}

export interface SideDataProps {
  to?: string;
  icon?:any;
  label: string;
  submenu?: ItemProps[];
}
export const adminSideLinks: SideDataProps[] = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/parents", icon:  UsersRound, label: "Parents" },
  { to: "/drivers", icon:  UserRound, label: "Drivers" },
  { to: "/transactions", icon:Calendar, label: "Transactions" },
  {
    icon: Settings,
    label: "Settings",
    submenu: [
      { to: "/change-password",icon:KeyRound, label:"Change Password" },
      { to: "/about-us",icon:CircleAlert, label:"About Us" },
      { to: "/fqa",icon:CircleQuestionMark, label:"FAQ" }
    ],
  },
];
