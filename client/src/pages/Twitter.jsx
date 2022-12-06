import React, { useState } from "react";
import Message from "../components/Message";
import api from "../services/api";

export default function Twitter() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [country, setCountry] = useState("");
  const [results, setResults] = useState([]);

  const countryData = [
    "Select a country",
    "worldwide",
    "abu-dhabi",
    "acapulco",
    "accra",
    "adana",
    "adelaide",
    "aguascalientes",
    "ahmedabad",
    "ahsa",
    "albuquerque",
    "alexandria",
    "algeria",
    "algiers",
    "amman",
    "amritsar",
    "amsterdam",
    "ankara",
    "ansan",
    "antalya",
    "antipolo",
    "argentina",
    "athens",
    "atlanta",
    "auckland",
    "austin",
    "australia",
    "austria",
    "bahrain",
    "baltimore",
    "bandung",
    "bangalore",
    "bangkok",
    "barcelona",
    "barcelona_es",
    "barquisimeto",
    "barranquilla",
    "baton-rouge",
    "bekasi",
    "belarus",
    "belem",
    "belfast",
    "belgium",
    "belo-horizonte",
    "benin-city",
    "bergen",
    "berlin",
    "bhopal",
    "bilbao",
    "birmingham",
    "birmingham_us",
    "blackpool",
    "bogota",
    "bologna",
    "bordeaux",
    "boston",
    "bournemouth",
    "brasilia",
    "brazil",
    "bremen",
    "brest",
    "brighton",
    "brisbane",
    "bristol",
    "bucheon",
    "buenos-aires",
    "bursa",
    "busan",
    "cagayan-de-oro",
    "cairo",
    "calgary",
    "cali",
    "calocan",
    "campinas",
    "can-tho",
    "canada",
    "canberra",
    "cape-town",
    "caracas",
    "cardiff",
    "cebu-city",
    "changwon",
    "charlotte",
    "chelyabinsk",
    "chennai",
    "chiba",
    "chicago",
    "chihuahua",
    "chile",
    "cincinnati",
    "ciudad-guayana",
    "ciudad-juarez",
    "cleveland",
    "cologne",
    "colombia",
    "colorado-springs",
    "columbus",
    "concepcion",
    "cordoba",
    "cork",
    "coventry",
    "culiacan",
    "curitiba",
    "da-nang",
    "daegu",
    "daejeon",
    "dallas-ft.-worth",
    "dammam",
    "darwin",
    "davao-city",
    "delhi",
    "den-haag",
    "denmark",
    "denver",
    "depok",
    "derby",
    "detroit",
    "diyarbakir",
    "dnipropetrovsk",
    "dominican-republic",
    "donetsk",
    "dortmund",
    "dresden",
    "dubai",
    "dublin",
    "durban",
    "dusseldorf",
    "ecatepec-de-morelos",
    "ecuador",
    "edinburgh",
    "edmonton",
    "egypt",
    "el-paso",
    "eskisehir",
    "essen",
    "faisalabad",
    "fortaleza",
    "france",
    "frankfurt",
    "fresno",
    "fukuoka",
    "galway",
    "gaziantep",
    "gdansk",
    "geneva",
    "genoa",
    "germany",
    "ghana",
    "giza",
    "glasgow",
    "goiania",
    "gomel",
    "gothenburg",
    "goyang",
    "greece",
    "greensboro",
    "grodno",
    "guadalajara",
    "guarulhos",
    "guatemala",
    "guatemala-city",
    "guayaquil",
    "gwangju",
    "hai-phong",
    "haifa",
    "hamamatsu",
    "hamburg",
    "hanoi",
    "harrisburg",
    "hermosillo",
    "hiroshima",
    "ho-chi-minh-city",
    "honolulu",
    "houston",
    "hull",
    "hulu-langat",
    "hyderabad",
    "ibadan",
    "incheon",
    "india",
    "indianapolis",
    "indonesia",
    "indore",
    "ipoh",
    "ireland",
    "irkutsk",
    "israel",
    "istanbul",
    "italy",
    "izmir",
    "jackson",
    "jacksonville",
    "jaipur",
    "jakarta",
    "japan",
    "jeddah",
    "jerusalem",
    "johannesburg",
    "johor-bahru",
    "jordan",
    "kaduna",
    "kajang",
    "kano",
    "kanpur",
    "kansas-city",
    "karachi",
    "kawasaki",
    "kayseri",
    "kazan",
    "kenya",
    "khabarovsk",
    "kharkiv",
    "kitakyushu",
    "klang",
    "kobe",
    "kolkata",
    "konya",
    "korea",
    "krakow",
    "krasnodar",
    "krasnoyarsk",
    "kuala-lumpur",
    "kumamoto",
    "kumasi",
    "kuwait",
    "kyiv",
    "kyoto",
    "lagos",
    "lahore",
    "las-palmas",
    "las-vegas",
    "latvia",
    "lausanne",
    "lebanon",
    "leeds",
    "leicester",
    "leipzig",
    "leon",
    "lille",
    "lima",
    "liverpool",
    "lodz",
    "london",
    "long-beach",
    "los-angeles",
    "louisville",
    "lucknow",
    "lviv",
    "lyon",
    "madrid",
    "makassar",
    "makati",
    "malaga",
    "malaysia",
    "manaus",
    "manchester",
    "manila",
    "maracaibo",
    "maracay",
    "marseille",
    "maturin",
    "mecca",
    "medan",
    "medellin",
    "medina",
    "melbourne",
    "memphis",
    "mendoza",
    "merida",
    "mersin",
    "mesa",
    "mexicali",
    "mexico",
    "mexico-city",
    "miami",
    "middlesbrough",
    "milan",
    "milwaukee",
    "minneapolis",
    "minsk",
    "mombasa",
    "monterrey",
    "montpellier",
    "montreal",
    "morelia",
    "moscow",
    "multan",
    "mumbai",
    "munich",
    "murcia",
    "muscat",
    "nagoya",
    "nagpur",
    "nairobi",
    "nantes",
    "naples",
    "nashville",
    "naucalpan-de-juarez",
    "netherlands",
    "new-haven",
    "new-orleans",
    "new-york",
    "new-zealand",
    "newcastle",
    "nezahualcoyotl",
    "nigeria",
    "niigata",
    "nizhny-novgorod",
    "norfolk",
    "norway",
    "nottingham",
    "novosibirsk",
    "odesa",
    "okayama",
    "okinawa",
    "oklahoma-city",
    "omaha",
    "oman",
    "omsk",
    "orlando",
    "osaka",
    "oslo",
    "ottawa",
    "pakistan",
    "palembang",
    "palermo",
    "palma",
    "panama",
    "paris",
    "pasig",
    "patna",
    "pekanbaru",
    "perm",
    "perth",
    "peru",
    "petaling",
    "philadelphia",
    "philippines",
    "phoenix",
    "pittsburgh",
    "plymouth",
    "poland",
    "port-elizabeth",
    "port-harcourt",
    "portland",
    "porto-alegre",
    "portsmouth",
    "portugal",
    "poznan",
    "preston",
    "pretoria",
    "providence",
    "puebla",
    "puerto-rico",
    "pune",
    "qatar",
    "quebec",
    "queretaro",
    "quezon-city",
    "quito",
    "rajkot",
    "raleigh",
    "ranchi",
    "rawalpindi",
    "recife",
    "rennes",
    "richmond",
    "riga",
    "rio-de-janeiro",
    "riyadh",
    "rome",
    "rosario",
    "rostov-on-don",
    "rotterdam",
    "russia",
    "sacramento",
    "sagamihara",
    "saint-petersburg",
    "saitama",
    "salt-lake-city",
    "saltillo",
    "salvador",
    "samara",
    "san-antonio",
    "san-diego",
    "san-francisco",
    "san-jose",
    "san-luis-potosi",
    "santiago",
    "santo-domingo",
    "sao-luis",
    "sao-paulo",
    "sapporo",
    "saudi-arabia",
    "seattle",
    "semarang",
    "sendai",
    "seongnam",
    "seoul",
    "seville",
    "sharjah",
    "sheffield",
    "singapore",
    "south-africa",
    "soweto",
    "spain",
    "srinagar",
    "st.-louis",
    "stockholm",
    "stoke-on-trent",
    "strasbourg",
    "stuttgart",
    "surabaya",
    "surat",
    "suwon",
    "swansea",
    "sweden",
    "switzerland",
    "sydney",
    "taguig",
    "takamatsu",
    "tallahassee",
    "tampa",
    "tangerang",
    "tel-aviv",
    "thailand",
    "thane",
    "thessaloniki",
    "tijuana",
    "tokyo",
    "toluca",
    "toronto",
    "toulouse",
    "tucson",
    "turin",
    "turkey",
    "turmero",
    "ufa",
    "ukraine",
    "ulsan",
    "united-arab-emirates",
    "united-kingdom",
    "united-states",
    "utrecht",
    "valencia",
    "valencia_es",
    "valparaiso",
    "vancouver",
    "venezuela",
    "vienna",
    "vietnam",
    "virginia-beach",
    "vladivostok",
    "volgograd",
    "voronezh",
    "warsaw",
    "washington",
    "winnipeg",
    "wroclaw",
    "yekaterinburg",
    "yokohama",
    "yongin",
    "zamboanga-city",
    "zapopan",
    "zaporozhye",
    "zaragoza",
    "zurich",
  ];

  const handleSearch = (country) => {
    api
      .get(`/twitter?country=${country}`)
      .then((response) => {
        setResults(response.data.tweet);
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
      });
  };

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  const handleClick = () => {
    handleSearch(country);
    setIsLoading(true);
  };

  return (
    <div className="text-white mt-5 bg-[#262631] h-screen">
      <h3 className="font-bold text-4xl">Twitter Trending Topics</h3>
      <p className="font-bold text-xl text-[#CBCBCB] capitalize">
        Social Media
      </p>

      <div className="flex-wrap lg:flex gap-5 mt-7">
        <div className="w-full">
          <div className="input-group flex gap-1 items-stretch w-full mb-4">
            <select
              className="form-control rounded-full flex-auto min-w-0 block w-full px-5 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              name="countries"
              id="countries"
              onChange={handleChange}
            >
              {countryData.map((item) => {
                return (
                  <option value={item}>
                    {item
                      .replace("-", " ")
                      .replace("-", " ")
                      .replace("-", " ")
                      .replace("-", " ")}
                  </option>
                );
              })}
            </select>
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
              <div class="overflow-hidden  rounded-lg ">
                <h3 className="capitalize text-lg font-semibold flex my-2">
                  <svg
                    className="fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 7h11v2H4zm0 4h11v2H4zm0 4h7v2H4zm15.299-2.708-4.3 4.291-1.292-1.291-1.414 1.415 2.706 2.704 5.712-5.703z"></path>
                  </svg>
                  {results.length} results found
                </h3>
                <table class="min-w-full overflow-auto">
                  <thead class="bg-[#1B1A20] border-b">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium  text-slate-100 pl-6 py-4 text-left"
                      >
                        Count
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium  text-slate-100 py-4 text-left"
                      >
                        Trend Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {console.log(results)}
                    {results.map((item, index) => {
                      return (
                        <tr
                          key={index}
                          class="bg-[#1B1A20] border-b transition duration-300 ease-in-out hover:bg-[#26252B]"
                        >
                          <td class="pl-6 py-4 whitespace-nowrap text-sm font-medium text-slate-100 ">
                            {item.count}
                          </td>
                          <td class="text-sm flex-col text-white font-bold py-4">
                            <a href={item.url} target="_blank">
                              {item.trend}
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
        <Message
          robot="normal"
          message="Select a country and explore top trending topics on Twitter"
        />
      )}
    </div>
  );
}
