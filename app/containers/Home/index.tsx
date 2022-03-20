import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styles/styled-components';
import { isEmpty, debounce } from 'lodash';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import CardItem from 'components/CardItem';
import NavBar from 'components/NavBar';
import Search from 'components/Search';
import SubItem from 'components/SubItem';
import gameOfThronesLogo from 'images/gameOfThronesLogo.png';
import {
  actionFetchHouseData,
  actionRestCharacterData,
  actionFetchCharacterData,
} from './actions';
import HomeContainer from './HomeContainer';
import reducer from './reducer';
import saga from './saga';
import { makeSelectHouses, makeSelectCurrentCharacters } from './selectors';
import { Character, HouseItem } from './types';
import { generateIcon, generateAvatar, generateBigAvatar } from './utils';

const key = 'home';

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
  margin-left: 50px;
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

const stateSelector = createStructuredSelector({
  houses: makeSelectHouses(),
  currentCharacters: makeSelectCurrentCharacters(),
});

function Home() {
  const [housesLocal, setHousesLocal] = useState<Array<HouseItem>>([]);
  const { houses, currentCharacters } = useSelector(stateSelector);
  const dispatch = useDispatch();

  useInjectReducer({ key: key, reducer: reducer });
  useInjectSaga({ key: key, saga: saga });

  useEffect(() => {
    dispatch(actionFetchHouseData());
  }, []);

  const [activedItemId, setActivedItemId] = useState(0);
  const [selectedSubData, setSelectedSubData] = useState<any>(null);
  const [selectedItemDetailId, setSelectedItemDetailId] = useState<
    null | number
  >(null);
  const [
    selectedItemDetail,
    setSelectedItemDetail,
  ] = useState<Character | null>(null);

  const handleClick = (id: number) => {
    setActivedItemId(id);
  };

  const handleShowDetailItem = (id: number) => {
    setSelectedItemDetailId(id);
  };

  useEffect(() => {
    dispatch(actionRestCharacterData());
    const houseSelected = housesLocal[activedItemId];
    if (houseSelected && !isEmpty(houseSelected?.swornMembers)) {
      houseSelected.swornMembers.forEach(e => {
        dispatch(actionFetchCharacterData(e));
      });
    }
  }, [activedItemId]);

  useEffect(() => {
    if (!selectedSubData) {
      const houseSelected = housesLocal[0];
      if (houseSelected && !isEmpty(houseSelected.swornMembers)) {
        houseSelected.swornMembers.forEach(e => {
          dispatch(actionFetchCharacterData(e));
        });
      }
    }
  }, [housesLocal]);

  useEffect(() => {
    setHousesLocal(houses);
  }, [houses]);

  useEffect(() => {
    if (
      currentCharacters &&
      selectedItemDetailId &&
      currentCharacters[selectedItemDetailId]
    )
      setSelectedItemDetail(currentCharacters[selectedItemDetailId]);
  }, [selectedItemDetailId]);

  useEffect(() => {
    if (currentCharacters && currentCharacters.length) {
      setSelectedItemDetailId(0);
      setSelectedItemDetail(currentCharacters[0]);
    }
  }, [currentCharacters]);

  const filterHouses = value => {
    const housesFilter = houses.filter(
      e =>
        (e.name && e.name.toLowerCase().includes(value.toLowerCase())) ||
        (e.words && e.words.toLowerCase().includes(value.toLowerCase())) ||
        (e.region && e.region.toLowerCase().includes(value.toLowerCase())),
    );
    setHousesLocal(housesFilter);
  };

  const debounceFilterHouses = useCallback(
    debounce(nextValue => filterHouses(nextValue), 1000),
    [],
  );

  const handleFilter = e => {
    const { value } = e.target;
    debounceFilterHouses(value);
  };

  return (
    <HomeContainer>
      <Header>
        <LogoImg src={gameOfThronesLogo}></LogoImg>
        <SubLogo>QUEM É QUEM EM WESTEROS</SubLogo>
      </Header>
      <Container>
        <TitleHouse>HOUSE</TitleHouse>
        <ListItem>
          <Search handleFilter={handleFilter} />
          {housesLocal.map((item, index) => {
            return (
              <div onClick={() => handleClick(index)}>
                <CardItem
                  key={index}
                  icon={generateIcon(index)}
                  content={item.name}
                  subContent={item.region}
                  wordContent={item.words}
                  isActive={activedItemId === index}
                />
              </div>
            );
          })}
        </ListItem>
        <TitleCharactor>CHARACTORS</TitleCharactor>
        <SubListItem>
          {currentCharacters && (
            <>
              {currentCharacters.map((item, index) => {
                return (
                  <>
                    {item.name && (
                      <div onClick={() => handleShowDetailItem(index)}>
                        <SubItem
                          key={index}
                          icon={generateAvatar(index)}
                          description={item.title}
                          name={item.name}
                          isActive={selectedItemDetailId === index}
                        />
                      </div>
                    )}
                  </>
                );
              })}
            </>
          )}
        </SubListItem>
        <DetailItem>
          {selectedItemDetail && selectedItemDetail.name && (
            <>
              <div>
                <NavBar
                  icon={generateBigAvatar(selectedItemDetailId)}
                  subName={selectedItemDetail.title}
                  name={selectedItemDetail.name}
                  desciption={selectedItemDetail.born}
                />
              </div>
            </>
          )}
        </DetailItem>
      </Container>
    </HomeContainer>
  );
}

export default Home;
