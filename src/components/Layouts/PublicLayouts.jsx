
// src/components/Layouts/PublicLayouts.jsx
// This is a layout component for public-facing pages of the application.
// It includes a header and footer, with an outlet for nested routes.
// The Outlet component from react-router-dom is used to render the matched child route.

import { Outlet } from "react-router-dom";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";

// PublicLayout component definition
// This component wraps public pages with a header and footer.
// The Outlet component is used to render the content of the specific public page.
const PublicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;
