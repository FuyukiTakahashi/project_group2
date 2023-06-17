import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import {NavLink} from 'react-router-dom';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  &:hover{
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAST.</Logo>
        <Desc>
          Ứng dụng mua sắm duy nhất được bảo trợ bởi team chúng tôi, kết nối
          người mua và người bán cả nước. Với mong muốn phục vụ nhu cầu mua sắm
          trực tuyến cho tất cả người tiêu dùng trên khắp Việt Nam, ứng dụng
          LAST có mọi thứ bạn cần, không chỉ giúp bạn sở hữu được những sản phẩm
          yêu thích với giá hợp túi tiền mà còn đem đến sự yên tâm và tiện lợi
          nhất khi mua sắm trực tuyến, mang lại cuộc sống đầy đủ hơn.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem><NavLink style={{textDecoration:"none",color:"black"}} to={'/home'}>Home</NavLink></ListItem>
          <ListItem><NavLink style={{textDecoration:"none",color:"black" }} to={'/cart'}>Cart</NavLink></ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem><NavLink style={{textDecoration:"none",color:"black"}} to={'/login'}>My Account</NavLink></ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem><NavLink style={{textDecoration:"none",color:"black"}} to={'/about'}>About Us</NavLink></ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          <a style={{textDecoration:"none",color:"black"}} href="https://www.google.com/maps/place/MindX+Technology+School+(Phan+V%C4%83n+Tr%E1%BB%8B)/@10.8338184,106.6673256,17z/data=!3m1!4b1!4m6!3m5!1s0x3175299b2ad247b3:0xcf35eadc38cea397!8m2!3d10.8338131!4d106.6699005!16s%2Fg%2F11q57t7w8m?hl=vi-VN&entry=ttu">
          Số 672A28 Phan Văn Trị,
          Phường 10, Quận Gò Vấp, TP HCM
          </a>
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +84 911 113 114
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          Nhomchaydeadline@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;

