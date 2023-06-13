import Button from "../button/Button";

const dummyFilterAPI = [
  { text: "исполнителю", type: "author" },
  { text: "году выпуска", type: "year" },
  { text: "жанру", type: "genre" },
];

const Filter = () => {
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      {dummyFilterAPI.map(Button)}
    </div>
  );
};
export default Filter;
