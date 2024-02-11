import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../../Firebase'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import ethImg from '../../../assets/Ethereum_logo.png'

const Ethereum = () => {
  const form = useRef()
  const amount = localStorage.getItem('amount')
  const mode = localStorage.getItem('payment-mode')

  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })
    return () => {
      listen()
    }
  }, [authUser])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_i5kn5s9',
        'template_8t91185',
        form.current,
        '-KcgZ77eUccavb1WF'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className='w-[45%] px-3 bg-[#06111c] shadow-md shadow-slate-800 rounded flex flex-col justify-center'>
      <div className='flex items-center font-medium gap-2 pt-4 mb-4'>
        <span className='xs:text-xs sm-text-base'>Ethereum</span>
        <span>
          <img className='xs:w-6 sm:w-8' src={ethImg} alt='' />
        </span>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className='hidden'>
          <input
            className='bg-transparent'
            readOnly
            type='text'
            name='user_email'
            value={authUser?.email}
          />
          <input
            className='bg-transparent'
            readOnly
            type='text'
            name='user_name'
            value={authUser?.displayName}
          />
          <input
            className='bg-transparent'
            readOnly
            type='text'
            name='payment_mode'
            value={mode}
          />
        </div>
        <div className='hidden'>
          <input
            className='bg-transparent'
            readOnly
            type='text'
            name='message'
            value={`i will like to invest $${amount} through Ethereum payment`}
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-600 xs:text-[.6rem] mb-4 px-2 py-1 rounded-md'
        >
          request payment information
        </button>
      </form>
    </div>
  )
}

export default Ethereum
