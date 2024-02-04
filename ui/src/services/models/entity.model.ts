export type EntityModel = {
  results?: EntityResult[];
  webSearchUrl?: string;
};

export type EntityResult = {
  image?: EntityImage;
  name?: string;
  description?: string;
  webSearchUrl?: string;
};

export type EntityImage = {
  thumbnailUrl?: string;
};
