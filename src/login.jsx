import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Link as reactLink, useNavigate } from 'react-router-dom';
import { loginFetch } from './API/UserClient';
import { useActionData, Form } from 'react-router-dom';
import Alert from '@mui/material/Alert';

export async function loginAction({ request }) {
  const formData = await request.formData();
  const username = formData.get('username');
  const password = formData.get('password');
  const serverResponse = await loginFetch(username, password);
  console.log(serverResponse);
  if (serverResponse.code != 200) return { error: serverResponse.message };

  return { obj: serverResponse.obj };
}

export default function Login() {
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
            Sign in
          </Typography>
          <Box component={Form} method="post">
            <TextField required margin="normal" fullWidth id="username" name="username" label="Username" autoFocus />
            <TextField required margin="normal" fullWidth id="password" name="password" label="Password" />
            <Button type="submit" fullWidth>
              Sign in
            </Button>
            {errors?.error && <Alert severity="error">{errors.error}</Alert>}
            {errors?.obj && navigate('/mail', { state: errors.obj })}
            <Grid container>
              <Grid item xs>
                <Link variant="body2">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link component={reactLink} to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
