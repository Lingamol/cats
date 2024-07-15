import React from "react";
import css from "./VideoInfo.module.scss";

const VideoInfo: React.FC = () => {
  return (
    <div className={css.video}>
      <h2 className={css["video-title"]}>Відео з пухнастиком</h2>
      <img src={require(`../../img/video/picturetab.png`)} alt="video" />
    </div>
  );
};

export default VideoInfo;
