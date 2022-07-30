import { FacebookAdsApi } from 'facebook-nodejs-business-sdk';

const access_token = 'EAAGa9VLMH9oBACV0CVclSl6Nqsj5qtlHZAEG3DGvCF98U0oPDAxRUFAoaRA1ZA9L6mQ0tBp4BlbTMtspOQ79t8tjYNQWZBnL2aU3BdJ163DYMVF1NXvZBKI9zZBoBZBX8Od3Bjt4ZBhBjagLLKEbsklV9PssXF6OEjwB9vdAla43gf5Bq2McObbCkISpLhUtwP42vp0GO4WAwZDZD';

const api = FacebookAdsApi.init(access_token);
const showDebugingInfo = true; // Setting this to true shows more debugging info.
if (showDebugingInfo) {
    api.setDebug(true);
}

const params = {
    'type': 'adinterest',
    'q': 'Golf',
    'limit': '10000',
    'locale': 'pt_BR',
};

api.call('GET', ['search'], params).then((response) => {
    console.log(response.data)
}).catch(error => {
    console.log("something bad happened somewhere", error);
});