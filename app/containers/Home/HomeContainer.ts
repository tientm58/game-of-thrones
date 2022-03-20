import styled from 'styles/styled-components';
import backgroungImg from './background.jpg'
import backgroundImg from 'images/background.jpg'
const HomeContainer = styled.div`
position: relative;
width: 100vw;
min-height:100vh;
background: url(${backgroundImg}) no-repeat;
background-size: cover;
top: 0px;
object-fit: cover;
`
export default HomeContainer;