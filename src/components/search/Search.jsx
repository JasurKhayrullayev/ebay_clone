import React, { useRef, useState } from "react";
import "./Search.scss";
import { Container } from "../../utils/Components";
import siteLogo from "../../assets/site-logo.svg";
import { FiSearch } from "react-icons/fi";
import { MainLink } from "../../utils/Components";
import { Link, useLocation } from "react-router-dom";
import { instance } from "../../api/instance";
import useFetchData from "../../hooks/useFetchData";
import {AiOutlineDown} from "react-icons/ai"

function Search() {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  const inputSearch = useRef();

  const [category] = useFetchData("categories");

  const Fn = (e) => {
    setSearch(e.target.value.trim().length);
    if (e.target.value.trim().length > 2) {
      instance
        .get(`/products/?title=${e.target.value}&offset=0&limit=10`)
        .then((response) => setData(response.data))
        .catch((err) => console.log(err));
    }
  };

const [showCategory, setShowCategory] = useState(false);
const showedCategory = () => {
  setShowCategory(!showCategory);
};


  return (
    <>
      {!(
        location.pathname.includes("signIn") ||
        location.pathname.includes("register")
      ) && (
        <Container>
          <div className="search__wrapper">
            <a href="/">
              <img width={117} height={48} src={siteLogo} alt="site-logo" />
            </a>
            <select className="search__shop-category">
              <option>Shop category</option>
              <option value="">one</option>
              <option value="">two</option>
              <option value="">three</option>
            </select>
            <form className="search__form">
              <div className="search__input-wrapper">
                <span className="search__input-ico">
                  <FiSearch />
                </span>
                <input
                  onChange={Fn}
                  className="search__input"
                  type="text"
                  placeholder={"Search for anything"}
                  ref={inputSearch}
                />
              </div>
              {search !== "" && (
                <div className="search-datas">
                  {data.length > 0 &&
                    data.map((el) => {
                      return (
                        <Link
                          key={el.id}
                          onClick={() => {
                            setSearch("");
                            inputSearch.value = "";
                          }}
                          to={`product/${el.id}`}
                          className="search-link"
                        >
                          {el.title}
                        </Link>
                      );
                    })}
                </div>
              )}
              <div onClick={showedCategory} className="search__all-category">
                <p className="search__all-par">All Categories <AiOutlineDown/></p>
                <div className="search__all-fetch">
                
                  { showCategory && category.map(({ id, name }) => (
                    <Link to={`/category/${id}`} className="search__all-fetchlink" key={id}>{name}</Link>
                  ))}
                </div>
              </div>
              <button className="search__btn" type="submit">
                Search
              </button>
            </form>
            <MainLink title={"Advanced"} />
          </div>
        </Container>
      )}
    </>
  );
}

export default Search;
