import * as React from 'react';
import { signIn } from '../api/auth/Signin';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Loader } from '../components/Loader'

export default function SignIn() {
  const navigate = useNavigate();
  const [loader , setLoader] = React.useState(false);

  const handleSubmit = async (event) => {
    setLoader(true);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await signIn(formData);
    navigate('/dashboard');
    setLoader(false);
  };
  const sessionCheck = async () => {
    if (localStorage['session']){
      navigate('/dashboard');
    }
  }
  React.useEffect(() => {
    sessionCheck();
  });
  return (
    <div>
      {
        loader ? <Loader /> :null 
      }
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <button className='block w-full max-w-xs my-3 mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold'>
              Sign In
            </button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}