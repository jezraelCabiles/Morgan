// src/components/DashBoard.jsx
// This component represents the dashboard navigation bar for the inventory system.
// It includes links to various sections such as Dashboard, Overall, Products, and a Logout button.
// The navigation bar is responsive, displaying a menu icon on smaller screens.
// The lucide-react library is used for the menu icons, and react-router-dom's Link component is used for navigation.
// The component uses React's useState hook to manage the state of the mobile menu.
// The navigation bar is styled with Tailwind CSS classes for layout and design.
// Import necessary modules and components
// from lucide-react and react-router-dom.
// Additionally, useState from React is imported to manage component state.

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function DashBoard() {
  // State to manage the visibility of the mobile menu.
  const [menu, setMenu] = useState(false);

  return (
    /* Navigation Bar Container */
    /* The navigation bar is fixed at the top of the viewport and spans the full width. */
    /* It has a white background with a shadow for visual separation. */
    /* The z-50 class ensures it stays above other content on the page. */
    /* The content inside the nav is centered and spaced using flexbox. */
    /* The title "Inventory System" is displayed on the left side. */
    /* On medium and larger screens, navigation links and buttons are displayed on the right side. */
    /* On smaller screens, a menu icon is shown instead of the full navigation links. */
    /* The menu icon toggles the visibility of the mobile menu when clicked. */
    /* The mobile menu appears below the navigation bar when activated. */

    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-full mx-auto px-6 py-4 flex items-center justify-between ">
        <h1 className="text-2xl font-semibold ml-10">Inventory System</h1>
        <div className="hidden md:flex items-center space-x-4 mr-10">
          <span className="text-lg ">Welcome! Admin</span>
          <Link to="/">
            <button className="text-white bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded-md">
              Logout
            </button>
          </Link>

          <Link to="/Dashboard">
            <button className="text-white bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded-md">
              Dashboard
            </button>
          </Link>

          <Link to="/OverView">
            <button className="text-white bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded-md">
              Overall
            </button>
          </Link>

          <Link to="/Items">
            <button className="text-white bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded-md">
              Products
            </button>
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setMenu(!menu)}>
          {menu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Menu */
      /* Conditionally render the mobile menu based on the 'menu' state. */
      /* The mobile menu contains a Logout button and is only visible on smaller screens. */
      /* It uses Tailwind CSS classes for styling and layout. */
      /* When the Logout button is clicked, it sets the 'menu' state to true, closing the menu. */
      /* The menu is hidden on medium and larger screens using the 'md:hidden' class. */
      /* The menu is displayed as a vertical list with padding and spacing for better usability. */
      /* The menu background is white with an inner shadow for visual separation. */
      /* The Logout button is styled similarly to the one in the main navigation bar. */}
      {menu && (
        <div className="md:hidden bg-white shadow-inner">
          <ul className="flex flex-col px-6 pb-4 pt-4 gap-4 text-md">
            <li className="cursor-pointer text-center">
              <Link to="/">
                <button
                  className="text-white bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded-md"
                  onClick={() => setMenu(true)}
                >
                  Logout
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
