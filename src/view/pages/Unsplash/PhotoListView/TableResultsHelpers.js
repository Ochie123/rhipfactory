export const applyFilters = (results, query, filters) => {
  return results.filter(result => {
    let matches = true

    if (query && !result.user.name.toLowerCase().includes(query.toLowerCase())) {
      matches = false
    }
    return matches
  })
}

export const applyPagination = (results, page, limit) => {
  return results.slice(page * limit, page * limit + limit)
}

