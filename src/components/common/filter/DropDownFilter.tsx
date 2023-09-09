import React, { useState, useEffect } from "react";
import "./DropDownFilter.scss";
import { DropdownFilterProps } from "../../../interfaces";

export const DropdownFilter = ({
  type,
  setFilterClick,
  filterElements,
}: DropdownFilterProps) => {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setFilterClick(filter);
  }, [filter, setFilterClick]);

  return (
    <div className="dropdown">
      <ul className="dropdown__list">
        {filterElements.map((element) => {
          return (
            <li
              className="dropdown__item"
              key={element}
              data-type={type}
              data-value={element}
              onClick={() => setFilter(element)}
            >
              {element}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
