import React, { useState, useRef } from "react";
import Message from "../components/Message";
import api from "../services/api";

export default function Interests() {
  const countryData = [
    { code: "af_ZA", country: "Afrikaans 🇿🇦 " },
    { code: "gn_PY", country: "Guaraní" },
    { code: "ay_BO", country: "Aymara" },
    { code: "az_AZ", country: "Azeri" },
    { code: "id_ID", country: "Indonesian 🇮🇩 " },
    { code: "ms_MY", country: "Malay 🇲🇾 " },
    { code: "jv_ID", country: "Javanese 🇮🇩 " },
    { code: "bs_BA", country: "Bosnian 🇧🇦 " },
    { code: "ca_ES", country: "Catalan" },
    { code: "cs_CZ", country: "Czech" },
    { code: "ck_US", country: "Cherokee" },
    { code: "cy_GB", country: "Welsh" },
    { code: "da_DK", country: "Danish 🇩🇰" },
    { code: "se_NO", country: "Northern Sámi" },
    { code: "de_DE", country: "German 🇩🇪" },
    { code: "et_EE", country: "Estonian 🇪🇪" },
    { code: "en_IN", country: "🇮🇳 English (India)" },
    { code: "en_GB", country: "English (UK) 🇬🇧" },
    { code: "en_UD", country: "English (Upside Down) 🇺🇸 " },
    { code: "en_US", country: "English (US) 🇺🇸" },
    { code: "es_LA", country: "Spanish 🇱🇦" },
    { code: "es_CL", country: "Spanish (Chile) 🇨🇱" },
    { code: "es_CO", country: "Spanish (Colombia) 🇨🇴" },
    { code: "es_ES", country: "Spanish (Spain) 🇪🇸" },
    { code: "es_MX", country: "Spanish (Mexico) 🇲🇽" },
    { code: "es_VE", country: "Spanish (Venezuela) 🇻🇪" },
    { code: "eo_EO", country: "Esperanto 🇪🇪" },
    { code: "tl_PH", country: "Filipino 🇵🇭" },
    { code: "fr_FR", country: "French (France) 🇫🇷" },
    { code: "fr_CA", country: "French (Canada) 🇨🇦" },
    { code: "ga_IE", country: "Irish 🇮🇪" },
    { code: "gl_ES", country: "Galician" },
    { code: "ko_KR", country: "Korean 🇰🇷 " },
    { code: "hr_HR", country: "Croatian" },
    { code: "xh_ZA", country: "Xhosa" },
    { code: "zu_ZA", country: "Zulu" },
    { code: "is_IS", country: "Icelandic" },
    { code: "it_IT", country: "Italian 🇮🇹" },
    { code: "ka_GE", country: "Georgian" },
    { code: "sw_KE", country: "Swahili" },
    { code: "tl_ST", country: "Klingon" },
    { code: "ku_TR", country: "Kurdish" },
    { code: "lv_LV", country: "Latvian" },
    { code: "fb_LT", country: "Leet Speak" },
    { code: "lt_LT", country: "Lithuanian" },
    { code: "li_NL", country: "Limburgish" },
    { code: "la_VA", country: "Latin" },
    { code: "hu_HU", country: "Hungarian" },
    { code: "mg_MG", country: "Malagasy" },
    { code: "mt_MT", country: "Maltese" },
    { code: "nl_NL", country: "Dutch" },
    { code: "nl_BE", country: "Dutch (België)" },
    { code: "ja_JP", country: "Japanese 🇯🇵" },
    { code: "nb_NO", country: "Norwegian (bokmal)" },
    { code: "nn_NO", country: "Norwegian (nynorsk)" },
    { code: "uz_UZ", country: "Uzbek" },
    { code: "pl_PL", country: "Polish" },
    { code: "pt_BR", country: "Portuguese (Brazil) 🇧🇷" },
    { code: "pt_PT", country: "Portuguese (Portugal) 🇵🇹" },
    { code: "qu_PE", country: "Quechua" },
    { code: "ro_RO", country: "Romanian" },
    { code: "rm_CH", country: "Romansh" },
    { code: "ru_RU", country: "Russian" },
    { code: "sq_AL", country: "Albanian" },
    { code: "sk_SK", country: "Slovak" },
    { code: "sl_SI", country: "Slovenian" },
    { code: "so_SO", country: "Somali" },
    { code: "fi_FI", country: "Finnish" },
    { code: "sv_SE", country: "Swedish" },
    { code: "th_TH", country: "Thai 🇹🇭" },
    { code: "vi_VN", country: "Vietnamese" },
    { code: "tr_TR", country: "Turkish" },
    { code: "zh_CN", country: "Simplified Chinese (China) 🇨🇳" },
    { code: "zh_TW", country: "Traditional Chinese (Taiwan) 🇹🇼 " },
    { code: "zh_HK", country: "Traditional Chinese (Hong Kong) 🇭🇰 " },
    { code: "el_GR", country: "Greek 🇬🇷 " },
    { code: "gx_GR", country: "Classical Greek 🇬🇷 " },
    { code: "be_BY", country: "Belarusian" },
    { code: "bg_BG", country: "Bulgarian" },
    { code: "kk_KZ", country: "Kazakh" },
    { code: "mk_MK", country: "Macedonian" },
    { code: "mn_MN", country: "Mongolian 🇲🇳 " },
    { code: "sr_RS", country: "Serbian 🇷🇸 " },
    { code: "tt_RU", country: "Tatar" },
    { code: "tg_TJ", country: "Tajik" },
    { code: "uk_UA", country: "Ukrainian 🇺🇦 " },
    { code: "hy_AM", country: "Armenian 🇦🇲 " },
    { code: "yi_DE", country: "Yiddish" },
    { code: "he_IL", country: "Hebrew" },
    { code: "ur_PK", country: "Urdu" },
    { code: "ar_AR", country: "Arabic" },
    { code: "ps_AF", country: "Pashto" },
    { code: "fa_IR", country: "Persian" },
    { code: "sy_SY", country: "Syriac" },
    { code: "ne_NP", country: "Nepali" },
    { code: "mr_IN", country: "Marathi" },
    { code: "sa_IN", country: "Sanskrit" },
    { code: "hi_IN", country: "Hindi 🇮🇳" },
    { code: "bn_IN", country: "Bengali" },
    { code: "pa_IN", country: "Punjabi" },
    { code: "gu_IN", country: "Gujarati" },
    { code: "ta_IN", country: "Tamil" },
    { code: "te_IN", country: "Telugu" },
    { code: "kn_IN", country: "Kannada" },
    { code: "ml_IN", country: "Malayalam" },
    { code: "km_KH", country: "Khmer" },
  ];
  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const [country, setCountry] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (keyword, country) => {
    api
      .get(`/interests?query=${keyword}&country=${country}`)
      .then((response) => {
        setResults(response.data);
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
      });
  };

  const handleChange = (e) => {
    setValue(inputRef.current.value);
    setCountry(e.target.value);
  };

  const handleClick = () => {
    handleSearch(value, country);
    setIsLoading(true);
  };

  const formatNumber = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  };

  return (
    <div className="text-white mt-5 bg-[#262631] h-screen">
      <h3 className="font-bold text-4xl">Meta Ads Interests</h3>
      <p className="font-bold text-xl text-[#CBCBCB] capitalize">
        facebook ads hidden interests
      </p>

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
            <select
              className="form-control rounded-full flex-auto min-w-0 block w-full px-5 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              name="countries"
              id="countries"
              onChange={handleChange}
            >
              {countryData.map((item) => {
                return <option value={item.code}>{item.country}</option>;
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
                        Audience Size
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium  text-slate-100 py-4 text-left"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium  text-slate-100 py-4 text-left"
                      >
                        Topic
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium  text-slate-100 py-4 text-left"
                      >
                        Path
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {console.log(results)}
                    {results.map((item, index) => {
                      return (
                        <tr
                          key={index}
                          class="bg-[#1B1A20] border-b transition duration-300 ease-in-out hover:bg-[#26252B] "
                        >
                          <td class="pl-6 py-4 whitespace-nowrap text-sm font-medium text-slate-100 ">
                            {formatNumber(item.audience_size_upper_bound)}
                          </td>
                          <td class="text-sm flex-col text-white font-bold py-4">
                            {item.name}
                          </td>
                          <td class="text-sm flex-col text-white font-bold pr-12 py-4 whitespace-nowrap">
                            {item.topic}
                          </td>
                          <td class="text-sm flex-col text-white  font-medium pr-6 py-4 whitespace-nowrapp">
                            {item.path
                              .join()
                              .replace(",", ">")
                              .replace(",", ">")
                              .replace(",", ">")}
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
