export type ImageModel = {
  results?: ImageResult[];
  webSearchUrl?: string;
};

export type ImageResult = {
  hostPageUrl?: string;
  thumbnailUrl?: string;
  datePublished?: string;
  name?: string;
};
