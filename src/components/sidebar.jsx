import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const activeStyle = {
  background: '#f4f4f4',
};

const drawer = {
  width: 240,
};

const drawerPaper = {
  width: 240,
};

export default function Sidebar(props) {
  const navigate = useNavigate();
  const [mode, setMode] = useState(null);
  const [user, setUser] = useState(props.user);

  useEffect(() => {
    if (user === null || !user.username) navigate('/');
  });

  const handleNavigation = (mode) => {
    console.log('user');
    console.log(user);
    setMode(mode);
    navigate(`/mail/${user.id}/${mode}`, { state: user });
  };
  return (
    <Drawer style={drawer} variant="permanent" anchor="left" classes={{ paper: drawerPaper }}>
      <List>
        <ListItem
          key={'send'}
          disablePadding
          onClick={() => {
            navigate(`/mail/${user.id}/content/send`);
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary={'Send'} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem
          key={'inbox'}
          disablePadding
          onClick={() => handleNavigation('r')}
          style={mode == 'r' ? activeStyle : null}
        >
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'Inbox'} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={'sent'}
          disablePadding
          onClick={() => handleNavigation('s')}
          style={mode == 's' ? activeStyle : null}
        >
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={'Sent'} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={'trash'}
          disablePadding
          onClick={() => handleNavigation('d')}
          style={mode == 'd' ? activeStyle : null}
        >
          <ListItemButton>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary={'Trash'} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
