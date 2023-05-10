import React, { useContext, useRef, useState } from 'react'
import { Button, InputGroup } from 'react-bootstrap'
import Context from '../Context'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
  const {user, login,setLogin} = useContext(Context)
 const UserName = useRef()
 const PassWord = useRef()
 const Navigate = useNavigate()
 
 const Login = ()=> {
   const loginUserNmae = UserName.current.value
   const loginPassword = PassWord.current.value
   
   const signupUserName = (user.map( element => element.username)).toString()
   const signupPassowrd = (user.map( element => element.password)).toString()
   if(login==0){
    if(signupPassowrd.includes(loginPassword) && signupUserName.includes(loginUserNmae)){
      setLogin([...login,{loginUserNmae}])
      Navigate('/')
 }else{    
   alert('email id or password missmatch')
 } 
   }else{
    alert(`alerdy ${loginUserNmae} loggedin`)
   }
  
 }
  return (
    <div style={{textAlign:'center', padding:'10rem'}}>
    <form onSubmit={e => e.preventDefault()}>
  <label >username</label><br/>
  <input type='text'ref={UserName}/><br/>
  <label>password</label><br/>
  <input type='password'ref={PassWord}/><br/>
  <Button onClick={Login}> SignIn</Button>

    </form>

    <Link to='/signup'>SignUp</Link>
    </div>
  )
}

export default SignIn
