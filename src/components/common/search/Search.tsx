import Icon from "../icons/Icons";

const Search = () => {
  return (
    <div className="centerblock__search search">
      <Icon name="search" classIcon="search__svg" />

      <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
};
export default Search;
