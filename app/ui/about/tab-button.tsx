import { motion } from "framer-motion";
import { ReactNode } from "react";

type TabButtonProps = {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
};

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({
  active,
  selectTab,
  children,
}) => {
  const buttonClasses = active ? "text-rose" : "text-gray";

  return (
    <button onClick={selectTab}>
      <p className={`mr-5 font-semibold hover:text-dark-rose ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-dark-rose mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
