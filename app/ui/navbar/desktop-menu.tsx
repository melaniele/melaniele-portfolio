import { navbar } from "@/app/lib/data";
import NavLink from "./navlink";

export default function DesktopMenu() {
  return (
    <div className="menu hidden md:block md:w-auto" id="navbar">
      <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
        {navbar.map((navbarItem, index) => (
          <li key={index}>
            <NavLink
              icon={navbarItem.icon}
              href={navbarItem.link}
              title={navbarItem.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
