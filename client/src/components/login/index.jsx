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

  return (
    <div>
      Login
    </div>
  )
}

export default Login
