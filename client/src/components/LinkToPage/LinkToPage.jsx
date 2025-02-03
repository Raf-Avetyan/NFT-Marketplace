import { Link } from 'react-router-dom'

export default function LinkToPage({ href, target, children }) {
  return (
    <Link to={href} target={target}>
      {children}
    </Link>
  );
}
