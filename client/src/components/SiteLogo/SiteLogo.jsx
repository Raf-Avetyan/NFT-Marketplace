import "./SiteLogo.scss";
const siteLogo = "/icons/Storefront.svg";
import { Link } from "react-router-dom";

export default function SiteLogo() {
  return (
    <div className="site__logo">
      <img src={siteLogo} alt="Storefront" />
      <Link to="/Home">
        <span>NFT Marketplace</span>
      </Link>
    </div>
  );
}
