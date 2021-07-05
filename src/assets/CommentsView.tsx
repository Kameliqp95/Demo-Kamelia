import React from 'react'
import { useFormik } from 'formik'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useTranslation } from 'react-i18next';


const useStyles = makeStyles((theme) => ({
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
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 10, 10, 5),
  },
  name: {
    margin: theme.spacing(0, 0, 0, 0),
  },
  multiline: {
    margin: theme.spacing(0, 17, 0, 0),
  },
  cancel: {
    margin: theme.spacing(3, 1, 10, -5),
  },
  icons: {
    margin: theme.spacing(0, 20, 0, 0),
  },
  icons_style: {
    fontSize: 'small',
  },
  bigAvatar: {
    margin: 0,
    width: 50,
    height: 50,
},
width: {
  width: '300px',
},
}));


function CommentsView() {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>

        <form className={classes.form} noValidate>



          <div className={classes.name}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
              <Avatar alt="Ivan Petkov" src="https://lh3.googleusercontent.com/proxy/ON_6Wl5OOBIgjpY16q34DIsPt43kJjJH04y6ballrv1SKUPIO4LYOdbdq4Aio5GRUEt27Nt1uHOH7SmTObg0iB70l6utsENdJHz5uk9w0dORwA" className={classes.bigAvatar} />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label={t("Name")} />
              </Grid>
            </Grid>
          </div>
          <div className={classes.icons}>
            <BottomNavigationAction className={classes.icons_style} label="Recents" value="recents" icon={<RestoreIcon fontSize="small" />} />
            <BottomNavigationAction className={classes.icons_style} label="Favorites" value="favorites" icon={<FavoriteIcon fontSize="small" />} />
          </div>
          <div className={classes.multiline}>
            <TextField
              id="outlined-multiline-static"
              label={t("Add Comments")}
              multiline
              rows={4}
              variant="outlined"
              className={classes.width}
            />
          </div>
          <Grid container>
          <Button variant="contained" color="primary" type="submit" className={classes.submit}>
          {t("Send")}
            </Button>
          <Button variant="contained" color="secondary" className={classes.cancel}>
          {t("Cancel")}
            </Button>


          </Grid>
        </form>
      </div>

    </Container>
  );

}

export default CommentsView