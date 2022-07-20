import * as nodeFetch from 'node-fetch';

// TRENDING ANIME QUERY

// var query = `
// query  {
//   Page (page: 1, perPage: 15) {
//     media(sort:TRENDING_DESC){
//       id
//     title {
//       romaji
//       english
//       native
//     }
//     }
//   }
// }

// `;


// // Define the config we'll need for our Api request
// var url = 'https://graphql.anilist.co',
//     options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         body: JSON.stringify({
//             query: query,
            
//         })
//     };

// // Make the HTTP Api request
// fetch(url, options).then(handleResponse)
//     .then(handleData)
//     .catch(handleError);

// function handleResponse(response) {
//     return response.json().then(function (json) {
//         return response.ok ? json : Promise.reject(json);
//     });
// }

// function handleData(data) {
//     console.log(data.data.Page.media);
// }

// function handleError(error) {
//     alert('Error, check console');
//     console.error(error);
// }


// ANIME QUERY

var query = `
query ($id: Int) { # Define which variables will be used in the query (id)
  Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
    id
    title {
      romaji
      english
    }
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
    duration,
    bannerImage,
    description
  }
}
`;

// Define our query variables and values that will be used in the query request
var variables = {
    id: 140960
};

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
            variables: variables
        })
    };

// Make the HTTP Api request
fetch(url, options).then(handleResponse)
    .then(handleData)
    .catch(handleError);

function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleData(data) {
    console.log(data.data.Media);
}

function handleError(error) {
    alert('Error, check console');
    console.error(error);
}