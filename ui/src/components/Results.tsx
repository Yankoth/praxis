import React, { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import activeResultsAtom from '../atoms/activeResults.atom.ts';
import SimpleNav from './navs/SimpleNav';
import EntityResults from './EntityResults';
import ImageResults from './ImageResults';
import VideoResults from './VideoResults';
import WebPageResults from './WebPageResults';

interface ResultsProps {}

const Results: React.FC<ResultsProps> = () => {
  const [activeResults, setActiveResults] = useRecoilState(activeResultsAtom);
  const titles = ['Pages', 'Images', 'Videos'];

  const results = useMemo(() => {
    const map = new Map();
    map.set(
      'Pages',
      <>
        <EntityResults />
        <WebPageResults />
      </>,
    );
    map.set('Images', <ImageResults />);
    map.set('Videos', <VideoResults />);

    return map;
  }, []);

  return (
    <>
      <SimpleNav
        titles={titles}
        activeNav={activeResults}
        setActiveNav={(title: string) => setActiveResults(title)}
      />
      {results.get(activeResults)}
    </>
  );
};

export default Results;
