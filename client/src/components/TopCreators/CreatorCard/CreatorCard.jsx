import "./CreatorCard.scss";

export default function CreatorCard({ avatar, rang, nickName, total }) {
  return (
    <div className="creators-body__card card-creators-body">
      <div className="card-creators-body__rang">
        <span>{rang}</span>
      </div>
      <div className="card-creators-body__avatar">
        <img
          className="card-creators-body__avatar"
          src={avatar}
        />
      </div>
      <div className="card-creators-body__info">
        <div className="card-creators-body__nick-name">{nickName}</div>
        <div className="card-creators-body__progress">
          <span>Total Sales: </span>
          <span>{ total}</span>
        </div>
      </div>
    </div>
  );
}
