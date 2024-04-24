import { useLocation } from 'react-router-dom';
import Sidebar from './components/sidebar';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/system';


export default function Mail() {
  const location = useLocation();
  const user = {...location.state};
  return (
    <Box sx={{mx: 'auto'}}>
      <Sidebar user={user}/>
      <div style={{marginLeft: "200px", marginTop: "0px"}}>
        <Outlet/>
      </div>
   </Box>
  )
}
