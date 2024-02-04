import { EntityModel } from './entity.model';
import { ImageModel } from './image.model';
import { VideoModel } from './video.model';
import { WebPageModel } from './webPage.model';

export type ResultModel = {
  entity: EntityModel;
  image: ImageModel;
  video: VideoModel;
  webPage: WebPageModel;
};
