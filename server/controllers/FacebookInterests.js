import { FacebookAdsApi } from 'facebook-nodejs-business-sdk';
import dotenv from 'dotenv'
dotenv.config({ silent: true });
console.log('env : ', process.env);

const access_token = process.env.FACEBOOK_ACESS_TOKEN;

// const api = FacebookAdsApi.init(access_token);
// const showDebugingInfo = true; // Setting this to true shows more debugging info.
// if (showDebugingInfo) {
//     api.setDebug(true);
// }

// const params = {
//     'type': 'adinterest',
//     'q': 'Golf',
//     'limit': '10000',
//     'locale': 'pt_BR',
// };

// api.call('GET', ['search'], params).then((response) => {
//     console.log(response.data)
// }).catch(error => {
//     console.log("something bad happened somewhere", error);
// });