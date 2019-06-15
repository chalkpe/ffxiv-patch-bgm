export function copyDataset (node, data) {
  for (const [k, v] of Object.entries(data)) {
    if (typeof v === 'string') {
      node.dataset[k] = v
    }
  }

  return node
}