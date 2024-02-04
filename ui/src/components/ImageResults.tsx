import React from 'react';
import { useRecoilValue } from 'recoil';
import imageResultsAtom from '../atoms/imageResults.atom.ts';
import LinkButton from './buttons/LinkButton';
import SubTitle from './typographies/SubTitle';

interface ImageResultsProps {}

const ImageResults: React.FC<ImageResultsProps> = () => {
  const image = useRecoilValue(imageResultsAtom);

  return image?.results?.length ? (
    <>
      <div className="grid grid-cols-3 gap-3 break-words">
        {image?.results.map((result, index) => (
          <div className="mb-2" key={`image-${index}`}>
            <a
              className="text-sm hover:underline"
              href={result?.hostPageUrl}
              target="_blank"
            >
              <img className="mb-1" src={result?.thumbnailUrl} />
            </a>
            <p className="text-sm font-light">
              {result?.datePublished && (
                <span>{result?.datePublished.split('T')[0]}:</span>
              )}{' '}
              {result?.name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <LinkButton text="More results" url={image?.webSearchUrl ?? ''} />
      </div>
    </>
  ) : (
    <div className="flex justify-center">
      <SubTitle text="No results found." />
    </div>
  );
};

export default ImageResults;
