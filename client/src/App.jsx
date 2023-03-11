import { useState } from 'react'
import { BrowserRouter, Router, Route, Navigate, Routes } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
