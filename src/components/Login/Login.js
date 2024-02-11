import { useEffect, useState } from 'react'
import './Login.css'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/useUser'
import { loginValidate } from '../../validation/loginFormValidation'

const Login = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { addUser, removeUser } = useUser()
  const initialValues = { email: '', password: '' }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    removeUser()

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      addUser(formValues.email, formErrors.password)
      navigate('/')
    }
  }, [
    addUser,
    removeUser,
    formValues.email,
    formErrors.password,
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
    <div className='login'>
    <Link to='/'>
      <img
        alt=""
        className="login_logo"
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
      />
    </Link>

    <div className='login_container'>
      <h1>{t('login.signIn')}</h1>
      <form onSubmit={handleSubmit}>
        <h5>{t('login.email')}</h5>
        <input
          type='text'
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
        />
        <p className="form-errors">{formErrors.email}</p>
        <h5>{t('login.password')}</h5>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
        />
        <p className="form-errors">{formErrors.password}</p>
        <button className='login_signInButton'>{t('login.signInBtn')}</button>
      </form>
      <p>{t('login.disclaimer')}</p>
    </div>
  </div>
  )
}

export default Login
