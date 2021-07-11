import React from 'react'
import { useFormik } from 'formik'
import { Button, Checkbox, createMuiTheme, Grid, Input, Link, makeStyles, TextField, ThemeProvider, Tooltip } from '@material-ui/core'
import { CenterFocusWeakTwoTone } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import '../App.css';
import LockIcon from '@material-ui/icons/Lock';
const initialValues = {
  username: '',
  password: '',
  remember: false
}

const theme = createMuiTheme({

});
const useStyles = makeStyles({
  link: {
    textAlign: 'center',
  },
  button: {
    margin: '0px'
  },
  input: {
    margin: '5px',
  },
});
function LoginForm() {
const onSubmit = (values: any) => { console.log('formData', values) }
const validate = (values: { username: string; password: string }) => { 
  let errors: any = {}
  if (!values.username) {
    errors.username = <h5>{t('required username')}</h5>
  }
  if (!values.password) {
    errors.password = <h5>{t('required password')}</h5>
  }
  return errors
}

  const { t, i18n } = useTranslation();
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })
  console.log('formValues', formik.values)
  console.log('formErrors', formik.errors)
  const classes = useStyles();

  const styles = (theme: { spacing: { unit: any; }; }) => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    }
  });

  return (
    <div className="form-style-3">
      <Tooltip title={t('Login')!} >
        <LockIcon className="sign_in_lock" />
      </Tooltip>
      <span className="sign_in" >{t("Sign In")}</span>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <div className='form-control up'>

          <TextField

            label={t("Username")}
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            name='username'
            type="text"
            className="login"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <br />
          {formik.errors.username ? <div className="errors">{formik.errors.username}</div> : null}
          <br />

          <TextField

            label={t("Password")}
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            name='password'
            type="password"
            className="login"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <br />
          {formik.errors.password ? <div className="errors">{formik.errors.password}</div> : null}
          <br />

          <div className='form-control remember'>
            <Checkbox
              id='checkbox'
              name='remember'
              onChange={formik.handleChange}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <label htmlFor='remember'>{t("Remember me")}</label>
          </div>

          <Button type="submit" className="buttons_size" variant="contained" color="primary" >
            {t("Submit")}
          </Button>
        </div>
      </form>


      <Link href="/register" className={classes.link}>
        {t("Don't have account? Register now!")}
      </Link>

    </div>
  )
}

export default LoginForm