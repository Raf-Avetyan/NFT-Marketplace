import "./TrendNFTs.scss";
import Button from "../Button/Button";
import TrendNFTCard from "./TrendNFTCard/TrendNFTCard";
import { useState } from "react";

const EyeIcon = "/icons/Eye.svg";

export default function TrendNFTs() {
  const [trandNFTS, setTrandNFTS] = useState([
    {
      id: 1,
      image: "/images/jpg/Trend-NFTs_cosmos.jpg",
      name: "Distant Galaxy",
      userAvatar: "/icons/Avatars/avatar16.svg",
      nickName: "MoonDancer",
      price: "1.63 ETH",
      highestBid: "0.33 wETH",
    },
    {
      id: 2,
      image: "/icons/Categories_Video.svg",
      name: "Life On Edena",
      userAvatar: "/icons/Avatars/Avatar10.svg",
      nickName: "NebulaKid",
      price: "1.63 ETH",
      highestBid: "0.33 wETH",
    },
    {
      id: 3,
      image: "/images/jpg/Trend-NFTs_girl.jpg",
      name: "AstroFiction",
      userAvatar: "/icons/Avatars/avatar15.svg",
      nickName: "Spaceone",
      price: "1.63 ETH",
      highestBid: "0.33 wETH",
    },
  ]);

  return (
    <section className="trend-nfts">
      <div className="trend-nfts__container">
        <div className="trend-nfts__top top-trend-nfts">
          <div className="top-trend-nfts__left">
            <div className="top-trend-nfts__title">Discover More NFTs</div>
            <div className="top-trend-nfts__text">
              Explore new trending NFTs
            </div>
          </div>
          <Button
            className="top-trend-nfts__btn primary-btn primary-btn-transparent"
            src={EyeIcon}
          >
            See All
          </Button>
        </div>
        <div className="trend-nfts__content content-trend-nfts">
          {trandNFTS.map((item) => (
            <TrendNFTCard
              key={item.id}
              image={item.image}
              name={item.name}
              userAvatar={item.userAvatar}
              nickName={item.nickName}
              price={item.price}
              highestBid={item.highestBid}
            />
          ))}
        </div>
        <Button
          className="top-trend-nfts__btn top-trend-nfts__btn-hide primary-btn primary-btn-transparent"
          src={EyeIcon}
        >
          See All
        </Button>
      </div>
    </section>
  );
}
