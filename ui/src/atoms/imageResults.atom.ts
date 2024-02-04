import { atom } from 'recoil';
import { ImageModel } from '../services/models/image.model';

const imageResultsAtom = atom<ImageModel | null>({
  key: 'image-results',
  default: null,
});

export default imageResultsAtom;
