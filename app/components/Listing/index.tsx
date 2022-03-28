import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { mapKeys, forIn, debounce } from 'lodash';
import styled from 'styles/styled-components';
import Search from 'components/Search';
import CardItem from 'components/CardItem';
import { Character, HouseItem, ISubContent } from '../../containers/Home/types';
import { actionViewDetailObjInModal } from '../../containers/Home/actions.ts';

interface ListingProps {
  dataSource: any;
  title: string;
  propertyValue: any;
  propertyDisplayLabel: any;
  generateIcon: func;
}

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

const ListItem = styled.div`
  margin-top: 20px;
  background-color: #161616;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  padding-bottom: 15px;
`;

const ListingContainer = styled.div`
  display: flex;
`;

function Listing(props: ListingProps) {
  const {
    dataSource,
    title,
    propertyValue,
    propertyDisplayLabel,
    generateIcon,
  } = props;
  const [dataLocal, setDataLocal] = useState<Array<any>>(dataSource);
  const [activedItemId, setActivedItemId] = useState(0);

  const dispatch = useDispatch();

  const handleClick = (id: number) => {
    setActivedItemId(id);
  };

  useEffect(() => {
    setDataLocal(dataSource);
  }, [dataSource]);

  const filterHouses = keyword => {
    const dataSourceFilter =
      dataSource &&
      dataSource.filter(e => {
        for (let index = 0; index < propertyValue.length; index++) {
          const property = propertyValue[index];
          if (
            e[property] &&
            e[property].toLowerCase().includes(keyword.toLowerCase())
          ) {
            return true;
          } else if (index === propertyValue.length - 1) {
            return false;
          }
        }
        return false;
      });
    if (dataSourceFilter) setDataLocal(dataSourceFilter);
  };

  const debounceFilterHouses = useCallback(
    debounce(nextValue => filterHouses(nextValue), 1000),
    [dataSource],
  );

  const handleFilter = e => {
    const { value } = e.target;
    debounceFilterHouses(value);
  };

  const handleViewDetail = (type, data) => {
    dispatch(
      actionViewDetailObjInModal({
        type,
        data,
      }),
    );
  };

  return (
    <>
      <ListingContainer>
        <TitleHouse>{title}</TitleHouse>
        <ListItem>
          <Search handleFilter={handleFilter} />
          {dataLocal &&
            dataLocal.map((item, index) => {
              const subContent = propertyDisplayLabel.map((e, index) => ({
                label: e,
                value: item[propertyValue[index]],
              }));
              return (
                <div onClick={() => handleClick(index)}>
                  <CardItem
                    key={index}
                    icon={generateIcon(index)}
                    content={item.name}
                    subContent={subContent as [ISubContent]}
                    isActive={activedItemId === index}
                    handleViewDetail={() => handleViewDetail(title, item)}
                  />
                </div>
              );
            })}
        </ListItem>
      </ListingContainer>
    </>
  );
}

export default Listing;
