import React from "react";
import Icon from "../icons/Icons";

const fakeData = [
  { track: "Guilt", author: "Nero", album: "Welcome Reality", time: "4:44" },
  { track: "Guilt", author: "Nero", album: "Welcome Reality", time: "4:44" },
  { track: "Guilt", author: "Nero", album: "Welcome Reality", time: "4:44" },
  { track: "Guilt", author: "Nero", album: "Welcome Reality", time: "4:44" },
  { track: "Guilt", author: "Nero", album: "Welcome Reality", time: "4:44" },
  { track: "Guilt", author: "Nero", album: "Welcome Reality", time: "4:44" },
  { track: "Guilt", author: "Nero", album: "Welcome Reality", time: "4:44" },
  { track: "Guilt", author: "Nero", album: "Welcome Reality", time: "4:44" },
  { track: "Guilt", author: "Nero", album: "Welcome Reality", time: "4:44" },
  { track: "Guilt", author: "Nero", album: "Welcome Reality", time: "4:44" },
  { track: "Guilt", author: "Nero", album: "Welcome Reality", time: "4:44" },
  { track: "Guilt", author: "Nero", album: "Welcome Reality", time: "4:44" },
  { track: "Guilt", author: "Nero", album: "Welcome Reality", time: "4:44" },
];

interface IPlaylistItem {
  track: string;
  author: string;
  album: string;
  time: string;
}

const PlaylistItem = ({ track, author, album, time }: IPlaylistItem) => {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <Icon name="note" classIcon="track__title-svg" />
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              {track} <span className="track__title-span"></span>
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            {author}
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            {album}
          </a>
        </div>
        <div className="track__time">
          <Icon name="like" classIcon="track__title-svg" />

          <span className="track__time-text">{time}</span>
        </div>
      </div>
    </div>
  );
};

const Playlist = () => {
  return (
    <React.Fragment>
      <div className="content__title playlist-title">
        <div className="playlist-title__col col01">Трек</div>
        <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
        <div className="playlist-title__col col03">АЛЬБОМ</div>
        <div className="playlist-title__col col04">
          <Icon name="watch" classIcon="playlist-title__svg" />
        </div>
      </div>
      <div className="content__playlist playlist">
        {fakeData.map(PlaylistItem)}
      </div>
    </React.Fragment>
  );
};
export default Playlist;
