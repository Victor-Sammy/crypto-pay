import { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const NewDepositModal = () => {
  const [amount, setAmount] = useState('')
  const navigate = useNavigate()
  return (
    <div className='h-40 flex items-start bg-[#5589c4] relative'>
      <div className='form flex flex-col gap-6'>
        <h1 className='text-sm text-white'>Make new deposit:</h1>
        <input
          className='px-2 py-2 w-[250px] placeholder:text-xs'
          type='number'
          placeholder='Enter amount here'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className='bg-green-400 hover:bg-green-500 w-[80px] px-1 py-2 rounded text-xs text-white'
          onClick={() => {
            localStorage.setItem('amount', amount)
            navigate('/makePayment')
          }}
        >
          Continue
        </button>
        <button
          className='absolute right-0 top-0 text-gray-300 hover:text-gray-100 text-lg'
          onClick={() => window.onclick()}
        >
          <MdClose />
        </button>
      </div>
    </div>
  )
}

export default NewDepositModal
