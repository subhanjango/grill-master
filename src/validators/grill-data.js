let rule = {
  'grill' : 'required',
  'grill.width' : 'required|min:50|max:500|integer',
  'grill.height' : 'required|min:50|max:500|integer',
  'grill.grillItems' : 'required:array',
  'grill.grillItems.*.width' : 'required|min:1|max:500|integer',
  'grill.grillItems.*.height' : 'required|min:1|max:500|integer',
  'grill.grillItems.*.count' : 'required|integer|min:1',
  'grill.grillItems.*.title' : 'required|string',
}

module.exports = rule