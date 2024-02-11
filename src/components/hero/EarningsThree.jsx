import { useEffect, useState } from 'react'
import logoImage from '../../assets/crypto-pay-logo.jpg'
import './hero.css'

const EarningsThree = () => {
  const [visible3, setVisible3] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setVisible3(true)
      setTimeout(() => {
        setVisible3(false)
      }, 5000)
    }, 16000)
  }, [])
  return (
    <div
      className={`${
        visible3
          ? 'w-[60%] flex items-center gap-3 px-3 py-1 bg-white'
          : 'hidden'
      }`}
    >
      <span>
        <img className='w-16' src={logoImage} alt='' />
      </span>
      <span className='text-sm'>
        <h1 className='font-medium text-orange-500'>Earning</h1>
        <p>Pratham from Pakistan has just earned $618.</p>
      </span>
    </div>
  )
}

export default EarningsThree
