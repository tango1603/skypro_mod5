import Icon from "../components/common/icons/Icons";
import Volume from "../components/common/volume/Volume";
import "./Bar.scss";

export const Bar = () => {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress"></div>
        <div className="bar__player-block">
          <div className="bar__player player">
            <div className="player__controls">
              <div className="player__btn-prev">
                <Icon name="prev" classIcon="player__btn-prev-svg" />
              </div>
              <div className="player__btn-play _btn">
                <Icon name="play" classIcon="player__btn-play-svg" />
              </div>
              <div className="player__btn-next">
                <Icon name="next" classIcon="player__btn-next-svg" />
              </div>
              <div className="player__btn-repeat _btn-icon">
                <Icon name="repeat" classIcon="player__btn-repeat-svg" />
              </div>
              <div className="player__btn-shuffle _btn-icon">
                <Icon name="shuffle" classIcon="player__btn-shuffle-svg" />
              </div>
            </div>

            <div className="player__track-play track-play">
              <div className="track-play__contain">
                <div className="track-play__image">
                  <Icon name="note" classIcon="track-play__svg" />
                </div>
                <div className="track-play__author">
                  <a className="track-play__author-link" href="http://">
                    Ты та...
                  </a>
                </div>
                <div className="track-play__album">
                  <a className="track-play__album-link" href="http://">
                    Баста
                  </a>
                </div>
              </div>

              <div className="track-play__like-dis">
                <div className="track-play__like _btn-icon">
                  <svg className="track-play__like-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                </div>
                <div className="track-play__dislike _btn-icon">
                  <svg className="track-play__dislike-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <Volume />
        </div>
      </div>
    </div>
  );
};

export default Bar;
