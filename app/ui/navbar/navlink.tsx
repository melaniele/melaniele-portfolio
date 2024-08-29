import Link from "next/link";
import { ForwardRefExoticComponent, SVGProps } from "react";

// Define a type for all props that NavLink receives
type NavLinkProps = {
  href: string;
  title: string;
  icon?: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>; // optional & can be any React element
};

const NavLink: React.FC<NavLinkProps> = ({ icon, href, title }) => {
  const Icon = icon;
  return (
    <Link
      href={href}
      className="flex items-center py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 text-white 
                  hover:text-foreground hover:underline underline-offset-8 text-foreground/70"
    >
      {/* Render icon only when it exists */}
      {Icon && <Icon width={20} className="mr-1" />}
      {title}
    </Link>
  );
};

export default NavLink;
