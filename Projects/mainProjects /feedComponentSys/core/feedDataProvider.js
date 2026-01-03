import { createEmitter } from "./emitter.js";

export function createFeedDataProvider({
  fetchFn,
  limit = 10,
  debounceMs = 400,
}) {
  const emitter = createEmitter();

  let state = {
    data: [],
    loading: false,
    error: null,
    page: 1,
    hasMore: true,
    filters: {},
    sort: null,
    query: "",
  };

  function notify() {
    emitter.emit();
  }

  async function loadPage(page) {
    state.loading = true;
    state.error = null;
    notify();

    try {
      const result = await fetchFn({
        page,
        limit,
        filters: state.filters,
        sort: state.sort,
        query: state.query,
      });

      state.data = page === 1 ? result : [...state.data, ...result];

      state.hasMore = result.length >= limit;
    } catch (err) {
      state.error = err.message || "Something went wrong";
    }

    state.loading = false;
    notify();
  }

  function refresh() {
    state.page = 1;
    state.hasMore = true;
    loadPage(1);
  }

  function nextPage() {
    if (!state.hasMore || state.loading) return;
    state.page += 1;
    loadPage(state.page);
  }

  let searchTimer;
  function applySearch(query) {
    state.query = query;
    notify();
    clearTimeout(searchTimer);
    searchTimer = setTimeout(refresh, debounceMs);
  }

  loadPage(1);

  return {
    getState: () => state,
    subscribe: emitter.subscribe,
    refresh,
    nextPage,
    applySearch,
  };
}
