import { FacebookAdsApi } from 'facebook-nodejs-business-sdk';
import * as dotenv from 'dotenv'
dotenv.config()

const access_token = process.env.FACEBOOKACESSTOKEN;


const getFacebookInterests = (query)=>{
    const api = FacebookAdsApi.init(access_token);
    const showDebugingInfo = true; // Setting this to true shows more debugging info.
    if (showDebugingInfo) {
        api.setDebug(true);
    }

    const params = {
        'type': 'adinterest',
        'q': `${query}`,
        'limit': '10000',
        'locale': 'pt_BR',
    };

    return api.call('GET', ['search'], params).then((response) => {
        return(response.data)
    }).catch(error => {
        return error;
    });
}

export default getFacebookInterests