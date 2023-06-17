import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar1";
import Newsletter from "../components/Newsletter";

const Card = ({ avatar, name, information }) => {
  return (
    <div className="card">
      <img src={avatar} alt="Avatar" className="Avatar" />
      <h2>{name}</h2>
      <p>{information}</p>
    </div>
  );
};

const CardList = () => {
  const people = [
    {
      avatar:
        "https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-anh-anime-nam-toc-trang.jpg",
      name: "Lương Thế Tài",
      information:
        "Thiết kế chuyên mảng tạo tài khoản, dăng nhập, quản lý thông tin khách hàng",
    },
    {
      avatar:
        "https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-anh-anime-nam-toc-trang-mat-xanh.jpg",
      name: "Trần Thanh Sơn",
      information:
        "Lập danh sách mặt hàng, chuyên thiết kế các tác vụ liên quan đến mua sắm",
    },
    {
      avatar:
        "https://khoinguonsangtao.vn/wp-content/uploads/2022/11/anh-anime-nam-toc-trang-nen-mat-trang.jpg",
      name: "Lê Hoàng Minh Anh",
      information:
        "Thiết kế giao diện web, tăng trải nghiệm người dùng trên các nền tảng mmobile và PC",
    },
    {
      avatar:
        "https://khoinguonsangtao.vn/wp-content/uploads/2022/11/anh-anime-nam-toc-trang-cong-tu.jpg",
      name: "Nguyễn Hoàng Linh",
      information: "Lên ý tưởng, phụ trách nội dung của dự án mua sắm",
    },
  ];

  return (
    <div className="card-list">
      {people.map((person, index) => (
        <Card
          key={index}
          avatar={person.avatar}
          name={person.name}
          information={person.information}
        />
      ))}
    </div>
  );
};

const Container = styled.div`
  .card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .card {
    width: 300px;
    margin: 10px;
    padding: 30px;
    background-color: rgb(255, 204, 162, 0.15);
    backdrop-filter: blur(10px) brightness(110%);
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    border-radius: 15px;
  }

  .Avatar {
    width: 300px;
    height: 400px;
    object-fit: cover;
  }

  h2,
  p {
    margin: 5px 0;
  }
`;

const About = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <CardList />
      <Newsletter />
      <Footer />
    </Container>
  );
};
export default About;

