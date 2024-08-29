import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import MenuOverlay from "./menu-overlay";

export default function MobileMenu() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="flex flex-col max-auto items-end">
      <div className="mobile-menu block md:hidden items-end">
        {!navbarOpen ? (
          <button
            onClick={() => setNavbarOpen(true)}
            className="flex items-center py-1 border-1 border-white text-white rounded"
          >
            <Bars3Icon width={25} />
          </button>
        ) : (
          <button
            onClick={() => setNavbarOpen(false)}
            className="flex items-end py-1 border-1 border-white text-white rounded"
          >
            <XMarkIcon width={25} />
          </button>
        )}
      </div>
      <div>{navbarOpen && <MenuOverlay />}</div>
    </div>
  );
}
