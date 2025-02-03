import { useState } from "react";
import CollectionGallery from "./CollectionGallery";
import "./TrendingCollection.scss";

export default function TrendingCollection() {
  const [GalleryCollection, setGalleryCollection] = useState([
    {
      id: 1,
      srcOne: "/images/jpg/TrendCollection-dog.jpg",
      srcTwo: "/images/jpg/TrendCollection-animal1.jpg",
      srcThree: "/images/jpg/TrendCollection-animal2.jpg",
      otherCount: "1025+",
      title: "DSGN Animals",
      avatar: "/icons/Avatars/Avatar6.svg",
      nickName: "MrFox",
    },
    {
      id: 2,
      srcOne: "/images/jpg/TrendCollection-grib.jpg",
      srcTwo: "/images/jpg/TrendCollection-grib.jpg",
      srcThree: "/images/jpg/TrendCollection-grib.jpg",
      otherCount: "825+",
      title: "Magic Mushrooms",
      avatar: "/icons/Avatars/Avatar7.svg",
      nickName: "Shroomie",
    },
    {
      id: 3,
      srcOne: "/images/jpg/TrendCollection-robot.jpg",
      srcTwo: "/images/jpg/TrendCollection-robot.jpg",
      srcThree: "/images/jpg/TrendCollection-robot.jpg",
      otherCount: "375+",
      title: "Disco Machines",
      avatar: "/icons/Avatars/avatar12.svg",
      nickName: "BeKind2Robots",
    },
  ]);

  return (
    <section className="trending-collection">
      <div className="trending-collection__container">
        <div className="trending-collection__title">Trending Collection</div>
        <div className="trending-collection__text">
          Checkout our weekly updated trending collection.
        </div>
        <div className="trending-collection__content">
          {GalleryCollection.map((item) => (
            <CollectionGallery
              key={item.id}
              srcOne={item.srcOne}
              srcTwo={item.srcTwo}
              srcThree={item.srcThree}
              otherCount={item.otherCount}
              title={item.title}
              avatar={item.avatar}
              nickName={item.nickName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
