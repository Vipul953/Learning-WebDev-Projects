function createPaginatedDataProvider({ fetchFn, limit = 10 }) {
  let state = {
    data: [],
    loading: false,
    error: null,
    page: 1,
    hasMore: true,
  };

  async function loadPage(page) {
    state.loading = true;
    state.error = null;

    try {
      const result = await fetchFn({ page, limit });
      if (page === 1) {
        // First page → replace data
        state.data = result;
      } else {
        // Next page → append data
        state.data = [...state.data, ...result];
      }
      // If results are less than limit → no more data
      if (result.length < limit) {
        state.hasMore = false;
      }
    } catch (err) {
      state.error = err.message || "Something went wrong";
    }
    state.loading = false;
    return state;
  }

  async function refresh() {
    state.page = 1;
    state.hasMore = true
    return await loadPage(1);
  }

  async function nextPage() {
    if (!state.hasMore) return state;
    state.page += 1;
    return await loadPage(state.page);
  }

  // initial load
  loadPage(1);

  return {
    getState: () => state,
    refresh,
    nextPage,
  };
}

const provider = createPaginatedDataProvider({
  fetchFn: async ({ page, limit }) => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`
    )
    const data = await res.json();
    return data.products;
  },
  limit: 5,
});

// page 1 is loaded automatically
setTimeout(() => {
  console.log("Page 1:", provider.getState());
}, 1000);

// load next page
setTimeout(async () => {
  await provider.nextPage();
  console.log("Page 2:", provider.getState());
}, 2000);
