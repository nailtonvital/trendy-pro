import fetch from 'node-fetch';

// TRENDING ANIME QUERY
export async function getTrendingAnimes() {

  var query = `
  query  {
    Page (page: 1, perPage: 20) {
      media(sort:TRENDING_DESC){
        id
      title {
        romaji
        english
      }
      coverImage {
        extraLarge
      },
      bannerImage,
      }
    }
  }
  `;

  // Define the config we'll need for our Api request
  var url = 'https://graphql.anilist.co',
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: query,

      })
    };

  // Make the HTTP Api request
  return fetch(url, options).then(handleResponse)

  function handleResponse(response) {
    return response.json().then(function (json) {
      return response.ok ? json : Promise.reject(json);
    });
  }
}

export async function getAnimes(id) {

  var query = `
  query  { # Define which variables will be used in the query (id)
  Media (id: ${id}, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
    id
    title {
      romaji
      native
    }, 
    countryOfOrigin,
    genres,
    coverImage {
      extraLarge
      color
    },
    startDate {
      year
      month
      day
    },
    averageScore,
    episodes,
    bannerImage,
    description,
    tags {
      name
    },
  }
}
  `;

  // Define the config we'll need for our Api request
  var url = 'https://graphql.anilist.co',
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: query,

      })
    };

  // Make the HTTP Api request
  return fetch(url, options).then(handleResponse)

  function handleResponse(response) {
    return response.json().then(function (json) {
      return response.ok ? json : Promise.reject(json);
    });
  }
}

