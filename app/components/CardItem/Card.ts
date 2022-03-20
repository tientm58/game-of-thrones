import styled from 'styles/styled-components';
interface props{
    isActive: boolean;
}
const Card = styled.div`
width: 320px;
height: 80px;
display: flex;
align-items: center;
background: ${(props:props)=>props.isActive === true? '#dedede' :'#222222'};
margin:7px;
border-radius: 5px;
cursor: pointer;
`
export default Card;