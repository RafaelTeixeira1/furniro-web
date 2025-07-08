import shopImage from "../../assets/img-system/shop.png";
import { useNavigate } from "react-router-dom";

type ShopBarProps = {
  breadcrumb: string[];
};

const ShopBar: React.FC<ShopBarProps> = ({ breadcrumb }) => {
  const navigate = useNavigate();

  const handleClick = (item: string) => {
    if (item === "Home") {
      navigate("/");
    } else if (item === "Shop") {
      navigate("/shop");
    } else if (item === "Cart") {
      navigate("/cart");
    }
    // adicione outros caminhos conforme necessário
  };

  return (
    <div className="relative flex items-center justify-center p-4 overflow-hidden h-50 sm:h-79 w-full">
      <div
        className="absolute inset-0 bg-center bg-cover opacity-50"
        style={{ backgroundImage: `url(${shopImage})` }}
      />
      <div className="absolute inset-0 backdrop-blur-[3px]" />

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
                onClick={() => !isLast && handleClick(item)}
                className={`${isLast ? "" : "font-bold cursor-pointer hover:underline"}`}
              >
                {item}
                {index < breadcrumb.length - 1 && " > "}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default ShopBar;
