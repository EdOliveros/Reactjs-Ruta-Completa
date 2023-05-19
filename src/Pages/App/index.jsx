import Home from '../Home'
import MyAcount from '../MyAcount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../Signin'
import './App.css'

function App() {
  return (
    <div className='bg-red-100'>
      <Home />
      <MyAcount />
      <MyOrder />
      <MyOrders />
      <NotFound />
      <Signin />
    </div>
  )
}

export default App
