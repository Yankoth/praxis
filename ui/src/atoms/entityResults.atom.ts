import { atom } from 'recoil';
import { EntityModel } from '../services/models/entity.model';

const entityResultsAtom = atom<EntityModel | null>({
  key: 'entity-results',
  default: null,
});

export default entityResultsAtom;
