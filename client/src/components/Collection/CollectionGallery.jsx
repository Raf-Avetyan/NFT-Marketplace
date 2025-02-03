import './CollectionGallery.scss';

export default function CollectionGallery({
  srcOne,
  srcTwo,
  srcThree,
  otherCount,
  title,
  avatar,
  nickName,
}) {
  return (
    <>
      <div className="collection-body">
        <div className="collection-body__top">
          <div className="top-collection-body__big-img">
            <img src={srcOne} alt={srcOne} />
          </div>
          <div className="top-collection-body__bottom">
            <div><img src={srcTwo} alt={srcTwo} /></div>
            <div><img src={srcThree} alt={srcThree} /></div>
            <div className="bottom-collection-top-body__others">
              {otherCount}
            </div>
          </div>
        </div>
        <div className="collection-body__bottom">
          <div className="bottom-collection-body__title">{title}</div>
          <div className="bottom-collection-body__user">
            <div className="bottom-collection-body__nick">
              <img src={avatar} alt={avatar} />
            </div>
            <div className="bottom-collection-body__nickName">{nickName}</div>
          </div>
        </div>
      </div>
    </>
  );
}
