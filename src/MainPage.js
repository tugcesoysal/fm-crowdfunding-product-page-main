import logo from "./images/logo.svg";
import mastercraft from "./images/logo-mastercraft.svg";
import bookmarkIcon from "./images/icon-bookmark.svg";
import desktopImage from "./images/image-hero-desktop.jpg";
import mobileImage from "./images/image-hero-mobile.jpg";
import bookmarkedIcon from "./images/icon-bookmarked.svg";
import iconMenu from "./images/icon-hamburger.svg";
import iconMenuClose from "./images/icon-close-menu.svg";
import data from "./data";
import Product from "./components/Product";
import { useState } from "react";

function MainPage({ handleClick }) {
  const products = data.map((item) => <Product key={item.name} {...item} />);
  const [bookMarked, setBookMarked] = useState(false);
  const [isMenuOpen, setIsMenuOper] = useState(false);

  return (
    <div className="mainPage">
      <header
        style={{
          backgroundImage: `url(${
            window.innerWidth >= 650 ? desktopImage : mobileImage
          })`,
        }}
      >
        <img src={logo} alt="logo" className="logoImage" />
        {window.innerWidth >= 650 && (
          <nav>
            <p>About</p>
            <p>Discover</p>
            <p>Get Started</p>
          </nav>
        )}
        {window.innerWidth < 650 && (
          <button
            className="menuBtn"
            onClick={() => setIsMenuOper(!isMenuOpen)}
          >
            <img
              src={isMenuOpen ? iconMenuClose : iconMenu}
              alt="icon menu"
              className="iconMenu"
            />
          </button>
        )}
        {isMenuOpen && (
          <div className="dropdown">
            <p>About</p>
            <div className="menu-line"></div>
            <p>Discover</p>
            <div className="menu-line"></div>
            <p>Get Started</p>
          </div>
        )}
      </header>
      <div className="main">
        <img src={mastercraft} alt="logo" className="logo" />
        <div className="headDiv">
          <h1>Mastercraft Bamboo Monitor Riser</h1>
          <p>
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <section className="actionButtons">
            <button className="backToProject" onClick={handleClick}>
              Back this project
            </button>
            <button
              className={bookMarked ? "bookmarkBtn bookmarked" : "bookmarkBtn"}
              onClick={() => {
                setBookMarked(!bookMarked);
              }}
            >
              <img
                src={bookMarked ? bookmarkedIcon : bookmarkIcon}
                alt="bookmark-icon"
                className="bookmarkImg"
              />

              <p>{bookMarked ? "Bookmarked" : "Bookmark"}</p>
            </button>
          </section>
        </div>
        <div className="totalLookDiv">
          <div className="total">
            <section>
              <h1>$89,914</h1>
              <p>of $100,000 backed</p>
            </section>
            <div className="line"></div>
            <section>
              <h1>5,007</h1>
              <p>total backers</p>
            </section>
            <div className="line"></div>

            <section>
              <h1>56</h1>
              <p>days left</p>
            </section>
          </div>
          <div className="fullBar">
            <div className="completedBar"></div>
          </div>
        </div>
        <div className="productsDiv">
          <h3>About this project</h3>
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand. Featuring artisan
            craftsmanship, the simplicity of design creates extra desk space
            below your computer to allow notepads, pens, and USB sticks to be
            stored under the stand.
          </p>
          {products}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
