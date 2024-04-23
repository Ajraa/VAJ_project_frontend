import { useLocation } from 'react-router-dom';
import Sidebar from './components/sidebar';


export default function Mail() {
  const location = useLocation();
  const user = location.state;
  return (
   <Sidebar/>
  )
}
