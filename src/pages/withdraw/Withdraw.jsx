import { useState } from 'react'
import './withdraw.css'
import Crypto from '../../assets/logos_bitcoin.png'
import Transfer from '../../assets/transfer.png'
import Cashapp from '../../assets/cashapp.png'
import Skrill from '../../assets/skrill.jpg'
import Western from '../../assets/western.jpg'
import Paypal from '../../assets/paypal.png'
import { useNavigate } from 'react-router-dom'

const Withdraw = () => {
  const [crypt, setCrypt] = useState(false)
  const [transfer, setTransfer] = useState(false)
  const [cashapp, setCashapp] = useState(false)
  const [skrill, setSkrill] = useState(false)
  const [western, setWestern] = useState(false)
  const [paypal, setPaypal] = useState(false)

  const navigate = useNavigate()

  const handleCrypto = () => {
    setCrypt(!crypt)
  }
  const handleTransfer = () => {
    setTransfer(!transfer)
  }
  const handleCashapp = () => {
    setCashapp(!cashapp)
  }
  const handleSkrill = () => {
    setSkrill(!skrill)
  }
  const handleWestern = () => {
    setWestern(!western)
  }
  const handlePaypal = () => {
    setPaypal(!paypal)
  }

  return (
    <div className='withdrawPage min-h-screen text-white xs:px-[5%] md:px-[10%] lg:px-[20%] xl:px-[25%] relative'>
      <div className='text-center xs:pt-20 sm:pt-32'>
        <h1 className='font-bold xs:text-lg md:text-3xl mb-2'>
          MAKE A WITHDRAWAL REQUEST.
        </h1>
        <p className='text-xs'>AVAILABLE BALANCE: $0.00</p>
        <p className='text-xs mb-6'>WITHDRAWAL: $0.00</p>
        <p>
          Withdrawal/{' '}
          <span
            className='text-yellow-300 cursor-pointer'
            onClick={() => navigate('/userPage')}
          >
            Home
          </span>
        </p>
      </div>
      <div className='option-card bg-white mt-10 pb-1 rounded'>
        <h1 className='text-black xs:text-[.8rem] sm:text-lg md:text-2xl mx-5 py-5'>
          SELECT YOUR PREFERRED WITHDRAWAL PAYMENT OPTION :
        </h1>
        <section className='crypto mx-5 mb-10'>
          <div
            className='crypto xs:h-12 sm:h-16 cursor-pointer bg-cyan-400 hover:bg-cyan-500 rounded flex items-center justify-center mb-10'
            onClick={handleCrypto}
          >
            <span className='flex items-center gap-2'>
              <img className='w-8 h-8' src={Crypto} alt='' />
              <h1 className='font-medium text-sm'>CRYPTO (recommended)</h1>
            </span>
          </div>
          <div className={`${crypt ? 'block' : 'hidden'}`}>
            <div className='text-black mb-7'>
              <p className='text-sm font-medium mb-2'>Input Amount</p>
              <input
                className='w-full h-10 px-2 border placeholder:text-sm rounded'
                type='number'
                placeholder='Amount'
              />
            </div>
            <div className='text-black mb-4'>
              <p className='text-sm font-medium mb-2'>Wallet Address</p>
              <input
                className='w-full h-10 px-2 border placeholder:text-sm rounded'
                type='text'
                placeholder='Wallet Address'
              />
            </div>
            <button
              className='bg-[#113967] hover:bg-yellow-500 w-full text-center py-2 rounded-full'
              onClick={() => window.my_modal_2.showModal()}
            >
              PROCEED
            </button>
          </div>
        </section>
        <section className='transfer mx-5 mb-10'>
          <div
            className='xs:h-12 sm:h-16 cursor-pointer bg-cyan-400 hover:bg-cyan-500 rounded flex items-center justify-center mb-10'
            onClick={handleTransfer}
          >
            <span className='flex items-center gap-2'>
              <img className='w-8 h-8' src={Transfer} alt='' />
              <h1 className='font-medium text-sm'>Transfer</h1>
            </span>
          </div>
          <div className={`${transfer ? 'block' : 'hidden'}`}>
            <div className='text-black mb-4'>
              <p className='text-sm font-medium mb-2'>Name</p>
              <input
                className='w-full h-10 px-2 border placeholder:text-sm rounded'
                type='text'
                placeholder='Name'
              />
            </div>
            <div className='text-black mb-4'>
              <p className='text-sm font-medium mb-2'>Account number</p>
              <input
                className='w-full h-10 px-2 border placeholder:text-sm rounded'
                type='number'
                placeholder='Account number'
              />
            </div>
            <div className='text-black mb-4'>
              <p className='text-sm font-medium mb-2'>Bank</p>
              <input
                className='w-full h-10 px-2 border placeholder:text-sm rounded'
                type='text'
                placeholder='Bank'
              />
            </div>
            <div className='text-black mb-7'>
              <p className='text-sm font-medium mb-2'>Amount</p>
              <input
                className='w-full h-10 px-2 border placeholder:text-sm rounded'
                type='number'
                placeholder='Input Amount'
              />
            </div>
            <button
              className='bg-[#113967] hover:bg-yellow-500 w-full text-center py-2 rounded-full'
              onClick={() => window.my_modal_2.showModal()}
            >
              PROCEED
            </button>
          </div>
        </section>
        <section className='cashapp mx-5 mb-10'>
          <div
            className='xs:h-12 sm:h-16 cursor-pointer bg-cyan-400 hover:bg-cyan-500 rounded flex items-center justify-center mb-10'
            onClick={handleCashapp}
          >
            <span className='flex items-center gap-2'>
              <img className='w-8 h-8' src={Cashapp} alt='' />
              <h1 className='font-medium text-sm'>Cashapp</h1>
            </span>
          </div>
          <div className={`${cashapp ? 'block' : 'hidden'}`}>
            <div className='text-black mb-4'>
              <p className='text-sm font-medium mb-2'>Amount</p>
              <input
                className='w-full h-10 px-2 border placeholder:text-sm rounded'
                type='number'
                placeholder='Amount'
              />
            </div>
            <div className='text-black mb-4'>
              <p className='text-sm font-medium mb-2'>Cashapp Tag</p>
              <input
                className='w-full h-10 px-2 border placeholder:text-sm rounded'
                type='text'
                placeholder='Cashapp Tag'
              />
            </div>
            <button
              className='bg-[#113967] hover:bg-yellow-500 w-full text-center py-2 rounded-full'
              onClick={() => window.my_modal_2.showModal()}
            >
              PROCEED
            </button>
          </div>
        </section>
        <section className='skrill mx-5 mb-10'>
          <div
            className='xs:h-12 sm:h-16 cursor-pointer bg-cyan-400 hover:bg-cyan-500 rounded flex items-center justify-center mb-10'
            onClick={handleSkrill}
          >
            <span className='flex items-center gap-2'>
              <img className='w-8 h-8' src={Skrill} alt='' />
              <h1 className='font-medium text-sm'>Skrill</h1>
            </span>
          </div>
          <div className={`${skrill ? 'block' : 'hidden'}`}>
            <div className='text-black mb-4'>
              <p className='text-sm font-medium mb-2'>Input Amount</p>
              <input
                className='w-full h-10 px-2 border placeholder:text-sm rounded'
                type='number'
                placeholder='Amount'
              />
            </div>
            <button
              className='bg-[#113967] hover:bg-yellow-500 w-full text-center py-2 rounded-full'
              onClick={() => window.my_modal_2.showModal()}
            >
              PROCEED
            </button>
          </div>
        </section>
        <section className='western-union mx-5 mb-10'>
          <div
            className='xs:h-12 sm:h-16 cursor-pointer bg-cyan-400 hover:bg-cyan-500 rounded flex items-center justify-center mb-10'
            onClick={handleWestern}
          >
            <span className='flex items-center gap-2'>
              <img className='w-8 h-8' src={Western} alt='' />
              <h1 className='font-medium text-sm'>Western Union</h1>
            </span>
          </div>
          <div className={`${western ? 'block' : 'hidden'}`}>
            <div className='text-black mb-4'>
              <p className='text-sm font-medium mb-2'>Input Amount</p>
              <input
                className='w-full h-10 px-2 border placeholder:text-sm rounded'
                type='number'
                placeholder='Amount'
              />
            </div>
            <button
              className='bg-[#113967] hover:bg-yellow-500 w-full text-center py-2 rounded-full'
              onClick={() => window.my_modal_2.showModal()}
            >
              PROCEED
            </button>
          </div>
        </section>
        <section className='paypal mx-5 mb-2'>
          <div
            className='xs:h-12 sm:h-16 cursor-pointer bg-cyan-400 hover:bg-cyan-500 rounded flex items-center justify-center mb-10'
            onClick={handlePaypal}
          >
            <span className='flex items-center gap-2'>
              <img className='w-8 h-8' src={Paypal} alt='' />
              <h1 className='font-medium text-sm'>Paypal</h1>
            </span>
          </div>
          <div className={`${paypal ? 'block' : 'hidden'}`}>
            <div className='text-black mb-4'>
              <p className='text-sm font-medium mb-2'>Input Amount</p>
              <input
                className='w-full h-10 px-2 border placeholder:text-sm rounded'
                type='number'
                placeholder='Amount'
              />
            </div>
            <button
              className='bg-[#113967] hover:bg-yellow-500 w-full text-center py-2 rounded-full'
              onClick={() => window.my_modal_2.showModal()}
            >
              PROCEED
            </button>
          </div>
        </section>
      </div>
      {/* Open the modal using ID.showModal() method */}
      <dialog id='my_modal_2' className='modal'>
        <form method='dialog' className='modal-box'>
          <p className='py-4 text-black'>
            withdrawals will be made available after 7 days!
          </p>
        </form>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}

export default Withdraw
