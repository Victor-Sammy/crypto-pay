import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth, db } from '../../Firebase'
import logo from '../../assets/crypto-pay-logo.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import { BiUser } from 'react-icons/bi'
import { PiVaultFill } from 'react-icons/pi'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react'
import coinbase from '../../assets/coinbase.png'
import blockchain from '../../assets/blockchain.png'
import xapo from '../../assets/Xapo.jpg'
import airbitz from '../../assets/airbitz.jpg'
import './makepayment.css'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import Bitcoin from './payment-methods/Bitcoin'
import BankTransfer from './payment-methods/BankTransfer'
import Usdt from './payment-methods/Usdt'
import Ethereum from './payment-methods/Ethereum'
import Cashapp from './payment-methods/Cashapp'
import Paypal from './payment-methods/Paypal'
import emailjs from '@emailjs/browser'

const MakePayment = () => {
  const form = useRef()
  const plan = localStorage.getItem('plan')
  const amount = localStorage.getItem('amount')
  const navigate = useNavigate()

  const [planLevel, setPlanLevel] = useState('')
  const [authUser, setAuthUser] = useState(null)
  const [message, setMessage] = useState('')
  const [selectedOption, setSelectedOption] = useState('Bank deposit')
  console.log(selectedOption)
  localStorage.setItem('payment-mode', selectedOption)
  //const [value, setValue] = useState('')

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      console.log(auth)
      if (user) {
        console.log(user)
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })
    return () => {
      listen()
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const depositor = auth?.currentUser?.uid

    try {
      await addDoc(collection(db, `${depositor}`), {
        amount: amount,
        mode: selectedOption,
        createdAt: serverTimestamp(),
        uid: authUser.uid,
      })
    } catch (error) {
      console.log(error)
    }

    navigate('/deposits')
  }

  const handleSelect = (event) => {
    setSelectedOption(event.target.value)
  }

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
        console.log('sign out successful')
      })
      .catch((error) => console.log(error))
  }

  const handleOpenCoinbase = () => {
    window.open('https://www.coinbase.com/')
  }
  const handleOpenBlockchain = () => {
    window.open('https://www.blockchain.com/explorer/')
  }
  const handleOpenXapo = () => {
    window.open('https://www.xapobank.com/')
  }
  const handleOpenAirbitz = () => {
    window.open('https://airbitz.co/')
  }

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

  useEffect(() => {
    {
      plan === 'Starter($200-$25,099)' ? setPlanLevel('bronze') : ''
    }
    {
      plan === 'Silver($25,100-$250,099)' ? setPlanLevel('silver') : ''
    }
    {
      plan === 'Gold($250,100-$1,000,000)' ? setPlanLevel('Gold') : ''
    }
  }, [plan])

  return (
    <div className='payment-page h-screen'>
      <div className='top-bar bg-blue-800 opacity-90 h-20 absolute sm:top-[4%] lg:top-[1%] xl:top-[4%] w-full flex items-center xl:px-72'>
        <div className='xs:w-[10%] sm:w-[6%] lg:w-[5%] mr-[25%] logo'>
          <img className='w-full sm:h-10 xl:h-16 ml-5' src={logo} alt='' />
        </div>
      </div>
      <div className='links bg-blue-400 w-full flex items-center justify-between gap-5 h-12 xs:px-[3%] lg:px-[10%] absolute top-[13.5%] xs:text-[6px] sm:text-[9px] lg:text-[12px] font-medium text-white xl:px-72'>
        <div className='flex gap-5'>
          <NavLink to='/userPage'>MY ACCOUNT</NavLink>
          <NavLink to='/deposits'>DEPOSIT</NavLink>
          <NavLink to='/withdraw'>WITHDRAW</NavLink>
        </div>
        <div>
          <NavLink onClick={userSignOut}>LOGOUT</NavLink>
        </div>
      </div>
      <div className='dashboard absolute xs:top-[19%] md:top-[17.5%] bg-black opacity-[95%] w-full xl:px-72'>
        <section className='top flex items-center gap-2 justify-between text-white px-3'>
          <div className='user-name flex xs:gap-2 lg:gap-5 items-center h-32'>
            <span className='text-yellow-500 font-bold sm:text-[2.3rem] lg:text-[3rem] rounded-[50%] border-2 border-yellow-500'>
              <BiUser />
            </span>
            <div className='xs:text-[.8rem] sm:text-[1rem] lg:text-[1.4rem]'>
              <div className='text-white font-semibold'>
                WELCOME,{' '}
                <span className='text-yellow-500'>
                  {authUser ? authUser.displayName : ''}
                </span>{' '}
              </div>
            </div>
          </div>
          <div className='invest flex items-center'>
            <span className='text-blue-400 sm:text-[2.3rem] lg:text-[3rem] mr-2'>
              <PiVaultFill />
            </span>
            <span className='xs:text-[.6rem] sm:text-[.8rem] lg:text-base'>
              INVESTMENT PLAN:{' '}
            </span>
            <span className='ml-2 bg-blue-400 px-2 border border-white py-1 rounded-full xs:text-[.6rem] sm:text-sm lg:text-base'>
              {planLevel}
            </span>
          </div>
          <div className='leave-msg'>
            <button
              className='bg-blue-800 rounded-full px-2 py-1 xs:text-[.6rem] sm:text-sm'
              onClick={() => window.my_modal_2.showModal()}
            >
              Leave a message
            </button>
          </div>
        </section>
        <dialog id='my_modal_2' className='modal'>
          <form
            ref={form}
            onSubmit={sendEmail}
            method='dialog'
            className='modal-box'
          >
            <p className='py-4 text-black'>
              Let us know how we can support you
            </p>
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
            </div>
            <input
              className='bg-gray-200 rounded pl-2 py-1 mr-3 mb-2'
              type='text'
              name='message'
              placeholder='Enter your message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className='bg-blue-500 px-2 py-1 rounded text-white'
              type='submit'
            >
              Send Message
            </button>
          </form>
          <form method='dialog' className='modal-backdrop'>
            <button>close</button>
          </form>
        </dialog>
        <section className='mx-3 px-5 pb-10 bg-blue-900 border-t-4 border-[1px] border-blue-400 text-white'>
          <h1 className='text-orange-300 xs:text-xs sm:text-2xl mt-10 mb-6 font-semibold'>
            MAKE PAYMENT
          </h1>
          <p className='mb-7 xs:text-[.6rem] sm:text-base'>
            YOU ARE TO MAKE PAYMENT OF{' '}
            <span className='text-yellow-300'>${amount}</span> USING YOUR
            PREFERRED MODE OF PAYMENT BELOW.
          </p>
          <div className='mb-10 flex gap-[10%]'>
            <Bitcoin />
            <BankTransfer />
          </div>
          <div className='mb-10 flex gap-[10%]'>
            <Usdt />
            <Ethereum />
          </div>
          <div className='mb-10 flex gap-[10%]'>
            <Cashapp />
            <Paypal />
          </div>
          <form onSubmit={handleSubmit}>
            <h1 className='xs:text-[.6rem] sm:text-sm mb-5'>
              ** After payment click the{' '}
              <span className='text-yellow-400'>submit payment</span> button
              below to process your investment
            </h1>
            <p className='xs:text-[.6rem] sm:text-sm mb-5'>
              Payment Mode Used:
            </p>
            <div className='mb-3'>
              <select
                className='cusstom-select xs:w-[60%] md:w-[30%] xs:h-6 sm:h-9 rounded text-black xs:text-[.7rem] mb-2'
                value={selectedOption}
                onChange={handleSelect}
              >
                <option value='Bank deposit'>Bank deposit</option>
                <option value='Bitcoin'>Bitcoin</option>
                <option value='Ethereum'>Ethereum</option>
                <option value='USDT Trc 20'>USDT Trc 20</option>
                <option value='TRON (Trx)'>TRON (Trx)</option>
              </select>
            </div>
            <button
              className='bg-green-400 hover:bg-green-500 xs:text-xs sm:text-sm px-2 py-1 rounded'
              type='submit'
            >
              Submit payment
            </button>
          </form>
        </section>
        <section className='btc-networks xs:h-72 sm:h-36 bg-blue-900 mx-3 mt-10 text-white'>
          <div className='wallets xs:grid grid-cols-2 gap-x-2 gap-y-2 sm:flex items-center justify-between py-5 px-3'>
            <h1 className='xs:text-[.6rem] sm:text-base'>BTC NETWORK</h1>
            <p className='xs:text-[.6rem] sm:text-base'>WALLETS:</p>
            <button
              className='px-3 py-1 border border-blue-300 hover:scale-105 ease-in-out duration-200 rounded'
              onClick={handleOpenCoinbase}
            >
              <img className='h-10 w-16 object-cover' src={coinbase} alt='' />
            </button>
            <button
              className='px-3 py-1 border border-blue-300 hover:scale-105 ease-in-out duration-200 rounded'
              onClick={handleOpenBlockchain}
            >
              <img
                className='h-10 w-16 object-contain'
                src={blockchain}
                alt=''
              />
            </button>
            <button
              className='px-3 py-1 border border-blue-300 hover:scale-105 ease-in-out duration-200 rounded'
              onClick={handleOpenXapo}
            >
              <img className='h-10 w-16 object-contain' src={xapo} alt='' />
            </button>
            <button
              className='px-3 py-1 border border-blue-300 hover:scale-105 ease-in-out duration-200 rounded'
              onClick={handleOpenAirbitz}
            >
              <img className='h-10 w-16 object-cover' src={airbitz} alt='' />
            </button>
          </div>
          <div className='xs:grid grid-cols-2 gap-x-2 gap-y-2 sm:flex items-center justify-between xs:text-[.7rem] sm:text-sm px-3'>
            <h1>
              Market Cap:{' '}
              <span className='text-yellow-500'>$77829716960.00</span>
            </h1>
            <h1>
              Hashrate: <span className='text-yellow-500'>7108353254.76</span>
            </h1>
            <h1>
              Difficulty: <span className='text-yellow-500'>888171856257</span>
            </h1>
            <h1>
              Total Blocks: <span className='text-yellow-500'>482882</span>
            </h1>
            <h1>
              Network Speed: <span className='text-yellow-500'>108.5 PH/s</span>
            </h1>
          </div>
        </section>
        <section className='foot bg-black flex items-center justify-between xs:h-20 sm:h-36 px-3'>
          <div>
            <p className='text-white xs:text-[.6rem] sm:text-xs'>
              © 2022 CryptoPay All Rights Reserved.
            </p>
          </div>
          <div className='text-3xl flex'>
            <span className='text-blue-600'>
              <AiFillFacebook />
            </span>
            <span className='text-blue-400'>
              <AiFillTwitterSquare />
            </span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MakePayment
