import { useFormik } from 'formik'
import { Button, createMuiTheme, TextField } from '@material-ui/core'
import { useTranslation } from 'react-i18next';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
function RegistrationForm() {
  const { t, i18n } = useTranslation();
  const initialValues = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    city: '',
    address: '',
    email: ''
  }
  const theme = createMuiTheme({

  });
  const onSubmit = (values: any) => { console.log('formData', values) }
  const validate = (values: { username: any; password: any; firstName: any; lastName: any; city: any; address: any; email: any }) => {
    let errors: any = {}
    if (!values.username) {
      errors.username = <h5>{t('required username')}</h5>
    }
    if (!values.password) {
      errors.password = <h5>{t('required password')}</h5>
    }
    if (!values.firstName) {
      errors.firstName = <h5>{t('required firstname')}</h5>
    }
    if (!values.lastName) {
      errors.lastName = <h5>{t('required lastname')}</h5>
    }
    if (!values.city) {
      errors.city = <h5>{t('required city')}</h5>
    }
    if (!values.address) {
      errors.address = <h5>{t('required address')}</h5>
    }
    if (!values.email) {
      errors.email = <h5>{t('required email')}</h5>
    }
    return errors
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })
  console.log('formValues', formik.values)
  console.log('formErrors', formik.errors)
  return (
    <div className="form-style-3">
      <AddCircleOutlineIcon className="sign_in_lock" />
      <span className="sign_in" >{t("Sign Up")}</span>
      <form className="up" onSubmit={formik.handleSubmit}>


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
        <TextField

          label={t("First Name")}
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          name='firstName'
          type="First Name"
          className="login"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <br />
        {formik.errors.firstName ? <div className="errors">{formik.errors.firstName}</div> : null}
        <br />
        <TextField

          label={t("Last Name")}
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          name='lastName'
          type="Last Name"
          className="login"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <br />
        {formik.errors.lastName ? <div className="errors">{formik.errors.lastName}</div> : null}
        <br />

        <TextField

          label={t("E-mail")}
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          name='email'
          type="email"
          className="login"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br />
        {formik.errors.email ? <div className="errors">{formik.errors.email}</div> : null}
        <br />

        <TextField

          label={t("City")}
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          name='city'
          type="City"
          className="login"
          onChange={formik.handleChange}
          value={formik.values.city}
        />
        <br />
        {formik.errors.city ? <div className="errors">{formik.errors.city}</div> : null}
        <br />
        <TextField

          label={t("Address")}
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          name='address'
          type="Address"
          className="login"
          onChange={formik.handleChange}
          value={formik.values.address}
        />
        <br />
        {formik.errors.address ? <div className="errors">{formik.errors.address}</div> : null}
        <br />


        <Button type="submit" className="buttons_size" variant="contained" color="primary" >
          {t("Submit")}
        </Button>

      </form>
    </div>
  )
}

export default RegistrationForm


