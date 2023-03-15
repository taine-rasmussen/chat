import { useState, useEffect } from 'react';
import { usePostSignUpMutation, usePostLoginMutation } from '@/state/api'

const Login = () => {

  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [triggerLogin] = usePostLoginMutation();
  const [triggerSignUp] = usePostSignUpMutation();

  const handleLogin = () => {
    triggerLogin({ username, password })
  };

  const handleRegister = () => {
    triggerSignUp({ username, password });
  };

  useEffect(
    () => {
      if (resultLogin.data?.response) {
        setUsername(username)
        setPassword(password)
      }
    }, [response.data]
  )

  return (
    <div className='login-page'>
      <div className='login-container'>
        <h2 className='title'>ChatGPT App</h2>
        <p className='register-change' onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? 'Already a user?' : 'Are you a new user?'}
        </p>
      </div>
      <input
        className='login-input'
        type='text'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      Login
    </div>
  )
}

export default Login
