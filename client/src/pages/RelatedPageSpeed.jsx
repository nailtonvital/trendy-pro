import React, { useState, useRef } from "react";
import Message from "../components/Message";
import api from "../services/api";
import { useLocation } from "react-router-dom";

export default function PageSpeed() {
 const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (keyword) => {
    api
      .get(`/pageSpeed?url=${keyword}`)
      .then((response) => {
        setResults(response.data);
        setError(false);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
      });
  };

  const handleChange = () => {
    setValue(inputRef.current.value);
  };

  const handleClick = () => {
    handleSearch(value);
    setIsLoading(true);
  };

  return (
    <div className="text-white mt-5 bg-[#262631] h-screen">
      <h3 className="font-bold text-4xl">PageSpeed Insights</h3>
      <p className="font-bold text-xl text-[#CBCBCB]">SEO Tools</p>

      <div className="flex-wrap lg:flex gap-5 mt-7">
        <div className="w-full">
          <div className="input-group flex gap-1 items-stretch w-full mb-4">
            <input
              ref={inputRef}
              onChange={handleChange}
              type="search"
              className="form-control rounded-full flex-auto min-w-0 block w-full px-5 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Type a keyword"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              onClick={handleClick}
              className="btn px-5 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center"
              type="button"
              id="button-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>

            </button>
          </div>
        </div>
      </div>

      {isLoading ? (
        <Message robot="friend" message="Preparing the best for you!" />
      ) : error ? (
        <Message
          robot="sad"
          message="For some reason we canPageSpeed't find any result."
        />
      ) : results.length > 0 ? (
        <div class="flex flex-col ">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden rounded-lg">
                <h3 className="capitalize text-lg font-semibold flex my-2">
                  {results.length} results found
                </h3>
                <table class="min-w-full overflow-auto">
                  <thead class="bg-[#1B1A20] border-b">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-slate-200 pl-6 py-4 text-left"
                      >
                        Keyword
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-slate-200 pl-6 py-4 text-left"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((item, index) => {
                      return (
                        <tr
                          key={index}
                          class="bg-[#1B1A20] border-b transition duration-300 ease-in-out hover:bg-[#26252B] "
                        >
                          <td class="pl-6 py-4 whitespace-nowrap text-sm font-bold text-slate-100">
                            {item}
                          </td>
                          <td class="pl-6 py-4 whitespace-nowrap text-sm font-medium flex text-slate-50">
                            {/* twitter */}
                            <a
                              class="twitter-share-button"
                              href={`https://twitter.com/intent/tweet?text=${item}`}
                              target="_blank"
                            >
                              <svg
                                className="fill-slate-600 hover:fill-[#6B36FF]"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                              </svg>
                            </a>
                            {/* google */}
                            <a
                              href={`https://www.google.com/search?&q=${item}`}
                              target="_blank"
                            >
                              <svg
                                className="fill-slate-600 hover:fill-[#6B36FF]"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                              </svg>
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Message robot="normal" message="Insert a keyword and explore." />
      )}
    </div>
  );
}
