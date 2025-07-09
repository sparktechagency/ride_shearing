import MainLayout from "../../layouts/main";
import Dashboard from "../../components/views/dashbord";
import Parents from "../../components/views/parents";
import Drivers from "../../components/views/drivers";
import Transactions from "../../components/views/transactions";
import Notifications from "../../components/views/notifications";
import Profile from "../../components/views/profile";
import FQA from "../../components/views/fqa";
import AboutUs from "../../components/views/about";
import RequestsDriver from "../../components/views/requests";

const adminRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      }, {
        path: '/parents',
        element: <Parents />,

      }, {
        path: '/drivers',
        element: <Drivers />,
      }, {
        path: "/transactions",
        element: <Transactions />,
      }, {
        path: '/notifications',
        element: <Notifications />
      }, {
        path: '/profile',
        element: < Profile />
      }, {
        path: '/fqa',
        element: <FQA />
      },{
        path:'/change-password',
        element:<Profile />
      },{
        path:'/about-us',
        element:<AboutUs/>
      },{
        path:'/request-driver',
        element:<RequestsDriver/>
      }
    ],
  },
];

export default adminRoutes;
