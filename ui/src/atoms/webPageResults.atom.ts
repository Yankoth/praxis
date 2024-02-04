import { atom } from 'recoil';
import { WebPageModel } from '../services/models/webPage.model';

const webPageResultsAtom = atom<WebPageModel | null>({
  key: 'web-page-results',
  default: null,
});

export default webPageResultsAtom;
