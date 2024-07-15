import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "../Header";
import Container from "../Container/Container";
import Post from "../Posts/PostItem/PostItem.type";
import PostsList from "../Posts/PostsList";
import LongRead from "../Blog/LongRead";
import Social from "../Social/SocialItem/SocialItem.type";
import Footer from "../Footer";
const posts: Post[] = [
  {
    id: "1",
    text: "Коти та їхні чудові навички: від полювання до загадкових здібностей",
    imgName: "picture1",
  },
  {
    id: "2",
    text: "Коти в літературі та мистецтві: від Егіпетських богів до сучасних майстрів",
    imgName: "picture2",
  },
  {
    id: "3",
    text: "Котячі породи для активних власників: як вибрати компаньйона",
    imgName: "picture3",
  },
];

const postsBlog: Post[] = [
  {
    id: "1",
    title: "Забавні факти про котів, які вас здивують",
    text: "Веселі та цікаві факти про котів, які піднімуть вам настрій та розкажуть про їхні унікальність.",
    imgName: "1",
  },
  {
    id: "2",
    title: "Найпопулярніші породи котів: який кіт підходить вам?",
    text: "Вивчіть найпопулярніші породи котів і їхні особливості, щоб зробити інформований вибір, який підходить саме вам.",
    imgName: "2",
  },
  {
    id: "3",
    title: "Як піклуватися про вашого пухнастого друга: догляд за котом",
    text: "Дізнайтеся про основні аспекти догляду за котом, включаючи годування, гігієну та взаємодію з вашим улюбленцем.",
    imgName: "4",
  },
  {
    id: "4",
    title: "Історія та культурна значущість котів в усьому світ",
    text: "Вивчіть, як коти впливали на культури різних народів та дізнайтеся історію спільного життя людей і котів.",
    imgName: "3",
  },
];

const socialList: Social[] = [
  {
    id: "1",
    title: "instagram",
    subscribers: "230.000",
    iconName: "instagram",
  },
  {
    id: "2",
    title: "facebook",
    subscribers: "230.000",
    iconName: "facebook",
  },
  {
    id: "3",
    title: "youtube",
    subscribers: "230.000",
    iconName: "youtube",
  },
  {
    id: "4",
    title: "tiktok",
    subscribers: "230.000",
    iconName: "tiktok",
  },
  {
    id: "5",
    title: "github",
    subscribers: "230.000",
    iconName: "github",
  },
  {
    id: "6",
    title: "twitter",
    subscribers: "230.000",
    iconName: "twitter",
  },
];

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <PostsList posts={posts} />
        <LongRead posts={postsBlog} socialList={socialList} />
        <Footer />
      </Container>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
