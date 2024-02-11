import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import UserPage from './pages/userpage/UserPage'
import Signup from './pages/Signup'
import Deposits from './pages/deposit/Deposits'
import MakePayment from './pages/payment/MakePayment'
import Withdraw from './pages/withdraw/Withdraw'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'

function App() {
  const [user, setUser] = useState(null)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/login'
          element={<Login user={user} setUser={setUser} />}
        />
        <Route
          path='/signup'
          element={<Signup user={user} setUser={setUser} />}
        />
        <Route
          path='/userPage'
          element={<UserPage user={user} setUser={setUser} />}
        />
        <Route path='/deposits' element={<Deposits />} />
        <Route path='/makePayment' element={<MakePayment />} />
        <Route path='/withdraw' element={<Withdraw />} />
      </Routes>
      <ToastContainer position='bottom-right' />
    </>
  )
}

export default App
