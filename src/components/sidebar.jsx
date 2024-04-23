import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from "@mui/system";

const styles = styled(() => ({
  drawer: {
    width: 240,
  },
  drawerPaper: {
    width: 240,
  }
})
 
);

export default function Sidebar() {
  
  return (
    <Drawer
      className={styles.drawer}
      variant='permanent'
      anchor='left'
      classes={{paper: styles.drawerPaper}}
    >
      <Toolbar>
        <List>
          <ListItem key={'send'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={'Send'} />
            </ListItemButton>
          </ListItem>
        <Divider />
          <ListItem key={'inbox'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'Inbox'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'sent'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={'Sent'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'trash'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText primary={'Trash'} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Toolbar>
    </Drawer>
  );
}
