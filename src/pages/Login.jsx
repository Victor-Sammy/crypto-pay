import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/crypto-pay-logo.jpg'
import { auth } from '../Firebase'

const emailValidator =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formError, setFormError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [message, setMessage] = useState(null)

  const handleResetPassword = async () => {
    try {
      sendPasswordResetEmail(auth, email)
      setMessage('Password reset email sent. Please check your inbox.')
    } catch (error) {
      setMessage(error.message)
    }
  }

  const validateEmail = (email) => {
    let errorMessage = ''
    if (email.trim() === '') {
      errorMessage = 'Email is required'
    } else if (!emailValidator.test(email)) {
      errorMessage = 'Enter valid email'
    } else {
      errorMessage = ''
    }

    setEmailError(errorMessage)
    return errorMessage ? false : true
  }

  const validatePassword = (password) => {
    let errorMessage = ''
    if (password.trim() === '') {
      errorMessage = 'Password is required'
    } else if (password.trim().length < 6) {
      errorMessage = 'Password length must be greater than 6'
    } else {
      errorMessage = ''
    }

    setPasswordError(errorMessage)
    return errorMessage ? false : true
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
      default:
        break
    }
    setFormError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let validEmail = validateEmail(email)
    let validPassword = validatePassword(password)

    if (validEmail && validPassword) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential)
        })
        .catch((error) => {
          console.log(error)
          error && setFormError('Incorrect login information!')
        })
        .then((error) => {
          if (!error) {
            return navigate('/userPage')
          } else return ''
        })
    }
  }
  return (
    <div className='bg-black h-screen'>
      <img className='w-[10%] ml-[45%] pt-5 pb-10' src={logo} alt='' />
      <div className='card xs:w-[90%] xs:ml-[5%] md:w-[60%] md:ml-[20%] lg:w-[36%] lg:ml-[32%] bg-white h-auto rounded'>
        <h1 className='pt-8 text-center text-2xl font-medium mb-10'>
          User Login
        </h1>
        <form onSubmit={handleSubmit} className='w-[90%] mx-[5%]'>
          <div className='email mb-3'>
            <h1 className='font-medium mb-2'>Email Address</h1>
            <input
              className='w-full px-3 py-3 border-[1px] rounded'
              type='email'
              name='email'
              value={email}
              placeholder='name@example.com'
              onChange={handleChange}
            />
            <p className='text-red-400'>{emailError}</p>
          </div>
          <div className='password'>
            <h1 className='font-medium mb-2'>Password</h1>
            <input
              className='w-full px-3 py-3 border-[1px] rounded mb-10'
              type='password'
              name='password'
              value={password}
              placeholder='Enter Password'
              onChange={handleChange}
            />
            <p>{passwordError}</p>
          </div>
          <span className='formError text-red-400 mb-2'>{formError}</span>
          <p
            className='float-right mb-2 font-medium cursor-pointer'
            onClick={() => window.my_modal_2.showModal()}
          >
            Forgot password
          </p>
          <button className='w-full text-center text-white font-medium bg-blue-500 hover:bg-blue-600 py-3 rounded mb-5 cursor-pointer'>
            Login
          </button>
        </form>
        <p className='text-center text-sm mb-3'>
          Dont have an account yet?{' '}
          <span
            className='text-blue-400 cursor-pointer'
            onClick={() => navigate('/signup')}
          >
            Sign Up.
          </span>
        </p>
        <p className='text-center text-xs pb-5'>
          © Copyright 2023 CryptoPay All Rights Reserved.
        </p>
      </div>
      <dialog id='my_modal_2' className='modal'>
        <form method='dialog' className='modal-box'>
          <p className='py-4 text-black'>Password Reset</p>
          <input
            className='bg-gray-200 rounded pl-2 py-1 mr-3'
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className='bg-blue-500 px-2 py-1 rounded text-white'
            onClick={handleResetPassword}
          >
            Reset Password
          </button>
          {message && <p>{message}</p>}
        </form>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}

export default Login
