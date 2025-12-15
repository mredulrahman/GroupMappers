import { useState } from 'react'
import './App.css'
// import GRPMbdpage from './components/GRPMbdpage';
import AppRoutes from './components/Routes';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <GRPMbdpage/> */}
      <AppRoutes />
    </>
  )
}

export default App