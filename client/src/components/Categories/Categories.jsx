import { useState } from "react";
import Categorie from "./Categorie/Categorie";
import "./Categories.scss";

export default function Categories() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      image: "/images/jpg/Categories_Art.jpg",
      icon: "/icons/Categories_art-PaintBrush.svg",
      title: "Art",
    },
    {
      id: 2,
      image: "/images/jpg/Categories_Collectibles.jpg",
      icon: "/icons/Swatches.svg",
      title: "Collectibles",
    },
    {
      id: 3,
      image: "/images/jpg/Categories_Music.jpg",
      icon: "/icons/MusicNotes.svg",
      title: "Music",
    },
    {
      id: 4,
      image: "/images/jpg/Categories_Photographies.jpg",
      icon: "/icons/Camera.svg",
      title: "Photography",
    },
    {
      id: 5,
      image: "/images/jpg/Categories_Video.jpg",
      icon: "/icons/VideoCamera.svg",
      title: "Video",
    },
    {
      id: 6,
      image: "/images/jpg/Categories_Utility.jpg",
      icon: "/icons/MagicWand.svg",
      title: "Utility",
    },
    {
      id: 7,
      image: "/images/jpg/Categories_Sport.jpg",
      icon: "/icons/Basketball.svg",
      title: "Sport",
    },
    {
      id: 8,
      image: "/images/jpg/Categories_Virtual.jpg",
      icon: "/icons/Planet.svg",
      title: "Virtual Worlds",
    },
  ]);
  return (
    <section className="categories">
      <div className="categories__container">
        <div className="categories__title">Browse Categories</div>
        <div className="categories__body body-categories">
          {categories.map((categorie) => (
            <Categorie
              key={categorie.id}
              image={categorie.image}
              icon={categorie.icon}
              title={categorie.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
