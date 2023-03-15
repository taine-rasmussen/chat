import { useState, useMemo } from 'react'
import { BrowserRouter, Router, Route, Navigate, Routes } from 'react-router-dom';
import Chat from '@/components/chat';
import Login from '@/components/login'


const App = () => {

  const [user, setUser] = useState();
  const [secret, setSecret] = useState();
  const isAuth = Boolean(user) && Boolean(secret);

  console.log(isAuth, user, secret)

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isAuth ? (
                <Navigate to="/chat" />
              ) : (
                <Login setUser={setUser} setSecret={setSecret} />
              )
            }
          />
          <Route
            path="/chat"
            element={
              isAuth ? (
                <Chat user={user} secret={secret} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
