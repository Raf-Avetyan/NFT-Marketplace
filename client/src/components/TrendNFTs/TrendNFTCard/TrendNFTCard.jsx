import "./TrendNFTCard.scss";

export default function TrendNFTCard({
  image,
  name,
  userAvatar,
  nickName,
  price,
  highestBid,
}) {
  return (
    <div className="content-trend-nfts__card card-content-trend-nfts">
      <div className="card-content-trend-nfts__image">
        <img src={image} alt="" />
      </div>
      <div className="card-content-trend-nfts__bottom">
        <div className="card-content-trend-nfts__name">{name}</div>
        <div className="card-content-trend-nfts__user user-card-content">
          <div className="user-card-content__avatar">
            <img src={userAvatar} alt="" />
          </div>
          <div className="user-card-content__nickname">{nickName}</div>
        </div>
        <div className="card-content-trend-nfts__info info-card-content">
          <div className="info-card-content__price">
            <p>Price</p>
            <span>{price}</span>
          </div>
          <div className="info-card-content__highest-bid">
            <p>Highest Bid</p>
            <span>{highestBid}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
