import React, { useState, useRef } from "react";
import Message from "../components/Message";
import api from "../services/api";
import { useLocation } from "react-router-dom";

export default function RelatedInterest() {
  const location = useLocation();

  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const [chartData, setChartData] = useState("");


  const handleSearch = (keyword) => {
    api
      .get(`/interestOverTime?keyword=${keyword}`)
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

  const chart = () => {
    let time = [];
    let valueData = [];
    api
      .get(`/interestOverTime?keyword=${location.state.title}`)
      .then((response) => {
        let interestData = response.data;

        interestData.map((item) => {
          time.push(item.time);
          valueData.push(item.value[0]);
        });
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

    setChartData({
      labels: time,
      datasets: [
        {
          label: location.state.title,
          lineTension: 0.2,
          data: valueData,
          fill: true,
          backgroundColor: "rgba(103,53,294,0.2)",
          borderColor: "white",
        },
      ],
    });
  };

  var options = {
    scales: {
      xAxis: {
        ticks: {
          maxTicksLimit: 8.1,
        },
      },
    },
  };

  return (
    <div className="text-white mt-5">
      <h3 className="font-bold text-4xl">Interests Overtime</h3>
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
          message="For some reason we can't find any result."
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
                    <h5 className="text-xl font-bold mb-2 mt-5">
                      Interest Over Time
                    </h5>
                    <div className="">
                      {chartData.length !== 0 ? (
                        <Line id="canvas" data={chartData} options={options} />
                      ) : (
                        <div className="">
                          <MoonLoader />
                        </div>
                      )}
                      {/* <Line data={chartData} options={options} /> */}
                    </div>
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
  )
}
