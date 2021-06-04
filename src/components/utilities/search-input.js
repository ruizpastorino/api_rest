import React, { createRef, useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { getSearch } from "./utility";

const SearchInput = ({ settings:{ target, properties, display, placeholder, cleanAfter, action, focusTrigger } }) => {
  const [index, setIndex] = useState(0);
  const [displaySugg, setDisplaySugg] = useState(false);
  const [pagination, setPagination] = useState(defaultPag);
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = createRef();

  let { min, max, length, page, pages } = pagination;

  useEffect(() => {
    paginate();
  }, [suggestions, index]);


  const search = (e) => {
    setIndex(0);
    getSearch(
      {
        target,
        properties: properties,
        keyWord: e.target.value.toLowerCase(),
      },
      (result) => {
        if (e.target.value !== "") {
          setDisplaySugg(true);
          setSuggestions(result);
        } else {
          reset();
        }
        if (suggestions.length <= 0) {
          action(false);
        }
      }
    );
  };

  const handleIndex = (e) => {
    let key = e.keyCode;
    let direction = e.deltaY;
    let number = page;
    if (key === 40 || direction === 100) {
      if (index < suggestions.length - 1) {
        setIndex(index + 1);
        if (index + 1 >= page * 5) {
          number++;
        }
      }
    }
    if (key === 38 || direction === -100) {
      if (index > 0) {
        setIndex(index - 1);
        if (index <= page * 5 - 5) {
          number--;
        }
      }
    }
    if (key === 13) {
      setItem();
    }
    setPagination({ ...pagination, page: number });
  };

  const paginate = () => {
    pages = [];
    length = Math.ceil(suggestions.length / 5);
    max = page * 5;
    min = max - 5;
    for (let x = 1; x <= length; x++) {
      pages = [...pages, x];
    }
    if (page > length) {
      page = 1;
    }
    setPagination({ ...pagination, page, pages, length, min, max });
  };

  const setItem = () => {
    let currentItem;
    let targetData = "";
    if (suggestions.length > 0) {
      currentItem = suggestions[index];
      for (let propertie of display) {
        targetData += currentItem[propertie] + " ";
      }
      setDisplaySugg(false);
      if (cleanAfter) {
        targetData = "";
      }
    } else if (inputRef.current.value !== "") {
      Swal.fire({ title: "Inexistente...", icon: "error", showConfirmButton: false, timer: 1000 });
    }
    inputRef.current.value = targetData;
    if (currentItem !== undefined) {
      action(currentItem);
    }
    setSuggestions([]);
  };

  const reset = () => {
    action(false);
    setSuggestions([]);
    inputRef.current.value = "";
  };

  useEffect(() => {
    if (focusTrigger) {
      reset();
      inputRef.current.focus();
    }
  }, [focusTrigger]);

  return (
    <div className="w-100 position-relative">
      <div className="px-2 search-area border border-light rounded" onKeyDown={handleIndex} onWheel={handleIndex}>
        <input
          ref={inputRef}
          className="search-input text-primary borderless-input"
          type="text"
          placeholder={placeholder ? placeholder : "buscar"}
          onChange={search}
          onDoubleClick={reset}
          onFocus={() => setDisplaySugg(true)}
        />
        <i className="fas fa-search text-secondary display-6" />
      </div>
      <div className="">
        {displaySugg ? (
          <div style={{ width: "100%" }} className="search-suggestion bg-dark w-100">
            {suggestions.map((sug, idx) => {
              if (idx >= min && idx < max) {
                return (
                  <div
                    key={idx}
                    className={`p-2 hand-pointer d-flex align-items-start bg-${idx === index ? "info" : "secondary"}`}
                    onMouseOver={() => {
                      setIndex(idx);
                    }}
                    onClick={setItem}
                  >
                    <p>
                      <span className="text-success mr-2">{idx + 1}</span>
                      {display.map((propertie) => {
                        return sug[propertie] + " ";
                      })}
                    </p>
                  </div>
                );
              }
            })}
            {suggestions.length > 0 ? (
              <div className="d-flex justify-content-between p-2 bg-dark">
                <p>total: {suggestions.length}</p>
                <p>
                  de {min + 1} a {max > suggestions.length ? suggestions.length : max}{" "}
                </p>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

const defaultPag = { page: 1, min: 1, max: 1, length: 1, pages: [] };

export default SearchInput;
