import { IoSearchOutline } from "react-icons/io5";

const SearchBox = () => {
  return (
    <form className="flex items-center gap-1 pb-3 border-b border-[#081845]/20">
      <input
        placeHolder="Search and enter keywords"
        type="search"
        className="outline-none text-navy-blue  placeholder:text-navy-blue w-full"
      />
      <button>
        <IoSearchOutline className="text-dim-gray text-[26px]" />
      </button>
    </form>
  );
};
export default SearchBox;
