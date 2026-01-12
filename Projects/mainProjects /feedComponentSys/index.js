import { createFeedDataProvider } from "./core/feedDataProvider.js";
import { createFeedList } from "./ui/feedList.js";
import { createCardBase } from "./ui/cardBase.js";
import { mapItem } from "./utils/mapItem.js";
import { layouts } from "./ui/layouts.js";

const provider = createFeedDataProvider({
  fetchFn: async ({ page, limit }) => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${
          (page - 1) * limit
        }`
      );
      if (!res.ok) throw new Error("Fetch failed");
      const data = await res.json();
      return data.products;
    } catch (err) {
      throw err;
    }
  },
});

const mapping = {
  title: "title",
  subtitle: "description",
  meta: "price",
  image: "thumbnail",
};

const feedList = createFeedList({
  container: document.getElementById("feed"),
  dataProvider: provider,
  mapper: (raw) => mapItem(raw, mapping),
  createCard: createCardBase,
  layout: "flexWrap",
});

// Add layout selector
const layoutSelector = document.createElement("div");
layoutSelector.className = "layout-selector";
layoutSelector.innerHTML = `
  <label for="layout-select">Layout: </label>
  <select id="layout-select">
    ${Object.keys(layouts)
      .map((key) => `<option value="${key}">${layouts[key].name}</option>`)
      .join("")}
  </select>
`;
document.body.insertBefore(layoutSelector, document.getElementById("feed"));

const select = document.getElementById("layout-select");
select.value = "flexWrap";
select.addEventListener("change", (e) => {
  feedList.setLayout(e.target.value);
});

// Wire up search input
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", (e) => {
  provider.applySearch(e.target.value);
});
