/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import "./Filters.scss";
const Filters = ({ handleFilters }) => {
  const [filter, setFilter] = useState({
    type: "",
    value: "",
  });
  const handleSearch = (event) => {
    setFilter({
      type: event.target.type,
      value: event.target.value,
    });
  };

  useEffect(() => {
    if (typeof handleFilters === "function") {
      handleFilters(filter);
    }
  }, [filter]);

  return (
    <div className="container" data-testid="filters">
      <section className="filters">
        <div className="filters__search">
          <input
            type="text"
            className="filters__search__input"
            placeholder="Pesquisar"
            value={filter.type === "text" ? filter.value : ""}
            onChange={handleSearch}
          />

          <button className="filters__search__icon">
            <i className="fa fa-search" />
          </button>
        </div>

        <button
          type="sort_by"
          className={
            filter.type === "sort_by" && filter.value === "name"
              ? "filters__item is-selected"
              : "filters__item"
          }
          onClick={(e) => {
            setFilter({
              type: "sort_by",
              value: "name",
            });
          }}
        >
          Nome <i className="fas fa-sort-down" />
        </button>

        <button
          className={
            filter.type === "sort_by" && filter.value === "country"
              ? "filters__item is-selected"
              : "filters__item"
          }
          onClick={() => {
            setFilter({
              type: "sort_by",
              value: "country",
            });
            handleFilters("country");
          }}
        >
          País <i className="fas fa-sort-down" />
        </button>

        <button
          className={
            filter.type === "sort_by" && filter.value === "company"
              ? "filters__item is-selected"
              : "filters__item"
          }
          onClick={() => {
            setFilter({
              type: "sort_by",
              value: "company",
            });
            handleFilters("company");
          }}
        >
          Empresa <i className="fas fa-sort-down" />
        </button>

        <button
          className={
            filter.type === "sort_by" && filter.value === "department"
              ? "filters__item is-selected"
              : "filters__item"
          }
          onClick={() => {
            setFilter({
              type: "sort_by",
              value: "department",
            });
            handleFilters("department");
          }}
        >
          Departamento <i className="fas fa-sort-down" />
        </button>

        <button
          className={
            filter.type === "sort_by" && filter.value === "admissionDate"
              ? "filters__item is-selected"
              : "filters__item"
          }
          onClick={() => {
            setFilter({
              type: "sort_by",
              value: "admissionDate",
            });
            handleFilters("admissionDate");
          }}
        >
          Data de admissão <i className="fas fa-sort-down" />
        </button>
      </section>
    </div>
  );
};

export default Filters;
