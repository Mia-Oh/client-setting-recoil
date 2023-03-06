import { atom } from 'recoil';

export const textState = atom({
  key: 'textState', // unique ID(다른 atom/selectors와 구별하기 위함)
  default: '', //default value
});
