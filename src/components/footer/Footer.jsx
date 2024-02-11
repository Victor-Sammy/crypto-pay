import { AiOutlineStock } from 'react-icons/ai'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { PiUserFill } from 'react-icons/pi'
import { MdLocationOn } from 'react-icons/md'
//import { IoLocationSharp } from 'react-icons/io'
const Footer = () => {
  return (
    <section>
      <div className='flex xs:flex-col sm:flex-row items-center justify-between xs:px-[5%] sm:px-24 text-white'>
        <div className='contact-us flex gap-10 xs:w-full sm:w-[50%]'>
          <span className='w-[40%]'>
            <h1 className='xs:text-sm sm:text-[1.157rem] font-medium mb-3 text-gray-200'>
              MOST INNOVATIVE BINARY OPTION PLATFORM
            </h1>
            <p className='text-[.881rem] text-gray-400'>
              Crypto Pay Investment is a company formed by a team of
              PROFESSIONAL TRADERS with EXPERTISE in one of the biggest
              financial markets of today, the CRYPTOCURRENCY/BINARY. Our focus
              is to provide our affiliates with daily and constant profits in
              these markets.
            </p>
          </span>
          <span>
            <h1 className='xs:text-sm sm:text-[1.157rem] font-medium mb-3 text-gray-200'>
              CONTACT US
            </h1>
            <p>
              EMAIL:{' '}
              <span className='xs:text-[.7rem] md:text-base text-green-500'>
                <a href='mailto::victorsammy1997@gmail.com'>
                  Cryptopaytrading76@gmail.com
                </a>
              </span>
            </p>
          </span>
        </div>
        <div className='overview xs:w-full sm:w-[30%] flex flex-col items-center'>
          <h1 className='mb-2 xs:text-sm sm:text-[1.157rem] font-medium text-gray-200'>
            OVERVIEW
          </h1>
          <span className='flex flex-col items-center mb-4'>
            <div className='text-2xl mb-2 text-gray-400'>
              <AiOutlineStock />
            </div>
            <h1 className='xs:text-sm sm:text-lg font-bold text-blue-400'>
              $198.76B
            </h1>
            <p className='xs:text-sm sm:text-base text-gray-200 font-medium'>
              Market Cap
            </p>
          </span>
          <span className='flex flex-col items-center mb-4'>
            <div className='text-2xl mb-2 text-gray-400'>
              <RiMoneyDollarCircleLine />
            </div>
            <h1 className='xs:text-sm sm:text-lg font-bold text-blue-400'>
              243K
            </h1>
            <p className='xs:text-sm sm:text-base text-gray-200 font-medium'>
              Weekly Transactions
            </p>
          </span>
          <span className='flex flex-col items-center mb-4'>
            <div className='text-2xl mb-2 text-gray-400'>
              <PiUserFill />
            </div>
            <h1 className='xs:text-sm sm:text-lg font-bold text-blue-400'>
              69K
            </h1>
            <p className='xs:text-sm sm:text-base text-gray-200 font-medium'>
              Active Accounts
            </p>
          </span>
          <span className='flex flex-col items-center mb-4'>
            <div className='text-2xl mb-2 text-gray-400'>
              <MdLocationOn />
            </div>
            <h1 className='xs:text-sm sm:text-lg font-bold text-blue-400'>
              100
            </h1>
            <p className='xs:text-sm sm:text-base text-gray-200 font-medium'>
              Supported Countries
            </p>
          </span>
        </div>
      </div>
      <div className='bottom-footer bg-slate-800 text-center text-gray-200 py-4 font-medium'>
        <h1 className='xs:text-xs sm:text-base'>
          CryptoPay investment, © 2015-2023
        </h1>
      </div>
    </section>
  )
}

export default Footer
