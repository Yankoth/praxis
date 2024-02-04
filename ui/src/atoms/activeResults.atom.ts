import { atom } from 'recoil';

const activeResultsAtom = atom<string>({
  key: 'active-results',
  default: 'Pages',
});

export default activeResultsAtom;
