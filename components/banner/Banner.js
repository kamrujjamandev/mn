import { BsSearch } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="banner">
      <form>
        <div className="input-column-group">
          <div className="input-column">
            <input type="search" name="search__form" id="searchForm" placeholder="Search universities" required="required" />
            <BsSearch className="search__icon" />
          </div>
          <button type="submit" className="cmn-button">Search</button>
        </div>
      </form>
    </div>
  );
}

export default Banner;
