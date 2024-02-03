import React from "react";
import SearchLayout from "../components/layouts/SearchLayout";
import Form from "../components/forms/Form";
import Title from "../components/typographies/Title";
import SearchField from "../components/fields/SearchField";
import SearchButton from "../components/buttons/SearchButton";
import { Orbit } from "lucide-react";
import { useNavigate, createSearchParams } from "react-router-dom";

function SearchView() {
  const navigate = useNavigate();

  const handleSubmit = ({ searchValue }) =>
    navigate({
      pathname: "/results",
      search: createSearchParams({ searchValue }).toString(),
    });

  return (
    <SearchLayout>
      <Orbit className="text-blue-500 animate-spin mb-6" size={75} />
      <Title text="Search using Bing Service" />
      <Form handleSubmit={handleSubmit}>
        <SearchField name="searchValue" autoFocus required maxLength={250} />
        <div className="flex justify-center mt-3">
          <SearchButton type="submit" />
        </div>
      </Form>
    </SearchLayout>
  );
}

export default SearchView;
