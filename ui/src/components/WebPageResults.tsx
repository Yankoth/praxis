import React from 'react';
import { useRecoilValue } from 'recoil';
import webPageResultsAtom from '../atoms/webPageResults.atom.ts';
import LinkButton from './buttons/LinkButton';
import SubTitle from './typographies/SubTitle';

interface WebPageResultsProps {}

const WebPageResults: React.FC<WebPageResultsProps> = () => {
  const webPage = useRecoilValue(webPageResultsAtom);

  return webPage?.results?.length ? (
    <>
      {webPage?.results.map((result, index) => (
        <div className="flex mb-5 break-words" key={`web-page-${index}`}>
          {result?.thumbnailUrl && (
            <div className="m-2">
              <img src={result?.thumbnailUrl} />
            </div>
          )}
          <div className="w-full p-1">
            <a
              className="text-blue-600 hover:underline"
              href={result?.url}
              target="_blank"
            >
              <p>{result?.name}</p>
            </a>
            <a
              className="text-sm hover:underline"
              href={result?.url}
              target="_blank"
            >
              <p>{result?.displayUrl}</p>
            </a>
            <p className="font-light">
              {result?.datePublished && (
                <span>{result?.datePublished.split('T')[0]}:</span>
              )}{' '}
              {result?.snippet}
            </p>
          </div>
        </div>
      ))}
      <div className="flex justify-center">
        <LinkButton text="More results" url={webPage?.webSearchUrl ?? ''} />
      </div>
    </>
  ) : (
    <div className="flex justify-center">
      <SubTitle text="No results found." />
    </div>
  );
};

export default WebPageResults;
