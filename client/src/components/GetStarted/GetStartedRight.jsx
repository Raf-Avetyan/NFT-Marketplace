export default function GetStartedRight({ GetStartedImg, UserAvatar, className}) {
  return (
    <div className={className}>
      <div className="right-get-started__image">
        <img src={GetStartedImg} alt="Get-Started Img" />
      </div>
      <div className="get-started__right-bottom">
        <div className="right-get-started__desc">Space Walking</div>
        <div className="right-get-started__user">
          <img className="user-right-get-started__avatar" src={UserAvatar} />
          <div className="user-right-get-started__name">Animakid</div>
        </div>
      </div>
    </div>
  );
}