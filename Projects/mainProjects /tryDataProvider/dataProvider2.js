let state = {
    data: [],
    loading: false,
    error: false,
    page: 1,
    hasMore: true
}

async function  seeState(fetchFn){
    state.loading = true
    state.error = false 

    try {
        const res = await fetchFn()
        // const filtered = res.products.filter(p => p.id < 3)
        // console.log("products where id<3: ", filtered)
        const data = res.json()

        state.data = res
        state.loading = false
        state.error = false     
    } catch (error) {
        console.error("error:", error)
        state.error =true
        state.loading = false 
    }
    
    

    return {
        getState: () => state,
        
    }
}



async function fetchFn(){
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data
}

seeState(fetchFn)



