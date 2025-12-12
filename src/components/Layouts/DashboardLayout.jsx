// src/components/Layouts/DashboardLayout.jsx
// This is a layout component for the dashboard section of the application.
// It includes a dashboard top bar and footer, with an outlet for nested routes.
// The Outlet component from react-router-dom is used to render the matched child route.
import { Outlet } from "react-router-dom";
import DashBoard from "../DashBoard";
import Footer from "../Footer";


// DashboardLayout component definition
// This component wraps dashboard pages with a dashboard top bar and footer.
// The Outlet component is used to render the content of the specific dashboard page.
const DashboardLayout = () => {
  return (
    <>
      <DashBoard />   {/* Your dashboard top bar */}
      <Outlet />            {/* Content */}
      <Footer />        {/* Your footer */}
    </>
  );
};

export default DashboardLayout;
