import * as React from 'react';

export default function MenuWithDropdown({categories, fixed}) {


  const [openSubcategory, setOpenSubcategory] = React.useState(null);

  const handleMouseEnter = (categoryName) => {
    setOpenSubcategory(categoryName);
  };

  const handleMouseLeave = () => {
    setOpenSubcategory(null);
  };

  // Fecha o menu ao clicar fora dele
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.category-container')) {
        setOpenSubcategory(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex space-x-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative category-container"
          onMouseEnter={() => handleMouseEnter(category.title)}
          onMouseLeave={handleMouseLeave}
        >
          <a
            className="text-white text-sm font-semibold cursor-pointer"
            onClick={(e) => e.preventDefault()}
          >
            <p className={`${fixed && 'text-[black]'} relative inline-block after:block after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full mb-2`}>
              {category.title.toUpperCase()}
            </p>
          </a>

          {/* Dropdown de subcategorias */}
          {openSubcategory === category.title && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-2 w-48">
              {category.subcategories.map((sub, subIndex) => (
                <a
                  key={sub.id}
                  href={category.url + '/' + sub.url}
                  className="block text-left px-4 py-2 text-sm text-gray-900 hover:bg-gray-200 w-max"
                >
                  {sub.title}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
