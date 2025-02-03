import { useState } from "react";
import Button from "../Button/Button";
import CreatorCard from "./CreatorCard/CreatorCard";
import "./TopCreators.scss";

const Rocket = "/icons/RocketLaunch.svg";

export default function TopCreators() {
  const [topCreatorsList, setTopCreatorsList] = useState([
    {
      id: 1,
      rang: 1,
      avatar: "/icons/Avatars/Avatar1.svg",
      nickName: "Keepitreal",
      total: "34.53 ETH",
    },
    {
      id: 2,
      rang: 2,
      avatar: "/icons/Avatars/Avatar2.svg",
      nickName: "DigiLab",
      total: "34.53 ETH",
    },
    {
      id: 3,
      rang: 3,
      avatar: "/icons/Avatars/Avatar3.svg",
      nickName: "DigiLab",
      total: "34.53 ETH",
    },
    {
      id: 4,
      rang: 4,
      avatar: "/icons/Avatars/Avatar4.svg",
      nickName: "Juanie",
      total: "34.53 ETH",
    },
    {
      id: 5,
      rang: 5,
      avatar: "/icons/Avatars/Avatar5.svg",
      nickName: "Juanie",
      total: "34.53 ETH",
    },
    {
      id: 6,
      rang: 6,
      avatar: "/icons/Avatars/Avatar6.svg",
      nickName: "Mr Fox",
      total: "34.53 ETH",
    },
    {
      id: 7,
      rang: 7,
      avatar: "/icons/Avatars/Avatar7.svg",
      nickName: "Shroomie",
      total: "34.53 ETH",
    },
    {
      id: 8,
      rang: 8,
      avatar: "/icons/Avatars/Avatar8.svg",
      nickName: "Robotica",
      total: "34.53 ETH",
    },
    {
      id: 9,
      rang: 9,
      avatar: "/icons/Avatars/Avatar9.svg",
      nickName: "RustyRobot",
      total: "34.53 ETH",
    },
    {
      id: 10,
      rang: 10,
      avatar: "/icons/Avatars/avatar14.svg",
      nickName: "RustyRobot",
      total: "34.53 ETH",
    },
    {
      id: 11,
      rang: 11,
      avatar: "/icons/Avatars/avatar15.svg",
      nickName: "Dotgu",
      total: "34.53 ETH",
    },
    {
      id: 12,
      rang: 12,
      avatar: "/icons/Avatars/avatar17.svg",
      nickName: "Ghiblier",
      total: "34.53 ETH",
    },
  ]);

  return (
    <section className="top-creators">
      <div className="top-creators__container">
        <div className="top-creators__up up-top-creators">
          <div className="up-top-creators__left">
            <div className="up-top-creators__title">Top creators</div>
            <div className="up-top-creators__text">
              Checkout Top Rated Creators on the NFT Marketplace
            </div>
          </div>
          <Button
            className="up-top-creators__btn primary-btn primary-btn-transparent"
            src={Rocket}
          >
            View Rankings
          </Button>
        </div>
        <div className="top-creators__creators-body creators-body">
          {topCreatorsList.map((creator) => (
            <CreatorCard
              key={creator.id}
              avatar={creator.avatar}
              rang={creator.rang}
              nickName={creator.nickName}
              total={creator.total}
            />
          ))}
        </div>
        <Button
          className="up-top-creators__btn-hide primary-btn primary-btn-transparent"
          src={Rocket}
        >
          View Rankings
        </Button>
      </div>
    </section>
  );
}
