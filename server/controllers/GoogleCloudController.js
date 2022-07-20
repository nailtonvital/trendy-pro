
import * as nodeFetch from 'node-fetch';

export async function pageSpeed(pageUrl){
    
    const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${pageUrl}&key=AIzaSyABHsyBbOegc5NPnd8g1D5wwqkjkVHc8t8`
    const res = await nodeFetch.fetch('https://dog.ceo/api/breeds/list/all');
    const json = await res.json();
    console.log(json);
}
