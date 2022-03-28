import React, { useState } from 'react';
import styled from 'styles/styled-components';
import { EXPIRED_KEY } from './constants';
import imgAVt from 'images/avatarLogin.jpg';
import history from 'utils/history';

const BackgroundLogin = styled.div`
  background: url(${imgAVt}) no-repeat;
  background-size: 100vw 100vh;
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const FormLogin = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  top: 30%;
  left: 63%;
  border-radius: 5px;
`;
const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #2e353b;
  color: white;
`;
const ButtonSubmit = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #354865;
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const Title = styled.div`
  font-size: 20px;
`;

interface UserInfor {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [userInfor, setUserInfor] = useState({
    email: '',
    password: '',
  });

  const handleChangeValue = e => {
    const { value, name } = e.target;

    setUserInfor({
      ...userInfor,
      [name]: value,
    });
  };

  const handleLogin = e => {
    e.preventDefault();
    if (userInfor?.email === 'admin' && userInfor?.password === 'admin') {
      const newDateTime = new Date().getTime() + 1000 * 60 * 5;
      localStorage.setItem(EXPIRED_KEY, Number(newDateTime).toString());
      history.push('/game-of-thrones');
    } else {
      alert('User: admin - Password: admin');
    }
  };

  return (
    <BackgroundLogin>
      <FormLogin>
        <Title>Login to your account</Title>
        <form>
          <Input
            type="text"
            name="email"
            placeholder="Your Email.."
            value={userInfor?.email}
            onChange={handleChangeValue}
          />
          <Input
            type="password"
            placeholder="Your Password.."
            name="password"
            value={userInfor?.password}
            onChange={handleChangeValue}
          />
          <ButtonSubmit type="submit" onClick={handleLogin}>
            {' '}
            Login now{' '}
          </ButtonSubmit>
        </form>
      </FormLogin>
    </BackgroundLogin>
  );
}
