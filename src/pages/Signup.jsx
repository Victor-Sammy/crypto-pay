import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../Firebase'
import { useState } from 'react'
import logo from '../assets/crypto-pay-logo.jpg'

const emailValidator =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

const Signup = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [confirm, setConfirm] = useState('')
  const [displayNameError, setDisplayNameError] = useState('')
  const [formError, setFormError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmError, setConfirmError] = useState('')

  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const validateDisplayname = (displayName, check = false) => {
    let nameError = ''
    if (displayName === '') nameError = 'user name is required'

    if (!check) {
      setDisplayNameError(nameError)
    }
    return nameError === ''
  }

  const validateEmail = (email, check = false) => {
    let errorMessage = ''
    if (email.trim() === '') {
      errorMessage = 'Email is required'
    } else if (!emailValidator.test(email)) {
      errorMessage = 'Enter valid email'
    } else {
      errorMessage = ''
    }

    if (!check) {
      setEmailError(errorMessage)
    }
    return errorMessage ? false : true
  }

  const validatePassword = (password, check) => {
    let errorMessage = ''
    if (password.trim() === '') {
      errorMessage = 'Password is required'
    } else if (!passwordValidator.test(password)) {
      errorMessage =
        'Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!'
    } else {
      errorMessage = ''
    }

    if (!check) {
      setPasswordError(errorMessage)
    }
    return errorMessage ? false : true
  }
  const validateConfirmPassword = (confirm, check) => {
    let errorMessage = ''
    if (confirm.trim() === '') {
      errorMessage = 'confirm password is required'
    } else if (confirm !== password) {
      errorMessage = 'check that your password is correct'
    } else {
      errorMessage = ''
    }

    if (!check) {
      setConfirmError(errorMessage)
    }
    return errorMessage ? false : true
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateFields()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential)
          const user = userCredential.user
          return updateProfile(user, {
            displayName: displayName,
            phoneNumber: phoneNumber,
          })
        })
        .then(() => {
          console.log('user account created with additional information')
        })
        .catch((error) => {
          console.log(error)
        })
    }
    alert('successful email verification')
    navigate('/login')
  }

  const selectOption = (option) => {
    setSelectedOption(option)
    localStorage.setItem('plan', option)
    setIsOpen(false)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    switch (name) {
      case 'email':
        setEmail(value)
        validateEmail(value)
        break
      case 'password':
        setPassword(value)
        validatePassword(value)
        break
      case 'displayName':
        setDisplayName(value)
        validateDisplayname(value)
        break
      case 'phoneNumber':
        setPhoneNumber(value)
        break
      case 'confirm':
        setConfirm(value)
        validateConfirmPassword(value)
        break
      default:
        break
    }

    setFormError('')
    console.log('validDetails', validateFields())
  }

  const validateFields = () => {
    if (
      validateDisplayname(displayName, true) &&
      validateEmail(email, true) &&
      validatePassword(password, true) &&
      validateConfirmPassword(confirm, true)
    ) {
      return true
    }
    return false
  }

  const options = [
    'Starter($200-$25,099)',
    'Silver($25,100-$250,099)',
    'Gold($250,100-$1,000,000)',
  ]

  return (
    <div className='bg-black h-screen'>
      <img className='w-[10%] ml-[45%] pt-5 pb-10' src={logo} alt='' />
      <div className='card lg:w-[40%] lg:ml-[30%] xs:w-[90%] xs:ml-[5%] md:w-[60%] md:ml-[20%] bg-white h-auto rounded'>
        <h1 className='pt-8 text-center text-2xl font-medium mb-10'>
          Create an Account
        </h1>
        <form onSubmit={handleSubmit} className='w-[90%] mx-[5%]'>
          <div className='top-input mb-3 w-full'>
            <span className='first-name'>
              <p className='font-medium mb-2'>First name & Last name</p>
              <input
                className='w-full px-3 py-3 border-[1px] rounded'
                type='text'
                name='displayName'
                value={displayName}
                placeholder='Enter user name'
                onChange={handleChange}
              />
              <span>{displayNameError}</span>
            </span>
          </div>
          <div className='second-input flex gap-[10%] mb-3'>
            <span className='email'>
              <p className='font-medium mb-2'>Email Address</p>
              <input
                className='w-full px-3 py-3 border-[1px] rounded'
                type='email'
                name='email'
                value={email}
                placeholder='name@example.com'
                onChange={handleChange}
              />
              <span>{emailError}</span>
            </span>
            <span className='phone'>
              <p className='font-medium mb-2'>Phone Number</p>
              <input
                className='w-full px-3 py-3 border-[1px] rounded'
                type='text'
                name='phoneNumber'
                value={phoneNumber}
                placeholder='Enter phone no'
                onChange={handleChange}
              />
            </span>
          </div>
          <div className='third-input flex gap-[10%] mb-3'>
            <span className='password'>
              <p className='font-medium mb-2'>Password</p>
              <input
                className='w-full px-3 py-3 border-[1px] rounded'
                type='text'
                name='password'
                value={password}
                placeholder='Enter Password'
                onChange={handleChange}
              />
              <span>{passwordError}</span>
            </span>
            <span className='confirm'>
              <p className='font-medium mb-2'>Confirm Password</p>
              <input
                className='w-full px-3 py-3 border-[1px] rounded'
                type='text'
                name='confirm'
                value={confirm}
                placeholder='Confirm Password'
                onChange={handleChange}
              />
              <span>{confirmError}</span>
            </span>
          </div>
          <div className='dropdown w-full border relative mb-8' id='dropdown'>
            <button
              type='button'
              className='bg-white hover:bg-gray-100 px-4 py-2 w-full h-12 flex items-center justify-between rounded focus:outline-none'
              onClick={toggleDropdown}
            >
              {selectedOption || 'Select an Investment Plan'}
              <svg
                className={`ml-2 h-5 w-5 transition-transform duration-200 transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M6 8l4 4 4-4'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
            {isOpen && (
              <div className='absolute z-10 mt-2 bg-white shadow-md rounded w-full'>
                {options.map((option, index) => (
                  <button
                    key={index}
                    type='button'
                    className='block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left'
                    onClick={() => selectOption(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
          <span>{formError}</span>
          <button
            className='w-full text-center text-white font-medium bg-blue-500 hover:bg-blue-600 py-3 rounded mb-5 cursor-pointer'
            type='submit'
          >
            Register
          </button>
        </form>
        <p className='text-center text-sm mb-3'>
          Already Have An Account{' '}
          <span
            className='text-blue-400 cursor-pointer'
            onClick={() => navigate('/login')}
          >
            Login.
          </span>
        </p>
        <p className='text-center text-xs pb-5'>
          © Copyright 2023 CryptoPay All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Signup
