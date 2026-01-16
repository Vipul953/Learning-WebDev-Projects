export async function manageDataProvider(fetchFn) {
  let state = {
    data: [],
    loading: false,
    error: null,
    hasMore: true 
  }
  const currentCursor = null
  async function loadMore(currentCursor){ 
    if (state.loading || !state.hasMore) return
    state.loading = true

    try {
      const result = await fetchFn(currentCursor);
      state.data = [...state.data, ...result.data];
      currentCursor = result.nextCursor;
      state.hasMore = result.hasMore;
      state.error = null;  
    } catch (error) {
      console.error(`Error is: ${error}`)
      state.data = []
      state.error = error  
    }
    state.loading = false 
  }

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
    loadMore,
    hasMore: state.hasMore
  }
}
