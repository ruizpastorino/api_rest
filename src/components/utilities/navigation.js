import React, { createRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = ({ setKeyWord }) => {
  const [collapse, setCollapse] = React.useState(false);

  const inputSearch = createRef();
  let currentLocation = useLocation().pathname;

  /* useEffect(() => () => setKeyWord(""), []); */

  const clear = () => {
    if (inputSearch.current !== null) {
      inputSearch.current.value = "";
      inputSearch.current.focus();
      setKeyWord("");
    }
  };
  const navItem = (route, text, icon) => {
    return (
      <Link to={route}>
        <div className="nav-item">
          <i className={`fas fa-${icon} ${currentLocation === route ? "text-warning" : ""} mr-3`} />
          <p className={`${currentLocation === route ? "text-warning" : ""}`}>{text}</p>
        </div>
      </Link>
    );
  };

  return (
    <div style={{ width: collapse ? "80px" : "275px" }} className={`nav-container ${collapse ? "" : "bg-dark"}`}>
      {!collapse ? (
        <div style={{ height: "100px" }}>
          <p className="strong-text my-2 display-6">
            <i className="fas fa-spider text-danger display-6" />
            Spider
          </p>
          <div className="px-2 my-3 search-area bg-white rounded">
            <input
              ref={inputSearch}
              style={{ border: "none" }}
              className="search-input text-dark"
              type="text"
              placeholder="buscar por campo"
              onChange={(e) => {
                setKeyWord(e.target.value.toLowerCase());
              }}
              onDoubleClick={clear}
            />
            <div className="center-xy">
              <i className="fas fa-search display-7 text-light" />
            </div>
          </div>
        </div>
      ) : (
        <div style={{ height: "100px" }}>
          <i className="fas fa-spider text-danger display-6 my-2 d-block" />
          <i
            className="fas fa-search display-6 text-light my-4 d-block hand-pointer"
            onClick={() => setCollapse(false)}
          />
        </div>
      )}
      <div className="flex-1" onClick={clear}>
        {navItem("/", "Home", "fas fa-home")}
        {navItem("/tasks", "Tareas programadas", "clock")}
        {navItem("/warehouses", "Sucursales", "store")}
        {navItem("/offers", "Promociones", "tags")}
        {navItem("/products", "Productos/Articulos", "box-open")}
        {navItem("/supplies", "Insumos", "parachute-box")}
        {navItem("/orders", "Pedidos/Ordenes", "dolly")}
        {navItem("/purchases", "Compras", "shopping-basket")}
        {navItem("/suppliers", "Proveedores", "truck")}
        {navItem("/users", "Usuarios", "users")}
        {navItem("/records", "Historial", "folder")}
        {navItem("/sales", "Ventas / Ingresos", "receipt")}
        {navItem("/settings", "Configuracion", "cog")}
        <div className="nav-item" onClick={() => setCollapse(!collapse)}>
          <i className={`fas fa-chevron-circle-${collapse ? "right" : "left"}  mr-3`} />
          <p>Ocultar menu</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
