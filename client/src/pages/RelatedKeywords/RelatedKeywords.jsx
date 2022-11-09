import React from "react";

const getApi = () => {};

export default function RelatedKeywords() {
  return (
    <>
      <div className="bg-gray-900 text-white h-screen flex flex-col items-center">
        <h4 className="text-white font-bold text-2xl my-3">Movies</h4>
        <div className="flex gap-3 my-3">

        <input
          type="text"
          placeholder="insert a keyword"
          className="border-2 border-white w-full h-full capitalize"
        ></input>
    
        <select
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          
        </select>
        </div>
        <div className="flex flex-col bg-slate-900 border-3 rounded-tl-lg border-white w-8/12 h-full">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Audience
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Path
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Topic
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        1
                      </td>
                      <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                        Mark
                      </td>
                      <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                        Otto
                      </td>
                      <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                        @mdo
                      </td>
                    </tr>
                    <tr className=" border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        2
                      </td>
                      <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                        Jacob
                      </td>
                      <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                        Thornton
                      </td>
                      <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                        @fat
                      </td>
                    </tr>
                    <tr className=" border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        3
                      </td>
                      <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                        Larry
                      </td>
                      <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                        Wild
                      </td>
                      <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                        @twitter
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
