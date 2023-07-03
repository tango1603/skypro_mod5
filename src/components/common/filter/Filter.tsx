import { useState, useEffect } from "react";
import "./Filter.scss";
import { DropdownFilter } from "./DropDownFilter";

interface ButtonProps {
  title: string;
  type: string;
  onClick: any;
  isOpen: boolean;
}

const filterElements = [
  "Michael Jackson",
  "Frank Sinatra",
  "Calvin Harris",
  "Zhu",
  "Arctic Monkeys",
];

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

  useEffect(() => {
    const onClick = (e: any) => {
      if (isOpenFilter !== e.target.dataset.type) {
        setIsOpenFilter("");
        console.log("clear");
        window.removeEventListener("click", onClick);
      }
    };
    console.info("useEffect handler", filter);

    if (isOpenFilter) {
      window.addEventListener("click", onClick);
    }

    if (filter && isOpenFilter === "genre") {
      console.log("", isOpenFilter);
      setIsOpenFilter("");
      return;
    }
    if (filter && isOpenFilter === "author") {
      console.log("", isOpenFilter);
      setIsOpenFilter("");
      return;
    }
    if (filter && isOpenFilter === "year") {
      console.log("", isOpenFilter);
      setIsOpenFilter("");
      return;
    }
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
        isOpen={isOpenFilter === "author"}
        onClick={() => {
          setIsOpenFilter("author");
        }}
      />
      <Button
        title="году выпуска"
        type="year"
        isOpen={isOpenFilter === "year"}
        onClick={() => {
          setIsOpenFilter("year");
        }}
      />
      <Button
        title="жанру"
        type="genre"
        isOpen={isOpenFilter === "genre"}
        onClick={() => {
          setIsOpenFilter("genre");
        }}
      />
      {isOpenFilter ? (
        <DropdownFilter
          type={isOpenFilter}
          setFilterClick={onSetFilterHandler}
          filterElements={filterElements}
        />
      ) : null}
    </div>
  );
};

export default Filter;
