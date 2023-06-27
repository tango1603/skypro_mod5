import { useState, useEffect } from "react";
import "./Filter.scss";

interface ButtonProps {
  title: string;
  type: string;
  onClick: any;
  isOpen: boolean;
}

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

  useEffect(() => {
    if (isOpenFilter === "genre") {
      alert(" select genre ");
      return;
    }
    if (isOpenFilter === "author") {
      alert(" select author ");
      return;
    }
    if (isOpenFilter === "year") {
      alert(" select year ");
      return;
    }
  }, [isOpenFilter]);

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
    </div>
  );
};

export default Filter;
