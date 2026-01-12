// ui/layouts.js
export const layouts = {
  grid: {
    apply: (container) => {
      container.style.display = "grid";
      container.style.gridTemplateColumns =
        "repeat(auto-fill, minmax(300px, 1fr))";
      container.style.gap = "10px";
      container.style.justifyItems = "center";
    },
    name: "Grid",
  },
  list: {
    apply: (container) => {
      container.style.display = "flex";
      container.style.flexDirection = "column";
      container.style.alignItems = "center";
      container.style.gap = "10px";
    },
    name: "List",
  },
  flexWrap: {
    apply: (container) => {
      container.style.display = "flex";
      container.style.flexWrap = "wrap";
      container.style.justifyContent = "center";
      container.style.gap = "10px";
    },
    name: "Flex Wrap",
  },
};

export function applyLayout(container, layoutName) {
  const layout = layouts[layoutName];
  if (layout) {
    layout.apply(container);
  }
}
