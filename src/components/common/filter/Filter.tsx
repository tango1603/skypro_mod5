import { useState } from "react";
import Button from "./buttons/Button";
import "./Filter.scss";

const Filter = () => {
  const [filterValue, setFilter] = useState("");

  const onFilterClickHandler = (type: string) => {
    setFilter(type);
    console.log("onFilterClickHandle", type);
  };

  const filterAPI = [
    {
      key: 1,
      text: "исполнителю",
      type: "author",
      onClick: onFilterClickHandler,
    },
    {
      key: 2,
      text: "году выпуска",
      type: "year",
      onClick: onFilterClickHandler,
    },
    { key: 3, text: "жанру", type: "genre", onClick: onFilterClickHandler },
  ];

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      {filterAPI.map(Button)}
    </div>
  );
};
export default Filter;
