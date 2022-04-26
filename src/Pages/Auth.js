import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import styled from 'styled-components';
import { authService } from '../fbase';

const Div = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const H1 = styled.h1`  
  margin-bottom: 50px;
`
const Form = styled.form`  
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const Input = styled.input`
  all: unset;
  width: 350px;
  height: 40px;
  background-color: #eee;
  display: block;
  justify-content: center;
  padding-left: 20px;
  box-sizing: border-box;
  margin-top: 10px;
`
const Submit = styled.input`
  all: unset;
  width: 350px;
  height: 40px;
  background-color: #222;
  color: #fff;
  text-align: center;
  margin: 40px 0;
  &:hover{
    background-color: #333;
  }
`
const BottomWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before{
    content: '';
    width: 500px;
    border: 1px solid #eee;
  }
`
const Btn = styled.button`
  all: unset;
  width: 350px;
  height: 40px;
  background-color: #888;
  color: #fff;
  text-align: center;
  margin: 40px 0;
  &:hover{
    background-color: #999;
  }
`
const Img = styled.img`
  width: 50px;
  margin-top: 10px;
  &:hover{
    transform: scale(102%);
  }
`





function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {target: {name, value}} = event;
    if(name === "email"){
      setEmail(value)
    }else if (name==='password'){
      setPassword(value);
    }
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data
      const auth = getAuth()
      if(newAccount) {
        data = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        data = await signInWithEmailAndPassword(auth, email, password);
      }
    } catch(error) {
      setError(error.message);
      }
    };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (event) =>{
    const {target:{name}} = event;
    let provider;
    if(name === 'google'){
      provider = new GoogleAuthProvider();
    }
    const data = await signInWithPopup(authService, provider);
    console.log(data)
  }

  return (
    <Div>
      <H1>{!newAccount ? "로그인" : '회원가입'}</H1>
      <Form onSubmit={onSubmit}> 
        <Input 
          name='email'
          type="email" 
          placeholder='이메일을 입력해주세요' 
          required 
          value={email}
          onChange={onChange}
          />
        <Input 
          name='password'
          type="password" 
          placeholder='비밀번호 (6자 이상)' 
          required 
          value={password}
          onChange={onChange}
          />
        <Submit type="submit" value={newAccount ? '등록' : '로그인'}/>
        {error}
      </Form>
      <BottomWrap>
        <Btn onClick={toggleAccount}>{newAccount ? "로그인 하러가기" : '이메일로 가입하기'}</Btn>
        <span>sns로 간편로그인</span>
        <Img src='https://icons-for-free.com/download-icon-g+google+google+2015+new+google+icon-1320190551260288871_512.png' onClick={onSocialClick} name='google'/>
      </BottomWrap>


    </Div>
  )
}

export default Auth