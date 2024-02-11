import { useEffect, useState } from 'react'
import logoImage from '../../assets/crypto-pay-logo.jpg'
import './hero.css'

const EarningsTwo = () => {
  const [visible2, setVisible2] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setVisible2(true)
      setTimeout(() => {
        setVisible2(false)
      }, 5000)
    }, 10000)
  }, [])
  return (
    <div
      className={`${
        visible2
          ? 'w-[60%] flex items-center gap-3 px-3 py-1 bg-white'
          : 'hidden'
      }`}
    >
      <span>
        <img className='w-16' src={logoImage} alt='' />
      </span>
      <span className='text-sm'>
        <h1 className='font-medium text-orange-500'>Earning</h1>
        <p>Chris from Florida has just earned $1225.</p>
      </span>
    </div>
  )
}

export default EarningsTwo
