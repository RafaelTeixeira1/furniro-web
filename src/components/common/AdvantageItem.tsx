import React from "react";

interface AdvantageItemProps {
  icon: React.ReactNode; // agora recebe SVG ReactNode
  title: string;
  description: string;
}

const AdvantageItem: React.FC<AdvantageItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex justify-start items-center gap-4 max-w-xs">
      <div className="w-15 h-15 md:w-[60px] md:h-[60px] text-darkGray flex items-center justify-center">
        {icon}
      </div>
      <div className="text-left flex flex-col justify-center">
        <h1 className="text-darkGray font-poppins font-semibold text-base md:text-lg leading-snug">
          {title}
        </h1>
        <p className="text-gray-500 font-poppins text-sm md:text-base leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AdvantageItem;
