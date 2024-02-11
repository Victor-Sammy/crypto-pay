import { useNavigate } from 'react-router-dom'
import logo from '../assets/crypto-pay-logo.jpg'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='flex items-center justify-between xs:h-20 sm:h-32 border-b-[1px] border-white xs:px-[7%] lg:px-12 xl:px-20 py-8'>
      <div>
        <img className='xs:w-12 sm:w-16 lg:w-24 lg:h-20' src={logo} alt='' />
        <h1 className='xs:text-[.6rem] md:text-base font-bold text-gray-400 shadow-blue-500 shadow-sm'>
          CRYPTO PAY INVESTMENT
        </h1>
      </div>
      <div className='flex gap-2 font-medium'>
        <button
          className='bg-green-300 py-2 px-3 rounded-lg hover:bg-green-400 cursor-pointer xs:text-xs md:text-base'
          onClick={() => navigate('/login')}
        >
          LOGIN
        </button>
        <button
          className='bg-green-300 py-2 px-3 rounded-lg hover:bg-green-400 cursor-pointer xs:text-xs md:text-base'
          onClick={() => navigate('/signup')}
        >
          SIGN UP
        </button>
      </div>
    </div>
  )
}

export default Navbar
