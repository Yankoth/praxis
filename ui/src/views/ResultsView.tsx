import { useMemo, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import useSearchHook from '../hooks/useSearchHook';
import PageLayout from '../components/layouts/PageLayout';
import LoadingSpinner from '../components/spinners/LoadingSpinner';
import Form from '../components/forms/Form';
import SearchField from '../components/fields/SearchField';
import SearchButton from '../components/buttons/SearchButton';
import Results from '../components/Results';

function ResultsView() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = useMemo(() => {
    return searchParams.get('searchValue') ?? '';
  }, [searchParams]);

  useEffect(() => {
    if (!searchValue) {
      navigate('/', { replace: true });
    }
  }, [searchValue, navigate]);

  const handleSubmit = (values: { searchValue: string }) => {
    setSearchParams({ searchValue: values?.searchValue });
  };

  const { isFetching } = useSearchHook(searchValue);

  return (
    <PageLayout>
      <Form handleSubmit={handleSubmit}>
        <div className="flex items-center gap-2">
          <div className="grow">
            <SearchField
              name="searchValue"
              required
              maxLength={250}
              value={searchValue ?? ''}
            />
          </div>
          <div className="grow-none">
            <SearchButton text="Search" disabled={isFetching} />
          </div>
        </div>
      </Form>
      {isFetching ? (
        <div className="flex justify-center mt-5">
          <LoadingSpinner />
        </div>
      ) : (
        <Results />
      )}
    </PageLayout>
  );
}

export default ResultsView;
