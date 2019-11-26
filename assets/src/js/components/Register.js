import React, {Component,useState} from "react";
import {connect} from "react-redux";
import { useSelector, useEffect, useDispatch  } from 'react-redux';
import {auth} from "../actions";
import { Redirect} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Register (props) {
  const classes = useStyles();
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [username, setUsername] = useState( '' );
  const [password1, setPassword1] = useState( '' );
  const [password2, setPassword2] = useState( '' );
  const [email, setEmail] = useState( '' );


  const onSubmit = e => {
    e.preventDefault();
    dispatch(auth.register(username,password1,password2,email));
  }

    if (state.isAuthenticated) {
      return <Redirect to="/app/dashboard" />
    }
    return (
      <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Register for an account
      </Typography>
      <form onSubmit={onSubmit} className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              onChange={e => setEmail(e.target.value)}
            />
          </Grid>          
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              onChange={e => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password1"
              label="Password"
              type="password"
              id="password1"
              autoComplete="current-password"
              onChange={e => setPassword1(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password2"
              label="Repeat Password"
              type="password"
              id="password2"
              autoComplete="current-password"
              onChange={e => setPassword2(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              Already have an account? Login here.
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  </Container>
    )
  }


export default Register;