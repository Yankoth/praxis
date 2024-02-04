import { EntityResult } from './entity.model';
import { ImageResult } from './image.model';
import { VideoResult } from './video.model';
import { WebPageResult } from './webPage.model';

export type SearchModel = {
  entities: EntitySearchResult;
  images: ImageSearchResult;
  videos: VideoSearchResult;
  webPages: WebPageSearchResult;
};

export type EntitySearchResult = {
  value: EntityResult[];
};

export type ImageSearchResult = {
  value: ImageResult[];
  webSearchUrl: string;
};

export type VideoSearchResult = {
  value: VideoResult[];
  webSearchUrl: string;
};

export type WebPageSearchResult = {
  value: WebPageResult[];
  webSearchUrl: string;
};
