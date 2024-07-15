import React from "react";
import css from "./LongRead.module.scss";
import Post from "../../Posts/PostItem/PostItem.type";
import BlogList from "../BlogList";
import SocialList from "../../Social/SocialList";
import Social from "../../Social/SocialItem/SocialItem.type";
import VideoInfo from "../../VideoInfo";

type Props = { posts: Post[]; socialList: Social[] };

const LongRead: React.FC<Props> = ({ posts, socialList }) => {
  return (
    <section className={css.longread}>
      <div className={css.blog}>
        <BlogList posts={posts} />
      </div>
      <div className={css.socials}>
        <SocialList socialList={socialList} />
      </div>
      <div className={css.video}>
        <VideoInfo />
      </div>

      {/* <ul className={css.blog}>
        <li className="blog-item">
          <a href="#" className="blog-link">
            <img
              src={require("../../../img/blog/1.png")}
              alt="cat"
              className="blog-photo"
            />
            <div className="wrapper">
              <h2 className="blog-title sub-title">
                Забавні факти про котів, які вас здивують
              </h2>
              <p className="blog-text">
                Веселі та цікаві факти про котів, які піднімуть вам настрій та
                розкажуть про їхні унікальність.
              </p>
            </div>
          </a>
        </li>
        <li className="blog-item">
          <a href="#" className="blog-link">
            <img
              src={require("../../../img/blog/2.png")}
              alt="cats"
              className="blog-photo"
            />
            <div className="wrapper">
              <h2 className="blog-title sub-title">
                Найпопулярніші породи котів: який кіт підходить вам?
              </h2>
              <p className="blog-text">
                Вивчіть найпопулярніші породи котів і їхні особливості, щоб
                зробити інформований вибір, який підходить саме вам.
              </p>
            </div>
          </a>
        </li>
        <li className="blog-item">
          <a href="#" className="blog-link">
            <img
              src={require("../../../img/blog/4.png")}
              alt="red-cat"
              className="blog-photo"
            />
            <div className="wrapper">
              <h2 className="blog-title sub-title">
                Як піклуватися про вашого пухнастого друга: догляд за котом
              </h2>
              <p className="blog-text">
                Дізнайтеся про основні аспекти догляду за котом, включаючи
                годування, гігієну та взаємодію з вашим улюбленцем.
              </p>
            </div>
          </a>
        </li>
        <li className="blog-item">
          <a href="#" className="blog-link">
            <img
              src={require("../../../img/blog/3.png")}
              alt="red-cat"
              className="blog-photo"
            />
            <div className="wrapper">
              <h2 className="blog-title sub-title">
                Історія та культурна значущість котів в усьому світ
              </h2>
              <p className="blog-text">
                Вивчіть, як коти впливали на культури різних народів та
                дізнайтеся історію спільного життя людей і котів.
              </p>
            </div>
          </a>
        </li>
      </ul>
      <div className={css.socials}>
        <h2 className="socials-title title">Соцмережі</h2>
        <ul className="socials-list">
          <li className="socials-item">
            <a href="#" className="social-link">
              <img
                src={require("../../../img/social/instagram.png")}
                alt="instagram"
                className="social-icon"
              />
              <p className="social-subscripers">230.000</p>
            </a>
          </li>
          <li className="socials-item">
            <a href="#" className="social-link">
              <img
                src={require("../../../img/social/facebook.png")}
                alt="facebook"
                className="social-icon"
              />
              <p className="social-subscripers">230.000</p>
            </a>
          </li>
          <li className="socials-item">
            <a href="#" className="social-link">
              <img
                src={require("../../../img/social/youtube.png")}
                alt="youtube"
                className="social-icon"
              />
              <p className="social-subscripers">230.000</p>
            </a>
          </li>
          <li className="socials-item">
            <a href="#" className="social-link">
              <img
                src={require("../../../img/social/tiktok.png")}
                alt="tiktok"
                className="social-icon"
              />
              <p className="social-subscripers">230.000</p>
            </a>
          </li>
          <li className="socials-item">
            <a href="#" className="social-link">
              <img
                src={require("../../../img/social/github.png")}
                alt="github"
                className="social-icon"
              />
              <p className="social-subscripers">230.000</p>
            </a>
          </li>
          <li className="socials-item">
            <a href="#" className="social-link">
              <img
                src={require("../../../img/social/twitter.png")}
                alt="twitter"
                className="social-icon"
              />
              <p className="social-subscripers">230.000</p>
            </a>
          </li>
        </ul>
      </div>
      <div className={css.video}>
        <h2 className="video-title title">Відео з пухнастиком</h2>
        <img src={require("../../../img/video/picturetab.png")} alt="video" />
      </div> */}
    </section>
  );
};
export default LongRead;
