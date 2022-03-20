import icon1 from 'images/Stark.svg';
import icon2 from 'images/Stark1.svg';
import icon3 from 'images/Stark3.svg';
import icon4 from 'images/Stark4.svg';
import icon5 from 'images/Stark5.svg';
import icon6 from 'images/Stark6.svg';
import icon7 from 'images/Stark7.svg';
import icon8 from 'images/Stark8.svg';

import StarkCharactor from 'images/StarkCharactor.svg';
import StarkCharactor1 from 'images/StarkCharactor1.svg';
import StarkCharactor2 from 'images/StarkCharactor2.svg';
import StarkCharactor3 from 'images/StarkCharactor3.svg';
import StarkCharactor4 from 'images/StarkCharactor4.svg';
import StarkCharactor5 from 'images/StarkCharactor5.svg';
import StarkCharactor6 from 'images/StarkCharactor6.svg';
import StarkCharactor7 from 'images/StarkCharactor7.svg';

import Cersei from 'images/Cersei.svg';
import Sansa from 'images/Sansa.svg';

export const generateIcon = index => {
  const indexFomart = index + 1 > 8 ? index % 8 : index + 1;
  switch (indexFomart) {
    case 1:
      return icon1;
    case 2:
      return icon2;
    case 3:
      return icon3;
    case 4:
      return icon4;
    case 5:
      return icon5;
    case 6:
      return icon6;
    case 7:
      return icon7;
    case 8:
      return icon8;
    default:
      return icon1;
  }
};

export const generateAvatar = index => {
  const indexFomart = index + 1 > 8 ? index % 8 : index + 1;
  switch (indexFomart) {
    case 1:
      return StarkCharactor;
    case 2:
      return StarkCharactor1;
    case 3:
      return StarkCharactor2;
    case 4:
      return StarkCharactor3;
    case 5:
      return StarkCharactor4;
    case 6:
      return StarkCharactor5;
    case 7:
      return StarkCharactor6;
    case 8:
      return StarkCharactor7;
    default:
      return StarkCharactor;
  }
};

export const formatCharacter = data => ({
  ...data,
  title: data.titles[0],
});

export const generateBigAvatar = index => {
  const indexFomart = index + 1 > 3 ? index % 3 : index + 1;
  switch (indexFomart) {
    case 1:
      return Cersei;
    case 2:
      return Sansa;
    case 3:
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn3gc9z8WDX_xnYToiNEYPCrAK7UWld99mFg&usqp=CAU';
    default:
      return Cersei;
  }
};
