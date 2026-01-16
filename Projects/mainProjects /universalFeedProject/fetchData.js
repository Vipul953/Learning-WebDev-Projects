import { manageDataProvider } from "./manageDataProvider.js";
import { universalFetcher } from "./universalFetcher.js";

const config = {
  dataKey: "products",
  cursorParam: "skip",
  initialCursor: 0,
  deriveNextCursor: (json) =>
    json.skip + json.limit < json.total ? json.skip + json.limit : null,
};

const fetchData = async (currentCursor) => {
  const result = await universalFetcher(
    "https://dummyjson.com/products?limit=10",
    currentCursor,
    config
  );
  return result;
};

(async () => {
  const dataProvider = await manageDataProvider(fetchData);
  await dataProvider.loadMore() // Load First batch
  console.log(dataProvider);
})();
