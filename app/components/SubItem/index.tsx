import React from 'react';
import styled from 'styles/styled-components';
import { Card } from '../CardItem/Card';

const IconItem = styled.img`
  width: 50px;
  height: 50px;
  margin: 12px 25px;
  border-radius: 50%;
`;
const Content = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
`;
const NameSubItem = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: ${(props: NameSubItemProp) =>
    props.isActive === true ? '#414141' : '#FFFFFF'};
  margin-bottom: 9px;
`;
const DescriptionSubItem = styled.div`
  font-size: 11px;
  line-height: 13px;
  color: #666666;
`;
interface Props {
  icon: string;
  description: String;
  isActive: boolean;
  name: String;
}

interface NameSubItemProp {
  isActive: boolean;
}

export default function SubItem(props: Props) {
  const { icon, description, name, isActive } = props;
  return (
    <Card isActive={isActive}>
      <IconItem src={icon} />
      <Content>
        <NameSubItem isActive={isActive}>{name}</NameSubItem>
        <DescriptionSubItem>{description}</DescriptionSubItem>
      </Content>
    </Card>
  );
}
