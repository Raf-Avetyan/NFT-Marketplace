import "./Button.scss";
import { Link } from "react-router-dom";

export default function Button({
  children,
  className,
  src,
  classNameOfLink,
  alt,
  href,
  target,
}) {
  return (
    <>
      {href || target ? (
        <Link to={href} target={target} className={classNameOfLink}>
          <button className={className}>
            <img src={src} alt={alt} />
            <span>{children}</span>
          </button>
        </Link>
      ) : (
        <button className={className}>
          <img src={src} alt={alt} />
          <span>{children}</span>
        </button>
      )}
    </>
  );
}
