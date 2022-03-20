import React from 'react';
import Card from './Card';
import styled from 'styles/styled-components';

const ContentContainer = styled.div``;
const Content = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${(props: propsContent) => (props.isActive ? '#414141' : '#FFFFFF')};
`;

const SubContent = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${(props: propsContent) => (props.isActive ? '#414141' : '#FFFFFF')};
`;

const IconItem = styled.img`
  width: 44px;
  height: 55px;
  margin: 12px 25px;
  object-fit: cover;
`;
interface Props {
  icon: string;
  content: String;
  subContent: String;
  isActive: boolean;
}
interface propsContent {
  isActive: boolean;
}
export default function CardItem(props: Props) {
  const { icon, content, isActive, subContent } = props;
  return (
    <Card isActive={isActive}>
      <IconItem src={icon} />
      <ContentContainer>
        <Content isActive={isActive}>{content}</Content>
        <SubContent isActive={isActive}>{subContent}</SubContent>
      </ContentContainer>
    </Card>
  );
}
