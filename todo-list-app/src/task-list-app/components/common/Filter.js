import React, { useEffect, useState } from "react";

const Filter = ({ filterData }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <form className="form-inline pl-3 pr-3">
        <div>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={(e) => {
              filterData(searchText);
              e.preventDefault();
            }}
          >
            Search
          </button>{" "}
          &nbsp;&nbsp;
          <button
            className="btn btn-outline-warning my-2 my-sm-0"
            onClick={(e) => {
              setSearchText("");
              filterData(null);
              e.preventDefault();
            }}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
