import { manageDataProvider } from "./manageDataProvider.js";
import { universalFetcher } from "./universalFetcher.js";

const config = {
  dataKey: "products",
  cursorParam: "skip",
  initialCursor: 0,
  deriveNextCursor: (json) =>
    json.skip + json.limit < json.total ? json.skip + json.limit : null,
};

const url = "https://dummyjson.com/products?limit=10";
const fetchData = async (cursor) => await universalFetcher(url, cursor, config);

let provider;
let container;
let spacer;
let sentinel;
let itemHeight = 100;
let visibleCount = 0;
let scrollTop = 0;

function renderVisibleItems() {
  // Remove only item divs, keep spacer
  document.querySelectorAll(".item").forEach((el) => el.remove());
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(startIndex + visibleCount, provider.data.length);
  for (let i = startIndex; i < endIndex; i++) {
    const item = document.createElement("div");
    item.className = "item";
    const product = provider.data[i];
    item.innerHTML = `
      <img class="item-image" src="${product?.thumbnail || ""}" alt="${product?.title || "Product"}" onerror="this.style.display='none'">
      <div class="item-content">
        <div class="item-title">${product?.title || "Loading..."}</div>
        <div class="item-meta">
          <span class="item-price">$${product?.price?.toFixed(2) || "N/A"}</span>
          <span class="item-rating">⭐ ${product?.rating || "N/A"}</span>
          <span class="item-category">${product?.category || "N/A"}</span>
        </div>
      </div>
    `;
    item.style.top = `${i * itemHeight}px`;
    container.appendChild(item);
  }
  spacer.style.height = `${provider.data.length * itemHeight}px`;
  sentinel.style.top = `${provider.data.length * itemHeight}px`;
}

async function init() {
  provider = await manageDataProvider(fetchData);
  container = document.getElementById("list-container");
  spacer = document.getElementById("spacer");
  sentinel = document.getElementById("sentinel");
  visibleCount = Math.ceil(container.clientHeight / itemHeight);
  await provider.loadMore();
  renderVisibleItems();

  const observer = new IntersectionObserver(async (entries) => {
    if (entries[0].isIntersecting && provider.hasMore) {
      await provider.loadMore();
      renderVisibleItems();
    }
  });
  observer.observe(sentinel);

  container.addEventListener("scroll", () => {
    scrollTop = container.scrollTop;
    renderVisibleItems();
  });
}

init();
