import pageScrapper from 'page-scrapper'

export const backlink= async (url)=>{
    if (url) {
        const response = await pageScrapper(url);
        return response
    } else{
        return
    }
}
