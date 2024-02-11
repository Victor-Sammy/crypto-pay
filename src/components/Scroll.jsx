import img1 from '../assets/eur-usd.png'
import img2 from '../assets/logos_bitcoin.png'
import img3 from '../assets/eth-coin.jpg'
import img4 from '../assets/500.png'
import img5 from '../assets/100.png'
import './scroll.css'

const Scroll = () => {
  const content = [
    {
      id: 1,
      img: img1,
      currency: 'EUR/USD',
      rate: '1.10534 +0.00085',
      rateChange: '1.10535 -0.00091',
    },
    {
      id: 2,
      img: img2,
      currency: 'Bitcoin',
      rate: '29201 +24 (+0.11%)',
      rateChange: '29227 +55 (+0.18%)',
    },
    {
      id: 3,
      img: img3,
      currency: 'Ethereum',
      rate: '1856.2 +6.3 (+0.37%)',
      rateChange: '1856.5 +6.9 (+0.37%)',
    },
    {
      id: 4,
      img: img4,
      currency: 'S&P 500',
      rate: '4573.3 +9.6 (+0.22%)',
      rateChange: '4574.3 +10.8 (+0.23%)',
    },
    {
      id: 5,
      img: img5,
      currency: 'US 100',
      rate: '15560.0 +217.1 (+1.36%)',
      rateChange: '155778.1 +217.1 (+1.40%)',
    },
  ]
  return (
    <div className='logos xs:h-10 xl:h-16 flex items-center overflow-hidden bg-black border-b-[1px] border-white whitespace-nowrap'>
      <div className='logos-slide flex py-7 text-white'>
        {content.map((item) => (
          <div key={item.id} className='h-14 mr-44 flex items-center gap-2'>
            <img
              className='w-18 h-8 object-contain mr-2'
              src={item.img}
              alt=''
            />
            <h1 className='font-bold'>{item.currency}</h1>
            <p className='text-green-600'>{item.rate}</p>
          </div>
        ))}
        {content.map((item) => (
          <div key={item.id} className='h-14 mr-44 flex items-center gap-2'>
            <img
              className='w-18 h-8 object-contain mr-2'
              src={item.img}
              alt=''
            />
            <h1 className='font-bold'>{item.currency}</h1>
            <p className='text-green-600'>{item.rate}</p>
          </div>
        ))}
        {content.map((item) => (
          <div key={item.id} className='h-14 mr-44 flex items-center gap-2'>
            <img
              className='w-18 h-8 object-contain mr-2'
              src={item.img}
              alt=''
            />
            <h1 className='xs:font-normal sm:font-bold'>{item.currency}</h1>
            <p className='text-green-700'>{item.rate}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Scroll
