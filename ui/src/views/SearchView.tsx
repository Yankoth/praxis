import CenterLayout from '../components/layouts/CenterLayout';
import Form from '../components/forms/Form';
import Title from '../components/typographies/Title';
import SearchField from '../components/fields/SearchField';
import SearchButton from '../components/buttons/SearchButton';
import { Orbit } from 'lucide-react';
import { useNavigate, createSearchParams } from 'react-router-dom';

function SearchView() {
  const navigate = useNavigate();

  const handleSubmit = ({ searchValue }: { searchValue: string }) =>
    navigate({
      pathname: '/results',
      search: createSearchParams({ searchValue }).toString(),
    });

  return (
    <CenterLayout>
      <Orbit className="text-blue-500 animate-spin mb-6" size={75} />
      <Title text="Do a search using Bing service" />
      <Form handleSubmit={handleSubmit}>
        <SearchField name="searchValue" autoFocus required maxLength={250} />
        <div className="flex justify-center mt-3">
          <div className="md:w-1/4">
            <SearchButton text="Let's search" />
          </div>
        </div>
      </Form>
    </CenterLayout>
  );
}

export default SearchView;
