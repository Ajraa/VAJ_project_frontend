import { useLocation } from 'react-router-dom';

export default function Mail() {
  const location = useLocation();
  console.log(location);
  return <p>location</p>;
}
