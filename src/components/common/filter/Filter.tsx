import { useState, useEffect } from "react";
import "./Filter.scss";
import { DropdownFilter } from "./DropDownFilter";

import { ButtonProps } from "../../../interfaces";

const filterElements: { [index: string]: any } = {
  genre: [" Rock", " Pop", " Jazz", "Classic", " Techno"],
  author: [
    "Michael Jackson",
    "Frank Sinatra",
    "Calvin Harris",
    "Zhu",
    "Arctic Monkeys",
  ],
  year: ["2010", "2013", "2014", "2015", "1988", "2000"],
};

const Button = ({ title, type, onClick }: ButtonProps) => {
  return (
    <div
      data-type={type}
      className="filter__button _btn-text"
      onClick={onClick}
    >
      {title}
    </div>
  );
};

const Filter = () => {
  const [isOpenFilter, setIsOpenFilter] = useState("");
  const [filter, setFilter] = useState("");

  const onClickDocumentClickHandler = (e: any) => {
    if (e.target.dataset.type) return;
    setIsOpenFilter("");
  };

  useEffect(() => {
    document.addEventListener("click", onClickDocumentClickHandler);
    return () => {
      document.removeEventListener("click", onClickDocumentClickHandler);
    };
  }, [filter, isOpenFilter]);

  const onSetFilterHandler = (filter: string) => {
    setFilter(filter);
    if (filter) {
      setIsOpenFilter("");
    }

    //TODO: сделать проброс параметров наверх в массив данных
  };

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <Button
        title="исполнителю"
        type="author"
        onClick={() => {
          setIsOpenFilter("author");
        }}
      />
      <Button
        title="году выпуска"
        type="year"
        onClick={() => {
          setIsOpenFilter("year");
        }}
      />
      <Button
        title="жанру"
        type="genre"
        onClick={() => {
          setIsOpenFilter("genre");
        }}
      />
      {isOpenFilter ? (
        <DropdownFilter
          type={isOpenFilter}
          setFilterClick={onSetFilterHandler}
          filterElements={filterElements[isOpenFilter]}
        />
      ) : null}
    </div>
  );
};

export default Filter;
