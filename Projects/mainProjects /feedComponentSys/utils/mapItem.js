
export function mapItem(rawItem, mapping) {
  const mappedItem = {};

  for (const uiKey in mapping) {
    const dataKey = mapping[uiKey];
    mappedItem[uiKey] = rawItem[dataKey];
  }

  return mappedItem;
}
