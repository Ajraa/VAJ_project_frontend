import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { registerFetch } from './API/UserClient';
import { useActionData, Form, useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

export async function registerAction({ request }) {
  const formData = await request.formData();
  const username = formData.get('username');
  const password = formData.get('password');
  const confirm_password = formData.get('confirm_password');
  if (password !== confirm_password) return "Passwords doesn't match";

  const serverResponse = await registerFetch(username, password);

  if (serverResponse.code != 200) return { error: serverResponse.message };
  return { obj: serverResponse.obj };
}

export default function Register() {
  const defaultTheme = createTheme();
  const errors = useActionData();
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="xs" component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component={Form} method="post">
            <TextField required margin="normal" fullWidth id="username" name="username" label="Username" autoFocus />
            <TextField
              required
              margin="normal"
              type="password"
              fullWidth
              id="password"
              name="password"
              label="Password"
            />
            <TextField
              required
              margin="normal"
              fullWidth
              id="confirm_password"
              name="confirm_password"
              label="Confirm Password"
              type="password"
            />
            <Button type="submit" fullWidth>
              Sign up
            </Button>
            {errors?.error && <Alert severity="error">{errors.error}</Alert>}
            {errors?.obj && navigate(`/mail/${errors.obj.id}`, { state: errors.obj })}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
