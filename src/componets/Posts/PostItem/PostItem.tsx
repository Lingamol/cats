import React from "react";
import Post from "./PostItem.type";
import css from "./PostItem.module.scss";
type Props = { item: Post };

const PostItem: React.FC<Props> = ({ item }) => {
  return (
    <a href="/" className={css.link}>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={require(`../../../img/posts/${item.imgName}@2x.png`)}
        />
        <source
          media="(min-width: 321px) and (max-width: 767px)"
          srcSet={require(`../../../img/posts/${item.imgName}.png`)}
        />
        <img
          src={require(`../../../img/posts/${item.imgName}_small.png`)}
          alt="post img"
        ></img>
      </picture>
      <div className={css.overlay}>
        <h2 className={css.text}>{item.text}</h2>
      </div>
    </a>
  );
};
export default PostItem;
