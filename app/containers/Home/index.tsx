import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Modal from 'react-modal';
import moment from 'moment';
import styled from 'styles/styled-components';
import { isEmpty, debounce } from 'lodash';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import CardItem from 'components/CardItem';
import NavBar from 'components/NavBar';
import Search from 'components/Search';
import SubItem from 'components/SubItem';
import Listing from 'components/Listing';
import ModalComponent from 'components/Modal';
import gameOfThronesLogo from 'images/gameOfThronesLogo.png';
import {
  actionFetchHouseData,
  actionRestCharacterData,
  actionFetchCharacterData,
} from './actions';
import {
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
} from './HomeContainer';
import reducer from './reducer';
import saga from './saga';
import { makeSelectHouses, makeSelectCurrentCharacters } from './selectors';
import { Character, HouseItem, ISubContent } from './types';
import { generateIcon, generateAvatar, generateBigAvatar } from './utils';
import { ApplicationRootState } from 'types';
import { TYPE, PROPERTY_VALUE, PROPERTY_DISPLAY_LABEL } from './constants';

Modal.setAppElement('#home');

const key = 'home';

function Home() {
  const [openModal, setOpenModal] = useState(false);
  const { books, houses, characters, viewDetailObj } = useSelector(
    (state: ApplicationRootState) => {
      return state.home || {};
    },
  );

  const dispatch = useDispatch();

  useInjectReducer({ key: key, reducer: reducer });
  useInjectSaga({ key: key, saga: saga });

  useEffect(() => {
    dispatch(actionFetchHouseData());
  }, []);

  useEffect(() => {
    if (viewDetailObj) {
      setOpenModal(true);
    }
  }, [viewDetailObj]);

  const closeModal = () => {
    setOpenModal(false);
  };

  const renderModalContent = () => {
    if (!viewDetailObj) return;
    const { type, data } = viewDetailObj;
    return (
      <>
        <div>Type: {type && type}</div>
        {type === TYPE.BOOKS && (
          <ul>
            <li>
              Authors:{' '}
              {data?.authors && data?.authors.length && data?.authors[0]}
            </li>
            <li>Country: {data?.country}</li>
            <li>IsBN: {data?.isbn}</li>
            <li>Media Type: {data?.mediaType}</li>
            <li>Name: {data?.name}</li>
            <li>Number Of Pages: {data?.numberOfPages}</li>
            <li>Publisher: {data?.publisher}</li>
            <li>Released: {moment(data?.released).format('DD/MM/YYYY')}</li>
          </ul>
        )}
        {type === TYPE.HOUSES && (
          <ul>
            <li>Coat Of Arms: {data?.coatOfArms}</li>
            <li>Name: {data?.name}</li>
            <li>Region: {data?.region}</li>
            <li>Words: {data?.words}</li>
            <li>
              Seats: {data?.seats && data?.seats.length && data?.seats[0]}
            </li>
          </ul>
        )}
        {type === 'CHARACTERS' && (
          <ul>
            <li>Culture: {data?.culture}</li>
            <li>Name: {data?.name}</li>
            <li>Gender: {data?.gender}</li>
            <li>Played By: {data?.playedBy}</li>
            <li>
              Aliases:{' '}
              {data?.aliases && data?.aliases.length && data?.aliases[0]}
            </li>
          </ul>
        )}

        <Button type="button" onClick={closeModal}>
          Close Modal
        </Button>
      </>
    );
  };

  return (
    <HomeContainer>
      <Header>
        <LogoImg src={gameOfThronesLogo}></LogoImg>
        <SubLogo>QUEM É QUEM EM WESTEROS</SubLogo>
      </Header>
      <Container>
        {books && (
          <Listing
            title={TYPE.BOOKS}
            propertyValue={PROPERTY_VALUE.BOOKS}
            propertyDisplayLabel={PROPERTY_DISPLAY_LABEL.BOOKS}
            dataSource={books}
            generateIcon={generateIcon}
          />
        )}
        {houses && (
          <Listing
            title={TYPE.HOUSES}
            propertyValue={PROPERTY_VALUE.HOUSES}
            propertyDisplayLabel={PROPERTY_DISPLAY_LABEL.HOUSES}
            dataSource={houses}
            generateIcon={generateIcon}
          />
        )}
        {characters && (
          <Listing
            title={TYPE.CHARACTERS}
            propertyValue={PROPERTY_VALUE.CHARACTERS}
            propertyDisplayLabel={PROPERTY_DISPLAY_LABEL.CHARACTERS}
            dataSource={characters}
            generateIcon={generateAvatar}
          />
        )}
        <ModalComponent
          modalIsOpen={openModal}
          closeModal={closeModal}
          Modal={Modal}
          renderContent={renderModalContent}
        />
      </Container>
    </HomeContainer>
  );
}

export default Home;
