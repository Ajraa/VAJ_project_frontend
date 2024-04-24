import { Form, useActionData, useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import { Box, TextField, Button, Alert } from "@mui/material";
import { getUserByIdFetch } from "../API/UserClient";
import { deleteFetch, markDeletedFetch, sendEmailFetch } from "../API/EmailClient";

export async function mailContentAction({params, request}) {
  console.log(params);
  console.log(request);

  if(request.method === 'POST') {
    const formData = await request.formData();
    console.log(formData);
    const title = formData.get('title');
    const email = formData.get('email');
    const content = formData.get('email');
    const serverResponse = await sendEmailFetch(params.id, email, title, content);
    if (serverResponse.code != 200) return {"error": serverResponse.message};
    return {"obj": serverResponse.obj};
  }
  else if (request.method === 'PUT') {
    const serverResponse = await markDeletedFetch(params.mail_id);
    if (serverResponse.code != 200) return {"error": serverResponse.message};
    return {"obj": serverResponse.obj};
  }
  else if (request.method === 'DELETE') {
    const serverResponse = await deleteFetch(params.mail_id);
    console.log(serverResponse);
    if (serverResponse.code != 200) return {"error": serverResponse.message};
    return {"obj": "deleted"};
  }
    return {"error": "Not implemented"};
}

export async function mailContentLoader({params}) {
  console.log(params);
  if (params.mail_id === 'send') {
    console.log('sendMode');
    return {"send": true};
  }
  const serverResponse = await getUserByIdFetch(params.id);

  console.log(serverResponse);

  if (serverResponse.code != 200) return {"error": serverResponse.message};
  return {"obj": serverResponse.obj};
}

export default function MailContent() {
  const errors = useLoaderData();
  const aerrors = useActionData();
  const navigate = useNavigate();
  const params = useParams();

  console.log(aerrors);
  if(aerrors?.obj)
    navigate(`/mail/${params.id}`);

  const location = useLocation();
  const mail = location.state;
  console.log(mail);

  let button;
  if(errors.send) {
     button = <Button type="submit" fullWidth>
              Send
            </Button>
  } else {
   if(!mail.deleted) {
    button = <Button type="submit" fullWidth>
    To Trash
    </Button>
   } else {
    button = <Button type="submit" fullWidth>
    Delete
    </Button>
   }
  }
    
  return (
    <Box
    sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      gap: 5,
    }}
    component={Form}
    method={errors.send ? "POST" : !mail.deleted ? "PUT": 'DELETE'}
    >
      <TextField  InputProps={!errors.send && {
            readOnly: true,
          }}
          defaultValue={mail?.title && mail.title}
          id='title'
          label='Title'
          name='title'
          fullWidth />

      <TextField InputProps={ !errors.send && {
            readOnly: true,
          }}
          defaultValue={errors?.obj && errors.obj.email}
          id='email'
          label='email'
          name='email'
          fullWidth/>

          <TextField
          InputProps={ !errors.send && {
            readOnly: true,
          }}
          id='content'
          label='Content'
          name='content'
          defaultValue={mail?.content && mail.content}
          multiline
          minRows={6}
          maxRows={Infinity}
          fullWidth
        />
        <Box>
        {button}
        {errors?.error && <Alert severity="error">{errors.error}</Alert>}
        {aerrors?.error && <Alert severity="error">{aerrors.error}</Alert>}
        </Box>
        
    </Box>
  );
}