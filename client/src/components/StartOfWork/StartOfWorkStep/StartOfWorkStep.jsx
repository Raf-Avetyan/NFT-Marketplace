import "./vStartOfWorkStep.scss";

export default function StartOfWorkStep({ image, title, text }) {
  return (
    <div className="content-start-of-work__card card-content">
      <div className="card-content__image">
        <img src={image} alt="" />
      </div>
      <div className="card-content__desc">
        <div className="card-content__title">{title}</div>
        <div className="card-content__text">{text}</div>
      </div>
    </div>
  );
}
