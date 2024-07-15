import React from "react";
import css from "./BlogList.module.scss";
import Post from "../../Posts/PostItem/PostItem.type";
import BlogItem from "../BlogItem";

type Props = { posts: Post[] };

const BlogList: React.FC<Props> = ({ posts }) => {
  return (
    <ul className={css.blog}>
      {posts.map((item) => (
        <li className={css["blog-item"]} key={item.id}>
          <BlogItem item={item} />
        </li>
      ))}
    </ul>
  );
};
export default BlogList;
