export const loginValidate = (values) => {
  const errors = {}
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

  if (!values.email) {
    errors.email = 'Email is required!'
  } else if (!regex.test(values.email)) {
    errors.email = 'This is not a valid email format!'
  }

  if (!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length < 4) {
    errors.password = 'Password must be more than 4 characters'
  } else if (values.password.length > 10) {
    errors.password = 'Password cannot exceed more than 10 characters'
  }

  if (!values.username) {
    errors.username = 'Name is required!'
  } else if (values.username < 3) {
    errors.username = 'This is not a valid user name!'
  }

  if (!values.useraddress) {
    errors.useraddress = 'Address is required!'
  } else if (values.useraddress < 21) {
    errors.useraddress = 'This is not a valid user address!'
  }

  return errors
}
