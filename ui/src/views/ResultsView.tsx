import React, { useMemo, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

function ResultsView() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const searchValue = useMemo(() => {
    const params = Object.fromEntries([...searchParams]);
    return params?.searchValue;
  }, [searchParams]);

  console.log(searchValue);

  useEffect(() => {
    // temporal, need to use the react-query
    if (!searchValue) {
      navigate("/", { replace: true });
    }
  }, [searchValue]);

  return (
    <div className="text-center mt-5">
      <h1 className="font-bold underline">{searchValue}</h1>
    </div>
  );
}

export default ResultsView;
