
import styled from "styled-components";
import { mobile } from "../responsive";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import React, { useRef} from "react";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
 
  const name=useRef()
  const lastname=useRef()
  const username=useRef()
  const email=useRef()
  const password=useRef()
   
   const handleClick=()=>{
       if(name.current.value&&lastname.current.value&&username.current.value&&email.current.value&&password.current.value)
      {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("lastname",lastname.current.value)
        localStorage.setItem("username",username.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        alert("Account created successfully!!")
      }else{
        alert("Account created failed!!")
        window.location.reload()
      }
   }


  return (
  <>
  <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" type="text" ref={name}/>
          <Input placeholder="last name" type="text" ref={lastname}/>
          <Input placeholder="username" type="text" ref={username}/>
          <Input placeholder="email" type="email" ref={email}/>
          <Input placeholder="password" type="password" ref={password}/>
          <Input placeholder="confirm password" type="password" ref={password}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <NavLink to={'/home1'}><Button type="submit" onClick={handleClick}>CREATE</Button></NavLink>
        </Form>
      </Wrapper>
    </Container>
    <Footer/>
  </>
  );
};

export default Register;
