import React from "react";
import Post from "../PostItem/PostItem.type";
import PostItem from "../PostItem";
import css from "./PostsList.module.scss";

type Props = { posts: Post[] };

const PostsList: React.FC<Props> = ({ posts }) => {
  return (
    <ul className={css.post}>
      {posts.map((item) => (
        <li key={item.id}>
          <PostItem item={item} />
        </li>
      ))}
    </ul>
  );
};
export default PostsList;
