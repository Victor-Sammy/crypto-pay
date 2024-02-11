import { useEffect, useState } from 'react'
import logoImage from '../../assets/crypto-pay-logo.jpg'
import './hero.css'

const Earnings = () => {
  const [visible1, setVisible1] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setVisible1(true)
    }, 3000)
    setTimeout(() => {
      setVisible1(false)
    }, 9000)
  }, [])
  return (
    <div
      className={`${
        visible1
          ? 'w-[60%] flex items-center gap-3 px-3 py-1 bg-white'
          : 'hidden'
      }`}
    >
      <span>
        <img className='w-16' src={logoImage} alt='' />
      </span>
      <span className='text-sm'>
        <h1 className='font-medium text-orange-500'>Earning</h1>
        <p>Richard from Germany has just earned $650.</p>
      </span>
    </div>
  )
}

export default Earnings
