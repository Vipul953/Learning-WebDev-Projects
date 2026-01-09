
export async function manageDataProvider(fetchFn) {
  let state = {
    data: [],
    loading: false,
    error: null
  }

  async function loadData(){
    state.loading = true

    try {
      const result = await fetchFn();
      state.data = result
      state.error = false       
    } catch (error) {
      console.error(`Error is: ${error}`)  
      state.data = []
    }

    state.loading = false
    return state
  }
  
  await loadData() 
  return state
}

















