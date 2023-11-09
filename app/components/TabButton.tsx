import React from "react";
import { motion } from "framer-motion";

interface TabButtonProps {
  active: boolean; // This defines the type for 'active' prop as boolean
  selectTab: () => void; // This defines the type for 'selectTab' prop as a function that returns void
  children: React.ReactNode; // This defines the type for 'children' prop to accept any valid React child
}


const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
  const buttonClasses = active ? 'text-textGreen' : 'text-[#ADB7BE]'

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-textGreen  ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-0.5 bg-textGreen mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
