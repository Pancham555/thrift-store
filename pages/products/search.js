import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Card from "@components/components/card";
import Spinner from "@components/components/spinner";

const Search = () => {
  const search = useSelector((state) => state.search);
  const [queryResults, setQueryResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const baseurl = process.env.STRAPI_URL;
      const url = baseurl + `/api/search?q=${search}`;
      const data = await axios.get(url);
      setQueryResults(data.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, [search]);
  useEffect(() => {
    getData();
  }, [getData, search]);
  return (
    <div className="bg-gray-800">
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        {loading && <Spinner />}
        <div className="w-full my-4 gap-6 lg:gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-30">
          {!loading &&
            queryResults.map((data, index) => {
              return (
                <div key={index} className="w-full flex justify-center">
                  <Card id={data.id} attributes={data} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Search;
