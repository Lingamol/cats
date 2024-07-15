import React from "react";

import css from "./SocialList.module.scss";
import Social from "../SocialItem/SocialItem.type";
import SocialItem from "../SocialItem";

type Props = { socialList: Social[] };

const SocialList: React.FC<Props> = ({ socialList }) => {
  return (
    <div className={css.socials}>
      <h2 className={`${css["socials-title"]} ${css.title}`}>Соцмережі</h2>
      <ul className={css["socials-list"]}>
        {socialList.map((item) => (
          <li className={css["socials-item"]} key={item.id}>
            <SocialItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SocialList;
