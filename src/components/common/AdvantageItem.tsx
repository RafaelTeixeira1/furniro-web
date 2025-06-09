import React from 'react'

interface AdvantageItemProps {
  icon: string
  title: string
  description: string
}

const AdvantageItem: React.FC<AdvantageItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex justify-start items-start gap-2.5 md:ml-2.5 max-w-64.75">
      <img src={icon} alt={title} className="text-darkGray w-15 h-15 md:w-13 md:h-13 lg:w-15 lg:h-15" />
      <div className="text-left flex flex-col justify-start ">
        <h1 className="text-darkGray font-poppins font-semibold text-6.25 leading-[150%] md:text-5 lg:text-6.25">
          {title}
        </h1>
        <p className="text-gray3 font-poppins font-medium text-[1.25rem] md:text-base lg:text-xl leading-[150%]">
          {description}
        </p>
      </div>
    </div>
  )
}

export default AdvantageItem
