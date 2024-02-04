export type WebPageModel = {
  results?: WebPageResult[];
  webSearchUrl?: string;
};

export type WebPageResult = {
  thumbnailUrl?: string;
  url?: string;
  name?: string;
  displayUrl?: string;
  datePublished?: string;
  snippet?: string;
};
