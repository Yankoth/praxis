import React from 'react';
import { useRecoilValue } from 'recoil';
import entityResultsAtom from '../atoms/entityResults.atom.ts';
import LinkButton from './buttons/LinkButton';

interface EntityResultsProps {}

const EntityResults: React.FC<EntityResultsProps> = () => {
  const entity = useRecoilValue(entityResultsAtom);

  return entity?.results?.map((result, index) => (
    <div
      className="border shadow-lg rounded-lg mb-5 pr-1"
      key={`entity-${index}`}
    >
      <div className="flex">
        {result?.image?.thumbnailUrl && (
          <div className="m-2">
            <img src={result?.image?.thumbnailUrl} />
          </div>
        )}
        <div className="w-full p-1">
          <h1 className="text-lg font-bold text-gray-800">{result?.name}</h1>
          <p className="font-light">{result?.description}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <LinkButton text="More info" url={entity?.webSearchUrl ?? ''} />
      </div>
    </div>
  ));
};

export default EntityResults;
