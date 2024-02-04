import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { search } from '../services/bingApi.service';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import entityResultsAtom from '../atoms/entityResults.atom.ts';
import imageResultsAtom from '../atoms/imageResults.atom.ts';
import videoResultsAtom from '../atoms/videoResults.atom.ts';
import webPageResultsAtom from '../atoms/webPageResults.atom.ts';

const useSearchHook = (searchValue: string) => {
  const { data: searchData, isFetching } = useQuery({
    queryKey: ['search', searchValue],
    queryFn: async () => {
      const result = await search(searchValue ?? '');

      return {
        entity: {
          results: result?.entities?.value?.[0]
            ? [result?.entities?.value?.[0]]
            : [],
          webSearchUrl: result?.entities?.value?.[0]?.webSearchUrl,
        },
        image: {
          results: result?.images?.value ?? [],
          webSearchUrl: result?.images?.webSearchUrl,
        },
        video: {
          results: result?.videos?.value ?? [],
          webSearchUrl: result?.videos?.webSearchUrl,
        },
        webPage: {
          results: result?.webPages?.value ?? [],
          webSearchUrl: result?.webPages?.webSearchUrl,
        },
      };
    },
    enabled: !!searchValue,
    placeholderData: keepPreviousData,
  });

  const setEntityResults = useSetRecoilState(entityResultsAtom);
  const setImageResults = useSetRecoilState(imageResultsAtom);
  const setVideoResults = useSetRecoilState(videoResultsAtom);
  const setWebPageResults = useSetRecoilState(webPageResultsAtom);

  useEffect(() => {
    if (searchData) {
      setEntityResults(searchData.entity);
      setImageResults(searchData.image);
      setVideoResults(searchData.video);
      setWebPageResults(searchData.webPage);
    }
  }, [
    searchData,
    setEntityResults,
    setImageResults,
    setVideoResults,
    setWebPageResults,
  ]);

  return { searchData, isFetching };
};

export default useSearchHook;
