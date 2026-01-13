
async function universalFetcher (url, currentCursor, config){

    const seperator = url.includes('?') ? '&' : '?'
    const finalUrl = `${url}${seperator}${config.cursorParam}=${currentCursor || config.initialCursor}`

    try {
        const response = await fetch(finalUrl);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

        const json = await response.json();
        const batchData = json[config.dataKey] || [];

        // If nextCursor at end, make nextCursor: null
        const nextCursor =
          batchData.length > 0 ? config.deriveNextCursor(json) : null;

        return {
          data: batchData,
          nextCursor: nextCursor,
          hasMore: nextCursor !== null && nextCursor !== undefined,
        }  
    } catch (error) {
        console.error("Fetch Failed: ", error)
        return {
            data: [],
            nextCursor: null,
            hasMore: false
        }      
    }
    
}


// example of different pagination configs
const pageConfig = {
    dataKey: 'results',
    cursorParam: 'page',
    initialCursor: 1,
    deriveNextCursor: (json) => (json.current_page < json.total_pages ? json.current_page + 1 : null)
}

const offsetConfig = {
  dataKey: "items",
  cursorParam: "skip",
  initialCursor: 0,
  deriveNextCursor: (json) =>
    (json.skip + json.limit < json.total ? json.skip + json.limit : null)
}

const tokenConfig = {
  dataKey: "data",
  cursorParam: "pageToken",
  initialCursor: "",
  deriveNextCursor: (json) => (json.next_page_token || null)
}

