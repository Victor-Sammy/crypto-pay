/* eslint-disable react/prop-types */
const PaymentDetails = ({ detail }) => {
  const date = new Date(detail?.createdAt?.seconds * 1000) // Convert seconds to milliseconds
  const formattedDate = date.toLocaleString()
  return (
    <div className='deposits-info h-10 border-[1px] border-blue-400 border-b-gray-300 flex items-center text-white xs:text-[.5rem] sm:text-[.7rem] mb-6'>
      <span className='w-[15%] border-r h-full px-2 border-r-blue-400 flex items-center overflow-hidden'>
        {detail.id}
      </span>
      <span className='w-[23%] border-r h-full pl-2 border-r-blue-400 flex items-center'>
        ${detail.amount}
      </span>
      <span className='w-[30%] border-r h-full pl-2 border-r-blue-400 flex items-center'>
        {detail.mode}
      </span>
      <span className='w-[18%] border-r h-full pl-2 border-r-blue-400 flex items-center'>
        paid
      </span>
      <span className='w-[14%] border-r h-full pl-2 border-r-blue-400 flex items-center'>
        {formattedDate}
      </span>
    </div>
  )
}

export default PaymentDetails
