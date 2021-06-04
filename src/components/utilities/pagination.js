import React, { useState, useEffect, createRef } from "react";
const defaultPag = {
  page: 1,
  pages: 1,
  display: 25,
  range: [],
};
const Pagination = ({ length, setRange }) => {
  const [pagination, setPagination] = useState(defaultPag);
  let { page, pages, display, range, min, max } = pagination;


  const pageInput = createRef();

  useEffect(() => {
    paginate();
  }, [length, display, page]);

  const paginate = () => {
    pages = Math.ceil(length / display);
    if (page > pages) {
      page = 1;
    }
    let _range = [];
    for (let x = 1; x <= pages; x++) {
      _range.push(x);
    }
    max = page * display;
    min = max - display;
    setPagination({ ...pagination, page, pages, range: _range, min, max });
    setRange(min, max);
  };

  const handlePages = (e) => {
    setPagination({ ...pagination, [e.target.name]: e.target.value });
  };

  const turnPages = (e) => {
    if (e.keyCode === 39) {
      nextPage();
    }

    if (e.keyCode === 37) {
      previousPage();
    }
  };

  const nextPage = () => {
    if (page < pages) {
      page++;
    }
    setPagination({ ...pagination, page });
    pageInput.current.selectedIndex = page - 1;
  };
  const previousPage = () => {
    if (page > 1) {
      page--;
    }
    setPagination({ ...pagination, page });
    pageInput.current.selectedIndex = page - 1;
  };

  return (
    <div style={{ height: "50px" }} tabIndex={0} className="pagination bg-dark n p-3" onKeyDown={turnPages}>
      <p className="text-white flex-1 text-truncate">
        desde {min + 1} hasta {max > length ? length : max}
      </p>

      <div style={{width:"300px"}} className="d-flex align-items-center">
        <i className="btn fas fa-chevron-circle-left display-6 click-animate text-secondary" onClick={previousPage} />
        <label className="m-0 mr-2">pagina</label>
        <select style={{ width: "unset" }} name="page" className="mr-2" onChange={handlePages} ref={pageInput}>
          {range.map((page, idx) => (
            <option key={idx} value={page}>
              {page}
            </option>
          ))}
        </select>

        <label className="m-0 mr-2">mostrar</label>
        <select style={{ width: "unset" }} name="display" onChange={handlePages}>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={75}>75</option>
          <option value={100}>100</option>
        </select>
        <i className="btn fas fa-chevron-circle-right display-6 click-animate text-secondary" onClick={nextPage} />
      </div>

      <p className="text-white flex-1 text-right text-truncate">total: {length} elementos</p>
    </div>
  );
};
export default Pagination;
