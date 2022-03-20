import React from 'react';
import styled from 'styles/styled-components';
import NavContainer from './NavContainer'
import TitleNavBar from './TitleNavBar'
import Img from './Img'
interface Props {
   icon: string;  
   desciption:String;
   name:String;
   subName: String
  }
 const Title = styled.div`
font-weight: 400;
font-size: 22px;
line-height: 25px;
text-align: center;
margin:20px;
color: #FFFFFF;
 `;
 const SubTitle = styled.div`
 font-size: 14px;
 line-height: 17px;
 margin:20px;
 color: #FFFFFF;
  `;
 const Description = styled.div`
font-family: 'Garamond';
font-style: italic;
font-weight: 400;
font-size: 20px;
line-height: 22px;
text-align: center;
max-width: 280px;
  `;
export default function NavBar (props:Props){
    const {icon,desciption,name,subName} = props
    return (
        <NavContainer> 
        <TitleNavBar>DETALHES DA PERSONAGEM</TitleNavBar>
        <Img src={icon}/>
        <Title>{name}</Title>
        <SubTitle>{subName}</SubTitle>
        <Description>{desciption}</Description>
        </NavContainer>
    )
}