import React from "react";
import css from "./SocialItem.module.scss";
import Social from "./SocialItem.type";

type Props = { item: Social };

const SocialItem: React.FC<Props> = ({ item }) => {
  return (
    <a
      href=""
      className={`${css["social-link"]} ${item.title ? css[item.title] : ""}`}
    >
      <img
        src={require(`../../../img/social/${item.iconName}.png`)}
        alt={item.title}
        className={css["social-icon"]}
      />
      <p className={css["social-subscribers"]}>{item.subscribers}</p>
    </a>
  );
};

export default SocialItem;
