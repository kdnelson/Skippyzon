import { useEffect, useState } from 'react'
import './Login.scss'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks'
import { loginValidate } from '../../Validation/loginFormValidation'

const Login = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { addUser, removeUser } = useUser()
  const initialValues = { email: "", password: "", username: "", useraddress: "" }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    removeUser()

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      addUser(formValues.email, formValues.password, formValues.username, formValues.useraddress)
      navigate('/')
    }
  }, [
    addUser,
    removeUser,
    formValues.email,
    formValues.password,
    formValues.username,
    formValues.useraddress,
    formErrors,
    isSubmit,
    navigate
  ])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(loginValidate(formValues))
    setIsSubmit(true)
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto">
          <form onSubmit={handleSubmit}>
            <p className="fs-2 fw-bold mt-3 mb-3">{t('login.signIn')}</p>
            <p className="fs-6 fw-bold mt-0 mb-0">{t('login.email')}</p>
            <input
              type='text'
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
            <p className="form-errors">{formErrors.email}</p>
            <p className="fs-6 fw-bold mt-0 mb-0">{t('login.password')}</p>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p className="form-errors">{formErrors.password}</p>
             <p className="fs-6 fw-bold mt-0 mb-0">{t('login.username')}</p>
            <input
              type="username"
              name="username"
              placeholder="User Name"
              value={formValues.username}
              onChange={handleChange}
            />
            <p className="form-errors">{formErrors.username}</p>
            <p className="fs-6 fw-bold mt-0 mb-0">{t('login.useraddress')}</p>
            <input
              type="useraddress"
              name="useraddress"
              placeholder="User Address"
              value={formValues.useraddress}
              onChange={handleChange}
            />
            <p className="form-errors">{formErrors.useraddress}</p>
            <button className="btn btn-warning btn-signin mt-3 mb-3">{t('login.signInBtn')}</button>
          </form>
        </div>
        <div className="row justify-content-center">
          <div className="col-8">
            <p>{t('login.disclaimer')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
