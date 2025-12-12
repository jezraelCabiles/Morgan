
// Import necessary modules from react-router-dom
// Route, Routes for defining routes
import { Routes, Route } from "react-router-dom";


// Import layout components
// PublicLayout for general pages
// DashboardLayout for authenticated dashboard pages
import PublicLayout from "./components/Layouts/PublicLayouts.jsx";
import DashboardLayout from "./components/Layouts/DashboardLayout.jsx";


// Import page components
// Header and Footer for public layout
// These represent the main sections of the public-facing site
// Note: Header is also used as a route component here
// to demonstrate routing within the PublicLayout
// Footer is included for completeness
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";


// DashBoard, OverView, and Items for dashboard layout
// These represent different sections of the dashboard
// DashBoard is the main dashboard page
// OverView provides an overall summary
// Items lists the products or items in the inventory
// Each of these components is designed to be displayed
// within the DashboardLayout to maintain consistent UI
// across the dashboard pages
// Note: Ensure these components are correctly implemented
// to function as intended within the dashboard context
import DashBoard from "./components/DashBoard.jsx";
import OverView from "./components/routes/OverView.jsx";
import Items from "./components/routes/Items.jsx";


// Main application component
// Defines the routing structure of the application
// Utilizes layouts to wrap different sets of routes
// ensuring consistent UI across related pages
const App = () => {
  // Render the routing structure
  // Uses Routes and Route components to define paths
  // and their corresponding components and layouts
  // PublicLayout wraps general pages like Header and Footer
  // DashboardLayout wraps authenticated dashboard pages
  return (
    
    /* Define application routes with layouts */
    /* Landing Page - PublicLayout */
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Header />} />
        <Route path="header" element={<Header />} />
        <Route path="footer" element={<Footer />} />
      </Route>

        {/* DashBoard Routes, Route, Links - DashboardLayout*/}
      <Route element={<DashboardLayout />}>
        <Route path="Dashboard" element={<DashBoard />} />
        <Route path="OverView" element={<OverView />} />
        <Route path="Items" element={<Items />} />
        <Route path="Footer" element={<Footer />} />
      </Route>
    </Routes>
  );
};

export default App;
