import support from "/src/assets/img-system/customer-support.svg";
import guarantee from "/src/assets/img-system/guarantee.svg";
import shipping from "/src/assets/img-system/shipping.svg";
import thophy from "/src/assets/img-system/trophy 1.svg";

import AdvantageItem from "./AdvantageItem";

const StoreAdvantages = () => {
  return (
    <div
      className="
      w-full bg-veryLightBeige 
      flex flex-col items-center 
      h-180 md:h-67.5 md:justify-center
    "
    >
      <div className="h-[100%] w-64.75 flex flex-col items-start  justify-evenly md:flex-row  md:items-center md:w-[100%] md:h-[20%]">
        <AdvantageItem
          icon={thophy}
          title="High Quality"
          description="crafted from top materials"
        />
        <AdvantageItem
          icon={guarantee}
          title="Warranty Protection"
          description="Over 2 years"
        />
        <AdvantageItem
          icon={shipping}
          title="Free Shipping"
          description="Order over 150 $"
        />
        <AdvantageItem
          icon={support}
          title="24 / 7 Support"
          description="Dedicated support"
        />
      </div>
    </div>
  );
};

export default StoreAdvantages;
