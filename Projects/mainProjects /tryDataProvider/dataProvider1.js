function createDataProvider({ fetchFn }) {
    let state = {
      data: [],
      loading: false,
      error: false,
    }

    async function load() {
      state.loading = true;
      state.error = false;

      try {
        const result = await fetchFn();
        state.data = result;
      } catch (error) {
        state.error = true;
        state.data = [];
      }

      state.loading = false;
      return state;
    }

    async function refresh() {
      return load();
    }
    
    const getState = () => state;
    load();
    return {getState, refresh}
}

const provider = createDataProvider({
    fetchFn: async () => {
        const res = await fetch("https://dummyjson.com/products")
        const data = await res.json()
        return data.products
    }
})

console.log(provider.getState()); // shows loading state first

setTimeout(() => {
  console.log(provider.getState()); // shows actual data
}, 2000);



