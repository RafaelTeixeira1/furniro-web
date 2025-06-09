import FilterIcon from "/src/assets/img-system/system-uicons_filtering.svg?react";
import GridIcon from "/src/assets/img-system/ci_grid-big-round.svg?react";
import ListIcon from "/src/assets/img-system/bi_view-list.svg?react";
import { useState } from "react";

interface FilterShopProps {
  page: number;
  size: number;
  sort: string;
  totalElements: number;
  onSizeChange: (size: number) => void;
  onSortChange: (sort: string) => void;
  onCategoryChange: (category: string[]) => void;
}
const categoriesList = [
  "Sofás",
  "Cortinas",
  "Eletrodomésticos",
  "Ventiladores",
  "Mesas",
  "Cadeiras",
  "Tapetes",
  "Luminárias",
];

const FilterShop = ({
  page,
  size,
  sort,
  totalElements,
  onSizeChange,
  onSortChange,
  onCategoryChange,
}: FilterShopProps) => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleToggleFilter = () => setShowFilters(!showFilters);

  const handleCategoryChange = (category: string) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updated);
    onCategoryChange(updated);
  };

  return (
    <div className="w-full flex flex-col bg-creamyWhite px-4 pb-4">
      {/* Barra Superior */}
      <div className="h-40 md:h-25 flex flex-col md:flex-row justify-evenly md:justify-around items-center">
        <div className="flex w-full lg:w-[40%] items-center custom-p-regular text-center">
          <button
            className="h-6.25 cursor-pointer custom-bt-shop flex items-center justify-center"
            onClick={handleToggleFilter}
          >
            <FilterIcon className="w-8 8" />
            <p className="ml-1 md:ml-3">Filter</p>
          </button>

          <button className="ml-3 md:ml-5.75 w-8 h-8 custom-bt-shop text-black">
            <GridIcon />
          </button>

          <button className="ml-3 md:ml-5.75 w-8 h-8 custom-bt-shop text-black">
            <ListIcon />
          </button>

          <div className="ml-5 mr-5 md:ml-7.5 md:mr-7.5 w-0.5 h-9.25 bg-grayRef"></div>
          <p>
            Showing{" "}
            {totalElements === 0
              ? 0
              : `${(page - 1) * size + 1}-${Math.min(
                  page * size,
                  totalElements
                )}`}{" "}
            of {totalElements} results
          </p>
        </div>

        <div className="flex w-full lg:w-[40%] justify-between items-center md:justify-around lg:justify-end font-poppins text-5 font-normal">
          <div className="flex items-center">
            <p>Show</p>
            <select
              value={size}
              onChange={(e) => onSizeChange(Number(e.target.value))}
              className="ml-4.25 w-13.75 h-13.75 bg-white custom-p-regular appearance-none px-4.5"
            >
              <option value="16">16</option>
              <option value="24">24</option>
              <option value="32">32</option>
            </select>
          </div>

          <div className="flex items-center">
            <p className="ml-7.25">Sort by</p>
            <select
              value={sort}
              onChange={(e) => onSortChange(e.target.value)}
              className="ml-4.25 h-13.75 md:w-47 bg-white custom-p-regular appearance-none md:pl-7.5"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Painel de Filtros */}
      {showFilters && (
        <div className="mt-4 p-4  rounded  grid grid-cols-2 md:grid-cols-4 gap-2">
          {categoriesList.map((category) => (
            <label
              key={category}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterShop;
