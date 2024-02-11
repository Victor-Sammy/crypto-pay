import Navbar from '../components/Navbar'
import Scroll from '../components/Scroll'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/Hero'

const Home = () => {
  return (
    <div className='bg-black xl:px-72'>
      <Navbar />
      <Scroll />
      <Hero />
      <Footer />
    </div>
  )
}

export default Home
