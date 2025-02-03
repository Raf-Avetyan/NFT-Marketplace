import "./Footer.scss";
import SiteLogo from "../SiteLogo/SiteLogo";
import InputArea from "../JoinForm/InputArea/InputArea";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__body body-footer">
          <div className="body-footer__site-info site-info-body-footer">
            <div className="site-info-body-footer__site-name">
              <SiteLogo />
            </div>
            <div className="site-info-body-footer__text">
              NFT marketplace UI created with Anima for Figma.
            </div>
            <div className="site-info-body-footer__social social-site-info-body-footer">
              <span>Join our community</span>
              <div className="social-site-info-body-footer__icons">
                <img src="/icons/DiscordLogo.svg" alt="" />
                <img src="/icons/YoutubeLogo.svg" alt="" />
                <img src="/icons/TwitterLogo.svg" alt="" />
                <img src="/icons/InstagramLogo.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="body-footer__explore explore-body-footer">
            <ul className="explore-body-footer__list">
              <li className="explore-body-footer__item">
                <a href="#!" className="explore-body-footer__link">
                  Explore
                </a>
              </li>
              <li className="explore-body-footer__item">
                <a href="#!" className="explore-body-footer__link">
                  Marketplace
                </a>
              </li>
              <li className="explore-body-footer__item">
                <a href="#!" className="explore-body-footer__link">
                  Rankings
                </a>
              </li>
              <li className="explore-body-footer__item">
                <a href="#!" className="explore-body-footer__link">
                  Connect a wallet
                </a>
              </li>
            </ul>
          </div>
          <div className="body-footer__join-area area-join-body-footer">
            <div className="area-join-body-footer__title">
              Join our weekly digest
            </div>
            <div className="area-join-body-footer__text">
              Get exclusive promotions & updates straight to your inbox.
            </div>
            <form action="#!" className="area-join-body-footer__form">
              <InputArea />
            </form>
          </div>
        </div>
      </div>
      <div className="footer__bottom bottom-footer">
        <div className="bottom-footer__container">
          &copy; NFT Market. Use this template freely.
        </div>
      </div>
    </footer>
  );
}
