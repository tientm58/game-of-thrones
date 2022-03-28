import React from 'react';
import {
  Card,
  ContentContainer,
  Content,
  SubContent,
  IconItem,
  ViewDetail,
} from './Card';
import styled from 'styles/styled-components';
import { CardProps, ISubContent } from '../../containers/Home/types';

export default function CardItem(props: CardProps) {
  const { icon, content, isActive, subContent, handleViewDetail } = props;

  return (
    <Card isActive={isActive}>
      <IconItem src={icon} />
      <ContentContainer>
        <Content isActive={isActive}>{content}</Content>
        {subContent &&
          subContent.map(
            e =>
              e.value &&
              e.label != 'Name' && (
                <SubContent isActive={isActive}>
                  {e.label}: {e.value}
                </SubContent>
              ),
          )}
        <ViewDetail isActive={isActive} onClick={handleViewDetail}>
          View Detail
        </ViewDetail>
      </ContentContainer>
    </Card>
  );
}
