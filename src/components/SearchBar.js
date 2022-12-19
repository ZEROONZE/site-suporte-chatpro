import { FaSearch } from "react-icons/fa";

const BarraPesquisa = () => {
  return (
    <div class="search-box">
      <button class="btn-search">
        <FaSearch className="searchlupa" />
      </button>
      <input type="text" className="input-search" placeholder="" />
    </div>
  );
};

export default BarraPesquisa;
