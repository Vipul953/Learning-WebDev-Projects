
async function universalFetcher (url, currentCursor, config){

    const seperator = url.includes('?') ? '&' : '?'
    const finalUrl = `${url}${seperator}${config.cursorParam}=${currentCursor || config.initialCursor}`

    const response = await fetch(finalUrl)
    const json = await response.json()

    return {
        data: json[config.dataKey],
        nextCursor: config.deriveNextCursor(json)
    }
}



const pageConfig = {
    dataKey: 'results',
    cursorParam: 'page',
    initialCursor: 1,
    deriveNextCursor: (json) => (json.current_page < json.total_pages ? json.current_page + 1 : null)
}