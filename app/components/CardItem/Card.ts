import styled from 'styles/styled-components';
interface props {
  isActive: boolean;
}
export const Card = styled.div`
  width: 300px;
  height: 90px;
  display: flex;
  align-items: center;
  background: ${(props: props) =>
    props.isActive === true ? '#dedede' : '#222222'};
  margin: 7px;
  border-radius: 5px;
`;

export const ContentContainer = styled.div``;
export const Content = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${(props: props) => (props.isActive ? '#414141' : '#FFFFFF')};
`;

export const SubContent = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${(props: props) => (props.isActive ? '#414141' : '#FFFFFF')};
`;

export const IconItem = styled.img`
  width: 44px;
  height: 55px;
  margin: 12px 25px;
  object-fit: cover;
`;

export const ViewDetail = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-decoration: underline;
  cursor: pointer;
  color: ${(props: props) => (props.isActive ? '#414141' : '#FFFFFF')};
`;
