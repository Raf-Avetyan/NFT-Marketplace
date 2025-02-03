import Button from "../Button/Button";
import GetStartedRight from "./GetStartedRight";
import axios from "axios";

const Rocket = "/icons/RocketLaunch.svg";
const UserAvatar = "/icons/Avatars/avatar14.svg";
const GetStartedImg = "/images/jpg/get-started-img.jpg";

import "./GetStarted.scss";

export default function GetStarted() {
  return (
    <section className="get-started">
      <div className="get-started__container">
        <div className="get-started__content">
          <div className="get-started__title">
            Discover digital art & Collect NFTs
          </div>
          <div className="get-started__text">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </div>
          <GetStartedRight
            className="get-started__right hidden"
            GetStartedImg={GetStartedImg}
            UserAvatar={UserAvatar}
          />
          <Button className="get-started__btn primary-btn" src={Rocket}>
            Get Started
          </Button>
          <div className="get-started__progress">
            <ul>
              <li>
                <span className="progress-get-started__amount">240k+ </span>
                <span className="progress-get-started__name">Total Sale</span>
              </li>
              <li>
                <span className="progress-get-started__amount">100k+</span>
                <span className="progress-get-started__name">Auctions</span>
              </li>
              <li>
                <span className="progress-get-started__amount">240k+</span>
                <span className="progress-get-started__name">Artists</span>
              </li>
            </ul>
          </div>
        </div>
        <GetStartedRight
          className="get-started__right"
          GetStartedImg={GetStartedImg}
          UserAvatar={UserAvatar}
        />
      </div>
    </section>
  );
}
