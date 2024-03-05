import { selector } from 'recoil';
import atoms from './atoms';

const testSelector = selector({
  key: 'testSelector',
  get: ({ get }) => (get(atoms.sidebarOpen) ? '1' : ''),
});

export default {
  testSelector,
};
