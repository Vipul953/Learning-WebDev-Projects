export async function manageDataProvider(fetchFn) {
  let state = {
    data: [],
    loading: false,
    error: null,
  };

  async function loadData() {
    state.loading = true;
    state.data = []; // Reset data for fresh load

    let currentCursor = null;

    try {
      while (true) {
        const result = await fetchFn(currentCursor);
        state.data = state.data.concat(result.data);

        if (!result.hasMore) break;
        currentCursor = result.nextCursor;
      }

      state.error = null;
    } catch (error) {
      console.error(`Error is: ${error}`);
      state.data = [];
      state.error = error;
    }

    state.loading = false;
    return state;
  }

  await loadData();
  return state;
}
