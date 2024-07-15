import React from "react";
import css from "./BlogItem.module.scss";
import Post from "../../Posts/PostItem/PostItem.type";
type Props = { item: Post };

const BlogItem: React.FC<Props> = ({ item }) => {
  return (
    <a href="#" className={css["blog-link"]}>
      <img
        src={require(`../../../img/blog/${item.imgName}.png`)}
        alt="cat"
        className={css["blog-photo"]}
      />
      <div className={css.wrapper}>
        <h2 className={css["blog-title"]}>{item.title}</h2>
        <p className={css["blog-text"]}>{item.text}</p>
      </div>
    </a>
  );
};
export default BlogItem;
