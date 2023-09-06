import {  Route, Routes ,Navigate } from "react-router-dom"
import Profile from './pages/Profile';
import './index.css'
import Auth from "./pages/auth";
import MouseEffect from './components/mouseEffect';
import { ToastContainer  } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function App() {
  
  const IsMobile = 1200 > window.innerWidth




  return (
    <main className={`w-full h-screen overflow-y-auto ${!IsMobile && 'cursor-none'}`}>
      
      {
        !IsMobile && <MouseEffect />
      }

    <Routes>
      <Route path="/"   element={<Navigate to="/auth/login" />} />
      <Route path="/auth/:mood"  element={<Auth />} />
      <Route path="/profile"  element={<Profile />} />      
    </Routes>



    
    
    <ToastContainer
    theme="colored"
    position="top-center"
    autoClose={1000}
    pauseOnHover={false}
    rtl={true}
    limit={3} 
    style={{
      width: IsMobile ? '70%' : '35%', 
    }}
     />
    </main>
  )
}

export default App