
import shopImage from '/src/assets/img-system/shop.jpg';

type ShopBarProps = {
  breadcrumb: string[];
};

const ShopBar: React.FC<ShopBarProps> = ({ breadcrumb }) => {
  return (
    <div className="relative flex items-center justify-center p-4 overflow-hidden h-48 sm:h-80 w-full">
      <img 
        src={shopImage} 
        alt="Shop Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        style={{ filter: 'blur(6px)' }}
      />
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-black font-poppins font-medium text-3xl sm:text-5xl leading-normal">
          {breadcrumb[breadcrumb.length - 1]}
        </h1>
        <p className="text-black font-poppins text-sm sm:text-base leading-normal mt-2">
          {breadcrumb.map((item, index) => {
            const isLast = index === breadcrumb.length - 1;
            return (
              <span
                key={index}
                className={isLast ? '' : 'font-bold'}
              >
                {item}
                {index < breadcrumb.length - 1 && ' > '}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};


export default ShopBar;