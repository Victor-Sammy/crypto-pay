import './userpage.css'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth, db } from '../../Firebase'
import logo from '../../assets/crypto-pay-logo.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import { BiMoneyWithdraw, BiSolidUser, BiUser } from 'react-icons/bi'
import { PiVaultFill } from 'react-icons/pi'
import { FaCalendarAlt, FaHandHoldingUsd } from 'react-icons/fa'
import { IoIosClock } from 'react-icons/io'
import { BsCurrencyExchange } from 'react-icons/bs'
import { GiMoneyStack } from 'react-icons/gi'
import { HiCurrencyDollar } from 'react-icons/hi'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react'
import coinbase from '../../assets/coinbase.png'
import blockchain from '../../assets/blockchain.png'
import xapo from '../../assets/Xapo.jpg'
import airbitz from '../../assets/airbitz.jpg'
import CurrencyFormat from 'react-currency-format'
import emailjs from '@emailjs/browser'
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore'

const UserPage = () => {
  const form = useRef()
  const plan = localStorage.getItem('plan')
  const navigate = useNavigate()
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user?.metadata?.creationTime)
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })
    return () => {
      listen()
    }
  }, [])

  const [planLevel, setPlanLevel] = useState('')
  const [message, setMessage] = useState('')
  const [paymentDetails, setPaymentDetails] = useState([])

  useEffect(() => {
    const depositor = auth?.currentUser?.uid
    const q = query(
      collection(db, `${depositor}`),
      orderBy('createdAt'),
      limit(50)
    )
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const details = []
      querySnapshot.forEach((doc) => {
        details.push({ ...doc.data(), id: doc.id })
      })
      setPaymentDetails(details)
      console.log(paymentDetails)
    })

    return () => unsubscribe
  }, [])

  function sumNumberField(array) {
    let sum = 0
    array.forEach((obj) => {
      const parsedNumber = parseInt(obj.amount, 10)
      if (!isNaN(parsedNumber)) {
        sum += parsedNumber
      }
    })
    return sum
  }

  // Call the function and get the sum
  const totalSum = sumNumberField(paymentDetails)
  console.log("Total sum of 'numberField':", totalSum)

  const lastObject = paymentDetails[paymentDetails?.length - 1]
  console.log(lastObject)

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
        console.log('sign out successful')
      })
      .catch((error) => console.log(error))
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

  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const day = today.getDate()
  const hours = today.getHours()
  const minutes = today.getMinutes()
  //const seconds = today.getSeconds()

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  // const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${
  //   day < 10 ? '0' : ''
  // }${day}`

  // const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${
  //   minutes < 10 ? '0' : ''
  // }${minutes}:${seconds < 10 ? '0' : ''}${seconds}`

  const formatTime = `${hours < 10 ? '0' : ''}${hours}:${
    minutes < 10 ? '0' : ''
  }${minutes}`

  const monthName = months[month]
  // Format the date as a string
  const formatDate = `${monthName} ${day}, ${year}`

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
    <div className='user-page h-screen'>
      <div className='top-bar bg-blue-800 opacity-90 h-20 absolute sm:top-[4%] lg:top-[1%] xl:top-[4%] w-full flex items-center xl:px-72'>
        <div className='xs:w-[25%] sm:w-[12%] lg:w-[15%] mr-[25%] logo'>
          <img className='w-full sm:h-10 xl:h-16 ml-5' src={logo} alt='' />
        </div>
        <div className='w-[150%] slide overflow-hidden whitespace-nowrap'>
          <span className='slide-content text-red-600 xs:text-[7px] sm:text-[.87rem] lg:text-lg over'>
            Mr Allen the highest earner of the week with sum of 73,000 earned in
            just 22hrs
          </span>
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
        <section className='mx-3 bg-blue-900 border-t-4 border-[1px] border-blue-400'>
          <h1 className='text-center xs:text-sm sm:text-lg lg:text-xl font-semibold text-yellow-400 mt-7 mb-6'>
            ACCOUNT OVERVIEW
          </h1>
          <span className='grid grid-cols-3 xs:gap-2 sm:gap-5 xs:px-3 sm:px-4 mb-2'>
            <div className='acct-name h-20 border-[1px] border-blue-300 flex items-center gap-2 justify-between px-2'>
              <span className='text-blue-200 font-extrabold sm:text-[2.5rem] lg:text-[3rem]'>
                <BiSolidUser />
              </span>
              <span className='text-white'>
                <p className='xs:text-[.6rem] sm:text-sm lg:text-base'>
                  Your Account Name:
                </p>
                <h1 className='font-semibold xs:text-[.68rem] sm:text-[1rem] lg:text-xl'>
                  {authUser ? authUser.displayName : ''}
                </h1>
              </span>
            </div>
            <div className='reg-date h-20 border-[1px] border-blue-300 flex items-center gap-2 justify-between px-2'>
              <span className='text-blue-200 font-extrabold sm:text-[2.5rem] lg:text-[3rem]'>
                <FaCalendarAlt />
              </span>
              <span className='text-white'>
                <p className='xs:text-[.6rem] sm:text-sm lg:text-base'>
                  Registration Date:
                </p>
                <h1 className='font-semibold xs:text-[.66rem] sm:text-[.9rem] lg:text-xl'>
                  {authUser?.metadata?.creationTime.slice(0, -3)}
                </h1>
              </span>
            </div>
            <div className='last-access h-20 border-[1px] border-blue-300 flex items-center gap-2 justify-between px-2'>
              <span className='text-blue-200 font-extrabold sm:text-[2.5rem] lg:text-[3rem]'>
                <IoIosClock />
              </span>
              <span className='text-white'>
                <p className='xs:text-[.6rem] sm:text-sm lg:text-base'>
                  Last Access:
                </p>
                <h1 className='font-semibold xs:text-[.66rem] sm:text-[.8rem] lg:text-xl'>
                  {formatTime} <span></span>
                  {formatDate}
                </h1>
              </span>
            </div>
          </span>
          <span className='grid grid-cols-3 xs:gap-2 sm:gap-5 xs:px-3 sm:px-4 mb-10 text-white'>
            <div className='active-deposit h-40 border-[1px] border-yellow-400 flex xs:flex-col sm:flex-row items-center justify-between px-2 py-2'>
              <span className='text-yellow-400 xs:text-[2.5rem] sm:text-[4rem] lg:text-[5.5rem]'>
                <BsCurrencyExchange />
              </span>
              <span className='flex flex-col items-end'>
                <h1 className='xs:text-sm sm:text-lg font-bold'>$0.00</h1>
                <p className='xs:text-[.6rem] sm:text-[.8rem] lg:text-base font-medium'>
                  ACTIVE DEPOSITS
                </p>
                <button
                  className='bg-yellow-500 hover:bg-blue-400 px-3 py-1 rounded-full xs:text-xs sm:text-sm lg:text-base'
                  onClick={() => navigate('/deposits')}
                >
                  MAKE A DEPOSIT
                </button>
              </span>
            </div>
            <div className='balance h-40 border-[1px] border-yellow-400 flex xs:flex-col sm:flex-row items-center justify-between px-2 py-2'>
              <span className='text-yellow-400 xs:text-[2.5rem] sm:text-[4rem] lg:text-[5.5rem]'>
                <GiMoneyStack />
              </span>
              <span className='flex flex-col items-end'>
                <h1 className='xs:text-sm sm:text-lg font-bold'>
                  ${totalSum + 1}
                </h1>
                <p className='xs:text-[.7rem] sm:text-[.9rem] lg:text-base font-medium'>
                  Your Balance
                </p>
                <button
                  className='bg-yellow-500 hover:bg-blue-400 px-3 py-1 rounded-full xs:text-xs sm:text-sm lg:text-base'
                  onClick={() => navigate('/withdraw')}
                >
                  WITHDRAW FUNDS
                </button>
              </span>
            </div>
            <div className='balance h-40 border-[1px] border-yellow-400 flex xs:flex-col sm:flex-row items-center justify-between px-2 py-2'>
              <span className='text-yellow-400 xs:text-[2.5rem] sm:text-[4rem] lg:text-[5.5rem]'>
                <FaHandHoldingUsd />
              </span>
              <span className='flex flex-col items-end'>
                <h1 className='xs:text-sm sm:text-lg font-bold'>$0.00</h1>
                <p className='xs:text-[.6rem] sm:text-[.9rem] lg:text-base font-medium'>
                  ADDED PROFITS
                </p>
                <button
                  className='bg-yellow-500 hover:bg-blue-400 px-3 py-1 rounded-full xs:text-xs sm:text-sm lg:text-base'
                  onClick={() => navigate('/deposits')}
                >
                  MY DEPOSITS
                </button>
              </span>
            </div>
          </span>
          <h1 className='text-center xs:text-sm sm:text-lg lg:text-xl font-semibold text-yellow-400 mt-7 mb-6'>
            YOUR DEPOSITS/WITHDRAWALS
          </h1>
          <span className='grid grid-cols-2 gap-6 xs:px-3 sm:px-4 mb-10 text-white'>
            <div className='balance h-20 border-[1px] border-blue-300 flex items-center justify-between px-2'>
              <span className='text-blue-200 font-semibold xs:text-[2rem] sm:text-[3rem]'>
                <HiCurrencyDollar />
              </span>
              <span>
                <h1 className='xs:text-sm sm:text-lg font-semibold text-yellow-400'>
                  <CurrencyFormat
                    value={lastObject?.amount}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                  />
                </h1>
                <p className='xs:text-[.6rem] sm:text-base font-medium'>
                  LAST DEPOSIT
                </p>
              </span>
            </div>
            <div className='balance h-20 border-[1px] border-blue-300 flex items-center justify-between px-2'>
              <span className='text-blue-200 font-semibold xs:text-[2rem] sm:text-[3rem]'>
                <BiMoneyWithdraw />
              </span>
              <span>
                <h1 className='xs:text-sm sm:text-lg font-semibold text-yellow-400'>
                  $0.00
                </h1>
                <p className='xs:text-[.6rem] sm:text-base font-medium'>
                  WITHDRAWAL
                </p>
              </span>
            </div>
          </span>
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

export default UserPage
