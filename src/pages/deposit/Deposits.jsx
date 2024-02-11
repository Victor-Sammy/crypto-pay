import './deposit.css'
import logo from '../../assets/crypto-pay-logo.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import { BiSolidChevronLeft, BiSolidChevronRight, BiUser } from 'react-icons/bi'
import { PiVaultFill } from 'react-icons/pi'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react'
import coinbase from '../../assets/coinbase.png'
import blockchain from '../../assets/blockchain.png'
import xapo from '../../assets/Xapo.jpg'
import airbitz from '../../assets/airbitz.jpg'
import NewDepositModal from './NewDepositModal'
import emailjs from '@emailjs/browser'
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
} from 'firebase/firestore'
import { auth, db } from '../../Firebase'
import PaymentDetails from './PaymentDetails'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const Deposits = () => {
  const form = useRef()
  const plan = localStorage.getItem('plan')
  const navigate = useNavigate()

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
  }, [])

  const [planLevel, setPlanLevel] = useState('')
  const [message, setMessage] = useState('')
  const [selectedOption, setSelectedOption] = useState('5')
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
    })

    return () => unsubscribe
  }, [])

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value)
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

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
        console.log('sign out successful')
      })
      .catch((error) => console.log(error))
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
    <div className='deposit-page h-screen'>
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
              onClick={() => window.my_modal_3.showModal()}
            >
              Leave a message
            </button>
          </div>
        </section>
        <dialog id='my_modal_3' className='modal'>
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
          <div className='px-3'>
            <h1 className='xs:text-[.9rem] sm:text-[1rem] lg:text-xl font-semibold text-yellow-400 mt-7 mb-6'>
              YOUR DEPOSITS
            </h1>
            <button
              className='px-4 py-2 bg-blue-400 hover:bg-blue-500 xs:text-xs sm:text-sm text-white rounded mb-10'
              onClick={() => window.my_modal_2.showModal()}
            >
              + New deposit
            </button>
            <div className='w-full mb-3'>
              <select
                className='w-full xs:h-8 sm:h-9 rounded'
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
                <option value='20'>20</option>
                <option value='50'>50</option>
                <option value='70'>70</option>
                <option value='100'>100</option>
                <option value='Show all rows'>Show all rows</option>
              </select>
            </div>
            <div className='deposits-info h-10 border-[1px] border-blue-400 border-b-gray-300 flex items-center text-white xs:text-[.6rem] sm:text-sm mb-6'>
              <span className='w-[15%] border-r h-full pl-2 border-r-blue-400 flex items-center'>
                ID
              </span>
              <span className='w-[23%] border-r h-full pl-2 border-r-blue-400 flex items-center'>
                Amount
              </span>
              <span className='w-[30%] border-r h-full pl-2 border-r-blue-400 flex items-center'>
                Payment Mode
              </span>
              <span className='w-[18%] border-r h-full pl-2 border-r-blue-400 flex items-center'>
                Status
              </span>
              <span className='w-[14%] border-r h-full pl-2 border-r-blue-400 flex items-center'>
                Date Created
              </span>
            </div>
            {paymentDetails?.map((detail) => (
              <PaymentDetails key={detail.id} detail={detail} />
            ))}
          </div>
          <div className='nav-btns flex pl-2 gap-[1px] mb-10'>
            <span className='bg-gray-200 hover:bg-gray-400 cursor-pointer rounded-l-[.2rem] py-[.4rem] px-2 text-gray-500'>
              <BiSolidChevronLeft />
            </span>
            <span className='bg-gray-200 hover:bg-gray-400 cursor-pointer rounded-r-[.2rem] py-[.4rem] px-2 text-gray-500'>
              <BiSolidChevronRight />
            </span>
          </div>
          {/* Open the modal using ID.showModal() method */}
          <dialog id='my_modal_2' className='modal'>
            <form
              method='dialog'
              className='modal-box bg-[#5589c4] border-[1px] border-gray-400'
            >
              <div className=''>
                <NewDepositModal />
              </div>
            </form>
            <form method='dialog' className='modal-backdrop'>
              <button>close</button>
            </form>
          </dialog>
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

export default Deposits
