import { useState } from 'react'
import { BrowserRouter, Router, Route, Navigate, Routes } from 'react-router-dom';
import Chat from '@/components/chat';
import Login from '@/components/login'


const App = () => {

  const [user, setUser] = useState(null);
  const [secret, setSectet] = useState(null)
  const isAuth = Boolean(user) && Boolean(secret);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/chat' element={isAuth ? <Chat user={user} secret={secret} /> : <Navigate to='/' />} />
          <Route path='/' element={isAuth ? <Navigate to='/' /> : <Login setUser={setUser} setSectet={setSectet} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
