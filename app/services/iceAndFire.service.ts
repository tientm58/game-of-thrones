import { ENDPOINTS } from '../constants/endpoints.contants';
import axiosClient from './axiosClient.service';

export function getHouseData() {
  return axiosClient.get(ENDPOINTS.HOUSES);
}
