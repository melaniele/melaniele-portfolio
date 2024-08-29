import { navbar } from "../../lib/data";
import NavLink from "./navlink";

const MenuOverlay = () => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {navbar.map((item, index) => (
        <li key={index}>
          <NavLink icon={item.icon} href={item.link} title={item.name} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
