import heroImg from '../../assets/hero-image.jpg'
import './hero.css'
import depositImg from '../../assets/deposit.png'
import profitImg from '../../assets/profit.png'
import withdrawImg from '../../assets/withdraw.png'
import dashboardImg from '../../assets/withdraw(1).png'
import reliable from '../../assets/award_5.png'
import innovative from '../../assets/award_10.png'
import century from '../../assets/award_13.png'
import intelligent from '../../assets/award_14.png'
import leading from '../../assets/award_6.png'
import fastest from '../../assets/award_8.png'
import payImg from '../../assets/payment.png'
import secureImg from '../../assets/security.png'
import worldImg from '../../assets/world.png'
import teamImg from '../../assets/team.png'
import reportImg from '../../assets/report.png'
import platformImg from '../../assets/platform.png'
import supportImg from '../../assets/support.png'
import exchangeImg from '../../assets/exchange.png'
import Earnings from './Earnings'
import EarningsTwo from './EarningsTwo'
import EarningsThree from './EarningsThree'

const Hero = () => {
  // const [visible1, setVisible1] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setVisible1(true)
  //   }, 3000)
  //   setTimeout(() => {
  //     setVisible1(false)
  //   }, 10000)
  // }, [])

  return (
    <section className=''>
      <div className='hero flex xs:flex-col sm:flex-row items-center justify-between pt-10 pb-10'>
        <div className='investment xs:w-full sm:w-[40%] xs:px-[5%] lg:pl-16 xl:pl-24 relative'>
          <h1 className='xs:text-center sm:text-start sm:text-[2.5rem] lg:text-[3.5rem] font-medium text-green-500'>
            PROFITABLE <span className='text-white'>INVESTMENT IN</span>{' '}
            <span className='text-orange-400'>BITCOIN</span>
          </h1>
          <div className='stat flex gap-2 text-white'>
            <div className='flex flex-col items-center px-2 py-2 border-2 border-green-500 rounded'>
              <span className='sm:text-lg xl:text-2xl font-bold'>947+</span>
              <span className='font-medium'>Traders </span>
              <span className='font-medium'>Online </span>
            </div>
            <div className='flex flex-col items-center px-2 py-2 border-2 border-green-500 rounded'>
              <span className='sm:text-lg xl:text-2xl font-bold'>156,789+</span>
              <span className='font-medium'>Total</span>
              <span className='font-medium'>Registered</span>
            </div>
            <div className='flex flex-col items-center px-2 py-2 border-2 border-green-500 rounded'>
              <span className='sm:text-lg xl:text-2xl font-bold'>888,909+</span>
              <span className='font-medium'>Deals</span>
              <span className='font-medium'>Today</span>
            </div>
          </div>
          <div className='earnings absolute top-36 left-6'>
            <Earnings />
          </div>
          <div className='earningsTwo absolute top-36 left-6'>
            <EarningsTwo />
          </div>
          <div className='earningsThree absolute top-36 left-6'>
            <EarningsThree />
          </div>
        </div>
        <div className='crypto-image xs:px-[5%] xs:w-full sm:w-[40%] h-40 lg:pr-16 xl:pr-24'>
          <img className='w-full h-40' src={heroImg} alt='' />
        </div>
      </div>
      <div className='text-white mb-16 pt-8'>
        <h1 className='xs:text-sm sm:text-[1.5rem] xl:text-[1.8rem] text-center mb-10'>
          HOW <span className='text-green-500'>CRYPTO PAY</span>{' '}
          <span className='text-orange-400'>INVESTMENT</span>{' '}
          <span>TRADES WORKS?</span>
        </h1>
        <div className='sm:px-[5%] xl:px-24 flex justify-between mb-20'>
          <span className='w-[40%] flex flex-col items-center'>
            <img className='xs:w-16 sm:w-20 mb-8' src={depositImg} alt='' />
            <h1 className='text-gray-500 xs:text-sm sm:text-xl font-medium mb-3'>
              DEPOSIT
            </h1>
            <p className='text-sm text-gray-200 xs:pl-[15%] sm:pl-0'>
              Send bitcoins to the personal tradiing wallet, which generated by
              the platform
            </p>
          </span>
          <span className='w-[40%] flex flex-col items-center'>
            <img className='xs:w-16 sm:w-20 mb-8' src={profitImg} alt='' />
            <h1 className='text-gray-500 xs:text-sm sm:text-xl font-medium mb-3'>
              GET PROFIT
            </h1>
            <p className='text-sm text-gray-200'>
              Earn huge return on investment. With our professional team of
              traders, you are guaranteed of your earnings
            </p>
          </span>
        </div>
        <div className='sm:px-[5%] xl:px-24 flex justify-between'>
          <span className='w-[40%] flex flex-col items-center'>
            <img className='xs:w-16 sm:w-20 mb-8' src={withdrawImg} alt='' />
            <h1 className='text-gray-500 xs:text-sm sm:text-xl font-medium mb-3'>
              WITHDRAW
            </h1>
            <p className='text-sm text-gray-200 xs:pl-[15%] sm:pl-0'>
              Our withdrawals are all processed instantly after they are
              requested. We provide multiple withdrawal methods
            </p>
          </span>
          <span className='w-[40%] flex flex-col items-center'>
            <img className='xs:w-16 sm:w-20 mb-8' src={dashboardImg} alt='' />
            <h1 className='text-gray-500 xs:text-sm sm:text-xl font-medium mb-3'>
              MOBILE FRIENDLY
            </h1>
            <p className='text-sm text-gray-200'>
              Our User Dashboard is made to work with all kinds of mobile
              phones.
            </p>
          </span>
        </div>
      </div>

      {/* OUR AWARD PLATFORM */}

      <div className='awards text-white'>
        <h1 className='xs:text-lg xl:text-[1.8rem] text-center font-bold mb-10'>
          OUR AWARD PLATFORM
        </h1>
        <div className='xs:px-[5%] xl:px-24 grid xs:grid-cols-2 md:grid-cols-3 gap-16 mb-16'>
          <span className=''>
            <img className='xs:w-12 sm:w-20 mb-8' src={century} alt='' />
            <h1 className='xs:text-sm sm:text-xl leading-tight mb-3'>
              CENTURY INTERNATIONAL QUALITY GOLD ERA AWARD
            </h1>
            <p className='xs:text-[.9rem] sm:text-base'>
              The prestigious award was given to Crypto Pay Investment Trades in
              recognition of our outstanding commitment to Quality and
              Excellence, particularly in the realm of Customer Satisfaction.
            </p>
          </span>
          <span className=''>
            <img className='xs:w-9 sm:w-14 mb-8' src={innovative} alt='' />
            <h1 className='xs:text-sm sm:text-xl leading-tight mb-3'>
              MOST INNOVATIVE BINARY OPTION PLATFORM
            </h1>
            <p className='xs:text-[.9rem] sm:text-base'>
              As Steve Jobs once said, innovation distinguishes between leaders
              and followers. Our innovative approach makes our product shine—and
              the evidence is in this beautiful accolade.
            </p>
          </span>
          <span className=''>
            <img className='xs:w-12 sm:w-20 mb-8' src={reliable} alt='' />
            <h1 className='xs:text-sm sm:text-xl leading-tight mb-3'>
              MOST RELIABLE BINARY OPTIONS BROKER
            </h1>
            <p className='xs:text-[.9rem] sm:text-base'>
              Our first priority is the security of our clients funds. This was
              recognized by the experts at MasterForex-V, who awarded Crypto Pay
              Investment Trades the title of Most Trusted Binary Options Broker.
            </p>
          </span>
        </div>
        <div className='xs:px-[5%] xl:px-24 grid xs:grid-cols-2 md:grid-cols-3 gap-16 mb-20'>
          <span className=''>
            <img className='xs:w-12 sm:w-20 mb-8' src={intelligent} alt='' />
            <h1 className='xs:text-sm sm:text-xl leading-tight mb-3'>
              THE INTELLIGENT TRADING APP FOR BINARY OPTIONS
            </h1>
            <p className='xs:text-[.9rem] sm:text-base'>
              The Mobile Star Awards is the largest annual mobile innovations
              and software awards program in the world. In 2016, the
              organization honored the Crypto Pay Investment trading app as the
              best in its category, praising its efficiency and impeccable
              design.
            </p>
          </span>
          <span className=''>
            <img className='xs:w-12 sm:w-20 mb-8' src={leading} alt='' />
            <h1 className='xs:text-sm sm:text-xl leading-tight mb-3'>
              WORLD&apos;S LEADING BINARY OPTIONS BROKER
            </h1>
            <p className='xs:text-[.9rem] sm:text-base'>
              At the same MasterForex-V Crypto Pay Investment was awarded for
              being the World&apos;s Leading Binary Options Broker. The
              perfection in our service and product was recognized by the
              experts of the conference in 2014.
            </p>
          </span>
          <span className=''>
            <img className='xs:w-12 sm:w-20 mb-8' src={fastest} alt='' />
            <h1 className='xs:text-sm sm:text-xl leading-tight mb-3'>
              FASTEST GROWING BINARY OPTION BRAND
            </h1>
            <p className='xs:text-[.9rem] sm:text-base'>
              Global Brands Magazine, Britain’s reputable brand observer,
              awarded Crypto Pay Investment along with a number of outstanding
              European brands — an achievement worth working for.
            </p>
          </span>
        </div>

        {/* OUR PLATFORM ADVANTAGES */}

        <div className='advantages xs:px-[5%] xl:px-24 grid grid-cols-2 grid-rows-3 gap-y-20 xs:gap-x-4 sm:gap-x-0 pb-32'>
          <div className='payment flex items-center gap-1'>
            <span>
              <img className='w-20' src={payImg} alt='' />
            </span>
            <span>
              <h1 className='text-gray-500 font-medium xs:text-md sm:text-xl mb-2'>
                PAYMENT OPTIONS
              </h1>
              <p className='text-gray-200 xs:text-sm sm:text-base'>
                We provide various withdrawal methods.
              </p>
            </span>
          </div>
          <div className='payment flex items-center gap-1'>
            <span>
              <img className='w-20' src={secureImg} alt='' />
            </span>
            <span>
              <h1 className='text-gray-500 font-medium xs:text-md sm:text-xl mb-2'>
                STRONG SECURITY
              </h1>
              <p className='text-gray-200 xs:text-sm sm:text-base'>
                With advanced security systems, we keep your account always
                protected.
              </p>
            </span>
          </div>
          <div className='flex items-center gap-1'>
            <span>
              <img className='w-20 mr-4' src={worldImg} alt='' />
            </span>
            <span>
              <h1 className='text-gray-500 font-medium xs:text-md sm:text-xl mb-2'>
                WORLD COVERAGE
              </h1>
              <p className='text-gray-200 xs:text-sm sm:text-base'>
                Our platform is used by bitcoin investors worldwide.
              </p>
            </span>
          </div>
          <div className='flex items-center gap-1'>
            <span>
              <img className='w-20 mr-4' src={teamImg} alt='' />
            </span>
            <span>
              <h1 className='text-gray-500 font-medium xs:text-md sm:text-xl mb-2'>
                EXPERIENCED TEAM
              </h1>
              <p className='text-gray-200 xs:text-sm sm:text-base'>
                Our experienced team helps us build the best product and deliver
                first class service to our clients.
              </p>
            </span>
          </div>
          <div className='flex items-center gap-1'>
            <span>
              <img className='w-20 mr-4' src={reportImg} alt='' />
            </span>
            <span>
              <h1 className='text-gray-500 font-medium xs:text-md sm:text-xl mb-2'>
                ADVANCED REPORTING
              </h1>
              <p className='text-gray-200 xs:text-sm sm:text-base'>
                We provide reports for all investments done using our platform.
              </p>
            </span>
          </div>
          <div className='flex items-center gap-1'>
            <span>
              <img className='w-20 mr-4' src={platformImg} alt='' />
            </span>
            <span>
              <h1 className='text-gray-500 font-medium xs:text-md sm:text-xl mb-2'>
                CROSS-PLATFORM TRADING
              </h1>
              <p className='text-gray-200 xs:text-sm sm:text-base'>
                Our platform can be accessed from various devices such as
                Phones, Tablets & Pc.
              </p>
            </span>
          </div>
          <div className='flex items-center gap-1'>
            <span>
              <img className='w-20 mr-4' src={supportImg} alt='' />
            </span>
            <span>
              <h1 className='text-gray-500 font-medium xs:text-md sm:text-xl mb-2'>
                EXPERT SUPPORT
              </h1>
              <p className='text-gray-200 xs:text-sm sm:text-base'>
                Our 24 support allows us to keep in touch with customers in all
                time zones and regions.
              </p>
            </span>
          </div>
          <div className='flex items-center gap-1'>
            <span>
              <img className='w-20 mr-4' src={exchangeImg} alt='' />
            </span>
            <span>
              <h1 className='text-gray-500 font-medium xs:text-md sm:text-xl mb-2'>
                INSTANT EXCHANGE
              </h1>
              <p className='text-gray-200 xs:text-sm sm:text-base'>
                Change your world today and make yourself a great tomorrow,
                invest with the little money you have and make a great profit at
                the end.
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
