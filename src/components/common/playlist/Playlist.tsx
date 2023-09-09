import React, { useEffect, useState } from "react";
import Icon from "../icons/Icons";
import SleletonList from "./SkeletonList";
import "./Playlist.scss";
import { fakeData } from "../../../api/tracks";
import { IPlaylistItem } from "../../../interfaces";

const Item = (item: IPlaylistItem) => {
  console.log(item);
  return (
    <div key={item.id} className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <Icon name="note" classIcon="track__title-svg" />
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              {item.track} <span className="track__title-span"></span>
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            {item.author}
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            {item.album}
          </a>
        </div>
        <div className="track__time">
          <Icon name="like" classIcon="track__title-svg" />
          <span className="track__time-text">{item.time}</span>
        </div>
      </div>
    </div>
  );
};

const Playlist = () => {
  const [tracks, setTracks] = useState([] as Array<IPlaylistItem>);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timing = setTimeout(() => {
      setTracks(fakeData);
      setLoading(false);
    }, 3000);
    return () => clearInterval(timing);
  }, []);
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
        {isLoading && <SleletonList />}

        {!isLoading &&
          tracks.map((item) => {
            return <Item {...item} />;
          })}
      </div>
    </React.Fragment>
  );
};
export default Playlist;
