import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Icon from "../icons/Icons";

const SleletonList = () => {
  return (
    <React.Fragment>
      {Array(6)
        .fill(6)
        .map((item, index) => (
          <div key={item.id} className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image skeleton"></div>
                <div className="track__title-text "></div>
              </div>
              <div className="track__author skeleton"></div>
              <div className="track__album skeleton"></div>
              <div className="track__time skeleton "></div>
            </div>
          </div>
        ))}
    </React.Fragment>
  );
};

export default SleletonList;
