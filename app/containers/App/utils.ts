import { EXPIRED_KEY } from './constants';

export const isLogin = () => {
  const currentTime = new Date().getTime();
  const expiredTime = Number(localStorage.getItem(EXPIRED_KEY));
  return currentTime < expiredTime;
};
