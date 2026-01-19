export async function manageDataProvider(fetchFn) {
  let state = {
    data: [],
    loading: false,
    error: null,
    hasMore: true,
  };
  const currentCursor = null;
  async function loadMore(currentCursor) {
    if (state.loading || !state.hasMore) return;
    state.loading = true;

    try {
      const result = await fetchFn(currentCursor);
      state.data = [...state.data, ...result.data];
      currentCursor = result.nextCursor;
      state.hasMore = result.hasMore;
      state.error = null;
    } catch (error) {
      console.error(`Error is: ${error}`);
      state.data = [];
      state.error = error;
    }
    state.loading = false;
  }

  return {
    get data() {
      return state.data;
    },
    get loading() {
      return state.loading;
    },
    get error() {
      return state.error;
    },
    get hasMore() {
      return state.hasMore;
    },
    loadMore,
  };
}
