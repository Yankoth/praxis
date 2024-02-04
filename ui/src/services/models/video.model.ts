export type VideoModel = {
  results?: VideoResult[];
  webSearchUrl?: string;
};

export type VideoResult = {
  hostPageUrl?: string;
  thumbnailUrl?: string;
  datePublished?: string;
  name?: string;
};
