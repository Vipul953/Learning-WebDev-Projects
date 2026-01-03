export function createCardBase(uiItem) {
  const card = document.createElement("div");
  card.className = "card";

  // Image
  if (uiItem.image) {
    const img = document.createElement("img");
    img.src = uiItem.image;
    img.alt = uiItem.title || "";
    img.className = "card-image";
    card.appendChild(img);
  }

  // Content wrapper
  const content = document.createElement("div");
  content.className = "card-content";

  // Title
  if (uiItem.title) {
    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = uiItem.title;
    content.appendChild(title);
  }

  // Subtitle / description
  if (uiItem.subtitle) {
    const subtitle = document.createElement("p");
    subtitle.className = "card-subtitle";
    subtitle.textContent = uiItem.subtitle;
    content.appendChild(subtitle);
  }

  // Meta (price, date, etc.)
  if (uiItem.meta != null) {
    const meta = document.createElement("span");
    meta.className = "card-meta";
    meta.textContent = uiItem.meta;
    content.appendChild(meta);
  }

  card.appendChild(content);
  return card;
}
