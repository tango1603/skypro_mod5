import Filter from "../common/filter/Filter";
import Playlist from "../common/playlist/Playlist";
import Search from "../common/search/Search";
import Sidebar from "../sidebar/Sidebar";
import Nav from "../nav/Nav";
import "./Main.scss";

const Main = () => {
  return (
    <main className="main">
      <Nav />
      <div className="main__centerblock centerblock">
        <Search />

        <h2 className="centerblock__h2">Треки</h2>
        <Filter />

        <div className="centerblock__content">
          <Playlist />
        </div>
      </div>
      <Sidebar />
    </main>
  );
};
export default Main;
