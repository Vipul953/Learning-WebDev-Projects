import { applyLayout } from "./layouts.js";

export function createFeedList({
  container,
  dataProvider,
  mapper,
  createCard,
  layout = "flexWrap",
}) {
  let currentLayout = layout;

  function render() {
    const state = dataProvider.getState();
    container.innerHTML = "";

    // Apply the layout
    applyLayout(container, currentLayout);

    if (state.loading && state.data.length === 0) {
      container.textContent = "Loading...";
      return;
    }

    if (state.error) {
      container.textContent = state.error;
      return;
    }

    if (!state.loading && state.data.length === 0) {
      container.textContent = "No items found";
      return;
    }

    state.data.forEach((rawItem) => {
      const uiItem = mapper(rawItem);
      container.appendChild(createCard(uiItem));
    });

    if (state.hasMore) {
      const btn = document.createElement("button");
      btn.textContent = state.loading ? "Loading..." : "Load more";
      btn.disabled = state.loading;
      btn.onclick = () => dataProvider.nextPage();
      container.appendChild(btn);
    }
  }

  const unsubscribe = dataProvider.subscribe(render);
  render();

  return {
    destroy: unsubscribe,
    setLayout: (newLayout) => {
      currentLayout = newLayout;
      render();
    },
  };
}
