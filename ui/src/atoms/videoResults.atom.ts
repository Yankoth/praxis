import { atom } from 'recoil';
import { VideoModel } from '../services/models/video.model';

const videoResultsAtom = atom<VideoModel | null>({
  key: 'video-results',
  default: null,
});

export default videoResultsAtom;
