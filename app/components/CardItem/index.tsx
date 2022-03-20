import React from 'react';
import { Card, ContentContainer, Content, SubContent, IconItem } from './Card';
import styled from 'styles/styled-components';

interface Props {
  icon: string;
  content: String;
  subContent: String;
  wordContent: String;
  isActive: boolean;
}
interface propsContent {
  isActive: boolean;
}
export default function CardItem(props: Props) {
  const { icon, content, isActive, subContent, wordContent } = props;
  return (
    <Card isActive={isActive}>
      <IconItem src={icon} />
      <ContentContainer>
        <Content isActive={isActive}>{content}</Content>
        <SubContent isActive={isActive}>Region: {subContent}</SubContent>
        {wordContent && (
          <SubContent isActive={isActive}>Words: {wordContent}</SubContent>
        )}
      </ContentContainer>
    </Card>
  );
}
