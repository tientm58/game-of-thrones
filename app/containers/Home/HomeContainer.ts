import styled from 'styles/styled-components';
import backgroungImg from './background.jpg';
import backgroundImg from 'images/background.jpg';

const HomeContainer = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background: url(${backgroundImg}) repeat;
  background-size: cover;
  top: 0px;
  object-fit: cover;
`;

const Header = styled.div`
  padding: 40px;
  display: flex;
  width: 700px;
  height: 33px;
  left: 85px;
  top: 54px;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 270px;
  height: 33px;
  object-fit: cover;
`;

const SubLogo = styled.div`
  color: #b4b2b2;
  padding-left: 15px;
  border-left-style: solid;
`;

const Container = styled.div`
  display: flex;
  color: white;
  column-gap: 80px;
  margin-left: 80px;
`;

const ListItem = styled.div`
  flex: 1;
  margin-top: 20px;
  background-color: #161616;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  padding-bottom: 15px;
`;

const SubListItem = styled.div`
  flex: 1;
  margin-top: 20px;
  background-color: #161616;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  padding: 13px 0 13px 0;
`;

const DetailItem = styled.div`
  flex: 1;
`;
const TitleHouse = styled.span`
  position: absolute;
  top: 80px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 13px;
  color: #444444;
`;
const TitleCharactor = styled.span`
  position: absolute;
  left: 37.5%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 13px;
  color: #444444;
`;

const Button = styled.button`
  display: inline-block;
  padding: 5px 5px;
  font-size: 12px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #414141;
  border: none;
  border-radius: 10px;
`;

export {
  HomeContainer,
  Header,
  LogoImg,
  SubLogo,
  Container,
  ListItem,
  DetailItem,
  TitleHouse,
  TitleCharactor,
  Button,
};
