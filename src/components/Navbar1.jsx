import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {NavLink,Link} from 'react-router-dom';
import { ProductConsumer} from '../context';
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "20px", marginLeft: "10px" })}
  &:hover{
    color: red;
    transform: scale(1.2);
  }
`;

const Navbar = () => {
  const handleActive=(active)=>{
    return active.isActive ? "active" : "inactive"
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
          <MenuItem><NavLink style={{textDecoration:"none",color: "teal"}} to='/about' className={handleActive}>ABOUT</NavLink></MenuItem>
        </Left>
        <Center>
          <NavLink style={{textDecoration:"none",fontSize:"26px",color: "teal"}} to={'home'}><Logo>LAST</Logo></NavLink>
        </Center>
        <Right>
          <MenuItem><NavLink style={{textDecoration:"none",color: "teal"}} to='/login' className={handleActive}>LOGIN</NavLink></MenuItem>
          <MenuItem><NavLink style={{textDecoration:"none",color: "teal"}} to={'home'}><p></p></NavLink></MenuItem>
          <MenuItem> 
            <ProductConsumer>
              {value=>{
                 const {cart} = value;
                 if (cart.length > 0){
                  return (
                  <Link style={{textDecoration:"none",color: "teal"}} to='cart' >
                    <Badge badgeContent={cart.length} color="primary">
                      <ShoppingCartOutlined />
                    </Badge>
                  </Link>);
              } else { return(
                <Link style={{textDecoration:"none",color: "teal"}} to='cart' >
                    <Badge color="primary">
                      <ShoppingCartOutlined />
                    </Badge>
                </Link>
                );
              }}}
            </ProductConsumer>                 
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
