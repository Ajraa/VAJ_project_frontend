import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { loadActiveEmailsFetch, loadDeletedEmailsFetch, loadSentEmailsFetch } from '../API/EmailClient';
import { Box } from '@mui/system';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

export async function emailListLoader({ params }) {
  console.log(params);
  let ret;
  if (params.mode === 'r') ret = await loadActiveEmailsFetch(params.id);
  else if (params.mode === 'd') ret = await loadDeletedEmailsFetch(params.id);
  else if (params.mode === 's') ret = await loadSentEmailsFetch(params.id);
  else ret = { code: 400, message: 'Unexpected mode' };

  if (ret.code !== 200) return { code: ret.code, error: ret.message };
  return { obj: ret.obj, message: ret.message };
}

function getSubstring(string, maxLength) {
  return string.length > maxLength ? string.substring(0, maxLength) : string;
}

export default function EmailList() {
  const data = useLoaderData();
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const handleNavigation = (email) => {
    navigate(`/mail/${params.id}/content/${email.id}`, { state: email });
  };

  let mails;
  if (!data.error) {
    mails = data.obj.map((email) => (
      <ListItem key={email.id} divider onClick={() => handleNavigation(email)}>
        <ListItemButton>
          <ListItemText
            primary={<span style={{ fontWeight: 'bold' }}>{email.title}</span>}
            secondary={<span style={{ fontSize: 'smaller' }}>{getSubstring(email.content, 100)}</span>}
          />
        </ListItemButton>
      </ListItem>
    ));
  }

  return (
    <Box>
      <List>{mails}</List>
    </Box>
  );
}
