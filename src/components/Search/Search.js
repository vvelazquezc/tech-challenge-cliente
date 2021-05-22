import React, { useState } from "react";
import { useHistory } from "react-router";
import { ROUTES } from "../../router";
import { FiFilter, FiSearch } from "react-icons/fi";
import ButtonIcon from "../ButtonIcon";
import "./Search.scss";

const FORMATS = {
  any: "any",
  gif: "gif",
  staticImage: "jpeg/png",
};

export const Search = () => {
  const [search, setSearch] = useState(false);
  const [format, setFormat] = useState(false);
  const [username, setUsername] = useState(false);

  const [openSearchFilters, setOpenSearchFilters] = useState(false);

  const history = useHistory();

  const handleChange = (setField) => (e) => {
    setField(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const formValues = {
      ...(search && { search }),
      ...(format && format !== FORMATS.any && { format }),
      ...(username && { username }),
    };

    const isFormEmpty = Object.keys(formValues).length === 0;

    if (isFormEmpty) {
      history.push(ROUTES.HOME);
      return;
    }

    history.push({ pathname: ROUTES.HOME, state: formValues });
  };

  const handleOpenFilters = () => {
    setOpenSearchFilters(!openSearchFilters);
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="section-search__search">
        <div className="section-search__input">
          <input
            id="search-box"
            type="text"
            className="input input-text"
            name="search"
            placeholder="What are you looking for?"
            onChange={handleChange(setSearch)}
          />
          <button type="submit" className="section-search__icon">
            <FiSearch />
          </button>
        </div>
        <ButtonIcon event={handleOpenFilters}>
          <FiFilter
            value={{
              style: { fontSize: "30px", color: "rgb(0, 123, 255)" },
            }}
          />
        </ButtonIcon>
      </div>
      {openSearchFilters && (
        <div className="section-search__filters">
          <select
            className="input input-select"
            name="type"
            onChange={handleChange(setFormat)}
          >
            <option value={FORMATS.any} name="any">
              Any
            </option>
            <option value={FORMATS.gif} name="gif">
              Gifs
            </option>
            <option value={FORMATS.staticImage} name="jpeg/png">
              Image
            </option>
          </select>
          <input
            className="input"
            placeholder="By user"
            onChange={handleChange(setUsername)}
          />
          {/* <input type='date' className='input' onChange={handleInputChange} /> */}
        </div>
      )}
    </form>
  );
};
