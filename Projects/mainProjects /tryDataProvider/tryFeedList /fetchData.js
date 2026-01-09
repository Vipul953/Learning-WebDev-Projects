import { manageDataProvider } from "./manageDataProvider.js";

const fetchData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
};

(async () => {
  const dataProvider = await manageDataProvider(fetchData);
  console.log(dataProvider);
})();

