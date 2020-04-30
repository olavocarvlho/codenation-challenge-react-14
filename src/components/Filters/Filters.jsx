/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import "./Filters.scss";
const Filters = ({ handleSearch, handleSortBy }) => {
  const [selected, setSelected] = useState({ type: "", value: "" });

  useEffect(() => {
    if (selected.type === "search_by") {
      handleSearch(selected.value);
    }
    if (selected.type === "sort_by") {
      handleSortBy(selected.value);
    }
    console.log(selected);
  }, [selected]);

  return (
    <div className="container" data-testid="filters">
      <section className="filters">
        <div className="filters__search">
          <input
            type="text"
            className="filters__search__input"
            placeholder="Pesquisar"
            onChange={(e) => {
              setSelected({ type: "search_by", value: e.target.value });
            }}
          />

          <button className="filters__search__icon">
            <i className="fa fa-search" />
          </button>
        </div>

        <button
          data-sortby="name"
          className={
            selected.value === "name"
              ? "filters__item is-selected"
              : "filters__item"
          }
          onClick={(e) => {
            setSelected({ type: "sort_by", value: e.target.dataset.sortby });
          }}
        >
          Nome <i className="fas fa-sort-down" data-sortby="name" />
        </button>

        <button
          data-sortby="country"
          className={
            selected.value === "country"
              ? "filters__item is-selected"
              : "filters__item"
          }
          onClick={(e) => {
            setSelected({ type: "sort_by", value: e.target.dataset.sortby });
          }}
        >
          País <i className="fas fa-sort-down" data-sortby="country" />
        </button>

        <button
          data-sortby="company"
          className={
            selected.value === "company"
              ? "filters__item is-selected"
              : "filters__item"
          }
          onClick={(e) => {
            setSelected({ type: "sort_by", value: e.target.dataset.sortby });
          }}
        >
          Empresa <i className="fas fa-sort-down" data-sortby="company" />
        </button>

        <button
          data-sortby="department"
          className={
            selected.value === "department"
              ? "filters__item is-selected"
              : "filters__item"
          }
          onClick={(e) => {
            setSelected({ type: "sort_by", value: e.target.dataset.sortby });
          }}
        >
          Departamento{" "}
          <i className="fas fa-sort-down" data-sortby="department" />
        </button>

        <button
          data-sortby="admissionDate"
          className={
            selected.value === "admissionDate"
              ? "filters__item is-selected"
              : "filters__item"
          }
          onClick={(e) => {
            setSelected({ type: "sort_by", value: e.target.dataset.sortby });
          }}
        >
          Data de admissão{" "}
          <i className="fas fa-sort-down" data-sortby="admissionDate" />
        </button>
      </section>
    </div>
  );
};

export default Filters;
