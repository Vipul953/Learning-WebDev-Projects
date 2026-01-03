import { createFeedDataProvider } from "./core/feedDataProvider.js";
import { createFeedList } from "./ui/feedList.js";
import { createCardBase } from "./ui/cardBase.js";
import { mapItem } from "./utils/mapItem.js";

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

createFeedList({
  container: document.getElementById("feed"),
  dataProvider: provider,
  mapper: (raw) => mapItem(raw, mapping),
  createCard: createCardBase,
});

// Wire up search input
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", (e) => {
  provider.applySearch(e.target.value);
});
