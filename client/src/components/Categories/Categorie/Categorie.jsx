import "./Categorie.scss";

export default function Categorie({image, icon, title}) {
  return (
    <div className="body-categories__card card-body-categories">
      <div className="card-body-categories__image">
        <img src={image} alt="" />
        <div className="card-body-categories__image-top">
          <img src={icon} alt="" />
        </div>
      </div>
      <div className="card-body-categories__title">{title}</div>
    </div>
  );
}
